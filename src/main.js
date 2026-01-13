import { createApp } from 'vue'
import './style.css'
import Home from './pages/Home.vue'
import { setupApp } from './shared-setup'

setupApp(Home, '#app')
