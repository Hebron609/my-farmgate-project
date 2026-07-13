import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Maps clean URLs → .html files for Vite dev server (mirrors .htaccess + vercel.json)
const cleanUrlMiddleware = () => ({
  name: "clean-url-middleware",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const map = {
        "/service-model":      "/service-model.html",
        "/opportunity-detail": "/opportunity-detail.html",
        "/about":              "/about.html",
        "/marketplace":        "/marketplace.html",
        "/solutions":          "/solutions.html",
        "/manifesto":          "/manifesto.html",
        "/people":             "/people.html",
        "/projects":           "/projects.html",
        "/privacy":            "/privacy.html",
        "/contact":            "/contact.html",
        "/footprint":          "/footprint.html",
        "/our-impact":         "/our-impact.html",
        "/our-relevance":      "/our-relevance.html",
        "/our-edge":           "/our-edge.html",
        "/terms":              "/Terms.html",
        "/book-farm-visit":    "/book-farm-visit.html",
        "/schedule-call":      "/schedule-call.html",
        "/login":              "/login.html",
        "/signup":             "/signup.html",
        "/dashboard":          "/investor-dashboard.html",
        "/investor-dashboard": "/investor-dashboard.html",
      };
      const [pathname, query] = req.url.split("?");
      if (map[pathname]) {
        req.url = map[pathname] + (query ? `?${query}` : "");
      }
      next();
    });
  },
});

// Local dev serverless API middleware (handles /api/send-email inside Vite dev server)
const apiMiddleware = () => ({
  name: "api-middleware",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url.startsWith("/api/send-email")) {
        if (req.method === "OPTIONS") {
          res.statusCode = 200;
          res.end();
          return;
        }
        if (req.method === "POST") {
          let body = "";
          for await (const chunk of req) {
            body += chunk;
          }
          try {
            req.body = JSON.parse(body);
          } catch (e) {
            req.body = {};
          }
        }
        res.status = (code) => {
          res.statusCode = code;
          return {
            json: (data) => {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify(data));
            },
            end: () => res.end(),
          };
        };
        try {
          const handlerModule = await server.ssrLoadModule("/api/send-email.js");
          await handlerModule.default(req, res);
        } catch (err) {
          console.error("API Middleware Error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message }));
        }
        return;
      }
      next();
    });
  },
});

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
    cleanUrlMiddleware(),
    apiMiddleware(),
  ],

  server: {
    cors: false,
  },

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
        footprint: path.resolve(__dirname, "footprint.html"),
        bookFarmVisit: path.resolve(__dirname, "book-farm-visit.html"),
        ourEdge: path.resolve(__dirname, "our-edge.html"),
        scheduleCall: path.resolve(__dirname, "schedule-call.html"),
        serviceModel: path.resolve(__dirname, "service-model.html"),
        opportunityDetail: path.resolve(__dirname, "opportunity-detail.html"),
        login: path.resolve(__dirname, "login.html"),
        signup: path.resolve(__dirname, "signup.html"),
        investorDashboard: path.resolve(__dirname, "investor-dashboard.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
