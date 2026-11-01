from rembg import remove, new_session
from PIL import Image
import io

def process():
    input_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/cabbage.webp'
    output_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/cabbage.webp'

    print("Loading u2netp session...")
    session = new_session("u2netp")

    print("Reading image...")
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background...")
    # Remove background using rembg
    output_data = remove(input_data, session=session)

    print("Converting to WEBP...")
    # Convert to PIL Image
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    # Crop transparent edges exactly
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # Add 25% transparent padding so it doesn't look huge in the UI
    width, height = img.size
    new_width = int(width * 1.25)
    new_height = int(height * 1.25)
    
    # Create a new transparent image
    padded_img = Image.new("RGBA", (new_width, new_height), (255, 255, 255, 0))
    
    # Paste the original image into the center
    offset_x = (new_width - width) // 2
    offset_y = (new_height - height) // 2
    padded_img.paste(img, (offset_x, offset_y))

    padded_img.save(output_path, 'WEBP', quality=100)
    print("Saved to", output_path)

if __name__ == '__main__':
    process()
