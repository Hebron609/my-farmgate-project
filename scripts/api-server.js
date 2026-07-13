import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from '../api/send-email.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Standalone .env parser to support all Node versions without flags
const loadEnv = (file) => {
  try {
    const envPath = path.resolve(__dirname, '..', file);
    if (fs.existsSync(envPath)) {
      const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx > 0) {
            const key = trimmed.substring(0, eqIdx).trim();
            const val = trimmed.substring(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
            process.env[key] = val;
          }
        }
      }
    }
  } catch (e) {
    console.error(`Failed to load ${file}:`, e);
  }
};

loadEnv('.env');
loadEnv('.env.local');

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/send-email') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        req.body = JSON.parse(body);

        const resMock = {
          setHeader(name, value) {
            res.setHeader(name, value);
            return this;
          },
          status(code) {
            res.statusCode = code;
            return this;
          },
          json(data) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            return this;
          }
        };

        await handler(req, resMock);
      } catch (err) {
        console.error('API Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Local API Server running on http://localhost:${PORT}`);
});
