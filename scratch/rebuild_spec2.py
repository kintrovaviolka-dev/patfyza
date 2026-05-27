import re

# Load the current file to parse
with open("data_special2.js", "r", encoding="utf-8") as f:
    content = f.read()

# Parse blocks
keys = re.findall(r'"(spec-2-\d+)":\s*\{', content)
blocks = {}
for i, key in enumerate(keys):
    start_idx = content.find(f'"{key}":')
    if i + 1 < len(keys):
        next_key = keys[i+1]
        end_idx = content.find(f'"{next_key}":')
    else:
        end_idx = content.rfind("}")
    
    entry = content[start_idx:end_idx].strip()
    if entry.endswith(","):
        entry = entry[:-1].strip()
    
    num = int(key.split("-")[-1])
    blocks[num] = entry

# Load demyelinizace
with open("scratch/demyel_detail.txt", "r", encoding="utf-8") as f:
    demyel_detail = f.read().strip()

# Define the new split blocks
splits = {}

# Row 7: Preeklampsie, eklampsie, HELLP syndrom
splits[7] = """  "spec-2-7": {
    richContent: {
      definition: "Preeklampsie je multiorgánový syndrom specifický pro těhotenství, charakterizovaný nově vzniklou hypertenzí a proteinuriou po 20. týdnu gestace, způsobený generalizovanou dysfunkcí mateřského cévního endotelu.",
      etiology: [
        "Porucha invaze trofoblastu do mateřských spirálních arterií v děloze, což brání jejich adekvátní remodelaci.",
        "Placentární ischémie s následným uvolňováním humorálních faktorů do oběhu matky.",
        "Rizikové faktory: primiparita, chronická hypertenze matky, diabetes mellitus, obezita, antifosfolipidový syndrom."
      ],
      pathogenesis: [
        "Ischemická placenta produkuje nadbytek rozpustné fms-like tyrosinkinázy-1 (sFlt-1) a rozpustného endoglinu (sEng).",
        "sFlt-1 a sEng vyvazují proangiogenní faktory VEGF (cévní endotelový růstový faktor) a PlGF (placentární růstový faktor) v mateřském oběhu.",
        "Nedostatek volného VEGF a PlGF vede k systémové dysfunkci endotelu matky, poškození glomerulární filtrace (glomerulární endotelióza) a vazospasmu.",
        "Eklampsie vzniká v důsledku edému mozku, ztráty autoregulace mozkového oběhu a vyvolání tonicko-klonických křečí.",
        "HELLP syndrom představuje závažnou formu s mikroangiopatickou hemolýzou (poškození erytrocytů v poškozených cévách), nekrózou hepatocytů (elevace AST/ALT) a spotřební trombocytopenií."
      ],
      clinicalManifestation: [
        "Arteriální hypertenze (krevní tlak >= 140/90 mmHg) a proteinurie (> 300 mg za 24 hodin) po 20. týdnu těhotenství.",
        "Příznaky nitrolebního edému a hypertenze: bolesti hlavy, poruchy vidění (mžitky, rozmazané vidění), epigastrická bolest (otok jater).",
        "Generalizované otoky (obličej, ruce) z důvodu poklesu onkotického tlaku a cévního úniku."
      ],
      diagnostics: [
        "Opakované měření krevního tlaku a stanovení proteinurie v moči.",
        "Stanovení poměru sFlt-1/PlGF v séru matky (zvýšený poměr predikuje rozvoj preeklampsie).",
        "Laboratorní vyšetření krve: trombocyty, jaterní enzymy (AST, ALT), bilirubin, LDH, kreatinin."
      ]
    },
    quiz: [
      {
        question: "Co je hlavním patogenetickým faktorem systémové endoteliózy a hypertenze u preeklampsie?",
        options: [
          "Nadbytek placentárních faktorů sFlt-1 a sEng vyvazujících VEGF a PlGF v mateřském oběhu",
          "Přímá bakteriální infekce dělohy a plodové vody",
          "Deficit estrogenů v časném stadiu puberty matky",
          "Ucpání ledvinných tubulů urolity"
        ],
        correct: 0,
        explanations: [
          "Správně! Ischemická placenta secernuje sFlt-1 a rozpustný endoglin. Tyto molekuly fungují jako 'lapače' pro VEGF a PlGF, což vyvolá deficit těchto růstových faktorů nezbytných pro zdravý mateřský endotel.",
          "Nesprávně. Preeklampsie není způsobena přímou bakteriální infekcí.",
          "Nesprávně. Jedná se o komplikaci těhotenství, s pubertou nesouvisí.",
          "Nesprávně. Urolitiáza nepatří do patogeneze preeklampsie."
        ]
      }
    ]
  }"""

# Row 8: Poruchy tubulů a sběrných kanálků
splits[8] = """  "spec-2-8": {
    richContent: {
      definition: "Poruchy tubulárního transportu a tubulointersticiální nefritidy představují skupinu onemocnění poškozujících renální tubuly a okolní intersticiální tkáň, což vede k narušení koncentrační schopnosti ledvin, acidobazické rovnováhy a resorpce elektrolytů.",
      etiology: [
        "Tubulointersticiální nefritida (TIN): nejčastěji poléková (NSAID, peniciliny, sulfonamidy, kličková diuretika) nebo infekční (pyelonefritida).",
        "Dědičné tubulopatie: Bartterův syndrom (porucha kotransportéru Na-K-2Cl v Henleově kličce), Gitelmanův syndrom (porucha Na-Cl kotransportéru v distálním tubulu), Liddleův syndrom.",
        "Nefrotoxicita: těžké kovy (olovo, kadmium), analgetická nefropatie."
      ],
      pathogenesis: [
        "U TIN vyvolá lék imunopatologickou reakci (nejčastěji typ IV nebo typ I) v intersticiu ledvin, doprovázenou infiltrací T-lymfocytů a eozinofilů, což poškozuje tubulární buňky.",
        "Při poškození tubulů dochází k poruše resorpce vody a solí, což vede k polyurii a ztrátám iontů (Na+, K+, Ca2+, Mg2+).",
        "Renální tubulární acidóza (RTA) vzniká neschopností tubulů secernovat H+ (typ I - distální) nebo resorbovat HCO3- (typ II - proximální)."
      ],
      clinicalManifestation: [
        "Polyurie, polydipsie (nadměrná žízeň) a snížená koncentrační schopnost ledvin (isostenurie).",
        "Svalová slabost a křeče z hypokalémie, případně metabolická acidóza (RTA) s hyperventilací.",
        "U akutní TIN: horečka, kožní exantém, arthralgie a možný rozvoj akutního poškození ledvin s oligurií."
      ],
      diagnostics: [
        "Vyšetření moči: proteinurie (tubulární - nízká molekulární hmotnost, do 2 g/den), leukocyturie (u TIN s přítomností eozinofilů), glykosurie bez hyperglykémie.",
        "Biochemické vyšetření krve: urea, kreatinin, elektrolyty (Na, K, Cl, Ca, Mg), Astrup (pH, HCO3-).",
        "Biopsie ledvin (zlatý standard pro odlišení TIN od glomerulonefritid)."
      ]
    },
    quiz: [
      {
        question: "Která biochemická odchylka v moči je charakteristická pro izolované poškození proximálního tubulu (např. u Fanconiho syndromu)?",
        options: [
          "Masivní glomerulární proteinurie nad 5 g/den s přítomností IgG",
          "Renální glykosurie, aminokyselinurie a fosfaturie při normální hladině glukózy v krvi",
          "Extrémní alkalizace moči na pH 8.5 s přítomností struvitů",
          "Nález hematurie s dysmorfními erytrocyty"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Masivní proteinurie nad 3.5 g/den značí nefrotický syndrom (glomerulární poškození).",
          "Správně! Proximální tubulus resorbuje většinu glukózy, aminokyselin a fosfátů. Jeho selektivní poškození vede k jejich úniku do moči (glykosurie, aminokyselinurie) přestože hladiny v krvi jsou v normě.",
          "Nesprávně. Toto je typické pro infekci ureáza-pozitivními bakteriemi u struvitové litiázy.",
          "Nesprávně. Dysmorfní erytrocyty svědčí o glomerulárním krvácení."
        ]
      }
    ]
  }"""

# Row 9: Systémová autoimunitní onemocnění
splits[9] = """  "spec-2-9": {
    richContent: {
      definition: "Systémová autoimunitní onemocnění (kolagenózy) jsou chronická zánětlivá onemocnění způsobená ztrátou autotolerance, při nichž imunitní systém napadá různé tkáně a orgány vlastního těla, což vede k multiorgánovému poškození.",
      etiology: [
        "Genetická predispozice (zejména asociace s určitými HLA alelami, např. HLA-DR4 u revmatoidní artritidy).",
        "Spouštěče z vnějšího prostředí: virové a bakteriální infekce, UV záření (indukuje apoptózu keratinocytů u SLE), stres, některé léky.",
        "Hormonální vlivy (estrogeny zesilují imunitní odpověď, což vysvětluje výrazně vyšší prevalenci u žen)."
      ],
      pathogenesis: [
        "Ztráta autotolerance vede k aktivaci autoreaktivních T- a B-lymfocytů a tvorbě autoprotilátek.",
        "Systémový lupus erythematodes (SLE): tvorba protilátek proti jaderným antigenům (ANA, anti-dsDNA). Ty tvoří cirkulující imunokomplexy, které se ukládají v cévních stěnách, kloubech a glomerulech ledvin, což spouští komplement a zánět (vaskulitida, nefritida).",
        "Revmatoidní artritida (RA): zánětlivá infiltrace synovie kloubu (synovitida) vede k tvorbě granulační tkáně (pannus), která destruuje kloubní chrupavku a kost.",
        "Systémová sklerodermie: autoimunitní vaskulopatie a aktivace fibroblastů vede k nadměrnému ukládání kolagenu a fibrotizaci kůže a vnitřních orgánů.",
        "Sjögrenův syndrom: autoimunitní destrukce exokrinních žláz (slzné, slinné) lymfocytárním infiltrátem."
      ],
      clinicalManifestation: [
        "SLE: motýlovitý exantém na obličeji, artritida, lupusová nefritida, serozitidy (pleuritida, perikarditida), únava.",
        "RA: symetrická bolest a ranní ztuhlost drobných kloubů rukou a nohou, kloubní deformity (ulnární deviace prstů).",
        "Sklerodermie: Raynaudův fenomén (záchvatovité zbělení prstů chladem), tuhnutí kůže obličeje (maskovitý obličej), dysfágie.",
        "Sjögrenův syndrom: keratoconjunctivitis sicca (suchost očí, pocit písku v očích) a xerostomie (suchost v ústech)."
      ],
      diagnostics: [
        "Laboratorní průkaz autoprotilátek: ANA (vysoce senzitivní u SLE), anti-dsDNA a anti-Sm (specifické pro SLE); RF (revmatoidní faktor) a anti-CCP (vysoce specifické pro RA); anti-SSA a anti-SSB (Sjögrenův syndrom).",
        "Markery zánětu: elevace CRP a sedimentace erytrocytů (FW).",
        "Rentgenové snímky kloubů u RA (průkaz erozí a zúžení kloubních štěrbin)."
      ]
    },
    quiz: [
      {
        question: "Který imunopatologický mechanismus je klíčový pro rozvoj orgánového poškození (např. nefritidy) u Systémového lupusu erythematodes (SLE)?",
        options: [
          "Typ III imunopatologické reakce - ukládání cirkulujících imunokomplexů (antigen-protilátka) v tkáních a následná aktivace komplementu",
          "Typ I hypersenzitivní reakce zprostředkovaná IgE a degranulací žírných buněk",
          "Přímé toxické působení kyseliny močové na buněčné membrány",
          "Nervosvalová blokáda protilátkami proti acetylcholinovému receptoru"
        ],
        correct: 0,
        explanations: [
          "Správně! SLE is prototypem onemocnění vyvolaného imunokomplexy (reakce III. typu). Protilátky proti jaderným strukturám (např. anti-dsDNA) tvoří s antigeny komplexy, které se zachycují v cévách a glomerulech (lupusová nefritida), kde vyvolají zánět a poškození tkání.",
          "Nesprávně. Reakce I. typu (IgE) se uplatňuje u alergií a anafylaxe.",
          "Nesprávně. Kyselina močová způsobuje dnu, nikoliv SLE.",
          "Nesprávně. Protilátky proti AChR způsobují myasthenia gravis."
        ]
      }
    ]
  }"""

# Row 10: Poruchy spánku
splits[10] = """  "spec-2-10": {
    richContent: {
      definition: "Poruchy spánku zahrnují stavy narušující kvalitu, délku a časování spánku. Obstrukční spánková apnoe (OSA) je závažné onemocnění charakterizované opakovaným kolapsem horních dýchacích cest během spánku, což vede k zástavám dechu (apnoím) a chronické intermitentní hypoxii.",
      etiology: [
        "Obezita (zejména akumulace tuku v oblasti krku zvyšující mechanický tlak na hltan).",
        "Anatomické poměry: mikrognatie (malá dolní čelist), makroglosie (velký jazyk), hypertrofie tonzil (zejména u dětí).",
        "Faktory snižující svalový tonus: alkohol před spaním, sedativa, myorelaxancia, stárnutí."
      ],
      pathogenesis: [
        "Během spánku fyziologicky klesá svalový tonus. U predisponovaných jedinců to vede k úplnému nebo částečnému uzávěru (kolapsu) lumen hltanu při nádechu.",
        "Kolaps dýchacích cest vyvolá apnoi (zástavu dechu na >= 10 sekund) nebo hypopnoi, což vede k poklesu tlaku kyslíku (O2) a vzestupu oxidu uhličitého (CO2) v krvi.",
        "Hypoxie a hyperkapnie stimulují chemoreceptory a aktivují sympatický nervový systém, což vyvolá mikroprobuzení (arousal), které obnoví svalový tonus hltanu a umožní nádech (často doprovázený hlasitým zachrápáním).",
        "Opakovaná fragmentace spánku a sympatická aktivita vedou k endoteliální dysfunkci, inzulínové rezistenci, arteriální hypertenzi a zvýšenému kardiovaskulárnímu riziku."
      ],
      clinicalManifestation: [
        "Hlasité, nepravidelné chrápání střídané tichými apnoickými pauzami (často referováno partnerem).",
        "Výrazná denní spavost (hypersomnie), únava, ranní bolesti hlavy, poruchy soustředění a kognitivních funkcí.",
        "Rozvoj rezistentní arteriální hypertenze, plicní hypertenze a srdečních arytmií."
      ],
      diagnostics: [
        "Polysomnografie (PSG) ve spánkové laboratoři: monitorování EEG, EKG, dýchání, saturace O2 a pohybů těla.",
        "Limitovaná polygrafie (domácí screeningový test monitorující saturaci, puls a dechové úsilí).",
        "Klíčový ukazatel: AHI (Apnea-Hypopnea Index) – průměrný počet apnoí a hypopnoí za hodinu spánku (AHI >= 5 je patologické)."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostředním patofyziologickým spouštěčem mikroprobuzení (arousalu) na konci apnoické pauzy u pacientů s OSA?",
        options: [
          "Extrémní nárůst krevního tlaku stimulující baroreceptory",
          "Rozvoj hypoxémie a hyperkapnie detekovaný chemoreceptory, doprovázený dechovým úsilím proti uzavřeným dýchacím cestám",
          "Pokles srdeční frekvence pod 30 tepů za minutu",
          "Náhlá sekrece melatoninu z epifýzy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Baroreceptory dech nestartují přímo.",
          "Správně! Během apnoe klesá pO2 a roste pCO2. Stimulace chemoreceptorů a rostoucí úsilí dýchacích svalů překonat překážku vysílají silné signály do mozkové kůry, což vede k probuzení (arousalu), zvýšení tonu svalů hltanu a otevření dýchacích cest.",
          "Nesprávně. Bradykardie doprovází apnoi, ale arousal je vyvolán metabolickými signály a dechovým úsilím.",
          "Nesprávně. Melatonin spánek navozuje, mikroprobuzení nezpůsobuje."
        ]
      }
    ]
  }"""

# Row 15: Poruchy endokrinních funkcí ledvin
splits[15] = """  "spec-2-15": {
    richContent: {
      definition: "Ledviny mají významné endokrinní funkce, produkují hormony (renin, erytropoetin, aktivní vitamin D - kalcitriol) a působí jako cílový orgán pro jiné hormony. Poruchy těchto funkcí doprovázejí zejména chronická onemocnění ledvin.",
      etiology: [
        "Chronické selhání ledvin (CKD) s progresivním zánikem funkčního parenchymu ledvin.",
        "Renální ischémie (stenóza renální tepny stimulující nadprodukci reninu).",
        "Genetické mutace (např. 1a-hydroxylázy)."
      ],
      pathogenesis: [
        "Erytropoetin (EPO) je tvořen peritubulárními buňkami v kůře ledvin. Jeho nedostatek při úbytku parenchymu vede k poklesu stimulace erytropoézy v kostní dřeni.",
        "Kalcitriol (1,25(OH)2D) je aktivován hydroxylací v tubulárních buňkách. Nedostatek kalcitriolu vede k sníženému vstřebávání vápníku ve střevě (hypokalcémie). Hypokalcémie a retence fosfátů stimulují nadprodukci parathormonu (sekundární hyperparatyreóza) vedoucí k odbourávání kostí.",
        "Renin je produkován juxtaglomerulárním aparátem při poklesu perfuzního tlaku v ledvině. Jeho nadprodukce aktivuje systém RAAS, což zvyšuje resorpci sodíku a vody a vyvolává systémovou vazokonstrikci (renální arteriální hypertenze)."
      ],
      clinicalManifestation: [
        "Renální anémie (normocytární, normochromní) projevující se únavou, bledostí a dušností.",
        "Renální osteodystrofie (bolesti kostí, zvýšené riziko zlomenin) v důsledku sekundární hyperparatyreózy.",
        "Renální hypertenze (často refrakterní a závažná)."
      ],
      diagnostics: [
        "Laboratorní vyšetření: krevní obraz (hemoglobin, hematokrit), vápník, fosfor, PTH (parathormon), urea, kreatinin, eGFR.",
        "Stanovení hladiny erytropoetinu a vitaminu D v séru.",
        "Měření krevního tlaku a duplexní sonografie ledvinných tepen."
      ]
    },
    quiz: [
      {
        question: "Jakým patofyziologickým mechanismem vede chronické selhání ledvin k rozvoji sekundární hyperparatyreózy?",
        options: [
          "Nedostatkem hydroxylace vitaminu D a retencí fosfátů ledvinami, což způsobuje hypokalcémii, která stimuluje příštítná tělíska k sekreci PTH",
          "Přímou stimulací příštítných tělísek hromadícím se močovým dusíkem (ureou)",
          "Nadprodukcí reninu, který přímo stimuluje buňky příštítných tělísek",
          "Zvýšenou ztrátou PTH do moči tubulárním systémem"
        ],
        correct: 0,
        explanations: [
          "Správně! Ledviny za normálních okolností aktivují vitamin D a vylučují fosfáty. Při jejich selhání klesá kalcitriol (snižuje se absorpce Ca ve střevě) a stoupá fosforem vyvolaná hypokalcémie. Nízká hladina volného vápníku v krvi stimuluje příštítná tělíska k masivní sekreci PTH.",
          "Nesprávně. Urea přímo příštítná tělíska nestimuluje.",
          "Nesprávně. Renin působí na angiotenzinogen, nikoli na příštítná tělíska.",
          "Nesprávně. PTH se do moči významně neztrácí, jeho hladina v krvi stoupá."
        ]
      }
    ]
  }"""

# Row 16: Poruchy bazálních ganglií, Parkinsonova nemoc, limbický systém
splits[16] = """  "spec-2-16": {
    richContent: {
      definition: "Poruchy bazálních ganglií (např. Parkinsonova nemoc) vedou k narušení kontroly a modulace volní motoriky. Poruchy limbického systému postihují zpracování emocí, paměť a autonomní reakce.",
      etiology: [
        "Parkinsonova nemoc: neurodegenerativní proces spojený s degenerací dopaminergních neuronů v substantia nigra pars compacta a hromaděním Lewyho tělísek (alfa-synuklein).",
        "Poruchy limbického systému: traumata spánkového laloku, ischémie, virová encefalitida (herpes simplex), Alzheimerova choroba."
      ],
      pathogenesis: [
        "Parkinson: Deficit dopaminu ve striatu vede k nerovnováze mezi přímou (facilitující pohyb) a nepřímou (tlumící pohyb) dráhou bazálních ganglií. Převaha nepřímé dráhy vede k nadměrnému útlumu motorické kůry přes thalamus.",
        "Limbický systém: Poškození hippokampu narušuje konsolidaci paměťové stopy (anterográdní amnézie). Poškození amygdaly narušuje emoční zpracování (strach, agrese)."
      ],
      clinicalManifestation: [
        "Parkinson: Klasická triáda - klidový třes (tremor), rigidita (zvýšený svalový tonus se syndromem ozubeného kola), bradykinéza (pomalost pohybu) až akineze. Dále posturální nestabilita (pády) a hypomimie (maskovitý obličej).",
        "Limbický systém: Poruchy paměti (Korsakovův syndrom, Alzheimerova demence), emoční labilita, Klüver-Bucy syndrom (hyperorálnost, hypersexualita, absence strachu při oboustranném poškození amygdaly)."
      ],
      diagnostics: [
        "Klinické neurologické vyšetření (hodnocení motoriky, třesu, chůze a kognitivních testů jako MMSE).",
        "MRI mozku k vyloučení ložiskových lézí (nádory, CMP) a posouzení atrofie hippokampů.",
        "DaTSCAN (SPECT s ligandem pro dopaminergní transportéry) k průkazu deficitu dopaminergních zakončení ve striatu."
      ]
    },
    quiz: [
      {
        question: "Která z následujících patofyziologických změn v bazálních gangliích je přímou příčinou bradykinézy u Parkinsonovy nemoci?",
        options: [
          "Deficit dopaminu ze substantia nigra vede k nedostatečné stimulaci striata, což způsobí nadměrný útlum thalamu a motorické kůry",
          "Nadbytek acetylcholinu v mozkové kůře, který ničí motorické neurony",
          "Destrukce motoneuronů v předních rozích míšních",
          "Blokáda sodíkových kanálů na nervosvalové ploténce"
        ],
        correct: 0,
        explanations: [
          "Správně! Degenerace dopaminergních neuronů substantia nigra pars compacta vede k deficitu dopaminu ve striatu. To zvýší aktivitu tlumivých výstupních drah bazálních ganglií, které utlumí thalamus, což následně sníží stimulaci motorické kůry a vyvolá bradykinézu.",
          "Nesprávně. Acetylcholinové neurony neumírají a neničí přímo motorickou kůru.",
          "Nesprávně. Motoneurony v míše jsou poškozeny u ALS (amyotrofické laterální sklerózy), ne u Parkinsonovy nemoci.",
          "Nesprávně. Sodíkové kanály na ploténce nejsou u Parkinsonovy nemoci postiženy."
        ]
      }
    ]
  }"""

# Row 17: Poranění míchy
splits[17] = """  "spec-2-17": {
    richContent: {
      definition: "Poranění míchy a transverzální léze míšní vedou k přerušení motorických, senzitivních a autonomních drah mezi mozkem a periferií pod úrovní poškození, což vede k plegii, anestezii a dysfunkci vnitřních orgánů.",
      etiology: [
        "Trauma páteře (autonehody, pády, sportovní úrazy, skoky do vody) s frakturou a dislokací obratlů.",
        "Komprese míchy: spinální tumory, metastázy, epidurální absces, výhřez meziobratlové ploténky.",
        "Ischémie míchy (uzávěr a. spinalis anterior)."
      ],
      pathogenesis: [
        "Akutní fáze - Míšní šok: bezprostředně po úrazu dochází k dočasnému vyhasnutí veškeré reflexní aktivity pod úrovní léze z důvodu náhlé ztráty descendentní facilitace z mozku.",
        "Chronická fáze - Spasticita: po odeznění míšního šoku (týdny) dochází k rozvoji hyperreflexie a spasticity, protože míšní segmenty pod lézí jsou zbaveny tlumivých vlivů kůry.",
        "Přerušení drah: tractus corticospinalis (plegie), zadní provazce a tractus spinothalamicus (ztráta čití).",
        "Autonomní dysreflexie: u lézí nad úrovní Th6 může nekontrolovaná aktivace sympatiku (vyvolaná např. distenzí močového měchýře) způsobit extrémní hypertenzi s rizikem CMP."
      ],
      clinicalManifestation: [
        "Plegie (paraplegie u hrudní/bederní léze, tetraplegie u krční léze).",
        "Ztráta všech kvalit čití (dotek, bolest, teplota, vibrace, propriocepce) pod úrovní léze.",
        "Míšní šok: chabá obrna, areflexie, svalová atonie, retence moči a stolice. Později: spastická obrna, hyperreflexie, Babinského příznak.",
        "Poruchy sfinkterů (spastický močový měchýř, inkontinence)."
      ],
      diagnostics: [
        "Neurologické vyšetření: stanovení výšky léze (podle dermatomů a myotomů) pomocí škály ASIA.",
        "CT páteře k zobrazení kostních traumat.",
        "MRI páteře a míchy k posouzení otoku míchy, hematomu, komprese nebo anatomického přerušení."
      ]
    },
    quiz: [
      {
        question: "Který z následujících projevů charakterizuje stav pacienta během akutního míšního šoku (těsně po traumatu míchy)?",
        options: [
          "Spastická paralýza s výraznou hyperreflexií a klonem",
          "Chabá paralýza se ztrátou svalového tonu, areflexií a retencí moči",
          "Extrémní pocení a hypertermie v dolní polovině těla",
          "Zvýšená citlivost na vibrace"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Spastická paralýza a hyperreflexie se rozvíjejí až v chronické fázi po odeznění míšního šoku.",
          "Správně! Bezprostředně po přerušení míchy dochází k míšnímu šoku. Ztráta veškerých nervových impulsů z vyšších center způsobí chabou obrnu, ztrátu šlachových reflexů, atonii svalů a neschopnost vyprázdnit močový měchýř (retence moči).",
          "Nesprávně. Dochází k anhidróze (suchá kůže) a poikilotermii pod úrovní léze.",
          "Nesprávně. Citlivost je zcela vymizelá (anestezie)."
        ]
      }
    ]
  }"""

# Row 22: Myopatie, rhabdomyolýza
splits[22] = """  "spec-2-22": {
    richContent: {
      definition: "Myopatie jsou onemocnění postihující kosterní svalovinu, vedoucí k její strukturální a funkční dysfunkci. Rhabdomyolýza je akutní syndrom charakterizovaný rychlým rozpadem poškozených vláken kosterního svalstva a uvolněním svalových komponent (zejména myoglobinu a draslíku) do systémového oběhu.",
      etiology: [
        "Myopatie: dědičné (Duchennova svalová dystrofie), zánětlivé (polymyozitida, dermatomyozitida) nebo toxické (vyvolané statiny, alkoholem).",
        "Rhabdomyolýza: crush syndrom (přímé zavalení a stlačení svalů), ischémie končetin, extrémní svalová zátěž (maraton, křeče), závažné infekce, drogy (kokain, amfetamin)."
      ],
      pathogenesis: [
        "Společný mechanismus poškození: porucha permeability sarkolemy nebo nedostatek buněčné energie (ATP) vede k masivnímu vtoku vápníku (Ca2+) do svalové buňky.",
        "Vysoký intracelulární vápník aktivuje proteázy a fosfolipázy, které destruují buněčné organely a myofilamenta, což vede k nekróze buňky.",
        "Rozpad vláken uvolní do krve myoglobin, draslík (K+ - riziko maligních arytmií), fosfáty a kreatinkinázu.",
        "Myoglobin v tubulech ledvin precipituje v kyselém prostředí moči a vyvolá přímé toxické poškození tubulů (myoglobinurické akutní poškození ledvin - AKI)."
      ],
      clinicalManifestation: [
        "Svalová slabost, myalgie (bolest svalů) a otok poškozených svalů (zejména na stehnech a ramenech).",
        "Tmavě hnědá, zakalená moč (vzhledu koly) způsobená myoglobinurií.",
        "Komplikace: compartment syndrom (otok svalu uvnitř fasciálního lože stlačí cévy a nervy), hyperkalémie a akutní oligurické poškození ledvin."
      ],
      diagnostics: [
        "Biochemický průkaz: extrémní elevace kreatinkinázy v séru (CK, typicky > 5x až 100x nad normu).",
        "Průkaz myoglobinu v moči při absenci erytrocytů v mikroskopickém sedimentu (chemická detekce krve proužkem je pozitivní kvůli pseudoperoxidázové aktivitě myoglobinu).",
        "Laboratorní sledování draslíku, fosforu, urey a kreatininu k včasné detekci selhání ledvin."
      ]
    },
    quiz: [
      {
        question: "Proč vede k poškození ledvin (AKI) při masivní rhabdomyolýze?",
        options: [
          "Myoglobin uvolněný ze svalů je filtrován ledvinami a působí přímo cytotoxicky na tubuly, kde navíc precipituje a ucpává je",
          "Svalová kreatinkináza přímo ucpává glomerulární membránu ledvin",
          "Vysoký draslík vyvolá vazodilataci ledvinných cév a hyperfiltraci",
          "Ledviny jsou napadeny protilátkami proti příčně pruhovanému svalu"
        ],
        correct: 0,
        explanations: [
          "Správně! Svalový protein myoglobin je po rozpadu svalů filtrován v glomerulech. Při jeho vysoké koncentraci a v kyselém prostředí ledvinných tubulů precipituje s Tamm-Horsfallovým proteinem a ucpává je. Navíc má přímý nefrotoxický účinek na buňky tubulů.",
          "Nesprávně. Kreatinkináza je velký protein, který se běžně nefiltruje a ledviny neucpává.",
          "Nesprávně. Draslík způsobuje arytmie, nikoli hyperfiltraci v ledvinách.",
          "Nesprávně. Nejedná se o autoimunitní útok na ledviny."
        ]
      }
    ]
  }"""

# Row 23: Krvácení do GIT
splits[23] = """  "spec-2-23": {
    richContent: {
      definition: "Krvácení do gastrointestinálního traktu (GIT) je závažný stav rozdělovaný podle lokalizace na horní (nad Treitzovým ligamentem) a dolní (pod Treitzovým ligamentem), který může vést k rozvoji hemoragického šoku.",
      etiology: [
        "Horní GIT: peptické vředy žaludku a duodena (nejčastější), jícnové varixy (při portální hypertenzi), Mallory-Weissův syndrom (trhliny sliznice jícnu při zvracení), gastropatie.",
        "Dolní GIT: divertikulóza tlustého střeva, hemoroidy, angiodysplázie, kolorektální karcinom, nespecifické záněty (ulcerózní kolitida)."
      ],
      pathogenesis: [
        "Narušení stěny cévy patologickým procesem (kyselina u vředů, mechanická trhlina, nádorový rozpad).",
        "Akutní ztráta krve snižuje cirkulující objem (hypovolémie). Dochází k poklesu žilního návratu, plnícího tlaku srdce a minutového výdeje.",
        "Kompenzace: aktivace sympatiku vyvolá tachykardii, zvýšení kontraktility myokardu a selektivní vazokonstrikci v kůži, splanchniku a ledvinách (centralizace oběhu)."
      ],
      clinicalManifestation: [
        "Krvácení z horního GIT: hemateméza (zvracení čerstvé nebo natrávené krve vzhledu kávové sedliny) a meléna (černá, dehtovitá, zapáchající stolice z důvodu natrávení hemoglobinu).",
        "Krvácení z dolního GIT: enteroragie (odchod čerstvé červené krve z konečníku) nebo příměs krve ve stolici.",
        "Příznaky šoku: hypotenze, tachykardie, bledost, studený pot, oligurie, zmatenost."
      ],
      diagnostics: [
        "Urgentní endoskopie: gastroskopie u horního GIT, kolonoskopie u dolního GIT k lokalizaci a endoskopickému zastavení krvácení.",
        "Sledování krevního obrazu (hemoglobin, hematokrit) a koagulačních parametrů (INR, aPTT).",
        "Angiografie nebo scintigrafie k průkazu zdroje při nejasném krvácení."
      ]
    },
    quiz: [
      {
        question: "Který z následujících klinických projevů je typický pro krvácení z horního úseku GIT (např. prasklý žaludeční vřed)?",
        options: [
          "Meléna - černá, dehtovitá a zapáchající stolice s natrávenou krví",
          "Enteroragie - odchod čisté, jasně červené krve bez příměsi stolice",
          "Tmavě hnědá moč s obsahem myoglobinu",
          "Výskyt pavoučkovitých névů na obličeji"
        ],
        correct: 0,
        explanations: [
          "Správně! U krvácení z horního GIT (nad Treitzovým vazem) je krev v žaludku a tenkém střevě vystavena kyselině chlorovodíkové a trávicím enzymům. Hemoglobin se mění na hematin, což dává stolici typicky černou, dehtovitou barvu (meléna).",
          "Nesprávně. Enteroragie je typická pro krvácení z dolního GIT.",
          "Nesprávně. Hnědá moč značí rhabdomyolýzu, ne krvácení do GIT.",
          "Nesprávně. Pavoučkovité névy jsou projevem chronického selhání jater."
        ]
      }
    ]
  }"""

# Row 24: Kóma
splits[24] = """  "spec-2-24": {
    richContent: {
      definition: "Kóma je stav hlubokého bezvědomí, z něhož pacienta nelze probrat ani silnými zevními podněty. Locked-in syndrom je stav kompletní motorické plegie při zachovalém vědomí. Smrt mozku je ireverzibilní ztráta všech mozkových funkcí včetně mozkového kmene.",
      etiology: [
        "Kóma: strukturální poškození mozku (trauma, masivní krvácení, rozsáhlá CMP, tumory) nebo metabolické příčiny (hypoglykémie, urémie, jaterní kóma, intoxikace).",
        "Locked-in syndrom: oboustranný infarkt pontu (např. při uzávěru a. basilaris).",
        "Smrt mozku: těžký edém mozku s nitrolební hypertenzí překračující perfuzní tlak, traumatické přerušení kmene."
      ],
      pathogenesis: [
        "Kóma: narušení buď oboustranných hemisfér mozkové kůry, nebo retikulárního aktivačního systému (ARAS) v mozkovém kmeni, který udržuje bdělost.",
        "Locked-in: selektivní léze eferentních motorických drah (pyramidová dráha, kortikobulbární dráha) v pontu. Ascendentní dráhy (čití) a retikulární formace (vědomí) jsou nepoškozené.",
        "Smrt mozku: úplné a nevratné vymizení perfuze mozku. Tlak v lebce (ICP) převýší střední arteriální tlak (MAP), což zastaví přísun kyslíku a živin, a nastává autolýza mozkové tkáně."
      ],
      clinicalManifestation: [
        "Kóma: oči jsou zavřené, absence smysluplné odpovědi na bolest, nepravidelné dechové vzory, vyhasnutí nebo patologie kmenových reflexů.",
        "Locked-in: pacient si plně uvědomuje okolí, slyší a vidí, ale je schopen komunikovat pouze vertikálními pohyby očí a mrkáním.",
        "Smrt mozku: hluboké kóma, areflexie nad úrovní míchy, fixovaná oboustranná mydriáza bez fotoreakce, chybění spontánního dýchání (potvrzeno apnoickým testem)."
      ],
      diagnostics: [
        "Neurologické vyšetření kmenových reflexů (pupilární, korneální, vestibulookulární).",
        "CT a MRI mozku k identifikaci strukturální léze.",
        "Potvrzení smrti mozku: panangiografie mozku (průkaz absence toku), transkraniální dopplerovská sonografie, izoelektrické EEG (plochá křivka)."
      ]
    },
    quiz: [
      {
        question: "Která z následujících charakteristik popisuje locked-in syndrom?",
        options: [
          "Stav hlubokého bezvědomí bez jakékoli mozkové aktivity",
          "Stav zachovalého vědomí a kognitivních funkcí, kdy je pacient kvůli lézi pontu kompletně paralyzován a komunikuje pouze pohyby očí",
          "Porucha paměti se zachovalou motorikou",
          "Paréza periferních nervů po infekci boreliózou"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Bezvědomí charakterizuje kóma.",
          "Správně! U locked-in syndromu léze v oblasti mostu (pontu) přeruší motorické dráhy, ale ušetří retikulární formaci odpovídající za vědomí. Pacient je 'uvězněn' ve svém těle - myslí a vnímá, ale nemůže se hýbat ani mluvit.",
          "Nesprávně. Porucha paměti je demence, nikoli locked-in.",
          "Nesprávně. Locked-in je centrální léze kmene."
        ]
      }
    ]
  }"""

# Row 25: Ischemické cévní mozkové příhody
splits[25] = """  "spec-2-25": {
    richContent: {
      definition: "Ischemická cévní mozková příhoda (iCMP) je ložiskové poškození mozkové tkáně způsobené náhlým přerušením nebo výrazným snížením přítoku krve do určité oblasti mozku.",
      etiology: [
        "Aterotrombóza velkých mozkových a krčních tepen (např. a. carotis interna).",
        "Kardioembolizace: embolizace trombů ze srdce (při fibrilaci síní, chlopenních vadách, po infarktu).",
        "Mikroangiopatie (lakunární infarkty drobných hlubokých tepen při hypertenzi)."
      ],
      pathogenesis: [
        "Uzávěr tepny vede k okamžitému rozvoji ischémie a nedostatku O2 a glukózy.",
        "Centrální jádro infarktu: oblast s kritickým poklesem průtoku, kde dochází k rychlé nekróze buněk.",
        "Penumbra (ischemický polostín): okrajová zóna s částečně zachovaným průtokem díky kolaterálnímu oběhu. Buňky jsou nefunkční, ale strukturálně ještě živé. Lze je zachránit rychlou reperfuzí (trombolýza, trombektomie) do několika hodin.",
        "Excitotoxicita: nedostatek ATP zastaví sodno-draselnou pumpu, dochází k depolarizaci membrány a masivnímu uvolnění glutamátu, což vyvolá vtok vápníku do buněk a jejich apoptózu."
      ],
      clinicalManifestation: [
        "Náhlý vznik ložiskových příznaků (FAST): pokles ústního koutku, slabost/ochrnutí končetin na jedné straně (hemiparéza), porucha řeči (afázie nebo dysartrie).",
        "Výpadky zorného pole, poruchy citlivosti, závratě."
      ],
      diagnostics: [
        "Nativní CT mozku (klíčové pro urgentní rozlišení ischemické a hemoragické CMP - ischemické změny se na CT zobrazí až s časovým odstupem, krvácení je vidět okamžitě).",
        "CT angiografie k lokalizaci uzávěru tepny.",
        "MRI mozku (vysoce senzitivní v difúzním zobrazení - DWI)."
      ]
    },
    quiz: [
      {
        question: "Co označuje pojem 'penumbra' v patofyziologii ischemické CMP?",
        options: [
          "Oblast mozkové tkáně, která je nenávratně zničena nekrózou během prvních sekund",
          "Oblast ischemického polostínu kolem jádra infarktu, která je funkčně němá, ale stále živá a reverzibilně zachranitelná včasnou reperfuzí",
          "Zánětlivý lem tvořený mikroglíemi kolem ložiska krvácení",
          "Dutina vyplněná likvorem po zhojeném infarktu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Jádro infarktu je oblast odumřelé tkáně.",
          "Správně! Penumbra je zóna s hraniční perfuzí. Buňky zde trpí nedostatkem energie a nefungují (proto má pacient neurologický deficit), ale ještě nedošlo k jejich strukturální smrti. Pokud se obnoví průtok krve (trombolýzou), tkáň se uzdraví.",
          "Nesprávně. Penumbra nesouvisí se zánětlivým lemem.",
          "Nesprávně. Dutina po infarktu se nazývá postischemická pseudocysta."
        ]
      }
    ]
  }"""

# Row 26: Intrakraniální hypertenze
splits[26] = """  "spec-2-26": {
    richContent: {
      definition: "Intrakraniální hypertenze je stav zvýšeného tlaku uvnitř lebky (nad 15-20 mmHg). Autoregulace mozkového oběhu je schopnost udržovat konstantní průtok krve mozkem (CBF) v rozmezí středního arteriálního tlaku (MAP) 50-150 mmHg.",
      etiology: [
        "Expanzivní nitrolební procesy: hematomy (epidurální, subdurální), tumory, abscesy.",
        "Edém mozku: cytotoxický (při ischémii a otoku buněk) nebo vazogenní (při poškození hematoencefalické bariéry).",
        "Poruchy cirkulace likvoru (hydrocefalus)."
      ],
      pathogenesis: [
        "Monro-Kellyho doktrína: objem lebky je fixní. Lebka obsahuje mozkovou tkáň, krev a likvor. Zvětšení jednoho z nich musí být kompenzováno vytlačením likvoru a venózní krve.",
        "Po vyčerpání kompenzačních rezerv prudce stoupá intrakraniální tlak (ICP), což snižuje mozkový perfuzní tlak (CPP = MAP - ICP).",
        "Při selhání/paralýze autoregulace (způsobené např. těžkým traumatem) dochází k vazodilataci a pasivní závislosti CBF na systémovém tlaku, což zhoršuje edém.",
        "Herniace (vklínění): tlak vytlačí části mozku pod durální duplikatury nebo do foramen magnum, což utlačí mozkový kmen."
      ],
      clinicalManifestation: [
        "Bolest hlavy (typicky horší vleže a ráno), zvracení bez předchozí nauzei, edém papily zrakového nervu (stáza).",
        "Poruchy vědomí od somnolence po hluboké kóma.",
        "Cushingova triáda (projev komprese kmene a aktivace sympatiku): arteriální hypertenze, bradykardie a nepravidelné dýchání."
      ],
      diagnostics: [
        "Nativní CT/MRI mozku (prokazuje edém, setření rýh, posun středočarových struktur, herniace).",
        "Přímé měření ICP pomocí intrakraniálního čidla (zavedeného do komory nebo parenchymu).",
        "Oční vyšetření očního pozadí (detekce edému papily)."
      ]
    },
    quiz: [
      {
        question: "Která klinická triáda symptomů doprovází pokročilou intrakraniální hypertenzi s rizikem herniace mozkového kmene (Cushingův reflex)?",
        options: [
          "Hypotenze, tachykardie a hyperventilace",
          "Systémová hypertenze, bradykardie a nepravidelné dechové vzory",
          "Glykosurie, ketonurie a acidóza",
          "Třes, rigidita a bradykinéza"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hypotenze a tachykardie doprovázejí hypovolemický šok.",
          "Správně! Cushingův reflex vzniká, když ischémie mozkového kmene vyvolá masivní sympatickou odpověď ke zvýšení MAP (hypertenze), což baroreceptory kompenzují zvýšením parasympatického tonu (bradykardie). Tlak na kmen zároveň narušuje dechové centrum (nepravidelné dýchání).",
          "Nesprávně. Toto charakterizuje diabetickou ketoacidózu.",
          "Nesprávně. Toto je triáda Parkinsonovy nemoci."
        ]
      }
    ]
  }"""

# Row 27: Chronické selhání jater
splits[27] = """  "spec-2-27": {
    richContent: {
      definition: "Jaterní cirhóza je konečné stadium chronických jaterních procesů charakterizované uzlovou přestavbou parenchymu a fibrotizací. Hepatorenální syndrom (HRS) je funkční selhání ledvin u pacientů s pokročilou jaterní cirhózou a ascitem.",
      etiology: [
        "Chronický abúzus alkoholu.",
        "Chronické virové hepatitidy B a C.",
        "NASH (nealkoholická steatohepatitida) spojená s obezitou a diabetem, autoimunitní hepatitidy."
      ],
      pathogenesis: [
        "Dlouhodobé poškození hepatocytů aktivuje Itoovy buňky (hvězdicové buňky jater), které se mění na myofibroblasty a secernují kolagen.",
        "Fibrotické jizvy stlačují sinusoidy a větve portální žíly, což zvyšuje odpor v portálním řečišti a vede k portální hypertenzi.",
        "Portální hypertenze stimuluje uvolnění vazodilatačních látek (zejména oxidu dusnatého - NO) ve splanchnickém řečišti.",
        "Splanchnická vazodilatace vede k poklesu efektivního cirkulujícího objemu krve a aktivaci sympatiku a RAAS.",
        "HRS: Extrémní aktivace sympatiku a RAAS vyvolá těžkou konstrikci ledvinných cév (vazokonstrikce v ledvinách), což prudce sníží glomerulární filtraci (GFR) při strukturálně zdravých ledvinách."
      ],
      clinicalManifestation: [
        "Cirhóza: ascites, pavoučkovité névy na kůži, palmární erytém, splenomegalie, jícnové varixy.",
        "Poruchy syntézy: krvácivé stavy (hypokoagulace), hypalbuminémie (otoky).",
        "Jaterní encefalopatie (zmatenost, flapping tremor) z důvodu hromadění amoniaku (NH3).",
        "HRS: těžká oligurie až anurie, progresivní nárůst urey a kreatininu v séru, minimální nález v moči."
      ],
      diagnostics: [
        "Laboratorní vyšetření: elevace bilirubinu, ALP, GMT, pokles albuminu a prodloužení protrombinového času (Quick).",
        "Ultrasonografie břicha (prokazuje zmenšená, hrbolatá játra, ascites a splenomegalii).",
        "Kritéria HRS: GFR < 15 ml/min, vyloučení jiných příčin (hypovolémie - podává se infúze albuminu jako test, nefrotoxiny, organické poškození ledvin)."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostřední patofyziologickou příčinou selhání ledvin u hepatorenálního syndromu (HRS)?",
        options: [
          "Strukturální nekróza renálních glomerulů a tubulů",
          "Funkční renální vazokonstrikce vyvolaná masivní aktivací sympatiku a RAAS jako reakce na splanchnickou vazodilataci",
          "Bakteriální pyelonefritida ledvin",
          "Mechanické stlačení močovodů ascitem"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ledviny u HRS jsou histologicky zcela normální a strukturálně nepoškozené.",
          "Správně! HRS je funkční selhání ledvin. Splanchnická vazodilatace (indukovaná portální hypertenzí) odvede krev z oběhu, tělo reaguje extrémním stažením cév v ledvinách, aby udrželo krevní tlak, což prakticky zastaví glomerulární filtraci.",
          "Nesprávně. HRS není infekční onemocnění ledvin.",
          "Nesprávně. Ascites močovody nestlačuje."
        ]
      }
    ]
  }"""

# Row 30: Hypotalamo-hypofyzární systém
splits[30] = """  "spec-2-30": {
    richContent: {
      definition: "Hypotalamo-hypofyzární systém reguluje většinu endokrinních žláz v těle. Poruchy mohou postihnout hypothalamus (produkce liberinů/statinů), adenohypofýzu (tropní hormony) nebo neurohypofýzu (skladování ADH a oxytocinu).",
      etiology: [
        "Tumory: adenomy hypofýzy (prolaktinom, somatotropní adenom), kraniofaryngeom.",
        "Ischémie a nekróza: Sheehanův syndrom (poporodní nekróza hypofýzy po masivním krvácení).",
        "Traumata hlavy, záněty (hypofyzitida), operační zákroky v oblasti sely."
      ],
      pathogenesis: [
        "Hyperfunkční syndromy: autonomní adenom secernuje nadbytek hormonu (např. PRL - prolaktin, GH - růstový hormon, ACTH - kortikotropin).",
        "Hypofunkční syndromy (panhypopituitarismus): expanzivní proces utlačí a zničí zdravé buňky hypofýzy.",
        "Diabetes insipidus (DI): centrální forma vzniká poruchou syntézy nebo uvolňování vasopresinu (ADH) v hypothalamu/neurohypofýze. Chybí ADH pro vazbu na V2 receptory ve sběrných kanálcích ledvin, což znemožňuje reabsorpci vody.",
        "SIADH (syndrom neadekvátní sekrece ADH): nadměrná, neřízená produkce ADH vede k retenci vody v těle a diluční hyponatrémii."
      ],
      clinicalManifestation: [
        "Zvýšený GH: akromegalie u dospělých (zvětšení koncových částí těla, orgánů), gigantismus u dětí.",
        "Panhypopituitarismus (Sheehanův syndrom): ztráta laktace po porodu, sekundární hypotyreóza, hypokortizolismus, gonadální insuficience.",
        "Diabetes insipidus: polyurie (10-20 litrů velmi zředěné moči za den) a polydipsie (extrémní žízeň).",
        "SIADH: oligurie, otoky chybí, ale rozvíjí se hyponatrémie se zmateností, křečemi a edémem mozku."
      ],
      diagnostics: [
        "Laboratorní vyšetření: hladiny hormonů (GH, IGF-1, ACTH, TSH, LH, FSH, prolaktin, ADH).",
        "Osmolalita krve a moči (u DI je osmolalita séra vysoká a moči extrémně nízká; u SIADH naopak).",
        "MRI mozku se zaměřením na sella turcica."
      ]
    },
    quiz: [
      {
        question: "Který z následujících laboratorních a klinických nálezů je typický pro centrální diabetes insipidus?",
        options: [
          "Vylučování velkého objemu (např. 12 l/den) velmi zředěné moči s nízkou osmolalitou doprovázené vysokou osmolalitou séra a silnou žízní",
          "Vylučování koncentrované moči s vysokým obsahem sodíku",
          "Hyperglykémie s hodnotami nad 25 mmol/l a ketonurie",
          "Výrazné generalizované otoky podkoží"
        ],
        correct: 0,
        explanations: [
          "Správně! Centrální diabetes insipidus je způsoben chyběním antidiuretického hormonu (ADH). Ledviny nedokážou zpětně vstřebávat vodu v kanálcích, což vede k polyurii (masivní vylučování zředěné moči) a zahuštění vnitřního prostředí (vysoká osmolalita a sodík v séru).",
          "Nesprávně. Moč je u DI extrémně zředěná (nízká osmolalita).",
          "Nesprávně. DI nesouvisí s inzulínem a glukózou (nejde o diabetes mellitus).",
          "Nesprávně. Voda se masivně ztrácí, proto otoky nevznikají, hrozí spíše dehydratace."
        ]
      }
    ]
  }"""

# Row 31: Akutní pankreatitida
splits[31] = """  "spec-2-31": {
    richContent: {
      definition: "Akutní pankreatitida je akutní zánětlivé onemocnění slinivky břišní charakterizované předčasnou aktivací pankreatických enzymů přímo v parenchymu, což vede k autodigesi (samotrávení) žlázy a rozvoji systémové zánětlivé reakce.",
      etiology: [
        "Biliární příčiny (40 %): zaklesnutí žlučového kamene ve společné ampule (papilla Vateri) blokuje odtok pankreatické šťávy.",
        "Alkohol (35 %): vyvolává spasmus Oddiho svěrače a zvyšuje viskozitu pankreatické šťávy (proteinové zátky).",
        "Ostatní: hypertriglyceridémie, úrazy břicha, infekce (příušnice), léky."
      ],
      pathogenesis: [
        "Klíčový moment: intracelulární aktivace trypsinogenu na trypsin v acinárních buňkách (např. v důsledku stagnace sekretu a splynutí lysozomů s zymogenními granuly).",
        "Trypsin následně aktivuje další trávicí enzymy: fosfolipázu A2 (destruuje buněčné membrány), elastázu (destruuje elastická vlákna cév - vede k masivnímu krvácení) a chymotrypsin.",
        "Dochází k autodigesi, nekróze slinivky a okolního tuku (metabolická mýdla - precipitace vápníku).",
        "Uvolněné cytokiny a enzymy vstupují do oběhu, poškozují plicní alveoly (ARDS), cévy (vazodilatace a únik tekutin - šok) a ledviny (AKI)."
      ],
      clinicalManifestation: [
        "Náhlá, extrémně silná bolest v nadbřišku, která má pásovitý charakter a propaguje se do zad.",
        "Opakované zvracení nepřinášející úlevu, meteorismus (paralytický ileus).",
        "Příznaky šoku: hypotenze, tachykardie, anurie.",
        "Pozdní kožní známky: Cullenovo znamení (namodralé zbarvení kolem pupku) a Grey-Turnerovo znamení (v bocích) v důsledku retroperitoneálního krvácení."
      ],
      diagnostics: [
        "Laboratoř: výrazný vzestup sérové amylázy a zejména lipázy (alespoň 3násobek normy).",
        "Ultrasonografie břicha k průkazu žlučových kamenů.",
        "Kontrastní CT břicha (provádí se po 48-72 hodinách k posouzení rozsahu nekrózy pankreatu)."
      ]
    },
    quiz: [
      {
        question: "Který patofyziologický proces bezprostředně spouští rozvoj autodigese slinivky u akutní pankreatitidy?",
        options: [
          "Předčasná aktivace trypsinogenu na trypsin přímo uvnitř pankreatických buněk a tkáně",
          "Vniknutí žaludeční kyseliny do pankreatických vývodů",
          "Autoimunitní útok protilátek proti inzulínu",
          "Ischémie slinivky vyvolaná ucpáním a. mesenterica superior"
        ],
        correct: 0,
        explanations: [
          "Správně! Klíčovým spouštěcím mechanismem akutní pankreatitidy je narušení ochranných bariér slinivky a aktivace trypsinogenu na trypsin uvnitř slinivky. Aktivní trypsin poté spustí kaskádu aktivace ostatních enzymů, které začnou trávit vlastní tkáň slinivky a její cévy.",
          "Nesprávně. Kyselina do slinivky nevniká.",
          "Nesprávně. Nejde o autoimunitní onemocnění namířené proti inzulínu.",
          "Nesprávně. Ischémie z a. mesenterica superior vyvolá infarkt střeva, nikoli typickou akutní pankreatitidu."
        ]
      }
    ]
  }"""

# Row 37: Feochromocytom, MEN, Zollinger-Ellison
splits[37] = """  "spec-2-37": {
    richContent: {
      definition: "Feochromocytom je nádor z chromafinních buněk dřeně nadledvin secernující katecholaminy. Syndrom MEN (mnohočetné endokrinní neoplazie) představuje dědičné syndromy s výskytem více endokrinních nádorů. Zollinger-Ellisonův syndrom je charakterizován gastrinomem secernujícím gastrin.",
      etiology: [
        "Feochromocytom: z 25-30 % geneticky podmíněný (mutace v RET, VHL, NF1 genech).",
        "MEN 1 a MEN 2: autozomálně dominantní syndromy způsobené mutacemi v genu MEN1 (menin) resp. RET protoonkoproteinu.",
        "Zollinger-Ellison: gastrin-secernující tumor obvykle lokalizovaný v duodenu nebo pankreatu."
      ],
      pathogenesis: [
        "Feochromocytom: nekontrolovaná sekrece adrenalinu a noradrenalinu působí na a1 receptory (vazokonstrikce - hypertenze) a b1 receptory (tachykardie, zvýšená kontraktilita).",
        "MEN: zárodečné mutace tumor-supresorových genů vedou k hyperplázii a neoplázii žláz (příštítná tělíska, pankreas, hypofýza u MEN 1; medulární karcinom štítné žlázy, feochromocytom u MEN 2).",
        "Zollinger-Ellison: gastrin masivně stimuluje parietální buňky žaludku k produkci HCl a působí troficky na sliznici. Extrémní překyselení vede k mnohačetným peptickým vředům."
      ],
      clinicalManifestation: [
        "Feochromocytom: paroxysmální hypertenze (záchvaty extrémního tlaku), klasická triáda - bolesti hlavy, profúzní pocení a palpitace.",
        "Zollinger-Ellison: mnohočetné, atypicky lokalizované vředy rezistentní k léčbě, těžký průjem (kyselina inaktivuje pankreatickou lipázu).",
        "MEN: příznaky podle postižených žláz (např. hyperkalcémie u hyperparatyreózy)."
      ],
      diagnostics: [
        "Feochromocytom: stanovení volných metanefrinů a normetanefrinů v plazmě nebo moči za 24 hodin; CT/MRI nadledvin.",
        "Zollinger-Ellison: průkaz extrémního nárůstu gastrinu v séru nalačno a stanovení žaludeční sekrece acidity (BAO > 15 mmol/h).",
        "Genetické testování u podezření na syndromy MEN."
      ]
    },
    quiz: [
      {
        question: "Která záchvatovitá klinická triáda projevů je nejcharakterističtější pro feochromocytom z důvodu vyplavení katecholaminů?",
        options: [
          "Bolest hlavy, bušení srdce (palpitace) a výrazné pocení doprovázené těžkou hypertenzí",
          "Hypotermie, bradykardie a zácpa",
          "Steatorea, polyurie a rozostřené vidění",
          "Svalová atrofie, hypoglykémie a hyperpigmentace"
        ],
        correct: 0,
        explanations: [
          "Správně! Feochromocytom periodicky nebo trvale uvolňuje do krve adrenalin a noradrenalin. To vyvolá záchvaty extrémní hypertenze, které se projevují krutou bolestí hlavy (z vazokonstrikce mozkových cév), palpitacemi (b1-stimulace srdce) a pocením.",
          "Nesprávně. Tento je obraz myxedému/hypotyreózy.",
          "Nesprávně. Tyto příznaky s katecholaminy nesouvisí.",
          "Nesprávně. Hyperpigmentace a hypoglykémie značí Addisonovu chorobu."
        ]
      }
    ]
  }"""

# Row 38: Epilepsie
splits[38] = """  "spec-2-38": {
    richContent: {
      definition: "Epilepsie je chronické onemocnění mozku charakterizované trvalou predispozicí k rozvoji epileptických záchvatů, které jsou způsobeny abnormální, synchronní a nadměrnou aktivitou skupin neuronů v mozku.",
      etiology: [
        "Strukturální: poškození mozku po traumatu, CMP, jizvy po infekcích (encefalitida), mozkové nádory.",
        "Genetická: mutace v genech pro iontové kanály (kanálopatie).",
        "Metabolické a toxické: abstinenční příznaky (alkohol), hypoglykémie, urémie."
      ],
      pathogenesis: [
        "Základní mechanismus: narušení rovnováhy mezi excitačními a inhibičními systémy v mozku.",
        "Excitace: zprostředkovaná zejména glutamátem působícím na NMDA a AMPA receptory (vtok sodíku a vápníku).",
        "Inhibice: zprostředkovaná kyselinou gama-aminomáselnou (GABA) působící na GABA-A receptory (vtok chloridů vyvolá hyperpolarizaci).",
        "Při epileptickém záchvatu dochází k paroxysmálnímu depolarizačnímu posunu (PDS) v membráně neuronů, což vede k vysokofrekvenčním výbojům, které se šíří do okolí při selhání lokálních inhibičních mechanismů."
      ],
      clinicalManifestation: [
        "Fokální záchvaty: začínají v omezené části jedné hemisféry. Projevy: motorické (zášuby ruky), senzitivní (pocity brnění), autonomní nebo psychické, vědomí může být zachováno nebo porušeno.",
        "Generalizované záchvaty: postihují obě hemisféry současně. Typy: absence (krátkodobý záraz v činnosti bez křečí), tonicko-klonické záchvaty (grand mal - ztráta vědomí, pád, fáze křeče celého těla, pomočení, pokousání jazyka)."
      ],
      diagnostics: [
        "EEG (elektroencefalografie): klíčové vyšetření k zachycení specifických epileptiformních výbojů (hroty, ostré vlny, komplety hrot-vlna).",
        "MRI mozku k detekci strukturálních příčin (např. meziální temporální skleróza, tumor).",
        "Laboratorní vyšetření k vyloučení iontových dysbalancí (hyponatrémie, hypokalcémie) a glykémie."
      ]
    },
    quiz: [
      {
        question: "Který neurotransmiter a receptorový systém je hlavním tlumivým (inhibičním) mechanismem, jehož dysfunkce přispívá k rozvoji epileptického záchvatu?",
        options: [
          "Glutamát a jeho NMDA receptory",
          "GABA (kyselina gama-aminomáselná) a její GABA-A receptory",
          "Acetylcholin a nikotinové receptory",
          "Dopamin a D2 receptory"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Glutamát je hlavní excitační neurotransmiter, jeho nadbytek záchvat podporuje.",
          "Správně! GABA je hlavním inhibičním přenašečem v CNS. Vazba GABA na receptor GABA-A otevírá chloridový kanál. Vtok chloridových iontů (Cl-) do buňky vyvolá hyperpolarizaci a ztíží vznik akčního potenciálu. Selhání tohoto systému vede k nekontrolovanému šíření vzruchů.",
          "Nesprávně. Acetylcholin neplní hlavní tlumivou roli v mozku.",
          "Nesprávně. Dopamin v tomto mechanismu nehraje primární roli."
        ]
      }
    ]
  }"""

# Row 39: Edém mozku
splits[39] = """  "spec-2-39": {
    richContent: {
      definition: "Edém mozku je patologické zvýšení obsahu vody v mozkovém parenchymu, které vede ke zvětšení objemu mozku a riziku rozvoje nitrolební hypertenze.",
      etiology: [
        "Cytotoxický edém: ischémie mozku (iCMP, stav po srdeční zástavě), těžká hypoxie, intoxikace (oxid uhelnatý).",
        "Vazogenní edém: mozkové tumory, traumata, abscesy, záněty (meningitida, encefalitida).",
        "Intersticiální (hydrocefalický) edém: městnání likvoru při hydrocefalu."
      ],
      pathogenesis: [
        "Cytotoxický edém: je intracelulární otok. Nedostatek O2 a ATP ochromí Na+/K+-ATPázu. Sodík se hromadí uvnitř buněk (neuronů a glie), což nasává vodu z extracelulárního prostoru do buněk. Hematoencefalická bariéra (HEB) je zpočátku neporušená.",
        "Vazogenní edém: je extracelulární otok. Dochází k poškození těsných spojů (tight junctions) endotelu kapilár a narušení HEB. Voda a plazmatické bílkoviny unikají do intersticia (zejména v bílé hmotě).",
        "Intersticiální edém: vzniká při přetlaku likvoru v komorách, který prostupuje přes ependymovou výstelku do okolního mozkového intersticia."
      ],
      clinicalManifestation: [
        "Příznaky intrakraniální hypertenze: bolesti hlavy, zvracení, edém papil, somnolence, sopor až kóma.",
        "Ložiskový neurologický deficit podle lokalizace edému a stlačení okolní tkáně.",
        "Riziko herniace (vklínění) a rozvoje Cushingovy reakce."
      ],
      diagnostics: [
        "CT mozku: setření rýh a závitů (vyhlazení povrchu mozku), komprese mozkových komor, hypodenzní oblasti.",
        "MRI mozku: velmi citlivé pro rozlišení cytotoxického (restrikce difúze na DWI) a vazogenního edému."
      ]
    },
    quiz: [
      {
        question: "Jaký je primární patofyziologický mechanismus vzniku cytotoxického edému mozku např. při těžké ischémii?",
        options: [
          "Poškození hematoencefalické bariéry s únikem bílkovin do intersticia",
          "Selhání Na+/K+-ATPázy z nedostatku energie, hromadění sodíku v buňkách a následný vtok vody do buněk",
          "Přetlak likvoru v mozkových komorách prostupující přes ependym",
          "Průnik žlučových kyselin do mozku"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Únik bílkovin charakterizuje vazogenní edém.",
          "Správně! Cytotoxický edém je způsoben selháním energetického metabolismu. Nefunkční sodno-draselná pumpa nedokáže odčerpávat sodík z buněk. Nahromaděný intracelulární sodík změní osmotický gradient a voda vstupuje do buněk (neuronů i astrocytů), které se zvětšují (otékají).",
          "Nesprávně. Toto popisuje intersticiální edém.",
          "Nesprávně. Žlučové kyseliny edém mozku standardně nezpůsobují."
        ]
      }
    ]
  }"""

# Row 40: Diabetes mellitus - základní rozdělení
splits[40] = """  "spec-2-40": {
    richContent: {
      definition: "Diabetes mellitus (DM) je skupina chronických metabolických onemocnění charakterizovaných hyperglykémií, která vzniká v důsledku absolutního nebo relativního nedostatku inzulínu a/nebo jeho účinku.",
      etiology: [
        "DM 1. typu: autoimunitní destrukce beta-buněk Langerhansových ostrůvků slinivky břišní u geneticky predisponovaných jedinců.",
        "DM 2. typu: kombinace inzulínové rezistence v tkáních a dysfunkce sekrece inzulínu, úzce spojená s obezitou, nedostatkem pohybu a stárnutím.",
        "Specifické typy: LADA, MODY, gestační diabetes (těhotenský)."
      ],
      pathogenesis: [
        "DM 1. typu: Autoimunitní zánět (insulitida) zprostředkovaný T-lymfocyty vede k postupnému zániku beta-buněk. Klinické příznaky se objeví až po destrukci > 80-90 % beta-buněk. Dochází k absolutnímu deficitu inzulínu.",
        "DM 2. typu: Inzulínová rezistence (snížená citlivost receptorů v játrech, svalech a tuku) nutí beta-buňky k počáteční kompenzační hypersekreci inzulínu (hyperinzulinémie). Postupně dochází k vyčerpání a apoptóze beta-buněk (relativní deficit inzulínu).",
        "Hyperglykémie vzniká sníženým vstupem glukózy do buněk a zvýšenou produkcí glukózy v játrech (glukoneogeneze a glykogenolýza)."
      ],
      clinicalManifestation: [
        "Klasické příznaky: polyurie (močová glykosurie strhává vodu osmózou), polydipsie (žízeň z dehydratace), polyfágie a hubnutí (buňky hladoví a tělo odbourává tuky a svaly).",
        "Únava, rozostřené vidění, sklon k infekcím kůže a močových cest."
      ],
      diagnostics: [
        "Měření glykémie nalačno v plazmě (patologická je hodnota >= 7.0 mmol/l).",
        "Náhodná glykémie >= 11.1 mmol/l doprovázená typickými příznaky.",
        "Orální glukózový toleranční test (oGTT) s glykémií >= 11.1 mmol/l ve 120. minutě.",
        "Měření glykovaného hemoglobinu (HbA1c) k posouzení dlouhodobé kompenzace."
      ]
    },
    quiz: [
      {
        question: "Jaký je základní patofyziologický rozdíl v dostupnosti inzulínu mezi diabetem 1. a 2. typu?",
        options: [
          "U 1. typu je absolutní nedostatek inzulínu kvůli autoimunitní destrukci beta-buněk, u 2. typu je inzulínu zpočátku dostatek až nadbytek, ale tkáně jsou k němu rezistentní",
          "U 1. typu inzulín chybí pouze v noci, u 2. typu chybí trvale",
          "U 2. typu inzulín ničí červené krvinky",
          "U 1. typu je inzulín produkován mozkem"
        ],
        correct: 0,
        explanations: [
          "Správně! Diabetes 1. typu představuje absolutní deficit inzulínu, pacienti jsou vitálně závislí na jeho exogenním podávání. U 2. typu je příčinou inzulínová rezistence buněk a inzulínu je v krvi často nadbytek (hyperinzulinémie), tělo s ním však neumí hospodařit, a až později dochází k vyčerpání slinivky.",
          "Nesprávně. Nedostatek inzulínu u 1. typu je trvalý a celodenní.",
          "Nesprávně. Inzulín erytrocyty neničí.",
          "Nesprávně. Inzulín se tvoří výhradně v beta-buňkách slinivky břišní."
        ]
      }
    ]
  }"""

# Row 47: Akutní selhání jater
splits[47] = """  "spec-2-47": {
    richContent: {
      definition: "Akutní selhání jater (ALF) je náhlé selhání jaterních funkcí u jedince bez předchozího jaterního onemocnění, charakterizované rozvojem jaterní encefalopatie a koagulopatie do 26 týdnů od prvních symptomů.",
      etiology: [
        "Předávkování paracetamolem (nejčastější toxická příčina).",
        "Akutní virové hepatitidy (zejména HBV, HAV, HEV v těhotenství).",
        "Otravy houbami (muchomůrka zelená - amanitin).",
        "Ischemická hepatitida (šoková játra), Budd-Chiariho syndrom."
      ],
      pathogenesis: [
        "Masivní nekróza nebo apoptóza hepatocytů vede k okamžité ztrátě metabolických, syntetických a detoxikačních schopností jater.",
        "Jaterní encefalopatie: játra nedokážou přeměňovat toxický amoniak (NH3) (vznikající činností střevních bakterií) na močovinu. Amoniak prostupuje hematoencefalickou bariérou do mozku, kde je vychytáván astrocytami.",
        "V astrocytech se amoniak mění na glutamin, což zvýší intracelulární osmolalitu astrocytů a vyvolá cytotoxický edém mozku s nitrolební hypertenzí.",
        "Koagulopatie vzniká z deficitu syntézy koagulačních faktorů (zejména II, VII, IX, X)."
      ],
      clinicalManifestation: [
        "Rychle progredující ikterus (žloutenka), krvácivé stavy (hematomy, krvácení z dásní).",
        "Jaterní encefalopatie: změny chování, zmatenost, spavost rozvíjející se do kómatu, asterixis (flapping tremor - třes rukou při extenzi).",
        "Příznaky otoku mozku (hyperventilace, decerebrační křeče)."
      ],
      diagnostics: [
        "Laboratoř: extrémní elevace transamináz (AST, ALT - často > 1000 U/l), prodloužení protrombinového času (INR >= 1.5 - klíčová podmínka).",
        "Vysoká hladina amoniaku v séru.",
        "CT mozku k vyloučení edému mozku."
      ]
    },
    quiz: [
      {
        question: "Která látka je hlavním neurotoxinem odpovědným za rozvoj jaterní encefalopatie a edému mozku u akutního selhání jater?",
        options: [
          "Amoniak (NH3), který v astrocytech metabolizuje na osmoticky aktivní glutamin, což vede k jejich otoku",
          "Nekonjugovaný bilirubin ukládající se v bazálních gangliích",
          "Kreatinin a urea blokující sodíkové kanály",
          "Laktát poškozující myelinové pochvy"
        ],
        correct: 0,
        explanations: [
          "Správně! Amoniak vzniká ve střevě rozkladem bílkovin bakteriemi. Selhávající játra ho nedokážou metabolizovat v močovinovém cyklu. Amoniak v mozku reaguje s glutamátem za vzniku glutaminu v astrocytech. Hromadění glutaminu zvýší osmotický tlak v astrocytech, ty nasávají vodu a otékají, což vede k otoku mozku.",
          "Nesprávně. Bilirubin u dospělých encefalopatii a otok mozku takto nezpůsobuje (jádrový ikterus - kernikterus se vyskytuje u novorozenců).",
          "Nesprávně. Kreatinin a urea jsou markery ledvinného selhání a edém mozku přímo nezpůsobují.",
          "Nesprávně. Laktát je markerem tkáňové hypoxie, nikoli přímým spouštěčem jaterní encefalopatie."
        ]
      }
    ]
  }"""

# Row 48: Hypoparatyreóza
splits[48] = """  "spec-2-48": {
    richContent: {
      definition: "Hypoparatyreóza je endokrinní porucha charakterizovaná nedostatečnou sekrecí parathormonu (PTH) z příštítných tělísek, což vede k hypokalcémii a hyperfosfatémii.",
      etiology: [
        "Iatrogenní poškození: náhodné odstranění nebo poškození cévního zásobení příštítných tělísek při operaci štítné žlázy (tyroidektomii) - nejčastější příčina.",
        "Autoimunitní destrukce (např. v rámci polyglandulárního syndromu APS-1).",
        "Genetické mutace (syndrom DiGeorge - ageneze tělísek)."
      ],
      pathogenesis: [
        "Nedostatek PTH snižuje kostní resorpci vápníku a tlumí aktivaci vitaminu D v ledvinách.",
        "Klesá také reabsorpce vápníku v distálním tubulu a současně se zvyšuje reabsorpce fosfátů v proximálním tubulu.",
        "Následkem je hypokalcémie (pokles volného Ca2+) a hyperfosfatémie.",
        "Hypokalcémie zvyšuje neuromuskulární dráždivost, protože snižuje prahový potenciál pro otevření sodíkových kanálů v nervech a svalech (potenciál se přibližuje klidovému, což usnadňuje depolarizaci)."
      ],
      clinicalManifestation: [
        "Tetanie: parestézie (brnění) kolem úst a na prstech rukou, bolestivé svalové křeče (karpopedální spasmy - 'porodnická ruka').",
        "Laryngospasmus (křeč hlasivek - život ohrožující uzávěr dýchacích cest).",
        "Pozitivní Chvostkův příznak (zášub obličejových svalů při poklepu na n. facialis) a Trousseauův příznak (karpopedální křeč po nafouknutí manžety tonometru nad systolický tlak)."
      ],
      diagnostics: [
        "Laboratoř: nízký PTH v séru současně s hypokalcémií a hyperfosfatémií.",
        "EKG: prodloužení intervalu QT (riziko arytmií typu torsades de pointes)."
      ]
    },
    quiz: [
      {
        question: "Proč vede hypokalcémie k rozvoji tetanie (zvýšené neuromuskulární dráždivosti a křečím)?",
        options: [
          "Nízká koncentrace extracelulárního vápníku usnadňuje otevírání sodíkových kanálů, což snižuje práh pro depolarizaci nervových a svalových vláken",
          "Vápník chybí pro kontraktilní aparát svalů, což vyvolá jejich ochrnutí",
          "Hypokalcémie tlumí uvolňování acetylcholinu na nervosvalové ploténce",
          "Způsobuje demyelinizaci periferních nervových drah"
        ],
        correct: 0,
        explanations: [
          "Správně! Extracelulární ionty vápníku stabilizují membránový potenciál tím, že se vážou na vnější povrch sodíkových kanálů. Pokud je vápníku málo, sodíkové kanály se otevírají mnohem snáze při menším podnětu (práh pro vznik akčního potenciálu se posouvá směrem ke klidovému potenciálu), což vede k spontánním depolarizacím a křečím (tetanii).",
          "Nesprávně. Nedostatek vápníku uvnitř svalových buněk sice teoreticky oslabuje stah, ale v krvi způsobuje dominantně tetanickou dráždivost nervů.",
          "Nesprávně. Naopak, dráždivost je extrémně zvýšena.",
          "Nesprávně. Hypokalcémie nepůsobí demyelinizaci myelinových pochev."
        ]
      }
    ]
  }"""

# Row 49: Akutní a chronické hepatitidy
splits[49] = """  "spec-2-49": {
    richContent: {
      definition: "Hepatitida je zánětlivé onemocnění jaterního parenchymu, které může mít akutní (trvání do 6 měsíců) nebo chronický (trvání nad 6 měsíců) průběh, a může vyústit v cirhózu jater.",
      etiology: [
        "Virové hepatitidy: hepatotropní viry A, B, C, D, E.",
        "Neinfekční hepatitidy: toxické (alkohol, paracetamol, amanitin), autoimunitní hepatitida, NASH (nealkoholická steatohepatitida)."
      ],
      pathogenesis: [
        "Akutní virová hepatitida: virus sám o sobě obvykle nepůsobí přímo cytopatogenně. Poškození hepatocytů je způsobeno imunitní reakcí hostitele (cytotoxické CD8+ T-lymfocyty napadají infikované hepatocyty prezentující virové peptidy na HLA-I molekulách).",
        "Chronická hepatitida: dlouhodobé přetrvávání viru (HBV, HCV) vyvolává permanentní mírný zánět. Nekróza hepatocytů stimuluje fibrogenezi (aktivaci Itoových buněk), což vede k postupné přestavbě jater v cirhózu.",
        "Autoimunitní hepatitida: imunitní systém napadá hepatocyty prostřednictvím autoprotilátek."
      ],
      clinicalManifestation: [
        "Akutní fáze: prodromální stádium (únava, nauzea, nechutenství, bolesti kloubů), následované ikterickým stádiem (žloutenka, tmavá moč z bilirubinurie, acholická stolice, zvětšení jater).",
        "Chronická fáze: často asymptomatická, pouze únava, tlak v pravém podžebří. Později příznaky jaterní cirhózy a portální hypertenze."
      ],
      diagnostics: [
        "Průkaz poškození jater: elevace transamináz AST a ALT (u akutních hepatitid až stonásobky).",
        "Sérologické vyšetření specifických markerů: anti-HAV (u HAV); HBsAg, anti-HBc, HBeAg (u HBV); anti-HCV (u HCV).",
        "Detekce virové nálože pomocí PCR (stanovení HBV DNA, HCV RNA)."
      ]
    },
    quiz: [
      {
        question: "Jakým způsobem dochází k poškození jaterních buněk při akutní virové hepatitidě B?",
        options: [
          "Virus HBV se množí v buňkách a způsobuje jejich přímou lýzu (rozpad) mechanickým přetlakem",
          "Poškození je způsobeno imunitním útokem hostitele (CD8+ T-lymfocytů) na infikované hepatocyty, které na svém povrchu vystavují virové antigeny",
          "Ukládáním virového obalu v žlučových cestách a jejich ucpáním",
          "Vylučováním toxického amoniaku samotným virem"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Virus hepatitidy B není přímo cytopatogenní, nezpůsobuje přímou lýzu.",
          "Správně! Virus HBV infikuje hepatocyty, které pak na svých HLA-I receptorech prezentují virové peptidy. Imunitní systém hostitele je rozpozná a CD8+ cytotoxické T-lymfocyty vyvolají apoptózu/lýzu infikovaných jaterních buněk. Síla imunitní reakce určuje rozsah poškození a klinický obraz (případně přechod do chronicity).",
          "Nesprávně. Žlučové cesty nejsou virem ucpávány.",
          "Nesprávně. Viry amoniak neprodukují."
        ]
      }
    ]
  }"""

# Row 50: Adenokortikální insuficience
splits[50] = """  "spec-2-50": {
    richContent: {
      definition: "Addisonova choroba (primární insuficience kůry nadledvin) je stav způsobený destrukcí kůry nadledvin, vedoucí k deficitu glukokortikoidů, mineralokortikoidů i androgenů. Adrenální krize je akutní, život ohrožující zhoršení tohoto stavu při zátěži.",
      etiology: [
        "Autoimunitní adrenalitida (příčina až 80 % případů v rozvinutých zemích, často doprovází jiné autoimunity).",
        "Infekce: tuberkulóza nadledvin, bilaterální krvácení do nadledvin při sepsi (Waterhouse-Friderichsenův syndrom).",
        "Iatrogenní: oboustranná adrenalektomie."
      ],
      pathogenesis: [
        "Destrukce > 90 % kůry nadledvin vede k selhání sekrece hormonů.",
        "Deficit aldosteronu: dochází k poruše zpětné resorpce sodíku (Na+) a vylučování draslíku (K+) v ledvinných tubulech. Výsledkem je hyponatrémie, hyperkalémie, ztráta vody (dehydratace) a hypotenze.",
        "Deficit kortizolu: narušení glukoneogeneze (hypoglykémie), snížení citlivosti cév na katecholaminy (těžká hypotenze) a pokles sekrece žaludečních enzymů.",
        "Vysoké ACTH: chybějící negativní zpětná vazba kortizolu stimuluje hypofýzu k sekreci ACTH. Ten se tvoří z POMC, který obsahuje sekvenci MSH (melanocyty stimulující hormon), což stimuluje melanocyty a vyvolá hyperpigmentaci.",
        "Adrenální krize vzniká při stresu (infekce, trauma, operace), kdy tělo vyžaduje vysoké hladiny kortizolu, ale zničené nadledviny je nedokážou vyprodukovat, což vede k rozvoji těžkého refrakterního šoku."
      ],
      clinicalManifestation: [
        "Addisonova choroba: chronická slabost, únavnost, hubnutí, hypotenze (zejména ortostatická), gastrointestinální obtíže (nauzea, zvracení, průjmy, chuť na slané).",
        "Hyperpigmentace (bronzové zbarvení kůže, zejména v kožních rýhách, na jizvách, a grafitové skvrny na sliznici dutiny ústní).",
        "Adrenální krize: těžká hypotenze nereagující na katecholaminy (šok), kruté bolesti břicha (může simulovat náhlou příhodu břišní), zvracení, vysoká horečka, zmatenost."
      ],
      diagnostics: [
        "Stanovení hormonů: nízký ranní kortizol (pod 80 nmol/l) a vysoké ACTH v séru (u primární formy).",
        "Synacthenový test (podání syntetického ACTH nevyvolá vzestup kortizolu).",
        "Laboratoř: hyponatrémie, hyperkalémie, hypoglykémie, metabolická acidóza."
      ]
    },
    quiz: [
      {
        question: "Jaký je mechanismus vzniku hyperpigmentace (bronzové kůže a sliznic) u Addisonovy choroby?",
        options: [
          "Nedostatek kortizolu odblokuje zpětnou vazbu, což vede k nadprodukci ACTH a jeho prekurzoru POMC, který má účinky stimulující melanocyty (podobně jako MSH)",
          "Ukládání železa v kůži z důvodu hemolýzy",
          "Zvýšené vylučování melaninu ledvinami do podkoží",
          "Přímá intoxikace kůže amoniakem"
        ],
        correct: 0,
        explanations: [
          "Správně! U Addisonovy choroby chybí kortizol, což vede k odstranění negativní zpětné vazby na hypothalamus a adenohypofýzu. Dochází k extrémní stimulaci sekrece ACTH. ACTH se tvoří společně s MSH z velkého prekurzoru POMC. Samotný ACTH navíc obsahuje aminokyselinovou sekvenci shodnou s MSH, takže přímo stimuluje melanocyty k produkci kožního pigmentu.",
          "Nesprávně. Ukládání železa způsobuje hemochromatózu, nikoli Addisonovu chorobu.",
          "Nesprávně. Melanin se ledvinami nevylučuje do podkoží.",
          "Nesprávně. Amoniak nezpůsobuje hyperpigmentaci."
        ]
      }
    ]
  }"""

# Rebuild SPECIAL_2_DETAILS
new_blocks = []

# Row 1-6: keep as is
for num in range(1, 7):
    new_blocks.append(blocks[num])

# Row 7-10: splits
for num in range(7, 11):
    new_blocks.append(splits[num])

# Row 11-14: shift old 8-11 (by +3)
for num in range(8, 12):
    orig = blocks[num]
    old_key = f'"spec-2-{num}":'
    new_key = f'"spec-2-{num+3}":'
    new_blocks.append(orig.replace(old_key, new_key, 1))

# Row 15-17: splits
for num in range(15, 18):
    new_blocks.append(splits[num])

# Row 18-21: shift old 13-16 (by +5)
for num in range(13, 17):
    orig = blocks[num]
    old_key = f'"spec-2-{num}":'
    new_key = f'"spec-2-{num+5}":'
    new_blocks.append(orig.replace(old_key, new_key, 1))

# Row 22-24: splits
for num in range(22, 25):
    new_blocks.append(splits[num])

# Row 25-27: splits
for num in range(25, 28):
    new_blocks.append(splits[num])

# Row 28-29: shift old 19-20 (by +9)
for num in range(19, 21):
    orig = blocks[num]
    old_key = f'"spec-2-{num}":'
    new_key = f'"spec-2-{num+9}":'
    new_blocks.append(orig.replace(old_key, new_key, 1))

# Row 30-31: splits
for num in range(30, 32):
    new_blocks.append(splits[num])

# Row 32-36: shift old 22-26 (by +10)
for num in range(22, 27):
    orig = blocks[num]
    old_key = f'"spec-2-{num}":'
    new_key = f'"spec-2-{num+10}":'
    new_blocks.append(orig.replace(old_key, new_key, 1))

# Row 37-40: splits
for num in range(37, 41):
    new_blocks.append(splits[num])

# Row 41: shift old 28 (by +13)
orig = blocks[28]
new_blocks.append(orig.replace('"spec-2-28":', '"spec-2-41":', 1))

# Row 42: demyelinizace
new_blocks.append(demyel_detail)

# Row 43-46: shift old 29-32 (by +14)
for num in range(29, 33):
    orig = blocks[num]
    old_key = f'"spec-2-{num}":'
    new_key = f'"spec-2-{num+14}":'
    new_blocks.append(orig.replace(old_key, new_key, 1))

# Row 47-48: splits
for num in range(47, 49):
    new_blocks.append(splits[num])

# Row 49-50: splits
for num in range(49, 51):
    new_blocks.append(splits[num])

# Assemble new details block
new_details_str = ",\n\n".join(new_blocks)

# Extract header and footer
header = '// data_special2.js - Podrobné klinické texty a kvízy pro Speciální II.\nconst SPECIAL_2_DETAILS = {\n'
merge_idx = content.find("function getExtendedSpecial2Content")
footer = content[merge_idx:]

new_file_content = header + new_details_str + "\n};\n\n" + footer

with open("data_special2.js", "w", encoding="utf-8") as f:
    f.write(new_file_content)

print("Finished rebuilding data_special2.js!")
