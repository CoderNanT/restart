[TOC]

# Node

## 什么是模块化

- 到底什么是模块化、模块化开发呢？
  - 事实上模块化最终的目的是将程序划分成**一个个小的模块**
  - 这个模块中编写属于**自己的逻辑代码**，有**自己的作用域**，定义变量名词时不会影响到其他的模块
  - 这个模块可以将自己希望暴露的**变量、函数、对象等导出**给其他的模块
  - 也可以通过某种方式，**导入**其他模块中的**变量、函数、对象**等
- 按照这种**模块划分**开发程序的过程，就是**模块化开发**的过程



### 没有模块化带来的问题

- 早期没有模块化带来了很多的问题：**比如命名冲突的问题**

- 当然我们有办法可以解决上面的问题：**立即函数调用表达式（IIFE）**

  - IIFE (Immediately Invoked Function Expression)

  ```js
  // aaa.js
  const moduleA = (function() {
    let name = "shy"
    console.log(name)
    return { name }
  }())
  
  // index.html
  <script src="./aaa.js"></script>
  <script src="./main.js"></script>
  
  // main.js
  console.log(moduleA.name)
  ```

- 但是我们其实带来了新的问题

  - 第一：我必须记得**每一个模块中返回对象的命名**，才能在其他模块使用过程中正确的使用
  - 第二：代码写起来**混乱不堪**，每个文件中的代码都需要**包裹在一个匿名函数中来编写**
  - 第三：在**没有合适的规范**情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况

- 虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的
  - 我们需要制定一定的规范来约束每个人都**按照这个规范去编写模块化的代码**
  - 这个规范中应该包括核心功能：**模块本身可以导出暴露的属性，模块又可以导入自己需要的属性**
  - JavaScript社区为了解决上面的问题，涌现出**一系列好用的规范**，接下来我们就学习具有代表性的一些规范



## CommonJS规范和Node关系

- 我们需要知道CommonJS是**一个规范**，最初提出来是在**浏览器以外的地方使用**，并且当时被命名为**ServerJS**，后来为了体现它的广泛性，修改为**CommonJS**，平时我们也会**简称为CJS**
  - **Node**是CommonJS在服务器端一个具有代表性的实现
  - **Browserify**是CommonJS在浏览器中的一种实现
  - **webpack**打包工具具备对CommonJS的支持和转换
- 所以Node中对**CommonJS进行了支持和实现**，让我们在开发node的过程中可以方便的进行模块化开发
  - 在Node中**每一个js文件都是一个单独的模块**
  - 这个模块中包括**CommonJS规范的核心变量：exports、module.exports、require**
  - 我们可以使用这些变量来方便的进行**模块化开发**

- 前面我们提到过模块化的核心是导出和导入，Node中对其进行了实现

  - **exports和module.exports**可以负责**对模块中的内容进行导出**
  - **require函数**可以帮助我们**导入其他模块（自定义模块、系统模块、第三方库模块）中的内容**

  ```js
  // util.js
  const UTIL_NAME = "util_name"
  function formatDate() {
    return "2022-10-10"
  }
  console.log(exports) // {}
  exports.UTIL_NAME = UTIL_NAME
  exports.formatDate = formatDate
  
  // main.js
  const util = require("./util.js")
  console.log(util.UTIL_NAME)
  console.log(util.formatDate())
  ```



### exports导出

- exports是一个**对象**，我们可以在这个对象中添加很多个属性，添加的属性会导出

  ```js
  // bar.js
  exports.name = "张三";
  exports.age = 24;
  setTimeout(() => {
    console.log(exports); // { name: '李四', age: 24 }
  }, 2000);
  ```

- 在另外一个文件中可以导入

  ```js
  // main.js
  const bar = require("./bar.js");
  console.log(bar); // { name: '张三', age: 24 }
  bar.name = "李四";
  ```

- 上面这行完成了什么操作呢？理解下面这句话，Node中的模块化一目了然

  - **bar变量等于exports对象**
  - 也就是require通过各种查找方式，最终找到了exports这个对象
  - 并且将这个**exports对象赋值给了bar变量(引用赋值)**



### module.exports导出

- 但是Node中我们经常导出东西的时候，又是通过module.exports导出的

  - **module.exports**和**exports**有什么**关系或者区别**呢

- 我们追根溯源，通过维基百科中对CommonJS规范的解释

  - CommonJS中是没有**module.exports**的概念的
  - 但是为了实现模块的导出，Node中使用的是**Module的类**，**每一个模块都是Module的一个实例，也就是module**
  - 所以在Node中真正用于导出的其实**根本不是exports**，而是**module.exports**

- 为什么exports也可以导出呢

  - 这是因为**module对象的exports属性和exports对象默认指向同一个对象**

  ```js
  // 默认情况下 module.exports 和 exports 指向同一个对象
  module.exports.name = "张三";
  module.exports.age = 24;
  console.log(exports.name, exports.age); // 张三 24
  
  exports.name = "李四";
  exports.age = 18;
  console.log(module.exports.name, module.exports.age); // 李四 18
  console.log(module.exports === exports); // true
  
  // foo.js
  module.exports = { name: "module.exports" };
  exports.name = "exports";
  // main.js
  const foo = require("./foo.js"); // 导入 module.exports 导出的对象
  console.log(foo.name); // module.exports
  
  
  // foo.js
  exports = { name: "新对象" };
  // main.js
  const foo = require("./foo.js");
  console.log(foo); // {}
  ```




### require细节

- 我们现在已经知道，**require是一个函数**，可以帮助我们引入一个文件（模块）中导出的对象

- 那么require的查找规则是怎么样的呢？导入格式如下：**require(X)**

- **情况一**：X是一个Node核心模块，比如path、http

  - 直接返回核心模块，并且停止查找

  ```js
  const path = require("path");
  console.log(path); // {...}
  ```

- **情况二：**X是以 ./ 或 ../ 或 /（根目录）开头的

  - 第一步：将X当做一个**文件**在**对应的目录下查找**
    - 如果有后缀名，按照后缀名的格式查找对应的文件
    - 如果没有后缀名，会按照如下顺序
      - 直接查找文件X
      - 查找X.js文件
      - 查找X.json文件
      - 查找X.node文件

  ```js
  // 结果一
  // utils
  module.exports = { info: "utils" };
  // main.js
  const utils = require("./utils")
  console.log(utils); // { info: 'utils' }
  
  
  // 结果二
  // utils.js
  module.exports = { info: "utils.js" };
  // main.js
  const utils = require("./utils")
  console.log(utils); // { info: 'utils.js' }
  ```

  - 第二步：**没有找到对应的文件**，将X作为一个**目录**
    - 查找目录下面的index文件 --- 不行会报错
      - 查找X/index.js文件
      - 查找X/index.json文件
      - 查找X/index.node文件
  - 如果没有找到，那么报错：**not found**

  ```js
  // utils/index
  module.exports = { info: "utils/index" };
  // main.js
  const utils = require("./utils/index");
  console.log(utils); // { info: 'utils/index' }
  ```
  
- **情况三：**直接是一个X（没有路径），并且X不是一个核心模块

  - 它会去找当前文件夹中的**node_modules**，当前文件夹没找到就 **往上找**，如果在根目录还没找到就返回 not found

  ```js
  // node_modules/axios/index.js
  module.exports = { name:'axios'}
  // main.js
  const axios = require("axios")
  console.log(axios) // { name: 'axios' }
  ```



### 模块的加载过程

- 结论一：模块在被第一次引入时，模块中的js代码会被运行一次
- 结论二：模块被多次引入时，会缓存，最终只加载（运行）一次
  - 为什么只会加载运行一次呢？
  - 这是因为每个模块对象module都有一个属性：**loaded**
  - 为false表示还没有加载，为true表示已经加载
- 结论三：如果有循环引入，那么加载顺序是什么  main -> aaa -> ccc -> ddd -> eee -> bbb
  - 这个其实是一种数据结构：图结构
  - 图结构在遍历的过程中，有深度优先搜索（DFS, depth first search）和广度优先搜索（BFS, breadth first search）
  - Node采用的是深度优先算法：main -> aaa -> ccc -> ddd -> eee -> bbb



## 认识 ES Module

- ES Module和CommonJS的模块化有一些不同之处：

  - 一方面它使用了**import**和**export**关键字
  - 另一方面它采用**编译期的静态分析**，并且也**加入了动态引用的方式**

- ES Module模块采用export和import关键字来实现模块化

  - **export**负责将模块内的内容**导出**
  - **import**负责从其他模块**导入**内容

- 了解：采用ES Module将自动采用严格模式：use strict

  ```js
  // foo.js
  const name = "shy"
  function sayHello() {
    console.log("sayHello")
  }
  export { name, sayHello }
  
  // main.js
  // 注意事项一: 在浏览器中直接使用esmodule时, 必须在文件后加上后缀名.js
  import { name, sayHello } from "./foo.js"
  console.log(name)
  sayHello()
  
  // index.html
  <!-- 注意事项二: 在我们打开对应的html时, 如果html中有使用模块化的代码, 那么必须开启一个服务来打开 -->
  <!-- 你需要注意本地测试 -- 如果你通过本地加载 HTML 文件 (比如一个 file:// 路径的文件), 你将会遇到 CORS 错误，因为 JavaScript 模块安全性需要。你需要通过一个服务器来测试。MDN 对它的解释 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules -->
  
  <script src="./foo.js" type="module"></script>
  <script src="./main.js" type="module"></script>
  ```



### exports关键字

- export关键字将一个模块中的变量、函数、类等导出

  ```js
  const name = "shy"
  const age = 18
  function sayHello() {
    console.log("sayHello")
  }
  // 1.方式一
  export { name, age, sayHello }
  import { name, age, sayHello } from "./foo.js"
  
  // 2.方式二: 导出时给标识符取别名
  export { name as fname, age, sayHello }
  import { fname, age, sayHello } from "./foo.js"
  
  // 3.方式三: 不支持取别名
  export const name = "shy"
  export const age = 18
  export function sayHello() {
    console.log("sayHello")
  }
  import { name, age, sayHello } from "./foo.js"
  ```



### import关键字

- import关键字负责从另外一个模块中导入内容

  ```js
  // 1.方式一 
  import { name, age, sayHello } from "./foo.js"
  console.log(name, age, sayHello)
  
  // 2.方式二: 导入时给标识符取别名
  import { name as fname, age, sayHello } from "./foo.js"
  const name = "main"
  console.log(name, fname, age, sayHello)
  
  // 3.方式三: 导入时可以给整个模块取别名
  import * as foo from "./foo.js"
  console.log(foo.name, foo.age, foo.sayHello())
  ```



### export和import结合使用

- 补充：export和import可以结合使用

- 为什么要这样做呢？

  - 在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中
  - 这样方便指定统一的接口规范，也方便阅读
  - 这个时候，我们就可以使用export和import结合使用

  ```js
  // 优化一:
  export { formatCount, formatDate } from './format.js'
  export { parseLyric } from './parse.js'
  
  // 优化二:
  export * from './format.js'
  export * from './parse.js'
  ```




### default用法

- 默认导出（default export）

  - 默认导出export时可以**不需要指定名字**
  - 在**导入时不需要使用 {}**，并且**可以自己来指定名字**

- 注意：在一个模块中，**只能有一个默认导出**（default export）

  ```js
  export default function() {
    return ["歌词"]
  }
  
  import hhhh from "./parse_lyric.js"
  ```



### import函数

- 通过import加载一个模块，是不可以在其放到逻辑代码中的，比如

  ```js
  if (true) {
    import { name, age, sayHello } from "./foo.js";
    console.log(name, age);
  }
  // Cannot use import statement outside a module
  ```

- 为什么会出现这个情况呢？

  - 这是因为**ES Module在被JS引擎解析**时，就**必须知道它的依赖关系**
  - 由于**这个时候js代码没有任何的运行**，所以**无法在进行类似于if判断中根据代码的执行情况**
  - 甚至**拼接路径的写法也是错误**的：因为我们必须到运行时能确定path的值

- 但是某些情况下，我们确确实实希望动态的来加载某一个模块

  - 如果根据不懂的条件，动态来选择加载模块的路径
  - 这个时候我们需要**使用 import() 函数**来动态加载
    - import函数返回一个Promise，可以通过then获取结果

  ```js
  if (true) {
    import("./foo.js").then(res => {
      console.log(res)
    })
  } else {
    import("./bar.js").then(res => {
      console.log(res)
    })
  }
  ```



### ES Module的解析流程

- ES Module是如何被浏览器解析并且让模块之间可以相互引用的呢？

  - https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

- ES Module的解析过程可以划分为三个阶段

  - 阶段一：构建（Construction），根据地址查找js文件，并且下载，将其解析成模块记录（Module Record）

    ![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/10_construction.png)

    ![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/25_module_map.png)

  - 阶段二：实例化（Instantiation），对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址

  - 阶段三：运行（Evaluation），运行代码，计算值，并且将值填充到内存地址中

    ![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/30_live_bindings_04.png)



## 包管理工具npm

- Node Package Manager，也就是**Node包管理器**
  - 但是目前已经不仅仅是Node包管理器了，在**前端项目**中我们也在使用它来管理依赖的包
  - 比如vue、vue-router、vuex、express、koa、react、react-dom、axios、babel、webpack等等
- npm管理的包存放在哪里呢
  - 我们发布自己的包其实是**发布到registry**上面的
  - 当我们安装一个包时其实是从**registry上面下载的包**



### npm的配置文件

- 那么对于一个项目来说，我们如何使用**npm来管理这么多包**呢
  - 事实上，我们每一个项目都会有一个对应的**配置文件**，无论是前端项目（Vue、React）还是后端项目（Node）
  - 这个**配置文件会记录着你项目的名称、版本号、项目描述**等
  - 也会记录着你项目所依赖的**其他库的信息**和**依赖库的版本号**
  - 这个配置文件就是**package.json**
- 那么这个配置文件如何得到呢
  - 方式一：**手动从零创建项目**，npm init –y 
  - 方式二：**通过脚手架创建项目**，脚手架会帮助我们生成package.json，并且里面有相关的配置



### 常见的配置文件属性

- 必须填写的属性：name、version
  - **name**是项目的名称
  - **version**是当前项目的版本号
  - **description**是描述信息，很多时候是作为项目的基本描述
  - **author**是作者相关信息（发布时用到）
  - **license**是开源协议（发布时用到）
- private属性
  - **private**属性记录当前的项目是否是私有的
  - **当值为true时，npm是不能发布它的**，这是防止私有项目或模块发布出去的方式

- main属性

  - **设置程序的入口**
  - 比如我们使用axios模块 const axios = require('axios')
  - 如果有main属性，实际上是**找到对应的main属性查找文件**的

- scripts属性

  - **scripts属性用于配置一些脚本命令**，以键**值对的形式**存在
  - 配置后我们可以通过 **npm run** 命令的key来执行这个命令
  - npm start和npm run start的区别是什么？
    - 它们是等价的，对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行

- dependencies属性

  - dependencies属性是**指定无论开发环境还是生成环境都需要依赖的包**
  - 通常是**我们项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios**等等

- devDependencies属性

  - 一些包在**生成环境是不需要的，比如webpack、babel**等
  - 这个时候我们会通过 **npm install webpack --save-dev**，将它安装到devDependencies属性中

- peerDependencies属性

  - 还有一种项目依赖关系是**对等依赖**，也就是**你依赖的一个包，它必须是以另外一个宿主包为前提**的
  - 比如element-plus是依赖于vue3的，ant design是依赖于react、react-dom

  ```json
  // package.json
  {
    "name": "02_package_demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node ./src/main.js",
      "build": "webpack xxx.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "axios": "^0.27.2",
      "dayjs": "^1.11.3",
      "element-plus": "^2.2.6",
      "vue": "^3.2.37"
    },
    "devDependencies": {
      "babel": "^6.23.0",
      "webpack": "^5.73.0"
    }
  }
  ```



### 依赖的版本管理

- 我们会发现安装的依赖版本出现：^2.0.3或~2.0.3，这是什么意思呢

- npm的包通常需要遵从semver版本规范
  - semver：https://semver.org/lang/zh-CN/
- semver版本规范是X.Y.Z
  - **X主版本号（major）**：当你做了不兼容的 API 修改（可能不兼容之前的版本）
  - **Y次版本号（minor）**：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）
  - **Z修订号（patch）**：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）
- ^和~的区别
  - x.y.z：表示**一个明确的版本号**
  - ^x.y.z：表示**x是保持不变**的，**y和z永远安装最新的版本**
  - ~x.y.z：表示**x和y保持不变**的，**z永远安装最新的版本**



### package-lock.json

- name：项目的名称
- version：项目的版本
- lockfileVersion：lock文件的版本
- requires：使用requires来跟踪模块的依赖关系
- dependencies：项目的依赖
  - 当前项目依赖axios，但是axios依赖follow-redireacts
  - axios中的属性如下
    - version表示实际安装的axios的版本
    - resolved用来记录下载的地址，registry仓库中的位置
    - requires/dependencies记录当前模块的依赖
    - integrity用来从缓存中获取索引，再通过索引去获取压缩包文件



## npm install 原理

- 执行 **npm install它背后帮助我们完成了什么操作**

- 我们会发现还有一个称之为**package-lock.json的文件**，它的作用是什么

- 从npm5开始，**npm支持缓存策略（来自yarn的压力）**，缓存有什么作用呢

  ![](https://s1.ax1x.com/2022/07/04/jJA19H.png)



## yarn工具

- 另一个node包管理工具yarn
  - yarn是由**Facebook、Google、Exponent 和 Tilde** 联合推出了一个新的 **JS 包管理工具**
  - yarn 是为了弥补 **早期npm 的一些缺陷**而出现的
  - 早期的npm存在很多的缺陷，比如**安装依赖速度很慢、版本依赖混乱等等**一系列的问题
  - 虽然从npm5版本开始，进行了很多的升级和改进，但是依然很多人喜欢使用yarn



## npx工具

- npx是npm5.2之后自带的一个命令
  - npx的作用非常多，但是比较常见的是使用它来**调用项目中的某个模块的指令**
- 我们以yarn为例
  - 全局安装的是 yarn 1.22.19
  - 项目安装的是 yarn 0.24.24
- 如果我在终端执行 yarn --version 使用的是哪一个命令呢
  - 显示结果会是 yarn 1.22.19，事实上使用的是全局的，为什么呢
  - 原因非常简单，在当前目录下找不到 yarn 时，就会去全局找，并且执行命令



### 局部命令的执行

- 那么如何使用项目（局部）的 yarn，常见的是两种方式

  - 方式一：明确查找到node_module下面的 yarn
    - ./node_modules/.bin
    - yarn --version
  - 方式二：在 scripts 定义脚本，来执行 yarn

  ```json
  "scripts": {
    "yarn": "yarn --version"
  }
  ```

  - 方式三：使用npx
    - npx yarn --version

- npx的原理非常简单，它会到当前目录的**node_modules/.bin**目录下查找对应的命令



## 什么是pnpm

- 什么是pnpm呢？我们来看一下官方的解释
  - pnpm：我们可以理解成是**performant npm(高性能Node包管理器)缩写**
  - 快速：pnpm 是同类工具速度的将近 2 倍
  - 高效：node_modules 中的所有文件均链接自单一存储位置
  - 支持单体仓库：pnpm 内置了对单个源码仓库中包含多个软件包的支持
  - 权限严格：pnpm 创建的 node_modules 默认并非扁平结构，因此代码无法对任意软件包进行访问



### 硬链接和软连接的概念

- 硬链接（hard link）
  - **硬链接（英语：hard link）**是**电脑文件系统中的多个文件平等地共享同一个文件存储单元**
  - 删除一个文件名字后，还可以用其它名字继续访问该文件
- 符号链接（软链接soft link、Symbolic link）
  - **符号链接（软链接、Symbolic link）**是一类**特殊的文件**
  - 其**包含有一条以绝对路径或者相对路径的形式指向其它文件或者目录的引用**



### 硬链接和软连接的演练

- **文件的拷贝：**copy foo.js foo_copy.js

  ![](https://s1.ax1x.com/2022/07/05/jNTlCT.png)

- **文件的硬链接**：mklink /H aaa_hard.js aaa.js

  ![](https://s1.ax1x.com/2022/07/05/jNTM5V.png)

- **文件的软连接：** mklink aaa_soft.js aaa.js

  ![](https://s1.ax1x.com/2022/07/05/jNTKU0.png)



### pnpm到底做了什么呢

- 当使用 npm 或 Yarn 时，如果你**有 100 个项目**，并且所有项目都有一个相同的依赖包，那么， 你在硬盘上就需要**保存 100 份该相同依赖包的副本**

- 如果是使用 pnpm，依赖包将被 **存放在一个统一的位置**，因此
  - 如果你对**同一依赖包使用相同的版本**，那么**磁盘上只有这个依赖包的一份文件**
  - 如果你对**同一依赖包需要使用不同的版本**，则仅有 **版本之间不同的文件会被存储起来**
  - 所有文件都**保存在硬盘上的统一的位置**



### pnpm创建非扁平的 node_modules 目录

- 当使用 npm 或 yarn 安装依赖包时，所有依赖包都将被提升到 node_modules 的根目录下

  - 其结果是，代码可以访问 本不属于当前项目所安装的依赖包

    ![](https://www.pnpm.cn/assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg)



# webpack

- 官方的解释：webpack is a **static module bundler** for **modern** JavaScript applications
  - **webpack** 是一个用于现代 JavaScript 应用程序的 静态模块打包工具
    - **打包bundler：**webpack可以帮助我们进行打包，所以它是一个打包工具
    - **静态的static：**这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）
    - **模块化module：**webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等
    - **现代的modern：**因为现代前端开发面临各种各样的问题，才催生了webpack 的出现和发展



## Webpack的安装

- webpack的安装目前分为两个：webpack、webpack-cli
- 那么它们是什么关系呢
  - 执行webpack命令，会执行node_modules下的.bin目录下的webpack
  - webpack在执行时是依赖webpack-cli的，如果没有安装就会报错
  - 而webpack-cli中代码执行时，才是真正利用webpack进行编译和打包的过程
  - 所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）



## 指定配置文件

- 如果我们的配置文件并不是webpack.config.js的名字，而是其他的名字呢

  - 比如我们将webpack.config.js修改成了 wk.config.js
  - 这个时候我们可以通过 --config 来指定对应的配置文件
    - webpack --config wk.config.js

  ```js
  // wk.config.js
  const path = require("path")
  
  module.exports = {
    entry: "./src/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./build")
    }
  }
  ```

- 但是每次这样执行命令来对源码进行编译，会非常繁琐，所以我们可以在package.json中增加一个新的脚本

  ```json
  "scripts": {
    "build": "webpack --config wk.config.js"
  }
  ```



## Webpack的依赖图

- webpack到底是如何对我们的项目进行打包的呢
  - 事实上webpack在处理应用程序时，它会根据**命令**或者**配置文件**找到入口文件
  - 从入口开始，会生成一个 **依赖关系图**，这个**依赖关系图**会包含应用程序中所需的所有模块（比如.js文件、css文件、图片、字体等）
  - 然后遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）



## loader配置方式

- 配置方式表示的意思是在我们的webpack.config.js文件中写明配置信息

  - module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）
  - 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览

- module.rules的配置如下

  - rules属性对应的值是一个数组：[Rule]
  - 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性
    - test属性：用于对 resource（资源）进行匹配的，通常会设置成正则表达式
    - use属性：对应的值时一个数组：[UseEntry]
      - UseEntry是一个对象，可以通过对象的属性来设置一些其他属性
        - loader：必须有一个 loader属性，对应的值是一个字符串
        - options：可选的属性，值是一个字符串或者对象，值会被传入到loader中
        - query：目前已经使用options来替代
  - 注意：因为loader的执行顺序是**从右向左**（或者说**从下到上**，或者说**从后到前**的）
  
  ```js
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件
        test: /\.css$/,
        // use: [ // use中多个loader的使用顺序是从后往前
        //   { loader: "style-loader" },
        //   { loader: "css-loader" }
        // ],
        // 简写一: 如果loader只有一个
        // loader: "css-loader"
        // 简写二: 多个loader不需要其他属性时, 可以直接写loader字符串形式
        use: [ 
          "style-loader",
          "css-loader", 
          "postcss-loader"
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         "postcss-preset-env"
          //       ]
          //     }
          //   }
          // }
        ]
      }
    ]
  }
  
  // postcss.config.js
  module.exports = {
    plugins: ["postcss-preset-env"],
  };
  ```



## 认识asset module type

- 我们当前使用的webpack版本是webpack5

  - 在webpack5之前，加载这些资源我们需要**使用一些loader，比如raw-loader 、url-loader、file-loader**
  - 在webpack5开始，我们可以直接使用资**源模块类型（asset module type）**，来替代上面的这些loader

- 资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader

  - asset/resource 发送一个单独的文件并导出 URL
    - 之前通过使用 file-loader 实现
  - asset/inline 导出一个资源的 data URI
    - 之前通过使用 url-loader 实现
  - asset/source 导出资源的源代码
    - 之前通过使用 raw-loader 实现
  - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择
    - 之前通过使用 url-loader，并且配置资源体积限制实现

  ```js
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        // 1.打包两张图片, 并且这两张图片有自己的地址, 将地址设置到img/background-image中
        // 缺点: 多图片加载的两次网络请求
        // type: "asset/resource",
  
        // 2.将图片进行base64的编码, 并且直接将编码后的源码放到打包的js文件中
        // 缺点: 造成js文件非常大, 下载js文件本身消耗时间非常长, 造成js代码的下载和解析/执行时间过长
        // type: "asset/inline"
  
        // 3.合理的规范:
        // 3.1.对于小一点的图片, 可以进行base64编码
        // 3.2.对于大一点的图片, 单独的图片打包, 形成url地址, 单独的请求这个url图片
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024, // 60kb
          },
        },
        generator: {
          // 占位符
          // name: 指向原来的图片名称
          // ext: 扩展名
          // hash: 使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）
          filename: "img/[name]_[hash:8][ext]"
        },
      }
    ]
  }
  ```




## 认识Babel

- Babel是一个**工具链**，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的JavaScript




## extensions和alias配置

- extensions是解析到文件时自动添加扩展名

  - 默认值是 ['.wasm', '.mjs', '.js', '.json']
  - 所以如果我们代码中想要添加加载 .vue 或者 jsx 或者 ts 等文件时，我们必须自己写上扩展名

- 另一个非常好用的功能是配置别名alias

  - 特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要 ../../../这种路径片段
  - 我们可以给某些常见的路径起一个别名

  ```js
  resolve: {
    extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
      alias: {
        utils: path.resolve(__dirname, "./src/utils")
      }
  }
  ```




## resolve模块解析

- resolve用于设置模块如何被解析

  - 在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库
  - resolve可以帮助webpack从每个 require/import 语句中，找到需要引入的模块代码
  - webpack 使用 enhanced-resolve 来解析文件路径

- webpack能解析三种文件路径

  - 绝对路径
    - 由于已经获得文件的绝对路径，因此不需要再做进一步解析
  - 相对路径
    - 在这种情况下，使用 import 或 require 的资源文件所处的目录，被认为是上下文目录
    - 在 import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径
  - 模块路径
    - 在 resolve.modules中指定的所有目录检索模块。默认值是 ['node_modules']，所以默认会从node_modules中查找文件
    - 我们可以通过设置别名的方式来替换初识模块路径

  - 如果是一个文件
    - 如果文件具有扩展名，则直接打包文件
    - 否则，将使用 resolve.extensions选项作为文件扩展名解析
  - 如果是一个文件夹
    - 会在文件夹中根据 resolve.mainFiles配置选项中指定的文件顺序查找
      - resolve.mainFiles的默认值是 ['index']
      - 再根据 resolve.extensions来解析扩展名



## 认识Plugin

- Webpack的另一个核心是Plugin，官方有这样一段对Plugin的描述
  - While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables
- 上面表达的含义翻译过来就是
  - Loader是用于**特定的模块类型**进行转换
  - Plugin可以用于**执行更加广泛的任务**，比如打包优化、资源管理、环境变量注入等



## 认识模块热替换（HMR）

- 什么是HMR呢
  - HMR的全称是**Hot Module Replacement**，翻译为**模块热替换**
  - 模块热替换是指在 **应用程序运行过程**中，**替换、添加、删除模块**，而**无需重新刷新整个页面**
- HMR通过如下几种方式，来提高开发的速度：
  - 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失
  - 只更新需要变化的内容，节省开发的时间
  - 修改了css、js源代码，会立即在浏览器更新



## 入口文件解析

- 我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了 config 目录，我们是否应该变成 ../src/index.js呢？

  - 如果我们这样编写，会发现是报错的，依然要写成 ./src/index.js
  - 这是因为入口文件其实是和另一个属性时有关的 context

- context的作用是用于解析入口（entry point）和加载器（loader）

  - 官方说法：默认是当前路径（但是经过我测试，默认应该是webpack的启动目录）
  - 另外推荐在配置中传入一个值

  ```js
  module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: "./src/main.js"
  }
  ```





