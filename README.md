# Vue 3 + Ant + TypeScript + Vite

## 版本
>node: v16.15.1

## [Markdown](https://markdown.com.cn/)

## [vite](https://vitejs.cn/)

    yarn create vite


## **[pinia](https://pinia.vuejs.org/introduction.html)**

Vue 的官方状态管理库

    yarn add pinia


## [mitt.js](https://github.com/developit/mitt)

    yarn add mitt

- Vue2.x 使用 EventBus 进行组件通信，而 Vue3.x 推荐使用 mitt.js。
- 足够小，仅有200bytes，
- 支持全部事件的监听和批量移除，
- 不依赖 Vue 实例，
- 可以跨框架使用，React 或者 Vue，甚至 jQuery 项目都能使用同一套库。


## [day.js](https://dayjs.gitee.io/docs/zh-CN/installation/installation)

    yarn add dayjs

- 2kB，
- Day.js 可以运行在浏览器和 Node.js 中。
- 所有的 API 操作都将返回一个新的 Dayjs 对象。

## [nprogress](https://github.com/rstacruz/nprogress)

纳米级的进度条

    yarn add nprogress

### 使用

- 直接调用 `start()` 或者 `done()` 来控制进度条。
```bash
    NProgress.start();
    NProgress.done();
```

- 可以通过调用 `.set(n)` 来设置进度，n是0-1的数字。
```bash
    NProgress.set(0.0);     // Sorta same as .start()
    NProgress.set(0.4);
    NProgress.set(1.0);     // Sorta same as .done()
```

- 可以使用 `inc()` 随机增长进度条，注意，这个方法永远不会让进度条达到100%。
```bash
    NProgress.inc();
```

- 通过使用 `done()` 让进度条关闭。
```bash
    NProgress.done(true);
```

## [lodash-es](https://www.lodashjs.com/)

    yarn add lodash-es

[lodash](https://www.npmjs.com/package/lodash) 和 [lodash-es](https://www.npmjs.com/package/lodash-es) 有什么区别

- lodash使用es5的模块语法(1.41M),lodash-es使用es6的模块语法(636k)


## [core-js](https://www.npmjs.com/package/core-js)

    yarn add core-js

### core.js 是个什么?


## [axios](http://www.axios-js.com/zh-cn/docs/)

    yarn add axios

## [element-plus](https://www.antdv.com/docs/vue/introduce)

    yarn add element-plus


## [eslint](https://eslint.org/docs/latest/user-guide/getting-started)

    yarn add eslint --dev

- 应该设置一个配置文件
```bash
  yarn create @eslint/config
```


## [Windi CSS](https://windicss.org/guide/)

    yarn add --dev vite-plugin-windicss windicss
