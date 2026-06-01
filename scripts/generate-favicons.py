"""Generate circular favicon / PWA icons — رمز كبير وواضح داخل الدائرة."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "public" / "images" / "manzilcare-logo.png"
TAB_SOURCE = ROOT / "public" / "images" / "manzilcare-tab-icon-source.png"

TAB_BG = (248, 249, 255, 255)
GRAPHIC_HEIGHT_RATIO = 0.54
# نسبة ملء الدائرة بالرمز (أعلى = أكبر وأوضح في التبويب)
FILL_RATIO = 0.94


def extract_graphic_mark(logo: Image.Image) -> Image.Image:
    """قصّ الرمز فقط ثم مربّع بملء كامل (بدون فراغات جانبية)."""
    w, h = logo.size
    top = logo.crop((0, 0, w, int(h * GRAPHIC_HEIGHT_RATIO)))
    bbox = top.getbbox()
    if bbox:
        top = top.crop(bbox)

    tw, th = top.size
    side = max(tw, th)
    scale = side / min(tw, th)
    new_w = round(tw * scale)
    new_h = round(th * scale)
    resized = top.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - side) // 2
    upper = (new_h - side) // 2
    return resized.crop((left, upper, left + side, upper + side))


def fit_cover(mark: Image.Image, size: int) -> Image.Image:
    """تكبير الرمز ليملأ المربع بالكامل (مثل object-fit: cover)."""
    tw, th = mark.size
    scale = size / min(tw, th)
    new_w = round(tw * scale)
    new_h = round(th * scale)
    resized = mark.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - size) // 2
    upper = (new_h - size) // 2
    return resized.crop((left, upper, left + size, upper + size))


def circular_icon(mark: Image.Image, px: int) -> Image.Image:
    inner = max(16, round(px * FILL_RATIO))
    graphic = fit_cover(mark, inner)
    if px >= 32:
        graphic = graphic.filter(
            ImageFilter.UnsharpMask(radius=0.8, percent=110, threshold=1),
        )

    bg = Image.new("RGBA", (px, px), TAB_BG)
    offset = (px - inner) // 2
    bg.paste(graphic, (offset, offset), graphic)

    mask = Image.new("L", (px, px), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, px - 1, px - 1), fill=255)

    out = Image.new("RGBA", (px, px), (0, 0, 0, 0))
    out.paste(bg, (0, 0), mask)
    return out


def load_mark() -> Image.Image:
    source = TAB_SOURCE if TAB_SOURCE.exists() else LOGO
    return extract_graphic_mark(Image.open(source).convert("RGBA"))


def main() -> None:
    mark = load_mark()

    outputs = [
        (128, ROOT / "src" / "app" / "icon.png"),
        (180, ROOT / "src" / "app" / "apple-icon.png"),
        (192, ROOT / "public" / "images" / "icon-192.png"),
        (512, ROOT / "public" / "images" / "icon-512.png"),
    ]
    for px, path in outputs:
        circular_icon(mark, px).save(path, optimize=True)
        print(f"Wrote {path}")

    ico_sizes = [16, 32, 48]
    ico_images = [circular_icon(mark, s) for s in ico_sizes]
    for dest in (
        ROOT / "src" / "app" / "favicon.ico",
        ROOT / "public" / "favicon.ico",
    ):
        ico_images[0].save(
            dest,
            format="ICO",
            sizes=[(s, s) for s in ico_sizes],
            append_images=ico_images[1:],
        )
        print(f"Wrote {dest}")


if __name__ == "__main__":
    main()
