import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

# We need to remove any occurrence of "function mergeSpecial1Details() { ... }" inside the object.
# Let's find "function mergeSpecial1Details() {"
bad_idx = text.find("function mergeSpecial1Details() {")

# There should be TWO occurrences if my theory is right.
first_idx = text.find("function mergeSpecial1Details() {")
last_idx = text.rfind("function mergeSpecial1Details() {")

if first_idx != last_idx:
    print("Found duplicated footer inside the object! Removing the first one...")
    # The first one is inside the object. It probably starts after some "});\n" ?
    # Let's find where the previous valid part of the block ends.
    # We can just use a regex to strip out everything from "function mergeSpecial1Details() {"
    # up to just before '"spec-1-50": {'

    spec_50_idx = text.find('"spec-1-50": {', first_idx)

    # We want to remove the text from `first_idx` up to `spec_50_idx`
    # BUT wait, the text right before first_idx might have a comma.

    text_to_remove = text[first_idx:spec_50_idx]

    # Let's see what is right before first_idx
    before = text[first_idx-20:first_idx]
    print(f"Text before bad function: {repr(before)}")

    # Let's just remove the bad function chunk inside the block string.
    # It seems spec-1-49 was actually spec-1-51 in the original?
    # No, spec-1-49 was shifted from 50. But 49 and 50 were shifted from 50 and 51.

    # Let's just remove the text_to_remove.
    text = text.replace(text_to_remove, "")

    # Clean up any trailing "});," before "spec-1-50"
    # Actually, the bad function itself contains "});" (from the loop inside the function).
    # Wait! The text before first_idx might be the actual end of spec-1-49 ?
    # Let's just print it.
    pass
else:
    print("Only one occurrence found?")

# A safer approach:
# Let's extract spec-1-1 to spec-1-50 using a strict regex that only captures the valid JSON-like structures.
# Instead, let's just do a string replacement for the exact bad chunk.
