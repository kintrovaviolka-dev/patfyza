import re

with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's split the text into pages or rows.
# We know the rows are 1 to 50. Let's find their start positions.
# We will use regex to find "\n1.\n" or similar, or just find the row markers.
# Let's find the indices of "1.", "2.", ..., "50." in the text.
# To be robust, let's find the line indices that contain exactly "N." or start with "N. "
lines = text.split("\n")
row_positions = []
for i, line in enumerate(lines):
    line_s = line.strip()
    # Check for "N." or "N. something"
    m = re.match(r"^(\d+)\.\s*$", line_s)
    if m:
        row_positions.append((int(m.group(1)), i))
    else:
        m2 = re.match(r"^(\d+)\.\s+(\w+)", line_s)
        if m2:
            row_positions.append((int(m2.group(1)), i))

# Dedup and sort row_positions by line index
row_positions.sort(key=lambda x: x[1])

# Filter out false positives if any (we want numbers from 1 to 50 in order)
# Let's print out what we found
print(f"Total markers found: {len(row_positions)}")
for num, line_idx in row_positions:
    print(f"Row {num} is at line {line_idx}: '{lines[line_idx]}'")
