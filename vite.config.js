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
       server: {
    cors: false
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
        terms: path.resolve(__dirname, "Terms.html"),
        manifesto: path.resolve(__dirname, "manifesto.html"),
        people: path.resolve(__dirname, "people.html"),
        projects: path.resolve(__dirname, "projects.html"),
        mission: path.resolve(__dirname, "our-relevance.html"),
        impact: path.resolve(__dirname, "our-impact.html"),
        privacy: path.resolve(__dirname, "privacy.html"),
        Contact: path.resolve(__dirname, "contact.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
