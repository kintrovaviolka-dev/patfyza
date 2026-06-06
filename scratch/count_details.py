import re

with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

def get_list(var_name):
    # match array
    match = re.search(rf"const {var_name} = \[(.*?)\];", core_content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

spec1 = get_list("RAW_QUESTIONS_SPECIAL_1")
spec2 = get_list("RAW_QUESTIONS_SPECIAL_2")
pract = get_list("RAW_QUESTIONS_PRACTICAL")
gen = get_list("RAW_QUESTIONS_GENERAL")

print(f"Spec1 size: {len(spec1)}")
print(f"Spec2 size: {len(spec2)}")
print(f"Pract size: {len(pract)}")
print(f"Gen size: {len(gen)}")

# Let's inspect the files to see what detail IDs are there:
for filename in ["data_general.js", "data_practical.js", "data_special1.js", "data_special2.js"]:
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
    # find keys like "gen-1" or "spec-1-1" etc.
    keys = re.findall(r'"(gen-\d+|spec-1-\d+|spec-2-\d+|pract-\d+)":', content)
    print(f"{filename}: {len(keys)} keys. Keys range: {min(keys) if keys else 'None'} to {max(keys) if keys else 'None'}")
