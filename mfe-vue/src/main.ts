import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { remoteLoaderPlugin } from './plugins/remote-loader'

const app = createApp(App)

app.use(createPinia()).use(remoteLoaderPlugin).use(router)

app.mount('#app')
