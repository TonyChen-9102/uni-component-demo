import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//全局引用 mg-component
import MgComponent from "@/myComponents/mg-component/mg-component.vue"
Vue.component("mg-component",MgComponent);

//插件方式全局引用组件
import MaComponent from "./myComponents/ma-component"
Vue.use(MaComponent);

const app = new Vue({
    ...App
})
app.$mount()
