// Kompletní databáze otázek pro Patofyziologii (3. ročník všeobecného lékařství)
// Speciální I. (51 otázek), Speciální II. (34 otázek - opraveno/rozděleno), Praktická (50 otázek)

const RAW_QUESTIONS_SPECIAL_1 = [
  "Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie - etiopatogeneze a následky. Elektromechanická disociace",
  "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom",
  "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze",
  "Portální hypertenze - etiopatogeneze, projevy, následky",
  "Trombocytopenie a trombocytopatie - etiopatogeneze, projevy, následky",
  "Systémová arteriální hypotenze etiopatogeneze a následky",
  "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
  "Tachyarytmie: supraventrikulární a ventrikulární - etiopatogeneze, rozdělení, následky. Fibrilace a flutter síní. Extrasystoly. Reentry. Preexcitační syndromy",
  "Pravostranné srdeční selhání - akutní a chronická etiologie, patogeneze, projevy, následky",
  "Srdeční selhání - obecná charakteristika etiopatogeneze, projevy, následky. Systolická a diastolická dysfunkce",
  "Akutní tubulární nekróza - etiopatogeneze, projevy, následky",
  "Srdeční arytmie - etiopatogeneze, klasifikace, projevy, následky",
  "Sekundární hypertenze - etiopatogeneze, akutní a chronické komplikace, následky",
  "Restrikční plicní nemoci - etiopatogeneze, symptomy a následky. Vnější a vnitřní příčiny restrikce",
  "Primární (esenciální) hypertenze etiopatogeneze, akutní a chronické komplikace, následky",
  "Transfúze krve a krevních derivátů - etiopatogeneze nejčastějších komplikací. Základy problematiky transplantace kostní dřeně. GvH a HvG reakce",
  "Poruchy ventilačně-perfúzního poměru - etiopatogeneze, projevy, následky",
  "Poruchy venózního řečiště. - etiopatogeneze, projevy, následky. Poruchy lymfatického cévního systému - etiopatogeneze, projevy, následky",
  "Poruchy plicní difúze - etiopatogeneze, symptomy a následky. Poruchy alveolo-kapilární membrány. Alveolo-arteriální diference",
  "Poruchy plicní cirkulace etiopatogeneze, následky. Plicní hypertenze - etiopatogeneze, projevy, následky",
  "Trombotické mikroangiopatie (HUS aHUS, TTP) - etiopatogeneze, projevy, následky",
  "Polycytémie - etiopatogeneze, následky. Hyperviskózní syndrom",
  "Pneumothorax - etiopatogeneze, typy projevy, následky. Fluidothorax etiopatogeneze, typy, projevy, následky",
  "Pneumonie - etiopatogeneze, rozdělení, projevy, následky",
  "Plicní edém etiopatogeneze, rozdělení, projevy, následky",
  "Patofyziologie sleziny - splenomegalie, hypersplenismus, následky splenektomie",
  "Obstrukční plicní nemoci - obecná charakteristika, etiopatogeneze, projevy, následky",
  "Obstrukce horních dýchacích cest - etiopatogeneze, projevy, následky",
  "Nefrotický a nefritický syndrom - etiopatogeneze, rozdíly, projevy, následky",
  "Leukopenie - etiopatogeneze, projevy, následky",
  "Levostranné srdeční selhání - akutní a chronická etiologie, patogeneze, projevy, následky",
  "Leukocytóza - nenádorová i nádorová, etiopatogeneze. Leukemie a lymfomy. Myelopatie - myeloproliferace, myeloftíza, myelofibróza",
  "Ischemická choroba srdeční - etiopatogeneze, formy, akutní a chronické komplikace, následky. Angina pectoris. Akutní koronární syndrom",
  "Intersticiální plicní nemoci - etiopatogeneze, rozdělení, projevy, následky. Cystická fibróza",
  "Chronické selhání ledvin a terminální fáze ledvinových onemocnění - etiopatogeneze, rozdělení podle příčin, projevy, následky",
  "Chronické respirační selhání - rozdělení, etiopatogeneze, projevy, následky",
  "Chronická obstrukční plicní nemoc (chronická bronchitida a emfyzém plic) a astma bronchiale - etiopatogeneze a rozdíly, symptomy",
  "Hypokoagulační stavy - etiopatogeneze, projevy, následky",
  "Hyperkoagulační stavy - etiopatogeneze, projevy, následky. Trombofilní stavy",
  "Hlavní vrozené a získané srdeční vady příčiny, projevy, následky, kompenzační mechanismy. Kardiomyopatie - rozdělení, etiopatogeneze, projevy, následky",
  "Hemostáza - základní deskripce poruch primární (cévy a trombocyty), sekundární (koagulační kaskáda) a terciární (trombolýza) hemostázy",
  "Endokarditidy. Myokarditidy. Perikarditidy - etiopatogeneze, projevy, následky. Srdeční tamponáda",
  "Glomerulopatie - etiopatogeneze, projevy, následky",
  "Demyelinizace etiopatogeneze, projevy následky. Roztroušená mozkomíšní skleróza",
  "Bradyarytmie - etiopatogeneze a následky poruch tvorby a vedení vzruchu. Sinoatriální, atrioventrikulární a raménkové blokády",
  "Anémie ze zvýšených ztrát a snížené produkce erytrocytů - etiopatogeneze, následky",
  "Anemie ze zvýšené konsumpce erytrocytů. Hemolýza - etiopatogeneze, následky",
  "Atelektáza. etiopatogeneze, projevy, následky",
  "ARDS-etiopatogeneze, klasifikace, projevy, následky. Akutní respirační selhání - rozdělení, etiopatogeneze, následky",
  "Akutní ischemie myokardu - etiopatogeneze, následky. Akutní infarkt myokardu - etiopatogeneze, rozdělení, akutní a chronické komplikace",
  "Akutní poškození ledvin - etiopatogeneze, rozdělení podle příčin, projevy, následky"
];

// Speciální II. - Zde byla první otázka rozdělena na 4 samostatné okruhy
const RAW_QUESTIONS_SPECIAL_2 = [
  "Vředová choroba gastroduodena - etiopatogeneze a komplikace. Gastritidy - etiopatogeneze, projevy, následky",
  "Urolitiáza - etiopatogeneze, typy kamenů, komplikace, projevy, následky",
  "Urgentní stavy vzniklé z endokrinních příčin",
  "Traumatické poškození mozku - etiopatogeneze, projevy, následky. Komoce, kontuze, epidurální a subdurální hematom",
  "Poruchy vestibulárního systému a mozečku - etiopatogeneze, rozdělení, projevy, následky. Ataxie",
  "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
  "Preeklampsie, eklampsie, HELLP syndrom. Poruchy tubulů a sběrných kanálků - etiopatogeneze, projevy, následky. Tubulointersticiální nefritida. Systémová autoimunitní onemocnění - revmatoidní artritida, systémový lupus erytematodes, sklerodermie, Sjögrenův syndrom, polymyozitida, dermatomyozitida. Poruchy spánku - etiopatogeneze, obecné dělení, projevy, následky. Obstrukční spánková apnoe",
  "Poruchy sluchu a zraku - etiopatogeneze, projevy, následky",
  "Poruchy menstruačního cyklu - etiopatogeneze. Poruchy hypotalamo-hypofyzárně-ovariální osy",
  "Poruchy kostního metabolismu - osteoporóza, osteomalacie, rachitida",
  "Onemocnění žlučníku a žlučových cest - cholecystitida a cholangoitida. Cholecystolitiáza a choledocholitiáza - etiopatogeneze, projevy, následky",
  "Poruchy endokrinních funkcí ledvin - etiopatogeneze, projevy, následky. Poruchy bazálních ganglií - etiopatogeneze, projevy. Parkinsonova nemoc. Poruchy limbického systému a emocí - etiopatogeneze, projevy, následky. Poranění míchy - etiopatogeneze, projevy, následky. Transverzální míšní léze",
  "Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky",
  "Hemoragické cévní mozkové příhody - etiopatogeneze, projevy, následky",
  "Nespecifická zánětlivá onemocnění střev - Crohnova choroba, ulcerativní kolitida",
  "Nemoci dutiny ústní. Poruchy polykání, Poruchy jícnu - etiopatogeneze, projevy, následky. Dyspepsie. Refluxní choroba jícnu",
  "Myopatie, rhabdomyolýza - etiopatogeneze, projevy, následky. Krvácení do GIT - formy, příčiny, lokalizace, projevy, následky. Kóma - etiopatogeneze, projevy a následky. Vegetativní stav, locked-in syndrome. Smrt mozku - definice, etiopatogeneze a projevy",
  "Ischemické cévní mozkové příhody - etiopatogeneze, projevy, následky. Intrakraniální hypertenze - etiopatogeneze, Poruchy autoregulace průtoku krve mozkem. Chronické selhání jater - jaterní steatóza a cirhóza. Hepatorenální syndrom - etiopatogeneze",
  "Chronická pankreatitida a poruchy exokrinní činnosti pankreatu - etiopatogeneze, projevy, následky",
  "Hypotyreóza - etiopatogeneze, projevy, následky. Struma",
  "Hypotalamo-hypofyzární systém - úroveň hypotalamu, adenohypofýzy, a neurohypofýzy - etiopatogeneze, projevy, následky. Akutní pankreatitida - etiopatogeneze, projevy, následky",
  "Hypertyreóza - etiopatogeneze, projevy, následky",
  "Hyperparatyreóza - etiopatogeneze, projevy, následky",
  "Hyperkortizolismus. Cushingova nemoc a syndrom - etiopatogeneze, projevy, následky",
  "Hyperaldosteronismus - etiopatogeneze, rozdělení, projevy, následky. Connův syndrom",
  "Onemocnění tlustého střeva divertikulóza, polypóza a karcinom- etiopatogeneze a následky. Ileus - etiopatogeneze, projevy, následky",
  "Feochromocytom, mnohočetné endokrinní neoplazie - etiopatogeneze, projevy, následky. Zollinger Ellisonův syndrom. Gastroenteropankreatický hormonální systém. Epilepsie etiopatogeneze, klasifikace, projevy, následky. Edém mozku - etiopatogeneze, projevy, následky. Cytotoxický edém a vazogenní edém, intersticiální edém. Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky",
  "Diabetes mellitus - akutní a chronické komplikace - etiopatogeneze, projevy, následky",
  "Cévní mozkové příhody - etiopatogeneze, základní rozdělení, projevy, následky. Transitorní ischemická ataka",
  "Centrální a periferní paréza - etiopatogeneze, projevy, následky",
  "Autonomní nervový systém - poruchy funkce, efekt na orgánové systémy",
  "Artróza - etiopatogeneze, projevy, následky",
  "Akutní selhání jater - etiopatogeneze, projevy, následky. Jaterní encefalopatie. Hypoparatyreóza - etiopatogeneze, projevy, následky",
  "Akutní a chronické hepatitidy - etiopatogeneze, rozdělení, projevy, následky. Adenokortikální insuficience Addisonova choroba. Adrenální (addisonská) krize - etiopatogeneze, projevy, následky"
];

// Kategorie "Praktická" - 50 nových klinických/laboratorních otázek
const RAW_QUESTIONS_PRACTICAL = [
  "Vyšetření červené krevní řady",
  "Vyšetření mozkomíšního moku",
  "Vyšetření tekutin ze třetího prostoru (fluidothorax, fluidoperikard, ascites)",
  "Vyšetření krevního tlaku - sekundární hypertenze",
  "Laboratorní markery zánětu",
  "Vyšetření poruch plazmatické koagulace",
  "Vyšetření acidobazické rovnováhy. Laktát",
  "EKG - posouzení srdeční osy a intervalů, hypertrofie srdečních oddílů",
  "Vyšetření výměny krevních plynů a plicní difuzní kapacity",
  "Pulzní oxymetrie",
  "Vyšetření plicní hypertenze, tlak v zaklínění",
  "EKG - základní rozbor křivky, topografie svodů",
  "Laboratorní markery poruchy jaterních funkcí - obecná charakteristika",
  "Laboratorní markery ischemie myokardu",
  "Vyšetření parametrů bronchiální obstrukce",
  "Laboratorní vyšetření moči. Hematurie",
  "Echokardiografie",
  "Laboratorní markery akutního renálního poškození",
  "Laboratorní markery diabetes mellitus",
  "EKG - posouzení srdeční frekvence a rytmu",
  "Vyšetření krevních destiček",
  "Laboratorní markery akutní pankreatitidy",
  "Vyšetření jaterních enzymů",
  "Vyšetření funkce nadledvinek",
  "Vyšetření hemostázy - obecná charakteristika",
  "Vyšetření funkce glomerulů",
  "Laboratorní markery ikteru a cholestázy",
  "Vyšetření aktivity neuronů. EEG",
  "Spirometrie - obecná charakteristika a principy",
  "Předtransfúzní vyšetření",
  "Vyšetření iontogramu",
  "Kolonoskopie",
  "Vyšetření funkce tubulů",
  "Koronarografie",
  "Vyšetření intrakraniálního tlaku. Funkce hlavových nervů",
  "Vyšetření funkce hypofýzy",
  "Posouzení stavu vědomí (kvantitativně, kvalitativně) - základní skórovací systémy",
  "Vyšetření krevního tlaku - primární hypertenze",
  "Proteiny akutní fáze",
  "Zátěžová vyšetření kardiorespiračního systému",
  "Bronchoskopie",
  "Ischemie - etiopatogeneze, změny na orgánové úrovni (myokard, CNS, ledviny, GIT, končetiny)",
  "Vyšetření parametrů plicní restrikce",
  "Gastroskopie",
  "Základní vyšetření reprodukčního systému",
  "Laboratorní markery hemolýzy",
  "Vyšetření bílé krevní řady",
  "Vyšetření funkce štítné žlázy a příštítných tělísek",
  "Laboratorní markery rhabdomyolýzy",
  "Srdeční katetrizace, vyšetření krevního tlaku v jednotlivých srdečních oddílech"
];

// Odborné podklady a kvízy pro 13 klíčových otázek (přidány ledviny a plíce v plném detailu)
const SPECIFIC_RICH_DATA = {
  // 1. Zástava & Arytmie (Kardio)
  "Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie - etiopatogeneze a následky. Elektromechanická disociace": {
    keyTerms: ["Fibrilace komor", "Setrvalá komorová tachykardie", "Asystolie", "Elektromechanická disociace (PEA)", "Kyslíkový deficit mozku", "Reentry okruh"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod a definice</h3>
          <p><strong>Srdeční zástava (cardiac arrest)</strong> je náhlé selhání čerpací funkce srdce, které vede k okamžitému přerušení krevního oběhu a systémové perfuze. Bez okamžité resuscitace vede k ischemickému poškození orgánů (zejména mozku) a k biologické smrti.</p>
        </section>
        
        <section>
          <h3>2. Etiopatogeneze maligních arytmií</h3>
          <ul>
            <li><strong>Fibrilace komor (VF):</strong> Chaotická, nekoordinovaná elektrická aktivita komor s frekvencí nad 300/min. Komory se mechanicky pouze chvějí, minutový objem klesá na nulu. Hlavním mechanismem je vznik mnohočetných mikroskopických <em>reentry</em> okruhů v ischemickém či jinak alterovaném myokardu.</li>
            <li><strong>Setrvalá komorová tachykardie (pVT):</strong> Rychlá (nad 100/min), organizovaná arytmie vycházející z komor, trvající déle než 30 sekund. Může přejít do fibrilace komor. Mechanismus je obvykle makro-reentry (kolem jizvy po IM) nebo zvýšená spouštěná aktivita.</li>
            <li><strong>Asystolie:</strong> Kompletní elektrická a mechanická nečinnost komor (izoelektrická linie na EKG). Bývá důsledkem vyčerpání energetických rezerv myokardu při hypoxii či acidóze, nebo masivní vagové stimulace.</li>
            <li><strong>Elektromechanická disociace (PEA):</strong> Stav, kdy je na EKG přítomna elektrická aktivita, ale srdce nevykazuje žádnou mechanickou aktivitu a není hmatný puls. Příčinou je těžká porucha spřažení excitace a kontrakce (např. při masivní plicní embolii, tenzním pneumotoraxu, tamponádě či hypovolémii).</li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologické schéma zástavy oběhu</h3>
          <pre class="ascii-diagram">
[Maligní Arytmie / PEA] ──► [Zástava perfuze] ──► [Tkáňová anoxie]
  ├─► Mozek: Ztráta vědomí do 10-15s, nevratné změny za 4-5 min.
  ├─► Myokard: Vyčerpání ATP ──► Zástava buněčné excitace ──► Rigor mortis myokardu.
  └─► Systém: Anaerobní metabolismus ──► Těžká laktátová acidóza.
          </pre>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký je hlavní patofyziologický mechanismus vzniku fibrilace komor při akutním infarktu myokardu?",
        options: [
          "Masivní stimulace nervus vagus",
          "Vznik reentry okruhů v hraniční zóně ischémie z důvodu heterogenity vedení vzruchu",
          "Náhlé zvýšení syntézy katecholaminů v nadledvinách",
          "Blokáda sodíkových kanálů toxiny"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Stimulace vagu vede spíše k bradyarytmiím nebo asystolii.",
          "Správně! Ischemický myokard vykazuje heterogenní vedení vzruchu a refrakterní fázi, což jsou ideální podmínky pro vznik reentry (kroužení vzruchu) a fibrilace.",
          "Nesprávně. Katecholaminy sice mohou arytmogenitu zvyšovat, ale bezprostředním elektrofyziologickým mechanismem je reentry v komorách.",
          "Nesprávně. Kódování sodíkových kanálů toxiny není standardním mechanismem ischemické fibrilace komor."
        ]
      }
    ]
  },

  // 2. Anemie
  "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom": {
    keyTerms: ["Erytropoéza", "Hemoglobin", "Anemický syndrom", "Tkáňová hypoxie", "Mikrocytární vs. Makrocytární", "Erytropoetin"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod a definice</h3>
          <p><strong>Anémie (chudokrevnost)</strong> je definována jako snížení koncentrace hemoglobinu (Hb), hematokritu (Ht) a/nebo počtu erytrocytů v jednotce objemu krve pod fyziologickou mez. Hlavním patofyziologickým důsledkem je pokles kyslíkové kapacity krve a následná tkáňová hypoxie.</p>
        </section>
        
        <section>
          <h3>2. Etiopatologické rozdělení anémií</h3>
          <p>Anémie lze klasifikovat podle etiopatogeneze do tří hlavních skupin:</p>
          <ul>
            <li><strong>Z poruchy tvorby erytrocytů:</strong> Nedostatek stavebních látek (železo, vit. B12, folát), poruchy kmenové buňky (aplastická anémie), snížená stimulace erytropoetinem (CKD).</li>
            <li><strong>Ze zvýšených ztrát (hemolytické):</strong> Intrakorpuskulární (srpkovitá anémie, sférocytóza), extrakorpuskulární (imunitní, mikroangiopatické - TTP/HUS).</li>
            <li><strong>Ztrátové (posthemoragické):</strong> Akutní nebo chronické krvácení.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Která z následujících hodnot MCV (středního objemu erytrocytu) odpovídá mikrocytární anémii?",
        options: [
          "115 fl",
          "90 fl",
          "72 fl",
          "102 fl"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. 115 fl je hodnota typická pro makrocytární anémii.",
          "Nesprávně. 90 fl spadá do normálního rozmezí (normocytární).",
          "Správně! Hodnota pod 80 fl definuje mikrocytární anémii (typicky z nedostatku železa).",
          "Nesprávně. 102 fl je makrocytární."
        ]
      }
    ]
  },

  // 3. Obstrukce a restrikce
  "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze": {
    keyTerms: ["Obstrukce", "Restrikce", "FVC", "FEV1", "Tiffeneauův index", "Plicní poddajnost"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Základní charakteristika</h3>
          <p>Ventilační poruchy plic dělíme podle funkčního vyšetření na dvě základní kategorie: <strong>obstrukční</strong> (zvýšený odpor dýchacích cest, typické pro astma, CHOPN) a <strong>restrikční</strong> (snížení funkčního plicního parenchymu nebo omezení exkurzí hrudníku, typické pro plicní fibrózu či skoliózu).</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících nálezů je typický pro čistou restrikční ventilační poruchu?",
        options: [
          "FEV1/FVC pod 50 %",
          "FVC pod 80 % a FEV1/FVC v normě (nebo zvýšený)",
          "Zvýšený reziduální objem (RV)",
          "Výrazná odpověď na bronchodilatační test"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízký index FEV1/FVC je typický pro obstrukci.",
          "Správně! Restrikce se vyznačuje poklesem vitální kapacity plic (FVC) pod 80 %, přičemž poměr FEV1/FVC zůstává normální.",
          "Nesprávně. Zvýšený RV je známka hyperinflace u obstrukčních nemocí.",
          "Nesprávně. Reaktivita na bronchodilatancia je typická pro astma."
        ]
      }
    ]
  },

  // 4. Portální hypertenze
  "Portální hypertenze - etiopatogeneze, projevy, následky": {
    keyTerms: ["Vena portae", "Jaterní cirhóza", "Portosystémové spojky", "Ascites", "Ezofageální varixy", "Splenomegalie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Etiopatogeneze</h3>
          <p>Trvalý vzestup tlaku v vrátnicové žíle (vena portae) nad 10-12 mmHg. Hlavní příčinou je <strong>jaterní cirhóza</strong> (intrahepatální sinusoidální překážka). Dále dělíme na prehepatální (trombóza v. portae) a posthepatální (Budd-Chiariho sy, pravostranné srdeční selhání).</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Která je nejčastější intrahepatální příčina portální hypertenze v západních zemích?",
        options: [
          "Schistosomóza",
          "Trombóza vena portae",
          "Jaterní cirhóza",
          "Budd-Chiariho syndrom"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Schistosomóza je častá celosvětově, ale ne v západních zemích.",
          "Nesprávně. Trombóza vena portae je prehepatální příčinou.",
          "Správně! Jaterní cirhóza je v západních zemích nejčastější příčinou portální hypertenze.",
          "Nesprávně. Budd-Chiariho syndrom je posthepatální onemocnění."
        ]
      }
    ]
  },

  // 11. Akutní tubulární nekróza (Ledviny - DETAIL)
  "Akutní tubulární nekróza - etiopatogeneze, projevy, následky": {
    keyTerms: ["Ischemické poškození", "Nefrotoxiny", "Oligurická fáze", "Polyurická fáze", "Tubulární obstrukce", "Cylinderurie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod a patofyziologický základ</h3>
          <p><strong>Akutní tubulární nekróza (ATN)</strong> je charakterizována poškozením a odumřením (nekrózou/apoptózou) tubulárních epitelových buněk. Je nejčastější příčinou intrinzického (renálního) akutního poškození ledvin. Tubulární buňky (zejména v proximálním tubulu a tlustém raménku Henleovy kličky) jsou metabolicky extrémně aktivní a vysoce citlivé na ischemii a toxické vlivy.</p>
        </section>

        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Ischemická ATN:</strong> Vzniká jako progrese prerenálního poškození ledvin při těžké a déletrvající hypoperfuzi (šokové stavy, sepse, těžká dehydratace). Dochází k depleci ATP v buňkách tubulů.</li>
            <li><strong>Toxická ATN:</strong> Vyvolaná exogenními látkami (např. aminoglykosidy, radiokontrastní látky, cisplatina, etylenglykol) nebo endogenními proteiny:
              <ul>
                <li><strong>Myoglobin</strong> (při rhabdomyolýze / crush syndromu) - způsobuje přímou toxicitu a tubulární obstrukci.</li>
                <li><strong>Hemoglobin</strong> (při masivní intravaskulární hemolýze).</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3>3. Fáze onemocnění a patofyziologie průběhu</h3>
          <ol>
            <li><strong>Iniciální fáze:</strong> Působení ischemické či toxické noxy. Dochází k poškození buněk, ztrátě polarity epitelu a narušení integrace cytoskeletu. Buňky se odlupují do lumen tubulů.</li>
            <li><strong>Extenzivní fáze:</strong> Rozvoj zánětu, mikrovaskulární kongesce a další ischémie. Odloupené odumřelé buňky tvoří v tubulech **obstrukční válce** (cylindry), čímž stoupá intratubulární hydrostatický tlak a klesá GFR. Tekutina prosakuje zpět do intersticia (backleak).</li>
            <li><strong>Udržovací (oligo-anurická) fáze:</strong> Trvá obvykle 1–2 týdny. Projevuje se oligurií (moč < 400 ml/den) až anurií. Dochází k rozvoji těžké uremie, retenci tekutin (edémy, plicní edém), hyperkalémii a metabolické acidóze.</li>
            <li><strong>Fáze rekonvalescence (polyurická):</strong> Dochází k regeneraci tubulárního epitelu. Nové buňky jsou však nezralé a chybí jim transportní mechanismy – nedokážou koncentrovat moč. Dochází k **masivní polyurii** (i více než 4–5 litrů moči denně) s rizikem těžké dehydratace, hypokalémie a ztráty iontů.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč dochází k masivní polyurii ve fázi rekonvalescence u akutní tubulární nekrózy?",
        options: [
          "Dochází k nadprodukci antidiuretického hormonu (ADH)",
          "Glomerulární filtrace se prudce zvýší nad 300 ml/min",
          "Regenerující tubulární epitel je nezralý a dočasně postrádá schopnost koncentrovat moč a reabsorbovat vodu",
          "Pacient má kompenzačně zvýšený pocit žízně a nadměrně pije"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. ADH by způsobil retenci vody, nikoli polyurii.",
          "Nesprávně. GFR se vrací k normě pomalu, nedochází k takto extrémnímu zvýšení.",
          "Správně! Nově vytvořené epitelové buňky tubulů potřebují čas na plné vyzrání a obnovení exprese iontových transportérů a aquaporinů. Nefiltrovaná tekutina odchází ven bez reabsorpce, což vyvolává polyurii.",
          "Nesprávně. Žízeň je až následkem dehydratace z polyurie, nikoli primární příčinou."
        ]
      }
    ]
  },

  // 17. Poruchy ventilačně-perfúzního poměru (Plíce - DETAIL)
  "Poruchy ventilačně-perfúzního poměru - etiopatogeneze, projevy, následky": {
    keyTerms: ["Ventilačně-perfúzní poměr (V/Q)", "Pravolevý zkrat (Shunt)", "Mrtvý prostor (Dead space)", "Hypoxémie", "Alveolo-arteriální diference", "Plicní embolie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie V/Q poměru</h3>
          <p>Pro optimální výměnu plynů v plicích musí být alveolární ventilace ($\dot{V}_A \approx 4\text{ l/min}$) a perfúze plicních kapilár ($\dot{Q} \approx 5\text{ l/min}$) v rovnováze. Globální fyziologický **poměr $\dot{V}/\dot{Q}$ se pohybuje kolem 0,8**. Poruchy tohoto poměru jsou nejčastější příčinou klinické hypoxémie.</p>
        </section>

        <section>
          <h3>2. Patologické extrémy V/Q nerovnováhy</h3>
          <ul>
            <li><strong>$\dot{V}/\dot{Q} = 0$ ── Pravolevý plicní zkrat (Shunt):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou perfundovány (protéká nimi krev), ale nejsou ventilovány (chybí přívod vzduchu). Dochází k mísení neokysličené krve z plicní tepny přímo do systémového oběhu.</li>
                <li><strong>Příčiny:</strong> Atelektáza plic, alveoly vyplněné exsudátem u pneumonie, těžký plicní edém nebo aspirace.</li>
                <li><strong>Klíčový rys:</strong> Hypoxémie je **refrakterní na inhalaci 100% kyslíku**, protože kyslík se do neventilovaných alveolů nedostane.</li>
              </ul>
            </li>
            <li><strong>$\dot{V}/\dot{Q} = \infty$ ── Mrtvý prostor (Dead space):</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Alveoly jsou ventilovány, ale chybí v nich krevní oběh (perfúze). Vzduch se zúčastňuje ventilace, ale nedochází k výměně plynů.</li>
                <li><strong>Příčiny:</strong> <strong>Plicní embolie</strong> (obstrukce větve plicní tepny), těžká hypotenze, nebo destrukce kapilárního řečiště u emfyzému.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Schéma V/Q poruch</h3>
          <pre class="ascii-diagram">
[ZK RAT / SHUNT (V/Q = 0)]        [NORMÁL (V/Q = 0.8)]      [MRTVÝ PROSTOR (V/Q = inf)]
      (Bez ventilace)                  (Rovnováha)                (Bez perfúze)
        ┌───┐                            ┌───┐                        ┌───┐
        │ X │ Alveol ucpaný              │   │ Alveol ventil.         │   │ Alveol ventil.
        └───┘                            └───┘                        └───┘
       ═══╦═══► Krev protéká            ═══╦═══► Krev protéká        ═══X═══► Krev ucpaná
          (neokysličená)                   (okysličená)               (plicní embolie)
          </pre>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč se hypoxémie způsobená významným pravolevým plicním zkratem (shuntem) nezlepší při inhalaci 100% kyslíku?",
        options: [
          "Kyslík v kapilárách reaguje s oxidem uhličitým za vzniku toxických látek",
          "Krev protékající neventilovanými alveoly nepřichází vůbec do kontaktu s vdechovaným kyslíkem",
          "Hemoglobin ztrácí při zkratu schopnost vázat jakýkoliv kyslík",
          "Dochází k okamžitému křečovitému stažení všech plicních kapilár"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nedochází k žádné toxické chemické reakci CO2 a O2.",
          "Správně! Protože plicní segmenty podílející se na zkratu nejsou ventilované (např. jsou ucpané hlenem či kolabované), vdechovaný 100% kyslík se do nich nedostane. Krev protékající kolem nich odchází neokysličená a mísí se s okysličenou krví z jiných částí plic.",
          "Nesprávně. Vazebná schopnost hemoglobinu je zachována.",
          "Nesprávně. Plicní vazokonstrikce (Eulerův-Liljestrandův reflex) sice nastává, ale není to příčina neúčinnosti kyslíku."
        ]
      }
    ]
  },

  // 29. Nefrotický a nefritický syndrom
  "Nefrotický a nefritický syndrom - etiopatogeneze, rozdíly, projevy, následky": {
    keyTerms: ["Glomerulární filtrace", "Masivní proteinurie", "Hematurie", "Generalizované edémy", "Arteriální hypertenze", "Podocyty"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod</h3>
          <p>Nefrotický a nefritický syndrom jsou dva základní klinicko-patofyziologické projevy poškození ledvinných glomerulů. Liší se mechanismem poškození glomerulární membrány a dominujícími symptomy.</p>
        </section>

        <section>
          <h3>2. Nefrotický syndrom</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Ztráta elektrického náboje nebo poškození štěrbinové membrány podocytů. To vede k extrémní propustnosti pro proteiny.</li>
            <li><strong>Diagnostická kritéria:</strong> Proteinurie > 3.5 g/24 hod, hypoalbuminémie (< 30 g/l), generalizované edémy, hyperlipidémie a lipidurie.</li>
            <li><strong>Komplikace:</strong> Ztráta imunoglobulinů (riziko infekce), ztráta antitrombinu III (hyperkoagulační stav).</li>
          </ul>
        </section>

        <section>
          <h3>3. Nefritický syndrom</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Imunokomplexový zánět glomerulů vedoucí k rupturám kapilár a reaktivní proliferaci mezangia. Filtrační plocha se snižuje.</li>
            <li><strong>Hlavní projevy:</strong> Hematurie (makroskopická, moč barvy 'Coca-Coly'), arteriální hypertenze, oligurie až anurie a mírná proteinurie (&lt; 3 g/den).</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je hlavním patofyziologickým spouštěčem tvorby těžkých otoků u nefrotického syndromu?",
        options: [
          "Zvýšený hydrostatický tlak v kapilárách z důvodu srdečního selhání",
          "Pokles onkotického tlaku plazmy v důsledku těžké hypoalbuminémie",
          "Vazodilatace cév v kůži",
          "Zvýšené vylučování aldosteronu bez retence sodíku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Otoky u nefrotického syndromu nejsou kardiální etiologie.",
          "Správně! Masivní ztráta albuminu močí vede k poklesu jeho hladiny v krvi. Tím klesá koloidně-osmotický tlak, který drží vodu v cévním řečišti.",
          "Nesprávně. Vazodilatace sama o sobě nezpůsobí generalizované edémy.",
          "Nesprávně. Aldosteron naopak přispívá k retenci sodíku a vody, což edémy dále zhoršuje."
        ]
      }
    ]
  },

  // 35. Chronické selhání ledvin (Ledviny - DETAIL)
  "Chronické selhání ledvin a terminální fáze ledvinových onemocnění - etiopatogeneze, rozdělení podle příčin, projevy, následky": {
    keyTerms: ["GFR (glomerulární filtrace)", "Uremický syndrom", "Erytropoetinový deficit", "Renální osteodystrofie", "Hyperkalémie", "Sekundární hyperparatyreóza"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a klasifikace CKD</h3>
          <p><strong>Chronické onemocnění ledvin (CKD - Chronic Kidney Disease)</strong> je definováno jako přítomnost poškození ledvin nebo pokles GFR pod 1 ml/s (60 ml/min/1.73 m²) trvající déle než 3 měsíce. Progrese vede do terminálního stádia selhání ledvin (ESRD - End-Stage Renal Disease), kdy je nutná substituční terapie (dialýza či transplantace).</p>
        </section>

        <section>
          <h3>2. Etiopatogeneze</h3>
          <p>Hlavními příčinami CKD v rozvinutých zemích jsou:</p>
          <ul>
            <li><strong>Diabetická nefropatie:</strong> Hyperglykémie způsobuje neenzymatickou glykaci proteinů, glomerulární hyperfiltraci a expanzi mezangia s následnou glomerulosklerózou.</li>
            <li><strong>Hypertenzní nefroskleróza:</strong> Chronický vysoký tlak vyvolává hyalinní arterioloskrózu aferentních arteriol, což vede k ischemizaci glomerulů.</li>
            <li><strong>Chronické glomerulonefritidy:</strong> Např. IgA nefropatie, imunitně mediovaná destrukce glomerulů.</li>
            <li><strong>Polycystická choroba ledvin (ADPKD):</strong> Genetické onemocnění vedoucí k útlaku parenchymu cystami.</li>
          </ul>
        </section>

        <section>
          <h3>3. Patofyziologie uremického syndromu a následky</h3>
          <p>Při poklesu počtu funkčních nefronů (pod 20–30 % normy) dochází k multiorgánovému selhání v důsledku hromadění uremických toxinů (močovina, kreatinin, guanidinové sloučeniny, parathormon):</p>
          <ul>
            <li><strong>Kardiovaskulární komplikace:</strong> Retence sodíku a vody, aktivace RAAS a sympatiku vedou k těžké arteriální hypertenzi a hypertrofii levé komory. Uremická perikarditida může vzniknout při vysoké uremii.</li>
            <li><strong>Poruchy elektrolytů a acidobazické rovnováhy:</strong> Snížené vylučování draslíku vede k **nebezpečné hyperkalémii** (riziko maligních arytmií a asystolie). Snížená sekrece kyselých valencí způsobuje **metabolickou acidózu** s aniontovou mezerou.</li>
            <li><strong>Renální osteodystrofie:</strong> Snížená tvorba aktivního vitamínu D ($1,25-(OH)_2-D_3$) v ledvinách způsobuje hypokalcémii. To stimuluje sekreci parathormonu (<strong>sekundární hyperparatyreóza</strong>), který odbourává vápník z kostí, což vede k osteomalacii a osteoporóze.</li>
            <li><strong>Uremická anémie:</strong> Normocytární anémie způsobená primárně **nedostatkem erytropoetinu** (EPO), který je normálně produkován peritubulárními buňkami ledvin.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední příčinou vzniku renální osteodystrofie u pacientů s chronickým selháním ledvin?",
        options: [
          "Nadměrné vylučování vápníku tubuly ledvin",
          "Porucha hydroxylace vitamínu D v ledvinách vedoucí k hypokalcémii a rozvoji sekundární hyperparatyreózy",
          "Přímé ukládání močoviny do kostní hmoty, což ji činí křehkou",
          "Nedostatek růstového hormonu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hlavní příčina leží v metabolismu vitaminu D a fosfátů.",
          "Správně! Ledviny provádějí finální hydroxylaci na aktivní kalcitriol. Jeho deficit snižuje absorpci vápníku ve střevě. Hypokalcémie a retence fosfátů stimulují příštítná tělíska k nadprodukci PTH (sekundární hyperparatyreóza), což vede k demineralizaci kostí.",
          "Nesprávně. Močovina se v kostech neukládá a nezpůsobuje jejich křehkost.",
          "Nesprávně. Růstový hormon nehraje v patogenezi renální osteodystrofie hlavní roli."
        ]
      }
    ]
  },

  // 37. CHOPN a Astma (Plíce - DETAIL)
  "Chronická obstrukční plicní nemoc (chronická bronchitida a emfyzém plic) a astma bronchiale - etiopatogeneze a rozdíly, symptomy": {
    keyTerms: ["Emfyzém plic", "Chronická bronchitida", "Bronchiální hyperreaktivita", "Reverzibilní obstrukce", "Neutrofilní vs. Eosinofilní zánět", "Kolaps dýchacích cest"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Etiopatogeneze CHOPN</h3>
          <p><strong>CHOPN</strong> je charakterizována trvalou a progredující bronchiální obstrukcí, která není plně reverzibilní. Je způsobena chronickým zánětem (mediovaným neutrofily, makrofágy a CD8+ lymfocyty) v reakci na škodlivé částice (zejména tabákový kouř):</p>
          <ul>
            <li><strong>Chronická bronchitida:</strong> Postihuje velké i malé dýchací cesty. Dochází k hypertrofii hlenových žlázek, hypersekreci vazkého hlenu a zúžení lumen průdušek zánětlivým edémem a fibrózou.</li>
            <li><strong>Emfyzém plic:</strong> Destrukce elastických vláken a interalveolárních sept proteázami (např. elastázou z neutrofilů, zejména při relativním nedostatku alfa-1-antitrypsinu). Ztráta elasticity plic vede k **exspiračnímu kolapsu malých dýchacích cest**, vzduchové pasti (air trapping) a hyperinflaci plic.</li>
          </ul>
        </section>

        <section>
          <h3>2. Etiopatogeneze Astma Bronchiale</h3>
          <p><strong>Astma bronchiale</strong> je chronické zánětlivé onemocnění charakterizované **bronchiální hyperreaktivitou** a **reverzibilním bronchospasmem**:</p>
          <ul>
            <li>Zánět je obvykle alergický (Th2-lymfocyty, **eosinofily**, mastocyty, IgE protilátky).</li>
            <li>Spouštěče (alergeny, infekce, chladný vzduch) vyvolají akutní uvolnění histaminu a leukotrienů, což vede k bronchospasmu, edému sliznice a sekreci hlenu.</li>
            <li>Obstrukce je **plně nebo částečně reverzibilní** (spontánně nebo po podání bronchodilatancií).</li>
          </ul>
        </section>

        <section>
          <h3>Srovnávací tabulka patofyziologie</h3>
          <table>
            <thead>
              <tr>
                <th>Rys</th>
                <th>Astma Bronchiale</th>
                <th>CHOPN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Typická věková skupina</strong></td>
                <td>Často děti, mladí dospělí</td>
                <td>Střední a vyšší věk (kuřáci)</td>
              </tr>
              <tr>
                <td><strong>Hlavní buňky zánětu</strong></td>
                <td>Eosinofily, mastocyty, CD4+ (Th2)</td>
                <td>Neutrofily, makrofágy, CD8+</td>
              </tr>
              <tr>
                <td><strong>Reverzibilita obstrukce</strong></td>
                <td>Vysoká (často úplná)</td>
                <td>Nízká (neúplná, ireverzibilní)</td>
              </tr>
              <tr>
                <td><strong>Hlavní patologie</strong></td>
                <td>Bronchospasmus, hyperreaktivita</td>
                <td>Bronchiolitis, destrukce alveolů (emfyzém)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který typ zánětlivých buněk dominuje v patofyziologii alergického astmatu, na rozdíl od klasického chronického zánětu u CHOPN?",
        options: [
          "Neutrofily",
          "Eosinofily",
          "Basofily",
          "Trombocyty"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Neutrofily dominují u CHOPN.",
          "Správně! Alergické astma je charakterizováno aktivací Th2 imunitní dráhy a masivní infiltrací sliznice dýchacích cest eosinofily, které uvolňují proteiny poškozující epitel.",
          "Nesprávně. Basofily sice produkují histamin, ale dominantní buňkou infiltrace a poškození jsou eosinofily.",
          "Nesprávně. Trombocyty se účastní hemostázy, nikoliv astmatického zánětu."
        ]
      }
    ]
  },

  // 49. ARDS (Plíce - DETAIL)
  "ARDS-etiopatogeneze, klasifikace, projevy, následky. Akutní respirační selhání - rozdělení, etiopatogeneze, následky": {
    keyTerms: ["Difúzní alveolární poškození", "Plicní edém (nekardiogenní)", "Hyalinní blány", "Refrakterní hypoxémie", "Surfaktant", "Ventilační selhání"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Akutní respirační selhání (ARF)</h3>
          <p>Neschopnost plic zajistit adekvátní výměnu plynů. Dělí se na:</p>
          <ul>
            <li><strong>Typ I (hypoxemické):</strong> Selhání oxygenace ($paO_2 < 8\text{ kPa}$ při normálním či nízkém $paCO_2$). Příčinou je V/Q nepoměr, shunt nebo porucha difúze.</li>
            <li><strong>Typ II (hyperkapnické):</strong> Selhání ventilace (hypoventilace, $paCO_2 > 6.7\text{ kPa}$). Příčinou je vyčerpání či poškození respirační pumpy (CNS, svaly, hrudní stěna).</li>
          </ul>
        </section>

        <section>
          <h3>2. ARDS (Syndrom akutní respirační tísně)</h3>
          <p>ARDS je extrémní forma nekardiogenního plicního edému způsobená **difúzním alveolárním poškozením (DAD)** v důsledku těžkého systémového nebo plicního zánětu (sepse, pneumonie, aspirace, trauma).</p>
          <h4>Patofyziologická kaskáda:</h4>
          <ol>
            <li><strong>Poškození alveolo-kapilární membrány:</strong> Aktivované neutrofily uvolňují kyslíkové radikály a proteázy, které ničí endotel plicních kapilár a pneumocyty I. typu.</li>
            <li><strong>Exsudativní fáze:</strong> Do alveolů uniká tekutina bohatá na proteiny a fibrin, což vede k plicnímu edému. Fibrin polymeruje na stěnách alveolů za vzniku **hyalinních blan**.</li>
            <li><strong>Destrukce a inaktivace surfaktantu:</strong> Poškození pneumocytů II. typu vede k deficitu surfaktantu, alveoly kolabují (vznik atelektáz) a prudce klesá poddajnost plic.</li>
            <li><strong>Těžký zkrat (shunt):</strong> Krev protéká nevzdušnými (kolabovanými či zaplavenými) alveoly, což vede k **těžké refrakterní hypoxémii**.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední příčinou kolapsu alveolů a snížené poddajnosti plic u ARDS?",
        options: [
          "Masivní spasmus bronchiálního svalstva",
          "Destrukce a inaktivace plicního surfaktantu v důsledku poškození pneumocytů II. typu zánětem",
          "Tvorba krevních sraženin v plicních žilách",
          "Ztráta aktivity dýchacího centra v mozkovém kmeni"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Bronchospasmus je typický pro astma, u ARDS je problém v plicním parenchymu a alveolech.",
          "Správně! Pneumocyty II. typu produkují surfaktant, který snižuje povrchové napětí v alveolech. Jejich destrukce a zaplavení alveolů bílkovinami vede k inaktivaci surfaktantu, což způsobí kolaps alveolů a tuhost plic.",
          "Nesprávně. Mikroembolizace sice nastává, ale kolaps alveolů nezpůsobuje.",
          "Nesprávně. Dýchací centrum je naopak nadměrně stimulováno hypoxií."
        ]
      }
    ]
  },

  // 51. Akutní poškození ledvin (Ledviny - DETAIL)
  "Akutní poškození ledvin - etiopatogeneze, rozdělení podle příčin, projevy, následky": {
    keyTerms: ["AKI", "Prerenální, Renální, Postrenální", "Retence kreatininu", "Uremie", "Hyperkalémie", "KDIGO kritéria"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a kritéria AKI</h3>
          <p><strong>Akutní poškození ledvin (AKI - Acute Kidney Injury)</strong> je charakterizováno náhlým (během hodin až dnů) poklesem glomerulární filtrace, což vede k retenci dusíkatých katabolitů (kreatinin, močovina) v krvi a k neschopnosti udržet rovnováhu elektrolytů a tekutin. Klasifikuje se podle kritérií KDIGO na základě vzestupu sérového kreatininu a/nebo poklesu diurézy.</p>
        </section>

        <section>
          <h3>2. Etiopatogenetická klasifikace</h3>
          <ol>
            <li><strong>Prerenální AKI (funkční) - 55-60 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Snížení renální perfuze bez strukturálního poškození parenchymu. Ledviny reagují kompenzační vazokonstrikcí a retencí sodíku a vody (vysoká specifická váha moči).</li>
                <li><strong>Příčiny:</strong> Hypovolémie (krvácení, dehydratace), kardiální selhání (kardiogenní šok), systémová vazodilatace (sektický šok).</li>
              </ul>
            </li>
            <li><strong>Renální / Intrinzické AKI - 35-40 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Přímé poškození struktur ledvinného parenchymu (tubulů, glomerulů, cév či intersticia).</li>
                <li><strong>Příčiny:</strong> Akutní tubulární nekróza (ischemie, toxiny), glomerulonefritidy, akutní intersticiální nefritida (léky).</li>
              </ul>
            </li>
            <li><strong>Postrenální AKI (obstrukční) - < 5 % případů:</strong>
              <ul>
                <li><strong>Patofyziologie:</strong> Obstrukce odtoku moči zvyšuje intratubulární tlak, který působí proti hydrostatickému tlaku v glomerulárních kapilárách, což vede k poklesu filtrace.</li>
                <li><strong>Příčiny:</strong> Urolitiáza (oboustranná nebo u solitární ledviny), hypertrofie či karcinom prostaty, retroperitoneální fibróza.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h3>3. Projevy a následky AKI</h3>
          <ul>
            <li><strong>Uremický syndrom:</strong> Nevolnost, zvracení, perikarditida, uremická encefalopatie.</li>
            <li><strong>Hyperhydratace:</strong> Otoky, ascites, městnání v malém oběhu (plicní edém) v důsledku neschopnosti vylučovat vodu.</li>
            <li><strong>Hyperkalémie:</strong> Závažný stav s rizikem srdeční zástavy. Na EKG nacházíme hroty na vlně T, rozšíření komplexu QRS.</li>
            <li><strong>Metabolická acidóza:</strong> Akumulace fosfátů, síranů a laktátu způsobuje pokles pH a kompenzační hluboké dýchání (Kussmaul).</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jak se patofyziologicky liší prerenální akutní poškození ledvin od renálního poškození?",
        options: [
          "U prerenálního poškození je přítomna těžká nekróza glomerulů, u renálního nikoliv",
          "U prerenálního poškození je renální parenchym strukturálně nepoškozen a reaguje na hypoperfuzi maximální reabsorpcí vody a sodíku; u renálního je parenchym poškozen",
          "Prerenální AKI vede k masivní polyurii, renální k anurii",
          "Prerenální poškození postihuje pouze močový měchýř"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U prerenálního poškození strukturální poškození chybí.",
          "Správně! Prerenální AKI je funkční odpovědí na snížený průtok krve ledvinami (např. dehydratace). Tubuly fungují správně a maximálně šetří vodu, proto je moč vysoce koncentrovaná. U renálního poškození jsou buňky poškozené a moč koncentrovat nedokážou.",
          "Nesprávně. Obě formy mohou vést k oligurii.",
          "Nesprávně. Postihuje ledviny, močový měchýř je spojen s postrenálním poškozením."
        ]
      }
    ]
  },

  // 10. Alzheimerova choroba (Neuro)
  "Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky": {
    keyTerms: ["Amyloid beta", "Tau protein", "Acetylcholin", "Synaptická transmise", "Atrofie mozku", "Senilní plaky"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Demence a kognitivní poruchy</h3>
          <p><strong>Demence</strong> je syndrom charakterizovaný progresivním úbytkem kognitivních funkcí oproti předchozí úrovni, který narušuje běžné aktivity. Alzheimerova choroba je její nejčastější příčinou.</p>
        </section>
        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Beta-amyloid:</strong> Nerozpustné extracelulární plaky poškozující neurony.</li>
            <li><strong>Tau protein:</strong> Hyperfosforylovaný intracelulární protein tvořící neurofibrilární klubka a ničící cytoskelet.</li>
            <li><strong>Acetylcholin:</strong> Ztráta cholinergních drah v nucleus basalis Meynerti.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který neurotransmiter je nejvíce deficitní u pacientů s Alzheimerovou chorobou?",
        options: ["Dopamin", "GABA", "Acetylcholin", "Serotonin"],
        correct: 2,
        explanations: ["Nesprávně.", "Nesprávně.", "Správně! Deficit acetylcholinu narušuje paměťové funkce.", "Nesprávně."]
      }
    ]
  },

  // 24. Diabetes mellitus (Endo)
  "Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky": {
    keyTerms: ["Inzulínová rezistence", "Absolutní nedostatek inzulínu", "Beta-buňky pankreatu", "Autoimunitní destrukce", "Hyperglykémie", "Polyurie a polydipsie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a klasifikace</h3>
          <p><strong>Diabetes mellitus (DM)</strong> je skupina metabolických onemocnění s hyperglykémií. DM1 je charakterizován autoimunitní destrukcí $\\beta$-buněk Langerhansových ostrůvků a absolutním nedostatkem inzulínu. DM2 je dán inzulínovou rezistencí a relativním nedostatkem inzulínu.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední patofyziologickou příčinou polyurie u neléčeného diabetu?",
        options: [
          "Snížená sekrece antidiuretického hormonu (ADH)",
          "Osmotická diuréza způsobená přítomností glukózy v močových tubulech, která překročila ledvinný práh",
          "Přímé toxické poškození ledvin",
          "Zvýšený příjem tekutin"
        ],
        correct: 1,
        explanations: ["Nesprávně.", "Správně! Glukóza v tubulech zvyšuje osmolaritu a omezuje zpětné vstřebávání vody.", "Nesprávně.", "Nesprávně."]
      }
    ]
  }
};

// Dvou-větné shrnutí pro všech 50 praktických otázek
const PRACTICAL_SUMMARIES = {
  "Vyšetření červené krevní řady": "Tato laboratorní metoda hodnotí počet, objem a koncentraci hemoglobinu v erytrocytech. Slouží k rychlé diferenciální diagnostice a klasifikaci anémií a polycytémií.",
  "Vyšetření mozkomíšního moku": "Likvorologie umožňuje mikroskopické, chemické a mikrobiologické vyšetření moku odebraného lumbální punkcí. Využívá se k diagnostice neuroinfekcí, subarachnoidálního krvácení a autoimunitních chorob mozku.",
  "Vyšetření tekutin ze třetího prostoru (fluidothorax, fluidoperikard, ascites)": "Vyšetření tekutiny slouží především k odlišení transsudátu (způsobeného hydrostatickými a onkotickými silami) od exsudátu (vzniklého zánětem či nádorem). Provádí se stanovením proteinů, LDH, specifické váhy a cytologickým rozborem.",
  "Vyšetření krevního tlaku - sekundární hypertenze": "Sekundární hypertenze je vyvolána identifikovatelnou příčinou, nejčastěji ledvinným či endokrinním onemocněním. Diagnostika zahrnuje screening hormonálních hladin (např. aldosteron/renin), vyšetření ledvinných tepen a funkce parenchymu.",
  "Laboratorní markery zánětu": "Zahrnují stanovení proteinů akutní fáze, jako je CRP, rychlosti sedimentace erytrocytů a počtu leukocytů v krevním obraze. Pomáhají odlišit bakteriální a virovou infekci a sledovat aktivitu chronických zánětů.",
  "Vyšetření poruch plazmatické koagulace": "Toto vyšetření měří časy srážení v koagulační kaskádě (APTT pro vnitřní cestu, Quick/INR pro vnější cestu). Slouží k odhalení deficitů koagulačních faktorů a monitorování antikoagulační léčby.",
  "Vyšetření acidobazické rovnováhy. Laktát": "Vyšetření (Astrup) měří krevní pH, parciální tlaky plynů a hladinu bikarbonátů k posouzení acidózy či alkalózy. Stanovení laktátu odráží anaerobní metabolismus a závažnost tkáňové hypoperfuze.",
  "EKG - posouzení srdeční osy a intervalů, hypertrofie srdečních oddílů": "Posouzení sklonu srdeční osy a délky intervalů (např. PQ, QRS, QT) pomáhá lokalizovat vedení vzruchu a odhalit arytmie. Změny amplitudy kmitů (např. index Sokolow-Lyon) pak indikují hypertrofii komor či síní.",
  "Vyšetření výměny krevních plynů a plicní difuzní kapacity": "Vyšetřením difuzní kapacity plic (DLCO) se hodnotí přenos plynů přes alveolo-kapilární membránu do erytrocytů. Pomáhá diagnostikovat plicní fibrózu, emfyzém a cévní anomálie plic.",
  "Pulzní oxymetrie": "Pulzní oxymetrie je neinvazivní metoda kontinuálního měření nasycení hemoglobinu kyslíkem ($SpO_2$) na základě spektrofotometrie. Je klíčovým indikátorem respirační dostatečnosti a hypoxémie v akutní péči.",
  "Vyšetření plicní hypertenze, tlak v zaklínění": "Měření tlaku v zaklínění (PCWP) pomocí pravostranné srdeční katetrizace umožňuje odlišit plicní hypertenzi prekapilární od postkapilární. PCWP odpovídá tlaku v levé síni a odráží funkci levé komory.",
  "EKG - základní rozbor křivky, topografie svodů": "Základní rozbor hodnotí tvar a přítomnost vln P, T, kmitů Q, R, S a segmentů EKG. Topografické rozřazení svodů (např. hrudní, končetinové) pak lokalizuje ložisko ischémie či nekrózy v myokardu.",
  "Laboratorní markery poruchy jaterních funkcí - obecná charakteristika": "Hodnocení jater zahrnuje vyšetření syntetické kapacity (albumin, Quick/INR) a detekci poškození hepatocytů. Umožňuje odlišit hepatocelulární nekrózu od biliární obstrukce a cholestázy.",
  "Laboratorní markery ischemie myokardu": "Zahrnují stanovení kardiospecifických troponinů (I a T) a frakce CK-MB v krvi. Jejich vyplavení je citlivým a specifickým ukazatelem nekrózy myokardu při infarktu.",
  "Vyšetření parametrů bronchiální obstrukce": "Spirometrické parametry jako FEV1 a poměr FEV1/FVC detekují zúžení dýchacích cest a zvýšený odpor proudění vzduchu. Využívají se k potvrzení a sledování závažnosti astmatu či CHOPN.",
  "Laboratorní vyšetření moči. Hematurie": "Chemický rozbor a mikroskopie sedimentu detekují patologické příměsi v moči, jako jsou bílkoviny, glukóza, ketony či krev. Přítomnost hematurie může ukazovat na glomerulární poškození nebo krvácení v močových cestách.",
  "Echokardiografie": "Echokardiografie využívá ultrazvuk k vizualizaci struktury srdce, pohybu chlopní a velikosti srdečních dutin v reálném čase. Umožňuje přesné stanovení ejekční frakce a hemodynamiky oběhu.",
  "Laboratorní markery akutního renálního poškození": "Tradiční markery (kreatinin, močovina) stoupají opožděně při poklesu glomerulární filtrace. Moderní biomarkery (NGAL, cystatin C) pak detekují poškození tubulárních buněk výrazně dříve.",
  "Laboratorní markery diabetes mellitus": "Klíčovým ukazatelem je glykémie nalačno, případně výsledek orálního glukózového tolerančního testu (oGTT). Dlouhodobou kompenzaci diabetu pak odráží hladina glykovaného hemoglobinu (HbA1c).",
  "EKG - posouzení srdeční frekvence a rytmu": "EKG hodnotí pravidelnost srdeční akce (pravidelný sinusový rytmus) a přítomnost arytmií. Výpočet frekvence z intervalů R-R umožňuje diagnostikovat bradykardii či tachykardii.",
  "Vyšetření krevních destiček": "Kromě stanovení celkového počtu trombocytů se hodnotí jejich funkční aktivita (agregometrie). Vyšetření je nezbytné pro diagnostiku trombocytopenií, trombocytopatií a před zahájením antiagregační léčby.",
  "Laboratorní markery akutní pankreatitidy": "Stanovení sérových a močových hladin amylázy a lipázy je základem laboratorní diagnostiky. Jejich výrazný vzestup ukazuje na autodigesci tkáně slinivky břišní.",
  "Vyšetření jaterních enzymů": "Hladiny aminotransferáz (ALT, AST) indikují poškození jaterních buněk, zatímco ALP a GGT ukazují na městnání žluči. Poměr AST/ALT (de Ritisův index) pomáhá určit závažnost a příčinu poškození jater.",
  "Vyšetření funkce nadledvinek": "Zahrnuje stanovení kortizolu, aldosteronu, ACTH a katecholaminů (metanefrinů v moči). Využívá se k průkazu hypo- či hyperfunkce nadledvin (např. Addisonova choroba, Cushingův syndrom).",
  "Vyšetření hemostázy - obecná charakteristika": "Hemostáza je komplexní děj zahrnující reakci cévní stěny, funkci destiček a koagulační systém. Laboratorní testy hodnotí primární hemostázu (krvácivost) a sekundární hemostázu (koagulační časy).",
  "Vyšetření funkce glomerulů": "Hodnocení glomerulární filtrace se provádí pomocí clearance endogenního kreatininu nebo výpočtem odhadované GFR (eGFR) z plazmatické koncentrace kreatininu či cystatinu C. Detekuje ztrátu očišťovací schopnosti ledvin.",
  "Laboratorní markery ikteru a cholestázy": "Stanovení přímého a nepřímého bilirubinu v krvi pomáhá odlišit hemolytický, hepatocelulární a obstrukční iktus. Vzestup ALP a GGT pak specificky potvrzuje přítomnost cholestázy.",
  "Vyšetření aktivity neuronů. EEG": "Elektroencefalografie (EEG) snímá elektrickou aktivitu mozku pomocí elektrod umístěných na skalpu. Využívá se k diagnostice epilepsie, poruch spánku a k hodnocení závažnosti kómatu.",
  "Spirometrie - obecná charakteristika a principy": "Spirometrie měří objemy a průtoky vzduchu během úsilného nádechu a výdechu. Je základním funkčním vyšetřením k diagnostice plicních ventilačních poruch.",
  "Předtransfúzní vyšetření": "Zahrnuje určení krevní skupiny dárce i příjemce v systému AB0 a Rh a provedení zkoušky kompatibility (křížový pokus). Je to nezbytná prevence život ohrožujících hemolytických potransfúzních reakcí.",
  "Vyšetření iontogramu": "Laboratorní analýza hladin sodíku, draslíku, chloridů a vápníku v plazmě je zásadní pro vnitřní prostředí. Poruchy iontů přímo ovlivňují elektrickou dráždivost myokardu a buněčnou hydrataci.",
  "Kolonoskopie": "Kolonoskopie je endoskopická metoda umožňující přímou vizualizaci sliznice tlustého střeva a odběr biopsií. Slouží k diagnostice zánětů, polypů a včasnému záchytu kolorektálního karcinomu.",
  "Vyšetření funkce tubulů": "Hodnotí schopnost ledvinných tubulů koncentrovat a acidifikovat moč (např. test koncentrační schopnosti, pH moči). Detekuje specifické tubulopatie a poškození dřeně ledvin.",
  "Koronarografie": "Koronarografie je invazivní rentgenové vyšetření věnčitých tepen srdce pomocí kontrastní látky zavedené katetrem. Je to zlatý standard pro lokalizaci a řešení stenóz u ischemické choroby srdeční.",
  "Vyšetření intrakraniálního tlaku. Funkce hlavových nervů": "Měření intrakraniálního tlaku (ICP) je kritické u těžkých traumat mozku pro prevenci herniace kmenových struktur. Vyšetření hlavových nervů pak lokalizuje úroveň neurologického poškození.",
  "Vyšetření funkce hypofýzy": "Diagnostika se opírá o stanovení hladin periferních hormonů a stimulační či supresní testy (např. dexamethasonový test). Hodnotí hyperfunkční či hypofunkční stavy adenohypofýzy a neurohypofýzy.",
  "Posouzení stavu vědomí (kvantitativně, kvalitativně) - základní skórovací systémy": "Kvantitativní stav vědomí hodnotí hloubku bezvědomí pomocí Glasgow Coma Scale (GCS) na základě reakcí očí, řeči a motoriky. Kvalitativní hodnocení se zaměřuje na obsah vědomí, např. přítomnost deliria či zmatenosti.",
  "Vyšetření krevního tlaku - primární hypertenze": "Zahrnuje opakované měření krevního tlaku v ordinaci a ambulantní 24hodinový monitoring (AMTK). Slouží k potvrzení trvalého vzestupu tlaku bez zjevné organické příčiny.",
  "Proteiny akutní fáze": "Jedná se o bílkoviny, jejichž koncentrace v plazmě se mění v reakci na zánětlivý stimul (např. CRP, fibrinogen). Slouží jako citlivé indikátory systémové zánětlivé odpovědi organismu.",
  "Zátěžová vyšetření kardiorespiračního systému": "Zátěžové testy (spiroergometrie, zátěžové EKG) hodnotí funkční rezervu srdce a plic při fyzické námaze. Pomáhají odhalit latentní ischemii myokardu a určit toleranci zátěže.",
  "Bronchoskopie": "Bronchoskopie je endoskopická metoda umožňující vizuální inspekci tracheobronchiálního stromu a odběr slizničních vzorků či sekretu. Používá se k diagnostice nádorů, infekcí a k terapeutické toaletě dýchacích cest.",
  "Ischemie - etiopatogeneze, změny na orgánové úrovni (myokard, CNS, ledviny, GIT, končetiny)": "Ischemie je nedostatek kyslíku a živin v tkáni z důvodu omezeného přítoku krve. Vede k rychlé depleci ATP, buněčnému edému a při delším trvání k ireverzibilní infarktu či nekróze zasaženého orgánu.",
  "Vyšetření parametrů plicní restrikce": "Detekce plicní restrikce vyžaduje stanovení celkové plicní kapacity (TLC) pomocí bodypletysmografie. Ukazuje na pokles objemu plicního parenchymu nebo omezení exkurzí hrudní stěny.",
  "Gastroskopie": "Gastroskopie umožňuje optické vyšetření jícnu, žaludku a dvanáctníku optickým přístrojem. Je klíčová pro diagnostiku vředů, refluxu, zánětů a odběr vzorků na přítomnost Helicobacter pylori.",
  "Základní vyšetření reprodukčního systému": "U mužů se opírá o analýzu spermiogramu k posouzení plodnosti. U žen hodnotí ovulační cyklus, bazální teplotu a hladiny hormonů hypotalamo-hypofyzárně-ovariální osy.",
  "Laboratorní markery hemolýzy": "Zahrnují pokles haptoglobinu v séru, zvýšení nekonjugovaného bilirubinu a vzestup aktivity laktátdehydrogenázy (LDH). Tyto změny indikují předčasný a nadměrný rozpad erytrocytů.",
  "Vyšetření bílé krevní řady": "Hodnotí celkový počet leukocytů a jejich diferenciální rozpočet (podíl granulocytů, lymfocytů a monocytů). Slouží k diagnostice infekcí, zánětů, alergií a hematologických malignit.",
  "Vyšetření funkce štítné žlázy a příštítných tělísek": "Vyšetření štítné žlázy se opírá o hladiny TSH a volného thyroxinu ($fT_4$) v krvi. Funkce příštítných tělísek se hodnotí pomocí parathormonu (PTH), kalcémie a hladiny fosfátů.",
  "Laboratorní markery rhabdomyolýzy": "Rhabdomyolýzu charakterizuje masivní vzestup kreatinkinázy (CK) a myoglobinu v krvi. Tyto markery indikují poškození kosterního svalstva s vysokým rizikem poškození ledvin.",
  "Srdeční katetrizace, vyšetření krevního tlaku v jednotlivých srdečních oddílech": "Umožňuje invazivní měření tlaků v síních, komorách a plicním řečišti pomocí zavedených katetrů. Slouží k hodnocení závažnosti chlopenních vad a zkratových onemocnění."
};

// Funkce, která sestaví finální databázi všech 135 otázek (51 + 34 + 50)
function generateFinalDatabase() {
  const finalQuestions = [];

  // Očištění názvu od formátovacích tagů [span_X] a zbytků textu
  function cleanTitleText(title) {
    return title.replace(/\[span_\d+\]\((?:start|end)_span\)/g, "")
                .replace(/\s+/g, " ")
                .trim();
  }

  // Funkce přiřazení orgánového systému na základě klíčových slov
  function getOrganSystem(title) {
    const lower = title.toLowerCase();
    
    if (lower.includes("srdce") || lower.includes("srdeč") || lower.includes("infarkt") || lower.includes("arytm") || lower.includes("chlop") || lower.includes("kardio") || lower.includes("hypertenze") || lower.includes("hypotenze") || lower.includes("oběh") || lower.includes("cévní") || lower.includes("venóz") || lower.includes("tromb") || lower.includes("koronár") || lower.includes("ekg") || lower.includes("katetrizac")) {
      if (lower.includes("cévní mozkov") || lower.includes("mozková příhod")) return "Nervový systém a smysly";
      if (lower.includes("portální hypertenze")) return "Gastroenterologie a hepatologie";
      return "Kardiovaskulární systém";
    }
    if (lower.includes("plic") || lower.includes("dýchac") || lower.includes("ventil") || lower.includes("perfúz") || lower.includes("difúz") || lower.includes("astma") || lower.includes("bronch") || lower.includes("pneumon") || lower.includes("pneumotor") || lower.includes("fluidotor") || lower.includes("atelekt") || lower.includes("ards") || lower.includes("respirač") || lower.includes("oxymetrie") || lower.includes("krevních plynů") || lower.includes("bronchosk")) {
      return "Respirační systém";
    }
    if (lower.includes("ledvin") || lower.includes("nefr") || lower.includes("tubul") || lower.includes("moč") || lower.includes("glomerul") || lower.includes("urolit") || lower.includes("akutní renální") || lower.includes("akutního renálního") || lower.includes("hepatorenální")) {
      return "Nefrologie a urologie";
    }
    if (lower.includes("jater") || lower.includes("hepat") || lower.includes("žalud") || lower.includes("gastrit") || lower.includes("vřed") || lower.includes("pankreat") || lower.includes("střev") || lower.includes("git") || lower.includes("ikter") || lower.includes("cholest") || lower.includes("polyk") || lower.includes("jícen") || lower.includes("jícnu") || lower.includes("kolonosk") || lower.includes("gastrosk") || lower.includes("cholecyst") || lower.includes("žluč") || lower.includes("dyspepsie") || lower.includes("krvácení do git")) {
      return "Gastroenterologie a hepatologie";
    }
    if (lower.includes("anem") || lower.includes("aném") || lower.includes("krevní řad") || lower.includes("erytro") || lower.includes("leuko") || lower.includes("trombocyt") || lower.includes("hemostá") || lower.includes("koagul") || lower.includes("slez") || lower.includes("splen") || lower.includes("transfú") || lower.includes("dřen") || lower.includes("hemolýz") || lower.includes("polycyt") || lower.includes("gvh") || lower.includes("hvg")) {
      return "Hematologie";
    }
    if (lower.includes("endokrin") || lower.includes("hormon") || lower.includes("zpětná vazba") || lower.includes("diabetes") || lower.includes("inzul") || lower.includes("glyk") || lower.includes("štít") || lower.includes("thyreo") || lower.includes("parathyreo") || lower.includes("cushing") || lower.includes("conn") || lower.includes("addison") || lower.includes("adrenál") || lower.includes("nadledvin") || lower.includes("hypofýz") || lower.includes("feochromocytom")) {
      return "Endokrinní systém";
    }
    if (lower.includes("mozku") || lower.includes("cns") || lower.includes("nerv") || lower.includes("mozečk") || lower.includes("vestibul") || lower.includes("ataxie") || lower.includes("spán") || lower.includes("kognit") || lower.includes("demenc") || lower.includes("alzheimer") || lower.includes("mích") || lower.includes("paréz") || lower.includes("epilep") || lower.includes("vědomí") || lower.includes("glasgow") || lower.includes("eeg") || lower.includes("demyel") || lower.includes("roztroušená") || lower.includes("zrak") || lower.includes("sluch") || lower.includes("intrakraniál") || lower.includes("komoce") || lower.includes("kontuze") || lower.includes("hematom") || lower.includes("kóma") || lower.includes("vegetativní") || lower.includes("locked-in") || lower.includes("smrt mozku")) {
      return "Nervový systém a smysly";
    }
    if (lower.includes("kost") || lower.includes("osteopor") || lower.includes("osteomal") || lower.includes("rachit") || lower.includes("artróz") || lower.includes("artrit") || lower.includes("revmat") || lower.includes("lupus") || lower.includes("skleroder") || lower.includes("sjögren") || lower.includes("myopatie") || lower.includes("rhabdomyol")) {
      return "Lokomotorický a autoimunitní systém";
    }
    return "Ostatní / Systémové procesy";
  }

  // Pomocná funkce pro odhad klíčových slov u placeholderů
  function estimateKeywords(cleanedTitle) {
    const system = getOrganSystem(cleanedTitle);
    const keywords = [system];
    
    const parts = cleanedTitle.split(/[-.,;:]/);
    if (parts[0] && parts[0].length < 35) keywords.push(parts[0].trim());
    if (parts[1] && parts[1].length < 35) keywords.push(parts[1].trim());
    
    keywords.push("Etiopatogeneze", "Diagnostika");
    return [...new Set(keywords)].slice(0, 6);
  }

  // 1. Speciální I. (51 otázek)
  RAW_QUESTIONS_SPECIAL_1.forEach((rawTitle, index) => {
    const cleaned = cleanTitleText(rawTitle);
    const id = `spec-1-${index + 1}`;
    const richData = SPECIFIC_RICH_DATA[cleaned];
    
    finalQuestions.push({
      id: id,
      category: "Speciální I.",
      title: cleaned,
      organSystem: getOrganSystem(cleaned),
      keyTerms: richData ? richData.keyTerms : estimateKeywords(cleaned),
      detailContent: richData ? richData.detailContent : null,
      quiz: richData ? richData.quiz : null
    });
  });

  // 2. Speciální II. (34 otázek - po opravě/rozdělení)
  RAW_QUESTIONS_SPECIAL_2.forEach((rawTitle, index) => {
    const cleaned = cleanTitleText(rawTitle);
    const id = `spec-2-${index + 1}`;
    const richData = SPECIFIC_RICH_DATA[cleaned];
    
    finalQuestions.push({
      id: id,
      category: "Speciální II.",
      title: cleaned,
      organSystem: getOrganSystem(cleaned),
      keyTerms: richData ? richData.keyTerms : estimateKeywords(cleaned),
      detailContent: richData ? richData.detailContent : null,
      quiz: richData ? richData.quiz : null
    });
  });

  // 3. Praktická (50 otázek)
  RAW_QUESTIONS_PRACTICAL.forEach((rawTitle, index) => {
    const cleaned = cleanTitleText(rawTitle);
    const id = `pract-${index + 1}`;
    const summary = PRACTICAL_SUMMARIES[cleaned] || "Toto praktické vyšetření slouží k analýze fyziologických funkcí a diagnostice patologických stavů. Umožňuje rychlou klinickou rozvahu na základě laboratorních či grafických výsledků.";
    
    // Vygenerujeme detailní strukturovaný text pro praktickou otázku
    const keywords = estimateKeywords(cleaned);
    const system = getOrganSystem(cleaned);
    
    const detailContent = `
      <div class="medical-detail">
        <section>
          <h3>1. Klinický význam vyšetření</h3>
          <p>Téma <strong>${cleaned}</strong> je nedílnou součástí praktického vyšetření v patofyziologii a klinické praxi. Spadá pod <em>${system}</em>. Hlavním účelem je identifikace odchylek od fyziologických hodnot a pochopení rozvoje příslušných patologií.</p>
        </section>
        
        <section>
          <h3>2. Metodika a interpretace hodnot</h3>
          <p>Při vyšetření a interpretaci výsledků hodnotíme:</p>
          <ul>
            <li><strong>Fyziologické hodnoty:</strong> Referenční rozmezí odpovídající zdravému jedinci za standardních podmínek.</li>
            <li><strong>Patologické odchylky:</strong> Zvýšení (např. hyperfunkce, zánětlivá aktivace, retence) nebo snížení (např. hypofunkce, ztráty, deficit) parametrů.</li>
            <li><strong>Klinické souvislosti:</strong> Integrace výsledků s anamnézou a fyzikálním nálezem pacienta.</li>
          </ul>
        </section>

        <section class="summary-box-practical">
          <h4>Klíčové shrnutí tématu</h4>
          <p><strong>${summary}</strong></p>
        </section>
      </div>
    `;

    finalQuestions.push({
      id: id,
      category: "Praktická",
      title: cleaned,
      organSystem: system,
      keyTerms: keywords,
      detailContent: detailContent,
      quiz: null // Bude generováno dynamicky v app.js
    });
  });

  return finalQuestions;
}

// Přiřazení do globálního prostoru
window.COMPLETE_QUESTIONS = generateFinalDatabase();
