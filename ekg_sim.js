// EKG Simulator - Core Script
document.addEventListener("DOMContentLoaded", () => {
  // --- PRESETS DATABASE (21 RHYTHMS) ---
  const EKG_PRESETS = [
    {
      id: "sinus",
      name: "Fyziologický sinusový rytmus",
      category: "Fyziologie",
      hr: 72,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 30,
      description: "Normální elektrická aktivita srdce vycházející ze sinoatriálního (SA) uzlu s pravidelnou frekvencí a standardními vlnami.",
      features: [
        "Pravidelná frekvence (60–90/min)",
        "Vlna P předchází každému komplexu QRS",
        "Předvídatelný interval PQ/PR (120–200 ms)",
        "Šířka QRS pod 120 ms",
        "Izoelektrický úsek ST bez elevací či depresí"
      ],
      pathology: "Hlavní pacemaker srdce (SA uzel) generuje impulsy frekvencí 60-100/min. Vzruch se šíří síňovou svalovinou (vlna P), přes AV uzel (zpoždění = PQ interval) a komorami (QRS komplex), následovaný komorovou repolarizací (T vlna).",
      clinicalNote: "Výchozí standard pro srovnání se všemi patologiemi."
    },
    {
      id: "bradykardie",
      name: "Sinusová bradykardie",
      category: "Fyziologie",
      hr: 45,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 30,
      description: "Sinusový rytmus s frekvencí pod 60/min. Vlny mají normální tvar, pouze intervaly R-R jsou prodloužené.",
      features: [
        "Pravidelný rytmus s pomalou frekvencí (< 60/min)",
        "Normální tvar vln P, QRS a T",
        "PQ interval a šířka QRS v normě",
        "Dlouhé izoelektrické úseky mezi cykly (TP segment)"
      ],
      pathology: "Snížená automaticita SA uzlu. Může být fyziologická (u trénovaných sportovců s vysokým vagovým tonem), v tělesném klidu/spánku, nebo patologická (hypotyreóza, podchlazení, sick sinus syndrom, předávkování beta-blokátory).",
      clinicalNote: "Pokud je asymptomatická (u sportovců), nevyžaduje léčbu. U symptomatických (únava, synkopa) se podává atropin nitrožilně, případně dočasná či trvalá kardiostimulace."
    },
    {
      id: "tachykardie",
      name: "Sinusová tachykardie",
      category: "Fyziologie",
      hr: 125,
      pAmp: 18,
      prInterval: 140,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 35,
      description: "Sinusový rytmus s pravidelnou rychlou frekvencí nad 100/min. Reakce na zátěž nebo patologický stres.",
      features: [
        "Pravidelný rytmus s rychlou frekvencí (> 100/min)",
        "Normální vlna P před každým QRS",
        "Zkrácení úseku TP (vlna T se přibližuje k následující vlně P)",
        "Šířka QRS v normě"
      ],
      pathology: "Zvýšená automaticita SA uzlu vlivem sympatiku. Často jde o kompenzační mechanismus pro udržení srdečního výdeje při anémii, dehydrataci, srdečním selhání, šoku, plicní embolii, nebo reakci na horečku, tyreotoxikózu a stres.",
      clinicalNote: "Léčba je zacílena na vyvolávající příčinu (rehydratace, léčba infekce, úleva od bolesti). Pokud je nutné snížit frekvenci (např. při ischemii myokardu), podávají se beta-blokátory."
    },
    {
      id: "afib",
      name: "Fibrilace síní (arrhythmia absoluta)",
      category: "Arytmie & Blokády",
      hr: 130,
      pAmp: -5,
      prInterval: 120,
      qrsDuration: 75,
      stOffset: 0,
      tAmp: 20,
      irregular: true,
      description: "Nejčastější klinická arytmie s chaotickou, nekoordinovanou aktivitou síní a nepravidelnou odpovědí komor.",
      features: [
        "Zcela nepravidelný komorový rytmus (arrhythmia absoluta, chaos v R-R)",
        "Absence zřetelných P vln, nahrazeny drobnými kmitavými f-vlnkami",
        "Úzké, normálně tvarované QRS komplexy (pokud není raménková blokáda)",
        "Fluktuace izoelektrické linie"
      ],
      pathology: "Síňová aktivita je rozpadlá do mnoha mikro-reentry okruhů generujících 350-600 impulsů/min. AV uzel filtruje tyto impulsy a propouští je nepravidelně dál, což vede k nepravidelnému stahu komor. Síně se mechanicky nestahují, dochází k městnání krve.",
      clinicalNote: "Vysoké riziko trombózy v oušku levé síně s následnou embolizací do mozku (CMP). Nutná antikoagulace (NOAC, Warfarin). Kontrola frekvence (beta-blokátory, digoxin) nebo verze na sinus (kardioverze)."
    },
    {
      id: "flutter",
      name: "Flutter síní s blokádou 3:1",
      category: "Arytmie & Blokády",
      hr: 100, // 300 / 3
      pAmp: 0,
      prInterval: 120,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 22,
      description: "Rychlý, organizovaný síňový rytmus s typickými pilovitými vlnami a pravidelným blokem převodu na komory.",
      features: [
        "Pravidelný komorový rytmus (často subnásobky 300: 150/min u 2:1, 100/min u 3:1)",
        "Síňové vlny 'F' mají tvar pilovitých zubů (nejlépe ve svodech II, III, aVF)",
        "Absence normálních P vln a izoelektrické linie mezi nimi",
        "Normální úzké komplexy QRS"
      ],
      pathology: "Vyvolán makro-reentry okruhem v pravé síni (typicky kolem trikuspidálního anulu - kavotrikuspidální isthmus). Síňová frekvence je 250-350/min. AV uzel propouští vzruchy v pevném poměru (např. 2:1, 3:1, 4:1) z důvodu své refrakterní doby.",
      clinicalNote: "Podobné riziko embolizace jako u fibrilace síní. Terapeuticky velmi účinná je katetrizační radiofrekvenční ablace kavotrikuspidálního isthmu, případně medikamentózní kontrola rytmu/frekvence."
    },
    {
      id: "avblock1",
      name: "AV Blokáda I. stupně",
      category: "Arytmie & Blokády",
      hr: 68,
      pAmp: 18,
      prInterval: 280, // > 200ms
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 30,
      description: "Zpoždění převodu vzruchu ze síní na komory. Každý vzruch projde, ale trvá to déle.",
      features: [
        "Pravidelný rytmus",
        "Prodloužení intervalu PR (PQ) stabilně nad 200 ms (na simulátoru 280 ms)",
        "Každá vlna P je následována kompleksem QRS (převod je 1:1)"
      ],
      pathology: "Funkční nebo organické zpomalení vedení v AV uzlu. Může být vyvoláno zvýšeným tonem vagové dráhy, ischemií (infarkt spodní stěny), léky (beta-blokátory, Ca-blokátory, digoxin), myokarditidou či degenerativními změnami.",
      clinicalNote: "Obvykle benigní, bezpříznakový nález. Nevyžaduje specifickou léčbu, doporučuje se pouze sledování a případná úprava medikace, která by mohla převod dále zpomalovat."
    },
    {
      id: "avblock2_mob1",
      name: "AV Blokáda II. stupně (Mobitz I - Wenckebach)",
      category: "Arytmie & Blokády",
      hr: 55,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 28,
      description: "Postupné prodlužování převodu AV uzlem u každého cyklu, které vrcholí jedním úplným vypadnutím komorového stahu.",
      features: [
        "Nepravidelný rytmus charakterizovaný periodickými skupinami stahů",
        "Postupné prodlužování intervalu PR (PQ) z cyklu na cyklus",
        "Náhlé vypadnutí komplexu QRS po vlně P (izoelektrická rovná čára na místě QRS)",
        "Po vypadlém stahu se PR zkracuje na výchozí hodnotu a cyklus se opakuje"
      ],
      pathology: "Způsobeno progresivní únavou buněk AV uzlu. Po každém impulsu potřebují buňky delší čas k zotavení, až impuls dorazí v absolutní refrakterní fázi a neprojde vůbec. Během pauzy si AV uzel odpočine a další převod je opět rychlý.",
      clinicalNote: "Většinou benigní, často přechodný stav (např. při spánku, u sportovců nebo při akutním infarktu spodní stěny). Pokud nevyvolává symptomy, nevyžaduje terapii, pouze sledování."
    },
    {
      id: "avblock2_mob2",
      name: "AV Blokáda II. stupně (Mobitz II)",
      category: "Arytmie & Blokády",
      hr: 48,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 25,
      description: "Náhlé vypadnutí komorového stahu bez předchozího varování a bez prodlužování PR intervalu. Závažnější stav.",
      features: [
        "Pravidelné nebo nepravidelné vypadávání QRS komplexů",
        "Intervaly PR (PQ) u převedených stahů jsou konstantní (nemění se)",
        "Náhlé vypadnutí QRS po vlně P (např. v poměru 2:1 nebo 3:1)",
        "QRS může být rozšířený (pokud blok leží pod AV uzlem)"
      ],
      pathology: "Lokalizuje se pod AV uzlem, nejčastěji v Hisově svazku nebo raménkách. Jde o organické poškození převodního systému (infarkt přední stěny, těžká degenerace). Blok je typu 'všechno nebo nic' - buď impuls projde normálně, nebo neprojde vůbec.",
      clinicalNote: "Vysoké riziko náhlého přechodu do kompletního bloku (AV blok III) a srdeční zástavy. Jde o přísnou indikaci k implantaci trvalého kardiostimulátoru (pacemakeru), i u asymptomatických pacientů!"
    },
    {
      id: "avblock3",
      name: "AV Blokáda III. stupně (Kompletní disociace)",
      category: "Arytmie & Blokády",
      hr: 33,
      pAmp: 22,
      prInterval: 280,
      qrsDuration: 130, // wide escape
      stOffset: 0,
      tAmp: 25,
      description: "Úplné přerušení převodu vzruchu z síní na komory. Síně a komory pracují na sobě zcela nezávisle.",
      features: [
        "Úplná nezávislost vln P (rychlé, ~75/min) a QRS komplexů (pomalé, ~30-40/min)",
        "Intervaly PP jsou pravidelné a intervaly RR jsou pravidelné, ale bez vzájemné vazby",
        "Rozšířené komplexy QRS (pokud je náhradní rytmus idioventrikulární) nebo úzké (junkční)",
        "Výrazná bradykardie a nízký minutový výdej"
      ],
      pathology: "Kompletní anatomický nebo funkční blok v AV uzlu, Hisově svazku či raménkách. Síně pokračují pod taktovkou SA uzlu, zatímco komory jsou řízeny náhradním únikovým kardiostimulátorem (idionodální nebo idioventrikulární rytmus), který má velmi pomalou automaticitu.",
      clinicalNote: "Život ohrožující stav. Hrozí asystolie, srdeční selhání a Stokes-Adamsův syndrom (synkopa z mozkové ischemie). Nutná akutní stimulace (atropin, isoprenalin, transkutánní kardiostimulace) a následná okamžitá implantace permanentního kardiostimulátoru."
    },
    {
      id: "vt",
      name: "Setrvalá komorová tachykardie (VT)",
      category: "Arytmie & Blokády",
      hr: 160,
      pAmp: 0,
      prInterval: 120,
      qrsDuration: 160, // very wide
      stOffset: 0,
      tAmp: 0, // fused
      description: "Rychlý, pravidelný komorový rytmus vycházející z ektopického ložiska v komorách s širokými komplexy.",
      features: [
        "Vysoká frekvence (120–220/min, na trenažéru 160/min)",
        "Široké, bizarní komplexy QRS (> 120 ms)",
        "Absence P vln (jsou skryty v QRS nebo disociovány)",
        "Pravidelný rytmus s tendencí ke splývání QRS a T vln"
      ],
      pathology: "Vzniká nejčastěji mechanismem reentry na podkladě jizvy po infarktu myokardu nebo v důsledku těžké ischemie. Komory se stahují tak rychle, že diastola je zkrácena na minimum, což drasticky snižuje plnění srdce a srdeční výdej.",
      clinicalNote: "Pokud má pacient hmatný pulz a je stabilní, podávají se antiarytmika (amiodaron). U nestabilního pacienta (hypotenze, dušnost) nebo bezpulsové VT (pVT) se provádí okamžitá synchronizovaná elektrická kardioverze (respektive defibrilace u bezpulsové verze)."
    },
    {
      id: "vfib",
      name: "Fibrilace komor (VF)",
      category: "Arytmie & Blokády",
      hr: 0,
      pAmp: 0,
      prInterval: 0,
      qrsDuration: 250,
      stOffset: 0,
      tAmp: 0,
      chaotic: true,
      description: "Chaotická, nekoordinovaná elektrická aktivita komor s nulovou mechanickou prací. Pacient je v klinické smrti!",
      features: [
        "Nepravidelné, chaotické oscilace různé amplitudy bez jakýchkoli rozeznatelných vln P, QRS či T",
        "Nulová tepová frekvence a nulový pulz",
        "Tzv. šokovatelný rytmus - kritická indikace pro defibrilaci"
      ],
      pathology: "Elektrická dezorganizace komor. Vzruch krouží tisíci chaotickými reentry smyčkami (rotory). Komory se nestahují, pouze se jemně chvějí (třesou), krevní oběh se okamžitě zastavuje, dochází k bezvědomí a klinické smrti.",
      clinicalNote: "Kritický urgentní stav. Okamžitá kardiopulmonální resuscitace (KPR - 30:2) a co nejrychlejší podání elektrického výboje (defibrilace pomocí AED nebo manuálního defibrilátoru) k resetu převodního systému."
    },
    {
      id: "asystole",
      name: "Asystolie",
      category: "Arytmie & Blokády",
      hr: 0,
      pAmp: 0,
      prInterval: 0,
      qrsDuration: 0,
      stOffset: 0,
      tAmp: 0,
      description: "Absolutní absence elektrické i mechanické aktivity komor. Srdce nepracuje.",
      features: [
        "Téměř dokonale rovná izoelektrická čára (s možným drobným šumem)",
        "Nulový pulz, bezvědomí, zástava dechu",
        "Nešokovatelný rytmus - defibrilace je neúčinná a poškozuje myokard!"
      ],
      pathology: "Kompletní ztráta tvorby i vedení elektrických vzruchů v srdci. Může následovat po neléčené komorové fibrilaci, těžké hypoxii, acidóze, hyperkalémii nebo masivním poškození myokardu.",
      clinicalNote: "Léčba spočívá v okamžité a nepřerušované KPR, zajištění dýchacích cest, podávání adrenalinu (1 mg nitrožilně/intraoseálně každých 3-5 minut). Hledají se a léčí reverzibilní příčiny (tzv. 4H a 4T)."
    },
    {
      id: "pea",
      name: "Bezpulsová elektrická aktivita (PEA)",
      category: "Arytmie & Blokády",
      hr: 105,
      pAmp: 15,
      prInterval: 140,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 25,
      description: "Stav, kdy je na EKG přítomen organizovaný elektrický rytmus (často sinusová tachykardie), ale srdce nevykazuje žádnou mechanickou kontrakci a pacient nemá pulz.",
      features: [
        "Na EKG je vidět organizovaný elektrický rytmus (např. sinusový)",
        "Absence hmatného pulsu na velkých tepnách",
        "Tzv. nešokovatelný rytmus pro resuscitaci"
      ],
      pathology: "Převodní systém generuje akční potenciály a svalovina se depolarizuje, ale komory se fyzicky nestahují nebo se nemohou naplnit z důvodu mechanického bloku. Často k tomu dochází při závažné hypovolémii, srdeční tamponádě, tenzním pneumotoraxu nebo masivní plicní embolii.",
      clinicalNote: "Resuscitace pomocí KPR a podání adrenalinu (stejně jako u asystolie). Klíčem k přežití je okamžité odhalení a odstranění vyvolávající příčiny (např. punkce perikardu u tamponády, dekomprese jehlou u tenzního PNO, podání tekutin u hypovolémie)."
    },
    {
      id: "stemi",
      name: "Akutní STEMI (Infarkt myokardu)",
      category: "Ischémie & Infarkty",
      hr: 92,
      pAmp: 16,
      prInterval: 150,
      qrsDuration: 85,
      stOffset: 48, // massive elevation
      tAmp: 55, // Pardee wave
      description: "Akutní transmurální ischemie srdeční stěny způsobená kompletním uzávěrem koronární tepny.",
      features: [
        "Výrazná elevace úseku ST (Pardeeho vlna) splývající s vlnou T",
        "ST elevace přítomná v anatomicky souvisejících svodech (např. V1-V4 pro přední stěnu)",
        "Často doprovázen sinusovou tachykardií",
        "Reciproční deprese ST v protilehlých svodech"
      ],
      pathology: "Kompletní obstrukce koronární arterie (nejčastěji prasknutím aterosklerotického plátu a vznikem trombu) vede k rychlé nekróze myokardu. Nedostatek ATP ochromí sodno-draselnou pumpu, buňky se depolarizují a vzniká proud poškození, který se na EKG projeví elevací ST.",
      clinicalNote: "Čas je sval! Okamžitá hospitalizace na katetrizačním sále (PCI) k obnovení průtoku koronární tepnou (angioplastika/stent). Do té doby podání protidestičkové léčby, heparinu, kyslíku a nitrátů."
    },
    {
      id: "ischemia",
      name: "Ischemie myokardu / NSTEMI",
      category: "Ischémie & Infarkty",
      hr: 85,
      pAmp: 18,
      prInterval: 150,
      qrsDuration: 80,
      stOffset: -12, // ST depression
      tAmp: -25, // inverted T-wave
      description: "Subendokardiální ischemie bez kompletního transmurálního postižení stěny. Projevuje se depresemi ST a negativním T.",
      features: [
        "Deprese úseku ST pod izoelektrickou linii o více než 1 mm (na trenažéru -12 relative units)",
        "Symetricky invertované (záporné, hluboké) vlny T",
        "Normální šířka komplexu QRS"
      ],
      pathology: "Částečný uzávěr nebo těžká stenóza koronární tepny. Ischemie postihuje nejcitlivější vrstvu myokardu - subendokard (podvnitřní vrstvu), která je nejvíce stlačována během systoly a má nejhorší cévní zásobení. Repolarizace probíhá abnormálním směrem.",
      clinicalNote: "Indikace k hospitalizaci a vyšetření srdečních enzymů (troponin). Pokud jsou enzymy pozitivní, jde o NSTEMI. Pacient je léčen antikoagulancii, protidestičkovými léky a koronarografií v horizontu hodin až dnů (podle rizikovosti)."
    },
    {
      id: "lbbb",
      name: "Blokáda levého raménka (LBBB)",
      category: "Arytmie & Blokády",
      hr: 75,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 145, // widened
      stOffset: -5,
      tAmp: 25,
      description: "Porucha vedení v levém Tawarově raménku, která vede k opožděné a abnormální aktivaci levé komory.",
      features: [
        "Rozšíření komplexu QRS nad 120 ms (na trenažéru 145 ms)",
        "Rozeklaný nebo plochý QRS (zářez tvaru M) v levostranných svodech (I, aVL, V5, V6)",
        "Sekundární změny úseku ST (deprese) a vln T (inverze) protisměrně k hlavnímu kmitu QRS"
      ],
      pathology: "Vzruch se šíří nejprve pravou komorou a teprve poté přestupuje mezikomorovým septem na levou komoru. Tento abnormální směr a pomalé šíření pracovním myokardem namísto Purkyňových vláken výrazně prodlužuje a deformuje komorový komplex.",
      clinicalNote: "Nově vzniklý LBBB u pacienta s bolestí na hrudi se patofyziologicky i klinicky staví na roveň STEMI (může maskovat akutní infarkt) a je indikací k okamžité koronarografii. Často doprovází těžkou hypertrofii LK nebo srdeční selhání."
    },
    {
      id: "rbbb",
      name: "Blokáda pravého raménka (RBBB)",
      category: "Arytmie & Blokády",
      hr: 74,
      pAmp: 18,
      prInterval: 150,
      qrsDuration: 135, // widened
      stOffset: 0,
      tAmp: 20,
      description: "Porucha vedení v pravém Tawarově raménku s opožděnou depolarizací pravé komory.",
      features: [
        "Rozšíření komplexu QRS nad 120 ms (na trenažéru 135 ms)",
        "Patognomický tvar R-S-R' (tzv. králičí uši) v pravostranných svodech (V1, V2)",
        "Široké, hluboké S v levostranných svodech (I, V5, V6)"
      ],
      pathology: "Depolarizace komor začíná standardně v levé komoře. Pravá komora se depolarizuje opožděně, až po přechodu vzruchu přes septum z levé strany. Jelikož je masa pravé komory menší než levé, celková hemodynamika bývá méně narušena než u LBBB.",
      clinicalNote: "Může se vyskytnout i u zdravých jedinců (neúplný RBBB). Patologicky doprovází stavy přetěžující pravé srdce (plicní embolie - akutně, cor pulmonale, defekt síňového septa)."
    },
    {
      id: "hyperkalemia",
      name: "Těžká hyperkalémie",
      category: "Ionty & Ostatní",
      hr: 65,
      pAmp: 3, // flattened/almost gone
      prInterval: 220, // prolonged
      qrsDuration: 135, // widened
      stOffset: -2,
      tAmp: 78, // tall peaked symmetrical
      description: "Smrtící elektrolytový rozvrat se zvýšenou hladinou draslíku (> 6.5 mmol/l) ohrožující srdce komorovou zástavou.",
      features: [
        "Extrémně vysoké, symetrické, hrotité vlny T ('stanové T')",
        "Zploštění až úplné vymizení vln P",
        "Prodloužení intervalu PR (PQ)",
        "Rozšíření a deformace komplexu QRS (při extrémních hodnotách splývá s T do sinusové vlny)"
      ],
      pathology: "Vysoký mimobuněčný draslík depolarizuje klidový membránový potenciál kardiomyocytů. To snižuje rychlost fáze 0 akčního potenciálu (inaktivace sodíkových kanálů), což zpomaluje vedení (široký QRS). Zároveň se urychluje fáze 3 repolarizace (vysoké T).",
      clinicalNote: "Urgantní interní stav. Léčbou první volby k ochraně myokardu je nitrožilní podání Kalcium glukonátu (stabilizuje membránu). Dále se podává inzulin s glukózou (přesun draslíku do buněk), kličková diuretika a v těžkých případech dialýza."
    },
    {
      id: "hypokalemia",
      name: "Závažná hypokalémie",
      category: "Ionty & Ostatní",
      hr: 70,
      pAmp: 18,
      prInterval: 170,
      qrsDuration: 80,
      stOffset: -10, // ST depression
      tAmp: 6, // flattened T
      description: "Nízká hladina draslíku v séru (< 3.0 mmol/l) vedoucí k prodloužené repolarizaci komor a vzniku patologické U vlny.",
      features: [
        "Deprese úseku ST",
        "Výrazné zploštění nebo inverze vlny T",
        "Vznik prominentní vlny U následující těsně za vlnou T (vypadá jako druhá malá T vlna)",
        "Zdanlivé prodloužení intervalu QT (ve skutečnosti jde o interval QU)"
      ],
      pathology: "Nízký extracelulární draslík zvyšuje propustnost membrány pro draslík a zpomaluje repolarizaci komor (prodlužuje fázi 3). Purkyňova vlákna mají extrémně prodloužený akční potenciál, což generuje vlnu U a zvyšuje riziko časných následných depolarizací.",
      clinicalNote: "Podávání draslíku (KCl) perorálně nebo pomalou nitrožilní infuzí (nikdy ne jako rychlý bolus - hrozí srdeční zástava!). Nutné monitorovat hladinu hořčíku, jehož nedostatek brání korekci hypokalémie."
    },
    {
      id: "qt_prolongation",
      name: "Prodloužení intervalu QT",
      category: "Ionty & Ostatní",
      hr: 60,
      pAmp: 18,
      prInterval: 150,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 25,
      description: "Prodloužení repolarizace komor (interval QT > 450-480 ms). Významné riziko maligních arytmií.",
      features: [
        "Výrazné prodloužení vzdálenosti od začátku QRS do konce T vlny",
        "Normální šířka QRS a PQ interval",
        "Vlna T je posunuta doprava a může být deformovaná"
      ],
      pathology: "Může být vrozené (mutace kanálů - LQT syndrom) nebo získané (vyvolané léky, např. makrolidy, antipsychotika, antiarytmika třídy IA/III, nebo hypokalémií/hypokalcémií). Zpomalení draslíkových repolarizačních proudů prodlužuje plató fázi akčního potenciálu, což usnadňuje vznik spouštěné aktivity.",
      clinicalNote: "Zásadní je vysadit všechny léky prodlužující QT interval a korigovat iontové dysbalance. Zvýšené riziko přechodu do smrtící polymorfní komorové tachykardie typu Torsades de Pointes."
    },
    {
      id: "torsades",
      name: "Torsades de Pointes",
      category: "Arytmie & Blokády",
      hr: 180,
      pAmp: 0,
      prInterval: 120,
      qrsDuration: 150,
      stOffset: 0,
      tAmp: 0,
      description: "Polymorfní komorová tachykardie s charakteristickým vlněním amplitudy QRS komplexů kolem izoelektrické osy.",
      features: [
        "Vysoká frekvence (150-250/min, na trenažéru 180/min)",
        "Široké bizarní komplexy QRS, jejichž osa a amplituda se plynule mění a otáčí kolem základní linie (vypadá to jako rotující vřeteno)",
        "Nenadálý začátek, často po předchozím prodloužení QT intervalu"
      ],
      pathology: "Specifický typ polymorfní komorové tachykardie vznikající na podkladě časných následných depolarizací (EAD) v podmínkách prodlouženého QT intervalu. Dochází k rotaci elektrického vektoru srdce v trojrozměrném prostoru.",
      clinicalNote: "Akutní léčbou volby je podání síranu hořečnatého (MgSO4) nitrožilně, který stabilizuje vápníkové kanály a potlačuje EAD, a to i u pacientů s normální hladinou hořčíku. Dále se provádí zrychlení tepu (isoprenalin, pacing) k ulehčení repolarizace. Při hemodynamickém kolapsu defibrilace."
    }
  ];

  // --- STATE MANAGEMENT ---
  const simState = {
    activePresetId: "sinus",
    isPlaying: true,
    soundEnabled: false,
    customParams: {
      hr: 72,
      pAmp: 18,
      prInterval: 160,
      qrsDuration: 80,
      stOffset: 0,
      tAmp: 30
    },
    calipersEnabled: false,
    caliperLeft: 180,
    caliperRight: 340,
    
    // Quiz state
    quizMode: false,
    quizPreset: null,
    quizSelectedId: "",
    quizChecked: false,
    score: 0,
    
    // Animation sweep time
    time: 0,
    animationFrameId: null,
    lastBeatTime: 0,
    audioCtx: null
  };

  // --- HTML DOM ELEMENTS (to be referenced after modal open) ---
  let ekgModal, ekgPath, ekgSweepBeam, caliperLeftLine, caliperRightLine, caliperShade;
  let calipersToggle, caliperReadoutBox, caliperValueMs, caliperValueMm, caliperInterpret;
  let playPauseBtn, soundBtn, quizToggleBtn, ekgResetBtn;
  let slidersPanel, presetSelectorPanel, quizPanel, clinicalCard;
  let hrVal, hrInput, prVal, prInput, qrsVal, qrsInput, stVal, stInput, tVal, tInput, pVal, pInput;

  // --- INITIALIZE SOUND BEEP EFFECT ---
  const playBeep = (freq, duration) => {
    if (!simState.soundEnabled) return;
    try {
      if (!simState.audioCtx) {
        simState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = simState.audioCtx;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Web Audio API failed or blocked:", e);
    }
  };

  // --- MATHEMATICAL ECG WAVEFORM GENERATOR ---
  const generateEkgPath = () => {
    const width = 600;
    const baseline = 140;
    
    const activePreset = simState.quizMode && simState.quizPreset
      ? simState.quizPreset
      : EKG_PRESETS.find(p => p.id === simState.activePresetId);
      
    const hr = simState.quizMode ? activePreset.hr : simState.customParams.hr;
    const pAmp = simState.quizMode ? activePreset.pAmp : simState.customParams.pAmp;
    const prInterval = simState.quizMode ? activePreset.prInterval : simState.customParams.prInterval;
    const qrsDuration = simState.quizMode ? activePreset.qrsDuration : simState.customParams.qrsDuration;
    const stOffset = simState.quizMode ? activePreset.stOffset : simState.customParams.stOffset;
    const tAmp = simState.quizMode ? activePreset.tAmp : simState.customParams.tAmp;

    // 1. Chaotic Ventricular Fibrillation plotter
    if (activePreset.chaotic) {
      let path = `M 0 ${baseline}`;
      for (let x = 0; x <= width; x += 3) {
        const phase1 = (x / 14) + (simState.time / 8);
        const phase2 = (x / 5) - (simState.time / 4);
        const noise = Math.sin(phase1) * 35 + Math.cos(phase2) * 15 + Math.sin(x / 2.5) * 8;
        path += ` L ${x} ${baseline + noise}`;
      }
      return path;
    }

    // Calculate triggers for P waves and QRS complexes
    const triggers = [];
    const pTriggers = [];
    
    // beatWidth at 25 mm/s (1 sec = 125 px): beatWidth = 125 * (60 / HR) = 7500 / HR
    // Handle Asystole (zero beats)
    const isAsystole = activePreset.id === "asystole";
    const beatWidth = isAsystole ? 99999 : (7500 / hr);
    
    // Irregular factors for Atrial Fibrillation
    const afibFactors = [0.65, 1.25, 0.75, 1.45, 0.8, 1.15, 0.6, 1.35];
    
    if (!isAsystole) {
      // Draw triggers across the screen width + buffer
      let currentX = 25;
      let idx = 0;
      
      while (currentX < width + 150) {
        // Handle Wenckebach AV conduction (drops every 4th QRS)
        const isWenckebachDrop = (activePreset.id === "avblock2_mob1" && (idx % 4 === 3));
        // Handle Mobitz II conduction (drops every 2nd QRS - 2:1 block)
        const isMobitzDrop = (activePreset.id === "avblock2_mob2" && (idx % 2 === 1));
        
        // P-wave triggers
        if (activePreset.id !== "afib" && activePreset.id !== "flutter" && activePreset.id !== "avblock3") {
          pTriggers.push(currentX);
        }
        
        // QRS-wave triggers
        if (!isWenckebachDrop && !isMobitzDrop && activePreset.id !== "avblock3") {
          // Adjust PQ delay for Wenckebach progressive prolongation
          let pqDelay = prInterval;
          if (activePreset.id === "avblock2_mob1") {
            const step = idx % 4; // 0, 1, 2
            pqDelay = prInterval + step * 40; // progressively longer
          }
          const pqOffsetPx = (pqDelay / 160) * 35;
          triggers.push(currentX + pqOffsetPx);
        }
        
        // Advance currentX
        const factor = activePreset.id === "afib" ? afibFactors[idx % afibFactors.length] : 1.0;
        currentX += beatWidth * factor;
        idx++;
      }
    }
    
    // Generate the path coordinates
    let path = "";
    for (let x = 0; x <= width; x++) {
      let y = baseline;
      
      // A) Sum contributions of nearby QRS triggers (and their subsequent ST and T waves)
      for (let i = 0; i < triggers.length; i++) {
        const x0 = triggers[i];
        const dx = x - x0;
        if (dx < -40 || dx > 130) continue;
        
        // QRS shape parameters
        const qrsHalfWidth = (qrsDuration / 80) * 8;
        const qStart = -qrsHalfWidth;
        const sEnd = qrsHalfWidth;
        
        if (dx >= qStart && dx <= sEnd) {
          const t = (dx - qStart) / (sEnd - qStart); // 0 to 1
          
          // Apply Torsades de Pointes amplitude modulation
          let ampFactor = 1.0;
          if (activePreset.id === "torsades") {
            ampFactor = Math.sin(x0 / 80 + simState.time / 8) * 1.2;
          }
          
          if (t < 0.2) {
            // Q dip
            y += (t / 0.2) * 8 * ampFactor;
          } else if (t >= 0.2 && t < 0.5) {
            // R spike
            const pct = (t - 0.2) / 0.3;
            y += (8 - pct * 113) * ampFactor; // R peak at -105 relative
          } else if (t >= 0.5 && t < 0.8) {
            // S dip
            const pct = (t - 0.5) / 0.3;
            y += (-105 + pct * 130) * ampFactor; // S dip at +25
          } else {
            // Return to baseline or ST offset
            const pct = (t - 0.8) / 0.2;
            y += (25 - pct * (25 - stOffset)) * ampFactor;
          }
        }
        
        // ST Segment and T Wave
        const stLength = (activePreset.id === "qt_prolongation") ? 45 : 18;
        const tStart = sEnd;
        const tEnd = tStart + stLength + 35;
        
        if (dx > sEnd && dx <= tEnd) {
          let ampFactor = 1.0;
          if (activePreset.id === "torsades") {
            ampFactor = Math.sin(x0 / 80 + simState.time / 8) * 1.2;
          }
          
          if (dx <= sEnd + stLength) {
            // ST offset height
            y += stOffset * ampFactor;
          } else {
            // T wave curve
            const t = (dx - (sEnd + stLength)) / 35;
            let shape = Math.sin(t * Math.PI);
            if (activePreset.id === "hyperkalemia") {
              shape = Math.pow(shape, 1.8); // Peak "tent" T wave
            }
            y += (stOffset + shape * tAmp) * ampFactor;
          }
        }
        
        // U wave (hypokalemia)
        if (activePreset.id === "hypokalemia" && dx > tEnd && dx <= tEnd + 25) {
          const t = (dx - tEnd) / 25;
          y += Math.sin(t * Math.PI) * 7;
        }
      }
      
      // B) Sum standard P-wave contributions
      for (let i = 0; i < pTriggers.length; i++) {
        const px0 = pTriggers[i];
        const dx = x - px0;
        if (dx >= -8 && dx <= 8) {
          const t = (dx + 8) / 16;
          y -= Math.sin(t * Math.PI) * pAmp;
        }
      }
      
      // C) Autonomous P-waves or Atrial Fibrillation / Flutter waves
      if (activePreset.id === "avblock3") {
        // Dissociated P waves running regularly at ~75 bpm (every 100 pixels)
        const pFrequency = 100;
        const pOffset = x % pFrequency;
        if (pOffset >= 10 && pOffset <= 28) {
          const t = (pOffset - 10) / 18;
          y -= Math.sin(t * Math.PI) * pAmp;
        }
      } else if (activePreset.id === "afib") {
        // Atrial fibrillation continuous f-waves
        let noiseScale = 1;
        // Suppress noise directly inside the sharp QRS complexes
        for (let i = 0; i < triggers.length; i++) {
          const dx = Math.abs(x - triggers[i]);
          if (dx < 12) noiseScale = dx / 12;
        }
        const fWave = (Math.sin(x * 0.7 + simState.time / 8) * 3.5 + Math.cos(x * 1.4 - simState.time / 6) * 2.2) * noiseScale;
        y += fWave;
      } else if (activePreset.id === "flutter") {
        // Atrial flutter continuous sawtooth waves (sawtooth period = 20 pixels)
        let scale = 1.0;
        for (let i = 0; i < triggers.length; i++) {
          const dx = x - triggers[i];
          if (dx > -5 && dx < 15) scale = 0.1;
        }
        const sawtoothPeriod = 20;
        const phase = (x - simState.time / 2) % sawtoothPeriod;
        const sawtoothVal = ((phase / sawtoothPeriod) - 0.5) * -15 * scale;
        y += sawtoothVal;
      }
      
      // D) Add minor baseline noise for realism (except for chaotic VF)
      if (!activePreset.chaotic) {
        y += Math.sin(x * 0.3) * 0.65;
      }
      
      if (x === 0) {
        path = `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    
    return path;
  };

  // --- CALIPERS MEASUREMENT LOGIC ---
  const updateCaliperReadout = () => {
    if (!simState.calipersEnabled) return;
    
    // Scale: 25mm/s speed. 1 large square = 25px = 5mm = 200ms
    // So 1 pixel = 25mm / 125px = 0.2mm.
    // 1 pixel = 200ms / 25px = 8ms.
    const pxDiff = Math.abs(simState.caliperRight - simState.caliperLeft);
    const msVal = pxDiff * 8;
    const mmVal = (pxDiff * 0.2).toFixed(1);
    
    caliperValueMs.textContent = `${msVal} ms`;
    caliperValueMm.textContent = `(${mmVal} mm)`;
    
    // Render dynamic medical interpretation based on caliper distance
    let interpretation = "Neznámý interval";
    let statusClass = "text-slate-500";
    
    if (msVal >= 120 && msVal <= 200) {
      interpretation = "PQ/PR interval v normě (120-200 ms)";
      statusClass = "text-emerald-500";
    } else if (msVal < 120 && msVal > 50) {
      interpretation = "Zkrácený PQ (např. preexcitace WPW)";
      statusClass = "text-amber-500";
    } else if (msVal > 200 && msVal < 300) {
      interpretation = "Prodloužený PQ (AV Blokáda I. stupně)";
      statusClass = "text-rose-500";
    } else if (msVal >= 300 && msVal <= 500) {
      interpretation = "Výrazně prodloužený PQ (AV Blokáda II. či III. stupně)";
      statusClass = "text-rose-500";
    } else if (msVal >= 60 && msVal <= 110) {
      interpretation = "Šíře QRS v normě (štíhlý komorový komplex)";
      statusClass = "text-emerald-500";
    } else if (msVal > 120 && msVal <= 180) {
      interpretation = "Rozšířený QRS (blokáda Tawarova raménka / komorový původ)";
      statusClass = "text-rose-500";
    } else if (msVal >= 350 && msVal <= 450) {
      interpretation = "Interval QT v normě při běžné frekvenci";
      statusClass = "text-emerald-500";
    } else if (msVal > 460 && msVal <= 650) {
      interpretation = "Prodloužený interval QT (vysoké riziko Torsades de Pointes)";
      statusClass = "text-rose-500";
    } else {
      interpretation = `Rozpětí: ${msVal} ms (~${mmVal} mm na papíře)`;
      statusClass = "text-indigo-500";
    }
    
    caliperInterpret.textContent = interpretation;
    caliperInterpret.className = `ekg-caliper-interpret ${statusClass}`;
    
    // Position the shaded background
    const leftPx = Math.min(simState.caliperLeft, simState.caliperRight);
    const widthPx = Math.abs(simState.caliperRight - simState.caliperLeft);
    caliperShade.style.left = `${leftPx}px`;
    caliperShade.style.width = `${widthPx}px`;
  };

  const handleCaliperDrag = (side, clientX) => {
    const rect = document.querySelector(".ekg-monitor-screen").getBoundingClientRect();
    const x = Math.max(0, Math.min(600, clientX - rect.left));
    
    if (side === "left") {
      simState.caliperLeft = x;
      caliperLeftLine.style.left = `${x}px`;
    } else {
      simState.caliperRight = x;
      caliperRightLine.style.left = `${x}px`;
    }
    updateCaliperReadout();
  };

  // --- RENDERING LOOP ---
  const renderLoop = (timestamp) => {
    if (simState.isPlaying) {
      // Advance beam time
      simState.time = (simState.time + 1.25) % 600;
      ekgSweepBeam.style.left = `${simState.time}px`;
      
      // Redraw SVG path
      ekgPath.setAttribute("d", generateEkgPath());
      
      // Beep sound trigger
      const activePreset = simState.quizMode && simState.quizPreset
        ? simState.quizPreset
        : EKG_PRESETS.find(p => p.id === simState.activePresetId);
        
      if (activePreset.id !== "vfib" && activePreset.id !== "asystole") {
        const hr = simState.quizMode ? activePreset.hr : simState.customParams.hr;
        const beatDurationMs = (60 / hr) * 1000;
        const now = performance.now();
        
        if (now - simState.lastBeatTime > beatDurationMs) {
          simState.lastBeatTime = now;
          
          // Pulsing Heart Icon
          const heartIcon = document.getElementById("ekg-heart-icon");
          if (heartIcon) {
            heartIcon.classList.remove("ekg-heart-pulse");
            void heartIcon.offsetWidth; // trigger reflow
            heartIcon.classList.add("ekg-heart-pulse");
          }
          
          // Pitch adjust based on presets
          if (activePreset.id === "stemi") {
            playBeep(980, 0.12);
            setTimeout(() => playBeep(1180, 0.08), 85);
          } else if (activePreset.id.includes("avblock3")) {
            playBeep(520, 0.2); // bradycardic escape
          } else if (activePreset.id === "hyperkalemia") {
            playBeep(840, 0.16);
          } else {
            playBeep(880, 0.1); // normal sinus beep
          }
        }
      }
    }
    
    simState.animationFrameId = requestAnimationFrame(renderLoop);
  };

  // --- PRESENT LOAD IN EXPLORATION MODE ---
  const loadPreset = (presetId) => {
    const preset = EKG_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    
    simState.activePresetId = presetId;
    
    // Set custom tuning inputs to preset defaults
    simState.customParams = {
      hr: preset.hr,
      pAmp: preset.pAmp,
      prInterval: preset.prInterval,
      qrsDuration: preset.qrsDuration,
      stOffset: preset.stOffset,
      tAmp: preset.tAmp
    };
    
    // Sync UI sliders
    hrInput.value = preset.hr; hrVal.textContent = preset.hr;
    pInput.value = preset.pAmp; pVal.textContent = preset.pAmp;
    prInput.value = preset.prInterval; prVal.textContent = preset.prInterval;
    qrsInput.value = preset.qrsDuration; qrsVal.textContent = preset.qrsDuration;
    stInput.value = preset.stOffset; stVal.textContent = preset.stOffset > 0 ? `+${preset.stOffset}` : preset.stOffset;
    tInput.value = preset.tAmp; tVal.textContent = preset.tAmp;
    
    // Disable sliders that make no physiological sense for specific presets
    prInput.disabled = (presetId === "avblock3" || presetId === "afib" || presetId === "flutter");
    pInput.disabled = (presetId === "avblock3" || presetId === "afib" || presetId === "flutter" || presetId === "vt" || presetId === "vfib" || presetId === "asystole");
    
    // Redraw
    ekgPath.setAttribute("d", generateEkgPath());
    
    // Update Preset list active button
    document.querySelectorAll(".ekg-preset-btn").forEach(btn => {
      btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(`ekg-preset-${presetId}`);
    if (activeBtn) activeBtn.classList.add("active");
    
    // Render Clinical Card details
    document.getElementById("ekg-clinical-name").textContent = preset.name;
    document.getElementById("ekg-clinical-tag").textContent = preset.category.toUpperCase();
    document.getElementById("ekg-clinical-desc").textContent = preset.description;
    
    // Features list
    const featuresList = document.getElementById("ekg-clinical-features");
    featuresList.innerHTML = preset.features.map(f => `<li class="ekg-bullet-item">${f}</li>`).join("");
    
    // Pathophysiology deeper details
    document.getElementById("ekg-clinical-pathology").textContent = preset.pathology;
    document.getElementById("ekg-clinical-note").textContent = preset.clinicalNote;
    
    // PEA Banner visibility
    const peaBanner = document.getElementById("ekg-pea-banner");
    if (peaBanner) {
      if (presetId === "pea") {
        peaBanner.style.display = "flex";
      } else {
        peaBanner.style.display = "none";
      }
    }
    
    // EKG monitor text label
    const monitorTextLabel = document.getElementById("ekg-monitor-label");
    if (monitorTextLabel) {
      monitorTextLabel.innerHTML = `Patologie: <strong style="color: #ffffff;">${preset.name}</strong>`;
    }
    
    const heartTextBpm = document.getElementById("ekg-heart-bpm");
    if (heartTextBpm) {
      heartTextBpm.textContent = preset.id === "vfib" || preset.id === "asystole" ? "☠" : `${preset.hr} bpm`;
    }
  };

  // --- QUIZ MANAGEMENT ---
  const startQuizMode = () => {
    simState.quizMode = true;
    simState.quizPreset = EKG_PRESETS[Math.floor(Math.random() * EKG_PRESETS.length)];
    simState.quizSelectedId = "";
    simState.quizChecked = false;
    
    // UI changes
    slidersPanel.style.display = "none";
    presetSelectorPanel.style.display = "none";
    clinicalCard.style.display = "none";
    quizPanel.style.display = "flex";
    
    document.getElementById("ekg-quiz-score-val").textContent = `${simState.score} b`;
    
    const monitorTextLabel = document.getElementById("ekg-monitor-label");
    if (monitorTextLabel) {
      monitorTextLabel.innerHTML = `<span style="color: #60a5fa; font-weight: bold;">KVÍZ AKTIVNÍ: Určete diagnózu!</span>`;
    }
    
    const heartTextBpm = document.getElementById("ekg-heart-bpm");
    if (heartTextBpm) {
      heartTextBpm.textContent = "??? bpm";
    }
    
    // Render Quiz multiple choices (randomize options, but keep correct one in it)
    const optionsContainer = document.getElementById("ekg-quiz-options");
    optionsContainer.innerHTML = "";
    
    // Pick 4 unique presets for options
    const choices = [simState.quizPreset];
    while (choices.length < 4) {
      const rand = EKG_PRESETS[Math.floor(Math.random() * EKG_PRESETS.length)];
      if (!choices.find(c => c.id === rand.id)) {
        choices.push(rand);
      }
    }
    
    // Shuffle choices
    choices.sort(() => Math.random() - 0.5);
    
    choices.forEach(c => {
      const btn = document.createElement("button");
      btn.className = "ekg-quiz-option-btn";
      btn.dataset.id = c.id;
      btn.textContent = c.name;
      btn.addEventListener("click", () => {
        if (simState.quizChecked) return;
        document.querySelectorAll(".ekg-quiz-option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        simState.quizSelectedId = c.id;
        document.getElementById("ekg-quiz-submit-btn").disabled = false;
      });
      optionsContainer.appendChild(btn);
    });
    
    document.getElementById("ekg-quiz-submit-btn").style.display = "block";
    document.getElementById("ekg-quiz-submit-btn").disabled = true;
    document.getElementById("ekg-quiz-next-btn").style.display = "none";
    document.getElementById("ekg-quiz-feedback").style.display = "none";
    
    // Redraw screen
    ekgPath.setAttribute("d", generateEkgPath());
  };

  const checkQuizAnswer = () => {
    if (!simState.quizSelectedId) return;
    simState.quizChecked = true;
    
    const isCorrect = simState.quizSelectedId === simState.quizPreset.id;
    const optionButtons = document.querySelectorAll(".ekg-quiz-option-btn");
    
    optionButtons.forEach(btn => {
      const id = btn.dataset.id;
      btn.disabled = true;
      if (id === simState.quizPreset.id) {
        btn.classList.add("correct");
      } else if (id === simState.quizSelectedId) {
        btn.classList.add("incorrect");
      }
    });
    
    if (isCorrect) {
      simState.score += 10;
      document.getElementById("ekg-quiz-score-val").textContent = `${simState.score} b`;
    }
    
    // Feedback block
    const feedbackBox = document.getElementById("ekg-quiz-feedback");
    feedbackBox.style.display = "flex";
    feedbackBox.className = `ekg-quiz-feedback ${isCorrect ? "correct" : "incorrect"}`;
    
    feedbackBox.innerHTML = `
      <div style="font-weight: bold; font-size: 11px; display: flex; align-items: center; gap: 4px;">
        ${isCorrect ? '✅ Správná diagnóza!' : '❌ Nesprávná diagnóza!'}
      </div>
      <p style="margin: 0; font-size: 11px;">
        <strong>Patofyziologie:</strong> ${simState.quizPreset.pathology}
      </p>
      <div style="font-size: 10px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 4px; margin-top: 4px;">
        <strong>EKG Znaky:</strong> ${simState.quizPreset.features.join(", ")}
      </div>
    `;
    
    document.getElementById("ekg-quiz-submit-btn").style.display = "none";
    document.getElementById("ekg-quiz-next-btn").style.display = "block";
  };

  const endQuizMode = () => {
    simState.quizMode = false;
    simState.quizPreset = null;
    
    slidersPanel.style.display = "flex";
    presetSelectorPanel.style.display = "flex";
    clinicalCard.style.display = "flex";
    quizPanel.style.display = "none";
    
    document.getElementById("ekg-mode-title").textContent = "MÓD: PROZKOUMÁVÁNÍ";
    
    loadPreset(simState.activePresetId);
  };

  // --- CONSTRUCT MODAL HTML STRUCTURE AND INJECT IT ---
  const injectEkgModalMarkup = () => {
    // Check if dialog already exists
    if (document.getElementById("ekg-modal")) return;
    
    const dialogMarkup = `
      <dialog id="ekg-modal" class="slide-over">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title-area">
              <span class="modal-category" style="color: #10b981; font-weight: 700;">INTERAKTIVNÍ TRÉNAŽÉR & ANALYZÁTOR</span>
              <h2 class="modal-title" style="display: flex; align-items: center; gap: 8px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                EKG Simulátor
              </h2>
            </div>
            <button class="modal-close-btn" id="ekg-modal-close" aria-label="Zavřít panel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div class="modal-body ekg-fade-in">
            <div class="ekg-workdesk">
              
              <!-- LEFT COLUMN: Monitor & Sliders -->
              <div class="ekg-main-col">
                
                <!-- Monitor Screen -->
                <div class="ekg-monitor-screen">
                  
                  <!-- HUD Top -->
                  <div class="ekg-hud-top">
                    <div>Svod II (konstantní monitoring)</div>
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span class="ekg-live-dot"></span>
                      <span>LIVE</span>
                    </div>
                  </div>
                  
                  <!-- HUD Bottom -->
                  <div class="ekg-hud-bottom">
                    <span id="ekg-monitor-label">Patologie: Sinusový rytmus</span>
                    <span style="display: flex; align-items: center; gap: 4px;">
                      <svg id="ekg-heart-icon" width="12" height="12" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" style="vertical-align: middle;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      <span id="ekg-heart-bpm" style="font-weight: bold; color: #ffffff;">72 bpm</span>
                    </span>
                  </div>
                  
                  <!-- Oscilloscope Sweeper beam -->
                  <div class="ekg-sweep-beam" id="ekg-sweep-beam"></div>
                  
                  <!-- Calipers lines -->
                  <div class="ekg-caliper-shade" id="ekg-caliper-shade" style="display: none;"></div>
                  <div class="ekg-caliper-line ekg-caliper-line-left" id="ekg-caliper-left" style="display: none; left: 180px;">
                    <div class="ekg-caliper-handle">X1</div>
                  </div>
                  <div class="ekg-caliper-line ekg-caliper-line-right" id="ekg-caliper-right" style="display: none; left: 340px;">
                    <div class="ekg-caliper-handle">X2</div>
                  </div>
                  
                  <!-- Vector Oscilloscope Path SVG -->
                  <svg width="100%" height="100%" viewBox="0 0 600 280" style="position: absolute; top: 0; left: 0; pointer-events: none; z-index: 1;">
                    <path class="ekg-svg-path" id="ekg-svg-path" d="M 0 140 L 600 140" />
                  </svg>
                  
                </div>
                
                <!-- Sound, Play, Calipers Controls Toolbar -->
                <div class="ekg-toolbar">
                  <div class="ekg-toolbar-actions">
                    <button class="ekg-control-btn active" id="ekg-play-btn" title="Pozastavit / Spustit EKG vlnu">
                      <span>⏸ Pauza</span>
                    </button>
                    <button class="ekg-control-btn" id="ekg-calipers-btn" title="Měřit intervaly PQ, QRS, QT">
                      <span>📏 Pravítko</span>
                    </button>
                    <button class="ekg-control-btn" id="ekg-sound-btn" title="Tón pípání srdce">
                      <span>🔇 Zvuk</span>
                    </button>
                  </div>
                  
                  <!-- Calipers values readout (shown only when calipers active) -->
                  <div class="ekg-caliper-readout-box" id="ekg-calipers-readout" style="display: none;">
                    <span>Měření:</span>
                    <span class="ekg-caliper-value" id="ekg-caliper-ms">0 ms</span>
                    <span id="ekg-caliper-mm" style="opacity: 0.8;">(0 mm)</span>
                    <span id="ekg-caliper-interpret" class="ekg-caliper-interpret">V normě</span>
                  </div>
                </div>
                
                <!-- Manual Tuning Sliders -->
                <div class="ekg-sliders-panel" id="ekg-sliders-panel">
                  <div class="ekg-sliders-header">
                    <h4>🎛 Manuální modulátor EKG</h4>
                    <button class="ekg-reset-btn" id="ekg-reset-btn" title="Vrátit hodnoty na výchozí nastavení patologie">
                      <span>🔄 Reset</span>
                    </button>
                  </div>
                  
                  <div class="ekg-sliders-grid">
                    <!-- HR -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>Frekvence (HR):</span>
                        <span class="ekg-slider-val" id="ekg-val-hr">72 bpm</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-hr" min="30" max="180" value="72">
                    </div>
                    
                    <!-- PR -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>PQ interval:</span>
                        <span class="ekg-slider-val" id="ekg-val-pr">160 ms</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-pr" min="80" max="320" step="5" value="160">
                    </div>
                    
                    <!-- QRS -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>Šíře QRS:</span>
                        <span class="ekg-slider-val" id="ekg-val-qrs">80 ms</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-qrs" min="50" max="220" step="5" value="80">
                    </div>
                    
                    <!-- ST -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>Poloha ST:</span>
                        <span class="ekg-slider-val" id="ekg-val-st">0</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-st" min="-20" max="60" value="0">
                    </div>
                    
                    <!-- T Wave -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>Výška T vlny:</span>
                        <span class="ekg-slider-val" id="ekg-val-t">30 %</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-t" min="0" max="90" value="30">
                    </div>
                    
                    <!-- P Wave -->
                    <div class="ekg-slider-group">
                      <div class="ekg-slider-label-area">
                        <span>Výška P vlny:</span>
                        <span class="ekg-slider-val" id="ekg-val-p">18 %</span>
                      </div>
                      <input type="range" class="ekg-slider-input" id="ekg-input-p" min="-10" max="40" value="18">
                    </div>
                  </div>
                </div>
                
                <!-- PEA Warning Banner -->
                <div class="ekg-pea-alert" id="ekg-pea-banner" style="display: none;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <span>KLINICKÉ VAROVÁNÍ: Elektromechanická disociace (PEA)! Srdce sice generuje elektrické impulzy, ale mechanický pulz pacienta je nulový (šokový stav).</span>
                </div>
                
              </div>
              
              <!-- RIGHT COLUMN: Presets List OR Quiz Control -->
              <div class="ekg-side-col">
                
                <!-- Mode Toggle -->
                <div style="display: flex; gap: 8px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; align-items: center; justify-content: space-between;">
                  <span id="ekg-mode-title" style="font-weight: 800; font-size: 11px; letter-spacing: 0.05em; color: var(--text-secondary);">MÓD: PROZKOUMÁVÁNÍ</span>
                  <button class="btn btn-primary" id="ekg-quiz-toggle-btn" style="padding: 6px 12px; font-size: 0.75rem;">Spustit Zkušební Kvíz</button>
                </div>
                
                <!-- Preset Selector Panel -->
                <div id="ekg-preset-selector-panel" style="display: flex; flex-direction: column; gap: 10px;">
                  <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Vyberte kazuistiku / patologii:</span>
                  
                  <!-- Categories Accordeons -->
                  <div class="ekg-category-group" id="cat-grp-phy">
                    <button class="ekg-category-header">🟢 Fyziologické stavy</button>
                    <div class="ekg-category-content" id="cat-content-phy"></div>
                  </div>
                  
                  <div class="ekg-category-group" id="cat-grp-ary">
                    <button class="ekg-category-header">🟡 Arytmie a Blokády</button>
                    <div class="ekg-category-content" id="cat-content-ary"></div>
                  </div>
                  
                  <div class="ekg-category-group" id="cat-grp-inf">
                    <button class="ekg-category-header">🔴 Ischémie a Infarkty</button>
                    <div class="ekg-category-content" id="cat-content-inf"></div>
                  </div>
                  
                  <div class="ekg-category-group" id="cat-grp-ion">
                    <button class="ekg-category-header">🔵 Ionty a Ostatní</button>
                    <div class="ekg-category-content" id="cat-content-ion"></div>
                  </div>
                </div>
                
                <!-- Clinical Explanation Card -->
                <div class="ekg-explanation-card" id="ekg-clinical-card">
                  <div class="ekg-card-header">
                    <h4>🔬 KLINICKÝ VÝKLAD PATOLOGIE</h4>
                    <span class="ekg-card-tag" id="ekg-clinical-tag">FYZIOLOGIE</span>
                  </div>
                  <h3 class="ekg-card-title" id="ekg-clinical-name">Sinusový rytmus</h3>
                  <p class="ekg-card-desc" id="ekg-clinical-desc">Normální stav.</p>
                  
                  <div>
                    <div class="ekg-bullet-title">Hlavní EKG znaky / diagnostika</div>
                    <ul class="ekg-bullet-list" id="ekg-clinical-features">
                      <li class="ekg-bullet-item">V normě</li>
                    </ul>
                  </div>
                  
                  <div class="ekg-detail-box">
                    <div class="ekg-detail-title">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="vertical-align: middle;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      Patofyziologická kaskáda
                    </div>
                    <div id="ekg-clinical-pathology">Buněčný výklad</div>
                  </div>
                  
                  <div class="ekg-clinical-note">
                    <strong>Lékařský postup a reakce</strong>
                    <span id="ekg-clinical-note">Postup</span>
                  </div>
                </div>
                
                <!-- Quiz Panel (Hidden by default) -->
                <div class="ekg-quiz-card" id="ekg-quiz-panel" style="display: none;">
                  <div class="ekg-quiz-header">
                    <span class="ekg-quiz-title">ZKOUŠKA INTERPRETACE</span>
                    <span class="ekg-quiz-score" id="ekg-quiz-score-val">0 b</span>
                  </div>
                  <div class="ekg-quiz-question-title">Dokážete správně popsat běžící EKG vlevo?</div>
                  <p class="ekg-quiz-desc">
                    Zhodnoťte pravidelnost, přítomnost P vln, šířku QRS a chování úseku ST. Můžete si pomoci měřícím pravítkem.
                  </p>
                  
                  <div class="ekg-quiz-options" id="ekg-quiz-options">
                    <!-- Choices will go here -->
                  </div>
                  
                  <!-- Feedback Area -->
                  <div class="ekg-quiz-feedback" id="ekg-quiz-feedback" style="display: none;">
                    Feedback
                  </div>
                  
                  <div class="ekg-quiz-action-area">
                    <button class="btn btn-primary ekg-btn-wide" id="ekg-quiz-submit-btn">Odeslat diagnózu</button>
                    <button class="btn btn-primary ekg-btn-wide" id="ekg-quiz-next-btn" style="display: none; background: #059669;">Další EKG vzor</button>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </dialog>
    `;
    
    document.body.insertAdjacentHTML("beforeend", dialogMarkup);
  };

  // --- BIND INTERFACES EVENTS AND ACTIONS ---
  const bindEvents = () => {
    // Modal buttons
    ekgModal = document.getElementById("ekg-modal");
    const ekgModalCloseBtn = document.getElementById("ekg-modal-close");
    const openBtn = document.getElementById("ekg-sim-btn");
    
    openBtn.addEventListener("click", () => {
      ekgModal.showModal();
      document.body.style.overflow = "hidden";
      
      // Auto-play and restart renderer
      simState.isPlaying = true;
      playPauseBtn.innerHTML = "<span>⏸ Pauza</span>";
      playPauseBtn.classList.remove("active");
      
      simState.lastBeatTime = performance.now();
      
      if (!simState.animationFrameId) {
        simState.animationFrameId = requestAnimationFrame(renderLoop);
      }
      
      // Reset preset to sinus default on first load
      loadPreset(simState.activePresetId);
    });
    
    const closeModal = () => {
      ekgModal.close();
      document.body.style.overflow = "";
      
      // Stop animation to save CPU
      if (simState.animationFrameId) {
        cancelAnimationFrame(simState.animationFrameId);
        simState.animationFrameId = null;
      }
    };
    
    ekgModalCloseBtn.addEventListener("click", closeModal);
    ekgModal.addEventListener("click", (e) => {
      if (e.target === ekgModal) closeModal();
    });
    
    // Core Simulator Elements
    ekgPath = document.getElementById("ekg-svg-path");
    ekgSweepBeam = document.getElementById("ekg-sweep-beam");
    
    caliperLeftLine = document.getElementById("ekg-caliper-left");
    caliperRightLine = document.getElementById("ekg-caliper-right");
    caliperShade = document.getElementById("ekg-caliper-shade");
    
    calipersToggle = document.getElementById("ekg-calipers-btn");
    caliperReadoutBox = document.getElementById("ekg-calipers-readout");
    caliperValueMs = document.getElementById("ekg-caliper-ms");
    caliperValueMm = document.getElementById("ekg-caliper-mm");
    caliperInterpret = document.getElementById("ekg-caliper-interpret");
    
    playPauseBtn = document.getElementById("ekg-play-btn");
    soundBtn = document.getElementById("ekg-sound-btn");
    quizToggleBtn = document.getElementById("ekg-quiz-toggle-btn");
    ekgResetBtn = document.getElementById("ekg-reset-btn");
    
    slidersPanel = document.getElementById("ekg-sliders-panel");
    presetSelectorPanel = document.getElementById("ekg-preset-selector-panel");
    quizPanel = document.getElementById("ekg-quiz-panel");
    clinicalCard = document.getElementById("ekg-clinical-card");
    
    // Sliders
    hrVal = document.getElementById("ekg-val-hr");
    hrInput = document.getElementById("ekg-input-hr");
    prVal = document.getElementById("ekg-val-pr");
    prInput = document.getElementById("ekg-input-pr");
    qrsVal = document.getElementById("ekg-val-qrs");
    qrsInput = document.getElementById("ekg-input-qrs");
    stVal = document.getElementById("ekg-val-st");
    stInput = document.getElementById("ekg-input-st");
    tVal = document.getElementById("ekg-val-t");
    tInput = document.getElementById("ekg-input-t");
    pVal = document.getElementById("ekg-val-p");
    pInput = document.getElementById("ekg-input-p");

    // Toolbar Play / Pause
    playPauseBtn.addEventListener("click", () => {
      simState.isPlaying = !simState.isPlaying;
      if (simState.isPlaying) {
        playPauseBtn.innerHTML = "<span>⏸ Pauza</span>";
        playPauseBtn.classList.remove("active");
        simState.lastBeatTime = performance.now();
      } else {
        playPauseBtn.innerHTML = "<span>▶ Spustit</span>";
        playPauseBtn.classList.add("active");
      }
    });

    // Calipers Dragging Events
    calipersToggle.addEventListener("click", () => {
      simState.calipersEnabled = !simState.calipersEnabled;
      if (simState.calipersEnabled) {
        calipersToggle.classList.add("active");
        caliperLeftLine.style.display = "flex";
        caliperRightLine.style.display = "flex";
        caliperShade.style.display = "block";
        caliperReadoutBox.style.display = "flex";
        updateCaliperReadout();
      } else {
        calipersToggle.classList.remove("active");
        caliperLeftLine.style.display = "none";
        caliperRightLine.style.display = "none";
        caliperShade.style.display = "none";
        caliperReadoutBox.style.display = "none";
      }
    });

    const dragCaliperLine = (lineEl, side) => {
      lineEl.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const onMouseMove = (ev) => {
          handleCaliperDrag(side, ev.clientX);
        };
        const onMouseUp = () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      });
      
      // Touch support
      lineEl.addEventListener("touchstart", (e) => {
        e.preventDefault();
        const onTouchMove = (ev) => {
          if (ev.touches.length > 0) {
            handleCaliperDrag(side, ev.touches[0].clientX);
          }
        };
        const onTouchEnd = () => {
          window.removeEventListener("touchmove", onTouchMove);
          window.removeEventListener("touchend", onTouchEnd);
        };
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", onTouchEnd);
      });
    };

    dragCaliperLine(caliperLeftLine, "left");
    dragCaliperLine(caliperRightLine, "right");

    // Sound Beep Control
    soundBtn.addEventListener("click", () => {
      simState.soundEnabled = !simState.soundEnabled;
      if (simState.soundEnabled) {
        soundBtn.innerHTML = "<span>🔊 Zvuk</span>";
        soundBtn.classList.add("enabled");
        
        // Resume context in case browser blocked it
        if (!simState.audioCtx) {
          simState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (simState.audioCtx.state === "suspended") {
          simState.audioCtx.resume();
        }
      } else {
        soundBtn.innerHTML = "<span>🔇 Zvuk</span>";
        soundBtn.classList.remove("enabled");
      }
    });

    // Sliders live updates
    hrInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.hr = val;
      hrVal.textContent = `${val} bpm`;
      ekgPath.setAttribute("d", generateEkgPath());
    });
    
    prInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.prInterval = val;
      prVal.textContent = `${val} ms`;
      ekgPath.setAttribute("d", generateEkgPath());
    });
    
    qrsInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.qrsDuration = val;
      qrsVal.textContent = `${val} ms`;
      ekgPath.setAttribute("d", generateEkgPath());
    });
    
    stInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.stOffset = val;
      stVal.textContent = val > 0 ? `+${val}` : val;
      ekgPath.setAttribute("d", generateEkgPath());
    });
    
    tInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.tAmp = val;
      tVal.textContent = `${val} %`;
      ekgPath.setAttribute("d", generateEkgPath());
    });
    
    pInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      simState.customParams.pAmp = val;
      pVal.textContent = `${val} %`;
      ekgPath.setAttribute("d", generateEkgPath());
    });

    // Sliders Reset button
    ekgResetBtn.addEventListener("click", () => {
      loadPreset(simState.activePresetId);
    });

    // Quiz toggle mode
    quizToggleBtn.addEventListener("click", () => {
      if (simState.quizMode) {
        endQuizMode();
        quizToggleBtn.textContent = "Spustit Zkušební Kvíz";
      } else {
        startQuizMode();
        quizToggleBtn.textContent = "Ukončit Kvíz";
        document.getElementById("ekg-mode-title").textContent = "MÓD: TRÉNINKOVÝ KVÍZ";
      }
    });

    // Quiz controls
    document.getElementById("ekg-quiz-submit-btn").addEventListener("click", checkQuizAnswer);
    document.getElementById("ekg-quiz-next-btn").addEventListener("click", () => {
      startQuizMode();
    });

    // Accordions category toggles
    document.querySelectorAll(".ekg-category-header").forEach(header => {
      header.addEventListener("click", () => {
        header.parentElement.classList.toggle("collapsed");
      });
    });
  };

  // --- POPULATE PRESET BUTTONS BY CATEGORY ---
  const populatePresets = () => {
    const listPhy = document.getElementById("cat-content-phy");
    const listAry = document.getElementById("cat-content-ary");
    const listInf = document.getElementById("cat-content-inf");
    const listIon = document.getElementById("cat-content-ion");
    
    EKG_PRESETS.forEach(p => {
      // Determine status dot color
      let dotType = "dot-physiological";
      if (p.category === "Arytmie & Blokády") {
        dotType = p.id === "vfib" || p.id === "asystole" || p.id === "vt" ? "dot-danger pulsing" : "dot-warning";
      } else if (p.category === "Ischémie & Infarkty") {
        dotType = p.id === "stemi" ? "dot-danger pulsing" : "dot-warning";
      } else if (p.category === "Ionty & Ostatní") {
        dotType = p.id === "hyperkalemia" ? "dot-danger" : "dot-warning";
      }
      
      const hrText = p.id === "vfib" || p.id === "asystole" ? "☠" : `${p.hr}/m`;
      
      const btn = document.createElement("button");
      btn.className = "ekg-preset-btn";
      btn.id = `ekg-preset-${p.id}`;
      btn.innerHTML = `
        <span>
          <span class="ekg-preset-dot ${dotType}"></span>
          <span>${p.name}</span>
        </span>
        <span class="ekg-preset-hr-tag">${hrText}</span>
      `;
      
      btn.addEventListener("click", () => {
        loadPreset(p.id);
      });
      
      // Append to the correct category content wrapper
      if (p.category === "Fyziologie") listPhy.appendChild(btn);
      else if (p.category === "Arytmie & Blokády") listAry.appendChild(btn);
      else if (p.category === "Ischémie & Infarkty") listInf.appendChild(btn);
      else if (p.category === "Ionty & Ostatní") listIon.appendChild(btn);
    });
    
    // Collapse all categories except physiological on startup to keep it clean
    document.getElementById("cat-grp-ary").classList.add("collapsed");
    document.getElementById("cat-grp-inf").classList.add("collapsed");
    document.getElementById("cat-grp-ion").classList.add("collapsed");
  };

  // --- BOOTSTRAP INITIALIZATION ---
  const initializeEkg = () => {
    // 1. Inject dialog markup
    injectEkgModalMarkup();
    
    // 2. Populate preset lists
    populatePresets();
    
    // 3. Bind UI actions
    bindEvents();
    
    // 4. Load initial sinus preset
    loadPreset("sinus");
  };

  // Start initialization
  initializeEkg();
});
