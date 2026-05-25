// data_special1.js - Podrobné klinické texty a kvízy pro Speciální I.
const SPECIAL_1_DETAILS = {
  // Srdeční zástava & Arytmie
  "spec-1-1": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod a patofyziologický základ zástavy</h3>
          <p><strong>Srdeční zástava (sudden cardiac arrest - SCA)</strong> představuje akutní stav charakterizovaný náhlým ustáním čerpací funkce srdečních komor, což vede k okamžitému kolapsu systémové perfuze. Patofyziologickým důsledkem je anoxie tkání, přičemž nejcitlivějším orgánem je mozek – po 10 sekundách anoxie dochází k synkopě, po 4–5 minutách bez oběhu dochází k ireverzibilnímu poškození neuronů mozkové kůry (konec resuscitability ad integrum).</p>
        </section>
        
        <section>
          <h3>2. Etiopatogeneze maligních arytmií</h3>
          <ul>
            <li><strong>Fibrilace komor (VF):</strong> Chaotická, nesynchronizovaná elektrická aktivita komor s frekvencí 300–500/min. Mechanicky komory pouze fibrilují (chvějí se) bez efektivního tepového objemu. Vzniká na podkladě mikro-reentry okruhů (tzv. rotorů) v elektricky heterogenním myokardu (ischemie, jizva, elektrolytová dysbalance).</li>
            <li><strong>Setrvalá komorová tachykardie bez hmatného pulsu (pVT):</strong> Rychlý, organizovaný komorový rytmus (frekvence > 100/min, obvykle > 180/min) vycházející z ektopického ložiska pod bifurkací Hissova svazku. Způsobuje zástavu, protože zkrácená diastola znemožňuje plnění komor. Mechanismus je nejčastěji makro-reentry kolem infarktové jizvy.</li>
            <li><strong>Asystolie:</strong> Kompletní elektrické i mechanické ticho v komorách (izoelektrická linie). Je to obvykle terminální stádium neléčené VF nebo důsledek kritické deplece ATP v myokardu, těžké acidózy, hypoxie nebo extrémního tonu vagu.</li>
            <li><strong>Bezpulsová elektrická aktivita (PEA / Elektromechanická disociace):</strong> Stav, kdy je na EKG registrován elektrický rytmus (včetně sinusového), ale chybí mechanická kontrakce a minutový výdej. Vzniká při selhání spřažení excitace a kontrakce (např. deplece intracelulárního vápníku) nebo mechanické obstrukci plnění (tenzní pneumotorax, srdeční tamponáda, masivní plicní embolie).</li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologické schéma anoxie a buněčné smrti při zástavě</h3>
          <pre class="ascii-diagram">
           [Náhlá zástava perfuze (MAP = 0 mmHg)]
                             │
                             ▼
         [Ztráta aerobního metabolismu (anaerobóza)]
                             │
                             ▼
     [Deplece buněčného ATP & Hromadění laktátu (acidóza)]
                             │
        ┌────────────────────┴────────────────────┐
        ▼                                         ▼
[Selhání Na+/K+-ATPázy]                  [Selhání Ca2+-ATPázy]
 ├─► Intracelulární edém (vtékání Na+)    └─► Akumulace Ca2+ v cytosolu
 └─► Depolarizace membrány                     ├─► Aktivace fosfolipáz
                                               ├─► Destrukce mitochondrií
                                               └─► APOPTÓZA / NEKRÓZA
          </pre>
        </section>

        <section>
          <h3>3. Diagnostické a klinické konsekvence</h3>
          <p>Okamžitá klinická manifestace zahrnuje ztrátu vědomí, vymizení pulsu na krkavicích (a. carotis), lapavé dýchání (gasping) a následnou apnoi. Mydriáza se rozvíjí do 60–90 sekund od zástavy. Léčba vyžaduje neodkladnou kardiopulmonální resuscitaci (KPR) a u VF/pVT okamžitou elektrickou defibrilaci pro zrušení reentry okruhů.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících elektrofyziologických mechanismů je klíčový pro přechod setrvalé komorové tachykardie do fibrilace komor?",
        options: [
          "Nadměrná depolarizace vyvolaná aktivací parasympatiku",
          "Vznik mnohočetných, prostorově a časově nestabilních reentry okruhů (rotorů) v důsledku disperze refrakterní fáze",
          "Uvolnění acetylcholinu, které stabilizuje komorové vedení",
          "Úplný blok sodíkových kanálů na všech buňkách"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Parasympatikus (vagus) komory inervuje minimálně a jeho vliv je spíše protektivní proti VF.",
          "Správně! Když ektopický vzruch narazí na zónu s heterogenní refrakterní fází (časté v ischemickém myokardu), začne se vzruch šířit chaoticky a drolit se do mnoha mikroskopických reentry okruhů – rotorů.",
          "Nesprávně. Acetylcholin je mediátor parasympatiku a tlumí síňovou aktivitu, na komory má minimální přímý vliv.",
          "Nesprávně. Blokáda sodíkových kanálů by vedla k asystolii, nikoli k fibrilaci komor."
        ]
      },
      {
        question: "Jaký patofyziologický stav přímo vyvolá asystolii komor?",
        options: [
          "Blokáda L-typu kalciových kanálů acetylcholinem v komorovém myokardu",
          "Těžké vyčerpání zásob ATP v kardiomyocytech doprovázené intracelulární acidózou",
          "Mírná respirační alkalóza",
          "Snížení hladiny extracelulárního fosforu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Acetylcholin neblokuje Ca-kanály komor přímo tak, aby vyvolal okamžitou asystolii.",
          "Správně! Bez ATP nedokážou iontové pumpy (zejména Na+/K+-ATPáza a SERCA) udržovat membránový potenciál. Myokard ztrácí schopnost generovat a vést akční potenciály, což vede k izoelektrické linii (asystolii).",
          "Nesprávně. Respirační alkalóza spíše zvyšuje dráždivost, asystolii nevyvolává.",
          "Nesprávně. Hypofosfatémie má vliv na kontraktilitu, ale asystolii přímo nezpůsobuje."
        ]
      },
      {
        question: "Co charakterizuje bezpulsovou elektrickou aktivitu (PEA) v patofyziologii šoku?",
        options: [
          "Přítomnost komorové fibrilace s velmi nízkou amplitudou vln",
          "Koordinovaná elektrická aktivita (např. sinusový rytmus) bez mechanické kontrakce a hmatného pulsu z důvodu např. závažné hypovolémie či tamponády",
          "Vymizení EKG křivky při zachování normálního krevního tlaku",
          "Selektivní ochrnutí hladkého svalstva cév bez ovlivnění myokardu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. VF s nízkou amplitudou je stále komorová fibrilace (jemnovlnná VF).",
          "Správně! U PEA generuje sinusový uzel či ektopické ložisko impulsy, které se šíří myokardem (EKG vykazuje aktivitu), ale srdce se nemůže plnit (hypovolémie, tamponáda, embolie) nebo chybí intracelulární Ca2+ pro kontrakci.",
          "Nesprávně. Bez EKG křivky (izoelektrická linie) jde o asystolii, tlak v té chvíli nelze naměřit.",
          "Nesprávně. PEA postihuje čerpací funkci srdce, nikoli jen hladké svalstvo."
        ]
      }
    ]
  },

  // Anemie
  "spec-1-2": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologická definice a kritéria</h3>
          <p><strong>Anémie</strong> je definována poklesem koncentrace hemoglobinu pod 135 g/l u mužů a 120 g/l u netěhotných žen. Důsledkem je pokles kyslíkové kapacity krve a rozvoj tkáňové hypoxie, která stimuluje kompenzační systémy.</p>
        </section>
        <section>
          <h3>2. Etiopatogeneze a klasifikace</h3>
          <ul>
            <li><strong>Podle etiopatogeneze:</strong>
              <ul>
                <li><em>Poruchy tvorby:</em> Sideropenická (deficit železa), Megaloblastová (deficit B12/folátu – porucha syntézy DNA), Anémie chronických chorob (blokáda železa hepcidinem).</li>
                <li><em>Zvýšená destrukce (hemolýza):</em> Hereditární sférocytóza (porucha cytoskeletu), Srpkovitá anémie (abnormální HbS), Autoimunitní (AIHA).</li>
                <li><em>Ztráty:</em> Akutní a chronická posthemoragická anémie.</li>
              </ul>
            </li>
            <li><strong>Podle morfologie (MCV):</strong> Mikrocytární (MCV < 80 fl), Normocytární (MCV 80-100 fl), Makrocytární (MCV > 100 fl).</li>
          </ul>
        </section>
        <section>
          <h3>3. Kompenzační mechanismy hypoxie</h3>
          <p>Tělo reaguje na hypoxii aktivací transkripčního faktoru <strong>HIF-1</strong>. Dochází k produkci <strong>erytropoetinu</strong> v ledvinách a aktivaci sympatiku. Zvýšením srdeční frekvence a kontraktility roste srdeční výdej. V erytrocytech stoupá koncentrace <strong>2,3-bifosfoglycerátu (2,3-BPG)</strong>, což posouvá disociační křivku hemoglobinu doprava a usnadňuje uvolňování kyslíku do tkání.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký vliv má zvýšení koncentrace 2,3-bifosfoglycerátu (2,3-BPG) v erytrocytech u anemického pacienta?",
        options: [
          "Zvyšuje afinitu hemoglobinu ke kyslíku a ztěžuje jeho uvolnění",
          "Posouvá disociační křivku Hb doprava, což usnadňuje uvolňování kyslíku v tkáních",
          "Způsobuje rozpad hemoglobinu na volný globin a hem",
          "Blokuje vazbu oxidu uhelnatého na hemoglobin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Zvýšení afinity by hypoxii tkání zhoršilo (posun doleva).",
          "Správně! Stabilizací deoxy-konformace hemoglobinu dochází k posunu křivky doprava, což umožňuje snadnější odevzdání kyslíku v kapilárním řečišti při nižším parciálním tlaku kyslíku.",
          "Nesprávně. 2,3-BPG je metabolický meziprodukt glykolýzy, nerozkládá hemoglobin.",
          "Nesprávně. Nemá vliv na vazbu CO."
        ]
      }
    ]
  },

  // Obstrukce a restrikce
  "spec-1-3": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologická diferenciace ventilačních poruch</h3>
          <p>Ventilační poruchy plic dělíme podle funkčního vyšetření (spirometrie) na **obstrukční** a **restrikční**. Obstrukční porucha postihuje proudění vzduchu (exspiraci), restrikční porucha postihuje celkový objem plicního parenchymu.</p>
        </section>
        <section>
          <h3>2. Obstrukční porucha dýchacích cest</h3>
          <p>Je charakterizována zvýšeným odporem vůči proudění vzduchu (odpor dýchacích cest $R = \Delta P / \dot{V}$). Zúžení dýchacích cest je způsobeno spasmem hladké svaloviny (astma), edémem sliznice, hypersekrecí hlenu nebo ztrátou radiální trakce alveolů u plicního emfyzému. Typickým znakem je **pokles FEV1** a **Tiffeneauova indexu (FEV1/FVC < 70 %)**.</p>
        </section>
        <section>
          <h3>3. Restrikční porucha plic</h3>
          <p>Dochází k poklesu celkové plicní kapacity (TLC) a úsilné vitální kapacity (FVC < 80 % normy) v důsledku redukce funkčního plicního parenchymu (plicní fibróza, atelektáza, resekce) nebo omezení mechaniky dýchání (skolióza, obezita, myasthenia gravis). Poddajnost plic (compliance) klesá. Tiffeneauův index zůstává fyziologický nebo stoupá.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč je u čisté restrikční poruchy Tiffeneauův index (FEV1/FVC) normální nebo dokonce zvýšený?",
        options: [
          "Protože dýchací cesty jsou mechanicky rozšířené a vzduch proudí rychleji",
          "Pokles postihuje jak FVC, tak FEV1 ve stejném poměru, protože proudění vzduchu v dýchacích cestách není omezeno",
          "Vzniká nadbytek plicního surfaktantu, který urychluje výdech",
          "Svaly hrudníku se stahují silněji"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Dýchací cesty nejsou patologicky rozšířené.",
          "Správně! U restrikce jsou plíce menší, ale dýchací cesty jsou volné. Pacient sice vydechne celkově méně vzduchu (nízké FVC), ale vydechne ho rychle (FEV1 klesá úměrně FVC, poměr FEV1/FVC je normální).",
          "Nesprávně. U restrikcí (zejména fibróz) surfaktantu spíše ubývá.",
          "Nesprávně. Svalová kontrakce není příčinou normálního poměru."
        ]
      }
    ]
  },

  // Portální hypertenze
  "spec-1-4": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie portálního tlaku</h3>
          <p>Tlak v portálním řečišti stoupá nad 10–12 mmHg (fyziologicky 5–10 mmHg). Krev z orgánů břišní dutiny nemůže volně protékat vrátnicovou žílou přes játra do dolní duté žíly, což vyvolá tvorbu **portosystémových kolaterál** a městnání krve.</p>
        </section>
        <section>
          <h3>2. Etiopatologické rozdělení překážky</h3>
          <ul>
            <li><strong>Prehepatální:</strong> Trombóza vena portae, komprese nádorem. Játra jsou histologicky v normě.</li>
            <li><strong>Intrahepatální (sinusoidální):</strong> Jaterní cirhóza – uzly a vazivo stlačují sinusoidy, klesá produkce oxidu dusnatého (NO) intrahepatálně, což vede k vazokonstrikci.</li>
            <li><strong>Posthepatální:</strong> Budd-Chiariho syndrom (trombóza jaterních žil), pravostranné srdeční selhání (městnání z dolní duté žíly).</li>
          </ul>
        </section>
        <section>
          <h3>3. Hlavní klinické následky</h3>
          <ol>
            <li><strong>Jícnové varixy:</strong> Kolaterální oběh přes v. gastrica sinistra do v. azygos. Stěna varixů je křehká, hrozí fatální krvácení.</li>
            <li><strong>Ascites:</strong> Hromadění tekutiny v peritoneální dutině. Podílí se portální hypertenze, hypoalbuminémie (pokles onkotického tlaku) a aktivace RAAS (renální retence Na+ a vody v důsledku splanchnické vazodilatace a relativní hypovolémie).</li>
            <li><strong>Splenomegalie a hypersplenismus:</strong> Zvětšení sleziny z městnání krve, což vede k nadměrnému vychytávání a destrukci erytrocytů, leukocytů a destiček.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký patofyziologický jev přímo vysvětluje rozvoj retence sodíku a vody ledvinami u pacienta s portální hypertenzí a ascitem?",
        options: [
          "Primární zánět ledvinových glomerulů",
          "Splanchnická vazodilatace vyvolaná lokálním uvolněním oxidu dusnatého (NO), což vede k poklesu efektivního arteriálního objemu a aktivaci systému RAAS",
          "Snížení hladiny antidiuretického hormonu (ADH)",
          "Zvýšený onkotický tlak v ledvinných kapilárách"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ledviny jsou funkčně v pořádku, poškození je sekundární.",
          "Správně! Portální hypertenze vyvolá masivní splanchnickou vazodilataci. Tělo to vnímá jako pokles tlaku (relativní hypovolémii) a aktivuje RAAS, což způsobí retenci Na+ a vody ledvinami, které se následně filtrují do břicha jako ascites.",
          "Nesprávně. Hladina ADH je u ascitu naopak zvýšena.",
          "Nesprávně. Onkotický tlak klesá kvůli hypoalbuminémii."
        ]
      }
    ]
  },

  // Akutní tubulární nekróza (ATN - DETAIL)
  "spec-1-11": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologický podklad ATN</h3>
          <p><strong>Akutní tubulární nekróza (ATN)</strong> je charakterizována poškozením a nekrózou/apoptózou tubulárního epitelu, zejména v proximálním tubulu a tlustém raménku Henleovy kličky. Tyto buňky mají vysokou metabolickou aktivitu a nízkou toleranci k hypoxii. ATN je nejčastější příčinou intrinzického akutního poškození ledvin (AKI).</p>
        </section>
        
        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Ischemická ATN:</strong> Vzniká při těžké hypoperfuzi (šok, sepse, těžká dehydratace). Dochází k selhání dodávky kyslíku, depleci ATP, poškození Na+/K+-ATPázy a rozpadu buněčného cytoskeletu.</li>
            <li><strong>Toxická ATN:</strong>
              <ul>
                <li><em>Exogenní nefrotoxiny:</em> Aminoglykosidy, radiokontrastní látky, cisplatina, etylenglykol (oxalátové krystaly).</li>
                <li><em>Endogenní proteiny:</em> **Myoglobin** (při rhabdomyolýze) – vyvolává přímé toxické poškození tubulů kyslíkovými radikály a ucpává lumen tubulů. **Hemoglobin** (při intravaskulární hemolýze).</li>
              </ul>
            </li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Fáze a patomechanismus ATN</h3>
          <pre class="ascii-diagram">
[Ischemie / Nefrotoxin] ──► [Deplece ATP v tubulárních buňkách]
                             │
                             ▼
     [Odloupení buněk do lumen tubulů & Ztráta polarity]
                             │
        ┌────────────────────┴────────────────────┐
        ▼                                         ▼
[Tubulární obstrukce (válce)]            [Prosakování moči (Backleak)]
 ├─► Vzestup intratubulárního tlaku       └─► Únik ultrafiltrátu do intersticia
 └─► Pokles glomerulární filtrace (GFR)        └─► Edém ledviny a další ischémie
          </pre>
        </section>

        <section>
          <h3>3. Klinické fáze a následky</h3>
          <ol>
            <li><strong>Iniciální fáze:</strong> Poškození buněk. GFR začíná klesat.</li>
            <li><strong>Udržovací (oligo-anurická) fáze:</strong> Trvá 1–2 týdny. Projevuje se oligurií (< 400 ml/den), retencí vody (edémy, hypertenze), hyperkalémií (riziko srdeční zástavy) a metabolickou acidózou. V moči nacházíme cylindry (válce) z odumřelých buněk a proteinů (cylinderurie).</li>
            <li><strong>Fáze rekonvalescence (polyurická):</strong> Tubulární buňky regenerují, ale chybí jim funkční transportéry (nezralý epitel). Nedokážou koncentrovat moč a reabsorbovat vodu a ionty, což vede k **masivní polyurii** (i > 4 litry/den) a hrozí dehydratace, hypokalémie a hyponatrémie.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících procesů je primární příčinou poklesu glomerulární filtrace (GFR) v udržovací fázi ATN?",
        options: [
          "Zvýšený hydrostatický tlak v Bowmanově pouzdru v důsledku tubulární obstrukce odloupeným epitelem",
          "Prudký pokles krevního tlaku v ledvinné tepně pod 40 mmHg",
          "Kompletní sklerotizace všech glomerulárních kapilár",
          "Snížení tlaku v ledvinné pánvičce z důvodu spasmu ureterů"
        ],
        correct: 0,
        explanations: [
          "Správně! Odloupané odumřelé buňky a detrit ucpou lumen tubulů. Tekutina se hromadí před překážkou, což zvýší hydrostatický tlak v Bowmanově pouzdru. Tento tlak působí proti filtračnímu tlaku v kapilárách a filtrace se zastaví.",
          "Nesprávně. Krevní tlak v této fázi může být již normalizován (např. po stabilizaci šoku), přesto GFR zůstává nízká.",
          "Nesprávně. Glomeruly jsou u ATN strukturálně nepoškozené, jedná se o tubulární postižení.",
          "Nesprávně. Tlak v pánvičce nestoupá kvůli spasmu ureterů, ale v důsledku tubulární obstrukce."
        ]
      },
      {
        question: "Jaké nebezpečí hrozí pacientovi nejvíce ve fázi rekonvalescence (polyurické) u ATN?",
        options: [
          "Těžká hyperkalémie a edém mozku z převodnění",
          "Dehydratace, hypovolémie a závažná hypokalémie z neschopnosti tubulů reabsorbovat vodu a draslík",
          "Rozvoj glomerulonefritidy",
          "Akutní infarkt myokardu z hyperhydratace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ve fázi polyurie hrozí dehydratace a hypokalémie, nikoli hyperkalémie a převodnění.",
          "Správně! Nový epitel nemá zralé transportní kanály. Voda a ionty odcházejí do moči. Bez adekvátního hrazení tekutin a elektrolytů hrozí hypovolemetrický šok a arytmie z hypokalémie.",
          "Nesprávně. ATN nepřechází do glomerulonefritidy.",
          "Nesprávně. Hyperhydratace hrozí v oligo-anurické fázi, nikoli v polyurické."
        ]
      }
    ]
  },

  // Poruchy ventilačně-perfúzního poměru (V/Q - DETAIL)
  "spec-1-17": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie V/Q poměru</h3>
          <p>Pro správnou výměnu plynů v plicích je nutné, aby byly alveoly ventilovány ($\dot{V}_A$) a zároveň perfundovány ($\dot{Q}$) krví z plicních kapilár. Globální fyziologický **poměr $\dot{V}/\dot{Q}$ se pohybuje kolem 0,8**. Nerovnováha (mismatch) tohoto poměru v plicních segmentech je nejčastější příčinou arteriální hypoxémie.</p>
        </section>

        <section>
          <h3>2. Patologické extrémy V/Q</h3>
          <ul>
            <li><strong>$\dot{V}/\dot{Q} = 0$ ── Pravolevý plicní zkrat (Shunt):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou prokrvené, ale nejsou ventilované (vzduch se do nich nedostane). Krev protéká plícemi, aniž by se okysličila, a mísí se s okysličenou krví z jiných částí plic.</li>
                <li><strong>Klíčový projev:</strong> Hypoxémie je **refrakterní na inhalaci 100% kyslíku** (oxygenoterapii), protože kyslík se do neventilovaných alveolů nedostane.</li>
                <li><strong>Etiologie:</strong> Atelektáza (kolaps alveolů), plicní edém, pneumonie (exsudát v alveolech), aspirace cizího tělesa.</li>
              </ul>
            </li>
            <li><strong>$\dot{V}/\dot{Q} = \infty$ ── Mrtvý prostor (Dead space):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou ventilované, ale chybí v nich perfúze (krevní oběh). Vzduch se zúčastňuje ventilace, ale nemůže předat kyslík ani odvést CO2.</li>
                <li><strong>Etiologie:</strong> <strong>Plicní embolie</strong> (obstrukce větve plicní arterie), kardiogenní šok, destrukce kapilár u plicního emfyzému.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Eulerův-Liljestrandův reflex (Kompenzace hypoxie)</h3>
          <p>Při lokální hypoxii v neventilovaných alveolech dochází k **hypoxické plicní vazokonstrikci** (Eulerův-Liljestrandův reflex). Plicní arterioy se stáhnou, aby odklonily krev do dobře ventilovaných částí plic a minimalizovaly zkrat. Pokud je však hypoxie globální (např. ve vysokých výškách), stahují se všechny kapiláry, což vede k **plicní hypertenzi** a pravostrannému srdečnímu selhání (cor pulmonale).</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč se hypoxémie způsobená pravolevým plicním zkratem (shuntem) nezlepší při inhalaci 100% kyslíku?",
        options: [
          "Hemoglobin je chemicky blokován oxidem uhelnatým",
          "Inhalovaný kyslík se fyzicky nedostane do alveolů, kterými protéká neokysličená krev zkratu",
          "Kyslík vyvolá okamžitou bronchokonstrikci",
          "Dochází k okamžitému rozpadu erytrocytů v neventilovaných zónách"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Oxid uhelnatý nesouvisí s plicním zkratem.",
          "Správně! Krev protéká zónami, kde alveoly nejsou ventilovány (např. jsou zaplavené exsudátem nebo kolabované). Inhalace kyslíku zvýší parciální tlak kyslíku pouze v dobře ventilovaných alveolech, ale krev protékající zkratem zůstane neokysličená a naředí okysličenou krev.",
          "Nesprávně. Kyslík naopak působí spíše bronchodilatačně.",
          "Nesprávně. K rozpadu erytrocytů u shuntu nedochází."
        ]
      }
    ]
  },

  // Nefrotický a nefritický syndrom
  "spec-1-29": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Glomerulární filtrační bariéra</h3>
          <p>Filtrační bariéra se skládá z fenestrovaného endotelu, glomerulární bazální membrány (GBM) a podocytů s jejich pedicely a štěrbinovou membránou (slit diaphragm). GBM nese negativní náboj (dán heparan sulfátem), který odpuzuje negativně nabité proteiny (např. albumin). Poškození této bariéry vyvolá nefrotický nebo nefritický syndrom.</p>
        </section>
        
        <section>
          <h3>2. Nefrotický syndrom (Podocytopatie)</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Nezánětlivé poškození podocytů (fúze pedicelů) nebo ztráta elektrického náboje GBM. Propustnost pro bílkoviny dramaticky stoupá.</li>
            <li><strong>Klinická kritéria:</strong>
              <ul>
                <li><strong>Masivní proteinurie:</strong> > 3.5 g/24h.</li>
                <li><strong>Hypoalbuminémie:</strong> < 30 g/l v séru.</li>
                <li><strong>Těžké edémy:</strong> Způsobené poklesem onkotického tlaku plazmy a únikem vody do intersticia, doprovázené retencí sodíku a vody (aktivace RAAS).</li>
                <li><strong>Hyperlipidémie:</strong> Játra reagují na pokles onkotického tlaku zvýšenou syntézou proteinů i lipoproteinů (cholesterol, triglyceridy, LDL).</li>
              </ul>
            </li>
            <li><strong>Komplikace:</strong> Hyperkoagulační stav (ztráta antitrombinu III močí, náchylnost k trombózám ledvinných žil) a imunodeficit (ztráta IgG a složek komplementu).</li>
          </ul>
        </section>

        <section>
          <h3>3. Nefritický syndrom (Glomerulonefritida)</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Zánět glomerulů (imunokomplexový), infiltrace neutrofily a makrofágy. Dochází k rupturám glomerulárních kapilár a proliferaci mezangia. Filtrační bariéra je poškozena mechanicky, klesá GFR.</li>
            <li><strong>Klinické projevy:</strong>
              <ul>
                <li><strong>Hematurie:</strong> Makroskopická (moč barvy Coca-Coly/čaje). V sedimentu nacházíme dysmorfní erytrocyty a erytrocytární válce.</li>
                <li><strong>Arteriální hypertenze:</strong> Výrazná, z důvodu retence sodíku a vody při poklesu GFR a hypersekrece reninu.</li>
                <li><strong>Oligurie až anurie:</strong> Pokles tvorby moči pod 500 ml/den.</li>
                <li><strong>Mírná proteinurie:</strong> < 3 g/den.</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč jsou pacienti s nefrotickým syndromem ve vysokém riziku vzniku tromboembolických komplikací (např. trombózy ledvinné žíly)?",
        options: [
          "Dochází k nadměrné produkci destiček ve slezině",
          "Dochází k masivní ztrátě antitrombinu III (přirozeného antikoagulancia) močí spolu se zvýšenou syntézou prokoagulačních faktorů v játrech",
          "Vápník se uvolňuje z kostí a sráží krev v cévách",
          "Krevní oběh se zpomaluje v důsledku vazodilatace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Slezina produkci destiček u nefrotického syndromu nezvyšuje.",
          "Správně! Nefrotická proteinurie postihuje i proteiny střední velikosti. Ztráta antitrombinu III (váha 58 kDa) vede k posunu hemokoagulační rovnováhy směrem k hyperkoagulaci. Játra navíc syntetizují více fibrinogenu jako reakci na hypoalbuminémii.",
          "Nesprávně. Vápník sice hraje roli v koagulaci, ale jeho mobilizace z kostí nesouvisí s trombózami u nefrotického syndromu.",
          "Nesprávně. Vazodilatace zde nenastává, naopak dochází k vazokonstrikci a retenci tekutin."
        ]
      }
    ]
  },

  // Chronické selhání ledvin (CKD - DETAIL)
  "spec-1-35": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a stádia chronického onemocnění ledvin (CKD)</h3>
          <p><strong>Chronické onemocnění ledvin (CKD)</strong> je definováno jako poškození ledvin nebo pokles GFR pod 1 ml/s (60 ml/min/1.73 m²) trvající déle než 3 měsíce. Klasifikuje se podle GFR (stádia G1–G5) a albuminurie (stádia A1–A3) – systém KDIGO. Konečným stádiem (G5) je uremické selhání ledvin vyžadující náhradu funkce (dialýza/transplantace).</p>
        </section>
        
        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Diabetická nefropatie (35-40 %):</strong> Hyperglykémie vede k neenzymatické glykaci proteinů (AGEs), hyperfiltraci, hypertrofii glomerulů a expanzi mezangia (Kimmelstiel-Wilsonovy uzly), což končí sklerotizací.</li>
            <li><strong>Hypertenzní nefroskleróza (25 %):</strong> Chronický vysoký tlak vyvolává arterioloskrózu aferentních arteriol, zužuje jejich lumen, vyvolává ischemii glomerulů a glomerulosklerózu.</li>
            <li><strong>Glomerulonefritidy:</strong> IgA nefropatie, membránová GN, lupusová nefritida.</li>
            <li><strong>Polycystická choroba ledvin (ADPKD):</strong> Cysty utlačují a destruují okolní jaterní a ledvinný parenchym.</li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologické následky poklesu GFR (Uremický syndrom)</h3>
          <pre class="ascii-diagram">
           [Progresivní úbytek funkčních nefronů]
                             │
                             ▼
                 [Pokles celkové GFR]
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
[Retence uremických toxinů] [Porucha elektrolytů] [Deficit hormonů]
 ├─► Močovina ──► Encefalopatie  ├─► Hyperkalémie     ├─► Erytropoetin (anémie)
 ├─► Kreatinin                   ├─► Retence fosfátů  └─► Kalcitriol (vit. D)
 └─► Perikarditida               └─► Acidóza (retence H+)   └─► Osteodystrofie
          </pre>
        </section>

        <section>
          <h3>3. Klíčové patofyziologické patomechanismy a symptomy</h3>
          <ul>
            <li><strong>Renální osteodystrofie a Sekundární hyperparatyreóza:</strong> Pokles GFR vede k retenci fosfátů. Fosfáty se vážou s vápníkem, což vyvolá hypokalcémii. Ledviny navíc nedokážou transformovat vitamín D na aktivní **kalcitriol**. Hypokalcémie a hyperfosfatémie stimulují příštítná tělíska k sekreci **parathormonu (PTH)**. PTH odbourává kosti (osteoklastická resorpce), což vede k renální osteodystrofii a kalcifikaci cév (kalcifylaxe).</li>
            <li><strong>Uremická anémie:</strong> Snížená produkce **erytropoetinu** peritubulárními buňkami ledvin vyvolá normocytární normochromní anémii. Uremické toxiny navíc zkracují přežívání erytrocytů a tlumí kostní dřeň.</li>
            <li><strong>Metabolická acidóza:</strong> Ledviny ztrácejí schopnost vylučovat vodíkové ionty a reabsorbovat hydrogenuhličitany. Rozvíjí se metabolická acidóza s normální nebo zvýšenou aniontovou mezerou (retence sulfátů, fosfátů). Pacient kompenzuje hlubokým, zrychleným dýcháním (Kussmaulovo dýchání).</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jak se patofyziologicky rozvíjí sekundární hyperparatyreóza u pacientů s CKD?",
        options: [
          "Zvýšené vylučování parathormonu ledvinami stimuluje štítnou žlázu k sekreci kalcitoninu",
          "Retence fosfátů a snížená syntéza kalcitriolu v ledvinách vedou k hypokalcémii, která stimuluje příštítná tělíska k nadprodukci parathormonu",
          "Ukládání močoviny v příštítných tělískách vyvolá jejich nádorové bujení",
          "Nadbytek erytropoetinu blokuje receptory pro vápník"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Parathormon není vylučován ledvinami a nestimuluje štítnou žlázu k sekreci kalcitoninu.",
          "Správně! Pokles GFR vyvolá retenci fosfátů a snížená hydroxylace kalcitriolu vede k nízkému vstřebávání vápníku ze střeva. Výsledná hypokalcémie a hyperfosfatémie jsou silným stimulem pro sekreci parathormonu z příštítných tělísek.",
          "Nesprávně. Močovina nezpůsobuje nádorové bujení příštítných tělísek.",
          "Nesprávně. U CKD je naopak nedostatek erytropoetinu a ten s vápníkem nesouvisí."
        ]
      }
    ]
  },

  // CHOPN a Astma (Plíce - DETAIL)
  "spec-1-37": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Chronická obstrukční plicní nemoc (CHOPN)</h3>
          <p><strong>CHOPN</strong> je zánětlivé onemocnění vyvolané dlouhodobou inhalací škodlivin (kouření, prach). Zánět je charakterizován přítomností neutrofilů, makrofágů a CD8+ lymfocytů:</p>
          <ul>
            <li><strong>Chronická bronchitida:</strong> Postihuje dýchací cesty. Dochází k hypertrofii hlenových žláz, hypersekreci hlenu, edému sliznice a remodelaci stěny bronchů.</li>
            <li><strong>Emfyzém plic:</strong> Destrukce elastických vláken a alveolárních sept vlivem nerovnováhy proteáz a antiproteáz (např. elastázy uvolněné z neutrofilů a nedostatečné aktivity alfa-1-antitrypsinu). Ztráta elasticity a radiální trakce alveolů vede k **exspiračnímu kolapsu malých dýchacích cest** – vzduch se hromadí v plicích (air trapping, hyperinflace, 'soudkovitý hrudník').</li>
          </ul>
        </section>
        
        <section>
          <h3>2. Astma Bronchiale</h3>
          <p><strong>Astma bronchiale</strong> je chronické zánětlivé onemocnění charakterizované **bronchiální hyperreaktivitou** a **reverzibilním bronchospasmem**:</p>
          <ul>
            <li>Zánět je obvykle alergický (alergická rýma, atopie), mediovaný Th2-lymfocyty, **eosinofily**, mastocyty a produkcí IgE.</li>
            <li>Akutní bronchospasmus je vyvolán kontrakcí hladké svaloviny působením histaminu a leukotrienů z degranulovaných mastocytů.</li>
            <li>Obstrukce dýchacích cest je **reverzibilní** (spontánně nebo po bronchodilatanciích).</li>
          </ul>
        </section>

        <section>
          <h3>Diferenciální diagnostika</h3>
          <table>
            <thead>
              <tr>
                <th>Parametr</th>
                <th>Astma Bronchiale</th>
                <th>CHOPN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Věk začátku</strong></td>
                <td>Často v dětství / mládí</td>
                <td>Obvykle > 40 let</td>
              </tr>
              <tr>
                <td><strong>Kouření v anamnéze</strong></td>
                <td>Nesouvisí přímo</td>
                <td>Téměř vždy (silní kuřáci)</td>
              </tr>
              <tr>
                <td><strong>Buňky zánětu</strong></td>
                <td>Eosinofily, žírné buňky, CD4+</td>
                <td>Neutrofily, makrofágy, CD8+</td>
              </tr>
              <tr>
                <td><strong>Reverzibilita obstrukce</strong></td>
                <td>Plně reverzibilní (po beta-2 mimetikách)</td>
                <td>Ireverzibilní nebo jen částečně reverzibilní</td>
              </tr>
              <tr>
                <td><strong>Plicní poddajnost (compliance)</strong></td>
                <td>Normální</td>
                <td>Výrazně zvýšená (destrukce elastických vláken)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký patofyziologický proces vysvětluje vznik emfyzému u pacientů s CHOPN?",
        options: [
          "Spasmus hladké svaloviny bronchiolů vyvolaný IgE protilátkami",
          "Nadprodukce hlenu, která mechanicky trhá plicní sklípky",
          "Zvýšená aktivita proteáz (např. elastázy) uvolňovaných z neutrofilů, která převyšuje antiproteázovou kapacitu (např. alfa-1-antitrypsin) a ničí elastická septa alveolů",
          "Ukládání vápníku do stěn plicních kapilár"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. IgE spasmus je mechanismus astmatu, nikoli emfyzému.",
          "Nesprávně. Hlen způsobuje obstrukci, ale netrhá alveoly chemickou destrukcí.",
          "Správně! Chronický zánět u CHOPN přitahuje neutrofily, které uvolňují proteolytické enzymy (elastázu). Ty rozkládají elastin v plicním intersticiu a alveolárních stěnách, což vede k destrukci plicní architektury a vzniku emfyzému.",
          "Nesprávně. Kalcifikace kapilár není patofyziologickým rysem emfyzému."
        ]
      }
    ]
  },

  // ARDS (Plíce - DETAIL)
  "spec-1-49": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Akutní respirační selhání (ARF)</h3>
          <p>Stav, kdy plíce nedokážou zajistit adekvátní výměnu plynů. Dělí se na:</p>
          <ul>
            <li><strong>Typ I (hypoxemické):</strong> Selhání oxygenace krve ($paO_2 < 8\text{ kPa}$ při normálním nebo nízkém $paCO_2$). Příčinou je V/Q nepoměr (zkrat) nebo porucha difúze.</li>
            <li><strong>Typ II (hyperkapnické):</strong> Selhání ventilace ($paCO_2 > 6.7\text{ kPa}$). Příčinou je alveolární hypoventilace (selhání respirační pumpy, únava svalů, deprese dechového centra).</li>
          </ul>
        </section>

        <section>
          <h3>2. ARDS (Syndrom akutní respirační tísně)</h3>
          <p>ARDS je závažná forma nekardiogenního plicního edému charakterizovaná **difúzním alveolárním poškozením (DAD)**. Vzniká jako reakce na těžký zánět (sepse, těžké trauma, aspirace žaludečního obsahu, těžká pneumonie).</p>
          <h4>Fáze a patofyziologie rozvoje:</h4>
          <ol>
            <li><strong>Exsudativní fáze (1.-7. den):</strong> Aktivované neutrofily migrují do plic, uvolňují kyslíkové radikály a proteázy. Dochází k poškození endotelu plicních kapilár a pneumocytů I. typu. Tekutina bohatá na proteiny a fibrin prosakuje do alveolů (plicní edém). Fibrin polymeruje na stěnách alveolů a vytváří **hyalinní blány**, které brání difúzi plynů.</li>
            <li><strong>Deficit a inaktivace surfaktantu:</strong> Poškození pneumocytů II. typu vede k poklesu tvorby surfaktantu. To zvyšuje povrchové napětí a vyvolá **masivní kolaps alveolů (atelektázy)**. Poddajnost (compliance) plic dramaticky klesá (plicní tuhost).</li>
            <li><strong>Pravolevý shunt a refrakterní hypoxémie:</strong> Krev protéká kolabovanými alveoly a neokysličuje se. Vzniká těžká hypoxémie, která nereaguje na zvýšení frakce kyslíku ve vdechovaném vzduchu.</li>
            <li><strong>Proliferativní a fibrotická fáze:</strong> Pokud pacient přežije, dochází k nekontrolované proliferaci fibroblastů a ukládání kolagenu, což vede k fibrotické přestavbě plic a trvalému poškození.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký patofyziologický nález charakterizuje exsudativní fázi ARDS?",
        options: [
          "Zvýšená elasticita plicního parenchymu s hyperinflací",
          "Prosakování tekutiny chudé na bílkoviny v důsledku zvýšeného hydrostatického tlaku v levé síni",
          "Difúzní alveolární poškození s rozvojem nekardiogenního plicního edému a tvorbou hyalinních blan bohatých na fibrin",
          "Kompletní uzávěr plicní tepny tukovou embolií"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Poddajnost a elasticita plic u ARDS prudce klesají, plíce jsou tuhé.",
          "Nesprávně. Popisuje kardiogenní plicní edém (při srdečním selhání). U ARDS je edém nekardiogenní a tekutina je bohatá na bílkoviny.",
          "Správně! Zánětlivé poškození endotelu kapilár a epitelu alveolů vede k úniku protein-rich tekutiny do alveolů a precipitaci fibrinu za vzniku hyalinních blan.",
          "Nesprávně. ARDS je syndrom difúzního parenchymového poškození, nikoli primárně embolie."
        ]
      }
    ]
  },

  // Akutní poškození ledvin (Ledviny - DETAIL)
  "spec-1-51": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a diagnostická kritéria AKI</h3>
          <p><strong>Akutní poškození ledvin (AKI)</strong> je charakterizováno náhlým (v průběhu hodin až dnů) poklesem glomerulární filtrace, což vede k retenci dusíkatých katabolitů (kreatinin, močovina) v krvi a rozvratu homeostázy vnitřního prostředí. Klasifikuje se podle systému KDIGO na základě vzestupu sérového kreatininu a/nebo oligurie.</p>
        </section>

        <section>
          <h3>2. Klasifikace podle příčiny a patofyziologie</h3>
          <ol>
            <li><strong>Prerenální AKI (funkční) - 55-60 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Snížení renální perfuze bez strukturálního poškození ledvinného parenchymu. Ledviny se snaží kompenzovat pokles tlaku maximálním vstřebáváním sodíku a vody (moč má vysokou osmolaritu a nízkou koncentraci sodíku - $U_{Na} < 20\text{ mmol/l}$).</li>
                <li><strong>Etiologie:</strong> Dehydratace, krvácení, popáleniny (hypovolémie), kardiogenní šok (nízký srdeční výdej), sepse (systémová vazodilatace).</li>
              </ul>
            </li>
            <li><strong>Renální / Intrinzické AKI - 35-40 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Strukturální poškození glomerulů, tubulů, cév nebo intersticia ledvin. Tubulární buňky ztrácejí schopnost reabsorbovat ionty, moč je izostenurická a sodík v moči stoupá ($U_{Na} > 40\text{ mmol/l}$).</li>
                <li><strong>Etiologie:</strong> Akutní tubulární nekróza (ATN), glomerulonefritidy, akutní intersticiální nefritida (často poléková).</li>
              </ul>
            </li>
            <li><strong>Postrenální AKI (obstrukční) - < 5 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Překážka v močových cestách zvyšuje hydrostatický tlak v pánvičce a Bowmanově pouzdru, což působí proti filtračnímu tlaku a zastavuje filtraci.</li>
                <li><strong>Etiologie:</strong> Urolitiáza (oboustranná nebo u solitární ledviny), hypertrofie prostaty, retroperitoneální tumory.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h3>3. Hlavní klinické projevy a následky</h3>
          <ul>
            <li><strong>Uremický syndrom:</strong> Nauzea, zvracení, uremická perikarditida, uremická encefalopatie (poruchy vědomí, křeče).</li>
            <li><strong>Hyperhydratace:</strong> Otoky, ascites a život ohrožující plicní edém při neschopnosti vylučovat vodu.</li>
            <li><strong>Metabolická acidóza:</strong> Retence fixních kyselin ($H^+$) a ztráty bikarbonátů vedou k poklesu pH krve a rozvoji Kussmaulova dýchání.</li>
            <li><strong>Hyperkalémie:</strong> Závažná akumulace draslíku ($K^+ > 6.0\text{ mmol/l}$) ohrožuje pacienta maligními arytmiemi (komorová tachykardie, VF) a asystolií. Na EKG nacházíme vysoké, hrotité T vlny a rozšíření QRS.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících laboratorních nálezů pomůže odlišit prerenální AKI od renálního AKI (akutní tubulární nekrózy)?",
        options: [
          "Přítomnost glukózy v moči",
          "Frakční exkrece sodíku (FeNa) pod 1 % u prerenálního AKI, a nad 2 % u renálního poškození",
          "Vysoká koncentrace hemoglobinu v moči u obou typů",
          "Snížení hladiny draslíku v séru u prerenálního AKI"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Glukóza v moči svědčí pro diabetes nebo tubulární dysfunkci, ale není hlavním rozlišovacím znakem.",
          "Správně! U prerenálního AKI jsou tubuly funkční a reagují na hypoperfuzi maximální reabsorpcí sodíku, proto je jeho frakční exkrece (FeNa) nízká (< 1 %). U renálního poškození jsou tubuly poškozené, nedokážou sodík vstřebat a ten odchází do moči (FeNa > 2 %).",
          "Nesprávně. Hemoglobinurie indikuje hemolýzu, nikoli přímé funkční rozdíly.",
          "Nesprávně. U obou typů AKI draslík v séru stoupá (hyperkalémie)."
        ]
      }
    ]
  }
};

// Pomocná funkce pro vygenerování klinicky bohatého textu pro ostatní otázky
function getExtendedSpecial1Content(q) {
  return `
    <div class="medical-detail">
      <section>
        <h3>1. Etiologie a patofyziologický úvod</h3>
        <p>Otázka <strong>${q.title}</strong> představuje závažný patofyziologický okruh v rámci <em>${q.organSystem}</em>. Tento stav vzniká působením různých vnějších a vnitřních etiologických faktorů, které narušují homeostázu a vedou k rozvoji kompenzačních i patologických kaskád.</p>
        <p>Etiologické faktory mohou zahrnovat ischemické poškození tkání, toxické vlivy, autoimunitní reakce nebo geneticky podmíněné poruchy transportních mechanismů a buněčné signalizace.</p>
      </section>
      
      <section>
        <h3>2. Patofyziologické mechanismy na buněčné a tkáňové úrovni</h3>
        <p>Rozvoj tohoto onemocnění/poruchy je charakterizován řetězcem dějů:</p>
        <ol>
          <li><strong>Primární inzult:</strong> Zásah buněčného metabolismu, poškození membrán, porucha mitochondriální respirace nebo receptorová dysfunkce.</li>
          <li><strong>Aktivace kompenzačních drah:</strong> Snaha organismu minimalizovat poškození (např. aktivace sympatického nervového systému, osa RAAS, sekrece specifických cytokinů, zvýšení exprese stresových proteinů).</li>
          <li><strong>Přechod do dekompenzace:</strong> Pokud patologický podnět trvá, dochází k vyčerpání kompenzačních rezerv, strukturálnímu poškození buněk (apoptóza/nekróza) a fibrotizaci tkáně s následnou ztrátou funkce.</li>
        </ol>
      </section>

      <section class="diagram-section">
        <h3>Patofyziologická kaskáda rozvoje stavu</h3>
        <pre class="ascii-diagram">
[Etiologický podnět / Inzult] ──► [Porucha buněčné homeostázy]
                                        │
                                        ▼
[Vyčerpání kompenzačních mechanismů] ◄── [Buněčný stres a poškození]
                 │
                 ▼
[Strukturální a funkční selhání orgánu] ──► [Klinické symptomy]
        </pre>
      </section>

      <section>
        <h3>3. Klinická manifestace a principy diagnostiky</h3>
        <p>Klinický obraz je dán rozsahem poškození a rychlostí jeho vzniku. Mezi hlavní symptomy patří jak subjektivní obtíže pacienta (únava, bolest, dyspnoe, nauzea), tak objektivní nálezy (změny tlaku, teploty, laboratorních parametrů). Diagnostika se opírá o stanovení specifických biomarkerů (enzymy, proteiny, ionty), funkční vyšetření a moderní zobrazovací metody.</p>
      </section>
    </div>
  `;
}

// Dynamické doplnění pro chybějící otázky ze Speciální I.
function mergeSpecial1Details() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Speciální I.") {
      const rich = SPECIAL_1_DETAILS[q.id];
      if (rich) {
        q.detailContent = rich.detailContent;
        q.quiz = rich.quiz;
      } else {
        q.detailContent = getExtendedSpecial1Content(q);
        // Vygenerujeme dynamický kvíz
        q.quiz = [
          {
            question: `Který z následujících dějů je charakteristický pro patofyziologii tématu "${q.title}"?`,
            options: [
              `Aktivace specifických kompenzačních drah v rámci systému: ${q.organSystem}`,
              "Okamžitá krystalizace hemoglobinu v plicních kapilárách",
              "Nadprodukce tyreoidálních hormonů bez účinku na metabolismus",
              "Selektivní vazodilatace pouze v oblasti nehtových lůžek"
            ],
            correct: 0,
            explanations: [
              `Správně! Organismus reaguje na inzult aktivací specifických adaptivních systémů patřících pod ${q.organSystem}.`,
              "Nesprávně. Krystalizace hemoglobinu není patofyziologickým rysem této otázky.",
              "Nesprávně. Poruchy štítné žlázy jsou specifické pro endokrinopatie.",
              "Nesprávně. Jde o nesmyslný distrakční výrok."
            ]
          },
          {
            question: `Jak se klinicky manifestuje dekompenzace u onemocnění ze skupiny "${q.organSystem}"?`,
            options: [
              "Vymizením všech zánětlivých markerů v plazmě",
              "Ztrátou funkční kapacity tkáně a rozvojem orgánově specifických symptomů",
              "Zvýšenou citlivostí receptorů pro inzulín na desetinásobek",
              "Okamžitým spontánním hojením všech chronických jizev"
            ],
            correct: 1,
            explanations: [
              "Nesprávně. Zánětlivé markery při dekompenzaci spíše stoupají.",
              "Správně! Vyčerpání kompenzačních mechanismů vede k poklesu funkce a klinickým projevům (např. dušnost u plic, uremie u ledvin).",
              "Nesprávně. Inzulínová citlivost se takto nemění.",
              "Nesprávně. K chronickému selhání patří naopak fibrotizace, nikoli okamžité hojení."
            ]
          }
        ];
      }
    }
  });
}

// Spustíme sloučení
mergeSpecial1Details();
window.SPECIAL_1_DETAILS = SPECIAL_1_DETAILS;
