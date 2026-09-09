import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { setupApp } from "./shared-setup";
import HoneybadgerVue from "@honeybadger-io/vue";

const config = {
  apiKey: "hbp_h6ndTfAOsHktG51jJfinqzfiKvrUzV4v8Ciu",
  environment: "production",
};

const routes = [
  { path: "/", name: "Home", component: () => import("./pages/Home.vue") },
  {
  { path: "/about", name: "About", component: () => import("./pages/About.vue") },
  {
    path: "/our-relevance",
    name: "OurRelevance",
    component: () => import("./pages/OurRelevance.vue"),
  },
  {
    path: "/footprint",
    name: "Footprint",
    component: () => import("./pages/Footprint.vue"),
  },
  {
    path: "/our-impact",
    name: "OurImpact",
    component: () => import("./pages/OurImpact.vue"),
  },
  { path: "/solutions", name: "Solutions", component: () => import("./pages/Solutions.vue") },
  { path: "/projects", name: "Projects", component: () => import("./pages/Projects.vue") },
  { path: "/people", name: "People", component: () => import("./pages/People.vue") },
  { path: "/contact", name: "Contact", component: () => import("./pages/Contact.vue") },
    path: "/book-farm-visit",
    name: "BookFarmVisit",
    component: () => import("./pages/BookFarmVisit.vue"),
  },
  { path: "/our-edge", name: "OurEdge", component: () => import("./pages/OurEdge.vue") },
  {
    path: "/our-offerings",
    name: "OurOfferings",
    component: () => import("./pages/OurOfferings.vue"),
  },
  {
    path: "/product-offerings",
    name: "OurOfferingsAlt",
    component: () => import("./pages/OurOfferings.vue"),
  },
  { path: "/manifesto", name: "Manifesto", component: () => import("./pages/Manifesto.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(HoneybadgerVue, config);
setupApp(app);
app.mount("#app");
