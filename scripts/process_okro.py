from PIL import Image

def process():
    img_path = '/Users/CEO/.gemini/antigravity-ide/brain/50e600f7-fbe0-47fd-bbd1-7b31b175da50/okro_organized_1788721450951.jpg'
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    print(f"Original size: {width}x{height}")
    
    data = list(img.getdata())
    
    # We will do a multi-pass or high-tolerance flood fill
    # A tolerance of 220 means any color where R>220, G>220, B>220 is considered background
    # Since shadows can be light grey (e.g., 200, 200, 200), we can lower the tolerance to 200.
    # But wait, if R>200, G>200, B>200, then light green might not be caught, which is good.
    tolerance = 195 
    visited = set()
    
    def is_bg(x, y):
        idx = y * width + x
        r, g, b, a = data[idx]
        # Calculate grayscale or just check if it's very light and relatively colorless
        return r > tolerance and g > tolerance and b > tolerance

    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    for start in queue:
        if is_bg(start[0], start[1]):
            visited.add(start)
            
    head = 0
    while head < len(queue):
        cx, cy = queue[head]
        head += 1
        for nx, ny in [(cx-1, cy), (cx+1, cy), (cx, cy-1), (cx, cy+1)]:
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in visited:
                    if is_bg(nx, ny):
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    final_data = []
    for y in range(height):
        for x in range(width):
            if (x, y) in visited:
                final_data.append((255, 255, 255, 0))
            else:
                # also we can feather the edges or just keep it hard
                final_data.append(data[y * width + x])
                
    img.putdata(final_data)
    
    # Crop transparent edges
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save('src/assets/img/okro-new.webp', 'WEBP')
    print("Saved to src/assets/img/okro-new.webp")

if __name__ == '__main__':
    process()
