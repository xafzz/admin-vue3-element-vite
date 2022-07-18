import {createRouter, createWebHistory} from 'vue-router';
import { RouterHistory } from 'vue-router';
import NProgress from 'nprogress';

const routes: ({ redirect: string; path: string } | { path: string; component: () => Promise<any>; meta: { title: string }; name: string })[]  = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        meta:{
            title: '啊啊啊'
        },
        component: () => import('@/views/index.vue')
    },
]

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
const router = createRouter({
    history: createWebHistory(),  // hash模式：createWebHashHistory，history模式：createWebHistory
    routes
});



// 路由加载前
router.beforeEach(async (to, from, next) => {
	NProgress.start();

    document.title = to?.meta?.title || '页面'
    next();
});

// 路由加载后
router.afterEach(() => {
	NProgress.done();
});

// 导出路由
export default router;
