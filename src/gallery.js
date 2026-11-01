import { createApp } from "vue";
import Gallery from "./pages/Gallery.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Gallery, "#app");
