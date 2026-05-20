const fs = require('fs');
const path = require('path');

const dir = './';

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'public' || file === 'scratch') continue;
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else {
      if (file.endsWith('.vue') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const files = walk(dir);
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace all typical tailwind yellow utilities (300-600) with the brand color #F2CB00
  content = content.replace(/\b(bg|text|ring|border|from|to|via|fill|stroke|shadow)-yellow-[3456]00\b/g, '$1-[#F2CB00]');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Total files updated: ${changedFiles}`);
