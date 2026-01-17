import { createApp } from "vue";
//import UnderConstruction from "./components/UnderConstruction.vue";
import Mission from "./pages/Mission.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Mission, "#app");
