import pypdf
import re

# Read PDF and extract text
reader = pypdf.PdfReader("kvadruplety.pdf")
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "\n"

# Let's write a parser.
# In the PDF, each row is prefixed by a number followed by a dot (e.g., "1.", "2.", ..., "50.")
# The text between the numbers contains the content for:
# - praktická
# - obecná
# - speciální I.
# - speciální II.
# Let's inspect the text to see how to split it.
# We can print all extracted lines to see the structure.
with open("scratch/pdf_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print("PDF text written to scratch/pdf_text.txt")
