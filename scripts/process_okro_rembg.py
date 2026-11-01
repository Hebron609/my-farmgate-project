from rembg import remove, new_session
from PIL import Image
import io

def process():
    input_path = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/okro_organized_1788721450951.jpg'
    output_path = 'src/assets/img/okro-new.webp'

    print("Loading u2netp session...")
    session = new_session("u2netp")

    print("Reading image...")
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background...")
    # Remove background using rembg
    output_data = remove(input_data, session=session)

    print("Converting to WEBP...")
    # Convert to WEBP and crop transparent edges
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    # Crop transparent edges
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, 'WEBP')
    print("Saved to", output_path)

if __name__ == '__main__':
    process()
