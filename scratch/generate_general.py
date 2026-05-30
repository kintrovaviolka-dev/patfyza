import json
import random

# Fixed seed for deterministic shuffling and distractor selection
random.seed(42)

TOPICS = [
    {
        "id": "gen-1",
        "title": "Definice nemoci a zdraví - pojmy: etiologie, patogeneze, etiopatogeneze, symptom, syndrom. Průběh a zakončení nemocí. Iatrogenita. Psychosomatika.",
        "definition": "Zdraví je stav úplné tělesné, duševní a sociální pohody, nikoli pouze absence nemoci. Nemoc je patologický proces s narušením homeostázy a adaptability organismu.",
        "etiology": [
            "Etiologie studuje bezprostřední příčiny a podmínky vzniku nemocí.",
            "Iatrogenní poškození představuje nežádoucí stavy způsobené lékařským zásahem či chováním zdravotníka.",
            "Psychosomatické vlivy propojují psychický stav (stres, úzkost) s rozvojem somatických poruch."
        ],
        "pathogenesis": [
            "Patogeneze zkoumá mechanismy rozvoje, průběhu a zakončení patologických procesů.",
            "Etiopatogeneze je komplexní pohled na spouštěcí příčinu i následný patofyziologický řetězec.",
            "Sanogeneze představuje biologické a kompenzační procesy vedoucí k uzdravení organismu."
        ],
        "manifestations": [
            "Symptom je subjektivní (např. bolest) nebo objektivní (např. tachykardie) projev nemoci.",
            "Syndrom představuje charakteristický soubor symptomů se společnou etiopatogenezí.",
            "Průběh nemoci může být perakutní (hodiny), akutní (dny), subakutní (týdny) nebo chronický (měsíce až roky)."
        ],
        "diagnostics": [
            "Anamnéza a klinické vyšetření jsou základem odlišení symptomů od syndromů.",
            "Kvantifikace závažnosti symptomů pomáhá určit stadium a fázi onemocnění.",
            "Funkční vyšetření objektivizuje kompenzační a dekompenzační rezervy těla."
        ],
        "numbers": [
            ["WHO definice zdraví", "stav kompletní fyzické, psychické a sociální pohody"],
            ["Odhad psychosomatických příčin v primární péči", "30 - 40 %"],
            ["Výskyt nežádoucích iatrogenních příhod v nemocnicích", "cca 10 % hospitalizovaných"]
        ]
    },
    {
        "id": "gen-2",
        "title": "Ateroskleróza. Poruchy metabolismu lipidů - etiopatogeneze, akutní a chronické komplikace, následky.",
        "definition": "Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny.",
        "etiology": [
            "Hypercholesterolémie, zejména zvýšená koncentrace LDL a pokles HDL v plazmě.",
            "Endoteliální dysfunkce indukovaná kouřením, arteriální hypertenzí a diabetem.",
            "Genetická predispozice (např. familiární hypercholesterolémie v důsledku mutace LDL receptoru)."
        ],
        "pathogenesis": [
            "Průnik LDL do intimy a jeho následná oxidace (oxLDL) spouští lokální zánětlivou reakci.",
            "Monocyty migrují do intimy, mění se v makrofágy a fagocytují oxLDL, čímž vznikají pěnové buňky (foam cells).",
            "Proliferace hladkých svalových buněk a tvorba vazivové čepičky (fibrous cap) izoluje lipidové jádro plátu."
        ],
        "manifestations": [
            "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
            "Chronické komplikace: postupné zužování lumen způsobuje anginu pectoris nebo ICHDK.",
            "Ztráta elasticity a oslabení stěny tepny může vyústit v aneurysma (např. břišní aorty)."
        ],
        "diagnostics": [
            "Biochemický lipidový profil (celkový cholesterol, LDL, HDL, triglyceridy) nalačno.",
            "Ultrasonografie s duplexním zobrazením (měření tloušťky intimy-medie a přítomnosti plátů).",
            "Koronarografie a angio-CT pro zhodnocení anatomické závažnosti stenóz."
        ],
        "numbers": [
            ["Cílový LDL cholesterol u zdravých jedinců", "< 3.0 mmol/l"],
            ["Cílový LDL u velmi vysokého kardiovaskulárního rizika", "< 1.4 mmol/l"],
            ["Normální celkový cholesterol", "< 5.0 mmol/l"],
            ["Normální hladina triglyceridů nalačno", "< 1.7 mmol/l"]
        ]
    },
    {
        "id": "gen-3",
        "title": "Poruchy bilance kalia (K+) - etiopatogeneze, následky.",
        "definition": "Draslík je hlavní intracelulární kation (140 mmol/l) určující klidový membránový potenciál. Poruchy jeho bilance postihují elektricky vzrušivé tkáně (svaly, myokard).",
        "etiology": [
            "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
            "Hyperkalémie: selhání ledvin (AKI/CKD), deficit aldosteronu (Addison), přesun z buněk (acidóza, masivní lýza buněk, popáleniny).",
            "Iatrogenní podání kalia bez dostatečné monitorace renálních funkcí."
        ],
        "pathogenesis": [
            "Změna poměru Ki/Ke (intracelulární/extracelulární draslík) mění klidový membránový potenciál podle Nernstovy rovnice.",
            "Hypokalémie vyvolává hyperpolarizaci membrány, což ztěžuje vznik akčního potenciálu a zpomaluje repolarizaci (vznik vln U).",
            "Hyperkalémie vyvolává částečnou depolarizaci membrány, což inaktivuje sodíkové kanály, zpomaluje vedení vzruchu a hrozí asystolií."
        ],
        "manifestations": [
            "Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.",
            "Hyperkalémie: svalová slabost, parestezie, bradykardie, fibrilace komor a náhlá zástava srdce v diastole.",
            "EKG u hyperkalémie: vysoké hrotité T vlny, vymizení P vln a široký komplex QRS."
        ],
        "diagnostics": [
            "Stanovení koncentrace draslíku v séru (pozor na pseudohyperkalémii při hemolýze vzorku).",
            "Elektrokardiografie (EKG) jako klíčový nástroj k posouzení akutního elektrofyziologického ohrožení.",
            "Vyšetření acidobazické rovnováhy (pH výrazně ovlivňuje distribuci draslíku)."
        ],
        "numbers": [
            ["Referenční rozmezí draslíku v séru", "3.5 - 5.1 mmol/l"],
            ["Kritická hodnota těžké hypokalémie", "< 2.5 mmol/l"],
            ["Kritická hodnota těžké hyperkalémie", "> 6.5 mmol/l"]
        ]
    },
    {
        "id": "gen-4",
        "title": "Trombóza - rozdělení a příklady, projevy, následky.",
        "definition": "Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.",
        "etiology": [
            "Virchowova triáda: poškození endotelu, zpomalení toku krve (stagnace), hyperkoagulační stav (trombofilie).",
            "Arteriální trombóza: poškození endotelu aterosklerózou, hypertenzí či toxiny (kouření).",
            "Venózní trombóza: stagnace krve při imobilizaci, obezitě, srdečním selhání nebo po operacích."
        ],
        "pathogenesis": [
            "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
            "Při venózní trombóze dominuje aktivace plazmatické koagulace v zónách stagnujícího toku krve (červený fibrinový trombus s erytrocyty).",
            "Postupná propagace trombu (růst ve směru toku krve), organizace vazivem, rekanalizace nebo embolizace."
        ],
        "manifestations": [
            "Arteriální trombóza: akutní ischémie tkáně (infarkt myokardu, ischemická CMP, akutní ischémie končetiny).",
            "Venózní trombóza (hluboká žilní trombóza - HŽT): jednostranný otok končetiny, bolest, zarudnutí a cyanóza.",
            "Hlavním následkem HŽT je plicní embolie při uvolnění trombu a posttrombotický syndrom s chronickou žilní nedostatečností."
        ],
        "numbers": [
            ["Normální počet trombocytů v krvi", "150 - 450 x 10^9/l"],
            ["Wells Score pro HŽT (vysoká pravděpodobnost)", ">= 3 body"],
            ["D-dimer negativní limit pro vyloučení HŽT", "< 500 ug/l"]
        ],
        "diagnostics": [
            "Duplexní ultrasonografie žil (kompresní ultrazvuk) u HŽT končetin.",
            "Stanovení D-dimerů v plazmě (vysoká citlivost, nízká specificita - vylučovací test).",
            "Koagulační screening (Quick/INR, APTT) a vyšetření trombofilních stavů (Leidenská mutace)."
        ]
    },
    {
        "id": "gen-5",
        "title": "Hypovolemický šok. Hemoragický šok-etiopatogeneze a následky.",
        "definition": "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.",
        "etiology": [
            "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).",
            "Nehemoragický hypovolemický šok: dehydratace (průjmy, zvracení), těžké popáleniny (únik plazmy), polyurie.",
            "Sekvestrace tekutiny do tzv. třetího prostoru (ileus, pankreatitida)."
        ],
        "pathogenesis": [
            "Pokles venózního návratu (preloadu) vede ke snížení tepového objemu a srdečního výdeje.",
            "Aktivace baroreceptorů spouští sympatoadrenální systém a RAAS, což vyvolá vazokonstrikci a tachykardii pro udržení MAP.",
            "Centralizace oběhu udržuje perfuzi mozku a srdce na úkor kůže, svalů a ledvin, kde vzniká ischemické poškození."
        ],
        "manifestations": [
            "Studená, bledá a opocená kůže, prodloužený kapilární návrat (> 2 s).",
            "Tachykardie, hypotenze (u mladých kompenzovaná až do ztráty 30 % objemu), oligurie až anurie.",
            "Tkáňová hypoxie s přechodem na anaerobní metabolismus vede k laktátové acidóze a multiorgánovému selhání (MODS)."
        ],
        "diagnostics": [
            "Sledování klinických známek (tepová frekvence, krevní tlak, hodinová diuréza).",
            "Shock Index (poměr tepové frekvence k systolickému tlaku) jako rychlý screening závažnosti.",
            "Měření hladiny laktátu v séru (indikátor tkáňové hypoxie a závažnosti šoku)."
        ],
        "numbers": [
            ["Normální Shock Index", "0.5 - 0.7"],
            ["Shock Index značící závažný šok", "> 1.0"],
            ["Hemoragický šok třídy III (ztráta krve)", "30 - 40 % (1500-2000 ml)"],
            ["Diuréza u rozvinutého šoku", "< 0.5 ml/kg/hod"]
        ]
    },
    {
        "id": "gen-6",
        "title": "Stres a všeobecný adaptační syndrom - charakteristika, fáze, etiopatogeneze.",
        "definition": "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
        "etiology": [
            "Fyzikální stresory: chlad, horko, trauma, infekce, bolest, nadměrná fyzická zátěž.",
            "Psychogenní stresory: úzkost, strach, sociální konflikty, dlouhodobá duševní zátěž.",
            "Narušení biologických rytmů a spánková deprivace."
        ],
        "pathogenesis": [
            "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradrenalin). Reakce 'boj nebo útěk'.",
            "Fáze 2: Rezistence. Aktivace osy hypothalamus-hypofýza-kůra nadledvin (osa HPA). Uvolnění CRH, ACTH a následně kortizolu, který mobilizuje energetické zásoby.",
            "Fáze 3: Vyčerpání. Nastává při dlouhodobém působení stresoru. Dochází k depleci glukokortikoidů, atrofii kůry nadledvin a selhání adaptace."
        ],
        "manifestations": [
            "Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility.",
            "Fáze rezistence: chronicky zvýšený kortizol způsobuje supresi imunitního systému (involuce thymu, lymfopenie), katabolismus.",
            "Fáze vyčerpání: úzkost, deprese, rozvoj stresových vředů v žaludku (Curlingovy vředy), hypertenze a metabolický rozvrat."
        ],
        "diagnostics": [
            "Měření hladin kortizolu v séru, slinách (ztráta diurnálního rytmu) a volného kortizolu v moči.",
            "Stanovení plazmatických katecholaminů a ACTH.",
            "Sledování imunitního profilu (leukocytární vzorec, pokles počtu eosinofilů a lymfocytů)."
        ],
        "numbers": [
            ["Ranní referenční hladina kortizolu v séru", "140 - 690 nmol/l"],
            ["Půlnoční fyziologický kortizol (sliny)", "< 100 nmol/l"],
            ["Normální hladina ACTH nalačno", "2.2 - 13.2 pmol/l"]
        ]
    },
    {
        "id": "gen-7",
        "title": "Vliv celkové a částečné imobilizace.",
        "definition": "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
        "etiology": [
            "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
            "Neurologická onemocnění (CMP s ochrnutím, kóma, pokročilá demence).",
            "Těžká interní onemocnění (srdeční selhání NYHA IV, kritické respirační selhání)."
        ],
        "pathogenesis": [
            "Kardiovaskulární: redistribuce krve z dolních končetin do hrudníku vede k poklesu baroreflexu a rozvoji ortostatické dysfunkce.",
            "Lokomotorický: chybění mechanické zátěže tlumí osteoblasty a aktivuje osteoklasty (odbourávání kostí), svaly atrofují z inaktivity.",
            "Respirační: hypoventilace a stagnace sekretu v dolních plicních lalocích (hypostatická pneumonie)."
        ],
        "manifestations": [
            "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.",
            "Svalová atrofie (ztráta svalové hmoty), kloubní kontraktury a imobilizační osteoporóza s hyperkalciurií.",
            "Vznik dekubitů (proleženin) v místech kostních výčnělků v důsledku ischémie kůže pod tlakem."
        ],
        "diagnostics": [
            "Klinické sledování turgoru kůže, stavu podkoží v predilekčních místech (sakrum, paty).",
            "Laboratorní monitorování kalcémií a kalciurie (detekce kostní resorpce).",
            "Spirometrické vyšetření (pokles vitální kapacity plic u ležících pacientů)."
        ],
        "numbers": [
            ["Rychlost ztráty svalové hmoty při imobilizaci", "1.5 - 2 % denně (v prvních 2 týdnech)"],
            ["Pokles svalové síly za týden klidu na lůžku", "10 - 15 %"],
            ["Časný rozvoj ortostatické hypotenze", "již po 3 - 4 dnech na lůžku"]
        ]
    },
    {
        "id": "gen-8",
        "title": "Systémová zánětlivá odpověď- etiopatogeneze, následky.",
        "definition": "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.",
        "etiology": [
            "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
            "Neinfekční příčiny: těžká traumata, popáleniny, akutní pankreatitida (autodigese).",
            "Velké chirurgické výkony, ischemicko-reperfúzní syndrom."
        ],
        "pathogenesis": [
            "Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu.",
            "Mediátory vyvolají celoplošnou aktivaci endotelu, generalizovanou vazodilataci a zvýšenou kapilární propustnost (prosakování).",
            "Aktivace koagulační kaskády a fibrinolýzy na poškozeném endotelu přispívá k mikrotrombóze a orgánové ischémii."
        ],
        "manifestations": [
            "Teplotní nestabilita (horečka > 38 °C nebo podchlazení < 36 °C).",
            "Tachykardie, tachypnoe a změny v počtu leukocytů.",
            "Následky: generalizovaný edém (únik do interstitia), oběhová nestabilita (distributivní šok) a rozvoj MODS."
        ],
        "diagnostics": [
            "Klinické vyhodnocení 4 kritérií SIRS (teplota, TF, DF, leukocyty).",
            "Stanovení markerů zánětu v séru (CRP, prokalcitonin) a krevního obrazu.",
            "Vyšetření acidobazické rovnováhy k průkazu laktátové acidózy (hypoperfuze)."
        ],
        "numbers": [
            ["Teplota pro kritérium SIRS", "< 36 °C nebo > 38 °C"],
            ["Tepová frekvence pro kritérium SIRS", "> 90/min"],
            ["Dechová frekvence pro kritérium SIRS", "> 20/min (nebo pCO2 < 4.3 kPa)"],
            ["Počet leukocytů pro kritérium SIRS", "< 4 x 10^9/l nebo > 12 x 10^9/l"]
        ]
    },
    {
        "id": "gen-9",
        "title": "Nespecifický a specifický imunitní systém - poruchy funkce, principy.",
        "definition": "Imunitní systém chrání organismus před patogeny. Nespecifická (vrozená) imunita reaguje okamžitě a nespecificky. Specifická (adaptivní) imunita reaguje pomaleji, ale vytváří imunologickou paměť.",
        "etiology": [
            "Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID).",
            "Získané imunitní poruchy (sekundární imunodeficity): infekce HIV (destrukce CD4+), imunosupresivní léčba, malnutrice, stárnutí.",
            "Poruchy regulace vedoucí k autoimunitním procesům."
        ],
        "pathogenesis": [
            "Nespecifická imunita: buněčná složka (makrofágy, neutrofily, NK buňky) využívá fagocytózu. Humorální složka (komplement) vyvolá lýzu cílů.",
            "Specifická imunita: T-lymfocyty (buněčná) rozeznávají antigeny na MHC molekulách. B-lymfocyty (humorální) se diferencují v plazmatické buňky produkující protilátky (IgG, IgA, IgM, IgD, IgE).",
            "Defekty fagocytózy vedou k recidivujícím pyogenním infekcím; defekty protilátek k opouzdřeným bakteriálním infekcím."
        ],
        "manifestations": [
            "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
            "Zvýšený výskyt nádorových onemocnění z důvodu selhání imunitního dozoru.",
            "Lymfadenopatie, splenomegalie a klinické projevy chronického zánětu."
        ],
        "diagnostics": [
            "Stanovení celkového počtu leukocytů a diferenciálního krevního obrazu.",
            "Kvantitativní stanovení imunoglobulinů v séru (IgG, IgA, IgM) pomocí nefelometrie.",
            "Průtoková cytometrie pro stanovení subpopulací lymfocytů (CD4+, CD8+, CD19+ B-buňky)."
        ],
        "numbers": [
            ["Fyziologické rozmezí leukocytů u dospělých", "4.0 - 10.0 x 10^9/l"],
            ["Normální podíl neutrofilů v diferenciálu", "45 - 70 %"],
            ["Normální podíl lymfocytů v diferenciálu", "20 - 45 %"],
            ["Normální koncentrace IgG v séru", "7.0 - 16.0 g/l"]
        ]
    },
    {
        "id": "gen-10",
        "title": "Imunopatologické reakce - rozdělení, etiopatogeneze. Principy autoimunitních reakcí - mechanizmy. Atopie. Imunotolerance.",
        "definition": "Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV.",
        "etiology": [
            "Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci).",
            "Vlastní antigeny pozměněné infekcí, léky nebo genetickými mutacemi (spouštěče autoimunity).",
            "Ztráta imunotolerance - selhání centrální (v thymu/kostní dřeni) nebo periferní tolerance."
        ],
        "pathogenesis": [
            "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů.",
            "Typ II (cytotoxický): IgG/IgM protilátky se vážou na buněčné antigeny, aktivují komplement a vyvolají lýzu (např. transfúzní reakce).",
            "Typ III (imunokomplexový): cirkulující antigen-protilátka komplexy se ukládají v cévních stěnách, aktivují komplement a neutrofily (např. glomerulonefritida).",
            "Typ IV (opožděný): T-lymfocyty (CD4+ a CD8+) přímo ničí tkáně nebo uvolňují cytokiny aktivující makrofágy (např. kontaktní ekzém, tuberkulinový test)."
        ],
        "manifestations": [
            "Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace).",
            "Typ II a III: hemolytická anémie, vaskulitidy, artritida, nefritida.",
            "Autoimunitní projevy: orgánově specifické (tyroiditida, diabetes 1. typu) nebo systémové (SLE, revmatoidní artritida)."
        ],
        "diagnostics": [
            "Průkaz specifického IgE a celkového IgE v séru.",
            "Kožní prick testy (vyhodnocení časné kožní reakce typu I).",
            "Měření autoantiprotiátek (ANA, ANCA, RF) v séru a biopsie s imunofluorescenčním průkazem imunokomplexů."
        ],
        "numbers": [
            ["Rozmezí celkového IgE u zdravých dospělých", "< 100 kU/l"],
            ["Doba rozvoje reakce typu I (časná)", "5 - 30 minut od expozice"],
            ["Doba rozvoje reakce typu IV (opožděná)", "48 - 72 hodin od expozice"]
        ]
    },
    {
        "id": "gen-11",
        "title": "Poškození vlivem fyzikálních vlivů - chlad, teplo, el. proudu, elektromagnetické a ionizující záření.",
        "definition": "Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu.",
        "etiology": [
            "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
            "Průchod elektrického střídavého proudu (zejména 50 Hz v domácí síti).",
            "Ionizující záření (RTG, gama záření, radioaktivní rozpad) a elektromagnetické vlnění."
        ],
        "pathogenesis": [
            "Chlad: vazokonstrikce, tvorba ledových krystalů v buňkách (dehydratace a destrukce membrán), krystalizace vody v cévách (trombóza).",
            "Teplo: denaturace proteinů, tepelná koagulace cév a buněčná nekróza.",
            "El. proud: depolarizace elektricky vzrušivých tkání (fibrilace komor, křeče) a Jouleovo teplo (popálení tkání).",
            "Ionizující záření: přímé štěpení DNA a nepřímá radiolýza vody za vzniku vysoce reaktivních OH* radikálů."
        ],
        "manifestations": [
            "Popáleniny (klasifikace I.-IV. stupně podle hloubky) a omrzliny.",
            "Celková hypotermie (zmatenost, bradykardie, asystolie) nebo hypertermie (multiorgánové selhání).",
            "Akutní nemoc z ozáření (syndrom hematopoetický, gastrointestinální a neurovaskulární) a pozdní stochastické účinky (nádory, mutace)."
        ],
        "diagnostics": [
            "Měření tělesné teploty v jádru (rektálně, močový měchýř).",
            "Elektrokardiogram (EKG) u zásahu el. proudem (arytmie) a hypotermie (Osbornovy vlny J).",
            "Krevní obraz (sledování lymfopenie jako markeru radiačního poškození kostní dřeně)."
        ],
        "numbers": [
            ["Definice hypotermie (tělesná teplota v jádru)", "< 35 °C"],
            ["Práh střídavého proudu pro fibrilaci komor (50 Hz)", "> 50 - 100 mA"],
            ["Letální dávka celotělového ionizujícího záření (LD50/60)", "3.5 - 4.5 Gy"]
        ]
    },
    {
        "id": "gen-12",
        "title": "Embolie - rozdělení. Plicní embolie - etiopatogeneze, projevy, následky. Periferní a paradoxní embolie.",
        "definition": "Embolie je zavlečení pevného, tekutého nebo plynného tělesa (embolu) krevním oběhem do místa zúžení řečiště, kde způsobí ucpání cévy a ischémii.",
        "etiology": [
            "Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve.",
            "Speciální formy: tuková embolie (zlomeniny dlouhých kostí), vzduchová (trauma krčních žil, potápění), embolie plodové vody, nádorová.",
            "Paradoxní embolie: průnik trombu z venózního oběhu do arteriálního přes pravolevý zkrat (např. foramen ovale patens)."
        ],
        "pathogenesis": [
            "Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.",
            "Akutní uzávěr plicnice prudce zvýší odpor plicního řečiště, čímž vzniká přetížení pravé komory (akutní cor pulmonale).",
            "Zvýšený mrtvý prostor (ventilace bez perfuze) a pravolevý shunt v plicích vyvolají těžkou arteriální hypoxémii."
        ],
        "manifestations": [
            "PE: náhlá dušnost, bolest na hrudníku (pleurální charakter), kašel, hemoptýza, tachypnoe a tachykardie.",
            "Při masivní PE dochází k obstrukčnímu šoku s hypotenzí, synkopou až náhlou smrtí.",
            "Periferní embolie (z levého srdce): akutní ischémie končetiny (bolest, chlad, ztráta pulzu) nebo mozku (CMP)."
        ],
        "diagnostics": [
            "CT pulmonální angiografie (CTPA) - zlatý standard diagnostiky PE.",
            "Vyšetření D-dimerů v plazmě (vysoká negativní předpovědní hodnota).",
            "Echokardiografie (známky přetížení pravé komory - McConnelův příznak, dilatace PK)."
        ],
        "numbers": [
            ["Normální hodnota D-dimerů pro vyloučení PE", "< 500 ug/l"],
            ["Podíl PE vzniklých z HŽT dolních končetin", "> 85 - 90 %"],
            ["Wells Score pro PE (vysoká pravděpodobnost)", "> 6 bodů"]
        ]
    },
    {
        "id": "gen-13",
        "title": "Poruchy acidobazické rovnováhy - klasifikace poruch, kompenzace a korekce, příčiny a následky. Příčiny smrti při poruchách acidobazické rovnováhy.",
        "definition": "Poruchy acidobazické rovnováhy (ABR) jsou stavy odchylky pH krve od fyziologického rozmezí vyvolané respiračními nebo metabolickými příčinami.",
        "etiology": [
            "Respirační acidóza: hypoventilace (CHOPN, útlum dechového centra opiáty).",
            "Metabolická acidóza: akumulace H+ (ketoacidóza, laktátová acidóza) nebo ztráta HCO3- (těžké průjmy).",
            "Respirační alkalóza: hyperventilace (psychogenní, hypoxie).",
            "Metabolická alkalóza: ztráta H+ (zvracení) nebo nadbytek HCO3- (podání hydrogenuhličitanu)."
        ],
        "pathogenesis": [
            "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.",
            "Kompenzace: metabolická porucha je kompenzována plícemi (změna ventilace a pCO2 do 12-24 h); respirační porucha je kompenzována ledvinami (změna sekrece H+ a HCO3- do 3-5 dnů).",
            "Korekce: odstranění primární patofyziologické příčiny (např. podání inzulínu, rehydratace)."
        ],
        "manifestations": [
            "Acidóza tlumí kontraktilitu myokardu a dráždivost CNS (apatie, uremické kóma), způsobuje hyperkalémii.",
            "Alkalóza snižuje ionizovaný vápník v séru (vznik tetanie, křečí) a způsobuje hypokalémii.",
            "Kussmaulovo dýchání (hluboké a rychlé) jako typická respirační kompenzace metabolické acidózy."
        ],
        "diagnostics": [
            "Vyšetření krevních plynů (Astrup) - měření pH, pCO2, pO2, HCO3-, Base Excess (BE).",
            "Výpočet aniontové mezery (Anion Gap) k diferenciální diagnostice metabolických acidóz.",
            "Vyšetření iontogramu (draslík, sodík, chloridy, kalcium)."
        ],
        "numbers": [
            ["Fyziologické pH arteriální krve", "7.35 - 7.45"],
            ["Extrémní pH limity slučitelné se životem", "6.80 - 7.80"],
            ["Normální hodnota pCO2", "4.6 - 6.0 kPa (35-45 mmHg)"],
            ["Normální koncentrace HCO3-", "22 - 26 mmol/l"],
            ["Normální Base Excess (BE)", "-2 až +2 mmol/l"]
        ]
    },
    {
        "id": "gen-14",
        "title": "Diseminovaná intravaskulární koagulace (DIC) - etiopatogeneze, projevy, následky.",
        "definition": "DIC je získaný syndrom charakterizovaný systémovou aktivací koagulace v mikrocirkulaci, což vede k tvorbě trombů, spotřebování koagulačních faktorů a destiček, a následnému masivnímu krvácení.",
        "etiology": [
            "Sepse a těžké infekce (lipopolysacharid gramnegativních bakterií aktivuje monocyty).",
            "Gynekologické komplikace (embolie plodové vody, abrupce placenty uvolňující tkáňový faktor).",
            "Rozsáhlá traumata, popáleniny, hemolytické potransfúzní reakce a nádorová onemocnění (akutní promyelocytární leukémie)."
        ],
        "pathogenesis": [
            "Masivní vyplavení tkáňového faktoru (TF) do oběhu spouští vnější cestu koagulace.",
            "Tvorba mikrotrombů v kapilárách vede k ischémii orgánů (selhání ledvin, nadledvin - Waterhouse-Friderichsenův syndrom).",
            "Extrémní spotřeba (konzumpce) destiček, fibrinogenu a koagulačních faktorů (II, V, VIII) spolu se sekundární hyperfibrinolýzou vyvolá těžkou krvácivou diatézu."
        ],
        "manifestations": [
            "Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).",
            "Krvácivé stadium: difúzní krvácení z vpichů, operačních ran, sliznic, petechie a sufúze.",
            "Rozvoj refrakterního šoku v důsledku mikroangiopatické hemolytické anémie (MAHA) a tkáňové hypoxie."
        ],
        "diagnostics": [
            "Sledování dynamiky koagulačních parametrů: pokles destiček a fibrinogenu.",
            "Prodloužení koagulačních časů (Quick/INR, APTT, trombinový čas).",
            "Extrémní vzestup fibrinových degradačních produktů (FDP) a D-dimerů, nález schistocytů v nátěru."
        ],
        "numbers": [
            ["Kritická hranice fibrinogenu u DIC", "< 1.0 g/l"],
            ["Skóre ISTH pro zjevnou DIC", ">= 5 bodů"],
            ["Typický pokles trombocytů u akutní DIC", "< 50 - 100 x 10^9/l"]
        ]
    },
    {
        "id": "gen-15",
        "title": "Kardiogenní a obstrukční šok - etiopatogeneze a následky.",
        "definition": "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
        "etiology": [
            "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.",
            "Obstrukční šok mimoplicní: srdeční tamponáda (útlak komor tekutinou), tenzní pneumotorax (útlak žilního návratu).",
            "Obstrukční šok plicní: masivní plicní embolie ucpávající kmen plicnice."
        ],
        "pathogenesis": [
            "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.",
            "Obstrukční: mechanická překážka znemožňuje diastolické plnění komor (preload klesá na minimum) nebo blokuje ejekci (např. PE).",
            "Kompenzační vazokonstrikce (aktivace sympatiku) zvyšuje afterload, což u kardiogenního šoku dále zatěžuje selhávající srdce."
        ],
        "manifestations": [
            "Těžká arteriální hypotenze (MAP < 65 mmHg) refrakterní na volumoterapii.",
            "Bledost, studený pot, oligurie, poruchy vědomí z hypoperfuze mozku.",
            "U kardiogenního šoku: dušnost a vlhké chropky na plicích (plicní edém); u obstrukčního: distenze krčních žil (městnání před pravým srdcem)."
        ],
        "diagnostics": [
            "Echokardiografie (klíčová k průkazu tamponády, plicní embolie nebo dyskineze komory).",
            "Pravostranná srdeční katetrizace (Swan-Ganz) pro měření tlaků (PCWP vysoký u kardiogenního šoku, nízký u mimoplicního obstrukčního šoku).",
            "Měření srdečního výdeje a indexu (CI) a biochemických markerů (troponiny, BNP)."
        ],
        "numbers": [
            ["Definiční pokles Srdečního indexu (CI) u šoku", "< 2.2 l/min/m^2"],
            ["Tlak v plicnici v zaklínění (PCWP) u kardiogenního šoku", "> 15 - 18 mmHg"],
            ["Kritická hodnota středního arteriálního tlaku (MAP)", "< 65 mmHg"]
        ]
    },
    {
        "id": "gen-16",
        "title": "Dehydratace - etiopatogeneze, následky.",
        "definition": "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.",
        "etiology": [
            "Izotonická: rovnoměrná ztráta vody a soli (zvracení, průjmy, popáleniny).",
            "Hypertonická: převážná ztráta čisté vody (nedostatečný příjem tekutin, profúzní pocení, diabetes insipidus, osmotická diuréza).",
            "Hypotonická: ztráta sodíku převyšuje ztrátu vody (zvracení/průjmy hrazené čistou vodou bez minerálů, abúzus diuretik)."
        ],
        "pathogenesis": [
            "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
            "Hypertonická: vzestup osmolarity ECF nasává vodu z buněk (ICF) do ECF. Dochází k intracelulární dehydrataci (scvrkávání buněk, zejména neuronů).",
            "Hypotonická: pokles osmolarity ECF vede k přesunu vody z ECF do buněk (ICF). Dochází k edému buněk a hypovolémii v cévách."
        ],
        "manifestations": [
            "Snížený kožní turgor (kožní řasa vyhlazuje pomalu), suché sliznice, zapadlé oči.",
            "Hypertonická: extrémní pocit žízně, neklid, halucinace, křeče až kóma ze scvrkávání neuronů.",
            "Hypotonická: bolesti hlavy, apatie, křeče a edém mozku, vysoké riziko oběhového kolapsu (těžká hypovolémie)."
        ],
        "diagnostics": [
            "Měření koncentrace sodíku v séru (klíč k rozlišení typů dehydratace).",
            "Stanovení sérové a močové osmolarity.",
            "Sledování hematokritu a celkových bílkovin (zvýšení při hemokoncentraci)."
        ],
        "numbers": [
            ["Normální sérová osmolarita", "275 - 295 mOsm/kg"],
            ["Sérové natrium u hypertonické dehydratace", "> 145 mmol/l"],
            ["Sérové natrium u hypotonické dehydratace", "< 135 mmol/l"],
            ["Těžká dehydratace (ztráta tělesné hmotnosti)", ">= 10 %"]
        ]
    },
    {
        "id": "gen-17",
        "title": "Reaktivní kyslíkové a dusíkové sloučeniny - role za fyziologického stavu a v patogenezi nemocí. Ischemicko-reperfúzní syndrom - etiopatogeneze, příklady.",
        "definition": "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.",
        "etiology": [
            "Fyziologické zdroje: mitochondriální dýchací řetězec, oxidativní vzplanutí fagocytů (likvidace mikrobů), oxid dusnatý (NO) jako vazodilatátor.",
            "Patologické zdroje: záření, toxiny, zánět, hypoxie, reperfúze ischemické tkáně.",
            "Příklady IRS: reperfúze myokardu po PCI (angioplastice) u infarktu, obnovení oběhu po trombolýze u CMP."
        ],
        "pathogenesis": [
            "Ischémie vede k depleci ATP a hromadění hypoxantinu. Zároveň se vápník hromadí v cytosolu a aktivuje proteázy transformující xantinoxidázu.",
            "Reperfúze přivádí kyslík, který xantinoxidáza využije k masivní tvorbě superoxidu (O2*-) a peroxidu vodíku (H2O2).",
            "Oxidativní stres: ROS poškozují lipidy membrán (peroxidace), proteiny a DNA, což vede k otevření mitochondriálního pólu (MPTP) a apoptóze/nekróze."
        ],
        "manifestations": [
            "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
            "Edém tkáně (např. edém mozku po rekanalizaci) doprovázený mikrovaskulárním poškozením (no-reflow fenomén).",
            "Systémová zánětlivá reakce z vyplavení zánětlivých mediátorů a ROS z ischemického ložiska."
        ],
        "diagnostics": [
            "Stanovení produktů lipidové peroxidace (např. malondialdehyd) v séru.",
            "Laboratorní monitorování markerů tkáňového poškození po reperfúzi (vzestup kreatinkinázy, troponinu).",
            "Průkaz mitochondriální dysfunkce a tkáňového edému pomocí MRI."
        ],
        "numbers": [
            ["Poločas vysoce reaktivního hydroxylového radikálu (OH*)", "cca 10^-9 sekundy"],
            ["Časový limit pro reverzibilní ischémii myokardu", "< 20 - 30 minut"],
            ["Práh ischemické tolerance neuronů (mozková kůra)", "4 - 5 minut"]
        ]
    },
    {
        "id": "gen-18",
        "title": "Hyperhydratace - etiopatogeneze, následky.",
        "definition": "Hyperhydratace je stav nadměrného množství vody v organismu. Podle koncentrace sodíku a osmolarity se dělí na izotonickou, hypertonickou a hypotonickou.",
        "etiology": [
            "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody).",
            "Hypertonická: pití mořské vody, infuze koncentrovaného hypertonického NaCl.",
            "Hypotonická (otrava vodou): nadměrný příjem čisté vody (psychogenní polydipsie), syndrom SIADH (nadbytek ADH), renální selhání."
        ],
        "pathogenesis": [
            "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.",
            "Hypertonická: vysoká osmolarita ECF nasává vodu z buněk (ICF), dochází ke scvrkávání buněk a expanzi ECF.",
            "Hypotonická: nízká osmolarita ECF vede k přesunu vody do buněk, dochází k edému buněk (intracelulární hyperhydratace, edém mozku)."
        ],
        "manifestations": [
            "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
            "Městnání v plicním oběhu (dušnost, plicní edém) a arteriální hypertenze.",
            "Hypotonická hyperhydratace vyvolává únavu, zvracení, křeče, somnolenci až kóma z edému mozku (intrakraniální hypertenze)."
        ],
        "diagnostics": [
            "Stanovení hladiny sodíku a osmolarity v séru.",
            "Sledování tělesné hmotnosti (rychlý nárůst) a bilance tekutin.",
            "RTG plic (známky městnání, fluidotorax) a stanovení natriuretických peptidů (BNP/NT-proBNP)."
        ],
        "numbers": [
            ["Podíl celkové tělesné vody u dospělého muže", "cca 60 % hmotnosti"],
            ["Kritická hranice hyponatrémie pro rozvoj edému mozku", "< 120 mmol/l"],
            ["Sérové natrium u hypertonické hyperhydratace", "> 145 mmol/l"]
        ]
    },
    {
        "id": "gen-19",
        "title": "Obezita - etiopatogeneze, následky, role v patogenezi nemocí.",
        "definition": "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
        "etiology": [
            "Pozitivní energetická bilance: dlouhodobý nadbytek energetického příjmu nad výdejem.",
            "Genetické faktory (ovlivňují bazální metabolismus, pocit sytosti - např. mutace genu pro leptin).",
            "Endokrinní příčiny (Cushingův syndrom, hypotyreóza) a vliv sedavého způsobu života."
        ],
        "pathogenesis": [
            "Hypertrofie a hyperplázie adipocytů vede k hypoxii v tukové tkáni.",
            "Dysfunkční tuková tkáň infiltrovaná makrofágy secernuje prozánětlivé adipokiny (TNF-alfa, IL-6, resistin) a klesá produkce adiponektinu.",
            "Vyplavení volných mastných kyselin (FFA) a zánět blokuje inzulínové receptory v játrech a svalech, což vede k inzulínové rezistenci."
        ],
        "manifestations": [
            "Metabolické: inzulínová rezistence, diabetes mellitus 2. typu, dyslipidémie (metabolický syndrom X).",
            "Kardiovaskulární: arteriální hypertenze, akcelerovaná ateroskleróza, ischemická choroba srdeční.",
            "Mechanické: osteoartróza nosných kloubů (kyčle, kolena), syndrom obstrukční spánkové apnoe (OSAS)."
        ],
        "numbers": [
            ["Definice obezity 1. stupně podle BMI", "30.0 - 34.9 kg/m^2"],
            ["Definice těžké obezity (3. stupně - morbidní) podle BMI", ">= 40.0 kg/m^2"],
            ["Rizikový obvod pasu (kardiovaskulární riziko) u mužů", "> 102 cm"],
            ["Rizikový obvod pasu (kardiovaskulární riziko) u žen", "> 88 cm"],
            ["WHR (poměr pas/boky) u mužů pro androidní obezitu", "> 1.0"]
        ],
        "diagnostics": [
            "Měření Body Mass Indexu (BMI) a obvodu pasu.",
            "Měření tloušťky kožních řas nebo bioimpedanční analýza složení těla (podíl tuku).",
            "Biochemický screening (glykémie nalačno, oGTT, lipidový profil, jaterní enzymy)."
        ]
    },
    {
        "id": "gen-20",
        "title": "Šok-definice, etiopatogeneze, rozdělení.",
        "definition": "Šok je akutní, život ohrožující syndrom charakterizovaný generalizovanou hypoperfuzí tkání, která vede k deficitu kyslíku a živin v buňkách a k metabolickému rozvratu.",
        "etiology": [
            "Hypovolemický / Hemoragický šok (ztráta cirkulující tekutiny nebo krve).",
            "Kardiogenní a obstrukční šok (selhání srdeční pumpy nebo mechanická překážka).",
            "Distributivní šok: sepse, anafylaxe, neurogenní šok (generalizovaná vazodilatace)."
        ],
        "pathogenesis": [
            "Fáze 1: Kompenzovaný šok. Centralizace oběhu (sympatikus, RAAS) udržuje perfuzní tlak v mozku a srdci na úkor periferie.",
            "Fáze 2: Dekompenzovaný šok. Přetrvávající ischemie periferie vede k akumulaci laktátu a metabolitů, což vyvolá lokální vazodilataci a pokles TK.",
            "Fáze 3: Ireverzibilní šok. Těžká buněčná nekróza, poškození endotelu, rozvoj DIC a multiorgánového selhání (MODS)."
        ],
        "manifestations": [
            "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
            "Bledá, chladná a opocená kůže (výjimka u septického šoku v časné teplé fázi - vazodilatace).",
            "Oligurie, poruchy vědomí (somnolence, neklid, kóma), metabolická laktátová acidóza."
        ],
        "diagnostics": [
            "Kontinuální monitorování vitálních funkcí (krevní tlak, tep, dech, saturace SpO2).",
            "Laboratorní vyšetření: hladina laktátu v séru (marker závažnosti), acidobazická rovnováha.",
            "Invazivní hemodynamické monitorování a echokardiografie k určení typu šoku."
        ],
        "numbers": [
            ["Kritická hranice středního arteriálního tlaku (MAP)", "< 65 mmHg"],
            ["Patologická hladina laktátu indikující hypoperfuzi", "> 2.0 mmol/l"],
            ["Hodinová diuréza svědčící pro dobrou perfuzi ledvin", ">= 0.5 ml/kg/hod"]
        ]
    },
    {
        "id": "gen-21",
        "title": "Poškození a smrt buňky - reversibilní a ireversibilní, nekróza, apoptóza, autofagie.",
        "definition": "Smrt buňky je konečným stádiem buněčného poškození. Apoptóza je programovaná, energeticky závislá smrt; nekróza je náhlá, pasivní smrt buněk vyvolávající zánětlivou reakci.",
        "etiology": [
            "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření).",
            "Imunitní reakce (útok cytotoxických T-lymfocytů) a genetické mutace.",
            "Fyziologické procesy remodelace tkání (apoptóza při embryogenezi)."
        ],
        "pathogenesis": [
            "Reversibilní poškození: zduření buňky (hydroptická dystrofie) z důvodu mírného poklesu ATP a dysfunkce Na+/K+-ATPázy.",
            "Ireversibilní poškození (bod zlomu): těžká destrukce mitochondrií (otevření MPTP), masivní influx Ca2+ do cytosolu a degradace membrán.",
            "Mechanismus apoptózy: aktivace kaspáz (vnitřní cestou přes cytochrom c z mitochondrií nebo vnější přes receptory smrti), tvorba apoptotických tělísek."
        ],
        "numbers": [
            ["Intracelulární koncentrace vápníku (v klidu)", "cca 10^-7 mol/l"],
            ["Poměr koncentrace Ca2+ (extracelulární / intracelulární)", "cca 10 000 : 1"],
            ["Poločas přežití neuronů při úplné anoxii", "4 - 5 minut"]
        ],
        "manifestations": [
            "Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest).",
            "Apoptóza: buňka se scvrkává, fragmentuje, je rychle fagocytována bez rozvoje zánětlivé reakce.",
            "Autofagie: přežívací strategie buňky, která při hladovění degraduje vlastní organely v lysozomech."
        ],
        "diagnostics": [
            "Průkaz nitrobuněčných enzymů v séru (např. troponin u myokardu, transaminázy u jater).",
            "Histologické a cytologické vyšetření (průkaz pyknózy, karyorexe a karyolýzy jader).",
            "Průtoková cytometrie s barvením annexinem V (detekce časné apoptózy)."
        ]
    },
    {
        "id": "gen-22",
        "title": "Horečka - etiopatogenze, průběh (fáze) horečky, pozitivní a negativní vliv horečky na organismus.",
        "definition": "Horečka (febris) je řízená hypertermie charakterizovaná přenastavením termoregulačního centra v hypothalamu (set-point) na vyšší hodnotu působením pyrogenů.",
        "etiology": [
            "Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně.",
            "Endogenní pyrogeny: prozánětlivé cytokiny (IL-1, IL-6, TNF-alfa) uvolněné aktivovanými imunocyty.",
            "Neinfekční záněty, nekróza tkáně (infarkt), nádorová onemocnění."
        ],
        "pathogenesis": [
            "Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2).",
            "PGE2 zvyšuje nastavení termostatu (set-point) v hypothalamu.",
            "Fáze horečky: 1. Stadium incrementi (vzestup teploty - vazokonstrikce, třesavka), 2. Stadium fastigii (plató), 3. Stadium decrementi (pokles - pocení, vazodilatace)."
        ],
        "manifestations": [
            "Zvýšení srdeční frekvence (tachykardie - o 10 tepů/min na každý 1 °C) a dechu, svalový třes, pocit chladu v 1. fázi, horkost a pocení ve 3. fázi.",
            "Pozitivní vliv: stimulace imunity (aktivace T-buněk, fagocytózy) a inhibice replikace některých patogenů.",
            "Negativní vliv: extrémní metabolická zátěž, dehydratace, u dětí riziko febrilních křečí, hyperpyrexie (> 41 °C) poškozuje mozek."
        ],
        "diagnostics": [
            "Měření tělesné teploty v různých lokalizacích (axilární, tympanální, rektální - jádro).",
            "Laboratorní markery zánětu (CRP, krevní obraz) k určení etiologie.",
            "Mikrobiologické vyšetření (hemokultury) při podezření na sepsi."
        ],
        "numbers": [
            ["Subfebrilie (zvýšená teplota)", "37.0 - 38.0 °C"],
            ["Horečka (febris)", "38.0 - 41.0 °C"],
            ["Hyperpyrexie (život ohrožující)", "> 41.0 °C"],
            ["Změna TF na 1 °C vzestupu teploty", "+ 10 tepů/min"]
        ]
    },
    {
        "id": "gen-23",
        "title": "Nádorové bujení - teorie vzniku nádorů, růst nádoru, tvorba metastáz, příčiny smrti u nádorových onemocnění, nádorové markery, paraneoplastický syndrom.",
        "definition": "Nádorové bujení je nekontrolovaná, autonomní proliferace buněk způsobená akumulací genetických mutací v klíčových genech regulujících buněčný cyklus.",
        "etiology": [
            "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53).",
            "Karcinogenní faktory: chemické (tabákový kouř), fyzikální (UV, ionizující záření), biologické (onkogeny virů - HPV, HBV)."
        ],
        "pathogenesis": [
            "Klonální expanze mutované buňky s únikem před apoptózou a replikativní senescencí (aktivace telomerázy).",
            "Angiogeneze: nádor vylučuje VEGF k tvorbě vlastních cév, což je nutné pro růst nad 1-2 mm.",
            "Metastazování: invaze přes bazální membránu (metaloproteinázy), intravazace, přežití v oběhu, extravazace a kolonizace cílového orgánu."
        ],
        "manifestations": [
            "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů.",
            "Systémové: nádorová kachexie (hubnutí, ztráta svalů) indukovaná TNF-alfa a IL-6, anémie chronických chorob.",
            "Paraneoplastické syndromy: syndromy vyvolané ektopickou produkcí hormonů (např. ACTH u malobuněčného karcinomu plic -> Cushing)."
        ],
        "diagnostics": [
            "Histopatologické a cytologické vyšetření z biopsie (jediná definitivní diagnóza).",
            "Zobrazovací metody (RTG, CT, MRI, PET-CT pro staging).",
            "Nádorové markery v séru (PSA, CEA, CA-125) pro monitorování průběhu."
        ],
        "numbers": [
            ["Počet buněk v 1 gramu nádorové tkáně (detekční limit)", "cca 10^9 buněk"],
            ["Normální hodnota PSA v séru", "< 4.0 ug/l"],
            ["Normální hodnota CEA u nekuřáků", "< 3.0 ug/l"]
        ]
    },
    {
        "id": "gen-24",
        "title": "Malnutrice - etiopatogeneze, následky, role v patogenezi nemocí.",
        "definition": "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
        "etiology": [
            "Nedostatečný příjem potravy (hladovění, mentální anorexie, chudoba).",
            "Poruchy trávení a vstřebávání (malabsorpce, celiakie, Crohnova choroba).",
            "Hyperkatabolismus při těžkých chronických zánětech, sepse, nádorových onemocněních (kachexie)."
        ],
        "pathogenesis": [
            "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována.",
            "Kwashiorkor (stresové hladovění): selektivní deficit bílkovin při dostatku sacharidů (nebo vlivem zánětu). Dochází k selhání proteosyntézy v játrech, poklesu albuminu a vzniku edémů.",
            "Pokles energetického stavu tlumí imunitní funkce a regeneraci tkání."
        ],
        "manifestations": [
            "Úbytek hmotnosti, atrofie kosterního svalstva (sarkopenie), vymizení podkožního tuku.",
            "Kwashiorkor: otoky (zejména břicha - ascites), hepatomegalie (steatóza jater z chybějících apoproteinů), kožní změny.",
            "Snížená hojivost ran, imunodeficit s vysokou náchylností k infekcím, svalová slabost postihující i dechové svaly."
        ],
        "diagnostics": [
            "Antropometrické měření (hmotnost, BMI, obvod svalové hmoty paže).",
            "Stanovení viscerálních proteinů v séru (albumin, prealbumin, transferrin).",
            "Měření energetického výdeje (nepřímá kalorimetrie)."
        ],
        "numbers": [
            ["Sérový albumin značící těžkou proteinkalorickou malnutrici", "< 25 g/l"],
            ["BMI index pro těžkou podvýživu", "< 16.0 kg/m^2"],
            ["Signifikantní neúmyslný úbytek hmotnosti", "> 10 % za 6 měsíců"]
        ]
    },
    {
        "id": "gen-25",
        "title": "Hypoxie a hyperoxie buňky - příčiny, adaptace, následky.",
        "definition": "Hypoxie je stav nedostatku kyslíku na buněčné úrovni. Hyperoxie je nadbytek kyslíku, který může vést k oxidačnímu poškození tkání.",
        "etiology": [
            "Hypoxická hypoxie: pokles pO2 ve vzduchu (nadmořská výška) nebo poruchy plic (ARDS, CHOPN).",
            "Anemická hypoxie: pokles kyslíkové kapacity krve (anémie, otrava CO).",
            "Cirkulační hypoxie: porucha dodávky krve (šok, lokální ischémie); Histotoxická hypoxie: buňka neumí O2 využít (otrava kyanidy).",
            "Hyperoxie: léčba vysokými koncentracemi kyslíku (FiO2 > 50 %)."
        ],
        "pathogenesis": [
            "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.",
            "Při těžké hypoxii selhává mitochondriální fosforylace, klesá ATP, stoupá anaerobní glykolýza a hromadí se laktát (acidóza).",
            "Hyperoxie: nadbytek kyslíku přetěžuje antioxidační systémy, což vede k masivní tvorbě ROS a peroxidaci membrán."
        ],
        "manifestations": [
            "Hypoxie: tachykardie, hyperventilace, cyanóza, u chronické polyglobulie a plicní hypertenze.",
            "Těžká akutní hypoxie: poruchy vědomí, křeče, edém mozku, smrt.",
            "Hyperoxie: poškození plicního epitelu (plicní toxicita kyslíku), retrolentální fibroplazie u nedonošených dětí."
        ],
        "diagnostics": [
            "Měření parciálních tlaků plynů v arteriální krvi (Astrup).",
            "Pulzní oxymetrie (saturace hemoglobinu kyslíkem SpO2).",
            "Laboratorní stanovení laktátu v séru (ukazatel buněčné hypoxie)."
        ],
        "numbers": [
            ["Normální parciální tlak kyslíku v arteriální krvi (paO2)", "11.0 - 13.0 kPa (80-100 mmHg)"],
            ["Definice hypoxémie (pokles paO2)", "< 8.0 kPa (60 mmHg)"],
            ["Bezpečný limit FiO2 (frakce kyslíku) k prevenci toxicity", "< 50 %"]
        ]
    },
    {
        "id": "gen-26",
        "title": "Edém - rozdělení, etiopatogeneze, klinická manifestace, následky.",
        "definition": "Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách.",
        "etiology": [
            "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.",
            "Snížený onkotický tlak plazmy: hypoalbuminémie u nefrotického syndromu, cirhózy jater nebo malnutrice.",
            "Zvýšená propustnost kapilár (zánět, popáleniny), obstrukce lymfatických cév (lymfedém)."
        ],
        "pathogenesis": [
            "Starlingova rovnice popisuje filtraci tekutiny závislou na gradientech hydrostatického a onkotického tlaku.",
            "Pokud filtrace převýší lymfatickou drenáž, hromadí se tekutina v interstitiu.",
            "Retence sodíku a vody (aktivace RAAS při poklesu efektivního cirkulujícího objemu) dále udržuje a zhoršuje edémy."
        ],
        "manifestations": [
            "Periferní otoky: tíhové závislé otoky (kolem kotníků u chodících, nad sakrem u ležících), těstovité, po stlačení zůstává důlek (pitting).",
            "Plicní edém: prosakování tekutiny do alveolů způsobuje těžkou dušnost, vykašlávání růžového sputa a cyanózu.",
            "Edém mozku: nitrolební hypertenze, bolesti hlavy, zvracení, bradykardie, herniace mozkového kmene."
        ],
        "diagnostics": [
            "Fyzikální vyšetření (inspekce, palpace, měření obvodů končetin).",
            "Stanovení celkové bílkoviny a albuminu v séru.",
            "Zobrazovací metody: RTG hrudníku u edému plic, CT/MRI u edému mozku."
        ],
        "numbers": [
            ["Fyziologický onkotický tlak plazmatických bílkovin", "25 - 28 mmHg"],
            ["Hydrostatický tlak na arteriálním konci kapiláry", "30 - 35 mmHg"],
            ["Normální koncentrace albuminu v séru", "35 - 50 g/l"]
        ]
    },
    {
        "id": "gen-27",
        "title": "Poruchy růstu. Poruchy puberty. Stárnutí a smrt organismu.",
        "definition": "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
        "etiology": [
            "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza.",
            "Poruchy puberty: předčasná puberta (nádory, idiopatická), opožděná puberta (Turnerův/Klinefelterův sy, hypogonadotropní hypogonadismus).",
            "Stárnutí: zkracování telomer, akumulace somatických mutací, poškození buněk kyslíkovými radikály."
        ],
        "pathogenesis": [
            "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
            "Předčasná puberta je aktivována předčasným uvolněním GnRH. Opožděná puberta je způsobena poruchou osy hypothalamus-hypofýza-gonády.",
            "Stárnutí: Hayflickův limit omezuje dělení buněk; dochází k buněčné senescenci a ztrátě kmenových buněk."
        ],
        "manifestations": [
            "Nanismus: malý vzrůst, harmonické proporce. Akromegalie: zvětšování aker (ruce, nohy, čelist), vnitřních orgánů.",
            "Předčasná puberta: sekundární pohlavní znaky před 8. rokem u dívek. Opožděná: chybění sekundárních znaků po 13. roce u dívek.",
            "Smrt organismu: klinická smrt (zástava dechu a oběhu, zvratná) vs. smrt mozku (ireverzibilní vymizení všech funkcí mozku)."
        ],
        "diagnostics": [
            "Sledování růstových a percentilových grafů, hodnocení kostního věku (RTG zápěstí).",
            "Stanovení hladin hormonů (GH, IGF-1, LH, FSH, estradiol, testosteron) v séru.",
            "EEG a angiografie mozkových cév pro potvrzení smrti mozku."
        ],
        "numbers": [
            ["Věk pro definici předčasné puberty u dívek", "< 8. rok"],
            ["Věk pro definici opožděné puberty u dívek", "> 13. rok"],
            ["Hayflickův limit lidských fibroblastů (počet dělení)", "40 - 60 dělení"]
        ]
    },
    {
        "id": "gen-28",
        "title": "Respirační acidóza a alkalóza - etiopatogeneze, následky.",
        "definition": "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci.",
        "etiology": [
            "RAC: obstrukce dýchacích cest (CHOPN, těžké astma), útlum dechového centra (opiáty, benzodiazepiny), ochrnutí dechových svalů.",
            "RAL: psychogenní hyperventilace (úzkost, hysterie), stimulace dechového centra hypoxií (vysoká nadmořská výška), sepse, salicyláty."
        ],
        "pathogenesis": [
            "RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.",
            "Ledviny kompenzují RAC zvýšeným vylučováním H+ a retencí HCO3- (tento proces však trvá 3-5 dní).",
            "RAL: alveolární hyperventilace snižuje pCO2 v krvi (hypokapnie). Pokles CO2 posouvá rovnováhu ABR směrem k deficitu H+ a zvyšuje pH."
        ],
        "manifestations": [
            "RAC: somnolence, bolesti hlavy, poruchy soustředění (CO2 působí jako anestetikum), periferní vazodilatace, hyperkalémie.",
            "RAL: zvýšená nervosvalová dráždivost (parestézie, karpopedální spasmy) v důsledku poklesu ionizovaného vápníku (vazba na albumin při alkalóze).",
            "Závratě a mžitky před očima u RAL způsobené vazokonstrikcí mozkových cév vyvolanou hypokapnií."
        ],
        "diagnostics": [
            "Vyšetření acidobazické rovnováhy (Astrup): pH, pCO2 a HCO3-.",
            "Sledování parametrů ventilace a kapnometrie (měření CO2 ve vydechovaném vzduchu).",
            "Stanovení hladiny volného (ionizovaného) vápníku v séru u alkalózy."
        ],
        "numbers": [
            ["Respirační acidóza (kritéria)", "pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)"],
            ["Respirační alkalóza (kritéria)", "pH > 7.45, pCO2 < 4.6 kPa (35 mmHg)"],
            ["Fyziologické pCO2", "4.6 - 6.0 kPa (35-45 mmHg)"]
        ]
    },
    {
        "id": "gen-29",
        "title": "Metabolická acidóza a alkalóza - etiopatogeneze, následky.",
        "definition": "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
        "etiology": [
            "MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol).",
            "MAC s normálním Anion Gap (ztráta HCO3-): těžké průjmy, renální tubulární acidóza.",
            "MAL: ztráta H+ (zvracení, odsávání žaludečního obsahu), abúzus diuretik (kličková diuretika), hyperaldosteronismus."
        ],
        "pathogenesis": [
            "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
            "Respirační kompenzace MAC: pokles pH stimuluje chemoreceptory, což vede k hyperventilaci (vydýchání CO2, pokles pCO2).",
            "MAL: ztráta H+ nebo retence HCO3- zvyšuje pH. Respirační kompenzace je omezená hypoventilací (hrozí hypoxie)."
        ],
        "manifestations": [
            "MAC: Kussmaulovo dýchání (hluboké, zrychlené), pokles kontraktility myokardu, hypotenze, somnolence až kóma, hyperkalémie.",
            "MAL: svalová slabost, parestezie, křeče (tetanie z poklesu ionizovaného Ca2+), arytmie z hypokalémie.",
            "Hypokalémie doprovází MAL, protože buňky vyměňují vnitřní H+ za vnější K+ ve snaze snížit pH plazmy."
        ],
        "diagnostics": [
            "Vyšetření krevních plynů (Astrup) se zaměřením na pH, HCO3- a Base Excess.",
            "Výpočet Aniontové mezery (Anion Gap = Na - Cl - HCO3) k rozlišení příčin MAC.",
            "Měření koncentrace elektrolytů v séru a moči (stanovení chloridů v moči pomáhá odlišit příčiny MAL)."
        ],
        "numbers": [
            ["Metabolická acidóza (kritéria)", "pH < 7.35, HCO3- < 22 mmol/l"],
            ["Metabolická alkalóza (kritéria)", "pH > 7.45, HCO3- > 26 mmol/l"],
            ["Normální rozmezí Aniontové mezery (Anion Gap)", "8 - 12 mmol/l"],
            ["Winterův vzorec pro očekávané pCO2 u MAC", "pCO2 (mmHg) = 1.5 * HCO3- + 8 (+/- 2)"]
        ]
    },
    {
        "id": "gen-30",
        "title": "Bolest - etiopatogeneze, klasifikace, poruchy vnímání bolesti, principy farmakologického ovlivnění.",
        "definition": "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.",
        "etiology": [
            "Nociceptivní bolest: mechanické, termické nebo chemické dráždění receptorů (nociceptorů) ve tkáních.",
            "Neuropatická bolest: přímé poškození nebo onemocnění somatosenzorického nervového systému (např. diabetická neuropatie, ischias).",
            "Psychogenní bolest bez zjevného organického podkladu, související s psychickými poruchami."
        ],
        "pathogenesis": [
            "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.",
            "Transmise: vedení vzruchu A-delta vlákny (rychlé, myelinizované, ostrá bolest) a C vlákny (pomalé, nemyelinizované, tupá bolest) do zadních rohů míšních a spinotalamickou dráhou do thalamu a kůry.",
            "Modulace: ovlivnění přenosu bolesti v míše sestupnými inhibičními dráhami (využívají endorfiny, serotonin, noradrenalin)."
        ],
        "manifestations": [
            "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
            "Chronická bolest (trvající > 3-6 měsíců): deprese, poruchy spánku, sociální izolace, chybí sympatikotonie.",
            "Alodynie (bolestivý vjem na normálně nebolestivý podnět - např. dotek) a hyperalgézie (nadměrná bolestivost)."
        ],
        "diagnostics": [
            "Hodnocení intenzity bolesti pomocí vizuální analogové škály (VAS 0-10) nebo numerické stupnice.",
            "Neurologické vyšetření k rozlišení nociceptivní a neuropatické bolesti (testování citlivosti).",
            "Lokalizace a analýza charakteru bolesti (ostrá, tupá, bodavá, vyzařující)."
        ],
        "numbers": [
            ["Teplotní práh pro aktivaci tepelných nociceptorů", "> 43 °C"],
            ["Rychlost vedení vzruchu A-delta vlákny (ostrá bolest)", "5 - 30 m/s"],
            ["Rychlost vedení vzruchu C vlákny (pomalá bolest)", "0.5 - 2 m/s"],
            ["Škála VAS (závažná nesnesitelná bolest)", ">= 7 - 10"]
        ]
    },
    {
        "id": "gen-31",
        "title": "Dušnost - rozdělení, etiopatogeneze, následky.",
        "definition": "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.",
        "etiology": [
            "Respirační příčiny: bronchiální obstrukce (astma, CHOPN), restrikce (plicní fibróza, pneumotorax, zápal plic).",
            "Kardiovaskulární příčiny: levostranné srdeční selhání (plicní městnání), plicní embolie, chlopenní vady.",
            "Jiné: těžká anémie (nedostatek nosičů O2), metabolická acidóza (stimulace H+), psychogenní (úzkost)."
        ],
        "pathogenesis": [
            "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
            "Mechanoreceptory v plicích a dýchacích svalech (stretch receptory, J-receptory) signalizují nadměrné úsilí nebo napětí.",
            "Kortex vnímá nepoměr mezi motorickým povelem k dýchání a mechanickou odpovědí hrudníku."
        ],
        "manifestations": [
            "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
            "Ortopnoe: dušnost vleže, která nutí pacienta se posadit (typické pro levostranné srdeční selhání).",
            "Následky: vyčerpání dechových svalů, rozvoj hypoxémie a respirační acidózy, úzkost až panika."
        ],
        "diagnostics": [
            "Kvantifikace dušnosti pomocí škály NYHA (u kardiaků) nebo mMRC (u plicních nemocí).",
            "Vyšetření krevních plynů a pulzní oxymetrie.",
            "Spirometrie k průkazu ventilační poruchy a RTG hrudníku."
        ],
        "numbers": [
            ["Fyziologická dechová frekvence u dospělých", "12 - 18 dechů/min"],
            ["Definice tachypnoe (zrychlené dýchání)", "> 20 dechů/min"],
            ["NYHA třída IV (dušnost)", "přítomna při minimální aktivitě nebo v klidu"]
        ]
    },
    {
        "id": "gen-32",
        "title": "Septický a anafylaktický šok - etiopatogeneze a následky.",
        "definition": "Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií.",
        "etiology": [
            "Septický šok: těžká infekce (bakteriální, virová, plísňová) s dysregulovanou odpovědí hostitele a perzistentní hypotenzí.",
            "Anafylaktický šok: těžká IgE-mediovaná alergická reakce typu I na cizorodou látku (včelí jed, léky, ořechy).",
            "Masivní degranulace žírných buněk a basofilů."
        ],
        "pathogenesis": [
            "Septický: lipopolysacharid nebo jiné antigeny stimulují imunocyty k produkci cytokinové bouře (TNF, IL-1). Dochází k masivní syntéze **oxidu dusnatého (NO)**, což vyvolá generalizovanou vazodilataci.",
            "Anafylaktický: systémové uvolnění **histaminu** a leukotrienů způsobuje vazodilataci arterií, konstrikci venul a prudký vzestup kapilární propustnosti.",
            "Únik tekutiny do interstitia snižuje efektivní cirkulující objem krve a poškozuje tkáňovou perfuzi."
        ],
        "manifestations": [
            "Septický: hypotenze refrakterní na volumoterapii (vyžaduje noradrenalin), laktát > 2 mmol/l, v časné fázi teplá, růžová kůže.",
            "Anafylaktický: prudký pokles TK, tachykardie, bronchospasmus (dušnost, hvízdot), edém hrtanu (stridor), kopřivka a svědění.",
            "Následky: tkáňová hypoxie, těžká acidóza, DIC a multiorgánové selhání (MODS)."
        ],
        "diagnostics": [
            "Laboratorní markery sepse (CRP, prokalcitonin, hemokultury) a stanovení sérového laktátu.",
            "Sledování hemodynamických parametrů (pokles systémové cévní rezistence - SVR).",
            "Měření hladiny tryptázy v séru (potvrzení degranulace mastocytů u anafylaxe)."
        ],
        "numbers": [
            ["Kritérium septického šoku: laktát v séru", "> 2.0 mmol/l (i přes volumoterapii)"],
            ["Target MAP při léčbě vazopresory u septického šoku", ">= 65 mmHg"],
            ["Časový rozvoj anafylaktického šoku", "sekundy až desítky minut od kontaktu"]
        ]
    },
    {
        "id": "gen-33",
        "title": "Obstipace a průjem - etiopatogeneze a následky. Syndrom dráždivého tračníku, pseudomembranózní kolitida.",
        "definition": "Obstipace (zácpa) je obtížné a nepravidelné vyprazdňování tuhé stolice. Průjem (diarrhea) je frekventovaný odchod neformované stolice se zvýšeným obsahem vody.",
        "etiology": [
            "Obstipace: nedostatek vlákniny a tekutin, snížená fyzická aktivita, hypokalémie, hypotyreóza, mechanická překážka (nádor).",
            "Průjem: infekce (salmonelóza, rotaviry), malabsorpce (celiakie), zánětlivé střevní nemoci (IBD).",
            "Pseudomembranózní kolitida: přemnožení *Clostridioides difficile* po léčbě širokospektrými antibiotiky.",
            "Syndrom dráždivého tračníku (IBS): funkční porucha motility a viscerální hypersenzitivity."
        ],
        "pathogenesis": [
            "Obstipace: zpomalení střevní pasáže vede k nadměrné reabsorpci vody v tlustém střevě, stolice se stává suchou a tuhou.",
            "Osmotický průjem: nevstřebané osmoticky aktivní látky (např. laktóza při deficitu laktázy) stahují vodu do lumen střeva.",
            "Sekretorický průjem: toxiny (např. cholera) stimulují enterocyty k aktivní sekreci Cl- a vody do střeva (velké objemy).",
            "Pseudomembranózní kolitida: clostridiové toxiny A a B poškozují enterocyty, vzniká fibrinový exsudát s tvorbou pablán."
        ],
        "manifestations": [
            "Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů.",
            "Průjem: dehydratace, elektrolytový rozvrat (ztráty K+ a HCO3- vedou k hypokalémii a metabolické acidóze).",
            "Pseudomembranózní kolitida: profúzní, páchnoucí průjmy, horečky, leukocytóza, riziko toxického megakolon."
        ],
        "diagnostics": [
            "Mikrobiologické vyšetření stolice (kultivace, průkaz toxinů Clostridioides difficile).",
            "Stanovení osmotického gapu stolice (rozlišení osmotického a sekretorického průjmu).",
            "Kolonoskopie (odhalení pablán u clostridiové kolitidy, organických změn)."
        ],
        "numbers": [
            ["Normální hmotnost stolice u dospělého", "100 - 200 g/den"],
            ["Definice průjmu: frekvence a konzistence", ">= 3 neformované stolice za den"],
            ["Osmotická mezera stolice u osmotického průjmu", "> 125 mOsm/kg"]
        ]
    },
    {
        "id": "gen-34",
        "title": "Poruchy metabolismu železa (Fe2+/Fe3+) - etiopatogeneze a následky.",
        "definition": "Poruchy metabolismu železa zahrnují jeho nedostatek (sideropenie) vedoucí k anémii, nebo nadbytek (hemochromatóza) způsobující toxické poškození tkání.",
        "etiology": [
            "Deficit železa (sideropenie): chronické ztráty krve (silná menstruace, GIT krvácení), nedostatečný příjem, poruchy vstřebávání (celiakie).",
            "Nadbytek železa (hemochromatóza): primární dědičná porucha (mutace genu HFE s chyběním hepcidinu), opakované krevní transfúze."
        ],
        "pathogenesis": [
            "Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie.",
            "Regulace: **hepcidin** (produkovaný játry) blokuje ferroportin a tlumí vstřebávání železa ze střeva při zánětu (anémie chronických chorob).",
            "Nadbytek: nadbytek železa se ukládá ve tkáních jako hemosiderin, stimuluje tvorbu hydroxyl radikálu (Fentonova reakce) a vyvolá fibrózu."
        ],
        "manifestations": [
            "Sideropenie: únava, bledost, vypadávání vlasů, lámavost nehtů (koilonychie), pálení jazyka (glositida), mikrocytární anémie.",
            "Hemochromatóza: bronzový diabetes (pigmentace kůže + poškození slinivky), jaterní cirhóza, kardiomyopatie (selhání srdce)."
        ],
        "diagnostics": [
            "Stanovení sérového železa, vazebné kapacity (TIBC) a saturace transferrinu.",
            "Měření sérového **ferritinu** (nejlepší ukazatel zásob železa v těle).",
            "Krevní obraz (mikrocytární hypochromní anémie: nízké MCV a MCH, vysoké RDW)."
        ],
        "numbers": [
            ["Celkové zásoby železa v lidském těle", "3 - 4 gramy"],
            ["Sérový ferritin svědčící pro absolutní sideropenii", "< 12 - 15 ug/l"],
            ["Normální saturace transferrinu železem", "20 - 45 %"]
        ]
    },
    {
        "id": "gen-35",
        "title": "Ikterus- etiopatogeneze.",
        "definition": "Ikterus (žloutenka) je žluté zbarvení tkání (sklér, kůže) způsobené zvýšenou koncentrací bilirubinu v krvi (hyperbilirubinémií). Dělí se na prehepatální, hepatocelulární a posthepatální.",
        "etiology": [
            "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
            "Hepatocelulární (jaterní): poškození jaterních buněk (virové hepatitidy, toxické poškození alkoholem, paracetamolem, cirhóza).",
            "Posthepatální (obstrukční): překážka odtoku žluči (cholecystolitiáza, karcinom hlavy pankreatu)."
        ],
        "pathogenesis": [
            "Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí.",
            "Hepatocelulární: poškozena konjugace i sekrece. Stoupá konjugovaný i nekonjugovaný bilirubin, v moči nacházíme bilirubin (tmavá moč).",
            "Posthepatální: žluč nemůže odtékat do střeva. Konjugovaný bilirubin se vrací do krve, je filtrován ledvinami (tmavá moč), stolice je acholická (světlá/šedá) kvůli chybění sterkobilinu."
        ],
        "manifestations": [
            "Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.",
            "Tmavá moč (přítomnost konjugovaného bilirubinu) a světlá, acholická stolice u obstrukčního ikteru.",
            "Prehepatální: normální barva moči (acholurie), tmavá stolice (více sterkobilinogenu), splenomegalie."
        ],
        "diagnostics": [
            "Stanovení celkového, konjugovaného (přímého) a nekonjugovaného (nepřímého) bilirubinu v séru.",
            "Průkaz bilirubinu a urobilinogenu v moči chemickým proužkem.",
            "Ultrasonografie břicha k posouzení šíře žlučovodů (dilatace ukazuje na posthepatální překážku)."
        ],
        "numbers": [
            ["Fyziologický celkový bilirubin v séru", "3 - 20 umol/l"],
            ["Subikterus (zbarvení pouze sklér)", "> 30 - 40 umol/l"],
            ["Ikterus (zřetelné zbarvení kůže)", "> 50 umol/l"]
        ]
    },
    {
        "id": "gen-36",
        "title": "Poruchy bilance kalcia (Ca2+) a fosfátů - etiopatogeneze, projevy, následky.",
        "definition": "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
        "etiology": [
            "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění).",
            "Hyperkalcémie: primární hyperparatyreóza (adenom), kostní metastázy (osteolýza), intoxikace vitaminem D.",
            "Hyperfosfatémie: selhání ledvin; Hypofosfatémie: malabsorpce, chronický alkoholismus."
        ],
        "pathogenesis": [
            "Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).",
            "Hypokalcémie zvyšuje propustnost membrán pro sodík, což usnadňuje vznik akčních potenciálů a vyvolá nervosvalovou dráždivost.",
            "Hyperkalcémie snižuje propustnost pro sodík, stabilizuje membrány a tlumí dráždivost tkání."
        ],
        "manifestations": [
            "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu.",
            "Hyperkalcémie: svalová slabost, zácpa, nevolnost, peptické vředy (vápník stimuluje gastrin), nefrolitiáza, poruchy rytmu.",
            "Následky hyperfosfatémie: kalcifikace měkkých tkání a cév, zhoršení renální osteodystrofie."
        ],
        "diagnostics": [
            "Měření celkového a volného (ionizovaného) kalcia a fosfátů v séru.",
            "Stanovení parathormonu (PTH) a metabolitů vitaminu D v séru.",
            "Elektrokardiografie (EKG) k detekci prodloužení (hypokalcémie) nebo zkrácení (hyperkalcémie) intervalu QT."
        ],
        "numbers": [
            ["Referenční rozmezí celkového kalcia v séru", "2.2 - 2.6 mmol/l"],
            ["Referenční rozmezí ionizovaného kalcia (aktivní frakce)", "1.1 - 1.3 mmol/l"],
            ["Normální hladina fosfátů v séru dospělých", "0.8 - 1.5 mmol/l"]
        ]
    },
    {
        "id": "gen-37",
        "title": "Sepse, syndrom multiorgánové dysfunkce (MODS) - etiopatogeneze, projevy a následky.",
        "definition": "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů.",
        "etiology": [
            "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).",
            "Gramnegativní (endotoxin) i grampozitivní (peptidoglykany, superantigeny) bakterie, viry, plísně.",
            "Neadekvátní nebo opožděná léčba výchozí lokální infekce."
        ],
        "pathogenesis": [
            "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6).",
            "Generalizovaná endoteliální dysfunkce vyvolá mikrovaskulární únik tekutin, aktivaci koagulace (mikrotrombózu) a masivní vasodilataci.",
            "Mitochondriální dysfunkce (tzv. buněčná hibernace): buňky neumí využít kyslík ani při jeho dostatečné nabídce, což vede k MODS."
        ],
        "manifestations": [
            "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
            "MODS: selhání ledvin (AKI s oligurií), plic (ARDS s těžkou hypoxémií), jater (ikterus, koagulopatie), oběhové selhání (septický šok).",
            "Změna mentálního stavu (sepsí asociovaná encefalopatie - zmatenost, delérium)."
        ],
        "diagnostics": [
            "Použití skórovacích systémů **SOFA** (hodnotí respiraci, koagulaci, játra, oběh, CNS a ledviny) a rychlého screeningového **qSOFA**.",
            "Mikrobiologický průkaz patogena (opakované odběry hemokultur) a stanovení zánětlivých markerů (CRP, prokalcitonin).",
            "Měření laktátu k detekci buněčné hypoperfuze."
        ],
        "numbers": [
            ["qSOFA kritéria (vzestup o >= 2 body značí riziko)", "DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg"],
            ["Definice sepse: změna celkového skóre SOFA", "vzestup o >= 2 body v důsledku infekce"],
            ["Letalita u rozvinutého syndromu MODS (>= 4 orgány)", "> 80 - 100 %"]
        ]
    },
    {
        "id": "gen-38",
        "title": "Krvácení - etiopatogeneze, rozdělení, následky.",
        "definition": "Krvácení (hemoragie) je únik krve z cévního řečiště mimo cévní prostor. Může být vnitřní, vnější, traumatické či netraumatické.",
        "etiology": [
            "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
            "Patologické procesy narušující stěnu cévy (ruptura aneuryzmatu, arrosivní krvácení u peptického vředu či nádoru).",
            "Poruchy hemokoagulace (hemofilie, trombocytopenie, předávkování antikoagulancii)."
        ],
        "pathogenesis": [
            "Ztráta krve snižuje cirkulující objem, klesá venózní návrat, tepový objem a srdeční výdej.",
            "Kompenzace: aktivace sympatiku vyvolá vazokonstrikci a tachykardii, přesun tekutiny z intersticia do kapilár (hemodiluce).",
            "Při ztrátě > 30 % objemu selhávají kompenzační mechanismy a rozvíjí se hemoragický šok."
        ],
        "manifestations": [
            "Bledost, chladný pot, slabost, závratě, sucho v ústech.",
            "Tachykardie, hypotenze, oligurie, zrychlené mělké dýchání.",
            "Následky: anémie u chronických ztrát, hypovolemický šok a lokální útlak tkání u vnitřního krvácení (např. srdeční tamponáda, intrakraniální krvácení)."
        ],
        "diagnostics": [
            "Klinické vyšetření a sledování vitálních funkcí (krevní tlak, tepová frekvence).",
            "Laboratorní krevní obraz (s odstupem hodin pokles hemoglobinu a hematokritu kvůli hemodiluci).",
            "Zobrazovací metody (ultrazvuk FAST u traumat, CT) k lokalizaci skrytého vnitřního krvácení."
        ],
        "numbers": [
            ["Celkový objem krve u dospělého člověka", "cca 7 - 8 % tělesné hmotnosti (cca 5 litrů)"],
            ["Akutní ztráta krve vyvolávající těžký šok", "> 30 - 40 % (cca 1.5 - 2 litry)"],
            ["Doba potřebná k plné kompenzaci objemu přesunem tekutin", "12 - 24 hodin"]
        ]
    },
    {
        "id": "gen-39",
        "title": "Poruchy bilance natria (Na+) a chloridů (Cl-) - etiopatogeneze, následky, regulace. Osmotický a onkotický tlak.",
        "definition": "Sodík je hlavní extracelulární kation určující osmolaritu a objem extracelulární tekutiny. Chloridy jsou hlavní anioty těsně provázející sodík. Osmotický tlak závisí na koncentraci solutů, onkotický na proteinech plazmy.",
        "etiology": [
            "Hyponatrémie: nadměrný příjem vody, SIADH (retence vody), ztráty sodíku ledvinami (diuretika) nebo GIT (zvracení, průjmy).",
            "Hypernatrémie: nedostatečný příjem vody, ztráty čisté vody (diabetes insipidus, profúzní pocení), nadměrný přívod NaCl.",
            "Poruchy chloridů kopírují sodík (vyjma zvracení -> hypochloremická alkalóza)."
        ],
        "pathogenesis": [
            "Osmolarita ECF je přísně regulována **ADH** (voda) a **aldosteronem** (sodík) přes osmoreceptory hypothalamu.",
            "Hyponatrémie (pokles osmolarity ECF) vede k přesunu vody do buněk. Hrozí edém buněk, zejména neuronů v mozku.",
            "Hypernatrémie (vzestup osmolarity ECF) vytahuje vodu z buněk do ECF, což vyvolá intracelulární dehydrataci a scvrkávání neuronů."
        ],
        "manifestations": [
            "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku.",
            "Hypernatrémie: extrémní žízeň, suché sliznice, neklid, dezorientace, křeče a intracerebrální krvácení z tahu na cévy při smrštění mozku.",
            "Pokles onkotického tlaku (hypoalbuminémie) vede k úniku tekutiny do intersticia a vzniku generalizovaných edémů."
        ],
        "diagnostics": [
            "Měření koncentrace sodíku a chloridů v séru.",
            "Stanovení plazmatické a močové osmolarity.",
            "Měření hladiny celkové bílkoviny a albuminu v séru (posouzení onkotického tlaku)."
        ],
        "numbers": [
            ["Referenční rozmezí sodíku v séru", "135 - 145 mmol/l"],
            ["Referenční rozmezí chloridů v séru", "97 - 107 mmol/l"],
            ["Extracelulární osmolarita", "275 - 295 mOsm/kg"],
            ["Onkotický tlak plazmy", "25 - 28 mmHg (cca 3.3 - 3.7 kPa)"]
        ]
    },
    {
        "id": "gen-40",
        "title": "Lokální zánětová odpověď - princip a význam, složky zánětové odpovědi.",
        "definition": "Lokální zánět je fyziologická obranná reakce organismu na poškození tkáně (infekce, trauma, chemické vlivy) směřující k eliminaci noxy a reparaci tkáně.",
        "etiology": [
            "Biologické noxy (bakterie, viry, paraziti).",
            "Fyzikální a chemické vlivy (popálení, poleptání, cizí těleso, mechanické trauma).",
            "Tkáňová nekróza jakékoliv etiologie (např. infarkt myokardu)."
        ],
        "pathogenesis": [
            "Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor).",
            "Zvýšená kapilární propustnost: únik tekutiny a proteinů do interstitia tvoří zánětlivý exsudát (tumor).",
            "Buněčná infiltrace: exprese selektinů a integrinů na endotelu umožňuje marginaci, diapedézu a chemotaxi neutrofilů a makrofágů do místa poškození.",
            "Uvolnění mediátorů zánětu (prostaglandiny, bradykinin) dráždí nociceptory (dolor) a omezuje funkci (functio laesa)."
        ],
        "manifestations": [
            "Pět klasických lokálních projevů (Celsus, Galén): **Rubor** (zarudnutí), **Calor** (horkost), **Tumor** (otok), **Dolor** (bolest), **Functio laesa** (porucha funkce).",
            "Tvorba exsudátu (serózní, hnisavý, fibrózní) v místě poškození.",
            "Regionální lymfadenitida (zvětšení a bolestivost spádových mízních uzlin)."
        ],
        "diagnostics": [
            "Klinické vyšetření ložiska pohledem a pohmatem.",
            "Histologické vyšetření prokazující infiltraci zánětlivými buňkami (neutrofily u akutního, lymfocyty u chronického zánětu).",
            "Stanovení lokální teploty a perfuze ložiska."
        ],
        "numbers": [
            ["Doba nástupu akutní cévní fáze lokálního zánětu", "sekundy až minuty"],
            ["Bílkovina v zánětlivém exsudátu (odlišuje ho od transsudátu)", "> 30 g/l"],
            ["Maximální infiltrace neutrofily v ložisku", "během 24 - 48 hodin"]
        ]
    },
    {
        "id": "gen-41",
        "title": "Poruchy vědomí - etiopatogeneze, základní rozdělení podle kvantity a kvality. Synkopa.",
        "definition": "Vědomí je stav bdělosti (vigility) a uvědomování si sebe sama a okolí (lucidity). Poruchy se dělí na kvantitativní (ovlivňují bdělost) a kvalitativní (ovlivňují obsah). Synkopa je krátkodobá, spontánně odeznívající ztráta vědomí z hypoperfuze mozku.",
        "etiology": [
            "Kvantitativní poruchy: léze retikulární formace (ARAS) nebo obou hemisfér (úrazy hlavy, CMP, tumory), metabolické příčiny (hypoglykémie, uremie, jaterní kóma, intoxikace).",
            "Kvalitativní poruchy: delérium, obnubilace (mrákotný stav), zmatenost (demence, psychózy).",
            "Synkopa: vazovagální (reflexní), kardiální (arytmie, chlopenní vady), ortostatická (pokles TK při postavení)."
        ],
        "pathogenesis": [
            "Bdělost je udržována ascendentním retikulárním aktivačním systémem (ARAS) v mozkovém kmeni, který stimuluje kůru.",
            "Kvantitativní porucha vzniká při destrukci kmene nebo při difúzním metabolickém útlumu kůry.",
            "Synkopa: náhlý pokles průtoku krve mozkem pod kritickou mez na dobu 5-10 sekund vede k okamžité ztrátě posturálního tonu a vědomí."
        ],
        "manifestations": [
            "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).",
            "Kvalitativní: dezorientace časem, místem, neklid, halucinace (delérium).",
            "Synkopa: náhlý pád, bledost, po pádu do horizontální polohy dochází k rychlému spontánnímu zotavení vědomí."
        ],
        "diagnostics": [
            "Hodnocení hloubky poruchy vědomí pomocí **Glasgow Coma Scale (GCS)**.",
            "Biochemický screening (okamžité stanovení glykémie k vyloučení hypoglykémie nalačno).",
            "Nativní CT mozku k vyloučení intrakraniálního krvácení nebo ischemie, EKG a Holter u synkop."
        ],
        "numbers": [
            ["Glasgow Coma Scale - plné vědomí", "15 bodů"],
            ["Glasgow Coma Scale - kóma (těžká porucha)", "<= 8 bodů (minimum je 3 body)"],
            ["Trvání typické vazovagální synkopy", "< 1 - 2 minuty"]
        ]
    },
    {
        "id": "gen-42",
        "title": "Ischemie - etiopatogeneze ischemie, změny na orgánové úrovni: myokard, centrální nervový systém, ledviny, GIT, končetiny.",
        "definition": "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.",
        "etiology": [
            "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt).",
            "Embolie do větví arteriálního řečiště.",
            "Spasmus tepny (např. vazospastická angina pectoris) nebo vnější komprese (např. zaškrcení střeva u kýly)."
        ],
        "pathogenesis": [
            "Ischemie postihuje tkáň hůře než prostá hypoxie, protože chybí odplavování toxických metabolitů (laktát, H+).",
            "Rychlý pokles ATP vede k selhání membránových pump, hromadění vápníku v cytosolu a aktivaci autolytických enzymů.",
            "Rychlost rozvoje nekrózy závisí na ischemické toleranci tkáně (mozek 4-5 min, myokard 20-30 min, ledviny a kosterní sval hodiny)."
        ],
        "manifestations": [
            "Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).",
            "CNS: ložiskový neurologický deficit (paréza, porucha řeči) u ischemické CMP.",
            "Ledviny: akutní tubulární nekróza s oligurií; GIT: ischemická kolitida nebo gangréna střeva (akutní břicho).",
            "Končetiny: klaudikační bolesti, u akutního uzávěru 5P (Pain, Pallor, Pulselessness, Paresthesia, Paralysis)."
        ],
        "diagnostics": [
            "Angiografie cévního řečiště (koronarografie, angiografie končetin, CT angiografie).",
            "Ultrasonografie s barevným dopplerovským zobrazením průtoku krve.",
            "Stanovení tkáňově specifických markerů nekrózy v séru (troponiny, kreatinkináza, laktát)."
        ],
        "numbers": [
            ["Ischemická tolerance neuronů kůry mozku", "4 - 5 minut"],
            ["Ischemická tolerance kardiomyocytů (reverzibilní fáze)", "< 20 - 30 minut"],
            ["Ischemická tolerance kosterního svalstva", "2 - 6 hodin"]
        ]
    },
    {
        "id": "gen-43",
        "title": "Nauzea, zvracení - etiopatogeneze, následky.",
        "definition": "Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.",
        "etiology": [
            "Podráždění žaludeční sliznice (toxiny, alkohol, gastritida).",
            "Stimulace chemoreceptorové zóny (CTZ) na spodině 4. komory (léky, chemoterapie, uremické toxiny).",
            "Zvýšený intrakraniální tlak (zvracení obloukem bez předchozí nauzey) a vestibulární dráždění (kinetóza)."
        ],
        "pathogenesis": [
            "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
            "Reflexní děj: hluboký nádech, uzávěr glottis (prevence aspirace), relaxace dolního jícnového svěrače a kontrakce břišního lisu a bránice.",
            "Při zvracení odchází kyselá žaludeční šťáva bohatá na HCl, vodu a draslík."
        ],
        "manifestations": [
            "Nauzea je doprovázena příznaky aktivace parasympatiku (slinění, bledost, pocení, bradykardie).",
            "Dehydratace a metabolický rozvrat při opakovaném zvracení.",
            "**Hypokalemická, hypochloremická metabolická alkalóza** (ztráta H+ a Cl- vyvolá alkalózu, ztráta K+ a přesun do buněk vyvolá hypokalémii)."
        ],
        "diagnostics": [
            "Vyšetření acidobazické rovnováhy (průkaz metabolické alkalózy a poklesu chloridů).",
            "Stanovení hladiny draslíku a sodíku v séru.",
            "Endoskopické vyšetření horní části GIT (gastroskopie) a neurologické vyšetření (vyloučení nitrolební hypertenze)."
        ],
        "numbers": [
            ["Normální pH žaludeční šťávy", "1.5 - 3.5"],
            ["Objem žaludeční šťávy vyprodukovaný za den", "1.5 - 2.5 litru"],
            ["Sérové chloridy u těžkého zvracení (hypochloremie)", "< 90 mmol/l"]
        ]
    },
    {
        "id": "gen-44",
        "title": "Poškození vlivem chemických vlivů - intoxikace (paracetamol, metanol, oxid uhelnatý), alkohol, kouření.",
        "definition": "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
        "etiology": [
            "Akutní otravy: předávkování paracetamolem, požití metanolu (zaměněného za etanol), vdechnutí oxidu uhelnatého (CO) při požáru.",
            "Chronické toxické vlivy: chronický abúzus alkoholu (etanolu) a kouření tabákových výrobků."
        ],
        "pathogenesis": [
            "Paracetamol: při předávkování dochází k vyčerpání glutathionu v játrech, hromadí se toxický metabolit NAPQI, který vyvolá masivní nekrózu hepatocytů.",
            "Metanol: metabolizuje se alkoholdehydrogenázou na vysoce toxický formaldehyd a kyselinu mravenčí, což způsobí těžkou metabolickou acidózu a destrukci n. opticus (slepota).",
            "Oxid uhelnatý (CO): váže se na hemoglobin za tvorby karboxyhemoglobinu (COHb). Afinita CO je 200-250x vyšší než u kyslíku, což blokuje transport O2 (anemická hypoxie) a buněčné dýchání.",
            "Kouření: poškozuje endotel, urychluje aterosklerózu, uvolňuje karcinogeny a tlumí mukociliární aparát plic."
        ],
        "manifestations": [
            "Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie).",
            "Metanol: opilost, bolesti břicha, poruchy vidění (sněžná slepota), těžká acidóza s hyperventilací.",
            "CO: bolesti hlavy, třešňově červené zbarvení kůže (karboxyhemoglobin), zmatenost, křeče, kóma.",
            "Alkohol: jaterní steatóza, cirhóza s portální hypertenzí, Wernickeova encefalopatie (deficit vitaminu B1)."
        ],
        "diagnostics": [
            "Stanovení koncentrace toxinu v krvi (paracetamolémie, metanolémie).",
            "Měření karboxyhemoglobinu (COHb) v krvi CO-oxymetrem (klasický pulzní oxymetrsaturaci zkreslí!).",
            "Vyšetření acidobazické rovnováhy (těžká MAC s vysokým Anion Gap u metanolu)."
        ],
        "numbers": [
            ["Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu", "> 7.5 - 10 g (u dospělého)"],
            ["Letální koncentrace COHb v krvi", "> 50 %"],
            ["Smrtelná dávka čistého metanolu", "30 - 100 ml (bez léčby)"],
            ["Afinita CO k hemoglobinu ve srovnání s O2", "200 - 250 x vyšší"]
        ]
    },
    {
        "id": "gen-45",
        "title": "Hyperglykemie - etiopatogeneze, akutní a chronické komplikace, následky.",
        "definition": "Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.",
        "etiology": [
            "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
            "Inzulínová rezistence v kombinaci s relativním nedostatkem inzulínu (diabetes 2. typu).",
            "Sekundární hyperglykémie při léčbě glukokortikoidy (steroidní diabetes) nebo u endokrinopatií (akromegalie, Cushing)."
        ],
        "pathogenesis": [
            "Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech.",
            "Akutní acidóza (DKA): absence inzulínu aktivuje lipolýzu, mastné kyseliny jsou v játrech oxidovány na ketolátky, což vyvolá acidózu.",
            "Chronická glukotoxicita: hyperglykémie stimuluje tvorbu pokročilých produktů glykace (AGEs), aktivuje polyolovou cestu (sorbitol v buňkách) a poškozuje endotel cév."
        ],
        "manifestations": [
            "Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.",
            "Akutní komplikace: Diabetická ketoacidóza (DKA - hyperventilace, zápach acetonu) nebo Hyperosmolární hyperglykemický syndrom (HHS - těžká dehydratace, kóma).",
            "Chronické komplikace: mikroangiopatie (retinopatie, nefropatie, neuropatie) a makroangiopatie (infarkt, CMP, diabetická noha)."
        ],
        "diagnostics": [
            "Stanovení glykémie nalačno a oGTT (orální glukózový toleranční test).",
            "Měření **glykovaného hemoglobinu (HbA1c)** pro hodnocení dlouhodobé kompenzace (za 2-3 měsíce).",
            "Screening mikroalbuminurie (stanovení poměru albumin/kreatinin v moči pro včasnou detekci nefropatie)."
        ],
        "numbers": [
            ["Ledvinný práh pro glukózu (kdy vzniká glykosurie)", "10.0 mmol/l (u zdravých ledvin)"],
            ["Glykémie nalačno definující diabetes mellitus", ">= 7.0 mmol/l"],
            ["Cílový glykovaný hemoglobin (HbA1c) pro kompenzovaného diabetika", "< 48 mmol/mol"],
            ["Glykémie u hyperosmolárního syndromu (HHS)", "často > 33.0 mmol/l"]
        ]
    },
    {
        "id": "gen-46",
        "title": "Geneticky podmíněné nemoci - rozdělení, příklady. Monofaktoriální a multifaktoriální dědičnost.",
        "definition": "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění.",
        "etiology": [
            "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů.",
            "Monofaktoriální (mendelistické) nemoci: mutace v jednom genu (např. cystická fibróza, Huntingtonova choroba).",
            "Multifaktoriální nemoci: interakce mnoha genů s vlivy vnějšího prostředí (ateroskleróza, esenciální hypertenze, diabetes 2. typu)."
        ],
        "pathogenesis": [
            "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
            "Autozomálně recesivní (AR): k projevu je nutná přítomnost obou mutovaných alel (homozygot). Rodiče bývají zdraví přenašeči.",
            "Gonosomální dědičnost (vázaná na X chromozom): postihuje převážně muže (hemizygoti), protože mají jen jeden X chromozom (např. hemofilie A)."
        ],
        "manifestations": [
            "Downův syndrom: mentální retardace, typický vzhled (mongoloidní oční štěrbiny, epikantus), vrozené srdeční vady.",
            "Cystická fibróza: mutace genu CFTR narušuje transport Cl-, což vede k tvorbě extrémně vazkého hlenu v plicích a pankreatu.",
            "Huntingtonova choroba: neurodegenerativní projev v dospělosti, choreatické pohyby, progresivní demence."
        ],
        "diagnostics": [
            "Karyotypizace (cytogenetické vyšetření počtu a struktury chromozomů).",
            "Molekulárně genetické metody (PCR, sekvenování DNA, NGS) pro detekci bodových mutací.",
            "Prenatální screening (ultrazvuk a biochemické markery v séru matky)."
        ],
        "numbers": [
            ["Normální lidský karyotyp (počet chromozomů)", "46 (23 párů, z toho 22 autozomů a 2 gonozomy)"],
            ["Riziko přenosu AD nemoci na potomka (jeden rodič heterozygot)", "50 %"],
            ["Pravděpodobnost nemocného potomka u dvou AR přenašečů", "25 %"]
        ]
    },
    {
        "id": "gen-47",
        "title": "Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
        "definition": "Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání.",
        "etiology": [
            "Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).",
            "Chronické dlouhodobé zatížení (např. esenciální hypertenze, chlopenní vady).",
            "Strukturální poškození (infarkt, jizva, fibróza) versus funkční porucha bez strukturálních změn."
        ],
        "pathogenesis": [
            "Akutní fáze: tělo reaguje rychlými, funkčními mechanismy (aktivace sympatiku, hyperventilace). Často nestačí plně kompenzovat těžké léze.",
            "Chronická fáze: dochází k strukturální remodelaci a adaptaci (hypertrofie kardiomyocytů, hyperplázie). Tyto změny jsou však dlouhodobě patogenní.",
            "Dekompenzace: vyčerpání kompenzačních rezerv, strukturální degenerace (např. dilatace komory a fibróza myokardu u srdečního selhání)."
        ],
        "manifestations": [
            "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
            "Dekompenzovaný stav: rozvoj klinických symptomů selhání (např. plicní edém při dekompenzaci srdečního selhání).",
            "Přechod z akutní strukturální dysfunkce (např. ATN ledvin) do plné funkční obnovy po regeneraci tubulů."
        ],
        "diagnostics": [
            "Sledování klinické tolerance zátěže (zátěžové testy, ergometrie).",
            "Zobrazovací metody hodnotící strukturu a geometrii orgánů (echokardiografie pro tloušťku stěn a objemy komor).",
            "Laboratorní markery buněčného poškození a orgánové funkce v čase."
        ],
        "numbers": [
            ["Doba pro rozvoj stabilní chronické adaptace (hypertrofie)", "týdny až měsíce"],
            ["Akutní dekompenzace při ztrátě funkce nefronů", "když klesne GFR < 0.5 - 1.0 ml/s"],
            ["Časový limit pro trvání akutního onemocnění", "do 3 týdnů"]
        ]
    },
    {
        "id": "gen-48",
        "title": "Metabolický syndrom X - etiopatogeneze, projevy, následky.",
        "definition": "Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko.",
        "etiology": [
            "Genetická predispozice k inzulínové rezistenci a ukládání viscerálního tuku.",
            "Nevhodný životní styl: nadměrný příjem kalorií (sacharidy, nasycené tuky) a nedostatek pohybu.",
            "Chronický mírný zánět spojený s obezitou."
        ],
        "pathogenesis": [
            "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.",
            "Vysoké FFA v játrech tlumí inzulínovou signalizaci (inzulínová rezistence) a stimulují produkci VLDL (hypertriglyceridémie).",
            "Kompenzační hyperinzulinémie stimuluje sympatikus a zvyšuje reabsorpci sodíku v ledvinách, což vede k arteriální hypertenzi."
        ],
        "manifestations": [
            "Abdominální (viscerální) obezita (postava typu jablka).",
            "Arteriální hypertenze, mírná hyperglykémie nalačno nebo porušená glukózová tolerance.",
            "Následky: akcelerovaná ateroskleróza vyúsťující v infarkt myokardu, ischemickou CMP a rozvoj diabetu 2. typu."
        ],
        "diagnostics": [
            "Měření obvodu pasu a krevního tlaku.",
            "Biochemické vyšetření lipidového spektra nalačno (triglyceridy, HDL cholesterol).",
            "Stanovení glykémie nalačno nebo oGTT."
        ],
        "numbers": [
            ["Kritérium NCEP-ATP III pro obvod pasu u mužů", "> 102 cm (ženy > 88 cm)"],
            ["Kritérium NCEP-ATP III pro triglyceridy", ">= 1.7 mmol/l"],
            ["Kritérium NCEP-ATP III pro HDL cholesterol u mužů", "< 1.0 mmol/l (ženy < 1.3 mmol/l)"],
            ["Kritérium NCEP-ATP III pro TK (nebo léčba hypertenze)", ">= 130/85 mmHg"],
            ["Kritérium NCEP-ATP III pro glykémii nalačno", ">= 5.6 mmol/l"]
        ]
    },
    {
        "id": "gen-49",
        "title": "Hypoglykemie - etiopatogeneze, komplikace, následky.",
        "definition": "Hypoglykemie je stav poklesu koncentrace glukózy v krvi pod kritickou mez, který ohrožuje energetické zásobení mozku.",
        "etiology": [
            "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
            "U nediabetiků: insulinom (nádor z beta-buněk), těžké poškození jater (selhání glukoneogeneze), sepse, hladovění."
        ],
        "pathogenesis": [
            "Glukóza je hlavním energetickým substrátem pro mozek. Mozek si neumí glukózu ukládat ani syntetizovat, je závislý na glykémii.",
            "Pokles glykémie pod 3.9 mmol/l aktivuje kontraregulaci: uvolnění glukagonu a adrenalinu, později růstového hormonu a kortizolu.",
            "Pokud glykémie dále klesá, dochází k energetickému deficitu neuronů (neuroglykopénii) a k narušení jejich funkcí."
        ],
        "manifestations": [
            "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost.",
            "Neuroglykopenické: zmatenost, poruchy chování (agresivita, apatie), rozmazané vidění, křeče, kóma (hypoglykemické kóma).",
            "Následky: protrahovaná těžká hypoglykémie může způsobit ireverzibilní poškození mozku a vyvolat maligní arytmie."
        ],
        "diagnostics": [
            "Okamžité stanovení glykémie (glukometrem z kapilární krve nebo laboratorně z plazmy).",
            "**Whippleova triáda**: klinické příznaky, dokumentovaná nízká glykémie, rychlý ústup příznaků po podání glukózy.",
            "Stanovení inzulínu a C-peptidu při podezření na insulinom (C-peptid je vysoký u insulinomu, nízký u předávkování exogenním inzulínem)."
        ],
        "numbers": [
            ["Limit pro definici hypoglykémie u diabetiků", "< 3.9 mmol/l"],
            ["Limit pro definici hypoglykémie u nediabetiků", "< 2.8 mmol/l"],
            ["Kritická hodnota glykémie pro rozvoj kómatu", "< 1.5 - 2.0 mmol/l"]
        ]
    },
    {
        "id": "gen-50",
        "title": "Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
        "definition": "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.",
        "etiology": [
            "Změny tlaku: rychlý pokles tlaku u potápěčů (dekompresní nemoc), výbuchy (blast syndrom).",
            "Crush syndrom: zasypání při zemětřesení, autonehody, dlouhodobé stlačení končetiny v bezvědomí.",
            "Hluk: dlouhodobá expozice zvuku o vysoké intenzitě."
        ],
        "pathogenesis": [
            "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.",
            "Crush syndrom a rhabdomyolýza: mechanický tlak ničí sarkolemu svalových buněk. Dochází k úniku draslíku, fosfátů a **myoglobinu** do oběhu.",
            "Po uvolnění tlaku (reperfúze) myoglobin v ledvinách precipituje v tubulech (při acidóze) a působí nefrotoxicky, což vyvolá akutní tubulární nekrózu (AKI).",
            "Hluk: akustické trauma poškozuje vláskové buňky Cortiho orgánu."
        ],
        "manifestations": [
            "Dekompresní nemoc: bolesti kloubů ('bends'), svědění kůže, dušnost, neurologické výpadky.",
            "Crush syndrom: otok a ischémie končetiny, tmavě hnědá moč (myoglobinurie), oligurie až anurie (AKI).",
            "Riziko náhlé smrti po uvolnění tlaku z důvodu těžké hyperkalémie (draslík ze svalů vyvolá srdeční zástavu)."
        ],
        "diagnostics": [
            "Měření aktivity **kreatinkinázy (CK)** a myoglobinu v séru (markery rhabdomyolýzy).",
            "Vyšetření moči chemicky a sedimentu (myoglobinurie - falešná pozitivita na krev bez erytrocytů).",
            "Sledování hladiny draslíku a renálních parametrů (urea, kreatinin) v séru."
        ],
        "numbers": [
            ["Normální aktivita kreatinkinázy (CK) v séru", "< 3.0 ukat/l"],
            ["CK u závažné rhabdomyolýzy (crush syndrom)", "> 50 - 100 ukat/l (i více než 10násobek normy)"],
            ["Práh intenzity zvuku pro riziko poškození sluchu", "> 85 dB (dlouhodobě)"],
            ["Práh bolesti pro sluchový aparát", "130 - 140 dB"]
        ]
    }
]

# Ensure we have exactly 50 topics
assert len(TOPICS) == 50, f"Expected 50 topics, got {len(TOPICS)}"

# Generate output JavaScript code
output = []
output.append("// data_general.js - Podrobné popisy, kvízy a tabulky referenčních hodnot pro Obecná témata (50 otázek)")
output.append("const GENERAL_DETAILS = {")

# Helper to escape single/double quotes for JS template literals if needed
def clean_js_str(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')

# Build the dynamic distractors and explanations
for idx, topic in enumerate(TOPICS):
    topic_id = topic["id"]
    title = topic["title"]
    definition = topic["definition"]
    etiology = topic["etiology"]
    pathogenesis = topic["pathogenesis"]
    manifestations = topic["manifestations"]
    diagnostics = topic["diagnostics"]
    numbers = topic["numbers"]
    
    # Select 3 random other topics for distractors
    other_topics = [t for t in TOPICS if t["id"] != topic_id]
    
    # 5 Quiz Questions
    quiz_questions = []
    
    # Question 1: Definition Check
    # Distractors are definitions of other topics
    distractor_topics_q1 = random.sample(other_topics, 3)
    options_q1 = [definition] + [t["definition"] for t in distractor_topics_q1]
    # We will shuffle these options, keeping track of the correct index
    indexed_options_q1 = list(enumerate(options_q1))
    random.shuffle(indexed_options_q1)
    
    shuffled_options_q1 = [opt for _, opt in indexed_options_q1]
    correct_idx_q1 = [i for i, (orig_idx, _) in enumerate(indexed_options_q1) if orig_idx == 0][0]
    
    explanations_q1 = []
    for orig_idx, _ in indexed_options_q1:
        if orig_idx == 0:
            explanations_q1.append(f"Správně! Toto je přesná patofyziologická definice pro: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}.")
        else:
            ref_topic = distractor_topics_q1[orig_idx - 1]
            ref_title = ref_topic["title"].split(" - ")[0].split(" -")[0].split(".")[0].strip()
            explanations_q1.append(f"Nesprávně. Tato definice popisuje téma: {ref_title}.")

    quiz_questions.append({
        "question": f"Které tvrzení nejlépe definuje nebo popisuje téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}?",
        "options": shuffled_options_q1,
        "correct": correct_idx_q1,
        "explanations": explanations_q1
    })

    # Question 2: Etiology Check
    # Distractors are etiology points from other topics
    distractor_topics_q2 = random.sample(other_topics, 3)
    correct_etiology = etiology[0]
    options_q2 = [correct_etiology] + [t["etiology"][0] for t in distractor_topics_q2]
    indexed_options_q2 = list(enumerate(options_q2))
    random.shuffle(indexed_options_q2)
    
    shuffled_options_q2 = [opt for _, opt in indexed_options_q2]
    correct_idx_q2 = [i for i, (orig_idx, _) in enumerate(indexed_options_q2) if orig_idx == 0][0]
    
    explanations_q2 = []
    for orig_idx, _ in indexed_options_q2:
        if orig_idx == 0:
            explanations_q2.append(f"Správně! Toto je klíčový etiologický faktor u tématu: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}.")
        else:
            ref_topic = distractor_topics_q2[orig_idx - 1]
            ref_title = ref_topic["title"].split(" - ")[0].split(" -")[0].split(".")[0].strip()
            explanations_q2.append(f"Nesprávně. Tento etiologický bod (příčina) patří k tématu: {ref_title}.")

    quiz_questions.append({
        "question": f"Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}?",
        "options": shuffled_options_q2,
        "correct": correct_idx_q2,
        "explanations": explanations_q2
    })

    # Question 3: Pathogenesis Check
    # Distractors are pathogenesis points from other topics
    distractor_topics_q3 = random.sample(other_topics, 3)
    correct_patho = pathogenesis[0]
    options_q3 = [correct_patho] + [t["pathogenesis"][0] for t in distractor_topics_q3]
    indexed_options_q3 = list(enumerate(options_q3))
    random.shuffle(indexed_options_q3)
    
    shuffled_options_q3 = [opt for _, opt in indexed_options_q3]
    correct_idx_q3 = [i for i, (orig_idx, _) in enumerate(indexed_options_q3) if orig_idx == 0][0]
    
    explanations_q3 = []
    for orig_idx, _ in indexed_options_q3:
        if orig_idx == 0:
            explanations_q3.append(f"Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}.")
        else:
            ref_topic = distractor_topics_q3[orig_idx - 1]
            ref_title = ref_topic["title"].split(" - ")[0].split(" -")[0].split(".")[0].strip()
            explanations_q3.append(f"Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: {ref_title}.")

    quiz_questions.append({
        "question": f"Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}?",
        "options": shuffled_options_q3,
        "correct": correct_idx_q3,
        "explanations": explanations_q3
    })

    # Question 4: Clinical Manifestation Check
    # Distractors are manifestations points from other topics
    distractor_topics_q4 = random.sample(other_topics, 3)
    correct_manifestation = manifestations[0]
    options_q4 = [correct_manifestation] + [t["manifestations"][0] for t in distractor_topics_q4]
    indexed_options_q4 = list(enumerate(options_q4))
    random.shuffle(indexed_options_q4)
    
    shuffled_options_q4 = [opt for _, opt in indexed_options_q4]
    correct_idx_q4 = [i for i, (orig_idx, _) in enumerate(indexed_options_q4) if orig_idx == 0][0]
    
    explanations_q4 = []
    for orig_idx, _ in indexed_options_q4:
        if orig_idx == 0:
            explanations_q4.append(f"Správně! Tento klinický projev, symptom nebo následek je typický pro téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}.")
        else:
            ref_topic = distractor_topics_q4[orig_idx - 1]
            ref_title = ref_topic["title"].split(" - ")[0].split(" -")[0].split(".")[0].strip()
            explanations_q4.append(f"Nesprávně. Tento projev/symptom je typickým znakem tématu: {ref_title}.")

    quiz_questions.append({
        "question": f"Jaký klinický projev, symptom nebo následek je typický pro téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}?",
        "options": shuffled_options_q4,
        "correct": correct_idx_q4,
        "explanations": explanations_q4
    })

    # Question 5: Numbers / Criteria Check
    # Distractors are numbers/criteria from other topics
    distractor_topics_q5 = random.sample(other_topics, 3)
    correct_number = f"{numbers[0][0]} je: {numbers[0][1]}"
    options_q5 = [correct_number] + [f"{t['numbers'][0][0]} je: {t['numbers'][0][1]}" for t in distractor_topics_q5]
    indexed_options_q5 = list(enumerate(options_q5))
    random.shuffle(indexed_options_q5)
    
    shuffled_options_q5 = [opt for _, opt in indexed_options_q5]
    correct_idx_q5 = [i for i, (orig_idx, _) in enumerate(indexed_options_q5) if orig_idx == 0][0]
    
    explanations_q5 = []
    for orig_idx, _ in indexed_options_q5:
        if orig_idx == 0:
            explanations_q5.append(f"Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}.")
        else:
            ref_topic = distractor_topics_q5[orig_idx - 1]
            ref_title = ref_topic["title"].split(" - ")[0].split(" -")[0].split(".")[0].strip()
            explanations_q5.append(f"Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: {ref_title}.")

    quiz_questions.append({
        "question": f"Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: {title.split(' - ')[0].split(' -')[0].split('.')[0].strip()}?",
        "options": shuffled_options_q5,
        "correct": correct_idx_q5,
        "explanations": explanations_q5
    })

    # Now write the JS entry
    output.append(f"  \"{topic_id}\": {{")
    output.append("    richContent: {")
    output.append(f"      definition: `{clean_js_str(definition)}`,")
    
    etiol_js = ", ".join([f"`{clean_js_str(e)}`" for e in etiology])
    output.append(f"      etiology: [{etiol_js}],")
    
    patho_js = ", ".join([f"`{clean_js_str(p)}`" for p in pathogenesis])
    output.append(f"      pathogenesis: [{patho_js}],")
    
    clin_js = ", ".join([f"`{clean_js_str(c)}`" for c in manifestations])
    output.append(f"      clinicalManifestation: [{clin_js}],")
    
    diag_js = ", ".join([f"`{clean_js_str(d)}`" for d in diagnostics])
    output.append(f"      diagnostics: [{diag_js}]")
    output.append("    },")
    
    # Table data
    table_entries = []
    for name, val in numbers:
      table_entries.append(f"      {{ name: `{clean_js_str(name)}`, value: `{clean_js_str(val)}` }}")
    table_js = ",\n".join(table_entries)
    output.append(f"    tableData: [\n{table_js}\n    ],")
    
    # Quiz data
    quiz_js = json.dumps(quiz_questions, indent=6, ensure_ascii=False)
    # Adjust indent and strip outer brackets to fit inside object
    output.append(f"    quiz: {quiz_js}")
    output.append("  },")

output.append("};")

# Add the merge function at the bottom
output.append("""
// Funkce pro sloučení detailů a kvízů obecné patofyziologie do COMPLETE_QUESTIONS
function mergeGeneralDetails() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Obecná") {
      const rich = GENERAL_DETAILS[q.id];
      if (rich) {
        const etiolHTML = rich.richContent.etiology.map(e => `<li>${e}</li>`).join("");
        const pathoHTML = rich.richContent.pathogenesis.map(p => `<li>${p}</li>`).join("");
        const clinHTML = rich.richContent.clinicalManifestation.map(c => `<li>${c}</li>`).join("");
        const diagHTML = rich.richContent.diagnostics.map(d => `<li>${d}</li>`).join("");
        
        // Sestavení řádků tabulky s důležitými čísly / referenčními hodnotami
        const tableRowsHTML = rich.tableData.map(row => `
          <tr>
            <td><strong>${row.name}</strong></td>
            <td>${row.value}</td>
          </tr>
        `).join("");

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

            <section style="margin-top: 24px; border-top: 2px solid var(--border-color); padding-top: 20px;">
              <h3>6. Důležité referenční hodnoty a kritéria</h3>
              <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
                <thead>
                  <tr style="background-color: var(--bg-tertiary);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Parametr / Kritérium</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align: left;">Hodnota / Význam</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRowsHTML}
                </tbody>
              </table>
            </section>
          </div>
        `;
        
        q.quiz = rich.quiz;
      }
    }
  });
}

// Spustíme sloučení
mergeGeneralDetails();
window.GENERAL_DETAILS = GENERAL_DETAILS;
""")

# Write out file
with open("/Users/violakintrova/Desktop/patfyz/data_general.js", "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print("Successfully generated data_general.js!")
