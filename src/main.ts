import { createApp } from 'vue'
import App from './App.vue'


import {
    setupAssets,
    setupElementPlus
} from './plugins'

const app = createApp(App)

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
console.log(app)

function setupPlugins() {
    //静态资源
    setupAssets()
    //
    setupElementPlus(app)
}


async function setupApp() {

    app.mount('#app');
}

setupPlugins();

setupApp();
