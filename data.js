// Kompletní databáze otázek pro Patofyziologii (3. ročník všeobecného lékařství)
// Speciální I. (51 otázek) a Speciální II. (31 otázek)

const RAW_QUESTIONS_SPECIAL_1 = [
  "Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie - etiopatogeneze a následky. Elektromechanická disociace",
  "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom",
  "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze",
  "Portální hypertenze - etiopatogeneze, projevy, následky",
  "Trombocytopenie a trombocytopatie - etiopatogeneze, projevy, následky",
  "Systémová arteriální hypotenze etiopatogeneze and následky",
  "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
  "Tachyarytmie: supraventrikulární a ventrikulární - etiopatogeneze, rozdělení, následky. Fibrilace a flutter síní. Extrasytoly. Reentry. Preexcitační syndromy",
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

const RAW_QUESTIONS_SPECIAL_2 = [
  "Vředová choroba gastroduodena - etiopatogeneze a komplikace. Gastritidy - etiopatogeneze, projevy, následky. Urolitiáza etiopatogeneze, typy kamenů, komplikace, projevy, následky. Urgentní stavy vzniklé z endokrinních příčin. Traumatické poškození mozku etiopatogeneze, projevy, následky. Komoce, kontuze, epidurální a subdurální hematom",
  "Poruchy vestibulárního systému a mozečku - etiopatogeneze, rozdělení, projevy, následky. Ataxie",
  "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
  "Preeklampsie, eklampsie, HELLP syndrom. Poruchy tubulů a sběrných kanálků - etiopatogeneze, projevy, následky. Tubulointersticiální nefritida. Systémová autoimunitní onemocnění - revmatoidní artritida, systémový lupus erytematodes, sklerodermie, Sjögrenův syndrom, polymyozitida, dermatomyozitida. Poruchy spánku - etiopatogeneze, obecné dělení, projevy, následky. Obstrukční spánková apnoe",
  "Poruchy sluchu a zraku - etiopatogeneze, projevy, následky",
  "Poruchy menstruačního cyklu - etiopatogeneze. Poruchy hypotalamo-hypofyzárně-ovariální osy",
  "Poruchy kostního metabolismu - osteoporóza, osteomalacie, rachitida",
  "Onemocnění žlučníku a žlučových cest-cholecystitida a cholangoitida. Cholecystolitiáza a choledocholitiáza - etiopatogeneze, projevy, následky",
  "Poruchy endokrinních funkcí ledvin - etiopatogeneze, projevy, následky. Poruchy bazálních ganglií - etiopatogeneze, projevy. Parkinsonova nemoc. Poruchy limbického systému a emocí - etiopatogeneze, projevy, následky. Poranění míchy - etiopatogeneze, projevy, následky. Transverzální míšní léze",
  "Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky",
  "Hemoragické cévní mozkové příhody - etiopatogeneze, projevy, následky",
  "Nespecifická zánětlivá onemocnění střev-Crohnova choroba, ulcerativní kolitida",
  "Nemoci dutiny ústní. Poruchy polykání, Poruchy jícnu - etiopatogeneze, projevy, následky. Dyspepsie. Refluxní choroba jícnu",
  "Myopatie, rhabdomyolýza - etiopatogeneze, projevy následky. Krvácení do GIT-formy, příčiny, lokalizace, projevy, následky. Kóma etiopatogeneze, projevy a následky. Vegetativní stav, locked-in syndrome. Smrt mozku definice, etiopatogeneze a projevy",
  "Ischemické cévní mozkové příhody - etiopatogeneze, projevy, následky. Intrakraniální hypertenze - etiopatogeneze, Poruchy autoregulace průtoku krve mozkem. Chronické selhání jater - jaterní steatóza a cirhóza. Hepatorenální syndrom - etiopatogeneze",
  "Chronická pankreatitida a poruchy exokrinní činnosti pankreatu - etiopatogeneze, projevy, následky",
  "Hypotyreóza - etiopatogeneze, projevy, následky. Struma",
  "Hypotalamo-hypofyzární systém - úroveň hypotalamu, adenohypofýzy, a neurohypofýzy - etiopatogeneze, projevy, následky. Akutní pankreatitida - etiopatogeneze, projevy, následky",
  "Hypertyreóza - etiopatogeneze, projevy, následky",
  "Hyperparatyreóza - etiopatogeneze, projevy, následky",
  "Hyperkotizolizmus. Cushingova nemoc a syndrom - etiopatogeneze, projevy, následky",
  "Hyperaldosteronismus - etiopatogeneze, rozdělení, projevy, následky. Connův syndrom",
  "Onemocnění tlustého střeva divertikulóza, polypóza a karcinom- etiopatogeneze a následky. Ileus - etiopatogeneze, projevy, následky",
  "Feochromocytom, mnohočetné endokrinní neoplazie - etiopatogeneze, projevy, následky. Zollinger Ellisonův syndrom. Gastroenteropankreatický hormonální systém. Epilepsie etiopatogeneze, klasifikace, projevy, následky. Edém mozku - etiopatogeneze, projevy, následky. Cytotoxický edém a vazogenní edém, intersticiální edém. Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky",
  "Diabetes mellitus - akutní a chronické komplikace - etiopatogeneze, projevy, následky",
  "Cévní mozkové příhody - etiopatogeneze, základní rozdělení, projevy, následky. Transitorní ischemická ataka",
  "Centrální a periferní paréza - etiopatogeneze, projevy, následky",
  "Autonomní nervový systém - poruchy funkce, efekt na orgánové systémy",
  "Artróza - etiopatogeneze, projevy, následky",
  "Akutní selhání jater - etiopatogeneze, projevy, následky. Jaterní encefalopatie. Hypoparathyreóza - etiopatogeneze, projevy, následky",
  "Akutní a chronické hepatitidy - etiopatogeneze, rozdělení, projevy, následky. Adenokortikální insuficience Addisonova choroba. Adrenální (addisonská) krize - etiopatogeneze, projevy, následky"
];

// Odborné podklady a kvízy pro 7 vybraných (klíčových) otázek
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
            <li><strong>Fibrilace komor (VF):</strong> Chaotická, nekoordinovaná elektrická aktivita komor s frekvencí nad 300/min. Komory se pouze mechanicky "chvějí", minutový objem klesá na nulu. Hlavním mechanismem je vznik mnohočetných mikroskopických <em>reentry</em> okruhů (tzv. rotorů) v ischemickém či jinak alterovaném myokardu.</li>
            <li><strong>Setrvalá komorová tachykardie (pVT):</strong> Rychlá (nad 100/min), organizovaná arytmie vycházející z komor, trvající déle než 30 sekund (nebo vedoucí ke kolapsu). Může přejít do fibrilace komor. Mechanismus je obvykle makro-reentry (např. kolem jizvy po infarktu myokardu) nebo zvýšená spouštěná aktivita.</li>
            <li><strong>Asystolie:</strong> Kompletní elektrická a mechanická nečinnost komor (izoelektrická linie na EKG). Bývá důsledkem vyčerpání energetických rezerv myokardu při hypoxii či acidóze, nebo masivní stimulace nervus vagus.</li>
            <li><strong>Elektromechanická disociace (PEA - Pulseless Electrical Activity):</strong> Stav, kdy je na EKG přítomna elektrická aktivita (např. sinusový rytmus, bradykardie), ale srdce nevykazuje žádnou mechanickou aktivitu a není hmatný puls. Příčinou je těžká porucha spřažení excitace a kontrakce (např. při masivní plicní embolii, tenzním pneumotoraxu, srdeční tamponádě či těžké hypovolémii).</li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologické schéma zástavy oběhu</h3>
          <pre class="ascii-diagram">
[Maligní Arytmie / PEA]
         │
         ▼
[Zástava perfuze (MAP = 0 mmHg)]
         │
         ▼
[Těžká tkáňová hypoxie & anoxie]
 ├─► Mozek: Ztráta vědomí do 10-15s, ireverzibilní poškození buněk za 4-5 min.
 ├─► Myokard: Anaerobní glykolýza ──► Acidóza ──► Deplece ATP ──► Rigor mortis myokardu.
 └─► Systém: Anaerobní metabolismus ──► Těžká laktátová acidóza.
          </pre>
        </section>

        <section>
          <h3>3. Následky a klinické projevy</h3>
          <p>Klinicky dochází k okamžité ztrátě vědomí (do 10–15 sekund od zástavy průtoku mozkem), vymizení pulsu na velkých tepnách, apnoi nebo lapavému dýchání (gasping) a rozvoji mydriázy. Na buněčné úrovni dochází k selhání Na+/K+-ATPázy, masivnímu vtoku vápníku do buněk (excitotoxicita), aktivaci proteáz a destrukci buněčných struktur.</p>
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
      },
      {
        question: "Který z následujících stavů je typickou příčinou elektromechanické disociace (PEA) na podkladě mechanické obstrukce oběhu?",
        options: [
          "Hypokalémie",
          "Akutní přední infarkt myokardu",
          "Tenzní pneumotorax",
          "Předávkování beta-blokátory"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Hypokalémie způsobuje arytmie, ale ne přímou mechanickou obstrukci.",
          "Nesprávně. Infarkt myokardu vede k kardiogennímu šoku či arytmii, nikoliv však k primární mechanické obstrukci plnění srdce.",
          "Správně! Tenzní pneumotorax stlačuje mediastinum, utlačuje duté žíly, dramaticky snižuje žilní návrat a plnění srdce, což vede k PEA.",
          "Nesprávně. Beta-blokátory tlumí srdeční frekvenci a stažlivost, ale nezpůsobují mechanickou obstrukci plnění."
        ]
      },
      {
        question: "Za jak dlouho dochází k ireverzibilnímu poškození neuronů kůry mozku při kompletní srdeční zástavě bez resuscitace?",
        options: [
          "Už po 30 sekundách",
          "Za 4-5 minut",
          "Za 15-20 minut",
          "Za 1 hodinu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Po 30 sekundách dochází k bezvědomí, ale poškození ještě není ireverzibilní.",
          "Správně! Mozková kůra je extrémně citlivá na nedostatek kyslíku a glukózy. Po 4–5 minutách bez oběhu dochází k nevratnému odumírání neuronů.",
          "Nesprávně. 15-20 minut je příliš dlouho; v té době je již kůra mozku zcela zničena.",
          "Nesprávně. Po hodině bez oběhu dochází k celkovému odumření organismu."
        ]
      }
    ]
  },

  // 2. Anemie (Hematologie)
  "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom": {
    keyTerms: ["Erytropoéza", "Hemoglobin", "Anemický syndrom", "Tkáňová hypoxie", "Mikrocytární vs. Makrocytární", "Erytropoetin"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Úvod a definice</h3>
          <p><strong>Anémie (chudokrevnost)</strong> je definována jako snížení koncentrace hemoglobinu (Hb), hematokritu (Ht) a/nebo počtu erytrocytů v jednotce objemu krve pod fyziologickou mez (u mužů < 135 g/l, u netěhotných žen < 120 g/l). Hlavním patofyziologickým důsledkem je pokles kyslíkové kapacity krve a následná tkáňová hypoxie.</p>
        </section>
        
        <section>
          <h3>2. Etiopatologické rozdělení anémií</h3>
          <p>Anémie lze klasifikovat podle etiopatogeneze do tří hlavních skupin:</p>
          <ol>
            <li><strong>Z poruchy tvorby erytrocytů:</strong>
              <ul>
                <li>Nedostatek stavebních látek (sideropenická - nedostatek železa, megaloblastová - nedostatek vit. B12 či kyseliny listové).</li>
                <li>Poruchy kmenové buňky (aplastická anémie).</li>
                <li>Snížená stimulace erytropoetinem (anémie při chronickém selhání ledvin).</li>
              </ul>
            </li>
            <li><strong>Ze zvýšených ztrát (hemolytické anémie):</strong>
              <ul>
                <li>Intrakorpuskulární (např. srpkovitá anémie, sférocytóza, deficit G6PD).</li>
                <li>Extrakorpuskulární (autoimunitní hemolýza, mikroangiopatická hemolýza - TTP/HUS, toxiny).</li>
              </ul>
            </li>
            <li><strong>Ztrátové (posthemoragické):</strong> Akutní nebo chronické krvácení.</li>
          </ol>
          <p>Podle morfologie (MCV - střední objem erytrocytu) dělíme anémie na <strong>mikrocytární</strong> (MCV < 80 fl, typicky sideropenická), <strong>normocytární</strong> (MCV 80–100 fl, např. akutní posthemoragická, anémie chronických chorob) a <strong>makrocytární</strong> (MCV > 100 fl, typicky megaloblastová).</p>
        </section>

        <section>
          <h3>3. Anemický syndrom a kompenzační mechanismy</h3>
          <p>Jedná se o soubor příznaků plynoucích z tkáňové hypoxie a kompenzačních reakcí:</p>
          <ul>
            <li><strong>Subjektivní příznaky:</strong> Únava, slabost, dušnost při námaze, bolesti hlavy, závratě, tinitus.</li>
            <li><strong>Objektivní příznaky:</strong> Bledost kůže a sliznic (způsobená poklesem hemoglobinu a vazokonstrikcí v kůži), tachykardie, hyperkinetická cirkulace (systolický šelest nad hrotem).</li>
          </ul>
          <p><strong>Kompenzační reakce:</strong></p>
          <ol>
            <li>Zvýšení srdečního výdeje (aktivace sympatiku, tachykardie, zvýšení tepového objemu).</li>
            <li>Posun disociační křivky hemoglobinu doprava (zvýšení syntézy 2,3-BPG v erytrocytech, což usnadňuje uvolňování kyslíku do tkání).</li>
            <li>Prerozdělení (centralizace) oběhu (vazokonstrikce v kůži a ledvinách ve prospěch mozku a myokardu).</li>
            <li>Zvýšená stimulace erytropoézy zvýšenou sekrecí erytropoetinu v ledvinách.</li>
          </ol>
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
      },
      {
        question: "Jak reaguje disociační křivka hemoglobinu pro kyslík v tkáních jako kompenzační mechanismus u anémie?",
        options: [
          "Posouvá se doleva, což zvyšuje afinitu hemoglobinu ke kyslíku.",
          "Posouvá se doprava vlivem zvýšeného 2,3-BPG, což usnadňuje uvolňování kyslíku tkáním.",
          "Nemění se, hemoglobin ztrácí schopnost vázat kyslík úplně.",
          "Křivka se stává lineární kvůli poškození erytrocytů."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Posun doleva by znamenal pevnější vazbu kyslíku, což by tkáním uškodilo.",
          "Správně! Posun křivky doprava (způsobený např. vzestupem 2,3-BPG a mírnou acidózou) snižuje afinitu hemoglobinu ke kyslíku a usnadňuje jeho uvolnění do hypoxických tkání.",
          "Nesprávně. Křivka se adaptuje.",
          "Nesprávně. Křivka si zachovává svůj typický sigmoidální tvar."
        ]
      },
      {
        question: "Proč dochází u anémie při chronickém selhání ledvin k rozvoji chudokrevnosti?",
        options: [
          "Kvůli zvýšeným ztrátám železa močí.",
          "Kvůli destrukci erytrocytů močovinou v ledvinách.",
          "Kvůli snížené produkci erytropoetinu v peritubulárních buňkách ledvin.",
          "Kvůli chybě v syntéze globinových řetězců."
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Ztráty železa močí nejsou primární příčinou.",
          "Nesprávně. Močovina může zkracovat životnost erytrocytů, ale hlavní mechanismus je jiný.",
          "Správně! Ledviny produkují erytropoetin (EPO). Při jejich chronickém selhávání klesá počet funkčních buněk produkujících EPO, což vede k normocytární anémii z nedostatku stimulace kostní dřeně.",
          "Nesprávně. Porucha syntézy globinových řetězců charakterizuje talasémie."
        ]
      }
    ]
  },

  // 3. Obstrukce a restrikce (Resp)
  "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze": {
    keyTerms: ["Obstrukce", "Restrikce", "FVC (úsilná vitální kapacita)", "FEV1", "Tiffeneauův index", "Plicní poddajnost (compliance)"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Základní rozdělení ventilačních poruch</h3>
          <p>Ventilační poruchy plic dělíme podle funkčního vyšetření (spirometrie) na dvě základní kategorie: <strong>obstrukční</strong> a <strong>restrikční</strong>. Obě vedou ke zhoršení ventilace, ale jejich patofyziologický základ se zásadně liší.</p>
        </section>

        <section>
          <h3>2. Obstrukční ventilační porucha</h3>
          <ul>
            <li><strong>Definice:</strong> Zvýšený odpor dýchacích cest vůči proudícímu vzduchu (bronchiální obstrukce), což zpomaluje výdech (exspirium).</li>
            <li><strong>Etiopatogeneze:</strong> Zúžení lumen bronchů způsobené:
              <ul>
                <li>Spasmem hladké svaloviny (např. u astma bronchiale).</li>
                <li>Edémem sliznice a zánětem.</li>
                <li>Hypersekrecí vazkého hlenu.</li>
                <li>Ztrátou radiální trakce alveolů (kolaps malých dýchacích cest při výdechu u emfyzému plic).</li>
              </ul>
            </li>
            <li><strong>Spirometrické parametry:</strong> Pokles <strong>FEV1</strong> (objem úsilného výdechu za 1 sekundu) a pokles poměru <strong>FEV1/FVC</strong> (tzv. Tiffeneauův index < 70 %).</li>
          </ul>
        </section>

        <section>
          <h3>3. Restrikční ventilační porucha</h3>
          <ul>
            <li><strong>Definice:</strong> Snížení funkčního plicního parenchymu nebo omezení exkurzí hrudníku, což vede k poklesu celkového plicního objemu.</li>
            <li><strong>Etiopatogeneze:</strong>
              <ul>
                <li><strong>Plicní (intrathorakální) příčiny:</strong> Plicní fibróza, sarkoidóza, resekce plic, plicní edém, atelektáza.</li>
                <li><strong>Mimoplicní (extrathorakální) příčiny:</strong> Deformity páteře a hrudníku (kyfoskolióza), obezita, nervosvalová onemocnění (myasthenia gravis, ALS, obrna bránice).</li>
              </ul>
            </li>
            <li><strong>Spirometrické parametry:</strong> Pokles celkové vitální kapacity plic (<strong>FVC</strong>) pod 80 % náležitých hodnot. Tiffeneauův index (FEV1/FVC) zůstává normální nebo je dokonce zvýšený.</li>
          </ul>
        </section>

        <section>
          <h3>Srovnávací tabulka</h3>
          <table>
            <thead>
              <tr>
                <th>Parametr</th>
                <th>Obstrukce (např. CHOPN, astma)</th>
                <th>Restrikce (např. fibróza, kyfoskolióza)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>FVC (Vitální kapacita)</strong></td>
                <td>Normální nebo mírně snížená</td>
                <td>Výrazně snížená (&lt; 80 %)</td>
              </tr>
              <tr>
                <td><strong>FEV1</strong></td>
                <td>Snížená</td>
                <td>Snížená úměrně k poklesu FVC</td>
              </tr>
              <tr>
                <td><strong>FEV1/FVC index</strong></td>
                <td>Snížený (&lt; 70 %)</td>
                <td>Normální nebo zvýšený (&gt; 70-80 %)</td>
              </tr>
              <tr>
                <td><strong>Poddajnost (Compliance)</strong></td>
                <td>Zvýšená (u emfyzému)</td>
                <td>Výrazně snížená (tuhé plíce)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který z následujících nálezů je typický pro čistou restrikční ventilační poruchu?",
        options: [
          "FEV1/FVC pod 50 %",
          "FVC pod 80 % a FEV1/FVC v normě (nebo zvýšený)",
          "Zvýšený reziduální objem (RV) a celková plicní kapacita (TLC)",
          "Výrazný bronchodilatační test po podání beta-mimetik"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Nízký index FEV1/FVC je typický pro obstrukci.",
          "Správně! Restrikce se vyznačuje poklesem vitální kapacity plic (FVC) pod 80 %, přičemž poměr FEV1/FVC zůstává normální, protože výdechový odpor není zvýšen.",
          "Nesprávně. Zvýšený reziduální objem a hyperinflace jsou známky hyperinflace u obstrukčních nemocí (emfyzém).",
          "Nesprávně. Reaktivita na bronchodilatancia je typická pro reverzibilní obstrukci (astma)."
        ]
      },
      {
        question: "Co způsobuje zúžení dýchacích cest u plicního emfyzému?",
        options: [
          "Spasmus hladkých svalů průdušnice",
          "Kolaps dýchacích cest během výdechu v důsledku ztráty elastické tkáně plic",
          "Fibrotizace stěny průdušinek",
          "Cizí těleso v hlavním bronchu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. U emfyzému nedochází k primárnímu spasmu průdušnice.",
          "Správně! Elastická vlákna drží bronchioly otevřené (tzv. radiální trakce). Při emfyzému destrukce interalveolárních sept vede ze ztrát elasticity, a bronchioly se při exspiriu předčasně uzavírají.",
          "Nesprávně. Fibrotizace plic je proces typický pro restrikční onemocnění.",
          "Nesprávně. Cizí těleso je akutní lokalizovaná obstrukce, nikoli podstata emfyzému."
        ]
      }
    ]
  },

  // 4. Portální hypertenze (GIT/Hepatologie)
  "Portální hypertenze - etiopatogeneze, projevy, následky": {
    keyTerms: ["Vena portae", "Jaterní cirhóza", "Portosystémové spojky", "Ascites", "Ezofageální varixy", "Splenomegalie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice a normální poměry</h3>
          <p><strong>Portální hypertenze</strong> je syndrom charakterizovaný trvalým vzestupem tlaku v řečišti vrátnicové žíly (vena portae) nad fyziologickou hodnotu (normálně 5–10 mmHg). Klinicky významná je při tlaku nad 12 mmHg, kdy dochází k tvorbě komplikací.</p>
        </section>

        <section>
          <h3>2. Etiopatogeneze</h3>
          <p>Podle místa překážky toku krve dělíme portální hypertenzi na:</p>
          <ul>
            <li><strong>Prehepatální (presinusoidální):</strong> Překážka před játry, nejčastěji trombóza vena portae nebo splenické žíly, či komprese nádorem. Jaterní parenchym je nepoškozen.</li>
            <li><strong>Intrahepatální:</strong> Překážka v játrech. Tvoří 90 % případů:
              <ul>
                <li><em>Presinusoidální:</em> např. schistosomóza.</li>
                <li><em>Sinusoidální:</em> <strong>jaterní cirhóza</strong> (hlavní příčina). Dochází k destrukci jaterní architektury, fibrotizaci, tvorbě regeneračních uzlů a útlaku sinusoid.</li>
                <li><em>Postsinusoidální:</em> venookluzivní choroba.</li>
              </ul>
            </li>
            <li><strong>Posthepatální:</strong> Překážka za játry, např. <em>Budd-Chiariho syndrom</em> (trombóza jaterních žil), pravostranné srdeční selhání nebo konstriktivní perikarditida.</li>
          </ul>
        </section>

        <section class="diagram-section">
          <h3>Patofyziologické schéma následků portální hypertenze</h3>
          <pre class="ascii-diagram">
           [Zvýšený odpor v portálním řečišti]
                           │
        ┌──────────────────┴──────────────────┐
        ▼                                     ▼
[Portosystémové spojky]               [Splenomegalie]
 ├─► Jícnové varixy (krvácení!)        └─► Hypersplenismus
 ├─► Caput medusae                         (anémie, leukopenie,
 ├─► Hemoroidy                                trombocytopenie)
 └─► Jaterní encefalopatie
     (bypass jater hepatotoxiny)
                           │
                           ▼
          [Tvorba Ascitu (tekutina v břiše)]
           (Hypoalbuminémie + Retence Na+ a vody)
          </pre>
        </section>

        <section>
          <h3>3. Hlavní klinické projevy a následky</h3>
          <ol>
            <li><strong>Portosystémové spojky (kolaterály):</strong> Krev obchází játra do systémového oběhu přes anastamózy. Nebezpečné jsou <strong>jícnové varixy</strong> (ezofageální kolaterály), které mohou prasknout a způsobit masivní, život ohrožující krvácení do trávicího traktu.</li>
            <li><strong>Ascites:</strong> Hromadění volné tekutiny v břišní dutině. Vzniká kombinací portální hypertenze (zvýšený hydrostatický tlak), jaterního selhání (snížený onkotický tlak kvůli hypoalbuminémii) a aktivace RAAS (retence sodíku a vody ledvinami).</li>
            <li><strong>Splenomegalie a hypersplenismus:</strong> Městnání krve ve slezině vede k jejímu zvětšení a zvýšené destrukci krevních buněk (sekvestrace erytrocytů, leukocytů a trombocytů).</li>
            <li><strong>Jaterní encefalopatie:</strong> Toxické látky z trávicího traktu (zejména amoniak), které normálně játra detoxikují, jdou kolaterálami přímo do mozku, kde poškozují astrocytární funkce.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Která je nejčastější intrahepatální příčina portální hypertenze v západních zemích?",
        options: [
          "Schistosomóza",
          "Trombóza vena portae",
          "Jaterní cirhóza (způsobená alkoholem či NASH/hepatitidami)",
          "Budd-Chiariho syndrom"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Schistosomóza je častá celosvětově v rozvojových oblastech, ale ne v západních zemích.",
          "Nesprávně. Trombóza vena portae je prehepatální příčinou.",
          "Správně! Jaterní cirhóza je v západních zemích suverénně nejčastější příčinou portální hypertenze.",
          "Nesprávně. Budd-Chiariho syndrom je vzácné posthepatální onemocnění."
        ]
      },
      {
        question: "Proč vzniká jaterní encefalopatie u pacientů s portální hypertenzí?",
        options: [
          "Ledviny přestávají vylučovat močovinu, která se hromadí v mozku",
          "Toxiny amoniaku obcházejí játra portosystémovými spojkami přímo do systémového oběhu a mozku",
          "Nedostatkem glukózy, kterou játra nedokážou uvolňovat ze zásob",
          "Přímou virovou infekcí mozku viry hepatitidy"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Močovina sama o sobě není hlavním viníkem encefalopatie u jaterního selhání.",
          "Správně! Amoniak a další dusíkaté látky produkované střevní mikroflórou nejsou kvůli portosystémovým kolaterálám odfiltrovány játry a pronikají hematoencefalickou bariérou, kde narušují metabolismus neurotransmiterů.",
          "Nesprávně. Hypoglykémie může nastat při selhání jater, ale není hlavní příčinou encefalopatie.",
          "Nesprávně. Viry hepatitidy A-E nejsou neurotropní."
        ]
      }
    ]
  },

  // 29. Nefrotický a nefritický sy (Nefro)
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
            <li><strong>Patofyziologie:</strong> Ztráta elektrického náboje nebo strukturální poškození filtrační bariéry (zejména štěrbinové membrány podocytů). To vede k extrémní propustnosti pro proteiny.</li>
            <li><strong>Diagnostická kritéria:</strong>
              <ul>
                <li><strong>Masivní proteinurie:</strong> > 3.5 g proteinu / 24 hod / 1.73 m².</li>
                <li><strong>Hypoalbuminémie:</strong> pokles albuminu v séru pod 30 g/l.</li>
                <li><strong>Edémy:</strong> Typicky generalizované, periorbitální, prosáknutí podkoží, ascites a pleurální výpotek (způsobené poklesem onkotického tlaku krve a retencí sodíku).</li>
                <li><strong>Hyperlipidémie a lipidurie:</strong> Játra kompenzačně zvyšují syntézu lipoproteinů (včetně LDL a VLDL).</li>
              </ul>
            </li>
            <li><strong>Komplikace:</strong> Zvýšené riziko infekcí (ztráta imunoglobulinů močí) a hyperkoagulační stav (ztráta antitrombinu III).</li>
          </ul>
        </section>

        <section>
          <h3>3. Nefritický syndrom</h3>
          <ul>
            <li><strong>Patofyziologie:</strong> Zánětlivý proces v glomerulech (často imunokomplexový), který vede k infiltraci zánětlivými buňkami, rupturám glomerulárních kapilár a reaktivní proliferaci mezangia. Filtrační plocha se snižuje.</li>
            <li><strong>Hlavní projevy:</strong>
              <ul>
                <li><strong>Hematurie:</strong> Přítomnost krve v moči (často makroskopická, moč má barvu 'Coca-Coly'). V močovém sedimentu nacházíme dysmorfní erytrocyty a erytrocytární válce.</li>
                <li><strong>Arteriální hypertenze:</strong> Způsobená retencí sodíku a vody při snížené glomerulární filtraci (GFR) a aktivací RAAS.</li>
                <li><strong>Oligurie až anurie:</strong> Snížení tvorby moči pod 500 ml/den.</li>
                <li><strong>Mírná proteinurie:</strong> Obvykle < 3 g/den.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3>Srovnání klíčových rozdílů</h3>
          <table>
            <thead>
              <tr>
                <th>Příznak</th>
                <th>Nefrotický syndrom</th>
                <th>Nefritický syndrom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Patologie</strong></td>
                <td>Nezánětlivé poškození podocytů</td>
                <td>Imunitně podmíněný zánět glomerulů</td>
              </tr>
              <tr>
                <td><strong>Proteinurie</strong></td>
                <td>Masivní (&gt; 3.5 g/24h)</td>
                <td>Mírná až střední (&lt; 3 g/24h)</td>
              </tr>
              <tr>
                <td><strong>Hematurie</strong></td>
                <td>Chybí nebo je mikroskopická</td>
                <td>Výrazná (makroskopická, dysmorfní ery)</td>
              </tr>
              <tr>
                <td><strong>Edémy</strong></td>
                <td>Těžké, generalizované (anasarka)</td>
                <td>Mírné (kolem očí, na bércích)</td>
              </tr>
              <tr>
                <td><strong>Krevní tlak</strong></td>
                <td>Normální (nebo mírně snížený)</td>
                <td>Zvýšený (hypertenze)</td>
              </tr>
              <tr>
                <td><strong>Komplikace</strong></td>
                <td>Infekce, trombózy (ztráta proteinů)</td>
                <td>Uremie, hypertenzní krize, akutní selhání ledvin</td>
              </tr>
            </tbody>
          </table>
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
          "Správně! Masivní ztráta albuminu močí vede k poklesu jeho hladiny v krvi. Tím klesá koloidně-osmotický (onkotický) tlak, který drží vodu v cévním řečišti. Voda uniká do intersticia a vznikají edémy.",
          "Nesprávně. Vazodilatace sama o sobě nezpůsobí generalizované edémy u nefrotického syndromu.",
          "Nesprávně. Aldosteron naopak přispívá k retenci sodíku a vody, což edémy dále zhoršuje."
        ]
      },
      {
        question: "Dysmorfní erytrocyty a erytrocytární válce v močovém sedimentu svědčí pro:",
        options: [
          "Krvácení z dolních močových cest (např. cystitida)",
          "Nefrolitiázu (ledvinové kameny)",
          "Glomerulární původ hematurie (nefritický syndrom)",
          "Nádor močového měchýře"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Při krvácení z dolních cest jsou erytrocyty izomorfní (normální tvar).",
          "Nesprávně. Nefrolitiáza způsobuje mechanické poškození sliznice močových cest, erytrocyty nejsou deformovány průchodem přes glomerulus.",
          "Správně! Dysmorfní erytrocyty (akantocyty) jsou deformovány průchodem skrz poškozenou glomerulární membránu. Přítomnost erytrocytárních válců dokládá, že krev pochází přímo z ledvinných tubulů.",
          "Nesprávně. Noptiky a nádor měchýře vyvolávají neglomerulární hematurii."
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
          <p><strong>Demence</strong> je syndrom charakterizovaný progresivním úbytkem kognitivních funkcí (paměť, intelekt, orientace, řeč, exekutivní funkce) oproti předchozí úrovni, který je natolik závažný, že narušuje běžné denní aktivity pacienta.</p>
        </section>

        <section>
          <h3>2. Alzheimerova choroba (AD) - Etiopatogeneze</h3>
          <p>AD je nejčastější příčinou demence (tvoří 60–80 % případů). Jedná se o primární neurodegenerativní onemocnění s následujícími patologickými znaky:</p>
          <ul>
            <li><strong>Akumulace Beta-amyloidu (extracelulárně):</strong> Abnormální štěpení amyloidového prekurzorového proteinu (APP) enzymy beta- a gama-sekretázou vede ke vzniku nerozpustných peptidů $A\\beta_{42}$. Ty agregují do **senilních (amyloidových) plaků**, které mají neurotoxický účinek.</li>
            <li><strong>Hyperfosforylace Tau-proteinu (intracelulárně):</strong> Tau protein za fyziologických okolností stabilizuje mikrotubuly (součást cytoskeletu). Při AD dochází k jeho hyperfosforylaci, rozpadu mikrotubulů a tvorbě **neurofibrilárních klubek (tangles)**, což vede k selhání axonálního transportu a smrti neuronu.</li>
            <li><strong>Cholinergní deficit:</strong> Výrazná ztráta neuronů v jádrech předního mozku (zejména *nucleus basalis Meynerti*), které produkují **acetylcholin** (klíčový neurotransmiter pro paměť a učení).</li>
            <li><strong>Neurozánět:</strong> Chronická aktivace mikroglií a astrocytů amyloidovými plaky přispívá k dalšímu poškození synapsí.</li>
          </ul>
        </section>

        <section>
          <h3>3. Klinické projevy a následky</h3>
          <ul>
            <li><strong>Časné stadium:</strong> Poruchy krátkodobé paměti (neschopnost zapamatovat si nové informace), dezorientace v čase a prostoru, potíže s hledáním slov.</li>
            <li><strong>Střední stadium:</strong> Ztráta soběstačnosti, poruchy chování (apatie, deprese, nebo naopak agresivita, bludy, halucinace), afázie (porucha řeči), apraxie (neschopnost vykonávat naučené pohyby).</li>
            <li><strong>Pozdní stadium:</strong> Těžká demence, upoutání na lůžko, ztráta kontroly sfinkterů, neschopnost komunikace. Nejčastější příčinou smrti bývají infekční komplikace (aspirační bronchopneumonie, dekubity).</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Který neurotransmiter je nejvíce deficitní u pacientů s Alzheimerovou chorobou?",
        options: [
          "Dopamin",
          "GABA",
          "Acetylcholin",
          "Serotonin"
        ],
        correct: 2,
        explanations: [
          "Nesprávně. Dopamin je deficitní u Parkinsonovy choroby.",
          "Nesprávně. GABA je inhibiční neurotransmiter, jeho deficit necharakterizuje AD.",
          "Správně! Deficit acetylcholina v synapsích vzniká degenerací cholinergních drah v nucleus basalis Meynerti.",
          "Nesprávně. Serotonin se podílí na náladě, AD se jím primárně nevysvětluje."
        ]
      },
      {
        question: "Co tvoří neurofibrilární klubka (neurofibrillary tangles) uvnitř neuronů u Alzheimerovy choroby?",
        options: [
          "Agregáty beta-amyloidu",
          "Hyperfosforylovaný tau protein",
          "Ukládání vápníku",
          "Alfa-synuklein"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Beta-amyloid tvoří senilní plaky v extracelulárním prostoru.",
          "Správně! Hyperfosforylovaný tau protein tvoří nerozpustné agregáty ve formě klubek, které ničí cytoskelet neuronů.",
          "Nesprávně. Vápník se hromadí, ale netvoří klubka.",
          "Nesprávně. Alfa-synuklein tvoří Lewyho tělíska."
        ]
      }
    ]
  },

  // 24. Diabetes mellitus (Endo)
  "Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky": {
    keyTerms: ["Inzulínová rezistence", "Absolutní nedostatek inzulínu", "Beta-buňky pankreatu", "Autoimunitní destrukce", "Hyperglykémie", "Polyurie a polydipsie"],
    detailContent: `
      <div class="medical-detail">
        <section>
          <h3>1. Definice</h3>
          <p><strong>Diabetes mellitus (DM)</strong> je skupina metabolických onemocnění charakterizovaných chronickou hyperglykémií, která vzniká v důsledku poruchy sekrece inzulínu, účinku inzulínu (inzulínové rezistence) nebo obojího.</p>
        </section>

        <section>
          <h3>2. Etiopatologická klasifikace</h3>
          <ol>
            <li><strong>Diabetes mellitus 1. typu (DM1):</strong>
              <ul>
                <li><strong>Patogeneze:</strong> Selektivní autoimunitní destrukce $\\beta$-buněk Langerhansových ostrůvků T-lymfocyty. Vede k **absolutnímu nedostatku inzulínu**.</li>
                <li>Často přítomny autoprotilátky (anti-GAD, ICA, anti-IA2). Typicky začíná v dětství nebo mládí.</li>
              </ul>
            </li>
            <li><strong>Diabetes mellitus 2. typu (DM2):</strong>
              <ul>
                <li><strong>Patogeneze:</strong> Kombinace **inzulínové rezistence** a **relativního nedostatku inzulínu**.</li>
                <li>Těsná vazba na obezitu, genetickou predispozici a nedostatek pohybu.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h3>3. Hlavní akutní projevy a jejich patofyziologie</h3>
          <ul>
            <li><strong>Polyurie:</strong> Hyperglykémie přesahuje ledvinný práh pro glukózu (cca 10 mmol/l). Glukóza uniká do moči, působí jako **osmotické diuretikum** a strhává s sebou vodu.</li>
            <li><strong>Polydipsie:</strong> Extrémní žízeň vyvolaná dehydratací a zvýšenou osmolaritou plazmy, což stimuluje centrum žízně v hypothalamu.</li>
            <li><strong>Hubnutí při zvýšené chuti k jídlu (polyfágii):</strong> Chybějící inzulínový signál znemožňuje buňkám využít glukózu. Tělo hladoví a začíná odbourávat tuky (lipolýza) a proteiny (proteolýza).</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      {
        question: "Co je bezprostřední patofyziologickou příčinou polyurie u neléčeného diabetu?",
        options: [
          "Snížená sekrece antidiuretického hormonu (ADH)",
          "Osmotická diuréza způsobená přítomností glukózy v močových tubulech, která překročila ledvinný práh",
          "Přímé toxické poškození glomerulární filtrace",
          "Zvýšený příjem tekutin (polydipsie), který nutí pacienta častěji močit"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Sekrece ADH je stimulována dehydratací.",
          "Správně! Když glykémie překročí ledvinný práh (10 mmol/l), glukóza se přestane plně reabsorbovat. Glukóza v tubulární tekutině zvyšuje její osmolaritu a omezuje zpětné vstřebávání vody.",
          "Nesprávně. Není způsobena poškozením glomerulů.",
          "Nesprávně. Polydipsie je následkem ztráty vody, nikoli příčinou polyurie."
        ]
      },
      {
        question: "Které tvrzení nejlépe vystihuje patofyziologický rozdíl mezi DM 1. typu a DM 2. typu?",
        options: [
          "U DM1 je zachována sekrece inzulínu, ale buňky na něj nereagují; u DM2 inzulín chybí úplně.",
          "U DM1 dochází k absolutnímu deficitu inzulínu v důsledku autoimunitního zánětu beta-buněk; u DM2 dominuje inzulínová rezistence a relativní deficit.",
          "DM1 postihuje výhradně starší obézní jedince, zatímco DM2 vzniká u dětí.",
          "U DM1 je zvýšená citlivost na inzulín, u DM2 je inzulín rozkládán protilátkami."
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Popisuje typy přesně obráceně.",
          "Správně! DM1 je autoimunitní choroba vedoucí k destrukci beta-buněk a nulové produkci inzulínu. U DM2 buňky inzulín produkují, ale tkáně jsou k němu rezistentní.",
          "Nesprávně. DM1 postihuje spíše mladší jedince, DM2 souvisí s obezitou.",
          "Nesprávně. Protilátky proti inzulínu nejsou hlavním mechanismem DM2."
        ]
      }
    ]
  }
};

// Funkce, která sestaví finální databázi všech 82 otázek se sequential ID a čistými názvy
function generateFinalDatabase() {
  const finalQuestions = [];

  // Očištění názvu od formátovacích tagů [span_X]
  function cleanTitleText(title) {
    return title.replace(/\[span_\d+\]\((?:start|end)_span\)/g, "")
                .replace(/\s+/g, " ")
                .trim();
  }

  // Odhadování klíčových slov na základě názvu
  function estimateKeywords(cleanedTitle) {
    const keywords = [];
    const lower = cleanedTitle.toLowerCase();
    
    if (lower.includes("anemie") || lower.includes("anémie")) keywords.push("Hemoglobin", "Erytrocyt", "Hypoxie", "Železo");
    else if (lower.includes("arytmie") || lower.includes("blokád") || lower.includes("komor")) keywords.push("EKG", "Reentry", "Převodní systém", "Myokard");
    else if (lower.includes("selhání jater") || lower.includes("hepatit")) keywords.push("Hepatocyty", "Amoniak", "Cirhóza", "Jaterní encefalopatie");
    else if (lower.includes("ledvin") || lower.includes("nefr") || lower.includes("tubul")) keywords.push("Glomerulus", "GFR", "Uremie", "Retence Na+");
    else if (lower.includes("selhání srdeč") || lower.includes("srdeční selh")) keywords.push("Tachykardie", "Srdeční výdej", "Městnání", "Dyspnoe");
    else if (lower.includes("hypertenz")) keywords.push("Arteriální tlak", "Cévní rezistence", "Vazokonstrikce", "RAAS");
    else if (lower.includes("plic") || lower.includes("respirač") || lower.includes("bronch") || lower.includes("edém plic")) keywords.push("Ventilace", "Perfúze", "Alveoly", "Hypoxémie");
    else if (lower.includes("slez") || lower.includes("splen")) keywords.push("Splenomegalie", "Hypersplenismus", "Trombocytopenie", "Lymfatický systém");
    else if (lower.includes("koagulač") || lower.includes("hemostá") || lower.includes("trombo")) keywords.push("Trombocyty", "Koagulační kaskáda", "Fibrin", "Trombofilie");
    else if (lower.includes("endokrin") || lower.includes("thyreo") || lower.includes("hormon") || lower.includes("cushing") || lower.includes("struma")) keywords.push("Zpětná vazba", "Receptory", "Žláza", "Hormony");
    else if (lower.includes("mozkov") || lower.includes("míš") || lower.includes("epilep") || lower.includes("cévní mozkov")) keywords.push("Neuron", "Ischémie mozku", "Edém mozku", "Neurologický deficit");
    else if (lower.includes("žalud") || lower.includes("pankreat") || lower.includes("GIT") || lower.includes("střev")) keywords.push("Slizniční bariéra", "Trávicí enzymy", "Zánět", "Motilita");
    
    // Výchozí doplnění, pokud je pole malé
    if (keywords.length === 0) {
      const parts = cleanedTitle.split(/[-.,;:]/);
      if (parts[0] && parts[0].length < 35) keywords.push(parts[0].trim());
      if (parts[1] && parts[1].length < 35) keywords.push(parts[1].trim());
      keywords.push("Etiopatogeneze", "Patofyziologie");
    }
    
    return [...new Set(keywords)].slice(0, 6);
  }

  // 1. Speciální I. (51 otázek)
  RAW_QUESTIONS_SPECIAL_1.forEach((rawTitle, index) => {
    const cleaned = cleanTitleText(rawTitle);
    const id = `spec-1-${index + 1}`;
    
    // Zkontrolujeme, zda máme bohatá data pro tuto otázku
    const richData = SPECIFIC_RICH_DATA[cleaned];
    
    finalQuestions.push({
      id: id,
      category: "Speciální I.",
      title: cleaned,
      keyTerms: richData ? richData.keyTerms : estimateKeywords(cleaned),
      detailContent: richData ? richData.detailContent : null,
      quiz: richData ? richData.quiz : null
    });
  });

  // 2. Speciální II. (31 otázek)
  RAW_QUESTIONS_SPECIAL_2.forEach((rawTitle, index) => {
    const cleaned = cleanTitleText(rawTitle);
    const id = `spec-2-${index + 1}`;
    
    // Zkontrolujeme, zda máme bohatá data pro tuto otázku
    const richData = SPECIFIC_RICH_DATA[cleaned];
    
    finalQuestions.push({
      id: id,
      category: "Speciální II.",
      title: cleaned,
      keyTerms: richData ? richData.keyTerms : estimateKeywords(cleaned),
      detailContent: richData ? richData.detailContent : null,
      quiz: richData ? richData.quiz : null
    });
  });

  return finalQuestions;
}

// Přiřazení do globálního prostoru pro app.js
window.COMPLETE_QUESTIONS = generateFinalDatabase();
