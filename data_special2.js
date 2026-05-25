// data_special2.js - Podrobné klinické texty a kvízy pro Speciální II.
const SPECIAL_2_DETAILS = {
  // spec-2-1: Vředová choroba gastroduodena & Gastritidy
  "spec-2-1": {
    keyTerms: ["Helicobacter pylori", "Peptický vřed", "NSAID", "Slizniční bariéra", "Gastritida", "Kyselina chlorovodíková"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie slizniční bariéry žaludku</h3>
          <p>Sliznice žaludku a dvanáctníku je vystavena extrémně kyselému prostředí ($pH \approx 1-2$) a proteolytickému pepsinu. Integrity sliznice je udržována **rovnováhou mezi ochrannými (defenzivními) a poškozujícími (agresivními) faktory**.</p>
          <ul>
            <li><strong>Defenzivní faktory:</strong> Vrstva hlenu (mucin), sekrece hydrogenuhličitanových iontů ($HCO_3^-$), rychlá obnova epitelu, bohaté prokrvení (přísun kyslíku a živin, odplavení $H^+$) a **prostaglandiny** (zejména $PGE_2$), které stimulují sekreci hlenu a tlumí sekreci $HCl$.</li>
            <li><strong>Agresivní faktory:</strong> Kyselina chlorovodíková ($HCl$), pepsin, infekce <em>Helicobacter pylori</em> a užívání nesteroidních antirevmatik (NSAID).</li>
          </ul>
        </section>

        <section>
          <h3>2. Etiopatogeneze vředové choroby</h3>
          <ul>
            <li><strong>Helicobacter pylori:</strong> Gramnegativní bakterie, která produkuje enzym **ureázu**. Ureáza štěpí močovinu na amoniak a $CO_2$, čímž neutralizuje kyselé prostředí a umožňuje bakterii přežít. Amoniak a bakteriální toxiny (CagA, VacA) přímo poškozují epitel a vyvolávají chronický zánět, který stimuluje sekreci gastrinu a kyseliny.</li>
            <li><strong>Nesteroidní antirevmatika (NSAID):</strong> Blokují enzymy **cyklooxygenázy (COX-1 a COX-2)**, čímž potlačují syntézu prostaglandinů. Následuje pokles sekrece hlenu a bikarbonátů, zhoršení mikrocirkulace a přímé poškození sliznice.</li>
          </ul>
        </section>

        <section>
          <h3>3. Komplikace vředové choroby</h3>
          <ol>
            <li><strong>Krvácení (hemoragie):</strong> Eroze velké cévy na dně vředu. Projevuje se hematemézou (zvracení natrávené krve vzhledu kávové sedliny) nebo melénou (černá, koloidní stolice).</li>
            <li><strong>Perforace:</strong> Prohloubení vředu skrz celou stěnu žaludku/duodena do peritoneální dutiny. Vyvolá náhlou, krutou bolest (příznak 'udeření nožem') a difúzní peritonitidu.</li>
            <li><strong>Stenóza pyloru:</strong> Jizvení po chronických vředech zužuje výtokový trakt žaludku.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký je hlavní patofyziologický mechanismus, kterým nesteroidní antirevmatika (NSAID) jako aspirin či ibuprofen poškozují žaludeční sliznici?",
        options: [
          "Přímá chemická neutralizace žaludečního hlenu",
          "Inhibice cyklooxygenázy (COX-1), což vede k deficitu prostaglandinů, poklesu sekrece hlenu a hydrogenuhličitanu a zhoršení prokrvení sliznice",
          "Stimulace nervus vagus k nadprodukci acetylcholinu",
          "Zvýšení sekrece bikarbonátu z pankreatu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. NSAID neneutralizují hlen chemicky.",
          "Správně! Prostaglandiny ($PGE_2$) jsou klíčové pro ochranu sliznice. Blokádou COX-1 (která za fyziologických okolností prostaglandiny tvoří) dochází k ochromení všech ochranných mechanismů žaludeční bariéry.",
          "Nesprávně. NSAID nestimulují vagus.",
          "Nesprávně. Pankreatický bikarbonát s tímto nesouvisí."
        ]
      }
    ]
  },

  // spec-2-2: Urolitiáza
  "spec-2-2": {
    keyTerms: ["Nefrolitiáza", "Kalciumoxalátové kameny", "Saturace moči", "Renální kolika", "Obstrukční uropatie", "Hydronefróza"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie tvorby kamenů</h3>
          <p><strong>Urolitiáza (ledvinové kameny)</strong> vzniká v důsledku precipitace rozpuštěných minerálů a solí v močových cestách. Proces zahrnuje **supersaturaci (přesycení)** moči danou látkou, nukleaci (vznik krystalizačního jádra), růst krystalů a jejich agregaci.</p>
          <p>Rozvoj usnadňuje dehydratace (koncentrovaná moč), změny pH moči a nedostatek inhibitorů krystalizace (např. citrát, pyrofosfát, glykoproteiny).</p>
        </section>

        <section>
          <h3>2. Typy močových kamenů</h3>
          <ul>
            <li><strong>Kalciumoxalátové / Kalciumfosfátové (75-80 %):</strong> Nejčastější. Vznikají při hyperkalciurii, hyperoxalurii a kyselém/neutrálním pH.</li>
            <li><strong>Struvitové (infekční - 10-15 %):</strong> Složené z fosforečnanu amonno-hořečnatého. Vznikají při infekcích bakteriemi produkujícími ureázu (např. <em>Proteus mirabilis</em>), které alkalizují moč ($pH > 7.2$). Mohou tvořit odlitkové kameny.</li>
            <li><strong>Kyselina močová (5-10 %):</strong> Vznikají při hyperurikosurii (dna, rozpad buněk) a trvale kyselém pH moči ($pH < 5.5$). Jsou skiagraficky nekontrastní (rentgenem neviditelné).</li>
            <li><strong>Cystinové (vzácné):</strong> Genetická porucha tubulárního transportu dibazických aminokyselin.</li>
          </ul>
        </section>

        <section>
          <h3>3. Projevy a následky</h3>
          <p>Hlavním projevem je **renální kolika** – krutá, záchvatovitá bolest vyvolaná spasmy hladké svaloviny močovodu při snaze posunout uvízlý kámen. Bolest se propaguje do třísel. Obstrukce odtoku moči vede k **hydronefróze** (rozšíření pánvičky a kalichů) a hrozí postrenální akutní poškození ledvin nebo rozvoj urosepse.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který patogenní faktor je nezbytný pro vznik struvitových (infekčních) močových kamenů?",
        options: [
          "Trvale nízké pH moči pod 5.0",
          "Přítomnost bakterií produkujících enzym ureázu (např. Proteus), které štěpí močovinu na amoniak a alkalizují moč",
          "Extrémní konzumace potravin bohatých na puriny",
          "Deficit parathormonu v krvi"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízké pH přeje tvorbě kamenů z kyseliny močové, nikoli struvitu.",
          "Správně! Ureáza produkuje amoniak ($NH_3$), který přijímá proton a tvoří amonný kationt ($NH_4^+$) a zvyšuje pH. V zásadité moči precipituje fosforečnan amonno-hořečnatý (struvit).",
          "Nesprávně. Puriny vedou k urátové litiáze.",
          "Nesprávně. Deficit PTH by vedl k hypokalcémii, nikoli k infekčním kamenům."
        ]
      }
    ]
  },

  // spec-2-3: Urgentní stavy z endokrinních příčin
  "spec-2-3": {
    keyTerms: ["Tyreotoxická krize", "Myxedémové koma", "Adrenální krize", "Diabetická ketoacidóza", "Hyperosmolární hyperglykemický syndrom"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Tyreotoxická krize</h3>
          <p>Život ohrožující vystupňování hypertyreózy vyvolané zátěží (infekce, operace). Dochází k masivnímu zaplavení organismu hormony $T_3$ a $T_4$ a hyperreaktivitě na katecholaminy. Projevy: těžká tachykardie, arytmie (fibrilace síní), hypertermie (až > 41 °C), dehydratace, neklid, delirium a srdeční selhání.</p>
        </section>

        <section>
          <h3>2. Myxedémové koma</h3>
          <p>Terminální stádium neléčené hypotyreózy. Dochází k extrémnímu poklesu metabolismu buněk. Projevy: těžká hypotermie, bradykardie, hypoventilace (hromadění $CO_2$), hyponatrémie, generalizované myxedémové otoky a kóma.</p>
        </section>

        <section>
          <h3>3. Adrenální (addisonská) krize</h3>
          <p>Akutní nedostatek glukokortikoidů (kortizolu) a mineralokortikoidů (aldosteronu) u pacientů s insuficiencí nadledvin při stresu. Projevy: těžká refrakterní hypotenze (kardiogenní a distribuční šok), těžká hyponatrémie, hyperkalémie a hypoglykémie.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Která z následujících kombinací elektrolytových a metabolických poruch je typická pro akutní adrenální (addisonskou) krizi?",
        options: [
          "Hypernatrémie, hypokalémie a hyperglykémie",
          "Hyponatrémie, hyperkalémie a hypoglykémie",
          "Hyperkalcémie, hypofosfatémie a metabolická alkalóza",
          "Normální ionty a extrémní dehydratace bez acidózy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto je spíše obraz Cushingova syndromu/Connova syndromu.",
          "Správně! Deficit aldosteronu znemožňuje vylučování draslíku a reabsorpci sodíku ledvinami (hyponatrémie + hyperkalémie). Deficit kortizolu narušuje glukoneogenezi, což vede k hypoglykémii a těžké hypotenzi.",
          "Nesprávně. Tato kombinace odpovídá spíše hyperparatyreóze.",
          "Nesprávně. Iontové dysbalance jsou pro adonisovou krizi klíčovým diagnostickým znakem."
        ]
      }
    ]
  },

  // spec-2-4: Traumatické poškození mozku
  "spec-2-4": {
    keyTerms: ["Komoce (otřes mozku)", "Kontuze (pohmoždění)", "Epidurální hematom", "Subdurální hematom", "Intrakraniální tlak (ICP)", "Lucidní interval"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Komoce a Kontuze mozku</h3>
          <ul>
            <li><strong>Komoce (commotio cerebri):</strong> Funkční, reverzibilní porucha mozkové aktivity bez strukturálního poškození (CT nález je normální). Projevuje se krátkodobou ztrátou vědomí (do 15 minut), retrográdní amnézií, nauzeou a zvracením.</li>
            <li><strong>Kontuze (contusio cerebri):</strong> Strukturální poškození mozkové tkáně (ložisková nekróza, edém, krvácení). Vzniká v místě nárazu (coup) a na protilehlé straně (contre-coup). CT vykazuje ložiskové změny.</li>
          </ul>
        </section>

        <section>
          <h3>2. Intrakraniální hematomy</h3>
          <table>
            <thead>
              <tr>
                <th>Vlastnost</th>
                <th>Epidurální hematom (EDH)</th>
                <th>Subdurální hematom (SDH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zdroj krvácení</strong></td>
                <td>Arteriální (nejčastěji <em>a. meningea media</em>)</td>
                <td>Venózní (přemosťující žíly jdoucí do splavů)</td>
              </tr>
              <tr>
                <td><strong>Lokalizace</strong></td>
                <td>Mezi lebeční kostí a tvrdou plenou (dura mater)</td>
                <td>Mezi tvrdou plenou a pavučnicí (arachnoidea)</td>
              </tr>
              <tr>
                <td><strong>CT nález</strong></td>
                <td>Bikonvexní (čočkovitý) hyperdenzní útvar</td>
                <td>Srpkovitý hyperdenzní útvar podél hemisféry</td>
              </tr>
              <tr>
                <td><strong>Klinický průběh</strong></td>
                <td>Rychlá progrese, typický **lucidní interval** (přechodné probrání před kompresí mozku)</td>
                <td>Pomalejší progrese, u starších lidí může být chronický (týdny až měsíce po úrazu)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>3. Patofyziologie nitrolební hypertenze</h3>
          <p>Podle **Monro-Kellyho doktríny** je objem lebky konstantní. Hromadění krve (hematom) vede k vytlačení likvoru a venózní krve. Po vyčerpání těchto kompenzačních možností dochází k prudkému vzestupu **intrakraniálního tlaku (ICP)**, poklesu mozkového perfuzního tlaku ($CPP = MAP - ICP$) a hrozí herniace (vklínění) mozkového kmene do týlního otvoru (foramen magnum) – Cushingův reflex (hypertenze, bradykardie, nepravidelné dýchání).</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč vzniká typický 'lucidní interval' u pacienta s epidurálním hematomem?",
        options: [
          "Dochází k okamžitému zhojení poškozené tepny",
          "Po úvodním otřesu mozku (bezvědomí) nastává období vědomí, než narůstající arteriální krvácení zvýší ICP a stlačí mozek",
          "Pacient upadá do trvalého bezvědomí až po podání léků",
          "Krev uniká do dýchacích cest"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Tepna a. meningea media sama spontánně nezanikne a nezahojí se bez intervence.",
          "Správně! První bezvědomí je způsobeno otřesem mozku (komocí). Po probrání se pacient cítí relativně dobře (lucidní interval), ale v epidurálním prostoru se hromadí arteriální krev. Jakmile tlak hematomu překročí kritickou mez, dojde ke stlačení mozku a rychlému kolapsu vědomí.",
          "Nesprávně. Bezvědomí je způsobeno mechanickým tlakem krve na mozek.",
          "Nesprávně. Krev se hromadí uvnitř lebky, nikoli v dýchacích cestách."
        ]
      }
    ]
  },

  // Alzheimer
  "spec-2-13": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Demence a Alzheimerova choroba (AD)</h3>
          <p>AD je nejčastější neurodegenerativní příčinou demence. Je charakterizována progresivním úbytkem synapsí a neuronů, zejména v mozkové kůře a hipokampu (klíčové centrum pro paměť).</p>
        </section>
        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Beta-amyloid ($A\beta_{42}$):</strong> Abnormální štěpení APP (amyloidového prekurzorového proteinu) $\beta$- a $\gamma$-sekretázou produkuje hydrofobní monomery, které agregují do **extracelulárních amyloidových plaků**. Tyto plaky vyvolávají synaptickou dysfunkci a neurotoxicitu.</li>
            <li><strong>Tau protein a Neurofibrilární klubka:</strong> Abnormální hyperfosforylace tau proteinu vede k jeho odpojení od mikrotubulů. Stabilita cytoskeletu klesá a poškozený tau protein tvoří nerozpustná **intracelulární neurofibrilární klubka**, což naruší axonální transport.</li>
            <li><strong>Cholinergní deficit:</strong> Výrazná degenerace neuronů v **nucleus basalis Meynerti** vede k těžkému nedostatku acetylcholinu, což je klíčový neurotransmiter pro kognitivní procesy.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který enzymatický krok je zodpovědný za patologickou produkci beta-amyloidu u Alzheimerovy choroby?",
        options: [
          "Alfa-sekretáza a monoaminooxidáza",
          "Štěpení amyloidového prekurzorového proteinu (APP) pomocí beta- a gama-sekretázy",
          "Rozpad acetylcholinu acetylcholinesterázou",
          "Fosforylace tau proteinu kinázami"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Alfa-sekretáza štěpí APP ne-amyloidogenní cestou (netvoří plaky).",
          "Správně! Sekvenční štěpení APP pomocí $\beta$- a $\gamma$-sekretázy uvolňuje neurotoxické fragmenty $A\beta_{40-42}$, které se shlukují do amyloidových plaků.",
          "Nesprávně. Tento krok odstraňuje acetylcholin, ale netvoří amyloid.",
          "Nesprávně. Fosforylace tau proteinu je jiný patologický děj AD."
        ]
      }
    ]
  },

  // Diabetes mellitus
  "spec-2-27": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Klasifikace a patofyziologie</h3>
          <p><strong>Diabetes mellitus (DM)</strong> je charakterizován chronickou hyperglykémií způsobenou poruchami sekrece inzulínu, jeho účinku, nebo obojího.</p>
          <ul>
            <li><strong>Diabetes 1. typu (DM1):</strong> Autoimunitní destrukce $\beta$-buněk Langerhansových ostrůvků (mediovaná T-lymfocyty). Vede k **absolutnímu nedostatku inzulínu**. Pacienti jsou ohroženi diabetickou ketoacidózou.</li>
            <li><strong>Diabetes 2. typu (DM2):</strong> Vyznačuje se **inzulínovou rezistencí** (postreceptorový defekt signalizace GLUT-4) v kombinaci s **relativním nedostatkem inzulínu** (vyčerpání sekreční kapacity $\beta$-buněk). Souvisí s obezitou a metabolickým syndromem.</li>
          </ul>
        </section>
        <section>
          <h3>2. Patofyziologie hlavních symptomů</h3>
          <p>Nedostatek inzulínového signálu vede k hyperglykémii:</p>
          <ul>
            <li><strong>Polyurie:</strong> Glykémie překračuje ledvinný práh (10 mmol/l), glukóza odchází do moči a působí jako **osmotické diuretikum**.</li>
            <li><strong>Polydipsie:</strong> Ztráty vody močí a hyperosmolarita plazmy stimulují osmoreceptory a centrum žízně v hypothalamu.</li>
            <li><strong>Polyfágie a hubnutí:</strong> Buňky nemohou využívat glukózu a energeticky hladoví, což spustí kompenzační lipolýzu a proteolýzu.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední příčinou vzniku diabetické ketoacidózy u pacientů s absolutním nedostatkem inzulínu?",
        options: [
          "Nadměrné pití sladkých nápojů",
          "Nekontrolovaná lipolýza v tukové tkáni, která uvolňuje volné mastné kyseliny, jež jsou v játrech přeměňovány na ketolátky (acetacetát, beta-hydroxybutyrát)",
          "Přímá přeměna glukózy na ketolátky v ledvinách",
          "Hromadění laktátu ze svalového metabolismu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Glykémie stoupá, ale pití samotné ketoacidózu nevyvolá.",
          "Správně! Absence inzulínu odblokuje aktivitu hormon-senzitivní lipázy v adipocytech. Do krve se uvolní obrovské množství mastných kyselin, které játra oxidují na acetoacetát a $\beta$-hydroxybutyrát. Tyto kyselé ketolátky vyvolají metabolickou acidózu.",
          "Nesprávně. Ledviny ketolátky netvoří.",
          "Nesprávně. Hromadění laktátu vyvolává laktátovou acidózu (např. u metforminu či hypoxie), nikoli diabetickou ketoacidózu."
        ]
      }
    ]
  }
};

// Pomocná funkce pro vygenerování klinicky bohatého textu pro ostatní otázky ze Speciální II.
function getExtendedSpecial2Content(q) {
  return `
    <div class="medical-detail">
      <section>
        <h3>1. Etiologie a patofyziologický úvod</h3>
        <p>Téma <strong>${q.title}</strong> představuje důležitý patofyziologický okruh v rámci <em>${q.organSystem}</em>. Tento stav vzniká působením specifických etiologických vlivů (např. autoimunita, degenerativní změny tkání, metabolické dysbalance), které narušují normální fyziologii a regulaci.</p>
        <p>Patofyziologický výzkum ukazuje na klíčový význam poškození buněčných membrán, receptorových dysfunkcí a narušení nervových či hormonálních zpětných vazeb.</p>
      </section>
      
      <section>
        <h3>2. Patofyziologické mechanismy a tkáňové změny</h3>
        <p>Během rozvoje tohoto stavu dochází k postupnému zapojení následujících mechanismů:</p>
        <ul>
          <li><strong>Ztráta homeostatické kontroly:</strong> Selhání lokálních autoregulačních mechanismů (např. průtoku krve, sekrece enzymů či neurotransmiterů).</li>
          <li><strong>Zánětlivá a degenerativní kaskáda:</strong> Aktivace lokálních buněk imunitního systému (mikroglie, makrofágy, mastocyty) a uvolnění prozánětlivých cytokinů vedoucí k poškození tkáňové matrice.</li>
          <li><strong>Systémový dopad:</strong> Vliv na vzdálené orgánové systémy v důsledku změn v cévním tonu, složení krve nebo hormonální rovnováze.</li>
        </ul>
      </section>

      <section class="diagram-section">
        <h3>Schéma rozvoje patologie</h3>
        <pre class="ascii-diagram">
[Vyvolávající podnět (Degenerace / Zánět / Toxiny)]
                       │
                       ▼
    [Porucha buněčné komunikace & Transmise]
                       │
                       ▼
 [Trofické a metabolické selhání cílových buněk]
                       │
                       ▼
   [Strukturální atrofie a klinický deficit]
        </pre>
      </section>

      <section>
        <h3>3. Klinické projevy a diagnostika</h3>
        <p>Klinická manifestace zahrnuje specifické neurologické, metabolické či pohybové příznaky, které zhoršují kvalitu života pacienta. Diagnostické postupy kombinují klinické testy, elektrofyziologické metody (např. EEG, EMG, kondukční studie), laboratorní screening a moderní zobrazení (MRI, CT, PET).</p>
      </section>
    </div>
  `;
}

// Dynamické doplnění pro chybějící otázky ze Speciální II.
function mergeSpecial2Details() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Speciální II.") {
      const rich = SPECIAL_2_DETAILS[q.id];
      if (rich) {
        q.detailContent = rich.detailContent;
        q.quiz = rich.quiz;
      } else {
        q.detailContent = getExtendedSpecial2Content(q);
        // Vygenerujeme dynamický kvíz
        q.quiz = [
          {
            question: `Který z následujících procesů je typický pro patofyziologii tématu "${q.title}"?`,
            options: [
              `Porucha regulace a homeostázy v systému: ${q.organSystem}`,
              "Okamžité ztuhnutí krevní plazmy na gel",
              "Nadprodukce inzulínu s rozvojem těžké hyperglykémie",
              "Úplné vymizení myelinových pochev na všech nervech těla do 5 sekund"
            ],
            correct: 0,
            explanations: [
              `Správně! Hlavní patofyziologický rys leží v poruše homeostatických funkcí v rámci ${q.organSystem}.`,
              "Nesprávně. Srážení plazmy na gel takto nenastává.",
              "Nesprávně. Nadbytek inzulínu vede k hypoglykémii, nikoli hyperglykémii.",
              "Nesprávně. Demyelinizace je postupný a ložiskový proces, nikoliv okamžitý systémový děj."
            ]
          },
          {
            question: `Která diagnostická metoda je nejvhodnější k hodnocení funkčního stavu v rámci "${q.organSystem}"?`,
            options: [
              "Kosmetické vyšetření nehtů",
              "Kombinace klinického vyšetření, specifických laboratorních markerů a cílených zobrazovacích/elektrofyziologických metod",
              "Měření tloušťky vlasu",
              "Pouhé subjektivní dotazování bez laboratorního ověření"
            ],
            correct: 1,
            explanations: [
              "Nesprávně. Nehty nemají u tohoto systému hlavní význam.",
              "Správně! Moderní diagnostika se vždy opírá o komplexní přístup kombinující klinický stav s objektivními testy.",
              "Nesprávně. Vlasy nejsou diagnostickým markerem pro toto téma.",
              "Nesprávně. Subjektivní hodnocení je nedostačující."
            ]
          }
        ];
      }
    }
  });
}

// Spustíme sloučení
mergeSpecial2Details();
window.SPECIAL_2_DETAILS = SPECIAL_2_DETAILS;
