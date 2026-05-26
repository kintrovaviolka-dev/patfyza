// data_core.js - Základní databáze a mapování témat pro Patofyziologickou SPA
const RAW_QUESTIONS_SPECIAL_1 = [
  "Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie - etiopatogeneze a následky. Elektromechanická disociace",
  "Anemie - obecná charakteristika, etiopatogeneze, rozdělení, následky. Anemický syndrom",
  "Základní charakteristika plicních onemocnění: obstrukce a restrikce etiopatogeneze",
  "Portální hypertenze - etiopatogeneze, projevy, následky",
  "Trombocytopenie a trombocytopatie - etiopatogeneze, projevy, následky",
  "Systémová arteriální hypotenze etiopatogeneze and následky",
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
  "Bradyarytmie - etiopatogeneze a následky poruch tvorby a vedení vzruchu. Sinoatriální, atrioventrikulární a raménkové blokády",
  "Anémie ze zvýšených ztrát a snížené produkce erytrocytů - etiopatogeneze, následky",
  "Anemie ze zvýšené konsumpce erytrocytů. Hemolýza - etiopatogeneze, následky",
  "Atelektáza. etiopatogeneze, projevy, následky",
  "ARDS - etiopatogeneze, klasifikace, projevy, následky",
  "Akutní respirační selhání - rozdělení, etiopatogeneze, projevy, následky",
  "Akutní ischemie myokardu - etiopatogeneze, následky. Akutní infarkt myokardu - etiopatogeneze, rozdělení, akutní a chronické komplikace",
  "Akutní poškození ledvin - etiopatogeneze, rozdělení podle příčin, projevy, následky"
];

const RAW_QUESTIONS_SPECIAL_2 = [
  "Vředová choroba gastroduodena - etiopatogeneze a komplikace. Gastritidy - etiopatogeneze, projevy, následky",
  "Urolitiáza - etiopatogeneze, typy kamenů, komplikace, projevy, následky",
  "Urgentní stavy vzniklé z endokrinních příčin",
  "Traumatické poškození mozku - etiopatogeneze, projevy, následky. Komoce, kontuze, epidurální a subdurální hematom",
  "Poruchy vestibulárního systému a mozečku - etiopatogeneze, rozdělení, projevy, následky. Ataxie",
  "Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému",
  "Preeklampsie, eklampsie, HELLP syndrom",
  "Poruchy tubulů a sběrných kanálků - etiopatogeneze, projevy, následky. Tubulointersticiální nefritida.",
  "Systémová autoimunitní onemocnění - revmatoidní artritida, systémový lupus erytematodes, sklerodermie, Sjögrenův syndrom, polymyozitida, dermatomyozitida.",
  "Poruchy spánku - etiopatogeneze, obecné dělení, projevy, následky. Obstrukční spánková apnoe.",
  "Poruchy sluchu a zraku - etiopatogeneze, projevy, následky",
  "Poruchy menstruačního cyklu - etiopatogeneze. Poruchy hypotalamo-hypofyzárně-ovariální osy",
  "Poruchy kostního metabolismu - osteoporóza, osteomalacie, rachitida",
  "Onemocnění žlučníku a žlučových cest-cholecystitida a cholangoitida. Cholecystolitiáza a choledocholitiáza - etiopatogeneze, projevy, následky",
  "Poruchy endokrinních funkcí ledvin - etiopatogeneze, projevy, následky.",
  "Poruchy bazálních ganglií - etiopatogeneze, projevy. Parkinsonova nemoc. Poruchy limbického systému a emocí - etiopatogeneze, projevy, následky.",
  "Poranění míchy - etiopatogeneze, projevy, následky. Transverzální míšní léze",
  "Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky",
  "Hemoragické cévní mozkové příhody - etiopatogeneze, projevy, následky",
  "Nespecifická zánětlivá onemocnění střev-Crohnova choroba, ulcerativní kolitida",
  "Nemoci dutiny ústní. Poruchy polykání, Poruchy jícnu - etiopatogeneze, projevy, následky. Dyspepsie. Refluxní choroba jícnu",
  "Myopatie, rhabdomyolýza - etiopatogeneze, projevy, následky.",
  "Krvácení do GIT - formy, příčiny, lokalizace, projevy, následky.",
  "Kóma - etiopatogeneze, projevy a následky. Vegetativní stav, locked-in syndrome. Smrt mozku - definice, etiopatogeneze a projevy.",
  "Ischemické cévní mozkové příhody - etiopatogeneze, projevy, následky.",
  "Intrakraniální hypertenze - etiopatogeneze, Poruchy autoregulace průtoku krve mozkem.",
  "Chronické selhání jater - jaterní steatóza a cirhóza. Hepatorenální syndrom - etiopatogeneze.",
  "Chronická pankreatitida a poruchy exokrinní činnosti pankreatu - etiopatogeneze, projevy, následky",
  "Hypotyreóza - etiopatogeneze, projevy, následky. Struma",
  "Hypotalamo-hypofyzární systém - úroveň hypotalamu, adenohypofýzy, a neurohypofýzy - etiopatogeneze, projevy, následky",
  "Akutní pankreatitida - etiopatogeneze, projevy, následky.",
  "Hypertyreóza - etiopatogeneze, projevy, následky",
  "Hyperparatyreóza - etiopatogeneze, projevy, následky",
  "Hyperkotizolizmus. Cushingova nemoc a syndrom - etiopatogeneze, projevy, následky",
  "Hyperaldosteronismus - etiopatogeneze, rozdělení, projevy, následky. Connův syndrom",
  "Onemocnění tlustého střeva divertikulóza, polypóza a karcinom- etiopatogeneze a následky. Ileus - etiopatogeneze, projevy, následky",
  "Feochromocytom, mnohočetné endokrinní neoplazie - etiopatogeneze, projevy, následky. Zollinger Ellisonův syndrom. Gastroenteropankreatický hormonální systém.",
  "Epilepsie - etiopatogeneze, klasifikace, projevy, následky.",
  "Edém mozku - etiopatogeneze, projevy, následky. Cytotoxický edém a vazogenní edém, intersticiální edém.",
  "Diabetes mellitus - základní rozdělení, etiopatogeneze, projevy, následky.",
  "Diabetes mellitus - akutní a chronické komplikace - etiopatogeneze, projevy, následky",
  "Demyelinizace - etiopatogeneze, projevy, následky. Roztroušená mozkomíšní skleróza.",
  "Cévní mozkové příhody - etiopatogeneze, základní rozdělení, projevy, následky. Transitorní ischemická ataka",
  "Centrální a periferní paréza - etiopatogeneze, projevy, následky",
  "Autonomní nervový systém - poruchy funkce, efekt na orgánové systémy",
  "Artróza - etiopatogeneze, projevy, následky",
  "Akutní selhání jater - etiopatogeneze, projevy, následky. Jaterní encefalopatie.",
  "Hypoparathyreóza - etiopatogeneze, projevy, následky.",
  "Akutní a chronické hepatitidy - etiopatogeneze, rozdělení, projevy, následky.",
  "Adenokortikální insuficience - Addisonova choroba. Adrenální (addisonská) krize - etiopatogeneze, projevy, následky."
];

const RAW_QUESTIONS_PRACTICAL = [
  "Vyšetření červené krevní řady",
  "Vyšetření mozkomíšního moku",
  "Vyšetření tekutin ze třetího prostoru (fluidothorax, fluidoperikard, ascites)",
  "Vyšetření krevního tlaku - sekundární hypertenze",
  "Laboratorní markery zánětu",
  "Vyšetření poruch plazmatické koagulace",
  "Vyšetření acidobazické rovnováhy. Laktát",
  "EKG - posouzení srdeční osy a intervalů, hypertrofie srdečních oddílů",
  "Vyšetření výměny krevních plynů a plicní difuzní kapacity",
  "Pulzní oxymetrie",
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
  "Vyšetření fibrinolýzy",
  "Vyšetření parametrů plicní restrikce",
  "Gastroskopie",
  "Základní vyšetření reprodukčního systému",
  "Laboratorní markery hemolýzy",
  "Vyšetření bílé krevní řady",
  "Vyšetření funkce štítné žlázy a příštítných tělísek",
  "Laboratorní markery rhabdomyolýzy",
  "Srdeční katetrizace, vyšetření krevního tlaku v jednotlivých srdečních oddílech"
];

const RAW_QUESTIONS_GENERAL = [
  "Definice nemoci a zdraví - pojmy: etiologie, patogeneze, etiopatogeneze, symptom, syndrom. Průběh a zakončení nemocí. Iatrogenita. Psychosomatika.",
  "Ateroskleróza. Poruchy metabolismu lipidů - etiopatogeneze, akutní a chronické komplikace, následky.",
  "Poruchy bilance kalia (K+) - etiopatogeneze, následky.",
  "Trombóza - rozdělení a příklady, projevy, následky.",
  "Hypovolemický šok. Hemoragický šok-etiopatogeneze a následky.",
  "Stres a všeobecný adaptační syndrom - charakteristika, fáze, etiopatogeneze.",
  "Vliv celkové a částečné imobilizace.",
  "Systémová zánětlivá odpověď- etiopatogeneze, následky.",
  "Nespecifický a specifický imunitní systém - poruchy funkce, principy.",
  "Imunopatologické reakce - rozdělení, etiopatogeneze. Principy autoimunitních reakcí - mechanizmy. Atopie. Imunotolerance.",
  "Poškození vlivem fyzikálních vlivů - chlad, teplo, el. proudu, elektromagnetické a ionizující záření.",
  "Embolie - rozdělení. Plicní embolie - etiopatogeneze, projevy, následky. Periferní a paradoxní embolie.",
  "Poruchy acidobazické rovnováhy - klasifikace poruch, kompenzace a korekce, příčiny a následky. Příčiny smrti při poruchách acidobazické rovnováhy.",
  "Diseminovaná intravaskulární koagulace (DIC) - etiopatogeneze, projevy, následky.",
  "Kardiogenní a obstrukční šok - etiopatogeneze a následky.",
  "Dehydratace - etiopatogeneze, následky.",
  "Reaktivní kyslíkové a dusíkové sloučeniny - role za fyziologického stavu a v patogenezi nemocí. Ischemicko-reperfúzní syndrom - etiopatogeneze, příklady.",
  "Hyperhydratace - etiopatogeneze, následky.",
  "Obezita - etiopatogeneze, následky, role v patogenezi nemocí.",
  "Šok-definice, etiopatogeneze, rozdělení.",
  "Poškození a smrt buňky - reversibilní a ireversibilní, nekróza, apoptóza, autofagie.",
  "Horečka - etiopatogenze, průběh (fáze) horečky, pozitivní a negativní vliv horečky na organismus.",
  "Nadjádorové bujení - teorie vzniku nádorů, růst nádoru, tvorba metastáz, příčiny smrti u nádorových onemocnění, nádorové markery, paraneoplastický syndrom.",
  "Malnutrice - etiopatogeneze, následky, role v patogenezi nemocí.",
  "Hypoxie a hyperoxie buňky - příčiny, adaptace, následky.",
  "Edém - rozdělení, etiopatogeneze, klinická manifestace, následky.",
  "Poruchy růstu. Poruchy puberty. Stárnutí a smrt organismu.",
  "Respirační acidóza a alkalóza - etiopatogeneze, následky.",
  "Metabolická acidóza a alkalóza - etiopatogeneze, následky.",
  "Bolest - etiopatogeneze, klasifikace, poruchy vnímání bolesti, principy farmakologického ovlivnění.",
  "Dušnost - rozdělení, etiopatogeneze, následky.",
  "Septický a anafylaktický šok - etiopatogeneze a následky.",
  "Obstipace a průjem - etiopatogeneze a následky. Syndrom dráždivého tračníku, pseudomembranózní kolitida.",
  "Poruchy metabolismu železa (Fe2+/Fe3+) - etiopatogeneze a následky.",
  "Ikterus- etiopatogeneze.",
  "Poruchy bilance kalcia (Ca2+) a fosfátů - etiopatogeneze, projevy, následky.",
  "Sepse, syndrom multiorgánové dysfunkce (MODS) - etiopatogeneze, projevy a následky.",
  "Krvácení - etiopatogeneze, rozdělení, následky.",
  "Poruchy bilance natria (Na+) a chloridů (Cl-) - etiopatogeneze, následky, regulace. Osmotický a onkotický tlak.",
  "Lokální zánětová odpověď - princip a význam, složky zánětové odpovědi.",
  "Poruchy vědomí - etiopatogeneze, základní rozdělení podle kvantity a kvality. Synkopa.",
  "Ischemie - etiopatogeneze ischemie, změny na orgánové úrovni: myokard, centrální nervový systém, ledviny, GIT, končetiny.",
  "Nauzea, zvracení - etiopatogeneze, následky.",
  "Poškození vlivem chemických vlivů - intoxikace (paracetamol, metanol, oxid uhelnatý), alkohol, kouření.",
  "Hyperglykemie - etiopatogeneze, akutní a chronické komplikace, následky.",
  "Geneticky podmíněné nemoci - rozdělení, příklady. Monofaktoriální a multifaktoriální dědičnost.",
  "Časový faktor v patogenezi nemocí, pojmy kompenzace a dekompenzace, strukturální a funkční orgánová/tkáňová dysfunkce.",
  "Metabolický syndrom X - etiopatogeneze, projevy, následky.",
  "Hypoglykemie - etiopatogeneze, komplikace, následky.",
  "Poškození vlivem fyzikálních vlivů tlaku, crush syndrom (rhabdomyolýza), zvuk."
];

// Repair "Nadjádorové bujení" typo from raw copy if present
RAW_QUESTIONS_GENERAL[22] = "Nádorové bujení - teorie vzniku nádorů, růst nádoru, tvorba metastáz, příčiny smrti u nádorových onemocnění, nádorové markery, paraneoplastický syndrom.";

function getOrganSystem(title) {
  const lower = title.toLowerCase();
  
  if (lower.includes("srdce") || lower.includes("srdeč") || lower.includes("infarkt") || lower.includes("arytm") || lower.includes("chlop") || lower.includes("kardio") || lower.includes("hypertenze") || lower.includes("hypotenze") || lower.includes("oběh") || lower.includes("cévní") || lower.includes("venóz") || lower.includes("tromb") || lower.includes("koronár") || lower.includes("ekg") || lower.includes("katetrizac")) {
    if (lower.includes("cévní mozkov") || lower.includes("mozková příhod")) return "Nervový systém a smysly";
    if (lower.includes("portální hypertenze")) return "Gastroenterologie a hepatologie";
    return "Kardiovaskulární systém";
  }
  if (lower.includes("plic") || lower.includes("dýchac") || lower.includes("ventil") || lower.includes("perfúz") || lower.includes("difúz") || lower.includes("astma") || lower.includes("bronch") || lower.includes("pneumon") || lower.includes("pneumotor") || lower.includes("fluidotor") || lower.includes("atelekt") || lower.includes("ards") || lower.includes("respirač") || lower.includes("oxymetrie") || lower.includes("krevních plynů") || lower.includes("bronchosk") || lower.includes("fibrinolýz")) {
    return "Respirační systém";
  }
  if (lower.includes("ledvin") || lower.includes("nefr") || lower.includes("tubul") || lower.includes("moč") || lower.includes("glomerul") || lower.includes("urolit") || lower.includes("akutní renální") || lower.includes("akutního renálního") || lower.includes("hepatorenální")) {
    return "Nefrologie a urologie";
  }
  if (lower.includes("jater") || lower.includes("hepat") || lower.includes("žalud") || lower.includes("gastrit") || lower.includes("vřed") || lower.includes("pankreat") || lower.includes("střev") || lower.includes("git") || lower.includes("ikter") || lower.includes("cholest") || lower.includes("polyk") || lower.includes("jícen") || lower.includes("jícnu") || lower.includes("kolonosk") || lower.includes("gastrosk") || lower.includes("cholecyst") || lower.includes("žluč") || lower.includes("dyspepsie") || lower.includes("krvácení do git")) {
    return "Gastroenterologie a hepatologie";
  }
  if (lower.includes("anem") || lower.includes("aném") || lower.includes("krevní řad") || lower.includes("erytro") || lower.includes("leuko") || lower.includes("trombocyt") || lower.includes("hemostá") || lower.includes("koagul") || lower.includes("slez") || lower.includes("splen") || lower.includes("transfú") || lower.includes("dřen") || lower.includes("hemolýz") || lower.includes("polycyt") || lower.includes("gvh") || lower.includes("hvg")) {
    return "Hematologie";
  }
  if (lower.includes("endokrin") || lower.includes("hormon") || lower.includes("zpětná vazba") || lower.includes("diabetes") || lower.includes("inzul") || lower.includes("glyk") || lower.includes("štít") || lower.includes("thyreo") || lower.includes("parathyreo") || lower.includes("cushing") || lower.includes("conn") || lower.includes("addison") || lower.includes("adrenál") || lower.includes("nadledvin") || lower.includes("hypofýz") || lower.includes("feochromocytom")) {
    return "Endokrinní systém";
  }
  if (lower.includes("mozku") || lower.includes("cns") || lower.includes("nerv") || lower.includes("mozečk") || lower.includes("vestibul") || lower.includes("ataxie") || lower.includes("spán") || lower.includes("kognit") || lower.includes("demenc") || lower.includes("alzheimer") || lower.includes("mích") || lower.includes("paréz") || lower.includes("epilep") || lower.includes("vědomí") || lower.includes("glasgow") || eegMatch(lower) || lower.includes("demyel") || lower.includes("roztroušená") || lower.includes("zrak") || lower.includes("sluch") || lower.includes("intrakraniál") || lower.includes("komoce") || lower.includes("kontuze") || lower.includes("hematom") || lower.includes("kóma") || lower.includes("vegetativní") || lower.includes("locked-in") || lower.includes("smrt mozku")) {
    return "Nervový systém a smysly";
  }
  if (lower.includes("kost") || lower.includes("osteopor") || lower.includes("osteomal") || lower.includes("rachit") || lower.includes("artróz") || lower.includes("artrit") || lower.includes("revmat") || lower.includes("lupus") || lower.includes("skleroder") || lower.includes("sjögren") || lower.includes("myopatie") || lower.includes("rhabdomyol")) {
    return "Lokomotorický a autoimunitní systém";
  }
  return "Ostatní / Systémové procesy";
}

function eegMatch(s) {
  return s.includes("eeg") || s.includes("aktivita neuronů") || s.includes("aktivity neuronů");
}

function estimateKeywords(cleanedTitle) {
  const system = getOrganSystem(cleanedTitle);
  const keywords = [system];
  const parts = cleanedTitle.split(/[-.,;:]/);
  if (parts[0] && parts[0].length < 35) keywords.push(parts[0].trim());
  if (parts[1] && parts[1].length < 35) keywords.push(parts[1].trim());
  keywords.push("Etiopatogeneze", "Diagnostika");
  return [...new Set(keywords)].slice(0, 6);
}

function buildCoreDatabase() {
  const list = [];
  
  // Obecná
  RAW_QUESTIONS_GENERAL.forEach((q, idx) => {
    list.push({
      id: `gen-${idx + 1}`,
      category: "Obecná",
      title: q.trim(),
      organSystem: getOrganSystem(q),
      keyTerms: estimateKeywords(q)
    });
  });

  // Speciální I.
  RAW_QUESTIONS_SPECIAL_1.forEach((q, idx) => {
    list.push({
      id: `spec-1-${idx + 1}`,
      category: "Speciální I.",
      title: q.trim(),
      organSystem: getOrganSystem(q),
      keyTerms: estimateKeywords(q)
    });
  });

  // Speciální II.
  RAW_QUESTIONS_SPECIAL_2.forEach((q, idx) => {
    list.push({
      id: `spec-2-${idx + 1}`,
      category: "Speciální II.",
      title: q.trim(),
      organSystem: getOrganSystem(q),
      keyTerms: estimateKeywords(q)
    });
  });

  // Praktická
  RAW_QUESTIONS_PRACTICAL.forEach((q, idx) => {
    list.push({
      id: `pract-${idx + 1}`,
      category: "Praktická",
      title: q.trim(),
      organSystem: getOrganSystem(q),
      keyTerms: estimateKeywords(q)
    });
  });

  return list;
}

window.COMPLETE_QUESTIONS = buildCoreDatabase();

// Pomocná funkce pro zalamování textu na specifikovaný počet znaků
function wrapText(text, maxLength) {
  const cleanText = text.replace(/\*\*/g, '').replace(/\*/g, '');
  const words = cleanText.split(' ');
  const lines = [];
  let currentLine = '';
  
  words.forEach(word => {
    if (word.length > maxLength) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = '';
      }
      let tempWord = word;
      while (tempWord.length > maxLength) {
        lines.push(tempWord.substring(0, maxLength));
        tempWord = tempWord.substring(maxLength);
      }
      currentLine = tempWord;
    } else if ((currentLine + (currentLine ? ' ' : '') + word).length <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);
  return lines;
}

// Globální funkce pro dynamické generování ASCII diagramu patogeneze
window.generatePathogenesisDiagram = function(pathogenesis) {
  if (!pathogenesis || !pathogenesis.length) return '';
  
  const boxWidth = 54; // Celková šířka boxu
  const contentWidth = boxWidth - 6; // Šířka textu uvnitř (s odsazením 2 znaky z každé strany)
  const diagramParts = [];
  
  pathogenesis.forEach(step => {
    const wrappedLines = wrapText(step, contentWidth);
    
    // Horní okraj
    let boxStr = '┌' + '─'.repeat(boxWidth - 2) + '┐\n';
    
    // Obsahové řádky
    wrappedLines.forEach(line => {
      const paddedLine = line.padEnd(contentWidth, ' ');
      boxStr += '│  ' + paddedLine + '  │\n';
    });
    
    // Dolní okraj
    boxStr += '└' + '─'.repeat(boxWidth - 2) + '┘';
    
    diagramParts.push(boxStr);
  });
  
  // Vykreslení propojovacích šipek
  const arrowPadding = ' '.repeat(Math.floor(boxWidth / 2) - 1);
  const arrowStr = `\n${arrowPadding}│\n${arrowPadding}▼\n`;
  
  return diagramParts.join(arrowStr);
};
