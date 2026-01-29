import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import MarketplaceUnderConstruction from "./components/MarketplaceUnderConstruction.vue";
import "./style.css";
import { setupFontAwesome } from "./shared-setup";

const routes = [
  { path: "/", name: "Marketplace", component: MarketplaceUnderConstruction },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
setupFontAwesome(app);
app.mount("#app");
