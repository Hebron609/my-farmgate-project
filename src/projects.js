import { createApp } from "vue";
import UnderConstruction from "./components/UnderConstruction.vue";
//import Projects from "./pages/Projects.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(UnderConstruction, "#app");
