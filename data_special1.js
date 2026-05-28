// data_special1.js
// Obsahuje bohaté texty a kvízy pro "Speciální patofyziologii I."

const SPECIAL_1_DETAILS = {
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
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
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
          "Nesprávně. Zablokování sodíkových kanálů by vedlo k asystolii, nikoli k fibrilaci komor."
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
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký vliv má zvýšení koncentrace 2,3-bifosfoglycerátu (2,3-BPG) v erytrocytech u anemického pacienta?",
        options: [
          "Zvyšuje afinitu hemoglobinu ke kyslíku",
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

  "spec-1-3": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologická diferenciace ventilačních poruch</h3>
          <p>Ventilační poruchy plic dělíme podle funkčního vyšetření (spirometrie) na **obstrukční** a **restrikční**. Obstrukční porucha postihuje proudění vzduchu (exspiraci), restrikční porucha postihuje celkový objem plicního parenchymu.</p>
        </section>
        <section>
          <h3>2. Obstrukční porucha dýchacích cest</h3>
          <p>Je charakterizována zvýšeným odporem vůči proudění vzduchu (odpor dýchacích cest R). Zúžení dýchacích cest je způsobeno spasmem hladké svaloviny (astma), edémem sliznice, hypersekrecí hlenu nebo ztrátou radiální trakce alveolů u plicního emfyzému. Typickým znakem je **pokles FEV1** a **Tiffeneauova indexu (FEV1/FVC < 70 %)**.</p>
        </section>
        <section>
          <h3>3. Restrikční porucha plic</h3>
          <p>Dochází k poklesu celkové plicní kapacity (TLC) a úsilné vitální kapacity (FVC < 80 % normy) v důsledku redukce funkčního plicního parenchymu (plicní fibróza, atelektáza, resekce) nebo omezení mechaniky dýchání (skolióza, obezita, myasthenia gravis). Poddajnost plic (compliance) klesá. Tiffeneauův index zůstává fyziologický nebo stoupá.</p>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč je u čisté restrikční poruchy Tiffeneauův index (FEV1/FVC) normální nebo dokonce zvýšený?",
        options: [
          "Protože dýchací cesty jsou mechanicky rozšířené a vzduch proudí rychleji",
          "Pokles postihuje jak FVC, tak FEV1 ve stejném poměru, protože proudění vzduchu v dýchacích cestách není omezeno",
          "Vzniká nadbytek plicního surfaktantu",
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
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
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

  "spec-1-5": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Trombocytopenie (pokles počtu trombocytů pod 150x10^9/l) a trombocytopatie (kvalitativní dysfunkce destiček při normálním počtu). Způsobují poruchy primární hemostázy a sklon k petechiálnímu krvácení.",
      etiology: [
        "Trombocytopenie z poruchy tvorby: aplastická anémie, infiltrace dřeně nádorem (myeloftíza), deficit B12/folátu.",
        "Trombocytopenie ze zvýšené destrukce: autoimunitní (ITP), poléková, konzumpce při DIC, sekvestrace ve zvětšené slezině.",
        "Trombocytopatie vrozené: Bernard-Soulierův syndrom (deficit GP Ib/IX/V), Glanzmannova trombastenie (deficit GP IIb/IIIa).",
        "Trombocytopatie získané: inhibice kyselinou acetylsalicylovou (ireverzibilní blokáda COX-1), uremické toxiny při chronickém selhání ledvin."
      ],
      pathogenesis: [
        "Nedostatek nebo dysfunkce destiček znemožňuje jejich adhezi k subendotelovému kolagenu (vazba přes von Willebrandův faktor).",
        "Chybí aktivace, degranulace (uvolnění ADP, TxA2) a následná agregace destiček přes fibrinogenový můstek GP IIb/IIIa.",
        "Nevytvoří se primární destičková zátka (bílý trombus), což prodlužuje krvácivost, přestože plazmatické koagulační časy (Quick, APTT) mohou být v normě."
      ],
      clinicalManifestation: [
        "Petechie a purpura (drobné tečkovité krvácení do kůže a sliznic spouštěné hydrostatickým tlakem).",
        "Slizniční krvácení: epistaxe, gingivoragie, menoragie (silné menstruační krvácení).",
        "Zvýšené riziko fatálního krvácení do CNS při poklesu trombocytů pod 10-20x10^9/l."
      ],
      diagnostics: [
        "Počet destiček v krevním obrazu (odhalí trombocytopenii).",
        "Vyšetření doby krvácivosti (prodloužená u obou stavů) a funkční agregometrie destiček (odhalí konkrétní trombocytopatii).",
        "Nátěr periferní krve k vyloučení pseudotrombocytopenie (shlukování destiček v přítomnosti EDTA)."
      ]
    },
    quiz: [
      {
        question: "Která z následujících patologií je podstatou Bernard-Soulierova syndromu?",
        options: [
          "Defekt nebo absence membránového glykoproteinu GP IIb/IIIa znemožňující agregaci destiček přes fibrinogen",
          "Defekt nebo absence glykoproteinového receptoru GP Ib/IX/V, který slouží pro adhezi destiček k subendotelovému kolagenu přes vWF",
          "Absolutní nedostatek megakaryocytů v kostní dřeni",
          "Autozomálně dominantní nadprodukce destiček"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Defekt GP IIb/IIIa je podstatou Glanzmannovy trombastenie.",
          "Správně! Bernard-Soulierův syndrom je vrozená trombocytopatie charakterizovaná defektem receptoru pro von Willebrandův faktor (vWF), což znemožňuje základní krok primární hemostázy – adhezi destiček k poškozené cévní stěně.",
          "Nesprávně. Jde o kvalitativní poruchu stávajících destiček, nikoliv o destrukci megakaryocytů.",
          "Nesprávně. Bernard-Soulierův syndrom je provázen spíše mírnou trombocytopenií."
        ]
      }
    ]
  },

  "spec-1-6": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Systémová arteriální hypotenze je definována poklesem krevního tlaku pod 90 mmHg systoly a 60 mmHg diastoly. Způsobuje snížení perfuzního tlaku ve tkáních a rozvoj orgánové hypoperfuze.",
      etiology: [
        "Ortostatická hypotenze: porucha baroreflexu (autonomní neuropatie u diabetu, Parkinsonova choroba, starší věk).",
        "Absolutní hypovolémie: akutní krvácení, dehydratace (zvracení, průjmy, nadměrná diuréza), popáleniny.",
        "Snížený srdeční výdej: kardiogenní šok, těžká bradykardie, srdeční tamponáda, chlopenní stenózy.",
        "Farmakologické vlivy: předávkování antihypertenzivy (diuretika, beta-blokátory, nitráty)."
      ],
      pathogenesis: [
        "Pokles krevního objemu nebo minutového výdeje vede k poklesu středního arteriálního tlaku (MAP = CO x SVR).",
        "Selhání kompenzační vazokonstrikce v periferním řečišti (např. při dysautonomii) při postavení (ortostáza).",
        "Snížení perfuze mozku pod kritickou mez vyvolá ischemii dechového a vazomotorického centra."
      ],
      clinicalManifestation: [
        "Závratě, mžitky před očima, pocení, slabost a synkopa (náhlá, krátkodobá ztráta vědomí) při postavení.",
        "Tkáňová hypoperfuze: studená, opocená kůže, oligurie (snížená filtrace v ledvinách při poklesu perfuzního tlaku).",
        "Tachykardie jako kompenzační reakce baroreceptorů na nízký tlak (pokud není tlumena léky)."
      ],
      diagnostics: [
        "Opakované měření krevního tlaku tonometrem v leže, vsedě a po postavení (ortostatický test).",
        "24hodinové monitorování tlaku (AMTK) k zachycení skrytých hypotenzních epizod.",
        "Tilt-table test (test na nakloněné rovině) pro průkaz vazovagální a ortostatické synkopy."
      ]
    },
    quiz: [
      {
        question: "Jak definujeme ortostatickou hypotenzi při klinickém testu (postavení pacienta)?",
        options: [
          "Vzestup krevního tlaku o více než 10 mmHg",
          "Pokles systolického tlaku o nejméně 20 mmHg a/nebo diastolického o nejméně 10 mmHg do 3 minut po postavení",
          "Zvýšení tepové frekvence na dvojnásobek bez změny tlaku",
          "Okamžitý rozvoj bezvědomí bez změny naměřeného tlaku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Při postavení tlak u ortostatické hypotenze klesá.",
          "Správně! Diagnostickým kritériem ortostatické hypotenze je pokles systolického tlaku o ≥ 20 mmHg nebo diastolického o ≥ 10 mmHg, který nastává v důsledku gravitací vyvolaného městnání krve v dolních končetinách a selhání baroreflexu.",
          "Nesprávně. Tep stoupat může (kompenzačně), ale kritériem je pokles tlaku.",
          "Nesprávně. Synkopa nastat může, ale definice stojí na exaktním poklesu tlaku."
        ]
      }
    ]
  },

  "spec-1-7": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Tachyarytmie jsou poruchy srdečního rytmu s frekvencí nad 100/min. Dělí se na supraventrikulární (SVT - nad Hissovým svazkem) a ventrikulární (VT - komorové, ohrožující život).",
      etiology: [
        "Ischemie myokardu: akutní infarkt myokardu a jizvy (hlavní spouštěč komorových tachykardií).",
        "Strukturální onemocnění srdce: kardiomyopatie, chlopenní vady, myokarditida.",
        "Vrozené preexcitační syndromy: přítomnost přídatné dráhy obcházející AV uzel (Wolff-Parkinson-White - WPW syndrom).",
        "Extrakardiální vlivy: hypertyreóza, elektrolytové rozvraty (hypokalémie), sympatomimetika (kofein, kokain, alkohol)."
      ],
      pathogenesis: [
        "Mechanismus *Reentry* (kroužení vzruchu): vyžaduje přítomnost dvou drah s rozdílnou rychlostí vedení a refrakterní fází (např. u fibrilace síní, AVNRT, WPW).",
        "Abnormální automaticita: ektopické ložisko generuje impulsy rychleji než sinusový uzel.",
        "Spouštěná aktivita: vznik časných nebo pozdních následných depolarizací (např. prodloužený interval QT)."
      ],
      clinicalManifestation: [
        "Palpitace (pocit bušení srdce), dušnost, bolest na hrudi, závratě.",
        "Synkopa a kardiogenní šok při extrémně vysoké frekvenci, kdy zkrácená diastola znemožňuje plnění komor a klesá srdeční výdej.",
        "Fibrilace komor a náhlá srdeční smrt (u maligních komorových arytmií)."
      ],
      diagnostics: [
        "12svodové EKG (SVT mají úzké QRS komplexy, komorové VT mají široké QRS).",
        "24hodinový EKG Holter k záchytu paroxysmálních (záchvatovitých) arytmií.",
        "Elektrofyziologické vyšetření (EFV) k přesné lokalizaci reentry okruhu."
      ]
    },
    quiz: [
      {
        question: "Jaký EKG nález je charakteristický pro syndrom Wolff-Parkinson-White (WPW)?",
        options: [
          "Prodloužení intervalu PQ nad 220 ms",
          "Zkrácení intervalu PQ pod 120 ms, přítomnost vlny delta na vzestupné části komplexu QRS a rozšíření QRS",
          "Otočení elektrické osy srdeční extrémně doprava",
          "Deprese ST segmentu ve všech hrudních svodech"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Prodloužené PQ je známkou AV bloku.",
          "Správně! U WPW syndromu existuje přídatná dráha (Kentův svazek), která vede vzruch ze síní na komory rychleji než AV uzel. To zkrátí PQ a vyvolá předčasnou depolarizaci části komory (vlna delta na začátku QRS).",
          "Nesprávně. Osa závisí na hypertrofii či blocích, ne přímo na preexcitaci.",
          "Nesprávně. Deprese ST značí ischemii, ne preexcitaci."
        ]
      }
    ]
  },

  "spec-1-8": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Pravostranné srdeční selhání je charakterizováno neschopností pravé komory přečerpat krev z venózního systému do plicního řečiště, což vede k městnání krve ve velkém oběhu.",
      etiology: [
        "Levostranné srdeční selhání (nejčastější příčina - retrográdní přenos tlaku přes plicní cirkulaci).",
        "Chronické plicní nemoci (CHOPN, těžká plicní fibróza) vedoucí k rozvoji *Cor pulmonale*.",
        "Akutní plicní embolie (masivní uzávěr plicnice způsobí akutní přetížení a selhání pravé komory).",
        "Chlopenní vady pravého srdce: trikuspidální regurgitace, pulmonální stenóza."
      ],
      pathogenesis: [
        "Vzestup tlaku v plicní arterii zvyšuje dotížení (afterload) pravé komory.",
        "Pravá komora reaguje nejprve hypertrofií, následně dilatací a poklesem kontraktility.",
        "Klesá plnění levého srdce (pokles srdečního výdeje) a stoupá hydrostatický tlak v dutých žílách, což vede k úniku tekutiny do intersticia."
      ],
      clinicalManifestation: [
        "Zvýšená náplň krčních žil (jugulární žilní distenze).",
        "Symetrické otoky dolních končetin (kolem kotníků, u ležících pacientů v oblasti sakra).",
        "Městnání v břišních orgánech: městnavá hepatomegalie (hepatosplenomegalie, bolestivé napětí v pravém podžebří), ascites."
      ],
      diagnostics: [
        "Echokardiografie (hodnocení tlaku v plicnici - sPAP, dilatace a funkce pravé komory - TAPSE).",
        "Rentgen hrudníku (zvětšení pravého srdce bez plicního městnání, pokud je izolované).",
        "Laboratorní stanovení natriuretických peptidů (NT-proBNP / BNP) jako markerů roztažení stěny komor."
      ]
    },
    quiz: [
      {
        question: "Co je nejčastější příčinou chronického pravostranného srdečního selhání v klinické praxi?",
        options: [
          "Těžká chronická bronchitida",
          "Levostranné srdeční selhání",
          "Defekt síňového septa",
          "Trombóza dolní duté žíly"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. CHOPN vyvolá cor pulmonale, ale není globálně nejčastější příčinou.",
          "Správně! Městnání krve v levé síni při levostranném selhání se přenáší retrográdně do plicních žil a kapilár. Vzniklá postkapilární plicní hypertenze zvyšuje zátěž pro pravou komoru, která postupně selhává.",
          "Nesprávně. Zkraty mohou vést k selhání, ale jsou méně časté.",
          "Nesprávně. Trombóza dolní duté žíly nezatěžuje komoru přímo tlakem."
        ]
      }
    ]
  },

  "spec-1-9": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Srdeční selhání je klinický syndrom charakterizovaný neschopností srdce zajistit dostatečný minutový výdej pro metabolické potřeby tkání, nebo jen za cenu zvýšení plnicích tlaků.",
      etiology: [
        "Ischemická choroba srdeční (ICHS) a prodělaný infarkt myokardu (ztráta funkčního parenchymu).",
        "Arteriální hypertenze (dlouhodobé zvýšení afterloadu vyvolá hypertrofii a následné selhání).",
        "Kardiomyopatie (dilatovaná, hypertrofická, restrikční).",
        "Chlopenní vady (stenóza aorty, regurgitace mitrální chlopně)."
      ],
      pathogenesis: [
        "Systolická dysfunkce: pokles kontraktility (nízká ejekční frakce EF < 40-50 %), srdce se nedokáže dostatečně vyprázdnit.",
        "Diastolická dysfunkce: porucha relaxace a plnění komor (EF je zachována > 50 %, ale stoupají plnicí tlaky z důvodu tuhosti komory).",
        "Neurohumorální aktivace: pokles tlaku aktivuje sympatikus a RAAS, což vede k retenci sodíku/vody a remodelaci (hypertrofii/fibróze) myokardu."
      ],
      clinicalManifestation: [
        "Dušnost (dyspnoe) – námahová, klidová až ortopnoe (dušnost vleže nutící pacienta se posadit).",
        "Únava, snížená tolerance fyzické zátěže (z důvodu nízkého srdečního výdeje).",
        "Otoky dolních končetin, hepatomegalie, ascites (při pravostranné komponentě)."
      ],
      diagnostics: [
        "Echokardiografie (klíčové vyšetření pro stanovení EF a odlišení systolické/diastolické dysfunkce).",
        "Stanovení NT-proBNP / BNP v séru (vysoká negativní předpovědní hodnota – vyloučení selhání).",
        "EKG a RTG hrudníku (kardiomegalie, městnání v plicním řečišti - Kerleyovy linie)."
      ]
    },
    quiz: [
      {
        question: "Jak se patofyziologicky liší srdeční selhání se zachovanou ejekční frakcí (HFpEF) od selhání se sníženou ejekční frakcí (HFrEF)?",
        options: [
          "U HFpEF je poškozena systolická kontrakce komory, zatímco u HFrEF je poškozeno plnění",
          "U HFpEF (diastolické selhání) je poškozena relaxace a plnění tuhé komory při normální kontraktilitě, zatímco u HFrEF (systolické selhání) selhává vyprazdňování a klesá EF",
          "HFpEF se vyskytuje výhradně u dětí",
          "U HFrEF nedochází k aktivaci systému RAAS"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Tvrzení je obráceně.",
          "Správně! Systolické selhání (HFrEF) znamená neschopnost komory vypudit dostatek krve (nízká EF). Diastolické selhání (HFpEF) se vyznačuje normální stažlivostí (normální EF), ale komora je tuhá (např. hypertrofovaná u hypertenze) a klade odpor plnění, což zvyšuje tlak v plicních žilách a vyvolává dušnost.",
          "Nesprávně. Obě formy jsou typické pro dospělé a seniory.",
          "Nesprávně. U obou forem dochází k aktivaci RAAS a sympatiku v odpovědi na patologii."
        ]
      }
    ]
  },

  "spec-1-10": {
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
            <li><strong>Udržovací (oligo-anurická) fáze:</strong> Trvá 1–2 týdny. Projevuje se oligurií (&lt; 400 ml/den), retencí vody (edémy, hypertenze), hyperkalémií (riziko srdeční zástavy) a metabolickou acidózou. V moči nacházíme cylindry (válce) z odumřelých buněk a proteinů (cylinderurie).</li>
            <li><strong>Fáze rekonvalescence (polyurická):</strong> Tubulární buňky regenerují, ale chybí jim funkční transportéry (nezralý epitel). Nedokážou koncentrovat moč a reabsorbovat vodu a ionty, což vede k **masivní polyurii** (i &gt; 4 litry/den) a hrozí dehydratace, hypokalémie a hyponatrémie.</li>
          </ol>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících procesů je primární příčinou poklesu GFR v udržovací fázi ATN?",
        options: [
          "Zvýšený hydrostatický tlak v Bowmanově pouzdru v důsledku tubulární obstrukce odloupeným epitelem",
          "Prudký pokles krevního tlaku v ledvinné tepně pod 40 mmHg",
          "Kompletní sklerotizace všech glomerulárních kapilár",
          "Snížení tlaku v ledvinné pánvičce z důvodu spasmu ureterů"
        ],
        correct: 0,
        explanations: [
          "Správně! Odloupané odumřelé buňky a detrit ucpou lumen tubulů. Tekutina se hromadí před překážkou, což zvýší hydrostatický tlak v Bowmanově pouzdru. Tento tlak působí proti filtračnímu tlaku v kapilárách a filtrace se zastaví.",
          "Nesprávně. Krevní tlak v této fázi může být již normalizován, přesto GFR zůstává nízká.",
          "Nesprávně. Glomeruly jsou u ATN vynechané, jedná se o tubulární postižení.",
          "Nesprávně. Tlak v pánvičce nestoupá kvůli spasmu ureterů."
        ]
      }
    ]
  },

  "spec-1-11": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Srdeční arytmie jsou poruchy tvorby a/nebo vedení srdečního vzruchu, které narušují pravidelnost a frekvenci srdeční akce.",
      etiology: [
        "Ischemie a nekróza myokardu (hlavní vyvolávající faktor arytmií).",
        "Strukturální remodelace srdce (fibróza, dilatace síní u chlopenních vad).",
        "Elektrolytový rozvrat (zejména draslíku a hořčíku).",
        "Genetické mutace iontových kanálů (syndrom dlouhého QT, Brugada syndrom)."
      ],
      pathogenesis: [
        "Poruchy tvorby vzruchu: změna normální automaticity SA uzlu, vznik ektopického pacemakeru, spouštěná aktivita (následné depolarizace).",
        "Poruchy vedení vzruchu: jednosměrný blok vedení umožňující vznik krouživého vzruchu (reentry okruh).",
        "Kombinované poruchy: např. parasystolie."
      ],
      clinicalManifestation: [
        "Bez příznaků (náhodný nález na EKG).",
        "Palpitace, synkopy, závratě, hypotenze.",
        "Náhlá srdeční smrt při maligních arytmiích (fibrilace komor)."
      ],
      diagnostics: [
        "12svodové EKG, dlouhodobý EKG monitoring (Holter, implantabilní záznamník).",
        "Zátěžové EKG k detekci arytmií vázaných na námahu.",
        "Elektrofyziologické vyšetření k mapování arytmie."
      ]
    },
    quiz: [
      {
        question: "Která z následujících podmínek je nezbytná pro vznik a udržení reentry (krouživého vzruchu) v srdeční tkáni?",
        options: [
          "Přítomnost pouze jedné anatomické dráhy s extrémně rychlým vedením",
          "Přítomnost dvou funkčně odlišných drah s jednosměrným blokem vedení v jedné z nich a rozdílnou rychlostí vedení a refrakterní fází",
          "Úplná absence draslíku v buňkách",
          "Vysoký tón nervus vagus"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Kroužení vyžaduje okruh (tedy alespoň dvě dráhy).",
          "Správně! Reentry vyžaduje uzavřený okruh ze dvou drah. Vzruch musí v jedné dráze narazit na blok (jednosměrný blok), projít druhou dráhou pomaleji, a vrátit se první dráhou zpět v okamžiku, kdy už odezněla její refrakterní fáze.",
          "Nesprávně. Absence draslíku by znemožnila jakoukoliv elektrickou aktivitu.",
          "Nesprávně. Vagus tlumí vedení v AV uzlu, ale sám o sobě není nutnou podmínkou pro reentry v komorách."
        ]
      }
    ]
  },

  "spec-1-12": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Sekundární hypertenze je arteriální hypertenze s identifikovatelnou organickou příčinou. Představuje cca 5-10 % všech případů hypertenze.",
      etiology: [
        "Renální příčiny: chronická parenchymová onemocnění ledvin (glomerulonefritidy, polycystóza).",
        "Renovaskulární příčiny: stenóza renální arterie (ateroskleróza u starších, fibromuskulární dysplazie u mladých žen).",
        "Endokrinní příčiny: primární hyperaldosteronismus (Connův sy), feochromocytom, Cushingův syndrom.",
        "Mechanické příčiny: koarktace aorty (vrozené zúžení aorty)."
      ],
      pathogenesis: [
        "Aktivace systému RAAS: u renovaskulární hypertenze zúžená tepna simuluje hypoperfuzi ledviny, což vyvolá masivní sekreci reninu, angiotenzinu II (vazokonstrikce) a aldosteronu (retence sodíku/vody).",
        "Nadprodukce katecholaminů (feochromocytom) vyvolá těžkou stimulaci alfa-1 (vazokonstrikce) a beta-1 (srdeční výdej) receptorů.",
        "Zvýšení odporu v horní polovině těla (koarktace aorty)."
      ],
      clinicalManifestation: [
        "Hypertenze rezistentní na trojkombinaci léčiv.",
        "Paroxysmální (záchvatovité) vzestupy tlaku doprovázené bušením srdce, pocením a bolestí hlavy (feochromocytom).",
        "Hypokalémie s hypertenzí (Connův syndrom)."
      ],
      diagnostics: [
        "Stanovení aldosteron-reninového poměru (ARR).",
        "Duplexní USG ledvinných tepen, CT/MR angiografie k průkazu stenózy.",
        "Měření volných metanefrinů v plazmě nebo sbírané moči."
      ]
    },
    quiz: [
      {
        question: "Jaký patofyziologický mechanismus je zodpovědný za renovaskulární hypertenzi při stenóze ledvinné tepny?",
        options: [
          "Zvýšená filtrace sodíku ledvinami",
          "Hypoperfuze ledviny aktivuje sekreci reninu z juxtaglomerulárních buněk, což přes angiotenzin II a aldosteron zvýší tlak krve",
          "Přímé stlačení aorty zvětšenou ledvinou",
          "Nadprodukce thyroidálních hormonů"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Filtrace sodíku je naopak snížena.",
          "Správně! Zúžená tepna snižuje tlak v aferentní arteriole. Juxtaglomerulární aparát to interpretuje jako systémovou hypotenzi a začne produkovat renin. Výsledná kaskáda (vazokonstrikce angiotenzinem a retence sodíku aldosteronem) zvýší krevní tlak.",
          "Nesprávně. Ledvina aortu nestlačuje.",
          "Nesprávně. Renovaskulární hypertenze s tyroidální osou nesouvisí."
        ]
      }
    ]
  },

  "spec-1-13": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Restrikční plicní nemoci jsou charakterizovány snížením celkové plicní kapacity (TLC) v důsledku omezení expanze plicního parenchymu.",
      etiology: [
        "Intropulmonální příčiny (plicní fibrózy): idiopatická plicní fibróza, pneumokoniózy (křemík, azbest), sarkoidóza.",
        "Extrapulmonální příčiny (deformity hrudníku): kyfoskolióza, obezita (Pickwickův syndrom), ankylozující spondylitida.",
        "Neuromuskulární poruchy: myasthenia gravis, amyotrofická laterální skleróza (ALS), paréza bránice."
      ],
      pathogenesis: [
        "U plicních fibróz dochází k ukládání kolagenu v alveolárních stěnách, což zvyšuje tuhost plic a **snižuje poddajnost (compliance)** plic.",
        "Zesílení alveolo-kapilární membrány narušuje difúzi plynů (pokles DLCO) a zvyšuje alveolo-arteriální gradient (A-aDO2).",
        "U extrapulmonálních příčin je omezena pohyblivost hrudní stěny, plicní parenchym je zdravý, ale nemůže se rozpínat."
      ],
      clinicalManifestation: [
        "Inhalační námahová dušnost (dyspnoe), která se v pokročilých stádiích mění v klidovou.",
        "Suchý, dráždivý kašel (typický pro intersticiální procesy).",
        "Paličkovité prsty a nehty tvaru hodinového sklíčka (důsledek chronické tkáňové hypoxie)."
      ],
      diagnostics: [
        "Spirometrie a bodypletysmografie (průkaz TLC < 80 % normy při normálním indexu FEV1/FVC).",
        "HRCT hrudníku (obraz 'voštinové plíce' u pokročilé fibrózy).",
        "Měření difúzní kapacity (DLCO) – výrazný pokles u intrapulmonálních restrikcí."
      ]
    },
    quiz: [
      {
        question: "U které z následujících patologií dochází k rozvoji restrikční ventilační poruchy plic s výrazným snížením plicní compliance (poddajnosti)?",
        options: [
          "Astma bronchiale",
          "Idiopatická plicní fibróza",
          "Plicní emfyzém",
          "Chronická bronchitida"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Astma vyvolává obstrukci, compliance je v normě.",
          "Správně! Idiopatická plicní fibróza vede k fibrotizaci plicního intersticia. Plíce ztrácejí schopnost se rozpínat (tuhnou), což vyjádříme jako pokles compliance (poddajnosti) a rozvoj restrikce.",
          "Nesprávně. U emfyzému se elasticita ničí, compliance je naopak zvýšená (plíce jsou příliš poddajné, chybí zpětný ráz).",
          "Nesprávně. Bronchitida je čistě obstrukční onemocnění dýchacích cest."
        ]
      }
    ]
  },

  "spec-1-14": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Primární (esenciální) hypertenze je chronické zvýšení krevního tlaku bez zřejmé jediné organické příčiny. Představuje cca 90-95 % všech hypertenzí.",
      etiology: [
        "Genetická predispozice (polygenní dědičnost).",
        "Obezita a inzulínová rezistence (zvyšují tonus sympatiku).",
        "Nadměrný příjem sodíku stravou a nízký příjem draslíku.",
        "Chronický psychický stres, nedostatek fyzické aktivity, kouření a alkohol."
      ],
      pathogenesis: [
        "Nepoměr mezi srdečním výdejem a systémovou cévní rezistencí (MAP = CO x SVR). U mladých dominuje vysoký CO (hyperkinetická cirkulace), u starších vysoký SVR (vazokonstrikce, tuhost arteriální stěny).",
        "Dysfunkce endotelu: pokles produkce vazodilatačního oxidu dusnatého (NO) a vzestup endotelinu-1 (vazokonstriktor).",
        "Strukturální remodelace cév (hypertrofie medie) fixuje vysoký odpor."
      ],
      clinicalManifestation: [
        "Dlouho asymptomatická ('tichý zabiják').",
        "Bolesti hlavy (zejména v záhlaví ráno), únava, závratě, bušení srdce.",
        "Komplikace: hypertrofie levé komory (kardiální), urychlení aterosklerózy (cévní), nefroskleróza (renální), retinopatie (oční)."
      ],
      diagnostics: [
        "Opakované naměření tlaku v ordinaci ≥ 140/90 mmHg u sedícího pacienta.",
        "24hodinové ambulantní monitorování tlaku (AMTK) – zlatý standard k vyloučení hypertenze bílého pláště.",
        "Vyšetření mikroalbuminurie v moči a očního pozadí k průkazu orgánového poškození."
      ]
    },
    quiz: [
      {
        question: "Jaká změna v cévním řečišti je hlavním patofyziologickým rysem fixované primární hypertenze u starších pacientů?",
        options: [
          "Zvýšená elasticita velkých tepen",
          "Zvýšený celkový periferní odpor (SVR) v důsledku strukturální remodelace a tuhosti stěny arteriol",
          "Prudký pokles minutového srdečního výdeje na polovinu",
          "Generalizovaná vazodilatace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Arteriální stěna věkem a tlakem tuhne, elasticita klesá.",
          "Správně! Chronické působení vysokého tlaku a neurohumorální stimulace vede k hypertrofii hladkého svalstva arteriol (remodelace) a ukládání kolagenu. Cévy ztrácejí schopnost dilatace a periferní odpor (SVR) trvale stoupá.",
          "Nesprávně. Minutový srdeční výdej je u starších hypertoniků spíše normální nebo mírně snížený, ne extrémně nízký.",
          "Nesprávně. Dochází k vazokonstrikci, nikoliv vazodilataci."
        ]
      }
    ]
  },

  "spec-1-15": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Transfúzní reakce jsou komplikace spojené s podáním cizí krve nebo krevních derivátů. Imunologická kompatibilita a správná transplantace kmenových buněk jsou klíčové pro prevenci rejekcí.",
      etiology: [
        "Akutní hemolytická transfúzní reakce: inkompatibilita v systému AB0 (selhání lidského faktoru).",
        "Febrilní nehemolytická reakce: protilátky příjemce proti leukocytům dárce.",
        "TRALI (transfusion-related acute lung injury): protilátky v plazmě dárce proti HLA antigenům příjemce vyvolají zánět v plicích.",
        "Reakce štěpu proti hostiteli (GvHD): imunokompetentní T-lymfocyty dárce (ve štěpu) napadají tkáně příjemce (hostitele) po transplantaci kostní dřeně."
      ],
      pathogenesis: [
        "U akutní hemolýzy: protilátky (IgM) příjemce okamžitě aktivují komplement na dárcovských erytrocytech. Dochází k intravaskulární destrukci buněk, uvolnění hemoglobinu a rozvoji anafylaktického šoku a akutního selhání ledvin (tubulární toxicita).",
        "U GvHD: T-lymfocyty dárce rozpoznají HLA antigeny imunosuprimovaného příjemce jako cizí a zahájí cytotoxický útok na kůži, játra a střevo.",
        "HvG (hostitel proti štěpu): imunitní systém příjemce odmítá a ničí transplantovaný štěp."
      ],
      clinicalManifestation: [
        "U akutní hemolýzy: horečka, zimnice, bolest v zádech a na hrudi, dušnost, hypotenze, tmavá moč.",
        "U TRALI: náhlá dušnost, hypoxémie a nekardiogenní plicní edém do 6 hodin od transfúze.",
        "U GvHD: makulopapulózní exantém (erytém dlaní a plosek), profúzní průjmy a ikterus (poškození žlučovodů)."
      ],
      diagnostics: [
        "Coombsův test (přímý antiglobulinový test k průkazu protilátek navázaných na erytrocytech).",
        "Volný hemoglobin v plazmě a moči, pokles haptoglobinu (průkaz hemolýzy).",
        "Biopsie kůže nebo střeva k potvrzení histologických znaků GvHD."
      ]
    },
    quiz: [
      {
        question: "Jaký imunologický mechanismus je podstatou reakce štěpu proti hostiteli (GvHD) po transplantaci kostní dřeně?",
        options: [
          "B-lymfocyty příjemce tvoří protilátky proti dárcovským destičkám",
          "Imunokompetentní T-lymfocyty obsažené v dárcovském štěpu napadají tkáně příjemce, který je imunitně oslaben a nedokáže se bránit",
          "Makrofágy hostitele požírají transplantované kmenové buňky",
          "Aktivace komplementu proti dárcovským erytrocytům"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. GvHD je buněčná imunitní reakce vedená buňkami štěpu, ne protilátkami příjemce.",
          "Správně! U GvHD (Graft-versus-Host Disease) jsou T-lymfocyty dárce přeneseny do těla příjemce. Protože příjemce byl před transplantací imunitně utlumen (ozářením/chemoterapií), jeho tělo nedokáže dárcovské buňky zničit. Dárcovské T-buňky pak napadají HLA-inkompatibilní buňky hostitele.",
          "Nesprávně. Hostitelovy buňky jsou utlumené, štěp nenapadají (to by byla reakce HvG).",
          "Nesprávně. Aktivace komplementu je typická pro akutní transfúzní hemolýzu."
        ]
      }
    ]
  },

  "spec-1-16": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie V/Q poměru</h3>
          <p>Pro správnou výměnu plynů v plicích je nutné, aby byly alveoly ventilovány a zároveň perfundovány krví z plicních kapilár. Globální fyziologický **poměr V/Q se pohybuje kolem 0,8**. Nerovnováha (mismatch) tohoto poměru v plicních segmentech je nejčastější příčinou arteriální hypoxémie.</p>
        </section>
        <section>
          <h3>2. Patologické extrémy V/Q</h3>
          <ul>
            <li><strong>V/Q = 0 ── Pravolevý plicní zkrat (Shunt):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou prokrvené, ale nejsou ventilované. Krev protéká plícemi, aniž by se okysličila, a mísí se s okysličenou krví z jiných částí plic.</li>
                <li><strong>Klíčový projev:</strong> Hypoxémie je **refrakterní na inhalaci 100% kyslíku** (oxygenoterapii), protože kyslík se do neventilovaných alveolů nedostane.</li>
                <li><strong>Etiologie:</strong> Atelektáza, plicní edém, pneumonie, aspirace.</li>
              </ul>
            </li>
            <li><strong>V/Q = nekonečno ── Mrtvý prostor (Dead space):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou ventilované, ale chybí v nich perfúze. Vzduch se zúčastňuje ventilace, ale nemůže předat kyslík ani odvést CO2.</li>
                <li><strong>Etiologie:</strong> <strong>Plicní embolie</strong> (obstrukce plicní arterie), kardiogenní šok, destrukce kapilár u plicního emfyzému.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section class="diagram-section">
          <h3>Eulerův-Liljestrandův reflex (Kompenzace hypoxie)</h3>
          <p>Při lokální hypoxii v neventilovaných alveolech dochází k **hypoxické plicní vazokonstrikci** (Eulerův-Liljestrandův reflex). Plicní arterioly se stáhnou, aby odklonily krev do dobře ventilovaných částí plic a minimalizovaly zkrat. Pokud je však hypoxie globální (např. ve vysokých výškách), stahují se všechny kapiláry, což vede k **plicní hypertenzi** a pravostrannému srdečnímu selhání (cor pulmonale).</p>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
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
          "Správně! Krev protéká zónami, kde alveoly nejsou ventilovány (např. jsou zaplavené exsudátem). Inhalace kyslíku zvýší parciální tlak kyslíku pouze v dobře ventilovaných alveolech, ale krev protékající zkratem zůstane neokysličená.",
          "Nesprávně. Kyslík naopak působí spíše bronchodilatačně.",
          "Nesprávně. K rozpadu erytrocytů u shuntu nedochází."
        ]
      }
    ]
  },

  "spec-1-17": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Poruchy venózního řečiště (zejména hluboká žilní trombóza - HŽT) a lymfatického systému (lymfedém) narušují odtok tekutiny z tkání, což vede k rozvoji specifických otoků.",
      etiology: [
        "HŽT (Virchowova triáda): stagnační proudění (imobilizace, sádra), hyperkoagulační stav (leiden, antikoncepce, malignita), poškození endotelu (trauma, operace).",
        "Lymfedém primární: vrozená hypoplazie lymfatických cév.",
        "Lymfedém sekundární: odstranění lymfatických uzlin (disekce u nádoru prsu), ozáření, parazitární infekce (filarióza).",
        "Chronická žilní insuficience: chlopenní nedomykavost žil dolních končetin."
      ],
      pathogenesis: [
        "U žilní trombózy: překážka toku zvyšuje hydrostatický tlak v kapilárách za překážkou, což tlačí vodu do tkáně (otok). Hrozí uvolnění trombu a plicní embolie.",
        "U chronické insuficience: vysoký žilní tlak vyvolává extravazaci erytrocytů – rozpad na hemosiderin (hnědé zbarvení kůže) a trofické změny (bércový vřed).",
        "U lymfedému: obstrukce lymfatik brání odtoku protein-rich lymfy. Hromadění proteinů v intersticiu zvyšuje onkotický tlak tkáně, což fixuje otok a stimuluje fibrotizaci."
      ],
      clinicalManifestation: [
        "U HŽT: jednostranný bolestivý otok končetiny, zarudnutí, zvýšená teplota kůže, bolestivost v lýtku při dorzální flexi nohy (Homansovo znamení).",
        "U lymfedému: bledý, chladný, nebolestivý otok (zpočátku těstovitý, později tuhý - elefantíza), typicky postihující prsty na noze (Stemmerovo znamení - nelze řasit kůži na 2. prstu).",
        "Hyperpigmentace a ulcerace kolem vnitřního kotníku u chronické žilní insuficience."
      ],
      diagnostics: [
        "Duplexní ultrasonografie žil dolních končetin (průkaz chybějící kompresibility a toku u HŽT).",
        "Laboratorní vyšetření D-dimerů (vysoká citlivost pro HŽT, negativní nález ji vylučuje).",
        "Lymfoscintigrafie k hodnocení průchodnosti lymfatických cest."
      ]
    },
    quiz: [
      {
        question: "Která složka Virchowovy triády je nejvýznamnějším spouštěčem vzniku hluboké žilní trombózy u imobilizovaných pacientů po chirurgickém výkonu?",
        options: [
          "Mírná arteriální hypertenze",
          "Stáza (zpomalení) toku krve v žilním řečišti dolních končetin v kombinaci s pooperačním hyperkoagulačním stavem",
          "Pokles tlaku v pravé síni",
          "Nadměrná filtrace lymfy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Arteriální tlak žilní trombózu neovlivňuje.",
          "Správně! Imobilizace na lůžku odstraňuje funkci svalové pumpy lýtkových svalů, což vede k městnání krve (stáza). Operační trauma navíc aktivuje srážení krve (uvolnění tkáňového faktoru), což splňuje klíčové body Virchowovy triády.",
          "Nesprávně. Pokles tlaku v pravé síni by žilní návrat spíše urychlil.",
          "Nesprávně. Lymfa s trombózou v žilách nesouvisí."
        ]
      }
    ]
  },

  "spec-1-18": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Poruchy plicní difúze jsou charakterizovány zhoršeným přestupem plynů (zejména kyslíku) přes alveolo-kapilární membránu z důvodu jejího zesílení nebo zmenšení celkové plochy.",
      etiology: [
        "Zesílení alveolo-kapilární membrány (intersticiální plicní procesy): idiopatická plicní fibróza, sarkoidóza, plicní edém (tekutina v intersticiu).",
        "Redukce plochy alveolo-kapilární membrány: plicní emfyzém (destrukce sept), resekce plic (pneumonektomie).",
        "Plicní vaskulární onemocnění: plicní hypertenze, plicní embolie (ztráta kapilárního řečiště)."
      ],
      pathogenesis: [
        "Rychlost difúze plynu je určena Fickovým zákonem ($V = A \cdot D \cdot \Delta P / T$). Zvětšení tloušťky membrány ($T$) nebo pokles plochy ($A$) snižuje difúzi.",
        "Kyslík má 20krát nižší difuzní koeficient ($D$) než oxid uhličitý. Proto porucha difúze vyvolá **izolovanou hypoxémii** bez hyperkapnie ($paCO_2$ je normální nebo nízké kvůli hyperventilaci).",
        "Doba průtoku erytrocytu kapilárou je v klidu cca 0.75 s (difúze se stihne za 0.25 s). Při fyzické zátěži se průtok zrychlí (na 0.25 s) a hypoxémie se dramaticky zhorší."
      ],
      clinicalManifestation: [
        "Námahová dušnost, která se při zátěži rychle zhoršuje z důvodu zkrácení kontaktního času erytrocytu.",
        "Suchý kašel, tachypnoe (zrychlené dýchání stimulované hypoxií přes chemoreceptory).",
        "Centrální cyanóza (modravé zbarvení sliznic a rtů)."
      ],
      diagnostics: [
        "Měření difuzní kapacity plic pro oxid uhelnatý (DLCO) – klíčový test, vykazuje pokles.",
        "Vyšetření krevních plynů (Astrup) – průkaz hypoxémie s hypokapnií ($paCO_2 < 4.8\text{ kPa}$), rostoucí alveolo-arteriální diference ($A-aDO_2$).",
        "HRCT plic k vizualizaci zesílení sept."
      ]
    },
    quiz: [
      {
        question: "Proč se u pacientů s poruchou plicní difúze rozvíjí hypoxémie (nízké paO2), ale hladina paCO2 v krvi zůstává normální nebo je dokonce snížená?",
        options: [
          "Kyslík je aktivně pumpován přes membránu, zatímco CO2 uniká pouze pasivně",
          "Oxid uhličitý (CO2) difunduje přes alveolo-kapilární membránu přibližně 20krát snadněji než kyslík, takže jeho přestup není mírným zesílením membrány omezen a hyperventilace ho navíc vydýchá",
          "Hemoglobin odmítá vázat oxid uhličitý",
          "Plíce při fibróze CO2 vůbec netvoří"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Oba plyny procházejí čistě pasivní difúzí podle koncentračního spádu.",
          "Správně! Vzhledem k vysoké rozpustnosti CO2 ve vodě je jeho difúze extrémně rychlá. Mírné ztluštění membrány transport CO2 nezpomalí. Hypoxie navíc stimuluje dechové centrum k hyperventilaci, což vede k zvýšenému vydýchávání CO2 a poklesu paCO2 (hypokapnii).",
          "Nesprávně. Hemoglobin CO2 váže (karbaminohemoglobin), ale to neurčuje rozdílnou difúzi.",
          "Nesprávně. CO2 je produktem metabolismu tkání a do plic je přinášen krví konstantně."
        ]
      }
    ]
  },

  "spec-1-19": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Poruchy plicní cirkulace a plicní hypertenze (PH) představují stavy zvýšeného krevního tlaku v plicním cévním řečišti (střední tlak v plicnici mPAP > 20 mmHg), které zatěžují pravou komoru.",
      etiology: [
        "Skupina 1 (plicní arteriální hypertenze): idiopatická, poléková, remodelace plicních arterií.",
        "Skupina 2 (při levostranném srdečním selhání): nejčastější, pasivní městnání krve před levým srdcem.",
        "Skupina 3 (při plicních nemocech/hypoxii): CHOPN, intersticiální procesy, Eulerův-Liljestrandův reflex.",
        "Skupina 4 (chronická tromboembolická plicní hypertenze - CTEPH): po opakovaných plicních emboliích."
      ],
      pathogenesis: [
        "Vazokonstrikce, proliferace intimy a hypertrofie medie plicních cév vedou k fixní redukci průřezu plicního řečiště.",
        "Zvýšení plicní cévní rezistence (PVR) nutí pravou komoru generovat vyšší tlak.",
        "Rozvíjí se hypertrofie a následná dilatace pravé kom komory (cor pulmonale), což končí jejím selháním."
      ],
      clinicalManifestation: [
        "Progresivní námahová dušnost (způsobená fixním srdečním výdejem, který nelze při zátěži zvýšit).",
        "Únava, tlak na hrudi, námahová synkopa (důsledek poklesu systémového tlaku při neschopnosti pravého srdce přečerpat krev).",
        "Příznaky pravostranného selhání (otoky, hepatomegalie, ascites, zvýšená náplň krčních žil)."
      ],
      diagnostics: [
        "Echokardiografie (odhad tlaku v plicnici z rychlosti trikuspidální regurgitace).",
        "Pravostranná srdeční katetrizace (zlatý standard pro exaktní měření tlaků a rozlišení pre/postkapilární PH).",
        "Ventilačně-perfuzní sken plic k vyloučení CTEPH (skupina 4)."
      ]
    },
    quiz: [
      {
        question: "Jaký je hlavní patofyziologický mechanismus vzniku plicní hypertenze (skupina 3) u pacientů s těžkou CHOPN?",
        options: [
          "Přímé stlačení plicní tepny zvětšenou levou síní",
          "Hypoxická plicní vazokonstrikce (Eulerův-Liljestrandův reflex) vyvolaná chronickou alveolární hypoxií, doprovázená redukcí kapilárního řečiště při emfyzému",
          "Nadprodukce antidiuretického hormonu ledvinami",
          "Vrozený defect trikuspidální chlopně"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Levá síň plicnici u CHOPN nestlačuje.",
          "Správně! Chronická hypoxie v alveolech vyvolá generalizovaný Eulerův-Liljestrandův reflex – stáhnutí plicních arteriol v celé plíci. Společně s destrukcí plicních kapilár při emfyzému to dramaticky zvýší odpor plicního řečiště a vyvolá plicní hypertenzi.",
          "Nesprávně. ADH tlak v plicnici přímo nereguluje.",
          "Nesprávně. Trikuspidální regurgitace je důsledkem plicní hypertenze a dilatace komory, nikoliv primární příčinou u CHOPN."
        ]
      }
    ]
  },

  "spec-1-20": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Trombotické mikroangiopatie (TMA) jsou skupina život ohrožujících stavů charakterizovaných triádou: mikroangiopatická hemolytická anémie (MAHA), konzumpční trombocytopenie a orgánové poškození mikrotromby.",
      etiology: [
        "Trombotická trombocytopenická purpura (TTP): deficit metaloproteázy **ADAMTS13** (vrozený nebo autoimunitní protilátkami).",
        "Typický hemolyticko-uremický syndrom (HUS): infekce bakterií produkující Shiga-toxin (STEC - např. *E. coli* O157:H7).",
        "Atypický HUS (aHUS): genetická porucha regulace alternativní cesty komplementu (faktor H, I, MCP)."
      ],
      pathogenesis: [
        "Při deficitu ADAMTS13 nedochází ke štěpení ultradlouhých multimerů von Willebrandova faktoru (UL-vWF).",
        "Ultradlouhé multimery vWF spontánně vážou a aktivují destičky v mikrocirkulaci, což vede ke vzniku destičkových mikrotrombů.",
        "Mikrotromby mechanicky ucpávají cévy a trhají protékající erytrocyty (vznikají **schistocyty**). Konzumpcí destiček v trombách vzniká trombocytopenie."
      ],
      clinicalManifestation: [
        "Těžká anémie a ikterus (z hemolýzy) doprovázená krvácivými projevy (petechie z trombocytopenie).",
        "Neurologické symptomy: bolesti hlavy, zmatenost, křeče, přechodné parézy (typické pro TTP z mikrotrombů v mozku).",
        "Akutní selhání ledvin (oligurie, uremie) – dominantní u HUS a aHUS."
      ],
      diagnostics: [
        "Nátěr periferní krve: nález **schistocytů** (fragmentů erytrocytů) > 1-2 %.",
        "Trombocytopenie a normální běžné koagulační časy (Quick, APTT jsou v normě, na rozdíl od DIC).",
        "Stanovení aktivity ADAMTS13 (pod 10 % potvrzuje TTP) a průkaz Shiga-toxinu ve stolici."
      ]
    },
    quiz: [
      {
        question: "Nález kterých buněk v krevním nátěru je klíčový pro diagnostiku trombotické mikroangiopatie (TTP/HUS)?",
        options: [
          "Megaloblasty",
          "Schistocyty (fragmentované erytrocyty vzniklé mechanickým potrháním o fibrinová/destičková síta)",
          "Sférocyty",
          "Target cells (terčovité erytrocyty)"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Megaloblasty značí deficit B12.",
          "Správně! Průchod erytrocytů zúženým lumen arteriol s destičkovými mikrotromby vede k jejich mechanickému poškození a roztržení. Vzniklé fragmenty se nazývají schistocyty (či keratocyty) a jejich průkaz je podmínkou dg. TMA.",
          "Nesprávně. Sférocyty jsou u hereditární sférocytózy nebo autoimunitní hemolýzy.",
          "Nesprávně. Terčovité buňky se vyskytují u thalasemie nebo jaterních chorob."
        ]
      }
    ]
  },

  "spec-1-21": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Polycytémie (erytrocytóza) je stav zvýšené koncentrace erytrocytů, hemoglobinu a hematokritu v krvi. Způsobuje výrazné zvýšení viskozity krve a rozvoj hyperviskózního syndromu.",
      etiology: [
        "Primární polycytémie (polycytemia vera): klonální myeloproliferativní novotvar spojený s mutací genu **JAK2 (V617F)**.",
        "Sekundární polycytémie (vysoké EPO): chronická hypoxie (CHOPN, vysokohorské výšky), tumory produkující EPO (hypernefrom ledviny, hepatom).",
        "Relativní polycytémie (hemokoncentrace): dehydratace (ztráta plazmy při popáleninách, zvracení, průjmech)."
      ],
      pathogenesis: [
        "Mutace JAK2 vyvolá trvalou aktivaci receptoru pro erytropoetin nezávisle na přítomnosti samotného EPO.",
        "Nekontrolovaná erytropoéza vede k extrémnímu zmnožení erytrocytů a vzestupu hematokritu (> 50-60 %).",
        "Zvýšený hematokrit zvyšuje viskozitu krve exponenciálně. Krevní proud se zpomaluje, roste odpor v mikrocirkulaci a hrozí trombózy."
      ],
      clinicalManifestation: [
        "Hyperviskózní syndrom: bolesti hlavy, závratě, poruchy vidění, tinnitus.",
        "Pruritus (svědění kůže) po teplé koupeli (vyvolané uvolněním histaminu z doprovodně zmnožených bazofilů).",
        "Pletorický vzhled (rudé zbarvení obličeje a spojivek), splenomegalie."
      ],
      diagnostics: [
        "Krevní obraz (extrémní vzestup Hb, Ht a erytrocytů).",
        "Průkaz mutace JAK2 z periferní krve (pozitivní u > 95 % pacientů s polycytemia vera).",
        "Stanovení hladiny EPO v séru (nízké u primární polycytémie, vysoké u sekundární)."
      ]
    },
    quiz: [
      {
        question: "Která genetická mutace je přítomna u naprosté většiny pacientů s primární polycytémií (polycytemia vera)?",
        options: [
          "Fúze genů BCR-ABL1",
          "Bodová mutace V617F v genu JAK2 (tyrosinkináza)",
          "Mutace genu pro erytropoetin",
          "Ztráta chromozomu 7"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. BCR-ABL1 je typická pro chronickou myeloidní leukémii (CML).",
          "Správně! Somatická bodová mutace JAK2 V617F způsobuje konstitutivní (stálou) aktivaci tyrosinkinázy přidružené k EPO receptoru. Buňky červené řady proliferují samy bez nutnosti stimulace erytropoetinem.",
          "Nesprávně. Samotný gen pro EPO mutován nebývá, jeho hladina je u PV suprimována.",
          "Nesprávně. Delece chromozomu 7 se vyskytuje u MDS, nikoliv typicky u PV."
        ]
      }
    ]
  },

  "spec-1-22": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Pneumothorax (PNO) je přítomnost vzduchu v pleurální dutině vedoucí k parciálnímu nebo úplnému kolapsu plíce. Fluidothorax je přítomnost tekutiny v pleurálním prostoru.",
      etiology: [
        "Spontánní primární PNO: ruptura subpleurálních bul (často u mladých, vysokých, štíhlých mužů, kuřáků).",
        "Spontánní sekundární PNO: komplikace stávajícího plicního onemocnění (CHOPN - ruptura buly, tbc).",
        "Traumatický a iatrogenní PNO: zlomeniny žeber, bodná poranění, kanylace v. subclavia, biopsie plic.",
        "Tenzní (ventilový) PNO: vzduch vniká při nádechu do pleurální dutiny, ale při výdechu nemůže uniknout."
      ],
      pathogenesis: [
        "Vniknutím vzduchu do pleurálního prostoru se zruší fyziologický záporný nitrohrudní tlak.",
        "Plíce kolabuje vlastní elasticitou směrem k hilu, čímž ztrácí schopnost ventilace.",
        "U tenzního PNO: hromadící se vzduch stlačuje mediastinum a dolní dutou žílu na zdravou stranu, což dramaticky snižuje žilní návrat a vede k okamžitému oběhovému kolapsu (PEA)."
      ],
      clinicalManifestation: [
        "Náhle vzniklá, ostrá, jednostranná bolest na hrudi propagující se do ramene.",
        "Dušnost doprovázená suchým kašlem a tachykardií.",
        "Asymetrie hrudníku, hypoventilační poslechový nález (vymizelé dýchání na postižené straně) a hypersonorní poklep (bubínkový poklep)."
      ],
      diagnostics: [
        "Rentgen hrudníku ve vestoje (průkaz linie kolabované plíce bez plicní kresby na postižené straně).",
        "Ultrasonografie plic (chybění 'sliding' fenoménu plíce na postižené straně).",
        "Počítačová tomografie (CT) – nejcitlivější metoda pro detekci malých PNO."
      ]
    },
    quiz: [
      {
        question: "Proč je tenzní (ventilový) pneumothorax bezprostředně život ohrožujícím stavem vyžadujícím okamžitou punkci?",
        options: [
          "Způsobuje rychlý rozpad hemoglobinu",
          "Hromadící se vzduch v pleurální dutině stlačuje mediastinální orgány a velké žíly, což zablokuje žilní návrat k srdci a vyvolá fatální šok",
          "Bakterie ve vzduchu infikují srdce",
          "Způsobuje okamžitou zástavu ledvin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hemolýzu PNO nevyvolává.",
          "Správně! Ventilový mechanismus propouští vzduch dovnitř, ale ne ven. Nitrolební tlak na postižené straně stoupá, přetlačuje mediastinum na zdravou stranu, zalomí duté žíly a stlačí zdravou plíci. Srdce nemá krev k přečerpání, což vede k šoku a zástavě.",
          "Nesprávně. Infekce (empyém) může vzniknout později, ale bezprostřední ohrožení je hemodynamické.",
          "Nesprávně. Selhání ledvin je sekundární důsledek šoku, ne primární příčina úmrtí u tenzního PNO."
        ]
      }
    ]
  },

  "spec-1-23": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Pneumonie je akutní zánětlivé onemocnění plicního parenchymu (alveolů a intersticia) infekční etiologie, které narušuje výměnu plynů.",
      etiology: [
        "Komunitní bakterie: *Streptococcus pneumoniae* (nejčastější), *Haemophilus influenzae*, *Moraxella catarrhalis*.",
        "Atypické bakterie: *Mycoplasma pneumoniae*, *Chlamydia pneumoniae*, *Legionella pneumophila*.",
        "Nosokomiální patogeny (nemocniční): *Pseudomonas aeruginosa*, *Staphylococcus aureus* (MRSA), klebsiella.",
        "Virové pneumonie: Influenza, RSV, SARS-CoV-2 (vyvolávají primárně intersticiální zánět)."
      ],
      pathogenesis: [
        "Inhalace či mikroaspirace patogenů do alveolů překoná obranné mechanismy (řasinkový epitel, alveolarí makrofágy).",
        "Rozvíjí se exsudativní zánětlivá reakce: alveoly se plní exsudátem bohatým na neutrofily, fibrin a erytrocyty (fáze hepatizace plíce).",
        "Zaplavené alveoly nejsou ventilovány, ale jsou perfundovány. Vzniká pravolevý plicní zkrat (V/Q = 0) a rozvíjí se hypoxémie."
      ],
      clinicalManifestation: [
        "Horečka s třesavkou a zimnicí.",
        "Kašel (zpočátku suchý, později produktivní s vykašláváním rezavého či hnisavého sputa).",
        "Pleurální bolest na hrudi (při postižení pleury, zhoršuje se při nádechu a kašli), dušnost, tachypnoe."
      ],
      diagnostics: [
        "Rentgen hrudníku (průkaz infiltrátu – lobární zastínění nebo bronchopneumonické ložiska).",
        "Laboratorní vyšetření: výrazná leukocytóza s neutrofilií, vysoké CRP a prokalcitonin.",
        "Mikrobiologické vyšetření sputa a hemokultur před zahájením ATB léčby."
      ]
    },
    quiz: [
      {
        question: "Jaký patofyziologický nález na plicích vysvětluje vznik hypoxémie u pacienta s rozsáhlou lobární pneumonií?",
        options: [
          "Plicní hyperventilace s alkalózou",
          "Pravolevý plicní zkrat (shunt) v postiženém laloku, kde jsou alveoly zaplaveny zánětlivým exsudátem a nejsou ventilovány, ale protéká jimi krev",
          "Zvýšení difuzní kapacity plic",
          "Spasmus velkých bronchů reverzibilní po salbutamolu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hyperventilace je kompenzační mechanismus, ne příčina hypoxie.",
          "Správně! Exsudát vyplní alveoly a zabrání přístupu vzduchu. Krev protékající kapilárami kolem těchto alveolů se neokysličí (zkrat) a mísí se s okysličenou krví ze zdravých částí plic, což vyvolá hypoxémii.",
          "Nesprávně. Difuzní kapacita plic u pneumonie klesá.",
          "Nesprávně. Bronchospasmus je typický pro astma, pneumonie je zánět parenchymu."
        ]
      }
    ]
  },

  "spec-1-24": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Plicní edém je stav nadměrného hromadění tekutiny v plicním intersticiu a alveolech, který vážně narušuje difúzi plynů. Dělí se na kardiogenní a nekardiogenní.",
      etiology: [
        "Kardiogenní (hydrostatický): levostranné srdeční selhání (akutní infarkt, hypertenzní krize, chlopenní vady).",
        "Nekardiogenní (permeabilitní): poškození alveolo-kapilární membrány při ARDS, vdechnutí toxických plynů, těžká sepse.",
        "Renální selhání: hyperhydratace při anurii.",
        "Neurogenní: těžké trauma mozku."
      ],
      pathogenesis: [
        "U kardiogenního edému: selhání levé komory zvýší tlak v levé síni a retrográdně v plicních žilách a kapilárách. Pokud hydrostatický tlak v kapilárách překročí onkotický tlak plazmy (~25 mmHg), tekutina filtruje do intersticia a následně zaplaví alveoly.",
        "U nekardiogenního edému: zánět poškodí těsná spojení endotelu a epitelu, tekutina bohatá na proteiny uniká do plic i při normálním tlaku v levém srdci.",
        "Tekutina v alveolech inaktivuje surfaktant (kolaps alveolů) a tvoří bariéru pro difúzi kyslíku."
      ],
      clinicalManifestation: [
        "Těžká, rychle progredující dušnost (ortopnoe) a pocit dušení.",
        "Kašel s vykašláváním růžového, pěnivého sputa (způsobeného příměsí erytrocytů a surfaktantu).",
        "Poslechově oboustranné vlhké nesouznělé chrůpky (bublání tekutiny v dýchacích cestách), cyanóza, studený pot."
      ],
      diagnostics: [
        "Rentgen hrudníku (obraz motýlích křídel – symetrické městnání od hilů, Kerleyovy linie).",
        "Echokardiografie (odliší kardiogenní příčinu – dilatace levé komory, dysfunkce).",
        "Krevní plyny (těžká hypoxémie, zpočátku hypokapnie z hyperventilace, později hyperkapnie a acidóza)."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostředním patofyziologickým mechanismem vzniku kardiogenního plicního edému?",
        options: [
          "Pokles hydrostatického tlaku v plicních kapilárách pod 5 mmHg",
          "Vzestup hydrostatického tlaku v plicních kapilárách nad onkotický tlak plazmy (cca 25 mmHg) v důsledku městnání krve před selhávajícím levým srdcem",
          "Přímé toxické poškození pneumocytů vdechovaným plynem",
          "Zvýšená propustnost kapilár při zánětu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Pokles tlaku by filtraci tekutiny zabránil.",
          "Správně! Levostranné srdeční selhání vyvolá retrográdní městnání. Tlak v plicních kapilárách stoupne. Jakmile překoná onkotický tlak plazmy (který tekutinu drží v cévách), dochází k masivní transsudaci tekutiny do plic.",
          "Nesprávně. Toxické poškození je mechanismus nekardiogenního edému.",
          "Nesprávně. Zvýšená propustnost (permeabilita) charakterizuje nekardiogenní edém (např. u ARDS)."
        ]
      }
    ]
  },

  "spec-1-25": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Patofyziologie sleziny zahrnuje stavy splenomegalie (zvětšení sleziny), hypersplenismu (patologické zvýšení odbourávání krevních elementů) a následky splenektomie (odstranění sleziny).",
      etiology: [
        "Splenomegalie z městnání: portální hypertenze při jaterní cirhóze, trombóza v. lienalis.",
        "Splenomegalie infekční: infekční mononukleóza (EBV), subakutní bakteriální endokarditida, malárie.",
        "Splenomegalie hematologická: myeloproliferativní choroby (myelofibróza), hemolytické anémie (sférocytóza).",
        "Indikace k splenektomii: trauma (ruptura sleziny), těžká ITP rezistentní na léčbu."
      ],
      pathogenesis: [
        "Hypersplenismus: zvětšená slezina zadržuje a předčasně destruuje erytrocyty, leukocyty a destičky. Vede to k rozvoji pancytopenie (anémie, granulocytopenie, trombocytopenie).",
        "Slezina je klíčový sekundární lymfatický orgán filtrující opouzdřené bakterie.",
        "Splenektomie vyvolá ztrátu schopnosti tvořit specifické protilátky (IgM) a odstraňovat opsonizované bakterie, což ohrožuje pacienta OPSI syndromem (Overwhelming Post-Splenectomy Infection)."
      ],
      clinicalManifestation: [
        "Pocit plnosti a tlaku v levém podžebří.",
        "Projevy pancytopenie: únava (anémie), náchylnost k infekcím (leukopenie), krvácivé projevy (trombocytopenie).",
        "OPSI syndrom po splenektomii: bleskově probíhající sepse vyvolaná opouzdřenými kmeny (*Streptococcus pneumoniae*, *Neisseria meningitidis*, *Haemophilus influenzae*)."
      ],
      diagnostics: [
        "Sonografie břicha k přesnému změření velikosti sleziny (norma do 12x5 cm).",
        "Krevní obraz (pancytopenie s retikulocytózou u hypersplenismu).",
        "Nátěr periferní krve po splenektomii: nález **Howell-Jollyových tělísek** (zbytků jádra v erytrocytech, které normálně slezina odstraňuje)."
      ]
    },
    quiz: [
      {
        question: "Které bakteriální kmeny představují největší riziko bleskové sepse (OPSI syndromu) pro pacienta po splenektomii?",
        options: [
          "Gramnegativní střevní bakterie (E. coli)",
          "Opouzdřené bakterie: Streptococcus pneumoniae, Neisseria meningitidis a Haemophilus influenzae",
          "Anaerobní bakterie rodu Clostridium",
          "Mykobakterie"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. E. coli nepředstavuje hlavní kmen pro OPSI.",
          "Správně! Slezina je klíčová pro clearance opsonizovaných opouzdřených mikroorganismů z krve. Po splenektomii chybí rychlá fagocytóza těchto kmenů, což může vést k hyperakutní sepsi. Pacienti musí být předem očkováni.",
          "Nesprávně. Clostridie vyvolávají plynatou sněť či kolitidu, ne OPSI.",
          "Nesprávně. Mykobakterie jsou odstraňovány buněčnou imunitou v plicích, ne slezinou."
        ]
      }
    ]
  },

  "spec-1-26": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Obstrukční plicní nemoci jsou charakterizovány omezením proudění vzduchu v dýchacích cestách (zvýšeným bronchiálním odporem) během výdechu.",
      etiology: [
        "Vdechování škodlivých částic: tabákový kouř (hlavní příčina CHOPN), znečištěné ovzduší, průmyslový prach.",
        "Alergeny: pyly, roztoči, srst zvířat (hlavní spouštěče alergického astmatu).",
        "Genetické faktory: deficit alfa-1-antitrypsinu (předčasný emfyzém plic u nekuřáků).",
        "Hyperreaktivita dýchacích cest na chlad, infekce, fyzickou námahu."
      ],
      pathogenesis: [
        "Zúžení lumina dýchacích cest je způsobeno bronchospasmem (kontrakce hladké svaloviny), slizničním edémem, hypersekrecí vazkého hlenu a fibrózou stěny.",
        "U plicního emfyzému: destrukce elastické tkáně plic sníží radiální trakci bronchiolů, které při výdechu předčasně kolabují (vzduchová past).",
        "Nárůst reziduálního objemu (RV) a hyperinflace plic posouvá dechovou polohu do nádechové polohy (těžší práce dýchacích svalů)."
      ],
      clinicalManifestation: [
        "Exspirační dušnost (ztížený a prodloužený výdech) doprovázená pískoty a vrzoty (wheezing).",
        "Chronický kašel (produktivní u chronické bronchitidy, suchý a záchvatovitý u astmatu).",
        "Soudkovitý hrudník (u emfyzému z důvodu trvalého roztažení plic)."
      ],
      diagnostics: [
        "Spiromerie (pokles indexu FEV1/FVC pod 70 % je zlatým standardem diagnostiky).",
        "Bronchodilatační test (reverzibilita u astmatu vs. fixovaná obstrukce u CHOPN).",
        "Bodypletysmografie (průkaz zvýšeného RV a funkční reziduální kapacity FRC)."
      ]
    },
    quiz: [
      {
        question: "Který spirometrický nález je základním diagnostickým kritériem pro obstrukční plicní onemocnění?",
        options: [
          "Pokles celkové plicní kapacity (TLC) pod 80 %",
          "Pokles Tiffeneauova indexu (poměru FEV1/FVC) pod 70 % (0.70)",
          "Zvýšení difúzní kapacity plic nad 120 %",
          "Zrychlení výdechové rychlosti"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Pokles TLC je známkou restrikce.",
          "Správně! Obstrukce se projevuje zpomalením toku vzduchu při úsilném výdechu, což vede k poklesu FEV1. Poměr FEV1 k úsilné vitální kapacitě (FVC) klesá pod limit 70 % a definuje obstrukci.",
          "Nesprávně. Difúzní kapacita u obstrukčních chorob (emfyzém) klesá, nestoupá.",
          "Nesprávně. Výdechová rychlost se zpomaluje, nezrychluje."
        ]
      }
    ]
  },

  "spec-1-27": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Obstrukce horních dýchacích cest (OHDC) představuje mechanické zúžení nebo uzávěr dýchacích cest nad úrovní hlavních bronchů, které bezprostředně ohrožuje život pacienta udušením.",
      etiology: [
        "Aspirace cizího tělesa (nejčastěji u dětí a starších osob – jídlo, hračky).",
        "Akutní záněty: laryngitida (pseudokrup u dětí), akutní epiglotitida (vyvolaná *Haemophilus influenzae* b).",
        "Anafylaktická reakce: edém hrtanu a hlasivek (angioedém po bodnutí hmyzem, lécích).",
        "Trauma krku a obličeje, inhalace horkých plynů (popálení dýchacích cest)."
      ],
      pathogenesis: [
        "Zúžení lumina nad hlasivkami vyvolá turbulenci proudícího vzduchu.",
        "Vzniká vysoký odpor, který vyžaduje enormní inspirační úsilí.",
        "Rozvíjí se **inspirační stridor** (drsný šelest slyšitelný při nádechu). Zvýšený podtlak v hrudníku vede k zatahování jugulární jamky a mezižeberních prostor."
      ],
      clinicalManifestation: [
        "Inspirační dušnost doprovázená hlasitým pískavým nádechem (inspirační stridor).",
        "Zatahování pomocných dýchacích svalů (jugulum, mezižebří, nadklíčky).",
        "Neklid, úzkost, cyanóza obličeje a rtů přecházející do apnoe a bezvědomí při úplném uzávěru."
      ],
      diagnostics: [
        "Klinický obraz (náhlý začátek dušnosti s inspiračním stridorem je jasnou indikací k terapii).",
        "Laryngoskopie (vizualizace edému epiglotidy či hlasivek).",
        "Spirometrie (křivka průtok-objem vykazuje oploštění inspirační části u fixní obstrukce horních cest)."
      ]
    },
    quiz: [
      {
        question: "Který poslechový fenomén je typický pro obstrukci horních dýchacích cest (např. při aspiraci cizího tělesa či edému hrtanu)?",
        options: [
          "Exspirační pískoty (wheezing) při výdechu",
          "Inspirační stridor (hrubý pískavý šelest při nádechu) a zatahování jugula",
          "Vlhké nesouznělé chrůpky na plicních bázích",
          "Amforické dýchání"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Exspirační pískoty značí obstrukci dolních cest (astma).",
          "Správně! Zúžení horních cest (hrtan, trachea) brání proudění vzduchu dovnitř. Při nádechu vzniká nad překážkou turbulence, která se projevuje slyšitelným stridorem. Silný podtlak v hrudníku vtahuje měkké tkáně krku (jugulární jamku).",
          "Nesprávně. Vlhké chrůpky svědčí pro přítomnost tekutiny v alveolech (plicní edém).",
          "Nesprávně. Amforické dýchání je typické nad velkou plicní dutinou (tbc kaverna)."
        ]
      }
    ]
  },

  "spec-1-28": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Glomerulární filtrační bariéra</h3>
          <p>Filtrační bariéra se skládá z fenestrovaného endotelu, glomerulární bazální membrány (GBM) a podocytů s jejich pedicely. GBM nese negativní náboj, který odpuzuje negativně nabité proteiny (např. albumin). Poškození této bariéry vyvolá nefrotický nebo nefritický syndrom.</p>
        </section>
        <section>
          <h3>2. Nefrotický syndrom (Podocytopatie)</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Nezánětlivé poškození podocytů (fúze pedicelů) nebo ztráta elektrického náboje GBM. Propustnost pro bílkoviny dramaticky stoupá.</li>
            <li><strong>Klinická kritéria:</strong>
              <ul>
                <li><strong>Masivní proteinurie:</strong> &gt; 3.5 g/24h.</li>
                <li><strong>Hypoalbuminémie:</strong> &lt; 30 g/l v séru.</li>
                <li><strong>Těžké edémy:</strong> Způsobené poklesem onkotického tlaku plazmy a únikem vody do intersticia, doprovázené retencí sodíku a vody (aktivace RAAS).</li>
                <li><strong>Hyperlipidémie:</strong> Játra reagují na pokles onkotického tlaku zvýšenou syntézou proteinů i lipoproteinů.</li>
              </ul>
            </li>
            <li><strong>Komplikace:</strong> Hyperkoagulační stav (ztráta antitrombinu III močí) a imunodeficit (ztráta IgG).</li>
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
                <li><strong>Mírná proteinurie:</strong> &lt; 3 g/den.</li>
              </ul>
            </li>
          </ul>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč jsou pacienti s nefrotickým syndromem ve vysokém riziku vzniku tromoembolických komplikací?",
        options: [
          "Dochází k nadměrné produkci destiček ve slezině",
          "Dochází k masivní ztrátě antitrombinu III močí spolu se zvýšenou syntézou prokoagulačních faktorů v játrech",
          "Vápník se uvolňuje z kostí a sráží krev v cévách",
          "Krevní oběh se zpomaluje v důsledku vazodilatace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Slezina produkci destiček u nefrotického syndromu nezvyšuje.",
          "Správně! Nefrotická proteinurie postihuje i proteiny střední velikosti. Ztráta antitrombinu III (váha 58 kDa) vede k posunu hemokoagulační rovnováhy směrem k hyperkoagulaci.",
          "Nesprávně. Vápník sice hraje roli v koagulaci, ale jeho mobilizace z kostí nesouvisí s trombózami u nefrotického syndromu.",
          "Nesprávně. Vazodilatace zde nenastává, naopak dochází k vazokonstrikci a retenci tekutin."
        ]
      }
    ]
  },

  "spec-1-29": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Leukopenie je pokles počtu bílých krvinek pod 4x10^9/l. Nejvýznamnější formou je neutropenie (pokles granulocytů), která dramaticky snižuje obranyschopnost těla.",
      etiology: [
        "Polékový útlum (myelotoxicita): chemoterapie (cytostatika), imunosupresiva, metamizol (riziko agranulocytózy).",
        "Infiltrace a destrukce kostní dřeně: leukémie, myelofibróza, myeloftíza (metastázy nádorů).",
        "Autoimunitní destrukce: systémový lupus erythematodes (SLE), syndrom Evansové.",
        "Virové infekce: HIV, EBV, těžká sepse (vyčerpání rezerv dřeně)."
      ],
      pathogenesis: [
        "Snížená produkce v kostní dřeni z důvodu destrukce kmenových buněk nebo nedostatku růstových faktorů (G-CSF).",
        "Zvýšená destrukce v oběhu (imunitně) nebo zvýšená sekvestrace ve zvětšené slezině (hypersplenismus).",
        "Nedostatek neutrofilních granulocytů znemožňuje primární fagocytózu bakterií a plísní, což vede k rozvoji oportunních infekcí."
      ],
      clinicalManifestation: [
        "Horečka neznámého původu bez zřejmého ložiska (neutropenická horečka).",
        "Angína s ulceracemi a nekrózami v dutině ústní (agranulocytární angína).",
        "Rychlý rozvoj sepse z banálních infekcí (slizniční bariéra nefunguje)."
      ],
      diagnostics: [
        "Krevní obraz (detekce leukopenie a absolutního počtu neutrofilů - ANC).",
        "Vyšetření kostní dřeně (trepanobiopsie a aspirace) k posouzení celulárnosti a přítomnosti blastů.",
        "Hemokultury a mikrobiologické stěry při vzniku horečky."
      ]
    },
    quiz: [
      {
        question: "Co definuje stav tzv. agranulocytózy, který představuje urgentní stav v hematologii?",
        options: [
          "Pokles počtu lymfocytů pod 1.0 x 10^9/l",
          "Pokles absolutního počtu neutrofilních granulocytů (ANC) pod 0.5 x 10^9/l (často z důvodu toxicity léků)",
          "Vymizení všech červených krvinek z oběhu",
          "Nadbytek eosinofilů"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Lymfocytopenie je závažná (např. u AIDS), ale agranulocytóza se týká granulocytů.",
          "Správně! Agranulocytóza je extrémní forma neutropenie. Při poklesu pod 0.5 x 10^9/l (500 buněk/ul) ztrácí tělo schopnost bránit se bakteriální flóře. Pacient je ohrožen bleskovou sepsí a musí být izolován v reverzní izolaci.",
          "Nesprávně. Červené krvinky při agranulocytóze postiženy být nemusí.",
          "Nesprávně. Eosinofilie je opakem útlumu granulocytů."
        ]
      }
    ]
  },

  "spec-1-30": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Levostranné srdeční selhání je charakterizováno neschopností levé komory přečerpat krev ze systémového plicního oběhu do aorty, což vede k plicnímu městnání a systémové hypoperfuzi.",
      etiology: [
        "Ischemická choroba srdeční: akutní infarkt myokardu levé komory, chronická ischemická kardiomyopatie.",
        "Arteriální hypertenze: hypertenzní krize výrazně zvýší afterload levé komory.",
        "Chlopenní vady: aortální stenóza/regurgitace, mitrální regurgitace.",
        "Kardiomyopatie (zejména dilatovaná kardiomyopatie)."
      ],
      pathogenesis: [
        "Selhání systoly (pokles kontraktility) nebo diastoly (tuhost komory) levé komory.",
        "Stoupá koncový diastolický tlak v levé komoře (LVEDP) a retrográdně v levé síni a plicních žilách.",
        "Vzestup hydrostatického tlaku v plicních kapilárách nad onkotický tlak plazmy vyvolá transsudaci tekutiny do plicního intersticia a alveolů (plicní edém)."
      ],
      clinicalManifestation: [
        "Dušnost (dyspnoe) – námahová, klidová, záchvatovitá noční dušnost (asthma cardiale) a ortopnoe.",
        "Při rozvoji plicního edému: vykašlávání růžového pěnícího sputa, vlhké chrůpky při poslechu plic.",
        "Příznaky nízkého srdečního výdeje: svalová slabost, chladná opocená kůže (vazokonstrikce sympatikem), oligurie, zmatenost."
      ],
      diagnostics: [
        "Echokardiografie (klíč k hodnocení ejekční frakce levé komory a chlopní).",
        "Rentgen hrudníku (průkaz kardiomegalie, městnání v plicním oběhu, pleurální výpotek).",
        "Stanovení BNP / NT-proBNP v séru (markery napětí stěny levé komory)."
      ]
    },
    quiz: [
      {
        question: "Proč pacienti s levostranným srdečním selháním trpí tzv. ortopnoí (dušností vleže, která se zmírní posazením)?",
        options: [
          "Vleže dochází k ochrnutí bránice",
          "Vleže dochází k přesunu krve z dolních končetin a břicha do hrudníku (zvýšení preloadu), což přetíží levé srdce a zhorší plicní městnání",
          "Vleže klesá frekvence SA uzlu na polovinu",
          "Vleže se plíce plní vzduchem s nízkým obsahem kyslíku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Bránice vleže normálně funguje.",
          "Správně! Horizontální poloha odstraňuje vliv gravitace na žilní krev. Krev z dolní poloviny těla se vrací do hrudníku. Selhávající levá komora nedokáže tento zvýšený přítok (preload) přečerpat, tlak v plicních kapilárách stoupne a tekutina prosakuje do alveolů. Posazením se krev gravitací opět přesune dolů.",
          "Nesprávně. Frekvence se vleže spíše mírně zpomaluje, ale ne na polovinu a není to příčina dušnosti.",
          "Nesprávně. Složení vzduchu v místnosti nezávisí na poloze těla."
        ]
      }
    ]
  },

  "spec-1-31": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Leukocytóza je zvýšení počtu bílých krvinek nad 10x10^9/l. Může být reaktivní (nenádorová, např. při infekci) nebo neoplastická (leukémie a lymfomy). Myelopatie označují poruchy kostní dřeně.",
      etiology: [
        "Reaktivní leukocytóza: akutní bakteriální infekce (neutrofilie), virové infekce (lymfocytóza), popáleniny, stres.",
        "Leukemie akutní (AML, ALL) a chronické (CML, CLL) – klonální neoplastické proliferace.",
        "Lymfomy: Hodgkinův a nehodgkinovy lymfomy.",
        "Myelopatie: myelofibróza (náhrada dřeně vazivem), myeloftíza (vytlačení dřeně metastázami), myeloproliferace."
      ],
      pathogenesis: [
        "U reaktivní leukocytózy: zánětlivé cytokiny (G-CSF) stimulují dřeň k rychlému vyplavení rezerv granulocytů do oběhu (posun doleva).",
        "U akutní leukémie: genetický zvrat v kmenové buňce zablokuje diferenciaci (zrání). Dochází k akumulaci nezralých **blastů** v kostní dřeni, které utlačují normální krvetvorbu (vzniká anémie a trombocytopenie).",
        "U CML: mutace genu BCR-ABL1 (Filadelfský chromozom) vyvolá trvalou aktivaci tyrosinkinázy a nadprodukci granulocytů všech stádií zrání."
      ],
      clinicalManifestation: [
        "U leukémií: uremický syndrom, krvácivé projevy (trombocytopenie), anémie (bledost, únava), splenomegalie, lymfadenopatie.",
        "Horečky a noční pocení (vliv cytokinů u lymfomů).",
        "Leukostáza u extrémně vysoké leukocytózy (> 100x10^9/l) – ucpávání mikrocirkulace v mozku a plicích (dušnost, zmatenost)."
      ],
      diagnostics: [
        "Krevní obraz a diferenciální rozpočet (průkaz leukocytózy, blastů u akutních forem).",
        "Aspirace a trepanobiopsie kostní dřeně (cytologické, histologické a průtokové cytometrické vyhodnocení).",
        "Genetické vyšetření na přítomnost Filadelfského chromozomu t(9;22) u CML."
      ]
    },
    quiz: [
      {
        question: "Co je hlavní patofyziologickou příčinou rozvoje anémie a trombocytopenie u pacientů s akutní leukémií?",
        options: [
          "Přímý rozpad červených krvinek v játrech",
          "Mechanický útlak a vytlačení normální krvetvorby v kostní dřeni masivní proliferací nezralých blastů (myeloftíza)",
          "Ztráty krve močí z důvodu nefrotoxicity leukemických buněk",
          "Deficit železa vyvolaný leukemickými buňkami"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. K hemolýze v játrech primárně nedochází.",
          "Správně! Nekontrolovaná akumulace leukemických blastů v kostní dřeni obsadí veškerý prostor (niky kmenových buněk). Normální prekurzory červené řady a megakaryocytů nemají prostor pro zrání a zanikají, což vede k pancytopenii.",
          "Nesprávně. Krvácení se objevuje jako následek trombocytopenie, nikoliv jako příčina útlumu.",
          "Nesprávně. Železo je v těle přítomno, ale dřeň ho nedokáže využít kvůli destrukci prekurzorů."
        ]
      }
    ]
  },

  "spec-1-32": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Ischemická choroba srdeční (ICHS) je onemocnění myokardu vyvolané nepoměrem mezi dodávkou kyslíku (věnčitými tepnami) a jeho spotřebou. Dělí se na stabilní formy a akutní koronární syndromy.",
      etiology: [
        "Ateroskleróza věnčitých tepen (hlavní příčina - fixní stenóza nebo ruptura plátu).",
        "Spasmus koronární arterie (Prinzmetalova angina pectoris).",
        "Rizikové faktory: dyslipidémie (vysoké LDL), hypertenze, diabetes mellitus, kouření, mužské pohlaví, obezita."
      ],
      pathogenesis: [
        "Stabilní AP: stabilní aterosklerotický plát zužuje lumen tepny. V klidu perfuze stačí, při zátěži (tachykardie) roste spotřeba kyslíku, kterou zúžená céva nedokáže pokrýt – vzniká přechodná subendokardiální ischemie (bolest na hrudi).",
        "Akutní koronární syndrom (AKS): ruptura či eroze nestabilního plátu odhalí subendotelový kolagen, což spustí okamžitou adhezi a agregaci destiček a vznik trombu.",
        "Kompletní uzávěr tepny vede k transmurální nekróze (STEMI), neúplný uzávěr k subendokardiální nekróze (NSTEMI) nebo nestabilní angině pectoris."
      ],
      clinicalManifestation: [
        "Anginózní bolest: tlaková, pálivá, svíravá bolest za hrudní kostí (stenokardie) propagující se do levé ruky, krku či dolní čelisti.",
        "U stabilní AP: bolest vzniká při zátěži a mizí v klidu nebo po nitroglycerinu do 5 minut.",
        "U AKS: bolest vzniká v klidu, trvá > 20 minut, nereaguje na nitroglycerin, je provázena studeným potem, dušností a zvracením."
      ],
      diagnostics: [
        "EKG (ST elevace u STEMI, deprese ST/inverze T u NSTEMI/stabilní AP).",
        "Kardiální markery: troponiny (vysoké u STEMI/NSTEMI, normální u stabilní a nestabilní AP).",
        "Koronarografie (zlatý standard k lokalizaci uzávěru/zúžení)."
      ]
    },
    quiz: [
      {
        question: "Jak se patofyziologicky a diagnosticky liší nestabilní angina pectoris (NAP) od infarktu myokardu bez elevací ST (NSTEMI)?",
        options: [
          "U NAP je přítomen kompletní uzávěr věnčité tepny",
          "U NSTEMI dochází k nekróze kardiomyocytů a stoupají troponiny v séru, zatímco u NAP jde o ischemii bez nekrózy a troponiny jsou negativní",
          "U NAP jsou přítomny elevace ST na EKG",
          "NSTEMI se léčí výhradně antibiotiky"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Kompletní uzávěr je u STEMI.",
          "Správně! Obě jednotky (NAP i NSTEMI) vznikají na podkladě neúplného uzávěru tepny a mají podobný EKG obraz (deprese ST/inverze T). Klíčovým rozdílem je přítomnost nekrózy buněk – u NSTEMI buňky odumírají a uvolňují troponin, u NAP je ischemie reverzibilní a troponiny zůstávají v normě.",
          "Nesprávně. Elevace ST definují STEMI.",
          "Nesprávně. Infarkt je ischemická nekróza, antibiotika v léčbě nehrají roli."
        ]
      }
    ]
  },

  "spec-1-33": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Intersticiální plicní nemoci (IPN) jsou skupina různorodých chorob postihujících alveolární stěny a perialveolární intersticium. Cystická fibróza je autozomálně recesivní onemocnění charakterizované viskózním exkretem.",
      etiology: [
        "IPN - známé příčiny: expozice prachům (křemík - silikóza, azbest - azbestóza, uhelný prach), léky (amiodaron).",
        "IPN - neznámé příčiny: idiopatická plicní fibróza (IPF), sarkoidóza (granulomatózní zánět).",
        "Cystická fibróza (CF): mutace genu **CFTR** (nejčastěji delta-F508) na 7. chromozomu."
      ],
      pathogenesis: [
        "U IPN: chronické alveolární poškození vede k aktivaci fibroblastů, ukládání kolagenu a destrukci plicní architektury, což vyústí v restrikční ventilační poruchu a poruchu difúze.",
        "U Cystické fibrózy: defektní CFTR protein funguje jako chloridový kanál. Nefunkčnost kanálu znemožňuje transport chloridových iontů z buněk.",
        "Voda následuje ionty zpět do buněk, což vede k dehydrataci hlenu na sliznicích. Vzniká extrémně **vazký, lepivý hlen**, který ucpává bronchy, vývody pankreatu a žlučové cesty."
      ],
      clinicalManifestation: [
        "U IPN: suchý dráždivý kašel, progresivní námahová dušnost, krepitus (zvuk 'suchého zipu' při poslechu plic).",
        "U Cystické fibrózy plicní: opakované těžké bronchopneumonie, bronchiektázie, kolonizace pseudomonádami, dušnost.",
        "U Cystické fibrózy mimoplicní: exokrinní insuficience pankreatu (steatorhea - mastná stolice, malnutrice, diabetes), vysoká koncentrace soli v potu."
      ],
      diagnostics: [
        "U IPN: HRCT plic (obraz voštiny), spirometrie (restrikce), plicní biopsie.",
        "U Cystické fibrózy: **potní test** (stanovení chloridů v potu pilokarpinovou iontoforézou - pozitivní při Cl > 60 mmol/l).",
        "Genetické vyšetření mutací genu CFTR."
      ]
    },
    quiz: [
      {
        question: "Jaký je primární patofyziologický defekt u pacientů s cystickou fibrózou?",
        options: [
          "Absolutní nedostatek plicního surfaktantu",
          "Mutace genu CFTR vedoucí k poruše chloridového kanálu, což způsobuje tvorbu extrémně viskózního hlenu na sliznicích",
          "Nadprodukce alfa-1-antitrypsinu",
          "Chronický spasmus bronchiálního svalstva vyvolaný IgE"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Surfaktant je u CF normální.",
          "Správně! CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) reguluje transport chloru. Jeho mutace vede k dehydrataci sekretů. Hlen v dýchacích cestách a pankreatu je hustý, ucpává lumen a vytváří prostředí pro chronickou infekci.",
          "Nesprávně. U CF alfa-1-antitrypsin zvýšený není (jeho nedostatek způsobuje emfyzém).",
          "Nesprávně. Spasmus a IgE jsou znaky astmatu, nikoliv primárního defektu u CF."
        ]
      }
    ]
  },

  "spec-1-34": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a stádia chronického onemocnění ledvin (CKD)</h3>
          <p><strong>Chronické onemocnění ledvin (CKD)</strong> je definováno jako poškození ledvin nebo pokles GFR pod 1 ml/s (60 ml/min/1.73 m²) trvající déle než 3 měsíce. Klasifikuje se podle GFR (stádia G1–G5) a albuminurie (stádia A1–A3). Konečným stádiem (G5) je uremické selhání ledvin vyžadující náhradu funkce (dialýza/transplantace).</p>
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
            <li><strong>Renální osteodystrofie a Sekundární hyperparatyreóza:</strong> Pokles GFR vede k retenci fosfátů. Fosfáty se vážou s vápníkem, což vyvolá hypokalcémii. Ledviny navíc nedokážou transformovat vitamín D na aktivní **kalcitriol**. Hypokalcémie a hyperfosfatémie stimulují příštítná tělíska k sekreci **parathormonu (PTH)**. PTH odbourává kosti (osteoklastická resorpce).</li>
            <li><strong>Uremická anémie:</strong> Snížená produkce **erytropoetinu** peritubulárními buňkami ledvin vyvolá normocytární normochromní anémii.</li>
            <li><strong>Metabolická acidóza:</strong> Ledviny ztrácejí schopnost vylučovat vodíkové ionty a reabsorbovat hydrogenuhličitany. Rozvíjí se metabolická acidóza s normální nebo zvýšenou aniontovou mezerou (retence sulfátů, fosfátů). Pacient kompenzuje hlubokým, zrychleným dýcháním (Kussmaulovo dýchání).</li>
          </ul>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
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
          "Nesprávně. Parathormon není vylučován ledvinami a nestimuluje štítnou žlázu.",
          "Správně! Pokles GFR vyvolá retenci fosfátů a snížená hydroxylace kalcitriolu vede k nízkému vstřebávání vápníku ze střeva. Výsledná hypokalcémie a hyperfosfatémie jsou silným stimulem pro sekreci parathormonu.",
          "Nesprávně. Močovina nezpůsobuje nádorové bujení příštítných tělísek.",
          "Nesprávně. U CKD je naopak nedostatek erytropoetinu a ten s vápníkem nesouvisí."
        ]
      }
    ]
  },

  "spec-1-35": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Chronické respirační selhání (CRF) je dlouhodobý stav, kdy plíce nejsou schopny zajistit adekvátní výměnu plynů v klidu nebo při běžné zátěži. Dělí se na hypoxemické (typ I) a globální (typ II).",
      etiology: [
        "Chronická obstrukční plicní nemoc (CHOPN - nejčastější příčina rozvoje typu II).",
        "Pokročilé intersticiální plicní procesy (plicní fibrózy - vedou k typu I).",
        "Těžké deformity hrudníku (kyfoskolióza) a obezita (syndrom hypoventilace).",
        "Neuromuskulární onemocnění (ALS, dystrofie)."
      ],
      pathogenesis: [
        "Typ I (hypoxemické): porucha ventilačně-perfuzního poměru a difúze vede k hypoxémii ($paO_2 < 8\text{ kPa}$). Hladina $paCO_2$ je normální nebo nízká z důvodu kompenzační hyperventilace.",
        "Typ II (globální / hyperkapnické): selhání dechové pumpy a unavenost svalů znemožňuje adekvátní alveolární ventilaci. Dochází k retenci $CO_2$ ($paCO_2 > 6.7\text{ kPa}$) doprovázené hypoxií.",
        "Kompenzace: ledviny zadržují hydrogenuhličitany ($HCO_3^-$) k udržení normálního pH (kompenzovaná respirační acidóza)."
      ],
      clinicalManifestation: [
        "Námahová až klidová dušnost, tachypnoe.",
        "Symptomy hyperkapnie: bolesti hlavy (vazodilatace cév v mozku), teplá kůže, opocení, třes rukou (asterixis), spavost až koma (CO2 narkóza).",
        "Polycytémie vyvolaná chronickou hypoxií (nadprodukce EPO ledvinami)."
      ],
      diagnostics: [
        "Analýza krevních plynů (Astrup) z arteriální nebo arterializované kapilární krve.",
        "Spirometrie a bodypletysmografie k určení základní plicní patologie.",
        "Echokardiografie k průkazu pravostranného přetížení (plicní hypertenze, cor pulmonale)."
      ]
    },
    quiz: [
      {
        question: "Jak se patofyziologicky definuje globální (typ II) respirační selhání z hlediska krevních plynů?",
        options: [
          "paO2 je v normě a paCO2 je extrémně nízké",
          "Přítomnost hypoxémie (paO2 < 8.0 kPa / 60 mmHg) současně s hyperkapnií (paCO2 > 6.7 kPa / 50 mmHg) v důsledku alveolární hypoventilace",
          "Normální plyny a zvýšené pH plazmy",
          "Vzestup kyslíku na dvojnásobek"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízké paCO2 a normální paO2 není respirační selhání.",
          "Správně! Globální (typ II) selhání znamená, že plíce selhávají v obou funkcích – nedokážou krev okysličit (hypoxémie) ani odvést oxid uhličitý (hyperkapnie). Je to důsledek hypoventilace (selhání ventilace).",
          "Nesprávně. Plyny u selhání jsou výrazně patologické.",
          "Nesprávně. Kyslík u respiračního selhání klesá, nestoupá."
        ]
      }
    ]
  },

  "spec-1-36": {
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
            <li>Zánět je obvykle alergický, mediovaný Th2-lymfocyty, **eosinofily**, mastocyty a produkcí IgE.</li>
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
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký patofyziologický proces vysvětluje vznik emfyzému u pacientů s CHOPN?",
        options: [
          "Spasmus hladké svaloviny bronchiolů vyvolaný IgE protilátkami",
          "Nadprodukce hlenu, která mechanicky trhá plicní sklípky",
          "Zvýšená aktivita proteáz (např. elastázy) uvolňovaných z neutrofilů, která převyšuje antiproteázovou kapacitu a ničí elastická septa alveolů",
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

  "spec-1-37": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Hypokoagulační stavy jsou poruchy charakterizované sníženou schopností srážení krve, což vede k abnormálnímu krvácení z důvodu deficitu koagulačních faktorů.",
      etiology: [
        "Vrozené deficity: hemofilie A (deficit f. VIII), hemofilie B (deficit f. IX), von Willebrandova choroba (deficit vWF - nejčastější).",
        "Získané stavy: deficit vitamínu K (novorozenci, malabsorpce, léčba Warfarinem - blokáda faktorů II, VII, IX, X).",
        "Těžká jaterní cirhóza (játra nesyntetizují koagulační faktory).",
        "Konzumpční koagulopatie: pokročilá fáze diseminované intravaskulární koagulace (DIC)."
      ],
      pathogenesis: [
        "Absence nebo funkční nedostatek faktoru v koagulační kaskádě znemožňuje stabilní tvorbu fibrinu.",
        "U hemofilie A/B: porucha vnitřní cesty aktivace koagulace, což výrazně **prodlužuje APTT**, zatímco Quickův čas (vnější cesta) je v normě.",
        "U deficitu vit. K a jaterních chorob: dochází k poruše karboxylace glutamových kyselin faktorů II, VII, IX, X (PIVKA proteiny), což **prodlužuje Quickův čas (INR)**."
      ],
      clinicalManifestation: [
        "Krvácení do velkých kloubů (kolena, lokty) – typické pro hemofilie (hemartros), vedoucí k chronické artropatii.",
        "Rozsáhlé hematomy ve svalech a podkoží po minimálním traumatu.",
        "Prodloužené krvácení po chirurgických výkonech či extrakci zubu."
      ],
      diagnostics: [
        "Koagulační screening: APTT (prodloužené u hemofilie, vWF), Quick/INR (prodloužený u deficitu vit. K, jaterních chorob).",
        "Exaktní stanovení aktivity jednotlivých koagulačních faktorů (f. VIII, IX).",
        "Kvantitativní a kvalitativní vyšetření von Willebrandova faktoru."
      ]
    },
    quiz: [
      {
        question: "Který koagulační test bude patologický (prodloužený) u pacienta s hemofilií A, a který bude v normě?",
        options: [
          "Quickův čas bude prodloužený a APTT v normě",
          "APTT bude prodloužené a Quickův čas (PT) bude v normě",
          "Oba testy budou extrémně prodloužené",
          "Oba testy budou normální a klesnou destičky"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hemofilie nepostihuje vnější cestu, Quick je tedy normální.",
          "Správně! Hemofilie A je deficit faktoru VIII, který je součástí vnitřní cesty aktivace koagulace. Tuto cestu specificky testuje APTT (bude prodloužené). Vnější cesta (testovaná Quickem) vyžaduje faktor VII, který je u hemofilie normální, proto je Quick v normě.",
          "Nesprávně. Společné prodloužení je typické např. pro těžké jaterní selhání nebo předávkování antikoagulancii.",
          "Nesprávně. Koagulační časy jsou u hemofilie patologické (APTT), počet destiček je normální."
        ]
      }
    ]
  },

  "spec-1-38": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Hyperkoagulační stavy (trombofilie) jsou vrozené nebo získané poruchy hemokoagulace predisponující pacienta k rozvoji trombóz (zejména hluboké žilní trombózy a plicní embolie).",
      etiology: [
        "Vrozené trombofilie (mutace): **Leidenská mutace faktoru V** (nejčastější), mutace genu pro protrombin (G20210A).",
        "Vrozené deficity přirozených antikoagulancií: deficit proteinu C, proteinu S, antitrombinu III.",
        "Získané stavy: **Antifosfolipidový syndrom** (autoimunitní), maligní nádory (uvolňují tkáňový faktor - Trousseauův syndrom).",
        "Rizikové faktory: orální antikoncepce (estrogeny zvyšují faktory), těhotenství, imobilizace."
      ],
      pathogenesis: [
        "U Leidenské mutace: faktor V je rezistentní k štěpení aktivovaným proteinem C (APC rezistence). Faktor V tak trvale stimuluje koagulaci.",
        "U deficitu antitrombinu III: chybí hlavní inhibitor trombinu (f. IIa) a faktoru Xa, což vyvolá hyperkoagulaci a rezistenci na léčbu heparinem.",
        "Tvorba fibrinových sraženin v žilním řečišti s nízkým smykovým třením."
      ],
      clinicalManifestation: [
        "Opakované ataky hluboké žilní trombózy dolních končetin v mladém věku bez zřejmého provokujícího momentu.",
        "Recidivující plicní embolie.",
        "Trombózy v atypických lokalizacích (v. portae, v. mesenterica, žíly mozku) a opakované spontánní potraty (u antifosfolipidového syndromu)."
      ],
      diagnostics: [
        "Genetické PCR vyšetření na přítomnost Leidenské mutace a mutace protrombinu.",
        "Funkční stanovení aktivity proteinu C, proteinu S a antitrombinu III.",
        "Průkaz antifosfolipidových protilátek (lupus antikoagulans, anticardiolipin)."
      ]
    },
    quiz: [
      {
        question: "Co je patofyziologickou podstatou Leidenské mutace faktoru V?",
        options: [
          "Úplná absence faktoru V v plazmě",
          "Bodová mutace ve faktoru V, která ho činí rezistentním vůči inaktivaci aktivovaným proteinem C (APC rezistence), což vede k jeho prodloužené prokoagulační aktivitě",
          "Neschopnost faktoru V vázat vápník",
          "Zvýšená citlivost na Warfarin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Absence by vedla k hypokoagulaci (krvácení).",
          "Správně! Aktivovaný protein C (APC) za fyziologických okolností štěpí a inaktivuje faktor Va, čímž tlumí koagulaci. U Leidenské mutace je místo štěpení změněno, APC ho nedokáže rozložit a faktor V trvale podporuje tvorbu trombinu.",
          "Nesprávně. Vazba vápníku je zachována.",
          "Nesprávně. Mutace neovlivňuje metabolismus Warfarinu."
        ]
      }
    ]
  },

  "spec-1-39": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Srdeční vady jsou strukturální anomálie chlopní či přepážek (vrozené/získané). Kardiomyopatie jsou primární onemocnění myokardu spojená s mechanickou nebo elektrickou dysfunkcí.",
      etiology: [
        "Získané vady chlopní: degenerativní kalcifikace (aortální stenóza u seniorů), porematická horečka, infekční endokarditida.",
        "Vrozené vady: defekt síňového/komorového septa (ASD/VSD), koarktace aorty.",
        "Kardiomyopatie (KMP): dilatovaná (alkohol, myokarditida, genetika), hypertrofická (mutace sarkomer - příčina náhlé smrti sportovců), restrikční (amyloidóza)."
      ],
      pathogenesis: [
        "Aortální stenóza: brání výtoku z levé komory (afterload), komora reaguje **koncentrickou hypertrofií** (ztluštění stěny bez zvětšení lumina) k překonání tlaku.",
        "Mitrální regurgitace: krev uniká zpět do síně (preload), vyvolá **excentrickou hypertrofii** (dilataci a zbytnění komory).",
        "Levopravé zkraty (VSD): krev proudí z levé do pravé komory, přetěžuje plicní oběh objemem. Časem roste plicní odpor, zkrat se obrátí na pravolevý (Eisenmengerův syndrom - rozvoj cyanózy)."
      ],
      clinicalManifestation: [
        "Dušnost, únava, poslechově patologické srdeční šelesty (např. systolický šelest s propagací do karotid u aortální stenózy).",
        "Synkopa při námaze (typická pro aortální stenózu a hypertrofickou KMP z důvodu fixovaného srdečního výdeje).",
        "Cyanóza, paličkovité prsty (u Eisenmengerova syndromu)."
      ],
      diagnostics: [
        "Echokardiografie (klíčová metoda k vizualizaci chlopní, měření tlakových gradientů, tloušťky stěn a funkce).",
        "EKG (průkaz hypertrofie levé/pravé komory, hluboké kmity Q).",
        "Srdeční katetrizace k exaktnímu hemodynamickému měření."
      ]
    },
    quiz: [
      {
        question: "Jak reaguje levá komora patofyziologicky na chronické tlakové přetížení při těžké aortální stenóze?",
        options: [
          "Tenčením své stěny a masivní dilatací (excentrická hypertrofie)",
          "Ztluštěním stěny bez zvětšení vnitřního objemu (koncentrická hypertrofie) k překonání vysokého afterloadu",
          "Kompletní atrofií kardiomyocytů",
          "Zvýšením plicního tlaku bez změn na komoře"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Dilatace a ztenčení je reakcí na objemové přetížení (regurgitace).",
          "Správně! Laplaceův zákon určuje, že ke snížení napětí stěny při vysokém tlaku musí komora ztloustnout. Koncentrická hypertrofie (přidávání sarkomer paralelně) zvyšuje sílu stahu, ale dlouhodobě snižuje poddajnost komory a vede k diastolickému selhání.",
          "Nesprávně. Dochází k hypertrofii (zvětšení buněk), ne k atrofii.",
          "Nesprávně. Změny na komoře jsou primárním kompenzačním mechanismem."
        ]
      }
    ]
  },

  "spec-1-40": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Hemostáza je komplexní systém udržující krev v tekutém stavu a zamezující krvácení při poškození cév. Dělí se na primární (cévy a destičky), sekundární (koagulace) a terciární (fibrinolýza).",
      etiology: [
        "Poruchy primární hemostázy: trombocytopenie, trombocytopatie, vaskulopatie (syndrom Rendu-Osler-Weber).",
        "Poruchy sekundární hemostázy: vrozené (hemofilie, von Willebrandova choroba) a získané (nedostatek vit. K, jaterní selhání).",
        "Poruchy terciární hemostázy (hyperfibrinolýza): vyplavení aktivátorů plazminogenu, předávkování trombolytiky."
      ],
      pathogenesis: [
        "Primární hemostáza: poškození cévy vyvolá vasospasmus. Endotel uvolní vWF, na který adherují destičky přes GP Ib. Aktivované destičky degranulují a agregují přes GP IIb/IIIa za účasti fibrinogenu, vzniká primární destičkový zátka.",
        "Sekundární hemostáza: aktivace vnitřní (kontakt) a vnější (tkáňový faktor) cesty. Obě se spojují ve společnou cestu (aktivace f. X), která přemění protrombin na trombin. Trombin pak štěpí rozpustný fibrinogen na nerozpustný fibrin, který zátku zpevní.",
        "Terciární hemostáza: tPA aktivuje plazminogen na plazmin, který štěpí fibrin na degradované produkty (D-dimery), což brání okluzi cévy."
      ],
      clinicalManifestation: [
        "Defekt primární hemostázy: petechie, purpura, krvácení ze sliznic, krvácení začíná ihned po poranění.",
        "Defekt sekundární hemostázy: hematomy, hemartros (krvácení do kloubů), krvácení bývá pozdní (začne znovu po několika hodinách).",
        "Trombózy při selhání antikoagulačních mechanismů (antitrombin III, protein C/S)."
      ],
      diagnostics: [
        "Počet destiček a doba krvácivosti (testy primární hemostázy).",
        "APTT, Quickův čas, fibrinogen, trombinový čas (testy sekundární hemostázy).",
        "Stanovení D-dimerů k hodnocení aktivity fibrinolýzy."
      ]
    },
    quiz: [
      {
        question: "Jaká je role von Willebrandova faktoru (vWF) v primární hemostáze?",
        options: [
          "Funguje jako enzym štěpící fibrinogen",
          "Slouží jako molekulární můstek zprostředkující adhezi krevních destiček k subendotelovému kolagenu poškozené cévy a zároveň chrání faktor VIII před degradací",
          "Inaktivuje aktivovaný protein C",
          "Způsobuje vazodilataci cév v místě poranění"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Fibrinogen štěpí trombin, ne vWF.",
          "Správně! vWF se váže na kolagen odhalený porušením endotelu a zároveň na glykoprotein Ib destiček, což umožní jejich zachycení v proudu krve. Dále v oběhu funguje jako nosič a stabilizátor koagulačního faktoru VIII.",
          "Nesprávně. vWF nemá vliv na protein C.",
          "Nesprávně. vWF nepůsobí vazodilatačně, v místě poranění je nutná vazokonstrikce."
        ]
      }
    ]
  },

  "spec-1-41": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Zánětlivá onemocnění srdečních stěn zahrnují endokarditidu (postižení chlopní), myokarditidu (postižení svaloviny) a perikarditidu (postižení osrdečníku, hrozící tamponádou).",
      etiology: [
        "Infekční endokarditida: bakteriální infekce chlopní (často *Staphylococcus aureus* u I.V. narkomanů, *Streptococcus viridans* po zubařských výkonech).",
        "Myokarditida: nejčastěji virová (coxsackieviry, parvovirus B19, SARS-CoV-2).",
        "Perikarditida: infekční (viry, tbc), autoimunitní (Dresslerův syndrom po infarktu), uremická (při selhání ledvin).",
        "Srdeční tamponáda: akumulace tekutiny v perikardu (trauma, ruptura komory, malignita)."
      ],
      pathogenesis: [
        "Myokarditida: přímá lýza kardiomyocytů virem a následná imunitní reakce (T-lymfocyty), což vede k dilatační kardiomyopatii a poruchám rytmu.",
        "Endokarditida: na poškozeném endotelu chlopně adherují destičky a fibrin (sterilní vegetace), bakterie v krvi je kolonizují a vytvářejí infekční vegetace, které ničí chlopeň a uvolňují septické emboly.",
        "Srdeční tamponáda: tekutina v pevném perikardu zvýší intraperikardiální tlak. Tlak stlačí nízkotlaké pravé srdce, znemožní plnění komor v diastole a prudce sníží srdeční výdej."
      ],
      clinicalManifestation: [
        "Endokarditida: septické horečky, šelest na srdci, embolizační projevy (třískové hemoragie pod nehty, Janewayovy léze).",
        "Perikarditida: ostrá bolest za hrudní kostí (zhoršuje se vleže a při nádechu, zmírňuje se v předklonu), perikardiální třecí šelest.",
        "Tamponáda: **Beckova triáda** (hypotenze, tiché srdeční ozvy, zvýšená náplň krčních žil), pulsus paradoxus."
      ],
      diagnostics: [
        "Echokardiografie (detekce vegetací na chlopních u endokarditidy, výpotku a kolapsu síní u tamponády).",
        "Hemokultury (klíč k diagnostice infekční endokarditidy).",
        "EKG (difúzní elevace ST s konkávním průběhem a deprese PQ u perikarditidy)."
      ]
    },
    quiz: [
      {
        question: "Co tvoří tzv. Beckovu triádu příznaků, která je patognomická pro rozvoj srdeční tamponády?",
        options: [
          "Horečka, splenomegalie a šelest na chlopni",
          "Systémová hypotenze, zvýšená náplň krčních žil a oslabené (tiché) srdeční ozvy",
          "Ostrá bolest na hrudi, suchý kašel a dušnost",
          "Tachykardie, anurie a otoky kotníků"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto jsou známky infekční endokarditidy.",
          "Správně! Beckova triáda odráží hemodynamické důsledky tamponády. Útlak srdce znemožní plnění komor, klesá srdeční výdej (hypotenze). Krev se hromadí před srdcem v žilním systému (distenze krčních žil) a tekutina kolem srdce tlumí přenos zvuků (tiché ozvy).",
          "Nesprávně. Bolest a kašel jsou symptomy perikarditidy, ale neindikují přímo kritickou tamponádu.",
          "Nesprávně. Tyto příznaky jsou obecné pro srdeční selhání, ne specifické pro tamponádu."
        ]
      }
    ]
  },

  "spec-1-42": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Glomerulopatie jsou onemocnění postihující strukturu a funkci ledvinných glomerulů. Mohou být primární (omezené na ledviny) nebo sekundární (součást systémových chorob).",
      etiology: [
        "Imunitní mechanismy: depozice cirkulujících imunokomplexů (poststreptokoková GN) nebo protilátky in situ proti GBM (Goodpasteurův syndrom).",
        "Systémová onemocnění: diabetes mellitus (diabetická glomeruloskleróza), systémový lupus erythematodes (lupusová nefritida).",
        "Genetické vlivy: Alportův syndrom (mutace kolagenu IV).",
        "Léky a toxiny: zlato, penicilamin, NSAID."
      ],
      pathogenesis: [
        "Zánětlivé glomerulopatie: aktivace komplementu a infiltrace leukocyty vedou k destrukci filtrační bariéry, rupturám kapilár (hematurie) a proliferaci buněk (nefritický syndrom).",
        "Nezánětlivé glomerulopatie: metabolické změny (glykace u diabetu) nebo imunitní poškození podocytů způsobí ztrátu negativního náboje GBM a fúzi pedicelů, což vyvolá masivní únik proteinů (nefrotický syndrom).",
        "Sklerotizace glomerulů vede k poklesu celkové GFR a rozvoji CKD."
      ],
      clinicalManifestation: [
        "Nefrotický syndrom: proteinurie > 3.5 g/24h, těžké otoky, hypoalbuminémie, hyperlipidémie.",
        "Nefritický syndrom: makroskopická hematurie (barvy čaje), hypertenze, oligurie.",
        "Plicní krvácení a hemoptýza (u Goodpasteurova syndromu z důvodu zkřížené reakce protilátek proti plicním alveolům)."
      ],
      diagnostics: [
        "Renální biopsie s imunofluorescenčním a elektronovým mikroskopickým vyšetřením (zlatý standard).",
        "Vyšetření močového sedimentu (dysmorfní erytrocyty) a kvantifikace proteinurie.",
        "Stanovení autoprotilátek (anti-GBM, ANCA, ANA)."
      ]
    },
    quiz: [
      {
        question: "Který patofyziologický mechanismus je podstatou Goodpastureova syndromu?",
        options: [
          "Ukládání amyloidových plátů v ledvinných tubulech",
          "Tvorba autoprotilátek proti alfa-3 řetězci kolagenu IV. typu v bazální membráně glomerulů a plicních alveolů, což vyvolá glomerulonefritidu a plicní krvácení",
          "Nekontrolovaná mutace inzulínového receptoru",
          "Uzávěr ledvinné žíly krevní sraženinou"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Amyloidóza je jiná patologie.",
          "Správně! Goodpastureův syndrom je autoimunitní onemocnění s orgánově specifickými protilátkami proti kolagenu IV, který je klíčovou strukturní složkou jak glomerulární bazální membrány (GBM) ledvin, tak alveolární bazální membrány plic. Projevuje se jako plicně-renální syndrom.",
          "Nesprávně. Inzulínový receptor s Goodpastureovým syndromem nesouvisí.",
          "Nesprávně. Jde o imunologickou destrukci, ne o mechanickou venózní trombózu."
        ]
      }
    ]
  },

  "spec-1-43": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Bradyarytmie jsou poruchy srdečního rytmu s frekvencí pod 50-60/min. Vznikají v důsledku poruchy tvorby vzruchu v SA uzlu nebo poruchy vedení vzruchu v AV uzlu a Hissově svazku.",
      etiology: [
        "Degenerativní fibróza převodního systému věkem (Lenégrova choroba).",
        "Ischemie myokardu: akutní infarkt spodní stěny (často postihuje a. nodi atrioventricularis).",
        "Léky: beta-blokátory, blokátory vápníkových kanálů (verapamil, diltiazem), digoxin.",
        "Zvýšený tonus parasympatiku (např. u trénovaných sportovců, vazovagální stavy) a hypotyreóza."
      ],
      pathogenesis: [
        "Dysfunkce SA uzlu (Sick Sinus Syndrome): selhání tvorby impulsů (sinusová bradykardie, sinusový arrest).",
        "AV blokády (porucha vedení ze síní na komory): I. stupeň (prodloužení PQ > 200 ms), II. stupeň (Mobitz I / Wenckebach s postupným prodlužováním PQ, Mobitz II s náhlým vypadnutím QRS), III. stupeň (kompletní blok s AV disociací a pomalým náhradním rytmem).",
        "Pokles frekvence pod kritickou mez vyvolá hypoperfuzi mozku."
      ],
      clinicalManifestation: [
        "Únava, snížená výkonnost, závratě, dušnost.",
        "**Stokes-Adamsův syndrom**: náhlá synkopa (ztráta vědomí) vyvolaná asystolií trvající několik sekund při přechodu do kompletního bloku.",
        "Kardiogenní šok při extrémní bradykardii."
      ],
      diagnostics: [
        "12svodové EKG (hodnocení trvání PQ intervalu a vztahu vln P a komplexů QRS).",
        "24hodinový EKG Holter k záchytu intermitentních (občasných) blokád.",
        "Farmakologický atropinový test (rozlišení funkčního vagového vlivu od organického poškození)."
      ]
    },
    quiz: [
      {
        question: "Který EKG nález definuje atrioventrikulární (AV) blokádu III. stupně?",
        options: [
          "Postupné prodlužování intervalu PQ, až vypadne jeden QRS komplex",
          "Úplná nezávislost vln P a QRS komplexů (AV disociace), kdy síně pulzují rychleji a komory jsou řízeny pomalým náhradním rytmem",
          "Zkrácení PQ intervalu pod 100 ms",
          "Přítomnost delta vlny"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Wenckebachova perioda charakterizuje AV blok II. stupně, typ Mobitz I.",
          "Správně! U AV bloku III. stupně neprojde ze síní na komory žádný vzruch. Síně a komory mají své vlastní, na sobě nezávislé pacemakery (síně jedou frekvencí SA uzlu, komory pomalým idioventrikulárním či junkčním rytmem).",
          "Nesprávně. Zkrácení PQ je typické pro WPW syndrom.",
          "Nesprávně. Delta vlna je známkou preexcitace, ne AV bloku."
        ]
      }
    ]
  },

  "spec-1-44": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Anémie z nedostatečné produkce (sideropenická, megaloblastová) a ze zvýšených ztrát (akutní posthemoragická) představují stavy snížené kyslíkové kapacity krve s odlišnou etiopatogenezí.",
      etiology: [
        "Sideropenická anémie: chronické ztráty krve (okultní krvácení z GIT u nádorů, menoragie), nedostatečný příjem železa stravou, malabsorpce (celiakie).",
        "Megaloblastová anémie: nedostatek vitamínu B12 (perniciózní anémie - autoimunitní zničení parietálních buněk žaludku produkujících vnitřní faktor) nebo deficit kyseliny listové (alkoholismus).",
        "Akutní posthemoragická anémie: úrazové krvácení, ruptura jícnových varixů, prasklý vřed žaludku."
      ],
      pathogenesis: [
        "Sideropenická: nedostatek železa blokuje syntézu hemu. Erytrocyty procházejí nadbytečným dělením a vzniká **mikrocytární hypochromní anémie** (nízké MCV, MCH).",
        "Megaloblastová: nedostatek B12/folátu blokuje syntézu thyminu a DNA. Buněčné dělení je zpomaleno, ale syntéza hemoglobinu v cytoplazmě pokračuje. Vznikají obrovské buňky – **makrocytární hyperchromní anémie** (vysoké MCV).",
        "Akutní posthemoragická: bezprostředně po krvácení je anémie normocytární normochromní, dochází k hemodiluci (přesun tekutiny z intersticia do cév k udržení objemu)."
      ],
      clinicalManifestation: [
        "Sideropenická: lámavost nehtů (koilonychie - lžičkovité nehty), pálení jazyka, atrofie sliznic, pica (chuť jíst hlínu, křídu).",
        "Megaloblastová: Hunterova glositida (vyhlazený, červený, pálící jazyk), neurologické symptomy (funikulární myelóza - demyelinizace zadních a postranních provazců míšních vyvolaná nedostatkem B12).",
        "Akutní posthemoragická: hypovolemetrický šok (hypotenze, tachykardie, studený pot, oligurie)."
      ],
      diagnostics: [
        "Biochemie: nízký ferritin (nejlepší marker deficitu železa u sideropenické anémie).",
        "Krevní obraz: MCV < 80 fl (sideropenická), MCV > 100 fl (megaloblastová).",
        "Průkaz protilátek proti parietálním buňkám nebo vnitřnímu faktoru (perniciózní anémie)."
      ]
    },
    quiz: [
      {
        question: "Který z následujících projevů je specifickým neurologickým důsledkem těžkého deficitu vitamínu B12 (megaloblastové anémie) z důvodu poruchy metabolické dráhy myelinu?",
        options: [
          "Myasthenia gravis",
          "Funikulární myelóza (demyelinizace zadních a postranních provazců míšních)",
          "Aseptická meningitida",
          "Parkinsonismus"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Myasthenia gravis je autoimunitní porucha Ach receptorů na nervosvalové ploténce.",
          "Správně! Vitamín B12 je kofaktor pro enzymy podílející se na syntéze myelinu (metylmalonyl-CoA mutáza). Jeho deficit vede k akumulaci kyseliny metylmalonové, která poškozuje myelin v míše, což se projeví paresteziemi, ztrátou hlubokého čití a spastickou parézou.",
          "Nesprávně. Meningitida je zánět plen, deficit B12 ji nevyvolává.",
          "Nesprávně. Parkinsonova choroba je degenerace dopaminergních drah v substantia nigra."
        ]
      }
    ]
  },

  "spec-1-45": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Anémie ze zvýšené spotřeby (destrukce) červených krvinek představují hemolytické anémie. Životnost erytrocytů je zkrácena pod 120 dní a dřeň nestačí ztráty kompenzovat.",
      etiology: [
        "Intrakorpuskulární (vrozené): hereditární sférocytóza (porucha spektrinu/ankyrenu cytoskeletu), srpkovitá anémie (abnormální řetězec HbS), deficit G6PD (enzymopatie).",
        "Extrakorpuskulární (získané): autoimunitní hemolytická anémie (AIHA - protilátky teplé IgG či studené IgM), mikroangiopatická (TTP, HUS - mechanické potrhání).",
        "Toxické vlivy: olovo, hadí jedy, těžké infekce (malárie)."
      ],
      pathogenesis: [
        "Intravaskulární hemolýza: erytrocyty praskají přímo v krevním oběhu (např. u komplementem mediované AIHA nebo mechanicky u TMA). Uvolňuje se volný hemoglobin, který se filtruje do moči (hemoglobinurie).",
        "Extravaskulární hemolýza: poškozené erytrocyty (sférocyty, srpky) jsou rozpoznány a fagocytovány makrofágy ve slezině a játrech. Uvolněný hem se mění na nekonjugovaný bilirubin.",
        "Kompenzační reakce: ledviny detekují hypoxii, uvolní erytropoetin a kostní dřeň masivně produkuje mladé formy (**retikulocytóza**)."
      ],
      clinicalManifestation: [
        "Klasická triáda: anémie (únava, bledost), **ikterus** (žluté zbarvení kůže a bělma ze zvýšeného nekonjugovaného bilirubinu) a **splenomegalie** (zvětšení sleziny z přetížení extravaskulární destrukcí).",
        "U srpkovité anémie: bolestivé vazookluzivní krize (srpkovité buňky ucpávají mikrocirkulaci a vyvolávají tkáňové infarkty).",
        "Tmavá moč u těžké hemoglobinurie."
      ],
      diagnostics: [
        "Krevní nátěr: sférocyty (u sférocytózy), schistocyty (u TMA), srpky (u srpkovité anémie).",
        "Laboratoř: vzestup LDH a nekonjugovaného bilirubinu, hluboký pokles haptoglobinu.",
        "Coombsův test (k průkazu autoimunitní etiologie AIHA)."
      ]
    },
    quiz: [
      {
        question: "Který z následujících laboratorních nálezů je typickým znakem kompenzační aktivity kostní dřeně u pacienta s hemolytickou anémií?",
        options: [
          "Kompletní vymizení retikulocytů",
          "Výrazná retikulocytóza (podíl mladých erytrocytů > 5-10 %)",
          "Pokles hladiny erytropoetinu na nulu",
          "Leukopenie s lymfocytózou"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Vymizení retikulocytů (retikulocytopenie) svědčí pro útlum dřeně (aplastická krize).",
          "Správně! Při zvýšeném rozpadu erytrocytů reaguje zdravá dřeň na stimulaci erytropoetinem zvýšenou krvetvorbou. Vyplavuje do oběhu nezralé erytrocyty – retikulocyty (které si zachovávají zbytky ribozomální RNA).",
          "Nesprávně. EPO je naopak extrémně zvýšené v reakci na hypoxii.",
          "Nesprávně. Bílá řada reaguje nezávisle, hemolýza postihuje červenou řadu."
        ]
      }
    ]
  },

  "spec-1-46": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Atelektáza je kolaps plicních alveolů, který vede k nevzdušnosti části nebo celé plíce. Způsobuje rozvoj plicního zkratu a hypoxémie.",
      etiology: [
        "Obstrukční (resorpční) atelektáza: ucpání lumen bronchu cizím tělesem, hlenovou zátkou (pooperační stavy), nebo nádorem.",
        "Kompresivní atelektáza: stlačení plicního parenchymu zvenčí (pleurální výpotek, pneumotorax, nádor pleury).",
        "Kontrakční (jizevnatá) atelektáza: lokální fibrotizace plíce brání jejímu rozepnutí.",
        "Kontaktní (mikroatelektáza): ztráta surfaktantu (např. u ARDS)."
      ],
      pathogenesis: [
        "Při obstrukci: vzduch za překážkou se vstřebá do krve, alveoly nemohou být dosycovány novým vzduchem a kolabují.",
        "Kolabovaný úsek plíce ztrácí ventilační schopnost, ale kapilární krev jím nadále protéká – vzniká **pravolevý plicní zkrat (shunt)**.",
        "Eulerův-Liljestrandův reflex se snaží krev odklonit, ale při větším rozsahu atelektázy se rozvíjí systémová hypoxémie."
      ],
      clinicalManifestation: [
        "Dušnost a tachypnoe, jejichž tíže závisí na rychlosti vzniku a rozsahu atelektázy.",
        "Dráždivý kašel spuštěný kolapsem dýchacích cest.",
        "Fyzikální nález: oslabené až vymizelé dýchání nad postiženou oblastí, zkrácený (temný) poklep."
      ],
      diagnostics: [
        "Rentgen hrudníku (průkaz homogenního zastínění s posunem mediastina a bránice směrem k postižené straně - zmenšení objemu).",
        "Bronchoskopie (umožňuje odhalit a případně odstranit mechanickou překážku – hlen, těleso).",
        "CT hrudníku k přesné lokalizaci kolapsu."
      ]
    },
    quiz: [
      {
        question: "Jak se liší rentgenový nález u obstrukční atelektázy od pleurálního výpotku (který plíci také stlačuje)?",
        options: [
          "U atelektázy se mediastinum posouvá na zdravou stranu",
          "U atelektázy dochází k tahu mediastina a průdušnice na postiženou stranu (ztráta objemu plíce), zatímco výpotek mediastinum přetlačuje na stranu zdravou",
          "Rentgenový nález je u obou stavů zcela identický",
          "Atelektáza vykazuje zvýšenou vzdušnost plíce"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Mediastinum se u atelektázy posouvá k patologii.",
          "Správně! Kolaps alveolů u atelektázy vede k podtlaku a zmenšení objemu postižené poloviny hrudníku. To přitahuje mediastinum a tracheu k atelektáze. Pleurální výpotek naopak funguje jako expanzivní proces a přetlačuje mediastinum na stranu zdravou.",
          "Nesprávně. Směr posunu mediastina je klíčovým rozlišovacím znakem na RTG.",
          "Nesprávně. Atelektáza vykazuje nevzdušnost (zastínění), nikoliv zvýšenou vzdušnost (která je typická pro PNO)."
        ]
      }
    ]
  },

  "spec-1-47": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "ARDS (Syndrom akutní respirační tísně) je závažná forma nekardiogenního plicního edému charakterizovaná difúzním alveolárním poškozením (DAD) a těžkou hypoxémií refrakterní k oxygenoterapii.",
      etiology: [
        "Přímé poškození plic: aspirace žaludečního obsahu, těžká pneumonie, tonutí, inhalace toxických plynů, plicní kontuze.",
        "Nepřímé poškození plic (systémové): sepse (nejčastější), těžké mimoplicní trauma s šokem, akutní pankreatitida, syndrom masivní transfúze."
      ],
      pathogenesis: [
        "Exsudativní fáze: aktivace a migrace neutrofilů do alveolů, uvolnění cytokinů a proteáz poškozuje alveolo-kapilární membránu.",
        "Únik tekutiny bohaté na bílkoviny do alveolů s polymerací fibrinu a tvorbou hyalinních blan bránících difúzi plynů.",
        "Inaktivace a deficit surfaktantu poškozením pneumocytů II. typu vede k plošnému kolapsu alveolů (atelektázám) a poklesu poddajnosti plic.",
        "Vznik pravolevého zkratu (krev protéká nevětranými atelektatickými oblastmi), což způsobuje těžkou refrakterní hypoxémii."
      ],
      clinicalManifestation: [
        "Rychle progredující dušnost (tachypnoe, zapojování pomocných svalů) rozvíjející se do 72 hodin od vyvolávajícího inzultu.",
        "Těžká hypoxémie (poměr PaO2/FiO2 <= 300 mmHg / 40 kPa) refrakterní na podávání kyslíku.",
        "Difúzní oboustranné infiltráty na RTG/CT hrudníku (vzhled 'mléčného skla') bez známek levostranného srdečního selhání."
      ],
      diagnostics: [
        "Kritéria ARDS (Berlínská definice): časový faktor, vyloučení kardiální příčiny edému, oboustranné infiltráty, stupeň hypoxémie podle PaO2/FiO2.",
        "Vyšetření krevních plynů k průkazu hypoxémie a laktátu k průkazu tkáňové ischémie.",
        "Echokardiografie k vyloučení městnání z levého srdce (normální EF a chlopně)."
      ]
    },
    quiz: [
      {
        question: "Co je hlavním patofyziologickým důsledkem poškození pneumocytů II. typu u syndromu ARDS?",
        options: [
          "Nadprodukce hlenu a obstrukce bronchů",
          "Deficit a inaktivace surfaktantu vedoucí k alveolárnímu kolapsu (atelektázám) a prudkému poklesu poddajnosti plic",
          "Zvýšení tlaku v levé síni nad 25 mmHg",
          "Ucpání plicních kapilár tromby ze žilního oběhu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hlen tvoří pohárkové buňky a bronchiální žlázky, ne pneumocyty II. typu.",
          "Správně! Pneumocyty II. typu secernují surfaktant. Jejich poškození a inaktivace surfaktantu plazmatickými bílkovinami v alveolech zvýší povrchové napětí, což vede k mikroatelektázám, kolapsu plíce a snížení její poddajnosti (compliance).",
          "Nesprávně. ARDS je nekardiogenní edém, tlak v levé síni (PCWP) je normální (do 18 mmHg).",
          "Nesprávně. Ucpání plicních kapilár tromby popisuje plicní embolii."
        ]
      }
    ]
  },

  "spec-1-48": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Akutní respirační selhání je stav, kdy plíce náhle nedokážou zajistit adekvátní výměnu plynů, což vede k hypoxémii (typ I) a/nebo hyperkapnii (typ II).",
      etiology: [
        "Typ I (hypoxemické): poruchy ventilačně-perfúzního poměru (např. CHOPN, astma, plicní edém), plicní zkraty (ARDS, atelektázy), difuzní bariéra.",
        "Typ II (hyperkapnické/ventilační): deprese dechového centra (předávkování opioidů), nervosvalové poruchy (myasthenia gravis, Guillain-Barré), únava dýchacích svalů, obstrukce dýchacích cest."
      ],
      pathogenesis: [
        "Typ I (oxygenační selhání): dochází k neschopnosti okysličit krev protékající plícemi, přičemž eliminace CO2 může být kompenzačně zvýšena hyperventilací.",
        "Typ II (ventilační selhání / hypoventilace): dochází k selhání respirační pumpy k odvětrání alveolů. Oxid uhličitý se hromadí v těle (hyperkapnie), což vede k respirační acidóze."
      ],
      clinicalManifestation: [
        "Dušnost, tachypnoe, zapojení pomocného svalstva, neklid, úzkost, zmatenost až poruchy vědomí (somnolence, koma u hyperkapnie).",
        "Cyanóza (modravé zbarvení kůže a sliznic při vzestupu redukovaného hemoglobinu nad 50 g/l).",
        "Respirační acidóza (pokles pH, vzestup paCO2) doprovázená hypoxémií (pokles paO2)."
      ],
      diagnostics: [
        "Vyšetření krevních plynů (Astrup) – klíčový diagnostický test stanovující paO2, paCO2 a pH.",
        "Typ I: paO2 < 8.0 kPa (60 mmHg) při normálním nebo nízkém paCO2.",
        "Typ II: paCO2 > 6.7 kPa (50 mmHg) a pH < 7.35."
      ]
    },
    quiz: [
      {
        question: "Která z následujících definic a kritérií charakterizuje ventilaci u II. typu (hyperkapnického) akutního respiračního selhání?",
        options: [
          "Selhání oxygenace s paO2 < 8 kPa při nízkém nebo normálním paCO2",
          "Alveolární hypoventilace a selhání respirační pumpy projevující se hromaděním CO2 s paCO2 > 6.7 kPa a acidózou",
          "Zvýšená plicní poddajnost bez ovlivnění plynů",
          "Pravolevý srdeční zkrat s normálním paCO2"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto popisuje typ I (hypoxemické) respirační selhání.",
          "Správně! Typ II (globální respirační selhání) je způsobeno neschopností odvětrat plíce (hypoventilace). To vede k retenci CO2 v krvi (hyperkapnii) a rozvoji respirační acidózy.",
          "Nesprávně. Poddajnost bývá často naopak snížena a plyny jsou zásadně změněny.",
          "Nesprávně. Pravolevý zkrat je typickou příčinou hypoxemického selhání (typ I)."
        ]
      }
    ]
  },

  "spec-1-49": {
    richContent: {
      clinicalPearl: "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.",

      definition: "Akutní ischemie a infarkt myokardu (AIM) představují kritické stavy způsobené náhlým přerušením krevního toku věnčitou tepnou, což vede k ischemické nekróze kardiomyocytů.",
      etiology: [
        "Aterotrombóza: ruptura nebo eroze aterosklerotického plátu s nasedající trombózou (90 % případů).",
        "Embolizace do koronárních tepen (např. při infekční endokarditidě).",
        "Spasmus koronární arterie (Prinzmetalova angina).",
        "Disekce koronární tepny (vzácně, např. poporodní)."
      ],
      pathogenesis: [
        "Zástava toku krve zastaví dodávku kyslíku. Do 60 sekund klesá kontraktilita a kardiomyocyty přecházejí na anaerobní metabolismus (deplece ATP, acidóza).",
        "Pokud ischemie trvá déle než 20-30 minut, dochází k ireverzibilnímu poškození a smrti buněk (nekróza) postupující od subendokardu k epikardu (tzv. wave-front fenomén).",
        "Během nekrózy se uvolňují intracelulární proteiny (troponiny) do oběhu a ischemická tkáň se stává nestabilní (riziko maligních arytmií VF)."
      ],
      clinicalManifestation: [
        "Těžká, svíravá, pálivá bolest za hrudní kostí (stenokardie) trvající > 20 minut, nereagující na nitroglycerin.",
        "Propagace bolesti do levého ramene, krku, čelisti nebo epigastria (může simulovat akutní břicho).",
        "Doprovodné příznaky: studený pot, dušnost, nauzea, zvracení, úzkost ze smrti (angor animi)."
      ],
      diagnostics: [
        "EKG (elevace ST segmentu tvaru myšího ouška u STEMI, deprese ST a negativní T vlny u NSTEMI).",
        "Biochemie: elevace kardiospecifických troponinů (hsTnI / hsTnT) v séru.",
        "Akutní koronarografie k lokalizaci a otevření postižené tepny."
      ]
    },
    quiz: [
      {
        question: "Jak dlouho mohou kardiomyocyty tolerovat těžkou ischemii, než dojde k zahájení ireverzibilního poškození a smrti buněk (nekrózy)?",
        options: [
          "Přibližně 20 až 30 minut",
          "Více než 12 hodin",
          "Pouze 10 sekund",
          "Přesně 5 sekund"
        ],
        correct: 0,
        explanations: [
          "Správně! Okno reverzibility ischemického poškození myokardu je poměrně krátké – cca 20-30 minut. Pokud je průtok obnoven (reperfúze) do této doby, buňky se zotaví. Poté začíná nekróza a k záchraně myokardu je nutné tepnu otevřít co nejdříve (čas je sval).",
          "Nesprávně. Po 12 hodinách je nekróza kompletní a myokard je nahrazen jizvou.",
          "Nesprávně. Po 10 sekundách dochází k poklesu kontraktility, ale poškození je stále plně reverzibilní.",
          "Nesprávně. 5 sekund je příliš krátká doba pro strukturální změny."
        ]
      }
    ]
  },

  "spec-1-50": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a diagnostická kritéria AKI</h3>
          <p><strong>Akutní poškození ledvin (AKI)</strong> je charakterizováno náhlým (v průběhu hodin až dnů) poklesem GFR, což vede k retenci dusíkatých katabolitů (kreatinin, močovina) v krvi a rozvratu homeostázy vnitřního prostředí. Klasifikuje se podle systému KDIGO na základě vzestupu sérového kreatininu a/nebo oligurie.</p>
        </section>
        <section>
          <h3>2. Klasifikace podle příčiny a patofyziologie</h3>
          <ol>
            <li><strong>Prerenální AKI (funkční) - 55-60 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Snížení renální perfuze bez strukturálního poškození ledvinného parenchymu. Ledviny se snaží kompenzovat pokles tlaku maximálním vstřebáváním sodíku a vody (moč má vysokou osmolaritu a nízkou koncentraci sodíku - U_Na < 20 mmol/l).</li>
                <li><strong>Etiologie:</strong> Dehydratace, krvácení, popáleniny (hypovolémie), kardiogenní šok, sepse.</li>
              </ul>
            </li>
            <li><strong>Renální / Intrinzické AKI - 35-40 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Strukturální poškození glomerulů, tubulů, cév nebo intersticia ledvin. Tubulární buňky ztrácejí schopnost reabsorbovat ionty, moč je izostenurická a sodík v moči stoupá (U_Na > 40 mmol/l).</li>
                <li><strong>Etiologie:</strong> Akutní tubulární nekróza (ATN), glomerulonefritidy, akutní intersticiální nefritida.</li>
              </ul>
            </li>
            <li><strong>Postrenální AKI (obstrukční) - &lt; 5 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Překážka v močových cestách zvyšuje hydrostatický tlak v pánvičce a Bowmanově pouzdru, což působí proti filtračnímu tlaku a zastavuje filtraci.</li>
                <li><strong>Etiologie:</strong> Urolitiáza (oboustranná), hypertrofie prostaty, retroperitoneální tumory.</li>
              </ul>
            </li>
          </ol>
        </section>
        <section>
          <h3>3. Hlavní klinické projevy a následky</h3>
          <ul>
            <li><strong>Uremický syndrom:</strong> Nauzea, zvracení, uremická perikarditida, uremická encefalopatie (poruchy vědomí, křeče).</li>
            <li><strong>Hyperhydratace:</strong> Otoky, ascites a život ohrožující plicní edém při neschopnosti vylučovat vodu.</li>
            <li><strong>Metabolická acidóza:</strong> Retence fixních kyselin (H+) a ztráty bikarbonátů vedou k poklesu pH krve.</li>
            <li><strong>Hyperkalémie:</strong> Závažná akumulace draslíku (K+ > 6.0 mmol/l) ohrožuje pacienta maligními arytmiemi. Na EKG nacházíme vysoké, hrotité T vlny a rozšíření QRS.</li>
          </ul>
        </section>
      
        <section class="clinical-pearl">
          <h3>Klinická perla</h3>
          <p>Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta.</p>
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
          "Nesprávně. Glukóza v moči svědčí pro diabetes nebo tubulární dysfunkci.",
          "Správně! U prerenálního AKI jsou tubuly funkční a reagují na hypoperfuzi maximální reabsorpcí sodíku, proto je jeho frakční exkrece (FeNa) nízká. U renálního poškození jsou tubuly poškozené a nedokážou sodík vstřebat.",
          "Nesprávně. Hemoglobinurie indikuje hemolýzu.",
          "Nesprávně. U obou typů AKI draslík v séru stoupá."
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
    </div>
  `;
}

function mergeSpecial1Details() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Speciální I.") {
      const rich = SPECIAL_1_DETAILS[q.id];
      if (rich) {
        if (rich.detailContent) {
          q.detailContent = rich.detailContent;
        } else if (rich.richContent) {
          const keywordsHTML = (q.keyTerms || []).map(k => `<span class="keyword-tag">${k}</span>`).join(" ");
          const etiolHTML = (rich.richContent.etiology || []).map(e => `<li>${e}</li>`).join("");
          const pathoHTML = (rich.richContent.pathogenesis || []).map(p => `<li>${p}</li>`).join("");
          const clinHTML = (rich.richContent.clinicalManifestation || []).map(c => `<li>${c}</li>`).join("");
          const diagHTML = (rich.richContent.diagnostics || []).map(d => `<li>${d}</li>`).join("");
          const pearlHTML = rich.richContent.clinicalPearl ? `<section class="clinical-pearl"><h3>Klinická perla</h3><p>${rich.richContent.clinicalPearl}</p></section>` : "";
          
          const diagramHTML = window.generatePathogenesisDiagram ? window.generatePathogenesisDiagram(rich.richContent.pathogenesis) : `
[Vyvolávající příčina / Inzult]
               │
               ▼
   [Buněčný a metabolický stres]
               │
               ▼
[Rozvoj klinických symptomů a komplikací]
          `;

          q.detailContent = `
            <div class="medical-detail">
              <section>
                <h3>1. Definice a úvod do patofyziologie</h3>
                <p><strong>${q.title}</strong>: ${rich.richContent.definition}</p>
              </section>
              
              <section>
                <h3>2. Etiologie a rizikové faktory</h3>
                <ul>
                  ${etiolHTML}
                </ul>
              </section>

              <section>
                <h3>3. Patofyziologické mechanismy (Patogeneze)</h3>
                <ol>
                  ${pathoHTML}
                </ol>
              </section>

              <section class="diagram-section">
                <h3>Patofyziologické schéma rozvoje stavu</h3>
                <pre class="ascii-diagram">${diagramHTML}</pre>
              </section>

              <section>
                <h3>4. Klinické projevy a patofyziologické komplikace</h3>
                <ul>
                  ${clinHTML}
                </ul>
              </section>

              <section>
                <h3>5. Diagnostické principy a vyšetřovací metody</h3>
                <ul>
                  ${diagHTML}
                </ul>
              </section>
              ${pearlHTML}
            </div>
          `;
        } else {
          q.detailContent = getExtendedSpecial1Content(q);
        }
        q.quiz = rich.quiz;
      }
    }
  });
}

// Spustíme sloučení
mergeSpecial1Details();
window.SPECIAL_1_DETAILS = SPECIAL_1_DETAILS;
