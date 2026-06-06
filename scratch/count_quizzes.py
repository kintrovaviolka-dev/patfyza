import re

for filename in ["data_special2.js", "data_special1.js"]:
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # Let's count how many quiz questions there are per key
    # Keys look like "spec-2-1": { ... quiz: [ ... ] }
    # Let's find all keys and their quiz contents
    keys = re.findall(r'"(spec-1-\d+|spec-2-\d+)":\s*\{', content)
    print(f"\n--- FILE: {filename} ---")
    for key in keys[:5]:
        # find the block for this key
        # we can approximate by finding text from "key": to next key
        start_idx = content.find(f'"{key}":')
        # find next key
        next_keys = re.findall(r'"(spec-1-\d+|spec-2-\d+)":\s*\{', content[start_idx+10:])
        if next_keys:
            end_idx = content.find(f'"{next_keys[0]}":', start_idx+10)
        else:
            end_idx = len(content)

        block = content[start_idx:end_idx]
        # Count occurrences of "question": inside this block
        quiz_count = len(re.findall(r'"question":', block))
        print(f"Key {key}: {quiz_count} quiz questions")
