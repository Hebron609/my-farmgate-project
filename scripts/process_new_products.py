from rembg import remove, new_session
from PIL import Image
import io

def process_img(input_path, output_path):
    print(f"Loading u2netp session for {output_path}...")
    session = new_session("u2netp")

    print(f"Reading image {input_path}...")
    with open(input_path, 'rb') as i:
        input_data = i.read()

    print("Removing background...")
    output_data = remove(input_data, session=session)

    print("Converting to WEBP and padding...")
    img = Image.open(io.BytesIO(output_data)).convert("RGBA")
    
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    width, height = img.size
    new_width = int(width * 1.3)
    new_height = int(height * 1.3)
    
    padded_img = Image.new("RGBA", (new_width, new_height), (255, 255, 255, 0))
    offset_x = (new_width - width) // 2
    offset_y = (new_height - height) // 2
    padded_img.paste(img, (offset_x, offset_y))

    padded_img.save(output_path, 'WEBP', quality=100)
    print("Saved to", output_path)

if __name__ == '__main__':
    pineapple_input = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/pineapple_cut_1788771638452.jpg'
    pineapple_output = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/pineapple-new.webp'
    process_img(pineapple_input, pineapple_output)
    
    sweet_potato_input = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/sweet_potatoes_1788771652067.jpg'
    sweet_potato_output = '/Users/CEO/Desktop/my-farmgate-project/src/assets/img/sweet-potatoes.webp'
    process_img(sweet_potato_input, sweet_potato_output)
