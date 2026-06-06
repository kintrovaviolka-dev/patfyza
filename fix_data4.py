with open("data_special1.js", "r", encoding="utf-8") as f:
    text = f.read()

# Reverse the disastrous replacement
text = text.replace("  },\n\n", "")

with open("data_special1.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Restored data_special1.js length:", len(text))
