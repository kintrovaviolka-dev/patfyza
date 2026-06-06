import re

with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find exactly where the first "function mergeSpecial1Details() {" starts
first_idx = text.find("function mergeSpecial1Details() {")
# Find the start of "spec-1-50":
spec_50_idx = text.find('"spec-1-50": {')

# Find the end of the valid spec-1-49 block. It should end with "    ]\n  }"
# Let's look backwards from first_idx for "]" or "}"
# Actually, the string "// ZBÝVAJÍCÍ OTÁZKY" is right before first_idx.
zbyvajici_idx = text.rfind("// ZBÝVAJÍCÍ OTÁZKY", 0, first_idx)

# We want to remove everything from `zbyvajici_idx` up to just before `"spec-1-50": {`.
# But wait, `spec-1-49` ends with `}`. Is there a `}` before `// ZBÝVAJÍCÍ OTÁZKY`?
before_zbyvajici = text[zbyvajici_idx-50:zbyvajici_idx]
print(f"Before ZBYVAJICI: {repr(before_zbyvajici)}")

# We can just use a regex to replace everything between the end of the `quiz` array in spec-1-49 and the start of spec-1-50.
# Let's find the string:
#   }
#
#   // ZBÝVAJÍCÍ OTÁZKY ...

# Let's replace the chunk from zbyvajici_idx to spec_50_idx
chunk_to_remove = text[zbyvajici_idx:spec_50_idx]
text = text.replace(chunk_to_remove, "  },\n\n")

# Wait, we might have multiple `function mergeSpecial1Details()` if they were nested.
# Let's count them:
print(f"Count of function mergeSpecial1Details: {text.count('function mergeSpecial1Details')}")

# Now let's remove any stray `});` or `};` that might be right before `"spec-1-50": {` if we missed something.
# We replaced it with `  },\n\n`
# Let's see the text around spec-1-50 now.
new_spec_50_idx = text.find('"spec-1-50": {')
print(f"Around spec-1-50: {repr(text[new_spec_50_idx-20:new_spec_50_idx+20])}")

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Saved fixed text.")
