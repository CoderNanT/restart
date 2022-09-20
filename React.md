# 邂逅React开发

## React的介绍

- React是什么？
  - **React：**用于构建用户界面的 JavaScript 库
  - **React的官网文档：**https://zh-hans.reactjs.org
- 声明式
  - React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。
  - 以声明式编写 UI，可以让你的代码更加可靠，且方便调试。
- 组件化
  - 构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。
  - 由于组件逻辑使用 JavaScript 编写而非模板，因此你可以轻松地在应用中传递数据，并保持状态与 DOM 分离。
- 一次学习，跨平台编写
  - 无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。
  - React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。



## React的特点 – 声明式编程

- 声明式编程：

  - 声明式编程是目前**整个大前端开发的模式**：Vue、React、Flutter、SwiftUI

  - 它允许我们**只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面**

    <img src="https://s3.bmp.ovh/imgs/2022/09/07/c45f4f138b3e0ae8.png" alt="声明式编程" style="zoom:80%;" />



## React特点 – 组件化开发

- 组件化开发：

  - 组件化开发页面目前**前端的流行趋势**，我们会将复杂的界面拆分成**一个个小的组件**

    <img src="https://s3.bmp.ovh/imgs/2022/09/07/199b272e29928039.jpg" alt="组件化开发" style="zoom: 80%;" />



## React的特点 – 多平台适配

- 多平台适配：
  - 2013年，React发布之初主要是**开发Web页面**
  - 2015年，Facebook推出了**ReactNative**，用于**开发移动端跨平台**
  - 2017年，Facebook推出**ReactVR**，用于开发**虚拟现实Web应用程序**



## React的开发依赖

- 开发React必须依赖三个库：
  - **react：**包含react所必须的核心代码
  - **react-dom：**react渲染在不同平台所需要的核心代码
  - **babel：**将jsx转换成React代码的工具
-  第一次接触React会被它繁琐的依赖搞蒙，居然依赖这么多东西：（直接放弃？）
  - 对于Vue来说，我们只是依赖一个vue.js文件即可，但是react居然要**依赖三个包**
  - 其实呢，这三个库是**各司其职**的，目的就是**让每一个库只单纯做自己的事情**
  - 在React的0.14版本**之前是没有react-dom这个概念**的，所有功能都包含在react里
- 为什么要进行拆分呢？原因就是react-native
  - react包中包含了**react web和react-native**所共同拥有的**核心代码**
  - react-dom针对**web和native**所完成的事情不同：
    - web端：react-dom会将jsx最终渲染成真实的DOM，显示在浏览器中
    - native端：react-dom会将jsx最终渲染成原生的控件（比如Android中的Button，iOS中的UIButton）



## Babel和React的关系

- babel是什么呢？
  - Babel ，又名 Babel.js
  - 是目前前端使用非常广泛的**编译器、转移器**
  - 比如当下**很多浏览器并不支持ES6的语法**，但是**确实ES6的语法非常的简洁和方便，我们开发时希望使用它**
  - 那么编写源码时我们就可以**使用ES6来编写**，之后**通过Babel工具**，**将ES6转成大多数浏览器都支持的ES5的语法**

- React和Babel的关系：
  - 默认情况下**开发React其实可以不使用babel**
  - 但是前提是我们**自己使用 React.createElement 来编写源代码**，它编写的代码**非常的繁琐和可读性差**
  - 那么我们就可以直接编写**jsx（JavaScript XML）的语法**，并且让**babel帮助我们转换成React.createElement**



## React的依赖引入

- 所以，我们在编写React代码时，这三个依赖都是必不可少的

- 那么，如何添加这三个依赖：

  - 方式一：直接CDN引入
  - 方式二：下载后，添加本地依赖
  - 方式三：通过npm管理

- 暂时我们直接通过CDN引入，来演练下面的示例程序：

  - 这里有一个crossorigin的属性，这个属性的目的是为了拿到跨域脚本的错误信息

  ```html
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  ```



## Hello World

- 第一步：在界面上通过React显示一个Hello World

  - 注意：这里我们编写React的script代码中，必须添加 type="text/babel"，作用是可以让babel解析jsx的语法

- ReactDOM.createRoot函数：用于创建一个React根，之后渲染的内容会包含在这个根中

  - 参数：将渲染的内容，挂载到哪一个HTML元素上

- root.render函数:

  - 参数：要渲染的根组件

- 我们可以通过{}语法来引入外部的变量或者表达式

  ```html
  <script src="../lib/react.js"></script>
  <script src="../lib/react-dom.js"></script>
  <script src="../lib/babel.js"></script>
  <body>
    <div id="root"></div>
    <script type="text/babel">
        // 编写React代码(jsx语法)
        // jsx语法 -> 普通的JavaScript代码 -> babel
  
        // 渲染Hello World
        // React18之前: ReactDOM.render
        // ReactDOM.render(<h2>Hello World</h2>, document.querySelector("#root"))
  
        // React18之后:
        const root = ReactDOM.createRoot(document.querySelector("#root"));
        root.render(<h2>Hello World</h2>);
    </script>
  </body>
  ```



## Hello React – 组件化开发

- 整个逻辑其实可以看做一个整体，那么我们就可以将其封装成一个组件：
  - 我们说过**root.render 参数**是一个**HTML元素或者一个组件**
  - 所以我们可以先将之前的业务逻辑封装到一个组件中，然后传入到 ReactDOM.render 函数中的第一个参数

- 在React中，如何封装一个组件呢？这里我们暂时使用**类的方式**封装组件：

  - **定义一个类**（类名大写，组件的名称是必须大写的，小写会被认为是HTML元素），继承自React.Component
  - **实现当前组件的render函数**
    - render当中返回的jsx内容，就是之后React会帮助我们渲染的内容

  ```html
  <body>
    <div id="root"></div>
    <script type="text/babel">
        class App extends React.Component {
          render() {
            return <h2>Hello World</h2>;
          }
        }
  
        const root = ReactDOM.createRoot(document.querySelector("#root"));
        root.render(<App />);
    </script>
  </body>
  ```



## 组件化 - 数据依赖

- 组件化问题一：**数据在哪里定义**？
- 在组件中的数据，我们可以分成两类：
  - **参与界面更新的数据：**当数据变量时，需要更新组件渲染的内容
  - **不参与界面更新的数据：**当数据变量时，不需要更新将组建渲染的内容

- 参与界面更新的数据我们也可以称之为是**参与数据流**，这个数据是**定义在当前对象的state**中

  - 我们可以通过在**构造函数中 this.state = {定义的数据}**
  - 当我们的数据发生变化时，我们可以**调用 this.setState 来更新数据**，并且通知React进行update操作
    - 在进行update操作时，就会**重新调用render函数**，并且使用最新的数据，来渲染界面

  ```html
  <body>
    <div id="root"></div>
    <script type="text/babel">
        class App extends React.Component {
          constructor() {
            super();
            this.state = {
              message: "Hello World",
            };
          }
          render() {
            return <h2>{this.state.message}</h2>;
          }
        }
  
        const root = ReactDOM.createRoot(document.querySelector("#root"));
        root.render(<App />);
    </script>
  </body>
  ```



## 组件化 – 事件绑定

- 组件化问题二：事件绑定中的this

  - 在类中直接定义一个函数，并且将这个函数绑定到**元素的onClick事件**上，当前**这个函数的this指向的是谁呢？**

- 默认情况下是undefined

  - 很奇怪，居然是**undefined**
  - 因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象（比如说是button对象）
  - 这是因为React并不是直接渲染成真实的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象
  - 那么在这里发生监听的时候，react在执行函数时并没有绑定this，默认情况下就是一个undefined

- 我们在绑定的函数中，可能想要使用当前对象，比如执行 this.setState 函数，就必须拿到当前对象的this

  - 我们就需要在传入函数时，给这个函数直接绑定this
  - 类似于下面的写法：`<button onClick={this.changeText.bind(this)}>改变文本</button>`

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "Hello World",
      };
      this.btnClick = this.btnClick.bind(this);
    }
    // 默认情况下在class里面定义的所有函数都是严格模式
    btnClick() {
      this.setState({ message: "你好啊 React！" });
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.message}</h2>
          {/*
          	onClick={this.btnClick}
            ↓
            onClick={ function() { this.setState({ message: "你好啊 React！" }) } }
        	*/}
          {/* 1. <button onClick={this.btnClick.bind(this)}>修改文本</button> */}
          <button onClick={this.btnClick}>修改文本</button>
        </div>
      );
    }
  }
  
  // this绑定的问题
  const app = new App();
  const foo = app.btnClick;
  // foo(); // 默认绑定 => window => 严格模式下 => undefined
  
  function bar() {
    console.log("bar:", this);
  }
  bar();
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



# JSX语法

## 认识JSX

- 这段element变量的声明右侧赋值的标签语法是什么呢？

  ```jsx
  <script type="text/babel">
    const element = <div>哈哈哈哈</div>;
  
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(element);
  </script>
  ```

  - 它不是一段字符串（因为没有使用引号包裹）
  - 它看起来是一段HTML元素，但是我们能在js中直接给一个变量赋值html吗？
  - 其实是不可以的，如果我们将 type="text/babel" 去除掉，那么就会出现语法错误
  - 它到底是什么呢？其实它是一段**jsx的语法**

- JSX是什么？

  - JSX是**一种JavaScript的语法扩展（eXtension），也在很多地方称之为JavaScript XML，因为看起就是一段XML语法**
  - 它用于**描述我们的UI界面**，并且其**完全可以和JavaScript融合在一起使用**



## 为什么React选择了JSX

- React认为**渲染逻辑**本质上**与其他UI逻辑**存在内在耦合
  - 比如**UI需要绑定事件**（button、a原生等等）
  - 比如**UI中需要展示数据状态**
  - 比如**在某些状态发生改变时，又需要改变UI**
- 他们之间是**密不可分**，所以React**没有将标记分离到不同的文件**中，而是**将它们组合到了一起**，这个地方就是**组件（Component）**
- 在这里，我们只需要知道，JSX其实是嵌入到JavaScript中的一种结构语法
- JSX的书写规范：
  - JSX的顶层**只能有一个根元素**，所以**我们很多时候会在外层包裹一个div元素**
  - 为了方便阅读，我们通常在jsx的外层包裹一个小括号()，这样可以方便阅读，并且jsx可以进行换行书写
  - JSX中的标签可以是**单标签**，也可以是**双标签**
  - 注意：如果是单标签，必须以/>结尾



## JSX的使用

-  jsx中的注释

  - `{/**/}`

- JSX嵌入变量作为子元素

  - **情况一：**当变量是**Number、String、Array类型**时，可以直接显示
  - **情况二：**当变量是**null、undefined、Boolean类型**时，内容为空
    - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串
    - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式
  - **情况三：Object对象类型**不能作为子元素（not valid as a React child）

- JSX嵌入表达式

  - 运算表达式
  - 三元运算符
  - 执行一个函数

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        counter: 100,
        message: "Hello World",
        names: ["the shy", "rookie", "杰克爱"],
  
        aaa: undefined,
        bbb: null,
        ccc: true,
  
        friend: { name: "the shy" },
  
        firstName: "the",
        lastName: "shy",
  
        age: 24,
  
        movies: ["流浪地球", "星际穿越", "独行月球"],
      };
    }
  
    render() {
      // 1.插入标识符
      const { counter, message, names, aaa, bbb, ccc, friend } = this.state;
  
      // 2.对内容进行运算后显示(插入表示)
      const { firstName, lastName, age } = this.state;
  
      const fullName = firstName + " " + lastName;
      const ageText = age >= 18 ? "成年人" : "未成年人";
      const liEls = this.state.movies.map(movie => <li>{movie}</li>);
  
      // 3.返回jsx的内容
      return (
        <div>
          {/* 1.Number/String/Array直接显示出来 */}
          <h2>{counter}</h2>
          <h2>{message}</h2>
          <h2>{names}</h2>
  
          <h2>------------------------------------</h2>
  
          {/* 2.undefined/null/Boolean */}
          <h2>{String(aaa)}</h2>
          <h2>{bbb + ""}</h2>
          <h2>{ccc.toString()}</h2>
  
          <h2>------------------------------------</h2>
  
          {/* 3.Object类型不能作为子元素进行显示*/}
          {/* <h2>{friend}</h2> */}
          <h2>{friend.name}</h2>
          <h2>{Object.keys(friend)[0]}</h2>
  
          <h2>------------------------------------</h2>
  
          {/* 4.可以插入对应的表达式*/}
          <h2>{10 + 20}</h2>
          <h2>{firstName + " " + lastName}</h2>
          <h2>{fullName}</h2>
  
          <h2>------------------------------------</h2>
  
          {/* 5.可以插入三元运算符*/}
          <h2>{ageText}</h2>
          <h2>{age >= 18 ? "成年人" : "未成年人"}</h2>
  
          <h2>------------------------------------</h2>
  
          {/* 6.可以调用方法获取结果*/}
          <ul>{liEls}</ul>
          <ul>
            {this.state.movies.map(movie => <li>{movie}</li>)}
          </ul>
          <ul>{this.getMovieEls()}</ul>
        </div>
      );
    }
  
    getMovieEls() {
      const liEls = this.state.movies.map(movie => <li>{movie}</li>);
      return liEls;
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## JSX的使用 - 绑定属性

- jsx绑定属性

  - 比如元素都会有**title属性**
  - 比如img元素会有**src属性**
  - 比如a元素会有**href属性**
  - 比如元素可能需要**绑定class**
  - 比如原生使用**内联样式style**

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        title: "哈哈哈",
        imgURL:
        "https://ts1.cn.mm.bing.net/th/id/R-C.091a2c49302a6c31273085b53cf81df2?rik=AvMKv6T7AWMxmw&riu=http%3a%2f%2fpic.22520.cn%2fup%2f200811%2f1597134248464269.jpg&ehk=iNBWqIcJB39uK0P3y0sI4Roz3V8pVAkxv3457BuJZbU%3d&risl=&pid=ImgRaw&r=0",
        href: "https://www.baidu.com",
        isActive: true,
        objStyle: { color: "red", fontSize: "30px" },
      };
    }
  
    render() {
      const { title, imgURL, href, isActive, objStyle } = this.state;
  
      // 需求: isActive: true -> active
      // 1.class绑定的写法一: 字符串的拼接
      const className = `abc cba ${isActive ? "active" : ""}`;
      // 2.class绑定的写法二: 将所有的class放到数组中
      const classList = ["abc", "cba"];
      if (isActive) classList.push("active");
      // 3.class绑定的写法三: 第三方库classnames -> npm install classnames
  
      return (
        <div>
          {/* 1.基本属性绑定 */}
          <h2 title={title}>我是h2元素</h2>
          <img src={imgURL} />
          <a href={href}>百度一下</a>
  
          {/* 2.绑定class属性: 最好使用className */}
          <h2 className={className}>哈哈哈哈</h2>
          <h2 className={classList.join(" ")}>哈哈哈哈</h2>
  
          {/* 3.绑定style属性: 绑定对象类型 */}
          <h2 style={{ color: "red", fontSize: "30px" }}>呵呵呵呵</h2>
          <h2 style={objStyle}>呵呵呵呵</h2>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## React事件绑定

- 如果原生DOM添加一个监听事件，我们可以如何操作呢？
  - 方式一：获取元素DOM，添加监听事件
  - 方式二：在HTML元素中，直接绑定onclick
- 在React中是如何操作呢？我们来实现一下React中的事件监听，这里主要有两点不同
  - React 事件的**命名采用小驼峰式（camelCase），而不是纯小写**
  - 我们需要**通过{}传入一个事件处理函数**，这个函数会在事件发生时被执行



## this的绑定问题

- 在事件执行后，我们可能需要获取当前类的对象中相关的属性，这个时候需要用到this

  - 如果我们这里直接打印this，会发现它是一个undefined

- 为什么是undefined呢？

  - 原因是btnClick函数**并不是我们主动调用**的，而且当button发生点击时，**React内部调用了btnClick函数**
  - 而它内部调用时，并不知道要如何绑定正确的this

- 如何解决this的问题呢？

  - 方案一：bind给btnClick显示绑定this
  - 方案二：使用 ES6 class fields 语法
  - 方案三：事件监听时传入箭头函数（推荐）

  ```jsx
  const obj = {
    name: "obj",
    foo: function() {
      console.log("foo:", this)
    }
  }
  
  obj.foo()
  
  const config = {
    onClick: obj.foo.bind(obj)
  }
  
  const click = config.onClick
  click()
  
  /*
  this的四种绑定规则:
  	1.默认绑定 独立执行 foo()
  	2.隐式绑定 被一个对象执行 obj.foo() -> obj
  	3.显式绑定: call/apply/bind foo.call("aaa") -> String("aaa")
  	4.new绑定: new Foo() -> 创建一个新对象, 并且赋值给this
  */
  
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "Hello World",
        counter: 100,
      };
      this.btn1Click = this.btn1Click.bind(this);
    }
  
    btn1Click() {
      this.setState({ counter: this.state.counter + 1 });
    }
  
    // class fields
    btn2Click = () => {
      this.setState({ counter: 1000 });
    };
  
    btn3Click() {
      this.setState({ counter: 9999 });
    }
  
    render() {
      const { message } = this.state;
  
      return (
        <div>
          {/* 1.this绑定方式一: bind绑定 */}
          <button onClick={this.btn1Click}>按钮1</button>
  
          {/* 2.this绑定方式二: ES6 class fields */}
          <button onClick={this.btn2Click}>按钮2</button>
  
          {/* 3.this绑定方式三: 直接传入一个箭头函数(重要) */}
          <button onClick={() => this.btn3Click()}>按钮3</button>
  
          <h2>当前计数: {this.state.counter}</h2>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## 事件参数传递

-  在执行事件函数时，有可能我们需要获取一些参数信息：比如event对象、其他参数
- 情况一：获取event对象
  - 很多时候我们需要拿到**event对象**来做一些事情（比如阻止默认行为）
  - 那么默认情况下，**event对象有被直接传入**，函数就可以获取到event对象

- 情况二：获取更多参数

  - 有更多参数时，我们最好的方式就是**传入一个箭头函数，主动执行的事件函数，并且传入相关的其他参数**

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "Hello World",
      };
    }
  
    btnClick(event, name, age) {
      console.log("event:", event);
      console.log("name, age:", name, age);
    }
  
    render() {
      const { message } = this.state;
  
      return (
        <div>
          {/* 1.event参数的传递 */}
          <button onClick={this.btnClick.bind(this)}>按钮1</button>
          <button onClick={(event) => this.btnClick(event)}>按钮2</button>
  
          {/* 2.额外的参数传递 */}
          <button onClick={this.btnClick.bind(this, "kobe", 30)}>
            按钮3(不推荐)
          </button>
  
          <button onClick={(event) => this.btnClick(event, "shy", 18)}>
            按钮4
          </button>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## React条件渲染

* 某些情况下，界面的内容会根据不同的情况显示不同的内容，或者决定是否渲染某部分内容：
  * 在vue中，我们会通过指令来控制：比如v-if、v-show
  * 在React中，**所有的条件判断都和普通的JavaScript代码一致**

-  常见的条件渲染的方式有哪些呢？

  - 方式一：条件判断语句
    - 适合逻辑较多的情况
  - 方式二：三元运算符
    - 适合逻辑比较简单
  - 方式三：与运算符&&
    - 适合如果条件成立，渲染某一个组件；如果条件不成立，什么内容也不渲染
  - v-show的效果
    - 主要是控制display属性是否为none

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "Hello World",
        isReady: false,
        friend: undefined,
      };
    }
  
    render() {
      const { isReady, friend } = this.state;
  
      // 1.条件判断方式一: 使用if进行条件判断
      let showElement = null;
      if (isReady) {
        showElement = <h2>准备开始比赛吧</h2>;
      } else {
        showElement = <h1>请提前做好准备!</h1>;
      }
  
      return (
        <div>
          {/* 1.方式一: 根据条件给变量赋值不同的内容 */}
          <div>{showElement}</div>
  
          {/* 2.方式二: 三元运算符 */}
          <div>
            {isReady ? <button>开始战斗!</button> : <h3>赶紧准备</h3>}
          </div>
  
          {/* 3.方式三: &&逻辑与运算 */}
          {/* 场景: 当某一个值, 有可能为undefined时, 使用&&进行条件判断 */}
          <div>
            {friend && <div>{friend.name + " " + friend.desc}</div>}
          </div>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## React列表渲染

- 在React中并没有像Vue模板语法中的v-for指令，而且需要我们通过JavaScript代码的方式组织数据，转成JSX：

  - 很多从**Vue转型到React的同学非常不习惯**，认为**Vue的方式更加的简洁明了**
  - 但是**React中的JSX正是因为和JavaScript无缝的衔接，让它可以更加的灵活**
  - 另外我经常会提到**React是真正可以提高我们编写代码能力的一种方式**

- 如何展示列表呢？

  - 在React中，展示列表最多的方式就是使用数组的**map高阶函数**

  ```jsx
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        students: [
          { id: 111, name: "shy", score: 199 },
          { id: 112, name: "kobe", score: 98 },
          { id: 113, name: "james", score: 199 },
          { id: 114, name: "curry", score: 188 },
        ],
      };
    }
  
    render() {
      const { students } = this.state;
  
      return (
        <div>
          <h2>学生列表数据</h2>
          <div className="list">
            {students
              .filter((item) => item.score > 100)
              .slice(0, 2)
              .map((item) => {
              return (
                <div className="item" key={item.id}>
                  <h2>学号: {item.id}</h2>
                  <h3>姓名: {item.name}</h3>
                  <h1>分数: {item.score}</h1>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<App />);
  ```



## JSX的本质

- 实际上，jsx 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖
  - 所有的jsx最终都会被转换成**React.createElement的函数**调用

- createElement需要传递三个参数：

  - 参数一：type
    - 当前ReactElement的类型
    - 如果是标签元素，那么就使用字符串表示 “div”
    - 如果是组件元素，那么就直接使用组件的名称
  - 参数二：config
    - 所有jsx中的属性都在config中以对象的属性和值的形式存储
    - 比如传入className作为元素的class
  - 参数三：children
    - 存放在标签中的内容，以children数组的方式进行存储

  ```html
  <script src="../lib/react.js"></script>
  <script src="../lib/react-dom.js"></script>
  <body>
    <div id="root"></div>
    <script>
      class App extends React.Component {
        constructor() {
          super();
          this.state = {
            message: "Hello World",
          };
        }
  
        divClick() {
          console.log(1);
        }
  
        render() {
          const { message } = this.state;
  
          const element = React.createElement("div", null,
              React.createElement("div", {className: "content"},
                React.createElement("div", {onClick: this.divClick}, message)
              )
            );
  
          console.log(element); // Virtual DOM
  
          return element;
        }
      }
  
      const root = ReactDOM.createRoot(document.querySelector("#root"));
      root.render(React.createElement(App, null));
    </script>
  </body>
  ```



## 虚拟DOM的创建过程

- 我们通过 React.createElement 最终创建出来一个 ReactElement对象
- 这个ReactElement对象是什么作用呢？React为什么要创建它呢？
  - 原因是React利用ReactElement对象组成了一个**JavaScript的对象树**
  - JavaScript的对象树就是**虚拟DOM（Virtual DOM）**
- 如何查看ReactElement的树结构呢？
  - 我们可以将**之前的jsx返回结果进行打印**
- 而ReactElement最终形成的树结构就是Virtual DOM



## 声明式编程

- 虚拟DOM帮助我们从命令式编程转到了声明式编程的模式
- React官方的说法：Virtual DOM 是一种编程理念
  - 在这个理念中，UI以一种理想化或者说虚拟化的方式保存在内存中，并且它是一个相对简单的JavaScript对象
  - 我们可以通过ReactDOM.render让 虚拟DOM 和 真实DOM同步起来，这个过程中叫做协调（Reconciliation）
- 这种编程的方式赋予了React声明式的API：
  - 你只需要告诉React希望让UI是什么状态
  - React来确保DOM和这些状态是匹配的
  - 你不需要直接进行DOM操作，就可以从手动更改DOM、属性操作、事件处理中解放出来



# React脚手架解析

## 前端工程的复杂化

- 如果我们只是开发几个小的demo程序，那么永远不需要考虑一些复杂的问题：
  - 比如目录结构如何组织划分、如何管理文件之间的相互依赖、如何管理第三方模块的依赖、项目发布前如何压缩、打包项目
- 现代的前端项目已经越来越复杂了：
  - 不会再是在HTML中引入几个css文件，引入几个编写的js文件或者第三方的js文件这么简单
  - 比如css可能是使用less、sass等预处理器进行编写，我们需要将它们转成普通的css才能被浏览器解析
  - 比如JavaScript代码不再只是编写在几个文件中，而是通过模块化的方式，被组成在成百上千个文件中，我们需要通过模块化的技术来管理它们之间的相互依赖
  - 比如项目需要依赖很多的第三方库，如何更好的管理它们（比如管理它们的依赖、版本升级等）
- 为了解决上面这些问题，我们需要再去学习一些工具：
  - 比如babel、webpack、gulp，配置它们转换规则、打包依赖、热更新等等一些的内容
  - 脚手架的出现，就是帮助我们解决这一系列问题的



## 脚手架是什么呢

- 传统的脚手架指的是建筑学的一种结构：在搭建楼房、建筑物时，临时搭建出来的一个框架
- 编程中提到的脚手架（Scaffold），其实是一种工具，帮我们快速生成项目的工程化结构
  - 每个项目做出完成的效果不同，但是它们的**基本工程化结构**是相似的
  - 既然相似，就没有必要每次都**从零开始搭建**，完全可以**使用一些工具，帮助我们生产基本的工程化模板**
  - 不同的项目，**在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可**
  - 这样也可以间接保证**项目的基本结构一致性，方便后期的维护**
- 总结：**脚手架让项目从搭建到开发，再到部署，整个流程变得快速和便捷**



## 前端脚手架

- 对于现在比较流行的三大框架都有属于自己的脚手架：
  - Vue的脚手架：**@vue/cli**
  - Angular的脚手架：**@angular/cli**
  - React的脚手架：**create-react-app**

- 它们的作用都是帮助我们生成一个通用的目录结构，并且已经将我们所需的工程环境配置好
- 使用这些脚手架需要依赖什么呢？
  - 目前这些脚手架都是**使用node编写**的，并且都是**基于webpack的**
  - 所以我们必须在自己的电脑上**安装node环境**



## 创建React项目

- 创建React项目的命令如下：
  - 注意：项目名称**不能包含大写字母**
  - 另外还有更多创建项目的方式，可以参考GitHub的readme
  - **create-react-app 项目名称**

- 创建完成后，进入对应的目录，就可以将项目跑起来：
  - **cd xxx**
  - **npm run start**

 

## 了解PWA

- 整个目录结构都非常好理解，只是有一个PWA相关的概念：
  - PWA全称**Progressive Web App**，即**渐进式WEB应用**
  - 一个 PWA 应用首先是**一个网页**, 可以**通过 Web 技术编写出一个网页应用**
  - 随后添加上 **App Manifest** 和 **Service Worker** 来实现 PWA 的**安装和离线**等功能
  - 这种Web存在的形式，我们也称之为是 **Web App**
- PWA解决了哪些问题呢？
  - 可以**添加至主屏幕**，点击主屏幕图标可以实现启动动画以及隐藏地址栏
  - 实现**离线缓存功能**，即使用户手机没有网络，依然可以使用一些离线功能
  - 实现了**消息推送**
  - 等等一系列类似于Native App相关的功能
- 更多PWA相关的知识，可以自行去学习更多
  - https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps



## 脚手架中的webpack

-  React脚手架默认是基于Webpack来开发的
- 但是，很奇怪：我们并没有在目录结构中看到任何webpack相关的内容？
  - 原因是React脚手架**将webpack相关的配置隐藏起来了**（其实从Vue CLI3开始，也是进行了隐藏）
-  如果我们希望看到webpack的配置信息，应该怎么来做呢？
  - 我们可以执行一个package.json文件中的一个脚本：**"eject": "react-scripts eject"**
  - 这个操作是不可逆的，所以在执行过程中会给与我们提示
  - **npm run eject**



# React组件化开发

## 什么是组件化开发呢

- 组件化是一种分而治之的思想：
  - 如果我们将**一个页面中所有的处理逻辑全部放在一起**，**处理起来就会变得非常复杂**，而且不利于后续的管理以及扩展
  - 但如果，我们将**一个页面拆分成一个个小的功能块**，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了

- 我们需要通过组件化的思想来思考整个应用程序：
  - 我们将一个完整的页面分成很多个组件
  - 每个组件都用于实现页面的一个功能块
  - 而每一个组件又可以进行细分
  - 而组件本身又可以在多个地方进行复用



## React的组件化

- 组件化提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用

- 任何的应用都会被抽象成一颗组件树

  <img src="https://s3.bmp.ovh/imgs/2022/09/07/199b272e29928039.jpg" alt="组件化开发" style="zoom: 80%;" />

- 组件化思想的应用：

  - 有了组件化的思想，我们在之后的开发中就要充分的利用它
  - 尽可能的将页面拆分成一个个小的、可复用的组件
  - 这样让我们的代码更加方便组织和管理，并且扩展性也更强

- React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类别的组件：

  - **根据组件的定义方式**，可以分为：**函数组件(Functional Component )**和**类组件(Class Component)**

  - **根据组件内部是否有状态需要维护**，可以分成：**无状态组件(Stateless Component )**和**有状态组件(Stateful Component)**
  
  - **根据组件的不同职责**，可以分成：**展示型组件(Presentational Component)**和**容器型组件(Container Component)**

- 这些概念有很多重叠，但是他们最主要是关注数据逻辑和UI展示的分离：
  - **函数组件、无状态组件、展示型组件**主要关注UI的展示
  - **类组件、有状态组件、容器型组件**主要关注数据逻辑
- 当然还有很多组件的其他概念：比如异步组件、高阶组件等



## 类组件

- 类组件的定义有如下要求：
  - **组件的名称是大写字符开头**（无论类组件还是函数组件）
  - 类组件需要**继承自 React.Component**
  - 类组件必须实现**render函数**

- 使用class定义一个组件：
  - constructor是可选的，我们通常在constructor中初始化一些数据
  - this.state中维护的就是我们组件内部的数据
  - **render()** 函数是 class 组件中**唯一必须实现的方法**



## render函数的返回值

- 当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：

  - **React 元素：**
    - 通常通过 JSX 创建
    - 例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件
    - 无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素

  - **数组或 fragments：**使得 render 方法可以返回多个元素
  - **Portals：**可以渲染子节点到不同的 DOM 子树中
  - **字符串或数值类型：**它们在 DOM 中会被渲染为文本节点
  - **布尔类型或 null：**什么都不渲染

  ```jsx
  import React from "react";
  
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        message: "App Component",
      };
    }
  
    render() {
      // const { message } = this.state
      // 1.react元素: 通过jsx编写的代码就会被编译成React.createElement, 所以返回的就是一个React元素
      // return <h2>{message}</h2>
  
      // 2.组件或者fragments(后续学习)
      // return ["abc", "cba", "nba"]
      // return [
      //   <h1>h1元素</h1>,
      //   <h2>h2元素</h2>,
      //   <div>哈哈哈</div>
      // ]
  
      // 3.字符串/数字类型
      // return "Hello World"
  
      return true;
    }
  }
  
  export default App;
  ```



## 函数组件

- 函数组件是**使用function来进行定义的函数**，只是**这个函数会返回和类组件中render函数返回一样的内容**

- 函数组件有自己的特点（当然，配合hooks，就不一样了）：

  - 没有生命周期，也会被更新并挂载，但是没有生命周期函数
  - this关键字不能指向组件实例（因为没有组件实例）
  - 没有内部状态（state）

- 我们来定义一个函数组件：

  ```jsx
  function App(props) {
    // 返回值: 和类组件中render函数返回的是一致
    return <h1>App Functional Component</h1>
  }
  
  export default App
  ```



## 认识生命周期

- 很多的事物都有从创建到销毁的整个过程，这个过程称之为是**生命周期**
- React组件也有自己的生命周期，了解组件的生命周期可以让我们**在最合适的地方完成自己想要的功能**

- 生命周期和生命周期函数的关系： 
  - **生命周期**是一个**抽象的概念**，在生命周期的整个过程，分成了很多个阶段
    - 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程
    - 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程
    - 比如卸载过程（Unmount），组件从DOM树中被移除的过程
- React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的**某些函数进行回调**，这些函数就是**生命周期函数**：
  - 比如实现componentDidMount函数：组件已经挂载到DOM上时，就会回调
  - 比如实现componentDidUpdate函数：组件已经发生了更新时，就会回调
  - 比如实现componentWillUnmount函数：组件即将被移除时，就会回调
  - 我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能
- 我们谈React生命周期时，主要谈的类的生命周期，因为函数式组件是没有生命周期函数的（后面我们可以通过hooks来模拟一些生命周期的回调）



## 生命周期解析

- 我们先来学习一下最基础、最常用的生命周期函数：

  <img src="https://s3.bmp.ovh/imgs/2022/09/16/8560fb6c599c8085.png" alt="常用的生命周期" style="zoom:80%;" />



## 生命周期函数

- constructor
  - 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数
  - constructor中通常只做两件事情：
    - 通过给 this.state 赋值对象来初始化内部的state
    - 为事件绑定实例（this）
- componentDidMount
  - componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用
    - 依赖于DOM的操作可以在这里进行
    - 在此处发送网络请求就最好的地方（官方建议）
    - 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）

- componentDidUpdate
  - componentDidUpdate() 会在更新后会被立即调用，首次渲染不会执行此方法
    - 当组件更新后，可以在此处对 DOM 进行操作
    - 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）

- componentWillUnmount
  - componentWillUnmount() 会在组件卸载及销毁之前直接调用
    - 在此方法中执行必要的清理操作
    - 例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等



## 不常用生命周期函数

- 除了上面介绍的生命周期函数之外，还有一些不常用的生命周期函数：

  - getDerivedStateFromProps：state 的值在任何时候都依赖于 props时使用；该方法返回一个对象来更新state

  - getSnapshotBeforeUpdate：在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）

  - shouldComponentUpdate：该生命周期函数很常用

    <img src="https://s3.bmp.ovh/imgs/2022/09/16/a8fc58ec84fd5595.png" style="zoom:80%;" />

- 更详细的生命周期相关的内容，可以参考官网：https://zh-hans.reactjs.org/docs/react-component.html

  ```jsx
  import React from "react"
  import HelloWorld from "./HelloWorld"
  
  class App extends React.Component {
    constructor() {
      super()
  
      this.state = {
        isShowHW: true
      }
    }
  
    switchHWShow() {
      this.setState({ isShowHW: !this.state.isShowHW })
    }
  
    render() {
      const { isShowHW } = this.state
  
      return (
        <div>
          哈哈哈
          <button onClick={e => this.switchHWShow()}>切换</button>
          { isShowHW && <HelloWorld/> }
        </div>
      )
    }
  }
  
  export default App
  ```

  ```jsx
  import React from "react"
  
  class HelloWorld extends React.Component {
    // 1.构造方法: constructor
    constructor() {
      console.log("HelloWorld constructor")
      super()
  
      this.state = {
        message: "Hello World"
      }
    }
  
    changeText() {
      this.setState({ message: "你好啊, 李银河" })
    }
  
    // 2.执行render函数
    render() {
      console.log("HelloWorld render")
      const { message } = this.state
  
      return (
        <div>
          <h2>{message}</h2>
          <p>{message}是程序员的第一个代码!</p>
          <button onClick={e => this.changeText()}>修改文本</button>
        </div>
      )
    }
  
    // 3.组件被渲染到DOM: 被挂载到DOM
    componentDidMount() {
      console.log("HelloWorld componentDidMount")
    }
  
    // 4.组件的DOM被更新完成： DOM发生更新
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("HelloWorld componentDidUpdate:", prevProps, prevState, snapshot)
    }
  
    // 5.组件从DOM中卸载掉： 从DOM移除掉
    componentWillUnmount() {
      console.log("HelloWorld componentWillUnmount")
    }
  
  
    // 不常用的生命周期补充
    shouldComponentUpdate() {
      return true
    }
  
    getSnapshotBeforeUpdate() {
      console.log("getSnapshotBeforeUpdate")
      return {
        scrollPosition: 1000
      }
    }
  }
  
  export default HelloWorld
  ```



## 认识组件间的通信

- 父组件在展示子组件，可能会传递一些数据给子组件：

  - 父组件通过 **属性=值** 的形式来传递给子组件数据
  - 子组件通过 **props** 参数获取父组件传递过来的数据

  ```jsx
  import React, { Component } from 'react'
  import MainBanner from './MainBanner'
  
  export class Main extends Component {
    render() {
      return (
        <div className='main'>
          <div>Main</div>
          <MainBanner title="轮播图"/>
        </div>
      )
    }
  }
  
  export default Main
  ```
  
  ```jsx
  import React, { Component } from 'react'
  
  export class MainBanner extends Component {
    render() {
      return (<div className='banner'>{this.props.title}</div>)
    }
  }
  
  export default MainBanner
  ```



## 参数propTypes

- 对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：

  - 当然，如果你项目中默认继承了Flow或者TypeScript，那么直接就可以进行类型验证
  - 但是，即使我们没有使用Flow或者TypeScript，也可以通过 prop-types 库来进行参数验证

- 从 React v15.5 开始，React.PropTypes 已移入另一个包中：prop-types 库

- 更多的验证方式，可以参考官网：https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

  - 比如验证数组，并且数组中包含哪些元素
  - 比如验证对象，并且对象中包含哪些key以及value是什么类型
  - 比如某个原生是必须的，使用 requiredFunc: PropTypes.func.isRequired

- 如果没有传递，我们希望有默认值呢？

  - 我们使用defaultProps就可以了

  ```jsx
  import React, { Component } from 'react'
  import PropTypes from "prop-types"
  
  export class MainBanner extends Component {
    render() {
      return (<div className='banner'>{this.props.title}</div>)
    }
  }
  
  // MainBanner传入的props类型进行验证
  MainBanner.propTypes = {
    title: PropTypes.string
  }
  
  // MainBanner传入的props的默认值
  MainBanner.defaultProps = {
  	title: "默认标题"
  }
  
  export default MainBanner
  ```



## 子组件传递父组件

- 某些情况，我们也需要子组件向父组件传递消息：

  - 在React中同样是通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可

  ```jsx
  import React, { Component } from 'react'
  import AddCounter from './AddCounter'
  import SubCounter from './SubCounter'
  
  export class App extends Component {
    constructor() {
      super()
      this.state = {
        counter: 100
      }
    }
  
    changeCounter(count) {
      this.setState({ counter: this.state.counter + count })
    }
  
    render() {
      const { counter } = this.state
  
      return (
        <div>
          <h2>当前计数: {counter}</h2>
          <AddCounter addClick={(count) => this.changeCounter(count)}/>
          <SubCounter subClick={(count) => this.changeCounter(count)}/>
        </div>
      )
    }
  }
  
  export default App
  ```

  ```jsx
  import React, { Component } from 'react'
  
  export class AddCounter extends Component {
    render() {
      return (<button onClick={e => this.props.addClick(1)}>+1</button>)
    }
  }
  
  export default AddCounter
  ```

  ```jsx
  import React, { Component } from 'react'
  
  export class SubCounter extends Component {
    render() {
      return (<button onClick={e => this.props.subClick(-1)}>-1</button>)
    }
  }
  
  export default SubCounter
  ```



## React中的插槽（slot）

- 在开发中，我们抽取了一个组件，但是为了让这个组件具备更强的通用性，我们不能将组件中的内容限制为固定的div、span等等这些元素
- 我们应该让使用者可以决定某一块区域到底存放什么内容
- 这种需求在Vue当中有一个固定的做法是通过slot来完成的，React呢？
- React对于这种需要插槽的情况非常灵活，有两种方案可以实现：
  - 组件的**children**子元素
  - **props**属性传递React元素



## children实现插槽

- 每个组件都可以获取到 props.children：它包含组件的开始标签和结束标签之间的内容

  ```jsx
  import React, { Component } from 'react'
  import NavBar from './nav-bar'
  
  export class App extends Component {
    render() {
      return (
        <div>
          <NavBar>
            <button>按钮</button>
            <h2>哈哈哈</h2>
            <i>斜体文本</i>
          </NavBar>
        </div>
      )
    }
  }
  
  export default App
  ```

  ```jsx
  import React, { Component } from 'react'
  
  export class NavBar extends Component {
    render() {
      const { children } = this.props
      console.log(children)
  
      return (
        <div className='nav-bar'>
          <div className="left">{children[0]}</div>
          <div className="center">{children[1]}</div>
          <div className="right">{children[2]}</div>
        </div>
      )
    }
  }
  
  export default NavBar
  ```



## props实现插槽+作用域插槽

- 通过children实现的方案虽然可行，但是有一个弊端：通过索引值获取传入的元素很容易出错，不能精准的获取传入的原生

- 另外一个种方案就是使用 props 实现：

  - 通过具体的属性名，可以让我们在传入和获取时更加的精准

  ```jsx
  import React, { Component } from 'react'
  import NavBarTwo from './nav-bar-two'
  
  export class App extends Component {
    getTabItem(item) {
      if (item === "span") {
        return <span>{item}</span>
      } else if (item === "button") {
        return <button>{item}</button>
      } else {
        return <i>{item}</i>
      }
    }
  
    render() {
      const btn = <button>按钮2</button>
  
      return (
        <div>
          <NavBarTwo 
            leftSlot={btn}
            centerSlot={item => this.getTabItem(item)}
            rightSlot={<i>斜体2</i>}
          />
        </div>
      )
    }
  }
  
  export default App
  ```
  
  ```jsx
  import React, { Component } from 'react'
  
  export class NavBarTwo extends Component {
    render() {
      const { leftSlot, centerSlot, rightSlot } = this.props
  
      return (
        <div className='nav-bar'>
          <div className="left">{leftSlot}</div>
          <div className="center">{centerSlot('span')}</div>
          <div className="right">{rightSlot}</div>
        </div>
      )
    }
  }
  
  export default NavBarTwo
  ```



## context应用场景

- 非父子组件数据的共享：
  - 在开发中，比较常见的数据传递方式是通过props属性自上而下（由父到子）进行传递
  - 但是对于有一些场景：比如一些数据需要在多个组件中进行共享（地区偏好、UI主题、用户登录状态、用户信息等）
  - 如果我们在顶层的App中定义这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余的操作
- 如果层级更多的话，一层层传递是非常麻烦，并且代码是非常冗余的：
  - React提供了一个API：**Context**
  - Context 提供了一种**在组件之间共享此类值的方式**，而**不必显式地通过组件树的逐层传递 props**
  - Context 设计目的是为了**共享那些对于一个组件树而言是 "全局" 的数据**，例如当前认证的用户、主题或首选语言



## context相关API

- React.createContext
  - 创建一个需要共享的Context对象
  - 如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 Provider 中读取到当前的context值
  - defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值
- Context.Provider
  - 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化
  - Provider 接收一个 value 属性，传递给消费组件
  - 一个 Provider 可以和多个消费组件有对应关系
  - 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
  - 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染

- Class.contextType
  - 挂载在 class 上的 contextType 属性会被重新赋值为一个由 React.createContext() 创建的 Context 对象
  - 这能让你使用 this.context 来消费最近 Context 上的那个值
  - 你可以在任何生命周期中访问到它，包括 render 函数中
- Context.Consumer
  - 这里，React 组件也可以订阅到 context 变更。这能让你在 函数式组件 中完成订阅 context
  - 这里需要 函数作为子元素（function as child）这种做法
  - 这个函数接收当前的 context 值，返回一个 React 节点



## context代码演练

- 什么时候使用Context.Consumer呢？

  - 当使用value的组件是一个**函数式组件**时
  - 当组件中需要使用**多个Context**时

  ```js
  // theme-context.js
  import React from "react"
  
  // 1.创建一个Context
  const ThemeContext = React.createContext({ color: "blue", size: 10 })
  
  export default ThemeContext
  ```

  ```js
  // user-context.js
  import React from "react"
  
  // 1.创建一个Context
  const UserContext = React.createContext()
  
  export default UserContext
  ```

  ```jsx
  // App.jsx
  import React, { Component } from 'react'
  
  import ThemeContext from "./context/theme-context"
  import UserContext from './context/user-context'
  
  import Home from './Home'
  import Profile from './Profile'
  
  export class App extends Component {
    constructor() {
      super()
  
      this.state = {
        info: { name: "kobe", age: 30 }
      }
    }
  
    render() {
      const { info } = this.state
  
      return (
        <div>
          <h2>App</h2>
          {/* 1.给Home传递数据 */}
          <Home name={info.name} age={info.age}/>
          <Home {...info}/>
  
          {/* 2.普通的Home */}
          {/* 第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */}
          <UserContext.Provider value={{nickname: "kobe", age: 30}}>
            <ThemeContext.Provider value={{color: "red", size: "30"}}>
              <Home {...info}/>
            </ThemeContext.Provider>
          </UserContext.Provider>
          <Profile/>
        </div>
      )
    }
  }
  
  export default App
  ```

  ```jsx
  // Home.jsx
  import React, { Component } from 'react'
  import HomeBanner from './HomeBanner'
  import HomeInfo from './HomeInfo'
  
  export class Home extends Component {
    render() {
      const { name, age } = this.props
  
      return (
        <div>
          <h2>Home: {name}-{age}</h2>
          <HomeInfo/>
          <HomeBanner/>
        </div>
      )
    }
  }
  
  export default Home
  ```

  ```jsx
  // HomeBanner.jsx
  import ThemeContext from "./context/theme-context"
  
  function HomeBanner() {
  
    return <div>
      {/* 函数式组件中使用Context共享的数据 */}
      <ThemeContext.Consumer>
        {
          value => {
            return <h2> Banner theme:{value.color}</h2>
          }
        }
      </ThemeContext.Consumer>
    </div>
  }
  
  export default HomeBanner
  ```

  ```jsx
  // HomeInfo.jsx
  import React, { Component } from 'react'
  import ThemeContext from './context/theme-context'
  import UserContext from './context/user-context'
  
  export class HomeInfo extends Component {
    render() {
      // 4.第四步操作: 获取数据, 并且使用数据
      console.log(this.context)
  
      return (
        <div>
          <h2>HomeInfo: {this.context.color}</h2>
          <UserContext.Consumer>
            {
              value => {
                return <h2>Info User: {value.nickname}</h2>
              }
            }
          </UserContext.Consumer>
        </div>
      )
    }
  }
  
  // 3.第三步操作: 设置组件的contextType为某一个Context
  HomeInfo.contextType = ThemeContext
  
  export default HomeInfo
  ```

  ```jsx
  // Profile.jsx
  import React, { Component } from 'react'
  import ThemeContext from './context/theme-context'
  
  export class Profile extends Component {
    render() {
      console.log(this.context)
  
      return (<div>Profile</div>)
    }
  }
  
  Profile.contextType = ThemeContext
  
  export default Profile
  ```



## 为什么使用setState

- 开发中我们并不能直接通过修改state的值来让界面发生更新：
  - 因为我们修改了state之后，希望React根据最新的State来重新渲染界面，但是这种方式的修改React并不知道数据发生了变化
  - React并没有实现类似于Vue2中的Object.defineProperty或者Vue3中的Proxy的方式来监听数据的变化
  - 我们**必须通过setState来告知React数据已经发生了变化**

- 疑惑：在组件中并没有实现setState的方法，为什么可以调用呢？
  - 原因很简单，**setState**方法是从**Component中继承过来**的



## setState异步更新

- setState的更新是异步的？

  - 最终打印结果是Hello World
  - 可见setState是异步的操作，我们并不能在执行完setState之后立马拿到最新的state的结果

  ```jsx
  import React, { Component } from 'react'
  
  class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: "Hello World",
      }
    }
  
    changeText() {
      this.setState({ message: "你好啊, 李银河" })
      console.log(this.state.message) // Hello World
    }
  
    render() {
      return (
        <div>
          <h2>message: {this.state.message}</h2>
          <button onClick={e => this.changeText()}>修改文本</button>
        </div>
      )
    }
  }
  
  export default App
  ```

- 为什么setState设计为异步呢？

  - setState设计为异步其实之前在GitHub上也有很多的讨论
  - React核心成员（Redux的作者）Dan Abramov也有对应的回复
  - https://github.com/facebook/react/issues/11527#issuecomment-360199710

- 我对其回答做一个简单的总结：

  * setState设计为异步，可以显著的**提升性能**
  * 如果每次调用 setState 都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的

  - 最好的办法应该是**获取到多个更新**，之后进行**批量更新**

- **如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步**

  - state和props不能保持一致性，会在开发中产生很多的问题

  ```jsx
  import React, { Component } from 'react'
  
  function Hello(props) {
    return <h2>{props.message}</h2>
  }
  
  export class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: "Hello World",
        counter: 0
      }
    }
  
    componentDidMount() {
      // 1.网络请求一: banners
  
      // 2.网络请求二: recommends
  
      // 3.网络请求三: productlist
    }
  
    changeText() {
      this.setState({ message: "你好啊,李银河" })
      console.log(this.state.message)
    }
  
    increment() {
      console.log("------")
      // this.setState({
      //   counter: this.state.counter + 1
      // })
      // this.setState({
      //   counter: this.state.counter + 1
      // })
      // this.setState({
      //   counter: this.state.counter + 1
      // })
  
      this.setState((state) => {
        return {
          counter: state.counter + 1
        }
      })
      this.setState((state) => {
        return {
          counter: state.counter + 1
        }
      })
      this.setState((state) => {
        return {
          counter: state.counter + 1
        }
      })
    }
  
    render() {
      const { message, counter } = this.state
      console.log("render被执行")
  
      return (
        <div>
          <h2>message: {message}</h2>
          <button onClick={e => this.changeText()}>修改文本</button>
          <h2>当前计数: {counter}</h2>
          <button onClick={e => this.increment()}>counter+1</button>
  
          <Hello message={message}/>
        </div>
      )
    }
  }
  
  export default App
  ```



## 如何获取异步的结果

- 那么如何可以获取到更新后的值呢？

  - setState的回调
    - setState接受两个参数：第二个参数是一个回调函数，这个回调函数会在更新后会执行
    - 格式如下：setState(partialState, callback)

  ```jsx
  import React, { Component } from 'react'
  
  export class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: "Hello World"
      }
    }
  
    changeText() {
      // 1.setState更多用法
      // 1.基本使用
      // this.setState({
      //   message: "你好啊, 李银河"
      // })
  
      // 2.setState可以传入一个回调函数
      // 好处一: 可以在回调函数中编写新的state的逻辑
      // 好处二: 当前的回调函数会将之前的state和props传递进来
      // this.setState((state, props) => {
      //   // 1.编写一些对新的state处理逻辑
      //   // 2.可以获取之前的state和props值
      //   console.log(this.state.message, this.props)
  
      //   return {
      //     message: "你好啊, 李银河"
      //   }
      // })
  
      // 3.setState在React的事件处理中是一个异步调用
      // 如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码
      // 那么可以在setState中传入第二个参数: callback
      this.setState({ message: "你好啊, 李银河" }, () => {
        console.log("++++++:", this.state.message)
      })
      console.log("------:", this.state.message)
    }
  
    render() {
      const { message } = this.state
  
      return (
        <div>
          <h2>message: {message}</h2>
          <button onClick={e => this.changeText()}>修改文本</button>
        </div>
      )
    }
  }
  
  export default App
  ```



## setState一定是异步吗？（React18之前）

- 验证一：在setTimeout中的更新
- 验证二：原生DOM事件
- 其实分成两种情况：
  - 在组件**生命周期或React事件**中，setState是**异步**
  - 在**setTimeout**，**Promise.then**，**原生dom事件**中，setState是**同步**



## setState默认是异步的（React18之后）

- 在React18之后，默认所有的操作都被放到了批处理中（异步处理）

  - https://react.docschina.org/blog/2022/03/29/react-v18.html#whats-new-in-react-18

- 如果希望代码可以同步会拿到，则需要执行特殊的flushSync操作

  ```jsx
  import React, { Component } from 'react'
  import { flushSync } from 'react-dom'
  
  function Hello(props) {
    return <h2>{props.message}</h2>
  }
  
  export class App extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: "Hello World"
      }
    }
  
    componentDidMount() {
      // 1.网络请求一: banners
  
      // 2.网络请求二: recommends
  
      // 3.网络请求三: productlist
    }
  
    changeText() {
      setTimeout(() => {
        // 在react18之前, setTimeout中setState操作, 是同步操作
        // 在react18之后, setTimeout中setState异步操作(批处理)
        flushSync(() => {
          this.setState({ message: "你好啊, 李银河" })
        })
        console.log(this.state.message)
      }, 0);
    }
  
    render() {
      const { message } = this.state
      console.log("render被执行")
  
      return (
        <div>
          <h2>message: {message}</h2>
          <button onClick={e => this.changeText()}>修改文本</button>
  
          <Hello message={message}/>
        </div>
      )
    }
  }
  
  export default App
  ```



