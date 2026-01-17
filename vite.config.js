import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "lord-icon",
        },
      },
    }),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        solutions: path.resolve(__dirname, "solutions.html"),
        marketplace: path.resolve(__dirname, "marketplace.html"),
        pricing: path.resolve(__dirname, "pricing.html"),
        impact: path.resolve(__dirname, "impact.html"),
        manifesto: path.resolve(__dirname, "manifesto.html"),
        people: path.resolve(__dirname, "people.html"),
        projects: path.resolve(__dirname, "projects.html"),
        cookies: path.resolve(__dirname, "cookies.html"),
        privacy: path.resolve(__dirname, "privacy.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
