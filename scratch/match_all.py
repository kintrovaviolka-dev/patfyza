import re

# Read data_core.js
with open("data_core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

def get_list(var_name):
    match = re.search(rf"const {var_name} = \[(.*?)\];", core_content, re.DOTALL)
    if not match:
        return []
    items_raw = match.group(1)
    items = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', items_raw)
    return [i.strip() for i in items]

spec1_js = get_list("RAW_QUESTIONS_SPECIAL_1")
spec2_js = get_list("RAW_QUESTIONS_SPECIAL_2")
pract_js = get_list("RAW_QUESTIONS_PRACTICAL")
gen_js = get_list("RAW_QUESTIONS_GENERAL")

# Let's load the PDF text from scratch/pdf_text.txt
with open("scratch/pdf_text.txt", "r", encoding="utf-8") as f:
    pdf_text = f.read()

# Let's search the PDF text for questions.
# The table has columns: praktická | obecná | speciální I. | speciální II.
# Let's print out what we found
print(f"Spec1 in JS: {len(spec1_js)}")
print(f"Spec2 in JS: {len(spec2_js)}")
print(f"Pract in JS: {len(pract_js)}")
print(f"Gen in JS: {len(gen_js)}")

# Let's check how each JS question relates to the PDF columns.
# We will write a search to see which of the 50 questions per column in the PDF are present or missing in JS.
# Let's write a script that does this matching.
# We can extract the cells from the PDF.
# Since we have the PDF text, let's write a smarter script to parse the PDF text.
# The PDF text has rows from 1 to 50. Let's find each row.
# We can find the occurrences of "1.", "2.", "3.", ..., "50." at the beginning of lines.
