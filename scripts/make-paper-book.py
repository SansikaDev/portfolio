#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'papers'
FONTS = Path(__file__).resolve().parent / 'fonts'
OUT.mkdir(parents=True, exist_ok=True)

W, H = 800, 1200
PINE = (18, 20, 26)
BIRCH = (242, 243, 246)
COPPER = (226, 59, 26)
MOSS = (61, 90, 115)
SOFT = (247, 248, 250)
MUTED = (90, 96, 108)


def font(name: str, size: int):
    path = FONTS / name
    if path.exists():
        return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def display(size: int):
    return font('PlusJakartaSans-ExtraBold.ttf', size)


def body(size: int):
    return font('PlusJakartaSans-Regular.ttf', size)


def italic(size: int):
    return font('PlusJakartaSans-Italic.ttf', size)


def mono(size: int):
    return font('IBMPlexMono-Medium.ttf', size)


def wrap(draw, text, fnt, max_w):
    words = text.split()
    lines, row = [], ''
    for word in words:
        trial = f'{row} {word}'.strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            row = trial
        else:
            if row:
                lines.append(row)
            row = word
    if row:
        lines.append(row)
    return lines


def page(bg):
    img = Image.new('RGB', (W, H), bg)
    return img, ImageDraw.Draw(img)


def save(img, name):
    path = OUT / name
    img.save(path, 'JPEG', quality=92)
    print(path)


# Cover
img, d = page(PINE)
d.rectangle([40, 40, W - 40, H - 40], outline=BIRCH, width=1)
d.text((80, 130), 'SELECTED PAPERS', font=mono(16), fill=COPPER)
for i, line in enumerate(['Sansika', 'Kodithuwakku']):
    d.text((76, 240 + i * 86), line, font=display(72 if i == 0 else 68), fill=BIRCH)
d.rectangle([80, 440, 148, 444], fill=COPPER)
d.text((80, 480), 'Machine learning  ·  Retail analytics', font=body(22), fill=(197, 201, 209))
d.text((80, 960), 'IEEE ICAC 2024', font=mono(16), fill=BIRCH)
d.text((80, 996), 'Propulsion Technology 2023', font=mono(16), fill=(197, 201, 209))
d.text((80, 1088), '01  /  02', font=mono(16), fill=COPPER)
save(img, 'cover.jpg')

# IEEE title
img, d = page(SOFT)
d.rectangle([0, 0, 14, H], fill=COPPER)
d.text((64, 84), '01', font=mono(16), fill=COPPER)
d.text((64, 120), 'IEEE ICAC 2024', font=mono(15), fill=MOSS)
title = 'Improving Fake News Detection with a Mixture of Experts'
y = 200
for line in wrap(d, title, display(38), 640):
    d.text((64, y), line, font=display(38), fill=PINE)
    y += 52
d.text((64, y + 12), 'Sentiment and sarcasm as core expert models', font=italic(22), fill=MUTED)
d.rectangle([64, y + 68, 132,  y + 72], fill=COPPER)
d.text((64, y + 100), 'Sansika Kodithuwakku', font=body(22), fill=PINE)
d.text((64, H - 120), 'Conference paper', font=mono(15), fill=MUTED)
save(img, 'ieee-1.jpg')

# IEEE body
img, d = page(BIRCH)
d.rectangle([0, 0, 14, H], fill=PINE)
body_copy = (
    'Misinformation detection improves when sentiment and sarcasm are modelled explicitly. '
    'This thesis used them as core expert models in a Mixture-of-Experts design, then shipped '
    'the platform: web, browser extension, mobile, Docker microservices and a Jenkins pipeline.'
)
y = 120
for line in wrap(d, body_copy, body(26), 640):
    d.text((64, y), line, font=body(26), fill=PINE)
    y += 40
d.text((64, y + 48), 'DOI', font=mono(14), fill=COPPER)
d.text((64, y + 80), '10.1109/ICAC64487.2024.10851056', font=body(20), fill=PINE)
d.text((64, y + 150), 'STACK', font=mono(14), fill=COPPER)
d.text((64, y + 186), 'Python  ·  NestJS  ·  React', font=body(20), fill=PINE)
d.text((64, y + 222), 'Docker  ·  Jenkins  ·  extension', font=body(20), fill=PINE)
save(img, 'ieee-2.jpg')

# Retail title
img, d = page(SOFT)
d.rectangle([0, 0, 14, H], fill=MOSS)
d.text((64, 84), '02', font=mono(16), fill=COPPER)
d.text((64, 120), 'PROPULSION TECHNOLOGY', font=mono(15), fill=MOSS)
y = 200
for line in wrap(d, 'User Based Sale Optimization for Fashion Retail', display(38), 640):
    d.text((64, y), line, font=display(38), fill=PINE)
    y += 52
d.text((64, y + 16), 'Vol. 44, No. 5  ·  2023', font=italic(22), fill=MUTED)
d.rectangle([64, y + 70, 132, y + 74], fill=COPPER)
d.text((64, y + 104), 'Sansika Kodithuwakku', font=body(22), fill=PINE)
d.text((64, H - 120), 'Journal article', font=mono(15), fill=MUTED)
save(img, 'retail-1.jpg')

# Retail body
img, d = page(BIRCH)
d.rectangle([0, 0, 14, H], fill=COPPER)
body_copy = (
    'A retail-analytics study on sale optimisation from the shopper’s side - how user signals '
    'can steer what a fashion floor puts forward, instead of treating every visitor as the same ticket.'
)
y = 120
for line in wrap(d, body_copy, body(26), 640):
    d.text((64, y), line, font=body(26), fill=PINE)
    y += 40
d.text((64, y + 56), 'VENUE', font=mono(14), fill=COPPER)
d.text((64, y + 90), 'Propulsion Technology Journal', font=body(22), fill=PINE)
d.text((64, y + 160), 'THEME', font=mono(14), fill=COPPER)
d.text((64, y + 194), 'Fashion retail  ·  user signals', font=body(20), fill=PINE)
d.text((64, y + 230), 'Sale optimisation', font=body(20), fill=PINE)
save(img, 'retail-2.jpg')

# Back
img, d = page(PINE)
d.rectangle([40, 40, W - 40, H - 40], outline=BIRCH, width=1)
d.text((80, 170), 'Two papers.', font=display(44), fill=BIRCH)
d.text((80, 236), 'One desk.', font=italic(40), fill=COPPER)
d.text((80, 360), 'IEEE XPLORE', font=mono(14), fill=(197, 201, 209))
d.text((80, 396), 'doi.org/10.1109/ICAC64487.2024.10851056', font=body(18), fill=BIRCH)
d.text((80, 980), 'Sansika Kodithuwakku', font=body(22), fill=BIRCH)
d.text((80, 1024), 'Helsinki  ·  sansika.info', font=mono(15), fill=(197, 201, 209))
save(img, 'back.jpg')
