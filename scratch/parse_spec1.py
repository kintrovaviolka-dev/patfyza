import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find all keys like "spec-1-X"
keys = re.findall(r'"(spec-1-\d+)":\s*\{', content)
print(f"Total keys found: {len(keys)}")

# Let's map each key to its content block
blocks = {}
for i, key in enumerate(keys):
    start_idx = content.find(f'"{key}":')
    if i + 1 < len(keys):
        next_key = keys[i+1]
        end_idx = content.find(f'"{next_key}":')
    else:
        # Find the end of the object
        end_idx = content.rfind("}")

    # We want to extract the content inside the outer braces for the key, or the whole entry
    # Let's extract the exact entry: "spec-1-X": { ... }
    entry = content[start_idx:end_idx].strip()
    # If the entry ends with a comma, remove it
    if entry.endswith(","):
        entry = entry[:-1].strip()

    # Parse key number
    num = int(key.split("-")[-1])
    blocks[num] = entry

print(f"Loaded {len(blocks)} blocks into dictionary.")
for num in sorted(blocks.keys())[:10]:
    print(f"Block {num} starts with: {blocks[num][:100]}...")
