import pypdf

reader = pypdf.PdfReader("kvadruplety.pdf")
print(f"Number of pages: {len(reader.pages)}")

# Print text of first page to verify
print("--- PAGE 1 TEXT ---")
print(reader.pages[0].extract_text()[:1000])
