import re

# Load PDF text
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Parse rows
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

# Read JS lists
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

# Let's see if we can find the exact text of the 4 columns for each row.
# We will do this by matching.
# We have 50 items in PDF for each column.
# Let's print out the lines in each row block to see if we can easily split them.
# For example, in Row 1:
# Col 1: Vyšetření červené krevní řady.
# Col 2: Definice nemoci a zdraví – pojmy: etiologie, patogeneze, etiopatogeneze, symptom, syndrom. Průběh a zakončení nemocí. Iatrogenita. Psychosomatika.
# Col 3: Srdeční zástava. Maligní arytmie: fibrilace komor, setrvalá komorová tachykardie a asystolie – etiopatogeneze a následky. Elektromechanická disociace
# Col 4: Vředová choroba gastroduodena – etiopatogeneze a komplikace. Gastritidy – etiopatogeneze, projevy, následky.

# Let's write a python script that will split each row's text using the known questions as boundaries.
# We can normalize strings.
def clean_str(s):
    s = s.lower()
    s = re.sub(r"[^\w\s]", "", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()

# Let's map all JS questions by their clean representation
pract_map = {clean_str(q): q for q in pract_js}
gen_map = {clean_str(q): q for q in gen_js}
spec1_map = {clean_str(q): q for q in spec1_js}
spec2_map = {clean_str(q): q for q in spec2_js}

# Since some questions might be combined, we can also search for parts.
# Let's try to extract the exact text of the 4 columns from the PDF for each row.
# Since the columns are in order (1. Praktická, 2. Obecná, 3. Speciální I, 4. Speciální II),
# and the text of each column is a set of sentences/paragraphs, we can combine the lines of a row block
# into a single string, and search for matches.
# Let's write a script that does this:
for num in sorted(rows.keys()):
    row_text = " ".join(rows[num])

    # We want to find where each column starts and ends.
    # Column 1: starts at the beginning of the row text.
    # We know that Column 1 matches one of the Praktická questions. Let's find the match.
    c1_match = None
    c1_len = 0
    for q_clean, q in pract_map.items():
        # Check if the row text starts with or contains this question
        # Since it's column 1, it should be at the very start
        if clean_str(row_text).startswith(q_clean):
            if len(q_clean) > c1_len:
                c1_match = q
                c1_len = len(q_clean)

    # If not found at the start, try a substring check
    if not c1_match:
        for q_clean, q in pract_map.items():
            if q_clean in clean_str(row_text):
                if len(q_clean) > c1_len:
                    c1_match = q
                    c1_len = len(q_clean)

    # Column 2: matches one of the General questions.
    c2_match = None
    c2_len = 0
    for q_clean, q in gen_map.items():
        if q_clean in clean_str(row_text):
            if len(q_clean) > c2_len:
                c2_match = q
                c2_len = len(q_clean)

    # Column 3: matches one of the Special 1 questions.
    c3_match = None
    c3_len = 0
    for q_clean, q in spec1_map.items():
        if q_clean in clean_str(row_text):
            if len(q_clean) > c3_len:
                c3_match = q
                c3_len = len(q_clean)

    # Column 4: matches one of the Special 2 questions (possibly a combined one, or parts of it).
    # Since Special 2 has combined questions, we also want to look for individual parts.
    # Let's print out the row number and the matched questions.
    print(f"Row {num}:")
    print(f"  Col 1 (Pract): {c1_match}")
    print(f"  Col 2 (Gen):   {c2_match}")
    print(f"  Col 3 (Spec1): {c3_match}")
    # Let's print the remaining text after Col 1, Col 2, Col 3 to see what is Col 4
    # To do that, we find the positions in clean_str(row_text)
    rem_text = row_text
    # Let's clean and print the original text of the row block to see what's left
    print(f"  Full text: {row_text[:120]}...")
