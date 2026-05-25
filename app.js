// Aplikace Patofyziologie SPA - Klientský kód
document.addEventListener("DOMContentLoaded", () => {
  // --- INICIALIZACE STAVU ---
  const state = {
    questions: window.COMPLETE_QUESTIONS || [],
    userProgress: JSON.parse(localStorage.getItem("pathophys_progress")) || {},
    userNotes: JSON.parse(localStorage.getItem("pathophys_notes")) || {},
    quizStats: JSON.parse(localStorage.getItem("pathophys_quiz")) || { correctCount: 0, totalCount: 0 },
    theme: localStorage.getItem("pathophys_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    activeQuestion: null,
    activeTab: "panel-study"
  };

  // Uložení výchozího stavu do localStorage, pokud neexistuje
  const saveState = () => {
    localStorage.setItem("pathophys_progress", JSON.stringify(state.userProgress));
    localStorage.setItem("pathophys_notes", JSON.stringify(state.userNotes));
    localStorage.setItem("pathophys_quiz", JSON.stringify(state.quizStats));
  };

  // Použití barevného motivu
  if (state.theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  // --- HTML ELEMENTY ---
  const cardsGrid = document.getElementById("cards-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const systemFilter = document.getElementById("system-filter");
  const statusFilter = document.getElementById("status-filter");
  const themeToggle = document.getElementById("theme-toggle");
  
  // Modál
  const detailModal = document.getElementById("detail-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const studyContent = document.getElementById("study-content");
  
  // Editor
  const editorContent = document.getElementById("editor-content");
  const saveNotesBtn = document.getElementById("save-notes-btn");
  const saveStatus = document.getElementById("save-status");
  
  // Kvíz
  const quizContainer = document.getElementById("quiz-container");
  
  // Statistiky
  const statTotal = document.getElementById("stat-total");
  const statMastered = document.getElementById("stat-mastered");
  const statMasteredPct = document.getElementById("stat-mastered-pct");
  const statLearning = document.getElementById("stat-learning");
  const statLearningPct = document.getElementById("stat-learning-pct");
  const statQuizScore = document.getElementById("stat-quiz-score");
  const statQuizCount = document.getElementById("stat-quiz-count");

  // Export / Import
  const exportBtn = document.getElementById("export-btn");
  const importBtn = document.getElementById("import-btn");
  const importFile = document.getElementById("import-file");

  // --- POMOCNÉ FUNKCE PRO GENEROVÁNÍ OBSAHU ---

  // Dynamická šablona výkladu pro otázky bez explicitního detailu
  function getDynamicStudyContent(q) {
    const keywordsHTML = q.keyTerms.map(k => `<li><strong>${k}</strong>: Klíčový patofyziologický koncept.</li>`).join("");
    return `
      <div class="medical-detail">
        <section>
          <h3>1. Obecná charakteristika a definice</h3>
          <p>Téma <strong>${q.title}</strong> představuje důležitou součást patofyziologie. Zahrnuje poruchy homeostázy a buněčných funkcí, které vedou k rozvoji specifických symptomů a komplikací.</p>
        </section>
        
        <section>
          <h3>2. Klíčové etiopatogenetické body</h3>
          <p>Při studiu tohoto tématu je nutné se zaměřit na následující aspekty a mechanismy:</p>
          <ul>
            ${keywordsHTML}
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologická kaskáda (schéma)</h3>
          <pre class="ascii-diagram">
[Vyvolávající příčina / Etiologický faktor]
                 │
                 ▼
     [Funkční / Strukturální změna]
                 │
                 ▼
[Reakce organismu & Kompenzační mechanismy]
                 │
                 ▼
  [Klinické projevy a možné komplikace]
          </pre>
        </section>
        
        <section>
          <h3>3. Klinické projevy a diagnostika</h3>
          <p>Klinický obraz se odvíjí od závažnosti postižení a rychlosti rozvoje poruchy. Diagnostika se opírá o kombinaci klinického vyšetření, laboratorních testů (funkční vyšetření, markery poškození) a zobrazovacích metod.</p>
          <blockquote>
            <strong>Tip pro studenty:</strong> V záložce <em>"Moje poznámky"</em> si můžete sepsat vlastní podrobné výpisky z přednášek či učebnice. Vaše poznámky budou trvale uloženy v tomto prohlížeči.
          </blockquote>
        </section>
      </div>
    `;
  }

  // Dynamický kvíz pro otázky bez explicitního kvízu
  function getDynamicQuiz(q) {
    const term1 = q.keyTerms[0] || "Etiopatogeneze";
    const term2 = q.keyTerms[1] || "Klinický obraz";
    const term3 = q.keyTerms[2] || "Diagnostika";

    return [
      {
        question: `Který z následujících konceptů je primárním patofyziologickým rysem tématu "${q.title}"?`,
        options: [
          `Abnormální proces spojený s: ${term1}`,
          "Náhlá nadprodukce kortizolu bez zpětné vazby",
          "Selektivní ztráta chuti k jídlu",
          "Fibrotizace nehtového lůžka"
        ],
        correct: 0,
        explanations: [
          `Správně! ${term1} představuje klíčový pilíř patogeneze u tohoto tématu.`,
          "Nesprávně. Toto je specifický projev Cushingova syndromu.",
          "Nesprávně. Anorexie může doprovázet chronické nemoci, ale není primárním rysem.",
          "Nesprávně. Toto není patofyziologický nález u této otázky."
        ]
      },
      {
        question: `Který z následujících projevů je bezprostředně spojen s: "${term2}"?`,
        options: [
          "Hypertrofie nehtů",
          `Klinické a patofyziologické změny v rámci konceptu: ${term2}`,
          "Zvýšení sekrece enzymu reninu v plicích",
          "Kompletní blokáda glukózových transportérů GLUT-1 v erytrocytech"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hypertrofie nehtů sem nepatří.",
          `Správně! ${term2} přímo ovlivňuje klinické symptomy a průběh onemocnění u pacienta.`,
          "Nesprávně. Renin je syntetizován v juxtaglomerulárním aparátu ledvin, nikoli v plicích (v plicích je ACE).",
          "Nesprávně. Transportéry GLUT-1 v erytrocytech nejsou u tohoto stavu typicky blokovány."
        ]
      },
      {
        question: `Jaký je význam parametru "${term3}" v kontextu studovaného tématu?`,
        options: [
          "Jedná se o kosmetický ukazatel bez klinického dopadu.",
          "Slouží jako vedlejší symptom bez patogenetické role.",
          `Představuje důležitý bod pro diagnostiku, pochopení rozvoje a následků: ${term3}`,
          "Způsobuje okamžitý rozpad hemoglobinových řetězců."
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Jde o významný medicínský koncept.",
          "Nesprávně. Tento bod má zásadní patogenetický a klinický význam.",
          `Správně! Identifikace a pochopení ${term3} je nezbytné pro správné určení diagnózy a vedení patofyziologické úvahy.`,
          "Nesprávně. K rozpadu hemoglobinu dochází při specifických hemolytických stavech."
        ]
      }
    ];
  }

  // --- AKTUALIZACE STATISTIK ---
  const updateDashboard = () => {
    const total = state.questions.length;
    let masteredCount = 0;
    let learningCount = 0;

    Object.values(state.userProgress).forEach(status => {
      if (status === "mastered") masteredCount++;
      if (status === "learning") learningCount++;
    });

    const masteredPct = Math.round((masteredCount / total) * 100) || 0;
    const learningPct = Math.round((learningCount / total) * 100) || 0;

    // Zápis do UI
    statTotal.textContent = total;
    statMastered.textContent = masteredCount;
    statMasteredPct.textContent = `${masteredPct} % z celkového počtu`;
    statLearning.textContent = learningCount;
    statLearningPct.textContent = `${learningPct} % z celkového počtu`;

    // Kvízové skóre
    if (state.quizStats.totalCount > 0) {
      const scorePct = Math.round((state.quizStats.correctCount / state.quizStats.totalCount) * 100);
      statQuizScore.textContent = `${scorePct} %`;
      statQuizCount.textContent = `Zodpovězeno ${state.quizStats.totalCount} otázek (${state.quizStats.correctCount} správně)`;
    } else {
      statQuizScore.textContent = "0 %";
      statQuizCount.textContent = "Zodpovězeno 0 otázek";
    }
  };

  // --- RENDER KARET ---
  const renderCards = () => {
    cardsGrid.innerHTML = "";
    
    const searchVal = searchInput.value.toLowerCase().trim();
    const catVal = categoryFilter.value;
    const systemVal = systemFilter.value;
    const statVal = statusFilter.value;

    const filtered = state.questions.filter(q => {
      // 1. Filtr kategorie
      if (catVal !== "all" && q.category !== catVal) return false;

      // 2. Filtr orgánového systému
      if (systemVal !== "all" && q.organSystem !== systemVal) return false;

      // 3. Filtr stavu pokroku
      const currentStatus = state.userProgress[q.id] || "not-started";
      if (statVal !== "all" && currentStatus !== statVal) return false;

      // 3. Vyhledávací filtr
      if (searchVal) {
        const titleMatch = q.title.toLowerCase().includes(searchVal);
        const keywordMatch = q.keyTerms.some(k => k.toLowerCase().includes(searchVal));
        const notesMatch = (state.userNotes[q.id] || "").toLowerCase().includes(searchVal);
        if (!titleMatch && !keywordMatch && !notesMatch) return false;
      }

      return true;
    });

    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; color: var(--text-muted);"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          <h3>Nebyly nalezeny žádné otázky</h3>
          <p style="margin-top: 8px;">Zkuste upravit vyhledávaný výraz nebo filtry.</p>
          <button id="reset-filters-btn" class="btn btn-primary" style="margin-top: 16px;">Obnovit filtry</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filters-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchInput.value = "";
          categoryFilter.value = "all";
          systemFilter.value = "all";
          statusFilter.value = "all";
          renderCards();
        });
      }
      return;
    }

    filtered.forEach((q, index) => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";
      
      const currentStatus = state.userProgress[q.id] || "not-started";
      let statusLabel = "Nezačato";
      let statusClass = "";
      if (currentStatus === "mastered") {
        statusLabel = "Umím";
        statusClass = "status-mastered";
      } else if (currentStatus === "learning") {
        statusLabel = "Učím se";
        statusClass = "status-learning";
      }

      const keywordsTags = q.keyTerms.map(k => `<span class="keyword-tag">${k}</span>`).join("");
      
      let catClass = "";
      if (q.category === "Speciální II.") catClass = "cat-ii";
      else if (q.category === "Praktická") catClass = "cat-pract";

      cardContainer.innerHTML = `
        <div class="card-inner" data-id="${q.id}">
          <!-- Přední strana -->
          <div class="card-front">
            <div class="card-badges">
              <span class="card-category ${catClass}">${q.category}</span>
              <span class="card-system-badge">${q.organSystem}</span>
            </div>
            <h3 class="card-title">${q.title}</h3>
            
            <div class="card-footer">
              <div class="card-status-badge">
                <span class="status-dot ${statusClass}"></span>
                <span>${statusLabel}</span>
              </div>
              <div class="card-actions">
                <button class="btn btn-secondary btn-flip-trigger" title="Zobrazit klíčové pojmy">Otočit</button>
                <button class="btn btn-primary btn-study-trigger">Studovat</button>
              </div>
            </div>
          </div>
          
          <!-- Zadní strana -->
          <div class="card-back">
            <div>
              <div class="card-back-title">Klíčové pojmy a synopse</div>
              <div class="keywords-list">
                ${keywordsTags}
              </div>
            </div>
            
            <div class="card-footer">
              <button class="btn btn-secondary btn-flip-back" title="Zpět na název">Zpět</button>
              <button class="btn btn-primary btn-study-trigger">Studovat</button>
            </div>
          </div>
        </div>
      `;

      // Event Listeners pro kartu
      const cardInner = cardContainer.querySelector(".card-inner");
      
      // Otáčení karty na kliknutí na tlačítko "Otočit" / "Zpět" nebo na samotnou kartu
      cardInner.addEventListener("click", (e) => {
        // Zabráníme otáčení, pokud uživatel klikl na tlačítko "Studovat"
        if (e.target.classList.contains("btn-study-trigger")) {
          e.stopPropagation();
          openModal(q.id);
          return;
        }

        // Tlačítko flip
        if (e.target.classList.contains("btn-flip-trigger") || e.target.classList.contains("btn-flip-back")) {
          e.stopPropagation();
          cardInner.classList.toggle("flipped");
          return;
        }

        // Pokud klikne kamkoliv na tělo karty (kromě tlačítek v patce)
        if (!e.target.closest(".card-footer")) {
          cardInner.classList.toggle("flipped");
        }
      });

      cardsGrid.appendChild(cardContainer);
    });
  };

  // --- MODÁLNÍ OKNO / OTEVŘENÍ DETAILU ---
  const openModal = (id) => {
    const q = state.questions.find(item => item.id === id);
    if (!q) return;

    state.activeQuestion = q;
    
    // Nastavení hlavičky
    modalCategory.textContent = `${q.category.toUpperCase()} | ${q.organSystem.toUpperCase()}`;
    if (q.category === "Speciální II.") {
      modalCategory.className = "modal-category cat-ii";
      modalCategory.style.color = "#8b5cf6";
    } else if (q.category === "Praktická") {
      modalCategory.className = "modal-category cat-pract";
      modalCategory.style.color = "#0ea5e9";
    } else {
      modalCategory.className = "modal-category";
      modalCategory.style.color = "var(--color-primary)";
    }
    modalTitle.textContent = q.title;

    // Vyčištění panelu a přepnutí na první záložku
    switchTab("panel-study");

    // Načtení výkladu
    if (q.detailContent) {
      studyContent.innerHTML = q.detailContent;
    } else {
      studyContent.innerHTML = getDynamicStudyContent(q);
    }

    // Načtení poznámek do editoru
    editorContent.innerHTML = state.userNotes[q.id] || "";

    // Nastavení stavu učení v modálu
    const currentStatus = state.userProgress[q.id] || "not-started";
    const statusBtns = document.querySelectorAll(".status-btn");
    statusBtns.forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-status") === currentStatus) {
        btn.classList.add("active");
      }
    });

    // Vygenerování kvízu
    renderQuiz(q);

    // Zobrazení modálu
    detailModal.showModal();
    document.body.style.overflow = "hidden"; // Zamezení rolování pozadí
  };

  const closeModal = () => {
    detailModal.close();
    state.activeQuestion = null;
    document.body.style.overflow = ""; // Obnovení rolování
    renderCards();
    updateDashboard();
  };

  modalClose.addEventListener("click", closeModal);

  // Zavření kliknutím mimo obsah dialogu (na backdrop)
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) {
      closeModal();
    }
  });

  // --- LOGIKA ZÁLOŽEK ---
  const switchTab = (tabId) => {
    state.activeTab = tabId;
    
    // Deaktivace všech tlačítek a panelů
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      }
    });

    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.remove("active");
    });

    // Aktivace zvoleného panelu
    const activePanel = document.getElementById(tabId);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  };

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // --- LOGIKA STAVU UČENÍ (V MODÁLU) ---
  document.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!state.activeQuestion) return;

      const newStatus = btn.getAttribute("data-status");
      state.userProgress[state.activeQuestion.id] = newStatus;
      saveState();

      // Vizuální zpětná vazba v modálu
      document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // --- BOHATÝ TEXTOVÝ EDITOR (WYSIWYG) ---
  document.querySelectorAll(".editor-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const command = btn.getAttribute("data-command");
      const value = btn.getAttribute("data-value") || null;
      
      // Spustit formátovací příkaz na contenteditable elementu
      document.execCommand(command, false, value);
      editorContent.focus();
    });
  });

  // Automatické ukládání poznámek při psaní (s debounce efektem)
  let saveTimeout;
  editorContent.addEventListener("input", () => {
    if (!state.activeQuestion) return;

    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      state.userNotes[state.activeQuestion.id] = editorContent.innerHTML;
      saveState();
      
      // Zobrazit informaci o automatickém uložení
      saveStatus.classList.add("show");
      setTimeout(() => {
        saveStatus.classList.remove("show");
      }, 2000);
    }, 1000);
  });

  // Manuální uložení poznámek
  saveNotesBtn.addEventListener("click", () => {
    if (!state.activeQuestion) return;

    state.userNotes[state.activeQuestion.id] = editorContent.innerHTML;
    saveState();
    
    // Zobrazit informaci o uložení
    saveStatus.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      Uloženo úspěšně
    `;
    saveStatus.classList.add("show");
    
    setTimeout(() => {
      saveStatus.classList.remove("show");
      // Vrátit původní text
      setTimeout(() => {
        saveStatus.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Změny automaticky uloženy
        `;
      }, 300);
    }, 2000);
  });

  // --- LOGIKA INTERAKTIVNÍHO KVÍZU ---
  const renderQuiz = (q) => {
    quizContainer.innerHTML = "";
    const quizQuestions = q.quiz || getDynamicQuiz(q);

    quizQuestions.forEach((item, questionIndex) => {
      const quizCard = document.createElement("div");
      quizCard.className = "quiz-card";
      
      const optionsHTML = item.options.map((opt, optIndex) => {
        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
        return `
          <button class="quiz-option" data-question-idx="${questionIndex}" data-opt-idx="${optIndex}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </button>
        `;
      }).join("");

      quizCard.innerHTML = `
        <div class="quiz-question">${questionIndex + 1}. ${item.question}</div>
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        <div class="quiz-explanation-container" id="explanation-${questionIndex}"></div>
      `;

      // Event listener pro volbu odpovědi
      const optionsButtons = quizCard.querySelectorAll(".quiz-option");
      let questionAnswered = false;

      optionsButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          if (questionAnswered) return; // Zamezení opakovanému klikání

          questionAnswered = true;
          const optIdx = parseInt(btn.getAttribute("data-opt-idx"));
          const isCorrect = optIdx === item.correct;

          // Vypnutí všech možností v této otázce
          optionsButtons.forEach(b => b.classList.add("disabled"));

          // Zvýraznění správné a nesprávné odpovědi
          if (isCorrect) {
            btn.classList.add("correct");
            // Kvízové statistiky - připočtení
            state.quizStats.correctCount++;
            state.quizStats.totalCount++;
          } else {
            btn.classList.add("incorrect");
            // Zvýrazníme správnou zeleně, aby student věděl, co bylo správně
            optionsButtons[item.correct].classList.add("correct");
            state.quizStats.totalCount++;
          }

          saveState();
          updateDashboard();

          // Zobrazení detailního vysvětlení
          const expContainer = quizCard.querySelector(`#explanation-${questionIndex}`);
          const explanationText = item.explanations ? item.explanations[optIdx] : (isCorrect ? "Správná patofyziologická úvaha!" : "Nesprávná úvaha. Přečtěte si výklad k tématu.");
          
          expContainer.innerHTML = `
            <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
              <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${explanationText}
            </div>
          `;
        });
      });

      quizContainer.appendChild(quizCard);
    });
  };

  // --- FILTROVÁNÍ A HLEDÁNÍ ---
  searchInput.addEventListener("input", renderCards);
  categoryFilter.addEventListener("change", renderCards);
  systemFilter.addEventListener("change", renderCards);
  statusFilter.addEventListener("change", renderCards);

  // --- PŘEPÍNAČ TÉMATU ---
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      state.theme = "light";
    } else {
      document.body.classList.add("dark-mode");
      state.theme = "dark";
    }
    localStorage.setItem("pathophys_theme", state.theme);
  });

  // --- EXPORT A IMPORT DAT ---
  exportBtn.addEventListener("click", () => {
    const exportData = {
      progress: state.userProgress,
      notes: state.userNotes,
      quiz: state.quizStats
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "patofyziologie_studijni_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  importBtn.addEventListener("click", () => {
    importFile.click();
  });

  importFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        
        if (imported.progress) state.userProgress = imported.progress;
        if (imported.notes) state.userNotes = imported.notes;
        if (imported.quiz) state.quizStats = imported.quiz;

        saveState();
        alert("Data byla úspěšně importována. Stránka se nyní obnoví.");
        window.location.reload();
      } catch (err) {
        alert("Chyba při čtení souboru. Ujistěte se, že jde o platný JSON exportovaný z této aplikace.");
      }
    };
    reader.readAsText(file);
  });

  // --- INICIALIZACE STRÁNKY ---
  renderCards();
  updateDashboard();
});
