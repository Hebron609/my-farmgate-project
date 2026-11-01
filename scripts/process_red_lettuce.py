from rembg import remove, new_session
from PIL import Image, ImageEnhance
import io

def process():
    input_path = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/.user_uploaded/media_1788768124108.png'
    output_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/red-lettuce.webp'

    print("Loading u2netp session...")
    session = new_session("u2netp")

    print("Reading image...")
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background...")
    # Remove background using rembg
    output_data = remove(input_data, session=session)

    print("Enhancing image...")
    # Convert to PIL Image
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    # Enhance Sharpness
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.3)
    
    # Enhance Contrast slightly
    enhancer_contrast = ImageEnhance.Contrast(img)
    img = enhancer_contrast.enhance(1.05)

    # Enhance Color slightly
    enhancer_color = ImageEnhance.Color(img)
    img = enhancer_color.enhance(1.1)
    
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
