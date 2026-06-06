import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    content = f.read()

# Parse blocks
keys = re.findall(r'"(spec-1-\d+)":\s*\{', content)
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

# We want to save Demyelinizace (block 44) to a file for Speciální II
demyel_content = blocks[44]
# We want to replace its key inside the text: "spec-1-44" -> "spec-2-42"
demyel_content_replaced = demyel_content.replace('"spec-1-44"', '"spec-2-42"')
with open("scratch/demyel_detail.txt", "w", encoding="utf-8") as f:
    f.write(demyel_content_replaced)

print("Saved Demyelinizace details to scratch/demyel_detail.txt")

# Let's rebuild SPECIAL_1_DETAILS
new_blocks = []

# Blocks 1 to 6
for num in range(1, 7):
    # keep as is, just format
    new_blocks.append(blocks[num])

# Block 7 (Regulace...) is deleted

# Blocks 8 to 43 shift to 7 to 42
for num in range(8, 44):
    orig_entry = blocks[num]
    # replace key inside the text
    new_key = f'"spec-1-{num - 1}":'
    old_key = f'"spec-1-{num}":'
    new_entry = orig_entry.replace(old_key, new_key, 1)
    new_blocks.append(new_entry)

# Block 44 (Demyelinizace) is deleted/moved

# Blocks 45 to 48 shift to 43 to 46
for num in range(45, 49):
    orig_entry = blocks[num]
    # shift key by -2
    new_key = f'"spec-1-{num - 2}":'
    old_key = f'"spec-1-{num}":'
    new_entry = orig_entry.replace(old_key, new_key, 1)
    new_blocks.append(new_entry)

# Block 49 is split into spec-1-47 (ARDS) and spec-1-48 (Akutní respirační selhání)
ards_entry = """  "spec-1-47": {
    richContent: {
      definition: "ARDS (Syndrom akutní respirační tísně) je závažná forma nekardiogenního plicního edému charakterizovaná difúzním alveolárním poškozením (DAD) a těžkou hypoxémií refrakterní k oxygenoterapii.",
      etiology: [
        "Přímé poškození plic: aspirace žaludečního obsahu, těžká pneumonie, tonutí, inhalace toxických plynů, plicní kontuze.",
        "Nepřímé poškození plic (systémové): sepse (nejčastější), těžké mimoplicní trauma s šokem, akutní pankreatitida, syndrom masivní transfúze."
      ],
      pathogenesis: [
        "Exsudativní fáze: aktivace a migrace neutrofilů do alveolů, uvolnění cytokinů a proteáz poškozuje alveolo-kapilární membránu.",
        "Únik tekutiny bohaté na bílkoviny do alveolů s polymerací fibrinu a tvorbou hyalinních blan bránících difúzi plynů.",
        "Inaktivace a deficit surfaktantu poškozením pneumocytů II. typu vede k plošnému kolapsu alveolů (atelektázám) a poklesu poddajnosti plic.",
        "Vznik pravolevého zkratu (krev protéká nevětranými atelektatickými oblastmi), což způsobuje těžkou refrakterní hypoxémii."
      ],
      clinicalManifestation: [
        "Rychle progredující dušnost (tachypnoe, zapojování pomocných svalů) rozvíjející se do 72 hodin od vyvolávajícího inzultu.",
        "Těžká hypoxémie (poměr PaO2/FiO2 <= 300 mmHg / 40 kPa) refrakterní na podávání kyslíku.",
        "Difúzní oboustranné infiltráty na RTG/CT hrudníku (vzhled 'mléčného skla') bez známek levostranného srdečního selhání."
      ],
      diagnostics: [
        "Kritéria ARDS (Berlínská definice): časový faktor, vyloučení kardiální příčiny edému, oboustranné infiltráty, stupeň hypoxémie podle PaO2/FiO2.",
        "Vyšetření krevních plynů k průkazu hypoxémie a laktátu k průkazu tkáňové ischémie.",
        "Echokardiografie k vyloučení městnání z levého srdce (normální EF a chlopně)."
      ]
    },
    quiz: [
      {
        question: "Co je hlavním patofyziologickým důsledkem poškození pneumocytů II. typu u syndromu ARDS?",
        options: [
          "Nadprodukce hlenu a obstrukce bronchů",
          "Deficit a inaktivace surfaktantu vedoucí k alveolárnímu kolapsu (atelektázám) a prudkému poklesu poddajnosti plic",
          "Zvýšení tlaku v levé síni nad 25 mmHg",
          "Ucpání plicních kapilár tromby ze žilního oběhu"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Hlen tvoří pohárkové buňky a bronchiální žlázky, ne pneumocyty II. typu.",
          "Správně! Pneumocyty II. typu secernují surfaktant. Jejich poškození a inaktivace surfaktantu plazmatickými bílkovinami v alveolech zvýší povrchové napětí, což vede k mikroatelektázám, kolapsu plíce a snížení její poddajnosti (compliance).",
          "Nesprávně. ARDS je nekardiogenní edém, tlak v levé síni (PCWP) je normální (do 18 mmHg).",
          "Nesprávně. Ucpání plicních kapilár tromby popisuje plicní embolii."
        ]
      }
    ]
  }"""

arf_entry = """  "spec-1-48": {
    richContent: {
      definition: "Akutní respirační selhání je stav, kdy plíce náhle nedokážou zajistit adekvátní výměnu plynů, což vede k hypoxémii (typ I) a/nebo hyperkapnii (typ II).",
      etiology: [
        "Typ I (hypoxemické): poruchy ventilačně-perfúzního poměru (např. CHOPN, astma, plicní edém), plicní zkraty (ARDS, atelektázy), difuzní bariéra.",
        "Typ II (hyperkapnické/ventilační): deprese dechového centra (předávkování opioidů), nervosvalové poruchy (myasthenia gravis, Guillain-Barré), únava dýchacích svalů, obstrukce dýchacích cest."
      ],
      pathogenesis: [
        "Typ I (oxygenační selhání): dochází k neschopnosti okysličit krev protékající plícemi, přičemž eliminace CO2 může být kompenzačně zvýšena hyperventilací.",
        "Typ II (ventilační selhání / hypoventilace): dochází k selhání respirační pumpy k odvětrání alveolů. Oxid uhličitý se hromadí v těle (hyperkapnie), což vede k respirační acidóze."
      ],
      clinicalManifestation: [
        "Dušnost, tachypnoe, zapojení pomocného svalstva, neklid, úzkost, zmatenost až poruchy vědomí (somnolence, koma u hyperkapnie).",
        "Cyanóza (modravé zbarvení kůže a sliznic při vzestupu redukovaného hemoglobinu nad 50 g/l).",
        "Respirační acidóza (pokles pH, vzestup paCO2) doprovázená hypoxémií (pokles paO2)."
      ],
      diagnostics: [
        "Vyšetření krevních plynů (Astrup) – klíčový diagnostický test stanovující paO2, paCO2 a pH.",
        "Typ I: paO2 < 8.0 kPa (60 mmHg) při normálním nebo nízkém paCO2.",
        "Typ II: paCO2 > 6.7 kPa (50 mmHg) a pH < 7.35."
      ]
    },
    quiz: [
      {
        question: "Která z následujících definic a kritérií charakterizuje ventilaci u II. typu (hyperkapnického) akutního respiračního selhání?",
        options: [
          "Selhání oxygenace s paO2 < 8 kPa při nízkém nebo normálním paCO2",
          "Alveolární hypoventilace a selhání respirační pumpy projevující se hromaděním CO2 s paCO2 > 6.7 kPa and acidózou",
          "Zvýšená plicní poddajnost bez ovlivnění plynů",
          "Pravolevý srdeční zkrat s normálním paCO2"
        ],
        correct: 1,
        explanations: [
          "Nesprávně. Toto popisuje typ I (hypoxemické) respirační selhání.",
          "Správně! Typ II (globální respirační selhání) je způsobeno neschopností odvětrat plíce (hypoventilace). To vede k retenci CO2 v krvi (hyperkapnii) a rozvoji respirační acidózy.",
          "Nesprávně. Poddajnost bývá často naopak snížena a plyny jsou zásadně změněny.",
          "Nesprávně. Pravolevý zkrat je typickou příčinou hypoxemického selhání (typ I)."
        ]
      }
    ]
  }"""

new_blocks.append(ards_entry)
new_blocks.append(arf_entry)

# Block 50 and 51 shift to 49 and 50
for num in [50, 51]:
    orig_entry = blocks[num]
    new_key = f'"spec-1-{num - 1}":'
    old_key = f'"spec-1-{num}":'
    new_entry = orig_entry.replace(old_key, new_key, 1)
    new_blocks.append(new_entry)

# Construct final content
new_details_str = ",\n\n".join(new_blocks)

# Let's find where SPECIAL_1_DETAILS object starts and ends in data_special1.js
# and replace it.
# SPECIAL_1_DETAILS starts with "const SPECIAL_1_DETAILS = {"
# and ends before the functions.
# Let's write the whole file!
# Let's extract the header and footer of data_special1.js.
header = '// data_special1.js - Podrobné popisy, schémata a kvízy pro Speciální I.\nconst SPECIAL_1_DETAILS = {\n'

# Find the merge function and any other functions at the end of the file
merge_idx = content.find("function mergeSpecial1Details()")
footer = content[merge_idx:]

new_file_content = header + new_details_str + "\n};\n\n" + footer

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(new_file_content)

print("Finished rebuilding data_special1.js!")
