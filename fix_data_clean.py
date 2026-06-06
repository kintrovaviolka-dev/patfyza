import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

def extract_blocks(text):
    blocks = {}
    # Find all "spec-1-XX": {
    pattern = re.compile(r'"(spec-1-\d+)":\s*\{')
    for match in pattern.finditer(text):
        key = match.group(1)
        # To avoid duplicating parsing if a key appears multiple times, use the first one
        if key in blocks:
            continue

        start_idx = match.end() - 1 # Points to the opening {

        # Brace matching
        brace_count = 0
        in_string = False
        escape = False
        in_template = False
        end_idx = -1

        for i in range(start_idx, len(text)):
            c = text[i]

            if in_template:
                if escape:
                    escape = False
                elif c == '\\':
                    escape = True
                elif c == '`':
                    in_template = False
            elif in_string:
                if escape:
                    escape = False
                elif c == '\\':
                    escape = True
                elif c == '"':
                    in_string = False
            else:
                if c == '"':
                    in_string = True
                elif c == '`':
                    in_template = True
                elif c == '{':
                    brace_count += 1
                elif c == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end_idx = i + 1
                        break

        if end_idx != -1:
            block_content = text[start_idx:end_idx]
            blocks[key] = block_content
    return blocks

blocks = extract_blocks(text)
print(f"Extracted {len(blocks)} blocks.")

# Sort keys numeric
sorted_keys = sorted(blocks.keys(), key=lambda x: int(x.split('-')[2]))

# We want to add the clinical pearl
pearl = "Nezapomeňte, že včasná diagnóza a rychlá intervence mohou u tohoto stavu odvrátit ireverzibilní orgánové poškození a zachránit život pacienta."

new_blocks_text = []
for key in sorted_keys:
    content = blocks[key]

    # insert pearl
    if "richContent:" in content and "clinicalPearl:" not in content:
        pearl_str = f'\n      clinicalPearl: "{pearl}",'
        content = re.sub(r'(richContent:\s*\{)', r'\1' + pearl_str, content, count=1)
    elif "detailContent:" in content and "clinical-pearl" not in content:
        pearl_html = f'\n        <section class="clinical-pearl">\n          <h3>Klinická perla</h3>\n          <p>{pearl}</p>\n        </section>'
        # insert before the last </div>
        last_div = content.rfind('</div>')
        if last_div != -1:
            content = content[:last_div] + pearl_html + '\n      ' + content[last_div:]

    new_blocks_text.append(f'  "{key}": {content}')

# Now construct the final file
header = """// data_special1.js
// Obsahuje bohaté texty a kvízy pro "Speciální patofyziologii I."

const SPECIAL_1_DETAILS = {
"""

footer = """
};

// Pomocná funkce pro vygenerování klinicky bohatého textu pro ostatní otázky
function getExtendedSpecial1Content(q) {
  return `
    <div class="medical-detail">
      <section>
        <h3>1. Etiologie a patofyziologický úvod</h3>
        <p>Otázka <strong>${q.title}</strong> představuje závažný patofyziologický okruh v rámci <em>${q.organSystem}</em>. Tento stav vzniká působením různých vnějších a vnitřních etiologických faktorů, které narušují homeostázu a vedou k rozvoji kompenzačních i patologických kaskád.</p>
        <p>Etiologické faktory mohou zahrnovat ischemické poškození tkání, toxické vlivy, autoimunitní reakce nebo geneticky podmíněné poruchy transportních mechanismů a buněčné signalizace.</p>
      </section>

      <section>
        <h3>2. Patofyziologické mechanismy na buněčné a tkáňové úrovni</h3>
        <p>Rozvoj tohoto onemocnění/poruchy je charakterizován řetězcem dějů:</p>
        <ol>
          <li><strong>Primární inzult:</strong> Zásah buněčného metabolismu, poškození membrán, porucha mitochondriální respirace nebo receptorová dysfunkce.</li>
          <li><strong>Aktivace kompenzačních drah:</strong> Snaha organismu minimalizovat poškození (např. aktivace sympatického nervového systému, osa RAAS, sekrece specifických cytokinů, zvýšení exprese stresových proteinů).</li>
          <li><strong>Přechod do dekompenzace:</strong> Pokud patologický podnět trvá, dochází k vyčerpání kompenzačních rezerv, strukturálnímu poškození buněk (apoptóza/nekróza) a fibrotizaci tkáně s následnou ztrátou funkce.</li>
        </ol>
      </section>

      <section class="diagram-section">
        <h3>Patofyziologická kaskáda rozvoje stavu</h3>
        <pre class="ascii-diagram">
[Etiologický podnět / Inzult] ──► [Porucha buněčné homeostázy]
                                        │
                                        ▼
[Vyčerpání kompenzačních mechanismů] ◄── [Buněčný stres a poškození]
                 │
                 ▼
[Strukturální a funkční selhání orgánu] ──► [Klinické symptomy]
        </pre>
      </section>
    </div>
  `;
}

function mergeSpecial1Details() {
  const completeList = window.COMPLETE_QUESTIONS || [];

  completeList.forEach(q => {
    if (q.category === "Speciální I.") {
      const rich = SPECIAL_1_DETAILS[q.id];
      if (rich) {
        if (rich.detailContent) {
          q.detailContent = rich.detailContent;
        } else if (rich.richContent) {
          const keywordsHTML = (q.keyTerms || []).map(k => `<span class="keyword-tag">${k}</span>`).join(" ");
          const etiolHTML = (rich.richContent.etiology || []).map(e => `<li>${e}</li>`).join("");
          const pathoHTML = (rich.richContent.pathogenesis || []).map(p => `<li>${p}</li>`).join("");
          const clinHTML = (rich.richContent.clinicalManifestation || []).map(c => `<li>${c}</li>`).join("");
          const diagHTML = (rich.richContent.diagnostics || []).map(d => `<li>${d}</li>`).join("");
          const pearlHTML = rich.richContent.clinicalPearl ? `<section class="clinical-pearl"><h3>Klinická perla</h3><p>${rich.richContent.clinicalPearl}</p></section>` : "";

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
              ${pearlHTML}
            </div>
          `;
        } else {
          q.detailContent = getExtendedSpecial1Content(q);
        }
        q.quiz = rich.quiz;
      }
    }
  });
}

// Spustíme sloučení
mergeSpecial1Details();
window.SPECIAL_1_DETAILS = SPECIAL_1_DETAILS;
"""

final_content = header + ",\n\n".join(new_blocks_text) + footer

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(final_content)

print("Rebuilt with pure parsing. It should be correct.")
