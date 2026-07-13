import { h } from "vue";
import Signup from "./pages/Signup.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(h(Signup), "#app");
