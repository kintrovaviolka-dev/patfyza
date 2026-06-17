// Aplikace Patofyziologie SPA - Klientský kód
document.addEventListener("DOMContentLoaded", () => {
  // --- BEZPEČNÉ ÚLOŽIŠTĚ (LOCALSTORAGE WRAPPER) ---
  const StorageUtil = {
    save(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.error("Chyba při zápisu do localStorage:", e);
        return false;
      }
    },
    load(key, defaultValue) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error("Chyba při čtení z localStorage:", e);
        return defaultValue;
      }
    }
  };

  // --- INICIALIZACE STAVU ---
  const state = {
    questions: window.COMPLETE_QUESTIONS || [],
    userProgress: StorageUtil.load("pathophys_progress", {}),
    userNotes: StorageUtil.load("pathophys_notes", {}),
    quizStats: StorageUtil.load("pathophys_quiz", { correctCount: 0, totalCount: 0 }),
    
    // Nové datové struktury pro sledování pokroku a chyb na úrovni podotázek
    completedQuestions: StorageUtil.load("pathophys_completed", {}),
    wrongQuestions: StorageUtil.load("pathophys_wrong", {}),
    savedSessions: StorageUtil.load("pathophys_sessions", null),

    theme: localStorage.getItem("pathophys_theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    activeQuestion: null,
    activeTab: "panel-study"
  };

  // Uložení výchozího stavu do localStorage
  const saveState = () => {
    StorageUtil.save("pathophys_progress", state.userProgress);
    StorageUtil.save("pathophys_notes", state.userNotes);
    StorageUtil.save("pathophys_quiz", state.quizStats);
    StorageUtil.save("pathophys_completed", state.completedQuestions);
    StorageUtil.save("pathophys_wrong", state.wrongQuestions);
    StorageUtil.save("pathophys_sessions", state.savedSessions);
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

  // --- DETAILED MEDICAL CONTENT LOADED MODULARLY FROM SCRIPTS ---

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

    // Celkový počet chyb v aplikaci
    const totalMistakes = Object.keys(state.wrongQuestions).length;
    const statMistakesEl = document.getElementById("stat-mistakes");
    const statMistakesDescEl = document.getElementById("stat-mistakes-desc");
    const btnMistakesCountEl = document.getElementById("btn-mistakes-count");
    
    if (statMistakesEl) statMistakesEl.textContent = totalMistakes;
    if (statMistakesDescEl) {
      statMistakesDescEl.textContent = totalMistakes > 0 ? "Kliknutím spustíte Smart Review" : "Žádné nevyřešené chyby";
    }
    if (btnMistakesCountEl) btnMistakesCountEl.textContent = totalMistakes;

    // Klientská analytika podle kategorií
    const categories = [
      { id: "Obecná", label: "Obecná patofyziologie" },
      { id: "Speciální I.", label: "Speciální I." },
      { id: "Speciální II.", label: "Speciální II." },
      { id: "Praktická", label: "Praktická témata" }
    ];

    const analyticsGrid = document.getElementById("analytics-grid");
    if (analyticsGrid) {
      analyticsGrid.innerHTML = "";
      
      categories.forEach(cat => {
        const catQuestions = state.questions.filter(q => q.category === cat.id);
        
        let totalSubQuestions = 0;
        let completedSubQuestions = 0;
        let correctSubQuestions = 0;
        let categoryMistakes = 0;

        catQuestions.forEach(q => {
          const quizQuestions = q.quiz || [];
          totalSubQuestions += quizQuestions.length;
          
          quizQuestions.forEach((item, questionIndex) => {
            const subQId = `${q.id}_q${questionIndex}`;
            if (state.completedQuestions[subQId]) {
              completedSubQuestions++;
              if (state.completedQuestions[subQId].isCorrect) {
                correctSubQuestions++;
              }
            }
            if (state.wrongQuestions[subQId]) {
              categoryMistakes++;
            }
          });
        });

        const completionPct = totalSubQuestions > 0 ? Math.round((completedSubQuestions / totalSubQuestions) * 100) : 0;
        const accuracyPct = completedSubQuestions > 0 ? Math.round((correctSubQuestions / completedSubQuestions) * 100) : 0;

        let badgeClass = "badge-red";
        if (accuracyPct >= 80) {
          badgeClass = "badge-green";
        } else if (accuracyPct >= 50) {
          badgeClass = "badge-orange";
        }

        const card = document.createElement("div");
        card.className = "category-card";
        card.innerHTML = `
          <div class="category-header">
            <span class="category-name">${cat.label}</span>
            <span class="accuracy-badge ${badgeClass}">${completedSubQuestions > 0 ? accuracyPct + ' %' : 'N/A'}</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${completionPct}%;"></div>
          </div>
          <div class="category-footer">
            <span class="completed-text">${completionPct}% (${completedSubQuestions} / ${totalSubQuestions})</span>
            <span class="mistakes-count ${categoryMistakes === 0 ? 'zero' : ''}">${categoryMistakes} chyb</span>
          </div>
        `;
        analyticsGrid.appendChild(card);
      });
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
      else if (q.category === "Obecná") catClass = "cat-gen";

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
    StorageUtil.save("pathophys_active_q", q.id);
    
    // Nastavení hlavičky
    modalCategory.textContent = `${q.category.toUpperCase()} | ${q.organSystem.toUpperCase()}`;
    if (q.category === "Speciální II.") {
      modalCategory.className = "modal-category cat-ii";
      modalCategory.style.color = "#8b5cf6";
    } else if (q.category === "Praktická") {
      modalCategory.className = "modal-category cat-pract";
      modalCategory.style.color = "#0ea5e9";
    } else if (q.category === "Obecná") {
      modalCategory.className = "modal-category cat-gen";
      modalCategory.style.color = "#10b981";
    } else {
      modalCategory.className = "modal-category";
      modalCategory.style.color = "var(--color-primary)";
    }
    modalTitle.textContent = q.title;

    // Přepnutí na uloženou záložku nebo výchozí studium
    const lastTab = StorageUtil.load("pathophys_active_tab", "panel-study");
    switchTab(lastTab);

    // Načtení výkladu
    studyContent.innerHTML = q.detailContent || "";

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
    StorageUtil.save("pathophys_active_q", null);
    document.body.style.overflow = ""; // Obnovení rolování
    if (window.destroyEkgSimulation) {
      window.destroyEkgSimulation('quiz-ekg-canvas');
    }
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
    StorageUtil.save("pathophys_active_tab", tabId);
    
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

    // Dynamic EKG rendering toggle on tab switch to optimize CPU usage on mobile/iPad
    if (tabId === "panel-quiz") {
      const q = state.activeQuestion;
      if (q && q.quiz) {
        q.quiz.forEach(item => {
          if (item.ekgConfig && window.initEkgSimulation) {
            setTimeout(() => {
              window.initEkgSimulation('quiz-ekg-canvas', item.ekgConfig);
            }, 50);
          }
        });
      }
    } else {
      if (window.destroyEkgSimulation) {
        window.destroyEkgSimulation('quiz-ekg-canvas');
      }
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
    if (window.destroyEkgSimulation) {
      window.destroyEkgSimulation('quiz-ekg-canvas');
    }
    quizContainer.innerHTML = "";
    const quizQuestions = q.quiz || [];

    quizQuestions.forEach((item, questionIndex) => {
      const subQId = `${q.id}_q${questionIndex}`;
      const savedAnswer = state.completedQuestions[subQId];
      const hasAnswered = !!savedAnswer;

      const quizCard = document.createElement("div");
      quizCard.className = "quiz-card";
      
      const optionsHTML = item.options.map((opt, optIndex) => {
        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
        
        let extraClasses = "";
        if (hasAnswered) {
          extraClasses += " disabled";
          if (optIndex === item.correct) {
            extraClasses += " correct";
          } else if (optIndex === savedAnswer.answeredIndex && !savedAnswer.isCorrect) {
            extraClasses += " incorrect";
          }
        }

        return `
          <button class="quiz-option${extraClasses}" data-question-idx="${questionIndex}" data-opt-idx="${optIndex}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </button>
        `;
      }).join("");

      const ekgCanvasHTML = item.ekgConfig ? `<canvas id="quiz-ekg-canvas"></canvas>` : "";

      quizCard.innerHTML = `
        <div class="quiz-question">${questionIndex + 1}. ${item.question}</div>
        ${ekgCanvasHTML}
        <div class="quiz-options">
          ${optionsHTML}
        </div>
        <div class="quiz-explanation-container" id="explanation-${questionIndex}"></div>
      `;

      const expContainer = quizCard.querySelector(`#explanation-${questionIndex}`);
      if (hasAnswered) {
        const isCorrect = savedAnswer.isCorrect;
        const optIdx = savedAnswer.answeredIndex;
        const explanationText = item.explanations ? item.explanations[optIdx] : (isCorrect ? "Správná patofyziologická úvaha!" : "Nesprávná úvaha. Přečtěte si výklad k tématu.");
        expContainer.innerHTML = `
          <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${explanationText}
          </div>
        `;
      }

      // Event listener pro volbu odpovědi
      const optionsButtons = quizCard.querySelectorAll(".quiz-option");
      let questionAnswered = hasAnswered;

      optionsButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          if (questionAnswered) return; // Zamezení opakovanému klikání

          questionAnswered = true;
          const optIdx = parseInt(btn.getAttribute("data-opt-idx"));
          const isCorrect = optIdx === item.correct;

          // Uložit do stavu
          state.completedQuestions[subQId] = {
            answeredIndex: optIdx,
            isCorrect: isCorrect
          };

          if (isCorrect) {
            delete state.wrongQuestions[subQId];
          } else {
            state.wrongQuestions[subQId] = true;
          }

          // Vypnutí všech možností v této otázce
          optionsButtons.forEach(b => b.classList.add("disabled"));

          // Zvýraznění správné a nesprávné odpovědi
          if (isCorrect) {
            btn.classList.add("correct");
            triggerConfetti(btn);
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
          const explanationText = item.explanations ? item.explanations[optIdx] : (isCorrect ? "Správná patofyziologická úvaha!" : "Nesprávná úvaha. Přečtěte si výklad k tématu.");
          
          expContainer.innerHTML = `
            <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
              <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${explanationText}
            </div>
          `;
        });
      });

      quizContainer.appendChild(quizCard);

      // Initialize quiz EKG animation if present in configuration and quiz panel is active
      if (item.ekgConfig && window.initEkgSimulation && state.activeTab === "panel-quiz") {
        window.initEkgSimulation('quiz-ekg-canvas', item.ekgConfig);
      }
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
      quiz: state.quizStats,
      completedQuestions: state.completedQuestions,
      wrongQuestions: state.wrongQuestions,
      savedSessions: state.savedSessions
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
        
        const isObj = (obj) => obj !== null && typeof obj === "object" && !Array.isArray(obj);

        if (!isObj(imported)) throw new Error("Invalid format");

        if (imported.progress !== undefined) {
          if (!isObj(imported.progress)) throw new Error("Invalid progress format");
          for (const key of Object.keys(imported.progress)) {
             if (typeof imported.progress[key] !== "string") throw new Error("Invalid progress value");
          }
          state.userProgress = imported.progress;
        }

        if (imported.notes !== undefined) {
          if (!isObj(imported.notes)) throw new Error("Invalid notes format");
          for (const key of Object.keys(imported.notes)) {
             if (typeof imported.notes[key] !== "string") throw new Error("Invalid notes value");
          }
          state.userNotes = imported.notes;
        }

        if (imported.quiz !== undefined) {
          if (!isObj(imported.quiz)) throw new Error("Invalid quiz format");
          if (typeof imported.quiz.correctCount !== "number" || typeof imported.quiz.totalCount !== "number") {
            throw new Error("Invalid quiz stats format");
          }
          state.quizStats = imported.quiz;
        }

        if (imported.completedQuestions !== undefined) {
          if (!isObj(imported.completedQuestions)) throw new Error("Invalid completedQuestions format");
          state.completedQuestions = imported.completedQuestions;
        }

        if (imported.wrongQuestions !== undefined) {
          if (!isObj(imported.wrongQuestions)) throw new Error("Invalid wrongQuestions format");
          state.wrongQuestions = imported.wrongQuestions;
        }

        if (imported.savedSessions !== undefined) {
          state.savedSessions = imported.savedSessions;
        }

        saveState();
        alert("Data byla úspěšně importována. Stránka se nyní obnoví.");
        window.location.reload();
      } catch (err) {
        alert("Chyba při čtení souboru. Ujistěte se, že jde o platný JSON exportovaný z této aplikace.");
      }
    };
    reader.readAsText(file);
  });

  // --- FUNKCE PRO EFEKT KONFET ---
  const triggerConfetti = (element) => {
    const rect = element.getBoundingClientRect();
    const xCenter = rect.left + rect.width / 2 + window.scrollX;
    const yCenter = rect.top + rect.height / 2 + window.scrollY;

    const colors = ['#2563eb', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const shapes = ['50%', '0%', '0% 50%'];

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      
      particle.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${xCenter}px`;
      particle.style.top = `${yCenter}px`;
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 90;
      const xDest = Math.cos(angle) * distance;
      const yDest = Math.sin(angle) * distance - 20; 
      const rotation = (Math.random() * 360) + 'deg';
      
      particle.style.setProperty('--x', `${xDest}px`);
      particle.style.setProperty('--y', `${yDest}px`);
      particle.style.setProperty('--r', rotation);
      
      particle.style.animationDelay = `${Math.random() * 0.15}s`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1300);
    }
  };

  // ==========================================
  // --- LOGIKA GEMINI CHATBOTA (Patofyziologie) ---
  // ==========================================
  const chatbotContainer = document.getElementById("gemini-chatbot-container");
  const chatbotFab = document.getElementById("chatbot-fab");
  const chatbotPanel = document.getElementById("chatbot-panel");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotInputForm = document.getElementById("chatbot-input-form");
  const chatbotTypingIndicator = document.getElementById("chatbot-typing-indicator");
  const chatbotSettingsBtn = document.getElementById("chatbot-settings-btn");
  const chatbotSettingsOverlay = document.getElementById("chatbot-settings-overlay");
  const chatbotApiKeyInput = document.getElementById("chatbot-api-key-input");
  const chatbotSaveKeyBtn = document.getElementById("chatbot-save-key-btn");
  const chatbotClearKeyBtn = document.getElementById("chatbot-clear-key-btn");
  const chatbotSettingsCloseBtn = document.getElementById("chatbot-settings-close-btn");
  const chatbotSuggestions = document.getElementById("chatbot-suggestions");
  const chatbotBadge = document.getElementById("chatbot-badge");
  const statusDot = chatbotContainer.querySelector(".avatar-status-dot");

  let chatHistory = [
    { role: "assistant", text: "Ahoj! Jsem tvůj asistent pro **patofyziologii**. Pomůžu ti pochopit mechanismy vzniku nemocí, funkční poruchy orgánů a kompenzační reakce těla. Na co se chceš zeptat?" }
  ];

  // Load key from localStorage
  const getSavedKey = () => localStorage.getItem("gemini_chat_local_key") || "";
  chatbotApiKeyInput.value = getSavedKey();

  // Rate limiting (client-side)
  let lastMessageTime = 0;
  const CLIENT_MIN_INTERVAL = 3000; // 3 seconds between messages

  // Open/Close Chat
  chatbotFab.addEventListener("click", () => {
    const isOpen = chatbotPanel.classList.toggle("open");
    chatbotFab.classList.toggle("open");
    if (isOpen) {
      chatbotBadge.style.display = "none";
      chatbotInput.focus();
      scrollToBottom();
    }
  });

  document.getElementById("chatbot-close-btn").addEventListener("click", () => {
    chatbotPanel.classList.remove("open");
    chatbotFab.classList.remove("open");
  });

  // Settings Panel Toggle
  chatbotSettingsBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.add("open");
  });

  chatbotSettingsCloseBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.remove("open");
  });

  // Save/Clear key locally
  chatbotSaveKeyBtn.addEventListener("click", () => {
    const key = chatbotApiKeyInput.value.trim();
    if (key) {
      localStorage.setItem("gemini_chat_local_key", key);
      alert("API klíč byl uložen do vašeho prohlížeče.");
      chatbotSettingsOverlay.classList.remove("open");
    } else {
      alert("Prosím zadejte platný klíč.");
    }
  });

  chatbotClearKeyBtn.addEventListener("click", () => {
    localStorage.removeItem("gemini_chat_local_key");
    chatbotApiKeyInput.value = "";
    alert("API klíč byl vymazán. Nyní se dotazy posílají přes proxy server.");
  });

  // Simple Markdown Parser for UI Bubble rendering
  const parseMarkdown = (text) => {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Code blocks (```code```)
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code (`code`)
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Bullet lists
    const lines = html.split('\n');
    let inList = false;
    const processedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2);
        if (!inList) {
          inList = true;
          return '<ul><li>' + content + '</li>';
        }
        return '<li>' + content + '</li>';
      } else {
        if (inList) {
          inList = false;
          return '</ul><p>' + line + '</p>';
        }
        return trimmed ? '<p>' + line + '</p>' : '';
      }
    });
    
    html = processedLines.join('');
    if (inList) {
      html += '</ul>';
    }
    
    return html;
  };

  const scrollToBottom = () => {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  // Add Message to DOM and History
  const addMessage = (role, text) => {
    chatHistory.push({ role, text });
    
    if (chatHistory.length > 15) {
      chatHistory.shift();
    }

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = role === "assistant" ? parseMarkdown(text) : text;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();

    if (!chatbotPanel.classList.contains("open") && role === "assistant") {
      chatbotBadge.style.display = "block";
    }
  };

  // Send request via backend proxy (connected to main domain proxy)
  const callProxyServer = async (messages) => {
    const response = await fetch("https://verysadanyway.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages, subject: "patfyz" })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server vrátil chybu ${response.status}.`);
    }

    const data = await response.json();
    return data.text;
  };

  // Send request directly to Gemini API
  const callGeminiDirectly = async (key, messages) => {
    const systemInstructionText = "Jste odborník na patofyziologii. Pomáháte studentům lékařství porozumět funkčním změnám v organismu při nemoci, mechanismům patogeneze, kompenzačním reakcím a klinickým souvislostem. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.";
    
    // Clean history: alternate roles and start with user
    const contents = [];
    let lastRole = null;
    for (const msg of messages) {
      const role = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      if (role === lastRole) continue;
      contents.push({
        role,
        parts: [{ text: msg.text }]
      });
      lastRole = role;
    }
    if (contents.length > 0 && contents[0].role !== "user") {
      contents.shift();
    }
    if (contents.length === 0) {
      throw new Error("Žádné platné zprávy k odeslání.");
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstructionText }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Gemini API vrátilo chybu ${response.status}.`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Chybí text v odpovědi z Gemini.");
    return text;
  };

  // Submit Handler
  chatbotInputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastMessageTime < CLIENT_MIN_INTERVAL) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = '<div class="message-content">Příliš rychlé dotazy. Zkuste to za chvíli.</div>';
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
      return;
    }

    const query = chatbotInput.value.trim();
    if (!query) return;

    addMessage("user", query);
    chatbotInput.value = "";
    chatbotInput.disabled = true;
    chatbotInputForm.querySelector("button").disabled = true;
    
    chatbotTypingIndicator.classList.add("active");
    statusDot.className = "avatar-status-dot typing";
    scrollToBottom();

    lastMessageTime = Date.now();

    try {
      const savedKey = getSavedKey();
      let responseText = "";
      
      if (savedKey) {
        responseText = await callGeminiDirectly(savedKey, chatHistory);
      } else {
        responseText = await callProxyServer(chatHistory);
      }

      chatbotTypingIndicator.classList.remove("active");
      statusDot.className = "avatar-status-dot online";
      addMessage("assistant", responseText);
    } catch (err) {
      console.error(err);
      chatbotTypingIndicator.classList.remove("active");
      statusDot.className = "avatar-status-dot online";
      
      // Clean up chatHistory by popping the failed user query
      if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === "user") {
        chatHistory.pop();
      }

      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = `<div class="message-content">Chyba: ${err.message}</div>`;
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
    } finally {
      chatbotInput.disabled = false;
      chatbotInputForm.querySelector("button").disabled = false;
      chatbotInput.focus();
    }
  });

  // Setup suggestion chip event listeners
  chatbotSuggestions.querySelectorAll(".suggestion-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chatbotInput.value = chip.getAttribute("data-query");
      chatbotInputForm.dispatchEvent(new Event("submit"));
    });
  });


  // ==========================================
  // --- LOGIKA SMART REVIEW KVÍZU (CHYBY) ---
  // ==========================================
  const quizSessionModal = document.getElementById("quiz-session-modal");
  const quizModalClose = document.getElementById("quiz-modal-close");
  const quizSetupView = document.getElementById("quiz-setup-view");
  const quizActiveView = document.getElementById("quiz-active-view");
  const quizCompletedView = document.getElementById("quiz-completed-view");
  const setupCategoriesList = document.getElementById("setup-categories-list");
  
  const startNewQuizBtn = document.getElementById("start-new-quiz-btn");
  const resumeQuizBtn = document.getElementById("resume-quiz-btn");
  const pauseSaveQuizBtn = document.getElementById("pause-save-quiz-btn");
  const nextQuizQuestionBtn = document.getElementById("next-quiz-question-btn");
  const closeCompletedQuizBtn = document.getElementById("close-completed-quiz-btn");
  
  // Prvky uvnitř aktivního kvízu
  const quizProgressText = document.getElementById("quiz-progress-text");
  const quizScoreText = document.getElementById("quiz-score-text");
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const quizQuestionMeta = document.getElementById("quiz-question-meta");
  const quizQuestionText = document.getElementById("quiz-question-text");
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const quizSessionExplanation = document.getElementById("quiz-session-explanation");
  
  // Prvky uvnitř dokončeného kvízu
  const quizFinalScore = document.getElementById("quiz-final-score");
  const quizFinalRatio = document.getElementById("quiz-final-ratio");
  const quizCompletionMessage = document.getElementById("quiz-completion-message");

  const openQuizModal = () => {
    renderQuizSetup();
    quizSessionModal.showModal();
    document.body.style.overflow = "hidden";
    StorageUtil.save("pathophys_quiz_modal_open", true);
  };

  const closeQuizModal = () => {
    quizSessionModal.close();
    document.body.style.overflow = "";
    StorageUtil.save("pathophys_quiz_modal_open", false);
    if (window.destroyEkgSimulation) {
      window.destroyEkgSimulation('quiz-ekg-canvas');
    }
    renderCards();
    updateDashboard();
  };

  const renderQuizSetup = () => {
    setupCategoriesList.innerHTML = "";
    
    const categories = [
      { id: "Obecná", label: "Obecná patofyziologie" },
      { id: "Speciální I.", label: "Speciální I." },
      { id: "Speciální II.", label: "Speciální II." },
      { id: "Praktická", label: "Praktická témata" }
    ];

    categories.forEach(cat => {
      let categoryMistakes = 0;
      state.questions.filter(q => q.category === cat.id).forEach(q => {
        (q.quiz || []).forEach((item, questionIndex) => {
          const subQId = `${q.id}_q${questionIndex}`;
          if (state.wrongQuestions[subQId]) {
            categoryMistakes++;
          }
        });
      });

      const itemDiv = document.createElement("div");
      itemDiv.className = "setup-category-item";
      itemDiv.innerHTML = `
        <label class="setup-category-label">
          <input type="checkbox" name="quiz-category" value="${cat.id}" ${categoryMistakes > 0 ? 'checked' : 'disabled'}>
          <span>${cat.label}</span>
          <span class="setup-category-mistakes ${categoryMistakes === 0 ? 'zero' : ''}">${categoryMistakes} chyb</span>
        </label>
      `;
      setupCategoriesList.appendChild(itemDiv);
    });

    if (state.savedSessions && state.savedSessions.isActive) {
      resumeQuizBtn.style.display = "inline-flex";
    } else {
      resumeQuizBtn.style.display = "none";
    }

    quizSetupView.style.display = "block";
    quizActiveView.style.display = "none";
    quizCompletedView.style.display = "none";
  };

  const renderActiveQuizQuestion = () => {
    if (window.destroyEkgSimulation) {
      window.destroyEkgSimulation('quiz-ekg-canvas');
    }
    const session = state.savedSessions;
    if (!session || !session.isActive) return;

    const currentIdx = session.currentIndex;
    const totalQ = session.questionList.length;

    if (currentIdx >= totalQ) {
      showQuizCompleted();
      return;
    }

    quizSetupView.style.display = "none";
    quizActiveView.style.display = "block";
    quizCompletedView.style.display = "none";

    quizProgressText.textContent = `Otázka ${currentIdx + 1} z ${totalQ}`;
    const progressPct = Math.round((currentIdx / totalQ) * 100);
    quizProgressFill.style.width = `${progressPct}%`;
    
    const accuracy = session.totalCount > 0 ? Math.round((session.correctCount / session.totalCount) * 100) : 100;
    quizScoreText.textContent = `Úspěšnost: ${accuracy}% (${session.correctCount}/${session.totalCount})`;

    const qInfo = session.questionList[currentIdx];
    const topic = state.questions.find(item => item.id === qInfo.topicId);
    const item = topic.quiz[qInfo.qIndex];

    quizQuestionMeta.textContent = `${topic.category.toUpperCase()} | ${topic.title.toUpperCase()}`;
    quizQuestionText.textContent = item.question;
    
    // Inject or destroy dynamic EKG canvas for Smart Review
    let ekgCanvas = document.getElementById("quiz-ekg-canvas");
    if (item.ekgConfig) {
      if (!ekgCanvas) {
        ekgCanvas = document.createElement("canvas");
        ekgCanvas.id = "quiz-ekg-canvas";
        quizOptionsContainer.parentNode.insertBefore(ekgCanvas, quizOptionsContainer);
      }
      ekgCanvas.style.display = "block";
      if (window.initEkgSimulation) {
        window.initEkgSimulation('quiz-ekg-canvas', item.ekgConfig);
      }
    } else {
      if (ekgCanvas) {
        ekgCanvas.remove();
      }
    }

    quizOptionsContainer.innerHTML = "";
    quizSessionExplanation.innerHTML = "";
    nextQuizQuestionBtn.style.display = "none";

    const hasAnswered = session.answers[currentIdx] !== undefined;

    item.options.forEach((opt, optIndex) => {
      const letter = String.fromCharCode(65 + optIndex);
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = `
        <span class="quiz-option-letter">${letter}</span>
        <span class="quiz-option-text">${opt}</span>
      `;
      
      if (hasAnswered) {
        btn.classList.add("disabled");
        if (optIndex === item.correct) {
          btn.classList.add("correct");
        } else if (optIndex === session.answers[currentIdx] && optIndex !== item.correct) {
          btn.classList.add("incorrect");
        }
      }

      btn.addEventListener("click", () => {
        if (session.answers[currentIdx] !== undefined) return;

        const optIdx = optIndex;
        const isCorrect = optIdx === item.correct;
        session.answers[currentIdx] = optIdx;
        session.totalCount++;
        
        const allBtns = quizOptionsContainer.querySelectorAll(".quiz-option");
        allBtns.forEach(b => b.classList.add("disabled"));

        if (isCorrect) {
          btn.classList.add("correct");
          triggerConfetti(btn);
          session.correctCount++;
          
          delete state.wrongQuestions[qInfo.subQId];
          
          state.completedQuestions[qInfo.subQId] = {
            answeredIndex: optIdx,
            isCorrect: true
          };
        } else {
          btn.classList.add("incorrect");
          allBtns[item.correct].classList.add("correct");
          
          state.wrongQuestions[qInfo.subQId] = true;
          state.completedQuestions[qInfo.subQId] = {
            answeredIndex: optIdx,
            isCorrect: false
          };
        }

        saveState();
        updateDashboard();

        const newAccuracy = Math.round((session.correctCount / session.totalCount) * 100);
        quizScoreText.textContent = `Úspěšnost: ${newAccuracy}% (${session.correctCount}/${session.totalCount})`;

        const explanationText = item.explanations ? item.explanations[optIndex] : (isCorrect ? "Správná patofyziologická úvaha!" : "Nesprávná úvaha.");
        quizSessionExplanation.innerHTML = `
          <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${explanationText}
          </div>
        `;

        nextQuizQuestionBtn.style.display = "inline-flex";
      });

      quizOptionsContainer.appendChild(btn);
    });

    if (hasAnswered) {
      const savedAnsIdx = session.answers[currentIdx];
      const isCorrect = savedAnsIdx === item.correct;
      const explanationText = item.explanations ? item.explanations[savedAnsIdx] : (isCorrect ? "Správná patofyziologická úvaha!" : "Nesprávná úvaha.");
      quizSessionExplanation.innerHTML = `
        <div class="quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}">
          <strong>${isCorrect ? 'Správně!' : 'Nesprávně.'}</strong> ${explanationText}
        </div>
      `;
      nextQuizQuestionBtn.style.display = "inline-flex";
    }
  };

  const showQuizCompleted = () => {
    quizSetupView.style.display = "none";
    quizActiveView.style.display = "none";
    quizCompletedView.style.display = "block";
    if (window.destroyEkgSimulation) {
      window.destroyEkgSimulation('quiz-ekg-canvas');
    }

    const session = state.savedSessions;
    const accuracy = session.totalCount > 0 ? Math.round((session.correctCount / session.totalCount) * 100) : 100;

    quizFinalScore.textContent = `${accuracy}%`;
    quizFinalRatio.textContent = `${session.correctCount} z ${session.totalCount} správně`;
    
    state.savedSessions = null;
    saveState();
    updateDashboard();
  };

  startNewQuizBtn.addEventListener("click", () => {
    const checkboxes = setupCategoriesList.querySelectorAll("input[name='quiz-category']:checked");
    const selectedCats = Array.from(checkboxes).map(cb => cb.value);

    if (selectedCats.length === 0) {
      alert("Vyberte prosím alespoň jednu kategorii s chybami.");
      return;
    }

    const questionList = [];
    selectedCats.forEach(catId => {
      state.questions.filter(q => q.category === catId).forEach(q => {
        (q.quiz || []).forEach((item, questionIndex) => {
          const subQId = `${q.id}_q${questionIndex}`;
          if (state.wrongQuestions[subQId]) {
            questionList.push({
              subQId: subQId,
              topicId: q.id,
              qIndex: questionIndex
            });
          }
        });
      });
    });

    if (questionList.length === 0) {
      alert("Ve vybraných kategoriích nemáte žádné uložené chyby.");
      return;
    }

    for (let i = questionList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }

    state.savedSessions = {
      questionList: questionList,
      currentIndex: 0,
      correctCount: 0,
      totalCount: 0,
      isActive: true,
      answers: {}
    };

    saveState();
    updateDashboard();
    renderActiveQuizQuestion();
  });

  resumeQuizBtn.addEventListener("click", () => {
    if (state.savedSessions && state.savedSessions.isActive) {
      renderActiveQuizQuestion();
    }
  });

  nextQuizQuestionBtn.addEventListener("click", () => {
    if (state.savedSessions) {
      state.savedSessions.currentIndex++;
      saveState();
      renderActiveQuizQuestion();
    }
  });

  pauseSaveQuizBtn.addEventListener("click", () => {
    if (state.savedSessions) {
      saveState();
    }
    closeQuizModal();
  });

  if (closeCompletedQuizBtn) {
    closeCompletedQuizBtn.addEventListener("click", closeQuizModal);
  }

  const reviewMistakesBtn = document.getElementById("review-mistakes-btn");
  const statMistakesCard = document.getElementById("stat-mistakes-card");

  if (reviewMistakesBtn) {
    reviewMistakesBtn.addEventListener("click", openQuizModal);
  }
  if (statMistakesCard) {
    statMistakesCard.addEventListener("click", openQuizModal);
  }
  if (quizModalClose) {
    quizModalClose.addEventListener("click", closeQuizModal);
  }

  quizSessionModal.addEventListener("click", (e) => {
    if (e.target === quizSessionModal) {
      closeQuizModal();
    }
  });

  // Obnovení stavu po reloadu stránky
  const restoredActiveQ = StorageUtil.load("pathophys_active_q", null);
  if (restoredActiveQ) {
    openModal(restoredActiveQ);
  }
  
  const quizModalOpen = StorageUtil.load("pathophys_quiz_modal_open", false);
  if (quizModalOpen) {
    openQuizModal();
    if (state.savedSessions && state.savedSessions.isActive) {
      renderActiveQuizQuestion();
    }
  }

  // --- INICIALIZACE STRÁNKY ---
  renderCards();
  updateDashboard();
});
