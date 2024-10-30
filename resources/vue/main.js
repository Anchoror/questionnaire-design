import { createApp } from 'vue'
import App from '@/App.vue'

// 样式文件
import "vue3-json-viewer/dist/index.css"
import 'virtual:uno.css'
import '@/styles/app.less'

const app = createApp(App)
app.mount('#app')



window.renderForm = (selector, config) =>{
    import('@/components/View.vue').then(module => {
        const FormComponent = module.default
        const Form = createApp(FormComponent)
        Form.provide('data', config.json)
        Form.provide('submitCB', config.submit)
        Form.mount(selector, true)
    })
}
document.dispatchEvent(new CustomEvent('renderVue', {
    detail: {
        renderForm: window.renderForm
    }
}))
