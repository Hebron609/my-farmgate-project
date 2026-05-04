from PIL import Image
import os

def resize_and_convert(input_path, output_path, size=(600, 900)):
    with Image.open(input_path) as img:
        img = img.resize(size, Image.LANCZOS)
        img.save(output_path, 'WEBP', quality=90)
    print(f"Successfully processed: {output_path}")

base_path = "public/images/"
# Processing Nelson's images and fixing filenames
images_to_process = [
    ("nelson modal.webp", "nelson-modal.webp"),
    ("nelson.webp", "nelson.webp")
]

for input_file, output_file in images_to_process:
    input_full = os.path.join(base_path, input_file)
    output_full = os.path.join(base_path, output_file)
    if os.path.exists(input_full):
        resize_and_convert(input_full, output_full)
    else:
        print(f"File not found: {input_full}")
