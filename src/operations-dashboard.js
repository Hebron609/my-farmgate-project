import { createApp } from 'vue'
import './style.css' // Import tailwind styles
import OperationsDashboard from './pages/OperationsDashboard.vue'

const app = createApp(OperationsDashboard)
app.mount('#app')
