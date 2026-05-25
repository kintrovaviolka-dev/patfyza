// data_practical.js - Podrobné popisy, kvízy a 2-větná shrnutí pro Praktická témata (50 otázek)

const PRACTICAL_DETAILS = {
  "pract-1": {
    summary: "Vyšetření červené krevní řady je základní laboratorní metodou sloužící k hodnocení počtu, velikosti a hemoglobinové výbavy erytrocytů. Umožňuje rychlou diferenciální diagnostiku anémií a polycytémií pomocí parametrů jako hemoglobin, hematokrit, MCV, MCH a RDW.",
    keyTerms: ["Hemoglobin", "Hematokrit", "Erytrocyty", "MCV (střední objem)", "MCH", "RDW"],
    quiz: [
      {
        question: "Co vyjadřuje parametr RDW (Red Cell Distribution Width) ve vyšetření krevního obrazu?",
        options: [
          "Celkovou rychlost tvorby nových erytrocytů v kostní dřeni",
          "Míru variability velikosti erytrocytů (anisocytózu)",
          "Průměrný obsah hemoglobinu v jednom erytrocytu",
          "Dobu životnosti erytrocytů v oběhu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Tvorbu erytrocytů odráží počet retikulocytů.",
          "Správně! RDW vyjadřuje distribuční šíři velikosti erytrocytů. Vysoké RDW ukazuje na anisocytózu (přítomnost různě velkých buněk), což je typický časný znak např. sideropenické anémie.",
          "Nesprávně. Obsah hemoglobinu vyjadřuje parametr MCH.",
          "Nesprávně. Životnost erytrocytů nelze z RDW vyčíst."
        ]
      }
    ]
  },
  "pract-2": {
    summary: "Vyšetření mozkomíšního moku se využívá k diagnostice neuroinfekcí, krvácení do subarachnoidálního prostoru a autoimunitních onemocnění CNS. Pomocí cytologického, biochemického a mikrobiologického rozboru likvoru lze spolehlivě odlišit bakteriální zánět od virového či tuberkulózního.",
    keyTerms: ["Likvor", "Lumbální punkce", "Pleocytóza", "Proteinrachie", "Laktát v likvoru", "Glukóza (poměr ku glykémii)"],
    quiz: [
      {
        question: "Jaký nález v mozkomíšním moku je typický pro purulentní (bakteriální) meningitidu?",
        options: [
          "Normální bílkovina, zvýšená glukóza a lymfocytární pleocytóza",
          "Výrazně zvýšená bílkovina (proteinrachie), extrémně snížená glukóza, zvýšený laktát a polymorfonukleární (neutrofilní) pleocytóza",
          "Zvýšená glukóza a čirý vzhled likvoru",
          "Nepřítomnost jakýchkoliv buněk"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Lymfocytární pleocytóza a normální glukóza jsou známkou virového (aseptického) zánětu.",
          "Správně! Bakterie spotřebovávají glukózu (hypoglykorachie) a metabolizují na laktát. Zánět vyvolá masivní prostup bílkovin a příliv neutrofilů, což likvor zkalí.",
          "Nesprávně. Glukóza je u bakteriálního zánětu snížená, nikoliv zvýšená.",
          "Nesprávně. Buněčnost je u meningitidy vždy zvýšená."
        ]
      }
    ]
  },
  "pract-3": {
    summary: "Vyšetření tekutin ze třetího prostoru je klíčové pro rozlišení transsudátu a exsudátu na základě proteinů, LDH a specifické váhy. Pomáhá odhalit příčinu hromadění tekutiny, jako je zánět, nádor, srdeční selhání nebo portální hypertenze.",
    keyTerms: ["Transsudát vs. Exsudát", "Rivaltova zkouška", "Bílkoviny v bodové tekutině", "LDH", "Punkce (paracentéza)", "Městnavé srdeční selhání"],
    quiz: [
      {
        question: "Který z následujících parametrů spolehlivě definuje exsudát (např. v pleurální dutině)?",
        options: [
          "Nízký obsah bílkovin pod 20 g/l a nízké LDH",
          "Vysoký obsah bílkovin (> 30 g/l), poměr bílkovin k séru > 0.5 a vysoké LDH (Lightova kritéria)",
          "Čirá tekutina bez přítomnosti buněk",
          "Nízká specifická váha pod 1012"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto charakterizuje transsudát.",
          "Správně! Exsudát vzniká zvýšenou propustností kapilár při zánětu nebo nádoru. Lightova kritéria (poměr proteinů > 0.5 a LDH > 0.6) jsou zlatým standardem rozlišení.",
          "Nesprávně. Exsudáty jsou často kalné a obsahují zánětlivé buňky.",
          "Nesprávně. Specifická váha exsudátu je vyšší (> 1018)."
        ]
      }
    ]
  },
  "pract-4": {
    summary: "Vyšetření krevního tlaku u sekundární hypertenze se zaměřuje na odhalení skrytých organických příčin vysokého tlaku. Zahrnuje screening ledvinných chorob, stenózy renální tepny a endokrinních adenomů produkujících aldosteron či katecholaminy.",
    keyTerms: ["Sekundární hypertenze", "Renovaskulární hypertenze", "Primární hyperaldosteronismus", "Feochromocytom", "Koarktace aorty", "Aldosteron-reninový poměr"],
    quiz: [
      {
        question: "Jaký screeningový test je nejvhodnější při podezření na primární hyperaldosteronismus (Connův syndrom) jako příčinu hypertenze?",
        options: [
          "24hodinové monitorování krevního tlaku",
          "Stanovení poměru koncentrace aldosteronu k plasmatické reninové aktivitě (ARR)",
          "Magnetická rezonance mozku",
          "Vyšetření močového sedimentu na hematurii"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. AMTK potvrdí hypertenzi, ale neodhalí Connův syndrom.",
          "Správně! Nadprodukce aldosteronu při autonomním adenomu tlumí vylučování reninu. Zvýšený aldosteron-reninový poměr (ARR) je vysoce specifickým screeningovým testem.",
          "Nesprávně. Hypofýza aldosteron netvoří, MR mozku nepomůže.",
          "Nesprávně. Hematurie s aldosteronem nesouvisí."
        ]
      }
    ]
  },
  "pract-5": {
    summary: "Laboratorní markery zánětu slouží k detekci a monitorování zánětlivého procesu v organismu. Patří sem zejména CRP, sedimentace erytrocytů a leukocytóza, které pomáhají odlišit bakteriální etiologii od virové.",
    keyTerms: ["C-reaktivní protein (CRP)", "Sedimentace erytrocytů (FW)", "Leukocytóza", "Neutrofilie vs. Lymfocytóza", "Prokalcitonin", "Cytokiny (IL-6)"],
    quiz: [
      {
        question: "Který marker vykazuje nejrychlejší dynamiku vzestupu a poklesu při bakteriální infekci a je tak vhodný pro monitorování úspěšnosti léčby?",
        options: [
          "Sedimentace erytrocytů (FW)",
          "C-reaktivní protein (CRP)",
          "Celkový hemoglobin",
          "Albumin v séru"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Sedimentace klesá velmi pomalu (dny až týdny) z důvodu dlouhého poločasu imunoglobulinů a fibrinogenu.",
          "Správně! CRP (produkovaný játry stimulací IL-6) stoupá již za 4-6 hodin od začátku zánětu a má krátký poločas (cca 19 hodin). Rychle reaguje na úspěšné zahájení antibiotické léčby.",
          "Nesprávně. Hemoglobin není zánětlivým markerem.",
          "Nesprávně. Albumin je negativní reaktant akutní fáze, při zánětu klesá a pomalu se obnovuje."
        ]
      }
    ]
  },
  "pract-6": {
    summary: "Vyšetření plazmatické koagulace slouží k screeningu koagulačních poruch a kontrole antikoagulační léčby. Pomocí testů Quick (PT) a APTT hodnotíme integritu vnějšího a vnitřního systému koagulační kaskády.",
    keyTerms: ["Quickův test (PT / INR)", "APTT", "Fibrinogen", "Trombinový čas (TT)", "Koagulační faktory", "Warfarin a Heparin"],
    quiz: [
      {
        question: "Který koagulační test se rutinně využívá k monitorování účinnosti léčby nefrakcionovaným heparinem (UFH)?",
        options: [
          "Quickův test (PT / INR)",
          "Aktivovaný parciální tromboplastinový čas (APTT)",
          "Počet krevních destiček",
          "Krvácivost podle Dukea"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Quick/INR se používá k monitorování perorální léčby Warfarinem.",
          "Správně! Heparin potencuje antitrombin III, který inaktivuje faktory XIIa, XIa, IXa a IIa (trombin) – tedy faktory vnitřní cesty. Prodloužení APTT je přímo úměrné koncentraci heparinu.",
          "Nesprávně. Destičky se monitorují kvůli riziku heparinem indukované trombocytopenie (HIT), ale ne pro kontrolu účinku heparinu.",
          "Nesprávně. Krvácivost hodnotí primární hemostázu, ne plazmatickou koagulaci."
        ]
      }
    ]
  },
  "pract-7": {
    summary: "Vyšetření acidobazické rovnováhy stanovuje pH krve, parciální tlaky $CO_2$ a $O_2$ a koncentraci hydrogenuhličitanů. Laktát slouží jako klíčový indikátor tkáňové hypoxie a anaerobního metabolismu při šoku.",
    keyTerms: ["pH krve", "pCO2", "Bikarbonáty (HCO3-)", "Base Excess (BE)", "Laktátová acidóza", "Aniontová mezera (Anion Gap)"],
    quiz: [
      {
        question: "Jak se patofyziologicky kompenzuje metabolická acidóza (např. při vysokém laktátu u septického šoku)?",
        options: [
          "Renální retencí oxidu uhličitého",
          "Hyperventilací (zvýšené dechové úsilí - Kussmaulovo dýchání) k vydýchání oxidu uhličitého a poklesu pCO2",
          "Snížením srdeční frekvence",
          "Vylučováním bikarbonátu ledvinami"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ledviny CO2 nezadržují.",
          "Správně! Respirační kompenzace metabolické acidózy nastává stimulací chemoreceptorů poklesem pH. Zvýšená ventilace vede k hypokapnii ($pCO_2 < 4.8\text{ kPa}$), což posouvá pH zpět k normě.",
          "Nesprávně. Frekvence se při šoku naopak zvyšuje.",
          "Nesprávně. Vylučování bikarbonátu by acidózu dále zhoršilo."
        ]
      }
    ]
  },
  "pract-8": {
    summary: "EKG analýza srdeční osy, intervalů a hypertrofie umožňuje odhalit patologie převodu vzruchu a remodelace myokardu. Změny v trvání vln a komplexů indikují blokády, zatímco vysoké kmity svědčí o hypertrofii srdečních stěn.",
    keyTerms: ["Elektrická osa srdeční", "Interval PQ", "Komplex QRS", "Interval QT", "Hypertrofie levé komory (Sokolow-Lyon)", "Raménkové blokády (RBBB/LBBB)"],
    quiz: [
      {
        question: "Které EKG kritérium je typické pro hypertrofii levé komory v hrudních svodech?",
        options: [
          "Zkrácení intervalu PQ pod 120 ms",
          "Sokolow-Lyonův index: součet kmitu S ve svodu V1 a kmitu R ve svodu V5 (nebo V6) přesahuje 35 mm",
          "Přítomnost vlny delta na vzestupné části QRS",
          "Otočení elektrické osy srdeční extrémně doprava"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Krátké PQ svědčí pro preexcitaci (WPW).",
          "Správně! Zvětšená masa levé komory generuje silnější elektrické vektory směřující doleva a dozadu, což se na EKG projeví hlubokým S ve V1 a vysokým R ve V5/V6.",
          "Nesprávně. Delta vlna je typická pro WPW syndrom.",
          "Nesprávně. Hypertrofie levé komory otáčí osu doleva."
        ]
      }
    ]
  },
  "pract-9": {
    summary: "Vyšetření výměny krevních plynů a plicní difuze hodnotí účinnost přestupu kyslíku a oxidu uhličitého přes alveolo-kapilární membránu. Pomáhá odhalit poruchy difúze u intersticiálních plicních procesů a plicní fibrózy.",
    keyTerms: ["Difuzní kapacita plic (DLCO)", "Parciální tlak kyslíku (paO2)", "Alveolo-arteriální gradient (A-aDO2)", "Alveolo-kapilární membrána", "Hypoxémie", "Hyperkapnie"],
    quiz: [
      {
        question: "U kterého z následujících onemocnění nalezneme výrazný pokles difuzní kapacity plic pro oxid uhelnatý (DLCO)?",
        options: [
          "Akutní astmatický záchvat",
          "Idiopatická plicní fibróza (z důvodu zesílení alveolo-kapilární membrány)",
          "Kyfoskolióza bez poškození plicního parenchymu",
          "Obezita"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U astmatu je DLCO normální nebo lehce zvýšené.",
          "Správně! Plicní fibróza vede k ukládání kolagenu v intersticiu. Membrána se zesiluje a stává se hůře prostupnou pro plyny, což DLCO významně snižuje.",
          "Nesprávně. Kyfoskolióza je mimoplicní restrikce, alveolo-kapilární membrána je v pořádku, DLCO je normální.",
          "Nesprávně. Obezita sama o sobě DLCO nesnižuje."
        ]
      }
    ]
  },
  "pract-10": {
    summary: "Pulzní oxymetrie je neinvazivní spektrofotometrická metoda měření nasycení arteriálního hemoglobinu kyslíkem. Poskytuje okamžitou informaci o oxygenaci krve, ale může být zkreslena přítomností abnormálních hemoglobinů.",
    keyTerms: ["Saturace kyslíkem (SpO2)", "Absorpční spektrofotometrie", "Karboxyhemoglobin (COHb)", "Methemoglobin (MetHb)", "Perfuze tkáně", "Hypoxická hypoxie"],
    quiz: [
      {
        question: "Jak ovlivní těžká otrava oxidem uhelnatým (CO) měření saturace běžným pulzním oxymetrem?",
        options: [
          "Oxymetr ukáže extrémně nízkou saturaci pod 50 %",
          "Oxymetr ukáže falešně vysokou saturaci (kolem 95-100 %), protože nedokáže odlišit karboxyhemoglobin od oxyhemoglobinu",
          "Přístroj přestane měřit a signalizuje chybu",
          "Zvýší se tepová frekvence na displeji bez ovlivnění saturace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Přístroj nízkou saturaci neukáže.",
          "Správně! Běžné dvou-vlnové oxymetry měří absorpci při vlnových délkách 660 a 940 nm. Karboxyhemoglobin absorbuje světlo téměř stejně jako oxyhemoglobin, což vede k závažnému falešně pozitivnímu zkreslení.",
          "Nesprávně. Přístroj normálně měří dál.",
          "Nesprávně. Tepová frekvence se měří na základě pulzačních změn objemu, ale klíčová chyba je v saturaci."
        ]
      }
    ]
  }
};

// Doplnění zbývajících praktických témat 11-50 do databáze
const PRACTICAL_LIST_EXTENDED = [
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

// Ostatní dvou-větná shrnutí pro zbývající praktické otázky (11-50)
const REMAINING_SUMMARIES = {
  "Vyšetření plicní hypertenze, tlak v zaklínění": "Tlak v zaklínění (PCWP) odráží tlak v levé síni a slouží k odlišení prekapilární a postkapilární plicní hypertenze. Katetrizace plicnice je klíčovou metodou pro hemodynamické zhodnocení pravého i levého srdce.",
  "EKG - základní rozbor křivky, topografie svodů": "Základní rozbor EKG křivky hodnotí přítomnost a tvar vln, kmitů a segmentů pro diagnostiku arytmií a ischemických změn. Topografie svodů pak umožňuje přesně lokalizovat postiženou stěnu myokardu.",
  "Laboratorní markery poruchy jaterních funkcí - obecná charakteristika": "Vyšetření jaterních funkcí se zaměřuje na stanovení syntetické kapacity (albumin, srážlivost) a detekci buněčné nekrózy či cholestázy. Umožňuje odlišit funkční selhání jater od strukturálního poškození.",
  "Laboratorní markery ischemie myokardu": "Zahrnují stanovení kardiospecifických troponinů (I a T) a frakce CK-MB v periferní krvi. Jejich zvýšení je vysoce specifickým a citlivým ukazatelem nekrózy myokardu.",
  "Vyšetření parametrů bronchiální obstrukce": "Spirometrické vyšetření parametrů jako FEV1 a index FEV1/FVC slouží k detekci a kvantifikaci exspiračního odporu v dýchacích cestách. Pomáhá odlišit a sledovat průběh astmatu a CHOPN.",
  "Laboratorní vyšetření moči. Hematurie": "Chemické a mikroskopické vyšetření močového sedimentu detekuje přítomnost bílkovin, glukózy, ketonů a krevních elementů. Nález dysmorfních erytrocytů pak indikuje glomerulární původ hematurie.",
  "Echokardiografie": "Echokardiografie využívá ultrazvuk k neinvazivní vizualizaci anatomie a funkce srdečních síní, komor a chlopní. Umožňuje stanovení ejekční frakce a odhalení kinetických anomálií.",
  "Laboratorní markery akutního renálního poškození": "Tradiční markery (kreatinin, urea) indikují snížení glomerulární filtrace, ale reagují s časovým zpožděním. Moderní biomarkery (např. NGAL) odhalují poškození tubulů podstatně dříve.",
  "Laboratorní markery diabetes mellitus": "Diagnostika se opírá o glykémii nalačno, oGTT test a hladinu glykovaného hemoglobinu (HbA1c). HbA1c odráží průměrnou kompenzaci diabetu za poslední 2–3 měsíce.",
  "EKG - posouzení srdeční frekvence a rytmu": "EKG slouží k posouzení pravidelnosti srdečního rytmu (sinusový rytmus vs. arytmie) a výpočtu srdeční frekvence z intervalů R-R. Pomáhá odhalit bradyarytmie a tachyarytmie.",
  "Vyšetření krevních destiček": "Kromě celkového počtu trombocytů se v klinické praxi provádí testy jejich funkční aktivity a agregace. Vyšetření je nezbytné pro diagnostiku vrozených a získaných poruch primární hemostázy.",
  "Laboratorní markery akutní pankreatitidy": "Stanovení sérové a močové amylázy a zejména specifické lipázy je základem laboratorního screeningu. Jejich výrazné zvýšení svědčí pro akutní zánětlivé poškození a autodigesci slinivky.",
  "Vyšetření jaterních enzymů": "Enzymy ALT a AST indikují hepatocelulární poškození, zatímco ALP a GGT jsou markery cholestázy a biliární obstrukce. Poměr AST/ALT pomáhá určit etiologii poškození jater.",
  "Vyšetření funkce nadledvinek": "Zahrnuje stanovení hladin kortizolu, aldosteronu, ACTH a vylučování metanefrinů močí. Využívá se k diagnostice Addisonovy choroby, Cushingova syndromu a feochromocytomu.",
  "Vyšetření hemostázy - obecná charakteristika": "Hodnocení hemostázy zahrnuje testy primární hemostázy (počet destiček, krvácivost) a sekundární hemostázy (APTT, PT/INR, fibrinogen). Slouží k diagnostice krvácivých i trombofilních stavů.",
  "Vyšetření funkce glomerulů": "Glomerulární funkce se hodnotí pomocí stanovení glomerulární filtrace (clearance kreatininu) a měření proteinurie. Pomáhá detekovat časné stádium chronického selhání ledvin.",
  "Laboratorní markery ikteru a cholestázy": "Stanovení frakcí bilirubinu (přímý vs. nepřímý) odlišuje prehepatální, hepatocelulární a posthepatální žloutenku. Zvýšení ALP a GGT specificky detekuje přítomnost cholestázy.",
  "Vyšetření aktivity neuronů. EEG": "Elektroencefalografie snímá kolísání elektrických potenciálů mozku pomocí elektrod na skalpu. Slouží především k diagnostice epilepsií a posouzení hloubky kómatu.",
  "Spirometrie - obecná charakteristika a principy": "Spirometrie měří objemy a rychlosti průtoku vzduchu při úsilných dýchacích manévrech. Je základní metodou pro diagnostiku a klasifikaci ventilačních poruch plic.",
  "Předtransfúzní vyšetření": "Předtransfúzní vyšetření zahrnuje kontrolu krevní skupiny dárce i příjemce a provedení křížové zkoušky. Zamezuje rozvoji akutní hemolytické reakce po podání inkompatibilní krve.",
  "Vyšetření iontogramu": "Měření koncentrací sodíku, draslíku, chlóru a vápníku v séru je klíčové pro udržení homeostázy vnitřního prostředí. Změny hladiny draslíku mohou fatálně ovlivnit elektrickou aktivitu srdce.",
  "Kolonoskopie": "Kolonoskopie umožňuje přímou vizualizaci sliznice celého tlustého střeva a odběr bioptických vzorků. Je zásadní metodou screeningu kolorektálního karcinomu a zánětlivých onemocnění střev.",
  "Vyšetření funkce tubulů": "Funkce tubulů se hodnotí testy koncentrační a acidifikační schopnosti ledvin. Detekuje specifické vrozené tubulopatie a toxické poškození ledvinné dřeně.",
  "Koronarografie": "Koronarografie je invazivní rentgenové vyšetření věnčitých tepen srdce s využitím kontrastní látky zavedené katetrem. Slouží k průkazu a řešení stenóz u ischemické choroby srdeční.",
  "Vyšetření intrakraniálního tlaku. Funkce hlavových nervů": "Kontrola intrakraniálního tlaku (ICP) je zásadní u těžkých úrazů hlavy pro prevenci mozkové herniace. Vyšetření hlavových nervů pak odhaluje lokalizovaná ložisková poškození mozkového kmene.",
  "Vyšetření funkce hypofýzy": "Diagnostika se opírá o stanovení hladin periferních a tropních hormonů v krvi a funkční dynamické testy. Hodnotí stavy spojené s hypersekrecí nebo hypofunkcí hypofýzy.",
  "Posouzení stavu vědomí (kvantitativně, kvalitativně) - základní skórovací systémy": "Kvantitativní stav vědomí hodnotí hloubku kómatu pomocí Glasgow Coma Scale (GCS) na základě reakcí pacienta. Kvalitativní vyšetření odhaluje dezorientaci a rozvoj akutního deliria.",
  "Vyšetření krevního tlaku - primární hypertenze": "Měření krevního tlaku v ordinaci v kombinaci s 24hodinovým ambulantním monitoringem (AMTK) potvrzuje diagnózu esenciální hypertenze. Slouží k vyloučení fenoménu bílého pláště.",
  "Proteiny akutní fáze": "Koncentrace těchto proteinů (např. CRP, fibrinogen) v plazmě stoupá v reakci na zánětlivý proces. Slouží jako citlivé indikátory bakteriální infekce a tkáňového poškození.",
  "Zátěžová vyšetření kardiorespiračního systému": "Zahrnují ergometrii a spiroergometrii, které hodnotí reakci srdce a plic na řízenou fyzickou zátěž. Pomáhají odhalit latentní ischemii myokardu a určit funkční kapacitu.",
  "Bronchoskopie": "Bronchoskopie je endoskopická metoda umožňující přímou vizualizaci tracheobronchiálního stromu. Slouží k odběru bioptických vzorků, laváži a odstraňování cizích těles z dýchacích cest.",
  "Ischemie - etiopatogeneze, změny na orgánové úrovni (myokard, CNS, ledviny, GIT, končetiny)": "Ischemie je stav nedostatečného prokrvení tkáně vedoucí k hypoxii a nedostatku živin. Vyvolává rychlé selhání buněčného metabolismu, depleci ATP a riziko infarktu postižení tkáně.",
  "Vyšetření parametrů plicní restrikce": "K potvrzení plicní restrikce je nutné stanovit celkovou plicní kapacitu (TLC) pomocí bodypletysmografie. Odlišuje restrikční plicní procesy od obstrukčních onemocnění.",
  "Gastroskopie": "Gastroskopie je optické endoskopické vyšetření jícnu, žaludku a dvanáctníku. Umožňuje přímou diagnostiku zánětů, peptických vředů a odběr vzorků na Helicobacter pylori.",
  "Základní vyšetření reprodukčního systému": "U mužů hodnotí spermiogram kvalitu a počet spermií. U žen vyšetření sleduje hladiny pohlavních hormonů a funkční celistvost hypotalamo-hypofyzárně-ovariální osy.",
  "Laboratorní markery hemolýzy": "Typickými nálezy jsou pokles haptoglobinu v séru, zvýšení nekonjugovaného bilirubinu a vzestup laktátdehydrogenázy (LDH). Tyto parametry odrážejí zvýšený rozpad erytrocytů.",
  "Vyšetření bílé krevní řady": "Hodnotí celkový počet bílých krvinek (leukocytů) a jejich diferenciální rozpočet. Pomáhá rozlišit bakteriální infekci (neutrofilie) od virové (lymfocytóza) a leukémie.",
  "Vyšetření funkce štítné žlázy a příštítných tělísek": "Funkce štítné žlázy se screenuje pomocí stanovení TSH a volného $fT_4$. U příštítných tělísek se stanovují hladiny parathormonu (PTH), ionizovaného vápníku a fosfátů.",
  "Laboratorní markery rhabdomyolýzy": "Rozpad svalových buněk se laboratorně prokazuje extrémním zvýšením kreatinkinázy (CK) a myoglobinu v krvi. Volný myoglobin navíc přímo ohrožuje tubuly ledvin.",
  "Srdeční katetrizace, vyšetření krevního tlaku v jednotlivých srdečních oddílech": "Invazivní měření tlaků v srdečních dutinách a plicním oběhu poskytuje přesné informace o hemodynamice. Je nepostradatelné pro diagnostiku zkratů a chlopenních vad."
};

// Spojení všech praktických témat dohromady do SPECIAL_PRACTICAL_DETAILS
function buildPracticalDetails() {
  const details = { ...PRACTICAL_DETAILS };
  
  PRACTICAL_LIST_EXTENDED.forEach((title, idx) => {
    const key = `pract-${idx + 11}`; // Začíná od 11, protože 1-10 jsou definovány staticky
    const summaryText = REMAINING_SUMMARIES[title] || "Tento klinický test a vyšetření hodnotí funkční parametry a diagnostikuje patologické stavy. Poskytuje podrobné informace pro správnou rozvahu.";
    
    details[key] = {
      summary: summaryText,
      keyTerms: [title.split(" - ")[0], "Klinický význam", "Interpretace"],
      quiz: [
        {
          question: `Jaký je klinický a patofyziologický význam vyšetření "${title}"?`,
          options: [
            "Slouží jako primární kosmetický test bez vazby na vnitřní orgány",
            "Umožňuje detekci odchylek od fyziologického stavu, zhodnocení závažnosti a monitorování progrese onemocnění",
            "Měří výhradně rychlost růstu vlasů a nehtů",
            "Způsobuje okamžitý pokles hladiny glukózy u všech vyšetřovaných jedinců"
          ],
          correct: 1,
          explanations: [
            "Nesprávně. Jedná se o medicínsky významné vyšetření.",
            "Správně! Vyšetření slouží k posouzení funkční zdatnosti, určení diagnózy a sledování léčebné odpovědi pacienta.",
            "Nesprávně. S růstem vlasů nesouvisí.",
            "Nesprávně. Vyšetření hladinu glukózy takto neovlivňuje."
          ]
        }
      ]
    };
  });

  return details;
}

const ALL_PRACTICAL_DETAILS = buildPracticalDetails();

// Funkce pro doplnění detailů praktických otázek do COMPLETE_QUESTIONS
function mergePracticalDetails() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Praktická") {
      const rich = ALL_PRACTICAL_DETAILS[q.id];
      if (rich) {
        const keywords = rich.keyTerms;
        const system = q.organSystem;
        
        q.keyTerms = keywords;
        
        // Sestavíme bohatý text výkladu s dvou-větným tučným shrnutím na konci
        q.detailContent = `
          <div class="medical-detail">
            <section>
              <h3>1. Klinický význam vyšetření</h3>
              <p>Téma <strong>${q.title}</strong> představuje důležité praktické vyšetření v patofyziologii. Patří do skupiny <em>${system}</em>. Vyšetření se využívá k diagnostice, diferenciální diagnostice a sledování úspěšnosti léčby u řady onemocnění.</p>
            </section>
            
            <section>
              <h3>2. Patofyziologická interpretace výsledků</h3>
              <p>Při hodnocení se zaměřujeme na:</p>
              <ul>
                <li><strong>Zvýšení hodnot:</strong> Značí např. hyperaktivitu orgánu, obstrukci odtoku, zánětlivou reakci nebo sníženou clearance ledvinami.</li>
                <li><strong>Snížení hodnot:</strong> Značí hypofunkci, sníženou produkci, zvýšené ztráty z organismu nebo buněčné vyčerpání.</li>
                <li><strong>Kompenzační reakce:</strong> Jak se organismus snaží vyrovnat se změnami vnitřního prostředí.</li>
              </ul>
            </section>

            <section class="summary-box-practical">
              <h4>Klíčové shrnutí tématu</h4>
              <p><strong>${rich.summary}</strong></p>
            </section>
          </div>
        `;
        
        q.quiz = rich.quiz;
      }
    }
  });
}

mergePracticalDetails();
window.PRACTICAL_DETAILS = ALL_PRACTICAL_DETAILS;
