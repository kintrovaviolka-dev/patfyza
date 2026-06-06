with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

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

for idx in range(len(row_positions)):
    num, start_line = row_positions[idx]
    if idx + 1 < len(row_positions):
        end_line = row_positions[idx+1][1]
    else:
        end_line = len(lines)

    print(f"\n=================== ROW {num} ===================")
    print("\n".join(lines[start_line:end_line]))
