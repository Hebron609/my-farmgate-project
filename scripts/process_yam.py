from rembg import remove, new_session
from PIL import Image
import io

def process():
    input_path = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/three_cassavas_1788762836723.jpg'
    output_path = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/cassava-new.webp'

    print("Loading u2netp session...")
    session = new_session("u2netp")

    print("Reading image...")
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background...")
    output_data = remove(input_data, session=session)

    print("Converting to WEBP...")
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
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
