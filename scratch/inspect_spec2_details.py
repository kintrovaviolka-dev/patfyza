import re

with open("data_core.js", "r", encoding="utf-8") as f:
    core = f.read()

with open("data_special2.js", "r", encoding="utf-8") as f:
    spec2 = f.read()

def get_list(var_name):
    match = re.search(rf"const {var_name} = \[(.*?)\];", core, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

questions = get_list("RAW_QUESTIONS_SPECIAL_2")
print(f"Number of questions in RAW_QUESTIONS_SPECIAL_2: {len(questions)}")

# Parse keys in SPECIAL_2_DETAILS
keys = re.findall(r'"(spec-2-\d+)":\s*\{', spec2)
print(f"Number of keys in SPECIAL_2_DETAILS: {len(keys)}")
print(f"Keys found: {keys}")

for idx, q in enumerate(questions):
    key = f"spec-2-{idx + 1}"
    exists = key in keys
    print(f"{key}: {'EXISTS' if exists else 'MISSING'} -> {q}")
