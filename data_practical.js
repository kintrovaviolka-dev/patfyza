// data_practical.js - Podrobné popisy, kvízy a 2-větná shrnutí pro Praktická témata (50 otázek)

const PRACTICAL_DETAILS = {
  "pract-1": {
    summary: "Vyšetření červené krevní řady je základní laboratorní metodou sloužící k hodnocení počtu, velikosti a hemoglobinové výbavy erytrocytů. Umožňuje rychlou diferenciální diagnostiku anémií a polycytémií pomocí parametrů jako hemoglobin, hematokrit, MCV, MCH a RDW.",
    keyTerms: ["Hemoglobin", "Hematokrit", "Erytrocyty", "MCV (střední objem)", "MCH", "RDW"],
    richContent: {
      significance: "Kvantitativní a kvalitativní zhodnocení červených krvinek. Slouží jako základní screeningové vyšetření v hematologii z nesrážlivé krve (EDTA).",
      high: "Polycytemia vera (primární myeloproliferace), sekundární erytrocytóza (chronická hypoxie u CHOPN, pravolevé srdeční zkraty, nebo nadprodukce EPO u nádorů ledvin) a relativní polycytémie (dehydratace).",
      low: "Anémie různých etiopatogenických skupin (mikrocytární sideropenická z nedostatku železa, makrocytární megaloblastová z nedostatku B12/folátu, normocytární anémie chronických chorob či aplastická anémie z útlumu kostní dřeně).",
      method: "Automatické analyzátory na principu impedančního měření (objem buněk) a průtokové cytometrie (optický rozptyl). Hemoglobin je stanoven spektrofotometricky po lyzi buněk."
    },
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
    richContent: {
      significance: "Analýza mozkomíšního moku odebraného lumbální punkcí (nejčastěji v prostoru L3/L4 nebo L4/L5) k diagnostice infekčních, autoimunitních a degenerativních patologií CNS.",
      high: "Zvýšená proteinrachie (zánět, poškození hematoencefalické bariéry), pleocytóza (polymorfonukleáry u bakteriální, lymfocyty u virové/TBC meningitidy) a vzestup laktátu (> 2.5 mmol/l u bakteriální infekce).",
      low: "Pokles glukorachie pod 40 % aktuální sérové glykémie (typické pro bakteriální a tuberkulózní meningitidy, protože patogeny glukózu spotřebovávají).",
      method: "Spektrofotometrické měření bílkovin, mikroskopická cytologie (Fuchs-Rosenthalova komůrka), kultivace a PCR pro průkaz patogenů."
    },
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
    richContent: {
      significance: "Diferenciální diagnostika nahromaděné tekutiny v pleurální, perikardiální či peritoneální dutině (ascites) k určení systémové (transsudát) nebo lokální (exsudát) příčiny.",
      high: "Exsudát (protein > 30 g/l, poměr k séru > 0.5, LDH > 200 U/l): záněty (pneumonie, tbc), nádorové metastázy, plicní infarkt.",
      low: "Transsudát (protein < 30 g/l, poměr k séru < 0.5, nízké LDH): levostranné srdeční selhání (venostáza), jaterní cirhóza (portální hypertenze, hypoalbuminémie) a nefrotický syndrom.",
      method: "Biochemická analýza bodové tekutiny a paralelní odběr krve pro porovnání poměrů (Lightova kritéria)."
    },
    quiz: [
      {
        question: "Který z následujících parametrů spolehlivě definuje exsudát?",
        options: [
          "Nízký obsah bílkovin pod 20 g/l a nízké LDH",
          "Vysoký obsah bílkovin (> 30 g/l), poměr bílkovin k séru > 0.5 a vysoké LDH",
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
    richContent: {
      significance: "Identifikace specifického, potenciálně léčitelného organického onemocnění, které způsobuje hypertenzi (např. stenóza renální tepny, Connův syndrom, feochromocytom).",
      high: "Vysoký aldosteron a nízký renin (Connův syndrom), vysoké metanefriny v moči (feochromocytom), tlakový rozdíl mezi HK a DK (koarktace aorty).",
      low: "Nízká kalémie v séru (indukovaná aldosteronem, který zvyšuje vylučování K+ ledvinami).",
      method: "24hodinový ambulantní monitoring krevního tlaku (AMTK), biochemický screening hormonů, duplexní sonografie ledvinných tepen."
    },
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
    richContent: {
      significance: "Průkaz přítomnosti zánětlivé reakce, rozlišení etiologie (bakteriální vs. virová) a sledování dynamiky zánětu při léčbě.",
      high: "CRP stoupá nad 50-100 mg/l u bakteriálního zánětu (více než u virového), prokalcitonin stoupá u systémové bakteriální infekce (sepse). FW stoupá u chronických zánětů a monoklonálních gamapatií.",
      low: "Pokles zánětlivých markerů spolehlivě odráží úspěšnou antimikrobiální či imunosupresivní terapii.",
      method: "Imunochemická analýza CRP z krevního séra. Sedimentace měřená výškou sloupce plazmy za 1 a 2 hodiny (Westergren)."
    },
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
    richContent: {
      significance: "Funkční vyšetření koagulační kaskády, sledování pacientů léčených perorálními (Warfarin) či injekčními (Heparin) antikoagulancii a screening předoperačního krvácení.",
      high: "Prodloužení APTT (hemofilie A/B, přítomnost heparinu), prodloužení Quick/INR (deficit vit. K, léčba Warfarinem, těžké poškození jater).",
      low: "Pokles fibrinogenu pod 1.5 g/l (spotřebování při diseminované intravaskulární koagulaci - DIC, těžké jaterní selhání).",
      method: "Optické detektory měřící čas koagulace plazmy po přidání tkáňového tromboplastinu a kalcia (Quick) nebo kaolinu a cefalinu (APTT)."
    },
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
    summary: "Vyšetření acidobazické rovnováhy stanovuje pH krve, parciální tlaky CO2 a O2 a koncentraci hydrogenuhličitanů. Laktát slouží jako klíčový indikátor tkáňové hypoxie a anaerobního metabolismu při šoku.",
    keyTerms: ["pH krve", "pCO2", "Bikarbonáty (HCO3-)", "Base Excess (BE)", "Laktátová acidóza", "Aniontová mezera (Anion Gap)"],
    richContent: {
      significance: "Zhodnocení vnitřního prostředí, respiračních funkcí a metabolického stavu pacienta z kapilární nebo arteriální krve.",
      high: "Vysoký laktát (> 2.0 mmol/l) indikuje anaerobní metabolismus (sepse, šok, těžká hypoxie). Vysoké pCO2 (respirační acidóza u hypoventilace), vysoké HCO3- (metabolická alkalóza).",
      low: "Nízké pH (< 7.35) značí acidémii. Nízké HCO3- (metabolická acidóza, např. u ketoacidózy, laktátové acidózy). Nízké pCO2 (respirační alkalóza / kompenzační hyperventilace).",
      method: "Elektrochemický analyzátor krevních plynů (Astrup) měřící pH, pO2 a pCO2, ostatní parametry jsou dopočítány."
    },
    quiz: [
      {
        question: "Jak se patofyziologicky kompenzuje metabolická acidóza (např. při septickém šoku)?",
        options: [
          "Renální retencí oxidu uhličitého",
          "Hyperventilací k vydýchání oxidu uhličitého a poklesu pCO2",
          "Snížením srdeční frekvence",
          "Vylučováním bikarbonátu ledvinami"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ledviny CO2 nezadržují.",
          "Správně! Respirační kompenzace metabolické acidózy nastává stimulací chemoreceptorů poklesem pH. Zvýšená ventilace vede k hypokapnii (pCO2 < 4.8 kPa), což posouvá pH zpět k normě.",
          "Nesprávně. Frekvence se při šoku naopak zvyšuje.",
          "Nesprávně. Vylučování bikarbonátu by acidózu dále zhoršilo."
        ]
      }
    ]
  },
  "pract-8": {
    summary: "EKG analýza srdeční osy, intervalů a hypertrofie umožňuje odhalit patologie převodu vzruchu a remodelace myokardu. Změny v trvání vln a komplexů indikují blokády, zatímco vysoké kmity svědčí o hypertrofii srdečních stěn.",
    keyTerms: ["Elektrická osa srdeční", "Interval PQ", "Komplex QRS", "Interval QT", "Hypertrofie levé komory (Sokolow-Lyon)", "Raménkové blokády (RBBB/LBBB)"],
    richContent: {
      significance: "Analýza šíření elektrického vzruchu myokardem. Pomáhá odhalit poruchy vedení (blokády), rytmu (arytmie) a strukturální změny (hypertrofie komor).",
      high: "Prodloužení PQ intervalu > 200 ms (AV blok I. stupně), rozšíření QRS > 120 ms (raménková blokáda RBBB/LBBB), vysoký Sokolow-Lyonův index (hypertrofie levé komory), prodloužené QT (riziko torsade de pointes).",
      low: "Zkrácení PQ intervalu < 120 ms (přítomnost přídatné dráhy - preexcitace WPW).",
      method: "Elektrokardiografie snímaná 12 svody (I, II, III, aVR, aVL, aVF, V1-V6) při standardní rychlosti posunu papíru 25 mm/s."
    },
    quiz: [
      {
        question: "Které EKG kritérium je typické pro hypertrofii levé komory?",
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
        ],
        ekgConfig: {
          rhythmType: "sinus",
          heartRate: 60,
          voltageScaling: 1.6,
          hasArtifacts: false
        }
      }
    ]
  },
  "pract-9": {
    summary: "Vyšetření výměny krevních plynů a plicní difuze hodnotí účinnost přestupu kyslíku a oxidu uhličitého přes alveolo-kapilární membránu. Pomáhá odhalit poruchy difúze u intersticiálních plicních procesů a plicní fibrózy.",
    keyTerms: ["Difuzní kapacita plic (DLCO)", "Parciální tlak kyslíku (paO2)", "Alveolo-arteriální gradient (A-aDO2)", "Alveolo-kapilární membrána", "Hypoxémie", "Hyperkapnie"],
    richContent: {
      significance: "Zhodnocení přenosu plynů z alveolů do kapilární krve. Klíčové pro diferenciální diagnostiku dušnosti (intersticiální plicní procesy, emfyzém, cévní plicní patologie).",
      high: "Vysoký alveolo-arteriální gradient (A-aDO2) ukazuje na poruchu V/Q poměru nebo zkrat (shunt).",
      low: "Pokles difuzní kapacity plic (DLCO) pod 80 % normy (plicní fibróza, sarkoidóza, plicní emfyzém - destrukce alveolů). Pokles paO2 (hypoxémie).",
      method: "Měření difuze oxidu uhelnatého (DLCO) technikou jednoho dechu (single breath) s nízkou koncentrací CO."
    },
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
    richContent: {
      significance: "Rychlé, neinvazivní monitorování okysličení arteriální krve (saturace SpO2) v reálném čase u lůžka pacienta.",
      high: "Fyziologické hodnoty (95-100 %). Falešně normální/vysoké hodnoty (100 %) se objevují u těžké otravy oxidem uhelnatým (karboxyhemoglobin).",
      low: "Pokles saturace pod 90 % (hypoxémie vyvolaná respiračním selháním, plicní embolií, těžkým astmatickým záchvatem nebo ARDS).",
      method: "Spektrofotometrická sonda připevněná na prst či ušní lalůček měřící absorpci červeného (660 nm) a infračerveného (940 nm) světla."
    },
    quiz: [
      {
        question: "Jak ovlivní těžká otrava oxidem uhelnatým (CO) měření saturace běžným pulzním oxymetrem?",
        options: [
          "Oxymetr ukáže extrémně nízkou saturaci pod 50 %",
          "Oxymetr ukáže falešně vysokou saturaci (kolem 95-100 %), protože nedokáže odlišit karboxyhemoglobin od oxyhemoglobinu",
          "Přístroj přestane měřit",
          "Zvýší se tepová frekvence na displeji bez ovlivnění saturace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Přístroj nízkou saturaci neukáže.",
          "Správně! Běžné dvou-vlnové oxymetry měří absorpci při vlnových délkách 660 a 940 nm. Karboxyhemoglobin absorbuje světlo téměř stejně jako oxyhemoglobin, což vede k závažnému falešně pozitivnímu zkreslení.",
          "Nesprávně. Přístroj měří dál.",
          "Nesprávně. Tepová frekvence se měří na základě pulzací, ale klíčová chyba je v měřené saturaci."
        ]
      }
    ]
  },
  "pract-11": {
    summary: "Vyšetření plicní hypertenze a tlaku v zaklínění je klíčové pro rozlišení prekapilární a postkapilární hypertenze. Swan-Ganzův katetr měří tlaky v pravém srdci, plicnici a nepřímo v levé síni (PCWP).",
    keyTerms: ["Plicní hypertenze", "Swan-Ganzův katetr", "Tlak v zaklínění (PCWP)", "Pravostranná katetrizace", "Odpor plicního řečiště", "Cor pulmonale"],
    richContent: {
      significance: "Hemodynamické měření tlaku v plicní cirkulaci (pap) k určení příčiny plicní hypertenze a vyhodnocení tlaku v levé síni.",
      high: "Střední tlak v plicnici (mPAP) > 20 mmHg (definuje plicní hypertenzi). Tlak v zaklínění (PCWP) > 15 mmHg značí postkapilární plicní hypertenzi (např. městnavé levostranné srdeční selhání, mitrální stenóza).",
      low: "Normální nebo nízký PCWP (≤ 15 mmHg) při plicní hypertenzi ukazuje na prekapilární etiologii (např. plicní arteriální hypertenze, plicní embolie, CHOPN).",
      method: "Pravostranná srdeční katetrizace flexibilním Swan-Ganzovým katetrem zaváděným cestou velké žíly (v. jugularis, v. subclavia) přes pravé srdce do větve plicnice."
    },
    quiz: [
      {
        question: "Který parametr na EKG a hemodynamický nález odlišuje prekapilární plicní hypertenzi od postkapilární?",
        options: [
          "Tlak v zaklínění (PCWP) je u prekapilární hypertenze v normě (do 15 mmHg), zatímco u postkapilární je zvýšený (> 15 mmHg)",
          "U prekapilární hypertenze je tlak v zaklínění extrémně vysoký (> 30 mmHg)",
          "Vylučování sodíku močí je u prekapilární hypertenze desetinásobné",
          "Prekapilární hypertenzi charakterizuje přítomnost levostranného bloku"
        ],
        correct: 0,
        explanations: [
          "Správně! Prekapilární plicní hypertenze (např. u CHOPN či plicní embolie) má PCWP fyziologický (≤ 15 mmHg), protože levé srdce je zdravé. U postkapilární hypertenze je příčinou městnání z levého srdce, a proto PCWP stoupá.",
          "Nesprávně. U prekapilární hypertenze je PCWP normální.",
          "Nesprávně. Vylučování sodíku není hemodynamickým markerem plicní hypertenze.",
          "Nesprávně. Levostranný blok nesouvisí přímo s klasifikací plicní hypertenze."
        ]
      }
    ]
  },
  "pract-12": {
    summary: "Základní EKG rozbor křivky a topografie svodů určuje elektrickou aktivitu srdce v různých rovinách. Umožňuje přesnou lokalizaci ischemických změn a infarktu myokardu na základě specifických svodů.",
    keyTerms: ["12svodové EKG", "Přední stěna (V1-V4)", "Spodní stěna (II, III, aVF)", "Boční stěna (I, aVL, V5-V6)", "Pardeeho vlna", "STEMI vs. NSTEMI"],
    richContent: {
      significance: "Analýza elektrického pole srdce ve 12 svodech k lokalizaci patologických procesů (zejména ischemie myokardu).",
      high: "ST elevace (STEMI) nebo deprese (NSTEMI) ve specifických svodech: V1-V4 (přední stěna, uzávěr RIA), II, III, aVF (spodní stěna, uzávěr ACD), I, aVL, V5-V6 (laterální stěna, uzávěr RCx).",
      low: "Hluboké patologické Q (šířka > 0.04 s, hloubka > 25% R kmitu) značí proběhlou transmurální nekrózu (infarktovou jizvu).",
      method: "Elektrokardiografie snímající 3 bipolární končetinové svody (I, II, III), 3 unipolární končetinové (aVR, aVL, aVF) a 6 hrudních unipolárních svodů (V1-V6)."
    },
    quiz: [
      {
        question: "Uzávěr které koronární tepny typicky vede ke změnám (elevacím ST) ve svodech V1 až V4 na EKG?",
        options: [
          "Arteria coronaria dextra (ACD)",
          "Ramus circumflexus (RCx) arteriae coronariae sinistrae",
          "Ramus interventricularis anterior (RIA) arteriae coronariae sinistrae",
          "Arteria nodi sinuatrialis"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. ACD zásobuje spodní stěnu (II, III, aVF).",
          "Nesprávně. RCx zásobuje laterální stěnu (I, aVL, V5-V6).",
          "Správně! RIA (LAD - Left Anterior Descending) zásobuje přední stěnu levé komory a mezikomorové septum, což na EKG reprezentují hrudní svody V1-V4.",
          "Nesprávně. Tato arterie zásobuje sinusový uzel, nezpůsobuje infarkt přední stěny."
        ],
        ekgConfig: {
          rhythmType: "stemi",
          heartRate: 95,
          voltageScaling: 1.0,
          hasArtifacts: true
        }
      }
    ]
  },
  "pract-13": {
    summary: "Laboratorní markery poruchy jaterních funkcí hodnotí metabolickou, syntetickou a exkreční kapacitu jater. Zahrnují stanovení albuminu, žlučových kyselin, amoniaku a hemokoagulačních faktorů (Quick/INR).",
    keyTerms: ["Hypoalbuminémie", "Quickův test / INR", "Amoniak v séru", "Syntetická funkce jater", "Jaterní cirhóza", "Hepatální encefalopatie"],
    richContent: {
      significance: "Posouzení syntetické, metabolické a detoxikační kapacity jaterního parenchymu u chronického či akutního poškození.",
      high: "Prodloužení Quickova času (INR stoupá nad 1.5 při deficitu syntézy koagulačních faktorů), zvýšený amoniak v krvi (selhání detoxikace močovinového cyklu, riziko encefalopatie).",
      low: "Hypoalbuminémie (pokles syntézy albuminu pod 35 g/l u jaterní cirhózy, způsobuje pokles onkotického tlaku a vznik edémů/ascitu).",
      method: "Spektrofotometrická a biochemická analýza krve nalačno."
    },
    quiz: [
      {
        question: "Který laboratorní nález přímo ukazuje na selhání syntetické funkce jater u pacienta s cirhózou?",
        options: [
          "Extrémní zvýšení enzymu ALT v séru",
          "Prodloužení Quickova času (vzestup INR) a pokles hladiny albuminu v séru",
          "Zvýšená clearance kreatininu",
          "Pokles hladiny amoniaku v krvi"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. ALT je marker poškození buněk (nekrózy), nikoliv syntetické kapacity.",
          "Správně! Játra syntetizují albumin a většinu koagulačních faktorů. Pokles albuminu a prodloužení koagulačního času (vzestup INR) jsou přímými známkami selhávání jaterní proteosyntézy.",
          "Nesprávně. Clearance kreatininu hodnotí funkci ledvin.",
          "Nesprávně. Amoniak při selhání jater stoupá, nikoli klesá."
        ]
      }
    ]
  },
  "pract-14": {
    summary: "Laboratorní markery ischemie myokardu prokazují přítomnost nekrózy kardiomyocytů při infarktu. Zlatým standardem jsou kardiospecifické troponiny I a T měřené vysoce citlivými metodami (hsTn).",
    keyTerms: ["Kardiospecifický troponin I/T", "hsTn (high-sensitivity)", "CK-MB mass", "Nekróza kardiomyocytů", "Akutní infarkt myokardu", "Myoglobin"],
    richContent: {
      significance: "Průkaz akutní nekrózy srdečního svalu u pacientů s podezřením na akutní koronární syndrom.",
      high: "Vysoce citlivý troponin (hsTnI / hsTnT) nad referenční limit (99. percentil) stoupající do 3 hodin od začátku bolesti. CK-MB mass stoupá do 4-6 hodin a je užitečný pro průkaz reinfarktu. Myoglobin je časný, ale nespecifický marker.",
      low: "Normální nebo stabilní hladina troponinu vylučuje akutní infarkt myokardu (svědčí pro nestabilní anginu pectoris bez nekrózy).",
      method: "Imunochemické metody (ECLIA) využívající vysoce specifické monoklonální protilátek proti srdečním izoformám troponinu."
    },
    quiz: [
      {
        question: "Který z následujících markerů vykazuje nejvyšší kardiospecifitu a citlivost pro průkaz akutního infarktu myokardu?",
        options: [
          "Celková aktivita laktátdehydrogenázy (LDH)",
          "Kardiospecifické troponiny (TnI / TnT) měřené metodou hs-Troponin",
          "Aspartátaminotransferáza (AST)",
          "Myoglobin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. LDH stoupá pozdě a je přítomno v mnoha jiných tkáních (kosterní sval, erytrocyty).",
          "Správně! Troponiny I a T mají specifické srdeční izoformy. High-sensitivity (hs) metody detekují i minimální ložiskové poškození myokardu velmi rychle (do 2-3 hodin).",
          "Nesprávně. AST stoupá i u poškození jater a kosterního svalstva.",
          "Nesprávně. Myoglobin je sice rychlý, ale uvolňuje se i ze svalů při sebemenším traumatu (nízká specificita)."
        ]
      }
    ]
  },
  "pract-15": {
    summary: "Vyšetření parametrů bronchiální obstrukce hodnotí zúžení dýchacích cest při výdechu. Klíčovými spirometrickými parametry jsou FEV1, FVC a jejich vzájemný poměr (Tiffeneauův index).",
    keyTerms: ["FEV1 (úsilný výdech)", "FVC (vitální kapacita)", "Tiffeneauův index", "Bronchodilatační test", "Reverzibilita", "Air trapping"],
    richContent: {
      significance: "Diagnostika, stanovení závažnosti a sledování reverzibility bronchiální obstrukce (zúžení dýchacích cest, např. u astmatu a CHOPN).",
      high: "Zvýšení odporu dýchacích cest (R). Zvýšení reziduálního objemu (RV) z důvodu zadržování vzduchu (air trapping) v plicích.",
      low: "Pokles FEV1 a poměru FEV1/FVC (Tiffeneauova indexu) pod 70 % (definující znak obstrukce). Pokles PEF (špičkový průtok).",
      method: "Úsilná spirometrie s analýzou křivky průtok-objem a provedení bronchodilatačního testu (inhalace 400 ug salbutamolu)."
    },
    quiz: [
      {
        question: "Jak se změní Tiffeneauův index (FEV1/FVC) u pacienta s rozvinutým bronchiálním astmatem či CHOPN?",
        options: [
          "Stoupne nad 90 %",
          "Klesne pod 70 % (0.70)",
          "Zůstane nezměněn, protože se snižuje pouze reziduální objem",
          "Klesne na nulu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Zvýšený index je známkou restrikce, ne obstrukce.",
          "Správně! Bronchiální obstrukce selektivně zpomaluje rychlost výdechu (klesá FEV1), což vede k poklesu poměru FEV1/FVC pod hranici 70 %.",
          "Nesprávně. Poměr se výrazně mění, protože FEV1 klesá mnohem více než FVC.",
          "Nesprávně. Na nulu index klesnout nemůže, to by znamenalo nulový výdech."
        ]
      }
    ]
  },
  "pract-16": {
    summary: "Laboratorní vyšetření moči a hematurie rozlišuje glomerulární poškození od onemocnění močových cest. Průkaz dysmorfních erytrocytů a proteinurie svědčí pro poškození glomerulární membrány.",
    keyTerms: ["Hematurie", "Nativní močový sediment", "Dysmorfní erytrocyty", "Erytrocytární válce", "Proteinurie", "Urolitiáza"],
    richContent: {
      significance: "Diferenciální diagnostika hematurie (přítomnosti krve v moči) k určení, zda krev pochází z ledvinných glomerulů (nefrologická) nebo vývodných cest (urologická).",
      high: "Glomerulární hematurie (přítomnost > 80 % dysmorfních erytrocytů / akantocytů, erytrocytárních válců a proteinurie > 1 g/den u glomerulonefritid).",
      low: "Extraglomerulární hematurie (přítomnost isomorfních erytrocytů s normální morfologií a minimální proteinurií u urolitiázy, infekcí močových cest nebo nádorů).",
      method: "Semikvantitativní chemická analýza testovacím proužkem a mikroskopie čerstvého močového sedimentu (fázový kontrast)."
    },
    quiz: [
      {
        question: "Který z následujících mikroskopických nálezů v moči jednoznačně svědčí pro glomerulární (renální) původ hematurie?",
        options: [
          "Přítomnost isomorfních erytrocytů a krystalů oxalátu vápenatého",
          "Dysmorfní erytrocyty (akantocyty) a erytrocytární válce v močovém sedimentu",
          "Přítomnost pouze bílých krvinek (leukocyturie)",
          "Nález dlaždicových epitelií"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Izomorfní erytrocyty svědčí pro extraglomerulární původ (např. krvácení z močovodu u urolitiázy).",
          "Správně! Dysmorfní erytrocyty (poškozené průchodem přes glomerulární membránu) a erytrocytární válce (odlitky tubulů tvořené Tamm-Horsfallovým proteinem a zachycenými krvinkami) jsou patognomické pro glomerulární poškození (glomerulonefritidu).",
          "Nesprávně. Leukocyturie je známkou zánětu/infekce, nikoliv glomerulární hematurie.",
          "Nesprávně. Dlaždicové epitelie jsou běžná kontaminace zevního genitálu."
        ]
      }
    ]
  },
  "pract-17": {
    summary: "Echokardiografie je neinvazivní ultrazvukové vyšetření srdce k posouzení anatomie a funkce. Umožňuje měření ejekční frakce (EF), tloušťky stěn komor a diagnostiku chlopenních vad.",
    keyTerms: ["Transtorakální (TTE)", "Ejekční frakce (EF)", "Systolická dysfunkce", "Hypertrofie komor", "Dopplerovské měření", "Chlopenní vady"],
    richContent: {
      significance: "Zhodnocení srdeční anatomie, kinetiky stěn, chlopenního aparátu a systolické i diastolické funkce komor.",
      high: "Tloušťka stěn (hypertrofie levé komory u arteriální hypertenze či aortální stenózy), dilatace srdečních oddílů (u kardiomyopatií nebo zkratů).",
      low: "Pokles ejekční frakce levé komory (EF < 50 % u systolické dysfunkce při ischemické chorobě srdeční nebo dilatované kardiomyopatii).",
      method: "Využití ultrazvukové sondy v B-módu (morfologie) a Dopplerova jevu (rychlost a směr proudění krve přes chlopně)."
    },
    quiz: [
      {
        question: "Jaký echokardiografický nález je klíčový pro diagnostiku systolického srdečního selhání levé komory?",
        options: [
          "Zvýšení ejekční frakce nad 75 %",
          "Snížení ejekční frakce levé komory (EF LK) pod 40-50 %",
          "Přítomnost tekutiny v pleurální dutině",
          "Zúžení lumina krčních tepen"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Zvýšená EF se u selhání nevyskytuje.",
          "Správně! Ejekční frakce vyjadřuje poměr tepového objemu k objemu komory na konci diastoly. Pokles pod 40 % je definičním znakem srdečního selhání se sníženou ejekční frakcí (HFrEF).",
          "Nesprávně. Fluidotorax je sice komplikací selhání, ale nejedná se o echokardiografický parametr srdce.",
          "Nesprávně. Krční tepny nejsou předmětem srdeční echokardiografie."
        ]
      }
    ]
  },
  "pract-18": {
    summary: "Laboratorní markery akutního renálního poškození detekují náhlý pokles renálních funkcí. Vedle klasického sérového kreatininu a urey se prosazují časné strukturální markery jako NGAL či KIM-1.",
    keyTerms: ["Sérový kreatinin", "Urea v séru", "NGAL", "KIM-1", "Oligurie", "Clearance kreatininu"],
    richContent: {
      significance: "Časný průkaz náhlého zhoršení funkce ledvin (AKI) pro včasné zahájení terapie a prevenci rozvoje chronického selhání.",
      high: "Vzestup sérového kreatininu (podle kritérií KDIGO o > 26 umol/l během 48 hodin), urea v séru, vzestup draslíku (hyperkalémie). Časný tubulární marker NGAL stoupá v moči do 2 hodin od poškození.",
      low: "Oligurie (moč < 0.5 ml/kg/h po dobu více než 6 hodin) až anurie u těžkého poškození.",
      method: "Enzymatické či kolorimetrické měření kreatininu (Jaffé) a imunoanalýza pro specifické proteiny (NGAL, KIM-1)."
    },
    quiz: [
      {
        question: "Proč je NGAL (Neutrophil Gelatinase-Associated Lipocalin) považován za lepší marker časného AKI než běžný sérový kreatinin?",
        options: [
          "Kreatinin se uvolňuje pouze ze svalů při těžkém cvičení",
          "Kreatinin stoupá se zpožděním 24-48 hodin po poškození, zatímco NGAL stoupá v moči již do 2 hodin po tubulárním inzultu",
          "NGAL měří exkreční funkci glomerulů přímo",
          "NGAL klesá na nulu u zdravých lidí"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Kreatinin se uvolňuje ze svalů konstantně a odráží GFR, nikoliv pouze cvičení.",
          "Správně! Kreatinin je funkční marker a stoupá, až když je zničena velká část nefronů (se zpožděním). NGAL je strukturální biomarker poškození tubulů a stoupá okamžitě po ischemickém či toxickém inzultu.",
          "Nesprávně. NGAL je tubulární marker poškození, ne glomerulární filtrace.",
          "Nesprávně. NGAL má nízkou bazální hodnotu, ale na nulu neklesá."
        ]
      }
    ]
  },
  "pract-19": {
    summary: "Laboratorní markery diabetes mellitus prokazují chronickou hyperglykémii a hodnotí metabolickou kompenzaci. Diagnostika stojí na glykémii nalačno, orálním glukózovém tolerančním testu (oGTT) a glykovaném hemoglobinu.",
    keyTerms: ["Glykémie nalačno", "oGTT (toleranční test)", "Glykovaný hemoglobin (HbA1c)", "Inzulínová rezistence", "Glykosurie", "C-peptid"],
    richContent: {
      significance: "Diagnostika diabetes mellitus, monitorování dlouhodobé kompenzace a odlišení absolutního (DM1) a relativního (DM2) nedostatku inzulínu.",
      high: "Glykémie nalačno ≥ 7.0 mmol/l, glykovaný hemoglobin (HbA1c) > 48 mmol/mol (dlouhodobá kompenzace za 2-3 měsíce), glykosurie a ketonurie (ketoacidóza). C-peptid je vysoký u inzulínové rezistence (DM2).",
      low: "Hypoglykémie (< 3.9 mmol/l), nízký C-peptid (absolutní deficit inzulínu u DM1 nebo vyčerpání beta-buněk).",
      method: "Enzymatické stanovení glukózy z venózní plazmy. HbA1c stanovený vysokoúčinnou kapalinovou chromatografií (HPLC)."
    },
    quiz: [
      {
        question: "Jaký význam má stanovení glykovaného hemoglobinu (HbA1c) v péči o diabetika?",
        options: [
          "Ukazuje okamžitou hladinu glukózy v čase odběru krve",
          "Odráží průměrnou koncentraci glukózy v krvi za poslední 2 až 3 měsíce (odpovídá životnosti erytrocytu)",
          "Diagnostikuje přítomnost ketolátek v moči",
          "Měří množství vylučovaného inzulínu slinivkou"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Okamžitou hladinu ukazuje glykémie.",
          "Správně! Glukóza se neenzymaticky a nevratně váže na hemoglobin (glykace). Protože erytrocyty žijí cca 120 dní, hladina HbA1c dává retrospektivní přehled o kompenzaci diabetu za toto období.",
          "Nesprávně. Ketolátky se v krvi/moči stanovují chemicky.",
          "Nesprávně. Inzulínovou sekreci odráží stanovení C-peptidu."
        ]
      }
    ]
  },
  "pract-20": {
    summary: "EKG posouzení srdeční frekvence a rytmu hodnotí pravidelnost akce a případný vznik arytmií. Rychlost a pravidelnost se vypočítává z intervalů R-R na EKG křivce.",
    keyTerms: ["Srdeční frekvence", "Sinusový rytmus", "Interval R-R", "Fibrilace síní", "Tachykardie vs. Bradykardie", "Vlna P"],
    richContent: {
      significance: "Identifikace aktivity hlavního pacemakeru (sinusový rytmus) a odhalení tachyarytmií či bradyarytmií.",
      high: "Tachykardie (frekvence > 100/min). Nepravidelnost R-R intervalů bez přítomnosti vln P (typické pro fibrilaci síní s nepravidelným převodem na komory).",
      low: "Bradykardie (frekvence < 50-60/min u sinusové bradykardie, junkčního rytmu či AV blokád II. a III. stupně).",
      method: "Výpočet frekvence: při rychlosti posunu 25 mm/s vydělíme číslo 300 počtem velkých čtverců (5 mm) mezi dvěma kmity R."
    },
    quiz: [
      {
        question: "Jak se na EKG křivce diagnosticky projevuje fibrilace síní?",
        options: [
          "Pravidelnými QRS komplexy s velmi vysokou vlnou P",
          "Úplným vymizením vln P, přítomností fibrilačních vln (f) a zcela nepravidelnými intervaly R-R (absolutní arytmie komor)",
          "Rozšířením QRS komplexu na více než 200 ms",
          "Obrácením polarity všech kmitů"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U fibrilace síní jsou vlny P nahrazeny chaotickou aktivitou.",
          "Správně! Síňová depolarizace je chaotická (chybí P vlna, vidíme jen drobné f vlnky). AV uzel propouští impulsy nepravidelně, což vyvolá nepravidelný rytmus komor (QRS jsou úzké, ale intervaly R-R jsou zcela chaotické).",
          "Nesprávně. Široký QRS svědčí pro raménkovou blokádu nebo komorový původ vzruchu.",
          "Nesprávně. Polarita kmitů závisí na elektrické ose, ne na fibrilaci síní."
        ],
        ekgConfig: {
          rhythmType: "atrial_fibrillation",
          heartRate: 130,
          voltageScaling: 0.9,
          hasArtifacts: false
        }
      }
    ]
  },
  "pract-21": {
    summary: "Vyšetření krevních destiček hodnotí jejich počet a funkční způsobilost k zamezení krvácení. Umožňuje diagnostikovat poruchy primární hemostázy (trombocytopenie, trombocytopatie).",
    keyTerms: ["Trombocyty", "Trombocytopenie", "Trombocytóza", "Agregometrie", "Primární hemostáza", "Krvácivost"],
    richContent: {
      significance: "Hodnocení kvality a kvantity krevních destiček, které tvoří primární destičkovou zátku (bílý trombus) při poškození cévní stěny.",
      high: "Trombocytóza (> 450x10^9/l): reaktivní (zánět, pooperační stavy, deficit železa) nebo klonální u esenciální trombocytémie (riziko arteriální a venózní trombózy).",
      low: "Trombocytopenie (< 150x10^9/l): snížená produkce (útlum dřeně), zvýšený zánik (imunitní ITP) či zvýšená spotřeba (DIC, HUS). Hrozí spontánní krvácení pod 20x10^9/l.",
      method: "Automatický krevní obraz z EDTA krve. Funkční agregometrie destiček po přidání ADP, kolagenu či epinefrinu."
    },
    quiz: [
      {
        question: "U jaké hodnoty počtu krevních destiček se výrazně zvyšuje riziko závažného spontánního krvácení?",
        options: [
          "Pod 150 x 10^9/l",
          "Pod 20 x 10^9/l",
          "Nad 450 x 10^9/l",
          "Kolem 100 x 10^9/l"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Pod 150 je to lehká trombocytopenie, krvácení hrozí až při úrazech.",
          "Správně! Hranice 20 x 10^9/l (20 000/ul) je považována za kritickou zónu, kdy hrozí spontánní krvácení do sliznic, kůže a fatální krvácení do CNS.",
          "Nesprávně. Zvýšený počet nad 450 zvyšuje riziko trombózy, ne krvácení.",
          "Nesprávně. Kolem 100 je bezpečná hladina pro běžný život."
        ]
      }
    ]
  },
  "pract-22": {
    summary: "Laboratorní markery akutní pankreatitidy jsou klíčové pro průkaz enzymatické nekrózy slinivky. Diagnostika se opírá o stanovení amylázy v moči a specifičtější sérové lipázy.",
    keyTerms: ["Amyláza v séru / moči", "Lipáza v séru", "Autodigese pankreatu", "Nekrotizující pankreatitida", "Akutní břicho", "Kalcium"],
    richContent: {
      significance: "Průkaz akutního poškození a autolýzy exokrinního parenchymu pankreatu.",
      high: "Vzestup sérové amylázy a zejména lipázy na více než trojnásobek horního limitu normy. Zánětlivé markery (CRP, leukocytóza).",
      low: "Pokles vápníku v séru (hypokalcémie vyvolaná vychytáváním Ca2+ v ložiscích tukové nekrózy - zmýdelnatění), což je nepříznivý prognostický znak.",
      method: "Kinetická fotometrie stanovující aktivitu enzymů v séru a ranní moči."
    },
    quiz: [
      {
        question: "Proč je stanovení sérové lipázy lepším markerem akutní pankreatitidy než stanovení amylázy?",
        options: [
          "Lipáza stoupá pouze u mírných zánětů",
          "Lipáza je specifičtější pro pankreas (amylázu tvoří i slinné žlázy) a v séru zůstává zvýšená delší dobu (až 7-14 dní)",
          "Amyláza se v krvi nedá stanovit biochemicky",
          "Lipáza přímo ničí uremické toxiny"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Lipáza stoupá u všech závažných zánětů slinivky.",
          "Správně! Amyláza stoupá i u parotitidy (příušnice) a rychle mizí ledvinami. Lipáza je vysoce specifická pro slinivku břišní a její elevace přetrvává déle, což pomáhá při pozdním záchytu.",
          "Nesprávně. Amylázu stanovujeme běžně spektrofotometricky.",
          "Nesprávně. Lipáza je trávicí enzym a s uremickými toxiny nesouvisí."
        ]
      }
    ]
  },
  "pract-23": {
    summary: "Vyšetření jaterních enzymů odlišuje poškození hepatocytů od poruch odtoku žluči. Enzymy ALT a AST indikují buněčnou lýzu (cytolýzu), zatímco ALP a GGT značí cholestázu.",
    keyTerms: ["ALT (alaninaminotransferáza)", "AST", "ALP (alkalická fosfatáza)", "GGT", "Cytolytický syndrom", "Cholestatický syndrom"],
    richContent: {
      significance: "Diferenciální diagnostika jaterních chorob (hepatitidy, toxické léze, obstrukce žlučových cest).",
      high: "Vysoké ALT a AST (cytolytický syndrom u virové hepatitidy, toxické nekrózy např. paracetamolem či alkoholu). Vysoké ALP a GGT (cholestatický syndrom při obstrukci žlučovodů kamenem či nádorem).",
      low: "Nízké enzymové aktivity nemají přímou patologickou interpretaci.",
      method: "Kinetická fotometrická analýza aktivity enzymů ze séra za využití substrátových reakcí."
    },
    quiz: [
      {
        question: "Který jaterní enzym vykazuje nejvyšší specifitu pro poškození hepatocytů (hepatocelulární nekrózu)?",
        options: [
          "Alkalická fosfatáza (ALP)",
          "Alaninaminotransferáza (ALT)",
          "Gama-glutamyltransferáza (GGT)",
          "Laktátdehydrogenáza (LDH)"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. ALP stoupá při cholestáze nebo kostním obratu.",
          "Správně! ALT se nachází převážně v cytosolu hepatocytů, na rozdíl od AST, které má vysokou aktivitu i v myokardu a kosterním svalu. Výrazná elevace ALT specificky značí poškození jaterních buněk.",
          "Nesprávně. GGT je indukována např. alkoholem a je v mnoha orgánech.",
          "Nesprávně. LDH se nachází ve všech buňkách těla (nízká specificita)."
        ]
      }
    ]
  },
  "pract-24": {
    summary: "Vyšetření funkce nadledvinek stanovuje sekreci kortizolu, aldosteronu a katecholaminů. Využívá se k diagnostice hypo- i hyperfunkčních stavů kůry a dřeně nadledvin.",
    keyTerms: ["Kortizol", "Aldosteron", "Metanefriny v moči", "ACTH stimulace", "Supresní dexametazonový test", "Hypokalémie"],
    richContent: {
      significance: "Diagnostika endokrinních poruch spojených s nadprodukcí či nedostatkem hormonů nadledvin.",
      high: "Vysoký kortizol (Cushingův syndrom), vysoký aldosteron a nízký renin (primární hyperaldosteronismus), vysoké metanefriny v plazmě/moči (feochromocytom).",
      low: "Nízký kortizol a vysoké ACTH (Addisonova choroba - primární periferní deficit), nízký kortizol i ACTH (sekundární centrální deficit).",
      method: "Odběr krve na kortizol v 8:00 a 16:00 (hodnocení diurnálního rytmu). Dynamické testy (dexametazonový test, synacthenový test)."
    },
    quiz: [
      {
        question: "Jaký nález při synacthenovém (ACTH) stimulačním testu potvrdí Addisonovu chorobu (primární nedostatek nadledvin)?",
        options: [
          "Prudký vzestup kortizolu nad 500 nmol/l",
          "Plochá křivka – hladina kortizolu se po podání syntetického ACTH nezvýší, protože nadledvina je zničena",
          "Okamžitý pokles krevního tlaku na polovinu",
          "Vzestup hladiny inzulínu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Vzestup kortizolu je normální reakcí zdravých nadledvin.",
          "Správně! U primární adrenální insuficience (Addisonovy choroby) je kůra nadledvin destruována (např. autoimunitně). Podání stimulátoru (ACTH) nevyvolá žádnou sekreci kortizolu (plochá křivka).",
          "Nesprávně. Test neovlivňuje bezprostředně krevní tlak takovým způsobem.",
          "Nesprávně. ACTH stimuluje kůru nadledvin, nikoli beta-buňky pankreatu."
        ]
      }
    ]
  },
  "pract-25": {
    summary: "Vyšetření hemostázy podává ucelený přehled o primárním i sekundárním srážení. Zahrnuje screening počtu destiček, koagulačních časů (Quick, APTT) a fibrinolyzační aktivity (D-dimery).",
    keyTerms: ["Hemostáza", "Destičky", "Koagulační časy", "Fibrinolýza", "D-dimery", "Tromboelastografie"],
    richContent: {
      significance: "Komplexní posouzení rovnováhy mezi prokoagulačními a antikoagulačními faktory v krvi u krvácivých a trombofilních stavů.",
      high: "Zvýšení D-dimerů (probíhající trombóza a fibrinolýza), zkrácení koagulačních časů (trombofilní stavy, časná fáze DIC).",
      low: "Prodloužení časů (PT, APTT), pokles destiček, pokles fibrinogenu (konzumpční koagulopatie - pokročilá fáze DIC).",
      method: "Koagulační testy, tromboelastografie (TEG/ROTEM - viskoelastické vlastnosti celého srážení)."
    },
    quiz: [
      {
        question: "Co indikuje výrazně zvýšená hladina D-dimerů v plazmě pacienta?",
        options: [
          "Blokádu primární hemostázy destiček",
          "Probíhající degradaci polymerizovaného fibrinu plazminem (důkaz, že v těle vznikla sraženina a dochází k jejímu rozpouštění)",
          "Absolutní nedostatek vitaminu K",
          "Nadprodukci fibrinogenu bez jeho štěpení"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. D-dimery nesouvisí přímo s primární hemostázou.",
          "Správně! D-dimery jsou specifické degradační produkty zesíťovaného fibrinu. Jejich přítomnost dokazuje, že se aktivovala koagulační kaskáda (vznikl fibrinový trombus) a zároveň probíhá fibrinolýza (plazmin trombus štěpí). Využívá se k vyloučení hluboké žilní trombózy a plicní embolie.",
          "Nesprávně. Deficit vit. K prodlužuje Quickův čas, nezvyšuje D-dimery.",
          "Nesprávně. Pokud by nedocházelo ke štěpení, D-dimery by nevznikly."
        ]
      }
    ]
  },
  "pract-26": {
    summary: "Vyšetření funkce glomerulů měří filtrační kapacitu ledvin stanovením glomerulární filtrace (GFR). K tomu se využívá clearance endogenního kreatininu nebo přesnější stanovení cystatinu C.",
    keyTerms: ["Glomerulární filtrace (GFR)", "Clearance kreatininu", "Cystatin C", "Rovnice CKD-EPI", "Uremické toxiny", "Hyperfiltrace"],
    richContent: {
      significance: "Stanovení rychlosti glomerulární filtrace (GFR) k hodnocení funkčního stavu ledvin a zařazení chronického poškození do stádií (G1-G5).",
      high: "Glomerulární hyperfiltrace (časná fáze diabetické nefropatie v důsledku hyperperfuze, těhotenství, časné stádium arteriální hypertenze).",
      low: "Pokles GFR pod 1.5 ml/s (akutní poškození ledvin - AKI, progresivní úbytek nefronů u chronických nefropatií - CKD, hypoperfuze ledvin při šoku či těžké dehydrataci).",
      method: "Clearance kreatininu z moči sbírané za 24 hodin ($C = U \cdot V / P$), nebo odhad GFR ze sérového kreatininu a cystatinu C pomocí matematických rovnic (CKD-EPI)."
    },
    quiz: [
      {
        question: "Která z následujících metod poskytuje nejpřesnější odhad glomerulární filtrace (GFR) nezávisle na svalové hmotě pacienta?",
        options: [
          "Měření clearance kreatininu bez sběru moči",
          "Stanovení koncentrace cystatinu C v séru a výpočet eGFR",
          "Měření celkového vylučování urey močí",
          "Zvážení pacienta nalačno"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Kreatinin je produkt svalového metabolismu a jeho hladina závisí na svalové hmotě pacienta.",
          "Správně! Cystatin C je nízkomolekulární protein produkovaný konstantní rychlostí všemi jadernými buňkami těla. Jeho hladina v séru je nezávislá na svalové hmotě, stravě i pohlaví, což z něj činí ideální marker pro přesný odhad eGFR.",
          "Nesprávně. Urea je silně ovlivněna příjmem bílkovin a katabolismem, pro přesný odhad GFR se nepoužívá.",
          "Nesprávně. Hmotnost pacienta sama o sobě GFR neměří."
        ]
      }
    ]
  },
  "pract-27": {
    summary: "Laboratorní markery ikteru a cholestázy odlišují nekonjugovanou hyperbilirubinémii od obstrukčního městnání žluči. Stanovuje se bilirubin a enzymy ALP a GGT.",
    keyTerms: ["Konjugovaný bilirubin", "Nekonjugovaný bilirubin", "Cholestáza", "ALP a GGT", "Hemolytický ikterus", "Obstrukční ikterus"],
    richContent: {
      significance: "Diferenciální diagnostika žloutenek a průkaz poruchy tvorby či odtoku žluči.",
      high: "Nekonjugovaný bilirubin (prehepatální ikterus u hemolýzy). Konjugovaný bilirubin, ALP a GGT (posthepatální ikterus u mechanické obstrukce žlučovodů tumoru či litiázou, hepatocelulární poškození).",
      low: "Nízké hladiny bilirubinu nemají klinickou významnost.",
      method: "Fotometrické měření bilirubinu v séru chemickou reakcí s diazotovanou kyselinou sulfanilovou (Jendrassik-Grof)."
    },
    quiz: [
      {
        question: "Jaký laboratorní nález je charakteristický pro posthepatální (mechanický/obstrukční) ikterus?",
        options: [
          "Vysoký nekonjugovaný bilirubin, normální ALP a tmavá stolice",
          "Vysoký konjugovaný bilirubin v séru, bilirubinurie, acholická (světlá) stolice a výrazně zvýšené ALP a GGT",
          "Pokles bilirubinu pod detekovatelnou mez",
          "Zvýšení hemoglobinu v moči"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nekonjugovaný bilirubin stoupá u hemolýzy, stolice je tmavá (pleiochromní).",
          "Správně! Překážka brání odtoku žluči do střeva. Konjugovaný bilirubin se hromadí v játrech, uniká do krve a protože je rozpustný ve vodě, odchází do moči (bilirubinurie). Stolice je světlá (acholická), protože chybí stercobilin. ALP a GGT stoupají z důvodu podráždění epitelu žlučovodů.",
          "Nesprávně. Bilirubin naopak stoupá.",
          "Nesprávně. Hemoglobinurie svědčí pro intravaskulární hemolýzu."
        ]
      }
    ]
  },
  "pract-28": {
    summary: "Vyšetření aktivity neuronů pomocí EEG slouží k diagnostice epileptických záchvatů a závažných encefalopatií. Zaznamenává bioelektrické napěťové změny mozkové kůry pomocí skalpových elektrod.",
    keyTerms: ["Elektroencefalografie", "Alfa / Beta / Theta / Delta rytmy", "Epileptiformní aktivita (hroty)", "Kóma a encefalopatie", "Brain death (smrt mozku)"],
    richContent: {
      significance: "Snímání bioelektrické aktivity neuronů mozkové kůry k lokalizaci záchvatové aktivity a hodnocení difúzního poškození mozku.",
      high: "Přítomnost patologických vln pomalých rytmů (theta, delta u dospělých v bdělém stavu značí encefalopatii či strukturální léze). Hroty a komplexy hrot-vlna (epileptiformní výboje).",
      low: "Útlum aktivity, amplituda klesá pod 2 uV. Izoelektrická linie (plochá EKG/EEG křivka - splnění kritérií pro smrt mozku).",
      method: "Elektroencefalografie snímající signál z pokožky hlavy (skalpu) standardním zapojením 21 elektrod (systém 10-20)."
    },
    quiz: [
      {
        question: "Co na EEG vyšetření potvrzuje diagnózu smrti mozku u pacienta v hlubokém kómatu?",
        options: [
          "Převaha alfa rytmu v týlních svodech",
          "Izoelektrická linie (plochá křivka bez bioelektrické aktivity mozkové kůry trvající i při stimulaci)",
          "Přítomnost mnohočetných hrotů a vln o frekvenci 3 Hz",
          "Zvýšení napětí signálu nad 150 uV"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Alfa rytmus je normální pro bdělého, odpočívajícího člověka se zavřenýma očima.",
          "Správně! Smrt mozku je definována jako ireverzibilní ztráta všech mozkových funkcí včetně kmene. Absence jakékoliv elektrické aktivity kůry (elektrocerebrální ticho / izoelektrická čára) je klíčovým průkazem.",
          "Nesprávně. Hroty a vlny značí epileptiformní aktivitu, což dokazuje živý mozek.",
          "Nesprávně. Zvýšené napětí neindikuje smrt mozku."
        ]
      }
    ]
  },
  "pract-29": {
    summary: "Spirometrie je základní funkční vyšetření plic měřící objemy a průtoky vydechovaného vzduchu. Pomáhá spolehlivě rozlišit obstrukční ventilační poruchu od restrikční.",
    keyTerms: ["Vitální kapacita (FVC)", "Úsilný výdech (FEV1)", "Tiffeneauův index (FEV1/FVC)", "Křivka průtok-objem", "Spirometr"],
    richContent: {
      significance: "Objektivní posouzení funkční zdatnosti plicního parenchymu a průchodnosti dýchacích cest.",
      high: "Vyšší hodnoty plicních objemů u trénovaných sportovců.",
      low: "Pokles FVC pod 80 % (restrikce), pokles FEV1 a indexu FEV1/FVC pod 70 % (obstrukce). Pokles PEF (bronchospasmus).",
      method: "Pacient provede maximální nádech a následně úsilný rychlý exspirium do spirometru."
    },
    quiz: [
      {
        question: "Který spirometrický manévr a parametr je klíčový pro hodnocení úsilného výdechu a průchodnosti bronchů?",
        options: [
          "Měření dechového objemu při klidném dýchání",
          "FEV1 (objem vydechnutý za první sekundu úsilného výdechu po maximálním nádechu)",
          "Měření funkční reziduální kapacity heliovou metodou",
          "Měření maximálního nádechového tlaku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Klidné dýchání neodhalí latentní obstrukci.",
          "Správně! FEV1 (Forced Expiratory Volume in 1 second) je nejdůležitějším parametrem pro průkaz bronchiálního zúžení, protože ucpání cest brání rychlému vyfouknutí vzduchu.",
          "Nesprávně. Heliová metoda měří TLC, ne průchodnost bronchů.",
          "Nesprávně. Nádechový tlak hodnotí sílu svalů, ne obstrukci."
        ]
      }
    ]
  },
  "pract-30": {
    summary: "Předtransfúzní vyšetření zajišťuje imunologickou kompatibilitu mezi krví dárce a příjemce. Skládá se z ověření krevní skupiny, screeningu protilátek a provedení křížové zkoušky.",
    keyTerms: ["Křížová zkouška (crossmatch)", "Krevní skupina AB0 / Rh", "Aglutinace", "Hemolytická transfúzní reakce", "Příjemce vs. Dárce"],
    richContent: {
      significance: "Absolutní prevence rozvoje akutní imunitní hemolytické reakce (často fatální) po podání inkompatibilní krve.",
      high: "Pozitivní křížová zkouška (aglutinace / shlukování) znamená inkompatibilitu krví dárce a příjemce – krev se nesmí podat.",
      low: "Negativní reakce (aglutinace nenastane) – krev je kompatibilní a bezpečná k podání.",
      method: "Smíchání séra příjemce s erytrocyty dárce (křížová zkouška) a kontrola krevní skupiny AB0 a Rh u lůžka pacienta (Sanguitest)."
    },
    quiz: [
      {
        question: "Co je podstatou provedení 'křížové zkoušky' (crossmatch) před podáním krevní transfúze?",
        options: [
          "Smíchání erytrocytů příjemce se sérem dárce k ověření srážlivosti",
          "Smíchání séra příjemce s erytrocyty dárce k ověření, zda příjemce nemá v krvi hotové protilátky proti krvinkám dárce (riziko aglutinace)",
          "Pouhé chemické stanovení pH obou vzorků",
          "Měření počtu destiček v dárcovském vaku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Transfúzní reakci vyvolávají protilátky v těle příjemce proti podávaným erytrocytům, ne naopak.",
          "Správně! Hlavní křížový pokus testuje přítomnost nepravidelných aloprotilátek v séru příjemce. Pokud tyto protilátky existují, navážou se na erytrocyty dárce, vyvolají aglutinaci a po transfúzi by došlo k masivní intravaskulární hemolýze.",
          "Nesprávně. pH krve transfúzní kompatibilitu neurčuje.",
          "Nesprávně. Destičky se u křížové zkoušky erytrocytů netestují."
        ]
      }
    ]
  },
  "pract-31": {
    summary: "Vyšetření iontogramu stanovuje koncentraci klíčových elektrolytů v séru. Odchylky v hladinách sodíku a draslíku mohou vážně narušit hydrataci a elektrickou stabilitu myokardu.",
    keyTerms: ["Hyponatrémie / Hypernatrémie", "Hypokalémie / Hyperkalémie", "Draslík (K+)", "Sodík (Na+)", "Srdeční arytmie", "Vnitřní prostředí"],
    richContent: {
      significance: "Sledování osmolarity, hydratace a membránových excitabilních potenciálů (srdce, nervy) stanovením hladiny sodíku, draslíku, chloridů a vápníku.",
      high: "Hyperkalémie > 5.2 mmol/l (renální selhání, metabolická acidóza - riziko zástavy v diastole), hypernatrémie > 145 mmol/l (dehydratace, hyperosmolarita), hyperkalcémie (riziko zkrácení QT).",
      low: "Hypokalémie < 3.5 mmol/l (diuretika, zvracení - riziko maligních arytmií, ploché T), hyponatrémie < 135 mmol/l (převodnění, edém mozku).",
      method: "Iontově selektivní elektrody (ISE) měřící elektrický potenciál iontů v krevním séru."
    },
    quiz: [
      {
        question: "Jaký patofyziologický účinek a EKG projev má závažná hyperkalémie (> 6.5 mmol/l)?",
        options: [
          "Zvyšuje klidový membránový potenciál (depolarizuje buňky) a na EKG se projeví vysokými hrotitými vlnami T a rozšířením komplexu QRS s rizikem fibrilace komor",
          "Snižuje klidový membránový potenciál (hyperpolarizuje) a na EKG vyvolá depresi ST a vznik vlny U",
          "Urychluje srdeční frekvenci na 200/min bez vlivu na tvar vln",
          "Vyvolá okamžitý spasmus krčních tepen"
        ],
        correct: 0,
        explanations: [
          "Správně! Draslík určuje klidový membránový potenciál ($E_k$). Při vysoké extracelulární koncentraci se potenciál stává pozitivnějším (buňky se depolarizují), což zpomaluje vedení a narušuje repolarizaci (vysoké T, široké QRS, ztráta P). Hrozí komorová fibrilace a asystolie.",
          "Nesprávně. Hyperpolarizaci a vlnu U vyvolává hypokalémie.",
          "Nesprávně. Hyperkalémie srdeční frekvenci spíše tlumí a prodlužuje vedení.",
          "Nesprávně. Hyperkalémie nepůsobí spasmus krčních tepen."
        ]
      }
    ]
  },
  "pract-32": {
    summary: "Kolonoskopie je endoskopická metoda k přímé vizualizaci tlustého střeva. Slouží k screeningu kolorektálního karcinomu a diagnostice nespecifických střevních zánětů.",
    keyTerms: ["Endoskopie", "Ulcerózní kolitida", "Crohnova choroba", "Polypóza", "Biopsie sliznice", "Screening karcinomu"],
    richContent: {
      significance: "Vizuální vyšetření tlustého střeva, možnost odběru histologických vzorků (biopsie) a terapeutických výkonů (polypektomie).",
      high: "Nález patologií: ulcerace, krvácení, polypy, zánětlivé změny (kontinuální u ulcerózní kolitidy, transmurální a segmentální u Crohnovy choroby).",
      low: "Normální makroskopický nález na sliznici tračníku a konečníku.",
      method: "Zavedení flexibilního kolonoskopu řitním otvorem za insuflace plynu (CO2) po vyčištění střeva (příprava laxativy)."
    },
    quiz: [
      {
        question: "Jaký kolonoskopický nález pomáhá rozlišit Crohnovu chorobu od ulcerózní kolitidy?",
        options: [
          "Crohnova choroba postihuje výhradně konečník",
          "Ulcerózní kolitida vykazuje segmentální a přeskočivé postižení celé stěny",
          "Crohnova choroba má segmentální (přeskočivé) postižení, postihuje celou šíři stěny a často terminální ileum, zatímco ulcerózní kolitida postihuje sliznici kontinuálně od konečníku",
          "Kolonoskopie nedokáže tyto záněty odlišit"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Konečník je téměř vždy postižen u ulcerózní kolitidy, u Crohnovy choroby bývá ušetřen.",
          "Nesprávně. Segmentální postižení je typické pro Crohnovu chorobu.",
          "Správně! Ulcerózní kolitida je povrchový zánět (sliznice a podsliznice) postupující kontinuálně od rekta proximálně. Crohnova choroba je transmurální zánět postihující jakoukoli část GIT, typicky s nepostiženými úseky sliznice (přeskočivé léze).",
          "Nesprávně. Kolonoskopie s biopsií je hlavní rozlišovací metodou."
        ]
      }
    ]
  },
  "pract-33": {
    summary: "Vyšetření funkce tubulů zkoumá schopnost ledvin koncentrovat a acidifikovat moč. Testy se využívají k diagnostice diabetes insipidus a renální tubulární acidózy.",
    keyTerms: ["Osmolarita moči", "Koncentrační test", "Renální tubulární acidóza", "Diabetes insipidus", "Aquaporiny", "Acidifikační test"],
    richContent: {
      significance: "Posouzení tubulární reabsorpce vody a iontů a sekrece vodíkových iontů (udržení acidobazické rovnováhy).",
      high: "Vysoká osmolarita moči (> 800-1000 mOsm/kg) po deprivaci vody (správná koncentrační schopnost zdravých tubulů).",
      low: "Nízká osmolarita moči (isostenurie ~ 300 mOsm/kg) při žíznění (renální tubulární poškození, chronická intersticiální nefritida, diabetes insipidus). Nízké pH moči po zátěži amoniakem svědčí o dobré acidifikační schopnosti.",
      method: "Koncentrační pokus žízněním (odpírání tekutin) nebo podáním analogu ADH (desmopresinový test). Acidifikační test s podáním NH4Cl."
    },
    quiz: [
      {
        question: "Jak se změní osmolarita moči u pacienta s poškozením ledvinných tubulů při koncentračním pokusu žízněním?",
        options: [
          "Stoupne nad 1200 mOsm/kg",
          "Zůstane nízká, fixovaná kolem osmolarity plazmy (isostenurie, cca 290-300 mOsm/kg), protože tubuly nedokážou zpětně vstřebat vodu",
          "Klesne na nulu",
          "Stoupne v důsledku sekrece inzulínu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Vysoká osmolarita značí dobrou funkci tubulů.",
          "Správně! Při poškození tubulů (např. intersticiální nefritida, chronické selhání) ledviny ztrácejí schopnost vytvářet hyperosmolární dřeň a vstřebávat vodu přes aquaporiny. Moč se nedokáže zkoncentrovat a odchází se stejnou osmolaritou, jakou má plazma (isostenurie).",
          "Nesprávně. Osmolarita na nulu klesnout nemůže, moč vždy obsahuje rozpuštěné látky.",
          "Nesprávně. Inzulín s koncentrační schopností tubulů nesouvisí."
        ]
      }
    ]
  },
  "pract-34": {
    summary: "Koronarografie je invazivní kontrastní vyšetření věnčitých tepen. Představuje zlatý standard pro lokalizaci koronárních stenóz a provádění angioplastiky (PCI) u infarktu.",
    keyTerms: ["Koronární angiografie", "Stenóza tepny", "Kontrastní látka", "Perkutánní koronární intervence (PCI)", "Katetrizace srdce", "Angina pectoris"],
    richContent: {
      significance: "Přímé zobrazení věnčitých tepen k detekci a posouzení závažnosti aterosklerotických plátů a k případnému terapeutickému zprůchodnění (angioplastika, stent).",
      high: "Průkaz významného zúžení (stenóza nad 70 % průsvitu cévy je považována za hemodynamicky významnou, vyvolávající ischemii).",
      low: "Hladké koronární arterie bez zúžení (vyloučení koronární nemoci jako příčiny bolesti na hrudi).",
      method: "Invazivní zavedení katetru přes a. radialis (na ruce) nebo a. femoralis (v třísle) pod rentgenovou (skiaskopickou) kontrolou s aplikací jodové kontrastní látky přímo do ústí věnčitých tepen."
    },
    quiz: [
      {
        question: "Co je bezprostředním terapeutickým krokem, který lze provést během koronarografie při nálezu akutního uzávěru tepny u pacienta s infarktem (STEMI)?",
        options: [
          "Podání perorálního aspirinu a propuštění domů",
          "Perkutánní koronární intervence (PCI) – zprůchodnění tepny balónkem a zavedení stentu (angioplastika)",
          "Okamžitá amputace levé ruky",
          "Provedení magnetické rezonance srdce na sále"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Aspirin se podává předem a uzávěr sám neodstraní.",
          "Správně! Koronarografie je diagnostická, ale umožňuje okamžitou terapeutickou intervenci (PCI). Pomocí balónku se mechanicky rozruší okludující trombus (reperfúze) a vloží se kovová výztuž (stent) k udržení průchodnosti.",
          "Nesprávně. Amputace ruky nemá s ošetřením koronárních tepen nic společného.",
          "Nesprávně. MR srdce je dlouhé vyšetření a na sále se při infarktu neprovádí."
        ]
      }
    ]
  },
  "pract-35": {
    summary: "Vyšetření intrakraniálního tlaku a hlavových nervů posuzuje riziko herniace mozku a ložiskové léze. Zvýšený ICP ohrožuje kmenové funkce a vyžaduje monitorování.",
    keyTerms: ["Intrakraniální tlak (ICP)", "Cushingův reflex", "Hlavové nervy (n. III, VII)", "Anizokorie", "Herniace mozkového kmene", "Glasgow Coma Scale"],
    richContent: {
      significance: "Monitorování tlaku uvnitř lebky u závažných poškození mozku (kraniotrauma, edém) a zhodnocení integrity mozkového kmene testováním hlavových nervů.",
      high: "Vzestup ICP nad 20 mmHg (intrakraniální hypertenze, riziko vklínění kmene - projevuje se Cushingovou triádou: hypertenze, bradykardie, nepravidelné dýchání).",
      low: "Porucha funkce n. III (n. oculomotorius - projevuje se anizokorií / jednostranně rozšířenou zornicí nereagující na světlo při herniaci spánkového laloku).",
      method: "Zavedení intraventrikulárního či intraparenchymového čidla (tlakového senzoru) skrz trepanační otvor v lebce. Klinické vyšetření reflexů hlavových nervů."
    },
    quiz: [
      {
        question: "Co tvoří tzv. Cushingovu triádu (reflex), která se rozvíjí při nebezpečném vzestupu intrakraniálního tlaku (ICP)?",
        options: [
          "Hypotenze, tachykardie a zrychlené dýchání",
          "Systémová hypertenze, bradykardie a nepravidelné dýchání (bradypnoe)",
          "Horečka, ztuhlost šíje a zvracení",
          "Pokles glukózy, zčervenání kůže a anurie"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hypotenze a tachykardie jsou známkou oběhového šoku, nikoli Cushingova reflexu.",
          "Správně! Stlačením mozkových cév vysokým ICP dojde k lokální ischemii v prodloužené míše. Tělo reaguje masivním zvýšením systémového krevního tlaku k udržení CPP. Baroreceptory následně reagují zpomalením tepu (bradykardie) a dochází k útlumu dechového centra.",
          "Nesprávně. Toto jsou známky meningeálního dráždění.",
          "Nesprávně. Tyto příznaky nepatří do Cushingovy triády nitrolební hypertenze."
        ]
      }
    ]
  },
  "pract-36": {
    summary: "Vyšetření funkce hypofýzy posuzuje tvorbu regulačních a exkrečních hormonů. Využívá bazální stanovení hormonů v séru a dynamické stimulační/supresní testy.",
    keyTerms: ["Adenohypofýza", "Neurohypofýza (ADH)", "ACTH / TSH / LH / FSH", "Růstový hormon (GH)", "Prolaktin", "Insulínová hypoglykémie"],
    richContent: {
      significance: "Diagnostika chorob hypothalamo-hypofyzární osy (tumory, hypofunkce, panhypopituitarismus).",
      high: "Vysoký prolaktin (prolaktinom), vysoký růstový hormon (akromegalie u dospělých, gigantismus u dětí), vysoké ACTH (Cushingova nemoc).",
      low: "Deficit ADH (centrální diabetes insipidus - polyurie), deficit všech hormonů (panhypopituitarismus, Sheehanův syndrom po těžkém poporodním krvácení).",
      method: "Měření bazálních koncentrací hormonů v séru, stimulační testy (inzulínový toleranční test pro růstový hormon a ACTH), supresní testy (podání glukózy u akromegalie)."
    },
    quiz: [
      {
        question: "Který syndrom je charakterizován kompletním selháním funkce předního laloku hypofýzy (panhypopituitarismem) v důsledku ischemické nekrózy při masivním poporodním krvácení?",
        options: [
          "Connův syndrom",
          "Sheehanův syndrom",
          "Cushingův syndrom",
          "Zollinger-Ellisonův syndrom"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Connův syndrom je hyperaldosteronismus.",
          "Správně! Během těhotenství se hypofýza fyziologicky zvětšuje (hypertrofie laktotrofních buněk), což ji činí extrémně citlivou na hypoperfuzi. Masivní poporodní krvácení a šok vyvolají ischemii a nekrózu hypofýzy (Sheehanův syndrom) se ztrátou všech jejích hormonů.",
          "Nesprávně. Cushingův syndrom je nadprodukce kortizolu.",
          "Nesprávně. Zollinger-Ellisonův syndrom je gastrin produkující tumor vyvolávající peptické vředy."
        ]
      }
    ]
  },
  "pract-37": {
    summary: "Posouzení stavu vědomí rozlišuje kvantitativní a kvalitativní poruchy. Glasgow Coma Scale (GCS) objektivně hodnotí hloubku bezvědomí na základě reakcí očí, řeči a motoriky.",
    keyTerms: ["Glasgow Coma Scale (GCS)", "Kvantitativní poruchy (somnolence, sopor, kóma)", "Kvalitativní poruchy (delirium, zmatenost)", "Motorická odpověď", "Otevírání očí"],
    richContent: {
      significance: "Rychlé, objektivní zhodnocení závažnosti postižení CNS a hloubky bezvědomí, klíčové pro triage a indikaci zajištění dýchacích cest.",
      high: "GCS 15 bodů (plně orientovaný pacient). Kvalitativní poruchy (delirium se zvýšenou aktivitou sympatiku, neklidem, halucinacemi).",
      low: "Pokles GCS pod 15. Hodnota GCS ≤ 8 bodů definuje těžké kóma a je absolutní indikací k intubaci a umělé plicní ventilaci (ztráta obranných reflexů dýchacích cest).",
      method: "Hodnocení tří reakcí: otevírání očí (1-4 body), slovní odpověď (1-5 bodů) a nejlepší motorická odpověď (1-6 bodů)."
    },
    quiz: [
      {
        question: "U jaké hodnoty skóre Glasgow Coma Scale (GCS) je nutné pacienta bezprostředně intubovat kvůli riziku aspirace ze ztráty obranných dechových reflexů?",
        options: [
          "GCS 14 bodů",
          "GCS 8 bodů a méně",
          "GCS 12 bodů",
          "Pouze při GCS 3 body (smrt mozku)"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. GCS 14 je téměř plné vědomí (např. lehká zmatenost).",
          "Správně! Pravidlo 'GCS osm – intubovat' je základním traumatologickým standardem. Při poklesu GCS na 8 a méně dochází k vyhasnutí kašlacího a polykacího reflexu, což bez zajištění dýchacích cest vede k udušení či aspirační pneumonii.",
          "Nesprávně. U GCS 12 je pacient v somnolenci/soporu, ale obvykle má reflexy zachované.",
          "Nesprávně. Čekat na GCS 3 by bylo pro pacienta fatální."
        ]
      }
    ]
  },
  "pract-38": {
    summary: "Vyšetření krevního tlaku u primární hypertenze potvrzuje trvalé zvýšení tlaku bez organické příčiny. Využívá se standardní měření v ordinaci a 24hodinové monitorování (AMTK).",
    keyTerms: ["Esenciální hypertenze", "AMTK", "Tlak v ordinaci vs. domácí měření", "Hypertenze bílého pláště", "Dipper vs. Non-dipper", "Oscilometrie"],
    richContent: {
      significance: "Diagnostika esenciální (primární) hypertenze (cca 90-95 % všech hypertenzí), posouzení kardiovaskulárního rizika a odlišení falešných stavů (bílý plášť).",
      high: "Tlak v ordinaci opakovaně ≥ 140/90 mmHg, nebo průměrný tlak při 24h AMTK ≥ 130/80 mmHg. Profil 'non-dipper' (chybí fyziologický pokles tlaku v noci o 10-20 %, vysoké riziko komplikací).",
      low: "Ortostatická hypotenze (pokles systoly o > 20 mmHg při postavení ze sedu/lehu, riziko synkopy).",
      method: "Auskultační metoda (rtuťový/bezrtuťový tonometr a stetoskop, poslech Korotkovových zvuků) nebo oscilometrická metoda (AMTK přístroje)."
    },
    quiz: [
      {
        question: "Který nález při 24hodinovém monitorování krevního tlaku (AMTK) představuje nejvyšší kardiovaskulární riziko z hlediska orgánového poškození?",
        options: [
          "Tzv. 'white-coat' efekt (zvýšený tlak pouze před lékařem)",
          "Profil 'non-dipper' – chybějící pokles krevního tlaku během spánku o fyziologických 10–20 %",
          "Občasný pokles systolického tlaku na 110 mmHg po jídle",
          "Mírná sinusová bradykardie v noci"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Efekt bílého pláště má nižší riziko a nevyžaduje okamžitou farmakoterapii.",
          "Správně! U pacientů typu 'non-dipper' chybí noční pokles tlaku. Cévy a srdce jsou vystaveny trvalému tlaku i v noci, což vede k rychlému rozvoji hypertrofie levé komory a cévním příhodám.",
          "Nesprávně. Postprandiální pokles je běžný fyziologický jev.",
          "Nesprávně. Noční bradykardie je normální projev zvýšeného tonu parasympatiku."
        ]
      }
    ]
  },
  "pract-39": {
    summary: "Proteiny akutní fáze jsou syntetizovány v játrech v odpovědi na zánětlivé cytokiny. Slouží jako citlivé ukazatele aktivity zánětu, tkáňové nekrózy nebo nádorového bujení.",
    keyTerms: ["Pozitivní proteiny (CRP, Fibrinogen)", "Negativní proteiny (Albumin)", "Interleukin-6", "Imunitní odpověď", "Sarkoidóza a amyloidóza"],
    richContent: {
      significance: "Sledování nespecifické humorální imunitní odpovědi organismu na infekci, trauma, nekrózu (infarkt) či autoimunitní onemocnění.",
      high: "Pozitivní reaktanty: CRP (rychlý vzestup), fibrinogen (zvyšuje viskozitu krve a sedimentaci), ferritin (zásobní železo, stoupá u zánětu), sérový amyloid A (SAA). Indikují probíhající zánět.",
      low: "Negativní reaktanty: albumin (klesá, protože játra přesouvají syntetickou kapacitu na zánětlivé proteiny), transferrin, prealbumin.",
      method: "Elektroforéza bílkovin séra, nefelometrie nebo turbidimetrie pro stanovení jednotlivých proteinů."
    },
    quiz: [
      {
        question: "Proč dochází k poklesu hladiny sérového albuminu (negativního reaktantu akutní fáze) u těžkých zánětů?",
        options: [
          "Albumin se vylučuje slinnými žlázami ve velkém množství",
          "Játra pod vlivem zánětlivých cytokinů (zejména IL-6) tlumí syntézu albuminu a upřednostňují tvorbu pozitivních proteinů akutní fáze (CRP, fibrinogen)",
          "Zánětlivé buňky albumin přímo požírají",
          "Albumin se přeměňuje na hemoglobin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Albumin se slinami neztrácí.",
          "Správně! Během akutní fáze zánětu cytokiny reorientují proteosyntézu hepatocytů. Tvorba albuminu je potlačena, aby se uvolnily aminokyseliny pro tvorbu proteinů imunitní obrany.",
          "Nesprávně. Imunitní buňky albumin netráví.",
          "Nesprávně. Albumin a hemoglobin jsou odlišné proteiny, vzájemná přeměna není možná."
        ]
      }
    ]
  },
  "pract-40": {
    summary: "Zátěžová vyšetření kardiorespiračního systému hodnotí funkční rezervy srdce a plic. Spiroergometrie analyzuje dechové plyny a EKG při stoupající fyzické zátěži k průkazu latentních patologií.",
    keyTerms: ["Spiroergometrie", "VO2 max", "Anaerobní práh", "Zátěžové EKG", "Ischemický ST segment", "Ergometr"],
    richContent: {
      significance: "Komplexní posouzení funkční kapacity transportního systému pro kyslík při fyzické zátěži, klíčové pro průkaz latentní ischemie a posouzení příčiny námahové dušnosti.",
      high: "Vysoká maximální spotřeba kyslíku (VO2 max) u trénovaných jedinců. Vzestup krevního tlaku a tepu při zátěži (fyziologická hyperkinetická reakce).",
      low: "Nízké VO2 max, časný rozvoj anaerobního prahu (přechod na laktátový metabolismus), deprese ST segmentu na EKG (zátěží indukovaná ischemie myokardu).",
      method: "Stupňovaná fyzická zátěž na bicyklovém ergometru nebo běžícím pásu s kontinuálním snímáním EKG, krevního tlaku a analýzou vdechovaných a vydechovaných plynů obličejovou maskou."
    },
    quiz: [
      {
        question: "Co je hlavním EKG kritériem pro přerušení zátěžového testu (ergometrie) z důvodu rozvoje ischémie myokardu?",
        options: [
          "Vzestup srdeční frekvence nad 120/min",
          "Horizontální nebo descendentní deprese ST segmentu o více než 1.5–2 mm",
          "Vymizení všech vln T na EKG",
          "Mírné zvýšení systolického tlaku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Vzestup frekvence je při cvičení normální a žádoucí.",
          "Správně! Deprese ST segmentu (horizontální či skloněná dolů) vyvolaná fyzickou zátěží svědčí pro subendokardiální ischemii v důsledku nepoměru mezi zvýšenou potřebou kyslíku (tachykardie) a omezenou dodávkou zúženou koronární tepnou. Je to jasná indikace k ukončení testu.",
          "Nesprávně. Vlny T mohou měnit tvar, ale deprese ST je hlavním specifickým ischemickým kritériem.",
          "Nesprávně. Systolický tlak má při zátěži stoupat, nebezpečný by byl jeho pokles."
        ]
      }
    ]
  },
  "pract-41": {
    summary: "Bronchoskopie je endoskopická metoda umožňující přímou vizualizaci tracheobronchiálního stromu. Slouží k odběru bioptických vzorků, laváži a odstraňování cizích těles z dýchacích cest.",
    keyTerms: ["Flexibilní bronchoskopie", "Bronchoalveolární laváž (BAL)", "Biopsie sliznice", "Cizí těleso", "Bronchiální karcinom", "Hemoptýza"],
    richContent: {
      significance: "Přímé optické vyšetření sliznice trachey a bronchů k diagnostice nádorů, infekcí (odběr sputa, BAL) a k terapeutickému odstranění překážek.",
      high: "Nález patologického ložiska (nádor, obstrukce, slizniční ulcerace), přítomnost krve v dýchacích cestách (hemoptýza), přítomnost cizího tělesa.",
      low: "Normální anatomický obraz bronchiálního stromu s růžovou, hladkou sliznicí.",
      method: "Zavedení flexibilního bronchoskopu nosem nebo ústy v lokální anestezii a mírné sedaci. Odběr bioptického vzorku kleštěmi nebo kartáčkem."
    },
    quiz: [
      {
        question: "Co je hlavním účelem provedení bronchoalveolární laváže (BAL) během bronchoskopie?",
        options: [
          "Mechanické roztažení zúžených bronchů tlakem vody",
          "Instilace fyziologického roztoku do plicního segmentu a jeho následné odsátí k získání buněk a patogenů z alveolárního prostoru k cytologickému a mikrobiologickému rozboru",
          "Vypláchnutí veškerého surfaktantu u zdravých lidí",
          "Měření difúzní kapacity plic"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. K roztažení bronchů se používají bronchodilatancia nebo stenty, ne výplach.",
          "Správně! BAL umožňuje získat tekutinu s buněčným a nebuněčným materiálem z nejhlubších částí plic (alveolů). Analýza pomáhá diagnostikovat např. pneumocystovou pneumonii, plicní fibrózy či sarkoidózu na základě zastoupení buněčných typů (lymfocyty, makrofágy).",
          "Nesprávně. Vypláchnutí surfaktantu by vyvolalo kolaps plic, to není účelem.",
          "Nesprávně. Spirometrie a difuze se provádějí neinvazivně, ne bronchoskopií."
        ]
      }
    ]
  },
  "pract-42": {
    summary: "Vyšetření fibrinolýzy hodnotí funkční stav systému odbourávání fibrinových sraženin. Zahrnuje stanovení D-dimerů, euglobulinové lýzy a hladiny plazminogenu k diagnostice hyperfibrinolýzy či vyloučení tromboembolických stavů.",
    keyTerms: ["Fibrinolýza", "D-dimer", "Plazminogen", "Euglobulinová lýza", "t-PA", "Plazmin"],
    richContent: {
      significance: "Posouzení schopnosti organismu rozpouštět krevní sraženiny a vyloučení akutní trombózy či plicní embolie.",
      high: "Zvýšená hladina D-dimerů (marker degradace stabilizovaného fibrinu) u hluboké žilní trombózy, plicní embolie, DIC, zánětů, těhotenství či malignit.",
      low: "Snížená aktivita fibrinolytických faktorů (např. deficit t-PA) přispívá k trombofilnímu stavu.",
      method: "Euglobulinová lýza (klasický test), stanovení D-dimerů latexovou aglutinací nebo ELISA, fotometrické stanovení plazminogenu."
    },
    quiz: [
      {
        question: "Která z následujících látek je hlavním enzymem přímo zodpovědným za štěpení fibrinu při fibrinolýze?",
        options: [
          "Trombin",
          "Plazmin (aktivovaný z plazminogenu pomocí t-PA)",
          "Faktor VIII",
          "Fibrinogen"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Trombin fibrin naopak tvoří z fibrinogenu.",
          "Správně! Plazmin je serinová proteáza, která selektivně štěpí fibrinová a fibrinogenová vlákna na degradační produkty (FDP), včetně D-dimerů.",
          "Nesprávně. Faktor VIII je kofaktor koagulační kaskády.",
          "Nesprávně. Fibrinogen je prekurzor fibrinu."
        ]
      }
    ]
  },
  "pract-43": {
    summary: "Vyšetření parametrů plicní restrikce potvrzuje snížení celkového plicního objemu. K diagnostice je nutné stanovení celkové plicní kapacity (TLC) a reziduálního objemu pomocí bodypletysmografie.",
    keyTerms: ["Plicní restrikce", "Celková plicní kapacita (TLC)", "Vitální kapacita (FVC)", "Bodypletysmografie", "Poddajnost plic (compliance)", "Tiffeneauův index"],
    richContent: {
      significance: "Průkaz a kvantifikace restrikční ventilační poruchy (redukce funkčního plicního parenchymu, např. u plicní fibrózy, nebo omezení pohybu hrudníku).",
      high: "Tiffeneauův index (FEV1/FVC) je normální nebo zvýšený (např. 85-90 %, protože plíce jsou sice malé, ale dýchací cesty jsou volné a elastický zpětný ráz plic je vysoký).",
      low: "Pokles celkové plicní kapacity (TLC < 80 % normy - nejdůležitější kritérium restrikce) a pokles vitální kapacity (FVC < 80 %). Pokles poddajnosti plic (compliance).",
      method: "Celotělová bodypletysmografie (měření tlakových změn v uzavřené kabině k určení reziduálního objemu a TLC) nebo heliová zřeďovací metoda."
    },
    quiz: [
      {
        question: "Který spirometrický a bodypletysmografický nález je nezbytný pro definitivní potvrzení restrikční ventilační poruchy plic?",
        options: [
          "Pokles Tiffeneauova indexu pod 70 %",
          "Pokles celkové plicní kapacity (TLC) pod 80 % náležité hodnoty při normálním nebo zvýšeném poměru FEV1/FVC",
          "Vzestup reziduálního objemu nad 150 %",
          "Zvýšení plicní poddajnosti (compliance)"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Pokles indexu pod 70 % definuje obstrukci.",
          "Správně! Samotný pokles FVC v běžné spirometrii může být způsoben i těžkou obstrukcí (air trapping). K definitivnímu potvrzení restrikce musíme změřit TLC (která zahrnuje i reziduální objem) a prokázat její snížení pod 80 % normy.",
          "Nesprávně. Reziduální objem stoupá u obstrukcí, u restrikce klesá spolu s celou TLC.",
          "Nesprávně. U plicních restrikcí (např. fibrózy) je plíce tuhá, poddajnost (compliance) tedy klesá."
        ]
      }
    ]
  },
  "pract-44": {
    summary: "Gastroskopie je optické endoskopické vyšetření jícnu, žaludku a dvanáctníku. Umožňuje přímou diagnostiku zánětů, peptických vředů a odběr vzorků na Helicobacter pylori.",
    keyTerms: ["Endoskopie", "Peptický vřed", "Refluxní esofagitida", "Helicobacter pylori (biopsie)", "Slizniční léze", "Krvácení z varixů"],
    richContent: {
      significance: "Optická inspekce sliznice horní části trávicí trubice k diagnostice zánětů, vředové choroby, tumorů a řešení krvácení (např. ligace jícnových varixů).",
      high: "Nález slizničních defektů (peptický vřed žaludku či duodena, eroze sliznice), přítomnost jícnových varixů, pozitivní rychlý ureázový test na Helicobacter pylori.",
      low: "Normální makroskopický obraz sliznice jícnu, žaludku (bez známek gastritidy) a duodena.",
      method: "Zavedení ohebného gastroskopu ústy (per os) do jícnu, žaludku a duodena po lokálním znecitlivění hltanu lidokainem u lačného pacienta."
    },
    quiz: [
      {
        question: "Jak se provádí přímý průkaz Helicobacter pylori ze sliznice žaludku během gastroskopického vyšetření?",
        options: [
          "Měřením pH žaludeční šťávy",
          "Odběrem bioptického vzorku sliznice (z antra) a provedením rychlého ureázového testu (CLO-test) nebo histologickým vyšetřením",
          "Pouhým vizuálním pozorováním bakterií optikou přístroje",
          "Měřením vylučování amylázy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. pH žaludku neurčuje přítomnost bakterie specificky.",
          "Správně! Helicobacter pylori produkuje enzym ureázu. Bioptický vzorek sliznice se vloží do média s močovinou a indikátorem pH. Pokud je bakterie přítomna, ureáza rozštěpí močovinu na amoniak, pH stoupne a indikátor změní barvu (rychlý ureázový test).",
          "Nesprávně. Bakterie jsou mikroskopické a gastroskopem je nelze přímo vidět.",
          "Nesprávně. Amylázu produkuje slinivka a slinné žlázy, Helicobacter ne."
        ]
      }
    ]
  },
  "pract-45": {
    summary: "Základní vyšetření reprodukčního systému hodnotí plodnost a hormonální regulaci. U mužů analyzuje spermiogram, u žen sleduje hladiny estrogenů, progesteronu a gonadotropinů.",
    keyTerms: ["Spermiogram", "Oligospermie / Asthenospermie", "FSH a LH (gonadotropiny)", "Progesteron (ovulace)", "Prolaktin", "Estradiol"],
    richContent: {
      significance: "Diferenciální diagnostika neplodnosti (infertility) a poruch menstruačního cyklu.",
      high: "Vysoké FSH a LH u primárního hypogonadismu (selhání varlat/vaječníků - chybí negativní zpětná vazba pohlavních hormonů), vysoký prolaktin (tlumí sekreci GnRH a způsobuje amenoreu).",
      low: "Oligozoospermie (< 15 mil. spermií/ml), asthenozoospermie (špatná pohyblivost). Nízký progesteron v luteální fázi cyklu (známka anovulačního cyklu). Nízké FSH/LH u sekundárního hypogonadismu (porucha hypofýzy).",
      method: "Spermiogram (mikroskopické hodnocení objemu, koncentrace, motility a morfologie spermií po 2-5 dnech abstinence). Hormonální profil ze séra."
    },
    quiz: [
      {
        question: "Jaká je interpretace nálezu vysokých hladin gonadotropinů (FSH a LH) a současně velmi nízkých hladin pohlavních hormonů (testosteronu u muže, estradiolu u ženy)?",
        options: [
          "Jedná se o sekundární (centrální) poruchu v hypotalamu",
          "Jedná se o primární (periferní) selhání gonád (hypergonadotropní hypogonadismus), kdy chybí negativní zpětná vazba",
          "Jde o fyziologický stav v období puberty",
          "Nález ukazuje na nadprodukci prolaktinu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U centrální poruchy by byly FSH a LH nízké.",
          "Správně! Pokud jsou pohlavní žlázy poškozené (např. po chemoterapii, autoimunitně), netvoří pohlavní hormony. Hypofýza na tento nedostatek reaguje maximální sekrecí regulačních hormonů FSH a LH ve snaze žlázy stimulovat, ty však nereagují.",
          "Nesprávně. V pubertě naopak hormony stoupají společně.",
          "Nesprávně. Prolaktin sekreci gonadotropinů tlumí, byly by tedy nízké."
        ]
      }
    ]
  },
  "pract-46": {
    summary: "Laboratorní markery hemolýzy potvrzují předčasný rozpad červených krvinek. Typickými nálezy jsou pokles haptoglobinu, zvýšení nekonjugovaného bilirubinu, volného hemoglobinu a retikulocytóza.",
    keyTerms: ["Haptoglobin", "Nekonjugovaný bilirubin", "Laktátdehydrogenáza (LDH)", "Retikulocytóza", "Volný hemoglobin", "Hemolytická anémie"],
    richContent: {
      significance: "Průkaz a sledování zvýšené destrukce erytrocytů v oběhu (intravaskulární hemolýza) nebo ve slezině (extravaskulární hemolýza).",
      high: "Zvýšení nekonjugovaného bilirubinu v séru, vzestup LDH (uvolněné z erytrocytů), volný hemoglobin v plazmě a moči (hemoglobinurie u těžké intravaskulární hemolýzy). Výrazná retikulocytóza (kompenzační reakce kostní dřeně).",
      low: "Extrémní pokles až vymizení sérového haptoglobinu (haptoglobin je transportní protein, který se okamžitě váže na volný hemoglobin a tento komplex je rychle vychytán játry).",
      method: "Biochemické a imunochemické stanovení markerů v krvi a moči. Mikroskopické stanovení retikulocytů po barvení supravitálními barvivy."
    },
    quiz: [
      {
        question: "Proč dochází k dramatickému poklesu až vymizení volného haptoglobinu v séru u pacientů s probíhající hemolýzou?",
        options: [
          "Haptoglobin se přeměňuje na erytropoetin",
          "Haptoglobin je spotřebován vazbou na volný hemoglobin uvolněný z rozpadlých erytrocytů, a tento komplex je odstraňován z oběhu",
          "Slezina haptoglobin filtruje a ničí",
          "Zánět tlumí jeho produkci v kostech"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Haptoglobin se na EPO nemění.",
          "Správně! Haptoglobin funguje jako 'zametač' volného hemoglobinu v plazmě. Zabraňuje tomu, aby volný hemoglobin poškodil ledviny (vyvolal ATN). Vazba je velmi těsná a komplex hemoglobin-haptoglobin je během několika minut vychytán hepatocyty, což vede k vyčerpání volného haptoglobinu v séru.",
          "Nesprávně. Komplex odstraňují játra, nikoli slezina volný haptoglobin.",
          "Nesprávně. Haptoglobin se syntetizuje v játrech, ne v kostech."
        ]
      }
    ]
  },
  "pract-47": {
    summary: "Vyšetření bílé krevní řady hodnotí celkový počet leukocytů a jejich diferenciální rozpočet. Umožňuje diagnostikovat infekce, záněty a hematologické malignity (leukémie).",
    keyTerms: ["Leukocyty", "Neutrofily (posun doleva)", "Lymfocyty", "Leukocytóza vs. Leukopenie", "Blasty", "Diferenciální krevní obraz"],
    richContent: {
      significance: "Hodnocení stavu celkové celulární imunity, reakce na infekční agens, alergické reakce a screening nádorových onemocnění krvetvorby.",
      high: "Leukocytóza (> 10x10^9/l). Neutrofilie s posunem doleva (zvýšení mladých forem - tyčí u akutního bakteriálního zánětu), lymfocytóza (virové infekce), eosinofilie (alergie, parazitózy). Přítomnost blastů (akutní leukémie).",
      low: "Leukopenie (< 4x10^9/l) a neutropenie (útlum krvetvorby po chemoterapii, virové infekce - hrozí závažné infekce při poklesu pod 0.5x10^9/l).",
      method: "Automatické analyzátory (impedance, průtoková cytometrie) a mikroskopický nátěr periferní krve barvený dle Pappenheima (diferenciální rozpočet)."
    },
    quiz: [
      {
        question: "Co patofyziologicky vyjadřuje pojem 'posun doleva' v diferenciálním rozpočtu bílé krevní řady?",
        options: [
          "Zvýšení podílu lymfocytů na úkor neutrofilů",
          "Přítomnost nezralých forem granulocytů (zejména tyčí a metamyelocytů) v periferní krvi, což svědčí o vyplavení rezerv z kostní dřeně při zánětu",
          "Přesun bílých krvinek do levé hemisféry mozku",
          "Pokles celkového počtu leukocytů pod 2 x 10^9/l"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Lymfocytóza je typická pro virové záněty, nesouvisí s posunem doleva.",
          "Správně! Při závažném zánětu (bakteriální infekce) poptávka po neutrofilech převýší kapacitu zralých forem v oběhu. Kostní dřeň začne vyplavovat mladší formy – tyče, metamyelocyty (které jsou na vývojovém schématu zakresleny 'vlevo' od zralých segmentů).",
          "Nesprávně. Jde o humorný distrakční výrok.",
          "Nesprávně. Pokles počtu je leukopenie, nikoliv posun doleva."
        ]
      }
    ]
  },
  "pract-48": {
    summary: "Vyšetření funkce štítné žlázy a příštítných tělísek hodnotí endokrinní a vápníkovou homeostázu. Diagnostika se opírá o stanovení TSH, fT4, parathormonu a hladiny vápníku.",
    keyTerms: ["TSH (thyrotropin)", "Volný tyroxin (fT4)", "Parathormon (PTH)", "Kalcium a Fosfor", "Hypokalcémie vs. Hyperkalcémie", "Zpětná vazba"],
    richContent: {
      significance: "Posouzení sekrece tyroidálních hormonů a hormonů regulujících hladinu ionizovaného vápníku (kalcémie), který je zásadní pro svalové stahy a přenos vzruchů.",
      high: "Vysoké TSH (primární hypotyreóza - chybí zpětná vazba), vysoké fT4 (hypertyreóza, tyreotoxikóza), vysoký parathormon a hyperkalcémie (primární hyperparatyreóza).",
      low: "Nízké TSH (primární hypertyreóza), nízké fT4 (hypotyreóza), nízký parathormon a hypokalcémie (hypoparatyreóza, např. po operaci štítné žlázy).",
      method: "Chemiluminiscenční imunoanalýza ze séra krevního oběhu."
    },
    quiz: [
      {
        question: "Jak se změní hladiny TSH a volného tyroxinu (fT4) v krvi u pacienta s rozvinutou Graves-Basedowovou chorobou (primární autoimunitní hypertyreózou)?",
        options: [
          "TSH je zvýšené a fT4 je snížené",
          "TSH je extrémně potlačené (neměřitelně nízké) a fT4 je výrazně zvýšené",
          "Oba hormony jsou v normě",
          "TSH stoupá a fT4 se nemění"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto je profil primární hypotyreózy (např. Hashimotovy tyreoiditidy).",
          "Správně! Autoimunitní protilátky (TRAK) stimulují TSH receptory na štítné žláze, která produkuje obrovské množství fT4. Vysoká hladina fT4 působí silnou negativní zpětnou vazbou na hypofýzu, což vede k téměř úplnému zablokování sekrece TSH.",
          "Nesprávně. U rozvinuté hypertyreózy jsou hodnoty výrazně patologické.",
          "Nesprávně. Negativní zpětná vazba brání vzestupu TSH při vysokém fT4."
        ]
      }
    ]
  },
  "pract-49": {
    summary: "Laboratorní markery rhabdomyolýzy prokazují závažné poškození a rozpad buněk kosterního svalstva. Diagnostika stojí na extrémním zvýšení kreatinkinázy (CK) a myoglobinu v plazmě a moči.",
    keyTerms: ["Kreatinkináza (CK)", "Myoglobin", "Myoglobinurie", "Crush syndrom", "Akutní tubulární nekróza", "Hyperkalémie"],
    richContent: {
      significance: "Detekce rozpadu kosterního svalstva (rhabdomyolýzy), který uvolňuje toxické intracelulární složky ohrožující ledviny.",
      high: "Kreatinkináza (CK) stoupá nad 5-10 tisíc U/l (až na statisíce u těžkých forem), myoglobin v séru stoupá, myoglobinurie (tmavá moč barvy Coca-Coly), hyperkalémie a hyperfosfatémie (uvolnění iontů ze svalových buněk).",
      low: "Normální hladina CK v séru (vylučuje akutní svalovou destrukci).",
      method: "Enzymatické stanovení aktivity celkové kreatinkinázy (CK) a imunochemický průkaz myoglobinu."
    },
    quiz: [
      {
        question: "Jaký patofyziologický mechanismus spojuje těžkou rhabdomyolýzu s rozvojem akutního poškození ledvin (AKI)?",
        options: [
          "Přímé uvolnění inzulínu, který blokuje ledvinnou tepnu",
          "Uvolněný myoglobin vyvolává přímou toxicitu na buňky proximálního tubulu, reaguje s Tamm-Horsfallovým proteinem za vzniku obstrukčních válců a způsobuje intrarenální vazokonstrikci",
          "Myoglobin blokuje uretery v ledvinné pánvičce mechanicky",
          "Svalové buňky spotřebují veškerou vodu z krevního oběhu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Inzulín s tímto procesem nesouvisí.",
          "Správně! Volný myoglobin filtrovaný do moči je v kyselém prostředí tubulů nefrotoxický (generuje kyslíkové radikály). Precipituje s proteiny a ucpává tubuly (obstrukce). Navíc dochází k vazokonstrikci a ischemii dřeně ledvin.",
          "Nesprávně. Ucpání se děje mikroskopicky v tubulech, ne v makroskopických močovodech (ureterech).",
          "Nesprávně. Přesun vody do poškozených svalů (svalový edém) sice způsobuje hypovolémii, ale hlavním patomechanismem poškození ledvin je přímá toxicita a tubulární obstrukce myoglobinem."
        ]
      }
    ]
  },
  "pract-50": {
    summary: "Srdeční katetrizace a měření tlaků v srdečních oddílech je invazivní metoda k hodnocení srdeční hemodynamiky. Umožňuje stanovení tlakových gradientů, minutového výdeje a přítomnosti zkratů.",
    keyTerms: ["Pravostranná katetrizace", "Tlak v pravé komoře", "Tlakový gradient", "Chlopenní vady", "Měření saturace kyslíku", "Srdeční výdej"],
    richContent: {
      significance: "Invazivní hemodynamické zhodnocení srdečních chlopní, nitrosrdečních tlaků, přítomnosti vrozených zkratových vad a výpočet srdečního výdeje (Fickův princip).",
      high: "Vysoký tlak v pravé síni a komoře (pravostranné selhání, plicní embolie), vysoký systolický tlak v levé komoře a tlakový gradient (aortální stenóza). Nárůst saturace kyslíku v pravé síni/komoře (levopravý zkrat - ASD/VSD).",
      low: "Nízký srdeční index (srdeční výdej přepočtený na plochu těla) u kardiogenního šoku.",
      method: "Zavedení katetru přes v. femoralis (pravé srdce) nebo retrográdně přes a. femoralis (levé srdce) pod rentgenovou kontrolou přímo do srdečních oddílů."
    },
    quiz: [
      {
        question: "Co indikuje zjištění neočekávaně zvýšené saturace kyslíku v krvi odebrané z pravé komory (ve srovnání s krví z pravé síně) během srdeční katetrizace?",
        options: [
          "Přítomnost chlopenní nedomykavosti mitrální chlopně",
          "Přítomnost levopravého zkratu na úrovni komor (defekt komorového septa - VSD), kdy se okysličená krev mísí do pravé komory",
          "Těžkou plicní embolii",
          "Selhání pravé komory z důvodu plicní hypertenze"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Mitrální regurgitace vrací krev do levé síně, neovlivní saturaci v pravé komoře.",
          "Správně! Za fyziologických okolností je krev v pravých srdečních oddílech odkysličená a saturace se v síni a komoře neliší. Pokud je v komorovém septu defekt (VSD), krev z vysokotlakého levého srdce (okysličená) proudí do pravé komory, což zvýší saturaci tamní směsi krve (tzv. step-up saturace).",
          "Nesprávně. Plicní embolie saturaci v pravém srdci nezvyšuje, spíše ji snižuje v celém oběhu.",
          "Nesprávně. Selhání pravé komory nesouvisí se zvýšením lokální saturace."
        ]
      }
    ]
  }
};

// Funkce pro doplnění detailů praktických otázek do COMPLETE_QUESTIONS
function mergePracticalDetails() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Praktická") {
      const rich = PRACTICAL_DETAILS[q.id];
      if (rich) {
        q.keyTerms = rich.keyTerms;
        
        // Sestavíme bohatý text výkladu s dvou-větným tučným shrnutím na konci
        q.detailContent = `
          <div class="medical-detail">
            <section>
              <h3>1. Klinický význam vyšetření</h3>
              <p>${rich.richContent.significance}</p>
            </section>
            
            <section>
              <h3>2. Patofyziologická interpretace výsledků</h3>
              <p>Diferenciální diagnostika a klinická interpretace odchylek:</p>
              <ul>
                <li><strong>Zvýšení hodnot / Patologický nález:</strong> ${rich.richContent.high}</li>
                <li><strong>Snížení hodnot / Fyziologický pokles / Deficit:</strong> ${rich.richContent.low}</li>
              </ul>
            </section>

            <section>
              <h3>3. Metodologické principy a limity</h3>
              <p>${rich.richContent.method}</p>
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
window.PRACTICAL_DETAILS = PRACTICAL_DETAILS;
