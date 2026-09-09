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
