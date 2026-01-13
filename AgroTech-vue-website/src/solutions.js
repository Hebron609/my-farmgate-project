import { createApp } from 'vue'
import UnderConstruction from "./components/UnderConstruction.vue";
//import Solutions from './pages/Solutions.vue'
import './style.css'
import { setupApp } from './shared-setup'


setupApp(UnderConstruction, "#app");
