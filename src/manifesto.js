import { createApp } from "vue";
//import UnderConstruction from "./components/UnderConstruction.vue";
import Manifesto from "./pages/Manifesto.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Manifesto, "#app");
