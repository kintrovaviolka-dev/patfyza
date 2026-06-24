import os

def find_matching_brace(text, start_pos):
    brace_count = 0
    in_quote = False
    quote_char = None
    escaped = False
    
    for i in range(start_pos, len(text)):
        char = text[i]
        if escaped:
            escaped = False
            continue
        if char == '\\':
            escaped = True
            continue
        if char in ('"', "'", '`'):
            if not in_quote:
                in_quote = True
                quote_char = char
            elif char == quote_char:
                in_quote = False
                quote_char = None
            continue
        if in_quote:
            continue
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                return i
    return -1

def expand_key(fpath, key, new_block_content):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Locate the key
    key_str = f'"{key}":'
    pos = content.find(key_str)
    if pos == -1:
        # Try without double quotes or with single quotes just in case
        key_str = f"'{key}':"
        pos = content.find(key_str)
        if pos == -1:
            raise ValueError(f"Key {key} not found in {fpath}")
            
    # Locate the opening brace of the value object
    brace_pos = content.find("{", pos + len(key_str))
    if brace_pos == -1:
        raise ValueError(f"Opening brace not found for key {key} in {fpath}")
        
    matching_brace_pos = find_matching_brace(content, brace_pos)
    if matching_brace_pos == -1:
        raise ValueError(f"Matching brace not found for key {key} in {fpath}")
        
    # We want to replace the whole block, starting from the key itself
    # up to the matching brace of its value.
    # Note: We must preserve the commas or formatting outside.
    new_entry = f'"{key}": {new_block_content}'
    
    new_content = content[:pos] + new_entry + content[matching_brace_pos + 1:]
    
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"Successfully expanded {key} in {fpath}")

# New blocks
spec_1_8 = """{
    richContent: {
      clinicalPearl: "Chronické pravostranné selhání (cor pulmonale) vzniká nejčastěji retrográdním přenosem tlaku při levostranném srdečním selhání, nikoli izolovaným plicním onemocněním.",
      definition: "Pravostranné srdeční selhání je charakterizováno neschopností pravé komory přečerpat krev z venózního systému do plicního řečiště, což vede k městnání krve ve velkém oběhu.",
      etiology: [
        "Levostranné srdeční selhání (nejčastější příčina - retrográdní přenos tlaku přes plicní cirkulaci).",
        "Chronické plicní nemoci (CHOPN, těžká plicní fibróza) vedoucí k rozvoji *Cor pulmonale*.",
        "Akutní plicní embolie (masivní uzávěr plicnice způsobí akutní přetížení a selhání pravé komory).",
        "Chlopenní vady pravého srdce: trikuspidální regurgitace, pulmonální stenóza."
      ],
      pathogenesis: [
        "Zvýšení afterloadu pravé komory (např. při plicní hypertenzi) nebo pokles kontraktility (infarkt PK) vede k dilataci PK a zvýšení plnicích tlaků v pravé síni.",
        "Zvýšený tlak v pravé síni se retrográdně přenáší do horní a dolní duté žíly, což zvyšuje hydrostatický tlak v žilním a kapilárním řečišti velkého oběhu.",
        "Transudace tekutiny z cévního řečiště do intersticia vlivem zvýšeného hydrostatického tlaku vede k rozvoji otoků a ascitu.",
        "Chronické městnání v játrech (nutmeg liver / muškátová játra) vede k atrofii hepatocytů kolem centrální žíly a může vyústit v městnavou cirhózu (kardiální cirhóza)."
      ],
      clinicalManifestation: [
        "Zvýšená náplň krčních žil (jugulární žilní distenze) a pozitivní hepatojugulární reflux.",
        "Symetrické otoky dolních končetin (perimaleolární otoky, u ležících v oblasti sakra) – jsou těstovité, studené a závislé na poloze.",
        "Městnání v břišních orgánech: bolestivá hepatomegalie (napětí pouzdra jater), dyspeptické potíže při městnání v GIT, ascites.",
        "Nykturie – v noci při poloze vleže dochází k resorpci otoků a zvýšení perfuze ledvin, což zvyšuje diurézu."
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
      },
      {
        question: "Co je to hepatojugulární reflux a jak se klinicky vyšetřuje?",
        options: [
          "Tlak na játra u pacienta vleže způsobí pokles tlaku v jugulárních žilách v důsledku aktivace baroreflexu.",
          "Tlak na oblast jater po dobu 10-30 sekund vyvolá viditelné zvýšení náplně krčních žil u pacientů s městnáním v pravém srdci, protože pravá komora nedokáže přečerpat zvýšený venózní návrat.",
          "Jde o zpětný tok žluči do žaludku při portální hypertenzi vyvolávající zvracení.",
          "Vyšetření sluchu u pacienta s hepatomegalií."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Tlak na játra venózní návrat zvyšuje, což u selhávajícího pravého srdce náplň žil zvýší, nikoli sníží.",
          "Správně! Hepatojugulární reflux je pozitivní tehdy, když kompresí břicha (jater) zvýšíme venózní návrat a pravé srdce, které je přetížené, nestíhá krev odčerpávat, což vede k trvalému (> 15 s) zvýšení náplně krčních žil o více než 3 cm.",
          "Nesprávně. Tento pojem popisuje žilní městnání a plnění, nesouvisí se žlučí.",
          "Nesprávně. Jde o palpační a inspekční vyšetření krčních žil, nikoli sluchu."
        ]
      }
    ]
  }"""

spec_1_9 = """{
    richContent: {
      clinicalPearl: "Ejekční frakce (EF) levé komory rozlišuje srdeční selhání se sníženou EF (HFrEF, pod 40 %, systolická dysfunkce) a se zachovanou EF (HFpEF, nad 50 %, diastolická dysfunkce).",
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
        "Neurohumorální aktivace: pokles tlaku aktivuje sympatikus a RAAS, což vede k retenci sodíku/vody a remodelaci (hypertrofii/fibróze) myokardu.",
        "Remodelace myokardu: Chronické přetížení vede k hypertrofii kardiomyocytů a zmnožení vaziva, což mění tvar a geometrii levé komory (např. z elipsoidu na sféru).",
        "Úloha natriuretických peptidů (ANP, BNP): Jsou vylučovány kardiomyocyty při napětí stěny. Působí vazodilačně, podporují natriurézu a inhibují RAAS, čímž působí protichůdně k patologické aktivaci."
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
      },
      {
        question: "Jaký vliv má dlouhodobá aktivace osy renin-angiotenzin-aldosteron (RAAS) na myokard u srdečního selhání?",
        options: [
          "Působí čistě protektivně tím, že snižuje afterload a tlumí hypertrofii komory.",
          "Podporuje patologickou remodelaci myokardu (hypertrofii kardiomyocytů a proliferaci vaziva), zvyšuje preload (retencí sodíku a vody) a afterload (vazokonstrikcí Angiotenzinem II), což dále zatěžuje selhávající srdce.",
          "Zvyšuje glomerulární filtraci a odstraňuje otoky bez vedlejších účinků.",
          "Inhibuje sympatický nervový systém a zpomaluje srdeční frekvenci."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. RAAS naopak zvyšuje afterload a podporuje nepříznivou remodelaci/fibrotizaci.",
          "Správně! Osa RAAS je sice zpočátku užitečný kompenzační mechanismus udržující perfuzní tlak, ale dlouhodobě působí vysoce škodlivě. Angiotenzin II a aldosteron přímo stimulují hypertrofii komory, fibrotizaci a apoptózu kardiomyocytů. Zvýšení objemu tekutin (preload) a cévního odporu (afterload) tvoří bludný kruh.",
          "Nesprávně. Angiotenzin II sice udržuje filtraci za cenu konstrikce vas efferens, ale z dlouhodobého hlediska vede k retenci sodíku a vody, což otoky naopak zhoršuje.",
          "Nesprávně. RAAS sympatikus spíše stimuluje, nikoli inhibuje."
        ]
      }
    ]
  }"""

spec_1_13 = """{
    richContent: {
      clinicalPearl: "U plicních restrikcí (fibróz) se výrazně snižuje plicní poddajnost (compliance) a difuzní kapacita pro oxid uhelnatý (DLCO) v důsledku zesílení alveolo-kapilární membrány.",
      definition: "Restrikční plicní nemoci jsou charakterizovány snížením celkové plicní kapacity (TLC) v důsledku omezení expanze plicního parenchymu.",
      etiology: [
        "Intropulmonální příčiny (plicní fibrózy): idiopatická plicní fibróza (IPF), nespecifická intersticiální pneumonie (NSIP), pneumokoniózy (křemík - silikóza, azbest - azbestóza, uhelný prach - antrakóza), sarkoidóza, polékové poškození (amiodaron, bleomycin, methotrexát).",
        "Extrapulmonální příčiny (deformity hrudní stěny a páteře): těžká kyfoskolióza, ankylozující spondylitida (Bechtěrevova nemoc), obezita (Pickwickův syndrom / syndrom obezity-hypoventilace).",
        "Neuromuskulární poruchy: myasthenia gravis, amyotrofická laterální skleróza (ALS), paréza bránice, Guillain-Barré syndrom."
      ],
      pathogenesis: [
        "U plicních fibróz dochází k opakovanému mikroskopickému poškození alveolárního epitelu a aberantní reparaci, což vede k aktivaci fibroblastů a myofibroblastů. Ty masivně ukládají kolagen a extracelulární matrix v alveolárních stěnách, což zvyšuje tuhost plic a snižuje poddajnost (compliance) plic (k dosažení stejného objemu plic je zapotřebí vyvinout mnohem větší inspirační úsilí).",
        "Zesílení alveolo-kapilární membrány a zánik kapilárního řečiště výrazně naruje difúzi plynů (pokles DLCO) a zvětšuje alveolo-arteriální gradient pro kyslík (A-aDO2), což vede k hypoxémii nejprve při námaze a poté i v klidu (hyperkapnie se rozvíjí až v terminálním stadiu kvůli vysoké difuzní schopnosti CO2).",
        "U extrapulmonálních příčin je plicní parenchym intaktní, avšak mechanické bariéry (tuhost hrudníku, slabost svalů) brání adekvátní expanzi plic, což vede k alveolární hypoventilaci, retenci CO2 (hyperkapnii) a hypoxémii."
      ],
      clinicalManifestation: [
        "Námahová dušnost (dyspnoe) – má restrikční charakter (rychlé a mělké dýchání - tachypnoe), která postupně přechází v klidovou dušnost.",
        "Suchý, dráždivý, neproduktivní kašel způsobený mechanickým drážděním receptorů v remodelovaném intersticiu.",
        "Paličkovité prsty (digiti hippocratici) a nehty tvaru hodinového sklíčka jako projev chronické hypoxie a lokálního uvolňování růstových faktorů (PDGF, VEGF).",
        "Poslechově: na konci inspiria je nad plicními bázemi slyšitelný charakteristický jemný krepitus (přirovnávaný k rozepínání suchého zipu - Velcro crackles)."
      ],
      diagnostics: [
        "Spirometrie a bodypletysmografie: typický nález restrikční ventilační poruchy – snížení celkové plicní kapacity (TLC < 80 % náležité hodnoty) a vitální kapacity (VC), zatímco Tiffeneauův index (FEV1/FVC) je normální nebo zvýšený (nad 70-80 %).",
        "Vysokorozlišovací výpočetní tomografie (HRCT): typický obraz 'voštinové plíce' (honeycombing) s retikulárními změnami a trakčními bronchiektaziemi v pokročilých stadiích.",
        "Měření plicní difuzní kapacity pro oxid uhelnatý (DLCO): prokazuje snížení přenosu plynů přes alveolo-kapilární membránu (typické pro intrapulmonální formy, u extrapulmonálních forem je DLCO obvykle v mezích normy při přepočtu na alveolární objem).",
        "Vyšetření krevních plynů (Astrup): prokazuje parciální respirační insuficienci (hypoxémii s normo- či hypokapnií v důsledku hyperventilace) nebo globální respirační insuficienci (hypoxémie a hyperkapnie u extrapulmonální restrikce či terminálního stadia fibrózy)."
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
      },
      {
        question: "Jak se liší hodnota Tiffeneauova indexu (FEV1/FVC) u čistě restrikční ventilační poruchy ve srovnání s obstrukční poruchou?",
        options: [
          "U restrikce je výrazně snížený (pod 70 %), u obstrukce je normální nebo zvýšený.",
          "U restrikce je normální nebo dokonce zvýšený (nad 75-80 %), protože dochází k proporcionálnímu poklesu FEV1 i FVC, zatímco u obstrukce klesá primárně FEV1, což index výrazně snižuje.",
          "U obou typů poruch klesá index na nulu.",
          "U restrikce nelze tento index vůbec změřit."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto tvrzení platí pro obstrukční poruchu (např. CHOPN, astma).",
          "Správně! FEV1/FVC (Tiffeneauův index) vyjadřuje, jaký podíl vitální kapacity dokáže pacient vydechnout za první sekundu. U obstrukce je zúžené dýchací cesty zpomalují (pokles FEV1 je větší než pokles FVC, takže index klesá). U restrikce jsou plíce tuhé a malé (rychlý výdech je zachován, klesají FVC i FEV1 úměrně), proto zůstává index v normě nebo stoupá nad normu (např. > 85 %).",
          "Nesprávně. Index neklesá na nulu u žádné přežitelné patologie.",
          "Nesprávně. Spirometrie s měřením FEV1 a FVC je standardní metodou vyšetření obou poruch."
        ]
      }
    ]
  }"""

spec_1_18 = """{
    richContent: {
      clinicalPearl: "Kyslík difunduje přes alveolo-kapilární membránu 20krát pomaleji než oxid uhličitý, proto se poruchy difúze projevují hypoxémií při normální nebo snížené hladině paCO2 (hypokapnii).",
      definition: "Poruchy plicní difúze jsou charakterizovány zhoršeným přestupem plynů (zejména kyslíku) přes alveolo-kapilární membránu z důvodu jejího zesílení nebo zmenšení celkové plochy.",
      etiology: [
        "Zesílení (ztluštění) alveolo-kapilární membrány (intersticiální plicní procesy): idiopatická plicní fibróza (IPF), nespecifická intersticiální pneumonie (NSIP), sarkoidóza, plicní edém (přítomnost tekutiny v intersticiu u levostranného srdečního selhání), azbestóza, silikóza.",
        "Redukce celkové plochy alveolo-kapilární membrány: plicní emfyzém (destrukce interalveolárních sept a tvorba bul), chirurgické odstranění plicního tkáně (pneumonektomie, lobektomie), těžká destrukce plic záněty (tBC, nekrotizující pneumonie).",
        "Plicní vaskulární a perfuzní poruchy: chronická tromboembolická plicní hypertenze (CTEPH), plicní embolie (ztráta perfuze kapilár), primární plicní arteriální hypertenze (PAH) s remodelací a obliterací cév."
      ],
      pathogenesis: [
        "Pasivní transport plynů: Kyslík i oxid uhličitý procházejí přes alveolo-kapilární membránu výhradně pasivní difúzí podle koncentračního gradientu. Rychlost difúze (V_gas) popisuje Fickův zákon: V_gas = (A * D * delta_P) / T, kde A je plocha membrány, D difuzní koeficient plynu, delta_P rozdíl parciálních tlaků a T tloušťka membrány.",
        "Rozdílné vlastnosti plynů: Kyslík (O2) má mnohem menší rozpustnost (solubilitu) ve vodě/tkáních než oxid uhličitý (CO2). Difuzní koeficient (D) pro CO2 je přibližně 20krát vyšší než pro O2. Při zvětšení tloušťky membrány (T) nebo úbytku plochy (A) je proto jako první a nejvýznamněji postižena difúze O2, což vede k arteriální hypoxémii.",
        "Kontaktní čas erytrocytu: V klidu protéká erytrocyt plicní kapilárou přibližně 0,75 sekundy. K úplnému vyrovnání parciálních tlaků kyslíku mezi alveolem a krví stačí za normálních okolností pouze 0,25 sekundy (difuzní rezerva). Při poškození membrány se tato doba prodlužuje. Pokud je pacient v klidu, difúze se i přes zpoždění stihne dokončit. Při fyzické zátěži však stoupá srdeční výdej a krev protéká kapilárou mnohem rychleji (čas klesá až k 0,25 s). V této situaci se tlaky nestihnou vyrovnat a dochází k dramatickému poklesu parciálního tlaku kyslíku v odtékající krvi a k těžké námahové hypoxémii.",
        "Udržení paCO2: Protože CO2 difunduje velmi snadno, jeho vylučování není ztluštěním membrány v časných a středních stadiích narušeno. Rozvíjející se hypoxémie navíc dráždí periferní chemoreceptory, což vede k hyperventilaci. Pacient zvýšeným dýcháním vylučuje CO2 ještě efektivněji, což vede k normokapnii nebo častěji k hypokapnii (poklesu paCO2 pod fyziologické rozmezí)."
      ],
      clinicalManifestation: [
        "Námahová dušnost (dyspnoe) – pacient si stěžuje na nedostatek vzduchu při minimální námaze, což je přímý důsledek zkrácení kontaktního času erytrocytu.",
        "Tachypnoe a hyperventilace – zrychlené a mělké dýchání, vyvolané drážděním periferních chemoreceptorů hypoxií.",
        "Suchý kašel – způsobený mechanickou stimulací receptorů tahu v ztluštělém intersticiu plic.",
        "Centrální cyanóza (modravé zbarvení sliznic, jazyka a rtů) – objevuje se při poklesu saturace hemoglobinu pod 85 %."
      ],
      diagnostics: [
        "Měření difuzní kapacity plic (DLCO - Diffusing Capacity of the Lung for Carbon Monoxide): Pacient vdechne definovanou nízkou koncentraci oxidu uhelnatého (CO), který má extrémně vysokou afinitu k hemoglobinu. Pokles množství CO ve vydechnutém vzduchu odráží rychlost přenosu přes membránu. Pokles DLCO pod 80 % je citlivým ukazatelem poruchy difúze.",
        "Vyšetření krevních plynů (Astrup): prokazuje hypoxémii (pokles paO2), doprovázenou normokapnii nebo hypokapnii (snížení paCO2). Dále je patrné zvýšení alveolo-arteriálního gradientu kyslíku (A-aDO2), což ukazuje na neefektivní přenos z alveolů do kapilár.",
        "Spirometrie a bodypletysmografie: pomáhá odlišit, zda je porucha difúze doprovázena restrikcí (intersticiální procesy - pokles TLC) nebo obstrukcí s destrukcí (emfyzém při CHOPN)."
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
      },
      {
        question: "Jak ovlivňuje fyzická zátěž (cvičení) parciální tlak kyslíku v krvi (paO2) u pacienta s poruchou plicní difúze?",
        options: [
          "Fyzická zátěž nemá na paO2 žádný vliv, protože se zvýší spotřeba kyslíku ve svalech, ne v plicích.",
          "Zátěž výrazně snižuje paO2 (zhoršuje hypoxémii), protože zkracuje dobu pobytu erytrocytu v plicní kapiláře (kontaktní čas) na hodnoty, kdy se parciální tlaky O2 nestihnou přes poškozenou membránu vyrovnat.",
          "Zátěž paO2 zvyšuje, protože zrychlený tlukot srdce mechanicky protlačuje kyslík přes membránu.",
          "Zátěž vede k okamžitému vzestupu paCO2 a acidóze bez vlivu na kyslík."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Zátěž vykazuje u těchto pacientů zásadní vliv.",
          "Správně! V klidu protéká erytrocyt kapilárou 0,75 s a difúze kyslíku se stihne vyrovnat i přes poškozenou membránu. Při zátěži stoupá srdeční výdej, průtok krve plicním řečištěm se urychlí a kontaktní čas klesá k 0,25 s. U ztluštělé membrány tato krátká doba k difúzi kyslíku nestačí, což vede k hlubokému poklesu paO2 a těžké námahové hypoxémii.",
          "Nesprávně. Vyšší průtok krve naopak zkracuje čas na difúzi a tlak kyslíku klesá.",
          "Nesprávně. CO2 obvykle zůstává normální nebo klesá kvůli hyperventilaci vyvolané hypoxií."
        ]
      }
    ]
  }"""

spec_1_23 = """{
    richContent: {
      clinicalPearl: "U pneumonie dochází k tvorbě zánětlivého exsudátu v alveolech, což vede k lokálnímu pravolevému zkratu (shunt) a hypoxémii z důvodu perfúze neventilované tkáně.",
      definition: "Pneumonie je akutní zánětlivé onemocnění plicního parenchymu (alveolů a intersticia) infekční etiologie, které narušuje výměnu plynů.",
      etiology: [
        "Komunitní bakterie: *Streptococcus pneumoniae* (pneumokok – nejčastější původce lobární pneumonie), *Haemophilus influenzae*, *Moraxella catarrhalis*, *Staphylococcus aureus*.",
        "Atypické bakterie (intracelulární patogeny): *Mycoplasma pneumoniae* (častá u mladých lidí), *Chlamydia pneumoniae*, *Legionella pneumophila* (zdroj v klimatizacích/teplé vodě, těžký průběh s multiorgánovým postižením).",
        "Nosokomiální patogeny (nemocniční): *Pseudomonas aeruginosa*, *Klebsiella pneumoniae*, kmeny *Staphylococcus aureus* rezistentní na methicilin (MRSA).",
        "Virové pneumonie: virus chřipky (influenza), respirační syncytiální virus (RSV), SARS-CoV-2, adenoviry. Virová infekce často poškozuje řasinkový epitel a disponuje k sekundární bakteriální superinfekci.",
        "Aspirační pneumonie: vzniká aspirací žaludečního obsahu nebo ústní mikroflóry u pacientů s poruchou vědomí či polykání (často anaerobní flóra)."
      ],
      pathogenesis: [
        "Přelom v obraně: Patogeny proniknou do dolních dýchacích cest inhalací kapének nebo mikroaspirací ze sekrétů orofaryngu. Pokud překonají lokální obranu (hlen, řasinkový epitel, alveolární makrofágy, IgA protilátky), usídlí se v alveolech a začnou se množit.",
        "Fáze zánětlivé reakce (klasická lobární pneumonie): 1. Fáze kongesce (1.-2. den): Cévní dilatace a plnění alveolů tekutinou s bakteriemi. 2. Fáze červené hepatizace (3.-4. den): Alveoly jsou vyplněny erytrocyty, neutrofily a fibrinem (plíce připomíná játra). 3. Fáze šedé hepatizace (5.-7. den): Erytrocyty se rozpadají, v alveolech přetrvává fibrin a neutrofily. 4. Fáze rezoluce (od 8. dne): Enzymatický rozpad fibrinu a vyhojení.",
        "Ventilačně-perfuzní nepoměr: Alveoly vyplněné exsudátem jsou zcela neventilované (V = 0), ale kapilární perfuze (Q) kolem nich zůstává zachována. Vzniká funkční pravolevý plicní zkrat (shunt), kdy neokysličená krev z plicní tepny protéká nevzdušným lalokem a míjí alveolární plyn. Tato krev se pak smíchá s okysličenou krví ze zdravých částí plic (venózní příměs), což vede k těžké hypoxémii, která špatně reaguje na inhalaci čistého kyslíku.",
        "Atypické pneumonie: Zánět postihuje primárně intersticium (alveolární septa), alveoly zůstávají volné. Nedochází k masivní tvorbě exsudátu v alveolech, proto bývá chudý poslechový nález (tzv. diskrepance mezi klinickým a RTG nálezem)."
      ],
      clinicalManifestation: [
        "Typická (bakteriální) pneumonie: Náhlý začátek, vysoká horečka s třesavkou a zimnicí, schvácenost.",
        "Kašel: Zpočátku suchý, během 1-2 dnů produktivní s vykašláváním hustého, hnisavého nebo rezavého sputa.",
        "Pleurální bolest: Ostrá, bodavá bolest na hrudi lokalizovaná nad ložiskem zánětu, která se zhoršuje při hlubokém nádechu, kašli či pohybu.",
        "Dušnost a tachypnoe (zrychlené dýchání > 20/min), zatahování pomocných dýchacích svalů.",
        "Atypická pneumonie: Pozvolný začátek, dominují celkové příznaky (bolesti hlavy, kloubů, svalů, únava), suchý dráždivý kašel, subfebrilie a minimální dušnost."
      ],
      diagnostics: [
        "Fyzikální vyšetření: Poslechově vlhké přízvučné chrůpky nad zánětlivým ložiskem, trubicové dýchání (při konsolidaci plíce). Poklepově zkrácení poklepu nad postiženým lalokem, zvýšené fremitus pectoralis (prsní chvění).",
        "Rentgen hrudníku: Lobární pneumonie se projevuje jako homogenní zastínění jednoho laloku či segmentu s bronchogramem (kontrast vzdušných bronchů v konsolidované tkáni). Bronchopneumonie vykazuje nehomogenní ložiska postihující více laloků.",
        "Laboratoř: Výrazná leukocytóza s posunem doleva (bakteriální infekce), vysoké CRP a prokalcitonin.",
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
          "Nesprávně. Bronchospasmus is typický pro astma, pneumonie je zánět parenchymu."
        ]
      },
      {
        question: "Co je to bronchogram (aerobronchogram) viditelný na RTG snímku hrudníku u lobární pneumonie?",
        options: [
          "Jde o zobrazení cizího tělesa v dýchacích cestách.",
          "Jde o fenomén, kdy jsou v oblasti bezvzdušného, konsolidovaného plicního laloku (zaplaveného exsudátem) viditelné tmavé větve průdušek, které zůstaly naplněné vzduchem.",
          "Kontrastní vyšetření průdušek pomocí vdechnutého jódu.",
          "Obraz zúžených dýchacích cest u astmatického záchvatu."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Bronchogram je nepřímým znakem konsolidace parenchymu, nikoli cizího tělesa.",
          "Správně! Když zánětlivý exsudát zaplaví alveoly laloku, tato tkáň na RTG ztmavne (respektive zbělá - stínování). Průdušky (bronchy) však často zůstávají průchodné a naplněné vzduchem. Vzduch v nich tvoří tmavé větvené linie na bílém pozadí konsolidované plíce. Tento nález potvrzuje, že proces postihuje plicní parenchym a dýchací cesty jsou volné.",
          "Nesprávně. Aerobronchogram je přirozený kontrastní nález na prostém RTG snímku, nepoužívá se při něm jód.",
          "Nesprávně. U astmatu k zahuštění parenchymu a vzniku bronchogramu nedochází."
        ]
      }
    ]
  }"""

spec_1_30 = """{
    richContent: {
      clinicalPearl: "Akutní levostranné srdeční selhání se projevuje plicním městnáním (dušnost, ortopnoe, poslechově vlhké fenomény) v důsledku retrográdního hromadění krve před levou síní.",
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
        "Vzestup hydrostatického tlaku v plicních kapilárách nad onkotický tlak plazmy (obvykle nad 25-30 mmHg) vyvolá transsudaci tekutiny nejprve do plicního intersticia (intersticiální edém) a posléze do alveolů (alveolární edém).",
        "Městnání v plicích vede k aktivaci J-receptorů (juxtakapilárních receptorů) v plicním intersticiu zvýšeným tlakem, což dráždí k rychlému a mělkému dýchání.",
        "Klesá plicní poddajnost (compliance) a zvyšuje se odpor dýchacích cest (peribronchiální edém – asthma cardiale)."
      ],
      clinicalManifestation: [
        "Dušnost (dyspnoe) – námahová, klidová, záchvatovitá noční dušnost (asthma cardiale) a ortopnoe (nutnost sedět vzpřímeně).",
        "Při rozvoji plicního edému: vykašlávání růžového, pěnícího sputa (způsobené přítomností erytrocytů a surfaktantu v alveolární tekutině), poslechově oboustranné vlhké nevzdušné chrůpky (nejprve od bází plic, postupně stoupající nahoru).",
        "Příznaky nízkého srdečního výdeje (dopředné selhání): svalová slabost, chladná, bledá a opocená kůže (vazokonstrikce zprostředkovaná sympatikem k udržení tlaku pro mozek a srdce), oligurie (snížená perfuze ledvin), zmatenost až kardiogenní šok."
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
      },
      {
        question: "Co je to 'asthma cardiale' a jaký je jeho patofyziologický mechanismus?",
        options: [
          "Jde o alergickou reakci průdušek na kardiální léky, která způsobuje bronchospasmus.",
          "Jde o záchvatovitou dušnost vyvolanou městnáním krve v plicích, kde peribronchiální edém stlačuje bronchy a stimuluje vagové reflexy, což vede k bronchokonstrikci a pískotům podobným astmatu.",
          "Astma způsobené vdechnutím prachu v kardiologických ordinacích.",
          "Přechodný stav hyperventilace při fyzické námaze zdravého jedince."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Asthma cardiale nesouvisí s alergií na léky.",
          "Správně! Asthma cardiale je klinický syndrom doprovázející levostranné srdeční selhání. Městnání tekutiny v plicním intersticiu vede k otoku kolem průdušek (peribronchiální edém). Ten zužuje jejich lumen a dráždí receptory, což reflexně vyvolává bronchospasmus, kašel a poslechové pískoty, které mohou napodobit bronchiální astma.",
          "Nesprávně. Jde o kardiální, nikoliv environmentální příčinu.",
          "Nesprávně. Jde o patologický stav spojený s levostranným srdečním selháním, nikoli o normální reakci."
        ]
      }
    ]
  }"""

spec_1_32 = """{
    richContent: {
      clinicalPearl: "Akutní koronární syndrom vzniká rupturou vulnerabilního aterosklerotického plátu s nasedající trombózou, což vede k náhlé ischemii a případné nekróze myokardu.",
      definition: "Ischemická choroba srdeční (ICHS) je onemocnění myokardu vyvolané nepoměrem mezi dodávkou kyslíku (věnčitými tepnami) a jeho spotřebou. Dělí se na stabilní formy a akutní koronární syndromy.",
      etiology: [
        "Ateroskleróza věnčitých tepen (hlavní příčina - fixní stenóza nebo ruptura plátu).",
        "Spasmus koronární arterie (Prinzmetalova angina pectoris) způsobený hyperreaktivitou hladké svaloviny cév.",
        "Nekoronární příčiny: těžká hypertrofie levé komory (např. při aortální stenóze), těžká anémie, hypoxémie.",
        "Ovlivnitelné rizikové faktory: dyslipidémie (vysoké LDL, nízké HDL), arteriální hypertenze, diabetes mellitus, kouření, sedavý životní styl.",
        "Neovlivnitelné rizikové faktory: věk, mužské pohlaví, pozitivní rodinná anamnéza."
      ],
      pathogenesis: [
        "Stabilní AP: fixní aterosklerotický plát zužuje lumen tepny o více než 70 % (kritická stenóza). V klidu perfuze stačí, při zátěži (tachykardie, zvýšený TK) roste spotřeba kyslíku, kterou zúžená céva nedokáže pokrýt – vzniká přechodná subendokardiální ischemie (bolest na hrudi z hromadění adenosinu a laktátu dráždících nociceptory).",
        "Akutní koronární syndrom (AKS): ruptura či eroze nestabilního plátu (s tenkou vazivovou čepičkou a velkým lipidovým jádrem) odhalí subendotelový kolagen a tkáňový faktor. To spustí okamžitou adhezi, aktivaci a agregaci destiček a koagulační kaskádu, což vede k tvorbě trombu.",
        "Kompletní uzávěr tepny červeným trombem vede k transmurální nekróze (STEMI) se selháváním myokardu, rizikem arytmií a ruptury srdce. Neúplný uzávěr bílým trombem vede k subendokardiální nekróze (NSTEMI) nebo nestabilní angině pectoris (AP)."
      ],
      clinicalManifestation: [
        "Anginózní bolest: tlaková, pálivá, svíravá bolest za hrudní kostí (stenokardie) s typickou propagací do levé horní končetiny (zejména ulnární strana), krku, dolní čelisti, zad (mezi lopatky) nebo epigastria.",
        "U stabilní AP: bolest vzniká při definované fyzické či psychické zátěži, trvá do 5 minut a rychle mizí v klidu nebo po sublingválním nitroglycerinu.",
        "U AKS: bolest vzniká typicky v klidu, trvá > 20 minut, nereaguje na nitroglycerin a je často provázena vegetativním doprovodem (studený pot, nauzea, zvrácení), dušností, úzkostí (angor animi) a rizikem náhlé smrti."
      ],
      diagnostics: [
        "EKG (ST elevace u STEMI, deprese ST/inverze T u NSTEMI/stabilní AP).",
        "Kardiální markery: troponiny (vysoké u STEMI/NSTEMI, normální u stabilní a nestabilní AP).",
        "Echokardiografie: prokazuje poruchy segmentální kinetiky myokardu (hypokineze až akineze v oblasti postižené ischemií).",
        "Selektivní koronarografie (zlatý standard k lokalizaci uzávěru/zúžení a provedení PCI)."
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
      },
      {
        question: "Co je to Prinzmetalova (variantní) angina pectoris a čím je způsobena?",
        options: [
          "Jde o zánětlivé postižení osrdečníku vyvolané viry.",
          "Jde o ischemii myokardu způsobenou přechodným spasmem (stahem) koronární tepny, často bez fixní aterosklerotické stenózy, doprovázenou přechodnými elevacemi ST úseku na EKG.",
          "Forma ICHS, která se projevuje pouze při běhu na dlouhé tratě.",
          "Stav způsobený úplným a trvalým uzávěrem levé věnčité tepny trombem."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Zánět osrdečníku je perikarditida, nikoli Prinzmetalova AP.",
          "Správně! Prinzmetalova (variantní) angina pectoris je charakterizována spasmem koronární tepny, který vede k tranzitorní transmurální ischemii. Ta se na EKG projevuje elevacemi ST úseku, které po odeznění spasmu vymizí. Často se vyskytuje v klidu (typicky k ránu) a může být vyvolána např. chladem či kouřením.",
          "Nesprávně. Tato forma vzniká typicky v klidu a nezávisí na fyzické námaze.",
          "Nesprávně. Jde o reverzibilní spasmus, nikoli o fixní a permanentní trombózu."
        ]
      }
    ]
  }"""

spec_1_42 = """{
    richContent: {
      clinicalPearl: "Imunokomplexová glomerulonefritida (např. poststreptokoková) poškozuje filtrační bariéru zánětem, což vede k hematurii s přítomností dysmorfních erytrocytů a erytrocytárních válců.",
      definition: "Glomerulopatie jsou onemocnění postihující strukturu a funkci ledvinných glomerulů. Mohou být primární (omezené na ledviny) nebo sekundární (součást systémových chorob).",
      etiology: [
        "Primární glomerulopatie (omezené na ledviny): nemoc minimálních změn (Minimal Change Disease - MCD), fokálně segmentální glomeruloskleróza (FSGS), membranózní glomerulonefritida (MGN), IgA nefropatie (Bergerova choroba).",
        "Sekundární glomerulopatie (součást systémových onemocnění): diabetická nefropatie (Kimmelstiel-Wilsonova léze), lupusová nefritida (u SLE), amyloidóza ledvin, postinfekční (poststreptokoková) glomerulonefritida, Goodpastureův syndrom, ANCA-asociovaná vaskulitida.",
        "Genetické vlivy: Alportův syndrom (mutace kolagenu IV).",
        "Léky a toxiny: zlato, penicilamin, NSAID."
      ],
      pathogenesis: [
        "Filtrační bariéra ledvin se skládá ze tří vrstev: fenestrovaného endotelu, glomerulární bazální membrány (GBM) a podocytů s jejich výběžky (pedicely). Bariéra funguje na principu velikostní selektivity a nábojové selektivity (záporný náboj glykosaminoglykanů v GBM a sialoproteinů podocytů odpuzuje záporně nabité proteiny, zejména albumin).",
        "Nezánětlivé poškození (typicky vyúsťující v nefrotický syndrom): poškození podocytů (fúze a vyhlazení pedicelů) nebo ztráta záporného náboje filtrační bariéry vede k masivnímu úniku albuminu (proteinurii). Hypoalbuminémie snižuje onkotický tlak plazmy, což vede k otokům a kompenzační stimulaci RAAS a sympatiku. Játra zvyšují syntézu lipoproteinů, což vede k hyperlipidémii.",
        "Zánětlivé poškození (typicky vyúsťující v nefritický syndrom): ukládání imunitních komplexů in situ či cirkulujících aktivuje komplement a přitahuje leukocyty. Ty uvolňují enzymy poškozující stěnu kapilár, což vede k hematurii (únik erytrocytů) a poklesu GFR (oligurie, hypertenze).",
        "Sklerotizace glomerulů: Dlouhodobé poškození vede k náhradě glomerulů vazivem (glomeruloskleróza), což snižuje počet funkčních nefronů a vede k chronickému selhání ledvin (CKD)."
      ],
      clinicalManifestation: [
        "Nefrotický syndrom: proteinurie > 3.5 g/24h, těžké otoky (obličej, anasarka), hypoalbuminémie, hyperlipidémie, sklon k infekcím a trombózám.",
        "Nefritický syndrom: makroskopická hematurie (barvy čaje), hypertenze, oligurie.",
        "Plicní krvácení a hemoptýza (u Goodpastureova syndromu z důvodu zkřížené reakce protilátek proti plicním alveolům)."
      ],
      diagnostics: [
        "Renální biopsie s imunofluorescenčním a elektronovým mikroskopickým vyšetřením (zlatý standard).",
        "Vyšetření močového sedimentu (dysmorfní erytrocyty, erytrocytární válce) a kvantifikace proteinurie.",
        "Stanovení autoprotilátek (anti-GBM, ANCA, ANA)."
      ]
    },
    quiz: [
      {
        question: "Který patofyziologický mechanismus je podstatou Goodpastureova syndromu?",
        options: [
          "Ukládání amyloidových plátů v ledvinných tubulech",
          "Tvorba autoprotilátek proti alfa-3 řetězci kolagenu IV. typu v bazální membráně glomerulů a plicních alveolů, což vyvolá glomerulonefritidu a plicní krvácení",
          "Nekontrolující se mutace inzulínového receptoru",
          "Uzávěr ledvinné žíly krevní sraženinou"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Amyloidóza je jiná patologie.",
          "Správně! Goodpastureův syndrom je autoimunitní onemocnění s orgánově specifickými protilátkami proti kolagenu IV, který je klíčovou strukturní složkou jak glomerulární bazální membrány (GBM) ledvin, tak alveolární bazální membrány plic. Projevuje se jako plicně-renální syndrom.",
          "Nesprávně. Inzulínový receptor s Goodpastureovým syndromem nesouvisí.",
          "Nesprávně. Jde o imunologickou destrukci, ne o mechanickou venózní trombózu."
        ]
      },
      {
        question: "Která složka filtrační bariéry glomerulu je primárně poškozena u 'nemoci minimálních změn' (Minimal Change Disease), což vede k masivní selektivní proteinurii?",
        options: [
          "Fenestrovaný endotel kapilár, který se zcela rozpadá.",
          "Podocyty (dochází k fúzi a vyhlazení jejich pedicelů/výběžků) se ztrátou záporného náboje filtrační bariéry, přičemž světelný mikroskop vykazuje normální nález.",
          "Přívodná tepna (vas afferens), která podléhá spasmu.",
          "Tubulární buňky proximálního tubulu, které přestávají resorbovat bílkoviny."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Endotel kapilár je u MCD intaktní.",
          "Správně! Nemoc minimálních změn (Minimal Change Disease, MCD) je typická pro děti a projevuje se nefrotickým syndromem. Pod světelným mikroskopem vypadá glomerulus normálně (odtud název), ale elektronový mikroskop odhalí fúzi a vymizení pedicelů (výběžků) podocytů. Ztrácí se záporný náboj bariéry, což umožňuje masivní únik záporně nabitého albuminu do moči (selektivní proteinurie).",
          "Nesprávně. Jde o glomerulární postižení filtrace, nikoli o spasmus vas afferens.",
          "Nesprávně. Proximální tubulus sice resorbuje malé proteiny, ale masivní proteinurie u nefrotického syndromu vzniká selháním filtrace v glomerulu, které přesahuje kapacitu tubulů."
        ]
      }
    ]
  }"""

spec_2_8 = """{
    richContent: {
      clinicalPearl: "Tubulointersticiální nefritida (často indukovaná léky - např. NSAID či antibiotiky) se projevuje sterilní pyurií, eosinofilií a mírnou proteinurií při poklesu renálních funkcí.",
      definition: "Poruchy tubulárního transportu a tubulointersticiální nefritidy představují skupinu onemocnění poškozujících renální tubuly a okolní intersticiální tkáň, což vede k narušení koncentrační schopnosti ledvin, acidobazické rovnováhy a resorpce elektrolytů.",
      etiology: [
        "Akutní tubulointersticiální nefritida (aTIN): nejčastěji poléková (vyvolaná přecitlivělostí na NSAID, beta-laktamová antibiotika, sulfonamidy, PPI), infekční (pyelonefritida, leptospiróza, CMV, EBV) nebo autoimunitní (Sjögrenův syndrom, sarkoidóza).",
        "Chronická tubulointersticiální nefritida (cTIN): způsobená dlouhodobým užíváním analgetik (analgetická nefropatie), intoxikací těžkými kovy (olovo, kadmium), chronickou obstrukcí/refluxem nebo metabolickými poruchami (urátová nefropatie, hyperkalcémie).",
        "Dědičné tubulopatie: Bartterův syndrom (porucha Na-K-2Cl v Henleově kličce), Gitelmanův syndrom (porucha Na-Cl v distálním tubulu), Liddleův syndrom, Fanconiho syndrom (generalizovaná dysfunkce proximálního tubulu)."
      ],
      pathogenesis: [
        "Imunopatologická reakce u aTIN: Lék funguje jako hapten, který vyvolá imunitní odpověď (nejčastěji opožděný IV. typ přecitlivělosti s infiltrací T-lymfocytů a makrofágů, nebo I. typ s účastí IgE a eozinofilů). Zánětlivý infiltrát a edém v intersticiu poškozují tubulární buňky a vedou k poklesu GFR.",
        "Renální tubulární acidóza (RTA): 1. Distální RTA (typ I): Porucha sekrece H+ v interkalárních buňkách sběrného kanálku, což vede k neschopnosti okyselit moč pod pH 5.3 a metabolické acidóze s hypokalémií. 2. Proximální RTA (typ II): Porucha resorpce HCO3- v proximálním tubulu vedoucí k hydrogenuhličitanovému deficitu. 3. Typ IV RTA: Nedostatek či rezistence na aldosteron, způsobující acidózu s hyperkalémii.",
        "Bartterův vs. Gitelmanův syndrom: Bartterův syndrom napodobuje účinek kličkových diuretik (ztráty soli, hypokalémie, metabolická alkalóza a hyperkalciurií). Gitelmanův syndrom napodobuje účinek thiazidových diuretik (hypokalémie, metabolická alkalóza, hypomagnezémie, hypokalciurie)."
      ],
      clinicalManifestation: [
        "Polyurie, polydipsie (nadměrná žízeň) a snížená koncentrační schopnost ledvin (isostenurie).",
        "Svalová slabost a křeče z hypokalémie, případně metabolická acidóza (RTA) s hyperventilací (Kussmaulovo dýchání).",
        "U akutní TIN: horečka, kožní exantém (vyrážka), arthralgie (bolesti kloubů) a možný rozvoj akutního poškození ledvin s oligurií."
      ],
      diagnostics: [
        "Vyšetření moči: proteinurie (tubulární - nízká molekulární hmotnost, do 2 g/den), leukocyturie (u TIN s přítomností eozinofilů), glykosurie bez hyperglykémie (Fanconiho syndrom).",
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
      },
      {
        question: "Jak se patofyziologicky liší renální tubulární acidóza typu I (distální) od typu II (proximální)?",
        options: [
          "U typu I je zvýšená filtrace glukózy, u typu II je zablokována.",
          "U typu I (distální) jsou ledviny neschopné secernovat vodíkové ionty (H+) v distálním tubulu a moč zůstává alkalická (pH > 5.3) i při acidóze, zatímco u typu II (proximální) je narušena resorpce hydrogenuhličitanů (HCO3-) v proximálním tubulu.",
          "Typ I postihuje pouze játra, typ II pouze srdce.",
          "U typu I dochází k hyperkalémii, u typu II k hypokalémii."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. RTA se týká výhradně transportu kyselin a zásad, nikoli glukózy.",
          "Správně! Distální RTA (typ I) je charakterizována selháním H+-ATPázy v interkalárních buňkách sběrného kanálku, takže tělo nedokáže vyloučit H+ a pH moči neklesne pod 5,3 ani při systémové acidóze. Proximální RTA (typ II) je poruchou kotransportéru Na/HCO3 nebo karboanhydrázy v proximálním tubulu, což vede k neschopnosti resorbovat hydrogenuhličitany.",
          "Nesprávně. Obě formy jsou čistě renální tubulární patologie.",
          "Nesprávně. U obou forem (typ I i typ II) je typicky přítomna hypokalémie (ztráty draslíku), hyperkalémie je charakteristická pro typ IV RTA."
        ]
      }
    ]
  }"""

spec_2_15 = """{
    richContent: {
      clinicalPearl: "Snížená sekrece erytropoetinu a porucha hydroxylace vitamínu D na aktivní kalcitriol jsou hlavními endokrinními důsledky chronického selhání ledvin.",
      definition: "Ledviny mají významné endokrinní funkce, produkují hormony (renin, erytropoetin, aktivní vitamin D - kalcitriol) a působí jako cílový orgán for jiné hormony. Poruchy těchto funkcí doprovázejí zejména chronická onemocnění ledvin.",
      etiology: [
        "Chronické onemocnění ledvin (CKD) jakékoliv příčiny (diabetická nefropatie, hypertenzní nefroskleróza, chronické glomerulonefritidy), vedoucí k postupnému zániku funkčního parenchymu ledvin.",
        "Renální ischémie vyvolaná stenózou renální tepny (fibromuskulární dysplázie, ateroskleróza) stimulující juxtaglomerulární buňky.",
        "Genetické defekty: mutace genu pro 1a-hydroxylázu (způsobuje pseudodeficienci vitaminu D typ I) nebo mutace receptoru pro vitamin D.",
        "Nádory ledvin produkující hormony (reninom)."
      ],
      pathogenesis: [
        "Erytropoetinová osa: Erytropoetin (EPO) je glykoproteinový hormon syntetizovaný převážně peritubulárními intersticiálními buňkami (fibroblasty) v ledvinné kůře v reakci na hypoxii. Při chronickém poškození a fibrotizaci ledvin tyto buňky zanikají nebo se mění na myofibroblasty, které ztrácejí schopnost produkovat EPO, což vede k poklesu stimulace erytropoézy a rozvoji anémie.",
        "Osa vitaminu D a vápníku: Ledviny obsahují enzym 1a-hydroxylázu (v buňkách proximálního tubulu), který převádí 25-hydroxyvitamin D na aktivní kalcitriol. Při CKD klesá aktivita 1a-hydroxylázy (vlivem úbytku tubulů a vzestupu FGF-23). Nedostatek kalcitriolu snižuje aktivní vstřebávání vápníku a fosfátů v tenkém střevě, což vede k hypokalcémii.",
        "Sekundární hyperparatyreóza a kostní obrat: Současně dochází při poklesu GFR k retenci fosfátů, které přímo stimulují sekreci parathormonu (PTH) a vážou volný vápník v krvi. Hypokalcémie, hyperfosfatémie a deficit kalcitriolu stimulují hyperplázii příštítných tělísek a masivní sekreci PTH, což vede k odbourávání kostí (renální osteodystrofie).",
        "Renin-angiotenzin-aldosteronový systém (RAAS): Juxtaglomerulární buňky secernují renin při poklesu perfuzního tlaku, snížení dodávky NaCl k macula densa nebo stimulaci sympatikem. Renin aktivuje kaskádu RAAS, což vede k tvorbě Angiotenzinu II (silná vazokonstrikce) a aldosteronu (retence sodíku a vody) a rozvoji závažné hypertenze."
      ],
      clinicalManifestation: [
        "Renální anémie (normocytární, normochromní) projevující se únavou, bledostí, dušností a sníženou kognitivní funkcí.",
        "Renální osteodystrofie (bolesti kostí, zvýšené riziko patologických zlomenin, kalcifylaxe) v důsledku sekundární hyperparatyreózy.",
        "Renální hypertenze (často refrakterní a závažná, zatěžující levé srdce)."
      ],
      diagnostics: [
        "Laboratorní vyšetření: krevní obraz (hemoglobin, hematokrit), vápník, fosfor, PTH (parathormon), urea, kreatinin, eGFR.",
        "Stanovení hladiny erytropoetinu a aktivního vitaminu D (kalcitriolu) v séru.",
        "Měření krevního tlaku a duplexní sonografie ledvinných tepen (u podezření na stenózu)."
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
      },
      {
        question: "Jaký vliv má zvýšená hladina fibroblastového růstového faktoru 23 (FGF-23) u pacientů s chronickým selháním ledvin?",
        options: [
          "FGF-23 stimuluje tvorbu erytropoetinu v ledvinách.",
          "FGF-23 je secernován osteocyty v reakci na retenci fosfátů; zvyšuje vylučování fosfátů močí a tlumí aktivitu 1a-hydroxylázy v ledvinách, což vede k dalšímu poklesu hladiny kalcitriolu.",
          "FGF-23 působí jako silný vazodilatátor snižující krevní tlak.",
          "Způsobuje ukládání cholesterolu do stěny cév."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. FGF-23 nemá přímou souvislost s erytropoézou.",
          "Správně! FGF-23 (fibroblast growth factor 23) je tvořen osteocyty při hyperfosfatémii. Zvyšuje vylučování fosfátů v proximálním tubulu a zároveň potlačuje syntézu kalcitriolu (tlumí 1a-hydroxylázu), což dále prohlubuje hypokalcémii.",
          "Nesprávně. FGF-23 neovlivňuje cévní tonus přímo jako vazodilatátor.",
          "Nesprávně. FGF-23 přímo neovlivňuje metabolismus a ukládání lipidů."
        ]
      }
    ]
  }"""

f1 = "/Users/violakintrova/Downloads/verysadanyway-main/patfyza-main/data_special1.js"
expand_key(f1, "spec-1-8", spec_1_8)
expand_key(f1, "spec-1-9", spec_1_9)
expand_key(f1, "spec-1-13", spec_1_13)
expand_key(f1, "spec-1-18", spec_1_18)
expand_key(f1, "spec-1-23", spec_1_23)
expand_key(f1, "spec-1-30", spec_1_30)
expand_key(f1, "spec-1-32", spec_1_32)
expand_key(f1, "spec-1-42", spec_1_42)

f2 = "/Users/violakintrova/Downloads/verysadanyway-main/patfyza-main/data_special2.js"
expand_key(f2, "spec-2-8", spec_2_8)
expand_key(f2, "spec-2-15", spec_2_15)

print("All database keys successfully expanded!")
