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

### 阶段一 - 机器语言

- 计算机的存储单元只有0**和1两种状态**，因此一串代码要让计算机  “读懂”  ，这串代码只能由数字0和1组成

- 像这种由数字0和1按照一定的规律组成的代码就叫**机器码**，也叫**二进制编码**

- 一定长度的机器码组成了**机器指令**，**用这些机器指令所编写的程序就称为机器语言**

- 优点
  - 代码能**被计算机直接识别**，**不需要经过编译解析**
  - 直接对硬件产生作用，**程序的执行效率非常高**

- 缺点

  - 程序**全是些0和1的指令代码，可读性差，还容易出错**

  - **不易编写**



### 阶段二 - 汇编语言

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



### 阶段三 - 高级语言

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

- 1996年11月，网景正式向**ECMA（欧洲计算机制造商协会）**提交语言标准

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
  - **SpiderMonkey：**第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者）
  - **Chakra：**微软开发，用于IT浏览器
  - **JavaScriptCore：**WebKit中的JavaScript引擎，Apple公司开发
  - **V8：**Google开发的强大JavaScript引擎，也帮助Chrome从众多浏览器中脱颖而出



## 浏览器内核和JS引擎的关系

- 这里我们先以WebKit为例，WebKit事实上由两部分组成的
  - **WebCore：**负责HTML解析、布局、渲染等等相关的工作
  - **JavaScriptCore：**解析、执行JavaScript代码
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
  - 允许这种操作的编程语言，例如 JavaScript，被称为  **“动态类型”（dynamically typed）**的编程语言
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

  - **作用域（Scope）**表示**一些标识符的作用有效范围**（所以也有被翻译为有效范围的）
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



### JavaScript头等函数

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

  - 在ES5之前，我们都是**通过function来声明一个构造函数（类）**的，**之后通过new关键字来对其进行调用**

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

- 那么**，**为什么会出现这样奇怪的现象呢？

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

- 会改变原数组的方法  (push、pop、shift、unshift、reverse、splice、sort)
- 不会改变原数组的方法  (concat、join、toString、includes)

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

  - 作用**等同于 new Date(dateString).getTime() **操作
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

  - **标准的attribute：**某些attribute属性是标准的，比如id、class、href、type、value等
  - **非标准的attribute：**某些attribute属性是自定义的，比如abc、age、height等

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
  - **attributes：**attr对象的集合，具有name、value属性

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



















