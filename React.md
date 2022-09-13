# React的介绍

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



# React的特点 – 声明式编程

- 声明式编程：

  - 声明式编程是目前**整个大前端开发的模式**：Vue、React、Flutter、SwiftUI

  - 它允许我们**只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面**

    <img src="https://s3.bmp.ovh/imgs/2022/09/07/c45f4f138b3e0ae8.png" alt="声明式编程" style="zoom:80%;" />



# React特点 – 组件化开发

- 组件化开发：

  - 组件化开发页面目前**前端的流行趋势**，我们会将复杂的界面拆分成**一个个小的组件**

    <img src="https://s3.bmp.ovh/imgs/2022/09/07/199b272e29928039.jpg" alt="组件化开发" style="zoom: 80%;" />



# React的特点 – 多平台适配

- 多平台适配：
  - 2013年，React发布之初主要是**开发Web页面**
  - 2015年，Facebook推出了**ReactNative**，用于**开发移动端跨平台**
  - 2017年，Facebook推出**ReactVR**，用于开发**虚拟现实Web应用程序**



# React的开发依赖

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



# Babel和React的关系

- babel是什么呢？
  - Babel ，又名 Babel.js
  - 是目前前端使用非常广泛的**编译器、转移器**
  - 比如当下**很多浏览器并不支持ES6的语法**，但是**确实ES6的语法非常的简洁和方便，我们开发时希望使用它**
  - 那么编写源码时我们就可以**使用ES6来编写**，之后**通过Babel工具**，**将ES6转成大多数浏览器都支持的ES5的语法**

- React和Babel的关系：
  - 默认情况下**开发React其实可以不使用babel**
  - 但是前提是我们**自己使用 React.createElement 来编写源代码**，它编写的代码**非常的繁琐和可读性差**
  - 那么我们就可以直接编写**jsx（JavaScript XML）的语法**，并且让**babel帮助我们转换成React.createElement**



# React的依赖引入

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



# Hello World

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



# Hello React – 组件化开发

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



# 组件化 - 数据依赖

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



# 组件化 – 事件绑定

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





# 认识JSX

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



# 为什么React选择了JSX

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



# JSX的使用

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



# JSX的使用 - 绑定属性

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



# React事件绑定

- 如果原生DOM添加一个监听事件，我们可以如何操作呢？
  - 方式一：获取DOM原生，添加监听事件
  - 方式二：在HTML原生中，直接绑定onclick
- 在React中是如何操作呢？我们来实现一下React中的事件监听，这里主要有两点不同
  - React 事件的**命名采用小驼峰式（camelCase），而不是纯小写**
  - 我们需要**通过{}传入一个事件处理函数**，这个函数会在事件发生时被执行



# this的绑定问题

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



# 事件参数传递

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



# React条件渲染

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



# React列表渲染

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



# JSX的本质

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



# 虚拟DOM的创建过程

- 我们通过 React.createElement 最终创建出来一个 ReactElement对象
- 这个ReactElement对象是什么作用呢？React为什么要创建它呢？
  - 原因是React利用ReactElement对象组成了一个**JavaScript的对象树**
  - JavaScript的对象树就是**虚拟DOM（Virtual DOM）**
- 如何查看ReactElement的树结构呢？
  - 我们可以将**之前的jsx返回结果进行打印**
- 而ReactElement最终形成的树结构就是Virtual DOM



# 声明式编程

- 虚拟DOM帮助我们从命令式编程转到了声明式编程的模式
- React官方的说法：Virtual DOM 是一种编程理念
  - 在这个理念中，UI以一种理想化或者说虚拟化的方式保存在内存中，并且它是一个相对简单的JavaScript对象
  - 我们可以通过ReactDOM.render让 虚拟DOM 和 真实DOM同步起来，这个过程中叫做协调（Reconciliation）
- 这种编程的方式赋予了React声明式的API：
  - 你只需要告诉React希望让UI是什么状态
  - React来确保DOM和这些状态是匹配的
  - 你不需要直接进行DOM操作，就可以从手动更改DOM、属性操作、事件处理中解放出来



# 前端工程的复杂化

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



# 脚手架是什么呢

- 传统的脚手架指的是建筑学的一种结构：在搭建楼房、建筑物时，临时搭建出来的一个框架
- 编程中提到的脚手架（Scaffold），其实是一种工具，帮我们快速生成项目的工程化结构
  - 每个项目做出完成的效果不同，但是它们的**基本工程化结构**是相似的
  - 既然相似，就没有必要每次都**从零开始搭建**，完全可以**使用一些工具，帮助我们生产基本的工程化模板**
  - 不同的项目，**在这个模板的基础之上进行项目开发或者进行一些配置的简单修改即可**
  - 这样也可以间接保证**项目的基本结构一致性，方便后期的维护**
- 总结：**脚手架让项目从搭建到开发，再到部署，整个流程变得快速和便捷**



# 前端脚手架

- 对于现在比较流行的三大框架都有属于自己的脚手架：
  - Vue的脚手架：**@vue/cli**
  - Angular的脚手架：**@angular/cli**
  - React的脚手架：**create-react-app**

- 它们的作用都是帮助我们生成一个通用的目录结构，并且已经将我们所需的工程环境配置好
- 使用这些脚手架需要依赖什么呢？
  - 目前这些脚手架都是**使用node编写**的，并且都是**基于webpack的**
  - 所以我们必须在自己的电脑上**安装node环境**



# 创建React项目

- 创建React项目的命令如下：
  - 注意：项目名称**不能包含大写字母**
  - 另外还有更多创建项目的方式，可以参考GitHub的readme
  - **create-react-app 项目名称**

- 创建完成后，进入对应的目录，就可以将项目跑起来：
  - **cd xxx**
  - **npm run start**

 

# 了解PWA

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



# 脚手架中的webpack

-  React脚手架默认是基于Webpack来开发的
- 但是，很奇怪：我们并没有在目录结构中看到任何webpack相关的内容？
  - 原因是React脚手架**将webpack相关的配置隐藏起来了**（其实从Vue CLI3开始，也是进行了隐藏）
-  如果我们希望看到webpack的配置信息，应该怎么来做呢？
  - 我们可以执行一个package.json文件中的一个脚本：**"eject": "react-scripts eject"**
  - 这个操作是不可逆的，所以在执行过程中会给与我们提示
  - **npm run eject**

