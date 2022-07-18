import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store';
import router from './router';

import { loadPlugins } from './plugins'
import mitt from 'mitt';


const app = createApp(App)

//加载插件
loadPlugins(app)

app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    console.info('error----->', info)
    console.error(err)
}

app.config.warnHandler = (msg, vm, trace)=>{
    // `trace` 是组件的继承关系追踪
    console.warn(222,trace,msg )
}


app.use(pinia).use(router).mount('#app')


app.config.globalProperties.mittBus = mitt();
