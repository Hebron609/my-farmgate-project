// Smart Node.js indexer for full-text search
// Crawls all .vue and .html files, extracts paragraphs, headings, and visible text
// Outputs search-index-smart.json for frontend search

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const SRC_DIR = path.join(__dirname, '../src');
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUT_FILE = path.join(__dirname, '../src/data/search-index-smart.json');

function getAllFiles(dir, exts = ['.vue', '.html']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
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

function extractTextFromHtml(html, filePath) {
  const $ = cheerio.load(html);
  const results = [];
  // Paragraphs
  $('p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 1) {
      results.push({
        id: $(el).attr('id') || `p-${i}`,
        content: text,
        tag: 'p',
        file: filePath,
      });
    }
  });
  // Headings
  $('h1,h2,h3,h4,h5,h6').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 1) {
      results.push({
        id: $(el).attr('id') || `${el.tagName}-${i}`,
        content: text,
        tag: el.tagName,
        file: filePath,
      });
    }
  });
  // Other visible text (span, strong, etc.)
  $('span,strong,b').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 1) {
      results.push({
        id: $(el).attr('id') || `${el.tagName}-${i}`,
        content: text,
        tag: el.tagName,
        file: filePath,
      });
    }
  });
  return results;
}

function extractTextFromVue(vueContent, filePath) {
  const templateMatch = vueContent.match(/<template[\s\S]*?>([\s\S]*?)<\/template>/i);
  if (!templateMatch) return [];
  return extractTextFromHtml(templateMatch[1], filePath);
}

function buildIndex() {
  const files = [
    ...getAllFiles(SRC_DIR, ['.vue']),
    ...getAllFiles(PUBLIC_DIR, ['.html'])
  ];
  const index = [];
  files.forEach(filePath => {
    const ext = path.extname(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    let entries = [];
    if (ext === '.vue') {
      entries = extractTextFromVue(content, filePath);
    } else if (ext === '.html') {
      entries = extractTextFromHtml(content, filePath);
    }
    entries.forEach(entry => {
      index.push({
        id: entry.id,
        content: entry.content,
        tag: entry.tag,
        file: entry.file.replace(/^.*\/(src|public)\//, ''),
      });
    });
  });
  return index;
}

function main() {
  const index = buildIndex();
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(index, null, 2), 'utf8');
  console.log(`Smart search index generated: ${OUT_FILE} (${index.length} entries)`);
}

main();
