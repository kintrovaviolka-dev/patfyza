with open("data_practical.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
keys = re.findall(r'"pract-\d+":', content)
print(f"Total keys found: {len(keys)}")
# print some keys around pract-40
for k in keys[38:45]:
    idx = content.find(k)
    print(content[idx:idx+150] + "\n")
