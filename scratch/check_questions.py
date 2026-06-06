import json
import re

# Read data_core.js
with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

# Extract the arrays
def extract_array(array_name, content):
    match = re.search(rf"const {array_name} = \[(.*?)\];", content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    # Parse items by finding strings inside double quotes
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.replace('\\"', '"').replace('\n', ' ').strip() for i in items]

special_1_js = extract_array("RAW_QUESTIONS_SPECIAL_1", core_content)
special_2_js = extract_array("RAW_QUESTIONS_SPECIAL_2", core_content)
practical_js = extract_array("RAW_QUESTIONS_PRACTICAL", core_content)
general_js = extract_array("RAW_QUESTIONS_GENERAL", core_content)

print(f"JS counts - Special 1: {len(special_1_js)}, Special 2: {len(special_2_js)}, Practical: {len(practical_js)}, General: {len(general_js)}")
print(f"Total in JS: {len(special_1_js) + len(special_2_js) + len(practical_js) + len(general_js)}")

# Let's inspect Special 2 JS questions to see what we have
for i, q in enumerate(special_2_js):
    print(f"Spec 2 JS {i+1}: {q[:60]}...")
