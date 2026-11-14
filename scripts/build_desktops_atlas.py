"""Build src/assets/textures/desktops.webp from the two screen designs.

The screen meshes in room.glb sample one shared atlas (see
src/three/objects/room/desktops.ts). design-sources/port.glb (exported from
Blender) maps each design onto its screen with UVs in 0..1. This script
matches vertices between both GLBs, fits the affine UV mapping, and places
each design where the room.glb UVs expect it, so the screens look the same
as in Blender.

Only the right monitor (desktop-plane-0) gets a new design. The left monitor
keeps the original template texture (including its message pop-up overlay),
taken from design-sources/desktops/original-desktops.webp.

Usage: python scripts/build_desktops_atlas.py
"""
import json
import struct
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ROOM_GLB = ROOT / "src/assets/models/room.glb"
PORT_GLB = ROOT / "design-sources/port.glb"
OUT = ROOT / "src/assets/textures/desktops.webp"
ORIGINAL = ROOT / "design-sources/desktops/original-desktops.webp"
SIZE = 2048

# mesh name in room.glb -> design image (right monitor = desktop-plane-0)
SCREENS = {
    "desktop-plane-0": ROOT / "design-sources/desktops/right-screen.png",
}


def read_glb(path):
    data = path.read_bytes()
    json_len = struct.unpack_from("<I", data, 12)[0]
    gltf = json.loads(data[20 : 20 + json_len])
    bin_start = 20 + json_len + 8
    return gltf, data, bin_start


def accessor(gltf, data, bin_start, index):
    acc = gltf["accessors"][index]
    view = gltf["bufferViews"][acc["bufferView"]]
    comps = {"VEC2": 2, "VEC3": 3}[acc["type"]]
    offset = bin_start + view.get("byteOffset", 0) + acc.get("byteOffset", 0)
    flat = struct.unpack_from(f"<{acc['count'] * comps}f", data, offset)
    return [tuple(flat[i : i + comps]) for i in range(0, len(flat), comps)]


def mesh_data(path, name):
    gltf, data, bin_start = read_glb(path)
    node = next(n for n in gltf["nodes"] if n.get("name") == name)
    prim = gltf["meshes"][node["mesh"]]["primitives"][0]
    pos = accessor(gltf, data, bin_start, prim["attributes"]["POSITION"])
    uv = accessor(gltf, data, bin_start, prim["attributes"]["TEXCOORD_0"])
    return pos, uv


def fit_axis(old, new):
    """Least-squares fit new = a * old + b."""
    n = len(old)
    mx, my = sum(old) / n, sum(new) / n
    a = sum((x - mx) * (y - my) for x, y in zip(old, new)) / sum((x - mx) ** 2 for x in old)
    return a, my - a * mx


def design_rect(name):
    """Atlas rect (u0, v0, u1, v1) where the design's 0..1 UV square lands."""
    old_pos, old_uv = mesh_data(ROOM_GLB, name)
    new_pos, new_uv = mesh_data(PORT_GLB, name)
    pairs = []
    for p, uv in zip(old_pos, old_uv):
        match = min(range(len(new_pos)), key=lambda i: sum((a - b) ** 2 for a, b in zip(p, new_pos[i])))
        pairs.append((uv, new_uv[match]))
    au, bu = fit_axis([o[0] for o, _ in pairs], [n[0] for _, n in pairs])
    av, bv = fit_axis([o[1] for o, _ in pairs], [n[1] for _, n in pairs])
    # invert new = a * old + b at new = 0 and new = 1
    return (-bu / au, -bv / av, (1 - bu) / au, (1 - bv) / av)


def main():
    atlas = Image.open(ORIGINAL).convert("RGBA").resize((SIZE, SIZE), Image.LANCZOS)
    for name, image_path in SCREENS.items():
        u0, v0, u1, v1 = design_rect(name)
        print(f"{name}: u {u0:.4f}..{u1:.4f}  v {v0:.4f}..{v1:.4f}")
        design = Image.open(image_path).convert("RGBA")
        x0, y0, x1, y1 = (round(c * SIZE) for c in (u0, v0, u1, v1))
        # bleed: fill the whole screen cell with the design's edge colour so
        # the bevel vertices outside the rect never sample empty pixels
        cell_x0 = 0 if name.endswith("0") else SIZE // 2
        edge = design.getpixel((design.width // 2, design.height - 2))
        atlas.paste(Image.new("RGBA", (SIZE // 2, round(SIZE * 0.36)), edge), (cell_x0, 0))
        # each screen owns one half of the atlas; clip so neighbours never overlap
        cell = Image.new("RGBA", (SIZE // 2, SIZE), (0, 0, 0, 0))
        cell.paste(design.resize((x1 - x0, y1 - y0), Image.LANCZOS), (x0 - cell_x0, y0))
        atlas.alpha_composite(cell.crop((0, 0, SIZE // 2, round(SIZE * 0.36))), (cell_x0, 0))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    atlas.save(OUT, "WEBP", quality=90, method=6)
    print("wrote", OUT, OUT.stat().st_size, "bytes")


if __name__ == "__main__":
    main()
