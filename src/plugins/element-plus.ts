import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css';
import i18n from '@/locales'


// 引入静态资源
export function setupElementPlus(app : any) {
	//导出
	for ( const [key, component] of Object.entries(ElementPlusIconsVue) ) {
		app.component(key, component)
	}
	app.use(ElementPlus, { size: 'medium', i18n: i18n.global.t })
}
