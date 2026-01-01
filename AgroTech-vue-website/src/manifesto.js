import { createApp } from "vue";
import Manifesto from "./pages/Manifesto.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Manifesto, "#app");
