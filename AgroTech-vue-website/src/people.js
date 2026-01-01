import { createApp } from 'vue'
import People from './pages/People.vue'
import './style.css'
import { setupApp } from './shared-setup'

setupApp(People, '#app')