// data_special2.js - Podrobné klinické texty a kvízy pro Speciální II.
const SPECIAL_2_DETAILS = {
  // spec-2-1: Vředová choroba gastroduodena & Gastritidy
  "spec-2-1": {
    keyTerms: ["Helicobacter pylori", "Peptický vřed", "NSAID", "Slizniční bariéra", "Gastritida", "Kyselina chlorovodíková"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie slizniční bariéry žaludku</h3>
          <p>Sliznice žaludku a dvanáctníku je vystavena extrémně kyselému prostředí ($pH \\approx 1-2$) a proteolytickému pepsinu. Integrity sliznice je udržována **rovnováhou mezi ochrannými (defenzivními) a poškozujícími (agresivními) faktory**.</p>
          <ul>
            <li><strong>Defenzivní faktory:</strong> Vrstva hlenu (mucin), sekrece hydrogenuhličitanových iontů ($HCO_3^-$), rychlá obnova epitelu, bohaté prokrvení (přísun kyslíku a živin, odplavení $H^+$) a **prostaglandiny** (zejména $PGE_2$), které stimulují sekreci hlenu a tlumí sekreci $HCl$.</li>
            <li><strong>Agresivní faktory:</strong> Kyselina chlorovodíková ($HCl$), pepsin, infekce <em>Helicobacter pylori</em> a užívání nesteroidních antirevmatik (NSAID).</li>
          </ul>
        </section>

        <section>
          <h3>2. Etiopatogeneze vředové choroby</h3>
          <ul>
            <li><strong>Helicobacter pylori:</strong> Gramnegativní bakterie, která produkuje enzym **ureázu**. Ureáza štěpí močovinu na amoniak a $CO_2$, čímž neutralizuje kyselé prostředí a umožňuje bakterii přežít. Amoniak a bakteriální toxiny (CagA, VacA) přímo poškozují epitel a vyvolávají chronický zánět, který stimuluje sekreci gastrinu a kyseliny.</li>
            <li><strong>Nesteroidní antirevmatika (NSAID):</strong> Blokují enzymy **cyklooxygenázy (COX-1 a COX-2)**, čímž potlačují syntézu prostaglandinů. Následuje pokles sekrece hlenu a bikarbonátů, zhoršení mikrocirkulace a přímé poškození sliznice.</li>
          </ul>
        </section>

        <section>
          <h3>3. Komplikace vředové choroby</h3>
          <ol>
            <li><strong>Krvácení (hemoragie):</strong> Eroze velké cévy na dně vředu. Projevuje se hematemézou (zvracení natrávené krve vzhledu kávové sedliny) nebo melénou (černá, koloidní stolice).</li>
            <li><strong>Perforace:</strong> Prohloubení vředu skrz celou stěnu žaludku/duodena do peritoneální dutiny. Vyvolá náhlou, krutou bolest (příznak 'udeření nožem') a difúzní peritonitidu.</li>
            <li><strong>Stenóza pyloru:</strong> Jizvení po chronických vředech zužuje výtokový trakt žaludku.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Jaký je hlavní patofyziologický mechanismus, kterým nesteroidní antirevmatika (NSAID) jako aspirin či ibuprofen poškozují žaludeční sliznici?",
        options: [
          "Přímá chemická neutralizace žaludečního hlenu",
          "Inhibice cyklooxygenázy (COX-1), což vede k deficitu prostaglandinů, poklesu sekrece hlenu a hydrogenuhličitanu a zhoršení prokrvení sliznice",
          "Stimulace nervus vagus k nadprodukci acetylcholinu",
          "Zvýšení sekrece bikarbonátu z pankreatu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. NSAID neneutralizují hlen chemicky.",
          "Správně! Prostaglandiny ($PGE_2$) jsou klíčové pro ochranu sliznice. Blokádou COX-1 (která za fyziologických okolností prostaglandiny tvoří) dochází k ochromení všech ochranných mechanismů žaludeční bariéry.",
          "Nesprávně. NSAID nestimulují vagus.",
          "Nesprávně. Pankreatický bikarbonát s tímto nesouvisí."
        ]
      }
    ]
  },

  // spec-2-2: Urolitiáza
  "spec-2-2": {
    keyTerms: ["Nefrolitiáza", "Kalciumoxalátové kameny", "Saturace moči", "Renální kolika", "Obstrukční uropatie", "Hydronefróza"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Patofyziologie tvorby kamenů</h3>
          <p><strong>Urolitiáza (ledvinové kameny)</strong> vzniká v důsledku precipitace rozpuštěných minerálů a solí v močových cestách. Proces zahrnuje **supersaturaci (přesycení)** moči danou látkou, nukleaci (vznik krystalizačního jádra), růst krystalů a jejich agregaci.</p>
          <p>Rozvoj usnadňuje dehydratace (koncentrovaná moč), změny pH moči a nedostatek inhibitorů krystalizace (např. citrát, pyrofosfát, glykoproteiny).</p>
        </section>

        <section>
          <h3>2. Typy močových kamenů</h3>
          <ul>
            <li><strong>Kalciumoxalátové / Kalciumfosfátové (75-80 %):</strong> Nejčastější. Vznikají při hyperkalciurii, hyperoxalurii a kyselém/neutrálním pH.</li>
            <li><strong>Struvitové (infekční - 10-15 %):</strong> Složené z fosforečnanu amonno-hořečnatého. Vznikají při infekcích bakteriemi produkujícími ureázu (např. <em>Proteus mirabilis</em>), které alkalizují moč ($pH > 7.2$). Mohou tvořit odlitkové kameny.</li>
            <li><strong>Kyselina močová (5-10 %):</strong> Vznikají při hyperurikosurii (dna, rozpad buněk) a trvale kyselém pH moči ($pH < 5.5$). Jsou skiagraficky nekontrastní (rentgenem neviditelné).</li>
            <li><strong>Cystinové (vzácné):</strong> Genetická porucha tubulárního transportu dibazických aminokyselin.</li>
          </ul>
        </section>

        <section>
          <h3>3. Projevy a následky</h3>
          <p>Hlavním projevem je **renální kolika** – krutá, záchvatovitá bolest vyvolaná spasmy hladké svaloviny močovodu při snaze posunout uvízlý kámen. Bolest se propaguje do třísel. Obstrukce odtoku moči vede k **hydronefróze** (rozšíření pánvičky a kalichů) a hrozí postrenální akutní poškození ledvin nebo rozvoj urosepse.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který patogenní faktor je nezbytný pro vznik struvitových (infekčních) močových kamenů?",
        options: [
          "Trvale nízké pH moči pod 5.0",
          "Přítomnost bakterií produkujících enzym ureázu (např. Proteus), které štěpí močovinu na amoniak a alkalizují moč",
          "Extrémní konzumace potravin bohatých na puriny",
          "Deficit parathormonu v krvi"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízké pH přeje tvorbě kamenů z kyseliny močové, nikoli struvitu.",
          "Správně! Ureáza produkuje amoniak ($NH_3$), který přijímá proton a tvoří amonný kationt ($NH_4^+$) a zvyšuje pH. V zásadité moči precipituje fosforečnan amonno-hořečnatý (struvit).",
          "Nesprávně. Puriny vedou k urátové litiáze.",
          "Nesprávně. Deficit PTH by vedl k hypokalcémii, nikoli k infekčním kamenům."
        ]
      }
    ]
  },

  // spec-2-3: Urgentní stavy z endokrinních příčin
  "spec-2-3": {
    keyTerms: ["Tyreotoxická krize", "Myxedémové koma", "Adrenální krize", "Diabetická ketoacidóza", "Hyperosmolární hyperglykemický syndrom"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Tyreotoxická krize</h3>
          <p>Živatele ohrožující vystupňování hypertyreózy vyvolané zátěží (infekce, operace). Dochází k masivnímu zaplavení organismu hormony $T_3$ a $T_4$ a hyperreaktivitě na katecholaminy. Projevy: těžká tachykardie, arytmie (fibrilace síní), hypertermie (až > 41 °C), dehydratace, neklid, delirium a srdeční selhání.</p>
        </section>

        <section>
          <h3>2. Myxedémové koma</h3>
          <p>Terminální stádium neléčené hypotyreózy. Dochází k extrémnímu poklesu metabolismu buněk. Projevy: těžká hypotermie, bradykardie, hypoventilace (hromadění $CO_2$), hyponatrémie, generalizované myxedémové otoky a kóma.</p>
        </section>

        <section>
          <h3>3. Adrenální (addisonská) krize</h3>
          <p>Akutní nedostatek glukokortikoidů (kortizolu) a mineralokortikoidů (aldosteronu) u pacientů s insuficiencí nadledvin při stresu. Projevy: těžká refrakterní hypotenze (kardiogenní a distribuční šok), těžká hyponatrémie, hyperkalémie a hypoglykémie.</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Která z následujících kombinací elektrolytových a metabolických poruch je typická pro akutní adrenální (addisonskou) krizi?",
        options: [
          "Hypernatrémie, hypokalémie a hyperglykémie",
          "Hyponatrémie, hyperkalémie a hypoglykémie",
          "Hyperkalcémie, hypofosfatémie a metabolická alkalóza",
          "Normální ionty a extrémní dehydratace bez acidózy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto je spíše obraz Cushingova syndromu/Connova syndromu.",
          "Správně! Deficit aldosteronu znemožňuje vylučování draslíku a reabsorpci sodíku ledvinami (hyponatrémie + hyperkalémie). Deficit kortizolu narušuje glukoneogenezi, což vede k hypoglykémii a těžké hypotenzi.",
          "Nesprávně. Tato kombinace odpovídá spíše hyperparatyreóze.",
          "Nesprávně. Iontové dysbalance jsou pro adonisovou krizi klíčovým diagnostickým znakem."
        ]
      }
    ]
  },

  // spec-2-4: Traumatické poškození mozku
  "spec-2-4": {
    keyTerms: ["Komoce (otřes mozku)", "Kontuze (pohmoždění)", "Epidurální hematom", "Subdurální hematom", "Intrakraniální tlak (ICP)", "Lucidní interval"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Komoce a Kontuze mozku</h3>
          <ul>
            <li><strong>Komoce (commotio cerebri):</strong> Funkční, reverzibilní porucha mozkové aktivity bez strukturálního poškození (CT nález je normální). Projevuje se krátkodobou ztrátou vědomí (do 15 minut), retrográdní amnézií, nauzeou a zvracením.</li>
            <li><strong>Kontuze (contusio cerebri):</strong> Strukturální poškození mozkové tkáně (ložisková nekróza, edém, krvácení). Vzniká v místě nárazu (coup) a na protilehlé straně (contre-coup). CT vykazuje ložiskové změny.</li>
          </ul>
        </section>

        <section>
          <h3>2. Intrakraniální hematomy</h3>
          <table>
            <thead>
              <tr>
                <th>Vlastnost</th>
                <th>Epidurální hematom (EDH)</th>
                <th>Subdurální hematom (SDH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zdroj krvácení</strong></td>
                <td>Arteriální (nejčastěji <em>a. meningea media</em>)</td>
                <td>Venózní (přemosťující žíly jdoucí do splavů)</td>
              </tr>
              <tr>
                <td><strong>Lokalizace</strong></td>
                <td>Mezi lebeční kostí a tvrdou plenou (dura mater)</td>
                <td>Mezi tvrdou plenou a pavučnicí (arachnoidea)</td>
              </tr>
              <tr>
                <td><strong>CT nález</strong></td>
                <td>Bikonvexní (čočkovitý) hyperdenzní útvar</td>
                <td>Srpkovitý hyperdenzní útvar podél hemisféry</td>
              </tr>
              <tr>
                <td><strong>Klinický průběh</strong></td>
                <td>Rychlá progrese, typický **lucidní interval** (přechodné probrání před kompresí mozku)</td>
                <td>Pomalejší progrese, u starších lidí může být chronický (týdny až měsíce po úrazu)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>3. Patofyziologie nitrolební hypertenze</h3>
          <p>Podle **Monro-Kellyho doktríny** je objem lebky konstantní. Hromadění krve (hematom) vede k vytlačení likvoru a venózní krve. Po vyčerpání kompenzačních možností dochází k prudkému vzestupu **intrakraniálního tlaku (ICP)**, poklesu mozkového perfuzního tlaku ($CPP = MAP - ICP$) a hrozí herniace (vklínění) mozkového kmene do týlního otvoru (foramen magnum) – Cushingův reflex (hypertenze, bradykardie, nepravidelné dýchání).</p>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Proč vzniká typický 'lucidní interval' u pacienta s epidurálním hematomem?",
        options: [
          "Dochází k okamžitému zhojení poškozené tepny",
          "Po úvodním otřesu mozku (bezvědomí) nastává období vědomí, než narůstající arteriální krvácení zvýší ICP a stlačí mozek",
          "Pacient upadá do trvalého bezvědomí až po podání léků",
          "Krev uniká do dýchacích cest"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Tepna a. meningea media sama spontánně nezanikne a nezahojí se bez intervence.",
          "Správně! První bezvědomí je způsobeno otřesem mozku (komocí). Po probrání se pacient cítí relativně dobře (lucidní interval), ale v epidurálním prostoru se hromadí arteriální krev. Jakmile tlak hematomu překročí kritickou mez, dojde ke stlačení mozku a rychlému kolapsu vědomí.",
          "Nesprávně. Bezvědomí je způsobeno mechanickým tlakem krve na mozek.",
          "Nesprávně. Krev se hromadí uvnitř lebky, nikoli v dýchacích cestách."
        ]
      }
    ]
  },

  // spec-2-5: Poruchy vestibuláru a mozečku
  "spec-2-5": {
    richContent: {
      definition: "Poruchy vestibulárního systému a mozečku způsobují narušení rovnováhy, koordinace cílených pohybů a svalového tonu. Ataxie je hlavním projevem motorické inkoordinace.",
      etiology: [
        "Cerebelární ischémie/krvácení, roztroušená skleróza (demyelinizační plaky v mozečku).",
        "Chronický alkoholismus vyvolávající atrofii vermis (červa mozečku).",
        "Vestibulární neuronitida, benigní paroxysmální polohové vertigo (BPPV), Menièrova choroba.",
        "Geneticky podmíněné spinocerebelární ataxie (SCA)."
      ],
      pathogenesis: [
        "Vermis mozečku integruje propriorecepci a řídí axiální svalstvo (stoj a chůze). Jeho poškození vede k trupové ataxii.",
        "Hemisféry mozečku (neocerebellum) plánují a jemně cílí pohyby končetin. Poškození vyvolá dysmetrii na končetinách.",
        "Vestibulární aparát detekuje pohyb hlavy. Asymetrické dráždění vestibulárních jader vede k iluzi pohybu (vertigo) a nystagmu."
      ],
      clinicalManifestation: [
        "Mozečková ataxie (chůze o široké bázi, vrávorání), intenční třes (třes narůstá s přibližováním se k cíli).",
        "Dysmetrie (přestřelování cíle při testu prst-nos) a adiadochokinéza (neschopnost provádět rychlé střídavé pohyby).",
        "Nystagmus (rytmické kmitání očí), rotační vertigo (závrať) doprovázené nauzeou a zvracením."
      ],
      diagnostics: [
        "Klinické vyšetření chůze (přímá chůze, chůze po čáře) a zkouška prst-nos / pata-koleno.",
        "Rombergův test (hodnotí příspěvek zraku k udržení stoje; u mozečkových poruch je stoj labilní bez ohledu na otevřené/zavřené oči).",
        "MRI mozku k zobrazení strukturálních kmenových a mozečkových změn."
      ]
    },
    quiz: [
      {
        question: "Který symptom je nejtypičtější pro ložiskové poškození mozečkové hemisféry?",
        options: [
          "Klidový třes rukou, který mizí při pohybu",
          "Intenční třes ruky doprovázený dysmetrií (přestřelováním při cílení)",
          "Spastická paréza dolních končetin s hyperreflexií",
          "Výpadek sluchu na straně poškození"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Klidový třes je typický pro Parkinsonovu nemoc (bazální ganglia), nikoliv mozeček.",
          "Správně! Intenční třes a dysmetrie jsou klasické příznaky neocerebelární léze, protože hemisféry odpovídají za přesné cílení pohybů ruky.",
          "Nesprávně. Mozečkové léze způsobují hypotonii, nikoliv spasticitu.",
          "Nesprávně. Sluch nesouvisí přímo s funkcí mozečkových hemisfér."
        ]
      }
    ]
  },

  // spec-2-6: Regulace endokrinního systému - negativní zpětná vazba
  "spec-2-6": {
    richContent: {
      definition: "Endokrinní regulace je založena na principu negativní zpětné vazby, kde zvýšená koncentrace periferního hormonu tlumí produkci regulačních hormonů v hypothalamu a hypofýze.",
      etiology: [
        "Primární poruchy: destrukce periferní žlázy (autoimunitní, infekční, operační) nebo autonomní adenom.",
        "Sekundární poruchy: adenomy hypofýzy secernující tropní hormony (např. ACTH) nebo destruující okolní tkáň.",
        "Terciární poruchy: poškození hypothalamu (nádory, úrazy, ischémie).",
        "Receptorová rezistence: genetické mutace receptorů (androgeny) nebo postreceptorové defekty (inzulínová rezistence)."
      ],
      pathogenesis: [
        "Jednoduchá vazba: koncentrace látky (např. glukózy) přímo stimuluje uvolnění hormonu (inzulínu) pro její snížení.",
        "Komplexní osa: Hypothalamus (liberiny/statiny) -> Adenohypofýza (tropní hormony) -> Periferní žláza (efektorové hormony).",
        "Při primárním selhání žlázy klesá sekrece hormonu, což odblokuje negativní zpětnou vazbu a stoupá produkce tropních hormonů v hypofýze."
      ],
      clinicalManifestation: [
        "Syndromy z nadbytku hormonů (hyperfunkce – např. Cushingův syndrom, hypertyreóza, akromegalie).",
        "Syndromy z nedostatku hormonů (hypofunkce – napž. Addisonova choroba, myxedém, hypopituitarismus).",
        "Poruchy vnitřního prostředí (glykémie, elektrolytů, osmolality) a celkového metabolismu."
      ],
      diagnostics: [
        "Současné stanovení koncentrace periferního a tropního hormonu (např. volný T4 + TSH) k rozlišení primární a sekundární poruchy.",
        "Funkční dynamické testy: stimulační testy u suspektní hypofunkce (např. synacthenový test) nebo supresní testy u hyperfunkce (dexamethasonový supresní test).",
        "Zobrazovací metody: MRI sely (hypofýza), ultrazvuk a CT periferních žláz."
      ]
    },
    quiz: [
      {
        question: "Jaké laboratorní nálezy v séru jsou typické pro primární periferní hypokortizolismus (Addisonovu chorobu)?",
        options: [
          "Nízký ranní kortizol a nízké ACTH",
          "Vysoký ranní kortizol a vysoké ACTH",
          "Nízký ranní kortizol a vysoké ACTH",
          "Vysoký ranní kortizol a nízké ACTH"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Nízké ACTH by indikovalo sekundární (hypofyzární) insuficienci nadledvin.",
          "Nesprávně. Addisonova choroba je spojena s nedostatkem kortizolu.",
          "Správně! U primárního selhání nadledvin je poškozena produkce kortizolu. Nízká hladina kortizolu v krvi stimuluje hypofýzu (chybí negativní zpětná vazba), což vede k extrémní sekreci ACTH.",
          "Nesprávně. Toto neodpovídá klinickému obrazu hypofunkce nadledvin."
        ]
      }
    ]
  },

  // spec-2-7: Preeklampsie, tubuly, autoimunity, OSA
  "spec-2-7": {
    richContent: {
      definition: "Komplexní okruh zahrnující preeklampsii (těhotenská endotelopatie), poruchy tubulárního transportu, systémové autoimunity (SLE, revmatoidní artritida, sklerodermie) a obstrukční spánkovou apnoe.",
      etiology: [
        "Preeklampsie: porucha invaze trofoblastu do děložních spirálních arterií s následnou placentární ischémií.",
        "Tubulopatie a nefritidy: vrozené vady (Bartterův syndrom), léky vyvolaná nefrotoxicita (NSAID, aminoglykosidy).",
        "Systémové autoimunity: genetická náchylnost (HLA) spojená s enviromentálním spouštěčem (UV, virové infekce).",
        "Obstrukční spánková apnoe (OSA): obezita, anatomické poměry faryngu a snížení tonu svalstva horních cest ve spánku."
      ],
      pathogenesis: [
        "Preeklampsie: ischemická placenta uvolňuje rozpustný sFlt-1 a endoglin, které vyvazují VEGF a působí systémovou dysfunkci endotelu a vasospasmus. Následuje hypertenze a únik proteinů v ledvinách.",
        "Tubulopatie: porucha transportních proteinů v Henleově kličce nebo tubulech (např. porucha kotransportéru Na-K-2Cl), což vede k metabolické acidóze, polyurii a iontovým dysbalancím.",
        "Autoimunity: tvorba autoantigenů a imunokomplexů (u SLE) ukládajících se v kloubech, cévách a glomerulech, což spouští komplement a zánětlivou destrukci tkání.",
        "OSA: kolaps stěn faryngu při nádechu ve spánku vyvolá apnoickou pauzu, hypoxii a hyperkapnii s následnou aktivací sympatiku."
      ],
      clinicalManifestation: [
        "Preeklampsie: hypertenze nad 140/90 mmHg a proteinurie po 20. týdnu těhotenství. Může přejít v eklampsii (křeče) nebo HELLP syndrom (hemolýza, jaterní léze, trombocytopenie).",
        "Tubulopatie: polyurie, polydipsie, svalová slabost (z hypokalémie), renální osteodystrofie.",
        "Autoimunity: motýlovitý erytém na tváři (SLE), deformující symetrická artritida (RA), ztluštění kůže a dysfágie (sklerodermie), suchost očí a úst (Sjögrenův syndrom).",
        "OSA: chrápání, denní únava, ranní bolesti hlavy, rozvoj plicní a systémové hypertenze."
      ],
      diagnostics: [
        "U těhotných: screening krevního tlaku, proteinurie a poměru sFlt-1/PlGF; sledování trombocytů a jaterních testů.",
        "U autoimunit: laboratorní průkaz autoprotilátek (ANA, anti-dsDNA u SLE; RF a anti-CCP u revmatoidní artritidy).",
        "U OSA: monitorování ve spánkové laboratoři (polysomnografie nebo limitovaná polygrafie)."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostředním patofyziologickým rysem syndromu HELLP jako závažné komplikace preeklampsie?",
        options: [
          "Nadprodukce inzulínu a hypoglykémie",
          "Mikroangiopatická hemolýza, zvýšení jaterních enzymů z nekrózy hepatocytů a spotřební trombocytopenie",
          "Těžká hyperkalcémie a obstipace",
          "Demyelinizace v centrálním nervovém systému"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. HELLP nesouvisí s inzulínem.",
          "Správně! HELLP je zkratka pro Hemolysis (hemolýza s přítomností schistocytů), Elevated Liver enzymes (vzestup AST/ALT z ischemie jater) a Low Platelets (trombocytopenie pod 100x10^9/l způsobená aktivací endotelu a mikrotrombózou).",
          "Nesprávně. Hyperkalcémie není součástí syndromu HELLP.",
          "Nesprávně. HELLP nezpůsobuje demyelinizaci."
        ]
      }
    ]
  },

  // spec-2-8: Poruchy sluchu a zraku
  "spec-2-8": {
    richContent: {
      definition: "Sensorické deficity postihující analyzátor sluchu (převodní a percepční vady) a zraku (glaukom, katarakta, retinopatie).",
      etiology: [
        "Presbyakuze (stárnutím navozená ztráta sluchu), dlouhodobá expozice hluku (akustické trauma).",
        "Ototoxické látky poškozující vláskové buňky (aminoglykosidy, kličková diuretika, cisplatina).",
        "Glaukom (zelený zákal): porucha odtoku komorové tekutiny trabekulární síťovinou.",
        "Katarakta (šedý zákal): neenzymatická glykace a agregace proteinů čočky (věk, diabetes)."
      ],
      pathogenesis: [
        "Převodní porucha sluchu: bariéra v přenosu zvuku ve zvukovodu či středouší (vosk, zánět, otoskleróza kůstek).",
        "Percepční porucha sluchu: destrukce řasinkových buněk v Cortiho orgánu nebo degenerace n. vestibulocochlearis.",
        "Glaukom: vzestup nitroočního tlaku utlačuje a poškozuje axony gangliových buněk sítnice v oblasti papily zrakového nervu.",
        "Retinopatie (diabetická): mikrovaskulární poškození kapilár sítnice, ztráta pericytů, ischémie a neovaskularizace."
      ],
      clinicalManifestation: [
        "Nedoslýchavost (zejména vysokých frekvencí u presbyakuze), tinitus (šelest v uších).",
        "Výpadky zorného pole (skotomy) začínající v periférii (glaukom), postupné bezbolestné zamlžení vidění (katarakta).",
        "Fluktující ostrost vidění, krvácení do sklivce a trakční odchlípení sítnice (diabetická retinopatie)."
      ],
      diagnostics: [
        "Audiometrie (rozliší kostní a vzdušné vedení u převodních vs percepčních vad) a tympanometrie.",
        "Tonometrie (měření nitroočního tlaku), perimetrie (zorné pole) a oftalmoskopie očního pozadí.",
        "Optická koherentní tomografie (OCT) k detailnímu zobrazení vrstev sítnice a terče zrakového nervu."
      ]
    },
    quiz: [
      {
        question: "Která z následujících patologií vede ke vzniku percepční (senzorineurální) nedoslýchavosti?",
        options: [
          "Nahromadění ušního mazu (cerumenu) ve zvukovodu",
          "Poškození vláskových buněk v hlemýždi působením ototoxických antibiotik (např. gentamicinu)",
          "Ztuhnutí kloubů středoušních kůstek (otoskleróza)",
          "Perforace bubínku po akustickém traumatu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Cerumen působí převodní nedoslýchavost.",
          "Správně! Ototoxické látky ničí přímo smyslové vláskové buňky ve vnitřním uchu, což vede k trvalé percepční poruše sluchu.",
          "Nesprávně. Otoskleróza je klasickým příkladem převodní nedoslýchavosti.",
          "Nesprávně. Perforace bubínku narušuje mechanický přenos zvuku, jde tedy o převodní vadu."
        ]
      }
    ]
  },

  // spec-2-9: Poruchy menstruačního cyklu
  "spec-2-9": {
    richContent: {
      definition: "Poruchy menstruačního cyklu a dysfunkce osy hypothalamus-hypofýza-ovaria (HPO), projevující se jako amenorea, nepravidelné krvácení nebo anovulační cykly.",
      etiology: [
        "Syndrom polycystických ovarií (PCOS) – nejčastější příčina anovulační neplodnosti.",
        "Hypotalamická amenorea (vyvolaná stresem, anorexií, podvýživou, extrémní fyzickou zátěží).",
        "Hyperprolaktinémie (prolaktinom hypofýzy, vedlejší účinky antipsychotik).",
        "Sheehanův syndrom (poporodní nekróza hypofýzy po těžkém krvácení)."
      ],
      pathogenesis: [
        "PCOS: narušená pulzní sekrece GnRH stimuluje nadměrnou sekreci LH, což vede k hyperprodukci androgenů v ovariích a zástavě zrání folikulů.",
        "Hypotalamická amenorea: energetický deficit tlumí sekreci GnRH, což vede k deficitu gonadotropinů (LH, FSH) a hypoestrogenismu.",
        "Hyperprolaktinémie: vysoký prolaktin tlumí sekreci GnRH, což přímo blokuje ovulační cyklus.",
        "Sheehanův syndrom: ischemická destrukce buněk hypofýzy vede k panhypopituitarismu (výpadek LH, FSH, TSH, ACTH)."
      ],
      clinicalManifestation: [
        "Amenorea (primární nebo sekundární), oligomenorea (prodloužený cyklus).",
        "Hirsutismus (nadměrné ochlupení), akné, androidní obezita a neplodnost (typické u PCOS).",
        "Galaktorea (sekrece mléka mimo kojení u hyperprolaktinémie) a osteoporóza z deficitu estrogenů."
      ],
      diagnostics: [
        "Hormonální profil: stanovení hladin LH, FSH, estradiolu, progesteronu, prolaktinu a volného testosteronu.",
        "Sonografické vyšetření malé pánve (detekce cystického vzhledu ovarií u PCOS a tloušťky endometria).",
        "MRI sely u podezření na adenom hypofýzy secernující prolaktin."
      ]
    },
    quiz: [
      {
        question: "Jakým mechanismem způsobuje hyperprolaktinémie sekundární amenoreu?",
        options: [
          "Přímou destrukcí folikulů ve vaječníku",
          "Inhibicí pulzní sekrece gonadotropin-releasing hormonu (GnRH) v hypothalamu, což vede k poklesu LH a FSH",
          "Stimulací nadměrné sekrece progesteronu z corpus luteum",
          "Navozením destrukce děložní sliznice"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Prolaktin neničí folikuly přímo.",
          "Správně! Vysoké hladiny prolaktinu tlumí uvolňování GnRH v hypothalamu. Následkem toho klesá stimulace hypofýzy (nízké LH a FSH) a vaječníky netvoří estrogeny nezbytné pro menstruační cyklus.",
          "Nesprávně. Prolaktin netlumí cyklus přes stimulaci progesteronu.",
          "Nesprávně. Prolaktin neničí sliznici dělohy."
        ]
      }
    ]
  },

  // spec-2-10: Poruchy kostního metabolismu
  "spec-2-10": {
    richContent: {
      definition: "Metabolická onemocnění skeletu charakterizovaná poklesem celkové kostní hmoty (osteoporóza) nebo poruchou mineralizace nově tvořeného osteoidu (osteomalacie, u dětí rachitida).",
      etiology: [
        "Osteoporóza: postmenopauzální deficit estrogenů, senilní involuce, dlouhodobá léčba glukokortikoidy (steroidní osteoporóza).",
        "Osteomalacie a rachitida: nedostatečný příjem vitaminu D, malabsorpce (celiakie), renální tubulární poruchy.",
        "Renální osteodystrofie: chronické selhání ledvin s poklesem hydroxylace vitaminu D a retencí fosfátů."
      ],
      pathogenesis: [
        "Osteoporóza: převaha aktivity osteoklastů nad osteoblasty. Deficit estrogenů zvyšuje sekreci RANKL a snižuje produkci osteoprotegerinu (OPG), což urychluje kostní resorpci.",
        "Osteomalacie / Rachitida: nedostatek aktivního vitaminu D ($1,25(OH)_2D$) brání vstřebávání vápníku a fosforu ve střevě. Nedostatečná saturace extracelulární tekutiny těmito ionty znemožňuje depozici hydroxyapatitu do osteoidní matrice.",
        "Sekundární hyperparatyreóza: hypokalcémie stimuluje příštítná tělíska k nadprodukci PTH, což vede k další demineralizaci kostí."
      ],
      clinicalManifestation: [
        "Osteoporóza: asymptomatická až do vzniku zlomeniny (kompresivní zlomeniny obratlů, zlomenina krčku femuru, Collesova zlomenina radia). Vznik kyfózy (vdovský hrb).",
        "Rachitida: deformity dlouhých kostí dolních končetin (nohy do O nebo X), rachitický růženec na žebrech, opožděný uzávěr fontanel.",
        "Osteomalacie: difúzní tupé bolesti kostí (zejména pánev a dolní končetiny) a proximální svalová slabost."
      ],
      diagnostics: [
        "Dvouenergetická rentgenová absorpciometrie (DXA) – měření kostní minerální hustoty (BMD). Osteoporóza je definována T-skóre $\\le -2.5$.",
        "Laboratorní parametry: hladiny vápníku, fosforu, alkalické fosfatázy (zvýšená u osteomalacie), PTH a 25-hydroxyvitaminu D v séru.",
        "Kostní markery: osteokalcin (novotvorba), CTx (resorpce)."
      ]
    },
    quiz: [
      {
        question: "Co je hlavním patofyziologickým rozdílem mezi osteoporózou a osteomalacií?",
        options: [
          "U osteoporózy chybí pouze vápník, u osteomalacie chybí kolagen",
          "U osteoporózy dochází k úbytku celkové kostní tkáně jako celku (organické i minerální složky), zatímco u osteomalacie je narušena specificky mineralizace organického osteoidu",
          "Osteomalacie postihuje výhradně kloubní chrupavku",
          "Osteoporóza vzniká pouze u dětí s nedostatkem vitaminu D"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Kolagen u osteomalacie tvořen je, chybí jeho mineralizace.",
          "Správně! Osteoporóza představuje kvantitativní úbytek normálně mineralizované kosti (kost je křehká). Osteomalacie je kvalitativní porucha, kdy se tvoří měkká, nedostatečně mineralizovaná kost (kosti se deformují a bolí).",
          "Nesprávně. Osteomalacie je choroba kosti, nikoliv chrupavky.",
          "Nesprávně. Nedostatek vitaminu D u dětí způsobuje rachitidu. Osteoporóza je typická pro dospělé po menopauze."
        ]
      }
    ]
  },

  // spec-2-11: Onemocnění žlučníku a žlučových cest
  "spec-2-11": {
    richContent: {
      definition: "Zánětlivá a litiatická onemocnění žlučníku (cholecystolitiáza, cholecystitida) a žlučových cest (choledocholitiáza, cholangoitida) s rizikem obstrukce odtoku žluči.",
      etiology: [
        "Supersaturace žluči cholesterolem, snížená sekrece žlučových kyselin a hypomotilita žlučníku.",
        "Rizikové faktory (4F): Female (ženské pohlaví), Fat (obezita), Fertile (plodnost), Forty (věk nad 40 let).",
        "Bakteriální infekce (E. coli, Klebsiella) při stáze žluči nad překážkou."
      ],
      pathogenesis: [
        "Cholecystolitiáza: krystalizace cholesterolu či bilirubinu a vznik konkrementů ve žlučníku.",
        "Akutní cholecystitida: zaklesnutí kamene v ductus cysticus vyvolá distenzi žlučníku, ischemii stěny a sterilní chemický zánět, který je často sekundárně bakteriálně infikován.",
        "Choledocholitiáza a cholangoitida: kámen vycestuje do ductus choledochus, způsobí mechanickou překážku odtoku žluči (cholestáza) a městnání. Stagnující žluč nad překážkou se infikuje bakteriemi stoupajícími z duodena."
      ],
      clinicalManifestation: [
        "Biliární kolika: náhlá, krutá kolikovitá bolest v pravém podžebří s propagací pod pravou lopatku, často spuštěná tučným jídlem.",
        "Murphyho příznak (bolestivá zástava nádechu při palpaci pod pravým žeberním obloukem) u cholecystitidy, doprovázená horečkou.",
        "Charcotova triáda u cholangoitidy: horečka s třesavkou, biliární kolika a obstrukční ikterus (žloutenka s tmavou močí a acholickou stolicí)."
      ],
      diagnostics: [
        "Ultrasonografie břicha: vysoce senzitivní metoda k detekci kamenů (akustický stín) a ztluštění stěny žlučníku nad 4 mm.",
        "Laboratorní markery cholestázy (elevace konjugovaného bilirubinu, ALP, GMT) a zánětu (leukocytóza, CRP).",
        "ERCP (endoskopická retrográdní cholangiopankreatografie) s možností terapeutického odstranění kamene z choledochu (papilotomie)."
      ]
    },
    quiz: [
      {
        question: "Který z následujících projevů je typický pro kompletní obstrukci ductus choledochus (choledocholitiázu)?",
        options: [
          "Tmavá stolice a světlá moč",
          "Acholická (světlá, jílovitá) stolice a tmavá moč s obsahem bilirubinu",
          "Hypoglykémie a metabolická acidóza",
          "Extrémní nárůst nekonjugovaného bilirubinu bez ovlivnění moči"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U obstrukce je tomu přesně naopak.",
          "Správně! Blokáda žlučovodu brání odchodu konjugovaného bilirubinu do střeva, stolice proto ztrácí barvu (je acholická). Konjugovaný bilirubin se hromadí v krvi a jelikož je rozpustný ve vodě, ledviny ho filtrují do moči, která tmavne.",
          "Nesprávně. Obstrukce žlučovodu nemá přímý vliv na glykémii.",
          "Nesprávně. Nekonjugovaný bilirubin stoupá u hemolýzy a neprochází ledvinami."
        ]
      }
    ]
  },

  // spec-2-12: Endokrinní ledviny, bazální ganglia, Parkinson, limbický systém, mícha
  "spec-2-12": {
    richContent: {
      definition: "Sdružené téma zahrnující endokrinní funkce ledvin (renin, erytropoetin, kalcitriol), patofyziologii Parkinsonovy nemoci (bazální ganglia), poruchy limbického systému a transverzální míšní léze.",
      etiology: [
        "Endokrinní ledviny: chronické selhání ledvin s úbytkem funkčního parenchymu.",
        "Parkinsonova nemoc: degenerace dopaminergních neuronů v substantia nigra pars compacta s tvorbou Lewyho tělísek.",
        "Limbický systém: traumata spánkového laloku, herpesvirová encefalitida, ischémie.",
        "Míšní léze: traumata páteře (autonehody, pády), komprese nádorem, míšní ischémie."
      ],
      pathogenesis: [
        "Ledviny: pokles erytropoetinu vede k normocytární anémii; deficit aktivního vitaminu D ($1,25(OH)_2D$) vyvolá hypokalcémii a sekundární hyperparatyreózu.",
        "Parkinson: deficit dopaminu ve striatu vede k hyperaktivitě nepřímé dráhy a útlumu přímé dráhy bazálních ganglií, což tlumí motorickou kůru a ztěžuje iniciaci pohybu.",
        "Limbický systém: poškození hippokampu narušuje konsolidaci paměťové stopy (anterográdní amnézie); poškození amygdaly narušuje emoční zpracování (strach, agrese).",
        "Mícha: transverzální léze přeruší dráhu pyramidovou (motorika) i senzitivní (spinotalamická, zadní provazce). Akutně vzniká míšní šok (ztráta reflexů a tonu), později spasticita pod úrovní léze."
      ],
      clinicalManifestation: [
        "Renální anémie, hypokalcémie a renální osteodystrofie; renální hypertenze (aktivací RAAS při ischémii).",
        "Třes (klidový, frekvence 4-6 Hz), rigidita (zvýšený svalový tonus typu olověné trubky), bradykinéza (pomalost pohybu) a posturální nestabilita.",
        "Kluver-Bucy syndrom (hypersexualita, hyperorální chování, ztráta strachu při oboustranné lézi amygdaly), amnestický syndrom.",
        "Paraplegie/tetraplegie, anestezie pod úrovní léze, sfinkterové poruchy (retence moči). U lézí nad Th6 hrozí autonomní dysreflexie."
      ],
      diagnostics: [
        "Laboratorní vyšetření krevního obrazu, urey, kreatininu, PTH, vápníku.",
        "Klinické neurologické vyšetření motoriky, čití, reflexů a chůze.",
        "MRI mozku a míchy k průkazu neurodegenerace, demyelinizace či traumatického přerušení drah."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostřední příčinou vzniku míšního šoku po akutním traumatickém přerušení míchy?",
        options: [
          "Okamžité masivní krvácení do mozku",
          "Náhlá ztráta descendentní facilitace z vyšších center vedoucí k areflexii, svalové atonii a ztrátě čití pod úrovní léze",
          "Extrémní vzestup krevního tlaku na 300 mmHg",
          "Demyelinizace periferních nervů na končetinách"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Krvácení do mozku s míšním šokem nesouvisí.",
          "Správně! Míšní šok je stav po akutním přerušení míchy, kdy dočasně vyhasnou veškeré reflexní děje v segmentech pod lézí kvůli náhlému výpadku excitačních vlivů z mozku. Po týdnech se reflexy vrací a vyvíjí se spastický obraz.",
          "Nesprávně. V míšním šoku krevní tlak naopak klesá z důvodu ztráty sympatického tonu (neurogenní šok).",
          "Nesprávně. Míšní šok postihuje centrální nervovou soustavu, nikoliv myelin periferních nervů."
        ]
      }
    ]
  },

  // spec-2-13: Alzheimerova choroba (Ponecháno původní detailContent)
  "spec-2-13": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Demence a Alzheimerova choroba (AD)</h3>
          <p>AD je nejčastější neurodegenerativní příčinou demence. Je charakterizována progresivním úbytkem synapsí a neuronů, zejména v mozkové kůře a hipokampu (klíčové centrum pro paměť).</p>
        </section>
        <section>
          <h3>2. Etiopatogeneze</h3>
          <ul>
            <li><strong>Beta-amyloid ($A\\beta_{42}$):</strong> Abnormální štěpení APP (amyloidového prekurzorového proteinu) $\\beta$- a $\\gamma$-sekretázou produkuje hydrofobní monomery, které agregují do **extracelulárních amyloidových plaků**. Tyto plaky vyvolávají synaptickou dysfunkci a neurotoxicitu.</li>
            <li><strong>Tau protein a Neurofibrilární klubka:</strong> Abnormální hyperfosforylace tau proteinu vede k jeho odpojení od mikrotubulů. Stabilita cytoskeletu klesá a poškozený tau protein tvoří nerozpustná **intracelulární neurofibrilární klubka**, což naruší axonální transport.</li>
            <li><strong>Cholinergní deficit:</strong> Výrazná degenerace neuronů v **nucleus basalis Meynerti** vede k těžkému nedostatku acetylcholinu, což je klíčový neurotransmiter pro kognitivní procesy.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který enzymatický krok je zodpovědný za patologickou produkci beta-amyloidu u Alzheimerovy choroby?",
        options: [
          "Alfa-sekretáza a monoaminooxidáza",
          "Štěpení amyloidového prekurzorového proteinu (APP) pomocí beta- a gama-sekretázy",
          "Rozpad acetylcholinu acetylcholinesterázou",
          "Fosforylace tau proteinu kinázami"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Alfa-sekretáza štěpí APP ne-amyloidogenní cestou (netvoří plaky).",
          "Správně! Sekvenční štěpení APP pomocí $\\beta$- a $\\gamma$-sekretázy uvolňuje neurotoxické fragmenty $A\\beta_{40-42}$, které se shlukují do amyloidových plaků.",
          "Nesprávně. Tento krok odstraňuje acetylcholin, ale netvoří amyloid.",
          "Nesprávně. Fosforylace tau proteinu je jiný patologický děj AD."
        ]
      }
    ]
  },

  // spec-2-14: Hemoragické cévní mozkové příhody
  "spec-2-14": {
    richContent: {
      definition: "Hemoragická cévní mozková příhoda (hCMP) vzniká v důsledku netraumatické ruptury mozkové cévy s následným krvácením do mozkového parenchymu nebo subarachnoidálního prostoru.",
      etiology: [
        "Chronická arteriální hypertenze (způsobuje sklerózu malých cév a vznik Charcot-Bouchardových mikroaneuryzmat).",
        "Mozková amyloidová angiopatie (ukládání amyloidu ve stěnách cév u starších osob vyvolává lobární krvácení).",
        "Ruptura sakulárního aneuryzmatu Willisova okruhu (zdroj 85 % netraumatických subarachnoidálních krvácení).",
        "Koagulopatie, užívání antikoagulancií (warfarin, NOAC) a cévní malformace (AVM)."
      ],
      pathogenesis: [
        "Intracerebrální krvácení: ruptura cévy v parenchymu vede k rychlé tvorbě hematomu, který mechanicky ničí okolní vlákna a utlačuje tkáň.",
        "Hromadění krve zvyšuje intrakraniální objem a tlak (ICP), což vede k lokální ischémii a hrozí herniací mozkového kmene.",
        "Subarachnoidální krvácení (SAK): krev pod tlakem proniká do likvorových cest. Rozpad erytrocytů uvolňuje oxyhemoglobin, který dráždí hladkou svalovinu mozkových cév a indukuje **sekundární vazospasmy** (4.-12. den po SAK) vedoucí k ischémii."
      ],
      clinicalManifestation: [
        "Náhlý, dramatický začátek s ložiskovým neurologickým deficitem (hemiparéza, porucha řeči) doprovázený zvracením a alterací vědomí.",
        "SAK: náhlá, extrémně krutá bolest hlavy (často přirovnávaná k 'úderu do hlavy'), meningismus (opozice šíje), fotofobie, neklid.",
        "Cushingův reflex (vzestup krevního tlaku a bradykardie) jako pozdní projev kritické intrakraniální hypertenze."
      ],
      diagnostics: [
        "Urgentní CT mozku (okamžitě zobrazí čerstvou krev jako hyperdenzní ložisko, což spolehlivě odliší krvácení od ischémie).",
        "CTA (CT angiografie) nebo klasická subtrakční angiografie k identifikaci zdroje krvácení (aneuryzma, cévní malformace).",
        "Lumbální punkce (pouze pokud je CT negativní, ale přetrvává podezření na SAK – prokáže spektrofotometricky přítomnost xanthochromie)."
      ]
    },
    quiz: [
      {
        question: "Která z následujících komplikací je nejčastější příčinou sekundárního neurologického zhoršení u pacientů 4 až 12 dní po subarachnoidálním krvácení (SAK)?",
        options: [
          "Bakteriální meningitida",
          "Mozkové vazospasmy vyvolané rozpadovými produkty erytrocytů s rizikem ischemického infarktu",
          "Okamžitá atrofie mozečku",
          "Kompletní uzávěr a. carotis communis"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Meningitida může nastat, ale není typickým časovým rizikem v této fázi.",
          "Správně! Rozpad erytrocytů v subarachnoidálním prostoru uvolňuje spasmogenní látky (oxyhemoglobin), které způsobují konstrikci velkých mozkových cév. Tyto vazospasmy mohou vyvolat sekundární ischemické poškození mozku.",
          "Nesprávně. SAK nezpůsobuje rychlou atrofii mozečku.",
          "Nesprávně. Spasmy postihují intrakraniální větve, nikoliv a. carotis communis na krku."
        ]
      }
    ]
  },

  // spec-2-15: Nespecifická zánětlivá onemocnění střev
  "spec-2-15": {
    richContent: {
      definition: "Chronická imunitně mediovaná zánětlivá onemocnění gastrointestinálního traktu. Zahrnují Crohnovu chorobu (CD) a ulcerózní kolitidu (UC).",
      etiology: [
        "Abnormální slizniční imunitní odpověď na složky normálního střevního mikrobiomu u geneticky náchylných jedinců.",
        "Genetická asociace: polymorfismy v genu NOD2 (u Crohnovy choroby).",
        "Faktory prostředí: kouření (zvyšuje riziko a zhoršuje průběh CD, ale snižuje riziko a zmírňuje UC), západní styl stravování."
      ],
      pathogenesis: [
        "Crohnova choroba: transmurální (postihuje všechny vrstvy stěny), segmentální (skip-léze střídající zdravé a nemocné úseky) zánět s tvorbou nesýrovatících granulomů. Může postihnout kteroukoli část GIT od úst po anus, nejčastěji terminální ileum.",
        "Ulcerózní kolitida: povrchový zánět (sliznice a podsliznice) postihující výhradně tlusté střevo, šířící se kontinuálně od rekta proximálně. Charakteristické jsou kryptové abscesy.",
        "Chronický zánět u obou nemocí zvyšuje riziko vzniku dysplázie a kolorektálního karcinomu (zejména u dlouhodobé aktivní UC)."
      ],
      clinicalManifestation: [
        "Crohnova choroba: chronické bolesti břicha (často v pravém podbřišku), průjmy bez krve, hubnutí, únava, perianální píštěle a abscesy.",
        "Ulcerózní kolitida: křečovité bolesti břicha před stolicí (tenesmy), časté průjmy s příměsí krve a hlenu, dehydratace.",
        "Mimostřevní projevy: erythema nodosum, kloubní záněty (axiální spondylartritida), uveitida a primární sklerozující cholangitida (PSC - typicky u UC)."
      ],
      diagnostics: [
        "Kolonoskopie s mnohočetnými biopsiemi z různých etáží střeva k histologickému potvrzení.",
        "Průkaz fekálního kalprotektinu ve stolici – vysoce citlivý marker slizničního zánětu rozlišující IBD od funkčních poruch.",
        "Zvýšené systémové markery zánětu (CRP, leukocytóza) a mikrocytární anémie z chronických ztrát krve."
      ]
    },
    quiz: [
      {
        question: "Která z následujících charakteristik spolehlivě odlišuje Crohnovu chorobu od ulcerózní kolitidy?",
        options: [
          "Crohnova choroba postihuje pouze sliznici tlustého střeva",
          "Crohnova choroba je charakterizována transmurálním zánětem a segmentálním postižením kterékoli části GIT",
          "Ulcerózní kolitida tvoří hluboké píštěle do okolních orgánů",
          "Kouření cigaret dramaticky zlepšuje průběh Crohnovy choroby"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto platí pro ulcerózní kolitidu.",
          "Správně! Crohnova choroba prochází celou tloušťkou stěny střeva (transmurální zánět), což vysvětluje vznik píštělí a striktur, a typicky přeskakuje úseky (segmentální distribuce). UC postihuje pouze sliznici tlustého střeva difúzně a kontinuálně.",
          "Nesprávně. Píštěle jsou typické pro Crohnovu chorobu z důvodu transmurálního zánětu.",
          "Nesprávně. Kouření průběh Crohnovy choroby výrazně zhoršuje."
        ]
      }
    ]
  },

  // spec-2-16: Nemoci úst, jícnu, dysfágie, dyspepsie, GERD
  "spec-2-16": {
    richContent: {
      definition: "Patologie horní části zažívacího traktu zahrnující poruchy polykání (dysfágie), dyspeptický syndrom a refluxní chorobu jícnu (GERD).",
      etiology: [
        "GERD: snížení tonu dolního jícnového svěrače (LES), hiátová hernie, obezita, kouření, potraviny (kofein, alkohol).",
        "Mechanická dysfágie: karcinom jícnu, peptické striktury.",
        "Motorická dysfágie: achalázie (degenerace myenterického plexu), cévní mozkové příhody (bulbární paréza)."
      ],
      pathogenesis: [
        "GERD: zpětný tok kyselého žaludečního obsahu a pepsinu do jícnu poškozuje dlaždicový epitel. Dlouhodobé dráždění vede k ezofagitidě a metaplázii epitelu (náhrada cylindrickým epitelem – **Barrettův jícen**, prekanceróza).",
        "Achalázie: ztráta inhibičních nitrergních neuronů v plexus myentericus znemožňuje relaxaci LES při polykání a vede k dilataci jícnu nad ním.",
        "Dyspepsie: porucha motility žaludku, viscerální hypersenzitivita nebo dysfunkce sekrece kyseliny."
      ],
      clinicalManifestation: [
        "Pyróza (pálení žáhy) a regurgitace kyselého obsahu do úst, zhoršující se vleže.",
        "Dysfágie (pocit váznutí sousta) – u achalázie pro tekutiny i tuhou stravu současně, u karcinomu nejprve pro tuhou stravu.",
        "Odynofágie (bolest při polykání – známka hlubokého poškození sliznice) a extraesofageální symptomy (chronický kašel, chrapot)."
      ],
      diagnostics: [
        "Ezofagogastroduodenoskopie (endoskopie) k vizualizaci sliznice jícnu, žaludku a duodena a odběru biopsií.",
        "24hodinová pH-metrie jícnu (případně s impedancí) – zlatý standard k průkazu patologického refluxu.",
        "Jícnová manometrie vysokého rozlišení k diagnostice poruch motility (achalázie)."
      ]
    },
    quiz: [
      {
        question: "Co je patofyziologickou podstatou Barrettova jícnu?",
        options: [
          "Vznik hlubokých vředů krytých fibrinem v žaludečním antru",
          "Metaplastická přeměna vícevrstvého dlaždicového epitelu jícnu na jednovrstevný cylindrický epitel střevního typu v důsledku chronického kyselého refluxu",
          "Atrofie sliznice jícnu s vymizením cévní kresby",
          "Spastické stažení dolního jícnového svěrače bez organických změn"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Barrettův jícen je lokalizován v distálním jícnu, nikoliv žaludku.",
          "Správně! Barrettův jícen je klasická slizniční adaptace (metaplázie) na chronické kyselé prostředí při GERD. Vícevrstvý dlaždicový epitel je nahrazen cylindrickým epitelem s pohárkovými buňkami, který lépe odolává aciditě, ale představuje riziko vzniku adenokarcinomu.",
          "Nesprávně. Atrofie s vymizením cévní kresby není podstatou Barrettova jícnu.",
          "Nesprávně. Spastické stažení je funkční manometrický nález u jiných chorob (např. achalázie)."
        ]
      }
    ]
  },

  // spec-2-17: Rhabdomyolýza, krvácení GIT, kóma, locked-in, mozková smrt
  "spec-2-17": {
    richContent: {
      definition: "Závažné urgentní stavy: rhabdomyolýza (rozpad svalu), krvácení do trávicího traktu a těžké poruchy vědomí včetně locked-in syndromu a definice mozkové smrti.",
      etiology: [
        "Rhabdomyolýza: crush syndrom (zavalení), extrémní svalová námaha, toxicita (statiny), ischémie svalstva.",
        "Krvácení do GIT: peptické vředy, jícnové varixy (portální hypertenze), Mallory-Weissův syndrom, kolorektální karcinom.",
        "Kóma a mozková smrt: traumatické poškození mozku, těžká anoxie (stav po srdeční zástavě), metabolické encefalopatie.",
        "Locked-in syndrom: oboustranný infarkt pontu (uzávěr a. basilaris)."
      ],
      pathogenesis: [
        "Rhabdomyolýza: destrukce sarkolemy uvolní do krve myoglobin, draslík a kreatinkinázu. Myoglobin precipituje v tubulech ledvin a vyvolá akutní tubulární nekrózu (myoglobinurické AKI).",
        "Krvácení do GIT: ztráta krve vede k poklesu žilního návratu, minutového výdeje a rozvoji hypovolemického šoku.",
        "Locked-in: selektivní poškození kortikospinálních a kortikobulbárních drah v pontu při zachování retikulární formace. Pacient má zachovalé vědomí a myšlení, ale je kompletně plegický s výjimkou vertikálních pohybů očí.",
        "Smrt mozku: ireverzibilní zástava funkce celého mozku včetně kmene. Kritickým mechanismem je ztráta intrakraniální perfuze v důsledku edému překračujícího střední arteriální tlak."
      ],
      clinicalManifestation: [
        "Rhabdomyolýza: svalové bolesti, slabost, otok svalů a tmavě hnědá moč (vzhledu koly) bez přítomnosti erytrocytů.",
        "Krvácení do GIT: hemateméza (zvracení krve) a meléna (černá dehtovitá stolice) u horního GIT; enteroragie (čerstvá krev) u dolního GIT.",
        "Kóma: bezvědomí, chybění reakce na podněty. Locked-in: neschopnost pohybu a mluvení při plném vědomí.",
        "Smrt mozku: areflexie, absence spontánního dýchání (apnoický test), fixovaná mydriáza bez reakce na osvit."
      ],
      diagnostics: [
        "U rhabdomyolýzy: extrémní elevace sérové kreatinkinázy (CK, často > 10 000 U/l) a průkaz myoglobinu v moči.",
        "U krvácení: urgentní endoskopie (gastroskopie, kolonoskopie) k detekci a ošetření zdroje.",
        "U mozkové smrti: klinické průkazy areflexie, apnoický test, potvrzený zástavou mozkového průtoku krve (angiografie, transkraniální doppler) nebo izoelektrickým EEG."
      ]
    },
    quiz: [
      {
        question: "Jaký mechanismus vede k poškození ledvin (AKI) při masivní rhabdomyolýze?",
        options: [
          "Přímé toxické působení a obstrukce tubulů filtrovaným svalovým myoglobinem",
          "Autoimunitní glomerulonefritida vyvolaná protilátkami proti aktinu",
          "Mechanická obstrukce močovodu krystaly kyseliny močové",
          "Zvýšená filtrace albuminu glomerulární membránou"
        ],
        correct: 0,
        explanations: [
          "Správně! Svalový protein myoglobin je po rozpadu svalů filtrován ledvinami. V tubulech precipituje (zejména v kyselém prostředí) a působí přímo toxicky na tubulární epitelie, což vede k akutní tubulární nekróze.",
          "Nesprávně. Rhabdomyolýza nevyvolává autoimunitní glomerulonefritidu.",
          "Nesprávně. Kyselina močová může hrát roli u rozpadu buněk, ale hlavním faktorem poškození ledvin je zde myoglobin.",
          "Nesprávně. Albuminurie není primárním patofyziologickým mechanismem AKI u rhabdomyolýzy."
        ]
      }
    ]
  },

  // spec-2-18: Ischemická CMP, intrakraniální hypertenze, cirhóza, HRS
  "spec-2-18": {
    richContent: {
      definition: "Komplex patologií: ischemická cévní mozková příhoda, intrakraniální hypertenze se ztrátou autoregulace, chronické jaterní selhání (cirhóza) a související hepatorenální syndrom (HRS).",
      etiology: [
        "iCMP: aterotrombóza velkých tepen, embolizace ze srdce (fibrilace síní), lakunární infarkty.",
        "Intrakraniální hypertenze: vazogenní či cytotoxický edém mozku, expanze tumoru či hematomu.",
        "Jaterní cirhóza: chronický abúzus alkoholu, chronické hepatitidy B a C, NASH.",
        "Hepatorenální syndrom: funkční selhání ledvin u pokročilé jaterní cirhózy s portální hypertenzí."
      ],
      pathogenesis: [
        "iCMP: uzávěr tepny vede k ischémii. Rozlišuje se ischemické jádro (nekróza) a **penumbra** (oblast s hraničním průtokem, kterou lze zachránit rychlou reperfuzí).",
        "Autoregulace mozku: schopnost udržet konstantní CBF při změnách krevního tlaku. Při těžkém traumatu a nitrolební hypertenzi dochází k její paralýze a CBF pasivně závisí na systémovém tlaku.",
        "Cirhóza a HRS: portální hypertenze vyvolá masivní splanchnickou vazodilataci (produkce NO). Dochází k poklesu efektivního cirkulujícího objemu a extrémní kompenzační vazokonstrikci renálních cév, což sníží GFR."
      ],
      clinicalManifestation: [
        "iCMP: ložiskový deficit podle FAST (ochrnutí poloviny těla, asymetrie obličeje, afázie/porucha řeči).",
        "Nitrolební hypertenze: bolest hlavy, zvracení bez nauzey, edém papily, porucha vědomí, Cushingova triáda.",
        "Cirhóza: ascites (tekutina v peritoneu), pavoučkovité névy, jaterní encefalopatie. HRS se projevuje těžkou oligurií bez nálezu v močovém sedimentu."
      ],
      diagnostics: [
        "Nativní CT mozku (vyloučí krvácení a potvrdí ischémii) a CT angiografie.",
        "Monitorování ICP pomocí zavedeného intrakraniálního čidla.",
        "Diagnóza HRS: průkaz cirhózy s ascitem, nárůst kreatininu v séru, vyloučení hypovolémie (test s albuminem) a vyloučení proteinurie/hematurie."
      ]
    },
    quiz: [
      {
        question: "Co je bezprostřední patofyziologickou příčinou vzniku hepatorenálního syndromu (HRS) u pacientů s jaterní cirhózou?",
        options: [
          "Přímé poškození ledvinného parenchymu uremickými toxiny",
          "Těžká renální vazokonstrikce vyvolaná extrémní aktivací sympatiku a RAAS v reakci na splanchnickou vazodilataci",
          "Obstrukce močových cest bilaterálními kalciovými kameny",
          "Trombóza renální tepny"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. HRS je charakteristický tím, že ledviny jsou strukturálně zcela zdravé (při transplantaci jinému pacientovi fungují).",
          "Správně! Portální hypertenze vede k masivní vazodilataci ve splanchniku. Tělo to vnímá jako kritický nedostatek objemu a aktivuje RAAS a sympatikus. Tyto systémy vyvolají masivní vazokonstrikci v ledvinách, což vede k selhání glomerulární filtrace.",
          "Nesprávně. HRS není způsoben obstrukcí.",
          "Nesprávně. K uzávěru renální tepny u HRS nedochází."
        ]
      }
    ]
  },

  // spec-2-19: Chronická pankreatitida
  "spec-2-19": {
    richContent: {
      definition: "Chronické zánětlivé onemocnění slinivky břišní charakterizované progresivní destrukcí acinárních a duktálních buněk a jejich náhradou vazivem, což vede ke ztrátě exokrinní a endokrinní funkce.",
      etiology: [
        "Chronický abúzus alkoholu (způsobuje 70-80 % případů) a kouření.",
        "Genetické mutace: mutace genu pro trypsinogen (PRSS1) nebo inhibitor trypsinu (SPINK1).",
        "Obstrukce pankreatického vývodu (tumory, žlučové kameny, pancreas divisum)."
      ],
      pathogenesis: [
        "Metabolity alkoholu (acetaldehyd) působí toxicky na acinární buňky a stimulují **pankreatické hvězdicovité buňky (PSC)**.",
        "Aktivované PSC začnou produkovat kolagen a mimobuněčnou hmotu, což vede k difúzní fibrotizaci parenchymu.",
        "Destrukce acinů způsobí pokles sekrece trávicích enzymů (lipázy, amylázy, proteáz), což vyvolá malabsorpci.",
        "Pozdní destrukce Langerhansových ostrůvků vede k deficitu inzulínu a glukagonu (pankreatogenní diabetes mellitus)."
      ],
      clinicalManifestation: [
        "Chronická nebo záchvatovitá bolest v epigastriu s propagací do zad, často provokovaná jídlem nebo alkoholem.",
        "Exokrinní insuficience: **steatorea** (objemná, mastná, zapáchající stolice) a hubnutí v důsledku malabsorpce tuků.",
        "Deficity vitaminů rozpustných v tucích (A, D, E, K) a rozvoj sekundárního diabetu (typ 3c)."
      ],
      diagnostics: [
        "Stanovení **fekální elastázy-1** ve stolici – snížení pod 200 ug/g stolice indikuje exokrinní insuficienci.",
        "Zobrazovací metody: CT břicha, MRCP nebo endoskopická ultrasonografie prokazující kalcifikace v parenchymu a dilataci vývodu.",
        "Orální glukózový toleranční test (oGTT) k detekci přidružené poruchy glukózové tolerance."
      ]
    },
    quiz: [
      {
        question: "Který z následujících projevů je nejcharakterističtějším důsledkem selhání exokrinní funkce u chronické pankreatitidy?",
        options: [
          "Zvýšená frekvence močení a polyurie",
          "Steatorea (mastná, objemná stolice) doprovázená hubnutím a deficity liposolubilních vitaminů",
          "Extrémní nárůst svalové hmoty",
          "Kyselé zvracení a pálení žáhy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Polyurie souvisí s diabetem (endokrinní funkce), nikoliv exokrinní.",
          "Správně! Exokrinní pankreas produkuje lipázu nezbytnou pro štěpení tuků. Při jejím nedostatku odcházejí neštěpené tuky stolicí (steatorea), což vede k malabsorpci a deficitu vitaminů A, D, E, K.",
          "Nesprávně. Malabsorpce vede k hubnutí, nikoliv k nárůstu svalů.",
          "Nesprávně. Kyselé zvracení nesouvisí s exokrinním pankreatem."
        ]
      }
    ]
  },

  // spec-2-20: Hypotyreóza a struma
  "spec-2-20": {
    richContent: {
      definition: "Hypotyreóza je stav způsobený nedostatečnou koncentrací hormonů štítné žlázy (T3, T4) v tkáních. Struma označuje jakékoli zvětšení štítné žlázy nad normu.",
      etiology: [
        "Hashimotova tyroiditida: chronický autoimunitní zánět s destrukcí folikulů (nejčastější příčina).",
        "Nedostatek jódu v potravě (vede k endemické strumě z poruchy syntézy).",
        "Iatrogenní příčiny: stav po totální tyroidektomii (odstranění žlázy) nebo léčbě radiojodem.",
        "Kongenitální hypotyreóza (vrozená porucha vývoje nebo syntézy)."
      ],
      pathogenesis: [
        "Hashimotova tyroiditida: imunitní systém tvoří protilátky proti tyroidální peroxidáze (anti-TPO) a tyreoglobulinu (anti-Tg). Infiltrace CD8+ T-lymfocyty vede k destrukci folikulárních buněk.",
        "Pokles produkce T4 a T3 odblokuje negativní zpětnou vazbu na hypofýzu, což zvýší sekreci TSH.",
        "Struma: trvalá elevace TSH působí troficky na přežívající folikulární buňky, což stimuluje jejich hypertrofii a hyperplázii ve snaze kompenzovat deficit."
      ],
      clinicalManifestation: [
        "Celkové zpomalení metabolismu: únava, spavost, zimomřivost, zácpa, přibývání na váze při snížené chuti k jídlu.",
        "Myxedém: nestlačitelné otoky podkoží (zejména v obličeji a na rukou) způsobené hromaděním mukopolysacharidů v dermis.",
        "Bradykardie, suchá, hrubá kůže, chraplavý hlas a u dětí neléčený kretenismus (těžká porucha mentálního a tělesného vývoje)."
      ],
      diagnostics: [
        "Stanovení **TSH a volného T4 (fT4)** v séru. U primární hypotyreózy je TSH zvýšené a fT4 snížené.",
        "Průkaz autoantiprotiátek: anti-TPO a anti-Tg v séru (potvrzení autoimunitní etiologie).",
        "Ultrasonografie štítné žlázy prokazující nehomogenní echotexturu s hypoechogenními ložisky (Hashimoto) nebo uzlovou přestavbu."
      ]
    },
    quiz: [
      {
        question: "Jaký patofyziologický mechanismus je zodpovědný za vznik struny (zvětšení štítné žlázy) u endemického nedostatku jódu?",
        options: [
          "Zvýšená vazba hormonů štítné žlázy na transportní proteiny",
          "Snížená produkce T3/T4 odblokuje negativní zpětnou vazbu, což vede k trvalé stimulaci folikulárních buněk zvýšenou hladinou TSH",
          "Přímá bakteriální infekce parenchymu",
          "Ukládání nadbytečného jodu ve formě krystalů"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Vazba na proteiny strumu nezpůsobuje.",
          "Správně! Při nedostatku jódu nemůže štítná žláza tvořit dostatek T3 a T4. Nízká hladina hormonů v krvi odblokuje negativní zpětnou vazbu na ose, stoupne produkce TSH z hypofýzy, a TSH působí jako růstový faktor stimulující proliferaci buněk žlázy.",
          "Nesprávně. Endemická struma není infekčního původu.",
          "Nesprávně. Při endemickém nedostatku jod chybí, nemůže se proto ukládat."
        ]
      }
    ]
  },

  // spec-2-21: Hypotalamo-hypofyzární systém & Akutní pankreatitida
  "spec-2-21": {
    richContent: {
      definition: "Sdružená témata: poruchy hypotalamo-hypofyzárního systému (panhypopituitarismus, diabetes insipidus, SIADH) a akutní zánět slinivky břišní (autodigese).",
      etiology: [
        "Centrální endokrinní poruchy: adenomy hypofýzy (útlak a expanze), Sheehanův syndrom, trauma hlavy.",
        "Diabetes insipidus (DI): centrální (nedostatek ADH) nebo nefrogenní (necitlivost ledvin na ADH).",
        "Akutní pankreatitida: cholecystolitiáza (biliární – 40 %), abúzus alkoholu (35 %), hypertriglyceridémie."
      ],
      pathogenesis: [
        "Hypofýza: expanze tumoru ničí secernující buňky (výpadek hormonů) a utlačuje chiasma opticum. DI vede k neschopnosti koncentrovat moč. SIADH způsobuje nadměrnou retenci vody a diluční hyponatrémii.",
        "Akutní pankreatitida: poškození acinárních buněk vede k **předčasné aktivaci trypsinogenu na trypsin přímo ve slinivce**.",
        "Aktivovaný trypsin spustí autokatalytickou kaskádu (aktivace elastázy, fosfolipázy), což vede k autodigesi tkáně, nekróze cév, krvácení a rozvoji systémové zánětlivé reakce (SIRS, ARDS)."
      ],
      clinicalManifestation: [
        "Centrální poruchy: bitemporální hemianopsie (ztráta periferního zorného pole), polyurie (10-20 l moči denně u DI), bolesti hlavy.",
        "Akutní pankreatitida: náhlá, krutá bolest v epigastriu vyzařující v pásu do zad, nauzea, zvracení, dehydratace až šok.",
        "Cullenovo a Grey-Turnerovo znamení (modravé zbarvení kolem pupku a na bocích z krvácení v retroperitoneu)."
      ],
      diagnostics: [
        "Pro DI: vysoká osmolalita plazmy, nízká osmolalita moči; vodní deprivační test k rozlišení centrálního a nefrogenního DI.",
        "Pro pankreatitidu: **sérová lipáza a amyláza** (zvýšení na $\\ge 3$násobek normy), ultrasonografie nebo CT břicha."
      ]
    },
    quiz: [
      {
        question: "Který patofyziologický proces stojí na počátku tkáňové destrukce u akutní pankreatitidy?",
        options: [
          "Bakteriální infekce ze střeva",
          "Předčasná intracelulární aktivace trypsinogenu na aktivní trypsin v acinárních buňkách slinivky",
          "Ucpání pankreatického vývodu mucinovými zátkami",
          "Ischemický infarkt slinivky z uzávěru a. lienalis"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Akutní pankreatitida začíná jako sterilní zánět.",
          "Správně! Klíčovým spouštěčem je selhání ochranných mechanismů acinárních buněk a předčasná přeměna neaktivního trypsinogenu na trypsin přímo ve slinivce. Aktivovaný trypsin spustí autodigesi (sebetrávení) slinivky.",
          "Nesprávně. Mucinové zátky hrají roli u cystické fibrózy, nikoliv u typické akutní pankreatitidy.",
          "Nesprávně. Ischémie není primárním iniciátorem tohoto procesu."
        ]
      }
    ]
  },

  // spec-2-22: Hypertyreóza
  "spec-2-22": {
    richContent: {
      definition: "Hypertyreóza je syndrom způsobený nadbytkem cirkulujících hormonů štítné žlázy (T3, T4), což vede k hypermetabolickému stavu tkání.",
      etiology: [
        "Graves-Basedowova choroba: autoimunitní stimulace receptoru pro TSH protilátkami (nejčastější příčina).",
        "Toxický adenom (solitární autonomní uzel) a toxická polynodózní struma.",
        "Subakutní de Quervainova tyroiditida (destrukční hypertyreóza s únikem hormonů)."
      ],
      pathogenesis: [
        "Graves-Basedowova choroba: B-lymfocyty tvoří protilátky proti receptoru pro TSH (**TRAb**), které působí jako agonisté.",
        "Vazba TRAb aktivuje adenylátcyklázu a stimuluje nekontrolovanou syntézu a uvolňování T3 a T4.",
        "Tyroidální hormony zvyšují transkripci $Na^+/K^+$-ATPázy a **up-regulují počet beta-adrenergních receptorů** v srdci a dalších tkáních, což zvyšuje citlivost na katecholaminy."
      ],
      clinicalManifestation: [
        "Kardiovaskulární: tachykardie, palpitace, fibrilace síní, zvýšený systolický tlak.",
        "Metabolické: hubnutí při zvýšené chuti k jídlu, intolerance tepla, zvýšené pocení, jemný třes rukou, nervozita, nespavost.",
        "Specifické pro Graves-Basedow: **endokrinní orbitopatie (exoftalmus)** způsobená edémem a infiltrací retrobulbárního vaziva, pretibiální myxedém."
      ],
      diagnostics: [
        "Laboratoř: **suprimovaný (neměřitelný) TSH a zvýšený volný T4 (fT4) a fT3**.",
        "Průkaz protilátek: pozitivní **TRAb** (potvrzuje Graves-Basedowovu chorobu).",
        "Scintigrafie štítné žlázy (rozliší difúzní akumulaci u Graves-Basedow od horkého uzlu)."
      ]
    },
    quiz: [
      {
        question: "Proč jsou pacienti s hypertyreózou extrémně citliví na účinky katecholaminů (projevující se tachykardií a třesem)?",
        options: [
          "Hormony štítné žlázy přímo secernují adrenalin do krve",
          "Hormony štítné žlázy zvyšují expresi (up-regulaci) beta-adrenergních receptorů v cílových tkáních včetně myokardu",
          "Dochází k zablokování odbourávání noradrenalinu v játrech",
          "Katecholaminy jsou chemicky přeměňovány na tyroxin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Štítná žláza adrenalin netvoří.",
          "Správně! Nadbytek $T_3$ a $T_4$ zvyšuje počet $\\beta_1$-adrenergních receptorů v srdci. Srdce se tak stává mnohem citlivějším na normální hladiny cirkulujícího adrenalinu a noradrenalinu, což vede k tachykardii a arytmiím.",
          "Nesprávně. Odbourávání katecholaminů není hypertyreózou zablokováno.",
          "Nesprávně. Přeměna katecholaminů na tyroxin takto neprobíhá."
        ]
      }
    ]
  },

  // spec-2-23: Hyperparatyreóza
  "spec-2-23": {
    richContent: {
      definition: "Hyperparatyreóza je stav charakterizovaný nadměrnou sekrecí parathormonu (PTH) příštítnými tělísky, což narušuje homeostázu vápníku a fosforu.",
      etiology: [
        "Primární (pHPT): autonomně fungující adenom příštítného tělíska (85 %) nebo hyperplázie.",
        "Sekundární (sHPT): reaktivní hypersekrece PTH při chronické hypokalcémii (chronické selhání ledvin, deficit vitaminu D).",
        "Terciární (tHPT): autonomní hypersekrece PTH vznikající po dlouhodobé sekundární HPT (často po transplantaci ledvin)."
      ],
      pathogenesis: [
        "Nadbytek PTH stimuluje osteoklasty k resorpci kosti, což uvolňuje vápník a fosfor do oběhu.",
        "V ledvinách PTH zvyšuje tubulární reabsorpci vápníku, ale **snižuje reabsorpci fosfátů** (phosphaturie).",
        "PTH stimuluje ledvinnou $1\\alpha$-hydroxylázu, což zvyšuje tvorbu kalcitriolu a tím absorpci vápníku ve střevě.",
        "U primární HPT tyto mechanismy vedou k **hyperokalcémii** a hypofosfatémii."
      ],
      clinicalManifestation: [
        "Renální: nefrolitiáza (ledvinové kameny z hyperkalciurie) a nefrokalcinóza.",
        "Kostní: osteoporóza, bolesti kostí a patologické zlomeniny (obraz *osteitis fibrosa cystica*).",
        "Gastrointestinální a neuropsychické: peptické vředy (vápník stimuluje gastrin), zácpa, svalová slabost, deprese, únava."
      ],
      diagnostics: [
        "Průkaz **zvýšené hladiny PTH v séru** současně s **hyperkalcémií** a hypofosfatémií (typické pro primární HPT).",
        "Stanovení exkrece vápníku močí za 24 hodin.",
        "Lokalizační metody: ultrasonografie krku a scintigrafie příštítných tělísek ($^{99m}Tc$-MIBI)."
      ]
    },
    quiz: [
      {
        question: "Jak se mění hladiny vápníku a fosfátů v séru u pacienta s primární hyperparatyreózou?",
        options: [
          "Hypokalcémie a hyperfosfatémie",
          "Hyperkalcémie a hypofosfatémie",
          "Hyperkalcémie a hyperfosfatémie",
          "Hypokalcémie a hypofosfatémie"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hypokalcémie by stimulovala sekundární HPT, ale u primární je vápník vysoký.",
          "Správně! Parathormon zvyšuje hladinu vápníku v krvi (odbourávání kostí, retence v ledvinách) a zároveň tlumí reabsorpci fosfátů v proximálním tubulu, což vede k jejich ztrátám močí (hypofosfatémie).",
          "Nesprávně. Fosfát v séru klesá z důvodu jeho zvýšeného vylučování močí.",
          "Nesprávně. Nízký vápník s nízkým fosfátem není obrazem primární hyperparatyreózy."
        ]
      }
    ]
  },

  // spec-2-24: Hyperkortizolismus
  "spec-2-24": {
    richContent: {
      definition: "Cushingův syndrom je soubor klinických příznaků způsobených dlouhodobou expozicí vysokým hladinám glukokortikoidů (kortizolu).",
      etiology: [
        "Exogenní (iatrogenní): dlouhodobé podávání farmakologických dávek glukokortikoidů (nejčastější příčina).",
        "Endogenní ACTH-dependentní (80 %): ACTH-secernující adenom hypofýzy (Cushingova nemoc), ektopická produkce ACTH (např. malobuněčný karcinom plic).",
        "Endogenní ACTH-independentní (20 %): adenom nebo karcinom kůry nadledvin secernující kortizol."
      ],
      pathogenesis: [
        "Nadbytek kortizolu stimuluje glukoneogenezi v játrech a inhibuje utilizaci glukózy v periferních tkáních (steroidní diabetes).",
        "Působí výrazně katabolicky na proteiny (odbourávání kolagenu a svalů) a stimuluje lipogenezi s redistribucí tuku.",
        "Kortizol ve vysokých dávkách vykazuje mineralokortikoidní aktivitu (vazba na MR receptory v ledvinách vede k retenci sodíku, ztrátě draslíku a hypertenzi)."
      ],
      clinicalManifestation: [
        "Redistribuce tuku: centripetální obezita (tuk na trupu), měsíčkovitý obličej (*facies lunata*), tukový hrb za krkem.",
        "Kožní změny: atrofie kůže (papírová kůže), snadná tvorba hematomů, široké fialové strie na břiše a bocích.",
        "Svalová slabost (pletenec dolních končetin), arteriální hypertenze, osteoporóza, steroidní diabetes mellitus, psychické změny."
      ],
      diagnostics: [
        "Průkaz zvýšeného volného kortizolu v moči za 24 hodin a ztráta diurnálního rytmu (vysoký slinný kortizol o půlnoci).",
        "Dexamethasonový supresní test (podání exogenního dexamethasonu nepotlačí sekreci kortizolu u Cushingova syndromu).",
        "Stanovení hladiny ACTH v plazmě (nízké u tumoru nadledvin, vysoké u hypofyzární/ektopické formy), MRI sely, CT nadledvin."
      ]
    },
    quiz: [
      {
        question: "Jaký je patofyziologický rozdíl mezi Cushingovým syndromem a Cushingovou nemocí?",
        options: [
          "Cushingova nemoc je způsobena předávkováním inzulínem",
          "Cushingův syndrom je obecný pojem pro stav nadbytku kortizolu jakékoli etiologie, zatímco Cushingova nemoc je specifická forma způsobená ACTH-secernujícím adenomem hypofýzy",
          "Cushingova nemoc postihuje pouze muže a Cushingův syndrom pouze ženy",
          "U Cushingova syndromu je hladina ACTH vždy zvýšená, u Cushingovy nemoci je vždy snížená"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Inzulín s tímto syndromem nesouvisí.",
          "Správně! Cushingův syndrom zahrnuje všechny příčiny hyperkortizolismu (včetně iatrogenní a nadledvinové). Cushingova nemoc (morbus Cushing) je konkrétní diagnóza, kdy je zdrojem nadbytku kortizolu adenom hypofýzy produkující nadměrně ACTH.",
          "Nesprávně. Obě jednotky mohou postihnout obě pohlaví.",
          "Nesprávně. U hypofyzární formy (Cushingova nemoc) je ACTH zvýšené, u nadledvinové formy Cushingova syndromu je ACTH naopak suprimované."
        ]
      }
    ]
  },

  // spec-2-25: Hyperaldosteronismus
  "spec-2-25": {
    richContent: {
      definition: "Stavy spojené s nadměrnou produkcí mineralokortikoidního hormonu aldosteronu, což vede k retenci sodíku, hypertenzi a ztrátám draslíku.",
      etiology: [
        "Primární (PA - Connův syndrom): bilaterální hyperplázie kůry nadledvin (60 %) nebo aldosteron-secernující adenom (Connův adenom - 35 %).",
        "Sekundární hyperaldosteronismus: reaktivní hypersekrece při hyperaktivaci RAAS (např. stenóza renální tepny, srdeční selhání, cirhóza)."
      ],
      pathogenesis: [
        "Aldosteron stimuluje mineralokortikoidní receptory v hlavních buňkách sběrného kanálku ledvin.",
        "Zvyšuje expresi sodíkových kanálů (ENaC) a $Na^+/K^+$-ATPázy, což vede ke **zvýšené reabsorpci sodíku a vody**.",
        "Současně dochází k **vylučování draslíku ($K^+$) a vodíkových iontů ($H^+$)** do moči.",
        "U primárního aldosteronismu vede expanze objemu k supresi sekrece reninu (vysoký aldosteron, nízký renin)."
      ],
      clinicalManifestation: [
        "Arteriální hypertenze (často středně těžká až těžká, refrakterní na běžnou léčbu). Otoky obvykle chybí (fenomén 'aldosteronového úniku').",
        "Hypokalémie: svalová slabost, parestezie, křeče, zácpa.",
        "Polyurie a polydipsie (hypokalémie poškozuje tubuly a navozuje necitlivost k ADH - hypokalemická nefropatie), metabolická alkalóza."
      ],
      diagnostics: [
        "Měření **poměru aldosteronu k reninu (ARR)** v plazmě – u primárního aldosteronismu je ARR zvýšený (vysoký aldosteron, nízký renin).",
        "Konfirmační testy: solný zátěžový test (infuze fyziologického roztoku nepotlačí sekreci aldosteronu u PA).",
        "CT nadledvin a selektivní odběr krve z nadledvinových žil (AVS) k lateralizaci zdroje před operací."
      ]
    },
    quiz: [
      {
        question: "Která trojice laboratorních a klinických nálezů je typická pro primární aldosteronismus (Connův syndrom)?",
        options: [
          "Hypotenze, hyperkalémie a metabolická acidóza",
          "Arteriální hypertenze, hypokalémie a metabolická alkalóza",
          "Hyponatrémie, hypokalémie a vysoká plazmatická aktivita reninu",
          "Hyperglykémie, hypernatrémie a vysoké ACTH"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Aldosteron krevní tlak zvyšuje a draslík snižuje.",
          "Správně! Nadbytek aldosteronu způsobuje retenci sodíku a vody (hypertenze) a zvýšené vylučování draslíku ($K^+$) a vodíku ($H^+$) ledvinami, což vede k hypokalémii a metabolické alkalóze.",
          "Nesprávně. U primární formy je renin potlačen (nízký) a sodík je v normě či mírně zvýšen, nikoliv hyponatrémie.",
          "Nesprávně. Connův syndrom primárně neovlivňuje glykémii ani ACTH."
        ]
      }
    ]
  },

  // spec-2-26: Onemocnění tlustého střeva & Ileus
  "spec-2-26": {
    richContent: {
      definition: "Patologie tlustého střeva (divertikulóza, polypy, kolorektální karcinom) a syndrom střevní neprůchodnosti (ileus).",
      etiology: [
        "Divertikulóza: nedostatek vlákniny, chronická zácpa, zvýšený intraluminální tlak.",
        "Kolorektální karcinom (CRC): genetické syndromy (FAP, Lynchův syndrom), zánětlivé střevní nemoci, západní strava.",
        "Mechanický ileus: obstrukce lumina tumorem, cizím tělesem, strangulace (zaškrcení kýly), srůsty po operacích.",
        "Paralytický ileus: pooperační stav, peritonitida, těžká hypokalémie."
      ],
      pathogenesis: [
        "Divertikulóza: herniace sliznice skrze svalovou vrstvu střeva. Divertikulitida vzniká stagnation stolice v divertiklu s rozvojem mikroperforace a zánětu.",
        "CRC: progrese z benigního polypu (adenomu) akumulací genetických mutací (kaskáda APC -> KRAS -> p53).",
        "Ileus: zástava pasáže vede k hromadění tekutiny a plynů nad překážkou, což zvýší intraluminální tlak. Dochází k útlaku žilního odtoku stěny (venostáza), prosáknutí stěny, bakteriální translokaci a hrozí ischemie (gangréna) s perforací střeva a peritonitidou."
      ],
      clinicalManifestation: [
        "Divertikulitida: bolest v levém podbřišku ('levostranná apendicitida'), horečka, leukocytóza.",
        "Karcinom tlustého střeva: změna rytmu stolice (střídání zácpy a průjmu), přítomnost krve ve stolici, mikrocytární anémie z chronických ztrát.",
        "Ileus: absence odchodu stolice a plynů, kolikovitá (u mechanického) nebo trvalá tupá (u paralytického) bolest břicha, zvracení (může být s příměsí střevního obsahu – *miserere*), meteorismus (vzedmuté břicho)."
      ],
      diagnostics: [
        "Kolonoskopie s biopsií (zlatý standard pro polypy a karcinomy) a test na okultní krvácení (TOKS).",
        "Nativní RTG snímek břicha ve stoji u ileu (průkaz hydroaerických fenoménů – fluidních hladinek v rozepjatých kličkách střevních).",
        "CT břicha s kontrastem k posouzení divertikulitidy, stagingu karcinomu či místa obstrukce."
      ]
    },
    quiz: [
      {
        question: "Co je hlavním nálezem na nativním RTG snímku břicha ve stoji u pacienta s rozvinutým ileem?",
        options: [
          "Úplné vymizení plynu z břišní dutiny",
          "Přítomnost hydroaerických fenoménů (hladinek) v rozepjatých kličkách střeva",
          "Zvětšení žlučníku na trojnásobek normy",
          "Volný vzduch pod bránicí bez přítomnosti plynu ve střevě"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U ileu se plyn ve střevě hromadí.",
          "Správně! Nad nahromaděnou tekutinou se ve střevních kličkách hromadí plyn. Na snímku ve stoji to vytváří typické horizontální rozhraní mezi tekutinou a plynem – fluidní hladinky (Kloiberovy misky).",
          "Nesprávně. Žlučník není na nativním snímku břicha u ileu klíčovým diagnostickým nálezem.",
          "Nesprávně. Volný vzduch pod bránicí (pneumoperitoneum) značí perforaci dutého orgánu, nikoliv samotný ileus."
        ]
      }
    ]
  },

  // spec-2-27: Diabetes mellitus (Ponecháno původní detailContent)
  "spec-2-27": {
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Klasifikace a patofyziologie</h3>
          <p><strong>Diabetes mellitus (DM)</strong> je charakterizován chronickou hyperglykémií způsobenou poruchami sekrece inzulínu, jeho účinku, nebo obojího.</p>
          <ul>
            <li><strong>Diabetes 1. typu (DM1):</strong> Autoimunitní destrukce $\\beta$-buněk Langerhansových ostrůvků (mediovaná T-lymfocyty). Vede k **absolutnímu nedostatku inzulínu**. Pacienti jsou ohroženi diabetickou ketoacidózou.</li>
            <li><strong>Diabetes 2. typu (DM2):</strong> Vyznačuje se **inzulínovou rezistencí** (postreceptorový defekt signalizace GLUT-4) v kombinaci s **relativním nedostatkem inzulínu** (vyčerpání sekreční kapacity $\\beta$-buněk). Souvisí s obezitou a metabolickým syndromem.</li>
          </ul>
        </section>
        <section>
          <h3>2. Patofyziologie hlavních symptomů</h3>
          <p>Nedostatek inzulínového signálu ve tkáních vede k hyperglykémii:</p>
          <ul>
            <li><strong>Polyurie:</strong> Glykémie překračuje ledvinný práh (10 mmol/l), glukóza odchází do moči a působí jako **osmotické diuretikum**.</li>
            <li><strong>Polydipsie:</strong> Ztráty vody močí a hyperosmolarita plazmy stimulují osmoreceptory a centrum žízně v hypothalamu.</li>
            <li><strong>Polyfágie a hubnutí:</strong> Buňky nemohou využívat glukózu a energeticky hladoví, což spustí kompenzační lipolýzu a proteolýzu.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední příčinou vzniku diabetické ketoacidózy u pacientů s absolutním nedostatkem inzulínu?",
        options: [
          "Nadměrné pití sladkých nápojů",
          "Nekontrolovaná lipolýza v tukové tkáni, která uvolňuje volné mastné kyseliny, jež jsou v játrech přeměňovány na ketolátky (acetacetát, beta-hydroxybutyrát)",
          "Přímá přeměna glukózy na ketolátky v ledvinách",
          "Hromadění laktátu ze svalového metabolismu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Glykémie stoupá, ale pití samotné ketoacidózu nevyvolá.",
          "Správně! Absence inzulínu odblokuje aktivitu hormon-senzitivní lipázy v adipocytech. Do krve se uvolní obrovské množství mastných kyselin, které játra oxidují na acetoacetát a $\\beta$-hydroxybutyrát. Tyto kyselé ketolátky vyvolají metabolickou acidózu.",
          "Nesprávně. Ledviny ketolátky netvoří.",
          "Nesprávně. Hromadění laktátu vyvolává laktátovou acidózu (např. u metforminu či hypoxie), nikoli diabetickou ketoacidózu."
        ]
      }
    ]
  },

  // spec-2-28: Diabetes - akutní a chronické komplikace
  "spec-2-28": {
    richContent: {
      definition: "Komplikace diabetu se dělí na akutní metabolické krize (DKA, HHS, hypoglykémie) a chronické postižení cév (mikroangiopatie, makroangiopatie).",
      etiology: [
        "DKA: absolutní nedostatek inzulínu (typicky DM1) kombinovaný se stresem (infekce).",
        "HHS: relativní nedostatek inzulínu u DM2 s těžkou dehydratací.",
        "Hypoglykémie: nesoulad mezi dávkou inzulínu/derivátů sulfonylurey a příjmem sacharidů nebo fyzickou aktivitou.",
        "Chronické komplikace: chronická hyperglykémie a související glukotoxicita."
      ],
      pathogenesis: [
        "DKA: absence inzulínu aktivuje lipolýzu. Mastné kyseliny jsou v játrech přeměňovány na acetoacetát a $\\beta$-hydroxybutyrát, což vede k metabolické acidóze s aniontovým gapem.",
        "HHS: zbytkový inzulín tlumí lipolýzu (netvoří se ketolátky), ale hyperglykémie (>33 mmol/l) navodí masivní osmotickou diurézu a extrémní dehydrataci.",
        "Chronická mikroangiopatie: hyperglykémie stimuluje tvorbu pokročilých produktů glykace (AGEs), aktivuje polyolovou dráhu (sorbitol v nervech a čočce) a proteinkinázu C, což poškozuje endotel kapilár.",
        "Makroangiopatie: akcelerovaná ateroskleróza zánětem a glykací LDL."
      ],
      clinicalManifestation: [
        "DKA: Kussmaulovo dýchání (hluboká hyperventilace), acetonový zápach z úst, bolest břicha, dehydratace, somnolence.",
        "HHS: těžká dehydratace (suché sliznice, pokles turgoru), neurologické příznaky (křeče, ložiskové příznaky), kóma.",
        "Hypoglykémie: pocení, třes, palpitace (sympatikus); zmatenost, křeče, bezvědomí (neuroglykopénie).",
        "Chronické: diabetická retinopatie (slepota), nefropatie (proteinurie, chronické selhání ledvin), polyneuropatie (ztráta citlivosti končetin - syndrom diabetické nohy)."
      ],
      diagnostics: [
        "Laboratoř akutních stavů: glykémie, pH krve, bikarbonáty, ketolátky v séru a moči, osmolalita plazmy.",
        "Laboratoř chronických stavů: **glykovaný hemoglobin (HbA1c)** pro dlouhodobou kompenzaci, screening mikroalbuminurie (poměr albumin/kreatinin v moči).",
        "Pravidelné kontroly očního pozadí a testování čití ladičkou/monofilamentem."
      ]
    },
    quiz: [
      {
        question: "Proč u pacientů s hyperosmolárním hyperglykemickým syndromem (HHS) nevzniká závažná ketoacidóza, přestože mají extrémně vysokou glykémii?",
        options: [
          "Ketolátky u nich odcházejí extrémně rychle plícemi",
          "Přítomnost malého množství inzulínu dostačuje k inhibici lipolýzy v tukové tkáni, což brání uvolnění mastných kyselin pro tvorbu ketolátek",
          "Pacienti s DM2 nemají enzymy pro tvorbu ketolátek v játrech",
          "Ledviny u DM2 tvoří bikarbonát, který acidózu neutralizuje"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ketolátky se plícemi nevydýchají tak rychle, aby to zabránilo acidóze.",
          "Správně! U DM2 (kde typicky vzniká HHS) je zachována minimální sekrece inzulínu. Toto stopové množství inzulínu stačí na to, aby zablokovalo hormon-senzitivní lipázu v adipocytech (nedojde k lipolýze), ale nestačí k překonání inzulínové rezistence v játrech a svalech pro snížení glykémie.",
          "Nesprávně. Játra u pacientů s DM2 jsou plně funkční a ketolátky tvořit umí.",
          "Nesprávně. Ledviny u DM2 netvoří nadbytek bikarbonátu k neutralizaci ketoacidózy."
        ]
      }
    ]
  },

  // spec-2-29: Cévní mozkové příhody & TIA
  "spec-2-29": {
    richContent: {
      definition: "Cévní mozková příhoda (CMP) je náhle vzniklý neurologický deficit způsobený ložiskovou poruchou mozkového oběhu. TIA je přechodná ischémie bez strukturálního infarktu.",
      etiology: [
        "Ischemická CMP (80 %): trombóza na aterosklerotickém plátu, kardioembolizace (fibrilace síní), hemodynamické selhání.",
        "Hemoragická CMP (20 %): intracerebrální krvácení (hypertenze), subarachnoidální krvácení (ruptura aneuryzmatu).",
        "TIA: mikroembolizace s rychlou spontánní fibrinolýzou."
      ],
      pathogenesis: [
        "Ischémie: přerušení dodávky kyslíku a glukózy vede k depleci ATP. Selhává $Na^+/K^+$-ATPáza, dochází k depolarizaci membrány, masivnímu influxu vápníku a uvolnění glutamátu (excitotoxicita).",
        "Aktivace intracelulárních proteáz a lipáz vede k nekróze buněčného jádra a rozpadu membrán.",
        "TIA: perfuze se obnoví dříve, než nastane ireverzibilní buněčná smrt (infarkt), funkce se vrací k normě."
      ],
      clinicalManifestation: [
        "FAST příznaky: Face (pokles koutku úst), Arm (pokles předpažené končetiny), Speech (afázie, dysartrie), Time (rychlost intervence).",
        "Senzorické výpadky (hemihypestézie), výpadky zorného pole (hemianopsie), poruchy rovnováhy.",
        "Amaurosis fugax (přechodná slepota na jedno oko) – typický příznak TIA v povodí a. carotis interna."
      ],
      diagnostics: [
        "Nativní CT mozku – zásadní krok k okamžitému vyloučení hemoragie (ischemie se na CT v časné fázi nemusí zobrazit).",
        "MRI mozku s DWI sekvencemi (difúzně vážený obraz) – vysoce citlivá metoda pro průkaz časné ischémie a odlišení TIA.",
        "EKG (detekce fibrilace síní), sonografie karotid, echokardiografie."
      ]
    },
    quiz: [
      {
        question: "Jaká je klinická definice transitorní ischemické ataky (TIA)?",
        options: [
          "Ischemická příhoda s trvalým ochrnutím obličeje bez postižení končetin",
          "Přechodná epizoda neurologické dysfunkce způsobená ložiskovou ischémií mozku, míchy nebo sítnice, bez průkazu akutního infarktu na MRI a s plnou úpravou symptomů do 24 hodin",
          "Krvácení do subarachnoidálního prostoru trvající méně než 1 hodinu",
          "Dočasná zástava srdce provázená ztrátou vědomí"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. TIA nezanechává trvalé následky.",
          "Správně! TIA je charakterizována rychlou úpravou klinického deficitu (většinou do 1 hodiny, maximálně do 24 hodin) a absencí ložiska infarktu při zobrazení magnetickou rezonancí. Je to však varovný signál vysokého rizika brzké ischemické CMP.",
          "Nesprávně. TIA je výhradně ischemické povahy, nikoliv hemoragické.",
          "Nesprávně. TIA postihuje mozkové cévy, nikoliv přímo srdeční automatismus."
        ]
      }
    ]
  },

  // spec-2-30: Centrální a periferní paréza
  "spec-2-30": {
    richContent: {
      definition: "Paréza je částečné ochrnutí svalstva. Centrální (spastická) paréza postihuje horní motoneuron, periferní (chabá) paréza postihuje dolní motoneuron.",
      etiology: [
        "Centrální paréza: cévní mozkové příhody, traumatické poranění mozku či míchy, roztroušená skleróza, nádory CNS.",
        "Periferní paréza: traumata periferních nervů, kompresivní syndromy (syndrom karpálního tunelu), polyneuropatie (diabetická, Guillain-Barré), amyotrofická laterální skleróza (ALS - postihuje oba motoneurony)."
      ],
      pathogenesis: [
        "Centrální paréza: poškození horního motoneuronu (pyramidové dráhy). Vede k výpadku volní hybnosti. Současně se ztrácí tlumivý vliv kůry na míšní reflexy, což vyvolá **hyperreflexii** a **spasticitu** (zvýšený svalový tonus).",
        "Periferní paréza: poškození dolního motoneuronu (v předních rozích míšních nebo v periferním nervu). Přeruší se reflexní oblouk. Sval přichází o veškeré stimuly, což vede k **hypotonii**, **areflexii** a rychlé **denervační atrofii** svalových vláken."
      ],
      clinicalManifestation: [
        "Centrální: **spastická obrna**, hyperreflexie, přítomnost patologických iritačních reflexů (Babinského příznak), klonus. Svaly neatnofují (jen mírně z nečinnosti).",
        "Periferní: **chabá obrna**, vymizení reflexů (hypo- až areflexie), těžká svalová atrofie, přítomnost **fascikulací** (jemné záškuby svalových snopců)."
      ],
      diagnostics: [
        "Klinické neurologické vyšetření: hodnocení svalové síly, tonu, šlachových reflexů a pyramidových jevů.",
        "Elektromyografie (EMG) – klíčová metoda k rozlišení neurogenní léze od myogenní a lokalizaci poškození periferního nervu.",
        "MRI mozku/míchy k detekci místa komprese či poškození pyramidové dráhy."
      ]
    },
    quiz: [
      {
        question: "Přítomnost Babinského příznaku (extenze palce s vějířovitým roztažením ostatních prstů při podráždění planty) svědčí pro:",
        options: [
          "Poškození periferního nervu dolní končetiny",
          "Poškození horního motoneuronu (pyramidové dráhy) v centrálním nervovém systému",
          "Primární svalové onemocnění (myopatii)",
          "Ztrátu citlivosti zadních míšních provazců"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U periferní parézy je Babinského test negativní.",
          "Správně! Babinského reflex je fyziologický u novorozenců (nemají myelinizovanou pyramidovou dráhu). U dospělých je jeho přítomnost patologická a indikuje poškození pyramidové dráhy (centrální paréza), protože kůra již nedokáže tlumit tento míšní reflex.",
          "Nesprávně. Myopatie Babinského příznak nevyvolávají.",
          "Nesprávně. Babinského příznak hodnotí motorický (pyramidový) systém, nikoliv zadní provazce."
        ]
      }
    ]
  },

  // spec-2-31: Autonomní nervový systém
  "spec-2-31": {
    richContent: {
      definition: "Poruchy autonomního (vegetativního) nervového systému (dysautonomie) narušují mimovolní regulaci kardiovaskulárního, trávicího a urogenitálního traktu.",
      etiology: [
        "Diabetická autonomní neuropatie (nejčastější příčina sekundární dysautonomie).",
        "Neurodegenerativní onemocnění: Parkinsonova choroba, multisystémová atrofie (MSA).",
        "Guillain-Barré syndrom (akutní demyelinizační polyneuropatie s rizikem oběhové nestability).",
        "Amyloidóza (ukládání amyloidu v autonomních nervech)."
      ],
      pathogenesis: [
        "Vymizení sympatických vazomotorických vláken: při postavení (ortostáze) nedojde k reflexní vazokonstrikci v dolní polovině těla, což vede k městnání krve a poklesu krevního tlaku.",
        "Poškození parasympatické inervace (n. vagus): vede k chybění vagového tonu, fixované tachykardii a rigidnímu rytmu bez variability.",
        "Poškození enterického nervového systému: zpomalení evakuace žaludku a porucha střevní peristaltiky."
      ],
      clinicalManifestation: [
        "**Ortostatická hypotenze**: prudký pokles krevního tlaku při postavení doprovázený závratí, mžitkami před očima a synkopou.",
        "Kardiovaskulární: klidová tachykardie, chybění variability srdeční frekvence (fixovaný tep).",
        "Gastrointestinální: **gastroparéza** (pocit plnosti po jídle, zvracení natrávené stravy), diabetický průjem nebo zácpa.",
        "Urogenitální a sekreční: neurogenní močový měchýř (retence moči), erektilní dysfunkce, anhidróza (absence pocení s rizikem přehřátí)."
      ],
      diagnostics: [
        "Ortostatický test (Schillongův test) – měření tlaku vleže a ve stoje (pokles systoly o $\\ge 20$ mmHg potvrzuje ortostatickou hypotenzi).",
        "Vyšetření variability srdeční frekvence (HRV) při hlubokém dýchání (E/I poměr).",
        "Scintigrafická studie evakuace žaludku (diagnóza gastroparézy) a testy potních funkcí."
      ]
    },
    quiz: [
      {
        question: "Jaký patofyziologický nález na srdci je typický pro rozvinutou diabetickou autonomní neuropatii?",
        options: [
          "Extrémní bradykardie s tepovou frekvencí pod 30/min",
          "Klidová tachykardie s fixovanou srdeční frekvencí a ztrátou variability tepu",
          "Okamžitá ruptura chlopní",
          "Syndrom preexcitace s výskytem delta vlny"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Bradykardie není typickým nálezem; naopak převažuje ztráta vagového tonu tlumícího frekvenci.",
          "Správně! Poškození n. vagus (který normálně zpomaluje srdce a reguluje variabilitu tepu v závislosti na dýchání) vede k převaze sympatiku. Srdce bije rychle (klidová tachykardie) a tepová frekvence se nemění při dýchání či zátěži (fixovaný tep).",
          "Nesprávně. Neuropatie nezpůsobuje mechanickou rupturu chlopní.",
          "Nesprávně. Delta vlna je typická pro WPW syndrom (přídatná dráha), nikoliv pro autonomní neuropatii."
        ]
      }
    ]
  },

  // spec-2-32: Artróza
  "spec-2-32": {
    richContent: {
      definition: "Osteoartróza (OA) je chronické degenerativní onemocnění kloubů charakterizované postupnou destrukcí kloubní chrupavky, sklerotizací subchondrální kosti a sekundárním zánětem synovie.",
      etiology: [
        "Mechanické přetěžování kloubů: obezita (klíčový rizikový faktor u gonartrózy), těžká manuální práce, vrcholový sport.",
        "Mikrotraumata, vrozené vývojové vady (např. dysplázie kyčelního kloubu).",
        "Pokročilý věk, ženské pohlaví (hormonální vlivy po menopauze) a genetická predispozice."
      ],
      pathogenesis: [
        "Ztráta proteoglykanů v matrix kloubní chrupavky vede k její dehydrataci, ztrátě elasticity a vzniku trhlin (fibrilace chrupavky).",
        "Eroze chrupavky odhaluje subchondrální kost. Ta reaguje na zvýšený mechanický tlak ztluštěním (subchondrální skleróza).",
        "Na okrajích kloubu vznikají kostní výrůstky (**osteofyty**) jako kompenzační reakce těla ve snaze zvětšit plochu kloubu.",
        "Uvolněné fragmenty chrupavky v kloubní dutině vyvolávají reaktivní zánět synoviální membrány (synovitida)."
      ],
      clinicalManifestation: [
        "**Startovací bolest**: bolest na začátku pohybu (po období klidu), která se po rozchození zmírňuje.",
        "Námahová bolest kloubu, která v pokročilých stadiích přechází v bolest klidovou a noční.",
        "Krátká ranní ztuhlost kloubů (do 30 minut), omezení hybnosti, drásoty (krepitus) při pohybu a deformace kloubu (např. Heberdenovy uzly na DIP kloubech rukou)."
      ],
      diagnostics: [
        "Klinické vyšetření kloubu (bolestivost, omezení hybnosti, krepitace).",
        "Rentgenový snímek kloubu – klasické RTG známky: zúžení kloubní štěrbiny (ztráta chrupavky), subchondrální skleróza, osteofyty a subchondrální pseudocysty.",
        "Vyšetření synoviální tekutiny k vyloučení zánětlivé/krystalické artritidy (tekutina u OA je čirá, vazká, s nízkým počtem buněk)."
      ]
    },
    quiz: [
      {
        question: "Jaká je primární patofyziologická změna, která iniciuje rozvoj osteoartrózy?",
        options: [
          "Bakteriální hnisavá infiltrace kloubní dutiny",
          "Degenerace a ztráta proteoglykanů v kloubní chrupavce s následnou ztrátou elasticity a vznikem trhlin",
          "Autoimunitní destrukce synoviální membrány",
          "Ukládání krystalů kyseliny močové v chrupavce"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hnisavý zánět je typický pro septickou artritidu.",
          "Správně! Osteoartróza začíná degenerativními změnami chrupavky – dochází k poklesu syntézy proteoglykanů a narušení kolagenní sítě. Chrupavka ztrácí schopnost vázat vodu, stává se křehkou, fibriluje a postupně eroduje.",
          "Nesprávně. Autoimunitní destrukce synovie je typická pro revmatoidní artritidu.",
          "Nesprávně. Krystaly močanu sodného se ukládají u dny (dnavá artritida)."
        ]
      }
    ]
  },

  // spec-2-33: Akutní jaterní selhání, jaterní encefalopatie, hypoparatyreóza
  "spec-2-33": {
    richContent: {
      definition: "Akutní selhání jater (ALF) je definováno rychlým poklesem jaterních funkcí s rozvojem koagulopatie a encefalopatie u pacienta bez cirhózy. Hypoparatyreóza je deficit PTH doprovázený hypokalcémií.",
      etiology: [
        "ALF: předávkování paracetamolem (toxické poškození), akutní virová hepatitida (HAV, HBV), otrava amanitinem (muchomůrka zelená).",
        "Hypoparatyreóza: iatrogenní odstranění nebo poškození příštítných tělísek při tyroidektomii (nejčastější), autoimunitní destrukce."
      ],
      pathogenesis: [
        "ALF a jaterní encefalopatie: nekróza hepatocytů znemožní přeměnu toxického amoniaku ($NH_3$) na močovinu.",
        "Amoniak prostupuje do mozku, kde ho astrocety metabolizují na **glutamin**. Akumulace glutaminu zvýší osmotický tlak v astrocytech, což vede k jejich edému, rozvoji edému mozku a intrakraniální hypertenze.",
        "Hypoparatyreóza: deficit PTH vede k poklesu uvolňování vápníku z kostí, poklesu jeho reabsorpce v ledvinách a snížené tvorbě aktivního vitaminu D. Výsledkem je **těžká hypokalcémie** zvyšující neuromuskulární dráždivost."
      ],
      clinicalManifestation: [
        "ALF: ikterus, **jaterní encefalopatie** (zmatenost, flapping tremor - asterixis, stupor až kóma), krvácivé projevy (koagulopatie).",
        "Hypoparatyreóza a hypokalcémie: **tetanie** (pocity brnění kolem úst, karpopedální spasmy - porodnická ruka, křeče).",
        "Pozitivní Chvostkův příznak (poklep na n. facialis vyvolá záškub lícního svalu) a Trousseauův příznak (karpální spasmus po nafouknutí manžety tonometru)."
      ],
      diagnostics: [
        "U ALF: prodloužení protrombinového času (INR $\\ge 1.5$), masivní elevace transamináz (ALT, AST), vysoký bilirubin a amoniak.",
        "U hypoparatyreózy: **nízký PTH v séru, hypokalcémie a hyperfosfatémie**.",
        "EKG u hypokalcémie: prodloužení QT intervalu (riziko komorových arytmií)."
      ]
    },
    quiz: [
      {
        question: "Jaký patofyziologický mechanismus vysvětluje vznik edému mozku u pacienta s akutním selháním jater?",
        options: [
          "Ukládání bilirubinu v neuronech mozkové kůry",
          "Hromadění amoniaku v mozku, který je v astrocytech metabolizován na glutamin, což vede k osmotickému edému astrocytů",
          "Trombóza sagitálního splavu",
          "Nadměrná produkce mozkomíšního moku v plexus choroideus"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Jádrový ikterus (kernikterus) postihuje novorozence při extrémním nekonjugovaném bilirubinu, edém mozku u dospělých u ALF nevyvolává.",
          "Správně! Amoniak prostupuje hematoencefalickou bariérou. V astrocytech reaguje s glutamátem za vzniku glutaminu. Vysoká intracelulární koncentrace glutaminu působí osmoticky – vtahuje vodu do astrocytů, což vede k jejich zduření (edému) a rozvoji nitrolební hypertenze.",
          "Nesprávně. Trombóza splavů není příčinou edému u ALF.",
          "Nesprávně. Produkce likvoru u jaterního selhání nestoupá."
        ]
      }
    ]
  },

  // spec-2-34: Hepatitidy, Addison, adrenální krize
  "spec-2-34": {
    richContent: {
      definition: "Záněty jater (hepatitidy) a primární nedostatečnost kůry nadledvin (Addisonova choroba) s rizikem život ohrožující adrenální krize.",
      etiology: [
        "Hepatitidy: virové (HAV, HBV, HCV, HDV, HEV), toxické (alkohol, paracetamol), autoimunitní.",
        "Addisonova choroba: autoimunitní destrukce kůry nadledvin (adrenalitida - 80 %), tuberkulóza, bilaterální krvácení.",
        "Adrenální krize: stres (infekce, operace, trauma) u pacienta s chronickou insuficiencí, který nemá zvýšenou dávku kortikoidů."
      ],
      pathogenesis: [
        "Hepatitidy: imunitní systém (T-lymfocyty) ničí infikované hepatocyty. Chronická hepatitida (trvající >6 měsíců) stimuluje fibrogenezi (cirhózu) přes aktivaci hvězdicových buněk.",
        "Addisonova choroba: destrukce kůry vede k deficitu kortizolu a aldosteronu. Ztráta zpětné vazby kortizolu vede k hypersekreci ACTH a POMC (obsahuje $\\alpha$-MSH).",
        "Adrenální krize: kritický nedostatek kortizolu (selhání glukoneogeneze a cévního tonu) a aldosteronu (ztráty sodíku a vody v ledvinách) vede k těžkému hypovolemickému a distribučnímu šoku."
      ],
      clinicalManifestation: [
        "Hepatitida: únava, nauzea, ikterus, tmavá moč, acholická stolice, hepatomegalie.",
        "Addisonova choroba: chronická slabost, hypotenze, hubnutí, **hyperpigmentace** (bronzová kůže, grafitové skvrny na sliznicích).",
        "Adrenální krize: těžká hypotenze nereagující na katecholaminy (šok), kruté bolesti břicha, zvracení, dehydratace, hyponatrémie, hyperkalémie, hypoglykémie."
      ],
      diagnostics: [
        "Hepatitidy: zvýšené transaminázy (ALT, AST), specifické sérologické markery (HBsAg, anti-HCV) nebo PCR průkaz virové RNA/DNA.",
        "Addisonova choroba: ranní kortizol (nízký) a ACTH (vysoké u primární formy).",
        "Synacthenový test (podání syntetického ACTH nevyvolá vzestup kortizolu), průkaz autoprotilátek proti 21-hydroxyláze."
      ]
    },
    quiz: [
      {
        question: "Proč dochází k rozvoji hyperpigmentace (bronzové kůže a sliznic) u pacientů s primární nedostatečností kůry nadledvin (Addisonovou chorobou)?",
        options: [
          "Ukládáním žlučových barviv v podkoží při poškození jater",
          "Nedostatek kortizolu odblokuje negativní zpětnou vazbu, což vede k nadprodukci ACTH a jeho prekurzoru POMC, který stimuluje melanocytární receptory (kvůli podobnosti s MSH)",
          "Přímou reakcí volného vápníku s kožním barvivem",
          "Zvýšenou produkcí aldosteronu stimulujícího melanin"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Ukládání žlučových barviv způsobuje ikterus (žlutou barvu), nikoliv hyperpigmentaci Addisonovy choroby.",
          "Správně! Nedostatek kortizolu vyvolá masivní sekreci ACTH z hypofýzy. ACTH se tvoří z prekurzoru pro-opiomelanokortinu (POMC), který se štěpí také na melanocyty stimulující hormon (MSH). ACTH sám o sobě má mírnou afinitu k MSH receptorům a vyvolává zvýšenou tvorbu melaninu v kůži (zejména v místech mechanického dráždění, rýhách dlaní a na dásních).",
          "Nesprávně. Vápník s hyperpigmentací nesouvisí.",
          "Nesprávně. U Addisonovy choroby aldosteron naopak chybí."
        ]
      }
    ]
  }
};

// Pomocná funkce pro vygenerování klinicky bohatého textu pro ostatní otázky ze Speciální II (nepoužívá se, pokud jsou všechny definovány)
function getExtendedSpecial2Content(q) {
  return `
    <div class="medical-detail">
      <section>
        <h3>1. Etiologie a patofyziologický úvod</h3>
        <p>Téma <strong>${q.title}</strong> představuje důležitý patofyziologický okruh v rámci <em>${q.organSystem}</em>. Tento stav vzniká působením specifických etiologických vlivů (např. autoimunita, degenerativní změny tkání, metabolické dysbalance), které narušují normální fyziologii a regulaci.</p>
      </section>
      
      <section>
        <h3>2. Patofyziologické mechanismy</h3>
        <p>Během rozvoje tohoto stavu dochází k postupnému zapojení poškození buněčných membrán, receptorových dysfunkcí a narušení nervových či hormonálních zpětných vazeb.</p>
      </section>

      <section>
        <h3>3. Klinické projevy a diagnostika</h3>
        <p>Klinická manifestace zahrnuje specifické příznaky, které zhoršují kvalitu života pacienta. Diagnostické postupy kombinují klinické testy, laboratorní screening a moderní zobrazení (MRI, CT, sonografie).</p>
      </section>
    </div>
  `;
}

// Dynamické sloučení podrobností do globální databáze COMPLETE_QUESTIONS
function mergeSpecial2Details() {
  const completeList = window.COMPLETE_QUESTIONS || [];
  
  completeList.forEach(q => {
    if (q.category === "Speciální II.") {
      const rich = SPECIAL_2_DETAILS[q.id];
      if (rich) {
        if (rich.detailContent) {
          q.detailContent = rich.detailContent;
        } else if (rich.richContent) {
          const etiolHTML = rich.richContent.etiology.map(e => `<li>${e}</li>`).join("");
          const pathoHTML = rich.richContent.pathogenesis.map(p => `<li>${p}</li>`).join("");
          const clinHTML = rich.richContent.clinicalManifestation.map(c => `<li>${c}</li>`).join("");
          const diagHTML = rich.richContent.diagnostics.map(d => `<li>${d}</li>`).join("");
          
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
            </div>
          `;
        }
        q.quiz = rich.quiz;
      } else {
        q.detailContent = getExtendedSpecial2Content(q);
        q.quiz = [
          {
            question: `Který z následujících procesů je typický pro patofyziologii tématu "${q.title}"?`,
            options: [
              `Porucha regulace a homeostázy v systému: ${q.organSystem}`,
              "Okamžité srážení krevní plazmy na gel",
              "Nadprodukce inzulínu s rozvojem těžké hyperglykémie",
              "Úplné vymizení myelinových pochev na všech nervech do 5 sekund"
            ],
            correct: 0,
            explanations: [
              `Správně! Hlavní patofyziologický rys leží v poruše homeostatických funkcí v rámci ${q.organSystem}.`,
              "Nesprávně. Srážení plazmy na gel takto nenastává.",
              "Nesprávně. Nadbytek inzulínu vede k hypoglykémii, nikoli hyperglykémii.",
              "Nesprávně. Demyelinizace je postupný a ložiskový proces."
            ]
          }
        ];
      }
    }
  });
}

// Spustíme sloučení
mergeSpecial2Details();
window.SPECIAL_2_DETAILS = SPECIAL_2_DETAILS;
