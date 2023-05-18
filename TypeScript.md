# 一门优秀的语言

- 我始终相信：任何新技术的出现都是为了解决原有技术的某个痛点

- JavaScript是一门优秀的编程语言吗？

  - 每个人可能观点并不完全一致，但是从很多角度来看，JavaScript是一门**非常优秀的编程语言**

  - 而且，可以说在很长一段时间内**这个语言不会被代替**，并且会在**更多的领域**被大家广泛使用

- 著名的Atwood定律

- Stack Overflow的创立者之一的 **Jeff Atwood** 在2007年提出了著名的 **Atwood定律**

  * any application that can be written in JavaScript, will eventually be written in JavaScript

  - 任何可以使用JavaScript来实现的应用都最终都会使用JavaScript实现

- 其实我们已经看到了，这句话正在一步步被应验

  - **Web端**的开发我们一直都是使用JavaScript

  - **移动端**开发可以借助于ReactNative、Weex、Uniapp等框架实现跨平台开发

  - **小程序端**的开发也是离不开JavaScript

  - **桌面端**应用程序我们可以借助于Electron来开发

  - **服务器端**开发可以借助于Node环境使用JavaScript来开发



# JS的痛点

- 随着近几年前端领域的快速发展，让JavaScript迅速**被普及和受广大开发者的喜爱**，借助于**JavaScript本身的强大**，也让**使用JavaScript开发的人员越来越多**

- 优秀的JavaScript没有缺点吗？

  - 其实上由于各种历史因素，JavaScript语言本身**存在很多的缺点**

  - 比如ES5以及之前的**使用的var关键字关于作用域**的问题

  - 比如最初JavaScript设计的**数组类型并不是连续的内存空间**

  - 比如直到今天**JavaScript也没有加入类型检测**这一机制

- JavaScript正在慢慢变好

  - 不可否认的是，JavaScript正在慢慢变得越来越好，无论是从底层设计还是应用层面

  - ES6、7、8等的推出，每次都会让这门语言**更加现代、更加安全、更加方便**

  - 但是直到今天，JavaScript在**类型检测上依然是毫无进展**



# 类型带来的问题

- 首先你需要知道，编程开发中我们有一个共识：**错误出现的越早越好**

  - 能在**写代码的时候**发现错误，就不要在**代码编译时**再发现（IDE的优势就是在代码编写过程中帮助我们发现错误）

  - 能在**代码编译期间**发现错误，就不要在**代码运行期间**再发现（类型检测就可以很好的帮助我们做到这一点）

  - 能在开发阶段发现错误，就不要在测试期间发现错误，能在测试期间发现错误，就不要在上线后发现错误

- 现在我们想探究的就是如何在 **代码编译期间** **发现代码的错误**

  - JavaScript可以做到吗？不可以，我们来看下面这段经常可能出现的代码问题

  ```js
  function getLength(str) {
    return str.length;
  }
  
  console.log(getLength("aaa")); // 正确的调用
  console.log(getLength()); // 错误的调用(IDE并不会报错)
  ```



# 类型错误

- 这是我们一个非常常见的错误

  - 这个错误很大的原因就是因为JavaScript没有对我们**传入的参数进行任何的限制**，只能等到**运行期间才发现这个错误**

  - 并且当这个错误产生时，会影响后续代码的继续执行，也就是整个项目都因为**一个小小的错误而深入崩溃**

- 当然，你可能会想：我怎么可能犯这样低级的错误呢？

  - 当我们写像我们上面这样的简单的demo时，这样的错误很容易避免，并且当出现错误时，也很容易检查出来

  - 但是当我们开发一个**大型项目**时呢？你能保证自己**一定不会出现这样的问题**吗？而且如果我们是调用别人的类库，又如何知道让我们传入的到底是什么样的参数呢？

- 但是，如果我们可以给**JavaScript加上很多限制**，在开发中就可以很好的**避免这样的问题**了

  - 比如我们的getLength函数中str是一个**必传的类型**，没有调用者没有传编译期间就会报错

  - 比如我们要求它的必须是一个**String类型**，传入其他类型就直接报错

  - 那么就可以知道很多的错误问题在**编译期间**就被发现，而不是等到运行时再去发现和修改



# 类型思维的缺失

- 我们已经简单体会到没有类型检查带来的一些问题，JavaScript因为从设计之初就没有考虑类型的约束问题，所以造成了前端开发人员关于**类型思维的缺失**
  - **前端开发人员**通常不关心变量或者参数是什么类型的，如果在必须确定类型时，我们往往需要使用各种判断验证
  - 从其他方向转到前端的人员，也会因为没有类型约束，而总是担心自己的**代码不安全，不够健壮**
- 所以我们经常会说JavaScript**不适合开发大型项目**，因为当项目一旦庞大起来，这种宽松的类型约束会带来非常多的安全隐患，多人员开发它们之间也**没有良好的类型契约**
  - 比如当我们去实现一个核心类库时，如果没有类型约束，那么需要对**别人传入的参数进行各种验证**来保证我们代码的健壮性
  - 比如我们去调用别人的函数，对方没有对函数进行任何的注释，我们只能去看里面的逻辑来理解这个函数需要**传入什么参数，返回值是什么类型**



# JS添加类型约束

- 为了弥补JavaScript类型约束上的缺陷，增加类型约束，很多公司推出了自己的方案
  - 2014年，Facebook推出了**flow**来对JavaScript进行类型检查
  - 同年，Microsoft微软也推出了**TypeScript1.0**版本
  - 他们都致力于为JavaScript提供类型检查
- 而现在，无疑**TypeScript已经完全胜出**
  - Vue2.x的时候采用的就是flow来做类型检查
  - Vue3.x已经全线转向TypeScript，98.3%使用TypeScript进行了重构
  - 而Angular在很早期就使用TypeScript进行了项目重构并且需要使用TypeScript来进行开发
  - 而甚至Facebook公司一些自己的产品也在使用TypeScript
- 学习TypeScript不仅仅可以为我们的代码增加类型约束，而且可以培养我们前端程序员具备类型思维
  - 如果之后想要学习其他语言，比如Java、Dart等也会是驾轻就熟



# TypeScript

- 虽然我们已经知道TypeScript是干什么的，也知道它解决了什么样的问题，但是我们还是需要全面的来认识一下TypeScript到底是什么？
- 我们来看一下TypeScript在GitHub和官方上对自己的定义
  - GitHub说法：**TypeScript is a superset of JavaScript that compiles to clean JavaScript output**
  - TypeScript官网：**TypeScript is a typed superset of JavaScript that compiles to plain JavaScript**
  - 翻译一下：TypeScript是拥有类型的**JavaScript超集**，它可以编译成**普通、干净、完整**的JavaScript代码
- 怎么理解上面的话呢？
  - 我们可以将TypeScript理解成**加强版的JavaScript**
  - **JavaScript所拥有的特性，TypeScript全部都是支持的**，并且**它紧随ECMAScript的标准，所以ES6、ES7、ES8等新语法标准，它都是支持的**
  - TypeScript在**实现新特性的同时**，总是**保持和ES标准的同步甚至是领先**
  - 并且在语言层面上，**不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型（Enum）、元组类型（Tuple）等**
  - 并且**TypeScript最终会被编译成JavaScript代码**，所以**你并不需要担心它的兼容性问题，在编译时也可以不借助于Babel这样的工具**
- 所以，我们可以把TypeScript理解成更加强大的JavaScript，不仅让JavaScript更加安全，而且给它带来了诸多好用的好用特性



## 特点

- 官方对TypeScript有几段特点的描述，我觉得非常到位（虽然有些官方，了解一下），我们一起来分享一下
- 始于JavaScript，归于JavaScript
  - TypeScript从今天数以百万计的JavaScript开发者所熟悉的语法和语义开始
  - 使用现有的JavaScript代码，包括流行的JavaScript库，并从JavaScript代码中调用TypeScript代码
  - TypeScript可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中
- TypeScript是一个强大的工具，用于构建大型项目
  - 类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构
  - 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有JavaScript库的行为
- 拥有先进的 JavaScript
  - TypeScript提供最新的和不断发展的JavaScript特性，包括那些来自2015年的ECMAScript和未来的提案中的特性，比如异步功能和Decorators，以帮助建立健壮的组件
  - 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的ECMAScript3（或更新版本）的JavaScript



## 众多项目采用

- 正是因为有这些特性，TypeScript目前已经在很多地方被应用

  - Angular源码在很早就**使用TypeScript来进行了重写，并且开发Angular也需要掌握TypeScript**

  - Vue3源码也**采用了TypeScript进行重写**，在**阅读源码时你会看到大量TypeScript的语法**

  - 包括目前已经变成**最流行的编辑器VSCode也是使用TypeScript来完成的**

  - 包括在**React中已经使用的ant-design的UI库，也大量使用TypeScript来编写**

  - 目前**公司非常流行Vue3+TypeScript、React+TypeScript的开发模式**

  - 包括**小程序开发，也是支持TypeScript**的



## 编译环境

- 在前面我们提到过，TypeScript最终会被编译成JavaScript来运行，所以我们需要搭建对应的环境
  - 我们**需要在电脑上安装TypeScript**，这样就可以**通过TypeScript的Compiler将其编译成JavaScript**
- 所以，我们需要先可以先进行全局的安装
  - npm install typescript -g
  - tsc --version 查看版本



## 运行环境

- 如果我们每次为了查看TypeScript代码的运行效果，都通过经过两个步骤的话就太繁琐了
  - 第一步：通过**tsc编译TypeScript到JavaScript代码**
  - 第二步：在**浏览器或者Node环境下运行JavaScript代码**
- 是否可以简化这样的步骤呢？
  - 比如**编写了TypeScript之后可以直接运行在浏览器上？**
  - 比如**编写了TypeScript之后，直接通过node的命令来执行？**
- 上面我提到的两种方式，可以通过两个解决方案来完成
  - 方式一：通过**webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上**
  - 方式二：通过**ts-node库，为TypeScript的运行提供执行环境**
- 方式一：webpack配置
  - 在之前的TypeScript文章中我已经有写过，如果需要可以自行查看对应的文章
  - https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw



## ts-node

- 方式二：安装ts-node
  - npm install ts-node -g
- 另外ts-node需要依赖 tslib 和 @types/node 两个包
  - npm install tslib @types/node -g
- 现在，我们可以直接通过 ts-node 来运行TypeScript的代码

  - ts-node xxx.ts



## 变量的声明

- 在TypeScript中定义变量需要指定 标识符 的类型

- 所以完整的声明格式如下

  - 声明了类型后TypeScript就会进行**类型检测**，声明的类型可以称之为**类型注解（Type Annotation）**
  - **var/let/const 标识符: 数据类型 = 赋值**

- 比如我们声明一个message，完整的写法如下

  - 注意：这里的string是小写的，和String是有区别的
  - string是TypeScript中定义的字符串类型，String是JavaScript中定义的一个类

  ```tsx
  let message: string = "Hello World";
  message = "Hello TypeScript";
  
  console.log(message);
  ```
  
- 如果我们给message赋值其他类型的值，那么就会报错

  ```tsx
  // message = 123; // 不能将类型 “number” 分配给类型 “string”
  ```



## 声明变量的关键字

- 在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义

  ```tsx
  var name: string = "strive"
  let age: number = 18
  const height: number = 1.83
  ```

- 当然，在tslint中并不推荐使用var来声明变量

  - 可见，在TypeScript中并不建议再使用var关键字了，主要原因和ES6升级后let和var的区别是一样的，var是没有块级作用域的，会引起很多的问题，这里不再展开探讨



## 变量的类型推导（推断）

- 在开发中，有时候为了方便起见我们并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过TS本身的特性帮助我们推断出对应的变量类型

  ```tsx
  // 声明一个标识符时, 如果有直接进行赋值, 会根据赋值的类型推导出标识符的类型注解, 这个过程称之为类型推导
  // let   进行类型推导, 推导出来的通用类型
  // const 进行类型推导, 推导出来的字面量类型
  let name = "strive";   // let name: string
  const info = "strive"; // const info: "strive"
  ```
  
- 如果我们给name赋值123

  ```tsx
  // name = 123 // 不能将类型 “number” 分配给类型 “string”
  ```

- 这是因为在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型

  - 上面的name就是因为后面赋值的是一个string类型，所以name虽然没有明确的说明，但是依然是一个string类型



## JS类型

### Array

- **数组类型**的定义也非常简单，有两种方式

  - `Array<string>`事实上是一种泛型的写法，我们会在后续中学习它的用法

  ```tsx
  // 明确的指定数组的类型注解: 两种写法
  // 1.string[]:      数组类型, 并且数组中存放的是字符串类型
  // 2.Array<string>: 数组类型, 并且数组中存放的是字符串类型
  
  // 注意事项: 在真实的开发中, 数组一般存放相同的类型, 不要存放不同的类型
  let names1: string[] = ["abc", "cba", "nba"];
  let names2: Array<string> = ["abc", "cba", "nba"];
  
  names1.push("aaa");
  names2.push("aaa");
  ```

- 如果添加其他类型到数组中，那么会报错

  ```tsx
  // names1.push(123); // 类型 “number” 的参数不能赋给类型 “string” 的参数
  // names2.push(123); // 类型 “number” 的参数不能赋给类型 “string” 的参数
  ```



### Object

- object对象类型可以用于描述一个对象

  ```tsx
  // 这样表示是一个空对象类型, 不能获取数据，也不能设置数据
  let info1: object = { name: "strive", age: 18 };
  // info1.name = "张三"; // 类型 “object” 上不存在属性 “name”
  // console.log(info1.age); // 类型 “object” 上不存在属性 “age”
  
  let info2: { name: string; age: number } = { name: "strive", age: 18 };
  info2.name = "张三";
  console.log(info2.age);
  ```



## 函数的参数类型

- 函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型

- 参数的类型注解

  - 声明函数时，可以在**每个参数后添加类型注解，以声明函数接受的参数类型**

  ```tsx
  // 在定义一个TypeScript中的函数时, 都要明确的指定参数的类型
  function sum(num1: number) {
    return num1;
  }
  
  sum(10);
  // sum(10, 20); // 应有 1 个参数，但获得 2 个
  // sum("abc"); // 类型 “string” 的参数不能赋给类型 “number” 的参数
  ```



## 函数的返回值类型

- 我们也可以添加返回值的类型注解，这个注解出现在函数列表的后面

  ```tsx
  // 在定义一个TypeScript中的函数时返回值类型可以明确的指定, 也可以自动进行类型推导
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  sum(10, 20);
  ```
  
- 和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型

  - 某些第三方库处于方便理解，会明确指定返回类型，看个人喜好



## 匿名函数的参数

- 匿名函数与函数声明会有一些不同

  - 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时
  - **该函数的参数**会自动指定类型

  ```tsx
  const names = ["abc", "cba", "nba"];
  
  // 匿名函数是否需要添加类型注解呢? 最好不要添加类型注解
  names.forEach(function (item, index, arr) {
    console.log(item, index, arr);
  });
  ```

- 我们并没有指定item的类型，但是item是一个string类型

  - 这是因为TypeScript会根据forEach函数的类型以及数组的**类型推断出item的类型**
  - 这个过程称之为**上下文类型（contextual typing）**，因为函数执行的上下文可以帮助确定参数和返回值的类型



## 函数和对象结合使用

- 如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢？

  - 我们可以使用对象类型

  ```tsx
  // 对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个?
  function printCoordinate(point: { x: number; y: number; z?: number }) {
    console.log("x坐标: ", point.x);
    console.log("y坐标: ", point.y);
  }
  
  printCoordinate({ x: 10, y: 20 });
  ```
  
- 在这里我们使用了一个对象来作为类型

  - 在对象我们可以添加属性，并且告知TypeScript该属性需要是什么类型
  - 属性之间可以使用 , 或者 ; 来分割，最后一个分隔符是可选的
  - 每个属性的类型部分也是可选的，如果不指定，那么就是any类型



## TS类型

### any

- 在某些情况下，我们确实**无法确定一个变量的类型，并且可能它会发生一些变化**，这个时候我们可以使用**any类型**（类似于Dart语言中的dynamic类型）

- any类型有点像一种讨巧的TypeScript手段

  - 我们可以**对any类型的变量进行任何的操作**，包括**获取不存在的属性、方法**
  - 我们**给一个any类型的变量赋值任何的值，比如数字、字符串的值**

  ```tsx
  // any类型就表示不限制标识符的任意类型, 并且可以在该标识符上面进行任意的操作(在TypeScript中回到JavaScrip中)
  let id: any = "aaa";
  id = "bbb";
  id = 123;
  console.log(id.length);
  
  // 定义数组
  const infos: any[] = ["aaa", 123, {}, []];
  ```

- 如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可以使用any

  - 包括**在Vue源码中，也会使用到any来进行某些类型的适配**



### unknown

- unknown是TypeScript中比较特殊的一种类型，**它用于描述类型不确定的变量**

  - 和any类型有点类似，但是unknown类型的值上做任何事情都是不合法的

- 什么意思呢？我们来看下面的场景

  ```tsx
  let foo: unknown = "aaa";
  foo = 123;
  
  // unknown类型默认情况下在上面进行任意的操作都是非法的
  // 要求必须进行类型的校验(缩小), 才能根据缩小之后的类型, 进行对应的操作
  if (typeof foo === "string") { // 类型缩小
    console.log(foo.length, foo.split(" "));
  }
  ```



### void

- void通常用来**指定一个函数是没有返回值的**，那么它的返回值就是void类型

  ```tsx
  function sum(num1: number, num2: number) {
    console.log(num1 + num2);
  }
  ```

- 这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void

  ```tsx
  // 1.在TS中如果一个函数没有任何的返回值, 那么返回值的类型就是void类型
  // 2.如果返回值是void类型, 那么我们也可以返回 undefined (TS编译器允许这样做而已)
  function sum(num1: number, num2: number): void {
    console.log(num1 + num2)
  
    // return 123 错误的做法
  }
  ```

- 这里还有一个注意事项

  - 我们可以将undefined赋值给void类型，也就是函数可以返回undefined

- 当基于上下文的类型推导（Contextual Typing）推导出返回类型为 void 的时候，并不会强制函数一定不能返回内容

  ```tsx
  const names = ["abc", "cba", "nba"];
  
  // 了解即可: 基于上下文类型推导的函数中的返回值如果是void类型, 并且不强制要求不能返回任何的东西
  names.forEach(item => item.length);
  ```



### never

- never 表示**永远不会发生值的类型**，比如一个函数

  - 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？
  - 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型

  ```tsx
  // 实际开发中只有进行类型推导时, 可能会自动推导出来是never类型, 但是很少使用它
  function foo(): never {
    while (true) {
      console.log("---")
    }
  }
  
  function bar(): never {
    throw new Error("111");
  }
  ```

- never有什么样的应用场景呢？这里我们举一个例子，但是它用到了联合类型，后面我们会讲到

  ```tsx
  // 封装框架/工具库的时候可以使用一下never
  // 其他时候在扩展工具的时候, 对于一些没有处理的case, 可以直接报错
  function handleMessage(message: string | number) {
    switch (typeof message) {
      case "string":
        console.log(message.length);
        break;
      case "number":
        console.log(message);
        break;
      default:
        const check: never = message;
    }
  }
  
  handleMessage("aaa");
  handleMessage(123);
  
  // 另外同事调用这个函数
  // handleMessage(true); // 类型 “boolean” 的参数不能赋给类型 “string | number” 的参数
  ```



### tuple

- tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等

  ```tsx
  // 元组数据结构中可以存放不同的数据类型, 取出来的item也是有明确的类型
  const info: [string, number, number] = ["strive", 18, 1.83];
  const value1 = info[0]; // strive, 并且知道类型是 string 类型
  const value2 = info[1]; // 18, 并且知道类型是 number 类型
  ```

- 那么tuple和数组有什么区别呢？

  - 首先，**数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中**（可以放在对象或者元组中）
  - 其次，**元组中每个元素都有自己特定的类型，根据索引值获取到的值可以确定对应的类型**

  ```tsx
  const info1: (string | number)[] = ["strive", 18, 1.83];
  const item1 = info1[0]; // 不能确定类型
  
  const info2: [string, number, number] = ["strive", 18, 1.83];
  const item2 = info2[0]; // 一定是 string 类型
  ```

- tuple通常可以作为返回的值，在使用的时候会非常的方便

  ```tsx
  function useState(initialState: number): [number, (newValue: number) => void] {
    let stateValue = initialState;
    function setValue(newValue: number) {
      stateValue = newValue;
    }
  
    return [stateValue, setValue];
  }
  
  const [count, setCount] = useState(10);
  console.log(count);
  setCount(100);
  ```



## TS语法细节

### 联合类型

- TypeScript的类型系统允许我们使用多种运算符，从**现有类型中构建新类型**

- 我们来使用第一种组合类型的方法：**联合类型（Union Type）**

  - 联合类型是**由两个或者多个其他类型组成的类型**

  - 表示**可以是这些类型中的任何一个值**

  - 联合类型中的每一个类型被称之为**联合成员（union's members）**

  ```tsx
  function printInfo(value: number | string) {
    console.log(value);
  }
  
  printInfo(123);
  printInfo("aaa");
  ```



### 使用联合类型

- 传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可

  - 但是我们拿到这个值之后，我们应该如何使用它呢？因为**它可能是任何一种类型**
  - 比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法

- 那么我们怎么处理这样的问题呢？

  - 我们需要使用**缩小（narrow）联合**
  - TypeScript可以**根据我们缩小的代码结构，推断出更加具体的类型**

  ```tsx
  function printInfo(value: number | string) {
    if (typeof value === "string") {
      console.log(value.split(" "));
    } else {
      console.log(value);
    }
  }
  
  printInfo("aaa");
  printInfo(123);
  ```



### 类型别名

- 我们通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多次

- 比如我们可以给对象类型起一个别名

  ```tsx
  type numType = number;
  const age: numType = 18;
  
  type InfoType = number | string;
  function printInfo(value: InfoType) {
    console.log(value);
  }
  
  type PointType = { x: number; y: number; z?: number };
  function printCoordinate(point: PointType) {
    console.log(point.x, point.y, point.z);
  }
  ```



### 接口的声明

- 在前面我们通过type可以用来声明一个对象类型

  ```tsx
  type PointType = { x: number; y: number; z?: number };
  ```

- 对象的另外一种声明方式就是通过接口来声明

  ```tsx
  interface PointType { x: number; y: number; z?: number };
  ```

- 那么它们有什么区别呢？

  - 类型别名和接口非常相似，在定义对象类型时，大部分时候，你可以任意选择使用
  - 接口的几乎所有特性都可以在 type 中使用



### interface和type区别

- 我们会发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？

  - 如果是**定义非对象类型**，通常**推荐使用type**

- 如果是定义对象类型，那么他们是有区别的

  - interface 可以重复的对某个接口来定义属性和方法
  - 而type定义的是别名，别名是不能重复的

  ```tsx
  // 1.区别一: type类型使用范围更广, 接口类型只能用来声明对象
  type numType = number;
  type InfoType = number | string;
  
  // 2.区别二: 在声明对象时, interface可以多次声明
  // 2.1. type不允许两个相同名称的别名同时存在
  // type PointType1 = { x: number; y: number };
  // type PointType1 = { z: number };
  
  // 2.2. interface可以多次声明同一个接口名称
  interface PointType2 { x: number; y: number };
  interface PointType2 { z: number };
  
  const point: PointType2 = {
    x: 100,
    y: 200,
    // z: 300, // 类型 "{ x: number; y: number; }" 中缺少属性 "z"，但类型 "PointType2" 中需要该属性
  };
  
  // 3.interface支持继承的
  interface IPerson { name: string; age: number }
  interface IKun extends IPerson {
    kouhao: string;
  }
  
  const ikun1: IKun = { kouhao: "你干嘛, 哎呦", name: "strive", age: 18 };
  // 总结: 如果是非对象类型的定义使用type, 如果是对象类型的声明那么使用interface
  ```

- 所以，interface可以为现有的接口提供更多的扩展



### 交叉类型

- 前面我们学习了联合类型

  - 联合类型表示多个类型中一个即可

- 还有另外一种类型合并，就是交叉类型（Intersection Types）

  - **交叉类似表示需要满足多个类型的条件**
  - **交叉类型使用 & 符号**

- 我们来看下面的交叉类型

  - 表达的含义是**number和string要同时满足**
  - 但是**有同时满足是一个number又是一个string的值**吗？其实是没有的，所以MyType其实是一个never类型

  ```tsx
  // 交叉类型: 两种(多种)类型要同时满足
  type MyType = number & string
  ```

- 交叉类型的应用

  ```tsx
  // 所以，在开发中，我们进行交叉时，通常是对对象类型进行交叉的
  interface IKun { name: string; age: number }
  interface ICoder { name: string; coding: () => void }
  
  type InfoType = IKun & ICoder;
  const info: InfoType = { name: "strive", age: 18, coding() {} };
  ```



### 类型断言

- 有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）

  - 比如我们通过 document.querySelector，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它具体的类型

- TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换

  ```tsx
  // 获取DOM元素 <img class="img" />
  // const imgEl = document.querySelector(".img")
  const imgEl = document.querySelector(".img") as HTMLImageElement;
  imgEl.src = "xxx";
  
  // 类型断言的规则: 断言只能断言成更加具体的类型, 或者 不太具体(any/unknown) 类型
  const age1: number = 18;
  // 错误的做法
  // const age2 = age1 as string
  
  // TS类型检测来说是正确的, 但是这个代码本身不太正确
  const age3 = age1 as any;
  const age4 = age3 as string;
  console.log(age4.split(" "));
  ```



### 非空类型断言

- 当我们编写下面的代码时，在执行ts的编译阶段会报错

  - 这是因为传入的message有可能是为undefined的，这个时候是不能执行方法的

  ```tsx
  function printInfo(message?: string) {
    // console.log(message.split(" ")); // message 可能为 “未定义”
  }
  
  printInfo('哈哈哈哈')
  ```

- 但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言

  - **非空断言使用的是 !** ，表示**可以确定某个标识符是有值**的，**跳过ts在编译阶段对它的检测**

  ```tsx
  function printInfo(message?: string) {
    console.log(message!.split(" "));
  }
  
  printInfo("哈哈哈哈");
  ```



### 字面量类型

- 除了前面我们所讲过的类型之外，也可以使用字面量类型（literal types）

  ```tsx
  let message1: "哈哈哈" = "哈哈哈";
  // message1 = "xxx";  // 不能将类型 “"xxx"” 分配给类型 “"哈哈哈"”
  const message2 = "哈哈哈";
  ```

- 那么这样做有什么意义呢？

  - 默认情况下这么做是没有太大的意义的，但是我们可以将多个类型联合在一起

  ```tsx
  type MethodType = "get" | "post";
  function request(url: string, method: MethodType) {}
  request("xxxx", "post");
  ```



### 字面量推理

- 我们来看下面的代码  

  ```tsx
  type MethodType = "get" | "post";
  function request(url: string, method: MethodType) {}
  request("xxxx", "post");
  
  // TS细节
  const info = { url: "xxxx", method: "post" };
  // 下面的做法是错误: info.method 获取的是 string 类型
  // request(info.url, info.method);
  // 这是因为我们的对象在进行字面量推理的时候，info 其实是一个 {url: string, method: string}
  // 所以我们没办法将一个 string 赋值给一个 字面量 类型
  
  // 解决方案一: info.method 进行类型断言
  request(info.url, info.method as "post");
  
  // 解决方案二: 直接让 info 对象类型是一个字面量类型
  const info2:  { url: string; method: "post" } = { url: "xxxx", method: "post" };
  const info3 = { url: "xxxx", method: "post" } as const;
  // xxx 本身就是一个 string
  request(info2.url, info2.method);
  request(info3.url, info3.method);
  ```



### 类型缩小

- 什么是类型缩小呢？

  - 类型缩小的英文是 **Type Narrowing**（也有人翻译成类型收窄）
  - 我们可以通过类似于 **typeof padding === "number"** 的判断语句，来**改变TypeScript的执行路径**
  - 在给定的执行路径中，我们可以**缩小比声明时更小的类型**，这个过程称之为 **缩小（ Narrowing ）**
  - 而我们编写的 **typeof padding === "number** 可以称之为 **类型保护（type guards）**

- 常见的类型保护有如下几种

  - typeof
  - 平等缩小（比如===、!==）
  - instanceof
  - in
  - 等等

  ```tsx
  // 1.typeof: 使用的最多
  function printID(id: number | string) {
    if (typeof id === "string") {
      console.log(id.length, id.split(" "));
    } else {
      console.log(id);
    }
  }
  
  // 2.===/!==: 方向的类型判断
  type Direction = "left" | "right" | "up" | "down";
  function switchDirection(direction: Direction) {
    if (direction === "left") {
      console.log("左:", "角色向左移动");
    } else if (direction === "right") {
      console.log("右:", "角色向右移动");
    } else if (direction === "up") {
      console.log("上:", "角色向上移动");
    } else if (direction === "down") {
      console.log("下:", "角色向下移动");
    }
  }
  
  // 3.instanceof: 传入一个日期, 打印日期
  function printDate(date: string | Date) {
    if (date instanceof Date) {
      console.log(date.getTime());
    } else {
      console.log(date);
    }
  }
  
  // 4.in: 判断是否有某一个属性
  interface ISwim { swim: () => void }
  interface IRun { run: () => void }
  function move(animal: ISwim | IRun) {
    if ("swim" in animal) {
      animal.swim();
    } else if ("run" in animal) {
      animal.run();
    }
  }
  
  const fish: ISwim = { swim: function () {} };
  const dog: IRun = { run: function () {} };
  move(fish);
  move(dog);
  ```



### TS函数类型

- 在JavaScript开发中，函数是重要的组成部分，并且函数可以**作为一等公民**（可以作为参数，也可以作为返回值进行传递）

- 那么在使用函数的过程中，函数是否也可以有自己的类型呢？

- 我们可以编写**函数类型的表达式（Function Type Expressions），来表示函数类型**

  ```tsx
  // 格式: (参数列表) => 返回值
  type CalcType = (num1: number, num2: number) => void;
  
  function calc(fn: CalcType) {
    console.log(fn(10, 20));
  }
  
  function sum(num1: number, num2: number) {
    return num1 + num2;
  }
  
  function mul(num1: number, num2: number) {
    return num1 * num2;
  }
  
  calc(sum);
  calc(mul);
  calc(function (num1, num2) {
    return num1 - num2;
  });
  ```



### TS函数类型解析

- 在上面的语法中 (num1: number, num2: number) => void，代表的就是一个函数类型
  - 接收两个参数的函数：num1和num2，并且都是number类型
  - 并且这个函数是没有返回值的，所以是void
- 注意：**在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的**



### 调用签名

- 在 JavaScript 中，函数除了可以被调用，自己也是可以有属性值的

  - 然而前面讲到的函数类型表达式**并不能支持声明属性**
  - 如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个**调用签名（call signature）**

  ```tsx
  // 函数的调用签名(从对象的角度来看待这个函数, 也可以有其他属性)
  interface IBar {
    name: string;
    (num1: number): number;
  }
  
  const bar: IBar = (num1: number): number => {
    return num1;
  };
  
  bar.name = "aaa";
  bar(10);
  
  // 开发中如何选择:
  // 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
  // 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)
  ```

- 注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 : 而不是 =>



### 构造签名

- JavaScript 函数也可以使用 new 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)，因为他们会产生一个新对象

  - 你可以写一个**构造签名（ Construct Signatures ）**，方法是在调用签名前面加一个 new 关键词

  ```tsx
  class Person {}
  
  interface IPerson { new (): Person }
  
  function factory(fn: IPerson) {
    return new fn();
  }
  
  factory(Person);
  ```



### 参数的可选类型

- 我们可以指定某个参数是可选的

  ```tsx
  // y就是一个可选参数
  // 可选参数类型是什么? number | undefined 联合类型
  function foo(x: number, y?: number) {
    if (y !== undefined) {
      console.log(y + 10);
    }
  }
  
  foo(10);
  foo(10, 20);
  ```

- 这个时候这个参数y依然是有类型的，它是什么类型呢？ number | undefined

- 另外可选类型需要在必传参数的后面



### 默认参数

- 从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的

  ```tsx
  // 1.有默认值的情况下, 参数的类型注解可以省略
  // 2.有默认值的参数, 是可以接收一个 undefined 的值
  function foo(x: number, y = 100) {
    console.log(y + 10);
  }
  
  foo(10);
  foo(10, 20);
  foo(10, undefined);
  foo(10);
  ```

- 这个时候y的类型其实是 undefined 和 number 类型的联合



### 剩余参数

- 从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中

  ```tsx
  function foo(...args: (string | number)[]) {}
  
  foo(111, 222);
  foo("aaa", "bbb", "ccc", 333);
  ```



### 函数的重载

- 在TypeScript中，如果我们编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢？

- 我们可能会这样来编写，但是其实是错误的

  ```tsx
  // 联合类型是不可以
  function add(num1: number | string, num2: number | string): number | string {
    return num1 + num2;
  }
  ```

- 那么这个代码应该如何去编写呢？

  - 在TypeScript中，我们可以去**编写不同的重载签名（overload signatures）**来表示函数可以**以不同的方式进行调用**
  - 一般是**编写两个或者以上的重载签名**，再去**编写一个通用的函数以及实现**

  ```tsx
  // 1.TypeScript中函数的重载写法
  // 1.1.先编写重载签名
  function add(num1: number, num2: number): number;
  function add(num1: string, num2: string): string;
  
  // 1.2.编写通用的函数实现
  function add(num1: any, num2: any): any {
    return num1 + num2;
  }
  
  // 在我们调用add的时候，它会根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名
  add(10, 20);
  add("aaa", "bbb");
  
  // 通用函数不能被调用
  // add({}, {});
  // add("aaa", 111)
  ```



### 可推导的this类型

- this是JavaScript中一个比较难以理解和把握的知识点

- 当然在目前的Vue3和React开发中你不一定会使用到this

  - Vue3的Composition API中很少见到this，React的Hooks开发中也很少见到this了

- 但是我们还是简单掌握一些TypeScript中的this，TypeScript是如何处理this呢？我们先来看两个例子

  ```tsx
  // 在没有对TS进行特殊配置的情况下, this是any类型
  
  const obj = {
    name: "obj",
    foo() {
      console.log(this.name);
    },
  };
  
  obj.foo();
  
  function foo() {
    console.log(this);
  }
  ```

- 上面的代码默认情况下是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的

  - 这是因为在没有指定this的情况，this默认情况下是any类型的



### this的编译选项

- VSCode在检测我们的TypeScript代码时，默认情况下运行不确定的this按照any类型去使用

  - 但是我们可以创建一个tsconfig.json文件，并且在其中告知VSCodethis必须明确执行（不能是隐式的）

  ```json
  {
    "compilerOptions": {
      "noImplicitThis": true
    }
  }
  ```

- 在设置了**noImplicitThis为true**时， TypeScript会根据上下文推导this，但是在不能正确推导时，就会报错，需要我们明确的指定this



### 指定this的类型

- 在开启noImplicitThis的情况下，我们必须指定this的类型

- 如何指定呢？函数的第一个参数类型

  - 函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型（名词必须叫this）
  - 在后续调用函数传入参数时，从第二个参数开始传递的，this参数会在编译后被抹除

  ```tsx
  function foo(this: { name: string }) {
    console.log(this);
  }
  
  foo.call({ name: "111" });
  ```



### this相关的内置工具

- Typescript 提供了一些工具类型来辅助进行常见的类型转换，这些类型全局可用

- ThisParameterType

  - 用于提取一个函数类型的this (opens new window) 参数类型
  - 如果这个函数类型没有this参数返回unknown

  ```tsx
  function foo(this: { name: string }) {
    console.log(this);
  }
  
  type FooThisType = ThisParameterType<typeof foo>
  ```

- OmitThisParameter

  - 用于移除一个函数类型的this参数类型，并且返回当前的函数类型

  ```tsx
  type PureFooType = OmitThisParameter<typeof foo>
  ```



### ThisType

- 这个类型不返回一个转换过的类型，它被用作标记一个上下文的this类型（官方文档）

  - 事实上官方文档的不管是解释，还是案例都没有说明出来ThisType类型的作用

- 我这里用另外一个例子来给大家进行说明

  ```tsx
  // ThisType: 用于绑定一个上下文的this
  interface IState { name: string; age: number }
  interface IStore { state: IState; eating: () => void }
  
  const store: IStore & ThisType<IState> = {
    state: { name: "strive", age: 18 },
    eating() {
      console.log(this.name);
    },
  };
  
  store.eating.call(store.state);
  ```




## TS面向对象

### 认识类的使用

- 在早期的JavaScript开发中（ES5）我们需要通过函数和原型链来实现类和继承，从ES6开始，引入了**class关键字**，可以更加方便的定义和使用类
- TypeScript作为JavaScript的超集，也是支持使用class关键字的，并且还可以对类的属性和方法等进行静态类型检测
- 实际上在JavaScript的开发过程中，我们更加习惯于函数式编程
  - 比如React开发中，目前更多使用的函数组件以及结合Hook的开发模式
  - 比如在Vue3开发中，目前也更加推崇使用 Composition API
- 但是在封装某些业务的时候，类具有更强大封装性，所以我们也需要掌握它们
- 类的定义我们通常会使用class关键字
  - 在面向对象的世界里，任何事物都可以使用类的结构来描述
  - 类中包含特有的**属性和方法**



### 类的定义

- 我们来定义一个Person类

  - 使用class关键字来定义一个类

- 我们可以声明类的属性：在类的内部声明类的属性以及对应的类型

  - 如果类型没有声明，那么它们默认是any的
  - 我们也可以给属性设置初始化值
  - 在默认的strictPropertyInitialization模式下面我们的属性是必须初始化的，如果没有初始化，那么编译时就会报错
    - 如果我们在strictPropertyInitialization模式下确实不希望给属性初始化，可以使用 name!: string语法

- 类可以有自己的构造函数constructor，当我们通过new关键字创建一个实例时，构造函数会被调用

  - 构造函数**不需要返回任何值**，默认**返回当前创建出来的实例**

- 类中可以有自己的函数，**定义的函数**称之为**方法**

  ```tsx
  class Person {
    // 成员属性: 声明成员属性
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    running() {
      console.log(this.name + " running");
    }
  }
  
  // 实例对象: instance
  const p1 = new Person("strive", 21);
  console.log(p1.name, p1.age);
  ```



### 类的继承

- 面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提

- 我们使用**extends关键字**来实现继承，子类中使用**super**来访问父类

- 我们来看一下Student类继承自Person

  - Student类可以有自己的属性和方法，并且会继承Person的属性和方法
  - 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化

  ```tsx
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    running() {
      console.log(this.name + " running");
    }
  }
  
  class Student extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    studying() {
      // super.running()
      console.log(this.name + " studying");
    }
  }
  
  const stu = new Student("strive", 18);
  console.log(stu.name);
  console.log(stu.age);
  console.log(stu.running());
  console.log(stu.studying());
  ```



### 类的成员修饰符

- 在TypeScript中，类的属性和方法支持三种修饰符： public、private、protected

  - **public** 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
  - **private** 修饰的是仅在同一类中可见、私有的属性或方法
  - **protected** 修饰的是仅在类自身及子类中可见、受保护的属性或方法

- public是默认的修饰符，也是可以直接访问的，我们这里来演示一下protected和private

  ```tsx
  class Person {
    protected name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // 方法变成私有方法: 只有在类内部才能访问
    private eating() {
      console.log("吃东西", this.age, this.name);
    }
  }
  
  const p = new Person("strive", 18);
  // console.log(p.name); // 属性 “name” 受保护，只能在类 “Person” 及其子类中访问
  // console.log(p.age); // 属性 “age” 为私有属性，只能在类 “Person” 中访问
  // p.eating(); // 属性 “eating” 为私有属性，只能在类 “Person” 中访问
  ```



### 只读属性

- 如果有一个属性我们不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用readonly

  ```tsx
  class Person {
    readonly name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const p = new Person("strive");
  console.log(p.name);
  
  // p.name = "kobe" // 无法为 “name” 赋值，因为它是只读属性
  ```



### getters/setters

- 在前面一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，这个时候我们可以使用存取器

  ```tsx
  class Person {
    // 私有属性: 属性前面会使用_
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    set name(newValue: string) {
      if (newValue !== "xxx") {
        this._name = newValue;
      }
    }
  
    get name() {
      return this._name;
    }
  }
  
  const p = new Person("strive");
  p.name = "xxx";
  console.log(p.name); // strive
  
  p.name = "哈哈哈";
  console.log(p.name); // 哈哈哈
  ```



### 参数属性

- TypeScript 提供了特殊的语法，可以把一个构造函数参数转成一个同名同值的类属性

  - 这些就被称为参数属性（parameter properties）
  - 你可以通过在构造函数参数前添加一个可见性修饰符 public private protected 或者 readonly 来创建参数属性，最后这些类属性字段也会得到这些修饰符

  ```tsx
  class Person {
    // 语法糖
    constructor(public name: string, private _age: number, readonly height: number) {}
  
    running() {
      console.log(this._age, "eating")
    }
  }
  
  const p = new Person("strive", 18, 1.83)
  console.log(p.name, p.height)
  ```



### 抽象类

- 我们知道，继承是多态使用的前提

  - 所以在定义很多通用的调用接口时, 我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式
  - 但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，我们可以定义为抽象方法

- 什么是 抽象方法? 在TypeScript中没有具体实现的方法(没有方法体)，就是抽象方法

  - 抽象方法，必须存在于抽象类中
  - 抽象类是使用abstract声明的类

- 抽象类有如下的特点

  - 抽象类是不能被实例的话（也就是不能通过new创建）
  - 抽象方法必须被子类实现，否则该类必须是一个抽象类

  ```tsx
  abstract class Shape {
    // getArea方法只有声明没有实现体, 实现让子类自己实现
    // 可以将getArea方法定义为抽象方法, 在方法的前面加abstract
    // 抽象方法必须出现在抽象类中, 类前面也需要加abstract
    abstract getArea();
  }
  
  class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea() {
      return this.radius ** 2 * Math.PI;
    }
  }
  
  // 通用的函数
  function calcArea(shape: Shape) {
    return shape.getArea();
  }
  
  calcArea(new Rectangle(10, 20));
  calcArea(new Circle(5));
  
  // 在Java中会报错: 不允许
  calcArea({ getArea: function () {} });
  
  // 抽象类不能被实例化
  // calcArea(new Shape())
  // calcArea(100)
  // calcArea("aaa")
  ```

- 鸭子类型

  ```tsx
  // TypeScript对于类型检测的时候使用的鸭子类型
  // 诗歌中的鸭子类型: 当我看到一只走路像鸭子，游泳像鸭子，嘎嘎叫像鸭子的鸟时，我就称它为鸭子
  // 编程中的鸭子类型: 只关心属性和行为, 不关心你具体是不是对应的类型
  
  class Person {
    constructor(public name: string, public age: number) {}
    running() {}
  }
  
  class Dog {
    constructor(public name: string, public age: number) {}
    running() {}
  }
  
  function printPerson(p: Person) {
    console.log(p.name, p.age);
  }
  
  printPerson(new Person("strive", 18));
  printPerson({ name: "对象字面量", age: 0, running: function () {} });
  printPerson(new Dog("旺财", 1.5));
  ```



### 类的类型

- 类本身也是可以作为一种数据类型的

  ```tsx
  class Person {
    constructor(public name: string) {
      this.name = name;
    }
    running() {}
  }
  /**
   * 类的作用
   *  1.可以创建类对应的实例对象
   *  2.类本身可以作为这个实例的类型
   *  3.类也可以当中有一个构造签名的函数
   */
  
  const p1: Person = new Person("strive");
  const p2: Person = { name: "哈哈哈", running() {} };
  
  function printPerson(p: Person) {}
  printPerson(p1);
  printPerson(p2);
  ```



### 对象类型的属性修饰符

- 对象类型中的每个属性可以说明**它的类型、属性是否可选、属性是否只读**等信息

- 可选属性（Optional Properties）

  - 我们可以在**属性名后面加一个 ? 标记**表示这个属性是可选的

- 只读属性（Readonly Properties）

  - 在 TypeScript 中，**属性可以被标记为 readonly**，这不会改变任何运行时的行为
  - 但在类型检查的时候，一个标记为 readonly的属性是不能被写入的

  ```tsx
  type IPerson = {
    name?: string;
    readonly age: number;
  };
  
  interface IKun {
    name?: string;
    readonly slogan: string;
  }
  
  const p: IPerson = { name: "strive", age: 18 };
  // p.age = 20
  ```



### 索引签名

- 什么是索引签名呢？

  - 有的时候，你不能提前知道一个类型里的所有属性的名字，但是**你知道这些值的特征**
  - 这种情况，你就可以**用一个索引签名 (index signature) 来描述可能的值的类型**

  ```tsx
  // 索引签名: 可以通过字符串索引, 去获取到一个值, 也是字符串
  interface ICollection {
    [index: number]: string;
    length: number;
  }
  
  function printCollection(collection: ICollection) {
    for (let i = 0; i < collection.length; i++) {
      const item = collection[i];
      console.log(item.length);
    }
  }
  
  const array = ["aaa", "bbb", "ccc"];
  const tuple: [string, string] = ["111", "222"];
  printCollection(array);
  printCollection(tuple);
  ```

- 一个索引签名的属性类型必须是 string 或者是 number

  - 虽然 TypeScript 可以同时支持 string 和 number 类型，但数字索引的返回类型一定要是字符索引返回类型的子类型（了解）

  ```tsx
  // 返回值类型的目的是告知通过索引去获取到的值是什么类型
  interface IIndexType1 { [index: number]: string }
  const names1: IIndexType1 = ["aaa", "bbb", "ccc"];
  
  interface IIndexType2 { [index: string]: any }
  // 索引要求必须是字符串类型 names2[0] ---> names2["0"]
  const names2: IIndexType2 = ["aaa", "bbb", "ccc", 111, 222, 333];
  names2[0]
  names2["0"]
  
  interface IIndexType3 { [index: string]: string } 
  // const names3: IIndexType3 = ["aaa", "bbb", "ccc"] // 会报错
  // 严格字面量赋值检测: [...] ---> 数组字面量的本质是 new Array(...)
  // names3[0]
  // names3["forEach"] ---> function
  // names3["map/filter/..."] ---> function
  ```

- 两个索引类型的写法

  ```tsx
  interface IIndexType {
    // 两个索引类型的写法
    [index: number]: string;
    [key: string]: any;
  
    // 要求一: 下面的写法不允许, 数字类型索引的类型, 必须是字符串类型索引的类型的(子类型)
    // 结论: 数字类型必须是比如字符串类型更加确定的类型(需要是字符串类型的子类型)
    // 原因: 所有的数字类型都是会转成字符串类型去对象中获取内容
    // 0: number | string 当我们是一个数字的时候, 既要满足通过number去拿到的内容, 不会和string拿到的结果矛盾
    // "0": string
    // [index: number]: number | string;
    // [key: string]: string;
  
    // 要求二: 如果索引签名中有定义其他属性, 其他属性返回的类型, 必须符合string类型返回的属性
    // 0: string
    // "0": number | string
    // [index: number]: string;
    // [key: string]: number | string;
    // aaa: string
  
    // bbb: boolean // 错误的类型
  }
  
  const names: IIndexType = ["abc", "cba", "nba"];
  const item1 = names[0];
  const forEachFn = names["forEach"];
  
  names["aaa"];
  ```



### 接口继承

- 接口和类一样是可以进行继承的，也是使用extends关键字

  - 并且我们会发现，接口是支持多继承的（类不支持多继承）

  ```tsx
  interface IPerson { name: string; age: number }
  // 可以从其他的接口中继承过来属性
  // 1.减少了相同代码的重复编写
  // 2.如果使用第三库, 给我们定义了一些属性
  //  > 自定义一个接口, 同时你希望自定义接口拥有第三方某一个类型中所有的属性
  //  > 可以使用继承来完成
  interface IKun extends IPerson { slogan: string }
  
  const ikun1: IKun = { name: "strive", age: 18, slogan: "你干嘛, 哎呦" };
  ```



### 接口的实现

- 接口定义后，也是可以被类实现的

  - 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类传入
  - 这就是面向接口开发

  ```tsx
  interface IKun {
    name: string;
    age: number;
    slogan: string;
    playBasketball: () => void;
  }
  
  interface IRun {
    running: () => void;
  }
  
  // 接口被类实现
  class Person implements IKun, IRun {
    name: string;
    age: number;
    slogan: string;
    playBasketball() {}
    running() {}
  }
  
  const ikun1 = new Person();
  const ikun2 = new Person();
  const ikun3 = new Person();
  
  console.log(ikun1.name, ikun2.age, ikun3.slogan);
  ikun1.playBasketball();
  ikun2.running();
  ```



### 严格的字面量赋值检测

- 对于对象的字面量赋值，在TypeScript中有一个非常有意思的现象

  ```tsx
  interface IPerson { name: string; age: number }
  
  // 1.奇怪的现象一
  const obj1 = { name: "strive", age: 18, height: 1.88 }; // 多了一个 height 属性
  // const info1: IPerson = { name: "strive", age: 18, height: 1.88 }; // 报错
  const info2: IPerson = obj1;
  
  // 2.奇怪的现象二
  function printPerson(person: IPerson) {}
  // printPerson({ name: "strive", age: 18, height: 1.88 }); // 报错
  printPerson(obj1);
  
  // 解释现象
  // 第一次创建的对象字面量, 称之为 fresh (新鲜的)
  // 对于新鲜的字面量, 会进行严格的类型检测。 必须完全满足类型的要求(不能有多余的属性)
  const obj2 = { name: "strive", age: 18, height: 1.88 };
  const info3: IPerson = obj2;
  ```

- 为什么会出现这种情况呢？

  - 这里我引入TypeScript成员在GitHub的issue中的回答

  - https://github.com/microsoft/TypeScript/pull/3823

- 简单对上面的英文进行翻译解释

  - 每个对象字面量最初都被认为是  “新鲜的（fresh）”
  - 当一个新的对象字面量分配给一个变量或传递给一个非空目标类型的参数时，对象字面量指定目标类型中不存在的属性是错误的
  - 当类型断言或对象字面量的类型扩大时，新鲜度会消失



### 枚举类型

- 枚举类型是为数不多的TypeScript特性有的特性之一

  - 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型
  - 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型

  ```tsx
  // 定义枚举类型
  enum Direction { LEFT, RIGHT }
  
  function turnDirection(direction: Direction) {
    switch (direction) {
      case Direction.LEFT:
        console.log("角色向左移动一个格子");
        break;
      case Direction.RIGHT:
        console.log("角色向右移动一个格子");
        break;
    }
  }
  
  // 监听键盘的点击
  turnDirection(Direction.LEFT);
  ```



### 枚举类型的值

- 枚举类型默认是有值的，比如下面的枚举

  ```tsx
  enum Direction { LEFT, RIGHT } // 0 1
  ```

- 当然，我们也可以给枚举其他值

  ```tsx
  enum Direction { LEFT = 100, RIGHT } // 100 101 // 这个时候会从100进行递增
  ```

- 我们也可以给他们赋值其他的类型

  ```tsx
  enum Direction { LEFT = "LEFT", RIGHT = "RIGHT" }
  ```



## TS泛型

- 软件工程的主要目的是构建不仅仅明确和一致的API，还要让你的代码具有很强的可重用性

  - 比如我们可以通过函数来封装一些API，通过传入不同的函数参数，让函数帮助我们完成不同的操作
  - 但是对于参数的类型是否也可以参数化呢？

- 什么是类型的参数化？

  - 我们来提一个需求：**封装一个函数，传入一个参数，并且返回这个参数**

- 如果我们是TypeScript的思维方式，要考虑这个参数和返回值的类型需要一致

  ```tsx
  function foo(name: string): string {
    return name
  }
  foo("strive");
  ```

- 上面的代码虽然实现了，但是不适用于其他类型

  ```tsx
  function foo(name: any): any {
    return name
  }
  foo([111,222,333]);
  ```



### 泛型实现类型参数化

- 虽然any是可以的，但是定义为any的时候，我们其实已经丢失了类型信息

  - 比如我们传入的是一个number，那么我们希望返回的可不是any类型，而是number类型
  - 所以，我们需要在函数中可以捕获到参数的类型是number，并且同时使用它来作为返回值的类型

- 我们需要在这里使用一种特性的变量 - 类型变量（type variable），它作用于类型，而不是值

  ```tsx
  function foo<Type>(name: Type): Type {
    return name;
  }
  ```

- 这里我们可以使用两种方式来调用它

  - 方式一：通过 **<类型> 的方式**将类型传递给函数
  - 方式二：通过**类型推导（type argument inference），自动推到出我们传入变量的类型**
    - 在这里会**推导出它们是 字面量类型**的，因为**字面量类型对于我们的函数也是适用**的

  ```tsx
  function foo<Type>(name: Type): Type {
    return name;
  }
  
  // 1.完整的写法
  const res1 = foo<string>("aaa");
  const res2 = foo<number>(111);
  
  // 2.省略的写法
  let res3 = foo("aaa"); // string
  let res4 = foo(111); // number
  
  const res5 = foo("aaa"); // aaa
  const res6 = foo(111); // 111
  ```

- 当然我们也可以传入多个类型

  ```tsx
  function foo<T, E>(value1: T, value2: E) {
    console.log(value1, value2);
  }
  
  foo(10, 20);
  foo(10, "abc");
  foo<string, { name: string }>("abc", { name: "strive" });
  ```

- 平时在开发中我们可能会看到一些常用的名称

  - T：类型（Type）
  - K、V：键值对（key、value）
  - E：元素（Element）
  - O：对象（Object）



### 泛型接口

-  在定义接口的时候我们也可以使用泛型

  ```tsx
  interface IKun<Type = boolean> { name: Type; age: number; slogan: Type }
  
  const ikun1: IKun<string> = { name: "strive", age: 18, slogan: "哈哈哈" };
  
  const ikun2: IKun<number> = { name: 111, age: 20, slogan: 666 };
  
  const ikun3: IKun = { name: true, age: 22, slogan: true };
  ```



### 泛型类

- 我们也可以编写一个泛型类

  ```tsx
  class Point<T> {
    constructor(public x: T, public y: T) {
      this.x = x;
      this.y = y;
    }
  }
  
  const p1 = new Point(10, 20);
  console.log(p1.x);
  
  const p2 = new Point("111", "222");
  console.log(p2.x);
  ```



### 泛型约束

- 有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中

  - 比如string和array都是有length的，或者某些对象也是会有length属性的
  - 那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢？

  ```tsx
  interface ILength { length: number }
  
  // 获取传入的内容, 这个内容必须有 length 属性
  // Type相当于是一个变量, 用于记录本次调用的类型, 所以在整个函数的执行周期中, 一直保留着参数的类型
  function getInfo<Type extends ILength>(value: Type): Type {
    return value;
  }
  
  const info1 = getInfo("aaa");
  const info2 = getInfo(["aaa", "bbb", "ccc"]);
  const info3 = getInfo({ length: 100, name: "obj" });
  
  // getInfo(123)
  // getInfo({})
  ```

- 这里表示是传入的类型必须有这个属性，也可以有其他属性，但是必须至少有这个成员



### 泛型约束参数的使用

- 在泛型约束中使用类型参数（Using Type Parameters in Generic Constraints）

  - 你可以声明一个类型参数，这个类型参数被其他类型参数约束

- 举个栗子：我们希望获取一个对象给定属性名的值

  - 我们需要确保我们不会获取 obj 上不存在的属性
  - 所以我们在两个类型之间建立一个约束

  ```tsx
  // 传入的 key 类型, 必须是 obj 当中 key 的其中之一
  interface IKun { name: string; age: number }
  
  type IKunKeys = keyof IKun; // "name" | "age"
  
  function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
  }
  
  const info = { name: "strive", age: 18, height: 1.83 };
  
  const name = getObjectProperty(info, "name");
  ```



### 映射类型

- 有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型

  - 大部分内置的工具都是通过映射类型来实现的
  - 大多数类型体操的题目也是通过映射类型完成的

- 映射类型建立在索引签名的语法上

  - 映射类型，就是使用了 PropertyKeys 联合类型的泛型
  - 其中 PropertyKeys 多是通过 keyof 创建，然后循环遍历键名创建一个类型

  ```tsx
  // 映射类型不能使用 interface 定义
  // Type = IPerson
  // keyof = "name" | "age"
  type MapPerson<Type> = {
    // 索引类型以此进行使用
    [property in keyof Type]: Type[property];
  
    // 上面的操作相当于
    // name: string 
    // age: number
  };
  
  interface IPerson { name: string; age: number }
  
  // 拷贝一份 IPerson
  // interface NewPerson { name: string age: number }
  type NewPerson = MapPerson<IPerson>;
  ```



### 映射修饰符

- 在使用映射类型时，有两个额外的修饰符可能会用到

  - 一个是 readonly，用于设置属性只读
  - 一个是 ? ，用于设置属性可选

- 你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀

  ```tsx
  type MapPerson<Type> = {
    -readonly [Property in keyof Type]-?: Type[Property];
  };
  
  interface IPerson {
    name: string;
    age?: number;
    readonly height: number;
    address?: string;
  }
  
  const p: MapPerson<IPerson> = {
    name: "strive",
    age: 18,
    height: 1.83,
    address: "北京市",
  };
  ```



### 内置工具和类型体操

- 类型系统其实在很多语言里面都是有的，比如Java、Swift、C++等等，但是相对来说TypeScript的类型非常灵活
  - 这是因为TypeScript的目的是为JavaScript**添加一套类型校验系统**，因为JavaScript本身的灵活性，也让**TypeScript类型系统不得不增加更复杂的功能**以适配JavaScript的灵活性
  - 所以TypeScript是一种可以**支持类型编程的类型系统**
- 这种类型编程系统为TypeScript增加了很大的灵活度，同时也增加了它的难度
  - 如果你不仅仅在开发业务的时候为自己的JavaScript代码增加上类型约束，那么基本不需要太多的类型编程能力
  - 但是如果**你在开发一些框架、库，或者通用性的工具，为了考虑各种适配的情况，就需要使用类型编程**
- TypeScript本身为我们提供了类型工具，帮助我们辅助进行类型转换（前面有用过关于this的类型工具）
- 很多开发者为了进一步增强自己的TypeScript编程能力，还会专门去做一些类型体操的题目
  - https://github.com/type-challenges/type-challenges
  - https://ghaiklor.github.io/type-challenges-solutions/en
- 我们会学习TypeScript的编程能力的语法，并且通过学习内置工具来练习一些类型体操的题目



### 条件类型

- 很多时候，日常开发中我们需要基于**输入的值来决定输出的值**，同样我们**也需要基于输入的值的类型来决定输出的值的类型**

- 条件类型（Conditional types）就是用来帮助我们描述**输入类型和输出类型之间**的关系

  - 条件类型的写法有点类似于 JavaScript 中的条件表达式（condition ? trueExpression : falseExpression ）
  - SomeType extends OtherType ? TrueType : FalseType

  ```tsx
  type IDType = number | string;
  // 判断 number 是否继承自 IDType
  type result1 = number extends IDType ? true : false; // true
  // 判断 boolean 是否继承自 IDType
  type result2 = boolean extends IDType ? true : false; // false
  
  // 举个栗子: 函数的重载
  // function sum(num1: number, num2: number): number;
  // function sum(num1: string, num2: string): string;
  
  // 错误的做法: 类型扩大化
  // function sum(num1: number | string, num2: number | string): number | string;
  
  function sum<T extends number | string>(num1: T, num2: T): T extends number ? number : string;
  function sum(num1, num2) {
    return num1 + num2;
  }
  
  const res1 = sum(10, 20);
  const res2 = sum("aaa", "bbb");
  // const res3 = sum(111, "aaa")
  // const res4 = sum({}, {})
  ```



### 类型推断

- 在条件类型中推断（Inferring Within Conditional Types）

  - 条件类型提供了 infer 关键字，可以从正在比较的类型中推断类型，然后在 true 分支里引用该推断结果

- 比如我们现在有一个函数类型，想要获取到一个函数的参数类型和返回值类型

  ```tsx
  type CalcType = (num1: number, num2: string) => number;
  
  function foo() {
    return "abc";
  }
  
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  
  type MyParameterType<T> = T extends (...args: infer A) => any ? A : never;
  
  // 获取一个函数的返回值类型: 内置工具 ReturnType
  type CalcReturnType = MyReturnType<CalcType>; // number
  type FooReturnType = MyReturnType<typeof foo>; // string
  
  type CalcParameterType = MyParameterType<CalcType>; // [num1: number, num2: string]
  ```



### 分发类型

- 当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成 **分发的（distributive）**

  ```tsx
  type toArray<T> = T extends any ? T[] : never;
  // number[] | string[]
  
  type NumArray = toArray<number>;
  
  // number[] | string[] 而不是 (number | string)[]
  type NumAndStrArray = toArray<number | string>;
  ```

- 如果我们在 toArray 传入一个联合类型，这个条件类型会被应用到联合类型的每个成员

  - 当传入number | string时，会遍历联合类型中的每一个成员
  - 相当于 `toArray<string> | toArray<number>` 
  - 所以最后的结果是：number[] | string[]



### Partial

- 用于构造一个Type下面的所有属性都设置为可选的类型

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };
  
  type IKun1 = Partial<IKun>;
  type IKun2 = MyPartial<IKun>;
  ```



### Required

- 用于构造一个Type下面的所有属性全都设置为必填的类型，这个工具类型跟 Partial 相反

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type MyRequired<T> = {
    [P in keyof T]-?: T[P];
  };
  
  type IKun1 = Required<IKun>;
  type IKun2 = MyRequired<IKun>;
  ```



### Readonly

- 用于构造一个Type下面的所有属性全都设置为只读的类型，意味着这个类型的所有的属性全都不可以重新赋值

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P] 
  }
  
  type IKun1 = Readonly<IKun>;
  type IKun2 = MyReadonly<IKun>;
  ```



### Record

- 用于构造一个对象类型，它所有的key(键)都是Keys类型，它所有的value(值)都是Type类型

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type keys = keyof IKun; // =>  name | age | slogan
  type res = keyof any; // => string | number | symbol
  
  // 确保keys一定是可以作为key的联合类型
  type MyRecord<Keys extends keyof any, T> = {
    [P in Keys]: T;
  };
  
  type t1 = "上海" | "北京" | "洛杉矶";
  type IKun1 = Record<t1, IKun>;
  type IKun2 = MyRecord<t1, IKun>;
  
  const ikunInfo1: IKun1 = {
    上海: { name: "aaa", age: 10 },
    北京: { name: "bbb", age: 20 },
    洛杉矶: { name: "ccc", age: 30 },
  };
  
  const ikunInfo2: IKun2 = {
    上海: { name: "aaa", age: 10 },
    北京: { name: "bbb", age: 20 },
    洛杉矶: { name: "ccc", age: 30 },
  };
  ```



### Pick

- 用于构造一个类型，它是从Type类型里面挑了一些属性Keys

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  
  type IKun1 = Pick<IKun, "name" | "slogan">;
  type IKun2 = MyPick<IKun, "name" | "slogan">;
  ```



### Omit

-  用于构造一个类型，它是从Type类型里面过滤了一些属性Keys

  ```tsx
  interface IKun { name: string; age: number; slogan?: string }
  
  type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
  };
  
  type IKun1 = Omit<IKun, "name" | "slogan">;
  type IKun2 = MyOmit<IKun, "name" | "slogan">;
  ```



### Exclude

- 用于构造一个类型，它是从UnionType联合类型里面排除了所有可以赋给ExcludedMembers的类型

  ```tsx
  type IKun = "sing" | "dance" | "rap";
  
  type MyExclude<T, E> = T extends E ? never : T;
  
  type IKun1 = Exclude<IKun, "rap">;
  type IKun2 = MyExclude<IKun, "rap">;
  ```



### Extract

- 用于构造一个类型，它是从Type类型里面提取了所有可以赋给Union的类型

  ```tsx
  type IKun = "sing" | "dance" | "rap";
  
  type MyExtract<T, E> = T extends E ? T : never;
  
  type IKun1 = Extract<IKun, "sing" | "dance">;
  type IKun2 = MyExtract<IKun, "sing" | "dance">;
  ```



### NonNullable

- 用于构造一个类型，这个类型从Type中排除了所有的null、undefined的类型

  ```tsx
  type IKun = "sing" | "dance" | "rap" | null | undefined;
  
  type MyNonNullable<T> = T extends null | undefined ? never : T;
  
  type IKun1 = NonNullable<IKun>;
  type IKun2 = MyNonNullable<IKun>;
  ```



### InstanceType

- 用于构造一个由所有Type的构造函数的实例类型组成的类型

  ```tsx
  class Person {}
  class Animal {}
  
  type constructorType = new (...args: any[]) => any;
  
  type MyInstanceType<T extends constructorType> = T extends new (...args: any[]) => infer R ? R : never;
  
  // Person: 值
  // typeof Person: 类型
  type specificType = typeof Person;
  const p1: specificType = Person;
  // const p2: specificType = new Person();
  // 类型 "Person" 中缺少属性 "prototype"，但类型 "typeof Person" 中需要该属性
  
  // InstanceType: 构造函数创建出来的实例对象的类型
  type Person1 = InstanceType<typeof Person>;
  type MyPerson1 = MyInstanceType<typeof Person>;
  const p3: Person1 = new Person();
  const p4: MyPerson1 = new Person();
  
  // 通过的创建实例的工具函数时会用到这个 InstanceType
  function factory<T extends constructorType>(ctor: T): MyInstanceType<T> {
    return new ctor();
  }
  
  const p5 = factory(Person);
  const A1 = factory(Animal);
  ```



## TS知识扩展

### 模块化

- JavaScript 有一个很长的处理模块化代码的历史，TypeScript 从 2012 年开始跟进，现在已经实现支持了很多格式。但是随着时间流逝，社区和 JavaScript 规范已经使用为名为 ES Module的格式，这也就是我们所知的 import/export 语法
  - ES 模块在 2015 年被添加到 JavaScript 规范中，到 2020 年，大部分的 web 浏览器和 JavaScript 运行环境都已经广泛支持
  - 所以在**TypeScript中最主要使用的模块化方案就是ES Module**



### 非模块

- 我们需要先理解 TypeScript 认为什么是一个模块

  - JavaScript 规范声明任何**没有 export 的 JavaScript 文件都应该被认为是一个脚本，而非一个模块**
  - 在一个脚本文件中，**变量和类型会被声明在共享的全局作用域**，将多个输入文件合并成一个输出文件，或者在 HTML使用多个`<script>`标签加载这些文件

- 如果你有一个文件，现在**没有任何 import 或者 export**，但是**你希望它被作为模块处理，添加这行代码**

  ```js
  export {}
  ```

- **这会把文件改成一个没有导出任何内容的模块**，这个语法可以生效，无论你的模块目标是什么



### 内置类型导入

- TypeScript 4.5 也允许单独的导入，你需要使用 type 前缀 ，表明被导入的是一个类型

  ```tsx
  // 导入的是类型, 推荐在类型的前面加上type关键
  import type { IDType, IPerson } from "./utils/type"
  ```

- 这些可以让一个非 TypeScript 编译器比如 Babel、swc 或者 esbuild 知道什么样的导入可以被安全移除



### 命名空间

- TypeScript 有它自己的模块格式，名为 namespaces ，它在 ES 模块标准之前出现

  - 命名空间**在TypeScript早期时**，称之为**内部模块**，目的是**将一个模块内部再进行作用域的划分，防止一些命名冲突的问题**
  - 虽然**命名空间没有被废弃，但是由于 ES 模块已经拥有了命名空间的大部分特性**，因此**更推荐使用 ES 模块**，这样才能与JavaScript 的发展保持一致

  ```tsx
  // 1
  export namespace price {
    export function format(price: string) {
      return "¥" + price
    }
  
    const name = "price"
  }
  
  // 2
  import { price } from "./utils/format";
  
  // 3
  price.format("100")
  ```



### 类型的查找

- 之前我们所有的typescript中的类型，几乎都是我们自己编写的，但是我们也有用到一些其他的类型
- 大家是否会奇怪，我们的HTMLImageElement类型来自哪里呢？甚至是document为什么可以有getElementById的方法呢？
  - 其实这里就涉及到**typescript对类型的管理和查找规则**了
- 我们这里先给大家介绍另外的一种typescript文件：.d.ts文件
  - 我们之前编写的typescript文件都是 .ts 文件，这些文件最终会输出 .js 文件，也是我们通常编写代码的地方
  - 还有另外一种文件 .d.ts 文件，它是用来做类型的声明(declare)，称之为<b>类型声明（Type Declaration）</b>或者<b>类型定义（Type Definition）</b>文件
  - 它仅仅用来做类型检测，告知typescript我们有哪些类型
- 那么typescript会在哪里查找我们的类型声明呢？
  - 内置类型声明
  - 外部定义类型声明
  - 自己定义类型声明



### 内置类型声明

- 内置类型声明是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件

  - 包括比如Function、String、Math、Date等内置类型
  - 也包括运行环境中的DOM API，比如Window、Document等

- TypeScript 使用模式命名这些声明文件lib.[something].d.ts

  ```tsx
  Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib
  ```

- 内置类型声明通常在我们安装typescript的环境中会带有的

  - https://github.com/microsoft/TypeScript/tree/main/lib



### 内置声明的环境

- 我们可以通过target和lib来决定哪些内置类型声明是可以使用的
  - 例如，startsWith字符串方法只能从称为ECMAScript 6的 JavaScript 版本开始使用
- 我们可以通过target的编译选项来配置：TypeScript通过lib根据您的target设置更改默认包含的文件来帮助解决此问题
  - https://www.typescriptlang.org/tsconfig#lib



### 外部定义类型声明

- 外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明
- 这些库通常有两种类型声明方式
- 方式一：在**自己库中进行类型声明（编写.d.ts文件）**，比如axios
- 方式二：通过**社区的一个公有库DefinitelyTyped存放类型声明文件**
  - 该库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
  - 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
  - 比如我们安装react的类型声明： npm i @types/react --save-dev



### 自己定义类型声明

- 什么情况下需要自己来定义声明文件呢？

  - 情况一：我们**使用的第三方库是一个纯的JavaScript库**，没有对应的声明文件；比如lodash
  - 情况二：我们**给自己的代码中声明一些类型**，方便在其他地方直接进行使用

  ```tsx
  declare module "lodash" {
    export function join(...args: any[]): any;
  }
  
  // 为自己的 变量/函数/类 定义类型声明
  declare const MyName: string;
  declare const MyAge: number;
  declare const MyHeight: number;
  
  declare function foo(bar: string): string;
  
  declare class Person {
    constructor(public name: string, public age: number);
  }
  
  // 声明文件模块
  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.svg";
  
  declare module "*.vue";
  
  // 声明命名空间 CDN
  declare namespace $ {
    export function ajax(settings: any): any;
  }
  ```



### declare 声明模块

- 我们也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块

  ```tsx
  declare module "lodash" {
    export function join(...args: any[]): any;
  }
  ```

- 声明模块的语法: **declare module '模块名' {}**

  - 在**声明模块的内部**，我们**可以通过 export 导出对应库的类、函数等**



### declare 声明文件

- 在某些情况下，我们也可以声明文件
  - 比如**在开发vue的过程中，默认是不识别我们的.vue文件**的，那么**我们就需要对其进行文件的声明**
  - 比如**在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明**



### declare 命名空间

- 比如我们在index.html中直接引入了jQuery

  - CDN地址： https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js

- 我们可以进行命名空间的声明

  ```tsx
  declare namespace $ {
    export function ajax(settings: any): any;
  }
  ```

- 在main.ts中就可以使用了

  ```tsx
  $.ajax({
    url: "http://codercba.com:8000/home/multidata",
    success: function(res: any) {
      console.log(res)
    }
  })
  ```



### tsconfig.json

- 什么是tsconfig.json文件呢？（官方的解释）
  - 当目录中出现了 tsconfig.json 文件，则说明该目录是 TypeScript 项目的根目录
  - tsconfig.json 文件指定了编译项目所需的根目录下的文件以及编译选项
- 官方的解释有点 “官方”，直接看我的解释
- tsconfig.json文件有两个作用
  - <b>作用一（主要的作用）：</b>让TypeScript Compiler在编译的时候，知道如何去编译TypeScript代码和进行类型检测
    - 比如是否允许不明确的this选项，是否允许隐式的any类型
    - 将TypeScript代码编译成什么版本的JavaScript代码
  - <b>作用二：</b>让编辑器（比如VSCode）可以按照正确的方式识别TypeScript代码
    - 对于哪些语法进行提示、类型错误检测等等
- JavaScript 项目可以使用 jsconfig.json 文件，它的作用与 tsconfig.json 基本相同，只是默认启用了一些 JavaScript 相关的编译选项
  - 在之前的Vue项目、React项目中我们也有使用过



### tsconfig.json 配置

- tsconfig.json在编译时如何被使用呢?
  - 在**调用 tsc 命令并且没有其它输入文件参数**时，编译器**将由当前目录开始向父级目录寻找包含 tsconfig 文件**的目录
  - 调用 **tsc 命令并且没有其他输入文件参数，可以使用 --project （或者只是 -p）的命令行选项来指定包含了 tsconfig.json 的目录**
  - 当命令行中**指定了输入文件参数， tsconfig.json 文件会被忽略**
- webpack中使用ts-loader进行打包时，也会自动读取tsconfig文件，根据配置编译TypeScript代码
- tsconfig.json文件包括哪些选项呢？
  - tsconfig.json本身包括的选项非常非常多，我们不需要每一个都记住
  - 可以查看文档对于每个选项的解释：https://www.typescriptlang.org/tsconfig
  - 当我们开发项目的时候，选择TypeScript模板时，tsconfig文件默认都会帮助我们配置好的
  
  ```json
  // tsc xxx.ts -w 自动监视文件变化进行重新编译（但是仅针对于当前文件）
  // 创建一个 tsconfig.json 文件, 然后终端输入 tsc -w  那么会自动监视所有文件变化并编译所有ts文件
  {
    // 指定哪些ts文件需要被编译
    // 根目录下的src下的任意目录里的任意ts文件, 一个*表示任意文件, 两个*表示任意目录
    "include": ["./src/**/*"],
    // 指定哪些ts文件不需要被编译
    "exclude": ["./src/hellow/**/*"],
    "compilerOpctions": {
      "target": "ES5", // 用来指定ts被编译的ES版本
      "module": "es2015", // 指定要使用的模块化规范
      "lib": [], // 用来指定项目中要使用的库
      "outDir": "./dist", // 用来指定编译后的文件所在目录
      "outFile": "./dist/app.js", // 将代码合并为一个文件
      "allowsJs": true, // 是否对js文件进行编译
      "checkJs": true, // 是否检查js代码是否符合规范
      "removeComments": true, // 编译后是否移除注释
      "noEmit": true, // 不生成编译后的文件
      "noEmitOnError": true, // 当有错误时不生成编译后的文件
      "alwaysStrict": true, // 用来设置编译后的文件是否使用严格模式
      "noImplicitAny": true, // 不允许出现隐式的any类型
      "noImplicitThis": false, // 不允许不明确类型的this
      "strictNullChecks": false, // 严格的检查空值
      "strict": true // 所有严格的总开关
    }
  }
  ```

