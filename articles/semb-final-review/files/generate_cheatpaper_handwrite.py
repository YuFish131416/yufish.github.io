#!/usr/bin/env python3
"""
Cheatpaper Generator (Handwrite Style)
For CS5293 - realistic handwriting style cheatpapers with:
- Multi-column layout (3-col or 4-col)
- Kose font (小赖字体 - realistic handwriting)
- Blue bold headings, bold content stays bold
- NO table borders, NO code block backgrounds, NO blockquote borders
- All elements use the same handwriting font
- Looks like a student wrote it by hand
"""

import sys
import os
import re
import markdown
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

FONT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts", "Kosefont-JP.ttf")


def _match_brace(s, start):
    """Find matching } for { at position start. Returns index of } or -1."""
    depth = 0
    for i in range(start, len(s)):
        if s[i] == '{':
            depth += 1
        elif s[i] == '}':
            depth -= 1
            if depth == 0:
                return i
    return -1


def _replace_cmd(s, cmd, fmt):
    """Replace \\cmd{content} with fmt(content), handling nested braces."""
    while True:
        idx = s.find(cmd + '{')
        if idx == -1:
            break
        brace_start = idx + len(cmd)
        brace_end = _match_brace(s, brace_start)
        if brace_end == -1:
            break
        inner = s[brace_start + 1:brace_end]
        s = s[:idx] + fmt(inner) + s[brace_end + 1:]
    return s


def _replace_cmd2(s, cmd, fmt):
    """Replace \\cmd{arg1}{arg2} with fmt(arg1, arg2), handling nested braces."""
    while True:
        idx = s.find(cmd + '{')
        if idx == -1:
            break
        b1_start = idx + len(cmd)
        b1_end = _match_brace(s, b1_start)
        if b1_end == -1:
            break
        arg1 = s[b1_start + 1:b1_end]
        rest = s[b1_end + 1:]
        if not rest.startswith('{'):
            break
        b2_end = _match_brace(rest, 0)
        if b2_end == -1:
            break
        arg2 = rest[1:b2_end]
        s = s[:idx] + fmt(arg1, arg2) + rest[b2_end + 1:]
    return s


def latex_to_unicode(latex, strict_braces=False):
    """Convert a LaTeX expression to readable Unicode text.
    If strict_braces=True, only match _{...} and ^{...} with explicit braces,
    not bare _x or ^x (avoids mangling code identifiers in Pass 3)."""
    s = latex

    greeks = {
        r'\alpha': 'α', r'\beta': 'β', r'\gamma': 'γ', r'\delta': 'δ',
        r'\epsilon': 'ε', r'\varepsilon': 'ε', r'\zeta': 'ζ', r'\eta': 'η',
        r'\theta': 'θ', r'\lambda': 'λ', r'\mu': 'μ', r'\nu': 'ν',
        r'\pi': 'π', r'\rho': 'ρ', r'\sigma': 'σ', r'\tau': 'τ',
        r'\phi': 'φ', r'\varphi': 'φ', r'\psi': 'ψ', r'\omega': 'ω',
        r'\Sigma': 'Σ', r'\Pi': 'Π', r'\Omega': 'Ω', r'\Delta': 'Δ',
        r'\Gamma': 'Γ', r'\Theta': 'Θ', r'\Lambda': 'Λ', r'\Phi': 'Φ',
    }
    for cmd, char in greeks.items():
        s = s.replace(cmd, char)

    symbols = {
        r'\rightarrow': '→', r'\leftarrow': '←', r'\Rightarrow': '⇒',
        r'\Leftarrow': '⇐', r'\leftrightarrow': '↔',
        r'\oplus': '⊕', r'\otimes': '⊗', r'\odot': '⊙', r'\times': '×', r'\cdot': '·',
        r'\bmod': ' mod ', r'\mod': ' mod ',
        r'\sum': '∑', r'\prod': '∏', r'\int': '∫',
        r'\infty': '∞', r'\approx': '≈', r'\neq': '≠', r'\equiv': '≡',
        r'\leq': '≤', r'\geq': '≥', r'\gg': '≫', r'\ll': '≪',
        r'\sim': '∼', r'\in': '∈', r'\notin': '∉', r'\subset': '⊂',
        r'\nabla': '∇', r'\partial': '∂', r'\forall': '∀', r'\exists': '∃',
        r'\log': 'log', r'\det': 'det', r'\min': 'min', r'\max': 'max',
        r'\arg': 'arg', r'\lim': 'lim', r'\exp': 'exp', r'\sin': 'sin',
        r'\cos': 'cos', r'\tan': 'tan',
        r'\mid': '|', r'\|': '‖', r'\vert': '|', r'\Vert': '‖',
        r'\ldots': '…', r'\cdots': '⋯', r'\dots': '…',
        r'\quad': '  ', r'\qquad': '    ', r'\,': ' ',
    }
    for cmd, char in symbols.items():
        s = s.replace(cmd, char)

    s = _replace_cmd(s, r'\mathrm', lambda x: x)
    s = _replace_cmd(s, r'\text', lambda x: x)
    s = _replace_cmd(s, r'\textbf', lambda x: x)
    s = _replace_cmd(s, r'\mathbf', lambda x: x)
    s = _replace_cmd(s, r'\mathcal', lambda x: x)
    s = _replace_cmd(s, r'\mathbb', lambda x: x)
    s = _replace_cmd(s, r'\operatorname', lambda x: x)
    s = _replace_cmd(s, r'\boldsymbol', lambda x: x)
    s = _replace_cmd(s, r'\sqrt', lambda x: '√(' + x + ')')
    s = _replace_cmd2(s, r'\frac', lambda a, b: '(' + a + ')/(' + b + ')')

    s = re.sub(r'\\begin\{[bp]?matrix\}(.*?)\\end\{[bp]?matrix\}',
               lambda m: '[' + m.group(1).replace('\\\\', '; ').replace('&', ', ') + ']',
               s, flags=re.DOTALL)

    sup_map = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
        '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
        'n': 'ⁿ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ',
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
        'T': 'ᵀ', '+': '⁺', '-': '⁻', '*': '*',
    }
    def replace_sup(m):
        content = m.group(1) if m.group(1) else m.group(2)
        if all(c in sup_map for c in content):
            return ''.join(sup_map[c] for c in content)
        return '^(' + content + ')'
    if strict_braces:
        s = re.sub(r'\^\{([^}]*)\}', replace_sup, s)
        s = re.sub(r'\^([0-9]+)', replace_sup, s)
    else:
        s = re.sub(r'\^\{([^}]*)\}|\^([a-zA-Z0-9+\-])', replace_sup, s)

    sub_map = {
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅',
        '6': '₆', '7': '₇', '8': '₈', '9': '₉',
        'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'n': 'ₙ', 'm': 'ₘ',
        'x': 'ₓ', 'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'r': 'ᵣ',
        'p': 'ₚ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ',
        '+': '₊', '-': '₋',
    }
    def replace_sub(m):
        content = m.group(1) if m.group(1) else m.group(2)
        if all(c in sub_map for c in content):
            return ''.join(sub_map[c] for c in content)
        return '_(' + content + ')'
    if strict_braces:
        s = re.sub(r'_\{([^}]*)\}', replace_sub, s)
    else:
        s = re.sub(r'_\{([^}]*)\}|_([a-zA-Z0-9])', replace_sub, s)

    s = re.sub(r'\\left\s*([(\[|{.])', r'\1', s)
    s = re.sub(r'\\right\s*([)\]|}.])', r'\1', s)
    s = s.replace(r'\left', '').replace(r'\right', '')
    s = re.sub(r'\\[a-zA-Z]+', '', s)
    s = s.replace('{', '').replace('}', '')
    s = re.sub(r'  +', ' ', s).strip()

    return s


def convert_latex_in_text(text):
    """Convert $...$ (inline) and $$...$$ (block) LaTeX to Unicode in markdown text."""
    def replace_block(m):
        return '\n\n' + latex_to_unicode(m.group(1)) + '\n\n'

    def replace_inline(m):
        return latex_to_unicode(m.group(1))

    text = re.sub(r'\$\$([\s\S]+?)\$\$', replace_block, text)
    text = re.sub(r'(?<!\$)\$([^\$\n]+?)\$(?!\$)', replace_inline, text)

    # Pass 3: Handle bare LaTeX outside of $ delimiters
    lines = text.split('\n')
    in_code_block = False
    for i, line in enumerate(lines):
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if re.search(r'\\[a-zA-Z]+|_\{[^}]+\}|\^\{[^}]+\}|\^[0-9]', line):
            lines[i] = latex_to_unicode(line, strict_braces=True)
    text = '\n'.join(lines)

    return text

def md_to_html_content(md_path):
    """Read markdown file and convert to HTML."""
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Convert LaTeX math to Unicode before markdown processing
    content = convert_latex_in_text(content)

    # Convert markdown to HTML with tables extension
    extensions = ['tables', 'fenced_code']
    html_content = markdown.markdown(content, extensions=extensions)

    return html_content

def generate_css(columns, font_size_pt):
    """Generate CSS for handwriting-style cheatpaper - no table borders, no code styling, no blockquote borders."""
    col_gap = "6px" if columns == 4 else "8px"

    css = f"""
@font-face {{
    font-family: 'KoseFont';
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
    font-family: 'KoseFont', 'Hiragino Sans GB', sans-serif;
    font-size: {font_size_pt}pt;
    line-height: 1.2;
    column-count: {columns};
    column-gap: {col_gap};
    column-rule: none;
    orphans: 2;
    widows: 2;
    color: #1a1a1a;
}}

/* === HEADINGS: Black + Bold === */
h1 {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt + 1.5}pt;
    color: #1a1a1a;
    font-weight: bold;
    margin: 2px 0 1px 0;
    line-height: 1.3;
}}

h2 {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt + 1}pt;
    color: #1a1a1a;
    font-weight: bold;
    margin: 2px 0 1px 0;
    line-height: 1.2;
    break-after: avoid;
}}

h3 {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt + 0.5}pt;
    color: #1a1a1a;
    font-weight: bold;
    margin: 1.5px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

h4 {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt}pt;
    color: #1a1a1a;
    font-weight: bold;
    margin: 1px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

h5, h6 {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt}pt;
    color: #1a1a1a;
    font-weight: bold;
    margin: 1px 0 0.5px 0;
    line-height: 1.2;
    break-after: avoid;
}}

/* === BODY TEXT: Same handwriting font everywhere === */
p {{
    margin: 0.5px 0;
    line-height: 1.2;
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
    line-height: 1.2;
}}

/* === TABLES: NO borders, NO background — just indented text === */
table {{
    width: 100%;
    border-collapse: collapse;
    margin: 1px 0;
    font-size: {font_size_pt}pt;
    border: none;
}}

th, td {{
    border: none;
    padding: 0.3px 3px;
    text-align: left;
    line-height: 1.2;
    font-family: 'KoseFont', sans-serif;
}}

th {{
    background: none;
    font-weight: bold;
    border-bottom: 0.3px solid #999;
}}

/* === CODE: Same font, no background, no monospace === */
code {{
    font-family: 'KoseFont', sans-serif;
    font-size: {font_size_pt}pt;
    background: none;
    padding: 0;
    border: none;
}}

pre {{
    font-family: 'KoseFont', sans-serif;
    background: none;
    padding: 1px 0;
    margin: 0.5px 0;
    border: none;
    font-size: {font_size_pt}pt;
    line-height: 1.2;
    white-space: pre-wrap;
    word-wrap: break-word;
}}

pre code {{
    font-family: 'KoseFont', sans-serif;
    background: none;
    padding: 0;
    font-size: {font_size_pt}pt;
}}

/* === BLOCKQUOTE: No left border, just slight indent === */
blockquote {{
    border: none;
    padding-left: 6px;
    margin: 0.5px 0;
    color: #333;
    font-size: {font_size_pt}pt;
}}

/* === HR: Very subtle or invisible === */
hr {{
    border: none;
    border-top: 0.2px solid #ddd;
    margin: 1.5px 0;
}}

/* No break-inside for tables since they look like plain text now */
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

    final_size = best_size
    print(f"  Optimal font size: {final_size:.2f}pt")
    return final_size


def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_cheatpaper_handwrite.py <course>")
        print("  Supported courses: CS5293")
        sys.exit(1)

    course = sys.argv[1].upper()
    supported = ['CS5293']
    if course not in supported:
        print(f'{{"error": "Unsupported course: {course}", "hint": "Supported: {", ".join(supported)}"}}')
        sys.exit(1)

    base_dir = os.path.dirname(os.path.abspath(__file__))
    md_path = os.path.join(base_dir, f"{course}_复习资料.md")

    if not os.path.exists(md_path):
        print(f'{{"error": "File not found: {md_path}", "hint": "Check that the markdown file exists"}}')
        sys.exit(1)

    if not os.path.exists(FONT_PATH):
        print(f'{{"error": "Font not found: {FONT_PATH}", "hint": "Download Kosefont-JP.ttf to fonts/"}}')
        sys.exit(1)

    # Generate both 3-column and 4-column versions
    for columns in [3, 4]:
        print(f"\n{'='*60}")
        print(f"Processing {course} - {columns}-column layout (handwrite style)")
        print(f"{'='*60}")

        # Find optimal font size
        optimal_size = find_optimal_font_size(md_path, columns, target_pages=2)

        # Generate final PDF
        output_pdf = os.path.join(base_dir, f"{course}_cheatpaper_{columns}col.pdf")
        pages = generate_cheatpaper(md_path, output_pdf, columns=columns, font_size_pt=optimal_size)

        if pages != 2:
            print(f"  WARNING: Got {pages} pages instead of 2. Adjusting...")
            if pages > 2:
                optimal_size -= 0.2
            else:
                optimal_size += 0.2
            pages = generate_cheatpaper(md_path, output_pdf, columns=columns, font_size_pt=optimal_size)
            print(f"  After adjustment: {pages} pages")

    print(f"\n✅ Done! Generated handwrite-style cheatpapers for {course}")


if __name__ == '__main__':
    main()
