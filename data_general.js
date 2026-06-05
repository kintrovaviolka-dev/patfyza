// data_general.js - Podrobné popisy, kvízy a tabulky referenčních hodnot pro Obecná témata (50 otázek)
const GENERAL_DETAILS = {
  "gen-1": {
    richContent: {
      definition: `Zdraví je stav úplné tělesné, duševní a sociální pohody, nikoli pouze absence nemoci. Nemoc je patologický proces s narušením homeostázy a adaptability organismu.`,
      etiology: [`Etiologie studuje bezprostřední příčiny a podmínky vzniku nemocí.`, `Iatrogenní poškození představuje nežádoucí stavy způsobené lékařským zásahem či chováním zdravotníka.`, `Psychosomatické vlivy propojují psychický stav (stres, úzkost) s rozvojem somatických poruch.`],
      pathogenesis: [`Patogeneze zkoumá mechanismy rozvoje, průběhu a zakončení patologických procesů.`, `Etiopatogeneze je komplexní pohled na spouštěcí příčinu i následný patofyziologický řetězec.`, `Sanogeneze představuje biologické a kompenzační procesy vedoucí k uzdravení organismu.`],
      clinicalManifestation: [`Symptom je subjektivní (např. bolest) nebo objektivní (např. tachykardie) projev nemoci.`, `Syndrom představuje charakteristický soubor symptomů se společnou etiopatogenezí.`, `Průběh nemoci může být perakutní (hodiny), akutní (dny), subakutní (týdny) nebo chronický (měsíce až roky).`],
      diagnostics: [`Anamnéza a klinické vyšetření jsou základem odlišení symptomů od syndromů.`, `Kvantifikace závažnosti symptomů pomáhá určit stadium a fázi onemocnění.`, `Funkční vyšetření objektivizuje kompenzační a dekompenzační rezervy těla.`]
    },
    tableData: [
      { name: `WHO definice zdraví`, value: `stav kompletní fyzické, psychické a sociální pohody` },
      { name: `Odhad psychosomatických příčin v primární péči`, value: `30 - 40 %` },
      { name: `Výskyt nežádoucích iatrogenních příhod v nemocnicích`, value: `cca 10 % hospitalizovaných` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Definice nemoci a zdraví?",
            "options": [
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.",
                  "Draslík je hlavní intracelulární kation (140 mmol/l) určující klidový membránový potenciál. Poruchy jeho bilance postihují elektricky vzrušivé tkáně (svaly, myokard).",
                  "Zdraví je stav úplné tělesné, duševní a sociální pohody, nikoli pouze absence nemoci. Nemoc je patologický proces s narušením homeostázy a adaptability organismu.",
                  "Imunitní systém chrání organismus před patogeny. Nespecifická (vrozená) imunita reaguje okamžitě a nespecificky. Specifická (adaptivní) imunita reaguje pomaleji, ale vytváří imunologickou paměť."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Ischemie.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalia (K+).",
                  "Správně! Toto je přesná patofyziologická definice pro: Definice nemoci a zdraví.",
                  "Nesprávně. Tato definice popisuje téma: Nespecifický a specifický imunitní systém."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Definice nemoci a zdraví?",
            "options": [
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci).",
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Etiologie studuje bezprostřední příčiny a podmínky vzniku nemocí."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Definice nemoci a zdraví."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Definice nemoci a zdraví?",
            "options": [
                  "Kardiovaskulární: redistribuce krve z dolních končetin do hrudníku vede k poklesu baroreflexu a rozvoji ortostatické dysfunkce.",
                  "Změna poměru Ki/Ke (intracelulární/extracelulární draslík) mění klidový membránový potenciál podle Nernstovy rovnice.",
                  "Patogeneze zkoumá mechanismy rozvoje, průběhu a zakončení patologických procesů.",
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance kalia (K+).",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Definice nemoci a zdraví.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Trombóza."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Definice nemoci a zdraví?",
            "options": [
                  "Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Symptom je subjektivní (např. bolest) nebo objektivní (např. tachykardie) projev nemoci.",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Definice nemoci a zdraví.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Definice nemoci a zdraví?",
            "options": [
                  "WHO definice zdraví je: stav kompletní fyzické, psychické a sociální pohody",
                  "Cílový LDL cholesterol u zdravých jedinců je: < 3.0 mmol/l",
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Definice nemoci a zdraví.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ateroskleróza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obezita.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      }
]
  },
  "gen-2": {
    richContent: {
      definition: `Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny.`,
      etiology: [`Hypercholesterolémie, zejména zvýšená koncentrace LDL a pokles HDL v plazmě.`, `Endoteliální dysfunkce indukovaná kouřením, arteriální hypertenzí a diabetem.`, `Genetická predispozice (např. familiární hypercholesterolémie v důsledku mutace LDL receptoru).`],
      pathogenesis: [`Průnik LDL do intimy a jeho následná oxidace (oxLDL) spouští lokální zánětlivou reakci.`, `Monocyty migrují do intimy, mění se v makrofágy a fagocytují oxLDL, čímž vznikají pěnové buňky (foam cells).`, `Proliferace hladkých svalových buněk a tvorba vazivové čepičky (fibrous cap) izoluje lipidové jádro plátu.`],
      clinicalManifestation: [`Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.`, `Chronické komplikace: postupné zužování lumen způsobuje anginu pectoris nebo ICHDK.`, `Ztráta elasticity a oslabení stěny tepny může vyústit v aneurysma (např. břišní aorty).`],
      diagnostics: [`Biochemický lipidový profil (celkový cholesterol, LDL, HDL, triglyceridy) nalačno.`, `Ultrasonografie s duplexním zobrazením (měření tloušťky intimy-medie a přítomnosti plátů).`, `Koronarografie a angio-CT pro zhodnocení anatomické závažnosti stenóz.`]
    },
    tableData: [
      { name: `Cílový LDL cholesterol u zdravých jedinců`, value: `< 3.0 mmol/l` },
      { name: `Cílový LDL u velmi vysokého kardiovaskulárního rizika`, value: `< 1.4 mmol/l` },
      { name: `Normální celkový cholesterol`, value: `< 5.0 mmol/l` },
      { name: `Normální hladina triglyceridů nalačno`, value: `< 1.7 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Ateroskleróza?",
            "options": [
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
                  "Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny.",
                  "Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu.",
                  "Nádorové bujení je nekontrolovaná, autonomní proliferace buněk způsobená akumulací genetických mutací v klíčových genech regulujících buněčný cyklus."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Obezita.",
                  "Správně! Toto je přesná patofyziologická definice pro: Ateroskleróza.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tato definice popisuje téma: Nádorové bujení."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Ateroskleróza?",
            "options": [
                  "Hypercholesterolémie, zejména zvýšená koncentrace LDL a pokles HDL v plazmě.",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
                  "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Ateroskleróza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Edém."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Ateroskleróza?",
            "options": [
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
                  "Průnik LDL do intimy a jeho následná oxidace (oxLDL) spouští lokální zánětlivou reakci."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Trombóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Ateroskleróza."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Ateroskleróza?",
            "options": [
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
                  "Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).",
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Ateroskleróza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ischemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Šok - definice, etiopatogeneze, rozdělení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Ateroskleróza?",
            "options": [
                  "Ranní referenční hladina kortizolu v séru je: 140 - 690 nmol/l",
                  "Cílový LDL cholesterol u zdravých jedinců je: < 3.0 mmol/l",
                  "Normální počet trombocytů v krvi je: 150 - 450 x 10^9/l",
                  "Doba pro rozvoj stabilní chronické adaptace (hypertrofie) je: týdny až měsíce"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Stres a všeobecný adaptační syndrom.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Ateroskleróza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Trombóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce."
            ]
      }
]
  },
  "gen-3": {
    richContent: {
      definition: `Draslík je hlavní intracelulární kation (140 mmol/l) určující klidový membránový potenciál. Poruchy jeho bilance postihují elektricky vzrušivé tkáně (svaly, myokard).`,
      etiology: [`Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).`, `Hyperkalémie: selhání ledvin (AKI/CKD), deficit aldosteronu (Addison), přesun z buněk (acidóza, masivní lýza buněk, popáleniny).`, `Iatrogenní podání kalia bez dostatečné monitorace renálních funkcí.`],
      pathogenesis: [`Změna poměru Ki/Ke (intracelulární/extracelulární draslík) mění klidový membránový potenciál podle Nernstovy rovnice.`, `Hypokalémie vyvolává hyperpolarizaci membrány, což ztěžuje vznik akčního potenciálu a zpomaluje repolarizaci (vznik vln U).`, `Hyperkalémie vyvolává částečnou depolarizaci membrány, což inaktivuje sodíkové kanály, zpomaluje vedení vzruchu a hrozí asystolií.`],
      clinicalManifestation: [`Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.`, `Hyperkalémie: svalová slabost, parestezie, bradykardie, fibrilace komor a náhlá zástava srdce v diastole.`, `EKG u hyperkalémie: vysoké hrotité T vlny, vymizení P vln a široký komplex QRS.`],
      diagnostics: [`Stanovení koncentrace draslíku v séru (pozor na pseudohyperkalémii při hemolýze vzorku).`, `Elektrokardiografie (EKG) jako klíčový nástroj k posouzení akutního elektrofyziologického ohrožení.`, `Vyšetření acidobazické rovnováhy (pH výrazně ovlivňuje distribuci draslíku).`]
    },
    tableData: [
      { name: `Referenční rozmezí draslíku v séru`, value: `3.5 - 5.1 mmol/l` },
      { name: `Kritická hodnota těžké hypokalémie`, value: `< 2.5 mmol/l` },
      { name: `Kritická hodnota těžké hyperkalémie`, value: `> 6.5 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy bilance kalia (K+)?",
            "options": [
                  "Draslík je hlavní intracelulární kation (140 mmol/l) určující klidový membránový potenciál. Poruchy jeho bilance postihují elektricky vzrušivé tkáně (svaly, myokard).",
                  "Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách.",
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.",
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tato definice popisuje téma: Edém.",
                  "Nesprávně. Tato definice popisuje téma: Dehydratace.",
                  "Nesprávně. Tato definice popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy bilance kalia (K+)?",
            "options": [
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
                  "Nedostatečný příjem potravy (hladovění, mentální anorexie, chudoba).",
                  "Hypoxická hypoxie: pokles pO2 ve vzduchu (nadmořská výška) nebo poruchy plic (ARDS, CHOPN).",
                  "Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Malnutrice.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Embolie."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy bilance kalia (K+)?",
            "options": [
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech.",
                  "Změna poměru Ki/Ke (intracelulární/extracelulární draslík) mění klidový membránový potenciál podle Nernstovy rovnice."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperglykemie.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy bilance kalia (K+)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance kalia (K+)?",
            "options": [
                  "Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.",
                  "Abdominální (viscerální) obezita (postava typu jablka).",
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy bilance kalia (K+)?",
            "options": [
                  "Referenční rozmezí draslíku v séru je: 3.5 - 5.1 mmol/l",
                  "Normální lidský karyotyp (počet chromozomů) je: 46 (23 párů, z toho 22 autozomů a 2 gonozomy)",
                  "Ischemická tolerance neuronů kůry mozku je: 4 - 5 minut",
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ischemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obezita."
            ]
      }
]
  },
  "gen-4": {
    richContent: {
      definition: `Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.`,
      etiology: [`Virchowova triáda: poškození endotelu, zpomalení toku krve (stagnace), hyperkoagulační stav (trombofilie).`, `Arteriální trombóza: poškození endotelu aterosklerózou, hypertenzí či toxiny (kouření).`, `Venózní trombóza: stagnace krve při imobilizaci, obezitě, srdečním selhání nebo po operacích.`],
      pathogenesis: [`Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).`, `Při venózní trombóze dominuje aktivace plazmatické koagulace v zónách stagnujícího toku krve (červený fibrinový trombus s erytrocyty).`, `Postupná propagace trombu (růst ve směru toku krve), organizace vazivem, rekanalizace nebo embolizace.`],
      clinicalManifestation: [`Arteriální trombóza: akutní ischémie tkáně (infarkt myokardu, ischemická CMP, akutní ischémie končetiny).`, `Venózní trombóza (hluboká žilní trombóza - HŽT): jednostranný otok končetiny, bolest, zarudnutí a cyanóza.`, `Hlavním následkem HŽT je plicní embolie při uvolnění trombu a posttrombotický syndrom s chronickou žilní nedostatečností.`],
      diagnostics: [`Duplexní ultrasonografie žil (kompresní ultrazvuk) u HŽT končetin.`, `Stanovení D-dimerů v plazmě (vysoká citlivost, nízká specificita - vylučovací test).`, `Koagulační screening (Quick/INR, APTT) a vyšetření trombofilních stavů (Leidenská mutace).`]
    },
    tableData: [
      { name: `Normální počet trombocytů v krvi`, value: `150 - 450 x 10^9/l` },
      { name: `Wells Score pro HŽT (vysoká pravděpodobnost)`, value: `>= 3 body` },
      { name: `D-dimer negativní limit pro vyloučení HŽT`, value: `< 500 ug/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Trombóza?",
            "options": [
                  "Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.",
                  "Draslík je hlavní intracelulární kation (140 mmol/l) určující klidový membránový potenciál. Poruchy jeho bilance postihují elektricky vzrušivé tkáně (svaly, myokard).",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.",
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Trombóza.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tato definice popisuje téma: Hypovolemický šok.",
                  "Nesprávně. Tato definice popisuje téma: Dehydratace."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Trombóza?",
            "options": [
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
                  "Fyzikální stresory: chlad, horko, trauma, infekce, bolest, nadměrná fyzická zátěž.",
                  "Virchowova triáda: poškození endotelu, zpomalení toku krve (stagnace), hyperkoagulační stav (trombofilie).",
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Krvácení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Stres a všeobecný adaptační syndrom.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Trombóza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Kardiogenní a obstrukční šok."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Trombóza?",
            "options": [
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Trombóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Trombóza?",
            "options": [
                  "Arteriální trombóza: akutní ischémie tkáně (infarkt myokardu, ischemická CMP, akutní ischémie končetiny).",
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Trombóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypoglykemie."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Trombóza?",
            "options": [
                  "Věk pro definici předčasné puberty u dívek je: < 8. rok",
                  "Normální parciální tlak kyslíku v arteriální krvi (paO2) je: 11.0 - 13.0 kPa (80-100 mmHg)",
                  "Normální počet trombocytů v krvi je: 150 - 450 x 10^9/l",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy růstu.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoxie a hyperoxie buňky.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Trombóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      }
]
  },
  "gen-5": {
    richContent: {
      definition: `Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.`,
      etiology: [`Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).`, `Nehemoragický hypovolemický šok: dehydratace (průjmy, zvracení), těžké popáleniny (únik plazmy), polyurie.`, `Sekvestrace tekutiny do tzv. třetího prostoru (ileus, pankreatitida).`],
      pathogenesis: [`Pokles venózního návratu (preloadu) vede ke snížení tepového objemu a srdečního výdeje.`, `Aktivace baroreceptorů spouští sympatoadrenální systém a RAAS, což vyvolá vazokonstrikci a tachykardii pro udržení MAP.`, `Centralizace oběhu udržuje perfuzi mozku a srdce na úkor kůže, svalů a ledvin, kde vzniká ischemické poškození.`],
      clinicalManifestation: [`Studená, bledá a opocená kůže, prodloužený kapilární návrat (> 2 s).`, `Tachykardie, hypotenze (u mladých kompenzovaná až do ztráty 30 % objemu), oligurie až anurie.`, `Tkáňová hypoxie s přechodem na anaerobní metabolismus vede k laktátové acidóze a multiorgánovému selhání (MODS).`],
      diagnostics: [`Sledování klinických známek (tepová frekvence, krevní tlak, hodinová diuréza).`, `Shock Index (poměr tepové frekvence k systolickému tlaku) jako rychlý screening závažnosti.`, `Měření hladiny laktátu v séru (indikátor tkáňové hypoxie a závažnosti šoku).`]
    },
    tableData: [
      { name: `Normální Shock Index`, value: `0.5 - 0.7` },
      { name: `Shock Index značící závažný šok`, value: `> 1.0` },
      { name: `Hemoragický šok třídy III (ztráta krve)`, value: `30 - 40 % (1500-2000 ml)` },
      { name: `Diuréza u rozvinutého šoku`, value: `< 0.5 ml/kg/hod` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Hypovolemický šok?",
            "options": [
                  "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
                  "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.",
                  "Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato definice popisuje téma: Trombóza.",
                  "Správně! Toto je přesná patofyziologická definice pro: Hypovolemický šok."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Hypovolemický šok?",
            "options": [
                  "Biologické noxy (bakterie, viry, paraziti).",
                  "MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol).",
                  "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
                  "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Hypovolemický šok."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Hypovolemický šok?",
            "options": [
                  "Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor).",
                  "Pokles venózního návratu (preloadu) vede ke snížení tepového objemu a srdečního výdeje.",
                  "Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí.",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Lokální zánětová odpověď.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Hypovolemický šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Hypovolemický šok?",
            "options": [
                  "Studená, bledá a opocená kůže, prodloužený kapilární návrat (> 2 s).",
                  "Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.",
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Abdominální (viscerální) obezita (postava typu jablka)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Hypovolemický šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperglykemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolický syndrom X."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Hypovolemický šok?",
            "options": [
                  "Kritická hranice středního arteriálního tlaku (MAP) je: < 65 mmHg",
                  "Normální Shock Index je: 0.5 - 0.7",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l",
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Hypovolemický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nespecifický a specifický imunitní systém."
            ]
      }
]
  },
  "gen-6": {
    richContent: {
      definition: `Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).`,
      etiology: [`Fyzikální stresory: chlad, horko, trauma, infekce, bolest, nadměrná fyzická zátěž.`, `Psychogenní stresory: úzkost, strach, sociální konflikty, dlouhodobá duševní zátěž.`, `Narušení biologických rytmů a spánková deprivace.`],
      pathogenesis: [`Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'.`, `Fáze 2: Rezistence. Aktivace osy hypothalamus-hypofýza-kůra nadledvin (osa HPA). Uvolnění CRH, ACTH a následně kortizolu, který mobilizuje energetické zásoby.`, `Fáze 3: Vyčerpání. Nastává při dlouhodobém působení stresoru. Dochází k depleci glukokortikoidů, atrofii kůry nadledvin a selhání adaptace.`],
      clinicalManifestation: [`Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility.`, `Fáze rezistence: chronicky zvýšený kortizol způsobuje supresi imunitního systému (involuce thymu, lymfopenie), katabolismus.`, `Fáze vyčerpání: úzkost, deprese, rozvoj stresových vředů v žaludku (Curlingovy vředy), hypertenze a metabolický rozvrat.`],
      diagnostics: [`Měření hladin kortizolu v séru, slinách (ztráta diurnálního rytmu) a volného kortizolu v moči.`, `Stanovení plazmatických katecholaminů a ACTH.`, `Sledování imunitního profilu (leukocytární vzorec, pokles počtu eosinofilů a lymfocytů).`]
    },
    tableData: [
      { name: `Ranní referenční hladina kortizolu v séru`, value: `140 - 690 nmol/l` },
      { name: `Půlnoční fyziologický kortizol (sliny)`, value: `< 100 nmol/l` },
      { name: `Normální hladina ACTH nalačno`, value: `2.2 - 13.2 pmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Stres a všeobecný adaptační syndrom?",
            "options": [
                  "Poruchy metabolismu železa zahrnují jeho nedostatek (sideropenie) vedoucí k anémii, nebo nadbytek (hemochromatóza) způsobující toxické poškození tkání.",
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
                  "Hyperhydratace je stav nadměrného množství vody v organismu. Podle koncentrace sodíku a osmolarity se dělí na izotonickou, hypertonickou a hypotonickou.",
                  "Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Správně! Toto je přesná patofyziologická definice pro: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tato definice popisuje téma: Hyperhydratace.",
                  "Nesprávně. Tato definice popisuje téma: Metabolický syndrom X."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Stres a všeobecný adaptační syndrom?",
            "options": [
                  "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření).",
                  "Deficit železa (sideropenie): chronické ztráty krve (silná menstruace, GIT krvácení), nedostatečný příjem, poruchy vstřebávání (celiakie).",
                  "Fyzikální stresory: chlad, horko, trauma, infekce, bolest, nadměrná fyzická zátěž.",
                  "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození a smrt buňky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ischemie."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Stres a všeobecný adaptační syndrom?",
            "options": [
                  "Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).",
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.",
                  "Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.",
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Embolie.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Stres a všeobecný adaptační syndrom?",
            "options": [
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility.",
                  "Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů.",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Obstipace a průjem.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Stres a všeobecný adaptační syndrom?",
            "options": [
                  "Poločas vysoce reaktivního hydroxylového radikálu (OH*) je: cca 10^-9 sekundy",
                  "Normální počet trombocytů v krvi je: 150 - 450 x 10^9/l",
                  "Celkový objem krve u dospělého člověka je: cca 7 - 8 % tělesné hmotnosti (cca 5 litrů)",
                  "Ranní referenční hladina kortizolu v séru je: 140 - 690 nmol/l"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Trombóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Krvácení.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Stres a všeobecný adaptační syndrom."
            ]
      }
]
  },
  "gen-7": {
    richContent: {
      definition: `Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.`,
      etiology: [`Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.`, `Neurologická onemocnění (CMP s ochrnutím, kóma, pokročilá demence).`, `Těžká interní onemocnění (srdeční selhání NYHA IV, kritické respirační selhání).`],
      pathogenesis: [`Kardiovaskulární: redistribuce krve z dolních končetin do hrudníku vede k poklesu baroreflexu a rozvoji ortostatické dysfunkce.`, `Lokomotorický: chybění mechanické zátěže tlumí osteoblasty a aktivuje osteoklasty (odbourávání kostí), svaly atrofují z inaktivity.`, `Respirační: hypoventilace a stagnace sekretu v dolních plicních lalocích (hypostatická pneumonie).`],
      clinicalManifestation: [`Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.`, `Svalová atrofie (ztráta svalové hmoty), kloubní kontraktury a imobilizační osteoporóza s hyperkalciurií.`, `Vznik dekubitů (proleženin) v místech kostních výčnělků v důsledku ischémie kůže pod tlakem.`],
      diagnostics: [`Klinické sledování turgoru kůže, stavu podkoží v predilekčních místech (sakrum, paty).`, `Laboratorní monitorování kalcémií a kalciurie (detekce kostní resorpce).`, `Spirometrické vyšetření (pokles vitální kapacity plic u ležících pacientů).`]
    },
    tableData: [
      { name: `Rychlost ztráty svalové hmoty při imobilizaci`, value: `1.5 - 2 % denně (v prvních 2 týdnech)` },
      { name: `Pokles svalové síly za týden klidu na lůžku`, value: `10 - 15 %` },
      { name: `Časný rozvoj ortostatické hypotenze`, value: `již po 3 - 4 dnech na lůžku` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Vliv celkové a částečné imobilizace?",
            "options": [
                  "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.",
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
                  "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Správně! Toto je přesná patofyziologická definice pro: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato definice popisuje téma: Hypovolemický šok."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Vliv celkové a částečné imobilizace?",
            "options": [
                  "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).",
                  "Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve.",
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Embolie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperhydratace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Vliv celkové a částečné imobilizace?",
            "options": [
                  "Kardiovaskulární: redistribuce krve z dolních končetin do hrudníku vede k poklesu baroreflexu a rozvoji ortostatické dysfunkce.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Akutní fáze: tělo reaguje rychlými, funkčními mechanismy (aktivace sympatiku, hyperventilace). Často nestačí plně kompenzovat těžké léze.",
                  "Reversibilní poškození: zduření buňky (hydroptická dystrofie) z důvodu mírného poklesu ATP a dysfunkce Na+/K+-ATPázy."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození a smrt buňky."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Vliv celkové a částečné imobilizace?",
            "options": [
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
                  "Snížený kožní turgor (kožní řasa vyhlazuje pomalu), suché sliznice, zapadlé oči.",
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dehydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Vliv celkové a částečné imobilizace."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Vliv celkové a částečné imobilizace?",
            "options": [
                  "Normální sérová osmolarita je: 275 - 295 mOsm/kg",
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dehydratace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      }
]
  },
  "gen-8": {
    richContent: {
      definition: `Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.`,
      etiology: [`Infekční příčiny (sepse, těžká pneumonie, urosepse).`, `Neinfekční příčiny: těžká traumata, popáleniny, akutní pankreatitida (autodigese).`, `Velké chirurgické výkony, ischemicko-reperfúzní syndrom.`],
      pathogenesis: [`Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu.`, `Mediátory vyvolají celoplošnou aktivaci endotelu, generalizovanou vazodilataci a zvýšenou kapilární propustnost (prosakování).`, `Aktivace koagulační kaskády a fibrinolýzy na poškozeném endotelu přispívá k mikrotrombóze a orgánové ischémii.`],
      clinicalManifestation: [`Teplotní nestabilita (horečka > 38 °C nebo podchlazení < 36 °C).`, `Tachykardie, tachypnoe a změny v počtu leukocytů.`, `Následky: generalizovaný edém (únik do interstitia), oběhová nestabilita (distributivní šok) a rozvoj MODS.`],
      diagnostics: [`Klinické vyhodnocení 4 kritérií SIRS (teplota, TF, DF, leukocyty).`, `Stanovení markerů zánětu v séru (CRP, prokalcitonin) a krevního obrazu.`, `Vyšetření acidobazické rovnováhy k průkazu laktátové acidózy (hypoperfuze).`]
    },
    tableData: [
      { name: `Teplota pro kritérium SIRS`, value: `< 36 °C nebo > 38 °C` },
      { name: `Tepová frekvence pro kritérium SIRS`, value: `> 90/min` },
      { name: `Dechová frekvence pro kritérium SIRS`, value: `> 20/min (nebo pCO2 < 4.3 kPa)` },
      { name: `Počet leukocytů pro kritérium SIRS`, value: `< 4 x 10^9/l nebo > 12 x 10^9/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky?",
            "options": [
                  "Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.",
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.",
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.",
                  "Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Trombóza.",
                  "Nesprávně. Tato definice popisuje téma: Ischemie.",
                  "Správně! Toto je přesná patofyziologická definice pro: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato definice popisuje téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky?",
            "options": [
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).",
                  "Deficit železa (sideropenie): chronické ztráty krve (silná menstruace, GIT krvácení), nedostatečný příjem, poruchy vstřebávání (celiakie).",
                  "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypovolemický šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky?",
            "options": [
                  "Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.",
                  "Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu.",
                  "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Kardiogenní a obstrukční šok.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Imunopatologické reakce."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky?",
            "options": [
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.",
                  "RAC: somnolence, bolesti hlavy, poruchy soustředění (CO2 působí jako anestetikum), periferní vazodilatace, hyperkalémie.",
                  "Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).",
                  "Teplotní nestabilita (horečka > 38 °C nebo podchlazení < 36 °C)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky?",
            "options": [
                  "Sérový albumin značící těžkou proteinkalorickou malnutrici je: < 25 g/l",
                  "Teplota pro kritérium SIRS je: < 36 °C nebo > 38 °C",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Malnutrice.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Respirační acidóza a alkalóza."
            ]
      }
]
  },
  "gen-9": {
    richContent: {
      definition: `Imunitní systém chrání organismus před patogeny. Nespecifická (vrozená) imunita reaguje okamžitě a nespecificky. Specifická (adaptivní) imunita reaguje pomaleji, ale vytváří imunologickou paměť.`,
      etiology: [`Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID).`, `Získané imunitní poruchy (sekundární imunodeficity): infekce HIV (destrukce CD4+), imunosupresivní léčba, malnutrice, stárnutí.`, `Poruchy regulace vedoucí k autoimunitním procesům.`],
      pathogenesis: [`Nespecifická imunita: buněčná složka (makrofágy, neutrofily, NK buňky) využívá fagocytózu. Humorální složka (komplement) vyvolá lýzu cílů.`, `Specifická imunita: T-lymfocyty (buněčná) rozeznávají antigeny na MHC molekulách. B-lymfocyty (humorální) se diferencují v plazmatické buňky produkující protilátky (IgG, IgA, IgM, IgD, IgE).`, `Defekty fagocytózy vedou k recidivujícím pyogenním infekcím; defekty protilátek k opouzdřeným bakteriálním infekcím.`],
      clinicalManifestation: [`Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).`, `Zvýšený výskyt nádorových onemocnění z důvodu selhání imunitního dozoru.`, `Lymfadenopatie, splenomegalie a klinické projevy chronického zánětu.`],
      diagnostics: [`Stanovení celkového počtu leukocytů a diferenciálního krevního obrazu.`, `Kvantitativní stanovení imunoglobulinů v séru (IgG, IgA, IgM) pomocí nefelometrie.`, `Průtoková cytometrie pro stanovení subpopulací lymfocytů (CD4+, CD8+, CD19+ B-buňky).`]
    },
    tableData: [
      { name: `Fyziologické rozmezí leukocytů u dospělých`, value: `4.0 - 10.0 x 10^9/l` },
      { name: `Normální podíl neutrofilů v diferenciálu`, value: `45 - 70 %` },
      { name: `Normální podíl lymfocytů v diferenciálu`, value: `20 - 45 %` },
      { name: `Normální koncentrace IgG v séru`, value: `7.0 - 16.0 g/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Nespecifický a specifický imunitní systém?",
            "options": [
                  "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
                  "Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.",
                  "Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.",
                  "Imunitní systém chrání organismus před patogeny. Nespecifická (vrozená) imunita reaguje okamžitě a nespecificky. Specifická (adaptivní) imunita reaguje pomaleji, ale vytváří imunologickou paměť."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato definice popisuje téma: Nauzea, zvracení.",
                  "Nesprávně. Tato definice popisuje téma: Hyperglykemie.",
                  "Správně! Toto je přesná patofyziologická definice pro: Nespecifický a specifický imunitní systém."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Nespecifický a specifický imunitní systém?",
            "options": [
                  "Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID).",
                  "Sepse a těžké infekce (lipopolysacharid gramnegativních bakterií aktivuje monocyty).",
                  "Fyziologické zdroje: mitochondriální dýchací řetězec, oxidativní vzplanutí fagocytů (likvidace mikrobů), oxid dusnatý (NO) jako vazodilatátor.",
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Nespecifický a specifický imunitní systém?",
            "options": [
                  "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.",
                  "Nespecifická imunita: buněčná složka (makrofágy, neutrofily, NK buňky) využívá fagocytózu. Humorální složka (komplement) vyvolá lýzu cílů.",
                  "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů.",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy acidobazické rovnováhy.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Nespecifický a specifický imunitní systém?",
            "options": [
                  "Studená, bledá a opocená kůže, prodloužený kapilární návrat (> 2 s).",
                  "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypovolemický šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Bolest.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Nespecifický a specifický imunitní systém."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Nespecifický a specifický imunitní systém?",
            "options": [
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l",
                  "Normální aktivita kreatinkinázy (CK) v séru je: < 3.0 ukat/l",
                  "Poločas vysoce reaktivního hydroxylového radikálu (OH*) je: cca 10^-9 sekundy",
                  "Ranní referenční hladina kortizolu v séru je: 140 - 690 nmol/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Stres a všeobecný adaptační syndrom."
            ]
      }
]
  },
  "gen-10": {
    richContent: {
      definition: `Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV.`,
      etiology: [`Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci).`, `Vlastní antigeny pozměněné infekcí, léky nebo genetickými mutacemi (spouštěče autoimunity).`, `Ztráta imunotolerance - selhání centrální (v thymu/kostní dřeni) nebo periferní tolerance.`],
      pathogenesis: [`Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů.`, `Typ II (cytotoxický): IgG/IgM protilátky se vážou na buněčné antigeny, aktivují komplement a vyvolají lýzu (např. transfúzní reakce).`, `Typ III (imunokomplexový): cirkulující antigen-protilátka komplexy se ukládají v cévních stěnách, aktivují komplement a neutrofily (např. glomerulonefritida).`, `Typ IV (opožděný): T-lymfocyty (CD4+ a CD8+) přímo ničí tkáně nebo uvolňují cytokiny aktivující makrofágy (např. kontaktní ekzém, tuberkulinový test).`],
      clinicalManifestation: [`Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace).`, `Typ II a III: hemolytická anémie, vaskulitidy, artritida, nefritida.`, `Autoimunitní projevy: orgánově specifické (tyroiditida, diabetes 1. typu) nebo systémové (SLE, revmatoidní artritida).`],
      diagnostics: [`Průkaz specifického IgE a celkového IgE v séru.`, `Kožní prick testy (vyhodnocení časné kožní reakce typu I).`, `Měření autoantiprotiátek (ANA, ANCA, RF) v séru a biopsie s imunofluorescenčním průkazem imunokomplexů.`]
    },
    tableData: [
      { name: `Rozmezí celkového IgE u zdravých dospělých`, value: `< 100 kU/l` },
      { name: `Doba rozvoje reakce typu I (časná)`, value: `5 - 30 minut od expozice` },
      { name: `Doba rozvoje reakce typu IV (opožděná)`, value: `48 - 72 hodin od expozice` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Imunopatologické reakce?",
            "options": [
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií.",
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato definice popisuje téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy růstu.",
                  "Správně! Toto je přesná patofyziologická definice pro: Imunopatologické reakce."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Imunopatologické reakce?",
            "options": [
                  "Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci).",
                  "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.",
                  "Etiologie studuje bezprostřední příčiny a podmínky vzniku nemocí.",
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Edém.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Definice nemoci a zdraví.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperhydratace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Imunopatologické reakce?",
            "options": [
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.",
                  "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů.",
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolický syndrom X.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Imunopatologické reakce?",
            "options": [
                  "Arteriální trombóza: akutní ischémie tkáně (infarkt myokardu, ischemická CMP, akutní ischémie končetiny).",
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
                  "Těžká arteriální hypotenze (MAP < 65 mmHg) refrakterní na volumoterapii.",
                  "Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Trombóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Kardiogenní a obstrukční šok.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Imunopatologické reakce."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Imunopatologické reakce?",
            "options": [
                  "Kritérium septického šoku: laktát v séru je: > 2.0 mmol/l (i přes volumoterapii)",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l",
                  "Rozmezí celkového IgE u zdravých dospělých je: < 100 kU/l",
                  "Normální počet trombocytů v krvi je: 150 - 450 x 10^9/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Imunopatologické reakce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Trombóza."
            ]
      }
]
  },
  "gen-11": {
    richContent: {
      definition: `Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu.`,
      etiology: [`Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).`, `Průchod elektrického střídavého proudu (zejména 50 Hz v domácí síti).`, `Ionizující záření (RTG, gama záření, radioaktivní rozpad) a elektromagnetické vlnění.`],
      pathogenesis: [`Chlad: vazokonstrikce, tvorba ledových krystalů v buňkách (dehydratace a destrukce membrán), krystalizace vody v cévách (trombóza).`, `Teplo: denaturace proteinů, tepelná koagulace cév a buněčná nekróza.`, `El. proud: depolarizace elektricky vzrušivých tkání (fibrilace komor, křeče) a Jouleovo teplo (popálení tkání).`, `Ionizující záření: přímé štěpení DNA a nepřímá radiolýza vody za vzniku vysoce reaktivních OH* radikálů.`],
      clinicalManifestation: [`Popáleniny (klasifikace I.-IV. stupně podle hloubky) a omrzliny.`, `Celková hypotermie (zmatenost, bradykardie, asystolie) nebo hypertermie (multiorgánové selhání).`, `Akutní nemoc z ozáření (syndrom hematopoetický, gastrointestinální a neurovaskulární) a pozdní stochastické účinky (nádory, mutace).`],
      diagnostics: [`Měření tělesné teploty v jádru (rektálně, močový měchýř).`, `Elektrokardiogram (EKG) u zásahu el. proudem (arytmie) a hypotermie (Osbornovy vlny J).`, `Krevní obraz (sledování lymfopenie jako markeru radiačního poškození kostní dřeně).`]
    },
    tableData: [
      { name: `Definice hypotermie (tělesná teplota v jádru)`, value: `< 35 °C` },
      { name: `Práh střídavého proudu pro fibrilaci komor (50 Hz)`, value: `> 50 - 100 mA` },
      { name: `Letální dávka celotělového ionizujícího záření (LD50/60)`, value: `3.5 - 4.5 Gy` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poškození vlivem fyzikálních vlivů?",
            "options": [
                  "Poruchy acidobazické rovnováhy (ABR) jsou stavy odchylky pH krve od fyziologického rozmezí vyvolané respiračními nebo metabolickými příčinami.",
                  "Lokální zánět je fyziologická obranná reakce organismu na poškození tkáně (infekce, trauma, chemické vlivy) směřující k eliminaci noxy a reparaci tkáně.",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.",
                  "Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tato definice popisuje téma: Lokální zánětová odpověď.",
                  "Nesprávně. Tato definice popisuje téma: Hypovolemický šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poškození vlivem fyzikálních vlivů."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poškození vlivem fyzikálních vlivů?",
            "options": [
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Krvácení.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy růstu."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poškození vlivem fyzikálních vlivů?",
            "options": [
                  "RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.",
                  "Chlad: vazokonstrikce, tvorba ledových krystalů v buňkách (dehydratace a destrukce membrán), krystalizace vody v cévách (trombóza).",
                  "Bdělost je udržována ascendentním retikulárním aktivačním systémem (ARAS) v mozkovém kmeni, který stimuluje kůru.",
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Respirační acidóza a alkalóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy vědomí.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem fyzikálních vlivů?",
            "options": [
                  "Popáleniny (klasifikace I.-IV. stupně podle hloubky) a omrzliny.",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "Zvýšení srdeční frekvence (tachykardie - o 10 tepů/min na každý 1 °C) a dechu, svalový třes, pocit chladu v 1. fázi, horkost a pocení ve 3. fázi.",
                  "Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Horečka.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poškození vlivem fyzikálních vlivů?",
            "options": [
                  "Definice hypotermie (tělesná teplota v jádru) je: < 35 °C",
                  "Normální pH žaludeční šťávy je: 1.5 - 3.5",
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l",
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nauzea, zvracení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem chemických vlivů."
            ]
      }
]
  },
  "gen-12": {
    richContent: {
      definition: `Embolie je zavlečení pevného, tekutého nebo plynného tělesa (embolu) krevním oběhem do místa zúžení řečiště, kde způsobí ucpání cévy a ischémii.`,
      etiology: [`Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve.`, `Speciální formy: tuková embolie (zlomeniny dlouhých kostí), vzduchová (trauma krčních žil, potápění), embolie plodové vody, nádorová.`, `Paradoxní embolie: průnik trombu z venózního oběhu do arteriálního přes pravolevý zkrat (např. foramen ovale patens).`],
      pathogenesis: [`Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.`, `Akutní uzávěr plicnice prudce zvýší odpor plicního řečiště, čímž vzniká přetížení pravé komory (akutní cor pulmonale).`, `Zvýšený mrtvý prostor (ventilace bez perfuze) a pravolevý shunt v plicích vyvolají těžkou arteriální hypoxémii.`],
      clinicalManifestation: [`PE: náhlá dušnost, bolest na hrudníku (pleurální charakter), kašel, hemoptýza, tachypnoe a tachykardie.`, `Při masivní PE dochází k obstrukčnímu šoku s hypotenzí, synkopou až náhlou smrtí.`, `Periferní embolie (z levého srdce): akutní ischémie končetiny (bolest, chlad, ztráta pulzu) nebo mozku (CMP).`],
      diagnostics: [`CT pulmonální angiografie (CTPA) - zlatý standard diagnostiky PE.`, `Vyšetření D-dimerů v plazmě (vysoká negativní předpovědní hodnota).`, `Echokardiografie (známky přetížení pravé komory - McConnelův příznak, dilatace PK).`]
    },
    tableData: [
      { name: `Normální hodnota D-dimerů pro vyloučení PE`, value: `< 500 ug/l` },
      { name: `Podíl PE vzniklých z HŽT dolních končetin`, value: `> 85 - 90 %` },
      { name: `Wells Score pro PE (vysoká pravděpodobnost)`, value: `> 6 bodů` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Embolie?",
            "options": [
                  "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.",
                  "Embolie je zavlečení pevného, tekutého nebo plynného tělesa (embolu) krevním oběhem do místa zúžení řečiště, kde způsobí ucpání cévy a ischémii.",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.",
                  "Zdraví je stav úplné tělesné, duševní a sociální pohody, nikoli pouze absence nemoci. Nemoc je patologický proces s narušením homeostázy a adaptability organismu."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Správně! Toto je přesná patofyziologická definice pro: Embolie.",
                  "Nesprávně. Tato definice popisuje téma: Hypovolemický šok.",
                  "Nesprávně. Tato definice popisuje téma: Definice nemoci a zdraví."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Embolie?",
            "options": [
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.",
                  "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).",
                  "Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve.",
                  "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypovolemický šok.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Embolie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Embolie?",
            "options": [
                  "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.",
                  "Pokles venózního návratu (preloadu) vede ke snížení tepového objemu a srdečního výdeje.",
                  "Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.",
                  "Ischémie vede k depleci ATP a hromadění hypoxantinu. Zároveň se vápník hromadí v cytosolu a aktivuje proteázy transformující xantinoxidázu."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hypovolemický šok.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Embolie.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Reaktivní kyslíkové a dusíkové sloučeniny."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Embolie?",
            "options": [
                  "Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest).",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu.",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "PE: náhlá dušnost, bolest na hrudníku (pleurální charakter), kašel, hemoptýza, tachypnoe a tachykardie."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození a smrt buňky.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Embolie."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Embolie?",
            "options": [
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)",
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l",
                  "Normální hodnota D-dimerů pro vyloučení PE je: < 500 ug/l",
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nespecifický a specifický imunitní systém.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Embolie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Vliv celkové a částečné imobilizace."
            ]
      }
]
  },
  "gen-13": {
    richContent: {
      definition: `Poruchy acidobazické rovnováhy (ABR) jsou stavy odchylky pH krve od fyziologického rozmezí vyvolané respiračními nebo metabolickými příčinami.`,
      etiology: [`Respirační acidóza: hypoventilace (CHOPN, útlum dechového centra opiáty).`, `Metabolická acidóza: akumulace H+ (ketoacidóza, laktátová acidóza) nebo ztráta HCO3- (těžké průjmy).`, `Respirační alkalóza: hyperventilace (psychogenní, hypoxie).`, `Metabolická alkalóza: ztráta H+ (zvracení) nebo nadbytek HCO3- (podání hydrogenuhličitanu).`],
      pathogenesis: [`pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.`, `Kompenzace: metabolická porucha je kompenzována plícemi (změna ventilace a pCO2 do 12-24 h); respirační porucha je kompenzována ledvinami (změna sekrece H+ a HCO3- do 3-5 dnů).`, `Korekce: odstranění primární patofyziologické příčiny (např. podání inzulínu, rehydratace).`],
      clinicalManifestation: [`Acidóza tlumí kontraktilitu myokardu a dráždivost CNS (apatie, uremické kóma), způsobuje hyperkalémii.`, `Alkalóza snižuje ionizovaný vápník v séru (vznik tetanie, křečí) a způsobuje hypokalémii.`, `Kussmaulovo dýchání (hluboké a rychlé) jako typická respirační kompenzace metabolické acidózy.`],
      diagnostics: [`Vyšetření krevních plynů (Astrup) - měření pH, pCO2, pO2, HCO3-, Base Excess (BE).`, `Výpočet aniontové mezery (Anion Gap) k diferenciální diagnostice metabolických acidóz.`, `Vyšetření iontogramu (draslík, sodík, chloridy, kalcium).`]
    },
    tableData: [
      { name: `Fyziologické pH arteriální krve`, value: `7.35 - 7.45` },
      { name: `Extrémní pH limity slučitelné se životem`, value: `6.80 - 7.80` },
      { name: `Normální hodnota pCO2`, value: `4.6 - 6.0 kPa (35-45 mmHg)` },
      { name: `Normální koncentrace HCO3-`, value: `22 - 26 mmol/l` },
      { name: `Normální Base Excess (BE)`, value: `-2 až +2 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy acidobazické rovnováhy?",
            "options": [
                  "Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV.",
                  "Poruchy acidobazické rovnováhy (ABR) jsou stavy odchylky pH krve od fyziologického rozmezí vyvolané respiračními nebo metabolickými příčinami.",
                  "Hypoglykemie je stav poklesu koncentrace glukózy v krvi pod kritickou mez, který ohrožuje energetické zásobení mozku.",
                  "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Imunopatologické reakce.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tato definice popisuje téma: Hypoglykemie.",
                  "Nesprávně. Tato definice popisuje téma: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy acidobazické rovnováhy?",
            "options": [
                  "Respirační acidóza: hypoventilace (CHOPN, útlum dechového centra opiáty).",
                  "Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).",
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.",
                  "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy acidobazické rovnováhy?",
            "options": [
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
                  "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.",
                  "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.",
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Trombóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperhydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy acidobazické rovnováhy?",
            "options": [
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Symptom je subjektivní (např. bolest) nebo objektivní (např. tachykardie) projev nemoci.",
                  "Acidóza tlumí kontraktilitu myokardu a dráždivost CNS (apatie, uremické kóma), způsobuje hyperkalémii.",
                  "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Definice nemoci a zdraví.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy acidobazické rovnováhy?",
            "options": [
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Doba pro rozvoj stabilní chronické adaptace (hypertrofie) je: týdny až měsíce",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l",
                  "Fyziologické pH arteriální krve je: 7.35 - 7.45"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Metabolická acidóza a alkalóza.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy acidobazické rovnováhy."
            ]
      }
]
  },
  "gen-14": {
    richContent: {
      definition: `DIC je získaný syndrom charakterizovaný systémovou aktivací koagulace v mikrocirkulaci, což vede k tvorbě trombů, spotřebování koagulačních faktorů a destiček, a následnému masivnímu krvácení.`,
      etiology: [`Sepse a těžké infekce (lipopolysacharid gramnegativních bakterií aktivuje monocyty).`, `Gynekologické komplikace (embolie plodové vody, abrupce placenty uvolňující tkáňový faktor).`, `Rozsáhlá traumata, popáleniny, hemolytické potransfúzní reakce a nádorová onemocnění (akutní promyelocytární leukémie).`],
      pathogenesis: [`Masivní vyplavení tkáňového faktoru (TF) do oběhu spouští vnější cestu koagulace.`, `Tvorba mikrotrombů v kapilárách vede k ischémii orgánů (selhání ledvin, nadledvin - Waterhouse-Friderichsenův syndrom).`, `Extrémní spotřeba (konzumpce) destiček, fibrinogenu a koagulačních faktorů (II, V, VIII) spolu se sekundární hyperfibrinolýzou vyvolá těžkou krvácivou diatézu.`],
      clinicalManifestation: [`Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).`, `Krvácivé stadium: difúzní krvácení z vpichů, operačních ran, sliznic, petechie a sufúze.`, `Rozvoj refrakterního šoku v důsledku mikroangiopatické hemolytické anémie (MAHA) a tkáňové hypoxie.`],
      diagnostics: [`Sledování dynamiky koagulačních parametrů: pokles destiček a fibrinogenu.`, `Prodloužení koagulačních časů (Quick/INR, APTT, trombinový čas).`, `Extrémní vzestup fibrinových degradačních produktů (FDP) a D-dimerů, nález schistocytů v nátěru.`]
    },
    tableData: [
      { name: `Kritická hranice fibrinogenu u DIC`, value: `< 1.0 g/l` },
      { name: `Skóre ISTH pro zjevnou DIC`, value: `>= 5 bodů` },
      { name: `Typický pokles trombocytů u akutní DIC`, value: `< 50 - 100 x 10^9/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Diseminovaná intravaskulární koagulace (DIC)?",
            "options": [
                  "Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV.",
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
                  "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění.",
                  "DIC je získaný syndrom charakterizovaný systémovou aktivací koagulace v mikrocirkulaci, což vede k tvorbě trombů, spotřebování koagulačních faktorů a destiček, a následnému masivnímu krvácení."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Imunopatologické reakce.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tato definice popisuje téma: Geneticky podmíněné nemoci.",
                  "Správně! Toto je přesná patofyziologická definice pro: Diseminovaná intravaskulární koagulace (DIC)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Diseminovaná intravaskulární koagulace (DIC)?",
            "options": [
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
                  "Sepse a těžké infekce (lipopolysacharid gramnegativních bakterií aktivuje monocyty).",
                  "MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol).",
                  "Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalia (K+).",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nespecifický a specifický imunitní systém."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Diseminovaná intravaskulární koagulace (DIC)?",
            "options": [
                  "Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech.",
                  "Masivní vyplavení tkáňového faktoru (TF) do oběhu spouští vnější cestu koagulace.",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperglykemie.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Malnutrice."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Diseminovaná intravaskulární koagulace (DIC)?",
            "options": [
                  "RAC: somnolence, bolesti hlavy, poruchy soustředění (CO2 působí jako anestetikum), periferní vazodilatace, hyperkalémie.",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).",
                  "Úbytek hmotnosti, atrofie kosterního svalstva (sarkopenie), vymizení podkožního tuku."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Malnutrice."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Diseminovaná intravaskulární koagulace (DIC)?",
            "options": [
                  "Kritická hranice fibrinogenu u DIC je: < 1.0 g/l",
                  "Cílový LDL cholesterol u zdravých jedinců je: < 3.0 mmol/l",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)",
                  "Normální hodnota D-dimerů pro vyloučení PE je: < 500 ug/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ateroskleróza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Embolie."
            ]
      }
]
  },
  "gen-15": {
    richContent: {
      definition: `Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.`,
      etiology: [`Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.`, `Obstrukční šok mimoplicní: srdeční tamponáda (útlak komor tekutinou), tenzní pneumotorax (útlak žilního návratu).`, `Obstrukční šok plicní: masivní plicní embolie ucpávající kmen plicnice.`],
      pathogenesis: [`Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.`, `Obstrukční: mechanická překážka znemožňuje diastolické plnění komor (preload klesá na minimum) nebo blokuje ejekci (např. PE).`, `Kompenzační vazokonstrikce (aktivace sympatiku) zvyšuje afterload, což u kardiogenního šoku dále zatěžuje selhávající srdce.`],
      clinicalManifestation: [`Těžká arteriální hypotenze (MAP < 65 mmHg) refrakterní na volumoterapii.`, `Bledost, studený pot, oligurie, poruchy vědomí z hypoperfuze mozku.`, `U kardiogenního šoku: dušnost a vlhké chropky na plicích (plicní edém); u obstrukčního: distenze krčních žil (městnání před pravým srdcem).`],
      diagnostics: [`Echokardiografie (klíčová k průkazu tamponády, plicní embolie nebo dyskineze komory).`, `Pravostranná srdeční katetrizace (Swan-Ganz) pro měření tlaků (PCWP vysoký u kardiogenního šoku, nízký u mimoplicního obstrukčního šoku).`, `Měření srdečního výdeje a indexu (CI) a biochemických markerů (troponiny, BNP).`]
    },
    tableData: [
      { name: `Definiční pokles Srdečního indexu (CI) u šoku`, value: `< 2.2 l/min/m^2` },
      { name: `Tlak v plicnici v zaklínění (PCWP) u kardiogenního šoku`, value: `> 15 - 18 mmHg` },
      { name: `Kritická hodnota středního arteriálního tlaku (MAP)`, value: `< 65 mmHg` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Kardiogenní a obstrukční šok?",
            "options": [
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Hypoglykemie je stav poklesu koncentrace glukózy v krvi pod kritickou mez, který ohrožuje energetické zásobení mozku.",
                  "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů.",
                  "Správně! Toto je přesná patofyziologická definice pro: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato definice popisuje téma: Hypoglykemie.",
                  "Nesprávně. Tato definice popisuje téma: Respirační acidóza a alkalóza."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Kardiogenní a obstrukční šok?",
            "options": [
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
                  "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.",
                  "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů.",
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Edém.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Geneticky podmíněné nemoci.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Kardiogenní a obstrukční šok."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Kardiogenní a obstrukční šok?",
            "options": [
                  "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována.",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Malnutrice.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Kardiogenní a obstrukční šok?",
            "options": [
                  "Těžká arteriální hypotenze (MAP < 65 mmHg) refrakterní na volumoterapii.",
                  "Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie).",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
                  "Acidóza tlumí kontraktilitu myokardu a dráždivost CNS (apatie, uremické kóma), způsobuje hyperkalémii."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy acidobazické rovnováhy."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Kardiogenní a obstrukční šok?",
            "options": [
                  "Definiční pokles Srdečního indexu (CI) u šoku je: < 2.2 l/min/m^2",
                  "Normální Shock Index je: 0.5 - 0.7",
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2",
                  "Sérový albumin značící těžkou proteinkalorickou malnutrici je: < 25 g/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obezita.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Malnutrice."
            ]
      }
]
  },
  "gen-16": {
    richContent: {
      definition: `Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.`,
      etiology: [`Izotonická: rovnoměrná ztráta vody a soli (zvracení, průjmy, popáleniny).`, `Hypertonická: převážná ztráta čisté vody (nedostatečný příjem tekutin, profúzní pocení, diabetes insipidus, osmotická diuréza).`, `Hypotonická: ztráta sodíku převyšuje ztrátu vody (zvracení/průjmy hrazené čistou vodou bez minerálů, abúzus diuretik).`],
      pathogenesis: [`Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.`, `Hypertonická: vzestup osmolarity ECF nasává vodu z buněk (ICF) do ECF. Dochází k intracelulární dehydrataci (scvrkávání buněk, zejména neuronů).`, `Hypotonická: pokles osmolarity ECF vede k přesunu vody z ECF do buněk (ICF). Dochází k edému buněk a hypovolémii v cévách.`],
      clinicalManifestation: [`Snížený kožní turgor (kožní řasa vyhlazuje pomalu), suché sliznice, zapadlé oči.`, `Hypertonická: extrémní pocit žízně, neklid, halucinace, křeče až kóma ze scvrkávání neuronů.`, `Hypotonická: bolesti hlavy, apatie, křeče a edém mozku, vysoké riziko oběhového kolapsu (těžká hypovolémie).`],
      diagnostics: [`Měření koncentrace sodíku v séru (klíč k rozlišení typů dehydratace).`, `Stanovení sérové a močové osmolarity.`, `Sledování hematokritu a celkových bílkovin (zvýšení při hemokoncentraci).`]
    },
    tableData: [
      { name: `Normální sérová osmolarita`, value: `275 - 295 mOsm/kg` },
      { name: `Sérové natrium u hypertonické dehydratace`, value: `> 145 mmol/l` },
      { name: `Sérové natrium u hypotonické dehydratace`, value: `< 135 mmol/l` },
      { name: `Těžká dehydratace (ztráta tělesné hmotnosti)`, value: `>= 10 %` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Dehydratace?",
            "options": [
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.",
                  "Hyperhydratace je stav nadměrného množství vody v organismu. Podle koncentrace sodíku a osmolarity se dělí na izotonickou, hypertonickou a hypotonickou.",
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.",
                  "Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Dehydratace.",
                  "Nesprávně. Tato definice popisuje téma: Hyperhydratace.",
                  "Nesprávně. Tato definice popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato definice popisuje téma: Ateroskleróza."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Dehydratace?",
            "options": [
                  "Izotonická: rovnoměrná ztráta vody a soli (zvracení, průjmy, popáleniny).",
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
                  "Biologické noxy (bakterie, viry, paraziti)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Dehydratace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Dehydratace?",
            "options": [
                  "Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor).",
                  "Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie.",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Dehydratace."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Dehydratace?",
            "options": [
                  "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
                  "Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.",
                  "Snížený kožní turgor (kožní řasa vyhlazuje pomalu), suché sliznice, zapadlé oči.",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperhydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalia (K+).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Dehydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Dehydratace?",
            "options": [
                  "Normální sérová osmolarita je: 275 - 295 mOsm/kg",
                  "Normální parciální tlak kyslíku v arteriální krvi (paO2) je: 11.0 - 13.0 kPa (80-100 mmHg)",
                  "Normální Shock Index je: 0.5 - 0.7",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Dehydratace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Metabolická acidóza a alkalóza."
            ]
      }
]
  },
  "gen-17": {
    richContent: {
      definition: `Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.`,
      etiology: [`Fyziologické zdroje: mitochondriální dýchací řetězec, oxidativní vzplanutí fagocytů (likvidace mikrobů), oxid dusnatý (NO) jako vazodilatátor.`, `Patologické zdroje: záření, toxiny, zánět, hypoxie, reperfúze ischemické tkáně.`, `Příklady IRS: reperfúze myokardu po PCI (angioplastice) u infarktu, obnovení oběhu po trombolýze u CMP.`],
      pathogenesis: [`Ischémie vede k depleci ATP a hromadění hypoxantinu. Zároveň se vápník hromadí v cytosolu a aktivuje proteázy transformující xantinoxidázu.`, `Reperfúze přivádí kyslík, který xantinoxidáza využije k masivní tvorbě superoxidu (O2*-) a peroxidu vodíku (H2O2).`, `Oxidativní stres: ROS poškozují lipidy membrán (peroxidace), proteiny a DNA, což vede k otevření mitochondriálního pólu (MPTP) a apoptóze/nekróze.`],
      clinicalManifestation: [`Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).`, `Edém tkáně (např. edém mozku po rekanalizaci) doprovázený mikrovaskulárním poškozením (no-reflow fenomén).`, `Systémová zánětlivá reakce z vyplavení zánětlivých mediátorů a ROS z ischemického ložiska.`],
      diagnostics: [`Stanovení produktů lipidové peroxidace (např. malondialdehyd) v séru.`, `Laboratorní monitorování markerů tkáňového poškození po reperfúzi (vzestup kreatinkinázy, troponinu).`, `Průkaz mitochondriální dysfunkce a tkáňového edému pomocí MRI.`]
    },
    tableData: [
      { name: `Poločas vysoce reaktivního hydroxylového radikálu (OH*)`, value: `cca 10^-9 sekundy` },
      { name: `Časový limit pro reverzibilní ischémii myokardu`, value: `< 20 - 30 minut` },
      { name: `Práh ischemické tolerance neuronů (mozková kůra)`, value: `4 - 5 minut` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Reaktivní kyslíkové a dusíkové sloučeniny?",
            "options": [
                  "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.",
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
                  "Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko.",
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato definice popisuje téma: Metabolický syndrom X.",
                  "Nesprávně. Tato definice popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Reaktivní kyslíkové a dusíkové sloučeniny?",
            "options": [
                  "Fyziologické zdroje: mitochondriální dýchací řetězec, oxidativní vzplanutí fagocytů (likvidace mikrobů), oxid dusnatý (NO) jako vazodilatátor.",
                  "Akutní otravy: předávkování paracetamolem, požití metanolu (zaměněného za etanol), vdechnutí oxidu uhelnatého (CO) při požáru.",
                  "RAC: obstrukce dýchacích cest (CHOPN, těžké astma), útlum dechového centra (opiáty, benzodiazepiny), ochrnutí dechových svalů.",
                  "Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Horečka."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Reaktivní kyslíkové a dusíkové sloučeniny?",
            "options": [
                  "Ischémie vede k depleci ATP a hromadění hypoxantinu. Zároveň se vápník hromadí v cytosolu a aktivuje proteázy transformující xantinoxidázu.",
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6).",
                  "Nespecifická imunita: buněčná složka (makrofágy, neutrofily, NK buňky) využívá fagocytózu. Humorální složka (komplement) vyvolá lýzu cílů.",
                  "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy acidobazické rovnováhy."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Reaktivní kyslíkové a dusíkové sloučeniny?",
            "options": [
                  "PE: náhlá dušnost, bolest na hrudníku (pleurální charakter), kašel, hemoptýza, tachypnoe a tachykardie.",
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
                  "Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.",
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Embolie.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperglykemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypoglykemie."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Reaktivní kyslíkové a dusíkové sloučeniny?",
            "options": [
                  "Poločas vysoce reaktivního hydroxylového radikálu (OH*) je: cca 10^-9 sekundy",
                  "Intracelulární koncentrace vápníku (v klidu) je: cca 10^-7 mol/l",
                  "Kritická hranice středního arteriálního tlaku (MAP) je: < 65 mmHg",
                  "Kritická hranice fibrinogenu u DIC je: < 1.0 g/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození a smrt buňky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Diseminovaná intravaskulární koagulace (DIC)."
            ]
      }
]
  },
  "gen-18": {
    richContent: {
      definition: `Hyperhydratace je stav nadměrného množství vody v organismu. Podle koncentrace sodíku a osmolarity se dělí na izotonickou, hypertonickou a hypotonickou.`,
      etiology: [`Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody).`, `Hypertonická: pití mořské vody, infuze koncentrovaného hypertonického NaCl.`, `Hypotonická (otrava vodou): nadměrný příjem čisté vody (psychogenní polydipsie), syndrom SIADH (nadbytek ADH), renální selhání.`],
      pathogenesis: [`Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.`, `Hypertonická: vysoká osmolarita ECF nasává vodu z buněk (ICF), dochází ke scvrkávání buněk a expanzi ECF.`, `Hypotonická: nízká osmolarita ECF vede k přesunu vody do buněk, dochází k edému buněk (intracelulární hyperhydratace, edém mozku).`],
      clinicalManifestation: [`Rozvoj periferních otoků, ascitu a hydrothoraxu.`, `Městnání v plicním oběhu (dušnost, plicní edém) a arteriální hypertenze.`, `Hypotonická hyperhydratace vyvolává únavu, zvracení, křeče, somnolenci až kóma z edému mozku (intrakraniální hypertenze).`],
      diagnostics: [`Stanovení hladiny sodíku a osmolarity v séru.`, `Sledování tělesné hmotnosti (rychlý nárůst) a bilance tekutin.`, `RTG plic (známky městnání, fluidotorax) a stanovení natriuretických peptidů (BNP/NT-proBNP).`]
    },
    tableData: [
      { name: `Podíl celkové tělesné vody u dospělého muže`, value: `cca 60 % hmotnosti` },
      { name: `Kritická hranice hyponatrémie pro rozvoj edému mozku`, value: `< 120 mmol/l` },
      { name: `Sérové natrium u hypertonické hyperhydratace`, value: `> 145 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Hyperhydratace?",
            "options": [
                  "Hyperhydratace je stav nadměrného množství vody v organismu. Podle koncentrace sodíku a osmolarity se dělí na izotonickou, hypertonickou a hypotonickou.",
                  "Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.",
                  "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.",
                  "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Hyperhydratace.",
                  "Nesprávně. Tato definice popisuje téma: Hyperglykemie.",
                  "Nesprávně. Tato definice popisuje téma: Bolest.",
                  "Nesprávně. Tato definice popisuje téma: Dušnost."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Hyperhydratace?",
            "options": [
                  "Akutní otravy: předávkování paracetamolem, požití metanolu (zaměněného za etanol), vdechnutí oxidu uhelnatého (CO) při požáru.",
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Hyperhydratace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Hyperhydratace?",
            "options": [
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'.",
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
                  "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.",
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dehydratace.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Hyperhydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Hyperhydratace?",
            "options": [
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
                  "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
                  "Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.",
                  "Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Hyperhydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Imunopatologické reakce."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Hyperhydratace?",
            "options": [
                  "Podíl celkové tělesné vody u dospělého muže je: cca 60 % hmotnosti",
                  "Ischemická tolerance neuronů kůry mozku je: 4 - 5 minut",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)",
                  "Fyziologická dechová frekvence u dospělých je: 12 - 18 dechů/min"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Hyperhydratace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ischemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dušnost."
            ]
      }
]
  },
  "gen-19": {
    richContent: {
      definition: `Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.`,
      etiology: [`Pozitivní energetická bilance: dlouhodobý nadbytek energetického příjmu nad výdejem.`, `Genetické faktory (ovlivňují bazální metabolismus, pocit sytosti - např. mutace genu pro leptin).`, `Endokrinní příčiny (Cushingův syndrom, hypotyreóza) a vliv sedavého způsobu života.`],
      pathogenesis: [`Hypertrofie a hyperplázie adipocytů vede k hypoxii v tukové tkáni.`, `Dysfunkční tuková tkáň infiltrovaná makrofágy secernuje prozánětlivé adipokiny (TNF-alfa, IL-6, resistin) a klesá produkce adiponektinu.`, `Vyplavení volných mastných kyselin (FFA) a zánět blokuje inzulínové receptory v játrech a svalech, což vede k inzulínové rezistenci.`],
      clinicalManifestation: [`Metabolické: inzulínová rezistence, diabetes mellitus 2. typu, dyslipidémie (metabolický syndrom X).`, `Kardiovaskulární: arteriální hypertenze, akcelerovaná ateroskleróza, ischemická choroba srdeční.`, `Mechanické: osteoartróza nosných kloubů (kyčle, kolena), syndrom obstrukční spánkové apnoe (OSAS).`],
      diagnostics: [`Měření Body Mass Indexu (BMI) a obvodu pasu.`, `Měření tloušťky kožních řas nebo bioimpedanční analýza složení těla (podíl tuku).`, `Biochemický screening (glykémie nalačno, oGTT, lipidový profil, jaterní enzymy).`]
    },
    tableData: [
      { name: `Definice obezity 1. stupně podle BMI`, value: `30.0 - 34.9 kg/m^2` },
      { name: `Definice těžké obezity (3. stupně - morbidní) podle BMI`, value: `>= 40.0 kg/m^2` },
      { name: `Rizikový obvod pasu (kardiovaskulární riziko) u mužů`, value: `> 102 cm` },
      { name: `Rizikový obvod pasu (kardiovaskulární riziko) u žen`, value: `> 88 cm` },
      { name: `WHR (poměr pas/boky) u mužů pro androidní obezitu`, value: `> 1.0` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Obezita?",
            "options": [
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.",
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Obstipace (zácpa) je obtížné a nepravidelné vyprazdňování tuhé stolice. Průjem (diarrhea) je frekventovaný odchod neformované stolice se zvýšeným obsahem vody."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Dehydratace.",
                  "Správně! Toto je přesná patofyziologická definice pro: Obezita.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy růstu.",
                  "Nesprávně. Tato definice popisuje téma: Obstipace a průjem."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Obezita?",
            "options": [
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy.",
                  "MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol).",
                  "Pozitivní energetická bilance: dlouhodobý nadbytek energetického příjmu nad výdejem.",
                  "Změny tlaku: rychlý pokles tlaku u potápěčů (dekompresní nemoc), výbuchy (blast syndrom)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Metabolická acidóza a alkalóza.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Obezita.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Obezita?",
            "options": [
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6).",
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
                  "Hypertrofie a hyperplázie adipocytů vede k hypoxii v tukové tkáni."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dehydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Trombóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Obezita."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Obezita?",
            "options": [
                  "Metabolické: inzulínová rezistence, diabetes mellitus 2. typu, dyslipidémie (metabolický syndrom X).",
                  "Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.",
                  "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
                  "Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Obezita.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dušnost.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Obezita?",
            "options": [
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2",
                  "Teplotní práh pro aktivaci tepelných nociceptorů je: > 43 °C",
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Definice hypotermie (tělesná teplota v jádru) je: < 35 °C"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Obezita.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Bolest.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů."
            ]
      }
]
  },
  "gen-20": {
    richContent: {
      definition: `Šok je akutní, život ohrožující syndrom charakterizovaný generalizovanou hypoperfuzí tkání, která vede k deficitu kyslíku a živin v buňkách a k metabolickému rozvratu.`,
      etiology: [`Hypovolemický / Hemoragický šok (ztráta cirkulující tekutiny nebo krve).`, `Kardiogenní a obstrukční šok (selhání srdeční pumpy nebo mechanická překážka).`, `Distributivní šok: sepse, anafylaxe, neurogenní šok (generalizovaná vazodilatace).`],
      pathogenesis: [`Fáze 1: Kompenzovaný šok. Centralizace oběhu (sympatikus, RAAS) udržuje perfuzní tlak v mozku a srdci na úkor periferie.`, `Fáze 2: Dekompenzovaný šok. Přetrvávající ischemie periferie vede k akumulaci laktátu a metabolitů, což vyvolá lokální vazodilataci a pokles TK.`, `Fáze 3: Ireverzibilní šok. Těžká buněčná nekróza, poškození endotelu, rozvoj DIC a multiorgánového selhání (MODS).`],
      clinicalManifestation: [`Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.`, `Bledá, chladná a opocená kůže (výjimka u septického šoku v časné teplé fázi - vazodilatace).`, `Oligurie, poruchy vědomí (somnolence, neklid, kóma), metabolická laktátová acidóza.`],
      diagnostics: [`Kontinuální monitorování vitálních funkcí (krevní tlak, tep, dech, saturace SpO2).`, `Laboratorní vyšetření: hladina laktátu v séru (marker závažnosti), acidobazická rovnováha.`, `Invazivní hemodynamické monitorování a echokardiografie k určení typu šoku.`]
    },
    tableData: [
      { name: `Kritická hranice středního arteriálního tlaku (MAP)`, value: `< 65 mmHg` },
      { name: `Patologická hladina laktátu indikující hypoperfuzi`, value: `> 2.0 mmol/l` },
      { name: `Hodinová diuréza svědčící pro dobrou perfuzi ledvin`, value: `>= 0.5 ml/kg/hod` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Šok - definice, etiopatogeneze, rozdělení?",
            "options": [
                  "Šok je akutní, život ohrožující syndrom charakterizovaný generalizovanou hypoperfuzí tkání, která vede k deficitu kyslíku a živin v buňkách a k metabolickému rozvratu.",
                  "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.",
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.",
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato definice popisuje téma: Ischemie.",
                  "Nesprávně. Tato definice popisuje téma: Dehydratace."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Šok - definice, etiopatogeneze, rozdělení?",
            "options": [
                  "Izotonická: rovnoměrná ztráta vody a soli (zvracení, průjmy, popáleniny).",
                  "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt).",
                  "Hypovolemický / Hemoragický šok (ztráta cirkulující tekutiny nebo krve).",
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Dehydratace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ischemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperhydratace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Šok - definice, etiopatogeneze, rozdělení?",
            "options": [
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
                  "Fáze 1: Kompenzovaný šok. Centralizace oběhu (sympatikus, RAAS) udržuje perfuzní tlak v mozku a srdci na úkor periferie.",
                  "Klonální expanze mutované buňky s únikem před apoptózou a replikativní senescencí (aktivace telomerázy).",
                  "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dehydratace.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nádorové bujení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperhydratace."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Šok - definice, etiopatogeneze, rozdělení?",
            "options": [
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
                  "Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace).",
                  "Těžká arteriální hypotenze (MAP < 65 mmHg) refrakterní na volumoterapii."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Kardiogenní a obstrukční šok."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Šok - definice, etiopatogeneze, rozdělení?",
            "options": [
                  "Kritická hranice středního arteriálního tlaku (MAP) je: < 65 mmHg",
                  "Kritická hranice fibrinogenu u DIC je: < 1.0 g/l",
                  "Doba pro rozvoj stabilní chronické adaptace (hypertrofie) je: týdny až měsíce",
                  "Normální Shock Index je: 0.5 - 0.7"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok."
            ]
      }
]
  },
  "gen-21": {
    richContent: {
      definition: `Smrt buňky je konečným stádiem buněčného poškození. Apoptóza je programovaná, energeticky závislá smrt; nekróza je náhlá, pasivní smrt buněk vyvolávající zánětlivou reakci.`,
      etiology: [`Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření).`, `Imunitní reakce (útok cytotoxických T-lymfocytů) a genetické mutace.`, `Fyziologické procesy remodelace tkání (apoptóza při embryogenezi).`],
      pathogenesis: [`Reversibilní poškození: zduření buňky (hydroptická dystrofie) z důvodu mírného poklesu ATP a dysfunkce Na+/K+-ATPázy.`, `Ireversibilní poškození (bod zlomu): těžká destrukce mitochondrií (otevření MPTP), masivní influx Ca2+ do cytosolu a degradace membrán.`, `Mechanismus apoptózy: aktivace kaspáz (vnitřní cestou přes cytochrom c z mitochondrií nebo vnější přes receptory smrti), tvorba apoptotických tělísek.`],
      clinicalManifestation: [`Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest).`, `Apoptóza: buňka se scvrkává, fragmentuje, je rychle fagocytována bez rozvoje zánětlivé reakce.`, `Autofagie: přežívací strategie buňky, která při hladovění degraduje vlastní organely v lysozomech.`],
      diagnostics: [`Průkaz nitrobuněčných enzymů v séru (např. troponin u myokardu, transaminázy u jater).`, `Histologické a cytologické vyšetření (průkaz pyknózy, karyorexe a karyolýzy jader).`, `Průtoková cytometrie s barvením annexinem V (detekce časné apoptózy).`]
    },
    tableData: [
      { name: `Intracelulární koncentrace vápníku (v klidu)`, value: `cca 10^-7 mol/l` },
      { name: `Poměr koncentrace Ca2+ (extracelulární / intracelulární)`, value: `cca 10 000 : 1` },
      { name: `Poločas přežití neuronů při úplné anoxii`, value: `4 - 5 minut` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poškození a smrt buňky?",
            "options": [
                  "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.",
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
                  "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci.",
                  "Smrt buňky je konečným stádiem buněčného poškození. Apoptóza je programovaná, energeticky závislá smrt; nekróza je náhlá, pasivní smrt buněk vyvolávající zánětlivou reakci."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Dušnost.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tato definice popisuje téma: Respirační acidóza a alkalóza.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poškození a smrt buňky."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poškození a smrt buňky?",
            "options": [
                  "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů.",
                  "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.",
                  "Hyponatrémie: nadměrný příjem vody, SIADH (retence vody), ztráty sodíku ledvinami (diuretika) nebo GIT (zvracení, průjmy).",
                  "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Edém.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poškození a smrt buňky."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poškození a smrt buňky?",
            "options": [
                  "Reversibilní poškození: zduření buňky (hydroptická dystrofie) z důvodu mírného poklesu ATP a dysfunkce Na+/K+-ATPázy.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována.",
                  "Septický: lipopolysacharid nebo jiné antigeny stimulují imunocyty k produkci cytokinové bouře (TNF, IL-1). Dochází k masivní syntéze **oxidu dusnatého (NO)**, což vyvolá generalizovanou vazodilataci.",
                  "Patogeneze zkoumá mechanismy rozvoje, průběhu a zakončení patologických procesů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poškození a smrt buňky.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Malnutrice.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Definice nemoci a zdraví."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poškození a smrt buňky?",
            "options": [
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost.",
                  "Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest).",
                  "Pět klasických lokálních projevů (Celsus, Galén): **Rubor** (zarudnutí), **Calor** (horkost), **Tumor** (otok), **Dolor** (bolest), **Functio laesa** (porucha funkce).",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypoglykemie.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poškození a smrt buňky.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poškození a smrt buňky?",
            "options": [
                  "Normální hmotnost stolice u dospělého je: 100 - 200 g/den",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l",
                  "Podíl celkové tělesné vody u dospělého muže je: cca 60 % hmotnosti",
                  "Intracelulární koncentrace vápníku (v klidu) je: cca 10^-7 mol/l"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obstipace a průjem.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hyperhydratace.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poškození a smrt buňky."
            ]
      }
]
  },
  "gen-22": {
    richContent: {
      definition: `Horečka (febris) je řízená hypertermie charakterizovaná přenastavením termoregulačního centra v hypothalamu (set-point) na vyšší hodnotu působením pyrogenů.`,
      etiology: [`Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně.`, `Endogenní pyrogeny: prozánětlivé cytokiny (IL-1, IL-6, TNF-alfa) uvolněné aktivovanými imunocyty.`, `Neinfekční záněty, nekróza tkáně (infarkt), nádorová onemocnění.`],
      pathogenesis: [`Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2).`, `PGE2 zvyšuje nastavení termostatu (set-point) v hypothalamu.`, `Fáze horečky: 1. Stadium incrementi (vzestup teploty - vazokonstrikce, třesavka), 2. Stadium fastigii (plató), 3. Stadium decrementi (pokles - pocení, vazodilatace).`],
      clinicalManifestation: [`Zvýšení srdeční frekvence (tachykardie - o 10 tepů/min na každý 1 °C) a dechu, svalový třes, pocit chladu v 1. fázi, horkost a pocení ve 3. fázi.`, `Pozitivní vliv: stimulace imunity (aktivace T-buněk, fagocytózy) a inhibice replikace některých patogenů.`, `Negativní vliv: extrémní metabolická zátěž, dehydratace, u dětí riziko febrilních křečí, hyperpyrexie (> 41 °C) poškozuje mozek.`],
      diagnostics: [`Měření tělesné teploty v různých lokalizacích (axilární, tympanální, rektální - jádro).`, `Laboratorní markery zánětu (CRP, krevní obraz) k určení etiologie.`, `Mikrobiologické vyšetření (hemokultury) při podezření na sepsi.`]
    },
    tableData: [
      { name: `Subfebrilie (zvýšená teplota)`, value: `37.0 - 38.0 °C` },
      { name: `Horečka (febris)`, value: `38.0 - 41.0 °C` },
      { name: `Hyperpyrexie (život ohrožující)`, value: `> 41.0 °C` },
      { name: `Změna TF na 1 °C vzestupu teploty`, value: `+ 10 tepů/min` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Horečka?",
            "options": [
                  "Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.",
                  "Horečka (febris) je řízená hypertermie charakterizovaná přenastavením termoregulačního centra v hypothalamu (set-point) na vyšší hodnotu působením pyrogenů.",
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Hyperglykemie.",
                  "Správně! Toto je přesná patofyziologická definice pro: Horečka.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy růstu.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Horečka?",
            "options": [
                  "Kvantitativní poruchy: léze retikulární formace (ARAS) nebo obou hemisfér (úrazy hlavy, CMP, tumory), metabolické příčiny (hypoglykémie, uremie, jaterní kóma, intoxikace).",
                  "Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně.",
                  "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění).",
                  "Hypercholesterolémie, zejména zvýšená koncentrace LDL a pokles HDL v plazmě."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy vědomí.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Horečka.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ateroskleróza."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Horečka?",
            "options": [
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2).",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Horečka.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Horečka?",
            "options": [
                  "Periferní otoky: tíhové závislé otoky (kolem kotníků u chodících, nad sakrem u ležících), těstovité, po stlačení zůstává důlek (pitting).",
                  "Arteriální trombóza: akutní ischémie tkáně (infarkt myokardu, ischemická CMP, akutní ischémie končetiny).",
                  "Zvýšení srdeční frekvence (tachykardie - o 10 tepů/min na každý 1 °C) a dechu, svalový třes, pocit chladu v 1. fázi, horkost a pocení ve 3. fázi.",
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Edém.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Trombóza.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Horečka.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Reaktivní kyslíkové a dusíkové sloučeniny."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Horečka?",
            "options": [
                  "Subfebrilie (zvýšená teplota) je: 37.0 - 38.0 °C",
                  "Počet buněk v 1 gramu nádorové tkáně (detekční limit) je: cca 10^9 buněk",
                  "Intracelulární koncentrace vápníku (v klidu) je: cca 10^-7 mol/l",
                  "Normální aktivita kreatinkinázy (CK) v séru je: < 3.0 ukat/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Horečka.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nádorové bujení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození a smrt buňky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      }
]
  },
  "gen-23": {
    richContent: {
      definition: `Nádorové bujení je nekontrolovaná, autonomní proliferace buněk způsobená akumulací genetických mutací v klíčových genech regulujících buněčný cyklus.`,
      etiology: [`Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53).`, `Karcinogenní faktory: chemické (tabákový kouř), fyzikální (UV, ionizující záření), biologické (onkogeny virů - HPV, HBV).`],
      pathogenesis: [`Klonální expanze mutované buňky s únikem před apoptózou a replikativní senescencí (aktivace telomerázy).`, `Angiogeneze: nádor vylučuje VEGF k tvorbě vlastních cév, což je nutné pro růst nad 1-2 mm.`, `Metastazování: invaze přes bazální membránu (metaloproteinázy), intravazace, přežití v oběhu, extravazace a kolonizace cílového orgánu.`],
      clinicalManifestation: [`Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů.`, `Systémové: nádorová kachexie (hubnutí, ztráta svalů) indukovaná TNF-alfa a IL-6, anémie chronických chorob.`, `Paraneoplastické syndromy: syndromy vyvolané ektopickou produkcí hormonů (např. ACTH u malobuněčného karcinomu plic -> Cushing).`],
      diagnostics: [`Histopatologické a cytologické vyšetření z biopsie (jediná definitivní diagnóza).`, `Zobrazovací metody (RTG, CT, MRI, PET-CT pro staging).`, `Nádorové markery v séru (PSA, CEA, CA-125) pro monitorování průběhu.`]
    },
    tableData: [
      { name: `Počet buněk v 1 gramu nádorové tkáně (detekční limit)`, value: `cca 10^9 buněk` },
      { name: `Normální hodnota PSA v séru`, value: `< 4.0 ug/l` },
      { name: `Normální hodnota CEA u nekuřáků`, value: `< 3.0 ug/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Nádorové bujení?",
            "options": [
                  "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.",
                  "Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií.",
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
                  "Nádorové bujení je nekontrolovaná, autonomní proliferace buněk způsobená akumulací genetických mutací v klíčových genech regulujících buněčný cyklus."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato definice popisuje téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tato definice popisuje téma: Stres a všeobecný adaptační syndrom.",
                  "Správně! Toto je přesná patofyziologická definice pro: Nádorové bujení."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Nádorové bujení?",
            "options": [
                  "Nedostatečný příjem potravy (hladovění, mentální anorexie, chudoba).",
                  "Podráždění žaludeční sliznice (toxiny, alkohol, gastritida).",
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.",
                  "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Malnutrice.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Nádorové bujení?",
            "options": [
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
                  "Průnik LDL do intimy a jeho následná oxidace (oxLDL) spouští lokální zánětlivou reakci.",
                  "Klonální expanze mutované buňky s únikem před apoptózou a replikativní senescencí (aktivace telomerázy).",
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dehydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ateroskleróza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Nádorové bujení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Nádorové bujení?",
            "options": [
                  "Snížený kožní turgor (kožní řasa vyhlazuje pomalu), suché sliznice, zapadlé oči.",
                  "Septický: hypotenze refrakterní na volumoterapii (vyžaduje noradrenalin), laktát > 2 mmol/l, v časné fázi teplá, růžová kůže.",
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dehydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Nádorové bujení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Nádorové bujení?",
            "options": [
                  "Fyziologická dechová frekvence u dospělých je: 12 - 18 dechů/min",
                  "Poločas vysoce reaktivního hydroxylového radikálu (OH*) je: cca 10^-9 sekundy",
                  "Počet buněk v 1 gramu nádorové tkáně (detekční limit) je: cca 10^9 buněk",
                  "Normální lidský karyotyp (počet chromozomů) je: 46 (23 párů, z toho 22 autozomů a 2 gonozomy)"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dušnost.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Nádorové bujení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Geneticky podmíněné nemoci."
            ]
      }
]
  },
  "gen-24": {
    richContent: {
      definition: `Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.`,
      etiology: [`Nedostatečný příjem potravy (hladovění, mentální anorexie, chudoba).`, `Poruchy trávení a vstřebávání (malabsorpce, celiakie, Crohnova choroba).`, `Hyperkatabolismus při těžkých chronických zánětech, sepse, nádorových onemocněních (kachexie).`],
      pathogenesis: [`Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována.`, `Kwashiorkor (stresové hladovění): selektivní deficit bílkovin při dostatku sacharidů (nebo vlivem zánětu). Dochází k selhání proteosyntézy v játrech, poklesu albuminu a vzniku edémů.`, `Pokles energetického stavu tlumí imunitní funkce a regeneraci tkání.`],
      clinicalManifestation: [`Úbytek hmotnosti, atrofie kosterního svalstva (sarkopenie), vymizení podkožního tuku.`, `Kwashiorkor: otoky (zejména břicha - ascites), hepatomegalie (steatóza jater z chybějících apoproteinů), kožní změny.`, `Snížená hojivost ran, imunodeficit s vysokou náchylností k infekcím, svalová slabost postihující i dechové svaly.`],
      diagnostics: [`Antropometrické měření (hmotnost, BMI, obvod svalové hmoty paže).`, `Stanovení viscerálních proteinů v séru (albumin, prealbumin, transferrin).`, `Měření energetického výdeje (nepřímá kalorimetrie).`]
    },
    tableData: [
      { name: `Sérový albumin značící těžkou proteinkalorickou malnutrici`, value: `< 25 g/l` },
      { name: `BMI index pro těžkou podvýživu`, value: `< 16.0 kg/m^2` },
      { name: `Signifikantní neúmyslný úbytek hmotnosti`, value: `> 10 % za 6 měsíců` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Malnutrice?",
            "options": [
                  "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
                  "Šok je akutní, život ohrožující syndrom charakterizovaný generalizovanou hypoperfuzí tkání, která vede k deficitu kyslíku a živin v buňkách a k metabolickému rozvratu.",
                  "Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu.",
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato definice popisuje téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů.",
                  "Správně! Toto je přesná patofyziologická definice pro: Malnutrice."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Malnutrice?",
            "options": [
                  "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza.",
                  "Respirační acidóza: hypoventilace (CHOPN, útlum dechového centra opiáty).",
                  "Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).",
                  "Nedostatečný příjem potravy (hladovění, mentální anorexie, chudoba)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy růstu.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Malnutrice."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Malnutrice?",
            "options": [
                  "Kardiovaskulární: redistribuce krve z dolních končetin do hrudníku vede k poklesu baroreflexu a rozvoji ortostatické dysfunkce.",
                  "Fáze 1: Kompenzovaný šok. Centralizace oběhu (sympatikus, RAAS) udržuje perfuzní tlak v mozku a srdci na úkor periferie.",
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Geneticky podmíněné nemoci.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Malnutrice."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Malnutrice?",
            "options": [
                  "MAC: Kussmaulovo dýchání (hluboké, zrychlené), pokles kontraktility myokardu, hypotenze, somnolence až kóma, hyperkalémie.",
                  "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů.",
                  "Úbytek hmotnosti, atrofie kosterního svalstva (sarkopenie), vymizení podkožního tuku.",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nádorové bujení.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Malnutrice.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Malnutrice?",
            "options": [
                  "Normální hmotnost stolice u dospělého je: 100 - 200 g/den",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)",
                  "WHO definice zdraví je: stav kompletní fyzické, psychické a sociální pohody",
                  "Sérový albumin značící těžkou proteinkalorickou malnutrici je: < 25 g/l"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obstipace a průjem.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Definice nemoci a zdraví.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Malnutrice."
            ]
      }
]
  },
  "gen-25": {
    richContent: {
      definition: `Hypoxie je stav nedostatku kyslíku na buněčné úrovni. Hyperoxie je nadbytek kyslíku, který může vést k oxidačnímu poškození tkání.`,
      etiology: [`Hypoxická hypoxie: pokles pO2 ve vzduchu (nadmořská výška) nebo poruchy plic (ARDS, CHOPN).`, `Anemická hypoxie: pokles kyslíkové kapacity krve (anémie, otrava CO).`, `Cirkulační hypoxie: porucha dodávky krve (šok, lokální ischémie); Histotoxická hypoxie: buňka neumí O2 využít (otrava kyanidy).`, `Hyperoxie: léčba vysokými koncentracemi kyslíku (FiO2 > 50 %).`],
      pathogenesis: [`Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.`, `Při těžké hypoxii selhává mitochondriální fosforylace, klesá ATP, stoupá anaerobní glykolýza a hromadí se laktát (acidóza).`, `Hyperoxie: nadbytek kyslíku přetěžuje antioxidační systémy, což vede k masivní tvorbě ROS a peroxidaci membrán.`],
      clinicalManifestation: [`Hypoxie: tachykardie, hyperventilace, cyanóza, u chronické polyglobulie a plicní hypertenze.`, `Těžká akutní hypoxie: poruchy vědomí, křeče, edém mozku, smrt.`, `Hyperoxie: poškození plicního epitelu (plicní toxicita kyslíku), retrolentální fibroplazie u nedonošených dětí.`],
      diagnostics: [`Měření parciálních tlaků plynů v arteriální krvi (Astrup).`, `Pulzní oxymetrie (saturace hemoglobinu kyslíkem SpO2).`, `Laboratorní stanovení laktátu v séru (ukazatel buněčné hypoxie).`]
    },
    tableData: [
      { name: `Normální parciální tlak kyslíku v arteriální krvi (paO2)`, value: `11.0 - 13.0 kPa (80-100 mmHg)` },
      { name: `Definice hypoxémie (pokles paO2)`, value: `< 8.0 kPa (60 mmHg)` },
      { name: `Bezpečný limit FiO2 (frakce kyslíku) k prevenci toxicity`, value: `< 50 %` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Hypoxie a hyperoxie buňky?",
            "options": [
                  "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.",
                  "Hypoxie je stav nedostatku kyslíku na buněčné úrovni. Hyperoxie je nadbytek kyslíku, který může vést k oxidačnímu poškození tkání.",
                  "Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání.",
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Dušnost.",
                  "Správně! Toto je přesná patofyziologická definice pro: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tato definice popisuje téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato definice popisuje téma: Ischemie."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Hypoxie a hyperoxie buňky?",
            "options": [
                  "Hypoxická hypoxie: pokles pO2 ve vzduchu (nadmořská výška) nebo poruchy plic (ARDS, CHOPN).",
                  "Genetická predispozice k inzulínové rezistenci a ukládání viscerálního tuku.",
                  "Podráždění žaludeční sliznice (toxiny, alkohol, gastritida).",
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ikterus - etiopatogeneze."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Hypoxie a hyperoxie buňky?",
            "options": [
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.",
                  "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolický syndrom X.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Hypoxie a hyperoxie buňky?",
            "options": [
                  "Hypoxie: tachykardie, hyperventilace, cyanóza, u chronické polyglobulie a plicní hypertenze.",
                  "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
                  "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
                  "Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperhydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Bolest.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Hypoxie a hyperoxie buňky?",
            "options": [
                  "Normální hmotnost stolice u dospělého je: 100 - 200 g/den",
                  "Subfebrilie (zvýšená teplota) je: 37.0 - 38.0 °C",
                  "Normální parciální tlak kyslíku v arteriální krvi (paO2) je: 11.0 - 13.0 kPa (80-100 mmHg)",
                  "Cílový LDL cholesterol u zdravých jedinců je: < 3.0 mmol/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obstipace a průjem.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Horečka.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ateroskleróza."
            ]
      }
]
  },
  "gen-26": {
    richContent: {
      definition: `Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách.`,
      etiology: [`Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.`, `Snížený onkotický tlak plazmy: hypoalbuminémie u nefrotického syndromu, cirhózy jater nebo malnutrice.`, `Zvýšená propustnost kapilár (zánět, popáleniny), obstrukce lymfatických cév (lymfedém).`],
      pathogenesis: [`Starlingova rovnice popisuje filtraci tekutiny závislou na gradientech hydrostatického a onkotického tlaku.`, `Pokud filtrace převýší lymfatickou drenáž, hromadí se tekutina v interstitiu.`, `Retence sodíku a vody (aktivace RAAS při poklesu efektivního cirkulujícího objemu) dále udržuje a zhoršuje edémy.`],
      clinicalManifestation: [`Periferní otoky: tíhové závislé otoky (kolem kotníků u chodících, nad sakrem u ležících), těstovité, po stlačení zůstává důlek (pitting).`, `Plicní edém: prosakování tekutiny do alveolů způsobuje těžkou dušnost, vykašlávání růžového sputa a cyanózu.`, `Edém mozku: nitrolební hypertenze, bolesti hlavy, zvracení, bradykardie, herniace mozkového kmene.`],
      diagnostics: [`Fyzikální vyšetření (inspekce, palpace, měření obvodů končetin).`, `Stanovení celkové bílkoviny a albuminu v séru.`, `Zobrazovací metody: RTG hrudníku u edému plic, CT/MRI u edému mozku.`]
    },
    tableData: [
      { name: `Fyziologický onkotický tlak plazmatických bílkovin`, value: `25 - 28 mmHg` },
      { name: `Hydrostatický tlak na arteriálním konci kapiláry`, value: `30 - 35 mmHg` },
      { name: `Normální koncentrace albuminu v séru`, value: `35 - 50 g/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Edém?",
            "options": [
                  "Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách.",
                  "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.",
                  "DIC je získaný syndrom charakterizovaný systémovou aktivací koagulace v mikrocirkulaci, což vede k tvorbě trombů, spotřebování koagulačních faktorů a destiček, a následnému masivnímu krvácení.",
                  "Nádorové bujení je nekontrolovaná, autonomní proliferace buněk způsobená akumulací genetických mutací v klíčových genech regulujících buněčný cyklus."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Edém.",
                  "Nesprávně. Tato definice popisuje téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato definice popisuje téma: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tato definice popisuje téma: Nádorové bujení."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Edém?",
            "options": [
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
                  "Etiologie studuje bezprostřední příčiny a podmínky vzniku nemocí.",
                  "Zvýšený hydrostatický tlak v kapilárách: levostranné srdeční selhání (edém plic), žilní trombóza.",
                  "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Definice nemoci a zdraví.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Edém.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Edém?",
            "options": [
                  "Starlingova rovnice popisuje filtraci tekutiny závislou na gradientech hydrostatického a onkotického tlaku.",
                  "Obstipace: zpomalení střevní pasáže vede k nadměrné reabsorpci vody v tlustém střevě, stolice se stává suchou a tuhou.",
                  "RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.",
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Edém.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Obstipace a průjem.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolický syndrom X."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Edém?",
            "options": [
                  "Nauzea je doprovázena příznaky aktivace parasympatiku (slinění, bledost, pocení, bradykardie).",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "Periferní otoky: tíhové závislé otoky (kolem kotníků u chodících, nad sakrem u ležících), těstovité, po stlačení zůstává důlek (pitting).",
                  "Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Edém.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Obstipace a průjem."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Edém?",
            "options": [
                  "Fyziologický onkotický tlak plazmatických bílkovin je: 25 - 28 mmHg",
                  "Definiční pokles Srdečního indexu (CI) u šoku je: < 2.2 l/min/m^2",
                  "Věk pro definici předčasné puberty u dívek je: < 8. rok",
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Edém.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy růstu.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obezita."
            ]
      }
]
  },
  "gen-27": {
    richContent: {
      definition: `Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.`,
      etiology: [`Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza.`, `Poruchy puberty: předčasná puberta (nádory, idiopatická), opožděná puberta (Turnerův/Klinefelterův sy, hypogonadotropní hypogonadismus).`, `Stárnutí: zkracování telomer, akumulace somatických mutací, poškození buněk kyslíkovými radikály.`],
      pathogenesis: [`Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.`, `Předčasná puberta je aktivována předčasným uvolněním GnRH. Opožděná puberta je způsobena poruchou osy hypothalamus-hypofýza-gonády.`, `Stárnutí: Hayflickův limit omezuje dělení buněk; dochází k buněčné senescenci a ztrátě kmenových buněk.`],
      clinicalManifestation: [`Nanismus: malý vzrůst, harmonické proporce. Akromegalie: zvětšování aker (ruce, nohy, čelist), vnitřních orgánů.`, `Předčasná puberta: sekundární pohlavní znaky před 8. rokem u dívek. Opožděná: chybění sekundárních znaků po 13. roce u dívek.`, `Smrt organismu: klinická smrt (zástava dechu a oběhu, zvratná) vs. smrt mozku (ireverzibilní vymizení všech funkcí mozku).`],
      diagnostics: [`Sledování růstových a percentilových grafů, hodnocení kostního věku (RTG zápěstí).`, `Stanovení hladin hormonů (GH, IGF-1, LH, FSH, estradiol, testosteron) v séru.`, `EEG a angiografie mozkových cév pro potvrzení smrti mozku.`]
    },
    tableData: [
      { name: `Věk pro definici předčasné puberty u dívek`, value: `< 8. rok` },
      { name: `Věk pro definici opožděné puberty u dívek`, value: `> 13. rok` },
      { name: `Hayflickův limit lidských fibroblastů (počet dělení)`, value: `40 - 60 dělení` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy růstu?",
            "options": [
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Ikterus (žloutenka) je žluté zbarvení tkání (sklér, kůže) způsobené zvýšenou koncentrací bilirubinu v krvi (hyperbilirubinémií). Dělí se na prehepatální, hepatocelulární a posthepatální.",
                  "Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií.",
                  "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy růstu.",
                  "Nesprávně. Tato definice popisuje téma: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tato definice popisuje téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tato definice popisuje téma: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy růstu?",
            "options": [
                  "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza.",
                  "Respirační příčiny: bronchiální obstrukce (astma, CHOPN), restrikce (plicní fibróza, pneumotorax, zápal plic).",
                  "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53).",
                  "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy růstu.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Dušnost.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nádorové bujení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy růstu?",
            "options": [
                  "Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy růstu.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Kardiogenní a obstrukční šok."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy růstu?",
            "options": [
                  "Dekompresní nemoc: bolesti kloubů ('bends'), svědění kůže, dušnost, neurologické výpadky.",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu.",
                  "Nanismus: malý vzrůst, harmonické proporce. Akromegalie: zvětšování aker (ruce, nohy, čelist), vnitřních orgánů.",
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy růstu.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypoglykemie."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy růstu?",
            "options": [
                  "Limit pro definici hypoglykémie u diabetiků je: < 3.9 mmol/l",
                  "Podíl celkové tělesné vody u dospělého muže je: cca 60 % hmotnosti",
                  "Věk pro definici předčasné puberty u dívek je: < 8. rok",
                  "Kritérium septického šoku: laktát v séru je: > 2.0 mmol/l (i přes volumoterapii)"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoglykemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hyperhydratace.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy růstu.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Septický a anafylaktický šok."
            ]
      }
]
  },
  "gen-28": {
    richContent: {
      definition: `Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci.`,
      etiology: [`RAC: obstrukce dýchacích cest (CHOPN, těžké astma), útlum dechového centra (opiáty, benzodiazepiny), ochrnutí dechových svalů.`, `RAL: psychogenní hyperventilace (úzkost, hysterie), stimulace dechového centra hypoxií (vysoká nadmořská výška), sepse, salicyláty.`],
      pathogenesis: [`RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.`, `Ledviny kompenzují RAC zvýšeným vylučováním H+ a retencí HCO3- (tento proces však trvá 3-5 dní).`, `RAL: alveolární hyperventilace snižuje pCO2 v krvi (hypokapnie). Pokles CO2 posouvá rovnováhu ABR směrem k deficitu H+ a zvyšuje pH.`],
      clinicalManifestation: [`RAC: somnolence, bolesti hlavy, poruchy soustředění (CO2 působí jako anestetikum), periferní vazodilatace, hyperkalémie.`, `RAL: zvýšená nervosvalová dráždivost (parestézie, karpopedální spasmy) v důsledku poklesu ionizovaného vápníku (vazba na albumin při alkalóze).`, `Závratě a mžitky před očima u RAL způsobené vazokonstrikcí mozkových cév vyvolanou hypokapnií.`],
      diagnostics: [`Vyšetření acidobazické rovnováhy (Astrup): pH, pCO2 a HCO3-.`, `Sledování parametrů ventilace a kapnometrie (měření CO2 ve vydechovaném vzduchu).`, `Stanovení hladiny volného (ionizovaného) vápníku v séru u alkalózy.`]
    },
    tableData: [
      { name: `Respirační acidóza (kritéria)`, value: `pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)` },
      { name: `Respirační alkalóza (kritéria)`, value: `pH > 7.45, pCO2 < 4.6 kPa (35 mmHg)` },
      { name: `Fyziologické pCO2`, value: `4.6 - 6.0 kPa (35-45 mmHg)` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Respirační acidóza a alkalóza?",
            "options": [
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci.",
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Malnutrice.",
                  "Nesprávně. Tato definice popisuje téma: Obezita."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Respirační acidóza a alkalóza?",
            "options": [
                  "Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).",
                  "Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID).",
                  "RAC: obstrukce dýchacích cest (CHOPN, těžké astma), útlum dechového centra (opiáty, benzodiazepiny), ochrnutí dechových svalů.",
                  "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Respirační acidóza a alkalóza?",
            "options": [
                  "RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.",
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Hypertrofie a hyperplázie adipocytů vede k hypoxii v tukové tkáni.",
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Obezita.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Respirační acidóza a alkalóza?",
            "options": [
                  "RAC: somnolence, bolesti hlavy, poruchy soustředění (CO2 působí jako anestetikum), periferní vazodilatace, hyperkalémie.",
                  "Bledost, chladný pot, slabost, závratě, sucho v ústech.",
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.",
                  "Symptom je subjektivní (např. bolest) nebo objektivní (např. tachykardie) projev nemoci."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Krvácení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Definice nemoci a zdraví."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Respirační acidóza a alkalóza?",
            "options": [
                  "Normální hodnota D-dimerů pro vyloučení PE je: < 500 ug/l",
                  "Subfebrilie (zvýšená teplota) je: 37.0 - 38.0 °C",
                  "Teplotní práh pro aktivaci tepelných nociceptorů je: > 43 °C",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Embolie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Horečka.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Bolest.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Respirační acidóza a alkalóza."
            ]
      }
]
  },
  "gen-29": {
    richContent: {
      definition: `Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.`,
      etiology: [`MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol).`, `MAC s normálním Anion Gap (ztráta HCO3-): těžké průjmy, renální tubulární acidóza.`, `MAL: ztráta H+ (zvracení, odsávání žaludečního obsahu), abúzus diuretik (kličková diuretika), hyperaldosteronismus.`],
      pathogenesis: [`MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.`, `Respirační kompenzace MAC: pokles pH stimuluje chemoreceptory, což vede k hyperventilaci (vydýchání CO2, pokles pCO2).`, `MAL: ztráta H+ nebo retence HCO3- zvyšuje pH. Respirační kompenzace je omezená hypoventilací (hrozí hypoxie).`],
      clinicalManifestation: [`MAC: Kussmaulovo dýchání (hluboké, zrychlené), pokles kontraktility myokardu, hypotenze, somnolence až kóma, hyperkalémie.`, `MAL: svalová slabost, parestezie, křeče (tetanie z poklesu ionizovaného Ca2+), arytmie z hypokalémie.`, `Hypokalémie doprovází MAL, protože buňky vyměňují vnitřní H+ za vnější K+ ve snaze snížit pH plazmy.`],
      diagnostics: [`Vyšetření krevních plynů (Astrup) se zaměřením na pH, HCO3- a Base Excess.`, `Výpočet Aniontové mezery (Anion Gap = Na - Cl - HCO3) k rozlišení příčin MAC.`, `Měření koncentrace elektrolytů v séru a moči (stanovení chloridů v moči pomáhá odlišit příčiny MAL).`]
    },
    tableData: [
      { name: `Metabolická acidóza (kritéria)`, value: `pH < 7.35, HCO3- < 22 mmol/l` },
      { name: `Metabolická alkalóza (kritéria)`, value: `pH > 7.45, HCO3- > 26 mmol/l` },
      { name: `Normální rozmezí Aniontové mezery (Anion Gap)`, value: `8 - 12 mmol/l` },
      { name: `Winterův vzorec pro očekávané pCO2 u MAC`, value: `pCO2 (mmHg) = 1.5 * HCO3- + 8 (+/- 2)` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Metabolická acidóza a alkalóza?",
            "options": [
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.",
                  "Hypovolemický šok je stav kritického snížení perfuze tkání způsobený ztrátou cirkulujícího objemu krve nebo tekutin. Hemoragický šok je jeho specifická podskupina vyvolaná krvácením.",
                  "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
                  "Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato definice popisuje téma: Hypovolemický šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Edém."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Metabolická acidóza a alkalóza?",
            "options": [
                  "Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci).",
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
                  "Hypovolemický / Hemoragický šok (ztráta cirkulující tekutiny nebo krve).",
                  "MAC s vysokým Anion Gap (akumulace kyselin): laktátová acidóza (šok), ketoacidóza (diabetes, alkohol), renální selhání (retence fosfátů), otravy (metanol)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Imunopatologické reakce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Krvácení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Metabolická acidóza a alkalóza."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Metabolická acidóza a alkalóza?",
            "options": [
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.",
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Metabolická acidóza a alkalóza?",
            "options": [
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
                  "MAC: Kussmaulovo dýchání (hluboké, zrychlené), pokles kontraktility myokardu, hypotenze, somnolence až kóma, hyperkalémie.",
                  "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
                  "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Bolest.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Metabolická acidóza a alkalóza?",
            "options": [
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)",
                  "Metabolická acidóza (kritéria) je: pH < 7.35, HCO3- < 22 mmol/l",
                  "Limit pro definici hypoglykémie u diabetiků je: < 3.9 mmol/l",
                  "Glasgow Coma Scale - plné vědomí je: 15 bodů"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Vliv celkové a částečné imobilizace.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoglykemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy vědomí."
            ]
      }
]
  },
  "gen-30": {
    richContent: {
      definition: `Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.`,
      etiology: [`Nociceptivní bolest: mechanické, termické nebo chemické dráždění receptorů (nociceptorů) ve tkáních.`, `Neuropatická bolest: přímé poškození nebo onemocnění somatosenzorického nervového systému (např. diabetická neuropatie, ischias).`, `Psychogenní bolest bez zjevného organického podkladu, související s psychickými poruchami.`],
      pathogenesis: [`Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.`, `Transmise: vedení vzruchu A-delta vlákny (rychlé, myelinizované, ostrá bolest) a C vlákny (pomalé, nemyelinizované, tupá bolest) do zadních rohů míšních a spinotalamickou dráhou do thalamu a kůry.`, `Modulace: ovlivnění přenosu bolesti v míše sestupnými inhibičními dráhami (využívají endorfiny, serotonin, noradrenalin).`],
      clinicalManifestation: [`Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).`, `Chronická bolest (trvající > 3-6 měsíců): deprese, poruchy spánku, sociální izolace, chybí sympatikotonie.`, `Alodynie (bolestivý vjem na normálně nebolestivý podnět - např. dotek) a hyperalgézie (nadměrná bolestivost).`],
      diagnostics: [`Hodnocení intenzity bolesti pomocí vizuální analogové škály (VAS 0-10) nebo numerické stupnice.`, `Neurologické vyšetření k rozlišení nociceptivní a neuropatické bolesti (testování citlivosti).`, `Lokalizace a analýza charakteru bolesti (ostrá, tupá, bodavá, vyzařující).`]
    },
    tableData: [
      { name: `Teplotní práh pro aktivaci tepelných nociceptorů`, value: `> 43 °C` },
      { name: `Rychlost vedení vzruchu A-delta vlákny (ostrá bolest)`, value: `5 - 30 m/s` },
      { name: `Rychlost vedení vzruchu C vlákny (pomalá bolest)`, value: `0.5 - 2 m/s` },
      { name: `Škála VAS (závažná nesnesitelná bolest)`, value: `>= 7 - 10` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Bolest?",
            "options": [
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
                  "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.",
                  "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů.",
                  "Správně! Toto je přesná patofyziologická definice pro: Bolest.",
                  "Nesprávně. Tato definice popisuje téma: Reaktivní kyslíkové a dusíkové sloučeniny."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Bolest?",
            "options": [
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).",
                  "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).",
                  "Nociceptivní bolest: mechanické, termické nebo chemické dráždění receptorů (nociceptorů) ve tkáních."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypovolemický šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Bolest."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Bolest?",
            "options": [
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Septický: lipopolysacharid nebo jiné antigeny stimulují imunocyty k produkci cytokinové bouře (TNF, IL-1). Dochází k masivní syntéze **oxidu dusnatého (NO)**, což vyvolá generalizovanou vazodilataci.",
                  "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.",
                  "Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Septický a anafylaktický šok.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Bolest.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Lokální zánětová odpověď."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Bolest?",
            "options": [
                  "Metabolické: inzulínová rezistence, diabetes mellitus 2. typu, dyslipidémie (metabolický syndrom X).",
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
                  "Downův syndrom: mentální retardace, typický vzhled (mongoloidní oční štěrbiny, epikantus), vrozené srdeční vady."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Obezita.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Bolest.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Bolest?",
            "options": [
                  "Ischemická tolerance neuronů kůry mozku je: 4 - 5 minut",
                  "Teplotní práh pro aktivaci tepelných nociceptorů je: > 43 °C",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l",
                  "Poločas vysoce reaktivního hydroxylového radikálu (OH*) je: cca 10^-9 sekundy"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ischemie.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Bolest.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Reaktivní kyslíkové a dusíkové sloučeniny."
            ]
      }
]
  },
  "gen-31": {
    richContent: {
      definition: `Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.`,
      etiology: [`Respirační příčiny: bronchiální obstrukce (astma, CHOPN), restrikce (plicní fibróza, pneumotorax, zápal plic).`, `Kardiovaskulární příčiny: levostranné srdeční selhání (plicní městnání), plicní embolie, chlopenní vady.`, `Jiné: těžká anémie (nedostatek nosičů O2), metabolická acidóza (stimulace H+), psychogenní (úzkost).`],
      pathogenesis: [`Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.`, `Mechanoreceptory v plicích a dýchacích svalech (stretch receptory, J-receptory) signalizují nadměrné úsilí nebo napětí.`, `Kortex vnímá nepoměr mezi motorickým povelem k dýchání a mechanickou odpovědí hrudníku.`],
      clinicalManifestation: [`Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).`, `Ortopnoe: dušnost vleže, která nutí pacienta se posadit (typické pro levostranné srdeční selhání).`, `Následky: vyčerpání dechových svalů, rozvoj hypoxémie a respirační acidózy, úzkost až panika.`],
      diagnostics: [`Kvantifikace dušnosti pomocí škály NYHA (u kardiaků) nebo mMRC (u plicních nemocí).`, `Vyšetření krevních plynů a pulzní oxymetrie.`, `Spirometrie k průkazu ventilační poruchy a RTG hrudníku.`]
    },
    tableData: [
      { name: `Fyziologická dechová frekvence u dospělých`, value: `12 - 18 dechů/min` },
      { name: `Definice tachypnoe (zrychlené dýchání)`, value: `> 20 dechů/min` },
      { name: `NYHA třída IV (dušnost)`, value: `přítomna při minimální aktivitě nebo v klidu` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Dušnost?",
            "options": [
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.",
                  "Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.",
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Dušnost.",
                  "Nesprávně. Tato definice popisuje téma: Nauzea, zvracení.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Dušnost?",
            "options": [
                  "Respirační příčiny: bronchiální obstrukce (astma, CHOPN), restrikce (plicní fibróza, pneumotorax, zápal plic).",
                  "Hemoragický šok: zevní nebo vnitřní krvácení (trauma, prasklé varixy, gastrointestinální vředy).",
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "Virchowova triáda: poškození endotelu, zpomalení toku krve (stagnace), hyperkoagulační stav (trombofilie)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Dušnost.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypovolemický šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Trombóza."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Dušnost?",
            "options": [
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
                  "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.",
                  "Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Dušnost.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Bolest.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Dušnost?",
            "options": [
                  "Sideropenie: únava, bledost, vypadávání vlasů, lámavost nehtů (koilonychie), pálení jazyka (glositida), mikrocytární anémie.",
                  "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
                  "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Dušnost.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperhydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Dušnost?",
            "options": [
                  "Fyziologická dechová frekvence u dospělých je: 12 - 18 dechů/min",
                  "Doba nástupu akutní cévní fáze lokálního zánětu je: sekundy až minuty",
                  "Respirační acidóza (kritéria) je: pH < 7.35, pCO2 > 6.0 kPa (45 mmHg)",
                  "Referenční rozmezí draslíku v séru je: 3.5 - 5.1 mmol/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Dušnost.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Lokální zánětová odpověď.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance kalia (K+)."
            ]
      }
]
  },
  "gen-32": {
    richContent: {
      definition: `Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií.`,
      etiology: [`Septický šok: těžká infekce (bakteriální, virová, plísňová) s dysregulovanou odpovědí hostitele a perzistentní hypotenzí.`, `Anafylaktický šok: těžká IgE-mediovaná alergická reakce typu I na cizorodou látku (včelí jed, léky, ořechy).`, `Masivní degranulace žírných buněk a basofilů.`],
      pathogenesis: [`Septický: lipopolysacharid nebo jiné antigeny stimulují imunocyty k produkci cytokinové bouře (TNF, IL-1). Dochází k masivní syntéze **oxidu dusnatého (NO)**, což vyvolá generalizovanou vazodilataci.`, `Anafylaktický: systémové uvolnění **histaminu** a leukotrienů způsobuje vazodilataci arterií, konstrikci venul a prudký vzestup kapilární propustnosti.`, `Únik tekutiny do interstitia snižuje efektivní cirkulující objem krve a poškozuje tkáňovou perfuzi.`],
      clinicalManifestation: [`Septický: hypotenze refrakterní na volumoterapii (vyžaduje noradrenalin), laktát > 2 mmol/l, v časné fázi teplá, růžová kůže.`, `Anafylaktický: prudký pokles TK, tachykardie, bronchospasmus (dušnost, hvízdot), edém hrtanu (stridor), kopřivka a svědění.`, `Následky: tkáňová hypoxie, těžká acidóza, DIC a multiorgánové selhání (MODS).`],
      diagnostics: [`Laboratorní markery sepse (CRP, prokalcitonin, hemokultury) a stanovení sérového laktátu.`, `Sledování hemodynamických parametrů (pokles systémové cévní rezistence - SVR).`, `Měření hladiny tryptázy v séru (potvrzení degranulace mastocytů u anafylaxe).`]
    },
    tableData: [
      { name: `Kritérium septického šoku: laktát v séru`, value: `> 2.0 mmol/l (i přes volumoterapii)` },
      { name: `Target MAP při léčbě vazopresory u septického šoku`, value: `>= 65 mmHg` },
      { name: `Časový rozvoj anafylaktického šoku`, value: `sekundy až desítky minut od kontaktu` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Septický a anafylaktický šok?",
            "options": [
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny.",
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
                  "Septický a anafylaktický šok jsou formy distributivního šoku charakterizované těžkou ztrátou systémového cévního odporu (vazodilatací) a relativní hypovolémií."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato definice popisuje téma: Ateroskleróza.",
                  "Nesprávně. Tato definice popisuje téma: Stres a všeobecný adaptační syndrom.",
                  "Správně! Toto je přesná patofyziologická definice pro: Septický a anafylaktický šok."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Septický a anafylaktický šok?",
            "options": [
                  "Septický šok: těžká infekce (bakteriální, virová, plísňová) s dysregulovanou odpovědí hostitele a perzistentní hypotenzí.",
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
                  "Změny tlaku: rychlý pokles tlaku u potápěčů (dekompresní nemoc), výbuchy (blast syndrom).",
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Krvácení."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Septický a anafylaktický šok?",
            "options": [
                  "Septický: lipopolysacharid nebo jiné antigeny stimulují imunocyty k produkci cytokinové bouře (TNF, IL-1). Dochází k masivní syntéze **oxidu dusnatého (NO)**, což vyvolá generalizovanou vazodilataci.",
                  "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.",
                  "Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.",
                  "Osmolarita ECF je přísně regulována **ADH** (voda) a **aldosteronem** (sodík) přes osmoreceptory hypothalamu."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperhydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Embolie.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Septický a anafylaktický šok?",
            "options": [
                  "Septický: hypotenze refrakterní na volumoterapii (vyžaduje noradrenalin), laktát > 2 mmol/l, v časné fázi teplá, růžová kůže.",
                  "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
                  "Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility.",
                  "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dušnost.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Septický a anafylaktický šok?",
            "options": [
                  "Kritérium septického šoku: laktát v séru je: > 2.0 mmol/l (i přes volumoterapii)",
                  "Definice hypotermie (tělesná teplota v jádru) je: < 35 °C",
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)",
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Septický a anafylaktický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Vliv celkové a částečné imobilizace."
            ]
      }
]
  },
  "gen-33": {
    richContent: {
      definition: `Obstipace (zácpa) je obtížné a nepravidelné vyprazdňování tuhé stolice. Průjem (diarrhea) je frekventovaný odchod neformované stolice se zvýšeným obsahem vody.`,
      etiology: [`Obstipace: nedostatek vlákniny a tekutin, snížená fyzická aktivita, hypokalémie, hypotyreóza, mechanická překážka (nádor).`, `Průjem: infekce (salmonelóza, rotaviry), malabsorpce (celiakie), zánětlivé střevní nemoci (IBD).`, `Pseudomembranózní kolitida: přemnožení *Clostridioides difficile* po léčbě širokospektrými antibiotiky.`, `Syndrom dráždivého tračníku (IBS): funkční porucha motility a viscerální hypersenzitivity.`],
      pathogenesis: [`Obstipace: zpomalení střevní pasáže vede k nadměrné reabsorpci vody v tlustém střevě, stolice se stává suchou a tuhou.`, `Osmotický průjem: nevstřebané osmoticky aktivní látky (např. laktóza při deficitu laktázy) stahují vodu do lumen střeva.`, `Sekretorický průjem: toxiny (např. cholera) stimulují enterocyty k aktivní sekreci Cl- a vody do střeva (velké objemy).`, `Pseudomembranózní kolitida: clostridiové toxiny A a B poškozují enterocyty, vzniká fibrinový exsudát s tvorbou pablán.`],
      clinicalManifestation: [`Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů.`, `Průjem: dehydratace, elektrolytový rozvrat (ztráty K+ a HCO3- vedou k hypokalémii a metabolické acidóze).`, `Pseudomembranózní kolitida: profúzní, páchnoucí průjmy, horečky, leukocytóza, riziko toxického megakolon.`],
      diagnostics: [`Mikrobiologické vyšetření stolice (kultivace, průkaz toxinů Clostridioides difficile).`, `Stanovení osmotického gapu stolice (rozlišení osmotického a sekretorického průjmu).`, `Kolonoskopie (odhalení pablán u clostridiové kolitidy, organických změn).`]
    },
    tableData: [
      { name: `Normální hmotnost stolice u dospělého`, value: `100 - 200 g/den` },
      { name: `Definice průjmu: frekvence a konzistence`, value: `>= 3 neformované stolice za den` },
      { name: `Osmotická mezera stolice u osmotického průjmu`, value: `> 125 mOsm/kg` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Obstipace a průjem?",
            "options": [
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
                  "Edém (otok) je nadměrné hromadění tekutiny v intersticiálním prostoru. Vzniká narušením rovnováhy sil regulujících filtraci a resorpci v kapilárách.",
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
                  "Obstipace (zácpa) je obtížné a nepravidelné vyprazdňování tuhé stolice. Průjem (diarrhea) je frekventovaný odchod neformované stolice se zvýšeným obsahem vody."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato definice popisuje téma: Edém.",
                  "Nesprávně. Tato definice popisuje téma: Obezita.",
                  "Správně! Toto je přesná patofyziologická definice pro: Obstipace a průjem."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Obstipace a průjem?",
            "options": [
                  "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření).",
                  "Obstipace: nedostatek vlákniny a tekutin, snížená fyzická aktivita, hypokalémie, hypotyreóza, mechanická překážka (nádor).",
                  "Fyziologické zdroje: mitochondriální dýchací řetězec, oxidativní vzplanutí fagocytů (likvidace mikrobů), oxid dusnatý (NO) jako vazodilatátor.",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození a smrt buňky.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Obstipace a průjem.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Obstipace a průjem?",
            "options": [
                  "Paracetamol: při předávkování dochází k vyčerpání glutathionu v játrech, hromadí se toxický metabolit NAPQI, který vyvolá masivní nekrózu hepatocytů.",
                  "Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).",
                  "Obstipace: zpomalení střevní pasáže vede k nadměrné reabsorpci vody v tlustém střevě, stolice se stává suchou a tuhou.",
                  "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Obstipace a průjem.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Bolest."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Obstipace a průjem?",
            "options": [
                  "Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů.",
                  "Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.",
                  "Úbytek hmotnosti, atrofie kosterního svalstva (sarkopenie), vymizení podkožního tuku.",
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Obstipace a průjem.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Malnutrice.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy vědomí."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Obstipace a průjem?",
            "options": [
                  "Normální aktivita kreatinkinázy (CK) v séru je: < 3.0 ukat/l",
                  "Normální hmotnost stolice u dospělého je: 100 - 200 g/den",
                  "Kritická hranice fibrinogenu u DIC je: < 1.0 g/l",
                  "Normální počet trombocytů v krvi je: 150 - 450 x 10^9/l"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Obstipace a průjem.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Trombóza."
            ]
      }
]
  },
  "gen-34": {
    richContent: {
      definition: `Poruchy metabolismu železa zahrnují jeho nedostatek (sideropenie) vedoucí k anémii, nebo nadbytek (hemochromatóza) způsobující toxické poškození tkání.`,
      etiology: [`Deficit železa (sideropenie): chronické ztráty krve (silná menstruace, GIT krvácení), nedostatečný příjem, poruchy vstřebávání (celiakie).`, `Nadbytek železa (hemochromatóza): primární dědičná porucha (mutace genu HFE s chyběním hepcidinu), opakované krevní transfúze.`],
      pathogenesis: [`Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie.`, `Regulace: **hepcidin** (produkovaný játry) blokuje ferroportin a tlumí vstřebávání železa ze střeva při zánětu (anémie chronických chorob).`, `Nadbytek: nadbytek železa se ukládá ve tkáních jako hemosiderin, stimuluje tvorbu hydroxyl radikálu (Fentonova reakce) a vyvolá fibrózu.`],
      clinicalManifestation: [`Sideropenie: únava, bledost, vypadávání vlasů, lámavost nehtů (koilonychie), pálení jazyka (glositida), mikrocytární anémie.`, `Hemochromatóza: bronzový diabetes (pigmentace kůže + poškození slinivky), jaterní cirhóza, kardiomyopatie (selhání srdce).`],
      diagnostics: [`Stanovení sérového železa, vazebné kapacity (TIBC) a saturace transferrinu.`, `Měření sérového **ferritinu** (nejlepší ukazatel zásob železa v těle).`, `Krevní obraz (mikrocytární hypochromní anémie: nízké MCV a MCH, vysoké RDW).`]
    },
    tableData: [
      { name: `Celkové zásoby železa v lidském těle`, value: `3 - 4 gramy` },
      { name: `Sérový ferritin svědčící pro absolutní sideropenii`, value: `< 12 - 15 ug/l` },
      { name: `Normální saturace transferrinu železem`, value: `20 - 45 %` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy metabolismu železa (Fe2+/Fe3+)?",
            "options": [
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
                  "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
                  "Poruchy metabolismu železa zahrnují jeho nedostatek (sideropenie) vedoucí k anémii, nebo nadbytek (hemochromatóza) způsobující toxické poškození tkání.",
                  "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Obezita.",
                  "Nesprávně. Tato definice popisuje téma: Metabolická acidóza a alkalóza.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tato definice popisuje téma: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy metabolismu železa (Fe2+/Fe3+)?",
            "options": [
                  "Biologické noxy (bakterie, viry, paraziti).",
                  "Deficit železa (sideropenie): chronické ztráty krve (silná menstruace, GIT krvácení), nedostatečný příjem, poruchy vstřebávání (celiakie).",
                  "Izotonická: rovnoměrná ztráta vody a soli (zvracení, průjmy, popáleniny).",
                  "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Dehydratace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ischemie."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy metabolismu železa (Fe2+/Fe3+)?",
            "options": [
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Fáze 1: Poplachová reakce. Okamžitá aktivace osy sympatikus-dřeň nadledvin s uvolněním katecholaminů (adrenalin, noradreanalin). Reakce 'boj nebo útěk'.",
                  "Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie.",
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Stres a všeobecný adaptační syndrom.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy metabolismu železa (Fe2+/Fe3+)?",
            "options": [
                  "Sideropenie: únava, bledost, vypadávání vlasů, lámavost nehtů (koilonychie), pálení jazyka (glositida), mikrocytární anémie.",
                  "Teplotní nestabilita (horečka > 38 °C nebo podchlazení < 36 °C).",
                  "Nauzea je doprovázena příznaky aktivace parasympatiku (slinění, bledost, pocení, bradykardie).",
                  "Typ I: alergická rýma, astma, kopřivka, anafylaktický šok (systémová vazodilatace)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Imunopatologické reakce."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy metabolismu železa (Fe2+/Fe3+)?",
            "options": [
                  "Celkové zásoby železa v lidském těle je: 3 - 4 gramy",
                  "Doba pro rozvoj stabilní chronické adaptace (hypertrofie) je: týdny až měsíce",
                  "Normální hmotnost stolice u dospělého je: 100 - 200 g/den",
                  "Podíl celkové tělesné vody u dospělého muže je: cca 60 % hmotnosti"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obstipace a průjem.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hyperhydratace."
            ]
      }
]
  },
  "gen-35": {
    richContent: {
      definition: `Ikterus (žloutenka) je žluté zbarvení tkání (sklér, kůže) způsobené zvýšenou koncentrací bilirubinu v krvi (hyperbilirubinémií). Dělí se na prehepatální, hepatocelulární a posthepatální.`,
      etiology: [`Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).`, `Hepatocelulární (jaterní): poškození jaterních buněk (virové hepatitidy, toxické poškození alkoholem, paracetamolem, cirhóza).`, `Posthepatální (obstrukční): překážka odtoku žluči (cholecystolitiáza, karcinom hlavy pankreatu).`],
      pathogenesis: [`Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí.`, `Hepatocelulární: poškozena konjugace i sekrece. Stoupá konjugovaný i nekonjugovaný bilirubin, v moči nacházíme bilirubin (tmavá moč).`, `Posthepatální: žluč nemůže odtékat do střeva. Konjugovaný bilirubin se vrací do krve, je filtrován ledvinami (tmavá moč), stolice je acholická (světlá/šedá) kvůli chybění sterkobilinu.`],
      clinicalManifestation: [`Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.`, `Tmavá moč (přítomnost konjugovaného bilirubinu) a světlá, acholická stolice u obstrukčního ikteru.`, `Prehepatální: normální barva moči (acholurie), tmavá stolice (více sterkobilinogenu), splenomegalie.`],
      diagnostics: [`Stanovení celkového, konjugovaného (přímého) a nekonjugovaného (nepřímého) bilirubinu v séru.`, `Průkaz bilirubinu a urobilinogenu v moči chemickým proužkem.`, `Ultrasonografie břicha k posouzení šíře žlučovodů (dilatace ukazuje na posthepatální překážku).`]
    },
    tableData: [
      { name: `Fyziologický celkový bilirubin v séru`, value: `3 - 20 umol/l` },
      { name: `Subikterus (zbarvení pouze sklér)`, value: `> 30 - 40 umol/l` },
      { name: `Ikterus (zřetelné zbarvení kůže)`, value: `> 50 umol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Ikterus - etiopatogeneze?",
            "options": [
                  "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.",
                  "Ikterus (žloutenka) je žluté zbarvení tkání (sklér, kůže) způsobené zvýšenou koncentrací bilirubinu v krvi (hyperbilirubinémií). Dělí se na prehepatální, hepatocelulární a posthepatální.",
                  "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů.",
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Bolest.",
                  "Správně! Toto je přesná patofyziologická definice pro: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tato definice popisuje téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato definice popisuje téma: Dehydratace."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Ikterus - etiopatogeneze?",
            "options": [
                  "Obstipace: nedostatek vlákniny a tekutin, snížená fyzická aktivita, hypokalémie, hypotyreóza, mechanická překážka (nádor).",
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
                  "Biologické noxy (bakterie, viry, paraziti)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Obstipace a průjem.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Ikterus - etiopatogeneze?",
            "options": [
                  "Obstipace: zpomalení střevní pasáže vede k nadměrné reabsorpci vody v tlustém střevě, stolice se stává suchou a tuhou.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí.",
                  "Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Obstipace a průjem.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Horečka."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Ikterus - etiopatogeneze?",
            "options": [
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
                  "Abdominální (viscerální) obezita (postava typu jablka).",
                  "Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.",
                  "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolický syndrom X.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Ikterus - etiopatogeneze?",
            "options": [
                  "Fyziologický celkový bilirubin v séru je: 3 - 20 umol/l",
                  "Referenční rozmezí celkového kalcia v séru je: 2.2 - 2.6 mmol/l",
                  "Počet buněk v 1 gramu nádorové tkáně (detekční limit) je: cca 10^9 buněk",
                  "Fyziologická dechová frekvence u dospělých je: 12 - 18 dechů/min"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nádorové bujení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dušnost."
            ]
      }
]
  },
  "gen-36": {
    richContent: {
      definition: `Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.`,
      etiology: [`Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění).`, `Hyperkalcémie: primární hyperparatyreóza (adenom), kostní metastázy (osteolýza), intoxikace vitaminem D.`, `Hyperfosfatémie: selhání ledvin; Hypofosfatémie: malabsorpce, chronický alkoholismus.`],
      pathogenesis: [`Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).`, `Hypokalcémie zvyšuje propustnost membrán pro sodík, což usnadňuje vznik akčních potenciálů a vyvolá nervosvalovou dráždivost.`, `Hyperkalcémie snižuje propustnost pro sodík, stabilizuje membrány a tlumí dráždivost tkání.`],
      clinicalManifestation: [`Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu.`, `Hyperkalcémie: svalová slabost, zácpa, nevolnost, peptické vředy (vápník stimuluje gastrin), nefrolitiáza, poruchy rytmu.`, `Následky hyperfosfatémie: kalcifikace měkkých tkání a cév, zhoršení renální osteodystrofie.`],
      diagnostics: [`Měření celkového a volného (ionizovaného) kalcia a fosfátů v séru.`, `Stanovení parathormonu (PTH) a metabolitů vitaminu D v séru.`, `Elektrokardiografie (EKG) k detekci prodloužení (hypokalcémie) nebo zkrácení (hyperkalcémie) intervalu QT.`]
    },
    tableData: [
      { name: `Referenční rozmezí celkového kalcia v séru`, value: `2.2 - 2.6 mmol/l` },
      { name: `Referenční rozmezí ionizovaného kalcia (aktivní frakce)`, value: `1.1 - 1.3 mmol/l` },
      { name: `Normální hladina fosfátů v séru dospělých`, value: `0.8 - 1.5 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů?",
            "options": [
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
                  "Poruchy acidobazické rovnováhy (ABR) jsou stavy odchylky pH krve od fyziologického rozmezí vyvolané respiračními nebo metabolickými příčinami.",
                  "Smrt buňky je konečným stádiem buněčného poškození. Apoptóza je programovaná, energeticky závislá smrt; nekróza je náhlá, pasivní smrt buněk vyvolávající zánětlivou reakci.",
                  "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tato definice popisuje téma: Poškození a smrt buňky.",
                  "Nesprávně. Tato definice popisuje téma: Bolest."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů?",
            "options": [
                  "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění).",
                  "Kardiogenní šok: akutní infarkt myokardu (ztráta > 40 % masy LK), myokarditida, akutní chlopenní vady.",
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin).",
                  "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy růstu."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy bilance kalcia (Ca2+) a fosfátů?",
            "options": [
                  "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.",
                  "Regulace: pokles Ca2+ stimuluje sekreci **PTH**. PTH zvyšuje uvolňování Ca2+ z kostí, reabsorpci Ca2+ v ledvinách a vylučování fosfátů (fosfaturie).",
                  "Paracetamol: při předávkování dochází k vyčerpání glutathionu v játrech, hromadí se toxický metabolit NAPQI, který vyvolá masivní nekrózu hepatocytů.",
                  "Akutní fáze: tělo reaguje rychlými, funkčními mechanismy (aktivace sympatiku, hyperventilace). Často nestačí plně kompenzovat těžké léze."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hypoxie a hyperoxie buňky.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů?",
            "options": [
                  "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku.",
                  "Časté, neobvyklé nebo na léčbu refrakterní infekce (pneumonie, sinusitidy, oportunní infekce u HIV).",
                  "Hypokalcémie: **tetanie** (pocity brnění, karpopedální spasmy - porodnická ruka, laryngospasmus), Chvostkův a Trousseauův příznak, prodloužení QT intervalu.",
                  "Obstipace: bolesti břicha, nadýmání, pocit neúplného vyprázdnění, riziko vzniku hemoroidů a divertiklů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Obstipace a průjem."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů?",
            "options": [
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)",
                  "Teplotní práh pro aktivaci tepelných nociceptorů je: > 43 °C",
                  "Celkové zásoby železa v lidském těle je: 3 - 4 gramy",
                  "Referenční rozmezí celkového kalcia v séru je: 2.2 - 2.6 mmol/l"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Bolest.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy bilance kalcia (Ca2+) a fosfátů."
            ]
      }
]
  },
  "gen-37": {
    richContent: {
      definition: `Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů.`,
      etiology: [`Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).`, `Gramnegativní (endotoxin) i grampozitivní (peptidoglykany, superantigeny) bakterie, viry, plísně.`, `Neadekvátní nebo opožděná léčba výchozí lokální infekce.`],
      pathogenesis: [`Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6).`, `Generalizovaná endoteliální dysfunkce vyvolá mikrovaskulární únik tekutin, aktivaci koagulace (mikrotrombózu) a masivní vasodilataci.`, `Mitochondriální dysfunkce (tzv. buněčná hibernace): buňky neumí využít kyslík ani při jeho dostatečné nabídce, což vede k MODS.`],
      clinicalManifestation: [`Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.`, `MODS: selhání ledvin (AKI s oligurií), plic (ARDS s těžkou hypoxémií), jater (ikterus, koagulopatie), oběhové selhání (septický šok).`, `Změna mentálního stavu (sepsí asociovaná encefalopatie - zmatenost, delérium).`],
      diagnostics: [`Použití skórovacích systémů **SOFA** (hodnotí respiraci, koagulaci, játra, oběh, CNS a ledviny) a rychlého screeningového **qSOFA**.`, `Mikrobiologický průkaz patogena (opakované odběry hemokultur) a stanovení zánětlivých markerů (CRP, prokalcitonin).`, `Měření laktátu k detekci buněčné hypoperfuze.`]
    },
    tableData: [
      { name: `qSOFA kritéria (vzestup o >= 2 body značí riziko)`, value: `DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg` },
      { name: `Definice sepse: změna celkového skóre SOFA`, value: `vzestup o >= 2 body v důsledku infekce` },
      { name: `Letalita u rozvinutého syndromu MODS (>= 4 orgány)`, value: `> 80 - 100 %` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Sepse, syndrom multiorgánové dysfunkce (MODS)?",
            "options": [
                  "Imunopatologická reakce je nepřiměřená nebo poškozující reakce imunitního systému na cizorodý nebo vlastní antigen. Klasifikuje se podle Coombse a Gella na typy I až IV.",
                  "Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.",
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Imunopatologické reakce.",
                  "Nesprávně. Tato definice popisuje téma: Nauzea, zvracení.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy růstu.",
                  "Správně! Toto je přesná patofyziologická definice pro: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS)?",
            "options": [
                  "Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně.",
                  "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).",
                  "Kvantitativní poruchy: léze retikulární formace (ARAS) nebo obou hemisfér (úrazy hlavy, CMP, tumory), metabolické příčiny (hypoglykémie, uremie, jaterní kóma, intoxikace).",
                  "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Horečka.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy vědomí.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Sepse, syndrom multiorgánové dysfunkce (MODS)?",
            "options": [
                  "Systémové vyplavení PAMPs a DAMPs aktivuje imunocyty k uvolnění cytokinové bouře (TNF-alfa, IL-1, IL-6).",
                  "Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech.",
                  "Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2).",
                  "Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperglykemie.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Horečka.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ikterus - etiopatogeneze."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS)?",
            "options": [
                  "Hypokalémie: svalová slabost, parestezie, zácpa až paralytický ileus, prodloužení QT intervalu a komorové arytmie.",
                  "Žluté zbarvení sklér a kůže. Svědění kůže (pruritus) z hromadění žlučových kyselin v podkoží.",
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance kalia (K+).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy vědomí.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS)."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS)?",
            "options": [
                  "Definiční pokles Srdečního indexu (CI) u šoku je: < 2.2 l/min/m^2",
                  "Limit pro definici hypoglykémie u diabetiků je: < 3.9 mmol/l",
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Ranní referenční hladina kortizolu v séru je: 140 - 690 nmol/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoglykemie.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Stres a všeobecný adaptační syndrom."
            ]
      }
]
  },
  "gen-38": {
    richContent: {
      definition: `Krvácení (hemoragie) je únik krve z cévního řečiště mimo cévní prostor. Může být vnitřní, vnější, traumatické či netraumatické.`,
      etiology: [`Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).`, `Patologické procesy narušující stěnu cévy (ruptura aneuryzmatu, arrosivní krvácení u peptického vředu či nádoru).`, `Poruchy hemokoagulace (hemofilie, trombocytopenie, předávkování antikoagulancii).`],
      pathogenesis: [`Ztráta krve snižuje cirkulující objem, klesá venózní návrat, tepový objem a srdeční výdej.`, `Kompenzace: aktivace sympatiku vyvolá vazokonstrikci a tachykardii, přesun tekutiny z intersticia do kapilár (hemodiluce).`, `Při ztrátě > 30 % objemu selhávají kompenzační mechanismy a rozvíjí se hemoragický šok.`],
      clinicalManifestation: [`Bledost, chladný pot, slabost, závratě, sucho v ústech.`, `Tachykardie, hypotenze, oligurie, zrychlené mělké dýchání.`, `Následky: anémie u chronických ztrát, hypovolemický šok a lokální útlak tkání u vnitřního krvácení (např. srdeční tamponáda, intrakraniální krvácení).`],
      diagnostics: [`Klinické vyšetření a sledování vitálních funkcí (krevní tlak, tepová frekvence).`, `Laboratorní krevní obraz (s odstupem hodin pokles hemoglobinu a hematokritu kvůli hemodiluci).`, `Zobrazovací metody (ultrazvuk FAST u traumat, CT) k lokalizaci skrytého vnitřního krvácení.`]
    },
    tableData: [
      { name: `Celkový objem krve u dospělého člověka`, value: `cca 7 - 8 % tělesné hmotnosti (cca 5 litrů)` },
      { name: `Akutní ztráta krve vyvolávající těžký šok`, value: `> 30 - 40 % (cca 1.5 - 2 litry)` },
      { name: `Doba potřebná k plné kompenzaci objemu přesunem tekutin`, value: `12 - 24 hodin` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Krvácení?",
            "options": [
                  "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
                  "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění.",
                  "Krvácení (hemoragie) je únik krve z cévního řečiště mimo cévní prostor. Může být vnitřní, vnější, traumatické či netraumatické.",
                  "Fyzikální faktory prostředí mohou při překročení kompenzačních limitů organismu způsobit přímé poškození buněk a tkání nebo narušit celkovou homeostázu."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Geneticky podmíněné nemoci.",
                  "Správně! Toto je přesná patofyziologická definice pro: Krvácení.",
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem fyzikálních vlivů."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Krvácení?",
            "options": [
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
                  "Pozitivní energetická bilance: dlouhodobý nadbytek energetického příjmu nad výdejem.",
                  "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření).",
                  "Virchowova triáda: poškození endotelu, zpomalení toku krve (stagnace), hyperkoagulační stav (trombofilie)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Krvácení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Obezita.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození a smrt buňky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Trombóza."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Krvácení?",
            "options": [
                  "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů.",
                  "Ztráta krve snižuje cirkulující objem, klesá venózní návrat, tepový objem a srdeční výdej.",
                  "Izotonická: úbytek tekutiny postihuje pouze extracelulární prostor (ECF), objem buněk (ICF) se nemění.",
                  "Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Imunopatologické reakce.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Krvácení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dehydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy metabolismu železa (Fe2+/Fe3+)."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Krvácení?",
            "options": [
                  "Popáleniny (klasifikace I.-IV. stupně podle hloubky) a omrzliny.",
                  "Bledost, chladný pot, slabost, závratě, sucho v ústech.",
                  "PE: náhlá dušnost, bolest na hrudníku (pleurální charakter), kašel, hemoptýza, tachypnoe a tachykardie.",
                  "Poplachová fáze: tachykardie, arteriální hypertenze, mydriáza, zvýšení glykémie, potlačení GIT motility."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození vlivem fyzikálních vlivů.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Krvácení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Embolie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Krvácení?",
            "options": [
                  "Celkový objem krve u dospělého člověka je: cca 7 - 8 % tělesné hmotnosti (cca 5 litrů)",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l",
                  "Rozmezí celkového IgE u zdravých dospělých je: < 100 kU/l",
                  "Kritérium septického šoku: laktát v séru je: > 2.0 mmol/l (i přes volumoterapii)"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Krvácení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Imunopatologické reakce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Septický a anafylaktický šok."
            ]
      }
]
  },
  "gen-39": {
    richContent: {
      definition: `Sodík je hlavní extracelulární kation určující osmolaritu a objem extracelulární tekutiny. Chloridy jsou hlavní anioty těsně provázející sodík. Osmotický tlak závisí na koncentraci solutů, onkotický na proteinech plazmy.`,
      etiology: [`Hyponatrémie: nadměrný příjem vody, SIADH (retence vody), ztráty sodíku ledvinami (diuretika) nebo GIT (zvracení, průjmy).`, `Hypernatrémie: nedostatečný příjem vody, ztráty čisté vody (diabetes insipidus, profúzní pocení), nadměrný přívod NaCl.`, `Poruchy chloridů kopírují sodík (vyjma zvracení -> hypochloremická alkalóza).`],
      pathogenesis: [`Osmolarita ECF je přísně regulována **ADH** (voda) a **aldosteronem** (sodík) přes osmoreceptory hypothalamu.`, `Hyponatrémie (pokles osmolarity ECF) vede k přesunu vody do buněk. Hrozí edém buněk, zejména neuronů v mozku.`, `Hypernatrémie (vzestup osmolarity ECF) vytahuje vodu z buněk do ECF, což vyvolá intracelulární dehydrataci a scvrkávání neuronů.`],
      clinicalManifestation: [`Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku.`, `Hypernatrémie: extrémní žízeň, suché sliznice, neklid, dezorientace, křeče a intracerebrální krvácení z tahu na cévy při smrštění mozku.`, `Pokles onkotického tlaku (hypoalbuminémie) vede k úniku tekutiny do intersticia a vzniku generalizovaných edémů.`],
      diagnostics: [`Měření koncentrace sodíku a chloridů v séru.`, `Stanovení plazmatické a močové osmolarity.`, `Měření hladiny celkové bílkoviny a albuminu v séru (posouzení onkotického tlaku).`]
    },
    tableData: [
      { name: `Referenční rozmezí sodíku v séru`, value: `135 - 145 mmol/l` },
      { name: `Referenční rozmezí chloridů v séru`, value: `97 - 107 mmol/l` },
      { name: `Extracelulární osmolarita`, value: `275 - 295 mOsm/kg` },
      { name: `Onkotický tlak plazmy`, value: `25 - 28 mmHg (cca 3.3 - 3.7 kPa)` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy bilance natria (Na+) a chloridů (Cl-)?",
            "options": [
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.",
                  "Reaktivní kyslíkové (ROS) a dusíkové (RNS) sloučeniny jsou vysoce reaktivní radikály a molekuly. Ischemicko-reperfúzní syndrom (IRS) představuje poškození tkáně způsobené obnovením toku krve po předchozím období ischémie.",
                  "Bolest je nepříjemná smyslová a citová zkušenost spojená s existujícím nebo potenciálním poškozením tkáně. Plní ochrannou roli, ale chronická bolest se stává nemocí sama o sobě.",
                  "Sodík je hlavní extracelulární kation určující osmolaritu a objem extracelulární tekutiny. Chloridy jsou hlavní anioty těsně provázející sodík. Osmotický tlak závisí na koncentraci solutů, onkotický na proteinech plazmy."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato definice popisuje téma: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tato definice popisuje téma: Bolest.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)?",
            "options": [
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
                  "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
                  "Hyponatrémie: nadměrný příjem vody, SIADH (retence vody), ztráty sodíku ledvinami (diuretika) nebo GIT (zvracení, průjmy)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy bilance natria (Na+) a chloridů (Cl-)?",
            "options": [
                  "Osmolarita ECF je přísně regulována **ADH** (voda) a **aldosteronem** (sodík) přes osmoreceptory hypothalamu.",
                  "Ztráta krve snižuje cirkulující objem, klesá venózní návrat, tepový objem a srdeční výdej.",
                  "Fáze 1: Kompenzovaný šok. Centralizace oběhu (sympatikus, RAAS) udržuje perfuzní tlak v mozku a srdci na úkor periferie.",
                  "Ischemie postihuje tkáň hůře než prostá hypoxie, protože chybí odplavování toxických metabolitů (laktát, H+)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Krvácení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ischemie."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)?",
            "options": [
                  "Hypotenze (MAP < 65 mmHg), tachykardie, tachypnoe.",
                  "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku.",
                  "Akutní bolest: aktivace sympatiku (tachykardie, hypertenze, pocení, úzkost, mydriáza).",
                  "Acidóza tlumí kontraktilitu myokardu a dráždivost CNS (apatie, uremické kóma), způsobuje hyperkalémii."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Bolest.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy acidobazické rovnováhy."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)?",
            "options": [
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l",
                  "Normální sérová osmolarita je: 275 - 295 mOsm/kg",
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Normální parciální tlak kyslíku v arteriální krvi (paO2) je: 11.0 - 13.0 kPa (80-100 mmHg)"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dehydratace.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoxie a hyperoxie buňky."
            ]
      }
]
  },
  "gen-40": {
    richContent: {
      definition: `Lokální zánět je fyziologická obranná reakce organismu na poškození tkáně (infekce, trauma, chemické vlivy) směřující k eliminaci noxy a reparaci tkáně.`,
      etiology: [`Biologické noxy (bakterie, viry, paraziti).`, `Fyzikální a chemické vlivy (popálení, poleptání, cizí těleso, mechanické trauma).`, `Tkáňová nekróza jakékoliv etiologie (např. infarkt myokardu).`],
      pathogenesis: [`Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor).`, `Zvýšená kapilární propustnost: únik tekutiny a proteinů do interstitia tvoří zánětlivý exsudát (tumor).`, `Buněčná infiltrace: exprese selektinů a integrinů na endotelu umožňuje marginaci, diapedézu a chemotaxi neutrofilů a makrofágů do místa poškození.`, `Uvolnění mediátorů zánětu (prostaglandiny, bradykinin) dráždí nociceptory (dolor) a omezuje funkci (functio laesa).`],
      clinicalManifestation: [`Pět klasických lokálních projevů (Celsus, Galén): **Rubor** (zarudnutí), **Calor** (horkost), **Tumor** (otok), **Dolor** (bolest), **Functio laesa** (porucha funkce).`, `Tvorba exsudátu (serózní, hnisavý, fibrózní) v místě poškození.`, `Regionální lymfadenitida (zvětšení a bolestivost spádových mízních uzlin).`],
      diagnostics: [`Klinické vyšetření ložiska pohledem a pohmatem.`, `Histologické vyšetření prokazující infiltraci zánětlivými buňkami (neutrofily u akutního, lymfocyty u chronického zánětu).`, `Stanovení lokální teploty a perfuze ložiska.`]
    },
    tableData: [
      { name: `Doba nástupu akutní cévní fáze lokálního zánětu`, value: `sekundy až minuty` },
      { name: `Bílkovina v zánětlivém exsudátu (odlišuje ho od transsudátu)`, value: `> 30 g/l` },
      { name: `Maximální infiltrace neutrofily v ložisku`, value: `během 24 - 48 hodin` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Lokální zánětová odpověď?",
            "options": [
                  "Obezita je chronické metabolické onemocnění charakterizované nadměrným ukládáním tukové tkáně v organismu, které představuje zdravotní riziko.",
                  "Lokální zánět je fyziologická obranná reakce organismu na poškození tkáně (infekce, trauma, chemické vlivy) směřující k eliminaci noxy a reparaci tkáně.",
                  "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění.",
                  "Ateroskleróza je chronické zánětlivé onemocnění tepen středního a velkého kalibru charakterizované ukládáním lipidů a tvorbou vazivových plátů v intimě cévní stěny."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Obezita.",
                  "Správně! Toto je přesná patofyziologická definice pro: Lokální zánětová odpověď.",
                  "Nesprávně. Tato definice popisuje téma: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tato definice popisuje téma: Ateroskleróza."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Lokální zánětová odpověď?",
            "options": [
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Infekční ložisko (pneumonie, urosepse, intraabdominální absces, katetrová infekce).",
                  "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
                  "Biologické noxy (bakterie, viry, paraziti)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Lokální zánětová odpověď."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Lokální zánětová odpověď?",
            "options": [
                  "Hypertrofie a hyperplázie adipocytů vede k hypoxii v tukové tkáni.",
                  "Osmolarita ECF je přísně regulována **ADH** (voda) a **aldosteronem** (sodík) přes osmoreceptory hypothalamu.",
                  "Vazodilatace: uvolnění histaminu a oxidu dusnatého (NO) zvyšuje průtok krve ložiskem (rubor, calor).",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Obezita.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Kardiogenní a obstrukční šok."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Lokální zánětová odpověď?",
            "options": [
                  "Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.",
                  "Pět klasických lokálních projevů (Celsus, Galén): **Rubor** (zarudnutí), **Calor** (horkost), **Tumor** (otok), **Dolor** (bolest), **Functio laesa** (porucha funkce).",
                  "Myokardiální ohromení (stunned myokard) a reperfúzní arytmie (komorové tachykardie po zprůchodnění koronární tepny).",
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperglykemie.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Lokální zánětová odpověď.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Reaktivní kyslíkové a dusíkové sloučeniny.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy vědomí."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Lokální zánětová odpověď?",
            "options": [
                  "Referenční rozmezí draslíku v séru je: 3.5 - 5.1 mmol/l",
                  "Doba nástupu akutní cévní fáze lokálního zánětu je: sekundy až minuty",
                  "Ischemická tolerance neuronů kůry mozku je: 4 - 5 minut",
                  "Normální pH žaludeční šťávy je: 1.5 - 3.5"
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance kalia (K+).",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Lokální zánětová odpověď.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Ischemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nauzea, zvracení."
            ]
      }
]
  },
  "gen-41": {
    richContent: {
      definition: `Vědomí je stav bdělosti (vigility) a uvědomování si sebe sama a okolí (lucidity). Poruchy se dělí na kvantitativní (ovlivňují bdělost) a kvalitativní (ovlivňují obsah). Synkopa je krátkodobá, spontánně odeznívající ztráta vědomí z hypoperfuze mozku.`,
      etiology: [`Kvantitativní poruchy: léze retikulární formace (ARAS) nebo obou hemisfér (úrazy hlavy, CMP, tumory), metabolické příčiny (hypoglykémie, uremie, jaterní kóma, intoxikace).`, `Kvalitativní poruchy: delérium, obnubilace (mrákotný stav), zmatenost (demence, psychózy).`, `Synkopa: vazovagální (reflexní), kardiální (arytmie, chlopenní vady), ortostatická (pokles TK při postavení).`],
      pathogenesis: [`Bdělost je udržována ascendentním retikulárním aktivačním systémem (ARAS) v mozkovém kmeni, který stimuluje kůru.`, `Kvantitativní porucha vzniká při destrukci kmene nebo při difúzním metabolickém útlumu kůry.`, `Synkopa: náhlý pokles průtoku krve mozkem pod kritickou mez na dobu 5-10 sekund vede k okamžité ztrátě posturálního tonu a vědomí.`],
      clinicalManifestation: [`Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).`, `Kvalitativní: dezorientace časem, místem, neklid, halucinace (delérium).`, `Synkopa: náhlý pád, bledost, po pádu do horizontální polohy dochází k rychlému spontánnímu zotavení vědomí.`],
      diagnostics: [`Hodnocení hloubky poruchy vědomí pomocí **Glasgow Coma Scale (GCS)**.`, `Biochemický screening (okamžité stanovení glykémie k vyloučení hypoglykémie nalačno).`, `Nativní CT mozku k vyloučení intrakraniálního krvácení nebo ischemie, EKG a Holter u synkop.`]
    },
    tableData: [
      { name: `Glasgow Coma Scale - plné vědomí`, value: `15 bodů` },
      { name: `Glasgow Coma Scale - kóma (těžká porucha)`, value: `<= 8 bodů (minimum je 3 body)` },
      { name: `Trvání typické vazovagální synkopy`, value: `< 1 - 2 minuty` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poruchy vědomí?",
            "options": [
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
                  "Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko.",
                  "Vědomí je stav bdělosti (vigility) a uvědomování si sebe sama a okolí (lucidity). Poruchy se dělí na kvantitativní (ovlivňují bdělost) a kvalitativní (ovlivňují obsah). Synkopa je krátkodobá, spontánně odeznívající ztráta vědomí z hypoperfuze mozku.",
                  "Krvácení (hemoragie) je únik krve z cévního řečiště mimo cévní prostor. Může být vnitřní, vnější, traumatické či netraumatické."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Malnutrice.",
                  "Nesprávně. Tato definice popisuje téma: Metabolický syndrom X.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poruchy vědomí.",
                  "Nesprávně. Tato definice popisuje téma: Krvácení."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poruchy vědomí?",
            "options": [
                  "Poruchy růstu: deficit růstového hormonu (nanismus), nadbytek (gigantismus, akromegalie), celiakie, hypotyreóza.",
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Kvantitativní poruchy: léze retikulární formace (ARAS) nebo obou hemisfér (úrazy hlavy, CMP, tumory), metabolické příčiny (hypoglykémie, uremie, jaterní kóma, intoxikace).",
                  "Hypoxie, ischemie, působení fyzikálních a chemických nox (toxiny, záření)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy růstu.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poruchy vědomí.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození a smrt buňky."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poruchy vědomí?",
            "options": [
                  "Deficit: vyčerpání zásob železa tlumí tvorbu hemu, což vede k poruše syntézy hemoglobinu a rozvoji mikrocytární anémie.",
                  "Prehepatální: nadprodukce nekonjugovaného bilirubinu, kterou játra nestíhají konjugovat. Nekonjugovaný bilirubin je nerozpustný ve vodě, nevylučuje se močí.",
                  "Bdělost je udržována ascendentním retikulárním aktivačním systémem (ARAS) v mozkovém kmeni, který stimuluje kůru.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ikterus - etiopatogeneze.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poruchy vědomí.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Malnutrice."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poruchy vědomí?",
            "options": [
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost.",
                  "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).",
                  "Metabolické: inzulínová rezistence, diabetes mellitus 2. typu, dyslipidémie (metabolický syndrom X)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hypoglykemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dušnost.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poruchy vědomí.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Obezita."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poruchy vědomí?",
            "options": [
                  "Glasgow Coma Scale - plné vědomí je: 15 bodů",
                  "Normální aktivita kreatinkinázy (CK) v séru je: < 3.0 ukat/l",
                  "Rozmezí celkového IgE u zdravých dospělých je: < 100 kU/l",
                  "Normální Shock Index je: 0.5 - 0.7"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poruchy vědomí.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Imunopatologické reakce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok."
            ]
      }
]
  },
  "gen-42": {
    richContent: {
      definition: `Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.`,
      etiology: [`Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt).`, `Embolie do větví arteriálního řečiště.`, `Spasmus tepny (např. vazospastická angina pectoris) nebo vnější komprese (např. zaškrcení střeva u kýly).`],
      pathogenesis: [`Ischemie postihuje tkáň hůře než prostá hypoxie, protože chybí odplavování toxických metabolitů (laktát, H+).`, `Rychlý pokles ATP vede k selhání membránových pump, hromadění vápníku v cytosolu a aktivaci autolytických enzymů.`, `Rychlost rozvoje nekrózy závisí na ischemické toleranci tkáně (mozek 4-5 min, myokard 20-30 min, ledviny a kosterní sval hodiny).`],
      clinicalManifestation: [`Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).`, `CNS: ložiskový neurologický deficit (paréza, porucha řeči) u ischemické CMP.`, `Ledviny: akutní tubulární nekróza s oligurií; GIT: ischemická kolitida nebo gangréna střeva (akutní břicho).`, `Končetiny: klaudikační bolesti, u akutního uzávěru 5P (Pain, Pallor, Pulselessness, Paresthesia, Paralysis).`],
      diagnostics: [`Angiografie cévního řečiště (koronarografie, angiografie končetin, CT angiografie).`, `Ultrasonografie s barevným dopplerovským zobrazením průtoku krve.`, `Stanovení tkáňově specifických markerů nekrózy v séru (troponiny, kreatinkináza, laktát).`]
    },
    tableData: [
      { name: `Ischemická tolerance neuronů kůry mozku`, value: `4 - 5 minut` },
      { name: `Ischemická tolerance kardiomyocytů (reverzibilní fáze)`, value: `< 20 - 30 minut` },
      { name: `Ischemická tolerance kosterního svalstva`, value: `2 - 6 hodin` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Ischemie?",
            "options": [
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
                  "Kalcium a fosfáty jsou klíčové minerály pro stavbu kostí, buněčnou signalizaci a svalovou kontrakci. Jejich bilance je úzce propojena a regulována PTH, kalcitriolem a kalcitoninem.",
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů.",
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Malnutrice.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Správně! Toto je přesná patofyziologická definice pro: Ischemie.",
                  "Nesprávně. Tato definice popisuje téma: Stres a všeobecný adaptační syndrom."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Ischemie?",
            "options": [
                  "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt).",
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
                  "Nociceptivní bolest: mechanické, termické nebo chemické dráždění receptorů (nociceptorů) ve tkáních.",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Ischemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ikterus - etiopatogeneze.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Bolest.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Ischemie?",
            "options": [
                  "Ztráta krve snižuje cirkulující objem, klesá venózní návrat, tepový objem a srdeční výdej.",
                  "Bdělost je udržována ascendentním retikulárním aktivačním systémem (ARAS) v mozkovém kmeni, který stimuluje kůru.",
                  "Ischemie postihuje tkáň hůře než prostá hypoxie, protože chybí odplavování toxických metabolitů (laktát, H+).",
                  "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Krvácení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy vědomí.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Ischemie.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hypoxie a hyperoxie buňky."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Ischemie?",
            "options": [
                  "Tachypnoe (> 20 dechů/min), zapojení pomocných dechových svalů, alární dýchání (u dětí).",
                  "Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).",
                  "Pět klasických lokálních projevů (Celsus, Galén): **Rubor** (zarudnutí), **Calor** (horkost), **Tumor** (otok), **Dolor** (bolest), **Functio laesa** (porucha funkce).",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Dušnost.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Ischemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Ischemie?",
            "options": [
                  "Ischemická tolerance neuronů kůry mozku je: 4 - 5 minut",
                  "Normální pH žaludeční šťávy je: 1.5 - 3.5",
                  "Normální Shock Index je: 0.5 - 0.7",
                  "Glasgow Coma Scale - plné vědomí je: 15 bodů"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Ischemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nauzea, zvracení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy vědomí."
            ]
      }
]
  },
  "gen-43": {
    richContent: {
      definition: `Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.`,
      etiology: [`Podráždění žaludeční sliznice (toxiny, alkohol, gastritida).`, `Stimulace chemoreceptorové zóny (CTZ) na spodině 4. komory (léky, chemoterapie, uremické toxiny).`, `Zvýšený intrakraniální tlak (zvracení obloukem bez předchozí nauzey) a vestibulární dráždění (kinetóza).`],
      pathogenesis: [`Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.`, `Reflexní děj: hluboký nádech, uzávěr glottis (prevence aspirace), relaxace dolního jícnového svěrače a kontrakce břišního lisu a bránice.`, `Při zvracení odchází kyselá žaludeční šťáva bohatá na HCl, vodu a draslík.`],
      clinicalManifestation: [`Nauzea je doprovázena příznaky aktivace parasympatiku (slinění, bledost, pocení, bradykardie).`, `Dehydratace a metabolický rozvrat při opakovaném zvracení.`, `**Hypokalemická, hypochloremická metabolická alkalóza** (ztráta H+ a Cl- vyvolá alkalózu, ztráta K+ a přesun do buněk vyvolá hypokalémii).`],
      diagnostics: [`Vyšetření acidobazické rovnováhy (průkaz metabolické alkalózy a poklesu chloridů).`, `Stanovení hladiny draslíku a sodíku v séru.`, `Endoskopické vyšetření horní části GIT (gastroskopie) a neurologické vyšetření (vyloučení nitrolební hypertenze).`]
    },
    tableData: [
      { name: `Normální pH žaludeční šťávy`, value: `1.5 - 3.5` },
      { name: `Objem žaludeční šťávy vyprodukovaný za den`, value: `1.5 - 2.5 litru` },
      { name: `Sérové chloridy u těžkého zvracení (hypochloremie)`, value: `< 90 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Nauzea, zvracení?",
            "options": [
                  "Syndrom systémové zánětlivé odpovědi (SIRS) je nespecifická systémová reakce organismu na infekční nebo neinfekční inzult charakterizovaná masivním uvolněním zánětlivých mediátorů.",
                  "Poruchy růstu a puberty představují odchylky od fyziologického somatického a pohlavního vývoje. Stárnutí je postupné, univerzální zhoršování biologických funkcí končící smrtí organismu.",
                  "Nauzea (nevolnost) je subjektivní nepříjemný pocit nutkání ke zvracení. Zvracení (emesis) je reflexní děj vedoucí k rychlému vypuzení žaludečního obsahu ústy.",
                  "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin a k hromadění metabolitů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy růstu.",
                  "Správně! Toto je přesná patofyziologická definice pro: Nauzea, zvracení.",
                  "Nesprávně. Tato definice popisuje téma: Ischemie."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Nauzea, zvracení?",
            "options": [
                  "Hypovolemický / Hemoragický šok (ztráta cirkulující tekutiny nebo krve).",
                  "Septický šok: těžká infekce (bakteriální, virová, plísňová) s dysregulovanou odpovědí hostitele a perzistentní hypotenzí.",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Podráždění žaludeční sliznice (toxiny, alkohol, gastritida)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Nauzea, zvracení."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Nauzea, zvracení?",
            "options": [
                  "Hypoxie: pokles pO2 aktivuje transkripční faktor HIF-1 (Hypoxia-Inducible Factor 1). HIF-1 stimuluje geny pro erytropoetin, VEGF a glykolýzu.",
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.",
                  "Marasmus (prosté hladovění): deficit energie a bílkovin. Tělo čerpá z tukových zásob a svalů, syntéza viscerálních proteinů (albumin) v játrech je dlouho zachována."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hypoxie a hyperoxie buňky.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Nauzea, zvracení.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Bolest.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Malnutrice."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Nauzea, zvracení?",
            "options": [
                  "Nauzea je doprovázena příznaky aktivace parasympatiku (slinění, bledost, pocení, bradykardie).",
                  "Nanismus: malý vzrůst, harmonické proporce. Akromegalie: zvětšování aker (ruce, nohy, čelist), vnitřních orgánů.",
                  "Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).",
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Nauzea, zvracení.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy růstu.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ischemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Vliv celkové a částečné imobilizace."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Nauzea, zvracení?",
            "options": [
                  "Normální lidský karyotyp (počet chromozomů) je: 46 (23 párů, z toho 22 autozomů a 2 gonozomy)",
                  "Podíl celkové tělesné vody u dospělého muže je: cca 60 % hmotnosti",
                  "Normální pH žaludeční šťávy je: 1.5 - 3.5",
                  "Referenční rozmezí draslíku v séru je: 3.5 - 5.1 mmol/l"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hyperhydratace.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Nauzea, zvracení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance kalia (K+)."
            ]
      }
]
  },
  "gen-44": {
    richContent: {
      definition: `Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici.`,
      etiology: [`Akutní otravy: předávkování paracetamolem, požití metanolu (zaměněného za etanol), vdechnutí oxidu uhelnatého (CO) při požáru.`, `Chronické toxické vlivy: chronický abúzus alkoholu (etanolu) a kouření tabákových výrobků.`],
      pathogenesis: [`Paracetamol: při předávkování dochází k vyčerpání glutathionu v játrech, hromadí se toxický metabolit NAPQI, který vyvolá masivní nekrózu hepatocytů.`, `Metanol: metabolizuje se alkoholdehydrogenázou na vysoce toxický formaldehyd a kyselinu mravenčí, což způsobí těžkou metabolickou acidózu a destrukci n. opticus (slepota).`, `Oxid uhelnatý (CO): váže se na hemoglobin za tvorby karboxyhemoglobinu (COHb). Afinita CO je 200-250x vyšší než u kyslíku, což blokuje transport O2 (anemická hypoxie) a buněčné dýchání.`, `Kouření: poškozuje endotel, urychluje aterosklerózu, uvolňuje karcinogeny a tlumí mukociliární aparát plic.`],
      clinicalManifestation: [`Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie).`, `Metanol: opilost, bolesti břicha, poruchy vidění (sněžná slepota), těžká acidóza s hyperventilací.`, `CO: bolesti hlavy, třešňově červené zbarvení kůže (karboxyhemoglobin), zmatenost, křeče, kóma.`, `Alkohol: jaterní steatóza, cirhóza s portální hypertenzí, Wernickeova encefalopatie (deficit vitaminu B1).`],
      diagnostics: [`Stanovení koncentrace toxinu v krvi (paracetamolémie, metanolémie).`, `Měření karboxyhemoglobinu (COHb) v krvi CO-oxymetrem (klasický pulzní oxymetrsaturaci zkreslí!).`, `Vyšetření acidobazické rovnováhy (těžká MAC s vysokým Anion Gap u metanolu).`]
    },
    tableData: [
      { name: `Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu`, value: `> 7.5 - 10 g (u dospělého)` },
      { name: `Letální koncentrace COHb v krvi`, value: `> 50 %` },
      { name: `Smrtelná dávka čistého metanolu`, value: `30 - 100 ml (bez léčby)` },
      { name: `Afinita CO k hemoglobinu ve srovnání s O2`, value: `200 - 250 x vyšší` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poškození vlivem chemických vlivů?",
            "options": [
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
                  "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
                  "Dehydratace je stav snížení objemu vody v těle, který může být doprovázen různou mírou ztrát elektrolytů (zejména sodíku). Dělí se na izotonickou, hypertonickou a hypotonickou.",
                  "Chemické látky a toxiny mohou způsobit akutní poškození buněk a tkání (intoxikace) nebo vést k chronickým patofyziologickým změnám při dlouhodobé expozici."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Malnutrice.",
                  "Nesprávně. Tato definice popisuje téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Dehydratace.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poškození vlivem chemických vlivů?",
            "options": [
                  "Mutace v protoonkogenech (mění se v onkogeny stimulující růst, např. RAS) a nádorových supresorových genech (např. TP53).",
                  "Uzávěr lumen tepny trombem nasedajícím na prasklý aterosklerotický plát (infarkt).",
                  "Prehepatální (hemolytický): nadměrný rozpad erytrocytů (AIHA, srpkovitá anémie, novorozenecký ikterus).",
                  "Akutní otravy: předávkování paracetamolem, požití metanolu (zaměněného za etanol), vdechnutí oxidu uhelnatého (CO) při požáru."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nádorové bujení.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ischemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ikterus - etiopatogeneze.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poškození vlivem chemických vlivů?",
            "options": [
                  "pH krve je určeno poměrem bikarbonátu a parciálního tlaku CO2 podle Hendersonovy-Hasselbalchovy rovnice.",
                  "Transdukce: noxa stimuluje nociceptory (volná nervová zakončení) k tvorbě akčního potenciálu.",
                  "Místní zánět přerůstá v systémový únikem cytokinů (TNF-alfa, IL-1, IL-6) do krevního oběhu.",
                  "Paracetamol: při předávkování dochází k vyčerpání glutathionu v játrech, hromadí se toxický metabolit NAPQI, který vyvolá masivní nekrózu hepatocytů."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy acidobazické rovnováhy.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Bolest.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem chemických vlivů?",
            "options": [
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).",
                  "Myokard: angina pectoris (bolest za sternem), infarkt myokardu (nekróza s rizikem ruptury či arytmií).",
                  "Hyponatrémie: bolesti hlavy, nevolnost, zmatenost, apatie, křeče až kóma z edému mozku.",
                  "Paracetamol: iniciálně asymptomatický, po 24-48 h rozvoj akutního jaterního selhání (ikterus, koagulopatie, encefalopatie)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy vědomí.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ischemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy bilance natria (Na+) a chloridů (Cl-).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem chemických vlivů."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poškození vlivem chemických vlivů?",
            "options": [
                  "qSOFA kritéria (vzestup o >= 2 body značí riziko) je: DF >= 22/min, GCS < 15, systolický TK <= 100 mmHg",
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l",
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)",
                  "Normální sérová osmolarita je: 275 - 295 mOsm/kg"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nespecifický a specifický imunitní systém.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poškození vlivem chemických vlivů.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Dehydratace."
            ]
      }
]
  },
  "gen-45": {
    richContent: {
      definition: `Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.`,
      etiology: [`Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).`, `Inzulínová rezistence v kombinaci s relativním nedostatkem inzulínu (diabetes 2. typu).`, `Sekundární hyperglykémie při léčbě glukokortikoidy (steroidní diabetes) nebo u endokrinopatií (akromegalie, Cushing).`],
      pathogenesis: [`Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech.`, `Akutní acidóza (DKA): absence inzulínu aktivuje lipolýzu, mastné kyseliny jsou v játrech oxidovány na ketolátky, což vyvolá acidózu.`, `Chronická glukotoxicita: hyperglykémie stimuluje tvorbu pokročilých produktů glykace (AGEs), aktivuje polyolovou cestu (sorbitol v buňkách) a poškozuje endotel cév.`],
      clinicalManifestation: [`Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.`, `Akutní komplikace: Diabetická ketoacidóza (DKA - hyperventilace, zápach acetonu) nebo Hyperosmolární hyperglykemický syndrom (HHS - těžká dehydratace, kóma).`, `Chronické komplikace: mikroangiopatie (retinopatie, nefropatie, neuropatie) a makroangiopatie (infarkt, CMP, diabetická noha).`],
      diagnostics: [`Stanovení glykémie nalačno a oGTT (orální glukózový toleranční test).`, `Měření **glykovaného hemoglobinu (HbA1c)** pro hodnocení dlouhodobé kompenzace (za 2-3 měsíce).`, `Screening mikroalbuminurie (stanovení poměru albumin/kreatinin v moči pro včasnou detekci nefropatie).`]
    },
    tableData: [
      { name: `Ledvinný práh pro glukózu (kdy vzniká glykosurie)`, value: `10.0 mmol/l (u zdravých ledvin)` },
      { name: `Glykémie nalačno definující diabetes mellitus`, value: `>= 7.0 mmol/l` },
      { name: `Cílový glykovaný hemoglobin (HbA1c) pro kompenzovaného diabetika`, value: `< 48 mmol/mol` },
      { name: `Glykémie u hyperosmolárního syndromu (HHS)`, value: `často > 33.0 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Hyperglykemie?",
            "options": [
                  "Krvácení (hemoragie) je únik krve z cévního řečiště mimo cévní prostor. Může být vnitřní, vnější, traumatické či netraumatické.",
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Hyperglykemie je stav zvýšené koncentrace glukózy v krvi. Je to základní laboratorní a patofyziologický znak diabetes mellitus.",
                  "DIC je získaný syndrom charakterizovaný systémovou aktivací koagulace v mikrocirkulaci, což vede k tvorbě trombů, spotřebování koagulačních faktorů a destiček, a následnému masivnímu krvácení."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Krvácení.",
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Hyperglykemie.",
                  "Nesprávně. Tato definice popisuje téma: Diseminovaná intravaskulární koagulace (DIC)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Hyperglykemie?",
            "options": [
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody).",
                  "Vrozené imunitní poruchy (primární imunodeficity): např. selektivní deficit IgA, těžký kombinovaný imunodeficit (SCID).",
                  "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
                  "Alergeny u typu I (pyly, roztoči, potraviny, léky) vyvolávající atopii (genetický sklon k IgE nadprodukci)."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperhydratace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Nespecifický a specifický imunitní systém.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Hyperglykemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Imunopatologické reakce."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Hyperglykemie?",
            "options": [
                  "Průnik LDL do intimy a jeho následná oxidace (oxLDL) spouští lokální zánětlivou reakci.",
                  "Nespecifická imunita: buněčná složka (makrofágy, neutrofily, NK buňky) využívá fagocytózu. Humorální složka (komplement) vyvolá lýzu cílů.",
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Nedostatečný inzulínový signál tlumí transport glukózy přes GLUT-4 do svalů a tuku a odblokuje glukoneogenezi v játrech."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Ateroskleróza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Hyperglykemie."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Hyperglykemie?",
            "options": [
                  "Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest).",
                  "Klasická triáda: **Polyurie** (osmotická diuréza po překročení ledvinného prahu glukózy), **Polydipsie** (žízeň vyvolaná dehydratací), **Polyfágie** a hubnutí.",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
                  "Bledost, chladný pot, slabost, závratě, sucho v ústech."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození a smrt buňky.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Hyperglykemie.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Krvácení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Hyperglykemie?",
            "options": [
                  "Fyziologické rozmezí leukocytů u dospělých je: 4.0 - 10.0 x 10^9/l",
                  "Věk pro definici předčasné puberty u dívek je: < 8. rok",
                  "Limit pro definici hypoglykémie u diabetiků je: < 3.9 mmol/l",
                  "Ledvinný práh pro glukózu (kdy vzniká glykosurie) je: 10.0 mmol/l (u zdravých ledvin)"
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nespecifický a specifický imunitní systém.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy růstu.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoglykemie.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Hyperglykemie."
            ]
      }
]
  },
  "gen-46": {
    richContent: {
      definition: `Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění.`,
      etiology: [`Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů.`, `Monofaktoriální (mendelistické) nemoci: mutace v jednom genu (např. cystická fibróza, Huntingtonova choroba).`, `Multifaktoriální nemoci: interakce mnoha genů s vlivy vnějšího prostředí (ateroskleróza, esenciální hypertenze, diabetes 2. typu).`],
      pathogenesis: [`Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.`, `Autozomálně recesivní (AR): k projevu je nutná přítomnost obou mutovaných alel (homozygot). Rodiče bývají zdraví přenašeči.`, `Gonosomální dědičnost (vázaná na X chromozom): postihuje převážně muže (hemizygoti), protože mají jen jeden X chromozom (např. hemofilie A).`],
      clinicalManifestation: [`Downův syndrom: mentální retardace, typický vzhled (mongoloidní oční štěrbiny, epikantus), vrozené srdeční vady.`, `Cystická fibróza: mutace genu CFTR narušuje transport Cl-, což vede k tvorbě extrémně vazkého hlenu v plicích a pankreatu.`, `Huntingtonova choroba: neurodegenerativní projev v dospělosti, choreatické pohyby, progresivní demence.`],
      diagnostics: [`Karyotypizace (cytogenetické vyšetření počtu a struktury chromozomů).`, `Molekulárně genetické metody (PCR, sekvenování DNA, NGS) pro detekci bodových mutací.`, `Prenatální screening (ultrazvuk a biochemické markery v séru matky).`]
    },
    tableData: [
      { name: `Normální lidský karyotyp (počet chromozomů)`, value: `46 (23 párů, z toho 22 autozomů a 2 gonozomy)` },
      { name: `Riziko přenosu AD nemoci na potomka (jeden rodič heterozygot)`, value: `50 %` },
      { name: `Pravděpodobnost nemocného potomka u dvou AR přenašečů`, value: `25 %` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Geneticky podmíněné nemoci?",
            "options": [
                  "Metabolická acidóza (MAC) je pokles pH krve pod 7.35 doprovázený primárním poklesem HCO3-. Metabolická alkalóza (MAL) je vzestup pH nad 7.45 s primárním vzestupem HCO3-.",
                  "Malnutrice je stav nedostatečného nebo nevyváženého příjmu živin a energie vedoucí k poruchám tělesných a mentálních funkcí. Dělí se na marasmus a kwashiorkor.",
                  "Dušnost (dyspnoe) je subjektivní pocit ztíženého dýchání nebo nedostatku vzduchu. Je to komplexní vjem vznikající nesouladem mezi dechovým úsilím a dosaženou ventilací.",
                  "Geneticky podmíněné nemoci jsou způsobeny patologickými změnami v genomu (mutacemi). Dělí se na chromozomální aberace, monofaktoriální a multifaktoriální (komplexní) onemocnění."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Malnutrice.",
                  "Nesprávně. Tato definice popisuje téma: Dušnost.",
                  "Správně! Toto je přesná patofyziologická definice pro: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Geneticky podmíněné nemoci?",
            "options": [
                  "Genetická predispozice k inzulínové rezistenci a ukládání viscerálního tuku.",
                  "Chromozomální aberace: změna počtu (např. trisomie 21 - Downův syndrom) nebo struktury chromozomů.",
                  "Biologické noxy (bakterie, viry, paraziti).",
                  "Hypokalémie: renální ztráty (diuretika, hyperaldosteronismus), GIT ztráty (zvracení, průjmy), přesun do buněk (alkalóza, inzulin)."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Metabolický syndrom X.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalia (K+)."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Geneticky podmíněné nemoci?",
            "options": [
                  "Při arteriální trombóze dominuje adheze a agregace destiček na obnažený subendotelový kolagen (bílý destičkový trombus).",
                  "Autozomálně dominantní (AD): mutovaná alela je dominantní, k projevu stačí jedna kopie (heterozygot). Postižení bývá ve všech generacích.",
                  "Aktivace chemoreceptorů (hypoxie, hyperkapnie, acidóza) v karotických tělískách a prodloužené míše stimuluje dechové centrum.",
                  "Starlingova rovnice popisuje filtraci tekutiny závislou na gradientech hydrostatického a onkotického tlaku."
            ],
            "correct": 1,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Trombóza.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Dušnost.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Edém."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Geneticky podmíněné nemoci?",
            "options": [
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "Septický: hypotenze refrakterní na volumoterapii (vyžaduje noradrenalin), laktát > 2 mmol/l, v časné fázi teplá, růžová kůže.",
                  "MAC: Kussmaulovo dýchání (hluboké, zrychlené), pokles kontraktility myokardu, hypotenze, somnolence až kóma, hyperkalémie.",
                  "Downův syndrom: mentální retardace, typický vzhled (mongoloidní oční štěrbiny, epikantus), vrozené srdeční vady."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Septický a anafylaktický šok.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolická acidóza a alkalóza.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Geneticky podmíněné nemoci."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Geneticky podmíněné nemoci?",
            "options": [
                  "Normální lidský karyotyp (počet chromozomů) je: 46 (23 párů, z toho 22 autozomů a 2 gonozomy)",
                  "Rozmezí celkového IgE u zdravých dospělých je: < 100 kU/l",
                  "Normální Shock Index je: 0.5 - 0.7",
                  "Referenční rozmezí sodíku v séru je: 135 - 145 mmol/l"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Geneticky podmíněné nemoci.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Imunopatologické reakce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypovolemický šok.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      }
]
  },
  "gen-47": {
    richContent: {
      definition: `Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání.`,
      etiology: [`Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).`, `Chronické dlouhodobé zatížení (např. esenciální hypertenze, chlopenní vady).`, `Strukturální poškození (infarkt, jizva, fibróza) versus funkční porucha bez strukturálních změn.`],
      pathogenesis: [`Akutní fáze: tělo reaguje rychlými, funkčními mechanismy (aktivace sympatiku, hyperventilace). Často nestačí plně kompenzovat těžké léze.`, `Chronická fáze: dochází k strukturální remodelaci a adaptaci (hypertrofie kardiomyocytů, hyperplázie). Tyto změny jsou však dlouhodobě patogenní.`, `Dekompenzace: vyčerpání kompenzačních rezerv, strukturální degenerace (např. dilatace komory a fibróza myokardu u srdečního selhání).`],
      clinicalManifestation: [`Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).`, `Dekompenzovaný stav: rozvoj klinických symptomů selhání (např. plicní edém při dekompenzaci srdečního selhání).`, `Přechod z akutní strukturální dysfunkce (např. ATN ledvin) do plné funkční obnovy po regeneraci tubulů.`],
      diagnostics: [`Sledování klinické tolerance zátěže (zátěžové testy, ergometrie).`, `Zobrazovací metody hodnotící strukturu a geometrii orgánů (echokardiografie pro tloušťku stěn a objemy komor).`, `Laboratorní markery buněčného poškození a orgánové funkce v čase.`]
    },
    tableData: [
      { name: `Doba pro rozvoj stabilní chronické adaptace (hypertrofie)`, value: `týdny až měsíce` },
      { name: `Akutní dekompenzace při ztrátě funkce nefronů`, value: `když klesne GFR < 0.5 - 1.0 ml/s` },
      { name: `Časový limit pro trvání akutního onemocnění`, value: `do 3 týdnů` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce?",
            "options": [
                  "Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání.",
                  "Poruchy metabolismu železa zahrnují jeho nedostatek (sideropenie) vedoucí k anémii, nebo nadbytek (hemochromatóza) způsobující toxické poškození tkání.",
                  "Hypoxie je stav nedostatku kyslíku na buněčné úrovni. Hyperoxie je nadbytek kyslíku, který může vést k oxidačnímu poškození tkání.",
                  "Sodík je hlavní extracelulární kation určující osmolaritu a objem extracelulární tekutiny. Chloridy jsou hlavní anioty těsně provázející sodík. Osmotický tlak závisí na koncentraci solutů, onkotický na proteinech plazmy."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je přesná patofyziologická definice pro: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy metabolismu železa (Fe2+/Fe3+).",
                  "Nesprávně. Tato definice popisuje téma: Hypoxie a hyperoxie buňky.",
                  "Nesprávně. Tato definice popisuje téma: Poruchy bilance natria (Na+) a chloridů (Cl-)."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce?",
            "options": [
                  "Akutní přetížení (např. náhlý uzávěr koronární tepny, akutní hypertenzní krize).",
                  "Absolutní nedostatek inzulínu v důsledku autoimunitní destrukce beta-buněk (diabetes 1. typu).",
                  "Infekční příčiny (sepse, těžká pneumonie, urosepse).",
                  "Závažná traumata (zlomeniny dlouhých kostí, poranění páteře), operace a pooperační stavy."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperglykemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Vliv celkové a částečné imobilizace."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce?",
            "options": [
                  "Akutní fáze: tělo reaguje rychlými, funkčními mechanismy (aktivace sympatiku, hyperventilace). Často nestačí plně kompenzovat těžké léze.",
                  "Deficit GH/IGF-1 tlumí proliferaci chondrocytů v růstových ploténkách. Nadbytek GH před uzávěrem plotének vede k gigantismu, po uzávěru k akromegalii.",
                  "Kardiogenní: pokles kontraktility -> pokles tepového objemu a srdečního indexu -> městnání v plicním oběhu (plicní edém) + systémová hypotenze.",
                  "Cytokiny stimulují buňky organum vasculosum laminae terminalis (OVLT) v hypothalamu k produkci prostaglandinu E2 (PGE2)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poruchy růstu.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Kardiogenní a obstrukční šok.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Horečka."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce?",
            "options": [
                  "Kompenzovaný stav: pacient je asymptomatický v klidu (např. hypertrofie levé komory u hypertenze bez dušnosti).",
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.",
                  "Abdominální (viscerální) obezita (postava typu jablka).",
                  "Nekróza: lýza buňky, vylití obsahu do okolí aktivuje zánět (horečka, leukocytóza, bolest)."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poškození a smrt buňky."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce?",
            "options": [
                  "Sérový albumin značící těžkou proteinkalorickou malnutrici je: < 25 g/l",
                  "Rozmezí celkového IgE u zdravých dospělých je: < 100 kU/l",
                  "Doba pro rozvoj stabilní chronické adaptace (hypertrofie) je: týdny až měsíce",
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Malnutrice.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Imunopatologické reakce.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem chemických vlivů."
            ]
      }
]
  },
  "gen-48": {
    richContent: {
      definition: `Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko.`,
      etiology: [`Genetická predispozice k inzulínové rezistenci a ukládání viscerálního tuku.`, `Nevhodný životní styl: nadměrný příjem kalorií (sacharidy, nasycené tuky) a nedostatek pohybu.`, `Chronický mírný zánět spojený s obezitou.`],
      pathogenesis: [`Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae.`, `Vysoké FFA v játrech tlumí inzulínovou signalizaci (inzulínová rezistence) a stimulují produkci VLDL (hypertriglyceridémie).`, `Kompenzační hyperinzulinémie stimuluje sympatikus a zvyšuje reabsorpci sodíku v ledvinách, což vede k arteriální hypertenzi.`],
      clinicalManifestation: [`Abdominální (viscerální) obezita (postava typu jablka).`, `Arteriální hypertenze, mírná hyperglykémie nalačno nebo porušená glukózová tolerance.`, `Následky: akcelerovaná ateroskleróza vyúsťující v infarkt myokardu, ischemickou CMP a rozvoj diabetu 2. typu.`],
      diagnostics: [`Měření obvodu pasu a krevního tlaku.`, `Biochemické vyšetření lipidového spektra nalačno (triglyceridy, HDL cholesterol).`, `Stanovení glykémie nalačno nebo oGTT.`]
    },
    tableData: [
      { name: `Kritérium NCEP-ATP III pro obvod pasu u mužů`, value: `> 102 cm (ženy > 88 cm)` },
      { name: `Kritérium NCEP-ATP III pro triglyceridy`, value: `>= 1.7 mmol/l` },
      { name: `Kritérium NCEP-ATP III pro HDL cholesterol u mužů`, value: `< 1.0 mmol/l (ženy < 1.3 mmol/l)` },
      { name: `Kritérium NCEP-ATP III pro TK (nebo léčba hypertenze)`, value: `>= 130/85 mmHg` },
      { name: `Kritérium NCEP-ATP III pro glykémii nalačno`, value: `>= 5.6 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Metabolický syndrom X?",
            "options": [
                  "Stres je stav nespecifické reakce organismu na jakýkoliv působící stresor (fyzikální, chemický, psychický), popsaný Hansem Selyem jako Všeobecný adaptační syndrom (GAS).",
                  "Imobilizační syndrom je soubor patofyziologických změn v organismu způsobených dlouhodobým omezením tělesného pohybu nebo klidem na lůžku.",
                  "Metabolický syndrom X je soubor patofyziologických faktorů (obezita, hypertenze, dyslipidémie, hyperglykémie), jejichž společným jmenovatelem je inzulínová rezistence, a které výrazně zvyšují kardiovaskulární riziko.",
                  "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Stres a všeobecný adaptační syndrom.",
                  "Nesprávně. Tato definice popisuje téma: Vliv celkové a částečné imobilizace.",
                  "Správně! Toto je přesná patofyziologická definice pro: Metabolický syndrom X.",
                  "Nesprávně. Tato definice popisuje téma: Respirační acidóza a alkalóza."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Metabolický syndrom X?",
            "options": [
                  "Exogenní pyrogeny: lipopolysacharidy gramnegativních bakterií (endotoxiny), viry, plísně.",
                  "Hypokalcémie: hypoparatyreóza, deficit vitaminu D, chronické selhání ledvin (retence fosfátů sráží Ca2+), akutní pankreatitida (zmýdelnatění).",
                  "Traumatické narušení integrity cévní stěny (řezné rány, zlomeniny, tupé nárazy).",
                  "Genetická predispozice k inzulínové rezistenci a ukládání viscerálního tuku."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Horečka.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poruchy bilance kalcia (Ca2+) a fosfátů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Krvácení.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Metabolický syndrom X."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Metabolický syndrom X?",
            "options": [
                  "RAC: alveolární hypoventilace vede k vzestupu pCO2 v krvi (hyperkapnie). Hromadění CO2 zvyšuje koncentraci kyseliny uhličité a snižuje pH.",
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.",
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry.",
                  "Viscerální tuk je metabolicky vysoce aktivní a secernuje prozánětlivé adipokiny a uvolňuje volné mastné kyseliny (FFA) přímo do v. portae."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Metabolický syndrom X."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Metabolický syndrom X?",
            "options": [
                  "Rozvoj hluboké žilní trombózy (HŽT) z venostázy a následná plicní embolie.",
                  "Sepse: horečka nebo hypotermie, tachykardie, tachypnoe, alterace vědomí, hypotenze.",
                  "Abdominální (viscerální) obezita (postava typu jablka).",
                  "Lokální příznaky: komprese okolí, destrukce tkáně, obstrukce dutých orgánů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Vliv celkové a částečné imobilizace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Metabolický syndrom X.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Nádorové bujení."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Metabolický syndrom X?",
            "options": [
                  "Počet buněk v 1 gramu nádorové tkáně (detekční limit) je: cca 10^9 buněk",
                  "Definiční pokles Srdečního indexu (CI) u šoku je: < 2.2 l/min/m^2",
                  "Kritérium NCEP-ATP III pro obvod pasu u mužů je: > 102 cm (ženy > 88 cm)",
                  "Rychlost ztráty svalové hmoty při imobilizaci je: 1.5 - 2 % denně (v prvních 2 týdnech)"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Nádorové bujení.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Metabolický syndrom X.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Vliv celkové a částečné imobilizace."
            ]
      }
]
  },
  "gen-49": {
    richContent: {
      definition: `Hypoglykemie je stav poklesu koncentrace glukózy v krvi pod kritickou mez, který ohrožuje energetické zásobení mozku.`,
      etiology: [`U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.`, `U nediabetiků: insulinom (nádor z beta-buněk), těžké poškození jater (selhání glukoneogeneze), sepse, hladovění.`],
      pathogenesis: [`Glukóza je hlavním energetickým substrátem pro mozek. Mozek si neumí glukózu ukládat ani syntetizovat, je závislý na glykémii.`, `Pokles glykémie pod 3.9 mmol/l aktivuje kontraregulaci: uvolnění glukagonu a adrenalinu, později růstového hormonu a kortizolu.`, `Pokud glykémie dále klesá, dochází k energetickému deficitu neuronů (neuroglykopénii) a k narušení jejich funkcí.`],
      clinicalManifestation: [`Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost.`, `Neuroglykopenické: zmatenost, poruchy chování (agresivita, apatie), rozmazané vidění, křeče, kóma (hypoglykemické kóma).`, `Následky: protrahovaná těžká hypoglykémie může způsobit ireverzibilní poškození mozku a vyvolat maligní arytmie.`],
      diagnostics: [`Okamžité stanovení glykémie (glukometrem z kapilární krve nebo laboratorně z plazmy).`, `**Whippleova triáda**: klinické příznaky, dokumentovaná nízká glykémie, rychlý ústup příznaků po podání glukózy.`, `Stanovení inzulínu a C-peptidu při podezření na insulinom (C-peptid je vysoký u insulinomu, nízký u předávkování exogenním inzulínem).`]
    },
    tableData: [
      { name: `Limit pro definici hypoglykémie u diabetiků`, value: `< 3.9 mmol/l` },
      { name: `Limit pro definici hypoglykémie u nediabetiků`, value: `< 2.8 mmol/l` },
      { name: `Kritická hodnota glykémie pro rozvoj kómatu`, value: `< 1.5 - 2.0 mmol/l` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Hypoglykemie?",
            "options": [
                  "Respirační acidóza (RAC) je pokles pH krve pod 7.35 způsobený retencí CO2 při hypoventilaci. Respirační alkalóza (RAL) je vzestup pH nad 7.45 způsobený nadměrným vylučováním CO2 při hyperventilaci.",
                  "Sepse je život ohrožující orgánová dysfunkce způsobená dysregulovanou odpovědí hostitele na infekci. MODS je konečné stadium představující selhání funkce dvou nebo více orgánových systémů.",
                  "Kardiogenní šok je selhání tkáňové perfuze v důsledku primární poruchy čerpací funkce srdce. Obstrukční šok je způsoben mechanickou překážkou plnění srdce nebo průtoku krve.",
                  "Hypoglykemie je stav poklesu koncentrace glukózy v krvi pod kritickou mez, který ohrožuje energetické zásobení mozku."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Respirační acidóza a alkalóza.",
                  "Nesprávně. Tato definice popisuje téma: Sepse, syndrom multiorgánové dysfunkce (MODS).",
                  "Nesprávně. Tato definice popisuje téma: Kardiogenní a obstrukční šok.",
                  "Správně! Toto je přesná patofyziologická definice pro: Hypoglykemie."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Hypoglykemie?",
            "options": [
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Izotonická: nadměrný přívod fyziologického roztoku, srdeční selhání, jaterní cirhóza, nefrotický syndrom (sekundární retence Na+ a vody).",
                  "Hypercholesterolémie, zejména zvýšená koncentrace LDL a pokles HDL v plazmě.",
                  "Tromboembolie (95 % případů): nejčastěji z hlubokých žil dolních končetin a pánve."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je klíčový etiologický faktor u tématu: Hypoglykemie.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hyperhydratace.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Ateroskleróza.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Embolie."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Hypoglykemie?",
            "options": [
                  "Patogeneze zkoumá mechanismy rozvoje, průběhu a zakončení patologických procesů.",
                  "Plicní embolie (PE): trombus projde pravým srdcem do plicní arterie, kde mechanicky ucpe větve řečiště.",
                  "Glukóza je hlavním energetickým substrátem pro mozek. Mozek si neumí glukózu ukládat ani syntetizovat, je závislý na glykémii.",
                  "Typ I (časný typ): alergen přemostí IgE protilátky na mastocytech, což vyvolá degranulaci a uvolnění histaminu a leukotrienů."
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Definice nemoci a zdraví.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Embolie.",
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Hypoglykemie.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Imunopatologické reakce."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Hypoglykemie?",
            "options": [
                  "Abdominální (viscerální) obezita (postava typu jablka).",
                  "Akutní komplikace: ruptura plátu s nasedající trombózou vede k infarktu myokardu nebo ischemické CMP.",
                  "Kvantitativní stádia: Somnolence (spavost, reaguje na slovní podnět), Sopor (reaguje na bolestivý podnět), Kóma (nereaguje na žádné podněty, vyhasínají reflexy).",
                  "Autonomní (aktivace sympatiku): pocení, třes, palpitace, pocit hladu, úzkost, bledost."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Metabolický syndrom X.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Ateroskleróza.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy vědomí.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Hypoglykemie."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Hypoglykemie?",
            "options": [
                  "Teplotní práh pro aktivaci tepelných nociceptorů je: > 43 °C",
                  "Normální parciální tlak kyslíku v arteriální krvi (paO2) je: 11.0 - 13.0 kPa (80-100 mmHg)",
                  "Limit pro definici hypoglykémie u diabetiků je: < 3.9 mmol/l",
                  "Věk pro definici předčasné puberty u dívek je: < 8. rok"
            ],
            "correct": 2,
            "explanations": [
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Bolest.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Hypoxie a hyperoxie buňky.",
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Hypoglykemie.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poruchy růstu."
            ]
      }
]
  },
  "gen-50": {
    richContent: {
      definition: `Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu.`,
      etiology: [`Změny tlaku: rychlý pokles tlaku u potápěčů (dekompresní nemoc), výbuchy (blast syndrom).`, `Crush syndrom: zasypání při zemětřesení, autonehody, dlouhodobé stlačení končetiny v bezvědomí.`, `Hluk: dlouhodobá expozice zvuku o vysoké intenzitě.`],
      pathogenesis: [`Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.`, `Crush syndrom a rhabdomyolýza: mechanický tlak ničí sarkolemu svalových buněk. Dochází k úniku draslíku, fosfátů a **myoglobinu** do oběhu.`, `Po uvolnění tlaku (reperfúze) myoglobin v ledvinách precipituje v tubulech (při acidóze) a působí nefrotoxicky, což vyvolá akutní tubulární nekrózu (AKI).`, `Hluk: akustické trauma poškozuje vláskové buňky Cortiho orgánu.`],
      clinicalManifestation: [`Dekompresní nemoc: bolesti kloubů ('bends'), svědění kůže, dušnost, neurologické výpadky.`, `Crush syndrom: otok a ischémie končetiny, tmavě hnědá moč (myoglobinurie), oligurie až anurie (AKI).`, `Riziko náhlé smrti po uvolnění tlaku z důvodu těžké hyperkalémie (draslík ze svalů vyvolá srdeční zástavu).`],
      diagnostics: [`Měření aktivity **kreatinkinázy (CK)** a myoglobinu v séru (markery rhabdomyolýzy).`, `Vyšetření moči chemicky a sedimentu (myoglobinurie - falešná pozitivita na krev bez erytrocytů).`, `Sledování hladiny draslíku a renálních parametrů (urea, kreatinin) v séru.`]
    },
    tableData: [
      { name: `Normální aktivita kreatinkinázy (CK) v séru`, value: `< 3.0 ukat/l` },
      { name: `CK u závažné rhabdomyolýzy (crush syndrom)`, value: `> 50 - 100 ukat/l (i více než 10násobek normy)` },
      { name: `Práh intenzity zvuku pro riziko poškození sluchu`, value: `> 85 dB (dlouhodobě)` },
      { name: `Práh bolesti pro sluchový aparát`, value: `130 - 140 dB` }
    ],
    quiz: [
      {
            "question": "Které tvrzení nejlépe definuje nebo popisuje téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk?",
            "options": [
                  "Šok je akutní, život ohrožující syndrom charakterizovaný generalizovanou hypoperfuzí tkání, která vede k deficitu kyslíku a živin v buňkách a k metabolickému rozvratu.",
                  "Časový průběh nemoci určuje dynamiku kompenzačních reakcí. Kompenzace je stav, kdy organismus udržuje funkci orgánu adaptací; dekompenzace je selhání těchto mechanismů vedoucí k orgánovému selhání.",
                  "Smrt buňky je konečným stádiem buněčného poškození. Apoptóza je programovaná, energeticky závislá smrt; nekróza je náhlá, pasivní smrt buněk vyvolávající zánětlivou reakci.",
                  "Patologické změny tlaku prostředí vyvolávají dekompresní nemoc nebo barotrauma. Crush syndrom (syndrom zasypání) vzniká dlouhodobým stlačením svalů s jejich následnou nekrózou (rhabdomyolýzou) a uvolněním myoglobinu do oběhu."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tato definice popisuje téma: Šok - definice, etiopatogeneze, rozdělení.",
                  "Nesprávně. Tato definice popisuje téma: Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
                  "Nesprávně. Tato definice popisuje téma: Poškození a smrt buňky.",
                  "Správně! Toto je přesná patofyziologická definice pro: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Který z následujících etiologických faktorů (příčin/rizikových faktorů) je specifický pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk?",
            "options": [
                  "Extrémní teploty (chlad -> omrzliny, podchlazení; teplo -> popáleniny, úžeh, úpal).",
                  "Biologické noxy (bakterie, viry, paraziti).",
                  "U diabetiků: předávkování inzulínem nebo perorálními antidiabetiky (zejména sulfonylureou), vynechání jídla, alkohol, těžká fyzická zátěž.",
                  "Změny tlaku: rychlý pokles tlaku u potápěčů (dekompresní nemoc), výbuchy (blast syndrom)."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Poškození vlivem fyzikálních vlivů.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Lokální zánětová odpověď.",
                  "Nesprávně. Tento etiologický bod (příčina) patří k tématu: Hypoglykemie.",
                  "Správně! Toto je klíčový etiologický faktor u tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Jaký patofyziologický mechanismus (patogeneze) je klíčový v rozvoji tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk?",
            "options": [
                  "Dekompresní nemoc: rychlý vzestup z hloubky uvolňuje plynný dusík z tkání ve formě bublin, které ucpávají kapiláry.",
                  "MAC: nadbytek fixních kyselin spotřebovává hydrogenuhličitanové pufry, což vede k poklesu pH.",
                  "Izotonická: tekutina se hromadí v extracelulárním prostoru (ECF) a filtruje se do intersticia, objem buněk (ICF) se nemění.",
                  "Zvracení je koordinováno **centrem pro zvracení** v prodloužené míše, které přijímá signály z GIT, CTZ, vestibulárního aparátu a kůry."
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Tento patofyziologický mechanismus je hlavní součástí patogeneze tématu: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Metabolická acidóza a alkalóza.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Hyperhydratace.",
                  "Nesprávně. Tento patofyziologický mechanismus se uplatňuje u tématu: Nauzea, zvracení."
            ]
      },
      {
            "question": "Jaký klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk?",
            "options": [
                  "Ischemické stadium: orgánová dysfunkce (oligurií, dušnost u ARDS, poruchy vědomí).",
                  "Rozvoj periferních otoků, ascitu a hydrothoraxu.",
                  "Nanismus: malý vzrůst, harmonické proporce. Akromegalie: zvětšování aker (ruce, nohy, čelist), vnitřních orgánů.",
                  "Dekompresní nemoc: bolesti kloubů ('bends'), svědění kůže, dušnost, neurologické výpadky."
            ],
            "correct": 3,
            "explanations": [
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Diseminovaná intravaskulární koagulace (DIC).",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Hyperhydratace.",
                  "Nesprávně. Tento projev/symptom je typickým znakem tématu: Poruchy růstu.",
                  "Správně! Tento klinický projev, symptom nebo následek je typický pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
            ]
      },
      {
            "question": "Která z následujících hodnot, referenčních rozmezí nebo kritérií je správná pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk?",
            "options": [
                  "Normální aktivita kreatinkinázy (CK) v séru je: < 3.0 ukat/l",
                  "Teplota pro kritérium SIRS je: < 36 °C nebo > 38 °C",
                  "Definice obezity 1. stupně podle BMI je: 30.0 - 34.9 kg/m^2",
                  "Aktivní toxická/hepatotoxická jednorázová dávka paracetamolu je: > 7.5 - 10 g (u dospělého)"
            ],
            "correct": 0,
            "explanations": [
                  "Správně! Toto je důležitá referenční hodnota, rozmezí nebo kritérium pro téma: Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Systémová zánětlivá odpověď - etiopatogeneze, následky.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Obezita.",
                  "Nesprávně. Tato hodnota, rozmezí či kritérium platí pro téma: Poškození vlivem chemických vlivů."
            ]
      }
]
  },
};

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
