import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';

// 引入静态资源
export function setupElementPlus(app:any) {
    app.use(ElementPlus)
}
