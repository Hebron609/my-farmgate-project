import { createApp } from "vue";
import Contact from "./pages/Contact.vue";
import "./style.css";
import { setupApp } from "./shared-setup";

setupApp(Contact, "#app");
