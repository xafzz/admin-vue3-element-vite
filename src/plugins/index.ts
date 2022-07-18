import { createApp } from 'vue'

import { setupAssets } from '@/plugins/assets';
import { setupElementPlus } from '@/plugins/element-plus';


export function loadPlugins(app: ReturnType<typeof createApp>) {

    setupElementPlus(app);
    // 引入静态资源
    setupAssets();
}
