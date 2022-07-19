import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import i18n from '@/locales'


// 引入静态资源
export function setupElementPlus(app:any) {
    app.use(ElementPlus, { size: 'medium', i18n: i18n.global.t })
}
