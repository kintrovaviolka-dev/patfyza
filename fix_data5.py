import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

# We need to find the specific duplicated block.
# The bad block looks like:
# function mergeSpecial1Details() {
# ...
#   });
# },
# "spec-1-50": {

# Let's just find the string "function mergeSpecial1Details() {" inside the object (before the last one).
first_idx = text.find("function mergeSpecial1Details() {")
last_idx = text.rfind("function mergeSpecial1Details() {")

if first_idx != last_idx:
    print("Found duplicated block. We will remove it.")
    # Find the end of this bad block. It ends with "});," right before "spec-1-50"
    spec50_idx = text.find('"spec-1-50": {', first_idx)
    # The text to remove is from `first_idx` up to `spec50_idx`

    # Wait, the valid spec-1-49 block ends before first_idx.
    # Let's see what is right before first_idx.
    # It might be `window.SPECIAL_1_DETAILS = SPECIAL_1_DETAILS;` or similar, from the previous script.
    # Actually, let's just use regex to remove everything from first_idx up to the next valid key or end of object.

    # We want to replace the text between the end of spec-1-49's quiz array and "spec-1-50": {
    # Let's search backwards from first_idx for `]`, which is the end of the quiz array.
    end_of_quiz = text.rfind("]", 0, first_idx)

    chunk_to_remove = text[end_of_quiz+1:spec50_idx]

    # Replace it with "\n    ]\n  },\n\n"
    # Wait, end_of_quiz includes `]`. So after `]` it should be `\n    ]\n  },\n\n`
    # Let's just do a string replacement of chunk_to_remove with `\n  },\n\n  `

    text = text[:end_of_quiz+1] + "\n  },\n\n  " + text[spec50_idx:]

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Fixed duplicate function.")
