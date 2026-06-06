"""Generate favicon / PWA icons from the full ManzilCare logo (no crop, no circle)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "images" / "manzilcare-logo.png"

# Matches site background / theme (#f8f9ff)
ICON_BG = (248, 249, 255, 255)
PADDING_RATIO = 0.06


def load_full_logo() -> Image.Image:
    logo = Image.open(LOGO).convert("RGBA")
    bbox = logo.getbbox()
    if bbox:
        logo = logo.crop(bbox)
    return logo


def square_icon(logo: Image.Image, px: int) -> Image.Image:
    """Fit the entire logo inside a square canvas (object-fit: contain)."""
    padding = max(1, round(px * PADDING_RATIO))
    inner = px - 2 * padding

    lw, lh = logo.size
    scale = min(inner / lw, inner / lh)
    new_w = max(1, round(lw * scale))
    new_h = max(1, round(lh * scale))
    resized = logo.resize((new_w, new_h), Image.Resampling.LANCZOS)

    if px >= 48:
        resized = resized.filter(
            ImageFilter.UnsharpMask(radius=0.5, percent=90, threshold=2),
        )

    canvas = Image.new("RGBA", (px, px), ICON_BG)
    offset_x = (px - new_w) // 2
    offset_y = (px - new_h) // 2
    canvas.paste(resized, (offset_x, offset_y), resized)
    return canvas


def main() -> None:
    logo = load_full_logo()

    outputs = [
        (128, ROOT / "src" / "app" / "icon.png"),
        (180, ROOT / "src" / "app" / "apple-icon.png"),
        (192, ROOT / "public" / "images" / "icon-192.png"),
        (512, ROOT / "public" / "images" / "icon-512.png"),
    ]
    for px, path in outputs:
        square_icon(logo, px).save(path, optimize=True)
        print(f"Wrote {path}")

    ico_sizes = [16, 32, 48]
    ico_images = [square_icon(logo, s) for s in ico_sizes]
    # App Router only — public/favicon.ico conflicts with app/favicon.ico (Next.js 500).
    dest = ROOT / "src" / "app" / "favicon.ico"
    ico_images[0].save(
        dest,
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:],
    )
    print(f"Wrote {dest}")


if __name__ == "__main__":
    main()
