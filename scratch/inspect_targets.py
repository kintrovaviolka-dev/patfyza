import re
import json

def get_block(content, prefix, num):
    key = f'"{prefix}-{num}":'
    pos = content.find(key)
    if pos == -1:
        return f"NOT FOUND {prefix}-{num}"
    
    # find the matching closing braces or next key
    next_key = f'"{prefix}-{num+1}":'
    next_pos = content.find(next_key, pos)
    if next_pos == -1:
        # try to find end of file/object
        next_pos = content.rfind("}")
    
    return content[pos:next_pos]

for fpath, prefix, nums in [
    ("/Users/violakintrova/Downloads/verysadanyway-main/patfyza-main/data_special1.js", "spec-1", [8, 9, 13, 18, 23, 30, 32, 42]),
    ("/Users/violakintrova/Downloads/verysadanyway-main/patfyza-main/data_special2.js", "spec-2", [8, 15])
]:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    print(f"=== {fpath} ===")
    for n in nums:
        print(f"--- Key: {prefix}-{n} ---")
        block = get_block(content, prefix, n)
        # print first few lines and check if it's there
        lines = block.strip().splitlines()
        print("\n".join(lines[:12]))
        print("...")
        print("\n".join(lines[-8:]))
        print("="*40)
