with open("data_practical.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
match = re.search(r'"pract-42":\s*\{(.*?)\n\s*\},?\n\s*"(pract-43|panel-notes|quiz)"', content, re.DOTALL)
if match:
    print(match.group(1)[:2000])
else:
    # Print the lines around "pract-42"
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if '"pract-42":' in line:
            print("\n".join(lines[i:i+40]))
            break
