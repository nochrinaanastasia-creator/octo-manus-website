import os
import re

routes_dir = r"C:\Users\anast\Desktop\Octo Manus 2\1 page\vision-vibe-visualizer-main\src\routes\$lang"

for filename in os.listdir(routes_dir):
    if not filename.endswith(".tsx"):
        continue
    filepath = os.path.join(routes_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Update hardcoded Link paths
    content = re.sub(r'to="/([a-z]+)"', r'to={`/${lang}/\1`}', content)
    content = re.sub(r'to="/"', r'to={`/${lang}`}', content)

    # Note: lang must be defined in the component for this to work!
    # In index.tsx, we have `const { t } = useLanguage();`
    # We must add `lang` to useLanguage destructing.
    content = re.sub(r'const \{ t \} = useLanguage\(\);', r'const { t, lang } = useLanguage();', content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated links in routes.")
