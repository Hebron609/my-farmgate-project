import { createApp } from "vue";
//import UnderConstruction from "./components/UnderConstruction.vue";
import People from "./pages/People.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(People, "#app");
