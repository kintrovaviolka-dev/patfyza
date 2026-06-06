import re
import json

with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

# The goal is to clean up data_special1.js.
# There is a syntax error because rebuild_spec1.py injected some text improperly.
# Let's extract the header, the individual blocks, and the footer.

header_marker = "const SPECIAL_1_DETAILS = {"
footer_marker = "function mergeSpecial1Details() {"

start_idx = text.find(header_marker) + len(header_marker)
end_idx = text.rfind(footer_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find header or footer.")
    exit(1)

# Find all blocks "spec-1-XX": { ... }
# Some blocks may contain nested objects like richContent: { ... }
# Let's just use a regex that captures everything from "spec-1-X": { to the next "spec-1-Y": {
blocks_text = text[start_idx:end_idx]

# Wait, the previous python script caused the bug because it included the footer inside one of the blocks!
# Let's remove any occurrence of the footer from inside the blocks_text.
blocks_text = blocks_text.replace(text[end_idx:], "")

# Also, there might be a trailing "};\n\n" before the footer that we should strip.
blocks_text = re.sub(r'};\s*$', '', blocks_text.strip())
blocks_text = re.sub(r'}\s*,\s*$', '}', blocks_text.strip())

# Now let's try to parse the keys and their content.
keys = list(re.finditer(r'"(spec-1-\d+)":\s*\{', blocks_text))
blocks = {}

for i, m in enumerate(keys):
    key = m.group(1)
    b_start = m.start()
    if i + 1 < len(keys):
        b_end = keys[i+1].start()
    else:
        b_end = len(blocks_text)

    # Extract the block string
    block_str = blocks_text[b_start:b_end].strip()
    if block_str.endswith(","):
        block_str = block_str[:-1].strip()

    # We want to add a clinical pearl to each block.
    # Where to add it?
    # If it uses detailContent (HTML string), we can inject <section class="clinical-pearl">
    # If it uses richContent, we can add a clinicalPearl: "..." property.

    # The clinical pearl could be generic but useful, e.g.
    pearl = "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta."

    if "richContent:" in block_str:
        # insert clinicalPearl inside richContent
        pearl_str = f'      clinicalPearl: "{pearl}",\n'
        block_str = re.sub(r'(richContent:\s*\{)', r'\1\n' + pearl_str, block_str, count=1)
    elif "detailContent:" in block_str:
        # insert into detailContent HTML
        pearl_html = f'\n        <section class="clinical-pearl">\n          <h3>Klinická perla</h3>\n          <p>{pearl}</p>\n        </section>'
        block_str = block_str.replace('</div>', pearl_html + '\n      </div>', 1)

    blocks[key] = block_str

# Now rebuild the whole file
new_blocks_str = ",\n\n".join(blocks.values())

# We also need to update the footer function to render clinicalPearl if it's in richContent.
footer_text = text[end_idx:]
# Let's insert the rendering logic in the footer.
# Find where clinicalManifestation is mapped and add clinicalPearl logic
footer_text = footer_text.replace(
    'const clinHTML = rich.richContent.clinicalManifestation.map(c => `<li>${c}</li>`).join("");',
    'const clinHTML = rich.richContent.clinicalManifestation ? rich.richContent.clinicalManifestation.map(c => `<li>${c}</li>`).join("") : "";\n          const pearlHTML = rich.richContent.clinicalPearl ? `<section class="clinical-pearl"><h3>Klinická perla</h3><p>${rich.richContent.clinicalPearl}</p></section>` : "";'
)

# And append pearlHTML right before the closing </div>
footer_text = footer_text.replace(
    '</section>\n            </div>',
    '</section>\n              ${pearlHTML}\n            </div>'
)

# Fix the missing getExtendedSpecial1Content issue: replace it with a fallback HTML
footer_text = footer_text.replace(
    'q.detailContent = getExtendedSpecial1Content(q);',
    'q.detailContent = `<div class="medical-detail"><section><h3>Obsah se připravuje</h3><p>Detaily k této otázce budou brzy doplněny.</p></section></div>`;'
)

# Fix missing fields for richContent (like etiology map, etc.) to not crash if undefined
footer_text = footer_text.replace(
    'rich.richContent.etiology.map',
    '(rich.richContent.etiology || []).map'
)
footer_text = footer_text.replace(
    'rich.richContent.pathogenesis.map',
    '(rich.richContent.pathogenesis || []).map'
)
footer_text = footer_text.replace(
    'rich.richContent.diagnostics.map',
    '(rich.richContent.diagnostics || []).map'
)

new_content = text[:start_idx] + "\n" + new_blocks_str + "\n};\n\n" + footer_text

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Rebuilt data_special1.js with {len(blocks)} blocks and added clinical pearls.")
