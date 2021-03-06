import { createApp } from 'vue'

import { setupElementPlus } from '@/plugins/element-plus';
import { setupI18n } from '@/plugins/i18n';
import { setupAssets } from '@/plugins/assets';


export function loadPlugins(app: ReturnType<typeof createApp>) {

    //多语言
    setupI18n(app)
    //element
    setupElementPlus(app);
    // 引入静态资源
    setupAssets();
}
