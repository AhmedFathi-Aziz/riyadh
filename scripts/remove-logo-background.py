"""Remove light grey/off-white background from ManzilCare logo PNG."""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 10:
        return True
    # Light neutral backdrop (grey, off-white, checkerboard whites)
    luminance = 0.299 * r + 0.587 * g + 0.114 * b
    max_c = max(r, g, b)
    min_c = min(r, g, b)
    chroma = max_c - min_c
    if luminance >= 235 and chroma <= 28:
        return True
    if luminance >= 220 and chroma <= 18:
        return True
    # Soft grey panel behind text
    if luminance >= 200 and chroma <= 22 and abs(r - g) <= 12 and abs(g - b) <= 12:
        return True
    return False


def remove_fringe(img: Image.Image) -> Image.Image:
    """Soften leftover light-grey halos around the artwork."""
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            luminance = 0.299 * r + 0.587 * g + 0.114 * b
            if luminance >= 190 and a < 255:
                pixels[x, y] = (r, g, b, 0)
            elif luminance >= 210 and a < 240:
                pixels[x, y] = (r, g, b, int(a * 0.35))
    return img


def remove_background(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_background(r, g, b, a):
                pixels[x, y] = (r, g, b, 0)
    img = remove_fringe(img)
    # Trim fully transparent border (optional, small padding kept)
    bbox = img.getbbox()
    if bbox:
        pad = 8
        left = max(0, bbox[0] - pad)
        top = max(0, bbox[1] - pad)
        right = min(w, bbox[2] + pad)
        bottom = min(h, bbox[3] + pad)
        img = img.crop((left, top, right, bottom))
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, format="PNG", optimize=True)
    print(f"Saved {dest} ({img.size[0]}x{img.size[1]})")


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else root / "assets" / "logo-source.png"
    dest = Path(sys.argv[2]) if len(sys.argv) > 2 else root / "public" / "images" / "manzilcare-logo.png"
    remove_background(src, dest)
