from PIL import Image

def process():
    output_path = 'src/assets/img/okro-new.webp'

    # Open existing image
    img = Image.open(output_path).convert("RGBA")
    
    # Crop transparent edges exactly just to be sure
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # Add 30% transparent padding so it doesn't look huge in the UI
    width, height = img.size
    new_width = int(width * 1.35)
    new_height = int(height * 1.35)
    
    # Create a new transparent image
    padded_img = Image.new("RGBA", (new_width, new_height), (255, 255, 255, 0))
    
    # Paste the original image into the center
    offset_x = (new_width - width) // 2
    offset_y = (new_height - height) // 2
    padded_img.paste(img, (offset_x, offset_y))

    padded_img.save(output_path, 'WEBP')
    print("Saved padded okro to", output_path)

if __name__ == '__main__':
    process()
