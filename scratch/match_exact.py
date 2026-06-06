import re

# Read data_core.js
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

# Let's read the PDF text
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find all row markers and their positions
lines = text.split("\n")
row_indices = []
for i, line in enumerate(lines):
    line_s = line.strip()
    m = re.match(r"^(\d+)\.\s*$", line_s)
    if m:
        row_indices.append((int(m.group(1)), i))
    else:
        m2 = re.match(r"^(\d+)\.\s+(\w+)", line_s)
        if m2:
            row_indices.append((int(m2.group(1)), i))

# Sort the row markers by number, but wait, some page numbers might have similar pattern.
# However, row_indices should be in order from 1 to 50. Let's make sure.
# Sort by line index
row_indices.sort(key=lambda x: x[1])

# Let's verify we have 50 rows
rows = {}
for idx in range(len(row_indices)):
    num, start_line = row_indices[idx]
    if idx + 1 < len(row_indices):
        end_line = row_indices[idx+1][1]
    else:
        end_line = len(lines)
    row_text = "\n".join(lines[start_line:end_line])
    # Remove the number from the start of the row_text
    row_text_clean = re.sub(r"^\d+\.\s*", "", row_text.strip())
    rows[num] = row_text_clean

# Let's write a script to find which JS questions are present in each row text.
# We will match the JS questions for each category:
# - General
# - Practical
# - Special 1
# - Special 2
# Let's check which JS questions match.

def normalize(s):
    # Remove whitespace, punctuation, lower case
    s = s.lower()
    s = re.sub(r"[^\w\s]", "", s)
    s = re.sub(r"\s+", "", s)
    return s

all_js_questions = {
    "General": [(q, normalize(q)) for q in gen_js],
    "Practical": [(q, normalize(q)) for q in pract_js],
    "Special 1": [(q, normalize(q)) for q in spec1_js],
    "Special 2": [(q, normalize(q)) for q in spec2_js]
}

# Let's see which JS questions are not matched or which rows have missing matches
# Actually, the table has 50 rows, and each row should contain exactly 4 questions (one for each category).
# Let's print out what we match for each category in each row.
for category, q_list in all_js_questions.items():
    print(f"\n--- MATCHING {category} ---")
    matched_indices = set()
    for num in sorted(rows.keys()):
        row_norm = normalize(rows[num])
        matches = []
        for idx, (q, q_norm) in enumerate(q_list):
            if q_norm in row_norm or row_norm in q_norm or (len(q_norm) > 10 and q_norm[:10] in row_norm):
                matches.append((idx, q))
                matched_indices.add(idx)
        # If no match or multiple matches, let's print
        if len(matches) == 0:
            print(f"Row {num}: NO MATCH in JS!")
        elif len(matches) > 1:
            print(f"Row {num}: MULTIPLE MATCHES: {[m[1][:30] for m in matches]}")

    unmatched = [q_list[i][0] for i in range(len(q_list)) if i not in matched_indices]
    if unmatched:
        print(f"Unmatched JS questions for {category}:")
        for u in unmatched:
            print(f" - {u}")
