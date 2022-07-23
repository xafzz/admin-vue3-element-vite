import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import NProgress from 'nprogress';
import { CircularLoading } from '@/utils/loading';

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                meta:{
                    title: '啊啊啊',
                    keepAlive:true
                },
                component: () => import('@/views/index.vue')
            },
            {
                path: '/test',
                name: 'test',
                meta:{
                    title: 'test'
                },
                component: () => import('@/views/test.vue')
            },
        ]
    }
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
    // loading 动画开始执行
    if (window.circularLoading === undefined) CircularLoading.start();
    NProgress.configure({ showSpinner: false });
	NProgress.start();

    console.log('route------->',11111)

    document.title = to?.meta?.title || '页面'
    next();
});

// 路由加载后
router.afterEach(() => {
	NProgress.done();
    console.log('route------->',22222)
});

// 导出路由
export default router;
