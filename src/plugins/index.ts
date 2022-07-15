import Vue from 'vue'
export { setupAssets } from '@/plugins/assets';
export { setupElementPlus } from '@/plugins/element-plus';


Vue.use(setupAssets)
   .use(setupElementPlus)
