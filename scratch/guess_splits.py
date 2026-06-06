import json
import re

# Load PDF text
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split into rows
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

# Read JS lists to know the exact texts of Col 1, Col 2, Col 3
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

# Let's write a manual mapping of expected questions for each column in each row
# based on our knowledge.
# We'll write a matching algorithm that splits the lines of each row block.
# Since a cell can span multiple lines, let's group the lines of a row block
# into 4 groups (cells) based on matching.
# We know the first cell must match a question from Praktická.
# The second cell must match a question from Obecná.
# The third cell must match a question from Speciální I.
# The fourth cell must be whatever is left.

def clean(s):
    return re.sub(r"\s+", " ", s.strip().replace("–", "-").replace("—", "-").strip(" .,"))

# Let's create helper maps
pract_by_first_words = {clean(q)[:15].lower(): q for q in pract_js}
gen_by_first_words = {clean(q)[:15].lower(): q for q in gen_js}
spec1_by_first_words = {clean(q)[:15].lower(): q for q in spec1_js}

# Wait, let's check some row blocks manually to make sure they split correctly.
parsed_rows = {}

# Let's inspect each row block's lines
for num in sorted(rows.keys()):
    row_lines = rows[num]

    # We want to group the lines into 4 cells.
    # Let's print them out to see where the boundaries are.
    # Often, each line belongs to one cell, or a cell has multiple lines.
    # Let's look at the lines:
    # A line that starts a new cell will match the beginning of a question.
    # Let's identify the start line indices for each cell.
    start_c1 = 0
    start_c2 = None
    start_c3 = None
    start_c4 = None

    for idx, line in enumerate(row_lines):
        line_clean = clean(line).lower()
        if not line_clean:
            continue

        # Check if it starts Cell 2 (Obecná)
        # We can look through all General questions and check if this line starts one of them
        is_c2_start = False
        for g_q in gen_js:
            g_q_clean = clean(g_q).lower()
            if g_q_clean.startswith(line_clean[:20]) or line_clean.startswith(g_q_clean[:20]):
                is_c2_start = True
                break

        # Check if it starts Cell 3 (Speciální I.)
        is_c3_start = False
        for s1_q in spec1_js:
            s1_q_clean = clean(s1_q).lower()
            if s1_q_clean.startswith(line_clean[:20]) or line_clean.startswith(s1_q_clean[:20]):
                is_c3_start = True
                break

        # If it matches both, we should be careful, but they are usually different.
        if is_c2_start and idx > 0 and start_c2 is None:
            start_c2 = idx
        elif is_c3_start and idx > 0 and start_c2 is not None and start_c3 is None:
            start_c3 = idx

    # For Cell 4 (Speciální II.), we know it usually starts after Cell 3.
    # Let's find if any line in the remaining lines matches the start of a Speciální II. question,
    # or starts after Cell 3 is done.
    # Let's write a python script to run this and print the splits!
    print(f"Row {num} splits:")
    print(f"  Lines: {row_lines}")
    print(f"  Guessed start indices: C1={start_c1}, C2={start_c2}, C3={start_c3}")
