import os
import re

filepath = r"C:\Users\anast\Desktop\Octo Manus 2\1 page\vision-vibe-visualizer-main\src\components\site-chrome.tsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace hardcoded paths in Links
# to="/" -> to={`/${lang}`}
content = re.sub(r'to="/"', r'to={`/${lang}`}', content)
# to="/services" -> to={`/${lang}/services`}
content = re.sub(r'to="/([a-z]+)"', r'to={`/${lang}/\1`}', content)
# remove search={(prev: any) => ({ ...prev })} since we don't use search params anymore
content = re.sub(r'\s*search=\{\(prev: any\) => \(\{ \.\.\.prev \}\)\}', '', content)

# Update hardcoded <a> hrefs
# href={`/services?lang=${lang}#ai-advisory`} -> href={`/${lang}/services#ai-advisory`}
content = re.sub(r'href=\{`/services\?lang=\$\{lang\}#(.*?)`\}', r'href={`/${lang}/services#\1`}', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated site-chrome.tsx")
