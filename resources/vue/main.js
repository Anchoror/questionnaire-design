import { createApp } from 'vue'
import App from '@/App.vue'
import JsonViewer from "vue3-json-viewer"

// 样式文件
import "vue3-json-viewer/dist/index.css"
import 'virtual:uno.css'
import '@/styles/app.less'

const app = createApp(App)
app.use(JsonViewer)
app.mount('#app')
