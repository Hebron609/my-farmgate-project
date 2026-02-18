import { createApp } from "vue";
//import UnderConstruction from "./components/UnderConstruction.vue";
import About from "./pages/About.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(About, "#app");
