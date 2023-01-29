import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'
import JwenUI from '@/components/entry'
const app = createApp(App)
app.use(JwenUI)
app.mount('#app')
