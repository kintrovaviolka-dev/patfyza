import re

with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find all occurrences of row numbers "1." to "50."
# Since it's a multi-column table, let's see how they are structured.
# Let's split the text by lines and see what lines start with numbers.
lines = text.split("\n")
row_indices = []
for i, line in enumerate(lines):
    m = re.match(r"^(\d+)\.\s*$", line.strip())
    if m:
        row_indices.append((int(m.group(1)), i))
    else:
        # Check if line starts with a number and space or text, e.g. "1. Vyšetření..."
        m2 = re.match(r"^(\d+)\.\s+(\w+)", line.strip())
        if m2:
            row_indices.append((int(m2.group(1)), i))

print(f"Found {len(row_indices)} row markers:")
for num, idx in row_indices[:15]:
    print(f"Row {num} at line {idx}: {lines[idx][:100]}")
