import re

with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

def get_list(var_name):
    match = re.search(rf"const {var_name} = \[(.*?)\];", core_content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

spec1 = get_list("RAW_QUESTIONS_SPECIAL_1")
spec2 = get_list("RAW_QUESTIONS_SPECIAL_2")

print("--- SPECIAL 1 JS LIST ---")
for idx, q in enumerate(spec1):
    print(f"{idx+1}: {q}")

print("\n--- SPECIAL 2 JS LIST ---")
for idx, q in enumerate(spec2):
    print(f"{idx+1}: {q}")
