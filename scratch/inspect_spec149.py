with open("data_special1.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r'"spec-1-49":\s*\{(.*?)\n\s*\},?\n\s*"(spec-1-50|panel-notes|quiz)"', content, re.DOTALL)
if match:
    print(match.group(1)[:2000])
else:
    # Print the lines around "spec-1-49"
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if '"spec-1-49":' in line:
            print("\n".join(lines[i:i+40]))
            break
