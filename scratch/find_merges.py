import re

for filename in ["data_general.js", "data_practical.js", "data_special1.js", "data_special2.js"]:
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    # find merge function
    matches = re.findall(r"function merge\w+\(\)\s*\{.*?\}", content, re.DOTALL)
    print(f"\n--- {filename} ---")
    for m in matches:
        print(m[:500] + "...")
