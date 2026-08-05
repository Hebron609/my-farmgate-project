import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import MarketplaceUnderConstruction from "./components/MarketplaceUnderConstruction.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import CheckoutView from "./pages/CheckoutView.vue";
import "./style.css";
import { setupFontAwesome } from "./shared-setup";

const routes = [
  { path: "/", name: "Marketplace", component: MarketplaceUnderConstruction },
  //{ path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  //{ path: "/checkout", name: "Checkout", component: CheckoutView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
setupFontAwesome(app);
app.mount("#app");
