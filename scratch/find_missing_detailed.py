import re

with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

def get_list(var_name):
    match = re.search(rf"const {var_name} = \[(.*?)\];", core_content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

spec1_js = get_list("RAW_QUESTIONS_SPECIAL_1")
spec2_js = get_list("RAW_QUESTIONS_SPECIAL_2")
pract_js = get_list("RAW_QUESTIONS_PRACTICAL")
gen_js = get_list("RAW_QUESTIONS_GENERAL")

# Let's define the 50 rows of the PDF table exactly by reading them from scratch/pdf_text.txt
# Let's load the text
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's extract the rows by splitting on N.
lines = text.split("\n")
row_positions = []
for i, line in enumerate(lines):
    line_s = line.strip()
    m = re.match(r"^(\d+)\.\s*$", line_s)
    if m:
        row_positions.append((int(m.group(1)), i))
    else:
        m2 = re.match(r"^(\d+)\.\s+(\w+)", line_s)
        if m2:
            row_positions.append((int(m2.group(1)), i))

row_positions.sort(key=lambda x: x[1])

filtered_positions = []
expected = 1
for r in row_positions:
    if r[0] == expected:
        filtered_positions.append(r)
        expected += 1

rows = {}
for idx in range(len(filtered_positions)):
    num, start_line = filtered_positions[idx]
    if idx + 1 < len(filtered_positions):
        end_line = filtered_positions[idx+1][1]
    else:
        end_line = len(lines)
    
    row_lines = [l.strip() for l in lines[start_line:end_line] if l.strip()]
    if row_lines:
        row_lines[0] = re.sub(r"^\d+\.\s*", "", row_lines[0]).strip()
        row_lines = [l for l in row_lines if l]
    rows[num] = row_lines

# Let's print out what is missing by doing a substring search or similar.
# Let's write down the exact text of the 4 columns for each of the 50 rows from the PDF.
# We will define a manual mapping for the columns or parse them.
# Let's see: how do we parse each row block?
# For each row, the cells are in order.
# We can identify the boundary of cells by matching them with the JS questions.
# Let's write a python script that will do this.
# Since we know the questions of the first 3 columns, we can search for them in the row text, and whatever is left is the 4th column!
# Let's do that.

def clean(s):
    return re.sub(r"\s+", " ", s.strip().replace("–", "-").replace("—", "-").replace(" ,", ",").replace(" .", ".").strip(" .,"))

# Let's clean the JS lists
pract_clean = [clean(q) for q in pract_js]
gen_clean = [clean(q) for q in gen_js]
spec1_clean = [clean(q) for q in spec1_js]
spec2_clean = [clean(q) for q in spec2_js]

missing_questions = []

# Let's do it row-by-row
for num in sorted(rows.keys()):
    row_text = " ".join(rows[num])
    
    # We want to identify Col 1, Col 2, Col 3, Col 4.
    # Col 1: we can find which of pract_clean is a substring.
    c1 = None
    for q in pract_clean:
        if q in clean(row_text) or clean(row_text).startswith(q[:20]):
            c1 = q
            break
            
    # Col 2:
    c2 = None
    for q in gen_clean:
        if q in clean(row_text):
            c2 = q
            break
            
    # Col 3:
    c3 = None
    for q in spec1_clean:
        if q in clean(row_text):
            c3 = q
            break
    
    # Let's reconstruct Col 4.
    # Since Col 1, 2, 3 are matched, let's find what text in row_text is not in Col 1, 2, 3.
    # Actually, let's just print the row number and the lines, and let's identify Col 4.
    # Col 4 is Speciální II.
    # Let's check what matches Spec2:
    c4 = None
    for q in spec2_clean:
        if q in clean(row_text):
            c4 = q
            break
    
    print(f"Row {num}:")
    print(f"  Col 1: {c1}")
    print(f"  Col 2: {c2}")
    print(f"  Col 3: {c3}")
    print(f"  Col 4: {c4}")
