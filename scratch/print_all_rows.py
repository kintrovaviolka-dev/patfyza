import re

# Load PDF text
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split by row markers
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

# Filter duplicates
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

# Print what we have for each row
for num in sorted(rows.keys()):
    print(f"Row {num} lines:")
    for l in rows[num]:
        print(f"  {l}")
