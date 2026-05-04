from PIL import Image
import os

def resize_and_convert(input_path, output_path, size=(600, 900)):
    with Image.open(input_path) as img:
        # Resize using high-quality resampling
        img = img.resize(size, Image.LANCZOS)
        # Convert and save as WebP
        img.save(output_path, 'WEBP', quality=90)
    print(f"Successfully processed: {output_path}")

# Paths
base_path = "public/images/"
images_to_process = [
    ("Juliet-Yayra-Dzasi.jpg", "Juliet-Yayra-Dzasi.webp"),
    ("Juliet-Yayra-Dzasi-modal.jpg", "Juliet-Yayra-Dzasi-modal.webp")
]

for input_file, output_file in images_to_process:
    input_full = os.path.join(base_path, input_file)
    output_full = os.path.join(base_path, output_file)
    if os.path.exists(input_full):
        resize_and_convert(input_full, output_full)
    else:
        print(f"File not found: {input_full}")
