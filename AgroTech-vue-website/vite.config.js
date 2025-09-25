import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss(),],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        solutions: path.resolve(__dirname, 'solutions.html'),
        marketplace: path.resolve(__dirname, 'marketplace.html'),
        pricing: path.resolve(__dirname, 'pricing.html'),
        // Add more pages here
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
  
})
