with open("data_special2.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find "spec-2-7" and print its content
import re
match = re.search(r'"spec-2-7":\s*\{(.*?)\n\s*\},?\n\s*"(spec-2-8|panel-notes|quiz)"', content, re.DOTALL)
if match:
    print("Match found:")
    print(match.group(1)[:2000])
else:
    # Just print the lines around "spec-2-7"
    lines = content.split("\n")
    for i, line in enumerate(lines):
        if '"spec-2-7":' in line:
            print("\n".join(lines[i:i+50]))
            break
