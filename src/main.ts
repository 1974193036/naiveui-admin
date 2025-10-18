import { createApp } from 'vue'
import App from './App.vue'
import { prepareCreateApp, prepareMount } from './prepare'
import '@/assets/styles/index.scss'

console.log(import.meta.env.VUE_APP_BASE_API)

async function bootstrap() {
  prepareCreateApp()
  const app = createApp(App)
  await prepareMount(app)
  app.mount('#app')
}

bootstrap()
