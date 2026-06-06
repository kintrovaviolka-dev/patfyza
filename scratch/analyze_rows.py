import re

with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find the start of each row.
# We will split the text by "1.\n", "2.\n", etc.
# Let's find the indices of row numbers in the text.
row_matches = list(re.finditer(r"^(1\d|2\d|3\d|4\d|50|[1-9])\.\s*$", text, re.MULTILINE))
# Also try matching N. at the start of a line followed by space/text
row_matches_2 = list(re.finditer(r"^(1\d|2\d|3\d|4\d|50|[1-9])\.\s+", text, re.MULTILINE))

all_matches = sorted(list(set(row_matches + row_matches_2)), key=lambda x: x.start())

# Filter to get exactly numbers 1 to 50 in sequence
filtered_matches = []
expected_num = 1
for m in all_matches:
    num = int(m.group(1))
    if num == expected_num:
        filtered_matches.append(m)
        expected_num += 1
    elif num < expected_num:
        # duplicate or out of order, skip
        continue

print(f"Filtered to {len(filtered_matches)} sequential row markers.")

# Reconstruct row texts
rows = {}
for i in range(len(filtered_matches)):
    start_pos = filtered_matches[i].end()
    num = i + 1
    if i + 1 < len(filtered_matches):
        end_pos = filtered_matches[i+1].start()
    else:
        end_pos = len(text)
    rows[num] = text[start_pos:end_pos].strip()

# Now let's analyze how to split each row into 4 columns.
# Let's look at the structure of each row.
# We will print out the row number and the lines in that row.
# Let's write the first 10 rows to see.
for num in range(1, 6):
    print(f"\n--- ROW {num} ---")
    lines = [l.strip() for l in rows[num].split("\n") if l.strip()]
    for idx, l in enumerate(lines):
        print(f"  Line {idx}: {l}")
