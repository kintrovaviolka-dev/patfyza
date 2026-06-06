import re
import sys

def check_keys_in_file(filename, prefix, expected_count=50):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # Simple regex to find keys like "spec-2-42"
    keys_found = re.findall(rf'"{prefix}-(\d+)"\s*:', content)
    keys_ints = sorted([int(k) for k in keys_found])

    print(f"File {filename}: Found {len(keys_ints)} keys of prefix '{prefix}'.")

    missing = []
    for i in range(1, expected_count + 1):
        if i not in keys_ints:
            missing.append(f"{prefix}-{i}")

    duplicates = []
    seen = set()
    for k in keys_ints:
        if k in seen:
            duplicates.append(f"{prefix}-{k}")
        seen.add(k)

    if missing:
        print(f"  --> MISSING KEYS: {missing}")
    if duplicates:
        print(f"  --> DUPLICATE KEYS: {duplicates}")

    # Check if there are any syntax errors by trying to evaluate as a basic structure or regex check
    # Check that each key has a quiz
    # Find block of each key
    for k in range(1, expected_count + 1):
        key_str = f"{prefix}-{k}"
        key_pos = content.find(f'"{key_str}":')
        if key_pos == -1:
            continue
        # Check if "quiz" exists inside this block before next key
        next_key_str = f"{prefix}-{k+1}"
        next_key_pos = content.find(f'"{next_key_str}":', key_pos)
        if next_key_pos == -1:
            next_key_pos = content.rfind("}")

        block_text = content[key_pos:next_key_pos]
        if "quiz" not in block_text:
            print(f"  --> Warning: Key {key_str} does not have 'quiz' block.")

    return len(missing) == 0 and len(duplicates) == 0

success = True
success &= check_keys_in_file("data_general.js", "gen", 50)
success &= check_keys_in_file("data_practical.js", "pract", 50)
success &= check_keys_in_file("data_special1.js", "spec-1", 50)
success &= check_keys_in_file("data_special2.js", "spec-2", 50)

if success:
    print("Verification SUCCESS! All files have exactly 50 sequential keys matching their categories.")
    sys.exit(0)
else:
    print("Verification FAILED! There are missing or duplicate keys.")
    sys.exit(1)
