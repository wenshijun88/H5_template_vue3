import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'

// 2. 引入vant组件样式
import './styles/index.scss'
import 'vant/lib/index.css';
import 'lib-flexible'  // 引入适配包

const app = createApp(App)
app.use(store, key).use(router).mount('#app')
