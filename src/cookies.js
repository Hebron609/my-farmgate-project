import { createApp } from "vue";
import Cookies from "./pages/Cookies.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Cookies, "#app");
