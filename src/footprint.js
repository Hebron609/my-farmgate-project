import { createApp } from "vue";
import Footprint from "./pages/Footprint.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Footprint, "#app");
