const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imageDirs = ['src/assets/img', 'public/images'];
const sourceDirs = ['src', 'public', '.'];

function getAllFiles(dirPath, extFilter) {
  let results = [];
  if (!fs.existsSync(dirPath)) return results;
  const list = fs.readdirSync(dirPath);
  list.forEach((file) => {
    file = path.join(dirPath, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      results = results.concat(getAllFiles(file, extFilter));
    } else {
      if (extFilter) {
        if (extFilter.test(file)) results.push(file);
      } else {
        results.push(file);
      }
    }
  });
  return results;
}

const imagesToProcess = [];
imageDirs.forEach(dir => {
  imagesToProcess.push(...getAllFiles(dir, /\.(png|jpe?g)$/i));
});

console.log(`Found ${imagesToProcess.length} images to optimize.`);

const fileReplacements = new Map(); // oldFilename -> newFilename (e.g. 'catfish.png' -> 'catfish.webp')

imagesToProcess.forEach(img => {
  const dir = path.dirname(img);
  const ext = path.extname(img);
  const base = path.basename(img, ext);
  const webpFile = path.join(dir, `${base}.webp`);
  
  // Convert using cwebp
  try {
    console.log(`Converting: ${img}`);
    execSync(`cwebp -q 80 "${img}" -o "${webpFile}"`, { stdio: 'ignore' });
    
    // Add to replacements list
    fileReplacements.set(path.basename(img), `${base}.webp`);
    
    // Delete original
    fs.unlinkSync(img);
  } catch (err) {
    console.error(`Failed to convert ${img}: ${err.message}`);
  }
});

// Update codebase references
const sourceFiles = [];
sourceDirs.forEach(dir => {
  if (dir === '.') {
    // Only html files in root
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
        sourceFiles.push(file);
      }
    });
  } else {
    sourceFiles.push(...getAllFiles(dir, /\.(vue|js|html|css|json)$/i));
  }
});

console.log(`Scanning ${sourceFiles.length} source files for reference updates...`);

sourceFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Replace each image filename
  for (const [oldName, newName] of fileReplacements.entries()) {
    // Escape regex characters just in case
    const escapedOld = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOld, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, newName);
      changed = true;
    }
  }

  // Favicon updates in HTML
  if (content.includes('type="image/png"') && file.endsWith('.html')) {
     content = content.replace(/type="image\/png"/g, 'type="image/webp"');
     changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated references in ${file}`);
  }
});

console.log('Optimization complete!');
