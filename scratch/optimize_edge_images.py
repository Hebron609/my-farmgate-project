from PIL import Image
import os

def convert_to_webp(input_path):
    output_path = os.path.splitext(input_path)[0] + ".webp"
    with Image.open(input_path) as img:
        img.save(output_path, 'WEBP', quality=90)
    print(f"Successfully converted: {output_path}")

# Assets to process
assets_dir = "src/assets/img/"
images_to_process = [
    "future-innovations.jpg",
    "farm-pic4.jpg",
    "enduring-partnership.jpg",
    "agri-processing.jpg",
    "farm-pic1.jpg"
]

for image_file in images_to_process:
    input_full = os.path.join(assets_dir, image_file)
    if os.path.exists(input_full):
        convert_to_webp(input_full)
    else:
        print(f"File not found: {input_full}")
