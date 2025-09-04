import { createApp } from 'vue'
import Marketplace from './pages/Marketplace.vue'
import './style.css'
import { setupApp } from './shared-setup'

setupApp(Marketplace, '#app')
