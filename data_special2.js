// data_special2.js - Podrobné klinické texty a kvízy pro Speciální II.
const SPECIAL_2_DETAILS = {
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

  // spec-2-2: Urolitiáza,

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

  // spec-2-3: Urgentní stavy z endokrinních příčin,

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

  // spec-2-4: Traumatické poškození mozku,

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

  // spec-2-5: Poruchy vestibuláru a mozečku,

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

  // spec-2-6: Regulace endokrinního systému - negativní zpětná vazba,

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

  // spec-2-7: Preeklampsie, tubuly, autoimunity, OSA,

  "spec-2-7": {
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
  },

  "spec-2-8": {
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
  },

  "spec-2-9": {
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
  },

  "spec-2-10": {
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
  },

"spec-2-11": {
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

  // spec-2-9: Poruchy menstruačního cyklu,

"spec-2-12": {
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

  // spec-2-10: Poruchy kostního metabolismu,

"spec-2-13": {
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

  // spec-2-11: Onemocnění žlučníku a žlučových cest,

"spec-2-14": {
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

  // spec-2-12: Endokrinní ledviny, bazální ganglia, Parkinson, limbický systém, mícha,

  "spec-2-15": {
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
  },

  "spec-2-16": {
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
  },

  "spec-2-17": {
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
  },

"spec-2-18": {
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

  // spec-2-14: Hemoragické cévní mozkové příhody,

"spec-2-19": {
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

  // spec-2-15: Nespecifická zánětlivá onemocnění střev,

"spec-2-20": {
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

  // spec-2-16: Nemoci úst, jícnu, dysfágie, dyspepsie, GERD,

"spec-2-21": {
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

  // spec-2-17: Rhabdomyolýza, krvácení GIT, kóma, locked-in, mozková smrt,

  "spec-2-22": {
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
  },

  "spec-2-23": {
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
  },

  "spec-2-24": {
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
  },

  "spec-2-25": {
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
  },

  "spec-2-26": {
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
  },

  "spec-2-27": {
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
  },

"spec-2-28": {
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

  // spec-2-20: Hypotyreóza a struma,

"spec-2-29": {
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

  // spec-2-21: Hypotalamo-hypofyzární systém & Akutní pankreatitida,

  "spec-2-30": {
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
  },

  "spec-2-31": {
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
  },

"spec-2-32": {
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

  // spec-2-23: Hyperparatyreóza,

"spec-2-33": {
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

  // spec-2-24: Hyperkortizolismus,

"spec-2-34": {
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

  // spec-2-25: Hyperaldosteronismus,

"spec-2-35": {
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

  // spec-2-26: Onemocnění tlustého střeva & Ileus,

"spec-2-36": {
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

  // spec-2-27: Diabetes mellitus (Ponecháno původní detailContent),

  "spec-2-37": {
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
  },

  "spec-2-38": {
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
  },

  "spec-2-39": {
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
  },

  "spec-2-40": {
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
  },

"spec-2-41": {
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

  // spec-2-29: Cévní mozkové příhody & TIA,

"spec-2-42": {
    richContent: {
      definition: "Roztroušená skleróza (RS) je chronické autoimunitní demyelinizační onemocnění centrálního nervového systému (CNS), které vede k postupné neurodegeneraci a neurologickému deficitu.",
      etiology: [
        "Autoimunitní reakce vyvolaná kombinací genetické náchylnosti (HLA-DRB1) a faktorů prostředí.",
        "Environmentální faktory: nedostatek vitamínu D, kouření, geografická šířka (mírné pásmo).",
        "Spouštěcí infekce: virus Epsteina-Barrové (EBV) vykazující molekulární mimikry.",
        "Častější výskyt u žen v mladém věku (20-40 let)."
      ],
      pathogenesis: [
        "Autoreaktivní CD4+ T-lymfocyty (Th1, Th17) překonají hematoencefalickou bariéru do CNS.",
        "Rozpoznají antigeny myelinové pochvy (např. myelinový bazický protein) a vyvolají zánět za účasti B-lymfocytů a makrofágů.",
        "Dochází k **demyelinizaci** (ztrátě myelinové pochvy), což zpomaluje nebo blokuje vedení akčních potenciálů v axonech. Později dochází k ireverzibilnímu poškození samotných axonů a vzniku gliových jizev (skleróza)."
      ],
      clinicalManifestation: [
        "Retrobulbární neuritida (zánět očního nervu): náhlá porucha vizu, bolest při pohybu oka, výpadek zorného pole.",
        "Senzitivní poruchy: parestezie (brnění), hypestezie končetin, Lhermitteův příznak (pocit elektrického proudu v zádech při předklonu hlavy).",
        "Motorické poruchy: spastická paraparéza dolních končetin, mozečková ataxie (poruchy koordinace), intenční třes, únava."
      ],
      diagnostics: [
        "Magnetická rezonance (MRI) mozku a míchy (průkaz demyelinizačních plaků dispergovaných v prostoru a čase).",
        "Vyšetření likvoru: průkaz **oligoklonálních IgG pásů** (izoelektrická fokusace likvoru vykazuje intratékální syntézu protilátek, které v séru chybí).",
        "Evokované potenciály (VEP) – průkaz zpomalení vedení zrakovou dráhou."
      ]
    },
    quiz: [
      {
        question: "Nález kterého parametru v mozkomíšním moku je typickým diagnostickým znakem roztroušené sklerózy?",
        options: [
          "Extrémně nízká bílkovina a vysoký laktát",
          "Přítomnost oligoklonálních pásů IgG (intratékální syntéza imunoglobulinů)",
          "Polymorfonukleární pleocytóza nad 1000/ul",
          "Nález nádorových buněk"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízká bílkovina a vysoký laktát značí bakteriální infekci.",
          "Správně! Oligoklonální pásy IgG v likvoru (které nejsou přítomny v séru) potvrzují, že uvnitř CNS dochází k chronické aktivaci B-lymfocytů a lokální produkci imunoglobulinů namířených proti myelinu.",
          "Nesprávně. Neutrofilní pleocytóza je známkou purulentní meningitidy.",
          "Nesprávně. RS je zánětlivé, nikoliv primárně neoplastické onemocnění."
        ]
      }
    ]
  },

"spec-2-43": {
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

  // spec-2-30: Centrální a periferní paréza,

"spec-2-44": {
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

  // spec-2-31: Autonomní nervový systém,

"spec-2-45": {
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

  // spec-2-32: Artróza,

"spec-2-46": {
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

  // spec-2-33: Akutní jaterní selhání, jaterní encefalopatie, hypoparatyreóza,

  "spec-2-47": {
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
  },

  "spec-2-48": {
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
  },

  "spec-2-49": {
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
  },

  "spec-2-50": {
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
  }
};

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
