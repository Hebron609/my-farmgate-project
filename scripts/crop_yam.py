from PIL import Image

def process():
    input_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/yam-temp.webp'
    output_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/cassava-new.webp'

    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # We want to crop out the left and right small tubers.
    # Let's crop from x=190 to x=width-150
    left_crop = 180
    right_crop = width - 160
    
    img = img.crop((left_crop, 0, right_crop, height))
    
    # Crop transparent edges exactly again
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # Add 30% transparent padding so it doesn't look huge in the UI
    w, h = img.size
    new_w = int(w * 1.3)
    new_h = int(h * 1.3)
    
    padded_img = Image.new("RGBA", (new_w, new_h), (255, 255, 255, 0))
    offset_x = (new_w - w) // 2
    offset_y = (new_h - h) // 2
    padded_img.paste(img, (offset_x, offset_y))

    padded_img.save(output_path, 'WEBP')
    print("Saved to", output_path)

if __name__ == '__main__':
    process()
