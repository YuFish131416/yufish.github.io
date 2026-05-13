#!/usr/bin/env python3
"""
Cheatpaper Generator (Print Style)
For CS5187 and CS5294 - formal/printed style cheatpapers with:
- Multi-column layout (3-col or 4-col)
- LXGW WenKai font (楷体风格)
- Blue bold headings
- Tables with borders, code blocks with background
- Maximized content density (exactly 2 pages)
"""

import sys
import os
import re
import markdown
import latex2mathml.converter
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

FONT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts", "LXGWWenKai-Regular.ttf")


def convert_latex_to_mathml(text):
    """Convert $...$ (inline) and $$...$$ (block) LaTeX to MathML before markdown processing."""
    # Block math: $$...$$
    def replace_block(m):
        latex = m.group(1).strip()
        try:
            mathml = latex2mathml.converter.convert(latex)
            # Change display="inline" to display="block"
            mathml = mathml.replace('display="inline"', 'display="block"')
            return '\n\n' + mathml + '\n\n'
        except Exception:
            return m.group(0)

    # Inline math: $...$  (but not $$)
    def replace_inline(m):
        latex = m.group(1).strip()
        try:
            return latex2mathml.converter.convert(latex)
        except Exception:
            return m.group(0)

    # Process block math first (greedy $$...$$)
    text = re.sub(r'\$\$([\s\S]+?)\$\$', replace_block, text)
    # Then inline math ($...$), avoiding empty matches
    text = re.sub(r'(?<!\$)\$([^\$\n]+?)\$(?!\$)', replace_inline, text)

    # Also handle \rightarrow, \oplus etc. that appear outside of math delimiters
    # These are sometimes used inline without $ wrappers in the source
    text = re.sub(r'\\rightarrow', '→', text)
    text = re.sub(r'\\leftarrow', '←', text)
    text = re.sub(r'\\oplus', '⊕', text)
    text = re.sub(r'\\times', '×', text)
    text = re.sub(r'\\bmod', ' mod ', text)

    return text

def md_to_html_content(md_path):
    """Read markdown file and convert to HTML, stripping unnecessary sections."""
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Convert LaTeX math to MathML before markdown processing
    content = convert_latex_to_mathml(content)

    # Convert markdown to HTML with tables extension
    extensions = ['tables', 'fenced_code', 'codehilite']
    html_content = markdown.markdown(content, extensions=extensions)

    return html_content

def generate_css(columns, font_size_pt):
    """Generate CSS for the cheatpaper layout."""
    # Column gap scales with number of columns
    col_gap = "6px" if columns == 4 else "8px"

    css = f"""
@font-face {{
    font-family: 'LXGWWenKai';
    src: url('file://{FONT_PATH}') format('truetype');
    font-weight: normal;
    font-style: normal;
}}

@page {{
    size: A4;
    margin: 4mm 4mm 4mm 4mm;
}}

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

body {{
    font-family: 'LXGWWenKai', 'Songti SC', serif;
    font-size: {font_size_pt}pt;
    line-height: 1.15;
    column-count: {columns};
    column-gap: {col_gap};
    column-rule: 0.3px solid #ccc;
    orphans: 2;
    widows: 2;
    color: #1a1a1a;
}}

h1 {{
    font-size: {font_size_pt + 1.5}pt;
    color: #0056b3;
    font-weight: bold;
    margin: 2px 0 1px 0;
    padding-bottom: 0.5px;
    border-bottom: 0.5px solid #0056b3;
    column-span: all;
    line-height: 1.3;
}}

h2 {{
    font-size: {font_size_pt + 1}pt;
    color: #0056b3;
    font-weight: bold;
    margin: 2px 0 1px 0;
    padding-bottom: 0.5px;
    border-bottom: 0.3px solid #0056b3;
    line-height: 1.2;
    break-after: avoid;
}}

h3 {{
    font-size: {font_size_pt + 0.5}pt;
    color: #0056b3;
    font-weight: bold;
    margin: 1.5px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

h4 {{
    font-size: {font_size_pt}pt;
    color: #0056b3;
    font-weight: bold;
    margin: 1px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

h5, h6 {{
    font-size: {font_size_pt}pt;
    color: #0056b3;
    font-weight: bold;
    margin: 1px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

p {{
    margin: 0.5px 0;
    text-align: justify;
    line-height: 1.15;
}}

strong {{
    font-weight: bold;
}}

em {{
    font-style: italic;
}}

ul, ol {{
    margin: 0.5px 0;
    padding-left: 10px;
}}

li {{
    margin: 0.3px 0;
    line-height: 1.15;
}}

table {{
    width: 100%;
    border-collapse: collapse;
    margin: 1px 0;
    font-size: {font_size_pt - 0.5}pt;
    break-inside: avoid;
}}

th, td {{
    border: 0.3px solid #666;
    padding: 0.5px 2px;
    text-align: left;
    line-height: 1.15;
}}

th {{
    background-color: #e8f0fe;
    font-weight: bold;
}}

code {{
    font-family: 'Menlo', 'Monaco', monospace;
    font-size: {font_size_pt - 1}pt;
    background-color: #f5f5f5;
    padding: 0 1px;
    border-radius: 1px;
}}

pre {{
    background-color: #f5f5f5;
    padding: 2px 3px;
    margin: 1px 0;
    border-radius: 2px;
    overflow: hidden;
    font-size: {font_size_pt - 1.5}pt;
    line-height: 1.1;
    white-space: pre-wrap;
    word-wrap: break-word;
}}

pre code {{
    background: none;
    padding: 0;
}}

blockquote {{
    border-left: 1.5px solid #0056b3;
    padding-left: 4px;
    margin: 1px 0;
    color: #333;
    font-size: {font_size_pt - 0.3}pt;
}}

hr {{
    border: none;
    border-top: 0.3px solid #ccc;
    margin: 2px 0;
}}

/* Avoid page breaks inside important elements */
table, pre, blockquote {{
    break-inside: avoid;
}}

/* Remove the first h1 span-all if it causes issues */
h1:first-child {{
    column-span: none;
}}

/* MathML rendering */
math {{
    font-size: {font_size_pt}pt;
    vertical-align: middle;
}}

math[display="block"] {{
    display: block;
    text-align: center;
    margin: 1px 0;
}}

.math-display {{
    text-align: center;
    margin: 1px 0;
}}
"""
    return css


def generate_cheatpaper(md_path, output_path, columns=4, font_size_pt=5.5):
    """Generate a cheatpaper PDF from markdown content."""
    print(f"Generating {columns}-column cheatpaper: {output_path}")
    print(f"  Font size: {font_size_pt}pt")

    # Convert markdown to HTML
    html_content = md_to_html_content(md_path)

    # Generate CSS
    css_content = generate_css(columns, font_size_pt)

    # Build full HTML document
    full_html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <style>{css_content}</style>
</head>
<body>
{html_content}
</body>
</html>"""

    # Save intermediate HTML for debugging
    html_output = output_path.replace('.pdf', '.html')
    with open(html_output, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"  Saved intermediate HTML: {html_output}")

    # Generate PDF
    font_config = FontConfiguration()
    html_doc = HTML(string=full_html)
    css_doc = CSS(string=css_content, font_config=font_config)

    doc = html_doc.render(stylesheets=[css_doc], font_config=font_config)
    pages = len(doc.pages)
    print(f"  Generated {pages} pages")

    doc.write_pdf(output_path)
    print(f"  Saved PDF: {output_path}")

    return pages


def find_optimal_font_size(md_path, columns, target_pages=2, min_size=4.0, max_size=8.0):
    """Binary search for the font size that produces exactly target_pages pages."""
    print(f"\nSearching optimal font size for {columns}-column layout...")
    print(f"  Target: {target_pages} pages")

    font_config = FontConfiguration()

    low, high = min_size, max_size
    best_size = min_size

    for iteration in range(20):  # Max 20 iterations for binary search
        mid = (low + high) / 2

        html_content = md_to_html_content(md_path)
        css_content = generate_css(columns, mid)

        full_html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><style>{css_content}</style></head>
<body>{html_content}</body>
</html>"""

        html_doc = HTML(string=full_html)
        css_doc = CSS(string=css_content, font_config=font_config)
        doc = html_doc.render(stylesheets=[css_doc], font_config=font_config)
        pages = len(doc.pages)

        print(f"  Iteration {iteration+1}: size={mid:.2f}pt -> {pages} pages")

        if pages <= target_pages:
            best_size = mid
            low = mid
        else:
            high = mid

        # Stop when precision is sufficient
        if high - low < 0.05:
            break

    # Final check - make sure best_size gives exactly target_pages
    # Try slightly larger to maximize content density
    final_size = best_size
    print(f"  Optimal font size: {final_size:.2f}pt")
    return final_size


def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_cheatpaper_print.py <course>")
        print("  Supported courses: CS5187, CS5294")
        sys.exit(1)

    course = sys.argv[1].upper()
    supported = ['CS5187', 'CS5294']
    if course not in supported:
        print(f'{{"error": "Unsupported course: {course}", "hint": "Supported: {", ".join(supported)}"}}')
        sys.exit(1)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    md_path = os.path.join(base_dir, f"{course}_复习资料.md")

    if not os.path.exists(md_path):
        print(f'{{"error": "File not found: {md_path}", "hint": "Check that the markdown file exists"}}')
        sys.exit(1)

    if not os.path.exists(FONT_PATH):
        print(f'{{"error": "Font not found: {FONT_PATH}", "hint": "Download LXGWWenKai-Regular.ttf to fonts/"}}')
        sys.exit(1)

    # Generate both 3-column and 4-column versions
    for columns in [3, 4]:
        print(f"\n{'='*60}")
        print(f"Processing {course} - {columns}-column layout")
        print(f"{'='*60}")

        # Find optimal font size
        optimal_size = find_optimal_font_size(md_path, columns, target_pages=2)

        # Generate final PDF
        output_pdf = os.path.join(base_dir, f"{course}_cheatpaper_{columns}col.pdf")
        pages = generate_cheatpaper(md_path, output_pdf, columns=columns, font_size_pt=optimal_size)

        if pages != 2:
            print(f"  WARNING: Got {pages} pages instead of 2. Adjusting...")
            # If too many pages, reduce font size slightly
            if pages > 2:
                optimal_size -= 0.2
            else:
                optimal_size += 0.2
            pages = generate_cheatpaper(md_path, output_pdf, columns=columns, font_size_pt=optimal_size)
            print(f"  After adjustment: {pages} pages")

    print(f"\n✅ Done! Generated print-style cheatpapers for {course}")


if __name__ == '__main__':
    main()
