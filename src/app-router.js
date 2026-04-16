import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import BookFarmVisit from "./pages/BookFarmVisit.vue";
import OurEdge from "./pages/OurEdge.vue";
import { setupApp } from "./shared-setup";
import HoneybadgerVue from "@honeybadger-io/vue";

const config = {
  apiKey: "hbp_h6ndTfAOsHktG51jJfinqzfiKvrUzV4v8Ciu",
  environment: "production",
};

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/book-farm-visit", name: "BookFarmVisit", component: BookFarmVisit },
  { path: "/our-edge", name: "OurEdge", component: OurEdge },
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
