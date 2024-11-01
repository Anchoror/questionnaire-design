import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'
// 样式文件
import 'virtual:uno.css'
import '@/styles/app.less'

const app = createApp(App)
app.use(pinia)
app.mount('#app')

// const VForm = (selector, config) =>{
//     import('@/components/View.vue').then(module => {
//         const FormComponent = module.default
//         const Form = createApp(FormComponent)
//         Form.provide('data', config.json)
//         Form.provide('submitCB', config.submit)
//         Form.mount(selector, true)
//     })
// }
// const VDialog = () => {
    
// }

// document.dispatchEvent(new CustomEvent('vloaded', {
//     detail:{
//         VForm,
//         VDialog
//     }
// }))
