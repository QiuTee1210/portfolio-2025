"""Generate the site logo (isometric cube with a mark on its right face).

The logo is one SVG path in a 56x61 viewBox (index.html #logo-path, also used
by Logo.vue and the preloader). The mark is drawn in a unit square and mapped
onto the cube's right face, so it follows the isometric perspective.

usage: python scripts/build_logo.py [qt|pen]   -> prints the path data
"""
import sys

# Cube silhouette from the original template: outer hexagon, hollow top face,
# hollow right face (fill-rule: evenodd).
CUBE = (
    "M3 14 24 2C28 0 28 0 32 2L53 14C56 16 56 17 56 19L56 43C56 46 55 47 51 49L32 59C28 61 28 61 24 59L5 49C1 47 0 46 0 43L0 19C0 17 0 16 3 14Z"
    "M28 4 5 17 28 28 51 17 28 4Z"
    "M53 20 30 31 30 56 53 44 53 20Z"
)


def face(u, v):
    """Unit square (u right, v down) -> right face of the cube."""
    return (30 + 23 * u, 31 - 11.5 * u + 25 * v)


def fmt(p):
    return f"{p[0]:.2f} {p[1]:.2f}"


def poly(points):
    pts = [face(u, v) for u, v in points]
    return "M" + " ".join(fmt(p) for p in pts) + "Z"


def circle(cu, cv, r, n=16):
    import math
    return poly([(cu + r * math.cos(2 * math.pi * i / n), cv + r * math.sin(2 * math.pi * i / n)) for i in range(n)])


def pen():
    """Pen-tool nib (the vector pen of Illustrator) with a slit and a hole."""
    nib = poly([(0.24, 0.20), (0.76, 0.20), (0.76, 0.34), (0.86, 0.50), (0.50, 0.92), (0.14, 0.50), (0.24, 0.34)])
    hole = circle(0.50, 0.52, 0.09)
    slit = poly([(0.48, 0.60), (0.52, 0.60), (0.52, 0.90), (0.48, 0.90)])
    cap = poly([(0.20, 0.08), (0.80, 0.08), (0.80, 0.14), (0.20, 0.14)])
    return nib + hole + slit + cap


def qt():
    """Q and T monogram."""
    import math
    n = 24
    outer = [(0.30 + 0.20 * math.cos(2 * math.pi * i / n), 0.50 + 0.30 * math.sin(2 * math.pi * i / n)) for i in range(n)]
    inner = [(0.30 + 0.11 * math.cos(2 * math.pi * i / n), 0.50 + 0.19 * math.sin(2 * math.pi * i / n)) for i in range(n)]
    q = poly(outer) + poly(inner) + poly([(0.36, 0.66), (0.44, 0.60), (0.56, 0.84), (0.48, 0.88)])
    t = poly([(0.58, 0.20), (0.92, 0.20), (0.92, 0.32), (0.81, 0.32), (0.81, 0.80), (0.69, 0.80), (0.69, 0.32), (0.58, 0.32)])
    return q + t




def rasterize(d, size, color=(0xFF, 0x92, 0x3E), pad=(-2, -1, 60, 63)):
    """Render path data (M/L/C/Z, implicit L) to an RGBA image, even-odd fill."""
    import re
    from PIL import Image, ImageChops, ImageDraw

    scale = 8
    big = size * scale
    vx, vy, vw, vh = pad
    tok = re.findall(r"[MLCZ]|-?\d*\.?\d+", d)
    subpaths, cur, cmd, i = [], [], None, 0
    pos = (0.0, 0.0)
    while i < len(tok):
        t = tok[i]
        if t in "MLCZ":
            cmd = t
            i += 1
            if t == "Z":
                subpaths.append(cur)
                cur = []
            continue
        if cmd == "M":
            if cur:
                subpaths.append(cur)
            pos = (float(tok[i]), float(tok[i + 1]))
            cur = [pos]
            i += 2
            cmd = "L"
        elif cmd == "L":
            pos = (float(tok[i]), float(tok[i + 1]))
            cur.append(pos)
            i += 2
        elif cmd == "C":
            c1 = (float(tok[i]), float(tok[i + 1]))
            c2 = (float(tok[i + 2]), float(tok[i + 3]))
            p = (float(tok[i + 4]), float(tok[i + 5]))
            for k in range(1, 13):
                s = k / 12
                a = (1 - s) ** 3, 3 * (1 - s) ** 2 * s, 3 * (1 - s) * s * s, s**3
                cur.append(tuple(a[0] * pos[j] + a[1] * c1[j] + a[2] * c2[j] + a[3] * p[j] for j in range(2)))
            pos = p
            i += 6
    if cur:
        subpaths.append(cur)
    mask = Image.new("L", (big, big), 0)
    for sp in subpaths:
        layer = Image.new("L", (big, big), 0)
        pts = [((x - vx) / vw * big, (y - vy) / vh * big) for x, y in sp]
        ImageDraw.Draw(layer).polygon(pts, fill=255)
        mask = ImageChops.logical_xor(mask.convert("1"), layer.convert("1")).convert("L")
    mask = mask.resize((size, size), Image.LANCZOS)
    img = Image.new("RGBA", (size, size), color + (0,))
    img.putalpha(mask)
    return img


def write_favicons(d, meta_dir):
    from pathlib import Path

    meta = Path(meta_dir)
    rasterize(d, 96).save(meta / "favicon-96x96.png")
    rasterize(d, 256).save(meta / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    (meta / "favicon.svg").write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="-2 -1 60 63">'
        f'<path fill="#FF923E" fill-rule="evenodd" d="{d}"/></svg>\n',
        encoding="utf-8",
    )


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    d = CUBE + {"pen": pen, "qt": qt}[args[0] if args else "qt"]()
    print(d)
    if "--write" in sys.argv:
        from pathlib import Path

        write_favicons(d, Path(__file__).resolve().parent.parent / "public/meta")
