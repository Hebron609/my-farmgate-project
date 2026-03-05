// Automated Build-Time Search Indexer for Vue/HTML Projects
// Usage: node scripts/generateSearchIndex.js

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Config: Directories to crawl
const SRC_DIRS = [
  path.join(__dirname, '../src/pages'),
  path.join(__dirname, '../public'),
];
const OUTPUT_PATH = path.join(__dirname, '../src/data/search-index.json');

// Utility: Generate a slug from text for IDs
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

// Utility: Recursively get all .vue and .html files
function getAllFiles(dir, exts = ['.vue', '.html']) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(filePath);
    }
  });
  return results;
}

// Extract text blocks from HTML/Vue
function extractBlocks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // For .vue, extract <template> only
  let html = content;
  if (filePath.endsWith('.vue')) {
    const match = content.match(/<template[^>]*>([\s\S]*?)<\/template>/);
    html = match ? match[1] : '';
  }
  const $ = cheerio.load(html);
  const blocks = [];
  // Extract h1, h2, h3, p
  $('h1, h2, h3, p').each((i, el) => {
    const tag = el.tagName.toLowerCase();
    let text = $(el).text().trim();
    if (!text) return;
    let id = $(el).attr('id');
    if (!id) {
      id = slugify(text);
      $(el).attr('id', id); // For future use (optional)
    }
    blocks.push({
      tag,
      id,
      text,
    });
  });
  return blocks;
}

// Main: Crawl and build index
function buildIndex() {
  const files = SRC_DIRS.flatMap(dir => fs.existsSync(dir) ? getAllFiles(dir) : []);
  const index = [];
  files.forEach(filePath => {
    const relPath = filePath.includes('/public/')
      ? filePath.split('/public/')[1]
      : filePath.split('/src/pages/')[1];
    const url = relPath
      ? '/' + relPath.replace(/\\/g, '/').replace(/\.vue$/, '.html')
      : '/';
    const blocks = extractBlocks(filePath);
    blocks.forEach(block => {
      index.push({
        url: url + (block.id ? `#${block.id}` : ''),
        tag: block.tag,
        id: block.id,
        title: block.tag.startsWith('h') ? block.text : '',
        content: block.tag === 'p' ? block.text : '',
        file: relPath,
      });
    });
  });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2), 'utf8');
  console.log(`Search index generated: ${OUTPUT_PATH} (${index.length} entries)`);
}

buildIndex();
