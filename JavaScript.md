# 邂逅JavaScript

## 计算机语言

- 前面我们已经学习了HTML和CSS很多相关的知识

  - 在之前我们提到过，HTML是一种**标记语言**，CSS也是一种**样式语言**

- 他们本身都是属于计算机语言，因为都在和计算机沟通交流

  - 在生活中两个人想要沟通，必然是通过某一种语言(中文/英语/粤语/东北话)

  - 计算机语言就是我们**人和计算机进行交流**要学习的语言

- 网页的三大组成部分的另外一个核心就是JavaScript，JavaScript必然也是一种计算机语言



## 编程语言

- 事实上，JavaScript我们可以对其有更加精准的说法是一种编程语言

- 我们先搞清楚计算机语言和编程语言的关系和区别

  - 计算机语言：**计算机语言**（computer language）指用于人与计算机之间通讯的语言，是人与计算机之间传递信息的介质。但是其概念比通用的**编程语言**要更广泛。例如，**HTML是标记语言**，也是**计算机语言**，但**并不是编程语言**

  - 编程语言：**编程语言**（英语：programming language），是用来定义**计算机程序的形式语言**。它是一种被**标准化**的交流技巧，用来向**计算机发出指令**，一种能够让**程序员**准确地定义**计算机所需要使用数据**的计算机语言，并精确地定义**在不同情况下所应当采取的行动**

- 很抽象，我们来说明一下编程语言的特点

  - **数据和数据结构**

  - **指令及流程控制**

  - **引用机制和重用机制**

  - **设计哲学**



## 编程语言的发展历史

### 机器语言

- 计算机的存储单元只有0**和1两种状态**，因此一串代码要让计算机  “读懂”  ，这串代码只能由数字0和1组成

- 像这种由数字0和1按照一定的规律组成的代码就叫**机器码**，也叫**二进制编码**

- 一定长度的机器码组成了**机器指令**，**用这些机器指令所编写的程序就称为机器语言**

- 优点
  - 代码能**被计算机直接识别**，**不需要经过编译解析**
  - 直接对硬件产生作用，**程序的执行效率非常高**

- 缺点

  - 程序**全是些0和1的指令代码，可读性差，还容易出错**

  - **不易编写**



### 汇编语言

- 为了解决机器语言的缺陷，**人们发明了另外一种语言——汇编语言**

- 这种语言用**符号**来**代替冗长的、难以记忆的0、1代码**。(mov/push指令，经过汇编器，汇编代码再进一步转成0101)

- 优点

  - 像机器语言一样，可以**直接访问、控制计算机的各种硬件设备**

  - **占用内存少，执行速度快**

- 缺点

  - **第一，不同的机器有不同的汇编语言语法和编译器，代码缺乏可移植性**
    - 也就是说，一个程序只能在一种机器上运行，换到其他机器上可能就不能运行

  - **第二，符号非常多、难记**
    - 即使是完成简单的功能也需要大量的汇编语言代码，很容易产生BUG，难于调试

- 应用场景
  - 操作系统内核、驱动程序、单片机程序



### 高级语言

- 最好的编程语言应该是什么？**自然语言**

- 而高级语言，就是接近**自然语言**，更符合**人类的思维方式**

- 跟和人交流的方式很相似，但是大多数编程语言都是国外发明的，因为都是接近于**英文的交流方式**

- 优点

  - **简单、易用、易于理解**，语法和结构类似于普通英文

  - **远离对硬件的直接操作**，使得**一般人经过学习之后都可以编程**，而不用熟悉硬件知识

  - 一个程序还可以在不同的机器上运行，具**有可移植性**

- 缺点

  - 程序**不能直接被计算机识别**，需要**经编译器翻译成二进制指令后**，才能运行到计算机上

  - 种类繁多：JavaScript 、 C语言、C++、C#、Java、Objective-C 、Python等



## 认识JavaScript

- 维基百科对JavaScript的定义

  - JavaScript（通常缩写为JS）是一种**高级的、解释型**的编程语言

  - JavaScript是**一门基于原型、头等函数**的语言，是**一门多范式的语言**，它支持**面向对象程序设计，指令式编程，以及函数式编程**

- 从上面的定义中，我们会发现很多关键词

  - **解释型语言？原型？头等函数？多范式？面向对象程序设计？指令式编程？函数式编程？**

  - 这些概念往往会让人不知所云，需要我们**完全掌握JavaScript再来回头看**，每一个词语描述的都非常准确

- 现在只需要知道，通俗的说法
  - JavaScript是一门**高级编程语言**，是**前端开发的重要组成部分**

- HTML和CSS**也是前端开发的重要组成部分**，而JavaScript是**前端开发的灵魂**



## JavaScript的起源

- 1994年，网景公司（Netscape）发布了Navigator浏览器0.9版
  - 这是历史上**第一个比较成熟的网络浏览器**，轰动一时
  - 但是，这个版本的浏览器只能用来浏览，不具备与访问者互动的能力
  - 网景公司急需一种网页脚本语言，使得浏览器可以与网页互动



- 网景公司当时想要选择一种语言来嵌入到浏览器中
  - **采用现有的语言**，比如Perl、Python、Tcl、Scheme等等，允许它们直接嵌入网页
  - 1995年网景公司招募了**程序员Brendan Eich**，希望将**Scheme语言**作为网页脚本语言的可能性
- 就在这时，发生了另外一件大事：1995年Sun公司将Oak语言改名为Java，正式向市场推出
  - Java推出之后立马在市场上引起了轰动，Java当初有一个口号：**“write once run anywhere”**
  - 网景公司动了心，**决定与Sun公司结成联盟**，希望**将Java嵌入到网页**中来运行
  - Brendan Eich本人非常热衷于Scheme，但是管理层那个时候有点倾向于Java，希望可以简化Java来适应网页脚本的需求



- 但是Brendan Eich对此并不感兴趣，他用10天时间设计出来了JavaScript
  - 最初这门语言的名字是**Mocha**（摩卡）
  - 在Navigator2.0 beta版本更名为**LiveScript**
  - 在Navigator2.0 beta 3版本正式重命名为**JavaScript**，当时是为了给这门语言搭上Java这个热词
- 当然10天设计出来语言足够说明Brendan Eich是天才，但是这门语言当时更像是一个多种语言的大杂烩
  - 借鉴**C语言**的基本语法
  - 借鉴**Java语言**的数据类型和内存管理
  - 借鉴**Scheme语言**，将函数提升到  "第一等公民"  的地位
  - 借鉴**Self语言**，使用基于原型（prototype）的继承机制
- Brendan Eich曾经这样描述过JavaScript
  - 与其说我爱Javascript，不如说我恨它，它是C语言和Self语言一夜情的产物
  - 十八世纪英国文学家约翰逊博士说得好：**它的优秀之处并非原创，它的原创之处并不优秀**



- 微软公司于1995年首次推出Internet Explorer，从而引发了与Netscape的浏览器大战

  - 微软对Netscape Navigator解释器进行了逆向工程，创建了**JScript**，以与处于市场领导地位的网景产品同台竞争

  - 这个时候对于开发者来说是一场噩耗，因为需要针对不同的浏览器进行不同的适配

- 1996年11月，网景正式向<b>ECMA（欧洲计算机制造商协会）</b>提交语言标准
  - 1997年6月，ECMA以**JavaScript语言为基础**制定了**ECMAScript标准规范ECMA-262**

  - ECMA-262是一份标准，定义了**ECMAScript**

  - **JavaScript**成为了**ECMAScript**最著名的实现之一

  - 除此之外，**ActionScript**和**JScript**也都是ECMAScript规范的实现语言

- 所以说，ECMAScript是一种规范，而JavaScript是这种规范的一种实现



## 认识JavaScript引擎

- 为什么需要JavaScript引擎呢？
  - 我们前面说过，**高级的编程语言**都是需要转成**最终的机器指令来执行**的
  - 事实上我们编写的JavaScript无论你交给浏览器或者Node执行，最后都是需要被**CPU执行**的
  - 但是CPU只认识自己的指令集，实际上是机器语言，才能被CPU所执行
  - 所以我们需要**JavaScript引擎**帮助我们将**JavaScript代码翻译成CPU指令**来执行
- 比较常见的JavaScript引擎有哪些呢？
  - <b>SpiderMonkey：</b>第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者）
  - <b>Chakra：</b>微软开发，用于IT浏览器
  - <b>JavaScriptCore：</b>WebKit中的JavaScript引擎，Apple公司开发
  - <b>V8：</b>Google开发的强大JavaScript引擎，也帮助Chrome从众多浏览器中脱颖而出



## 浏览器内核和JS引擎的关系

- 这里我们先以WebKit为例，WebKit事实上由两部分组成的
  - <b>WebCore：</b>负责HTML解析、布局、渲染等等相关的工作
  - <b>JavaScriptCore：</b>解析、执行JavaScript代码
- 小程序中也是这样的划分
  - 在小程序中编写的JavaScript代码就是被JSCore执行的



# JavaScript基础

## noscript元素

- 如果运行的浏览器不支持JavaScript，那么我们如何给用户更好的提示呢？

  - 针对早期浏览器不支持 JavaScript 的问题，需要一个页面**优雅降级的处理方案**
  - 最终`<noscript>`元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容

- 下面的情况下，浏览器将显示包含在`<noscript>`中的内容

  - 浏览器不支持脚本
  - 浏览器对脚本的支持被关闭

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <noscript>
        <h1>您的浏览器不支持JavaScript, 请打开或者更换浏览器~</h1>
      </noscript>
  
      <script>
        alert("您的浏览器正在运行JavaScript代码");
      </script>
    </body>
  </html>
  ```



## JavaScript的数据类型

- JavaScript中的**值**都具有特定的类型
  - 例如，字符串或数字
  - 我们可以将**值赋值给一个变量**，那么这个变量就**具备了特定的类型**
  - 一个变量可以在**前一刻是个字符串，下一刻就存储一个数字**
  - 允许这种操作的编程语言，例如 JavaScript，被称为<b>“动态类型”（dynamically typed）</b>的编程语言
- 在 JavaScript 中有 8 种基本的数据类型（7 种原始类型和 1 种**复杂或引用**类型）
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - **Object**
  - BigInt
  - Symbol



## typeof操作符

- 因为 ECMAScript 的类型系统是**松散的**，所以需要一种手段来**确定任意变量的数据类型**
  - **typeof 操作符**就是为此而生的
- 对一个值使用 typeof 操作符会返回下列字符串之一
  - "undefined" 表示值未定义
  - "boolean" 表示值为布尔值
  - "string" 表示值为字符串
  - "number" 表示值为数值
  - "object" 表示值为对象或null
  - "function" 表示值为函数
  - “symbol” 表示值为符号
- typeof()的用法
  - 你可能还会遇到另一种语法：**typeof(x)，它与 typeof x 相同**
  - typeof是一个**操作符，并非是一个函数，()只是将后续的内容当做一个整体而已**



## Null类型

- Null 类型同样只有一个值，即特殊值 null

  - null类型通常用来表示**一个对象为空**，所以通常我们在**给一个对象进行初始化**时，会赋值为**null**

  ```js
  console.log(typeof null) // "object"
  ```

- null和undefined的关系
  - undefined通常只有在一个变量声明但是**未初始化**时，它的默认值是**undefined**才会用到
  - 并且我们**不推荐直接给一个变量赋值为undefined**，所以很少主动来使用
  - **null值非常常用**，当一个变量准备保存一个对象，但是**这个对象不确定时，我们可以先赋值为null**



## num++和++num的区别

- num++：先赋值，再自加

  ```js
  var num = 5;
  var result = num++;
  console.log(result, num); // 5 6
  ```

- ++num：先自加，再赋值

  ```js
  var num = 5;
  var result = ++num;
  console.log(result, num); // 6 6
  ```



## ===和==的区别

- 普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false，或者空字符串和 false 这类运算

  - 这是因为在**比较不同类型的值时**，处于**判断符号 == 两侧的值会先被转化为数字**
  - **空字符串和 false 也是如此，转化后它们都为数字 0**

- 如果我们需要区分 0 和 false，该怎么办？

  - **严格相等运算符 ===** 在进行比较时不会做任何的类型转换
  - 换句话说，如果 **a 和 b 属于不同的数据类型**，那么 a === b **不会做任何的类型转换而立刻返回 false**

  ```js
  // null 不会进行转换
  console.log(0 == null); // false
  
  var info = {
    [Symbol.toPrimitive]() {
      return 0;
    },
  };
  console.log(0 == info); // true
  ```

- 第八条有说明：https://262.ecma-international.org/5.1/#sec-11.9.3



## 逻辑或的本质

- **从左到右**依次查找

- 查找**每一个值时**，都将其转化为**布尔值（Boolean）**

- 如果结果是 **true**，就**停止查找**，**并返回这个值**

- 如果**所有值都为 false** ，则**返回最后一个值**

- **简单来说，或运算符，返回第一个为 true 的值，如果都为 false，就返回最后一个值**

  ```js
  var result1 = 0 || 0 || 0 || 5;
  console.log(result1); // 5
  
  var result2 = 0 || null || "" || NaN || undefined;
  console.log(result2); // undefined
  ```



## 逻辑与的本质

- **从左到右**依次查找

- 查找**每一个值时**，都将其转化为**布尔值（Boolean）**

- 如果结果是 **false**，就**停止查找**，**并返回这个值**

- 如果**所有值都为 true** ，则**返回最后一个值**

- **简单来说， 与运算符，返回第一个为 false 的值，如果都为 true，就返回最后一个值**

  ```js
  var result1 = 1 && 2 && null && 5;
  console.log(result1); // null
  
  var result2 = 1 && 2 && 3 && 4 && 5;
  console.log(result2); // 5
  ```



## JavaScript的函数

### 局部变量和外部变量

- 在JavaScript（ES5之前）中没有块级作用域的概念，但是**函数会形成自己的作用域**

  - **作用域（Scope）**是指**变量**和**函数**的**可访问范围**
  - **函数的作用域**表示**在函数内部定义的变量，只有在函数内部可以被访问到**

- 外部变量和局部变量的概念

  - 定义在函数内部的变量，被称之为**局部变量（Local Variables）**
  - 定义在函数外部的变量，被称之为**外部变量（Outer Variables）**

- 什么是全局变量？

  - 在函数之外声明的变量（在script中声明的），称之为**全局变量**
  - 全局变量**在任何函数中都是可访问**的
  - 通过**var声明的全局变量会在window对象**上添加一个属性

- 在函数中，访问变量的顺序是什么呢？

  - 自身 ---> 全局 ---> window ---> 报错

  ```js
  // 1.全局变量: 在全局(script元素中)定义一个变量, 那么这个变量是可以在定义之后的任何范围内被访问到的, 那么这个变量就称之为是一个全局变量
  var message = "Hello World";
  
  // 在函数中访问message
  function sayHello() {
    // 外部变量: 在函数内部去访问函数之外的变量, 访问的变量称之为外部变量
    console.log("sayHello中访问message:", message);
  
    // 2.局部变量: 在函数内部定义的变量, 只有在函数内部才能进行访问, 称之为局部变量
    var nickname = "hhhhh";
  
    function hi() {
      console.log("hi function~");
      // message也是一个外部变量
      console.log("hi中访问message:", message);
      // nickname也是一个外部变量
      console.log("hi中访问nickname:", nickname);
    }
    hi();
  }
  
  sayHello();
  ```



### 头等函数

- 头等函数（first-class function；第一级函数）是指在程序设计语言中，函数被当作头等公民
  - 这意味着，函数可以作为**别的函数的参数、函数的返回值，赋值给变量**或**存储在数据结构**中
- 通常我们对作为头等公民的编程方式，称之为**函数式编程**
  - JavaScript就是**符合函数式编程的语言**，这个也是**JavaScript的一大特点**



### 回调函数

- 什么是回调函数呢？

  - 将一个函数作为参数传入到另外一个函数中


  - 在另外一个函数中，对于传入的函数进行调用的过程，就叫做函数的回调

    ```js
    function foo(fn) {
      fn();
    }
    
    function bar(fn) {
      console.log("bar函数被调用");
    }
    foo(bar);
    ```

- foo这种函数我们也可以称之为**高阶函数（Higher-order function）**

- 高阶函数必须至少满足两个条件之一

  - 接受**一个或多个函数**作为参数
  - **返回一个函数**

- 匿名（anonymous）函数的理解
  - 传入一个函数时，如果没有给函数名，也没有定义对应的变量的函数，就叫做匿名函数



### 立即执行函数

- 什么是立即执行函数?

  - 专业名字：**Immediately-Invoked Function Expression**（IIFE 立即调用函数表达式）
  - 表达的含义是**一个函数定义完后被立即执行**
    - 第一部分是定义了一个匿名函数，这个函数有自己独立的作用域
    - 第二部分是后面的（），表示这个函数被执行了

  ```js
  (function() { 
        console.log("立即执行函数被调用~")
  })()
  ```

- 这个东西有什么用？

  - 会创建一个独立的执行上下文环境，可以避免外界访问或修改内部的变量，也避免了对内部变量的修改



### 立即执行函数的其他写法

- 立即执行函数必须是一个表达式（整体），不能是函数声明

  - 下面的这种写法会报错，因为是**一个函数声明，不是一个函数表达式**

  - 当圆括号出现在匿名函数的末尾想要调用函数时，它会默认将函数当成是函数声明

  ```js
  function foo() {
    console.log("立即执行函数");
  }()
  ```

- 当圆括号包裹函数时，它会默认将函数作为表达式去解析，而不是函数声明

  ```js
  (function foo() {
    console.log("立即执行函数");
  })() 
  ```

- 下面是一个函数表达式，所以可以执行

  ```js
  // 匿名函数
  (function () {
    console.log("立即执行函数");
  }());
  
  // +(正号)-(负号)!(取反) - 了解
  +(function foo() {})();
  ```



## JavaScript的面向对象

### 创建对象和使用对象

- 对象的创建方法有很多，包括三种
  - **对象字面量**
  - **new Object  + 动态添加属性**
  - **new 其他类**

- 注意项：对象的**属性名可以加引号也可以不加**，如果要使用一些**特殊的名字，则必须加引号**

  ```js
  // 1.对象字面量
  var obj1 = { name: "Top" };
  // 2.new Object() 构造函数
  var obj2 = new Object();
  obj2.name = "HHHH";
  // 3.new 其他类()
  function Person() {}
  var obj3 = new Person();
  
  
  var info = { name: "coderTop", age: 18, sex: "男" };
  // 访问对象的属性
  console.log(info.name); // coderTop
  // 添加对象的属性
  info.hobby = "学习";
  console.log(info); // {name: "coderTop", age: 18, sex: "男", hobby: "学习"}
  // 修改对象的属性
  info.hobby = "打乒乓球";
  console.log(info); // {name: "coderTop", age: 18, sex: "男", hobby: "打乒乓球"}
  // 删除对象的属性 delete 操作符
  delete info.hobby;
  console.log(info); // {name: "coderTop", age: 18, sex: "男"}
  ```



### 栈内存和堆内存

- 我们首先记住一句话：**JS中所有的变量都是保存在栈内存中的**
  - **基本数据类型**的值是保存在**栈内存**中的，**值与值之间是独立存在，修改一个值不会影响其他的值**
  - **引用数据类型**的值是保存到**堆内存**中的，**每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而值保存了对象的内存地址** 如果两个值保存了同一个对象时，当修改对象的属性时，另一个也会受到影响



### 类和对象的思维方式

- 我们来思考一个问题：如果需要在开发中创建一系列的相似的对象，我们应该如何操作呢？
- 比如下面的例子：
  - 学生系统中创建**一系列的学生**（学生都有姓名、年龄、身高等，但是具体的值又不相同）

-  当然，一种办法是我们创建一系列的对象

  ```js
  var stu1 = { name: "张三", age: 17, height: 1.70 };
  var stu2 = { name: "李四", age: 18, height: 1.80 };
  var stu3 = { name: "王五", age: 19, height: 1.90 };
  ```

- 这种方式有一个很大的弊端：创建同样的对象时，需要编写重复的代码

  - 我们是否有可以批量创建对象，但是又让它们的属性不一样呢？



### 工厂函数

- 我们可以想到的一种创建对象的方式：工厂函数

  - 我们可以**封装一个函数**，这个函数用于帮助我们**创建一个对象**，我们只需要重复调用这个函数即可

  - 工厂函数其实是一种常见的设计模式

  ```js
  function createStudent(name, age, height) {
    var stu = {};
    stu.name = name;
    stu.age = age;
    stu.height = height;
    return stu;
  }
  createStudent("张三", 17, 1.70);
  createStudent("李四", 18, 1.80);
  createStudent("王五", 19, 1.90);
  ```



### 认识构造函数

- 工厂方法创建对象有一个比较大的问题：**我们在打印对象时，对象的类型都是Object类型**
  - 但是从某些角度来说，这些对象应该有一个他们**共同的类型**
  - 下面我们来看一下另外一种模式：**构造函数的方式**

- 我们先理解什么是构造函数？

  - **构造函数**也称之为**构造器（constructor）**，通常是我们在**创建对象时会调用的函数**

  - 在其他面向的编程语言里面，**构造函数是存在于类中的一个方法，称之为构造方法**

  - 但是JavaScript中的构造函数有点不太一样，**构造函数扮演了其他语言中类的角色**

- 也就是在JavaScript中，构造函数其实就是类的扮演者

  - 比如**系统默认给我们提供的Date就是一个构造函数**，也可以**看成是一个类**

  - 在ES5之前，我们都是<b>通过function来声明一个构造函数（类）</b>的，**之后通过new关键字来对其进行调用**

  - 在ES6之后，**JavaScript可以像别的语言一样，通过class来声明一个类**



### 类和对象的关系

- 那么什么是类（构造函数）呢？
  - 现实生活中往往是根据**一份描述/一个模板**来创建一个**实体对象**的
  - 编程语言也是一样，也必须先有**一份描述**，在这份描述中说明将来创建出来的对象**有哪些属性和方法**
- 比如现实生活中，我们会如此来描述一些事物
  - 比如水果**fruits**是一类事物的统称，**苹果、橘子、葡萄**等是具体的对象
  - 比如人**person**是一类事物的统称，而**Jim、Lucy、Lily、李雷、韩梅梅**是具体的对象



### JavaScript中的类（ES5）

- 我们前面说过，在JavaScript中类的表示形式就是构造函数

- JavaScript中的构造函数是怎么样的？

  - 构造函数也是一个**普通的函数**，从表现形式来说，和**千千万万个普通的函数**没有任何区别
  - 那么如果这么一个**普通的函数被使用new操作符**来调用了，那么**这个函数就称之为是一个构造函数**

- 如果一个函数被使用new操作符调用了，那么它会执行如下操作

  1. 在内存中创建一个新的对象
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性
  3. 构造函数内部的this，会指向创建出来的新对象
  4. 执行函数的内部代码
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象

  ```js
  function createStudent(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    // return null
    // return undefined
    // return true
    // return "100"
    // return 100
  }
  
  var stu1 = new createStudent("张三", 17, 1.70);
  var stu2 = new createStudent("李四", 18, 1.80);
  var stu3 = new createStudent("王五", 19, 1.90);
  ```



### 全局对象window

- 浏览器中存在一个全局对象 window

1. 作用一：查找变量时，自身 ---> 全局 ---> window ---> 报错

2. 作用二：将一些浏览器全局提供给我们的变量/函数/对象，放在 window 对象上面

3. 作用三：使用 var 定义的变量会被默认添加到 window 上面

   ```js
   console.log(window);
   // 为什么我在前面打印时可以看见 message 属性 ?
   // 浏览器发现你在后面给 window 添加 message 属性之后它会把你原来打印的地方给做一个刷新
   
   var age = 18;
   // var name = "hello global";
   function foo() {
     // var name = "hello foo";
     console.log(name); // '', 因为 window 上有个 name 属性
   }
   foo();
   ```



## JavaScript的常见内置类

### 原始类型的包装类

- JavaScript的原始类型**并非对象类型**，所以从理论上来说，它们是**没有办法获取属性或者调用方法的**

- 但是，在开发中会看到，我们会经常这样操作

  ```js
  var message = "Hello World";
  var num = 2.54432;
  
  console.log(message.length);
  console.log(message.split(" "));
  console.log(num.toFixed(2));
  ```

- 那么，为什么会出现这样奇怪的现象呢？

  - 原始类型是**简单的值**，默认**并不能调用属性和方法**

  - 这是因为JavaScript为了可以**使其可以获取属性和调用方法，对其封装了对应的包装类型**

- 常见的包装类型有：**String、Number、Boolean、Symbol、BigInt类型**



### 包装类型的使用过程

- 默认情况，当我们**调用一个原始类型的属性或者方法时**，会进行如下操作

  - 根据**原始值，创建一个原始类型对应的包装类型对象**
  - **调用对应的属性或者方法，返回一个新的值**
  - **创建的包装类对象被销毁**
  - 通常**JavaScript引擎会进行很多的优化**，**它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用**

- 我们也可以自己来创建一个包装类的对象

  - name1是字面量的创建方式，name2是new创建对象的方式

  ```js
  var name1 = "张三";
  var name2 = new String("李四");
  console.log(typeof name1); // string
  console.log(typeof name2); // object
  ```

- 注意事项：**null、undefined没有任何的方法，也没有对应的  “对象包装类**”



### Number类的补充

- 属性
  - Number.MAX_SAFE_INTEGER：JavaScript 中最大的安全整数 (2^53 - 1)
  - Number.MIN_SAFE_INTEGER：JavaScript 中最小的安全整数 -(2^53 - 1)

- 实例方法
  - **toString(base)**，将数字转成字符串，并且按照base进制进行转化
    - base 的范围可以从 2 到 36，默认情况下是 10； 
    - 注意：**如果是直接对一个数字操作，需要使用..运算符**
    

  ```js
  var num = 100;
  console.log(num.toString(2)); // 1100100
  console.log(num.toString(8)); // 144
  console.log(num.toString(16));// 64
  console.log(123..toString()); // 123
  ```

  - **toFixed(digits)**，格式化一个数字，保留digits位的小数
    - digits的范围是0到20（包含）之间
    - 会四舍五入
    - 返回一个字符串类型的数字
  
  ```js
  var num = 1.546;
  console.log(num.toFixed(2), typeof num.toFixed(2)); // 1.55 string
  ```

- 类方法

  - **Number.parseInt(string[, radix])**，将字符串解析成整数，也有对应的全局方法parseInt
  
  ```js
  var num = 1.546;
  console.log(Number.parseInt(num), parseInt(num)); // 1 1
  console.log(Number.parseInt === parseInt); // true
  ```

  - **Number. parseFloat(string)**，将字符串解析成浮点数，也有对应的全局方法parseFloat

  
  ```js
  var num = 1.546;
  console.log(Number.parseFloat(num), parseFloat(num)); // 1.546 1.546
  console.log(Number.parseFloat === parseFloat); // true
  ```



### String类的补充

- 属性

  - length 获取字符串的长度

  ```js
  var message = "Hello World";
  console.log(message.length); // 11
  ```

- 方法

  - 通过字符串的索引 string[0]
  - 通过string.charAt(position)
  - 它们的区别是**索引的方式没有找到会返回undefined**，而**charAt没有找到会返回空字符串**
  
  
  ```js
  var message = "Hello World";
  console.log(message[4]); // o
  console.log(message.charAt(4)); // o
  console.log(message[20]); // undefined
  console.log(message.charAt(20)); // ''
  ```
  
  - toLowerCase()，将所有的字符转成小写
  - toUpperCase()，将所有的字符转成大写
  
  
  ```js
  var message = "Hello World";
  console.log(message.toUpperCase()); // HELLO WORLD
  console.log(message.toLowerCase()); // hello world
  ```
  
  - indexOf(value，fromIndex)，查找字符串位置
  - includes(value，position)，是否包含字符串
  

  ```js
  var message = "Hello World";
  console.log(message.indexOf("World")); // 6
  console.log(message.indexOf("hhhhh")); // -1
  
  console.log(message.includes("World")); // true
  console.log(message.includes("hhhhh")); // false
  ```
  
  - startsWith(value)，以什么开头
  - endsWith(value)，以什么结尾
  - replace(value/regexp，newValue)，替换字符串
  
  
  ```js
  var message = "Hello World";
  console.log(message.startsWith("Hello")); // true
  console.log(message.endsWith("hhhhh")); // false
  
  console.log(message.replace("Hello", "hhhhh")); // hhhhh World
  var newMessage = message.replace("Hello", function () {
      return "hhhhh".toUpperCase();
  });
  console.log(newMessage); // HHHHH World
  ```
  
  - slice(start，end)，从 start 到 end（不含 end）
  - substring(start，end)，从 start 到 end（不含 end） 
  - substr(start，length)，从 start 开始获取长为 length 的字符串
  
  
  ```js
  var message = "Hello World";
  
  // 允许传负值
  console.log(message.slice(3, 7)); // lo W
  console.log(message.slice(3, -1)); // lo Worl
  console.log(message.slice(3)); // lo World
  
  // 负值代表 0
  console.log(message.substring(3, 7)); // lo W
  console.log(message.substring(3, -1)); // Hel
  console.log(message.substring(3, 0)); // Hel
  console.log(message.substring(3)); // lo World
  
  // 允许 start 为负数
  console.log(message.substr(3, 7)); // lo Worl
  console.log(message.substr(3, -1)); // ''
  console.log(message.substr(3)); // lo World
  ```
  
  - concat()，拼接字符串
  - trim()，删除首尾空格
  - split(separator，limit)，字符串分割
    -  separator：以什么字符串进行分割，也可以是一个正则表达式
    - limit：限制返回片段的数量
  
  ```js
  var str1 = "Hello ";
  var str2 = "World";
  var str3 = " 张三";
  
  console.log(str1.concat(str2, str3, " abc", " cba")); // Hello World 张三 abc cba
  
  console.log("    哈哈哈哈    hhhh    ".trim()); // 哈哈哈哈    hhhh
  
  var message = "abc-cba-nba-mba";
  console.log(message.split("-")); // ['abc', 'cba', 'nba', 'mba']
  console.log(message.split("-", 2)); // ['abc', 'cba']
  // 不传递参数，则会将每个字符都拆分为数组中的一个元素
  console.log(message.split("")); // ['a', 'b', 'c', '-', 'c', 'b', 'a', '-', 'n', 'b', 'a', '-', 'm', 'b', 'a']
  ```



### Math对象

- 除了Number类可以对数字进行处理之外，JavaScript还提供了一个**Math对象**

  - Math是一个**内置对象**（不是一个构造函数），它**拥有一些数学常数属性和数学函数方法**

- Math常见的属性

  - Math.PI：圆周率，约等于 3.14159

- Math常见的方法

  ```js
  var num1 = 10.5;
  var num2 = -10.6;
  
  // 取绝对值
  console.log(Math.abs(num1)); // 10.5
  console.log(Math.abs(num2)); // 10.6
  
  // 向下取整, 小数部分会被舍掉
  console.log(Math.floor(num1));// 10
  console.log(Math.floor(num2));// -11
  
  // 向上取整, 小数位只要有值就向上进一
  console.log(Math.ceil(num1)); // 11
  console.log(Math.ceil(num2)); // -10
  
  // 四舍五入取整 (正数四舍五入,负数五舍六入), 满五就向上进一位,不满五就不进
  console.log(Math.round(num1)); // 11
  console.log(Math.round(num2)); // -11
  
  // 生成 0~1 的随机数(包含0,不包含1)
  console.log(Math.random());
  
  // 5~50 随机数 Math.floor(Math.random() * x) + y
  // y = 5
  // x = 45 - 5 
  for (let i = 0; i < 100; i++) {
    var num = Math.floor(Math.random() * 45) + 5;
    console.log(num);
  }
  ```



### 数组

- 数组是**一种特殊的对象类型**

  - 创建一个数组有两种语法

  ```js
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = new Array(1, 2, 3, 4, 5);
  console.log(arr1); // [1, 2, 3, 4, 5]
  console.log(arr2); // [1, 2, 3, 4, 5]
  ```

  - 传入了**一个数字**，它默认会当成我们要创建一个**对应长度的数组**

  ```js
  var arr3 = new Array(5);
  console.log(arr3); // [empty × 5]
  ```

- 属性

  - length 属性的另一个有意思的点是它是可写的
    - 如果我们**手动增加一个大于默认length的数值**，那么**会增加数组的长度**
    - 但是如果我们**减少它**，**数组就会被截断**

  ```js
  var names = ["abc", "cba", "nba", "mba"]
  console.log(names.length) // 4
  
  names.length = 10
  console.log(names) // ['abc', 'cba', 'nba', 'mba', 空属性 × 6]
  
  names.length = 2
  console.log(names) // ["abc", "cba"]
  ```

- 方法

  - push()，在数组的后面添加元素
  - pop()，在数组的后面删除元素

  ```js
  var arr = [1, 2, 3, 4, 5];
  arr.push(6);
  console.log(arr); // [1, 2, 3, 4, 5, 6]
  arr.pop();
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

  - unshift()，在数组的前面添加元素
  - shift()，在数组的前面删除元素

  ```js
  var arr = [1, 2, 3, 4, 5];
  arr.unshift(0);
  console.log(arr); // [0, 1, 2, 3, 4, 5]
  arr.shift();
  console.log(arr); // [1, 2, 3, 4, 5]
  ```

  - splice()，添加，删除，替换元素

  ```js
  var names = ["abc", "cba", "nba", "mba", "macc"];
  // 参数一: start, 从什么位置开始操作元素
  // 参数二: deleteCount, 删除元素的个数
  
  // 1.删除元素
  names.splice(0, 2);
  console.log(names); // ['nba', 'mba', 'macc']
  
  // 2.新增元素
  // deleteCount: 0, 后面可以添加新的元素
  names.splice(0, 0, "hhhh", "eeee");
  console.log(names); // ['hhhh', 'eeee', 'nba', 'mba', 'macc']
  
  // 3.替换元素
  names.splice(0, 2, "6666", "7777", "8888"); // ['6666', '7777', '8888', 'nba', 'mba', 'macc']
  ```

  - slice()，对数组进行截取
  - cancat()，将多个数组拼接在一起
  - join()，将一个数组的所有元素连接成一个字符串并返回这个字符串

  ```js
  var names = ["abc", "cba", "nba", "mba"];
  // start 从什么位置开始
  // end 结束位置, 不包含end本身
  var newNames = names.slice(0, 2);
  console.log(newNames); // ['abc', 'cba']
  
  var names1 = ["abc", "cba"];
  var names2 = ["nba", "mba"];
  var names3 = ["nca", "nnca"];
  var newNames2 = names1.concat(names2, names3);
  console.log(newNames2); // ['abc', 'cba', 'nba', 'mba', 'nca', 'nnca']
  
  console.log(names.join("-")); // abc-cba-nba-mba
  ```

  - indexOf()，查找当前字符串第一次出现的索引位
  - includes()，判断数组是否包含某个元素
  - find()，找出第一个满足指定条件的元素
  - findIndex()，找出第一个满足指定条件的元素的index

  ```js
  var names = ["abc", "cba", "nba", "mba"];
  // 可以找到, 返回对应的索引
  // 没有找到, 返回-1
  console.log(names.indexOf("nba")); // 2
  console.log(names.indexOf("nbb")); // -1
  
  console.log(names.includes("nba")); // true
  console.log(names.includes("nbb")); // false
  
  var students = [
      { id: 100, name: "AI", age: 18 },
      { id: 101, name: "kobe", age: 30 },
      { id: 102, name: "james", age: 25 },
      { id: 103, name: "curry", age: 22 },
  ];
  
  var stu1 = students.find(function (item) {
      if (item.id === 101) return true;
  });
  console.log(stu1); // {id: 101, name: 'kobe', age: 30}
  
  var stu2 = students.findIndex(function (item) {
      if (item.id === 101) return true;
  });
  console.log(stu2); // 1
  ```

  - sort()，对数组进行排序
  - reverse()，将数组中元素的位置颠倒，并返回该数组

  ```js
  var nums1 = [10, 20];
  var nums2 = [6, 5, 4, 3, 2, 1];
  nums1.sort(function (item1, item2) {
   // item1 - item2 小于0, 那么item1会被排列到item2前面
   //                         10            20
   // item2 - item1 大于0, 那么item2会被排列到item1前面
   //                         20            10
   return item1 - item2;
  });
  
  console.log(nums1); // [20, 30]
  console.log(nums2.reverse()); // [1, 2, 3, 4, 5, 6]
  ```

  - 高阶方法

  ```js
  // filter 返回满足条件的元素,并且返回一个新数组
  var arr = [1, 2, 3, 8, 9, 6];
  var result = arr.filter((item) => {
      return item > 5;
  });
  console.log(result); // [8, 9, 6]
  
  
  // every 判断每一项条件是否为 true,如果都为 true 结果返回 true
  // 有一项不满足就返回 false
  var arr1 = [
      { name: "1", age: 10 },
      { name: "2", age: 20 },
      { name: "3", age: 30 },
  ];
  var result1 = arr1.every((item) => {
      return item.age > 5;
  });
  var result2 = arr1.every((item) => {
      return item.age > 40;
  });
  console.log(result1); // true
  console.log(result2); // false
  
  
  // some 如果有一个为 true 则返回结果
  // 如果都不满足就返回 false
  var arr = [
      { name: "0", age: 18 },
      { name: "1", age: 28 },
      { name: "2", age: 38 },
      { name: "3", age: 48 },
  ];
  var result1 = arr.some((item, index) => {
      return item.age > 17;
  });
  var result2 = arr.some((item, index) => {
      return item.age > 58;
  });
  console.log(result1); // true
  console.log(result2); // false
  
  
  // forEach 没有返回值 无法 break 和 return ,可以用 try/catch 中 throw new Error来停止
  var arr = ["王一", "王二"];
  var newArr = arr.forEach(function (item, index, array) {
      console.log(item); // 王一 王二
      return item;
  });
  console.log(newArr); // undefined
  
  
  // map 可以对当前元素进行处理,返回新数组
  var arr1 = [1, 3, 6, 2, 5, 6];
  var arr2 = arr1.map(function (item, index) {
      return item + 10; // 让arr1中的每个元素加10
   });
   console.log(arr2); //  [11, 13, 16, 12, 15, 16]
  
  
  // reduce 累加器
  // 参数解释:
  //  previousValue:计算结束后返回的值,或者初始值
  //  currentValue:当前元素
  //  currentIndex:当前元素的索引
  //  initialValue:初始值作为第一次调用函数时传给 previousValue 的值
  var arr = [1,1,1,1];
  var sumValue = arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
  },0);// 初始值,如果没传数组第一个元素会被当做参数
  console.log('sumValue:' + sumValue); // 打印结果:4
  ```




### Date

#### 时间的表示方式

- 我们先来了解一下时间表示的基本概念
- 最初，人们是通过观察**太阳的位置**来决定时间的，但是这种方式有一个最大的弊端就是**不同区域位置大家使用的时间**是不一致的
  - 相互之间没有办法通过一个统一的时间来沟通、交流
- 之后，人们开始制定的标准时间是**英国伦敦的皇家格林威治（ Greenwich ）天文台的标准时间**（刚好在本初子午线经过的地方），这个时间也称之为GMT（Greenwich Mean Time）
  - 其他时区根据标准时间来确定自己的时间，往东的时区（GMT + hh:mm），往西的时区（GMT - hh:mm）
- 但是，根据公转有一定的误差，也会造成GMT的时间会造成一定的误差，于是就提出了根据**原子钟计算的标准时间UTC**（Coordinated Universal Time）
- 目前GMT依然在使用，主要表示的是**某个时区中的时间**，而UTC是**标准的时间**



#### 创建Date对象

- 在JavaScript中我们使用Date来表示和处理时间

  - **Date的构造函数**有如下用法

  ```js
  // 1.没有传入任何的参数, 获取到当前时间
  var date1 = new Date();
  console.log(date1);// Sun May 29 2022 10:51:28 GMT+0800 (中国标准时间)
  
  // 2.传入参数: 时间字符串
  var date2 = new Date("2022-08-08");
  console.log(date2);// Mon Aug 08 2022 08:00:00 GMT+0800 (中国标准时间)
  
  // 3.传入具体的年月日时分秒毫秒
  var date3 = new Date(2033, 10, 10, 09, 08, 07, 333);
  console.log(date3);// Thu Nov 10 2033 09:08:07 GMT+0800 (中国标准时间)
  
  // 4.传入一个Unix时间戳
  // 1s -> 1000ms
  var date4 = new Date(10004343433);
  console.log(date4);// Mon Apr 27 1970 02:59:03 GMT+0800 (中国标准时间)
  ```



#### dateString时间的表示方式

- 日期的表示方式有两种：**RFC 2822 标准**  或者  **ISO 8601 标准**

- 默认打印的时间格式是RFC 2822标准的

- 我们也可以将其转化成ISO 8601标准的
  - YYYY：年份，0000 ~ 9999
  - MM：月份，01 ~ 12
  - DD：日，01 ~ 31
  - T：分隔日期和时间，没有特殊含义，可以省略
  - HH：小时，00 ~ 24
  - mm：分钟，00 ~ 59
  - ss：秒，00 ~ 59
  - .sss：毫秒
  - Z：时区

  ```js
  console.log(new Date().toISOString()); // 2022-05-29T02:28:29.642Z
  ```



#### Date获取信息的方法

- 我们可以从Date对象中获取各种详细的信息

  - getFullYear()：获取年份（4 位数）
  - getMonth()：获取月份，从 0 到 11
  - getDate()：获取当月的具体日期，从 1 到 31
  - getDay()：获取一周中的第几天，从 0（星期日）到 6（星期六）
  - getHours()：获取小时
  - getMinutes()：获取分钟
  - getSeconds()：获取秒钟
  - getMilliseconds()：获取毫秒
  
  ```js
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var day = time.getDay();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliseconds = time.getMilliseconds();
  
  console.log(year, month, date, day, hours, minutes, seconds, milliseconds); // 2022 5 29 0 10 38 44 638
  ```



#### Date设置信息的方法

- Date也有对应的设置方法
  - setFullYear(year, [month], [date])
  - setMonth(month, [date])
  - setDate(date)
  - setHours(hour, [min], [sec], [ms])
  - setMinutes(min, [sec], [ms])
  - setSeconds(sec, [ms])
  - setMilliseconds(ms)
  - setTime(milliseconds)
- 了解：我们可以设置超范围的数值，**它会自动校准**



#### Date获取Unix时间戳

- **Unix时间戳**：它是一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数
- 在JavaScript中，我们有多种方法可以获取这个时间戳
  - new Date().getTime()
  - new Date().valueOf()
  - +new Date()
  - Date.now()



#### Date.parse

- Date.parse(str) 方法可以**从一个字符串中读取日期**，并且**输出对应的Unix时间戳**

  - 作用<b>等同于 new Date(dateString).getTime()</b>操作
  - **需要符合 RFC2822 或 ISO 8601 日期格式的字符串**
  - 其他格式也许也支持，但**结果不能保证一定正常**
  - 如果输入的格式**不能被解析**，那么会返回**NaN**

  ```js
  var timeString = "03/23/2033";
  var timestamp = Date.parse(timeString);
  console.log(timestamp);// 1995120000000
  ```



## DOM

### 认识DOM和BOM

- DOM：文档对象模型（Document Object Model）
  - 简称 **DOM**，将**页面所有的内容表示为可以修改的对象**
- BOM：浏览器对象模型（Browser Object Model）
  - 简称 **BOM**，由**浏览器提供的用于处理文档（document）之外的所有内容的其他对象**
  - 比如 **navigator、location、history** 等对象



### 深入理解DOM

- 浏览器会对我们**编写的HTML、CSS进行渲染**，同时它又要考虑我们可能会**通过JavaScript来对其进行操作**
  - 于是**浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象**
  - 所有这些对象都可以**通过JavaScript来对其进行访问**，那么我们就可以**通过JavaScript来操作页面**
  - 所以，我们将**这个抽象过程**称之为 **文档对象模型（Document Object Model）**
- 整个文档被抽象到 document 对象中
  - 比如**document.documentElement**对应的是**html**元素
  - 比如**document.body**对应的是**body**元素
  - 比如**document.head**对应的是**head**元素



### DOM Tree的理解

- 一个页面不只是有html、head、body元素，也包括很多的子元素
  - 在html结构中，最终会形成一个**树结构**
  - 在抽象成DOM对象的时候，它们也会形成一个**树结构**，我们称之为**DOM Tree**



### document对象

- Document节点表示的整个载入的网页，它的实例是全局的**document对象**
  - 对DOM的所有操作都是**从 document 对象开始**的
  - 它是**DOM的 入口点**，可以从**document**开始去访问任何节点元素
- 对于最顶层的html、head、body元素，我们可以直接在document对象中获取到
  - html元素：`<html>` = document.documentElement
  - body元素：`<body>` = document.body
  - head元素：`<head>` = document.head
  - 文档声明：`<!DOCTYPE html>` = document.doctype



### 节点之间的导航

- 如果我们获取到一个**节点（Node）后**，可以根据**这个节点去获取其他的节点**，我们称之为**节点之间的导航**
- 节点之间存在如下的关系
  - 父节点：parentNode
  - 前兄弟节点：previousSibling
  - 后兄弟节点：nextSibling
  - 子节点：childNodes
  - 第一个子节点：firstChild
  - 最后一个子节点：lastChild



### 元素之间的导航

- 如果我们获取到一个**元素（Element）后**，可以根据**这个元素去获取其他的元素**，我们称之为**元素之间的导航**
- 元素之间存在如下的关系
  - 父元素：parentElement
  - 前兄弟元素：previousElementSibling
  - 后兄弟元素：nextElementSibling
  - 子元素：children
  - 第一个子元素：firstElementChild
  - 最后一个子元素：lastElementChild



### 获取元素的方法

- 当元素彼此靠近或者相邻时，DOM **导航属性** 非常有用

  - 但是，在实际开发中，我们希望可以**任意的获取到某一个元素**应该如何操作呢？

- DOM为我们提供了获取元素的方法

  | 方法名                 | 搜索方式     | 可以在元素上调用 | 实时更新DOM元素 |
  | ---------------------- | ------------ | ---------------- | --------------- |
  | querySelector          | CSS-selector | yes              | no              |
  | querySelectorAll       | CSS-selector | yes              | no              |
  | getElementById         | id           | no               | no              |
  | getElementsByName      | name         | no               | yes             |
  | getElementsByTagName   | tag or '*'   | yes              | yes             |
  | getElementsByClassName | class        | yes              | yes             |

- 开发中如何选择呢？
  - 目前最常用的是**querySelector和querySelectAll**
  - **getElementById**偶尔也会使用或者在适配一些低版本浏览器时



### 节点的属性 - nodeType

- nodeType 属性提供了一种获取**节点类型**的方法
- 它有一个**数值型值**

- 常见的节点类型有如下

  | 常量                    | 值   | 描述                                                         |
  | ----------------------- | ---- | ------------------------------------------------------------ |
  | Node.ELEMENT_NODE       | 1    | 一个 **元素** 节点，例如 p 和 div                            |
  | Node.TEXT_NODE          | 3    | 元素或者属性中实际的 **文字**                                |
  | Node.COMMENT_NODE       | 8    | 一个 **注释** 节点                                           |
  | Node.DOCUMENT_NODE      | 9    | 一个 **Document** 节点                                       |
  | Node.DOCUMENT_TYPE_NODE | 10   | 描述文档类型的 DocumentType 节点。例如 <!DOCTYPEhtml> 就是用于 HTML5 的 |



### 节点的属性 - innerHTML、textContent

- innerHTML 属性
  - 将元素中的 HTML 获取为字符串形式
- textContent 属性
  - 仅仅获取元素中的文本内容
- innerHTML 和 textContent 的区别
  - 设置文本，作用是一样
  - 设置文本中**包含元素内容（标签）**，那么 innerHTML 浏览器会解析，而 textContent 会当成文本的一部分



### 元素的属性和特性

- 我们知道，一个元素除了有**开始标签、结束标签、内容**之外，还有很多的**属性（attribute）**
- 浏览器在解析HTML元素时，会将**对应的attribute**也创建出来放到**对应的元素对象**上
  - 比如**id、class就是全局的attribute**，会有对应的**id、class属性**
  - 比如**href属性**是针对**a元素**的，**type、value属性**是针对**input元素**的



### attribute的分类

- 属性attribute的分类

  - <b>标准的attribute：</b>某些attribute属性是标准的，比如id、class、href、type、value等
  - <b>非标准的attribute：</b>某些attribute属性是自定义的，比如abc、age、height等

  ```html
  <div id="main" class="box" abc="abc" age="18" height="1.80">我是box</div>
  <a href="https://www.baidu.com">百度一下</a>
  ```



### attribute的操作

- 对于所有的attribute访问都支持如下的方法

  - **element.hasAttribute(name)** — 检查特性是否存在
  - **element.getAttribute(name)** — 获取这个特性值
  - **element.setAttribute(name, value)** — 设置这个特性值
  - **element.removeAttribute(name)** — 移除这个特性
  - <b>attributes：</b>attr对象的集合，具有name、value属性

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <div id="main" class="box" abc="cba" age="18" height="1.80">我是box</div>
  
      <script>
        var boxEl = document.querySelector(".box");
  
        console.log(boxEl.hasAttribute("AGE")); // true
        console.log(boxEl.getAttribute("abc")); // cba
        boxEl.setAttribute("id", "cba");
        boxEl.removeAttribute("id");
  
        var boxAttributes = boxEl.attributes;
        for (var attr of boxAttributes) {
          console.log(attr.name, attr.value); // class box ...
        }
      </script>
    </body>
  </html>
  ```

- attribute具备以下特征

  - 它们的**名字是大小写不敏感的**（id 与 ID 相同）
  - 它们的**值总是字符串类型**的



### 元素的属性（property）

- 对于**标准的attribute**，会在DOM对象上创建**与其对应的property属性**

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <div id="abc" class="box" title="标题" age="18" height="1.88">我是box</div>
  
      <input type="checkbox" checked />
      <script>
        var boxEl = document.querySelector(".box");
        console.log(boxEl.id, boxEl.title, boxEl.age, boxEl.height); // abc 标题 undefined undefined
  
        var inputEl = document.querySelector("input");
  
        console.log(inputEl.getAttribute("checked")); // ''
        console.log(inputEl.checked); // true
      </script>
    </body>
  </html>
  ```

- 在大多数情况下，它们是相互作用的

  - 改变**property**，通过**attribute**获取的值，会随着改变
  - 通过**attribute**操作修改，**property**的值会随着改变
    - 但是input的value修改只能通过attribute的方法

- 除非特别情况，大多数情况下，设置、获取attribute，推荐使用property的方式

  - 这是因为它**默认情况下是有类型**的



### data-*自定义属性

- 前面我们有学习HTML5的data-*自定义属性，那么它们也是可以在dataset属性中获取到的

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <div class="box" data-age="18" data-height="1.80"></div>
      <script>
        var boxEl = document.querySelector(".box");
        console.log(boxEl.dataset.age);
        console.log(boxEl.dataset.height);
      </script>
    </body>
  </html>
  ```



### 元素的className和classList

- 元素的class attribute，对应的property并非叫class，而是**className**

  - 这是因为JavaScript早期是不允许使用class这种关键字来作为对象的属性，所以DOM规范使用了**className**
  - 虽然现在JavaScript已经没有这样的限制，但是并不推荐，并且依然在使用**className**这个名称

- 我们可以对className进行赋值，它会替换整个类中的字符串

  ```js
  var boxEl = document.querySelector(".box")
  boxEl.className = "abc"
  ```

- 如果我们需要添加或者移除单个的class，那么可以使用classList属性

- element.classList 是一个特殊的对象

  - **element.classList.add (class)** ：添加一个类
  - **element.classList.remove(class)**：添加/移除类
  - **element.classList.toggle(class)** ：如果类不存在就添加类，存在就移除它
  - **element.classList.contains(class)**：检查给定类，返回 true/false

- classList是**可迭代对象**，可以通过**for of**进行遍历

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .active {
          color: #fff;
          background-color: #f80;
          font-size: 25px;
        }
      </style>
    </head>
    <body>
      <div class="box">我是box</div>
      <button class="btn">切换</button>
  
      <script>
        var boxEl = document.querySelector(".box");
  
        boxEl.classList.add("abc");
        boxEl.classList.add("active");
        boxEl.classList.remove("abc");
  
        var btnEl = document.querySelector(".btn");
        btnEl.onclick = function () {
          boxEl.classList.toggle("active");
        };
      </script>
    </body>
  </html>
  ```



### 元素的style属性

- 如果需要单独修改某一个CSS属性，那么可以通过style来操作

  - 对于**多词属性**，使用**小驼峰式**

  ```js
  var boxEl = document.querySelector(".box");
  boxEl.style.backgroundColor = "red";
  ```

- 如果我们将值设置为**空字符串**，那么会使用**CSS的默认样式**

  ```js
  var boxEl = document.querySelector(".box");
  boxEl.style.display = "";
  ```

- 多个样式的写法，我们需要使用cssText属性

  - 不推荐这种用法，因为它会替换整个字符串

  ```js
  var boxEl = document.querySelector(".box");
  boxEl.style.cssText = "font-size: 30px; color: red;";
  ```



### getComputedStyle

- 如果我们需要读取样式

  - 对于**内联样式**，是可以**通过style.*的方式**读取到的
  - 对于**style、css文件中的样式**，是**读取不到**的

- 这个时候，我们可以通过**getComputedStyle**的全局函数来实现

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box { font-size: 20px; }
      </style>
    </head>
    <body>
      <div class="box">我是box</div>
  
      <script>
        var boxEl = document.querySelector(".box");
        console.log(boxEl.style.fontSize);
  
        console.log(getComputedStyle(boxEl).fontSize);
      </script>
    </body>
  </html>
  ```



### 创建元素

- 前面我们使用过 document.write 方法写入一个元素
  - 这种方式写起来非常便捷，但是对于**复杂的内容、元素关系拼接并不方便**
  - 它是在早期没有DOM的时候使用的方案，目前依然被保留了下来
- 那么目前我们想要插入一个元素，通常会按照如下步骤
  - 步骤一：创建一个元素
  - 步骤二：插入元素到DOM的某一个位置
- 创建元素： document.createElement(tag)



### 插入元素

- 插入元素的方式如下
  - **node.append(...nodes or strings)** —— 在 node 末尾 插入节点或字符串
  - **node.prepend(...nodes or strings)** —— 在 node 开头 插入节点或字符串
  - **node.before(...nodes or strings)** —— 在 node 前面 插入节点或字符串
  - **node.after(...nodes or strings)** —— 在 node 后面 插入节点或字符串
  - **node.replaceWith(...nodes or strings)** —— 将 node 替换为给定的节点或字符串
  
  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <div class="box">
        <span class="box-first">呵呵呵呵</span>
        <p>哈哈哈哈</p>
      </div>
      <script>
        var boxEl = document.querySelector(".box");
  
        var h2El = document.createElement("h2");
        h2El.textContent = "我是标题";
        h2El.classList.add("active");
  
        // boxEl.append(h2El); // p 标签后面
        // boxEl.prepend(h2El); // span 标签前面
        // boxEl.after(h2El); // div 标签后面
        // boxEl.before(h2El); // div 标签前面
        boxEl.replaceWith(h2El, "abc"); // 替换 div 标签
      </script>
    </body>
  </html>
  ```



### 移除和克隆元素

- 移除元素我们可以调用元素本身的remove方法

- 如果我们想要复制一个现有的元素，可以通过cloneNode方法

  - 可以传入一个**Boolean类型的值**，来决定**是否是深度克隆**
  - 深度克隆会克隆对应元素的子元素，否则不会

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <button class="remove-btn">移除box</button>
      <button class="clone-btn">复制box</button>
  
      <div class="box">
        <h2>我是标题</h2>
        <p>我是文本, 哈哈哈哈哈</p>
      </div>
  
      <script>
        var boxEl = document.querySelector(".box");
        var removeBtnEl = document.querySelector(".remove-btn");
        var cloneBtnEl = document.querySelector(".clone-btn");
  
        removeBtnEl.onclick = function () {
          boxEl.remove();
        };
  
        cloneBtnEl.onclick = function () {
          var newNode = boxEl.cloneNode(true);
          document.body.append(newNode);
        };
      </script>
    </body>
  </html>
  ```



### 元素的大小、滚动

- clientWidth：内容宽度 + padding（不包含滚动条）

  - 内容宽度 + padding-left + padding-right

- clientHeight：内容宽度 + padding

  - 内容宽度 + padding-top + padding-bottom

- clientTop：border-top的宽度

- clientLeft：border-left的宽度

- offsetWidth：元素完整的宽度

  - width（设置的宽度）+ padding-left + padding-right + border-left + border-right

- offsetHeight：元素完整的高度

  - height（设置的高度）+ padding-left + padding-right + border-left + border-right

- offsetLeft：距离父元素的x

- offsetTop：距离父元素的y

- scrollHeight：整个可滚动的区域高度

  - 内容宽度 + padding-top + padding-bottom

- scrollTop：滚动部分的高度

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        body {
          margin: 31px;
        }
        .box {
          width: 100px;
          height: 100px;
          padding: 10px;
          border: 10px solid red;
  
          overflow: auto;
        }
      </style>
    </head>
    <body>
      <div class="box">
        你去过国内最美的地方是哪
        我去过国内最美的地方是新疆喀纳斯。喀纳斯是一个美丽而神秘的地方，这里群山环抱，森林密布，湖水清澈，风景奇特。为国家级5A级景区，国家地质公园，国家森林公园。
      </div>
  
      <script>
        var boxEl = document.querySelector(".box");
        console.log(boxEl.clientWidth); // 103
        console.log(boxEl.clientHeight); // 120
  
        console.log(boxEl.clientTop); // 10
        console.log(boxEl.clientLeft); // 10
  
        console.log(boxEl.offsetWidth); // 140
        console.log(boxEl.offsetHeight); // 140
  
        
        console.log(boxEl.offsetLeft); // 31
        console.log(boxEl.offsetTop); // 31
  
        console.log(boxEl.scrollHeight); // 419
        window.onclick = function () {
          console.log(boxEl.scrollTop);
        };
      </script>
    </body>
  </html>
  ```



### window的大小、滚动

- window的width和height

  - innerWidth、innerHeight：获取window窗口的宽度和高度（包含滚动条）
  - outerWidth、outerHeight：获取window窗口的整个宽度和高度（包括调试工具、工具栏）
  - documentElement.clientHeight、documentElement.clientWidth：获取html的宽度和高度（不包含滚动条）

- window的滚动位置

  - scrollX：X轴滚动的位置（别名pageXOffset）
  - scrollY：Y轴滚动的位置（别名pageYOffset）

- 也有提供对应的滚动方法

  - scrollBy(x,y) ：将页面滚动至相对于**当前位置的x/y位置**（会累加）
  - scrollTo(pageX,pageY) 将页面滚动至**绝对坐标**

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box {
          width: 3000px;
          height: 100px;
          background-color: orange;
        }
  
        .btn {
          position: fixed;
          right: 20px;
          bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="box"></div>
      <button class="btn">按钮</button>
  
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  
      <script>
        // window大小
        console.log(window.outerWidth);
        console.log(window.outerHeight);
  
        console.log(window.innerWidth);
        console.log(window.innerHeight);
  
        console.log(document.documentElement.offsetWidth);
        console.log(document.documentElement.offsetHeight);
  
        // 获取window的滚动区域
        window.onclick = function () {
          console.log(window.scrollX);
          console.log(window.scrollY);
        };
  
        var btnEl = document.querySelector(".btn");
  
        btnEl.onclick = function () {
          window.scrollBy(0, 100)
          // window.scrollTo(0, 0);
        };
      </script>
    </body>
  </html>
  ```



### 认识事件流

- 事实上对于事件有一个概念叫做事件流，为什么会产生事件流呢？

  - 我们可以想到一个问题：当我们在浏览器上**对着一个元素点击时，你点击的不仅仅是这个元素本身**
  - 这是因为我们的**HTML元素是存在父子元素叠加层级**的
  - 比如一个span元素是放在div元素上的，div元素是放在body元素上的，body元素是放在html元素上的

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          background-color: orange;
        }
  
        .box span {
          width: 100px;
          height: 100px;
          background-color: red;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <span class="text"></span>
      </div>
  
      <script>
        var divEl = document.querySelector(".box");
        var spanEl = document.querySelector(".text");
        var bodyEl = document.body;
  
        divEl.addEventListener("click", function () {
          console.log("div被点击");
        });
  
        spanEl.addEventListener("click", function () {
          console.log("span被点击");
        });
  
        bodyEl.addEventListener("click", function () {
          console.log("body被点击");
        });
      </script>
    </body>
  </html>
  ```



### 事件冒泡和事件捕获

- 我们会发现默认情况下事件是**从最内层的span向外依次传递的顺序**，这个顺序我们称之为**事件冒泡（Event Bubble）**

- 事实上，还有另外一种监听事件流的方式就是**从外层到内层（body -> span）**，这种称之为**事件捕获（Event Capture）**

- 为什么会产生两种不同的处理流呢？

  - 这是因为早期浏览器开发时，不管是**IE还是Netscape公司都发现了这个问题**
  - 但是他们采用了**完全相反的事件流来对事件进行了传递**
  - IE采用了**事件冒泡的方式**，Netscape采用了**事件捕获的方式**

- 那么我们如何去监听事件捕获的过程呢？

- **从里往外**触发事件：事件冒泡

- **从外往里**触发事件：事件捕获

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          background-color: orange;
        }
  
        .box span {
          width: 100px;
          height: 100px;
          background-color: red;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <span class="text"></span>
      </div>
  
      <script>
        var divEl = document.querySelector(".box");
        var spanEl = document.querySelector(".text");
        var bodyEl = document.body;
  
        divEl.addEventListener("click", function () {
          console.log("div被点击");
        }, true);
  
        spanEl.addEventListener("click", function () {
          console.log("span被点击");
        }, true);
  
        bodyEl.addEventListener("click", function () {
          console.log("body被点击");
        }, true);
      </script>
    </body>
  </html>
  ```



### 事件捕获和冒泡的过程

- 如果我们都监听，那么会按照如下顺序来执行

- **捕获阶段（Capturing phase）**

  - 事件（从 Window）向下走近元素

- **目标阶段（Target phase）**

  - 事件到达目标元素

- **冒泡阶段（Bubbling phase）**

  - 事件从元素上开始冒泡

- 事实上，我们可以通过event对象来获取当前的阶段

  - eventPhase

- 开发中通常会使用事件冒泡，所以事件捕获了解即可

  ![](https://s3.bmp.ovh/imgs/2023/03/15/b9f176a5934422a6.png)



### 事件对象

- 当一个事件发生时，就会有和这个事件相关的很多信息
  - 比如**事件的类型是什么**，你点击的是**哪一个元素**，**点击的位置**是哪里等等相关的信息
  - 那么这些信息会被封装到一个**Event对象**中，这个对象由**浏览器创建**，称之为**event对象**
  - 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作
- 如何获取这个event对象呢？
  - **event对象**会在**传入的事件处理函数回调**时，被系统传入
  - 我们可以在回调函数中拿到这个**event对象**
- 这个对象中都有哪些常见的属性和操作呢？



### event常见的属性和方法

- 常见的属性
  - type：事件的类型
  - target：当前事件**发生的元素**（当前点击的元素）
  - currentTarget：当前**处理事件的元素**
  - eventPhase：事件所处的阶段
  - offsetX、offsetY：事件发生在元素内的位置
  - clientX、clientY：事件发生在客户端内的位置
  - pageX、pageY：事件发生在客户端相对于document的位置
  - screenX、screenY：事件发生相对于屏幕的位置

- 常见的方法

  - preventDefault：取消事件的默认行为
  - stopPropagation：阻止事件的进一步传递（冒泡或者捕获都可以阻止）

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box {
          display: flex;
          width: 200px;
          height: 200px;
          background-color: orange;
        }
  
        span {
          width: 100px;
          height: 100px;
          background-color: #f00;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <span class="btn">
          <button>按钮</button>
        </span>
      </div>
  
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  
      <script>
        var divEl = document.querySelector("div");
        var btnEl = document.querySelector(".btn");
  
        divEl.onclick = function (event) {
          // 1.偶尔会使用
          console.log("事件类型:", event.type);
          console.log("事件阶段:", event.eventPhase);
  
          // 2.比较少使用
          console.log("事件元素中位置", event.offsetX, event.offsetY);
          console.log("事件客户端中位置", event.clientX, event.clientY);
          console.log("事件页面中位置", event.pageX, event.pageY);
          console.log("事件在屏幕中位置", event.screenX, event.screenY);
  
          // 3.target/currentTarget
          console.log(event.target);
          console.log(event.currentTarget);
          console.log(event.currentTarget === event.target);
        };
      </script>
    </body>
  </html>
  ```



### 事件委托

- 事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 – **事件委托模式**（也是一种设计模式）

- 那么这个模式是怎么样的呢？

  - 因为**当子元素被点击**时，父元素可以**通过冒泡可以监听到子元素的点击**
  - 并且**可以通过event.target获取到当前监听的元素**

- 案例：一个ul中存放多个li，点击某一个li会变成红色

  - 方案一：监听**每一个li的点击**，并且**做出相应**
  - 方案二：在**ul中监听点击**，并且**通过event.target拿到对应的li进行处理**
    - 因为这种方案并不需要遍历后给每一个li上添加事件监听，所以它更加高效

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .active {
          color: red;
          font-size: 20px;
          background-color: orange;
        }
      </style>
    </head>
  
    <body>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
      
      <script>
        var ulEl = document.querySelector("ul");
        var activeLiEl = null;
        ulEl.onclick = function (event) {
          if (event.target === ulEl) return;
          if (activeLiEl) {
            activeLiEl.classList.remove("active");
          }
  
          event.target.classList.add("active");
  
          activeLiEl = event.target;
        };
      </script>
    </body>
  </html>
  ```



### 常见的鼠标事件

- 常见的鼠标事件

  | 属性        | 描述                                       |
  | ----------- | ------------------------------------------ |
  | click       | 当用户点击某个对象时调用的事件句柄         |
  | contextmenu | 在用户点击鼠标右键打开上下文菜单时触发     |
  | dblclick    | 当用户双击某个对象时调用的事件句柄         |
  | mousedown   | 鼠标按钮被按下                             |
  | mouseup     | 鼠标按键被松开                             |
  | mouseover   | 鼠标移到某元素之上（支持冒泡）             |
  | mouseout    | 鼠标从某元素移开（支持冒泡）               |
  | mouseenter  | 当鼠标指针移动到元素上时触发（不支持冒泡） |
  | mouseleave  | 当鼠标指针移出元素时触发（不支持冒泡）     |
  | mousemove   | 鼠标被移动                                 |



### mouseover和mouseenter的区别

- mouseenter和mouseleave

  - **不支持冒泡**
  - 进入子元素依然属于在该元素内，没有任何反应

- mouseover和mouseout

  - **支持冒泡**
  - 进入元素的子元素时
    - 先调用父元素的mouseout
    - 再调用子元素的mouseover
    - 因为支持冒泡，所以会将mouseover传递到父元素中

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <style>
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 200px;
          background-color: orange;
        }
  
        .box span {
          width: 100px;
          height: 100px;
          background-color: red;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <span></span>
      </div>
  
      <script>
        var boxEl = document.querySelector(".box");
        var spanEl = document.querySelector("span");
  
        // 1.第一组
        // boxEl.onmouseenter = function () {
        //   console.log("box 进入");
        // };
        // boxEl.onmouseleave = function () {
        //   console.log("box 离开");
        // };
  
        // spanEl.onmouseenter = function () {
        //   console.log("span 进入");
        // };
        // spanEl.onmouseleave = function () {
        //   console.log("span 离开");
        // };
  
        // 第二组
        boxEl.onmouseover = function (event) {
          console.log("进入 " + event.target.tagName);
        };
        boxEl.onmouseout = function (event) {
          console.log("离开 " + event.target.tagName);
        };
      </script>
    </body>
  </html>
  ```



### 文档加载事件

- DOMContentLoaded：浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成
- load：浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等



## BOM

- BOM：浏览器对象模型（Browser Object Model）
  - 简称 **BOM**，由**浏览器提供的用于处理文档（document）之外的所有内容的其他对象**
  - 比如**navigator、location、history**等对象
- JavaScript有一个非常重要的运行环境就是浏览器
  - 而且浏览器本身又作为一个应用程序需要对其本身进行操作
  - 所以通常浏览器会有对应的对象模型（BOM，Browser Object Model）
  - 我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁
- BOM主要包括一下的对象模型
  - window：包括全局属性、方法，控制浏览器窗口相关的属性、方法
  - location：浏览器连接到的对象的位置（URL）
  - history：操作浏览器的历史
  - navigator：用户代理（浏览器）的状态和标识（很少用到）
  - screen：屏幕窗口信息（很少用到）



### window对象

- window对象在浏览器中可以从两个视角来看待
  - **视角一：全局对象**
    - 我们知道ECMAScript其实是有一个全局对象的，这个全局对象在**Node中是global**
    - 在浏览器中就是**window对象**
  - **视角二：浏览器窗口对象**
    - 作为**浏览器窗口时，提供了对浏览器操作的相关的API**
- 当然，这两个视角存在大量重叠的地方，所以不需要刻意去区分它们
  - 事实上对于**浏览器和Node中全局对象名称不一样的情况**，目前已经指定了对应的标准，称之为**globalThis**，并且大多数现代浏览器都支持它
  - 放在**window对象**上的所有属性都可以被访问
  - 使用**var定义的变量会被添加到window对象**中
  - window默认给我们提供了全局的函数和类：**setTimeout、Math、Date、Object**等



### window对象的作用

- 事实上window对象上肩负的重担是非常大的：
  - 第一：**包含大量的属性**，localStorage、console、location、history、screenX、scrollX等等（大概60+个属性）
  - 第二：**包含大量的方法**，alert、close、scrollTo、open等等（大概40+个方法）
  - 第三：**包含大量的事件**，focus、blur、load、hashchange等等（大概30+个事件）
  - 第四：包含从**EventTarget继承过来的方法**，addEventListener、removeEventListener、dispatchEvent方法
- 那么这些大量的属性、方法、事件在哪里查看呢？
  - MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window
- 查看MDN文档时，我们会发现有很多不同的符号，这里我解释一下是什么意思
  - **删除符号**：表示这个API已经废弃，不推荐继续使用了
  - **感叹符号**：表示这个API不属于W3C规范，某些浏览器有实现（所以兼容性的问题）
  - **实验符号**：该API是实验性特性，以后可能会修改，并且存在兼容性问题



### location对象常见的属性

- location对象用于表示window上当前链接到的URL信息
- 常见的属性有哪些呢？
  - href：当前window对应的超链接URL, 整个URL
  - protocol：当前的协议
  - host：主机地址
  - hostname：主机地址(不带端口)
  - port：端口
  - pathname：路径
  - search：查询字符串
  - hash：哈希值
  - username：URL中的username（很多浏览器已经禁用）
  - password：URL中的password（很多浏览器已经禁用）



### location对象常见的方法

- location有如下常用的方法
  - assign：赋值一个新的URL，并且跳转到该URL中
  - replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）
  - reload：重新加载页面，可以传入一个Boolean类型



### URLSearchParams

- URLSearchParams定义了一些实用的方法来处理 URL 的查询字符串

  - 可以将一个字符串转化成**URLSearchParams**类型
  - 也可以将一个**URLSearchParams**类型转成字符串

- URLSearchParams常见的方法有如下

  - get：获取搜索参数的值
  - set：设置一个搜索参数和值
  - append：追加一个搜索参数和值
  - has：判断是否有某个搜索参数
  - https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams

- 中文会使用**encodeURIComponent**和**decodeURIComponent**进行编码和解码

  ```js
  var urlSearchString = "?name=lwh&age=20&height=1.80";
  var searchParams = new URLSearchParams(urlSearchString);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  console.log(searchParams.get("height"));
  
  searchParams.append("address", "上海市");
  console.log(searchParams.get("address"));
  console.log(searchParams.toString());
  
  console.log(encodeURIComponent('哈哈哈'));
  console.log(decodeURIComponent('%E5%93%88%E5%93%88%E5%93%88'));
  ```



### history对象常见属性和方法

- history对象允许我们访问浏览器曾经的会话历史记录

- 有两个属性

  - length：会话中的记录条数
  - state：当前保留的状态值

- 有五个方法

  - back()：返回上一页，等价于history.go(-1)
  - forward()：前进下一页，等价于history.go(1)
  - go()：加载历史中的某一页
  - pushState()：打开一个指定的地址
  - replaceState()：打开一个新的地址，并且使用replace

- history和hash目前是vue、react等框架实现路由的底层原理

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <button>修改history</button>
      <button class="back">返回上一级</button>
  
      <script>
        // 1.history对应的属性
        console.log(history.length);
  
        // 2.修改history
        var btnEl = document.querySelector("button");
        var backBtnEl = document.querySelector(".back");
        btnEl.onclick = function () {
          history.pushState({ name: "nan", age: 18 }, "", "/nan");
          // history.replaceState({ name: "nan", age: 18 }, "", "/nan");
        };
  
        backBtnEl.onclick = function () {
          console.log(history.state);
          history.back();
          // history.forward()
          // history.go(-1)
        };
      </script>
    </body>
  </html>
  ```



### JSON的由来

* 在目前的开发中，JSON是一种非常重要的**数据格式**，它并不是**编程语言**，而是一种可以在服务器和客户端之间传输的数据格式
* JSON的全称是JavaScript Object Notation（JavaScript对象符号）
  - JSON是由**Douglas Crockford构想和设计的一种轻量级资料交换格式**，**算是JavaScript的一个子集**
  - 但是虽然**JSON被提出来的时候是主要应用JavaScript中**，但是目前已经**独立于编程语言，可以在各个编程语言**中使用
  - 很多编程语言都实现了**将JSON转成对应模型的方式**
* 其他的传输格式
  - **XML**：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很少在被使用了
  - **Protobuf**：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所以目前在前端使用的较少
* 目前JSON被使用的场景也越来越多
  - **网络数据的传输JSON数据**
  - **项目的某些配置文件**
  - **非关系型数据库（NoSQL）将json作为存储格式**



#### JSON基本语法

- JSON的顶层支持三种类型的值

  - 简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型

  ```json
  123
  ```

  - 对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值

  ```json
  {
    "name": "nan",
    "age": 18,
    "friend": {
      "name": "lwh"
    }
  }
  ```

  - 数组值：数组的值可以是简单值、对象值、数组值

  ```json
  ["123", 123]
  ```



#### JSON序列化

- 某些情况下我们希望将JavaScript中的复杂类型转化成JSON格式的字符串，这样方便对其进行处理

  - 比如我们希望将一个对象保存到localStorage中
  - 但是如果我们直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果

  ```js
  var obj = {
    name: "nan",
    age: 18,
    friend: {
      name: "?",
    },
  };
  
  // 1.将obj对象进行序列化
  var objJSONString = JSON.stringify(obj);
  console.log(objJSONString);
  
  // 2.将字符串转回到对象(反序列化)
  var newObj = JSON.parse(item);
  console.log(newObj);
  ```



#### JSON序列化方法

- 在ES5中引用了JSON全局对象，该对象有两个常用的方法
  - stringify方法：将JavaScript类型转成对应的JSON字符串
  - parse方法：解析JSON字符串，转回对应的JavaScript类型



#### stringify的参数replace

- JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串

  - 如果指定了一个 **replacer 函数**，则可以**选择性地替换值**
  - 如果**指定的 replacer 是数组**，则可**选择性地仅包含数组指定的属**
  - 如果对象本身包含toJSON方法，那么会直接使用toJSON方法的结果

  ```js
  var obj = {
    name: "nan",
    age: 18,
    friend: {
      name: "?",
    },
  };
  
  var objJSONString1 = JSON.stringify(obj, function (key, value) {
    if (key === "name") {
      return "南";
    }
    return value;
  });
  console.log(objJSONString1); // {"name":"南","age":18,"friend":{"name":"南"}}
  
  var objJSONString2 = JSON.stringify(obj, ["name", "age"]);
  console.log(objJSONString2); // {"name":"nan","age":18}
  
  var objJSONString3 = JSON.stringify(obj, null, 2)
  console.log(objJSONString3)
  
  var newObj = JSON.parse(objJSONString1, function (key, value) {
    if (key === "age") {
      return value + 2;
    }
    return value
  });
  console.log(newObj);
  ```



# JavaScript高级

## this

- this到底指向什么呢？我们先来看一个让人困惑的问题

  - 定义一个函数，我们采用两种不同的方式对它进行调用，它产生了两种不同的结果

- 这个的案例可以给我们什么样的启示呢？

  1. 函数在调用时，JavaScript会**默认给this绑定一个值**
  2. this的**绑定和定义的位置（编写的位置）没有关系**
  3. this的绑定和**调用方式**以及**调用的位置**有关系
  4. this是在**运行时被绑定**的

- 那么this到底是怎么样的绑定规则呢？

  - 绑定一：**默认绑定**
  - 绑定二：**隐式绑定**
  - 绑定三：**显式绑定**
  - 绑定四：**new绑定**

  ```js
  function foo(name) {
    console.log(this);
  }
  
  // 1.方式一: 直接调用
  foo(); // Window
  
  // 2.方式二: 通过对象调起
  var obj = { name: "obj" };
  obj.foo = foo;
  
  obj.foo(); // obj
  ```



### 规则一：默认绑定

- 什么情况下使用默认绑定呢？**独立函数调用**

  - 独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用

  ```js
  // "use strict"
  // 严格模式下, 独立调用的函数中的this指向的是undefined
  function foo() {
    console.log(this);
  }
  foo(); // window
  
  var obj = {
    name: "obj",
    bar: function () {
      console.log(this);
    },
  };
  var baz = obj.bar;
  baz(); // window
  
  function test(fn) {
    fn();
  }
  test(baz); // window
  ```



### 规则二：隐式绑定

- 另外一种比较常见的调用方式是**通过某个对象进行调用**的

  - 也就是它的调用位置中，是通过**某个对象发起的函数调用**

  ```js
  function foo() {
    console.log(this);
  }
  
  var obj = { foo: foo };
  
  obj.foo(); // {foo: ƒ}
  ```



### 规则三：显式绑定

- 隐式绑定有一个前提条件

  - 必须在**调用的对象内部有一个对函数的引用**（比如一个属性）
  - 如果没有这样的引用，在进行调用时，会报找不到该函数的错误
  - 正是通过这个引用，间接的将this绑定到了这个对象上

- 如果我们不希望在 **对象内部** 包含这个**函数的引用**，同时又希望在这个对象上**进行强制调用**，该怎么做呢？

- JavaScript所有的函数都可以使用**call和apply方法**

  - 第一个参数是相同的，要求传入一个对象
    - 这个对象的作用是什么呢？就是给this准备的
    - 在调用这个函数时，会将this绑定到这个传入的对象上
  - 后面的参数，**apply为数组**，**call为参数列表**

- 因为上面的过程，我们明确的绑定了this指向的对象，所以称之为**显式绑定**

  ```js
  var obj = { name: "obj" };
  
  function foo() {
    console.log(this);
  }
  
  foo.call(obj); // {name: 'obj'}
  foo.call("abc"); // String {'abc'}
  foo.call(123); // Number {123}
  ```



### call、apply、bind

- 通过call或者apply绑定this对象

  - 显式绑定后，this就会明确的指向绑定的对象

- 如果我们希望一个函数总是显式的绑定到一个对象上，可以怎么做呢？

  - 使用bind方法，bind() 方法创建一个新的**绑定函数（bound function，BF）**
  - 绑定函数是一个 **exotic function object（怪异函数对象，ECMAScript 2015 中的术语）**
  - 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用

  ```js
  // call/apply
  function foo(name, age, height, address) {
    console.log(this, name, age, height, address);
  }
  
  // apply
  // 第一个参数: 绑定this
  // 第二个参数: 传入额外的实参, 以数组的形式
  foo.apply("apply", ["张三", 18, 1.8]);
  
  // call
  // 第一个参数: 绑定this
  // 第二个参数: 参数列表, 后续的参数以多参数的形式传递, 会作为实参
  foo.call("call", "李四", 19, 1.9);
  
  var bar = foo.bind({ name: "bind-1" });
  bar();
  
  var bar = foo.bind({ name: "bind-2" }, "王五", 20, 2.0);
  bar("未知");
  ```



### 规则四：new绑定

- JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字

- 使用new关键字来调用函数是，会执行如下的操作

  1. 在内存中创建一个新的对象
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性
  3. 构造函数内部的this，会指向创建出来的新对象
  4. 执行函数的内部代码
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象

  ```js
  function foo() {
    this.name = "foo";
    console.log(this);
  }
  
  new foo(); // {name: 'foo'}
  ```



### 规则优先级

- 如果一个函数调用位置应用了多条规则，优先级谁更高呢？

  - new  >  bind  >  call、apply  >  隐式绑定  >  默认绑定
  - new 不可以和 call、apply 一起使用

  ```js
  function foo(name) {
    console.log(this);
  }
  
  // new foo.apply(); // foo.apply is not a constructor
  // new foo.call(); //  foo.call  is not a constructor
  
  // new 优先级高于 bind
  var bindFn1 = foo.bind("bind");
  new bindFn1("new"); // {}
  
  // bind 优先级高于 call、apply
  var bindFn2 = foo.bind("bind");
  bindFn2.apply("apply"); // String {'bind'}
  bindFn2.call("call"); //   String {'bind'}
  
  // 显式绑定(call、apply)的优先级高于隐式绑定
  var obj = { foo: foo };
  obj.foo.apply("apply"); // String {'apply'}
  obj.foo.call("call"); //   String {'call'}
  ```



### this规则之外

- 忽略显式绑定

  - 如果在显式绑定中，我们传入一个**null**或者**undefined**，那么这个显式绑定会被忽略，使用默认规则

  ```js
  function foo() {
  console.log(this);
  }
  
  foo.call("abc"); // String {'abc'}
  foo.call(null); // Window
  foo.call(undefined); // Window
  
  var bar = foo.bind(null);
  bar(); // Window
  ```

- 间接函数引用

  - 创建一个函数的**间接引用**，这种情况使用默认绑定规则
    - 赋值(obj2.foo = obj1.foo)的结果是foo函数
    - foo函数被直接调用，那么是默认绑定

  ```js
  var obj1 = {
    name: "obj1",
    foo: function () {
      console.log(this);
    },
  };
  var obj2 = {
    name: "obj2",
  }; // {}[]()
  
  (obj2.foo = obj1.foo)(); // Window
  ```



## 箭头函数

- 箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁

  - 箭头函数**不会绑定this、arguments**属性
  - 箭头函数**不能作为构造函数来使用**（不能和new一起来使用，会抛出错误）

  ```js
  var bar = () => {};
  new bar(); // bar is not a constructor
  
  // 1.编写箭头函数
  // - () 形参 (形参,形参)
  // - => 箭头
  // - {} 函数的执行体
  
  let foo = () => {}
  
  // 简写一: 如果参数只有一个, ()可以省略
  let fun = nun => {
      console.log(nun);
  };
  fun(10); // 10
  
  // 简写二: 如果函数执行体只有一行代码, 那么{}也可以省略
  // 并且它会默认将这行代码的执行结果作为返回值
  let fun1 = nun => nun;
  console.log(fun1(20)); // 20
  
  // 简写三: 如果一个箭头函数, 只有一行代码, 并且返回一个对象, 这个时候该如何编写
  // fun2 = nun => {age:nun} 这种写法是错误的
  // 在解析的时候,它不知道是解析成一个 对象 还是解析成 函数的执行体
  // fun2 = nun => ({age:nun}) 加一个小括号时它会把它当成一个整体,它就知道这个东西是一个对象
  let fun2 = (nun) => ({ age: nun });
  console.log(fun2(30)); // {age: 30}
  ```



### this指向

- 箭头函数是**不绑定this的**，它会去它的**上层作用域查找this** ，如果**有就使用这个this**，如果**没有就继续往上查找**，直到找到全局的this

  - arguments 也是这样

  ```js
  var name = "window";
  var obj1 = {
    name: "obj1",
    foo: function () {
      var bar = () => {
        console.log(this.name); // obj1
      };
      bar();
    },
  };
  obj1.foo();
  
  var obj2 = {
    name: "obj2",
    foo: () => {
      var bar = () => {
        console.log(this.name); // window
      };
      bar();
    },
  };
  obj2.foo();
  
  var obj3 = {
    name: "obj3",
    foo: function () {
      var bar = () => {
        console.log(this.name); // obj3
      };
      return bar;
    },
  };
  var fn = obj3.foo();
  fn.call("call");
  ```



## 网页被解析的过程

- 一个网页URL从输入到浏览器中，到显示经历过怎么样的解析过程呢？
  - 先进行域名解析，解析之后拿到对应的IP地址，通过IP地址去获取对应的服务器资源
  - 服务器返回index.html文件，解析时遇到link元素的CSS文件，就去下载对应的文件，JS也是如此



## 渲染页面的详细流程

- 更详细的解析过程如下

  1. 加载HTML、 解析HTML，生成DOM树
  2. 加载CSS、解析CSS，生成样式规则
  3. 将样式规则应用到DOM树上
  4. 生成渲染树，布局
  5. 绘制
  6. 显示

  ![](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=650)

- https://www.html5rocks.com/en/tutorials/internals/howbrowserswork



### 解析一：HTML解析过程

- 因为默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始

  - 解析HTML，会构建DOM Tree

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="./xxx.css" />
    </head>
    <body>
      <p>Hello,<span>web performance</span>students</p>
      <div>
        <img src="./xxx.png" />
      </div>
    </body>
  </html>
  ```

  ![](https://s3.bmp.ovh/imgs/2023/03/17/fb0bd56a0d886374.png)



### 解析二：生成CSS规则

- 在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件

  - 注意：下载CSS文件是不会影响DOM的解析的

- 浏览器下载完CSS文件后，就会对CSS文件进行解析，**解析出对应的规则树**

  - 我们可以称之为 **CSSOM**（CSS Object Model，CSS对象模型）

  ```css
  body { font-size: 16px; }
  p { font-weight: bold; }
  p span { display: none; }
  span { color: red; }
  img { float: right; }
  ```

  ![](https://s3.bmp.ovh/imgs/2023/03/17/76a067a93e082421.png)



### 解析三：构建Render Tree

- 当有了DOM Tree和CSSOM Tree后，就可以两个结合来构建**Render Tree**了

  ![](https://s3.bmp.ovh/imgs/2023/03/17/def4965feb5cfc72.png)

- 注意一：**link元素不会阻塞DOM Tree的构建过程**，但是**会阻塞Render Tree的构建过程**
  - 这是因为Render Tree在构建时，需要对应的CSSOM Tree
- 注意二：**Render Tree和DOM Tree并不是一一对应的关系**，比如对于display为none的元素，压根不会出现在render tree中



### 解析四：布局和绘制

- 第四步是在渲染树（Render Tree）上运行<b>布局（Layout）</b>以计算每个节点的尺寸、位置
  - 渲染树会表示显示哪些节点以及其他样式，但是**不会计算每个节点的尺寸、位置**等信息
  - 布局是确定**渲染树中所有节点的宽度、高度和位置信息**
- 第五步是将每个节点绘制（Paint）到屏幕上
  - 在绘制阶段，浏览器将布局阶段计算的**每个frame转为屏幕上实际的像素点**
  - 包括**将元素的可见部分进行绘制**，比如**文本、颜色、边框、阴影、替换元素（比如img）**



### 回流和重绘

- 理解回流reflow（也可以称之为重排）

  - 第一次确定节点的大小和位置，称之为布局（layout）
  - 之后对节点的大小、位置修改重新计算称之为回流

- 什么情况下引起回流呢？

  - 比如DOM结构发生改变（添加新的节点或者移除节点）
  - 比如改变了布局（修改了width、height、padding、font-size等值）
  - 比如窗口resize（修改了窗口的尺寸等）
  - 比如调用getComputedStyle方法获取尺寸、位置信息

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head> </head>
    <style>
      body,
      p {
        padding: 0;
        margin: 0;
      }
      .box {
        width: 100px;
        height: 100px;
        background: orange;
      }
    </style>
    
    <body>
      <div class="box"></div>
      <p>哈哈哈哈哈哈哈哈</p>
      <button class="modify">修改box</button>
      <button class="remove">删除box</button>
    </body>
    
    <script>
      var box = document.querySelector(".box");
      var remove = document.querySelector(".remove");
      var modify = document.querySelector(".modify");
  
      remove.onclick = function () {
        box.remove();
      };
  
      modify.onclick = function () {
        box.style.height = "300px";
      };
    </script>
  </html>
  ```

- 理解重绘repaint

  - 第一次渲染内容称之为绘制（paint）
  - 之后重新渲染称之为重绘

- 什么情况下会引起重绘呢？

  - 比如修改背景色、文字颜色、边框颜色、样式等

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head> </head>
    <style>
      body {
        padding: 0;
        margin: 0;
      }
      .box {
        width: 100px;
        height: 100px;
        background: orange;
      }
    </style>
  
    <body>
      <div class="box">哈哈哈哈</div>
      <button class="modify">修改box样式</button>
    </body>
  
    <script>
      var box = document.querySelector(".box");
      var modify = document.querySelector(".modify");
      modify.onclick = function () {
        box.style.background = "pink";
      };
    </script>
  </html>
  ```

- **回流一定会引起重绘**，所以回流是一件很消耗性能的事情
- 所以在开发中要尽量避免发生回流
  - 修改样式时**尽量一次性修改**
    - 比如通过cssText修改，比如通过添加class修改
  - 尽量**避免频繁的操作DOM**
    - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作
  - 尽量**避免通过getComputedStyle获取尺寸、位置**等信息
  - 对**某些元素使用position的absolute或者fixed**
    - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响



### 特殊解析 – composite合成

- 绘制的过程，可以将布局后的元素绘制到多个合成图层中

  - 这是浏览器的一种优化手段

- 默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中的

- 而一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用GPU来加速绘制

  - 因为**每个合成层都是单独渲染**的

- 那么哪些属性可以形成新的合成层呢？常见的一些属性

  - **3D transforms**
  - **video、canvas、iframe**
  - **opacity 动画转换时**
  - **position: fixed**
  - **will-change：** 一个实验性的属性，提前告诉浏览器元素可能发生哪些变化

  - **animation 或 transition 设置了opacity、transform**

- 分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用



## script元素和页面解析的关系

- 我们现在已经知道了页面的渲染过程，但是JavaScript在哪里呢？
  - 事实上，浏览器在解析HTML的过程中，遇到了**script元素是不能继续构建DOM树的**
  - 它会**停止继续构建，首先下载JavaScript代码，并且执行JavaScript的脚本**
  - 只有**等到JavaScript脚本执行结束后，才会继续解析HTML，构建DOM树**
- 为什么要这样做呢？
  - 这是**因为JavaScript的作用之一就是操作DOM，并且可以修改DOM**
  - 如果我们**等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能**
  - 所以会在**遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树**
- 但是这个也往往会带来新的问题，特别是现代页面开发中
  - 在目前的开发模式中（比如Vue、React），**脚本往往比HTML页面更 “重”，处理时间需要更长**
  - 所以会**造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到**
- 为了解决这个问题，script元素给我们提供了两个属性（attribute）：defer和async



### defer

- defer 属性告诉浏览器**不要等待脚本下载**，而**继续解析HTML，构建DOM Tree**

  - 脚本**会由浏览器来进行下载，但是不会阻塞DOM Tree**的构建过程
  - 如果脚本提前下载好了，它会**等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码**

- 所以DOMContentLoaded总是会等待defer中的代码先执行完成

  - 另外多个带defer的脚本是可以保持正确的顺序执行的
  - 从某种角度来说，defer可以提高页面的性能，并且推荐放到head元素中
  - 注意：defer仅适用于外部脚本，对于script默认内容会被忽略

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <!-- test.js
        console.log("test");
        var message = "test message";
        var boxEl = document.querySelector(".box");
        console.log(boxEl);
  	  -->
      <script src="./js/test.js" defer></script>
      <!-- demo.js
        console.log("demo");
        console.log(message);
  	  -->
      <script src="./js/demo.js" defer></script>
    </head>
  
    <body>
      <div id="app">app</div>
      <div class="box"></div>
      <div id="title">title</div>
      <div id="nav">nav</div>
      <div id="product">product</div>
  
      <script defer>
        window.addEventListener("DOMContentLoaded", () => {
          console.log("DOMContentLoaded");
        });
      </script>
  
      <h1>哈哈哈哈啊</h1>
      <!-- 执行流程:
  	 			test
  	 			<div class="box"></div>
       		demo
  			 	test message
  	 			DOMContentLoaded
  	  -->
    </body>
  </html>
  ```



### async

- async 特性与 defer 有些类似，它也能够让脚本不阻塞页面
- async 是让一个脚本完全独立的
  - 浏览器**不会因 async 脚本而阻塞**（与 defer 类似）
  - **async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本**
  - **async不会能保证在DOMContentLoaded之前或者之后执行**
- defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的
- async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的



## JavaScript的运行原理

### V8引擎的执行原理

- 我们来看一下官方对V8引擎的定义

  - V8是用**C ++编写**的Google开源**高性能JavaScript和WebAssembly引擎**，它用于**Chrome和Node.js**等
  - 它实现**ECMAScript**和**WebAssembly**，并在Windows 7或更高版本，macOS 10.12+和使用x64，IA-32，ARM或MIPS处理器的Linux系统上运行
  - **V8可以独立运行，也可以嵌入到任何C ++应用程序中**

  ```mermaid
  graph TD;
    JavaScript源代码-->解析-->抽象语法树-->lgnition-->字节码-->运行结果;
    lgnition--收集信息 比如类型信息-->TurboFan-->优化的机器码-->运行结果;
    优化的机器码--类型改变-->反优化-->字节码;
  ```



#### V8引擎的架构

- V8引擎本身的源码**非常复杂**，大概有超过**100w行C++代码**，通过了解它的架构，我们可以知道它是如何对JavaScript执行的
- **Parse**模块会将JavaScript代码转换成AST（抽象语法树），这是因为解释器并不直接认识JavaScript代码
  - 如果函数没有被调用，那么是不会被转换成AST的
  - Parse的V8官方文档：https://v8.dev/blog/scanner
- **Ignition**是一个解释器，会将AST转换成ByteCode（字节码）
  - 同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）
  - 如果函数只调用一次，Ignition会解释执行ByteCode
  - Ignition的V8官方文档：https://v8.dev/blog/ignition-interpreter
- **TurboFan**是一个编译器，可以将字节码编译为CPU可以直接执行的机器码
  - 如果一个函数被多次调用，那么就会被标记为**热点函数**，那么就会经过**TurboFan转换成优化的机器码**，**提高代码的执行性能**
  - 但是，**机器码实际上也会被还原为ByteCode**，这是因为如果后续执行函数的过程中，**类型发生了变化（比如sum函数原来执**
    **行的是number类型，后来执行变成了string类型）**，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码
  - TurboFan的V8官方文档：https://v8.dev/blog/turbofan-jit



#### V8引擎的解析图（官方）

- 词法分析（英文lexical analysis）

  - 将字符序列转换成token序列的过程
  - token是**记号化** （tokenization）的缩写
  - **词法分析器**（lexical analyzer，简称lexer），也叫**扫描器**（scanner）

- 语法分析（英语：syntactic analysis，也叫 parsing）

  - 语法分析器也可以称之为parser

  ![](https://v8.dev/_img/scanner/overview.svg)



### 版本说明

- 在ECMA早期的版本中（ECMAScript3），代码的执行流程的术语和ECMAScript5以及之后的术语会有所区别
  - 目前网上大多数流行的说法都是**基于ECMAScript3版本的解析**，并且在**面试时**问到的大多数都是ECMAScript3的版本内容
  - 但是ECMAScript3终将过去， **ECMAScript5必然会成为主流**，所以最好也理解ECMAScript5甚至包括ECMAScript6以及更好版本的内容
  - 事实上在TC39的最新描述中，和ECMAScript5之后的版本又出现了一定的差异
- 那么我们按照如下顺序学习
  - 通过ECMAScript3中的概念学习**JavaScript执行原理、作用域、作用域链、闭包**等概念
  - 通过ECMAScript5中的概念学习**块级作用域、let、const**等概念
- 事实上，它们只是在对某些**概念上的描述不太一样**，在**整体思路上都是一致**的



### JavaScript的执行过程

#### 初始化全局对象

- js引擎会在**执行代码之前**，会在**堆内存中创建一个全局对象 Global Object（GO）**
  - 该对象**所有的作用域**都可以访问
  - 里面会包含**Date、Array、String、Number、setTimeout、setInterval**等等
  - 其中还有一个**window属性**指向自己



#### 执行上下文

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**
- 那么现在它要执行谁呢？执行的是**全局的代码块**
  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**
  - GEC会 **被放入到ECS中** 执行
- GEC被放入到ECS中里面包含两部分内容<b>（重要）</b>
  - 第一部分：在代码执行前，会在**parser转成AST的过程**中，会将**全局定义的变量、函数**等加入到**Global Object**中，但是**并不会赋值**
    - 这个过程也称之为**变量的作用域提升（hoisting）**
  - 第二部分：在代码执行中，**对变量赋值，或者执行其他的函数**



#### 认识VO对象

- 每一个执行上下文会关联一个**VO（Variable Object，变量对象）**，**变量和函数声明**会被添加到这个VO对象中
- 当全局代码被执行的时候，VO就是GO对象了
  - **创建**和**初始化作用域链**以包含**全局对象**
  - 使用**全局对象**作为**变量对象**（VO: GO）
  - this值是**全局对象**



#### 全局代码执行过程

- 下面这段代码在内存中是怎样表现的呢？

  ```js
  var message = "Global Message";
  
  function foo() {
    var message = "Foo Message";
    console.log("foo function");
  }
  
  var num1 = 10;
  var num2 = 20;
  var result = num1 + num2;
  ```
  
  ![全局代码执行过程](https://s3.bmp.ovh/imgs/2023/03/18/086c0a11a7863b98.png)



#### 函数代码执行过程

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，并且压入到**ECStack**中

- 因为每个执行上下文都会关联一个VO，那么函数执行上下文关联的VO是什么呢？

  - 当进入一个函数执行上下文时，会创建一个**AO对象（Activation Object）**
  - 这个AO对象会**使用arguments作为初始化**，并且**初始值是传入的参数**
  - 这个**AO对象会作为执行上下文的VO来存放变量的初始化**

  ```js
  var message = "Global Message";
  function foo(num) {
    var message = "Foo Message";
    console.log("foo function");
  }
  
  foo(123);
  var num1 = 10;
  var num2 = 20;
  var result = num1 + num2;
  ```

  ![函数代码执行过程](https://s3.bmp.ovh/imgs/2023/03/18/abc6af970ee2d35b.png)



#### 作用域和作用域链

- **作用域**是指**变量**和**函数**的**可访问范围**
- **作用域链**是指在查找一个变量时，会在**当前的作用域查找**，如果**有就使用这个变量**，如果**没有就继续往上层作用域查找**，直到找到**全局的作用域**，如果**全局作用域中依然没有找到**，则会报错，这个**查找的过程就叫做作用域链**

- 当进入到一个执行上下文时，执行上下文也会关联一个作用域链（Scope Chain）

  - **作用域链是一个对象列表**，用于变量标识符的求值
  - 当**函数对象被创建**时，这个**作用域链也会跟着创建**，并且根据代码类型，添加一系列的对象

  ```js
  var message = "Global Message";
  
  function foo() {
    var name = "foo";
    function bar() {
      console.log(name);
    }
    return bar;
  }
  
  var bar = foo();
  bar();
  ```

  ![作用域和作用域链](https://s3.bmp.ovh/imgs/2023/03/18/ceda549f1e34282e.png)



## JavaScript的内存管理

### 认识内存管理

- 不管什么样的编程语言，在**代码的执行过程中都是需要给它分配内存**的，不同的是**某些编程语言**需要我们**自己手动的管理内存**，**某些编程语言**会可以**自动帮助我们管理内存**
- 不管以什么样的方式来管理内存，**内存的管理都会有如下的生命周期**
  - 第一步：**分配申请你需要的内存**（申请）
  - 第二步：**使用分配的内存**（存放一些东西，比如对象等）
  - 第三步：**不需要使用时，对其进行释放**
- 不同的编程语言对于第一步和第三步会有不同的实现
  - **手动管理内存**：比如C、C++，包括早期的OC，都是需要手动来管理内存的申请和释放的（malloc和free函数）
  - **自动管理内存**：比如Java、JavaScript、Python、Swift、Dart等，它们有自动帮助我们管理内存
- 对于开发者来说，JavaScript 的内存管理是自动的、无形的
  - 我们创建的**原始值、对象、函数……这一切都会占用内存**
  - 但是我们**并不需要手动来对它们进行管理，JavaScript引擎**会帮助我们处理好它



### JavaScript的内存管理

- JavaScript会在**定义数据**时为我们分配内存

- 但是内存分配方式是一样的吗？

  - JS对于**原始数据类型内存的分配**会在执行时，直接在栈空间进行分配

  - JS对于**复杂数据类型内存的分配**会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用



### JavaScript的垃圾回收

- 因为**内存的大小是有限**的，所以当**内存不再需要的时候**，我们需要**对其进行释放**，以便腾出**更多的内存空间**
- 在**手动管理内存的语言**中，我们需要通过**一些方式自己来释放不再需要的内存，比如free函数**
  - 但是这种管理的方式其实**非常的低效**，影响我们**编写逻辑的代码的效率**
  - 并且这种方式对开发者的要求也很高，并且**一不小心就会产生内存泄露**
- 所以大部分**现代的编程语言都是有自己的垃圾回收机制**
  - 垃圾回收的英文是**Garbage Collection**，简称**GC**
  - 对于**那些不再使用的对象**，我们都称之为是**垃圾**，它需要被**回收**，以释放更多的内存空间
  - 而我们的语言运行环境，比如Java的运行环境JVM，JavaScript的运行环境js引擎都会内存 **垃圾回收器**
  - **垃圾回收器**我们也会简称为**GC**，所以在很多地方你看到GC其实指的是垃圾回收器
- 但是这里又出现了另外一个很关键的问题：**GC怎么知道哪些对象是不再使用的呢？**
  - 这里就要用到**GC的实现以及对应的算法**



### 常见的GC算法 – 引用计数

- 引用计数（Reference counting）

  - 当**一个对象有一个引用指向它**时，那么**这个对象的引用就+1**
  - 当**一个对象的引用为0**时，这个对象就**可以被销毁掉**

- 这个算法有一个很大的弊端就是会产生循环引用

  ```js
  var obj1 = {}
  var boj2 = {}
  
  obj1.info = obj2
  obj2.info = obj1
  ```



### 常见的GC算法 – 标记清除

- 标记清除（mark-Sweep）

  - 标记清除的核心思路是**可达性（Reachability）**

  - 这个算法是设置一个**根对象（root object），垃圾回收器**会定期**从这个根**开始，找所有从根开始**有引用到的对象**，对于哪些**没有引用到的对象，就认为是不可用的对象**

  - 这个算法**可以很好的解决循环引用**的问题

  ```mermaid
  graph TD;
    A-->B-->C-->D;
    A-->E-->C;
    E-->F;
    A-->G-->F;
  
    M-->N;
    N-->M;
  ```



### 其他算法优化补充

- JS引擎比较广泛的采用的就是可达性中的标记清除算法，当然类似于V8引擎为了**进行更好的优化**，它在算法的实现细节上也会结合一些其他的算法
  - 标记整理（Mark-Compact） 和  “标记－清除”  相似
    - 不同的是，回收期间同时会将保留的存储对象**搬运汇集到连续的内存空间，从而整合空闲空间，避免内存碎片化**
  - 分代收集（Generational collection）—— 对象被分成两组：**“新的” 和 “旧的”**
    - 许多对象出现，完成它们的工作并很快死去，它们可以很快被清理
    - 那些长期存活的对象会变得 **“老旧”**，而且**被检查的频次也会减少**
  - 增量收集（Incremental collection）
    - 如果有许多对象，并且我们**试图一次遍历并标记整个对象集，则可能需要一些时间，并在执行过程中带来明显的延迟**
    - 所以引擎试图**将垃圾收集工作分成几部分来做**，然后**将这几部分会逐一进行处理，这样会有许多微小的延迟而不是一个大的延迟**
  - 闲时收集（Idle-time collection）
    - 垃圾收集器**只会在 CPU 空闲时尝试运行，以减少可能对代码执行**的影响



## 闭包

### 闭包的定义

- 这里先来看一下闭包的定义，分成两个：**在计算机科学中和在JavaScript**中

- 在计算机科学中对闭包的定义（维基百科）

  - 闭包（英语：Closure），又称**词法闭包**（Lexical Closure）或**函数闭包**（function closures）
  - 是在支持 **头等函数** 的编程语言中，实现词法绑定的一种技术
  - 闭包在实现上是一个**结构体**，它存储了**一个函数和一个关联的环境**
  - 闭包跟函数最大的区别在于，当捕捉闭包的时候，它的 **自由变量** 会在捕捉时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行

- 闭包的概念出现于60年代，最早实现闭包的程序是 **Scheme**，那么我们就可以理解为什么JavaScript中有闭包

  - 因为JavaScript中有大量的设计是来源于Scheme的

- 我们再来看一下MDN对JavaScript闭包的解释

  - 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来

- 那么我的理解和总结

  - 一个普通的函数，如果**它可以访问外层作用域的自由变量**，那么这个**函数和周围环境**就是一个**闭包**
  - 从广义的角度来说：**JavaScript中的函数都是闭包**
  - 从狭义的角度来说：JavaScript中一个函数，**如果访问了外层作用域的变量，那么它是一个闭包**

  - 闭包由两部分组成：**函数**+可以访问的**自由变量**



### 没有闭包的局限性

- 如果JavaScript中没有闭包，那么一个函数想使用全局变量，只能在调用时当做参数传进来

  ```js
  var name = "张三";
  var age = 18;
  
  function foo(name, age, num1, num2) {
    var message = "Hello World";
    console.log(message, name, age, num1, num2);
  }
  
  foo(name, age, 20, 30);
  ```



### 闭包的访问过程

- 闭包在内存中的表现

  ```js
  function createAdder(count) {
    function adder(num) {
      return count + num;
    }
    return adder;
  }
  
  var adder5 = createAdder(5);
  console.log(adder5(10));
  ```
  ![闭包的访问过程-1](https://s3.bmp.ovh/imgs/2023/03/18/3489b84ccbac8a9b.png)

  ![闭包的访问过程-2](https://s3.bmp.ovh/imgs/2023/03/18/39cbcbbf8cbf1d82.png)

  ![闭包的访问过程-3](https://s3.bmp.ovh/imgs/2023/03/18/a0a5698b80a9024a.png)



### 闭包的内存泄漏

- 那么我们为什么经常会说闭包是有内存泄露的呢？
  - 在上面的案例中，如果后续我们不再使用adder5函数了，那么该函数对象应该要被销毁掉，并且其引用着的父作用域AO也应该被销毁掉
  - 但是目前因为在全局作用域下adder5变量对0x500的函数对象有引用，而0x500的作用域中AO（0x400）有引用，所以最终会造成这些内存都是无法被释放的
  - 所以我们经常说的闭包会造成内存泄露，其实就是刚才的引用链中的所有对象都是无法释放的
- 那么，怎么解决这个问题呢？
  - 因为当将adder5设置为null时，就不再对函数对象0x500有引用，那么对应的AO对象0x400也就不可达了
  - 在GC的下一次检测中，它们就会被销毁掉



### AO不使用的属性优化

- 我们来研究一个问题：AO对象不会被销毁时，是否里面的所有属性都不会被释放？

  - 下面这段代码中name属于闭包的父作用域里面的变量
  - 我们知道形成闭包之后count一定不会被销毁掉，那么name是否会被销毁掉呢？
  - 这里我打上了断点，我们可以在浏览器上看看结果

  ```js
  function makeAdder(count) {
    var name = "foo";
    return function bar(num) {
      debugger;
      return count + num
    }
  }
  
  var add10 = makeAdder(10);
  console.log(add10(5))
  console.log(add10(8))
  ```



## 函数增强

### 函数对象的属性

- 我们知道JavaScript中函数也是一个对象，那么对象中就可以有属性和方法

  - name：一个函数的名称我们可以通过name来访问

  - length：用于返回函数参数的个数

  - 注意：**剩余参数**是不参与参数的个数的

  ```js
  function foo(a, b, c) {}
  var bar = function (m, n, ...others) {};
  
  // 自定义属性
  foo.message = "Hello Foo";
  console.log(foo.message); // Hello Foo
  
  // name属性
  console.log(foo.name); // foo
  console.log(bar.name); // bar
  
  // length属性
  console.log(foo.length); // 3
  console.log(bar.length); // 2
  ```



### 函数的剩余参数

- ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中

  - 如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组

- 那么剩余参数和arguments有什么区别呢？

  - 剩余参数只包含那些**没有对应形参的实参**，而 **arguments 对象包含了传给函数的所有实参**

  - **arguments对象不是一个真正的数组**，而**剩余参数是一个真正的数组**，可以进行数组的所有操作

  - arguments是**早期的ECMAScript**中为了方便去获取所有的参数提供的一个数据结构，而rest参数是**ES6中提供**并且希望以此来替代arguments的

- **剩余参数必须放到最后一个位置，否则会报错**

  ```js
  // 注意事项: 剩余参数需要写到其他的参数最后
  function foo(num1, num2, ...otherNums) {
    console.log(otherNums);
  }
  foo(20, 30, 40, 50, 60);
  
  function bar(...args) {
    console.log(args);
  }
  bar("abc", 100, "cba", 200);
  ```



### 函数的默认参数

- 在ES6之前，我们编写的函数参数是没有默认值的，所以我们在编写函数时，如果有下面的需求

  - 传入了参数，那么使用传入的参数
  - 没有传入参数，那么使用一个默认值

- 而在ES6中，我们允许给函数一个默认值

  ```js
  // 注意: 默认参数是不会对null进行处理的
  function foo(arg1 = "我是默认值") {
    // 1.两种写法不严谨
    // 默认值写法一:
    // arg1 = arg1 ? arg1: "我是默认值"
  
    // 默认值写法二:
    // arg1 = arg1 || "我是默认值"
  
    // 2.严谨的写法
    // 三元运算符
    // arg1 = (arg1 === undefined || arg1 === null) ? "我是默认值": arg1
  
    // 3.简便的写法: 默认参数
    console.log(arg1);
  }
  
  foo(123);
  foo(); // 我是默认值
  foo(0);
  foo("");
  foo(false);
  foo(null);
  foo(undefined); // 我是默认值
  ```

- 参数的默认值我们通常会将其**放到最后**（在很多语言中，如果不放到最后其实会报错的）

  - 但是JavaScript**允许不将其放到最后，但是意味着还是会按照顺序来匹配**

- 另外默认值会改变函数的length的个数，默认值以及后面的参数都不计算在length之内了

  ```js
  // 1.注意一: 有默认参数的形参尽量写到后面
  // 2.有默认参数的形参, 是不会计算在length之内(并且后面所有的参数都不会计算在length之内)
  // 3.剩余参数也是放到后面(默认参数放到剩余参数的前面)
  function foo(age, name = "ovo", ...args) {
    console.log(name, age, args);
  }
  
  foo(18, "abc", "cba", "nba");
  
  console.log(foo.length); // 1
  ```



## arguments

- arguments 是一个对应于**传递给函数的参数**的**类数组(array-like)对象**

- array-like 意味着它不是一个数组类型，而是一个对象类型

  - 但是它却拥有数组的一些特性，比如说length，比如可以通过index索引来访问
  - 但是它却没有数组的一些方法，比如filter、map等

  ```js
  function foo(m, n) {
    console.log(arguments); // Arguments(4) [10, 20, 30, 40]
    console.log(arguments.length); // 4
    console.log(arguments[0]); // 10
    console.log(arguments[1]); // 20
  
    // var evenNums = arguments.filter(item => item > 10)
    // console.log(eventNums) // arguments.filter is not a function
  }
  
  foo(10, 20, 30, 40);
  ```



### arguments转Array

- 在开发中，我们经常需要将arguments转成Array，以便使用数组的一些特性

  - 常见的转化方式如下

- 方式一

  - 遍历 arguments，添加到一个新数组中

- 方式二

  - 调用数组slice函数并改变this指向

- 方式三

  - Array.from()
  - […arguments]

  ```js
  function foo(m, n) {
    // 方式一
    var newArguments = []
    for (var arg of arguments) {
      newArguments.push(arg)
    }
    console.log(newArguments)
    // 方式二
    console.log([].slice.apply(arguments))
    console.log(Array.prototype.slice.apply(arguments))
    // 方式三
    console.log(Array.from(arguments))
    console.log([...arguments])
  }
  
  foo(10, 20, 30, 40);
  ```



## JavaScript纯函数

- **函数式编程**中有一个非常重要的概念叫**纯函数**，JavaScript符合**函数式编程的范式**，所以也**有纯函数的概念**

  - 在**react开发中纯函数是被多次提及**的
  - 比如**react中组件就被要求像是一个纯函数**（为什么是像，因为还有class组件），**redux中有一个reducer的概念**，也是要求必须是一个纯函数
  - 所以**掌握纯函数对于理解很多框架的设计**是非常有帮助的

- 纯函数的维基百科定义

  - 在程序设计中，若一个函数**符合以下条件**，那么这个函数被称为纯函数
  - 此函数**在相同的输入值时**，需要**产生相同的输出**
  - 函数的**输出和输入值以外的其他隐藏信息或状态无关**，也和**由I/O设备产生的外部输出**无关
  - 该函数**不能有语义上可观察的函数副作用**，诸如  **“触发事件”**，**使输出设备输出，或更改输出值以外物件的内容**等

- 当然上面的定义会过于的晦涩，所以我简单总结一下

  - **确定的输入，一定会产生确定的输出**
  - **函数在执行过程中，不能产生副作用**

  ```js
  // 不是一个纯函数
  var address = "北京市";
  var obj = { name: "张三", age: 20, message: "哈哈哈哈" };
  function printInfo(info) {
    console.log(info.name, info.age, info.message);
    info.flag = "已经打印结束";
    address = info.address;
  }
  printInfo(obj);
  
  var names = ["abc", "cba", "nba", "mba"];
  
  // 1.slice: 纯函数
  var newNames = [].slice.apply(names, [1, 3]);
  console.log(names);
  
  // 2.splice: 不是纯函数
  names.splice(2, 2);
  console.log(names);
  ```



### 副作用概念的理解

- 那么这里又有一个概念，叫做副作用，什么又是**副作用**呢？
  - <b>副作用（side effect）</b>其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用
  - 在计算机科学中，也引用了副作用的概念，表示**在执行一个函数时**，除了**返回函数值**之外，还对**调用函数产生了附加的影响**，比如**修改了全局变量，修改参数或者改变外部的存储**

- 纯函数在执行的过程中就是不能产生这样的副作用
  - 副作用往往是产生**bug的  “温床”**



### 纯函数的作用和优势

- 为什么纯函数在函数式编程中非常重要呢？

  - 因为你可以**安心的编写**和**安心的使用**

  - 你在**写的时候**保证了函数的纯度，只是**单纯实现自己的业务逻辑**即可，**不需要关心传入的内容**是如何获得的或者**依赖其他的外部变量**是否已经发生了修改

  - 你在**用的时候**，你确定**你的输入内容不会被任意篡改**，并且**自己确定的输入**，一定会**有确定的输出**

- React中就要求我们无论是**函数还是class声明一个组件**，这个组件都必须**像纯函数一样**，**保护它们的props不被修改**



## 柯里化概念的理解

- **柯里化**也是属于**函数式编程**里面一个非常重要的概念

  - 是一种关于函数的高阶技术
  - 它不仅被用于 JavaScript，还被用于其他编程语言

- 我们先来看一下维基百科的解释

  - 在计算机科学中，**柯里化**（英语：Currying），又译为**卡瑞化**或**加里化**
  - 是把接收**多个参数的函数**，变成**接受一个单一参数**（最初函数的第一个参数）的函数，并且**返回接受余下的参数**，而且**返回结果的新函数**的技术
  - 柯里化声称 **“如果你固定某些参数，你将得到接受余下参数的一个函数”**

- 维基百科的结束非常的抽象，我们这里做一个总结

  - 只**传递给函数一部分参数来调用它**，让**它返回一个函数去处理剩余的参数**
  - **这个过程就称之为柯里化**

- 柯里化是一种函数的转换，将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)

  - 柯里化不会调用函数。它只是对函数进行转换。

  ```js
  function foo1(x, y, z) {
    console.log(x + y + z);
  }
  foo1(10, 20, 30);
  
  // 柯里化函数
  function foo2(x) {
    return function (y) {
      return function (z) {
        console.log(x + y + z);
      };
    };
  }
  foo2(10)(20)(30);
  
  // 另外一种写法: 箭头函数的写法
  var foo3 = (x) => (y) => (z) => {
    console.log(x + y + z);
  };
  foo3(10)(20)(30);
  ```

- 自动转化柯里化过程

  ```js
  function foo(x, y, z) {
    console.log(x + y + z)
  }
  
  function hyCurrying(fn) {
    function curryFn(...args) {
      // 两类操作:
      // 第一类操作: 继续返回一个新的函数, 继续接受参数
      // 第二类操作: 直接执行fn的函数
      if (args.length >= fn.length) { // 执行第二类
          // return fn(...args)
          return fn.apply(this, args)
      } else { // 执行第一类
        return function(...newArgs) {
           // return curryFn(...args.concat(newArgs))
           return curryFn.apply(this, args.concat(newArgs))
        }
      }
    }
    return curryFn
  }
  // 对其他的函数进行柯里化
  var fooCurry = hyCurrying(foo)
  fooCurry(10)(20)(30) // 60
  fooCurry(55, 12, 56) // 123
  ```



### 函数的职责单一

- 那么为什么需要有柯里化呢？

  - 在函数式编程中，我们其实往往希望**一个函数处理的问题尽可能的单一**，而**不是将一大堆的处理过程交给一个函数来处理**
  - 那么**我们是否就可以将每次传入的参数在单一的函数中进行处理**，处理完后在**下一个函数中再使用处理后的结果**

- 比如下面的案例我们进行一个修改：传入的函数需要分别被进行如下处理

  - 第一个参数 + 2
  - 第二个参数 * 2
  - 第三个参数 / 2

  ```js
  function foo(x) {
    x = x + 2; // 12
    return function (y) {
      y = y * 2; // 40
      return function (z) {
        z = z / 2; // 15
        console.log(x + y + z);
      };
    };
  }
  foo(10)(20)(30);
  ```



### 函数的参数复用

- 另外一个使用柯里化的场景是可以帮助我们可以**复用参数逻辑**

  - makeAdder函数要求我们传入一个num（并且如果我们需要的话，可以在这里对num进行一些修改）
  - 在之后使用返回的函数时，我们不需要再继续传入num了

  ```js
  function makeAdder(num) {
    return function (count) {
      return num + count;
    };
  }
  
  var add5 = makeAdder(5);
  console.log(add5(10));
  console.log(add5(100));
  
  var add10 = makeAdder(10);
  console.log(add10(10));
  console.log(add10(100));
  ```



## 组合函数概念的理解

- **组合（Compose）函数**是在JavaScript开发过程中一种对**函数的使用技巧、模式**

  - 比如我们现在需要对**某一个数据**进行**函数的调用**，执行**两个函数fn1和fn2**，这**两个函数是依次执行**的
  - 那么如果每次我们都需要**进行两个函数的调用，操作上就会显得重复**
  - 那么**是否可以将这两个函数组合起来，自动依次调用**呢？
  - 这个过程就是**对函数的组合**，我们称之为 **组合函数（Compose Function）**

  ```js
  function double(num) {
    return num * 2;
  }
  
  function pow(num) {
    return num ** 2;
  }
  console.log(pow(double(11)));
  console.log(pow(double(22)));
  console.log(pow(double(33)));
  
  // 将上面的两个函数组合在一起, 生成一个新的函数
  function compose(fn1, fn2) {
    return function (x) {
      return fn2(fn1(x));
    };
  }
  
  var calcFn = compose(double, pow);
  console.log(calcFn(11));
  console.log(calcFn(22));
  console.log(calcFn(33));
  ```

- 组合函数的封装

  ```js
  function double(num) {
    return num * 2;
  }
  
  function pow(num) {
    return num ** 2;
  }
  
  // 封装的函数: 你传入多个函数, 我自动的将多个函数组合在一起挨个调用
  function composeFn(...fns) {
    // 1.边界判断(edge case)
    var length = fns.length;
    if (length <= 0) return;
    for (var i = 0; i < length; i++) {
      var fn = fns[i];
      if (typeof fn !== "function") {
        throw new Error(`index position ${i} must be function`);
      }
    }
  
    // 2.返回的新函数
    return function (...args) {
      var result = fns[0].apply(this, args);
      for (var i = 1; i < length; i++) {
        var fn = fns[i];
        result = fn.apply(this, [result]);
      }
      return result;
    };
  }
  
  var newFn = composeFn(double, pow, console.log);
  newFn(100);
  newFn(55);
  newFn(22);
  ```



## with语句的使用

- **with语句** 扩展一个语句的作用域链

- 不建议使用with语句，因为它可能是混淆错误和兼容性问题的根源

  ```js
  var obj = {
    message: "Hello World",
    age: 18,
  };
  
  with (obj) {
    console.log(message);
    console.log(age);
  }
  ```



## eval函数

- 内建函数 eval 允许执行一个代码字符串

  - **eval是一个特殊的函数**，它可以**将传入的字符串当做JavaScript代码来运行**
  - **eval会将最后一句执行语句的结果，作为返回值**

- 不建议在开发中使用eval

  - eval代码的**可读性非常的差**（代码的可读性是高质量代码的重要原则）
  - eval是**一个字符串**，那么有可能在**执行的过程中被刻意篡改，那么可能会造成被攻击的风险**
  - eval的执行**必须经过JavaScript解释器，不能被JavaScript引擎优化**

  ```js
  var message = "Hello World"
  var codeString = `var name = "张三"; console.log(name); console.log(message); "O(∩_∩)O哈哈~";`
  var result = eval(codeString)
  console.log(result)
  ```



## 认识严格模式

- JavaScript历史的局限性
  - 长久以来，**JavaScript 不断向前发展且并未带来任何兼容性**问题
  - 新的特性被加入，旧的功能也没有改变，这么做**有利于兼容旧代码**
  - 但缺点是 JavaScript 创造者的任何错误或不完善的决定也将永远被保留在 JavaScript 语言中
- 在ECMAScript5标准中，JavaScript提出了**严格模式的概念（Strict Mode）**
  - 严格模式很好理解，是一种**具有限制性的JavaScript模式**，从而使**代码隐式的脱离了  ”懒散（sloppy）模式“**
  - **支持严格模式的浏览器**在检测到代码中有严格模式时，会**以更加严格的方式对代码进行检测和执行**
- 严格模式对正常的JavaScript语义进行了一些限制
  - 严格模式通过 **抛出错误** 来消除一些原有的 **静默（silent）错误**
  - 严格模式让**JS引擎在执行代码时可以进行更多的优化**（不需要对一些特殊的语法进行处理）
  - 严格模式禁用了**在ECMAScript未来版本中可能会定义的一些语法**



### 开启严格模式

- 那么如何开启严格模式呢？严格模式支持粒度话的迁移

  - 可以支持**在js文件中**开启严格模式
  - 也支持对**某一个函数**开启严格模式

- 严格模式通过在文件或者函数开头使用 use strict 来开启

- 没有类似于 "no use strict" 这样的指令可以使程序返回默认模式

  - 现代 JavaScript 支持**class和module**，它们会**自动启用 use strict**

  ```js
  // 给整个script开启严格模式
  "use strict";
  
  // 给一个函数开启严格模式
  function foo() {
    "use strict";
  }
  
  class Person {}
  ```



### 严格模式限制

- 这里我们来说几个严格模式下的严格语法限制

  - JavaScript被设计为新手开发者更容易上手，所以有时候本来错误语法，被认为也是可以正常被解析的
  - 但是这种方式可能给带来留下来安全隐患
  - 在严格模式下，这种失误就会被当做错误，以便可以快速的发现和修正

- **无法意外的创建全局变量**

- **严格模式会使引起静默错误（silently fail，注：不报错也没有任何效果）的赋值操作抛出异常**

- **严格模式下试图删除不可删除的属性**

- **严格模式不允许函数的参数有相同的名称**

- **不允许0的八进制语法**

-  **在严格模式下，不允许使用with**

- **在严格模式下，eval函数不能为上层创建变量**

- **严格模式下，this绑定不会默认转成对象**

  ```js
  "use strict";
  // 1.不会意外创建全局变量
  // function foo() {
  //   message = "Hello World"
  // }
  
  // foo()
  // console.log(message)
  
  // 2.发现静默错误
  var obj = { name: "张三" };
  
  Object.defineProperty(obj, "name", {
    writable: false,
    configurable: false,
  });
  
  // obj.name = "李四"
  console.log(obj.name);
  
  // delete obj.name
  console.log(obj);
  
  // 3.参数名称不能相同
  // function foo(num, num) {}
  
  // 4.不能以0开头
  // console.log(0o123)
  
  // 5.eval函数不能为上层创建变量
  // eval(`var message = "Hello World"`)
  // console.log(message)
  
  // 6.严格模式下, this是不会转成对象类型的
  // 独立函数执行默认模式下, 绑定window对象
  // 在严格模式下, 不绑定全局对象而是undefined
  function foo() {
    console.log(this);
  }
  foo.apply("abc");
  foo.apply(123);
  foo.apply(undefined);
  foo.apply(null);
  
  foo();
  ```



## 对象属性操作的控制

- 在前面我们的属性都是**直接定义在对象内部**，或者**直接添加到对象内部**的
  - 但是这样来做的时候我们就**不能对这个属性进行一些限制**，比如**这个属性是否是可以通过delete删除的**？这个属性**是否在forin遍历的时候被遍历出来**呢？
- 如果我们想要对**一个属性进行比较精准的操作控制**，那么我们就可以使用**属性描述符**
  - 通过属性描述符**可以精准的添加或修改对象的属性**
  - 属性描述符需要使用 **Object.defineProperty** 来对属性进行添加或者修改



### Object.defineProperty

- Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
  - 可接收三个参数
    - obj要定义属性的对象
    - prop要定义或修改的属性的名称或 Symbol
    - descriptor要定义或修改的属性描述符
  - 返回值
    - 被传递给函数的对象



### 属性描述符分类

- 属性描述符的类型有两种

  - **数据属性**（Data Properties）描述符（Descriptor）
  - **存取属性**（Accessor访问器 Properties）描述符（Descriptor）

  |            | configurable | enumerable | writable | value  | get    | set    |
  | ---------- | ------------ | ---------- | -------- | ------ | ------ | ------ |
  | 数据描述符 | 可以         | 可以       | 可以     | 可以   | 不可以 | 不可以 |
  | 存取描述符 | 可以         | 可以       | 不可以   | 不可以 | 可以   | 可以   |



### 数据属性描述符

- 数据属性描述符有如下四个特性

- configurable：表示属性是否可以通过**delete删除属性**，是否可以**修改它的特性**，或者是否可以**将它修改为存取属性描述符**

  - 当我们直接在一个对象上定义某个属性时，这个属性的configurable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的configurable默认为false

  ```js
  var obj = { name: "张三", age: 18 };
  Object.defineProperty(obj, "name", {
    configurable: false, // 告诉js引擎, obj对象的 name 属性不可以被删除
  });
  	
  delete obj.name;
  console.log(obj); // {name: '张三', age: 18}
  ```

- enumerable：表示属性是否可以通过**for-in或者Object.keys()返回该属性**

  - 当我们直接在一个对象上定义某个属性时，这个属性的enumerable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的enumerable默认为false

  ```js
  var obj = { name: "张三", age: 18 };
  Object.defineProperty(obj, "name", {
    enumerable: false, // 告诉js引擎, obj对象的 name 属性不可枚举(for in/Object.keys)
  })
  for (var key in obj) {
    console.log(key); // age
  }
  console.log(Object.keys(obj)) // age
  ```

- writable：表示是否可以**修改属性的值**

  - 当我们直接在一个对象上定义某个属性时，这个属性的writable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的writable默认为false

  ```js
  var obj = { name: "张三", age: 18 };
  Object.defineProperty(obj, "name", {
    writable: false, // 告诉js引擎, obj对象的 name 属性不写入(只读属性 readonly)
  })
  obj.name = "李四"
  console.log(obj.name) // 张三
  ```

- value：属性的value值，**读取属性时会返回该值**，**修改属性时，会对其进行修改**

  - 默认情况下这个值是undefined

  ```js
  var obj = { name: "张三", age: 18 };
  Object.defineProperty(obj, "name", {
      value: "哈哈哈哈哈", // 告诉js引擎, 返回这个value
  });
  console.log(obj.name); // "哈哈哈哈哈"
  ```



### 存取属性描述符

- 存取属性描述符有如下四个特性

- configurable：表示属性是否可以通过**delete删除属性**，是否可以**修改它的特性**，或者是否可以**将它修改为存取属性描述符**

  - 和数据属性描述符是一致的
  - 当我们直接在一个对象上定义某个属性时，这个属性的configurable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的configurable默认为false

- enumerable：表示属性是否可以通过**for-in或者Object.keys()返回该属性**

  - 和数据属性描述符是一致的
  - 当我们直接在一个对象上定义某个属性时，这个属性的enumerable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的enumerable默认为false

- get：获取属性时会执行的函数，默认为undefined

- set：设置属性时会执行的函数，默认为undefined

  ```js
  var obj = { name: "张三" };
  
  // 对obj对象中的name添加描述符(存取属性描述符)
  var _name = "";
  Object.defineProperty(obj, "name", {
    configurable: true,
    enumerable: false,
    set: function (value) {
      console.log("set方法被调用了", value);
      _name = value;
    },
    get: function () {
      console.log("get方法被调用了");
      return _name;
    },
  });
  
  obj.name = "李四";
  obj.name = "王五";
  console.log(obj.name);
  ```



### 同时定义多个属性

- Object.defineProperties() 方法直接在一个对象上定义 **多个** 新的属性或修改现有属性，并且返回该对象

  ```js
  var obj = { name: "张三", age: 18, height: 1.8 };
  
  Object.defineProperties(obj, {
    name: {
      configurable: true,
      enumerable: true,
      writable: false,
    },
    age: {},
    height: {},
  });
  ```



### 对象方法补充

- 获取对象的属性描述符

  - getOwnPropertyDescriptor
  - getOwnPropertyDescriptors

- 禁止对象扩展新属性：preventExtensions

  - 给一个对象添加新的属性会失败（在严格模式下会报错）

- 密封对象，不允许配置和删除属性：seal

  - 实际是调用preventExtensions
  - 并且将现有属性的configurable: false

- 冻结对象，不允许修改现有属性：freeze

  - 实际上是调用seal
  - 并且将现有属性的writable: false

  ```js
  var obj = { name: "张三", age: 18 };
  
  // 1.获取属性描述符
  console.log(Object.getOwnPropertyDescriptor(obj, "name"));
  console.log(Object.getOwnPropertyDescriptors(obj));
  
  // 2.阻止对象的扩展
  Object.preventExtensions(obj);
  obj.address = "北京市";
  console.log(obj);
  
  // 3.密封对象(不能进行配置)
  Object.seal(obj);
  delete obj.name;
  console.log(obj);
  
  // 4.冻结对象(不能进行写入)
  Object.freeze(obj);
  obj.name = "李四";
  console.log(obj);
  ```



## 认识对象的原型、原型链、继承

- JavaScript当中**每一个对象**都有一个**特殊的内置属性 [[prototype]]**，这个特殊的属性**指向另外一个对象**

- 那么这个对象有什么用呢？

  - 当我们访问一个对象属性或方法的时候，它会优先在自己的对象中查找，如果找到直接返回，如果没有找到，那么会在它的原型对象中查找

- 那么如果通过字面量直接创建一个对象，这个对象也会有这样的属性吗？如果有，应该如何获取这个属性呢？

  - 答案是有的，只要是对象都会有这样的一个内置属性

- 获取的方式有两种

  - 方式一：通过对象的 `__proto__` 属性可以获取到（但是这个是**早期浏览器自己添加的，存在一定的兼容性问题**）
  - 方式二：通过 Object.getPrototypeOf 方法可以获取到

  ```js
  var obj = { name: "张三", age: 18 };
  
  // 获取对象的原型
  console.log(obj.__proto__); // {constructor: Object(), __proto__: null} 
  console.log(Object.getPrototypeOf(obj)); // {constructor: Object(), __proto__: null} 
  console.log(obj.__proto__ === Object.getPrototypeOf(obj)); // true
  
  obj.__proto__.message = "Hello World";
  console.log(obj.message); // Hello World
  ```



### 函数的原型

- 那么我们知道上面的东西对于我们的构造函数创建对象来说有什么用呢？
  - **它的意义是非常重大的**，接下来我们继续来探讨

- 这里我们又要引入一个新的概念：所有的函数都有一个prototype的属性（注意：不是 `__proto__` ，箭头函数是没有的）

- 你可能会疑问，是不是因为函数是一个对象，所以它有prototype的属性呢？

  - 不是的，因为它是一个函数，才有了这个特殊的属性

  * 而不是它是一个对象，所以有这个特殊的属性

  ```js
  var obj = {};
  function foo() {}
  
  // 1.将函数看成是一个对象时, 它是具备__proto__(隐式原型)
  // 作用: 查找对象属性或方法时, 会找到原型身上
  console.log(obj.__proto__); // {constructor: Object(), __proto__: null}
  console.log(foo.__proto__); // Function.prototype
  
  // 2.将函数看成是一个函数时, 它是具备prototype(显式原型)
  // 作用: 用来构建对象时, 给对象设置隐式原型的
  console.log(foo.prototype); // {constructor: foo(), __proto__: Object}
  console.log(obj.prototype); // undefined 对象是没有 prototype
  ```



### new操作符

- 我们前面讲过new关键字的步骤如下

  - 在内存中创建一个新的对象（空对象）
  2. 将**构造函数**的**显式原型（prototype）**赋值给新对象的**隐式原型（[[prototype]]）**
     * `obj.__proto__ = function.prototype `

- 那么也就意味着我们通过Person构造函数创建出来的所有对象的[[prototype]]属性都指向Person.prototype

  ```js
  function Person() {}
  
  var p1 = new Person();
  var p2 = new Person();
  // 上面的操作相当于会进行如下操作
  // p1 = {}
  // p1.__proto__ = Person.prototype
  
  // p2 = {}
  // p2.__proto__ = Person.prototype
  
  console.log(p1.__proto__ === p2.__proto__); // true
  console.log(p1.__proto__ === Person.prototype); // true
  ```



### constructor属性

- 事实上原型对象上面是有一个属性的：constructor

  - 默认情况下原型上都会添加一个属性叫做constructor，这个constructor**指向当前的函数对象**

  ```js
  // 非常重要的属性: constructor, 指向Person函数对象
  function Person() {}
  
  // 1.对constructor在prototype上的验证
  console.log(Person.prototype); // {constructor: Person()}
  console.log(Person.prototype.constructor); // Person() {}
  console.log(Person.prototype.constructor === Person); // true
  
  console.log(Person.name); // Person
  console.log(Person.prototype.constructor.name); // Person
  
  // 2.实例对象
  var p = new Person();
  console.log(p.__proto__.constructor); // Person() {}
  console.log(p.__proto__.constructor.name); // Person
  ```



### 创建对象的过程 - 内存图

- 下面这段代码在内存中的表现

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log("running~");
  };
  
  var p1 = new Person("张三", 18);
  var p2 = new Person("李四", 20);
  
  // 进行操作
  console.log(p1.name);
  console.log(p2.name);
  
  p1.running();
  p2.running();
  
  // 新增属性
  Person.prototype.address = "中国";
  p1.__proto__.info = "中国很美丽!";
  
  p1.height = 1.80;
  p2.isAdmin = true;
  
  // 获取属性
  console.log(p1.address);
  console.log(p2.isAdmin);
  console.log(p1.isAdmin);
  console.log(p2.info);
  
  // 修改address
  p1.address = "北京市";
  console.log(p2.address);
  ```

  ![创建对象的过程](https://s3.bmp.ovh/imgs/2023/03/19/3a02ca5b56f7a72d.png)



### 重写原型对象

- 如果我们需要在原型上添加过多的属性，通常我们会重写整个原型对象

  ```js
  function Person() {}
  
  Person.prototype = {
    message: "Hello Person",
    info: { name: "哈哈哈", age: 30 },
    running: function () {},
    eating: function () {},
  };
  ```

- 前面我们说过，每创建一个函数，就会同时创建它的prototype对象，这个对象也会自动获取constructor属性

  - 而我们这里相当于给prototype重新赋值了一个对象，那么这个新对象的constructor属性，会指向Object构造函数，而不是Person构造函数了

- 如果希望constructor指向Person，那么可以手动添加

  ```js
  function Person() {}
  
  Person.prototype = {
    message: "Hello Person",
    info: { name: "哈哈哈", age: 30 },
    running: function () {},
    eating: function () {},
    constructor: Person
  };
  ```

- 上面的方式虽然可以， 但是也会造成constructor的enumerable特性被设置了true

  - 默认情况下，原生的constructor属性是不可枚举的
  - 如果希望解决这个问题，就可以使用我们前面介绍的Object.defineProperty函数了

  ```js
  function Person() {}
  
  Person.prototype = {
    message: "Hello Person",
    info: { name: "哈哈哈", age: 30 },
    running: function () {},
    eating: function () {},
    // constructor: Person
  };
  
  Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Person,
  });
  
  console.log(Person.prototype); // {message: 'Hello Person', info: {…}, constructor: Person(), ...}
  
  var p1 = new Person();
  console.log(p1.message); // Hello Person
  ```



### 面向对象的特性 – 继承

* 面向对象有三大特性：**封装、继承、多态**
  - 封装：我们前面**将属性和方法封装到一个类**中，可以称之为封装的过程
  - 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）
  - 多态：不同的对象在执行时表现出不同的形态
* 那么这里我们核心讲继承
* 那么继承是做什么呢？
  - 继承可以帮助我们**将重复的代码和逻辑抽取到父类中**，子类只需要直接继承过来使用即可
  - 在很多编程语言中，**继承也是多态的前提**
* 那么JavaScript当中如何实现继承呢？
  - 不着急，我们先来看一下**JavaScript原型链的机制**
  - 再利用原型链的机制实现一下继承



### JavaScript原型链

- 在真正实现继承之前，我们先来理解一个非常重要的概念：**原型链**

  - 从一个对象上**获取属性或方法时**，如果在**当前对象中没有获取到就会去它的原型上面获取**，**如果还没有找到就继续往上找**，找到最顶层原型里面也没有，则返回 undefined，**这种查找过程就叫做原型链**

  ```js
  // 1.对象字面量的本质: {} 相当于 new Object()
  var info = new Object();
  console.log(info.__proto__ === Object.prototype); // true
  
  // 2.原型链
  var obj = { name: "张三", age: 18 };
  
  // 查找顺序
  // 1.obj 在自己的对象中查找
  // 2.obj.__proto__ 在原型对象中查找 (Object)
  // 3.obj.__proto__.__proto__ 在 Object 中的 原型对象 上查找, 找到的是 null 返回 undefined
  console.log(obj.message); // undefined
  
  // 3.对现有代码进行改造
  obj.__proto__ = {
    // message: "Hello aaa"
  };
  
  obj.__proto__.__proto__ = {
    // message: "Hello bbbb",
  };
  
  obj.__proto__.__proto__.__proto__ = {
    message: "Hello ccc",
  };
  
  console.log(obj.message); // Hello ccc
  ```



### Object的原型

- 那么什么地方是原型链的尽头呢？比如第二个对象是否也是有原型 `__proto__` 属性呢？

  ```js
  var info = new Object();
  console.log(info.__proto__.__proto__); // null
  ```

- 我们会发现它打印的是 null

  - 事实上这个原型就是我们最顶层的原型了
  - 从Object创建出来的对象的隐式原型都是Object的显式原型

- 那么我们可能会问：Object原型有什么特殊吗？

  - 特殊一：**该对象有原型属性**，但是它的原型属性已经指向的是 null，也就是已经是顶层原型了
  - 特殊二：**该对象上有很多默认的属性和方法**



### Object是所有类的父类

- 从我们上面的Object原型我们可以得出一个结论：**原型链最顶层的原型对象就是Object的原型对象**

- `p1.__proto__` = Person.prototype = Person的显示原型对象

- `Person的显示原型对象.__proto__ = Object的显示原型`

  ```js
  function Person() {}
  function foo() {} // 函数对象也是最终继承自Object
  var p1 = new Person();
  
  console.log(Person.prototype.__proto__ === Object.prototype); // true
  
  // 在Object的原型上添加属性
  Object.prototype.message = "O(∩_∩)O哈哈~";
  
  console.log(p1.message); // O(∩_∩)O哈哈~
  console.log(foo.message); // O(∩_∩)O哈哈~
  ```



### 继承

#### 通过原型链实现继承

- 如果我们现在需要实现继承，那么就可以利用原型链来实现了

  - 目前Student的原型是p1对象，而p1对象的原型是Person显式原型对象，里面包含running函数
  - 注意：步骤4和步骤5不可以调整顺序，否则会有问题

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log("running~");
  };
  
  function Student(sno) {
    this.sno = sno;
  }
  
  // 方式一: 父类的原型直接赋值给子类的原型
  // 缺点: 父类和子类共享通一个原型对象, 修改了任意一个, 另外一个也被修改
  // Student.prototype = Person.prototype
  
  // 方式二: 创建一个父类的实例对象, 用这个实例对象来作为子类的原型对象
  var p1 = new Person("张三", 18); // 步骤4
  Student.prototype = p1; // 步骤5
  
  Student.prototype.studying = function () {
    console.log("studying~");
  };
  
  var stu1 = new Student(80);
  
  stu1.running();
  stu1.studying();
  
  console.log(stu1); // Student {sno: 80}
  console.log(stu1.name, stu1.age); // 张三 18
  ```
  
  ![通过原型链实现继承](https://s3.bmp.ovh/imgs/2023/03/19/786258bce8c756c0.png)



- 原型链继承的弊端
  - 但是目前有一个很大的弊端：某些属性其实是保存在p1对象上的
    - 第一，直接**打印对象**是**看不到这个属性**的
    - 第二，这个属性会**被多个对象共享，容易造成问题**
    - 第三，**不能给Person传递参数**，让每个Student实例对象有**自己的属性**



#### 借用构造函数继承

- 为了解决原型链继承中存在的问题，开发人员提供了一种新的技术：constructor stealing（**借用构造函数** 或者 **经典继承** 或者 **伪造对象**）

  - **steal是偷窃、剽窃**的意思，但是这里可以翻译成**借用**

- 借用继承的做法非常简单：**在子类构造函数的内部调用父类构造函数**

  - 因为函数可以在任意的时刻被调用
  - 因此通过<b>apply()和call()</b>方法也可以在新创建的对象上执行构造函数

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log("running~");
  };
  
  function Student(name, age, sno) {
    // 重点: 借用构造函数
    Person.call(this, name, age);
    // Student.name = name;
    // Student.age = age;
    this.sno = sno;
  }
  
  var p1 = new Person("张三", 18);
  Student.prototype = p1;
  
  Student.prototype.studying = function () {
    console.log("studying~");
  };
  
  var stu1 = new Student("李四", 20, 100);
  
  stu1.running();
  stu1.studying();
  
  console.log(stu1); // Student {name: '李四', age: 20, sno: 100}
  console.log(stu1.name, stu1.age); // 李四 20
  ```
  
  ![借用构造函数继承](https://s3.bmp.ovh/imgs/2023/03/19/30b194f5301083dc.png)

#### 组合借用继承的问题

- 组合继承是JavaScript最常用的继承模式之一
  - 如果你理解到这里，点到为止，那么组合来实现继承只能说问题不大
  - 但是它依然不是很完美，但是基本已经没有问题了
- 组合继承存在什么问题呢?
  - 组合继承最大的问题就是无论在什么情况下，都会**调用两次父类构造函数**
    - 第一次在创建**实例对象**的时候（new Person("张三", 18)）
    - 第二次在**子类构造函数的内部**，**调用父类构造函数**（Person.call(this, name, age)）
  - 另外，如果你仔细按照我的流程走了上面的每一个步骤，你会发现，**所有的子类实例事实上会拥有两份父类的属性（name，age）**
    - 一份在当前的实例对象里面（也就是stu1本身的），另一份在子类对应的原型对象中(也就是`stu1.__proto__`里面)
    - 当然，这两份属性我们无需担心访问出现问题，因为默认一定是访问实例本身这一部分的



#### 原型式继承函数

- 原型式继承的渊源

  - 这种模式要从**道格拉斯·克罗克福德**（Douglas Crockford，著名的前端大师，JSON的创立者）在2006年写的一篇文章说起：**Prototypal Inheritance in JavaScript（在JavaScript中使用原型式继承）**
  - 在这篇文章中，它介绍了一种继承方法，而且这种继承方法不是通过构造函数来实现的
  - 为了理解这种方式，我们先再次回顾一下JavaScript想实现继承的目的：**重复利用另外一个对象的属性和方法**

- 最终的目的：Student对象的原型指向Person对象

  ```js
  // 满足什么条件:
  //  1.创建一个新的对象
  //  2.将这个对象的隐式原型指向父类的显式原型
  //  3.将这个对象的隐式原型赋值给子类的显式原型
  function Person() {}
  function Student() {}
  
  // 1.之前的做法: 但是不想要这种做法
  // var p = new Person()
  // Student.prototype = p
  
  // 2.方案一:
  var obj1 = {};
  Object.setPrototypeOf(obj1, Person.prototype);
  Student.prototype = obj1;
  console.log(obj1.__proto__ === Person.prototype); // true
  
  // 3.方案二:
  function F() {}
  F.prototype = Person.prototype;
  var obj2 = new F();
  Student.prototype = obj2;
  console.log(obj2.__proto__ === Person.prototype); // true
  
  // 4.方案三:
  var obj3 = Object.create(Person.prototype);
  Student.prototype = obj3;
  console.log(obj3.__proto__ === Person.prototype); // true
  ```



#### 寄生式继承函数

- 寄生式(Parasitic)继承

  - 寄生式(Parasitic)继承是**与原型式继承紧密相关的一种思想**，并且同样**由道格拉斯·克罗克福德(Douglas Crockford)提出和推广**的
  - 寄生式继承的思路是**结合原型式继承和工厂模式**的一种方式
  - 即**创建一个封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再将这个对象返回**

  ```js
  function createObject(o) {
    function F() {}
    F.prototype = o
    return new F()
  }
  ```



#### 寄生组合式继承

- 现在我们来回顾一下之前提出的比较理想的组合继承

  - 组合继承是比较理想的继承方式，但是存在两个问题
  - 问题一：**父类构造函数会被调用两次**，第一次在创建**实例对象**的时候，第二次在**子类构造函数的内部**，**调用父类构造函数**
  - 问题二：**父类中的属性会有两份**，一份在**子类对应的原型对象**中，另一份在**子类实例对象**里面

- 事实上， 我们现在可以利用寄生式继承将这两个问题给解决掉

  - 你需要先明确一点，当我们在**子类的构造函数中调用父类call(this, 参数)**这个函数的时候，就会将**父类中的属性和方法复制一份到子类**中，所以**父类本身里面的内容，我们不再需要**
  - 这个时候，我们还需要获取到一份**父类的原型对象中的属性和方法**
  - 能不能直接让子类的原型对象 = 父类型的原型对象呢?
  - 不要这么做，因为这么做意味着以后修改了子类原型对象的某个引用类型的时候，父类型原生对象的引用类型也会被修改
  - 我们使用前面的寄生式思想就可以了

  ```js
  function createObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
  
  function inherit(son, father) {
    son.prototype = createObject(father.prototype);
    Object.defineProperty(son.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: son,
    });
  }
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log("running~");
  };
  
  function Student(name, age, sno) {
    Person.call(this, name, age);
    this.sno = sno;
  }
  
  inherit(Student, Person)
  
  Student.prototype.studying = function () {
    console.log("studying~");
  };
  
  var stu1 = new Student("李四", 20, 100);
  
  stu1.running();
  stu1.studying();
  
  console.log(stu1); // Student {name: '李四', age: 20, sno: 100}
  console.log(stu1.name, stu1.age); // 李四 20
  // F对象的constructor: 0x300(Student函数对象) 
  ```
  
  ![寄生组合式继承](https://s3.bmp.ovh/imgs/2023/03/19/187d2f50785cf66b.png)



### 对象的方法补充

- hasOwnProperty

  - 对象是否有某一个属于**自己的属性（不是在原型上的属性）**

- in/for in 操作符

  - 判断某个属性是否在某个**对象或者对象的原型上**

- instanceof

  - 用于检测**构造函数（Person、Student类）的pototype**，是否出现在**某个实例对象的原型链**上

- isPrototypeOf

  - 用于检测**某个对象**，是否出现在**某个实例对象的原型链**上

  ```js
  function createObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
  
  function inherit(son, father) {
    son.prototype = createObject(father.prototype);
    Object.defineProperty(son.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: son,
    });
  }
  
  var obj = { name: "张三", age: 18 };
  var info = createObject(obj);
  info.address = "中国";
  info.intro = "中国大好河山";
  
  // 1.hasOwnProperty
  console.log(info.hasOwnProperty("name")); // false
  console.log(info.hasOwnProperty("address")); // true
  
  // 2.in操作符
  console.log("name" in info); // true
  console.log("address" in info); // true
  // 注意: for in遍历不仅仅是自己对象上的内容, 也包括原型对象上的内容
  for (var key in info) {
    console.log(key); // address intro name age
  }
  
  // 3.instanceof
  // instanceof用于判断对象和类(构造函数)之间的关系
  function Person() {}
  function Student() {}
  inherit(Student, Person);
  
  // stu实例(instance)对象
  var stu = new Student();
  console.log(stu instanceof Student); // true
  console.log(stu instanceof Person); // true
  console.log(stu instanceof Object); // true
  console.log(stu instanceof Array); // false
  
  // 4.isPrototypeOf
  console.log(Student.prototype.isPrototypeOf(stu)); // true
  console.log(Person.prototype.isPrototypeOf(stu)); // true
  
  // 可以用于判断对象之间的继承
  console.log(obj.isPrototypeOf(info)); // true
  ```



### 原型继承关系（重要）

- 原型继承关系图

  ```js
  var obj = {}; // new Object()
  // obj.__proto__ = Object.prototype
  
  function foo() {} // new Function()
  // foo.__proto__ = Function.prototype
  
  function Person() {}
  // Person.__proto === Function.prototype
  
  console.log(foo.__proto__ === Function.prototype);
  console.log(Person.__proto__ === Function.prototype);
  console.log(foo.__proto__ === Person.__proto__);
  console.log(Object.__proto__ === Function.prototype);
  console.log(Function.__proto__ === Function.prototype);
  ```

  ![原型继承关系图](http://www.mollypages.org/tutorials/jsobj.jpg)

  
  
  ![原型继承关系图](https://s3.bmp.ovh/imgs/2023/03/20/077cae586ee8bb10.png)



### 类方法和实例方法区别

- 什么是**类方法**

  - 添加到 Person **对象本身的方法称为类方法**

- 什么是**实例方法**

  - 添加到 Person **原型上的方法称为实例方法**

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.totalCounter = "70亿";
  
  // 实例方法
  Person.prototype.running = function () {
    console.log(this.name + " running");
  };
  Person.prototype.eating = function () {
    console.log("eating");
  };
  
  // 类方法
  var names = ["abc", "cba", "nba", "mba", "hba"];
  Person.randomPerson = function () {
    var randomName = names[Math.floor(Math.random() * names.length)];
    return new Person(randomName, Math.floor(Math.random() * 100));
  };
  
  // 实例对象
  var p1 = new Person("张三", 18);
  p1.running();
  
  var p = Person.randomPerson();
  console.log(p);
  ```



## class

- 我们会发现，按照前面的构造函数形式创建**类**，不仅仅和编写普通的函数过于相似，而且代码并不容易理解

  - 在ES6（ECMAScript2015）新的标准中使用了class关键字来直接定义类
  - 但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已

- 那么，如何使用class来定义一个类呢？

  - 可以使用两种方式来声明类：类声明和类表达式

  ```js
  class Person {}
  
  var Student = class {};
  ```



### 类和构造函数的异同

- 我们来研究一下类的一些特性：你会发现它和我们的**构造函数**的特性其实是一致的

  ```js
  // function定义类
  function Person1() {}
  var p1 = new Person1();
  
  console.log(p1.__proto__ === Person1.prototype); // true
  console.log(Person1.prototype.constructor); // Person1() {}
  console.log(typeof Person1); // function
  
  // class定义类
  class Person2 {}
  var p2 = new Person2();
  
  console.log(p2.__proto__ === Person2.prototype); // true
  console.log(Person2.prototype.constructor); // class Person2 {}
  console.log(typeof Person2); // function
  
  // 不同点: 作为普通函数去调用
  Person1();
  // 不同点: class定义的类, 不能作为一个普通的函数进行调用
  Person2(); // Class constructor Person2 cannot be invoked without 'new'
  ```



### 类的构造函数

- 如果我们希望在创建对象的时候给类传递一些参数，这个时候应该如何做呢？

  - 每个类都可以有一个自己的构造函数（方法），这个方法的名称是固定的**constructor**
  - 当我们通过**new操作符**，操作一个类的时候会调用**这个类的构造函数constructor**
  - 每个类只能有一个构造函数，如果包含多个构造函数，那么会抛出异常

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  var p1 = new Person("张三", 18);
  console.log(p1); // Person {name: '张三', age: 18}
  ```



### 类的实例方法

- 在上面我们定义的属性都是直接放到了this上，也就意味着它是放到了创建出来的新对象中

  - 在前面我们说过对于实例的方法，我们是希望放到原型上的，这样可以被多个实例来共享
  - 这个时候我们可以直接在类中定义

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    running() {
      console.log(this.name + " running");
    }
  }
  ```



### 类的访问器方法

- 我们之前讲对象的属性描述符时有讲过对象可以添加set和get函数的，那么类也是可以的

  ```js
  class Person {
    // 程序员之间的约定: 以_开头的属性和方法, 是不在外界访问
    constructor(name, age) {
      this._name = name;
    }
  
    set name(value) {
      console.log("set " + value);
      this._name = value;
    }
  
    get name() {
      console.log("get " + this._name);
      return this._name;
    }
  }
  
  var p1 = new Person("张三", 18);
  console.log(p1.name);
  p1.name = "李四";
  console.log(p1.name);
  
  // 访问器的应用场景
  class Rectangle {
    constructor(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
  
    get position() {
      return { x: this.x, y: this.y }
    }
  
    get size() {
      return { width: this.width, height: this.height }
    }
  }
  
  var rect1 = new Rectangle(10, 20, 100, 200)
  console.log(rect1.position)
  console.log(rect1.size)
  ```



### 类的静态方法

- 静态方法通常用于定义直接**使用类来执行的方法**，不需要有类的实例，使用**static关键字**来定义

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // 实例方法
    running() {
      console.log(this.name + " running");
    }
  
    // 类方法(静态方法)
    static randomPerson() {
      var names = ["abc", "cba", "nba", "mba"];
      var randomName = names[Math.floor(Math.random() * names.length)];
      return new this(randomName, Math.floor(Math.random() * 100));
    }
  }
  
  var p1 = new Person("张三", 18);
  p1.running();
  console.log(Person.randomPerson());
  ```



### 类的继承 - extends

- 前面我们花了很大的篇幅讨论了在ES5中实现继承的方案，虽然最终实现了相对满意的继承机制，但是过程却依然是非常繁琐的。

- 在ES6中新增了使用**extends关键字**，可以方便的帮助我们实现继承

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    running() {
      console.log("running~");
    }
  }
  
  class Student extends Person {
    constructor(name, age, sno) {
      super(name, age);
      this.sno = sno;
    }
  
    studying() {
      console.log("studying~");
    }
  }
  
  var stu1 = new Student("张三", 18, 001, 100);
  stu1.running();
  stu1.studying();
  ```



### super关键字

- class为我们的方法中还提供了super关键字

  - 执行 super.method(...) 来调用一个父类方法
  - 执行 super(...) 来调用一个父类 constructor（只能在我们的 constructor 中）
  - 在子类的构造函数中**使用this或者返回默认对象之前**，**必须先通过super调用父类的构造函数！**
    - 当在子类的构造函数中使用 `this` 关键字时，JavaScript 引擎会自动检查是否已经调用了父类的构造函数，如果没有，则会抛出这个错误。
    - 这是为了确保子类在访问自己的属性或方法之前，先继承了父类的属性和方法
  - super的使用位置有三个：子类的**构造函数**、**实例方法**、**静态方法**

  ```js
  class Animal {
    running() {
      console.log("animal running");
    }
  
    static sleep() {
      console.log("static animal sleep");
    }
  }
  
  class Dog extends Animal {
    // 子类如果对于父类的方法实现不满足(继承过来的方法)
    // 重新实现称之为重写(父类方法的重写)
    running() {
      console.log("dog四条腿");
      // 调用父类的方法
      super.running();
    }
  
    static sleep() {
      console.log("趴着");
      super.sleep();
    }
  }
  
  var dog = new Dog();
  dog.running();
  Dog.sleep();
  ```



### 继承内置类

- 我们也可以让我们的类继承自内置类，比如Array

  ```js
  class ZSArray extends Array {
    get lastItem() {
      return this[this.length - 1];
    }
  
    get firstItem() {
      return this[0];
    }
  }
  
  var arr = new ZSArray(10, 20, 30);
  
  console.log(arr.lastItem);
  console.log(arr.firstItem);
  ```



### 类的混入mixin

- JavaScript的类只支持**单继承**：也就是**只能有一个父类**

  - 那么在开发中我们我们需要在一个类中添加更多相似的功能时，应该如何来做呢？
  - 这个时候我们可以使用混入（mixin）

  ```js
  function mixinAnimal(BaseClass) {
    return class extends BaseClass {
      running() {
        console.log("running~");
      }
    };
  }
  
  function mixinRunner(BaseClass) {
    return class extends BaseClass {
      flying() {
        console.log("flying~");
      }
    };
  }
  
  class Bird {
    eating() {
      console.log("eating~");
    }
  }
  
  class NewBird extends mixinRunner(mixinAnimal(Bird)) {}
  var bird = new NewBird();
  bird.running();
  bird.flying();
  bird.eating();
  ```



## JavaScript中的多态

- 面向对象的三大特性：封装、继承、多态。

  - 前面两个我们都已经详细解析过了，接下来我们讨论一下**JavaScript的多态**

- JavaScript有多态吗？

  - 维基百科对多态的定义：多态（英语：polymorphism）指为**不同数据类型的实体提供统一的接口**，或使用一个**单一的符号来表示多个不同的类型**
  - 非常的抽象，个人的总结：**不同的数据类型进行同一个操作**，**表现出不同的行为**，就是多态的体现

- 那么从上面的定义来看，JavaScript是一定存在多态的

  ```js
  function sum(a1, a2) {
    return a1 + a2;
  }
  sum(20, 30);
  sum("abc", "cba");
  
  var foo = 123;
  
  foo = "Hello World";
  console.log(foo.split());
  
  foo = { running: function () {} };
  foo.running();
  
  foo = [];
  console.log(foo.length);
  ```



## 对象字面量的增强

- ES6中对 **对象字面量** 进行了增强，称之为 Enhanced object literals（增强对象字面量）

- 字面量的增强主要包括下面几部分

  - 属性的简写：**Property Shorthand**

  - 方法的简写：**Method Shorthand**

  - 计算属性名：**Computed Property Names**

  ```js
  var name = "张三";
  var age = 18;
  var key = "address" + " city";
  
  var obj = {
    // 1.属性的增强
    name,
    age,
  
    // 2.方法的增强
    running() {},
  
    // 3.计算属性名
    [key]: "北京",
  };
  ```



## 解构

- ES6中新增了一个从数组或对象中方便获取数据的方法，称之为解构（Destructuring）

  - **解构赋值**是一种特殊的语法，它使我们可以将数组或对象  **“拆包”**  至一系列变量中

- 我们可以划分为：数组的解构和对象的解构

- **数组的解构**

  - 基本解构过程

  ```js
  var names = ["abc", "cba", "nba", "mba"];
  
  var [name1, name2, name3] = names;
  console.log(name1, name2, name3); // abc cba nba
  ```

  - 顺序解构

  ```js
  var names = ["abc", "cba", "nba", "mba"];
  
  var [name1, , name3] = names;
  console.log(name1, name3); // abc nba
  ```

  - 解构出数组：…语法（剩余内容）

  ```js
  var names = ["abc", "cba", "nba", "mba"];
  
  var [name1, name2, ...newNames] = names;
  console.log(name1, name2, newNames); // abc cba ['nba', 'mba']
  ```

  - 默认值

  ```js
  var names = ["abc", "cba", undefined, "nba", "mba"];
  
  var [name1, name2, name3 = "default"] = names;
  console.log(name1, name2, name3); // abc cba default
  ```

- **对象的解构**

  - 基本解构过程

  ```js
  var obj = { name: "张三", age: 18, height: 1.8 };
  
  var { name, age, height } = obj;
  console.log(name, age, height); // 张三 18 1.8
  ```

  - 任意顺序

  ```js
  var obj = { name: "张三", age: 18, height: 1.8 };
  
  var { height, age, name } = obj;
  console.log(name, age, height); // 张三 18 1.8
  ```

  - 重命名

  ```js
  var obj = { name: "张三", age: 18, height: 1.8 };
  
  var { height: wHeight, name: wName, age: wAge } = obj;
  console.log(wName, wAge, wHeight); // 张三 18 1.8
  ```

  - 解构出对象：…语法（剩余内容）

  ```js
  var obj = { name: "张三", age: 18, height: 1.8 };
  
  var { name, ...newObj } = obj;
  console.log(name, newObj); // 张三 {age: 18, height: 1.8}
  ```

  - 默认值

  ```js
  var obj = { name: "张三", age: 18, height: undefined };
  
  var { name, age, height = 1.98, address: wAddress = "北京市" } = obj;
  console.log(name, age, height, wAddress); // 张三 18 1.98 北京市
  ```



## 手写apply、call、bind

- apply

  ```js
  function foo(name, age) {
    console.log(this, name, age);
  }
  
  Function.prototype._myApply = function (_this, _arguments) {
    _this = _this === null || _this === undefined ? window : Object(_this);
  
    _this.fn = this;
  
    _this.fn(..._arguments);
  };
  
  foo._myApply("abc", ["张三", 30]);
  ```

- call

  ```js
  function foo(name, age) {
    console.log(this, name, age);
  }
  
  Function.prototype._myCall = function (_this, ..._arguments) {
    _this = _this === null || _this === undefined ? window : Object(_this);
  
    _this.fn = this;
  
    _this.fn(..._arguments);
  };
  
  foo._myCall("abc", "张三", 30);
  ```

- bind

  ```js
  function foo(name, age) {
    console.log(this, name, age);
  }
  
  Function.prototype._myBind = function (_this, ..._arguments) {
    _this = _this === null || _this === undefined ? window : Object(_this);
  
    _this.fn = this;
  
    return (...newArgs) => {
      var allArgs = [..._arguments, ...newArgs];
      _this.fn(...allArgs);
    };
  };
  
  var newFoo = foo._myBind("abc", "张三");
  newFoo(30);
  ```



## 新的ECMA代码执行描述

- 在之前学习JavaScript代码执行过程中，我们学习了很多ECMA文档的术语
  - **执行上下文栈：Execution Context Stack**，用于**执行上下文的栈结构**
  - **执行上下文：Execution Context**，代码在执行之前会**先创建对应的执行上下文**
  - **变量对象：Variable Object**，上下文关联的VO对象，用于**记录函数和变量声明**
  - **全局对象：Global Object**，**全局**执行上下文**关联的VO对象**
  - **激活对象：Activation Object**，**函数**执行上下文**关联的VO对象**
  - **作用域链：scope chain**，作用域链，用于**关联指向上下文的变量查找**
- 在新的ECMA代码执行描述中（ES5以及之后），对于代码的执行流程描述改成了另外的一些词汇
  - 基本思路是相同的，只是**对于一些词汇的描述发生了改变**
  - **执行上下文栈和执行上下文**也是相同



### 词法环境

- 词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符
  - 一个**词法环境**是由<b>环境记录（Environment Record）</b>和一个<b>外部词法环境（outer Lexical Environment）</b>组成
  - 一个词法环境经常用于关联一个函数声明、代码块语句、try-catch语句，**当它们的代码被执行时，词法环境被创建出来**
    - https://262.ecma-international.org/6.0/#sec-lexical-environments
- 也就是在ES5之后，执行一个代码，通常会关联对应的词法环境
  - 那么执行上下文会关联哪些词法环境呢？
    - **LexicalEnvironment** 和 **VariableEnvironment**
    - https://262.ecma-international.org/6.0/#sec-execution-contexts



### 词法环境和变量环境

- LexicalEnvironment用于处理let、const声明的标识符
  - let and const declarations define variables that are scoped to the running execution context’s Lexical Environment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s Lexical Binding is evaluated.
    - let 和 const 声明定义的作用域为正在运行的执行上下文的词法环境的变量。 变量是在实例化其包含的词法环境时创建的，但在赋值变量的词法绑定之前不能以任何方式访问。
- VariableEnvironment用于处理var和function声明的标识符
  - A var statement declares variables that are scoped to the running execution context’s Variable Environment. Var variables are created when their containing Lexical Environment is instantiated and are initialized to undefined when created.
    - var 语句声明了作用域为正在运行的执行上下文的变量环境的变量。 Var 变量在其包含的词法环境被实例化时创建，并在创建时初始化为未定义。



### 环境记录

- 在这个规范中有两种主要的环境记录值：**声明式环境记录**和**对象式环境记录**
  - 声明式环境记录
    - 声明性环境记录用于定义ECMAScript语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与ECMAScript语言值关联起来的Catch子句
  - 对象式环境记录
    - 对象环境记录用于定义ECMAScript元素的效果，例如WithStatement，它将标识符绑定与某些对象的属性关联起来



### 新的ECMA代码执行描述图

- 这段代码在内存中的表现

  ```js
  var message = "Hello World";
  var age = 18;
  function foo() {}
  let address = "北京市";
  
  { // 2
    var height = 1.83;
    let info = "了解真相";
  } // 3
  ```

  ![新的ECMA代码执行描述图](https://s3.bmp.ovh/imgs/2023/03/23/14c6a2d2d597165b.png)



## let、const

### 基本使用

- 在ES5中我们声明变量都是使用的var关键字，从ES6开始新增了两个关键字可以声明变量：let、const

  - **let、const在其他编程语言中都是有的**，所以也并不是新鲜的关键字
  - 但是**let、const确确实实给JavaScript带来一些不一样的东西**

- let关键字

  - 从直观的角度来说，**let和var是没有太大的区别**的，都是**用于声明一个变量**

- const关键字

  - const关键字是**constant的单词的缩写，表示常量、衡量**的意思
  - 它表示**保存的数据一旦被赋值，就不能被修改**
  - 但是**如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象的内容**

- 注意

  - 另外let、const不允许重复声明变量

  ```js
  // 1.let
  let message1 = "你好, 世界";
  message1 = "你好, coderlwh";
  message1 = 123;
  console.log(message1); // 123
  
  // 2.const
  const message2 = "nihao, shijie";
  // message2 = "nihao, coderlwh" // Assignment to constant variable.
  
  // 3.赋值引用类型
  const info = { name: "info", age: 18 };
  // info = {} // Assignment to constant variable.
  info.name = "哈哈哈";
  console.log(info); // {name: '哈哈哈', age: 18}
  ```

  ```js
  // 1.var变量可以重复声明
  var message = "Hello World";
  var message = "你好, 世界";
  console.log(message); // 你好, 世界
  
  // 2.let/const不允许变量的重复声明
  // var address = "" // Identifier 'address' has already been declared
  let address = "上海市";
  // let address = "" // Identifier 'address' has already been declared
  console.log(address);
  
  const info = {};
  // const info = {} // Identifier 'info' has already been declared
  console.log(info);
  ```



### 作用域提升

- let、const和var的另一个重要区别是作用域提升

  - 我们知道**var声明的变量是会进行作用域提升**的
  - 但是如果我们使用let、const声明的变量，**在声明之前访问会报错**

  ```js
  // 1.var声明的变量会进行作用域的提升
  console.log(message); // undefined
  var message = "Hello World";
  
  // 2.let/const声明的变量: 没有作用域提升
  // console.log(address) // Cannot access 'address' before initialization
  let address = "北京市";
  // console.log(info) // Cannot access 'info' before initialization
  const info = {};
  ```

- 那么是不是意味着address、info变量只有在代码执行阶段才会创建的呢？

  - 事实上并不是这样的，我们可以看一下ECMA262对let和const的描述
  - 在**执行上下文的词法环境创建出来的时候**，**变量事实上已经被创建了**，只是**这个变量是不能被访问**的，直到**词法绑定被求值**
    - https://262.ecma-international.org/6.0/#sec-let-and-const-declarations



### 暂时性死区 (TDZ)

- 我们知道，在let、const定义的标识符真正执行到声明的代码之前，是不能被访问的

  - **从块作用域的顶部一直到变量声明完成之前**，这个变量处在**暂时性死区（TDZ，temporal dead zone）**

- 使用术语  **“temporal”**  是因为区域取决于**执行顺序（时间）**，而**不是编写代码的位置**

  ```js
  // 1.暂时性死区
  function foo() {
    // console.log(message); // Cannot access 'message' before initialization
    let message = "你好啊，时间";
  }
  foo();
  
  // 2.暂时性死区和定义的位置没有关系, 和代码执行的顺序有关系
  function bar() {
    console.log(message); // Hello World
  }
  
  let message = "Hello World";
  bar();
  console.log(message); // Hello World
  
  // 3.暂时性死区形成之后, 在该区域内这个标识符不能访问
  let info = "Hello info";
  function test() {
    // console.log(info); // Cannot access 'info' before initialization
  	const info = "哈哈哈哈";
  }
  test();
  ```



### 有没有作用域提升呢

- 从上面我们可以看出，在**执行上下文的词法环境创建出来的时候，变量事实上已经被创建了**，只是**这个变量是不能被访问**的
  - 那么变量已经有了，但是不能被访问，是不是一种作用域的提升呢？
- 事实上维基百科并没有对作用域提升有严格的概念解释，那么我们自己从字面量上理解
  - 作用域提升：在**声明变量的作用域**中，如果**这个变量可以在声明之前被访问，那么我们可以称之为作用域提升**
  - 在这里，它**虽然被创建出来了**，但是**不能被访问**，我认为**不能称之为作用域提升**
- 所以我的观点是**let、const没有进行作用域提升，但是会在解析阶段被创建出来**



### Window对象添加属性

- 我们知道，在全局通过var来声明一个变量，事实上会在window上添加一个属性
  - 但是let、const是不会给window上添加任何属性的
- 那么我们可能会想这个变量是保存在哪里呢？
  - A global Environment Record is logically a single record but it is specified as a composite encapsulating an object Environment Record and a declarative Environment Record. 
    - 全局环境记录在逻辑上是单个记录，但它被指定为封装对象环境记录和声明性环境记录的组合。
    - https://262.ecma-international.org/6.0/#sec-global-environment-records



### 块级作用域

- 在ES6中新增了块级作用域，并且通过**let、const、function、class**声明的标识符是具备**块级作用域**的限制的

  ```js
  { var message1 = "Hello World" }
  console.log(message1); // Hello World
  
  { let message2 = "Hello World" }
  // console.log(message2); // message is not defined
  
  { const message3 = "Hello World" }
  // console.log(message3); // message is not defined
  
  { class Person {} }
  // console.log(Person); // Person is not defined
  
  // 因为在ES5之前, 函数是没有块级作用域的, 但在ES6之后function声明突然有块级作用域了
  // 但是在早期的代码中别人有可能有这种写法, 如果浏览器不识别这种代码, 很多这种代码就报错了
  {
    function foo() {
      console.log("foo function"); // foo function
    }
  }
  foo();
  ```

- 但是我们会发现**函数拥有块级作用域**，但是**外面依然是可以访问**的

  - 这是因为**引擎会对函数的声明进行特殊的处理**，允许像**var一样在外界直接访问**



### var、let、const的选择

- 那么在开发中，我们到底应该选择使用哪一种方式来定义我们的变量呢？
- 对于var的使用
  - 我们需要明白一个事实，var所表现出来的特殊性，比如**作用域提升、window全局对象、没有块级作用域**等都是**一些历史遗留问题**
  - 其实是**JavaScript在设计之初的一种语言缺陷**
  - 当然目前市场上也**在利用这种缺陷出一系列的面试题，来考察大家对JavaScript语言本身以及底层的理解**
  - 但是在实际工作中，我们**可以使用最新的规范来编写，也就是不再使用var来定义变量了**
- 对于let、const
  - 对于let和const来说，是目前开发中推荐使用的
  - 我们会**优先推荐使用const**，这样可以**保证数据的安全性不会被随意的篡改**
  - 只有当**我们明确知道一个变量后续会需要被重新赋值时**，这个时候**再使用let**
  - 这种在很多**其他语言里面也都是一种约定俗成的规范**，尽量我们也遵守这种规范



## 字符串模板基本使用

- 在ES6之前，如果我们想要将字符串和一些动态的变量拼接到一起，是非常麻烦和丑陋的

- ES6允许我们使用字符串模板来嵌入JS的变量或者表达式来进行拼接：

  - 首先，我们会使用 **``** 符号来编写字符串，称之为**模板字符串**

  - 其次，在模板字符串中，我们可以**通过 ${expression}** 来嵌入动态的内容

  ```js
  const name = "张三";
  const age = 30;
  
  // 1.ES6之前
  const info1 = "my name is " + name + ", age is " + age;
  console.log(info1);
  
  // 2.ES6之后
  const info2 = `my name is ${name}, age is ${age}`;
  console.log(info2);
  ```



## 标签模板字符串使用

- 模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）

- 我们一起来看一个普通的JavaScript的函数

  ```js
  function foo(...args) {
    console.log(args); // ['张三', 30, 1.83]
  }
  
  foo("张三", 30, 1.83);
  ```

- 如果我们使用标签模板字符串，并且在调用的时候插入其他的变量

  - **模板字符串被拆分了**
  - 第一个元素是**数组**，是**被模块字符串拆分的字符串组合**
  - **后面的元素是一个个模块字符串传入的内容**

  ```js
  const name = "张三";
  const age = 30;
  const height = 1.83;
  
  function foo(...args) {
    // ['my name is ', ', age is ', ', height is ', '']
    console.log(args); // [Array(4), '张三', 30, 1.83]
  }
  
  foo`my name is ${name}, age is ${age}, height is ${height}`;
  ```



## 展开语法

- 展开语法（Spread syntax）

  - 可以在**函数调用/数组构造**时，将数组表达式或者string在语法层面展开
  - 还可以在**构造字面量对象**时，将对象表达式按key-value的方式展开

- 展开语法的场景

  - 在**函数调用**时使用
  - 在**数组构造**时使用
  - 在**构建对象字面量**时，也可以使用展开运算符，这个是在ES2018（ES9）中添加的新特性

- 注意：**展开运算符其实是一种浅拷贝**

  ```js
  const names = ["abc", "cba", "nba", "mba"];
  const str = "Hello";
  
  function foo(name1, name2, ...args) {
    console.log(name1, name2, args);
  }
  
  foo(...names); // abc cba ['nba', 'mba']
  foo(...str); // H e ['l', 'l', 'o']
  
  // ES9(ES2018)
  const obj = { name: "ovo", age: 18 };
  // 不可以这样来使用
  // foo(...obj) // 在函数的调用时, 用展开运算符, 将对应的展开数据, 进行迭代
  // 可迭代对象: 数组/string/arguments
  
  const info = { ...obj, height: 1.83, address: "北京市" };
  console.log(info); // {name: 'ovo', age: 18, height: 1.83, address: '北京市'}
  ```



## 数值的表示

- 在ES6中规范了二进制和八进制的写法

  ```js
  console.log(100)   // 十进制
  console.log(0b100) // 二进制
  console.log(0o100) // 八进制
  console.log(0x100) // 十六进制
  ```

- 另外在ES2021新增特性：数字过长时，可以使用_作为连接符

  ```js
  const money = 100_00_00_0000_00_00
  ```



## Symbol

### 基本使用

- Symbol是什么呢？Symbol是ES6中新增的一个基本数据类型，翻译为符号

- 那么为什么需要Symbol呢？

  - 在ES6之前，对象的属性名都是字符串形式，那么很容易造成**属性名的冲突**

  - 比如原来有一个对象，我们希望在其中**添加一个新的属性和值**，但是我们在不确定它原来内部有什么内容的情况下，**很容易造成冲突，从而覆盖掉它内部的某个属性**

  - 比如我们前面在讲apply、call、bind实现时，我们有给其中**添加一个fn属性**，那么如果它内部原来已经有了fn属性了呢？

  - 比如开发中我们使用混入，那么混入中出现了同名的属性，必然有一个会被覆盖掉

- Symbol就是为了解决上面的问题，用来**生成一个独一无二的值**

  - Symbol值是通过**Symbol函数**来生成的，生成后可以**作为属性名**

  - 也就是在ES6中，对象的属性名可以使用**字符串**，也可以使用**Symbol值**

- <b>Symbol即使多次创建值，它们也是不同的：</b>Symbol函数执行后每次创建出来的值都是独一无二的

- <b>我们也可以在创建Symbol值的时候传入一个描述description：</b>这个是ES2019（ES10）新增的特性

  ```js
  const s1 = Symbol();
  const obj = { [s1]: "aaa" };
  console.log(obj); // {Symbol(): 'aaa'}
  
  const s2 = Symbol();
  obj[s2] = "bbb";
  console.log(obj); // {Symbol(): 'aaa', Symbol(): 'bbb'}
  
  // 获取symbol对应的key
  console.log(Object.keys(obj)); // []
  console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(), Symbol()]
  ```



### 相同值的Symbol

- 前面我们讲Symbol的目的是为了创建一个独一无二的值，那么如果我们现在就是想创建相同的Symbol应该怎么来做呢？

  - 我们可以使用**Symbol.for方法**来做到这一点
  - 并且我们可以通过**Symbol.keyFor方法**来获取对应的key

  ```js
  // 1.description
  // 1.1.Symbol函数直接生成的值, 都是独一无二
  const s1 = Symbol("aaa");
  console.log(s1.description); // aaa
  const s2 = Symbol(s1.description);
  console.log(s1 === s2); // false
  
  // 1.2.如果相同的key, 通过Symbol.for可以生成相同的Symbol值
  const s3 = Symbol.for("bbb");
  const s4 = Symbol.for("bbb");
  console.log(s3 === s4); // true
  
  // 获取传入的key
  console.log(Symbol.keyFor(s4)); // bbb
  ```



## Set、WeakSet

### 基本使用

- 在ES6之前，我们存储数据的结构主要有两种：**数组、对象**

  - 在ES6中新增了另外两种数据结构：**Set、Map**，以及它们的另外形式**WeakSet、WeakMap**

- Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是**元素不能重复**

  - 创建Set我们需要通过Set构造函数（暂时没有字面量创建的方式）

- 我们可以发现Set中存放的元素是**不会重复**的，那么Set有一个非常常用的功能就是**给数组去重**

  ```js
  const set1 = new Set([10, 20, 30, 20, 40]);
  console.log(set1); // Set(4) {10, 20, 30, 40}
  
  const set2 = new Set();
  const obj = { name: "obj" };
  const info = { name: "info" };
  set2.add(info);
  set2.add(info);
  set2.add(obj);
  set2.add(obj);
  console.log(set2); // Set(5) {{name: 'info'}, {name: 'obj'}}
  
  // 应用场景: 数组的去重
  const names = ["abc", "cba", "nba", "cba", "nba"];
  const newNames = Array.from(new Set(names));
  console.log(newNames); // ['abc', 'cba', 'nba']
  ```



### 常见方法

- Set常见的属性

  - size：返回Set中元素的个数

- Set常用的方法

  - add(value)：添加某个元素，返回Set对象本身
  - delete(value)：从set中删除和这个值相等的元素，返回boolean类型
  - has(value)：判断set中是否存在某个元素，返回boolean类型
  - clear()：清空set中所有的元素，没有返回值
  - forEach(callback, [, thisArg])：通过forEach遍历set

- 另外Set是支持for of的遍历的

  ```js
  const set1 = new Set([10, 20, 30, 20, 40]);
  const obj = { name: "obj" };
  const info = { name: "info" };
  
  // 属性
  console.log(set1.size); // 4
  
  // 方法
  // add 方法
  set1.add(info);
  set1.add(obj);
  console.log(set1); // {10, 20, 30, 40, {name: 'info'}, {name: "obj"}}
  
  // delete 方法
  set1.delete(obj);
  console.log(set1); // {10, 20, 30, 40, {name: 'info'}}
  
  // has 方法
  console.log(set1.has(info)); // true
  
  // clear 方法
  // set1.clear();
  // console.log(set1); // {size: 0}
  
  // forEach
  set1.forEach((item) => console.log(item));
  
  // for...of
  for (const item of set1) {
    console.log(item);
  }
  ```



### WeakSet

- 和Set类似的另外一个数据结构称之为**WeakSet**，也是内部元素不能重复的数据结构

- 那么和Set有什么区别呢？

  - 区别一：WeakSet中**只能存放对象类型，不能存放基本数据类型**
  - 区别二：WeakSet**对元素的引用是弱引用**，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收

  ```js
  const weakSet = new WeakSet()
  weakSet.add(100); // Invalid value used in weak set
  ```

- WeakSet常见的方法

  - add(value)：添加某个元素，返回WeakSet对象本身
  - delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型
  - has(value)：判断WeakSet中是否存在某个元素，返回boolean类型

- 注意：WeakSet不能遍历

  - 因为**WeakSet只是对对象的弱引用**，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁
  - 所以**存储到WeakSet中的对象是没办法获取**的



## Map、WeakMap

### 基本使用

- 另外一个新增的数据结构是Map，用于**存储映射关系**

- 但是我们可能会想，在之前我们可以**使用对象来存储映射关系，他们有什么区别呢？**

  - 事实上我们对象存储映射关系只能用**字符串（ES6新增了Symbol）作为属性名（key）**
  - 某些情况下我们可能希望通过**其他类型作为key**，**比如对象**，这个时候会**自动将对象转成字符串来作为key**

- 那么我们就可以使用Map

  ```js
  const info1 = { name: "张三" };
  const info2 = { age: 18 };
  
  // 对象类型的局限性: 不可以使用复杂类型作为key
  const obj = {
    address: "北京市",
    [info1]: "哈哈哈",
    [info2]: "嘿嘿嘿",
  };
  console.log(obj); // {address: '北京市', [object Object]: '嘿嘿嘿'}
  
  const map1 = new Map();
  map1.set(info1, "AAA");
  map1.set(info2, "BBB");
  console.log(map1); // Map(2) {{name: '张三'} => 'AAA', {age: 18} => 'BBB'}
  
  const map2 = new Map([
    [info1, "CCC"],
    [info2, "DDD"]
  ]);
  
  console.log(map2); // Map(2) {{name: '张三'} => 'CCC', {age: 18} => 'DDD'}
  ```



### 常用方法

- Map常见的属性

  - size：返回Map中元素的个数

- Map常见的方法

  - set(key, value)：在Map中添加key、value，并且返回整个Map对象
  - get(key)：根据key获取Map中的value
  - has(key)：判断是否包括某一个key，返回Boolean类型
  - delete(key)：根据key删除一个键值对，返回Boolean类型
  - clear()：清空所有的元素
  - forEach(callback, [, thisArg])：通过forEach遍历Map

- Map也可以通过for of进行遍历

  ```js
  const info1 = { name: "张三" };
  const info2 = { age: 18 };
  const map1 = new Map([[info1, "AAA"]]);
  
  // 属性
  console.log(map1.size); // 2
  
  // 方法
  // set 方法
  map1.set(info2, "BBB");
  console.log(map1); // Map(2) {{name: '张三'} => 'AAA', {age: 18} => 'BBB'}
  
  // get 方法
  console.log(map1.get(info1)); // AAA
  
  //  delete 方法
  map1.delete(info1);
  console.log(map1); // Map(1) {{age: 18} => 'BBB'}
  
  // has 方法
  console.log(map1.has(info2)); // true
  
  //  clear 方法
  // map1.clear();
  // console.log(map1); // Map(0) {size: 0}
  
  //  forEach
  map1.forEach((item) => console.log(item)); // BBB
  
  // for...of
  for (const item of map1) {
    console.log(item); // [{age: 18}, 'BBB']
  }
  ```



### WeakMap

- 和Map类型的另外一个数据结构称之为**WeakMap**，也是**以键值对的形式**存在的

- 那么和Map有什么区别呢？

  - 区别一：**WeakMap的key只能使用对象，不接受其他的类型作为key**
  - 区别二：WeakMap的**key对对象想的引用是弱引用**，如果没有其他引用引用这个对象，那么GC可以回收该对象

  ```js
  const weakMap = new WeakMap();
  weakMap.set(100, "abc"); // Invalid value used as weak map key
  ```

- WeakMap常见的方法有四个

  - set(key, value)：在Map中添加key、value，并且返回整个Map对象
  - get(key)：根据key获取Map中的value
  - has(key)：判断是否包括某一个key，返回Boolean类型
  - delete(key)：根据key删除一个键值对，返回Boolean类型

- 注意：WeakMap也是不能遍历的
  - 没有forEach方法，也不支持通过for of的方式进行遍历



## ES6其他知识点说明

- 事实上ES6（ES2015）是一次非常大的版本更新，所以里面重要的特性非常多
  - 除了前面讲到的特性外还有很多其他特性
- Proxy、Reflect
  - 利用Proxy、Reflect来讲解Vue3的响应式原理
- Promise 用于处理异步的解决方案
- ES Module 模块化开发
  - 从ES6开始，JavaScript可以进行原生的模块化开发
  - 包括其他模块化方案：CommonJS、AMD、CMD等方案



## ES7~ES13

### ES8

#### Object values

- 之前我们可以通过 **Object.keys** 获取一个对象所有的 key

- 在ES8中提供了 **Object.values** 获取一个对象所有的 value

  ```js
  const obj = { name: "张三", age: 18, height: 1.83, address: "北京市" };
  
  const keys = Object.keys(obj);
  console.log(keys); // ['name', 'age', 'height', 'address']
  
  const values = Object.values(obj);
  console.log(values); // ['张三', 18, 1.83, '北京市']
  ```



#### Object entries

- 通过 **Object.entries** 可以**获取到一个数组**，数组中会存放**可枚举属性的键值对数组**

  - 可以针**对对象、数组、字符串**进行操作

  ```js
  const obj = { name: "张三", age: 18, height: 1.83 };
  
  const entries = Object.entries(obj);
  console.log(entries); // [ ['name', '张三'], ['age', 18], ['height', 1.83] ]
  
  // 对数组/字符串操作(了解)
  console.log(Object.entries(["abc", "cba"])); // [ ['0', 'abc'], ['1', 'cba'] ]
  console.log(Object.entries("AB")); // [ ['0', 'A'], ['1', 'B']]
  ```



#### String Padding

- 某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 **padStart** 和 **padEnd** 方法，分别是**对字符串的首尾进行填充**的

- 我们简单具一个应用场景：比如需要对身份证、银行卡的前面位数进行隐藏

  ```js
  // 对时间进行格式化
  const minute = "8".padStart(2, "0");
  const second = "31".padStart(2, "0");
  
  console.log(`${minute}:${second}`); // 08:31
  
  // 对一些敏感数据格式化
  let cardNumber = "310101200001013374";
  const sliceNumber = cardNumber.slice(-4);
  cardNumber = sliceNumber.padStart(cardNumber.length, "*");
  console.log(cardNumber); // **************3374
  ```



### ES10

#### flat、flatMap

- flat() 方法会按照一个**可指定的深度递归遍历数组**，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

  ```js
  const nums = [10, 20, [30, 40], [50, 60], [[70, 80], [90, 100]]]
  const newNums1 = nums.flat(1)
  console.log(newNums1) // [10, 20, 30, 40, 50, 60, [70, 80], [90, 100]]
  const newNums2 = nums.flat(2)
  console.log(newNums2) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  ```

- flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组

  - 注意一：flatMap是**先进行map操作，再做flat的操作**

  - 注意二：flatMap中的flat相当于深度为1

  ```js
  const messages = ["一维数组", ["二维数组"], [["三维数组"]]];
  const finalMessages = messages.flatMap(
    (item, index) => `${item} ${index + 1}`
  );
  console.log(finalMessages); // ['一维数组 1', '二维数组 2', '三维数组 3']
  ```



#### Object fromEntries

- 在前面，我们可以通过 Object.entries 将一个对象转换成 entries

- 那么如果我们有一个 entries 了，如何将其转换成对象呢？

  - ES10提供了 **Object.formEntries** 来完成转换

- 那么这个方法有什么应用场景呢？

  ```js
  const entries = [
    ["0", "1"],
    ["2", "3"],
  ];
  const obj = Object.fromEntries(entries);
  console.log(obj); // {0: '1', 2: '3'}
  
  const searchString = "?name=ovo&age=18&height=1.83";
  const params = new URLSearchParams(searchString);
  
  console.log(params.get("name")); // ovo
  console.log(params.get("age")); // 18
  console.log(params.get("height")); // 1.83
  
  const paramObj = Object.fromEntries(params);
  console.log(paramObj); // {name: 'ovo', age: '18', height: '1.83'}
  ```



#### trimStart trimEnd

- 去除一个字符串首尾的空格，我们可以通过trim方法，如果**单独去除前面或者后面**呢？

  - ES10中给我们提供了 **trimStart** 和 **trimEnd**

  ```js
  const message = "   Hello World    ";
  console.log(message.trim()); // Hello World
  console.log(message.trimStart()); // Hello World
  console.log(message.trimEnd()); //   Hello World
  ```



### ES11

#### BigInt

- 在早期的JavaScript中，我们不能正确的表示过大的数字

  - 大于**MAX_SAFE_INTEGER**的数值，表示的可能是不正确的

  ```js
  const maxInt = Number.MAX_SAFE_INTEGER;
  const num1 = maxInt + 1;
  const num2 = maxInt + 2;
  console.log(num1, num2); // 9007199254740992 9007199254740992
  ```

- 那么ES11中，引入了新的数据类型BigInt，用于表示大的整数

  - BitInt的表示方法是在数值的**后面加上n**

  ```js
  const maxInt = 9007199254740991n;
  const num1 = maxInt + 1n;
  const num2 = maxInt + 2n;
  console.log(num1, num2); // 9007199254740992n 9007199254740993n
  ```



#### 空值合并操作符

- ES11，Nullish Coalescing Operator 增加了**空值合并操作符**

  ```js
  function foo(arg1) {
    arg1 = arg1 ?? "我是默认值";
    console.log(arg1);
  }
  
  foo(123);
  foo(); // 我是默认值
  foo(0);
  foo("");
  foo(false);
  foo(null); // 我是默认值
  foo(undefined); // 我是默认值
  ```



#### 可选链

- **可选链**也是**ES11中新增一个特性**，主要作用是让我们的代码在**进行null和undefined判断时更加清晰**和简洁

  ```js
  const obj = {
    name: "obj",
    friend: {
      name: "ovo",
      // running: function() {
      //   console.log("running~")
      // }
    },
  };
  
  // 1.直接调用: 非常危险
  // obj.friend.running()
  
  // 2.逻辑与: 麻烦/不够简洁
  obj.friend && obj.friend.running && obj.friend.running();
  
  // 3.可选链的用法: ?.
  // obj?.friend?.running === undefined
  obj?.friend?.running?.();
  ```



#### Global This

- 在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的

  - 比如在浏览器中可以通过this、window来获取

  - 比如在Node中我们需要通过global来获取

- 在ES11中对获取全局对象进行了统一的规范：**globalThis**



#### for..in标准化

- 在ES11之前，虽然很多浏览器支持for...in来遍历**对象类型**，但是并没有被ECMA标准化
- 在ES11中，对其进行了标准化，**for...in是用于遍历对象**的key的



### ES12

#### FinalizationRegistry

- FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调

  - FinalizationRegistry 提供了这样的一种方法：当一个**在注册表中注册的对象被回收时**，**请求在某个时间点上调用一个清理回调**。（清理回调有时被称为 finalizer ）
  - 你可以通过**调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值**

  ```js
  let obj = { name: "张三", age: 18 };
  
  const finalRegistry = new FinalizationRegistry((value) => {
    console.log("某一个对象被回收了:", value);
  });
  
  finalRegistry.register(obj, "obj对象");
  
  obj = null;
  ```



#### WeakRefs

- 如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个**强引用**

  - 如果我们希望是一个弱引用的话，可以使用WeakRef

  ```js
  let info = { name: "张三" };
  let weak_ref = new WeakRef(info);
  
  const finalRegistry = new FinalizationRegistry((value) => {
    console.log(value + " 对象被回收");
    foo();
  });
  
  finalRegistry.register(info, "info");
  
  info = null;
  
  function foo() {
    // Cannot read properties of undefined (reading 'name')
    console.log(weak_ref.deref().name);
  }
  ```



### ES13

#### Object.hasOwn

- Object中新增了一个静态方法（类方法）： hasOwn(obj, propKey)

  - 该方法用于判断一个对象中是否有某个自己的属性

- 那么和之前学习的Object.prototype.hasOwnProperty有什么区别呢？

  - 区别一：防止对象内部有重写hasOwnProperty
  - 区别二：对于隐式原型指向null的对象，hasOwnProperty无法进行判断

  ```js
  const obj = {
    name: "张三",
    // 防止对象中也有一个自己的 hasOwnProperty 方法
    hasOwnProperty: function () {
      return "芜湖起飞~~~";
    },
    __proto__: {
      address: "芜湖",
    },
  };
  
  console.log(obj.hasOwnProperty("name")); // 芜湖起飞~~~
  console.log(obj.hasOwnProperty("address")); // 芜湖起飞~~~
  
  console.log(Object.hasOwn(obj, "name")); // true
  console.log(Object.hasOwn(obj, "address")); // false
  
  const info = Object.create(null);
  info.name = "张飞";
  // console.log(info.hasOwnProperty("name")); // info.hasOwnProperty is not a function
  console.log(Object.hasOwn(info, "name")); // true
  ```



## Proxy

### 监听对象的操作

- 我们先来看一个需求：有一个对象，我们希望监听这个对象中的属性被设置或获取的过程

  - 通过我们前面所学的知识，能不能做到这一点呢？
  - 其实是可以的，我们可以通过之前的属性描述符中的存储属性描述符来做到

- 下边这段代码就利用了前面讲过的 Object.defineProperty 的存储属性描述符来对属性的操作进行监听

- 但是这样做有什么缺点呢？

  - 首先，Object.defineProperty 设计的初衷，不是为了去监听截止一个对象中所有的属性的
    - 我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符
  - 其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么 Object.defineProperty 是无能为力的

- 所以我们要知道，存储数据描述符设计的初衷并不是为了去监听一个完整的对象

  ```js
  const obj = { name: "张三", age: 30 };
  const keys = Object.keys(obj);
  
  for (const key of keys) {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      set(newValue) {
        console.log(`监听: 给${key}设置了新的值: ${newValue}`);
        value = newValue;
      },
      get() {
        console.log(`监听: 获取${key}的值`);
        return value;
      },
    });
  }
  
  obj.name = "李四";
  console.log(obj.name);
  
  obj.age = 18;
  console.log(obj.age);
  ```



### 基本使用

- 在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的

  - 也就是说，如果我们希望**监听一个对象的相关操作**，那么我们可以**先创建一个代理对象（Proxy对象）**
  - 之后**对该对象的所有操作**，都通过**代理对象来完成**，代理对象**可以监听我们想要对原对象进行哪些操作**

- 我们可以将上面的案例用Proxy来实现一次

  - 首先，我们需要**new Proxy对象**，并且**传入需要侦听的对象以及一个处理对象**，可以称之为**handler**
    - const p = new Proxy(target, handler)
  - 其次，**我们之后的操作都是直接对Proxy的操作**，而**不是原有的对象**，因为我们需要在handler里面进行侦听

  ```js
  const obj = { name: "张三", age: 30 };
  
  const objProxy = new Proxy(obj, {
    set(target, key, newValue) {
      console.log(`监听: 给${key}设置了新的值: ${newValue}`);
      target[key] = newValue;
    },
    get(target, key) {
      console.log(`监听: 获取${key}的值`);
      return target[key];
    },
  });
  
  objProxy.name = "李四";
  console.log(objProxy.name);
  
  objProxy.age = 18;
  console.log(objProxy.age);
  ```



### set和get捕获器

- 如果我们想要侦听某些具体的操作，那么就可以在handler中添加对应的**捕捉器（Trap）**
- set和get分别对应的是函数类型
  - set函数有四个参数
    - target：目标对象（侦听的对象）
    - property：被设置的属性key
    - value：新属性值
    - receiver：调用的代理对象
  - get函数有三个参数
    - target：目标对象（侦听的对象）
    - property：被获取的属性key
    - receiver：调用的代理对象



### 所有捕获器

- 13个活捉器分别是做什么的呢？

  - getPrototypeOf：Object.getPrototypeOf 方法的捕捉器
  - setPrototypeOf：Object.setPrototypeOf 方法的捕捉器
  - isExtensible：Object.isExtensible 方法的捕捉器(判断是否可以新增属性)
  - preventExtensions：Object.preventExtensions 方法的捕捉器
  - getOwnPropertyDescriptor：Object.getOwnPropertyDescriptor 方法的捕捉器
  - defineProperty：Object.defineProperty 方法的捕捉器

  - ownKeys：Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器
  - <b>has：</b>in 操作符的捕捉器
  - <b>get：</b>属性读取操作的捕捉器
  - <b>set：</b>属性设置操作的捕捉器
  - <b>deleteProperty：</b>delete 操作符的捕捉器
  - apply：函数调用操作的捕捉器
  - construct：new 操作符的捕捉器



### construct和apply捕获器

- 当然，我们还会看到捕捉器中还有**construct**和**apply**，它们是应用于函数对象的

  ```js
  function foo(num1, num2) {
    console.log(this, num1, num2);
  }
  
  const fooProxy = new Proxy(foo, {
    apply(target, thisArg, otherArgs) {
      console.log("监听执行了 apply 操作");
      target.apply(thisArg, otherArgs);
    },
    construct(target, otherArray) {
      console.log("监听执行了 new 操作");
      return new target(...otherArray);
    },
  });
  
  fooProxy.apply("abc", [111, 222]);
  new fooProxy("aaa", "bbb");
  ```



## Reflect

- Reflect也是ES6新增的一个API，它是**一个对象**，字面的意思是**反射**
- 那么这个Reflect有什么用呢？
  - 它主要提供了很多**操作JavaScript对象的方法**，有点像**Object中操作对象的方法**
  - 比如 Reflect.getPrototypeOf(target) 类似于 Object.getPrototypeOf()
  - 比如 Reflect.defineProperty(target, propertyKey, attributes) 类似于 Object.defineProperty() 
- 如果我们有Object可以做这些操作，那么**为什么还需要有Reflect这样的新增对象**呢？
  - 这是因为在早期的ECMA规范中**没有考虑到这种对 对象本身 的操作如何设计会更加规范**，所以**将这些API放到了Object上面**
  - 但是**Object作为一个构造函数**，这些操作实际上**放到它身上并不合适**
  - 另外还包含一些**类似于 in、delete操作符**，让JS看起来是会有一些奇怪的
  - 所以在ES6中**新增了Reflect**，让我们这些操作都集中到了Reflect对象上
  - 另外在使用Proxy时，可以做到**不操作原对象**
- 那么Object和Reflect对象之间的API关系，可以参考MDN文档
  - https://developer.mozilla.org/zhCN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods



### 常见方法

- Reflect中有哪些常见的方法呢？它和Proxy是一一对应的，也是13个
  - Reflect.getPrototypeOf(target)
    - 类似于 Object.getPrototypeOf()
  - Reflect.setPrototypeOf(target, prototype)
    - 设置对象原型的函数。返回一个 Boolean， 如果更新成功，则返回 true
  - Reflect.isExtensible(target)
    - 类似于 Object.isExtensible()
  - Reflect.preventExtensions(target)
    - 类似于 Object.preventExtensions()。返回一个Boolean
  - Reflect.getOwnPropertyDescriptor(target, propertyKey)
    - 类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符, 否则返回 undefined
  - Reflect.defineProperty(target, propertyKey, attributes)
    * 和 Object.defineProperty() 类似。如果设置成功就会返回 true
  - Reflect.ownKeys(target)
    - 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys()，但不会受 enumerable 影响)
  - Reflect.has(target, propertyKey)
    - 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同
  - Reflect.get(target, propertyKey[, receiver])
    - 获取对象身上某个属性的值，类似于 target[name]
  - Reflect.set(target, propertyKey, value[, receiver])
    - 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回 true
  - Reflect.deleteProperty(target, propertyKey)
    - 作为函数的 delete 操作符，相当于执行 delete target[name]
  - Reflect.apply(target, thisArgument, argumentsList)
    - 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似
  - Reflect.construct(target, argumentsList[, newTarget])
    - 对构造函数进行 new 操作，相当于执行 new target(...args)



### 基本使用

- 那么我们可以将之前Proxy案例中对原对象的操作，都修改为**Reflect来操作**

  ```js
  const obj = { name: "张三", age: 30 };
  
  const objProxy = new Proxy(obj, {
    set(target, key, newValue, receiver) {
      console.log(`监听: 给${key}设置了新的值: ${newValue}`);
      // target[key] = newValue
      // 1.好处一: 不再直接操作原对象
      // 2.好处二: Reflect.set方法有返回 Boolean 值, 可以判断本次操作是否成功
      const isSuccess = Reflect.set(target, key, newValue);
      if (!isSuccess) {
        throw new Error(`set ${key} failure`);
      }
    },
    get(target, key, receiver) {
      console.log(`监听: 获取${key}的值`);
      return Reflect.get(target, key);
    },
  });
  
  objProxy.name = "李四";
  console.log(objProxy.name);
  
  objProxy.age = 18;
  console.log(objProxy.age);
  ```



### Receiver的作用

- 我们发现在使用getter、setter的时候有一个**receiver的参数**，它的作用是什么呢？

  - 如果我们的**源对象有setter、getter的访问器属性**，那么可以**通过receiver来改变里面的this**

- 我们来看这样的一个对象

  ```js
  const obj = {
    _name: "张三",
    set name(newValue) {
      console.log("this:", this); // 默认是obj
      this._name = newValue;
    },
    get name() {
      return this._name;
    },
  };
  
  const objProxy = new Proxy(obj, {
    set(target, key, newValue, receiver) {
      console.log(`监听: 给${key}设置了新的值: ${newValue}`);
      // target[key] = newValue
      // 1.好处一: 代理对象的目的: 不再直接操作原对象
      // 2.好处二: Reflect.set方法有返回Boolean值, 可以判断本次操作是否成功
      /*
         3.好处三:
         	 > receiver就是外层Proxy对象
           > Reflect.set/get最后一个参数, 可以决定对象访问器setter/getter的this指向
      */
      const isSuccess = Reflect.set(target, key, newValue, receiver);
      if (!isSuccess) {
        throw new Error(`set ${key} failure`);
      }
    },
    get(target, key, receiver) {
      console.log(`监听: 获取${key}的值`);
      return Reflect.get(target, key, receiver);
    },
  });
  
  objProxy.name = "李四";
  console.log(objProxy.name);
  ```



## Promise

### 异步任务的处理

- 在ES6出来之后，有很多关于Promise的讲解、文章，也有很多经典的书籍讲解Promise

  - 虽然等你学会Promise之后，会觉得Promise不过如此
  - 但是在初次接触的时候都会觉得**这个东西不好理解**

- 那么这里我从一个实际的例子来作为切入点

  - 我们调用一个函数，这个函数中发送网络请求（我们可以用定时器来模拟）
    - 如果**发送网络请求成功**了，那么**告知调用者发送成功，并且将相关数据返回过去**
    - 如果**发送网络请求失败**了，那么**告知调用者发送失败，并且告知错误信息**

  ```js
  function requestData(url, successCallback, failureCallback) {
    setTimeout(() => {
      if (url === "成功") {
        successCallback("请求成功 200");
      } else {
        failureCallback("请求失败 400");
      }
    }, 1000);
  }
  
  requestData(
    "成功",
    (result) => console.log(result),
    (error) => console.log(error)
  );
  
  requestData(
    "失败",
    (result) => console.log(result),
    (error) => console.log(error)
  );
  ```



### 什么是Promise呢

- 在上面的解决方案中，我们确确实实可以解决请求函数得到结果之后，获取到对应的回调，但是它存在两个主要的问题
  - 第一，我们**需要自己来设计回调函数、回调函数的名称、回调函数的使用**等
  - 第二，**对于不同的人、不同的框架设计出来的方案是不同的**，那么我们必须耐心**去看别人的源码或者文档**，以便可以理解它这个函数到底怎么用
- Promise 是异步编程的一种解决方案
- 我们来看一下Promise的API是怎么样的
  - **Promise是一个类**，可以翻译成 **承诺、许诺 、期约**
  - 当我们需要的时候，**给予调用者一个承诺**，待会儿**我会给你回调数据时**，就可以**创建一个Promise的对象**
  - 在通过new创建Promise对象时，我们需要**传入一个回调函数**，我们称之为**executor**
    - 这个回调函数**会被立即执行**，并且给**传入另外两个回调函数resolve、reject**
    - 当我们**调用resolve回调函数时**，**会执行Promise对象的then方法**传入的回调函数
    - 当我们**调用reject回调函数时**，**会执行Promise对象的catch方法**传入的回调函数



### 代码结构和状态

- 我们来看一下Promise代码结构

  ```js
  function requestData(url) {
    return new Promise((resolve, reject) => {
      // 注意: Promise的状态一旦被确定下来, 就不会再更改, 也不能再执行某一个回调函数来改变状态
      // 1.待定状态 pending
      console.log("12345678910")
      setTimeout(() => {
        if (url === "成功") {
          // 2.兑现状态 fulfilled
          resolve("请求成功 200");
        } else {
          // 3.拒绝状态 rejected
          reject("请求失败 400");
        }
      }, 1000);
    });
  }
  
  requestData("成功").then((result) => console.log(result));
  requestData("失败").catch((error) => console.log(error));
  ```

- 上面Promise使用过程，我们可以将它划分成三个状态

  - **待定（pending）：** 初始状态，既没有被兑现，也没有被拒绝
    - 当执行executor中的代码时，处于该状态
  - **已兑现（fulfilled）：** 意味着操作成功
    - 执行了resolve时，处于该状态，Promise已经被兑现
  - **已拒绝（rejected）：** 意味着操作失败
    - 执行了reject时，处于该状态，Promise已经被拒绝



### Executor

- Executor是在创建Promise时需要传入的一个回调函数，这个**回调函数会被立即执行**，并且**传入两个参数**
- 通常我们会在Executor中确定我们的Promise状态
  - 通过**resolve**，可以兑现（**fulfilled**）Promise的状态
  - 通过**reject**，可以拒绝（**reject**）Promise的状态
- 这里需要注意：一旦状态被确定下来，Promise的状态会被 锁死，该Promise的状态是不可更改的
  - 在我们**调用resolve的时候**，如果**resolve传入的值本身不是一个Promise**，那么**会将该Promise的状态变成 兑现（fulfilled）**
  - 在**之后我们去调用reject时，已经不会有任何的响应了**（并不是这行代码不会执行，而是无法改变Promise状态）



### resolve不同值的区别

- 情况一：如果resolve中传入的是**一个普通的值或者对象**，那么**这个值会作为then回调的参数**

  ```js
  const promise = new Promise((resolve, reject) => {
    resolve(["abc", "cba", "nba"]);
  });
  
  promise.then((res) => console.log(res)); // ["abc", "cba", "nba"]
  ```

- 情况二：如果resolve中传入的是**另外一个Promise**，那么**当前的Promise的状态会由传入的Promise来决定**

  ```js
  const p = new Promise((resolve) => {
    resolve("你好 世界")
  });
  
  const promise = new Promise((resolve, reject) => {
    resolve(p);
  });
  
  promise.then((res) => console.log(res)); // 你好 世界
  ```

- 情况三：如果resolve中传入的是**一个对象**，并且这个对象**有实现then方法**，那么**会执行该then方法**，并且根据**then方法的结果来决定Promise的状态**

  ```js
  const promise = new Promise((resolve, reject) => {
    resolve({
      then(resolve) {
        resolve("Hello World");
      },
    });
  });
  
  promise.then((res) => console.log(res)); // Hello World
  ```



### then方法 

- then方法是Promise对象上的一个方法（实例方法）
  - 它其实是放在Promise的原型上的 Promise.prototype.then

#### 接受两个参数

- then方法接受两个参数

  - <b>resolve的回调函数：</b>当状态变成fulfilled时会回调的函数
  - <b>reject的回调函数：</b>当状态变成reject时会回调的函数

  ```js
  const promise = new Promise((resolve, reject) => {
    resolve("success");
  });
  
  promise.then((res) => {}, (err) => {});
  // 等价于
  promise.then((res) => {}).catch((err) => {});
  ```



#### 多次调用

- 一个Promise的then方法是可以**被多次调用**的

  - 当我们调用**resolve回调函数**时Promise的状态**变成fulfilled的时候，这些回调函数都会被执行**
  
  ```js
  const promise = new Promise((resolve, reject) => {
    resolve("success");
  });
  
  promise.then((res) => {
    console.log("成功回调", res);
  });
  promise.then((res) => {
    console.log("成功回调", res);
  });
  promise.then((res) => {
    console.log("成功回调", res);
  });
  ```



#### 返回值

- then方法本身是有返回值的，它的返回值是一个Promise，所以我们可以进行如下的链式调用

  - 但是**then方法返回的Promise到底处于什么样的状态呢？**

- Promise有三种状态，那么这个Promise处于什么状态呢？

  - 当**then方法中的回调函数本身在执行的时候，那么它处于pending**状态
  - 当**then方法中的回调函数返回一个结果**时
    - 情况一：返回值是一个普通的值，那么**将结果作为Promise.resolve的参数**
    - 情况二：返回值是一个Promise，那么**当前的Promise的状态会由传入的Promise来决定**
    - 情况三：返回值是**一个对象**，并且这个对象**有实现then方法**，那么**会执行该then方法**，并且根据**then方法的结果来决定Promise的状态**
  - 当**then方法抛出一个异常时，那么它处于reject状态**

  ```js
  const p = new Promise((resolve, reject) => {
    resolve("你好 世界");
    // reject("error 错误信息 1");
  });
  
  const promise = new Promise((resolve, reject) => {
    resolve(["abc", "cba", "nba"]);
  });
  
  promise.then((res) => console.log(res)); // ["abc", "cba", "nba"]
  
  promise .then((res) => {
    console.log(res); // ["abc", "cba", "nba"]
    return p;
  
  }).then((res) => {
    console.log(res); // 你好 世界
    return {
      then(resolve, reject) {
        resolve("Hello World");
        // reject("error 错误信息 2");
      },
    };
  
  }).then((res) => {
     console.log(res); // Hello World
  
  }).catch((error) => console.log("捕获错误信息:", error));
  ```



### catch方法

- catch方法也是Promise对象上的一个方法（实例方法）
  - 它也是放在Promise的原型上的 Promise.prototype.catch

#### 多次调用

- 一个Promise的catch方法是可以**被多次调用**的

  - 当我们调用**reject回调函数**时Promise的状态**变成rejected的时候，这些回调函数都会被执行**
  
  ```js
  const promise = new Promise((resolve, reject) => {
    reject("failure");
  });
  
  promise.catch((err) => {
    console.log("失败回调", err);
  });
  promise.catch((err) => {
    console.log("失败回调", err);
  });
  promise.catch((err) => {
    console.log("失败回调", err);
  });
  ```



#### 返回值

- 事实上catch方法也是**会返回一个Promise对象**的，所以catch方法后面我们**可以继续调用then方法或者catch方法**

  - 下面的代码，后续是catch中的err2打印，还是then中的res打印呢？
  - 答案是res打印，这是因为catch传入的回调在执行完后，**默认状态依然会是fulfilled的**

  ```js
  const promise = new Promise((resolve, reject) => {
    reject("failure");
  });
  
  promise.catch((err) => {
    console.log("err1:", err); // err1: failure
  }).catch((err) => {
    console.log("err2:", err);
  }).then((res) => {
    console.log("res:", res); // res: undefined
  });
  ```
  
- 那么如果我们希望后续继续执行catch，那么需要抛出一个异常

  ```js
  const promise = new Promise((resolve, reject) => {
    reject("failure");
  });
  
  promise.catch((err) => {
    console.log("err1:", err); // err1: failure
    throw new Error("err1 message");
  }).catch((err) => {
    console.log("err2:", err); // err2: Error: err1 message
  }).then((res) => {
    console.log("res:", res); // res: undefined
  });
  ```



### finally方法

- finally是在ES9（ES2018）中新增的一个特性，表示**无论Promise对象无论变成fulfilled还是rejected状态，最终都会被执行的代码**

- finally方法是不接收参数的，因为无论前面是fulfilled状态，还是rejected状态，它都会执行

  ```js
  const promise = new Promise((resolve, reject) => {
    resolve("aaaa");
  });
  
  promise.then((res) => {
    console.log("res", res);
  }).catch((err) => {
    console.log("err", err);
  }).finally(() => {
    console.log("123456");
  });
  ```



### 类方法

#### resolve方法

- 前面我们学习的then、catch、finally方法都属于**Promise的实例方法**，都是**存放在Promise的prototype上的**

  - 下面我们再来学习一下**Promise的类方法**

- 有时候我们已经有一个**现成的内容**了，希望**将其转成Promise来使用**，这个时候我们可以**使用 Promise.resolve 方法**来完成

  - **Promise.resolve 的用法相当于 new Promise，并且执行 resolve 操作**

- resolve参数的形态

  - 情况一：如果resolve中传入的是**一个普通的值或者对象**，那么**这个值会作为then回调的参数**
  - 情况二：如果resolve中传入的是**另外一个Promise**，那么**当前的Promise的状态会由传入的Promise来决定**
  - 情况三：如果resolve中传入的是**一个对象**，并且这个对象**有实现then方法**，那么**会执行该then方法**，并且根据**then方法的结果来决定Promise的状态**

  ```js
  const promise = Promise.resolve("fulfilled");
  promise.then((res) => console.log(res));
  ```



#### reject方法

- reject方法类似于resolve方法，只是会将Promise对象的状态设置为rejected状态

- Promise.reject 的用法相当于 new Promise，只是会调用reject

- Promise.reject 传入的参数无论是什么形态，都会直接作为reject状态的参数传递到catch的

  ```js
  const promise = Promise.reject("rejected");
  promise.catch((err) => console.log(err));
  ```



#### all方法

- 另外一个类方法是Promise.all

  - 它的作用是**将多个Promise包裹在一起形成一个新的Promise**
  - **新的Promise状态由包裹的所有Promise共同决定**
    - 当**所有的Promise状态变成fulfilled状态时**，**新的Promise状态为fulfilled**，并且会**将所有Promise的返回值组成一个数组**
    - 当**有一个Promise状态为rejected时**，**新的Promise状态为rejected**，并且**会将第一个rejected的返回值作为参数**

  ```js
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("p1 resolve")
      reject("p1 reject");
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolve");
    }, 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 resolve");
    }, 3000);
  });
  
  Promise.all([p1, p2, p3]).then((res) => {
    console.log(res); // ['p1 resolve', 'p2 resolve', 'p3 resolve']
  }).catch((err) => {
    console.log(err); // p1 reject
  });
  ```



#### allSettled方法

- all方法有一个缺陷：当有其中一个Promise变成rejected状态时，新Promise就会立即变成对应的rejected状态

  - 那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的

- 在ES11（ES2020）中，添加了新的API Promise.allSettled

  - 该方法**会在所有的Promise都有结果，无论是fulfilled，还是rejected时，才会有最终的状态**
  - 并且**这个Promise的结果一定是fulfilled**的

- 我们来看一下打印的结果

  + allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的
  + 这个对象中**包含status状态，以及对应的value值**

  ```js
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("p1 resolve")
      reject("p1 reject");
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolve");
    }, 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 resolve");
    }, 3000);
  });
  
  Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res);
    // { status: "rejected", reason: "p1 reject" },
    // { status: "fulfilled", value: "p2 resolve" },
    // { status: "fulfilled", value: "p3 resolve" },
  });
  ```



#### race方法

- 如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法

  - **race是竞技、竞赛的意思**，表示**多个Promise相互竞争**，**谁先有结果，那么就使用谁的结果**

  ```js
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 resolve");
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p2 reject ");
    }, 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 resolve");
    }, 3000);
  });
  
  // 特点: 会等到一个Promise有结果(无论这个结果是 fulfilled 还是 rejected )
  Promise.race([p1, p2, p3]).then((res) => {
    console.log(res); // p1 resolve
  }).catch((err) => {
    console.log(err);
  });
  ```



#### any方法

- any方法是ES12中新增的方法，和race方法是类似的

  - **any方法会等到一个fulfilled状态，才会决定新Promise的状态**
  - 如果**所有的Promise都是reject**的，那么**也会等到所有的Promise都变成rejected状态**，并且会报一个**AggregateError的错误**

  ```js
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1 reject");
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolve")
      // reject("p2 reject");
    }, 2000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p3 reject");
    }, 3000);
  });
  
  Promise.any([p1, p2, p3]).then((res) => {
    console.log(res); // p2 resolve
  }).catch((err) => {
    console.log(err); // AggregateError: All promises were rejected
  });
  ```



## Iterator

### 什么是迭代器

- **迭代器（iterator）**，使用户在**容器对象（container，例如链表或数组）上遍访的对象**，使用该接口**无需关心对象的内部实现细节**

  - 其行为**像数据库中的光标**，迭代器最早出现在**1974年设计的CLU编程语言**中
  - 在各种编程语言的实现中，**迭代器的实现方式各不相同**，但是**基本都有迭代器，比如Java、Python**等

- 从迭代器的定义我们可以看出来，**迭代器是帮助我们对某个数据结构进行遍历的对象**

- 在JavaScript中，**迭代器也是一个具体的对象**，这个对象需要**符合迭代器协议（iterator protocol）**

  - 迭代器协议定义了**产生一系列值（无论是有限还是无限个）的标准方式**
  - 在JavaScript中这个标准就是一个**特定的next方法**

- next方法有如下的要求

  - **一个无参数或者一个参数的函数**，返回一个应当**拥有以下两个属性的对象**
  - **done（boolean）**
    - 如果迭代器**可以产生序列中的下一个值，则为 false**
    - 如果迭代器**已将序列迭代完毕，则为 true**。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值
  - **value**
    - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略

  ```js
  const names = ["abc", "cba", "nba"];
  
  function createArrayIterator(array) {
    let index = 0;
    const iterator = {
      next() {
        if (index < array.length) {
          return { done: false, value: array[index++] };
        } else {
          return { done: true };
        }
      },
    };
    return iterator;
  }
  
  const namesIterator = createArrayIterator(names);
  console.log(namesIterator.next()); // {done: false, value: 'abc'}
  console.log(namesIterator.next()); // {done: false, value: 'cba'}
  console.log(namesIterator.next()); // {done: false, value: 'nba'}
  console.log(namesIterator.next()); // {done: true}
  ```



### 可迭代对象

- 什么又是可迭代对象呢？

  - **它和迭代器是不同的概念**
  - 当一个对象**实现了iterable protocol协议时**，它就是**一个可迭代对象**
  - 这个对象的要求是**必须实现 @@iterator 方法**，在代码中我们**使用 Symbol.iterator 访问该属性**

- 当然我们要问一个问题，我们转成这样的一个东西有什么好处呢？

  - 当**一个对象变成一个可迭代对象**的时候，就可以**进行某些迭代操作**
  - 比如 **for...of 操作**时，其实就会调用它的 @@iterator 方法

  ```js
  // 1.必须实现一个特定的函数: [Symbol.iterator]
  // 2.这个函数需要返回一个迭代器(这个迭代器用于迭代当前的对象)
  const infos = {
    name: "张三",
    age: 18,
    height: 1.83,
    [Symbol.iterator]() {
      let index = 0;
      const keys = Object.keys(this);
      const infosIterator = {
        next() {
          if (index < keys.length) {
            return { done: false, value: keys[index++] };
          } else {
            return { done: true };
          }
        },
      };
      return infosIterator;
    },
  };
  
  const iterator = infos[Symbol.iterator]();
  console.log(iterator.next()); // {done: false, value: 'name'}
  console.log(iterator.next()); // {done: false, value: 'age'}
  console.log(iterator.next()); // {done: false, value: 'height'}
  console.log(iterator.next()); // {done: true}
  
  for (const key of infos) {
    console.log(key); // name age height
  }
  ```



### 原生迭代器对象

- 事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个可迭代对象的

  - String、Array、Map、Set、arguments对象、NodeList集合

  ```js
  const names = ["张三", "李四", "王五"];
  const namesIterator = names[Symbol.iterator]();
  console.log(namesIterator.next()); // {value: '张三', done: false}
  console.log(namesIterator.next()); // {value: '李四', done: false}
  console.log(namesIterator.next()); // {value: '王五', done: false}
  console.log(namesIterator.next()); // {value: undefined, done: true}
  
  function foo() {
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator.next()); // {value: 123, done: false}
    console.log(iterator.next()); // {value: 321, done: false}
    console.log(iterator.next()); // {value: 111, done: false}
    console.log(iterator.next()); // {value: 222, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}
  }
  
  foo(123, 321, 111, 222);
  ```



### 可迭代对象的应用

- 那么这些东西可以被用在哪里呢？

  - JavaScript中语法：for ...of、展开语法、yield*、解构赋值
  - 创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])
  - 一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)

  ```js
  function foo(name1, name2, ...args) {
    console.log(name1, name2, args); // 张三 李四 (2) ['王五', '韩梅梅']
  }
  
  const obj = {
    name1: "张三",
    name2: "李四",
    name3: "王五",
    name4: "韩梅梅",
    [Symbol.iterator]() {
      let index = 0;
      const values = Object.values(this);
      const iterator = {
        next() {
          if (index < values.length) {
            return { done: false, value: values[index++] };
          } else {
            return { done: true };
          }
        },
      };
      return iterator;
    },
  };
  
  foo(...obj);
  ```



### 迭代器的中断

- 迭代器在某些情况下会在没有完全迭代的情况下中断

  - 比如遍历的过程中通过**break、return、throw**中断了循环操作
  - 比如在解构的时候，没有解构所有的值

- 那么这个时候我们想要监听中断的话，可以添加return方法

  ```js
  const infos = {
    name: "张三",
    age: 18,
    height: 1.83,
    [Symbol.iterator]() {
      let index = 0;
      const keys = Object.keys(this);
      const infosIterator = {
        next() {
          if (index < keys.length) {
            return { done: false, value: keys[index++] };
          } else {
            return { done: true };
          }
        },
        return() {
          console.log("监听到迭代器中断了");
          return { done: true };
        },
      };
      return infosIterator;
    },
  };
  
  for (const key of infos) {
    if (key === "age") {
      break;
    }
    console.log(key); // name
  }
  ```



## Generator

### 什么是生成器

- 生成器是ES6中新增的一种**函数控制、使用的方案**，它可以让我们**更加灵活的控制函数什么时候继续执行、暂停执行**等
  - 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常
- 生成器函数也是一个函数，但是和普通的函数有一些区别
  - 首先，**生成器函数需要在function的后面加一个符号：***
  - 其次，**生成器函数可以通过yield关键字来控制函数的执行流程**
  - 最后，**生成器函数的返回值是一个Generator（生成器）**
    - **生成器事实上是一种特殊的迭代器**



### 生成器函数执行

- 我们发现下面的生成器函数foo的执行体压根没有执行，它只是返回了一个生成器对象

  ```js
  function* foo() {
    console.log("1111");
    console.log("2222");
  
    console.log("3333");
    console.log("4444");
  
    console.log("5555");
    console.log("6666");
  }
  
  console.log(foo()); // foo {<suspended>}
  ```

  - 那么我们**如何可以让它执行函数中的东西呢？调用next即可**
  - 我们之前学习迭代器时，知道**迭代器的next是会有返回值**的
  - 但是我们很多时候**不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果**

  ```js
  // 生成器函数:
  //   1.function后面会跟上星号: *
  //   2.代码的执行可以被 yield 控制
  //   3.生成器函数默认在执行时, 返回一个生成器对象
  //     * 要想执行函数内部的代码, 需要生成器对象, 调用它的 next 操作
  //     * 当遇到 yield 时, 就会中断执行
  
  function* foo() {
    console.log("1111");
    console.log("2222");
    yield "返回值-1";
  
    console.log("3333");
    console.log("4444");
    yield "返回值-2";
  
    console.log("5555");
    console.log("6666");
    return "return-返回值";
  }
  
  const generator = foo();
  // 1111
  // 2222
  // {value: '返回值-1', done: false}
  console.log(generator.next());
  
  // 3333
  // 4444
  // {value: '返回值-2', done: false}
  console.log(generator.next());
  
  // 5555
  // 6666
  // {value: 'return-返回值', done: true}
  console.log(generator.next());
  ```



### 生成器传递参数 – next函数

- 函数既然可以暂停来分段执行，那么函数应该是可以传递参数的，我们是否可以给每个分段来传递参数呢？

  - 答案是**可以的**
  - 我们在**调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值**
  - 注意：**也就是说我们是为本次的函数代码块执行提供了一个值**

  ```js
  function* foo(data1) {
    console.log("1111");
    console.log("2222");
    console.log(data1);
    const data2 = yield "返回值-1";
  
    console.log("3333");
    console.log("4444");
    console.log(data2);
    const data3 = yield "返回值-2";
  
    console.log("5555");
    console.log("6666");
    console.log(data3);
    return "return-返回值";
  }
  
  const generator = foo("参数-1");
  // 1111
  // 2222
  // 参数-1
  // {value: '返回值-1', done: false}
  console.log(generator.next());
  
  // 3333
  // 4444
  // 参数-2
  // {value: '返回值-2', done: false}
  console.log(generator.next("参数-2"));
  
  // 5555
  // 6666
  // 参数-3
  // {value: 'return-返回值', done: true}
  console.log(generator.next("参数-3"));
  ```



### 生成器提前结束 – return函数

- 还有一个可以给生成器函数传递参数的方法是通过return函数

  - **return传值后这个生成器函数就会结束，之后调用next不会继续生成值了**

  ```js
  function* foo(data1) {
    console.log("1111");
    console.log("2222");
    console.log(data1);
    const data2 = yield "返回值-1";
  
    console.log("3333");
    console.log("4444");
    console.log(data2);
    const data3 = yield "返回值-2";
  
    console.log("5555");
    console.log("6666");
    console.log(data3);
    return "return-返回值";
  }
  
  const generator = foo("参数-1");
  // 1111
  // 2222
  // 参数-1
  // {value: '返回值-1', done: false}
  console.log(generator.next());
  
  // {value: '终止', done: true}
  console.log(generator.return("终止"));
  
  // {value: undefined, done: true}
  console.log(generator.next("参数-3"));
  ```



### 生成器抛出异常 – throw函数

- 除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常

  - **抛出异常后我们可以在生成器函数中捕获异常**
  - 但是在**catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行**

  ```js
  function* foo() {
    console.log("函数开始执行");
    try {
      yield "返回值-1";
    } catch (error) {
      console.log("内部捕获异常", error);
    }
    yield "返回值-2";
  
    console.log("函数结束执行");
  }
  
  const generator = foo();
  
  // 函数开始执行
  // {value: '返回值-1', done: false}
  console.log(generator.next());
  
  // 内部捕获异常 error message
  // {value: '返回值-2', done: false}
  console.log(generator.throw("error message"));
  
  // 函数结束执行
  // {value: undefined, done: true}
  console.log(generator.next());
  ```



### 生成器替代迭代器

- 我们发现生成器是一种特殊的迭代器，那么在某些情况下我们可以使用生成器来替代迭代器

  ```js
  const names = ["abc", "cba", "nba"];
  
  function* createArrayIterator(array) {
    for (let i = 0; i < array.length; i++) {
      yield array[i];
    }
  }
  
  const namesIterator = createArrayIterator(names);
  console.log(namesIterator.next()); // {value: 'abc', done: false}
  console.log(namesIterator.next()); // {value: 'cba', done: false}
  console.log(namesIterator.next()); // {value: 'nba', done: false}
  console.log(namesIterator.next()); // {value: undefined, done: true}
  ```

- 事实上我们还可以使用 yield* 来生产一个可迭代对象

  - 这个时候相当于是**一种yield的语法糖**，只不过会**依次迭代这个可迭代对象，每次迭代其中的一个值**

  ```js
  const infos = {
    name: "张三",
    age: 18,
    height: 1.83,
    *[Symbol.iterator]() {
      yield* Object.keys(this);
    },
  };
  
  const iterator = infos[Symbol.iterator]();
  console.log(iterator.next()); // {value: 'name', done: false}
  console.log(iterator.next()); // {value: 'age', done: false}
  console.log(iterator.next()); // {value: 'height', done: false}
  console.log(iterator.next()); // {value: undefined, done: true}
  
  for (const key of infos) {
    console.log(key); // name age height
  }
  ```



## async、await

### 异步函数

- async关键字用于声明一个异步函数

  - async是asynchronous单词的缩写，异步、非同步
  - sync是synchronous单词的缩写，同步、同时

- async异步函数可以有很多中写法

  ```js
  async function foo1() {}
  
  const foo2 = async function () {};
  
  const foo3 = async () => {};
  
  class Person {
    async foo() {}
  }
  ```



### 异步函数的执行流程

- 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行

  ```js
  async function foo() {
    console.log("1"); // 1
    console.log("2"); // 2
    console.log("3"); // 3
  }
  foo();
  ```

- 异步函数有返回值时，和普通函数会有区别

  - 情况一：返回值是一个普通的值，那么**将结果作为Promise.resolve的参数**

  ```js
  async function foo() {
    // 相当于 Promise.resolve(["abc", "cba", "nba"])
    return ["abc", "cba", "nba"];
  }
  
  foo().then((res) => {
    console.log(res); // ['abc', 'cba', 'nba']
  });
  ```

  - 情况二：返回值是一个Promise，那么**当前的Promise的状态会由传入的Promise来决定**

  ```js
  async function foo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("你好 世界");
      }, 1000);
    });
  }
  
  foo().then((res) => {
    console.log(res); // 你好 世界
  });
  ```

  - 情况三：返回值是**一个对象**，并且这个对象**有实现then方法**，那么**会执行该then方法**，并且根据**then方法的结果来决定Promise的状态**

  ```js
  async function foo() {
    return {
      then(resolve, reject) {
        resolve("Hello World");
      },
    };
  }
  
  foo().then((res) => {
    console.log(res); // Hello World
  });
  ```

- 如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递

  ```js
  // 如果异步函数中有抛出异常(产生了错误), 这个异常不会被浏览器立即处理
  // 进行如下处理: Promise.reject(error)
  async function foo() {
    console.log("1"); // 1
    console.log("2"); // 2
    console.log("3"); // 3
    throw new Error("async function error");
  
    return "ヾ(◍°∇°◍)ﾉﾞ";
  }
  
  foo()
    .then((res) => console.log(res))
    .catch((err) => {
    console.log(err); // async function error
    console.log("继续执行其他的逻辑代码");
  });
  ```



### await关键字

- **async函数另外一个特殊之处**就是可以在它内部**使用await关键字**，而**普通函数中是不可以**的

- await关键字有什么特点呢？

  - 通常使用await是后面会**跟上一个表达式**，这个**表达式会返回一个Promise**
  - 那么await会**等到Promise的状态变成fulfilled状态之后，继续执行异步函数**

- 如果await后面是一个**普通的值**，那么会**直接返回这个值**

- 如果await后面是一个**thenable的对象**，那么会根据对象的**then方法调用来决定后续的值**

- 如果await后面的表达式，返回的Promise是**reject的状态**，那么会将这个**reject结果直接作为函数的Promise的reject值**

  ```js
  async function foo() {
    const res1 = await 123;
    console.log(res1); // 123
  
    const res2 = await {
      then(resolve, reject) {
        resolve("thenable");
        // reject("错误信息 - thenable");
      },
    };
    console.log(res2); // thenable
  
    const res3 = await Promise.resolve("Hello World");
    console.log(res3); // Hello World
  
    const res4 = await Promise.reject("错误信息");
    console.log(res4);
  
    console.log("后续代码");
  }
  
  foo().then((res) => console.log("成功", res))
    	 .catch((err) => console.log("失败", err)); // 失败 错误信息
  ```



## 进程、线程、任务队列

### 进程和线程

- 线程和进程是操作系统中的两个概念
  - **进程（process）：**计算机**已经运行的程序**，是**操作系统管理程序**的一种方式
  - **线程（thread）：**操作系统能够运行**运算调度的最小单位**，通常情况下**它被包含在进程**中
- 听起来很抽象，这里还是给出我的解释
  - **进程：**我们可以认为，启动**一个应用程序**，就会默认**启动一个进程**（也可能是多个进程）
  - **线程：**每**一个进程**中，都会启动**至少一个线程**用来执行程序中的代码，这个线程被称之为**主线程**
  - 所以我们也可以说进程是线程的容器
- 再用一个形象的例子解释
  - 操作系统类似于一个大工厂
  - 工厂中里有很多车间，这个车间就是进程
  - 每个车间可能有一个以上的工人在工厂，这个工人就是线程



### 操作系统的工作方式

- 操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作呢？
  - 这是因为**CPU的运算速度非常快**，它可以**快速的在多个进程之间迅速的切换**
  - 当我们**进程中的线程**获取到**时间片**时，就可以**快速执行我们编写的代码**
  - 对于用户来说**是感受不到这种快速的切换**的
- 你可以在Mac的活动监视器或者Windows的资源管理器中查看到很多进程



### 浏览器中的JavaScript线程

- 我们经常会说**JavaScript是单线程（可以开启workers）的**，但是**JavaScript的线程应该有自己的容器进程：浏览器或者Node**
- 浏览器是一个进程吗，它里面只有一个线程吗？
  - 目前**多数的浏览器其实都是多进程**的，当我们**打开一个tab页面时就会开启一个新的进程**，这是为了**防止一个页面卡死而造成所有页面无法响应**，整个浏览器需要强制退出
  - **每个进程中又有很多的线程**，其中**包括执行JavaScript代码的线程**
- JavaScript的代码执行是在一个单独的线程中执行的
  - 这就意味着JavaScript的代码，在**同一个时刻只能做一件事**
  - 如果**这件事是非常耗时**的，就意味着当前的线程就**会被阻塞**
- 所以**真正耗时的操作**，实际上**并不是由JavaScript线程在执行**的
  - 浏览器的每个进程是多线程的，那么**其他线程可以来完成这个耗时的操作**
  - 比如**网络请求、定时器**，我们只需要在特性的时候执行应该有的回调即可



### 宏任务和微任务

- 但是事件循环中并非只维护着一个队列，事实上是有两个队列

  - <b>宏任务队列（macrotask queue）：</b>ajax、setTimeout、setInterval、DOM监听、UI Rendering 等
  - <b>微任务队列（microtask queue）：</b>Promise的then回调、 Mutation Observer API、queueMicrotask() 等

- 那么事件循环对于两个队列的优先级是怎么样的呢？

  - **main script 中的代码优先执行（编写的顶层script代码）**
  - 在**执行任何一个宏任务之前（不是队列，是一个宏任务）**，都会**先查看微任务队列中是否有任务需要执行**
    - 也就是**宏任务执行之前**，**必须保证微任务队列是空的**
    - 如果**不为空**，那么就**优先执行微任务队列中的任务**

- 下面我们通过几到面试题来练习一下

  - Promise面试题

  ```js
  console.log("script start");
  
  setTimeout(function () {
    console.log("setTimeout1");
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        console.log("then4");
      });
      console.log("then2");
    });
  });
  
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("then1");
  });
  
  setTimeout(function () {
    console.log("setTimeout2");
  });
  
  console.log(2);
  
  queueMicrotask(() => {
    console.log("queueMicrotask1");
  });
  
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    console.log("then3");
  });
  
  console.log("script end");
  /*
  执行顺序
    script startd
    promise1
    2
    script end
  
  	then1
  	queueMicrotask1
    then3
  
    setTimeout1
    then2
    then4
    setTimeout2
  */
  // 宏任务队列: setTimeout1, setTimeout2
  // 微任务队列: then1, queueMicrotask1, then3, then4(setTimeout1)里面的微任务
  ```

  - promise async await 面试题
  - **await 上面的代码都是同步执行的，await 下面的代码都是在 Promise.then 的回调函数中执行的**

  ```js
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  }
  
  async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
  
    // async function async2
    // 一个函数的默认返回值是 undefined
    // 异步函数返回值是一个普通的值，那么将结果作为 Promise.resolve 的参数
    // return Promise.resolve(undefined)
  
    // Promise.resolve(undefined).then(() => {
    //   console.log("async1 end");
    // });
  }
  
  async function async2() {
    console.log("async2");
  }
  
  console.log("script start");
  
  setTimeout(function () {
    console.log("setTimeout");
  }, 0);
  
  async1();
  
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
  
  console.log("script end");
  /*
  执行顺序
    script start
    async1 start
    async2
    promise1
    script end
  
    async1 end
    promise2
  
    setTimeout
  */
  // 宏任务队列: setTimeout
  // 微任务队列: async1 end, promise2
  ```



## 错误处理方案

- 开发中我们会封装一些工具函数，封装之后给别人使用
  - 在其他人使用的过程中，**可能会传递一些参数**
  - 对于函数来说，需要**对这些参数进行验证**，否则可能得到的是我们不想要的结果
- 很多时候我们可能验证到不是希望得到的参数时，就会直接 return
  - 但是 return 存在很大的弊端，**调用者不知道是因为函数内部没有正常执行**，还是**执行结果就是一个undefined**
  - 事实上，正确的做法应该是**如果没有通过某些验证，那么应该让外界知道函数内部报错了**
- 如何可以让一个函数告知外界自己内部出现了错误呢？
  - 通过**throw关键字**，抛出一个异常
- throw语句
  - **throw语句用于抛出一个用户自定义的异常**
  - 当**遇到throw语句时，当前的函数执行会被停止**（throw后面的语句不会执行）
- 如果我们执行代码，就会报错，拿到错误信息的时候我们可以及时的去修正代码



### throw关键字

- throw表达式就是在throw后面可以跟上一个表达式来表示具体的异常信息

- throw关键字可以跟上哪些类型呢？

  - <b>基本数据类型：</b>number、string、Boolean
  - <b>对象类型：</b>对象类型可以包含更多的信息

  ```js
  function foo() {
    console.log("foo function1");
  
    throw "错误信息";
    // throw { errMessage: "错误信息", errCode: -1001 }
  
    console.log("foo function2");
    console.log("foo function3");
  }
  
  foo();
  ```

- 但是每次写这么长的对象又有点麻烦，所以我们可以创建一个类

  ```js
  class myError {
    constructor(errMessage, errCode) {
      this.errMessage = errMessage;
      this.errCode = errCode;
    }
  }
  
  function foo() {
    console.log("foo function1");
  
    throw new myError("错误信息", -1001);
  
    console.log("foo function2");
    console.log("foo function3");
  }
  
  foo();
  ```



### Error类型

- 事实上，JavaScript已经给我们提供了一个Error类，我们可以直接创建这个类的对象

  ```js
  function foo() {
    throw new Error("错误信息");
  }
  
  foo();
  ```

- Error包含三个属性

  - <b>messsage：</b>创建Error对象时传入的message
  - <b>name：</b>Error的名称，通常和类的名称一致
  - <b>stack：</b>整个Error的错误信息，包括函数的调用栈，当我们直接打印Error对象时，打印的就是stack

- Error有一些自己的子类

  - RangeError：下标值越界时使用的错误类型
  - SyntaxError：解析语法错误时使用的错误类型
  - TypeError：出现类型错误时，使用的错误类型



### 异常的处理

- 我们会发现在之前的代码中，一个函数抛出了异常，调用它的时候程序会被强制终止

  - 这是因为如果我们在调用一个函数时，这个函**数抛出了异常**，但是我们**并没有对这个异常进行处理**，那么这个**异常会继续传递到上一个函数调用**中
  - 而如果**到了最顶层（全局）的代码中依然没有对这个异常的处理代码**，这个时候就会报错并且终止程序的运行

- 我们先来看一下这段代码的异常传递过程

  - foo函数在被执行时会抛出异常，也就是我们的bar函数会拿到这个异常
  - 但是bar函数并没有对这个异常进行处理，那么这个异常就会被继续传递到调用bar函数的函数，也就是test函数
  - 但是test函数依然没有处理，就会继续传递到我们的全局代码逻辑中
  - 依然没有被处理，这个时候程序会终止执行，后续代码都不会再执行了

  ```js
  function foo() {
    throw new Error("错误信息");
  }
  
  function bar() {
    foo();
  }
  
  function test() {
    bar();
  }
  
  test();
  console.log("test 后续代码");
  ```



### 异常的捕获

- 但是很多情况下当出现异常时，我们并不希望程序直接推出，而是希望可以正确的处理异常

  - 这个时候我们就**可以使用 try catch**

  ```js
  function foo() {
    throw new Error("错误信息");
  }
  
  function bar() {
    try {
      foo();
    } catch (error) {
      console.log("bar 函数捕获到了异常", error); // bar 函数捕获到了异常 Error: 错误信息
    }
  }
  
  function test() {
    bar();
  }
  
  test();
  console.log("test 后续代码"); // test 后续代码
  ```

- 在ES10（ES2019）中，catch 后面绑定的 error 可以省略

- 当然，如果有一些必须要执行的代码，我们可以使用finally来执行

  - finally 表示最终一定会被执行的代码结构

- 注意：如果 try 和 finally 中都有返回值，那么会使用 finally 当中的返回值

  ```js
  function foo() {
    throw new Error("错误信息");
  }
  
  function bar() {
    try {
      foo();
      return "try 中的返回值";
    } catch (error) {
      console.log("bar 函数捕获到了异常", error); // bar 函数捕获到了异常 Error: 错误信息
    } finally {
      console.log("finally 中的代码"); // finally 中的代码
      return "finally 中的返回值";
    }
  }
  
  function test() {
    console.log(bar()); // finally 中的返回值
  }
  
  test();
  console.log("test 后续代码"); // test 后续代码
  ```



## Storage

- WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式
  - **localStorage：**本地存储，提供的是一种**永久性的存储方法**，在关闭掉网页重新打开时，存储的内容依然保留
  - **sessionStorage：**会话存储，提供的是**本次会话的存储**，在关闭掉网页重新打开时，存储的内容会被清除



### localStorage和sessionStorage的区别

- 我们会发现localStorage和sessionStorage看起来非常的相似
- 那么它们有什么区别呢？
  - 验证一：关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除
  - 验证二：在页面内实现跳转，localStorage会保留，sessionStorage也会保留
  - 验证三：在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留



### Storage常见的方法和属性

- Storage有如下的属性和方法
- 属性
  - Storage.length：只读属性
    - 返回一个整数，表示存储在Storage对象中的数据项数量
- 方法
  - Storage.key(index)，该方法接受一个数值n作为参数，返回存储中的第n个key名称
  - Storage.getItem()，该方法接受一个key作为参数，并且返回key对应的value
  - Storage.setItem()，该方法接受一个key和value，并且将会把key和value添加到存储中
  - Storage.removeItem()，该方法接受一个key作为参数，并把该key从存储中删除
  - Storage.clear()，该方法的作用是清空存储中的所有key



## 正则表达式

- 我们先来看一下维基百科对正则表达式的解释

  - 正则表达式（英语：Regular Expression，常简写为regex、regexp或RE），又称正则表示式、正则表示法、规则表达式、常规表示法，是计算机科学的一个概念
  - 正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串
  - 许多程序设计语言都支持利用正则表达式进行字符串操作

- 简单概况：**正则表达式是一种字符串匹配利器，可以帮助我们搜索、获取、替代字符串**

- 在JavaScript中，正则表达式使用RegExp类来创建，也有对应的字面量的方式

  - 正则表达式主要由两部分组成：模式（patterns）和修饰符（flags）

  ```js
  const reg1 = new RegExp("hello", "i");
  const reg2 = /hello/i;
  ```



### 使用方法

- 有了正则表达式我们要如何使用它呢？

  - JavaScript中的正则表达式被用于 RegExp 的 exec 和 test 方法
  - 也包括 String 的 match、matchAll、replace、search 和 split 方法

  | 方法     | 描述                                                         |
  | -------- | ------------------------------------------------------------ |
  | exec     | 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null） |
  | test     | 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false |
  | match    | 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null |
  | matchAll | 一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator） |
  | search   | 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1 |
  | replace  | 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串 |
  | split    | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法 |



### 修饰符的使用

- 常见的修饰符

  | flag | 含义                   |
  | ---- | ---------------------- |
  | g    | 全部的，给我匹配全部的 |
  | i    | 忽略大小写             |
  | m    | 多行匹配               |

- 需求

  - 获取一个字符串中所有的 abc
  - 将一个字符串中的所有 abc 换成大写

  ```js
  const message = "Hello ABC, abc Abc, AAabc, cba, nba";
  const reg1 = /abc/ig;
  
  const newMessage1 = message.match(reg1);
  console.log(newMessage1); // ['ABC', 'abc', 'Abc', 'abc']
  
  const newMessage2 = message.replaceAll(reg1, "ABC");
  console.log(newMessage2); // Hello ABC, ABC ABC, AAABC
  ```



### 规则

#### 字符类

- 字符类（Character classes） 是一个特殊的符号，匹配特定集中的任何符号

  | 字符 | 含义                                                         |
  | ---- | ------------------------------------------------------------ |
  | \d   | 数字：从 0 到 9 的字符                                       |
  | \s   | 空格符号：包括空格，制表符 \t，换行符 \n 和其他少数稀有字符，例如 \v，\f 和 \r |
  | \w   | “单字” 字符：拉丁字母或数字或下划线 _                        |
  | .    | 点 . 是一种特殊字符类，它与 “除换行符之外的任何字符” 匹配    |

- 反向类

  - \D 非数字：除 \d 以外的任何字符，例如字母
  - \S 非空格符号：除 \s 以外的任何字符，例如字母
  - \W 非单字字符：除 \w 以外的任何字符，例如非拉丁字母或空格

  ```js
  const message = "ABCTTF4 22242ASFNTANF2242";
  const reg1 = /\d+/gi;
  
  console.log(message.match(reg1)); // ['4', '22242', '2242']
  ```



#### 锚点

- 符号 ^ 和符号 $ 在正则表达式中具有特殊的意义，它们被称为 “锚点”

  - 符号 ^ 匹配文本开头
  - 符号 $ 匹配文本末尾

  ```js
  const message = "My name is -VOV-";
  
  console.log(/^my/i.test(message)); // true
  console.log(/-VOV-$/i.test(message)); // true
  ```

- 词边界（Word boundary）

  - 词边界 \b 是一种检查，就像 ^ 和 $ 一样，它会检查字符串中的位置是否是词边界
  - 词边界测试 \b 检查位置的一侧是否匹配 \w，而另一侧则不匹配 “\w”

- 匹配下面字符串中的时间

  ```js
  const infos = "now time is 10:30, 12:00 eat food, number is 123:456";
  const timeReg = /\b\d\d:\d\d\b/gi;
  console.log(infos.match(timeReg)); // ['10:30', '12:00']
  ```



#### 转义字符串

- 如果要把特殊字符作为常规字符来使用，需要对其进行转义

  - 只需要在它前面加个反斜杠

- 常见的需要转义的字符：**[] \ ^ $ . | ? * + ( )**

  - 斜杠符号 ‘/’ 并不是一个特殊符号，但是在字面量正则表达式中也需要转义

- 练习：匹配所有以 .js 或者 .jsx 结尾的文件名，在webpack当中，匹配文件名时就是以这样的方式

  ```js
  const fileNames = [
    "abc.html",
    "Home.jsx",
    "index.html",
    "index.js",
    "util.js",
    "format.js",
  ];
  
  // ?: x是 0个 或者 1个
  const reg1 = /\.jsx?$/;
  const newFileNames = fileNames.filter((filename) => reg1.test(filename));
  console.log(newFileNames); // ['Home.jsx', 'index.js', 'util.js', 'format.js']
  ```



### 集合和范围

- 有时候我们只要选择多个匹配字符的其中之一就可以

  - 在方括号 […] 中的几个字符或者字符类意味着 “搜索给定的字符中的任意一个”

- 集合（Sets）

  - 比如说 [eao] 意味着查找在 3 个字符 ‘a’、‘e’ 、‘o’ 中的任意一个

- 范围（Ranges）

  - 方括号也可以包含字符范围
  - 比如说 [a-z] 会匹配从 a 到 z 范围内的字母，[0-5] 表示从 0 到 5 的数字
  - [0-9A-F] 表示两个范围：它搜索一个字符，满足数字 0 到 9 或字母 A 到 F
  - \d —— 和 [0-9] 相同
  - \w —— 和 [a-zA-Z0-9_] 相同

- 案例：匹配手机号码

- 排除范围：除了普通的范围匹配，还有类似 `[^...] ` 的 “排除” 范围匹配

  ```js
  const phoneList = ["132", "130", "110", "120", "133", "155"];
  const reg1 = /^1[3456789]\d/;
  const filterPhone = phoneList.filter((phone) => reg1.test(phone));
  console.log(filterPhone); // ['132', '130', '133', '155']
  
  const phoneNum = "133888855555";
  const reg2 = /^1[3-9]\d{9}$/;
  console.log(reg2.test(phoneNum)); // false
  ```



### 量词

- 假设我们有一个字符串 "+7(903)-123-45-67" 并且想要找到它包含的所有数字

  - 因为它们的数量是不同的，所以我们需要给与数量一个范围
  - 用来形容我们所需要的数量的词被称为**量词（ Quantifiers ）**

- 数量 {n}

  - 确切的位数：{5}
  - 某个范围的位数：{3,5}

- 缩写

  - +：代表  “一个或多个”，相当于 {1,}
  - ?：代表  “零个或一个”，相当于 {0,1}。换句话说，它使得符号变得可选
  - *：代表  “零个或多个”，相当于 {0,}。  也就是说，这个字符可以多次出现或不出现

- 案例：匹配开始或结束标签

  ```js
  const message = "+7(903)-123-45-67";
  const reg1 = /\d{3,5}/gi;
  console.log(message.match(reg1)); // ['903', '123']
  
  const htmlElement = `
  	<div>
  		<span>哈哈哈</span>
  		<h2>我是标题</h2>
  	</div>
  `;
  const reg2 = /<\/?[a-z][a-z0-9]*>/gi;
  console.log(htmlElement.match(reg2));
  // ['<div>', '<span>', '</span>', '<h2>', '</h2>', '</div>']
  ```



### 贪婪和惰性模式

- 如果我们有这样一个需求：匹配下面字符串中所有使用《》包裹的内容

  ```js
  const message = "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》";
  
  // .+ 采用贪婪模式
  const reg1 = /《.+》/gi;
  console.log(message.match(reg1)); // ['《黄金时代》和《沉默的大多数》']
  
  // 使用惰性模式
  const reg2 = /《.+?》/gi;
  console.log(message.match(reg2)); // ['《黄金时代》', '《沉默的大多数》']
  ```

- 默认情况下的匹配规则是查找到匹配的内容后，会继续向后查找，一直找到最后一个匹配的内容

  - 这种匹配的方式，我们称之为**贪婪模式（Greedy）**

- **懒惰模式**中的量词与贪婪模式中的是相反的

  - 只要获取到对应的内容后，就不再继续向后匹配
  - 我们可以在量词后面再加一个问号 ? 来启用它
  - 所以匹配模式变为 *? 或 +?，甚至将 ? 变为 ??



### 捕获组

- 模式的一部分可以用括号括起来 (...)，这称为 "捕获组（capturing group）"

- 这有两个作用

  - 它允许将匹配的一部分作为结果数组中的单独项
  - 它将括号视为一个整体

- 方法 str.match(regexp)，如果 regexp 没有 g 标志，将查找第一个匹配并将它作为一个数组返回

  - 在索引 0 处：完全匹配
  - 在索引 1 处：第一个括号的内容
  - 在索引 2 处：第二个括号的内容
  - …等等

- 案例：匹配到HTML标签，并且获取其中的内容

  ```js
  const message = "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》";
  const reg1 = /《(.+?)》/gi;
  console.log(message.match(reg1)); // ['《黄金时代》', '《沉默的大多数》']
  
  const RegExpStringIterator = message.matchAll(reg1);
  console.log(RegExpStringIterator.next());
  // {
  // done: false,
  // value: [
  //   "《黄金时代》",
  //   "黄金时代",
  //   groups: undefined,
  //   index: 10,
  //   input: "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》",
  //   length: 2
  // ]}
  console.log(RegExpStringIterator.next());
  // {
  // done: false,
  // value: [
  //   "《沉默的大多数》",
  //   "沉默的大多数",
  //   groups: undefined,
  //   index: 17,
  //   input: "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》",
  //   length: 2
  // ]}
  ```

- 命名组

  - 用数字记录组很困难
  - 对于更复杂的模式，计算括号很不方便。我们有一个更好的选择：给括号起个名字
  - 这是通过在开始括号之后立即放置 `?<name>` 来完成的

  ```js
  const message = "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》";
  
  const reg1 = /(?:《)(?<bookName>.+?)(?:》)/gi;
  const iterator = message.matchAll(reg1);
  for (const item of iterator) {
    console.log(item);
  	/* 
  	[
      0: "《黄金时代》"
      1: "黄金时代"
      groups: {bookName: '黄金时代'}
      index: 10
      input: "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》"
      length: 2
  	]
  	*/
  
  	/* 
  	[
  		0: "《沉默的大多数》"
  		1: "沉默的大多数"
      groups: {bookName: '沉默的大多数'}
      index: 17
      input: "我最喜欢的两本书: 《黄金时代》和《沉默的大多数》"
      length: 2
  	] 
  	*/
  }
  ```

- 非捕获组

  - 有时我们需要括号才能正确应用量词，但我们不希望它们的内容出现在结果中
  - 可以通过在开头添加 ?: 来排除组

- or是正则表达式中的一个术语，实际上是一个简单的 “或”

  - 在正则表达式中，它用竖线 | 表示
  - 通常会和捕获组一起来使用，在其中表示多个值



## XHR、Fetch

### 前后端分离的优势

- 早期的网页都是通过后端渲染来完成的：服务器端渲染（SSR，server side render）
  - 客户端发出请求 -> 服务端接收请求并返回相应HTML文档 -> 页面刷新 -> 客户端加载新的HTML文档
- 服务器端渲染的缺点
  - 当用户点击页面中的某个按钮向服务器发送请求时，页面本质上只是**一些数据发生了变化**，而此时**服务器却要将重绘的整个页面**再返回给浏览器加载，这显然有悖于程序员的 **“DRY（ Don‘t repeat yourself ）”** 原则
  - 而且明明只是一些数据的变化却迫使服务器要返回整个HTML文档，这本身也会给**网络带宽带来不必要的开销**
- 有没有办法在页面数据变动时，**只向服务器请求新的数据**，并且**在阻止页面刷新的情况下**，**动态的替换页面中展示的数据呢？**
  - 答案正是 **“AJAX”**
- AJAX是 “Asynchronous JavaScript And XML” 的缩写(异步的JavaScript和XML)，是一种实现 **无页面刷新 获取服务器数据的技术**
  - AJAX最吸引人的就是它的 “异步” 特性，也就是说它可以**在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面**
- 你可以使用AJAX最主要的两个特性做下列事
  - 在**不重新加载页面的情况下发送请求**给服务器
  - **接受并使用从服务器发来的数据**



### 服务器端渲染

![服务器端渲染](https://raw.githubusercontent.com/yacan8/blog/master/images/服务端渲染原理/image-20200731115513579.png)



### 前后端分离

![前后端分离](https://raw.githubusercontent.com/yacan8/blog/master/images/服务端渲染原理/image-20200731142605631.png)



### 什么是HTTP

- 什么是HTTP呢？我们来看一下维基百科的解释
  - **超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）**是一种用于分布式、协作式和超媒体信息系统的**应用层协议**
  - HTTP是万维网的数据通信的基础，设计HTTP最初的目的是为了提供一种**发布和接收HTML页面的方法**
  - 通过**HTTP或者HTTPS协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识**
- HTTP是一个客户端（用户）和服务端（网站）之间请求和响应的标准
  - 通过使用**网页浏览器、网络爬虫或者其它的工具**，客户端发起一个**HTTP请求**到服务器上指定端口（默认端口为80）
    - 我们称这个**客户端为用户代理程序（user agent）**
  - **响应的服务器上存储着一些资源**，比如HTML文件和图像
    - 我们称这个**响应服务器为源服务器（origin server）**



#### 组成

- 一次HTTP请求主要包括：请求（Request）和响应（Response）



#### 版本

- HTTP/0.9 
  - 发布于1991年
  - 只支持GET请求方法获取文本数据，当时主要是为了获取HTML页面内容
- HTTP/1.0 
  - 发布于1996年
  - 支持POST、HEAD等请求方法，支持请求头、响应头等，支持更多种数据类型(不再局限于文本数据) 
  - 但是浏览器的每次请求都需要与服务器建立一个TCP连接，请求处理完成后立即断开TCP连接，每次建立连接增加了性能损耗
- HTTP/1.1 (目前使用最广泛的版本) 
  - 发布于1997年
  - 增加了PUT、DELETE等请求方法
  - 采用持久连接 (Connection: keep-alive) 多个请求可以共用同一个TCP连接
- 2015年，HTTP/2.0
- 2018年，HTTP/3.0



#### 请求方式

- 在RFC中定义了一组请求方式，来表示要对给定资源执行的操作
  - GET：请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据
  - HEAD：类似于 GET 请求，但没有响应体
    - 比如在准备下载一个文件前，先获取文件的大小，再决定是否进行下载
  - POST：用于将实体提交到指定的资源
  - PUT：用请求有效载荷（payload）替换目标资源的所有当前表示
  - DELETE：删除指定的资源
  - PATCH：用于对资源应部分修改
  - CONNECT：建立一个到目标资源标识的服务器的隧道，通常用在代理服务器，网页开发很少用到
  - TRACE：沿着到目标资源的路径执行一个消息环回测试
- 在开发中使用最多的是GET、POST请求



#### 请求头

- 在 request 对象的 header 中也包含很多有用的信息，客户端会默认传递过来一些信息

  ```tex
  Request Headers
    Accept: */*
    Accept-Encoding: gzip， deflate
    Accept-Language: zh-CN,zh;g=0.9
    Access-Control-Reguest-Headers: token
    Access-Control-Request-Method: POST
    Connection: keep-alive
    Host: 192.168.0.110:1888
    Origin: http://127.0.0.1:5500
    Referer: http://127.9.0.1:5500
    Sec-Fetch.Mode: cors
    User-Agent: Mozilla/5,0 (Mindows NT 10.0: Min64: X64) ADplelebkit/537.36 (KHTMl, like ecko) chrome/102.0.0.0 Safari/537.36
  ```

- content-type 是这次请求携带的**数据的类型**

  - <b>application/x-www-form-urlencoded：</b>表示数据被编码成以 '&' 分隔的键 - 值对，同时以 '=' 分隔键和值
  - <b>application/json：</b>表示是一个json类型
  - <b>text/plain：</b>表示是文本类型
  - <b>application/xml：</b>表示是xml类型
  - <b>multipart/form-data：</b>表示是上传文件

- content-length：文件的大小长度

- keep-alive

  - http是基于TCP协议的，但是通常在进行一次请求和响应结束后会立刻中断
  - 在http1.0中，如果想要继续保持连接
    - 浏览器需要在请求头中添加 connection: keep-alive
    - 服务器需要在响应头中添加 connection:keey-alive
    - 当客户端再次放请求时，就会使用同一个连接，直接一方中断连接
  - 在http1.1中，所有连接默认是 connection: keep-alive 的
    - 不同的Web服务器会有不同的保持 keep-alive 的时间
    - Node中默认是5s中

- accept-encoding：告知服务器，客户端支持的文件压缩格式，比如js文件可以使用gzip编码，对应 .gz 文件

- accept：告知服务器，客户端可接受文件的格式类型

- user-agent：客户端相关的信息



#### 响应状态码

- Http状态码（Http Status Code）是用来表示Http响应状态的数字代码

  - Http状态码非常多，可以根据不同的情况，给客户端返回不同的状态码
  - MDN响应码解析地址：https://developer.mozilla.org/zh-CN/docs/web/http/status

  | 常见HTTP状态码 | 状态描述              | 信息说明                                             |
  | -------------- | --------------------- | ---------------------------------------------------- |
  | 200            | OK                    | 客户端请求成功                                       |
  | 201            | Created               | POST请求，创建新的资源                               |
  | 301            | Moved Permanently     | 请求资源的URL已经修改，响应中会给出新的URL           |
  | 400            | Bad Request           | 客户端的错误，服务器无法或者不进行处理               |
  | 401            | Unauthorized          | 未授权的错误，必须携带请求的身份信息                 |
  | 403            | Forbidden             | 客户端没有权限访问，被拒接                           |
  | 404            | Not Found             | 服务器找不到请求的资源                               |
  | 500            | Internal Server Error | 服务器遇到了不知道如何处理的情况                     |
  | 503            | Service Unavailable   | 服务器不可用，可能处理维护或者重载状态，暂时无法访问 |



#### 响应头

- 响应的 header 中包括一些服务器给客户端的信息

  ```tex
  Response Headers
    Access-Control-Allow-Origin: http://127.0.0.1:5500
    Connection: keep-alive
    Content-Length: 87
    Content-Type: application/json; charset=utf-8
    Date: sat， 18 Jun 2022 12:38:42 GMT
    Keep-Alive: timeout=5
    Vary: Origin
  ```



### XMLHttpRequest

- AJAX 是异步的 JavaScript 和 XML（Asynchronous JavaScript And XML）

  - 它可以使用 JSON，XML，HTML 和 text 文本等格式发送和接收数据

- 如何来完成AJAX请求呢？

  - 第一步：创建网络请求的AJAX对象（使用**XMLHttpRequest**）
  - 第二步：监听**XMLHttpRequest**对象状态的变化，或者监听**onload**事件（请求完成时触发）
  - 第三步：配置网络请求（通过**open**方法）
  - 第四步：发送**send**网络请求

  ```js
  // 1.创建XMLHttpRequest对象
  const xhr = new XMLHttpRequest();
  
  // 2.监听状态的改变(宏任务)
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
  };
  
  // 3.配置请求open
  // method: 请求的方式(get/post/delete/put/patch...)
  // url: 请求的地址
  xhr.open("get", "http://123.207.32.32:8000/home/multidata");
  
  // 4.发送请求(浏览器帮助发送对应请求)
  xhr.send();
  ```



#### 状态

- 事实上，我们在一次网络请求中看到状态发生了很多次变化，这是因为对于一次请求来说包括如下的状态

  | 值   | 状态             | 描述                                            |
  | ---- | ---------------- | ----------------------------------------------- |
  | 0    | UNSENT           | 代理被创建，但尚未调用 open() 方法              |
  | 1    | OPENED           | open() 方法已经被调用                           |
  | 2    | HEADERS_RECEIVED | send() 方法已经被调用，并且头部和状态已经可获得 |
  | 3    | LOADING          | 下载中 responseText 属性已经包含部分数据        |
  | 4    | DONE             | 下载操作已完成                                  |

- 注意：这个状态并非是HTTP的相应状态，而是记录的XMLHttpRequest对象的状态变化

  - http响应状态通过status获取

- 发送同步请求：将 open 的第三个参数设置为 false



#### 其他事件监听

- 除了 onreadystatechange 还有其他的事件可以监听
  - <b>loadstart：</b>请求开始
  - <b>progress：</b>一个响应数据包到达，此时整个 response body 都在 response 中
  - <b>abort：</b>调用 xhr.abort() 取消了请求
  - <b>error：</b>发生连接错误，例如，域错误。不会发生诸如 404 这类的 HTTP 错误
  - <b>load：</b>请求成功完成
  - <b>timeout：</b>由于请求超时而取消了该请求（仅发生在设置了 timeout 的情况下）
  - <b>loadend：</b>在 load，error，timeout 或 abort 之后触发



#### 响应数据和响应类型

- 发送了请求后，我们需要获取对应的结果 response 属性
  - XMLHttpRequest **response 属性**返回响应的正文内容
  - 返回的类型取决于 **responseType 的属性**设置
- 通过responseType可以设置获取数据的类型
  - 如果**将 responseType 的值设置为空字符串**，则会使用 **text** 作为默认值
- 和responseText、responseXML的区别
  - 早期通常服务器返回的数据是**普通的文本和XML**，所以我们通常会通过responseText、 responseXML来获取响应结果
  - 之后将它们转化成JavaScript对象形式
  - 目前服务器基本返回的都是**json数据**，直接设置为json即可



#### HTTP响应的状态

- XMLHttpRequest的state是用于记录xhr对象本身的状态变化，并非针对于HTTP的网络请求状态

- 如果我们希望获取HTTP响应的网络状态，可以通过 status 和 statusText 来获取

  | 常见HTTP状态码 | 状态描述              | 信息说明                                             |
  | -------------- | --------------------- | ---------------------------------------------------- |
  | 200            | OK                    | 客户端请求成功                                       |
  | 201            | Created               | POST请求，创建新的资源                               |
  | 301            | Moved Permanently     | 请求资源的URL已经修改，响应中会给出新的URL           |
  | 400            | Bad Request           | 客户端的错误，服务器无法或者不进行处理               |
  | 401            | Unauthorized          | 未授权的错误，必须携带请求的身份信息                 |
  | 403            | Forbidden             | 客户端没有权限访问，被拒接                           |
  | 404            | Not Found             | 服务器找不到请求的资源                               |
  | 500            | Internal Server Error | 服务器遇到了不知道如何处理的情况                     |
  | 503            | Service Unavailable   | 服务器不可用，可能处理维护或者重载状态，暂时无法访问 |

  ```js
  const xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    console.log(xhr.status, xhr.statusText, xhr.response.data);
  };
  
  xhr.responseType = "json";
  
  xhr.open("get", "http://123.207.32.32:8000/home/multidata");
  
  xhr.send();
  ```



#### GET/POST请求传递参数

- 在开发中，我们使用最多的是GET和POST请求，在发送请求的过程中，我们也可以传递给服务器数据

- 常见的传递给服务器数据的方式有如下几种

  - 方式一：GET请求的 query 参数
  - 方式二：POST请求 x-www-form-urlencoded 格式
  - 方式三：POST请求 FormData 格式
  - 方式四：POST请求 JSON 格式

  ```js
  const xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    console.log(xhr.response);
  };
  
  xhr.responseType = "json";
  
  // 传递参数方式一 query
  // xhr.open(
  //   "get",
  //   "http://123.207.32.32:1888/02_param/get?name=张三&age=20&address=北京市"
  // );
  // xhr.send()
  
  // 传递参数方式二 urlencoded
  // xhr.open("post", "http://123.207.32.32:1888/02_param/posturl");
  // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // xhr.send("name=张三&age=20&address=北京市");
  
  // 传递参数方式三 FormData
  // xhr.open("post", "http://123.207.32.32:1888/02_param/postform");
  // const formData = new FormData();
  // formData.append("name", "张三");
  // formData.append("age", 20);
  // formData.append("address", "北京市");
  // xhr.send(formData);
  
  // 传递参数方式四 JSON
  xhr.open("post", "http://123.207.32.32:1888/02_param/postjson");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify({ name: "李四", age: 18, height: 1.80 }));
  ```



#### 延迟时间和取消请求

- 在网络请求的过程中，为了避免过长的时间服务器无法返回数据，通常我们会为请求设置一个超时时间：**timeout**

  - 当达到**超时时间后依然没有获取到数据**，那么**这个请求会自动被取消掉**
  - 默认值为0，表示没有设置超时时间

- 我们也可以通过**abort方法强制取消请求**

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head></head>
    <body>
      <button>取消请求</button>
  
      <script>
        const xhr = new XMLHttpRequest();
  
        xhr.onload = function () {
          console.log(xhr.response);
        };
  
        xhr.onabort = function () {
          console.log("请求被取消掉了");
        };
  
        xhr.ontimeout = function () {
          console.log("请求超时");
        };
  
        xhr.responseType = "json";
  
        // xhr.timeout = 3000;
  
        xhr.open("get", "http://123.207.32.32:1888/01_basic/timeout");
  
        xhr.send();
  
        const cancelBtn = document.querySelector("button");
        cancelBtn.onclick = function () {
          xhr.abort();
        };
      </script>
    </body>
  </html>
  ```



### Fetch

- Fetch可以看做是早期的XMLHttpRequest的替代方案，它提供了一种更加现代的处理方案
  - 比如**返回值是一个Promise**，提供了一种更加优雅的处理结果方式
    - 在请求发送成功时，调用resolve回调then
    - 在请求发送失败时，调用reject回调catch
  - 比如**不像XMLHttpRequest一样**，所有的操作都在一个对象上
- fetch函数的使用
  - input：定义要获取的资源地址，可以是一个URL字符串，也可以使用一个Request对象（实验性特性）类型
  - init：其他初始化参数
    - method：请求使用的方法，如 GET、POST
    - headers：请求的头信息
    - body：请求的 body 信息



#### 数据的响应

- Fetch的数据响应主要分为两个阶段

- 阶段一：当服务器返回了响应（response）

  - fetch 返回的 promise 就使用内建的 Response class 对象来对响应头进行解析
  - 在这个阶段，我们可以通过检查响应头，来检查 HTTP 状态以确定请求是否成功
  - 如果 fetch 无法建立一个 HTTP 请求，例如网络问题，亦或是请求的网址不存在，那么 promise 就会 reject
  - 异常的 HTTP 状态，例如 404 或 500，不会导致出现 error

- 我们可以在 response 的属性中看到 HTTP 状态

  - status：HTTP 状态码，例如 200
  - ok：布尔值，如果 HTTP 状态码为 200-299，则为 true

- 第二阶段，为了获取 response body，我们需要使用一个其他的方法调用

  - response.text() —— 读取 response，并以文本形式返回 response
  - response.json() —— 将 response 解析为 JSON

  ```js
  async function getData() {
    const response = await fetch("http://123.207.32.32:8000/home/multidata");
    const res = await response.json();
    console.log(res);
  }
  getData();
  ```



#### POST请求

- 创建一个 POST 请求，或者其他方法的请求，我们需要使用 fetch 选项

  - method：HTTP 方法，例如 POST
  - body：request body，其中之一
    - 字符串（例如 JSON 编码的）
    - FormData 对象，以 multipart/form-data 形式发送数据

  ```js
  async function getData() {
    // const response = await fetch(
    //   "http://123.207.32.32:1888/02_param/postjson",
    //   { method: "post", body: JSON.stringify({ name: "张三", age: 18 }) }
    // );
    // const res = await response.json();
    // console.log(res);
  
    const formData = new FormData();
    formData.append("name", "张三");
    formData.append("age", 18);
  
    const response = await fetch(
      "http://123.207.32.32:1888/02_param/postform",
      { method: "post", body: formData }
    );
  
    // 获取 response 状态
    console.log(response.ok, response.status, response.statusText);
    const res = await response.json();
  
    console.log(res);
  }
  getData();
  ```
