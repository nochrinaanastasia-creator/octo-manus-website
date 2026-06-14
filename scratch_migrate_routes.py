import os
import re

routes_dir = r"C:\Users\anast\Desktop\Octo Manus 2\1 page\vision-vibe-visualizer-main\src\routes\$lang"

for filename in os.listdir(routes_dir):
    if not filename.endswith(".tsx"):
        continue
    filepath = os.path.join(routes_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update createFileRoute path
    if filename == "index.tsx":
        content = content.replace('createFileRoute("/")', 'createFileRoute("/$lang/")')
    else:
        basename = filename[:-4]
        content = content.replace(f'createFileRoute("/{basename}")', f'createFileRoute("/$lang/{basename}")')

    # 2. Update head signature and lang extraction
    # Old: head: ({ search }) => { const lang = (search as any)?.lang || "en";
    # New: head: ({ params }) => { const lang = (params as any)?.lang || "en";
    content = content.replace('head: ({ search }) => {', 'head: ({ params }) => {')
    content = content.replace('const lang = (search as any)?.lang || "en";', 'const lang = (params as any)?.lang || "en";')
    content = content.replace('const lang = search?.lang || "en";', 'const lang = (params as any)?.lang || "en";')

    # 3. Update og:url
    if filename == "index.tsx":
        content = content.replace('content: `https://octomanus.com/?lang=${lang}`', 'content: `https://octomanus.com/${lang}/`')
    else:
        basename = filename[:-4]
        content = content.replace('content: `https://octomanus.com/?lang=${lang}`', f'content: `https://octomanus.com/${{lang}}/{basename}`')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Migration completed.")
