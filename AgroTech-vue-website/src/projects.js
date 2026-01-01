import { createApp } from 'vue'
import Projects from './pages/Projects.vue'
import './style.css'
import { setupApp } from './shared-setup'

setupApp(Projects, '#app')