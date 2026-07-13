import { h } from "vue";
import Login from "./pages/Login.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(h(Login), "#app");
