import {resolve} from 'path';
import {loadEnv} from 'vite';
import type {UserConfig, ConfigEnv} from 'vite';
import vue from '@vitejs/plugin-vue'
import pkg from './package.json';
import dayjs from 'dayjs';
import WindiCSS from 'vite-plugin-windicss'


const __APP_INFO__ = {
    pkg,
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};


const ROOT = process.cwd();

// https://vitejs.dev/config/
export default ({command, mode}: ConfigEnv): UserConfig => {

    console.log(1111, ROOT, mode)
    const AntEnv = loadEnv(mode, ROOT)


    return {
        base: AntEnv.VITE_BASE_URL,
        //全局常量
        define: {
            __APP_INFO__: JSON.stringify(__APP_INFO__),
        },
        server: {
            port: 8888, //默认值： 3000
            open: true, // 是否自动打开浏览器(默认false)
        },
        resolve: {
            alias: [
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
                },
                {
                    find: '@',
                    replacement: resolve(ROOT, './src'),
                },
            ],
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    modifyVars: {},
                }
            },
        },
        plugins: [
            vue(),
            WindiCSS()
        ]
    }
}
