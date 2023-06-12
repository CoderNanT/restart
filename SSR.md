# Node 服务器端渲染

## 单页应用程序

- 单页应用程序（SPA）全称是：Single-page application，SPA 应用是在客户端呈现的（术语称：CSR）

  - SPA 应用默认只返回一个空 HTML 页面，如：body 只有 `<div id="app"></div>`
  - 而整个应用程序的内容都是通过 Javascript 动态加载，包括应用程序的逻辑、UI 以及与服务器通信相关的所有数据
  - 构建 SPA 应用常见的库和框架有：React、AngularJS、Vue.js 等

- 客户端渲染原理

  ![客户端渲染-CSR](https://s3.bmp.ovh/imgs/2023/05/13/82f3413d428f027d.png)



## SPA 优缺点

- SPA 的优点
  - 只需加载一次
    - SPA 应用程序只需要在第一次请求时加载页面，页面切换不需重新加载，而传统的 Web 应用程序必须在每次请求时都得加
      载页面，需要花费更多时间。因此，SPA 页面加载速度要比传统 Web 应用程序更快
  - 更好的用户体验
    - SPA 提供类似于桌面或移动应用程序的体验。用户切换页面不必重新加载新页面
    - 切换页面只是内容发生了变化，页面并没有重新加载，从而使体验变得更加流畅
  - 可轻松的构建功能丰富的 Web 应用程序
- SPA 的缺点
  - SPA 应用默认只返回一个空 HTML 页面，不利于**SEO** （search engine optimization）
  - 首屏加载的资源过大时，一样会**影响首屏的渲染**
  - 也不利于构建复杂的项目，复杂 Web 应用程序的**大文件可能变得难以维护**



## 爬虫-工作流程

- Google 爬虫的工作流程分为 3 个阶段，并非每个网页都会经历这 3 个阶段

  - 抓取
    - 爬虫（也称蜘蛛），从互联网上发现各类网页，网页中的外部连接也会被发现
    - 抓取数以十亿被发现网页的内容，如：文本、图片和视频
  - 索引编制
    - 爬虫程序会分析网页上的文本、图片和视频文件
    - 并将信息存储在大型数据库（索引区）中
    - 例如 `<title>` 元素和 Alt 属性、图片、视频等
    - 爬虫会对内容类似的网页归类分组
    - 不符合规则内容和网站会被清理
      - 如：禁止访问 或 需要权限网站等等
  - 呈现搜索结果
    - 当用户在 Google 中搜索时，搜索引擎会根据内容的类型，选择一组网页中最具代表性的网页进行呈现

  ![爬虫-工作流程](https://s3.bmp.ovh/imgs/2023/05/13/49facae88aad9e1a.png)



## 搜索引擎的优化

- 语义性 HTML 标记
  - 标题用`<h1>`，一个页面只有一个； 副标题用`<h2>`到`<h6>`
  - 不要过度使用 h 标签，多次使用不会增加 SEO（search engine optimization ）
  - 段落用`<p>`，列表用`<ul>`，并且 li 只放在 ul 中 等等
- 每个页面需包含：标题 + 内部链接
  - 每个页面对应的 title，同一网站所有页面都有内链可以指向首页
- 确保链接可供抓取
- meta 标签优化：设置 description keywords 等
- 文本标记和 img
  - 比如`<b>`和`<strong>`加粗文本的标签，爬虫也会关注到该内容
  - img 标签添加 alt 属，图片加载失败，爬虫会取 alt 内容
- robots.txt 文件：规定爬虫可访问您网站上的哪些网址
- sitemap.xml 站点地图：在站点地图列出所有网页，确保爬虫不会漏掉某些网页
- 更多查看：https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata



## 静态站点生成

- 静态站点生成（SSG）全称是：Static Site Generate，是预先生成好的静态网站
  - SSG 应用一般在构建阶段就确定了网站的内容
  - 如果网站的内容需要更新了，那必须得重新再次构建和部署
  - 构建 SSG 应用常见的库和框架有： Vue Nuxt、 React Next.js 等
- SSG 的优点
  - 访问速度非常快，因为每个页面都是在构建阶段就已经提前生成好了
  - 直接给浏览器返回静态的 HTML，**也有利于 SEO**
  - SSG 应用依然保留了 SPA 应用的特性，比如：前端路由、响应式数据、虚拟 DOM 等
- SSG 的缺点
  - 页面都是静态，**不利于展示实时性的内容，实时性的更适合 SSR**
  - 如果站点内容更新了，那必须得**重新再次构建和部署**



## 服务器端渲染

- 服务器端渲染全称是：Server Side Render，在服务器端渲染页面，并将渲染好 HTML 返回给浏览器呈现

  - SSR 应用的页面是在服务端渲染的，用户每请求一个 SSR 页面都会先在服务端进行渲染，然后将渲染好的页面，返回给浏览器呈现
  - 构建 SSR 应用常见的库和框架有：Vue Nuxt、React Next.js 等（SSR 应用也称同构应用）

- 服务器端渲染原理

  ![服务器端渲染-SSR](https://s3.bmp.ovh/imgs/2023/05/13/82f3413d428f027d.png)



## SSR 优缺点

- SSR 的优点
  - **更快的首屏渲染速度**
    - 浏览器显示静态页面的内容要比 JavaScript 动态生成的内容快得多
    - 当用户访问首页时可立即返回静态页面内容，而不需要等待浏览器先加载完整个应用程序
  - **更好的 SEO**
    - 爬虫是最擅长爬取静态的 HTML 页面，服务器端直接返回一个静态的 HTML 给浏览器
    - 这样有利于爬虫快速抓取网页内容，并编入索引，有利于 SEO
    - SSR 应用程序在 Hydration 之后依然可以**保留 Web 应用程序的交互性**。比如：前端路由、响应式数据、虚拟 DOM 等
  - SSR 的缺点
    - SSR 通常需要对服务器进行更多 API 调用，以及在服务器端渲染需要消耗更多的服务器资源，**成本高**
    - **增加了一定的开发成本**，用户需要关心哪些代码是运行在服务器端，哪些代码是运行在浏览器端
    - SSR 配置站点的**缓存**通常会比 SPA 站点要**复杂一点**



## SSR 解决方案

- SSR 的解决方案
  - 方案一：php、jsp ...
  - 方案二：从零搭建 SSR 项目（Node+webpack+Vue/React）
  - 方案三：**直接使用流行的框架（推荐）**
    - React：Next.js
    - Vue2：Nuxt.js
    - Vue3：Nuxt3
    - Angular：Anglular Universal
- SSR 应用场景非常广阔，比如
  - SaaS 产品，如：电子邮件网站、在线游戏、客户关系管理系统（CRM）、采购系统等
  - 门户网站、电子商务、零售网站
  - 单个页面、静态网站、文档类网站
  - 等等



## 邂逅 Vue3 + SSR

- Vue 除了支持开发 SPA 应用之外，其实也是支持开发 SSR 应用的
- 在 Vue 中创建 SSR 应用，需要调用 createSSRApp 函数，而不是 createApp
  - **createApp**：创建应用，直接挂载到页面上
  - **createSSRApp**：创建应用，是在激活的模式下挂载应用
- 服务端用 @vue/server-renderer 包中的 **renderToString** 来进行渲染



## Node Server 搭建

- 需安装的依赖项

  ```sh
  npm i express
  npm i nodemon -D
  npm i webpack webpack-cli webpack-node-externals -D
  ```

- nodemon

  - 启动 Node 程序时并监听文件的变化，变化即刷新

- webpack-node-externals

  - 排除掉 node_modules 中所以的模块



## Vue3 + SSR 搭建

- 需安装的依赖项

  ```sh
  npm i express
  npm i vue
  npm i nodemon -D
  npm i vue-loader -D
  npm i babel-loader @babel/preset-env -D
  npm i webpack webpack-cli -D
  npm i webpack-merge webpack-node-externals -D
  ```

- vue-loader：加载.vue 文件

- webpack-merge： 用来合并 webpack 配置

- babel-loader、@babel/preset-env

  - 加载 JS 文件，转换新语法



## 跨请求状态污染

- 在 SPA 中，整个生命周期中只有一个 App 对象实例 或 一个 Router 对象实例 或 一个 Store 对实例都是可以的，因为每个用户在使用浏览器访问 SPA 应用时，应用模块都会重新初始化，这也是一种**单例模式**
- 然而，在 SSR 环境下，App 应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样，也会在多个请求之间被复用，比如
  - 当某个用户对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个在请求的用户
  - **我们把这种情况称为：跨请求状态污染**
- **为了避免这种跨请求状态污染，SSR 的解决方案是**
  - 可以在每个请求中为整个应用**创建一个全新的实例**，包括后面的 router 和全局 store 等实例
  - 所以我们在创建 App 或 路由 或 Store 对象时都是使用一个函数来创建，保证每个请求都会创建一个全新的实例
  - 这样也会有缺点：需要消耗更多的服务器的资源



## Vue3 SSR + Hydration

- 服务器端渲染页面 + 客户端激活页面，使页面有交互效果（这个过程称为 Hydration 水合）

- Hydration的具体步骤如下

  - 开发一个App应用，比如App.vue
  - 将App.vue打包为一个客户端的client_bundle.js文件
    - 用来激活应用，使页面有交互效果
  - 将App.vue打包为一个服务器端的server_bundle.js文件
    - 用来在服务器端动态生成页面的HTML
  - server_bundle.js 渲染的页面 + client_bundle.js 文件进行Hydration

  ```js
  // app.js
  // 在服务器和客户端之间共享的应用实例
  import { createSSRApp } from "vue";
  import App from "./App.vue";
  
  // 这里为什么写一个函数来返回 app 实例?
  // 通过函数来返回 app 实例, 可以保证每个请求都会返回一个新的 app 实例, 来避免跨请求状态的污染
  export default function createApp() {
    let app = createSSRApp(App);
    return app;
  }
  ```

  ```vue
  <!--App.vue-->
  <template>
    <div>
      <h2>Vue3 App</h2>
      <div>{{ count }}</div>
      <button @click="addCount">+1</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const count = ref(100);
  function addCount() {
    count.value++;
  }
  </script>
  ```

  ```js
  // client/index.js
  import { createApp } from "vue";
  import App from "../App.vue";
  
  createApp(App).mount("#app");
  ```

  ```js
  // server/index.js
  const express = require("express");
  const server = express();
  
  import createApp from "../app.js";
  import { renderToString } from "@vue/server-renderer";
  
  // 部署静态资源
  server.use(express.static("build"));
  
  server.get("/", async (req, res) => {
    const app = createApp();
    const appStringHtml = await renderToString(app);
    res.send(
      `
      <!DOCTYPE html>
      <html lang="zh">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Vue3 Serve Side Render</h1>
        <div id="app">
          ${appStringHtml}
        </div>
      </body>
      <script src="/client/client_bundle.js"></script>
      </html>
      `
    );
  });
  
  server.listen(3000, () => {
    console.log("服务启动成功");
  });
  ```

  ```js
  // config/server.config.js
  const path = require("path");
  const nodeExternals = require("webpack-node-externals");
  const { VueLoaderPlugin } = require("vue-loader");
  
  module.exports = {
    target: "node",
    mode: "development",
    entry: "./src/server/index.js",
    output: {
      filename: "server_bundle.js",
      path: path.resolve(__dirname, "../build/server"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
        { test: /\.vue$/, loader: "vue-loader" },
      ],
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
      extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
    },
    externals: [nodeExternals()], // 排除 node_module 中的包
  };
  ```

  ```js
  // config/client.config.js
  const path = require("path");
  const { VueLoaderPlugin } = require("vue-loader");
  const { DefinePlugin } = require("webpack");
  
  module.exports = {
    target: "web",
    mode: "development",
    entry: "./src/client/index.js",
    output: {
      filename: "client_bundle.js",
      path: path.resolve(__dirname, "../build/client"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
        { test: /\.vue$/, loader: "vue-loader" },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new DefinePlugin({
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
    resolve: {
      extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
    },
  };
  ```

  ```json
  "scripts": {
    "build:server": "webpack --config ./config/server.config.js --watch",
    "build:client": "webpack --config ./config/client.config.js --watch",
    "start": "nodemon ./build/server/server_bundle.js"
  },
  ```



## Vue3 SSR + Vue Router

-  需再安装的依赖项

  ```sh
  npm i vue-router
  ```

- 注意事项

  - 为了避免跨请求状态污染
  - 需在每个请求中都创建一个全新router

  ```js
  // router/index.js
  import { createRouter } from "vue-router";
  
  const routes = [
    { path: "/", component: () => import("../views/home.vue") },
    { path: "/about", component: () => import("../views/about.vue") },
  ];
  
  export default function (history) {
    return createRouter({ history, routes });
  }
  ```

  ```js
  // client/index.js
  import { createApp } from "vue";
  import { createWebHistory } from "vue-router";
  
  import App from "../App.vue";
  import createRouter from "../router";
  
  const app = createApp(App);
  
  const router = createRouter(createWebHistory());
  app.use(router);
  
  router.isReady().then(() => {
    app.mount("#app");
  });
  ```

  ```js
  // server/index.js
  import createRouter from "../router";
  import { createMemoryHistory } from "vue-router"; // 内存路由 -> node
  
  // / or /about
  server.get("/*", async (req, res) => {
    const app = createApp();
  
    // app 安装路由插件
    const router = createRouter(createMemoryHistory());
    app.use(router);
  
    await router.push(req.url || "/"); // / or /about 等待页面跳转好
    await router.isReady(); // 等待(异步)路由加载完成, 在渲染页面
  
    const appStringHtml = await renderToString(app);
  
    // res.send(...)
  })
  ```



## Vue3 SSR + Pinia

- 需再安装的依赖项

  ```sh
  npm i pinia
  ```

- 注意事项

  - 为了避免跨请求状态污染
  - 需在每个请求中都创建一个全新pinia

  ```js
  // store/home.js
  import { defineStore } from "pinia";
  
  export const useHomeStore = defineStore("home", {
    state() {
      return { count: 999 };
    },
    actions: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    },
  });
  ```

  ```js
  // client/index.js
  import { createPinia } from "pinia";
  
  const pinia = createPinia();
  app.use(pinia);
  ```

  ```js
  // server/index.js
  import { createPinia } from 'pinia'
  
  server.get("/*", async (req, res) => {
    const app = createApp();
  
    // app 安装pinia插件
    const pinia = createPinia()
    app.use(pinia)
  
    const appStringHtml = await renderToString(app);
  
    // res.send(...)
  })
  ```



# Nuxt3

## 什么是Nuxt？

- 在了解 Nuxt 之前，我们先来了解一下创建一个现代应用程序，所需的技术
  - 支持数据双向绑定 和 组件化（Nuxt 选择了Vue.js）
  - 处理客户端的导航（Nuxt 选择了vue-router）
  - 支持开发中热模块替换和生产环境代码打包（Nuxt支持webpack 5和Vite）
  - 兼容旧版浏览器，支持最新的 JavaScript 语法转译（Nuxt使用esbuild）
  - 应用程序支持开发环境服务器，也支持服务器端渲染 或 API接口开发
  - Nuxt 使用 [h3](https://github.com/unjs/h3) 来实现部署可移植性（h3是一个极小的高性能的http框架）
    - 如：支持在 Serverless、Workers 和 Node.js 环境中运行
- Nuxt 是一个**直观的 Web 框架**
  - 自 2016 年 10 月以来，Nuxt专门负责集成上述所描述的事情 ，并提供前端和后端的功能
  - Nuxt 框架可以用来快速构建下一个 Vue.js 应用程序，如支持 CSR 、SSR、SSG 渲染模式的应用等



## Nuxt 发展史

- Nuxt.js
  - 诞生于 2016 年 10 月 25号，由 Sebastien Chopin 创建，主要是基于**Vue2 、Webpack2 、Node 和 Express**
  - 在2018 年 1 月 9 日， Sebastien Chopin 正式宣布，发布 Nuxt.js 1.0 版本
    - 重要的变化是放弃了对 node < 8 的支持
  - 2018 年 9 月 21 日， ， Sebastien Chopin 正式宣布，发布 Nuxt.js 2.0 版本
    - 开始使用 **Webpack 4** 及其技术栈， 其它的并没有做出重大更改
  - 2021年8月12日至今，Nuxt.js 最新的版本为：**Nuxt.js 2.15.8**
- Nuxt3版本
  - 经过 16 个月的工作，Nuxt 3 beta 于 2021 年 10 月 12 日发布，引入了基于 Vue 3、Vite 和 Nitro（服务引擎）
  - 六个月后， 2022 年 4 月 20 日，Pooya Parsa 宣布 Nuxt 3 的第一个候选版本，代号为 “Mount Hope”
  - **在2022年11月16号， Pooya Parsa 再次宣布 Nuxt3 发布为第一个正式稳定版本**
- 官网地址： https://nuxt.com



## Nuxt3 特点

- Vue技术栈
  - Nuxt3 是基于 Vue3 + Vue Router + Vite 等技术栈，**全程 Vue3+Vite 开发体验（Fast）**
- 自动导包
  - Nuxt 会自动导入**辅助函数、组合 API和 Vue API ，无需手动导入**
  - 基于规范的目录结构，Nuxt 还可以对自己的组件、 插件使用自动导入
- 约定式路由（目录结构即路由）
  - Nuxt 路由基于vue-router，在 [pages/](https://nuxt.com/docs/guide/directory-structure/pages) 目录中创建的每个页面，都会根据目录结构和文件名来自动生成路由
- 渲染模式：Nuxt 支持多种渲染模式（SSR、CSR、SSG等）
- 利于搜索引擎优化：服务器端渲染模式，不但可以提高首屏渲染速度，还利于SEO
- 服务器引擎
  - 在开发环境中，它使用 Rollup 和 Node.js
  - 在生产环境中，使用 Nitro 将您的应用程序和服务器构建到一个通用.output目录中
    - **Nitro服务引擎提供了跨平台**部署的支持，包括 Node、Deno、Serverless、Workers等平台上部署

- [Nuxt.js VS Nuxt3](https://thecodest.co/blog/nuxt-3/)



## Nuxt3 环境搭建

- 在开始之前，请确保您已安装推荐的设置

  - Node.js （最新 LTS 版本，或 **16.11以上**）
  - VS Code 
    - Volar、ESLint、Prettier

- 命令行工具，新建项目（hello-nuxt）

  ```sh
  npx nuxi init hello-nuxt
  
  pnpm dlx nuxi init hello-nuxt
  
  npm install –g nuxi && nuxi init hello-nuxt
  ```

- 运行项目：cd hello-nuxt

  ```sh
  yarn install
  
  pnpm install --shamefully-hoist #（创建一个扁平的 node_modules 目录结构，类似 npm 和 yarn）
  
  yarn dev
  ```



## 创建项目报错

- 执行 npx nuxi init hello-nuxt 报如下错误，主要是网络不通导致
- 解决方案
  - 第一步：ping raw.githubusercontent.com 检查是否通
  - 第二步：如果访问不通，代表是网络不通
  - 第三步：配置 host，本地解析域名
    - Mac电脑 host 配置路径：/etc/hosts
    - Win 电脑 host 配置路由：C:/Windows/System32/drivers/etc/hosts
  - 第四步：在host文件中新增一行 ，编写如下配置
    - 185.199.108.133 raw.githubusercontent.com
  - 第五步：重新ping域名，如果通了就可以用了
  - 第六部：重新开一个终端创建项目即可



## Nuxt3 目录结构

```sh
|-- hello-nuxt # Nuxt3项目名称
    |-- assets # 资源目录
    |-- components # 组件目录
    |-- composables # 组合 API 目录
    |-- layout # 布局目录
    |-- pages # 定义页面文件夹，路由会根据该页面目录结构和文件名自动生成
    |-- plugins # 插件目录
    |-- public # 静态资源目录，不参与打包
    |-- app.vue # 整个应用程序
    |-- app.config.ts # 应用程序的配置
    |-- nuxt.config.js # 可定制 Nuxt 框架的配置，比如: css、ssr、vite、app、modules等
    |-- package-]ock.json # 项目依赖库版本的锁定
    |-- package.json # 项目的描述文件
    |-- README.md # 项目简介
    |-- tsconfig.json # Typescript的配置文件      
```

```json
"generate": "nuxt generate", // 打包项目, 但是会提前预渲染每个路由 -> nuxt build --prerender
"postinstall": "nuxt prepare" // npm 生命周期钩子, 当执行完 npm install 之后会自定执行 nuxt prepare
// nuxt prepare -> 生成 .nuxt 和 ts 的类型等等
```



## 应用入口

- 默认情况下，Nuxt 会将此文件视为入口点，并为应用程序的每个路由呈现其内容，常用于
  - 定义页面布局 Layout 或 自定义布局，如：NuxtLayout
  - 定义路由的占位，如：NuxtPage
  - 编写全局样式
  - 全局监听路由 等等



## Nuxt 配置

- nuxt.config.ts 配置文件位于项目的根目录，可对Nuxt进行自定义配置。比如，可以进行如下配置

  - runtimeConfig：运行时配置，即**定义环境变量**
    - 可通过<b>.env文件</b>中的环境变量来覆盖，优先级（.env > runtimeConfig）
      - .env的变量会打入到process.env中，符合规则的会覆盖runtimeConfig的变量
      - .env一般用于某些终端启动应用时动态指定配置，同时支持dev和pro
  - appConfig： 应用配置，定义在构建时确定的公共变量，如：theme
    - 配置会和 app.config.ts 的**配置合并（优先级 app.config.ts > appConfig）**
  - app：app配置
    - head：给每个页面上设置head信息，**也支持 useHead 配置和内置组件**
  - ssr：指定应用渲染模式
  - router：配置路由相关的信息，比如在客户端渲染可以配置hash路由
  - alias：路径的别名，默认已配好
  - modules：配置Nuxt扩展的模块，比如：@pinia/nuxt @nuxt/image
  - routeRules：定义路由规则，可更改路由的渲染模式或分配基于路由缓存策略（公测阶段）
  - builder：可指定用 vite 还是 webpack来构建应用，默认是vite。如切换为 webpack 还需要安装额外的依赖

  ```nginx
  # .env
  # 在这里写的变量会添加到 process.env.xxx 中
  NUXT_APP_KEY = 'Env_App_Key'
  # NUXT_APP_KEY2 = 'heihei'
  NUXT_PUBLIC_BASE_URL = "http://localhost"
  ```

  ```js
  // app.config.ts
  export default defineAppConfig({
    title: "Hello Nuxt3 App",
    theme: { primary: "blue" },
  });
  ```

  ```js
  // nuxt.config.ts
  export default defineNuxtConfig({
    // 1.这里定义的运行时配置会不会打入到 process.env
    runtimeConfig: {
      appKey: "aabbcc", // server
      public: {
        baseURL: "http://xxx.com", // server and client -> client_bundle.js
      },
    },
  
    // 2.定义应用的配置
    appConfig: {
      title: "Hello Nuxt3 Nuxt",
      theme: { primary: "pink" },
    },
  
    // 3.app配置
    app: {
      // 给 app 所有的页面的 head 添加的配置(SEO, 添加外部的资源)
      head: {
        title: "O(∩_∩)O哈哈~",
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1.0",
        meta: [
          { name: "keywords", content: "SSR" },
          { name: "description", content: "SSR,CSR,SPA" },
        ],
        link: [
          { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
        ],
        style: [{ children: `body{ color: red; }` }],
        script: [{ src: "http://codercba.com" }],
      },
    },
  
    // 4.SPA
    ssr: false,
  
    router: {
      options: {
        hashMode: true, // 只在 SPA 应用是有效的
      },
    },
  });
  ```

  ```vue
  <!--app.vue-->
  <template>
    <div>
      <h2>Hello Nuxt3</h2>
      <Title>Template Title</Title>
      <Meta name="key" content="..."></Meta>
    </div>
  </template>
  
  <script setup>
  // 1.判断代码执行的环境
  // 2.获取运行时配置(server and client)
  const runtimeConfig = useRuntimeConfig();
  if (process.server) {
    console.log("运行在 server");
    console.log(runtimeConfig.appKey);
    console.log(runtimeConfig.public.baseURL);
  }
  
  if (process.client) {
    console.log("运行在 client");
    // console.log(runtimeConfig.appKey); // not
    console.log(runtimeConfig.public.baseURL);
  }
  
  // console.log(process.env.appKey); // undefined
  
  // 3.获取 appConfig
  let appConifg = useAppConfig();
  // server client
  console.log(appConifg.title);
  console.log(appConifg.theme.primary);
  
  onMounted(() => {
    document.title = appConifg.title;
  });
  
  // 4.动态的该 app 所有的页面添加 head 的内容
  useHead({
    title: "app useHead", // Ref
    bodyAttrs: { class: "body-class-name" },
    meta: [{ name: "dsec", content: "page dsec" }],
    style: [],
    link: [],
    // script: [{ src: "http://xxx.com", body: true }],
  });
  </script>
  ```



## 应用配置

- Nuxt 3 提供了一个 app.config.ts 应用配置文件，用来定义**在构建时确定的公共变量**，例如
  - 网站的标题、主题色 以及任何不敏感的项目配置
- app.config.ts 配置文件中的选项不能使用env环境变量来覆盖，与 runtimeConfig 不同
- 不要将**秘密或敏感信息**放在 app.config.ts 文件中，该文件是客户端公开



## runtimeConifg VS app.config

- runtimeConfig 和 app.config 都用于向应用程序公开变量。要确定是否应该使用其中一种，以下是一些指导原则
  - runtimeConfig：**定义环境变量**，比如：**运行时**需要指定的私有或公共token
  - app.config：**定义公共变量**，比如：**构建时**确定的公共token、网站配置



## Nuxt3 内置组件

- Nuxt3 框架也提供一些内置的组件，常用的如下

  - SEO组件： Html、Body、Head、Title、Meta、Style、Link、NoScript、Base
  - NuxtWelcome：欢迎页面组件，该组件是 [@nuxt/ui的一部分](https://github.com/nuxt/assets)
  - NuxtLayout：是 Nuxt 自带的页面布局组件
  - NuxtPage：是 Nuxt 自带的页面占位组件
    - 需要显示位于目录中的顶级或嵌套页面 pages/
    - 是对 router-view 的封装
  - ClientOnly：该组件中的默认插槽的内容只在客户端渲染
    - 而fallback插槽的内容只在服务器端渲染
  - NuxtLink：是 Nuxt 自带的页面导航组件
    - 是 Vue Router`<RouterLink>`组件 和 HTML`<a>`标签的封装
  - 等等

  ```vue
  <!--app.vue-->
  <template>
    <div>
      <h1>App</h1>
      <!--是 对 router-view 封装 -->
      <NuxtPage></NuxtPage>
    </div>
  </template>
  ```

  ```vue
  <!--pages/index.vue-->
  <template>
    <div>
      <div>我是Home Page</div>
  
      <ClientOnly fallback-tag="h3" fallback="loading....">
        <div>我只会在 client 渲染</div>
      </ClientOnly>
  
      <ClientOnly>
        <div>我只会在 client 渲染</div>
        <template #fallback>
          <h2>服务器端渲染的 loading 页面</h2>
        </template>
      </ClientOnly>
    </div>
  </template>
  ```



## 全局样式

- 编写**全局样式**步骤

  - 在assets中编写全局样式，比如：main.css
  - 接着在nuxt.config中的css选项中配置
  - 接着执行npm i sass -D即可

- 定义**全局变量**步骤

  - 在assets中编写全局变量，比如：global.scss
  - 接着在nuxt.config中的vite选项中配置
  - 然后就可以在**任意组件中或scss文件**中直接使用全局变量

  ```js
  export default defineNuxtConfig({
    css: ["@/assets/styles/main.css", "@/assets/styles/global.scss"],
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            // 自动的给 scss 模块首行添加额外的数据: @use "@/assets/styles/variables.scss" as *;
            additionalData: '@use "@/assets/styles/variables.scss" as *;',
          },
        },
      },
    },
  });
  ```

  ```css
  /* assets/styles/main.css */ 
  .global-style1 {
    color: green;
  }
  
  /* assets/styles/global.scss */ 
  $color: blue;
  
  .global-style2 {
    color: $color;
  }
  ```

  ```vue
  <template>
    <div>
      <div class="global-style">1.App</div>
      <div class="global-style1">2.全局样式</div>
      <div class="global-style2">3.全局样式</div>
    </div>
  </template>
  
  <style scoped lang="scss">
  /* 1.手动导入全局样式 */
  /* @import "assets/styles/global.scss"; */
  
  /* as vb: 给这个模块起一个命名空间 */
  /* as * : 可以省略命名空间 */
  /* @use 和 @import */
  /* @use "assets/styles/global.scss" as bv; */
  /* @use "assets/styles/global.scss" as *; */
  /* color: vb.$color; */
  .global-style {
    color: red;
  }
  </style>
  ```



## 资源的导入

- public目录
  - 用作静态资产的公共服务器，可在应用程序上直接通过 URL 直接访问
  - 比如：引用 public/img/ 目录中的图像文件
    - 在静态 URL 中可用 **/img/nuxt.png**
    - 静态的URL也**支持在背景中使用**
- assets目录
  - assets经常用于存放如样式表、字体或 SVG 的资产
  - 可以使用 **~/assets/** 路径引用位于assets目录中的资产文件
  - **~/assets/** 路径**也支持在背景中使用**



## 字体图标

- 字体图标使用步骤

  - 将字体图标存放在assets目录下
  - 字体文件可以使用 **~/assets/** 路径引用
  - 在nuxt.config配置文件中导入全局样式
  - 在页面中就可以使用字体图标了

  ```js
  export default defineNuxtConfig({
    css: [
      "@/assets/custom-font/iconfont.css", // 自定字体图标
    ],
  });
  ```



## 新建页面

- Nuxt项目中的页面是在 **pages 目录** 下创建的

- 在pages目录创建的页面，Nuxt会根据**该页面的目录结构和其文件名来自动生成对应的路由**

- 页面路由也称为文件系统路由器（file system router），路由是Nuxt的核心功能之一

- **新建页面步骤**

  - 创建页面文件，比如：pages/index.vue
  - 将`<NuxtPage />`内置组件添加到 app.vue
  - 页面如果使用scss那么需要安装：npm i sass -D

- **命令快速创建页面**

  ```sh
  npx nuxi add page home # 创建home页面
  npx nuxi add page detail/[id] # 创建detail页面
  npx nuxi add page user-[role]/[id] # 创建user页面
  ```



## 组件导航

- `<NuxtLink>`是Nuxt内置组件，**是对 RouterLink 的封装**，用来实现页面的导航

  - 该组件底层是一个`<a>`标签，因此使用 a + href 属性也支持路由导航
  - 但是用a标签导航会有触发浏览器默认刷新事件，而 NuxtLink 不会，NuxtLink还扩展了其它的属性和功能

- **应用Hydration后（已激活，可交互），页面导航会通过前端路由来实现。这可以防止整页刷新**

- 当然，手动输入URL后，点击刷新浏览器也可导航，这会导致整个页面刷新

- NuxtLink 组件属性

  - to：支持路由路径、路由对象、URL
  - href：to的别名
  - activeClass：激活链接的类名
  - target：和a标签的target一样，指定何种方式显示新页面
  - 等等

  ```vue
  <template>
    <div>
      <div>
        <NuxtLink to="/">
          <button>home</button>
        </NuxtLink>
  
        <NuxtLink :to="{ path: '/category', query: { id: 100 } }">
          <button>category</button>
        </NuxtLink>
  
        <NuxtLink href="/cart">
          <button>cart</button>
        </NuxtLink>
  
        <NuxtLink href="/profile" active-class="active">
          <button>profile</button>
        </NuxtLink>
  
        <NuxtLink href="/find" replace>
          <button>find replace</button>
        </NuxtLink>
  
        <a href="/more">
          <button>more a 标签</button>
        </a>
  
        <NuxtLink to="https://www.jd.com" target="_blank">
          <button>jd.com</button>
        </NuxtLink>
      </div>
  
      <NuxtPage></NuxtPage>
    </div>
  </template>
  ```



## 编程导航

- Nuxt3除了可以通过`<NuxtLink>`内置组件来实现导航，同时也支持**编程导航：navigateTo**
- 通过编程导航，在应用程序中就可以轻松**实现动态导航**了，但是**编程导航不利于SEO**
- **navigateTo 函数在服务器端和客户端都可用，也可以在插件、中间件中使用，也可以直接调用以执行页面导航，例如**
  - 当用户触发该goToProfile()方法时，我们通过navigateTo函数来实现动态导航
  - 建议：goToProfile方法总是返回 **navigateTo 函数（该函数不需要导入）或 返回异步函数**
- navigateTo(to, options)
  - to: 可以是纯字符串 或 外部URL 或 路由对象，如右图所示
  - options: 导航配置，可选
    - replace：默认为false，为true时会替换当前路由页面
    - external：默认为false，不允许导航到外部连接，true则允许
    - 等等

- Nuxt3中的编程导航除了可以通过 **navigateTo** 来实现导航，同时也支持 **useRouter (或 Options API 的 this.$router)**

- useRouter常用的API

  - back：页面返回，和 一样 router.go(-1)
  - forward：页面前进，同 router.go(1)
  - go：页面返回或前进，如 router.go(-1) or router.go(1)
  - push：以编程方式导航到新页面。建议改用 navigateTo 。支持性更好
  - replace：以编程方式导航到新页面，但会替换当前路由。建议改用 navigateTo 。支持性更好
  - beforeEach：路由守卫钩子，每次导航前执行（**用于全局监听**）
  - afterEach：路由守卫钩子，每次导航后执行（用于全局监听）

  ```vue
  <template>
    <div>
      <button @click="goToCategory">category</button>
  
      <button @click="goToCart">cart</button>
  
      <button @click="goBack">Back</button>
  
      <NuxtPage></NuxtPage>
    </div>
  </template>
  
  <script setup>
  function goToCategory() {
    return navigateTo("/category");
  
    // return navigateTo(
    //   { path: '/category', query: { id: 100 } },
    //   { replace: true } // 是否是替换当前的页面
    // );
  
    // return navigateTo("https://www.jd.com", { external: true });
  }
  
  // useRouter
  let router = useRouter();
  function goToCart() {
    router.push("/cart"); // navigateTo
  }
  function goBack() {
    router.go(-1);
  }
  
  // 路由的守卫
  router.beforeEach((to, form) => {
    console.log(to);
    console.log(form);
  });
  </script>
  ```



## 动态路由

- Nuxt3 和 Vue一样，也是支持动态路由的，只不过在Nuxt3中，**动态路由也是根据目录结构和文件的名称自动生成**
- 动态路由语法
  - 页面组件目录 或 页面组件文件都 **支持 [ ] 方括号语法**
  - 方括号里编写动态路由的参数
- 例如，动态路由 支持如下写法
  - pages/detail/[id].vue ---> /detail/:id
    - /detail/001
  - pages/detail/user-[id].vue ---> /detail/user-:id
    - /detail/user-001
  - pages/detail/[role]/[id].vue ---> /detail/:role/:id
    - /detail/admin/001
  - pages/detail-[role]/[id].vue ---> /detail-:role/:id
    - /detail-admin/001

- 注意事项
  - **动态路由 和 index.vue 不能同时存在**， Next.js则可以



## 路由参数

- 动态路由参数

  - 通过 [] 方括号语法定义动态路由，比如：/detail/[id].vue
  - 页面跳转时，在URL路径中传递动态路由参数，比如：/detail/10010
  - 目标页面通过 **route.params** 获取动态路由参数

- 查询字符串参数

  - 页面跳转时，通过查询字符串方式传递参数，比如：/detail/10010?name=strive
  - 目标页面通过 **route.query** 获取查询字符串参数

  ```vue
  <script lang="ts" setup>
    const route = useRoute();
  
    console.log(route.params.id);
    console.log(route.query.name);
  </script>
  ```



##  404 Page

- **捕获所有不配路由**（即 404 not found 页面）

  - 通过在方括号内添加三个点 ，如：[...slug].vue 语法，其中slug可以是其它字符串
  - 除了支持在 pages 根目录下创建，也支持在其子目录中创建
  - Nuxt3正式版不支持404.vue页面了，以前的候选版是支持的404.vue，但是Next.js是支持

  ```vue
  <script lang="ts" setup>
    const route = useRoute();
    console.log(route.params.slug);
  </script>
  ```



## 路由匹配规则

- 路由匹配需注意的事项
  - 预定义路由优先于动态路由，动态路由优先于捕获所有路由。请看以下示例
    - 1.预定义路由：pages/detail/create.vue
      - **将匹配 /detail/create**
    - 2.动态路由：pages/detail/[id].vue
      - 将匹配 /detail/1, /detail/abc 等
      - **但不匹配 /detail/create 、/detail/1/1、/detail/** 等
    - 3.捕获所有路由：pages/detail/[...slug].vue
      - 将匹配 /detail/1/2, /detail/a/b/c 等
      - **但不匹配 /detail** 等



## 嵌套路由

- Nuxt 和 Vue一样，也是支持嵌套路由的，只不过在Nuxt中，**嵌套路由也是根据目录结构和文件的名称自动生成**
- 编写嵌套路由步骤
  - 创建一个**一级路由**，如：parent.vue
  - 创建一个与一级路由同名同级的文件夹，如：parent
  - 在parent文件夹下，创建一个嵌套的**二级路由**
    - 如：parent/child.vue则为一个二级路由页面
    - 如：parent/index.vue则为**二级路由默认的页面**
  - **需要在parent.vue中添加 NuxtPage 路由占位**



## 路由中间件

- Nuxt 提供了一个可定制的**路由中间件**，用来**监听路由的导航，包括：局部和全局监听**（支持再服务器和客户端执行）

- 路由中间件分为三种

  - 匿名（或内联）路由中间件
    - 在页面中使用 **definePageMeta** 函数定义，可监听局部路由。当注册多个中间件时，会按照注册顺序来执行
  - 命名路由中间件
    - 在 **middleware 目录**下定义，并会自动加载中间件（**命名规范 kebab-case**）
  - 全局路由中间件（优先级比前面的高，支持两端）
    - 在 **middleware 目录**中，**需带.global后缀的文件**，每次路由更改都会自动运行

  ```js
  // middleware/auth.global.ts
  // 这个优先级别是比较高的
  export default defineNuxtRouteMiddleware((to, from) => {
    console.log("global 第三个中间件");
    console.log(to);
  });
  ```

  ```js
  // middleware/home.ts
  // server: 刷新浏览器器的会在服务器端执行
  // client: 在客户端切换路由, 只会在客户端执行
  export default defineNuxtRouteMiddleware((to, from) => {
    console.log("home 第二个中间件");
  });
  ```

  ```vue
  <template>
    <div>Page Index</div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    // 路由中间件(监听路由)
    middleware: [
      // 第一个中间件
      function (to, from) {
        console.log("第一个中间件");
        // 如果返回的是 "" null 或 没有返回语句, 那么就会执行下一个中间件
        // 如果返回的是 navigateTo, 直接导航到新的页面
        // return navigateTo("/detail02");
      },
      // 第二个中间件
      "home",
    ],
  });
  </script>
  ```



## 路由验证

- Nuxt支持**对每个页面路由进行验证**，我们可以通过**definePageMeta**中的**validate**属性来对路由进行验证

  - validate属性接受一个回调函数，回调函数中以 route 作为参数
  - 回调函数的返回值支持
    - **返回 bool 值**来确定是否放行路由
      - true 放行路由
      - false 默认重定向到内置的 404 页面
    - **返回对象**
      - { statusCode:401 }  返回自定义的 401 页面，验证失败

  ```vue
  <script setup>
  definePageMeta({
    // 路由参数的验证
    validate: (route) => {
      console.log(route.params.id);
      // return /^\d+$/.test(route.params.id as string);
  
      // return false  // 404 -> 500  401 ...
      return {
        statusCode: 401, // 路由验证失败
        statusMessage: "validata router error",
      };
    },
  });
  </script>
  ```

- 路由验证失败，可以自定义错误页面

  - 在项目根目录（不是pages目录）新建 error.vue

  ```vue
  <template>
    <div>
      <h2>Error Page {{ error }}</h2>
  
      <div>
        <button @click="goHome">Home</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    error: Object,
  });
  
  function goHome() {
    clearError({ redirect: "/" });
  }
  </script>
  ```



## 布局

- Layout布局是**页面的包装器**，可以将多个**页面共性东西抽取到 Layout布局 中**

  - 例如：每个页面的**页眉和页脚组件**，这些具有共性的组件我们是可以写到一个Layout布局中

- Layout布局是使用`<slot>组件`来显示**页面中的**内容

- Layout布局有两种使用方式

  - 方式一：默认布局
    - 在layouts目录下新建默认的布局组件，比如：**layouts/default.vue**
    - 然后在app.vue中通过`<NuxtLayout>`内置组件来使用
  - 方式二：自定义布局（Custom Layout）
    - 继续在layouts文件夹下新建 Layout 布局组件，比如: layouts/custom-layout.vue
    - 然后在app.vue中给`<NuxtLayout>`内置组件 **指定name属性** 的值为：custom-layout
      - 也支持在页面中使用 **definePageMeta 宏函数来指定 layout 布局**

  ```vue
  <!--layouts/custom-layout.vue-->
  <template>
    <div class="custom-layout">
      <slot></slot>
    </div>
  </template>
  ```

  ```vue
  <!--layouts/default.vue-->
  <template>
    <div class="layout">
      <div class="header">Header</div>
      <slot></slot>
      <div class="footer">Footer</div>
    </div>
  </template>
  ```

  ```vue
  <!--pages/login.vue-->
  <template>
    <div>Page Login</div>
  </template>
  
  <script setup>
    // 该页面重新定义使用的 layout
    definePageMeta({ layout: "custom-layout" });
  </script>
  ```

  ```vue
  <!--app.vue-->
  <template>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </template>
  ```



## 渲染模式

- 浏览器 和 服务器都可以解释 JavaScript 代码，都可以将 Vue.js 组件呈现为 HTML 元素。此过程称为**渲染**

  - 在客户端将 Vue.js 组件呈现为 HTML 元素，称为：客户端渲染模式
  - 在服务器将 Vue.js 组件呈现为 HTML 元素，称为：服务器渲染模式

- 而Nuxt3是支持多种渲染模式，比如

  - 客户端渲染模式（CSR）： 只需将 ssr 设置为 false
  - 服务器端渲染模式（SSR）：只需将 ssr 设置为 true
  - 混合渲染模式（SSR | CSR | SSG | SWR）：需在 routeRules 根据每个路由动态配置渲染模式（beta版本）

  ```js
  // nuxt.config.ts
  export default defineNuxtConfig({
    // ssr: false,
    routeRules: {
      "/": { ssr: true }, // ssr
      "/category": { ssr: false }, // spa
      // 3.0.0-12rc -> NetLify
      "/cart": { static: true }, // 只会在构建时生成一次静态页面
      "/profile": { swr: true }, // 只会生成多次静态页面(会自动重新验证页面时候需要重新生成)
    },
  });
  ```



## Nuxt插件

- Nuxt3支持自定义插件进行扩展，创建插件有两种方式

  - 方式一：直接使用 **useNuxtApp()** 中的 provide(name, vlaue) 方法直接创建，比如：可在App.vue中创建
    - useNuxtApp 提供了访问 Nuxt 共享**运行时上下文**的方法和属性（两端可用）：provide、hooks、callhook、vueApp等
  - 方式二：在 plugins 目录中创建插件（推荐）
    - **顶级和子目录index文件**写的插件会在**创建Vue应用程序时**会自动加载和注册
    - **.server 或 .client** 后缀名插件，可区分服务器端或客户端，用时需区分环境

- 在 plugins 目录中创建插件

  - 在 plugins 目录下创建 plugins/price.ts 插件
  - 接着 **defineNuxtPlugin** 函数创建插件，参数是一个回调函数
  - 然后在组件中使用 **useNuxtApp()** 来拿到插件中的方法

- 注意事项

  - 插件**注册顺序**可以通过在文件名前加上一个**数字来控制**插件注册的顺序
    - 比如：plugins/1.price.ts、plugins/2.string.ts、plugins/3.date.ts

  ```vue
  <!-- pages/index.vue -->
  <template>
    <div>Home Page</div>
  </template>
  
  <script setup>
  const nuxtApp = useNuxtApp();
  
  // 使用插件
  console.log(nuxtApp.$formData());
  console.log(nuxtApp.$version);
  if (process.client) {
    console.log(nuxtApp.$formPrice(100.789));
  }
  </script>
  ```

  ```js
  // plugins/1.price.client.ts
  export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        // 自定义的插件, 格式化价格的插件 (创建Vue实例时就会自动注册好)
        formPrice: (price: number) => {
          return price.toFixed(2);
        },
      },
    };
  });
  ```

  ```vue
  <!-- app.vue -->
  <script setup>
  // 方式一: 创建插件
  const nuxtApp = useNuxtApp();
  
  nuxtApp.provide("formData", () => {
    return "2022-2-22";
  });
  nuxtApp.provide("version", "1.0.0");
  </script>
  ```



## App Lifecycle Hooks

- 监听App的生命周期的Hooks
  - App Hooks 主要可由 Nuxt 插件 使用 hooks 来监听 生命周期，也可用于 Vue 组合 API
  - 但是，如在组件中编写hooks来监听，那 create和setup hooks就监听不了，因为这些hooks已经触发完了监听
- 语法：nuxtApp.hook(app:created, func)
  - https://nuxt.com/docs/api/advanced/hooks#lifecycle-hooks



## 组件生命周期

- 因为没有任何动态更新，所以像 **mounted** 或者 **updated** 这样的生命周期钩子不会在 SSR 期间被调用，而只会在客户端运行。只有 **beforeCreate** 和 **created** 这两个钩子会在 SSR 期间被调用

- 你应该避免在 **beforeCreate** 和 **created** 中使用会产生副作用且需要被清理的代码。这类副作用的常见例子是使用 **setInterval** 设置定时器。我们可能会在客户端特有的代码中设置定时器，然后在 **beforeUnmount** 或 **unmounted** 中清除。然而，由于 unmount 钩子不会在 SSR 期间被调用，所以定时器会永远存在。为了避免这种情况，请将含有副作用的代码放到 **mounted** 中
  - 客户端渲染
    - beforeCreate -> setup()
    - created -> setup()
    - beforeMount -> onBeforeMount
    - mounted -> onMounted
    - beforeUpdate -> onBeforeUpdate
    - updated -> onUpdated
    - beforeDestroy -> onBeforeUnmount
    - destroyed -> onUnmounted
    - errorCaptured -> onErrorCaptured
  - 服务器端渲染
    - beforeCreate -> setup
    - created



## 发起网络请求

- 在Nuxt中数据的获取主要是通过下面4个函数来实现（支持Server和Client ）

  - <b>useAsyncData(key, func)：</b>专门解决异步获取数据的函数，**会阻止**页面导航
    - 发起异步请求需用到 **$fetch** 全局函数（类似Fetch API）
      - **$fetch(url, opts)** 是一个类原生fetch的**跨平台请求库**
  - <b>useFetch(url, opts)：</b>用于获取任意的URL地址的数据，**会阻止**页面导航
    - 本质是 useAsyncData(key, () => $fetch(url, opts)) 的语法糖
  - <b>useLazyFetch(url, opts)：</b>用于获取任意URL数据，**不会阻止**页面导航
    - 本质和 useFetch 的 lazy 属性设置为 true 一样
  - <b>useLazyAsyncData(key, func)：</b>专门解决异步获取数据的函数。 **不会阻止**页面导航
    - 本质和useAsyncData的lazy属性设置为true一样

- 注意事项

  - **这些函数只能用在 setup or Lifecycle Hooks 中**

  ```vue
  <script setup>
  const BASE_URL = "http://xxx.com/api";
  
  // 1.使用 $fetch 来发起网络请求
  // server and client
  $fetch(BASE_URL + "/homeInfo", { method: "GET" }).then((res) => {
    console.log(res);
  });
  
  // 2.使用官方提供的 hooks API (在刷新页面时, 可以减少客户端发起的一次请求)
  const { data } = await useAsyncData("homeInfo", () => {
    return $fetch(BASE_URL + "/homeInfo", { method: "GET" });
  });
  
  // 3.useAsyncData 的简写 useFetch
  const { data } = await useFetch(BASE_URL + "/homeInfo", { method: "GET" });
  
  // 4.useFetch 默认会阻塞 页面的导航
  const { data } = await useFetch(BASE_URL + "/homeInfo", {
    method: "GET",
    lazy: true, // 不会阻塞页面的导航
  });
  
  // 确保一定可以拿到这个data的数据
  watch(data, (newData) => {
    console.log(newData);
  });
  
  // 5.简写
  const { data } = await useLazyFetch(BASE_URL + "/homeInfo", { method: "GET" });
  
  // 确保一定可以拿到这个data的数据(client)
  watch(data, (newData) => {
    console.log(newData);
  });  
  
  // 6. useFetch 的 options GET
  const { data } = await useFetch("/homeInfo", {
    method: "GET",
    baseURL: BASE_URL,
    query: { name: "strive" },
  });
  
  // 7. useFetch 的 options POST
  const { data } = await useFetch("/goods", {
    method: "POST",
    baseURL: BASE_URL,
    body: { count: 1 },
  });
  
  // 8.拦截器
  const { data } = await useFetch("/goods", {
    method: "POST",
    baseURL: BASE_URL,
    body: { count: 1 },
    // 请求的拦截 (server and client)
    onRequest({ request, options }) {
      // options.headers = { token: "xxxx" };
    },
    onRequestError({ request, options, error }) {
      console.log("onRequestError");
    },
    onResponse({ request, response, options }) {
      console.log("onResponse");
      response._data.data = { name: "哈哈哈" };
    },
    onResponseError({ request, response, options, error }) {
      console.log("onResponseError");
    },
  });
  </script>
  ```



## useFetch VS axios

- 获取数据Nuxt推荐使用 useFetch 函数，为什么不是 axios ?
  - useFetch 底层调用的是$fetch函数，该函数是基于[unjs/ohmyfetch](unjs/ohmyfetch)请求库，并与原生的Fetch API有者相同API
  - unjs/ohmyfetch 是一个跨端请求库： A better fetch API. Works on node, browser and workers
    - 如果运行在服务器上，它可以智能的处理对 API接口的直接调用
    - 如果运行在客户端行，它可以对后台提供的 API接口 正常的调用（类似 axios），当然也支持第三方接口的调用
    - 会自动解析响应和对数据进行字符串化
  - useFetch 支持智能的类型提示和智能的推断 API 响应类型
  - 在setup中用useFetch获取数据，会减去客户端重复发起的请求
- useFetch（url, options）语法
  - 参数
    - url：请求的路径
    - options：请求配置选项
    - method、query ( 别名 params )、body、headers、baseURL
    - onRequest、onResponse、lazy ...
  - 返回值：data, pending, error, refresh



## Server API

- Nuxt3 提供了编写后端服务接口的功能，编写服务接口可以在server/api目录下编写

- 比如：编写一个 /api/homeinfo 接口

  - 在server/api目录下新建 homeinfo.ts
  - 接在在该文件中使用 defineEventHandler 函数来定义接口（支持 async）
  - 然后就可以用useFetch函数轻松调用：/api/homeinfo 接口了

  ```js
  // server/api/login.post.ts
  export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const method = getMethod(event);
    const body = await readBody(event);
    const bodyRaw = await readRawBody(event);
  
    // 连接数据库
    return {
      code: 200,
      data: { name: "strive", age: 18, token: "xxx" },
    };
  });
  
  const { data } = await useFetch("/api/login?id=100", {
    method: "POST",
    body: { usename: "admin", password: 123456 },
  });
  ```



## 全局状态共享

- Nuxt跨页面、跨组件全局状态共享可使用 useState（支持Server和Client ）

  - `useState<T>(init?: () => T | Ref<T>): Ref<T>`
  - `useState<T>(key: string, init?: () => T | Ref<T>): Ref<T>`
  - 参数
    - init：为状态提供**初始值的函数**，该函数也支持返回一个Ref类型
    - key：唯一key，确保在跨请求获取该数据时，保证数据的唯一性。**为空时会根据文件和行号自动生成唯一key**
  - 返回值：Ref 响应式对象

- useState 具体使用步骤如下

  - 在 **composables 目录**下创建一个模块，如：composables/states.ts
  - 在states.ts中使用 **useState** 定义需全局共享状态，并导出
  - 在组件中导入 states.ts 导出的全局状态

- useState 注意事项

  - useState 只能用在 setup 函数 和 [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html#composition-api-lifecycle-hooks) 中
  - useState 不支持classes，functions or symbols类型，因为这些类型不支持序列化

  ```js
  // composables/useCounter.ts
  export default function () {
    return useState("counter", () => 100); // Ref
  }
  
  // export const useCounter = () => {
  //   return useState("counter", () => 100);
  // };
  ```

  ```vue
  <script setup>
    // 如果导出的是匿名函数, 则根据文件名来命名（useCounter.ts）
    const counter = useCounter();
  </script>
  ```



## Nuxt3 集成 Pinia

- 安装依赖

  ```sh
  npm install @pinia/nuxt --save
  ```

  - @pinia/nuxt 会处理state同步问题，比如不需要关心序列化或 XSS 攻击等问题

  ```sh
  npm install pinia --save
  ```

  - 如有遇到pinia安装失败，可以添加 --legacy-peer-deps 告诉 NPM 忽略对等依赖并继续安装。或使用yarn

- Nuxt 应用接入 Pinia

  - 在nuxt.config文件中添加：modules: [‘@pinia/nuxt‘] ，如下图所示

  ```js
  export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
  });
  ```



## Pinia 使用步骤

- Pinia 使用步骤

  - 在store文件夹中定义一个模块，比如：store/counter.ts
  - 在 store/counter.ts 中使用defineStore函数来定义 store 对象
  - 在组件中使用定义好的 store 对象

  ```js
  // store/home.ts
  import { defineStore } from "pinia";
  
  export interface IState {
    counter: number;
  }
  
  export const useHomeStore = defineStore("home", {
    state: (): IState => {
      return { counter: 0 };
    },
    actions: {
      increment() {
        this.counter++;
      },
    },
  });
  ```

  ```vue
  <template>
    <div>
      <div>{{ counter }}</div>
      <button @click="addCounter">+1</button>
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from "pinia";
  import { useHomeStore } from "~/store/home";
  
  const homeStore = useHomeStore();
  const { counter } = storeToRefs(homeStore);
  function addCounter() {
    homeStore.increment();
  }
  </script>
  ```



## useState VS Pinia

- Nuxt跨页面、跨组件全局状态共享，既可以使用 useState，也可以使用Pinia，那么他们有什么异同呢？
- 它们的共同点
  - 都支持全局状态共享，共享的数据都是响应式数据
  - 都支持服务器端和客户端共享
- 但是 Pinia 比 useState 有更多的优势，比如
  - 开发工具支持（Devtools）
    - 跟踪动作，更容易调试
    - store可以出现在使用它的组件中
    - ....
  - 模块热更换
    - 无需重新加载页面即可修改store数据
    - 在开发时保持任何现有状态
  - 插件：可以使用插件扩展 Pinia 功能
  - 提供适当的 TypeScript 支持或自动完成



## 购买 - 阿里云服务器

- 阿里云服务器购买地址：https://aliyun.com/
  - 打开控制台
  - 菜单找到**云服务器 ECS**
  - 创建我的ECS
  - 服务器的配置
    - 实例：2 vCPU，4 GiB，ARM 计算（最便宜的那个）
    - 镜像：CentOS（最新版本）
    - 随实例释放勾上
  - 配置安全组
  - 系统配置，自定义密码
  - 确认订单，创建实例



## 连接 - 阿里云服务器

- VS Code 安装：Remote SSH 插件
- Remote SSH 连接远程服务器
  - 新建远程
  - ssh root@IP地址（公）



## 安装Node和PM2

- 安装 Node

  ```sh
  yum install nodejs
  yum install npm
  ```

- 认识PM2（Process Manager）

  - PM2是一个守护进程管理器, 它将帮助管理和保持你的在线应用程序
  - 更简单的理解：负责管理Node、Python等程序，并能让程序一直保持在后台运行

- 安装PM2

  ```sh
  npm install -g pm2
  ```

- 管理Node版本（可选）

  ```sh
  npm install -g n
  n --version # 查看版本
  ```



## PM2 常用命令

- PM2 常用命令和配置文件

  - https://pm2.keymetrics.io/docs/usage/application-declaration

  ```sh
  # 命名进程
  pm2 start app.js --name my-api
  # 显示所有进程状态
  pm2 ist
  # 停止指定的进程
  pm2 stop 0
  # 停止所有进程
  pm2 stop all
  # 重启所有进程
  pm2 restart all
  # 重启指定的进程(id)
  pm2 restart 0
  
  # 杀死指定的进程
  pm2 delete 0
  # 杀死全部进程
  pm2 delete al1
  
  # 后台运行pm2, 启动4个app.js, 实现负载均衡
  pm2 start app.js -i 4
  ```



## 项目打包和部署

- 项目打包

  - 执行 npm run build ，生成的.output文件夹就是部署产物（目前不支持中文路径）
  - 执行 npm run preview 本地预览效果

- 使用Node部署

  ```sh
  node .output/server/index.mjs # 运行 
  PORT=8888 node .output/server/index.mjs # 指定端口
  ```

  - PORT：是动态添加的环境变量

- 使用PM2部署（推荐）

  ```sh
  pm2 init simple # 自动生成 ecosystem 配置文件
  pm2 start ecosystem.config.js # 启动应用
  ```

  - instances：指定启动实例（进程）的个数
  - exec_mode：运行的模式：cluster模式和fork模式（默认）

  ```js
  module.exports = {
    apps: [
      {
        name: "nuxt3-oppo",
        script: "./.output/server/index.mjs",
        instances: "max", // 指定需要启动多少个实例
        exec_mode: "cluster", // 集群模式, 负载均衡
        env: {
          PORT: 8888
        }
      }
    ]
  }
  ```



# Next

## 什么是Next？

- Next.js 是一个**React框架**，支持CSR、SSR、SSG、ISR (Incremental Static Regeneration)等渲染模式
- Next.js 提供了创建 Web 应用程序的构建块，比如
  - 用户界面、路由、数据获取、渲染模式、后端服务等等
- Next.js 不但处理 React 所需的工具和配置，还提供额外的功能和优化，比如
  - UI构建， CSR、SSR、SSG、ISR 渲染模式，Routing、Data Fetching等等
- 中文官网：https://www.nextjs.cn/docs/getting-started
- 英文官网：https://nextjs.org/docs/getting-started



## Next 发展史

- Next.js 于**2016 年 10 月 25**日首次作为开源项目发布在GitHub上，最初是基于六个原则开发的
  - 开箱即用、无处不在的JS、所有函数用JS编写、自动代码拆分和服务器渲染、可配置数据获取、预期请求和简化部署
- Next.js 2.0 于 2017 年 3 月发布，改进后的版本让小型网站的工作变得更加容易，还提高了构建和热模块替换效率
- 7.0 版于 2018 年 9 月发布，改进了错误处理并支持 React 的上下文 API。升级到了webpack4
- 8.0 版于 2019 年 2 月发布，第一个提供 Serverless 部署的版本
- **2020 年 3 月发布的 9.3 版包括各种优化和全局Sass和CSS模块支持**
- 2020 年 7 月 27 日，Next.js 9.5 版发布，增加了增量静态再生成、重写和重定向支持等新功能
- 2021 年 6 月 15 日，Next.js 版本 11 发布，其中包括：Webpack5 支持
- 2021 年 10 月 26 日，Next.js 12 发布，添加了 Rust 编译器，使编译速度更快
- **2022 年 10 月 26 日，Vercel 发布了 Next.js 13**
  - 带来了一种新的路由模式，增加了app目录 、布局布局、服务器组件和一组新的数据获取方法等（目前是 beta 版本）
  - 编译和压缩等由 Babel + Terser 换为 SWC（ Speedy Web Compiler ），构建工具增加了 Turbopack



## Next 特点

- 开箱即用，快速创建
  - Next.js 已经帮我集成好了各种技术栈，比如：React、webpack、路由、数据获取、SCSS、TypeScript等等
  - 也提供了专门的脚手架：create-next-app
- 约定式路由（目录结构即路由）
  - Next.js和Nuxt3一样，所有的路由都是根据pages目录结构自动生成。但在 Next.js 13 beta 版本增加了app目录
- 内置CSS模块和Sass支持
  - 自从Next.js 9.3 以后就内置了CSS模块和Sass支持，也是开箱即用
- 全栈开发能力
  - Next.js不但支持前端开发，还支持编写后端代码，比如：可开发登录验证、存储数据、获取数据等接口
- 多种渲染模式：支持CSR、SSR、SSG、ISR等渲染模式，当然也支持混合搭配使用
- 利于搜索引擎优化
  - Next.js支持使用服务器端渲染，同时它也是一个很棒的静态站点生成器，非常利于SEO和首屏渲染



## Next VS Nuxt3

- Next.js 和 Nuxt3的相同点
  - 利于搜索引擎优化，都能提高首屏渲染速度
  - 零配置，开箱即用
  - 都支持目录结构即路由、支持数据获取、支持TypeScript
  - 服务器端渲染、静态网站生成、客户端渲染等
  - 都需要 Node.js 服务器，支持全栈开发
- Next.js 和 Nuxt3区别
  - Next.js 使用的是React技术栈：React 、webpack 、express 、node.....
  - Nuxt3 使用的是Vue技术栈：Vue、webpack、vite、h3、nitro、node.....
  - Nuxt3 支持组件、组合 API、Vue API等自动导入，Next.js则不支持
  - Next.js 社区生态、资源和文档都会比Nuxt3友好（star数： Nuxt3 -> 41.6k 和 Next.js -> 96.8k ）
- Next.js 和 Nuxt3如何选择？ 个人建议如下
  - 首先根据自己擅长的技术栈来选择，擅长Vue选择Nuxt3，擅长React选择Next.js
  - 需要更灵活的，选择Next.js
  - 需要简单易用、快速上手的，选择Nuxt3



## Next 环境搭建

- 在开始之前，请确保您已安装推荐的设置

  - Node.js （**要求 Node.js 14.6.0** 或 更高版本）
  - Git（window下可以用其随附的 Git Bash 终端命令）
  - Visual Studio Code

- 创建一个项目，项目名不支持大写

  ```sh
  npx create-next-app@latest --typescript
  
  yarn create next-app --typescript
  
  pnpm create next-app -typescript
  
  npm i create-next-app@latest -g && create-next-app
  ```

- 运行项目

  ```sh
  npm run dev
  
  yarn dev
  
  pnpm dev
  ```



## Next 目录结构

```sh
|-- hello-next # Next.js项目名称
    |-- pages # 定义页面文件夹，路由会根据该页面目录结构和文件名自动生成
        |-- _app.tsx # App组件，应用程序的入口组件
        |-- api # 编写后台接口的文件夹
            |-- hello.ts # 定义了一个接口，接口地址为: /api/hello
        |-- index.tsx # 项目的首页
    |-- public # 静态资源目录，不参与打包
    |-- styles # 编写样式目录
        |-- Home.module.css # 局部css module样式
        |-- globals.css # 全局样式，需要在 _app.tsx 中导入
    |-- next-env.d.ts # Next.js 专有的类型声明文件。不应该删除它或编它，也不需要提交到qit仓库中
    |-- next.config.js # 可定制 Next.js 框架的配置，比如: 环境变量、重定向、webpack等
    |-- tsconfig.json # Typescript的配置文件
```



## 入口组件

- _app.tsx是项目的入口组件，主要作用
  - 可以扩展自定义的布局（Layout）
  - 引入全局的样式文件
  - 引入Redux状态管理
  - 引入主题组件等等
  - 全局监听客户端路由的切换



## ts.config.json 的配置

- Next.js默认是没有配置路径别名的，我们可以在ts.config.json中配置模块导入的别名

  - baseUrl：配置允许直接从项目的根目录导入，比如： `import Button from 'components/button'`
  - paths：允许配置模块别，比如：`import Button from '@/components/button'`

  ```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/assets/*": ["assets/*"],
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/pages/*": ["pages/*"]
    }
  }
  ```

  - 注意：如生效可以重启编辑器



## 环境变量

- 定义环境变量的4种方式
  - .env：所有环境下生效的默认设置
  - .env.development：**执行 next dev 时加载并生效**
  - .env.production：**执行 next start 时加载并生效**
  - **.env.local：始终覆盖上面文件定义的默认值**。所有环境生效，通常只需一个 .env.local 文件就够了（常用存储敏感信息）
- 环境变量定义语法（支持变量，例如 $PORT )
  - 大写单词，多个单词使用下划线，比如：DB_HOST=localhost
  - **[添加 NEXT_PUBLIC_ 前缀会额外暴露给浏览器](https://www.nextjs.cn/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)**，比如：NEXT_PUBLIC_ANALYTICS_ID=aaabbbccc
- 环境变量的获取
  - .env 文件中定义环境变量会加载到 process.env 中。两端都可**直接通过 process.env.xxx 访问使用**（不支持解构）
- 注意事项
  - 由于 .env、.env.development 和 .env.production 文件定义了默认设置，需提交到源码仓库中
  - 而 **.env.*.local 应当添加到 .gitignore** 中，因为这类文件是需要被忽略的



## Next 配置

- next.config.ts 配置文件位于项目根目录，可对Next.js进行自定义配置，比如，可以进行如下配置
  - reactStrictMode：是否启用严格模式，辅助开发，避免常见错误，例如：可以检查过期API来逐步升级
  - env：配置环境变量，**配置完需要重启**
    - 会添加到 **process.env.xx** 中
    - **配置的优先级： next.config.js中的env > .env.local > .env**
  - basePath：要在域名的子路径下部署 Next.js 应用程序，您可以使用basePath配置选项
    - basePath：允许为应用程序设置URl路径前缀
    - 例如 basePath=/music, 即用 /music 访问首页，而不是默认 /
  - images：可以配置图片URL的白名单等信息
  - swcMinify：用 Speedy Web Compiler 编译和压缩技术，而不是 Babel + Terser 技术
- 更多的配置： https://nextjs.org/docs/api-reference/next.config.js/introduction



## 内置组件

- Next.js框架也提供了几个内置组件，常用的有
  - Head：用于将**新增的标签**添加到页面的 **head** 标签中，需要从 next/head 中导入
    - 如果想要给**所有页面**统一添加的，那需在pages目录下新建 **_document.js** 文件来定制HTML页面
  - Script：将一个**script**标签到页面的 **body** 中（不支持在_document.js 中用），需要从 next/script 中导入
  - Link：可以启用客户端的路由切换，需从 next/link 导入
  - Image：内置的图片组件（对 img 的增强）需从 next/image 导入



## Image组件

- Image 内置的图片组件，**是对 img 的增强**，需从 next/image 导入
- Image 组件常用属性
  - src 属性
    - 引入本地图片资源，会自动确认图片的宽高
    - 引入外部资源需，需**手动**给宽高，**还需配置白名单**
  - width/height：是 number 类型，**不支持100%等**字符串
  - priority：将图片标记为 LCP ( Largest Contentful Paint )元素，允许**预加载**图像
    - **建议大图，并在首屏可见**时才应使用该属性。默认为 false
  - placeholder：图片占位，默认值为empty，当值为blur需和blurDataURL一起用
  - fill：让图片填充父容器大小，父容器需设为相对定位



## 全局和局部样式

- Next.js 允许在 JavaScript 文件中直接通过 **import** 关键字来导入CSS 文件（不是 @import ）
- 全局样式
  - 在 **assets** 目录或 **styles** 目录下编写，然后在 **pages/_app.js** 入口组件中导入
  - 也支持导入node_modules中样式，**导入文件后缀名不能省略**
- 局部样式
  - Next.js 默认是支持**CSS Module**的，如：[name].module.css
  - CSS Module 中的选择器会**自动创建一个唯一的类名**
  - 唯一类名保证在不同的文件中使用相同CSS类名，也不用担心冲突
- 内置Scss支持
  - 用 scss 之前，需安装Sass：npm i sass -D
  - xxx.module.scss文件:export中定义的变量，**可导出供JavaScript中用**



## 静态资源引用

- public目录

  - 常用于存放静态文件，例如：robots.txt、favicon.ico、img等，并直接对外提供访问
  - 访问需以 / 作为开始路径，例如：添加了一张图片到 public/me.png 中
    - 可通过静态URL：**/me.png 访问**，如右图
    - 静态URL也**支持在背景中使用**
  - 注意： 确保静态文件中没有与 pages/ 下的文件重名，否则导致错误

- assets目录

  - 常用存放样式、字体 、图片或 SVG 等文件
  - 可用 **import 导入** 位于assets目录的文件，支持**相对路径和绝对路径**

  ```js
  import Avatar1 from "../assets/images/avatar.png"
  import Avatar2 from "@/assets/images/avatar.png"
  ```

  - 背景图片和字体： url("~/assets/images/bym.png")



## 字体图标

- 字体图标使用步骤
  - 将字体图标存放在 assets 目录下
  - 字体文件可以使用相对路径和绝对路径引用
  - 在_app.tsx文件中导入全局样式
  - 在页面中就可以使用字体图标了



## 新建页面

- Next.js项目页面需在**pages目录**下新建（**.js, .jsx, .ts, or .tsx**）文件，该文件需**导出的React组件**
- Next.js 会根据 pages 目录结构和文件名，来自动生成路由，比如
  - pages/index.jsx → / （首页， 一级路由）
  - pages/about.jsx → /about （一级路由）
  - pages/blog/index.jsx →/blog （一级路由）
  - pages/blog/post.jsx →/blog/post (嵌套路由，一级路由)
  - pages/blog/[slug].jsx → /blog/:slug （动态路由， 一级路由）
- 新建页面步骤
  - 新建一个命名为 pages/about.jsx 组件文件，并导出（export）React 组件
  - 接着通过 /about 路径，就可访问新创建的页面了
- 注意：Nuxt3 需要添加`<NuxtPage>`内置组件占位， **Next.js则不需要**



## 组件导航

- 页面之间的跳转需要用到`<Link>`组件，需从 next/link 包导入
- Link组件底层实现是一个`<a>`标签，所以使用 a + href 也支持页面切换（不推荐，会默认刷新浏览器）
- `<Link>`组件属性
  - href 值类型（不支持 to）
    - 字符类型： /、/home、/about
    - 对象类型：{ pathname：’  ’ , query: { } }
    - URL：外部网址
  - as：在浏览器的 URL 栏中显示的路径的别名
  - replace：**替换当前url页面**，而不是将新的 url 添加到堆栈中。默认为 false
  - target：和a标签的target一样，指定何种方式显示新页面



## 编程导航

- Next13除了可以通过`<Link>`组件来实现导航，同时也支持使用**编程导航**
- 编程导航可以轻松的**实现动态导航了，缺点就是不利于SEO**
- 我们可以**从 next/router 中导入 useRouter 函数**（或 class 中用 withRouer），调用该函数可以拿到 **router 对象进行编程导航**
- router 对象的方法
  - push(url [, as, opts])：页面跳转
  - replace(url [, as, opts])：页面跳转（会替换当前页面）
  - back()：页面返回
  - events.on(name, func)：客户端路由的监听（建议在_app.tsx监听）
    - routeChangeStart
    - routeChangeComplete
  - beforePopState：路由的返回和前进的监听。 （建议在_app.tsx监听）



## 动态路由

- Next.js也是支持动态路由，并且也是根据目录结构和文件的名称自动生成
- 动态路由语法
  - 页面组件目录 或 页面组件文件都<b>支持 [ ] 方括号语法（方括号前后不能有字符串）</b>
  - 方括号里编写的字符串就是：动态路由的参数
- 例如，动态路由 支持如下写法
  - pages/detail/[id].tsx            -> /detail/:id
  - pages/detail/[role]/[id].tsx -> /detail/:role/:id



## 路由参数

- 动态路由参数
  - 通过 [] 方括号 语法定义动态路由，比如：/post/[id].tsx
  - 页面跳转时，在URL路径中传递动态路由参数，比如：/post/10010
  - 动态路由参数将作为查询参数发送到目标页面，**并与其他查询参数合并**
  - 目标页面通过 **router.query** 获取动态路由参数（注意：Next.js 是 router， Nuxt3 是 route）
- 查询字符串参数
  - 页面跳转时，通过查询字符串方式传递参数，比如：/post/10010?name=strive
  - 目标页面通过 **router.query** 获取查询字符串参数
  - 如果路由参数和查询参数相同，那么 **路由参数 将覆盖同名的 查询参数**



## 404 Page

- 方式一：捕获所有不匹配的路由（即 404 not found 页面）
  - 通过在方括号内添加三个点，如：**[...slug].tsx 语法，如在其它目录下的话，仅作用于该目录以及子目录**
    - 比如：访问 pages/post/[...slug].js 路径，将匹配/post/a、/post/a/b、/post/a/b/c等，**但不匹配 /post**
    - 注意：是可以使用除了slug以外的名称，例如：[...param].tsx
  - [...slug] 匹配的参数将作为查询参数发送到页面，并且它始终是一个数组
    - 如：访问 /post/a 路径，对应的参数为：{ "slug": ["a"] }
    - 如：访问 /post/a/b 路径，对应的参数为：{ "slug": ["a", "b"] }
- 方式二（推荐）：在 pages 根目录新建 **404.tsx** 页面（注意：只支持根目录）
  - 当然还支持 500.tsx 文件，即客户端或者服务器端报错



## 路由匹配规则

- 路由匹配优先级，即预定义路由优先于动态路由，动态路由优先于捕获所有路由
  - 预定义路由：pages/post/create.js
    - **将匹配 /post/create**
  - 动态路由：pages/post/[pid].js
    - 将匹配 /post/1，/post/abc 等
    - **但不匹配 /post/create、/post/1/1 等**
  - 捕获所有路由：pages/post/[...slug].js
    - 将匹配 /post/1/2，/post/a/b/c 等
    - **但不匹配 /post/create、/post/abc、/post/1、/post/ 等**



## 中间件

- Next.js的中间件允许我们去**拦截**客户端发起的请求，例如：API请求、router切换、资源加载、站点图片等
- 拦截客服端发起的请求等等之后，便可对这些进行：重写、重定向、修改请求响应标头、或响应等操作
- 使用中间件需按照以下步骤操作
  - 在**根目录**中创建 **middleware.ts** 文件
  - 从 middleware.ts 文件中导出一个中间件**middleware**函数（支持 async，并只允许在服务端），会接收两个参数
    - req：类型为 **NextRequest**
    - event：类型为 **NextFetchEvent**
  - 通过返回NextResponse对象来实现重定向等功能
    - next() 将继续中间件链
    - redirect() 将重定向，如：重定向到某个页面
    - rewrite()  将重写URL，如：配置反向代理
  - 没返回值：页面将按预期加载 和 返回 next() 一样



## 匹配器

- 匹配器允许我们过滤中间件以在特定路径上运行，比如

  ```js
  export const config = {
    matcher: "/about/:path*" // 意思是匹配以 /about/* 开头的路径。其中路径开头的：是修饰符，而*代表0个或n个
    // matcher: ["/about/:path*", "/dashboard/:path*"] 意思是匹配以 /about/* 和 /dashboard/* 开头的路径
    // matcher: ["/((?!api|_next/static|favicon.ico).*)"] 意思是不匹配以 api、_next、static、favicon.ico 开头的路径
  };
  ```

- 注意：上面的 path 是占位符， 不是固定的



## 路由拦截

- 下面我们通过 **中间件 + 匹配器** 来实现路由的拦截

  ```js
  import { NextRequest, NextResponse } from "next/server";
  
  // 可以拦截, API请求、router切换、资源加载、站点图片等
  // 这个中间件只在服务器段运行
  export function middleware(req: NextRequest) {
    // 1.常用的请求参数
    console.log(req);
  
    // 2.返回next()
    // return NextResponse.next(); // 返回 next 和没有返回的效果是一样, 直接放行
  
    // 3.返回的重定向
    // let token = req.cookies.get("token")?.value;
    // if (!token && req.nextUrl.pathname !== "/login") {
    //   // 重定向到登录页面
    //   return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
    // }
  
    // 4.返回的重写 -> vue.config devServer -> proxy
    if (req.nextUrl.pathname.startsWith("/juanpi/api")) {
      // http://locahost:3000/juanpi/api/homeInfo?id=100
      // 重写 url 为下面的 url
      // http://codercba.com:9060/juanpi/api/homeInfo?id=100
      return NextResponse.rewrite(
        new URL(req.nextUrl.pathname, "http://codercba.com:9060")
      );
    }
  }
  
  // 匹配器 -> 过滤
  export const config = {
    // (?!_next)  匹配不包含 _next 路径
    matcher: ["/((?!_next/static|api|favicon.ico).*)"],
  };
  ```



## 布局组件

- Layout布局是页面的包装器，可以将多个页面的共性东西写到Layout布局中，使用 props.children 属性来显示页面内容
  - 例如：每个页面的页眉和页脚组件，这些具有共性的组件我们是可以写到一个Layout布局中
- Layout布局的使用步骤
  - 在components目录下**新建 layout.tsx 布局组件**
  - 接着在<b>_app.tsx中通过`<Layout>`组件包裹`<Component>`组件</b>



## 嵌套布局

- Layout布局可以作为**所有页面的容器**，也可以给**每个页面一个单独的布局**也是可以的，并且也可以在**布局中嵌套布局**
- 因此，我们可以利用布局再嵌套一个布局来实现二级路由



## 嵌套路由

- Next.js 和 Nuxt3一样，也支持嵌套路由(但是只在app目录下)，**也是根据目录结构和文件的名称自动生成**
- 二级路由实现有两种方案
  - 方案一：使用Layout布局嵌套来实现
  - 方案二：使用Next.js 13版本，新增的app目录（目前 beta 版本）



## 组件生命周期

- 服务器端渲染
  - constructor
  - UNSAFE_componentWillMount
  - render -> functon component 本身



## API Routes

- Next.js 提供了编写后端接口的功能（即 API Routes），编写接口可以在 **pages/api 目录**下编写

- 在 pages/api 目录下的任何 API Routes 文件都会自动映射到以 /api/* 前缀开头接口地址

- 比如：编写一个 /api/user 接口

  - 在 pages/api 目录下新建 user.ts
  - 接在在该文件中使用 **handler 函数**来定义接口
  - 然后就可以用 fetch 函数 或 axios 轻松调用：**/api/user** 接口了

  ```js
  import type { NextApiRequest, NextApiResponse } from "next";
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const useInfo = { name: "strive", age: 18 };
    res.status(200).send(useInfo);
  }
  ```



## 认识预渲染

- 认识预渲染
  - 默认情况下，Next.js 会 **预渲染** 每个页面，即预先为每个页面生成 HTML 文件，而不是由客户端 JavaScript 来完成
  - 预渲染可以带来更好的性能和 SEO 效果
  - 当浏览器加载一个页面时，页面依赖JS代码将会执行，执行JS代码后会激活页面，使页面具有交互性。(此过程称Hydration)
- Next.js 具有两种形式的预渲染
  - <b>静态生成 （推荐）：</b>HTML 在 **构建时** 生成，并在每次页面请求（request）时重用
  - <b>服务器端渲染：</b>在 **每次页面请求**（request）时 重新生成 HTML页面
- 提示：出于性能考虑，相对服务器端渲染，更 **推荐** 使用 **静态生成**



## SSG 静态生成

- 静态生成（也称SSG 或 静态站点生成）
  - 如果一个页面使用了 **静态生成**，在 **构建时** 将生成此页面对应的 HTML 文件 。这意味着在生产环境中，运行 next build 时将生成该页面对应的 HTML 文件。然后，此 HTML 文件将在每个页面请求时被重用，还可以被 CDN 缓存
  - 在 Next.js 中，你可以静态生成 **带有或不带有数据** 的页面。接下来我们分别看看这两种情况
- 生成不带数据的静态页面
  - 默认情况下，Next.js 使用 “静态生成” 来预渲染页面但不涉及获取数据。如下例所示
  - 请注意
    - 此页面在预渲染时不需要获取任何外部数据
    - 在这种情况下，Next.js 只需在构建时为每个页面生成一个 HTML 文件即可

- 需要获取数据的静态页面生成
  - 当某些页面需要获取外部数据以进行预渲染，通常有两种情况
    - 情况一：页面 **内容** 取决于外部数据：使用 Next.js 提供的 **getStaticProps** 函数
    - 情况二：页面 <b>paths（路径）</b> 取决于外部数据：使用Next.js 提供的 **getStaticPaths** 函数（通常还要同时用 **getStaticProps**）
- 情况一：页面 内容 取决于外部数据
  - 比如，发起网络请求拿到页面书籍列表的数据，并展示
  - 具体的使用步骤是
    - 先在getStaticProps函数中借助axios获取到数据
    - 拿到异步数据之后 return 给页面组件
    - 页面就可通过props拿到数据来渲染页面
    - 在build时，经过以上步骤，一个静态页面就打包生成
- 情况二：页面 paths（路径） 取决于外部数据
  - 例如，新建一个动态路由页面，然后发起网络请求拿到书本列表，然后每本书的信息都使用**单独详情页面显示**
  - 简单的理解就是，在build 阶段时，动态拿到n本书，然后根据n书动态生成**n个静态详情页面**



## 静态生成应用场景

- 建议尽可能使用<b>静态生成（无论有 与 没有数据），因为静态生成的页面可以构建一次，并可由 CDN 提供服</b>
- 我们可以为多种类型的页面使用静态生成，包括
  - 营销页面、官网网站
  - 博客文章、投资组合
  - 电子商务产品列表、帮助和文档
- 如果在用户**请求之前就可以预渲染页面**，那么应该选择静态生成。反之，静态生成就**不合适了**
- 例如，页面要显示经常更新的数据，并且页面内容会在每次请求时发生变化，这时可以这样选择
  - 静态生成与**客户端数据获取结合使用**
    - 我们可以跳过预呈现页面的某些部分，然后使用客户端 JS 来填充它们，但是客户端渲染是不利于SEO优化的，例如
      - 在useEffect 中获取数据，在客户端动态渲染页面
  - <b>服务器端呈现（也称动态呈现）</b>
    - Next.js 会根据每个请求预呈现一个页面。缺点是稍微慢一点，因为页面无法被 CDN 缓存，但预渲染页面将始终是最新的



## 服务器端渲染（SSR）

- 服务器端渲染（也称SSR 或 动态渲染）
  - 如果页面使用的是 **服务器端渲染**，则会在 **每次页面请求时** 重新生成页面的 HTML
  - 要对页面使用服务器端渲染，**你需要 export 一个名为 getServerSideProps 的 async 函数**
  - 服务器将在每次页面请求时调用此函数
- 例如，假设你的某个页面需要预渲染频繁更新的数据（从外部 API 获取）你就可以编写 getServerSideProps 获取该数据并将其传递给 Page
- 注意事项
  - 我们知道getStaticProps和getStaticPaths函数都是在build阶段运行，那么getServerSideProps函数的运行时机是怎么样的呢？
  - getServerSideProps运行时机
    - 首先，getServerSideProps仅在服务器端运行，从不在浏览器上运行
    - 如果页面使用 getServerSideProps，则
      - 当直接通过URL请求此页面时，getServerSideProps在请求时运行，并且此页面将使用返回的 props 进行预渲染
      - 当通过 Link 或 router切换页面来请求此页面时，Next.js 向服务器发送 API 请求，服务器端会运行getServerSideProps
  - 什么时候该使用getServerSideProps？
    - 当页面显示的数据**必须在请求时获取的**，才应使用getServerSideProps
      - 如：页面需要显示**经常更新的数据**，并且页面内容会在每次请求时发生变化
    - 如过页面使用了getServerSideProps函数，那么该页面将在客户端请求时，会在服务器端渲染，页面默认不会缓存
    - 如果不需要在客户端每次请求时获取页面数据，那么应该考虑在 **[客户端动态渲染](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#fetching-data-on-the-client-side) 或 [getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)**



## 增量静态再成（ISR）

- Next.js 除了支持静态生成 和 服务器端渲染，Next.js 还允许在构建网站后创建或**更新静态页面**
- 这种模式称为：**增量静态再生（Incremental Static Regeneration），简称（ISR）**
- 比如我们继续实现前面的案例
  - 发起网络请求拿到页面**书籍列表**的数据，并展示。这次我们使用ISR渲染模式，**让服务器端每隔5s重新生成静态书籍列表页面**



## 客户端渲染（CSR）

- Next.js 除了支持在服务器端获取数据，同时也是支持在客户端获取数据，并在客户端进行渲染
- 在客户端获取数据，需要在**页面组件或普通组件**的 useEffect 函数中获取
