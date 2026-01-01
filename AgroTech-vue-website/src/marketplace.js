import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Marketplace from "./pages/Marketplace.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import CheckoutView from "./pages/CheckoutView.vue";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBars,
  faLeaf,
  faTimes,
  faArrowRight,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faBriefcase,
  faChartBar,
  faPhone,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUser,
  faBars,
  faLeaf,
  faTimes,
  faArrowRight,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faBriefcase,
  faChartBar,
  faPhone,
  faEnvelope,
  faSearch,
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faTiktok,
  faXTwitter
);

const routes = [
  { path: "/", name: "Marketplace", component: Marketplace },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/checkout", name: "Checkout", component: CheckoutView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
