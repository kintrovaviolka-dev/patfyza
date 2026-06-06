import re

# We will load data_core.js and match with pdf rows for Speciální II
with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

def get_list(var_name):
    match = re.search(rf"const {var_name} = \[(.*?)\];", core_content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

spec2_js = get_list("RAW_QUESTIONS_SPECIAL_2")

# Let's print out what we have in spec2_js.
# In spec2_js:
# 1: Vředová choroba gastroduodena - etiopatogeneze a komplikace. Gastritidy - etiopatogeneze, projevy, následky (Row 1)
# 2: Urolitiáza - etiopatogeneze, typy kamenů, komplikace, projevy, následky (Row 2)
# 3: Urgentní stavy vzniklé z endokrinních příčin (Row 3)
# 4: Traumatické poškození mozku - etiopatogeneze, projevy, následky. Komoce, kontuze, epidurální a subdurální hematom (Row 4)
# 5: Poruchy vestibulárního systému a mozečku - etiopatogeneze, rozdělení, projevy, následky. Ataxie (Row 5)
# 6: Regulace funkce endokrinního systému - negativní zpětná vazba, příklady etiopatogeneze poruch endokrinního systému (Row 6)
# 7: Combined: Preeklampsie... (Row 7-10)
# 8: Poruchy sluchu a zraku - etiopatogeneze, projevy, následky (Row 11)
# 9: Poruchy menstruačního cyklu - etiopatogeneze. Poruchy hypotalamo-hypofyzárně-ovariální osy (Row 12)
# 10: Poruchy kostního metabolismu - osteoporóza, osteomalacie, rachitida (Row 13)
# 11: Onemocnění žlučníku a žlučových cest-cholecystitida a cholangoitida. Cholecystolitiáza a choledocholitiáza - etiopatogeneze, projevy, následky (Row 14)
# 12: Combined: Poruchy endokrinních funkcí ledvin... (Row 15-17)
# 13: Poruchy kognitivních funkcí - paměť, pozornost, učení, řeč, vnímání, chápání. Demence. Alzheimerova choroba - etiopatogeneze, projevy, následky (Row 18)
# 14: Hemoragické cévní mozkové příhody - etiopatogeneze, projevy, následky (Row 19)
# 15: Nespecifická zánětlivá onemocnění střev-Crohnova choroba, ulcerativní kolitida (Row 20)
# 16: Nemoci dutiny ústní. Poruchy polykání, Poruchy jícnu - etiopatogeneze, projevy, následky. Dyspepsie. Refluxní choroba jícnu (Row 21)
# 17: Combined: Myopatie, rhabdomyolýza... (Row 22-24)
# 18: Combined: Ischemické cévní mozkové příhody... (Row 25-27)
# 19: Chronická pankreatitida a poruchy exokrinní činnosti pankreatu - etiopatogeneze, projevy, následky (Row 28)
# 20: Hypotyreóza - etiopatogeneze, projevy, následky. Struma (Row 29)
# 21: Combined: Hypotalamo-hypofyzární systém... (Row 30-31)
# 22: Hypertyreóza - etiopatogeneze, projevy, následky (Row 32)
# 23: Hyperparatyreóza - etiopatogeneze, projevy, následky (Row 33)
# 24: Hyperkotizolizmus. Cushingova nemoc a syndrom - etiopatogeneze, projevy, následky (Row 34)
# 25: Hyperaldosteronismus - etiopatogeneze, rozdělení, projevy, následky. Connův syndrom (Row 35)
# 26: Onemocnění tlustého střeva divertikulóza, polypóza a karcinom- etiopatogeneze a následky. Ileus - etiopatogeneze, projevy, následky (Row 36)
# 27: Combined: Feochromocytom... (Row 37-40)
# 28: Diabetes mellitus - akutní a chronické komplikace - etiopatogeneze, projevy, následky (Row 41)
# 29: Cévní mozkové příhody - etiopatogeneze, základní rozdělení, projevy, následky. Transitorní ischemická ataka (Row 43)
# 30: Centrální a periferní paréza - etiopatogeneze, projevy, následky (Row 44)
# 31: Autonomní nervový systém - poruchy funkce, efekt na orgánové systémy (Row 45)
# 32: Artróza - etiopatogeneze, projevy, následky (Row 46)
# 33: Combined: Akutní selhání jater... (Row 47-48)
# 34: Combined: Akutní a chronické hepatitidy... (Row 49-50)

# Wait! Look at row 42 in Speciální II!
# In the PDF, what is row 42 in Speciální II?
# Let's check page 4, row 42 in Speciální II:
# Row 42:
# Col 1: Vyšetření fibrinolýzy. (missing in JS)
# Col 2: Ischemie – etiopatogeneze...
# Col 3: Glomerulopatie – etiopatogeneze, projevy, následky.
# Col 4: Demyelinizace – etiopatogeneze, projevy následky. Roztroušená mozkomíšní skleróza.
# Oh! In JS spec2_js, let's see where Demyelinizace is!
# Wait! In data_core.js, is Demyelinizace in RAW_QUESTIONS_SPECIAL_2?
# No! Demyelinizace is listed in RAW_QUESTIONS_SPECIAL_1 as JS 46!
# "Demyelinizace etiopatogeneze, projevy následky. Roztroušená mozkomíšní skleróza"
# Oh! Demyelinizace belongs to Speciální II, but it is in RAW_QUESTIONS_SPECIAL_1 in JS!
# And what about row 42 in Speciální II?
# Let's see: because Demyelinizace was put into Speciální I, it is completely missing from Speciální II in JS!
# That explains why there are only 34 items in spec2_js instead of 35, and why the counts are shifted.
# Let's trace why this happens.
# If we clean it up:
# 1. In Praktická:
#    - Row 42: "Vyšetření fibrinolýzy" (missing from JS, replaced by duplicate "Ischemie...")
#    - We need to replace "Ischemie..." in RAW_QUESTIONS_PRACTICAL with "Vyšetření fibrinolýzy".
# 2. In Speciální I:
#    - Row 6: "Systémová arteriální hypotenze etiopatogeneze a následky" (correct)
#    - Row 7: "Tachyarytmie..." (in JS it's JS 8 because JS 7 is "Regulace funkce endokrinního systému..." which shouldn't be here)
#    - Row 42: "Glomerulopatie..." (correct)
#    - Row 48: "Akutní respirační selhání..." (combined with ARDS in JS, but it is actually a separate question in the PDF row 48!)
#    - So we should split ARDS and Akutní respirační selhání in Speciální I!
#    - Wait! If we remove "Regulace..." from Speciální I (where it shouldn't be), and split ARDS and Akutní respirační selhání, the count of Speciální I will become exactly 50!
#    - Let's check: 51 items - 1 (remove "Regulace...") + 1 (split ARDS & Akutní respirační selhání) = 51 - 1 + 1 = 51? Wait.
#      Let's count:
#      In JS, there are 51 items.
#      If we remove "Regulace..." (1 item), we get 50.
#      If we then split ARDS and Akutní respirační selhání, we get 51.
#      Wait, is there another item that is combined?
#      Let's check:
#      In Speciální I:
#      - Row 17: "Poruchy venózního řečiště. - etiopatogeneze, projevy, následky. Poruchy lymfatického cévního systému - etiopatogeneze, projevy, následky"
#        This combines:
#        - "Poruchy venózního řečiště - etiopatogeneze, projevy, následky." (Row 17)
#        - "Poruchy lymfatického cévního systému - etiopatogeneze, projevy, následky." (Row 17)
#        Wait, both are in Row 17! So they are combined in the PDF row 17 as one cell. So it's correct to keep them as one item.
#      - Row 20: "Poruchy plicní cirkulace etiopatogeneze, následky. Plicní hypertenze - etiopatogeneze, projevy, následky" (Row 19)
#        Wait, in the PDF row 19, the cell is "Poruchy plicní cirkulace – etiopatogeneze, následky. Plicní hypertenze – etiopatogeneze, projevy, následky."
#        So it's correct to keep them as one item.
#      - Row 22: "Pneumothorax - etiopatogeneze, typy projevy, následky. Fluidothorax etiopatogeneze, typy, projevy, následky"
#        In the PDF row 22, the cell is "Pneumothorax – etiopatogeneze, typy projevy, následky. Fluidothorax – etiopatogeneze, typy, projevy, následky."
#        So it's correct to keep them as one item.
#      - Row 32: "Ischemická choroba srdeční - etiopatogeneze, formy, akutní a chronické komplikace, následky. Angina pectoris. Akutní koronární syndrom"
#        In the PDF row 32, this is one cell.
#        So it's correct to keep them as one item.
#      - Row 39: "Hlavní vrozené a získané srdeční vady... Kardiomyopatie..."
#        In the PDF row 39, this is one cell.
#        So it's correct to keep them as one item.
#      - Row 47: "ARDS – etiopatogeneze, klasifikace, projevy, následky." (Row 47)
#      - Row 48: "Akutní respirační selhání – rozdělení, etiopatogeneze, projevy, následky." (Row 48)
#        Wait, in JS, they are combined as:
#        `"ARDS-etiopatogeneze, klasifikace, projevy, následky. Akutní respirační selhání - rozdělení, etiopatogeneze, následky"`
#        If we split them, we get 2 separate questions.
#      - Row 49: "Akutní ischemie myokardu... Akutní infarkt myokardu..."
#        In the PDF row 49, this is one cell.
#        So it's correct to keep them as one item.

# Let's verify the count of Speciální I after splitting ARDS and removing "Regulace...":
# Total in PDF column 3 is 50.
# Currently in JS there are 51.
# Let's list the 50 items we want in Speciální I:
# Row 1: Srdeční zástava...
# Row 2: Anemie...
# Row 3: Základní charakteristika plicních onemocnění...
# Row 4: Portální hypertenze...
# Row 5: Trombocytopenie...
# Row 6: Systémová arteriální hypotenze...
# Row 7: Tachyarytmie...
# Row 8: Pravostranné srdeční selhání...
# Row 9: Srdeční selhání...
# Row 10: Akutní tubulární nekróza...
# Row 11: Srdeční arytmie...
# Row 12: Sekundární hypertenze...
# Row 13: Restrikční plicní nemoci...
# Row 14: Primární (esenciální) hypertenze...
# Row 15: Transfúze krve...
# Row 16: Poruchy ventilačně-perfúzního poměru...
# Row 17: Poruchy venózního řečiště... Poruchy lymfatického cévního systému...
# Row 18: Poruchy plicní difúze... Poruchy alveolo-kapilární membrány. Alveolo-arteriální diference.
# Row 19: Poruchy plicní cirkulace... Plicní hypertenze...
# Row 20: Trombotické mikroangiopatie...
# Row 21: Polycytémie... Hyperviskózní syndrom.
# Row 22: Pneumothorax... Fluidothorax...
# Row 23: Pneumonie...
# Row 24: Plicní edém...
# Row 25: Patofyziologie sleziny...
# Row 26: Obstrukční plicní nemoci...
# Row 27: Obstrukce horních dýchacích cest...
# Row 28: Nefrotický a nefritický syndrom...
# Row 29: Leukopenie...
# Row 30: Levostranné srdeční selhání...
# Row 31: Leukocytóza... Leukemie a lymfomy. Myelopatie...
# Row 32: Ischemická choroba srdeční... Angina pectoris. Akutní koronární syndrom.
# Row 33: Intersticiální plicní nemoci... Cystická fibróza.
# Row 34: Chronické selhání ledvin...
# Row 35: Chronické respirační selhání...
# Row 36: Chronická obstrukční plicní nemoc... a astma bronchiale...
# Row 37: Hypokoagulační stavy...
# Row 38: Hyperkoagulační stavy... Trombofilní stavy.
# Row 39: Hlavní vrozené a získané srdeční vady... Kardiomyopatie...
# Row 40: Hemostáza...
# Row 41: Endokarditidy. Myokarditidy. Perikarditidy... Srdeční tamponáda.
# Row 42: Glomerulopatie...
# Row 43: Bradyarytmie...
# Row 44: Anémie ze zvýšených ztrát a snížené produkce erytrocytů...
# Row 45: Anemie ze zvýšené konsumpce erytrocytů. Hemolýza...
# Row 46: Atelektáza...
# Row 47: ARDS – etiopatogeneze, klasifikace, projevy, následky. (New standalone question in Speciální I!)
# Row 48: Akutní respirační selhání – rozdělení, etiopatogeneze, projevy, následky. (New standalone question in Speciální I!)
# Row 49: Akutní ischemie myokardu... Akutní infarkt myokardu...
# Row 50: Akutní poškození ledvin...
# Total: 50 items!
# So yes, by split ARDS and Akutní respirační selhání into separate items, and removing "Regulace..." from Speciální I, Speciální I becomes exactly 50 items, matching the 50 rows in the PDF!
# This is beautiful!
