import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import NProgress from 'nprogress';
import { NextLoading } from '@/utils/loading';

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
                    title: '啊啊啊'
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
    // 界面 loading 动画开始执行
    NextLoading.start();

    setTimeout(()=>{
        console.log(111)
    },2000)

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
