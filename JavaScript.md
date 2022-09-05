[TOC]

# JavaScript的数据类型

- 在 JavaScript 中有 8 种基本的数据类型（7 种原始类型和 1 种**复杂或引用**类型）

  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - **Object**
  - BigInt
  - Symbol



# typeof操作符

- 对一个值使用 typeof 操作符会返回下列字符串之一
  - "undefined" 表示值未定义
  - "boolean" 表示值为布尔值
  - "string" 表示值为字符串
  - "number" 表示值为数值
  - "object" 表示值为对象(而不是函数)或 null
  - "function" 表示值为函数
  - “symbol” 表示值为符号
- typeof()的用法
  - typeof是一个**操作符，并非是一个函数，()只是将后面的内容当做一个整体而已**



# 逻辑运算符

## ++a和a++的区别

```js
var num1 = 5;
var num2 = 5;
var a = num1++;
var b = ++num2;

console.log(a); // 5
// num1++: 先赋值,再自加 a = 5; num1 = 5 + 1;
console.log(b); // 6
// ++num2: 先自加,再赋值 num2 = 5 + 1; b = 6 
```



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



# 对象

- 注意项：对象的**属性名可以加引号也可以不加**，如果要使用一些**特殊的名字，则必须加引号**

  ```js
  var obj = {
      name: "张三",
      age: 18,
      sex: "男",
  };
  Object.prototype.hobby = "打篮球";
  // hasOwnProperty 来检查对象自身中是否含有该属性或方法
  console.log(obj.hasOwnProperty("hobby")); // false
  // 检查 obj 中是否含有 hobby 属性 (in 自身没有会去原型上看看有没有)
  console.log("hobby" in obj); // true
  
  // 对象增删改查
  var info = {
      name: "李四",
      age: 19,
      sex: "女",
  };
  
  // 访问对象的属性
  console.log(info.name); // 李四
  
  // 添加对象的属性
  info.hobby = "看书";
  console.log(info); // {name: '李四', age: 19, sex: '女', hobby: '看书'}
  
  // 修改对象的属性
  info.hobby = "打乒乓球";
  console.log(info); // {name: '李四', age: 19, sex: '女', hobby: '打乒乓球'}
  
  // 删除对象的属性 delete操作符
  delete info.hobby
  console.log(info); // {name: '李四', age: 19, sex: '女'}
  ```



## Object.assign()

- 合并两个对象(浅拷贝)

  ```js
  var target = { name: "张三", age: 18, friend: "王五" };
  var source = { name: "李四", age: 20, hobby: "看书" };
  // 把 source 里的值浅拷贝到 target 中
  var result = Object.assign(target, source);
  console.log(target); // {name: '李四', age: 20, friend: '王五', hobby: '看书'}
  console.log(source); // {name: '李四', age: 20, hobby: '看书'}
  
  result.name = "李磊";
  console.log(target); // {name: '李磊', age: 20, friend: '王五', hobby: '看书'}
  console.log(source); // {name: '李四', age: 20, hobby: '看书'}
  ```



## Object.keys()

- 返回给定对象自身属性的所有键

  ```js
  var info = { id: 1, name: "张三", age: 18 };
  console.log(Object.keys(info)); // ["id", "name", "age"]
  
  var arr = ["a", "b", "c"];
  console.log(Object.keys(arr)); // ['0', '1', '2']
  ```



## Object.values()

- 返回给定对象自身属性的所有值

  ```js
  var info = { id: 1, name: "张三", age: 18 };
  console.log(Object.values(info)); // [1, '张三', 18]
  
  var arr = ["a", "b", "c"];
  console.log(Object.values(arr)); // ['a', 'b', 'c']
  ```



## Object.entries()

- 返回一个给定对象自身可枚举属性的键值对的数组

  ```js
  var obj = { a: 1, b: 2, c: 3 };
  for (var array of Object.entries(obj)) {
      var key = array[0];
      var value = array[1];
      console.log(`key: ${key} value:${value}`);
  }
  // key: a value:1
  // key: b value:2
  // key: c value:3
  ```



## 工厂函数

- 工厂函数其实是一种常见的设计模式

  ```js
  function createStudent(name, age, height) {
   var stu = {};
   stu.name = name;
   stu.age = age;
   stu.height = height;
   stu.running = function () {
     console.log("running~");
   };
   return stu;
  }
  console.log(createStudent("李四", 18, 1.88));// {name: '李四', age: 18, height: 1.88, running: ƒ}
  console.log(createStudent("王五", 25, 1.98));// {name: '王五', age: 25, height: 1.98, running: ƒ}
  console.log(createStudent("张三", 35, 2.05));// {name: '张三', age: 35, height: 2.05, running: ƒ}
  ```



## 构造函数

- 如果一个**普通的函数**被使用**new操作符来调用了**，那么这个函数就称之为是一个**构造函数** 

- 如果一个函数被使用new操作符调用了，那么它会执行如下操作：
  - 在内存中创建一个新的对象(空对象)
  - 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性
  - 构造函数内部的this，会指向创建出来的新对象
  - 执行函数的内部代码
  - 如果构造函数返回的是基本数据类型，那么会返回创建出来的新对象
  
  ```js
  function Student(name, age, height) {
   this.name = name;
   this.age = age;
   this.height = height;
   this.running = function () {
     console.log("running~");
   };
   // return null
   // return undefined
   // return true
   // return "100"
   // return 100
  }
  console.log(new Student("李四", 18, 1.88)); // Student {name: '李四', age: 18, height: 1.88, running: ƒ}
  console.log(new Student("王五", 25, 1.98)); // Student {name: '王五', age: 25, height: 1.98, running: ƒ}
  console.log(new Student("张三", 35, 2.05)); // Student {name: '张三', age: 35, height: 2.05, running: ƒ}
  ```



## 全局对象window

- 浏览器中存在一个全局对象 window

1. 作用一：查找变量时, 自身 ---> 全局 ---> window ---> ReferenceError: message is not defined

2. 作用二：将一些浏览器全局提供给我们的变量/函数/对象, 放在 window 对象上面

3. 作用三：使用 var 定义的变量会被默认添加到 window 上面

   ```js
   console.log(window);
   // 为什么我在前面打印时可以看见 message 属性 ?
   // 浏览器发现你在后面给 window 添加 message 属性之后它会把你原来打印的地方给做一个刷新
   
   window.message = "hello window";
   
   var age = 18;
   // let message = "hello global";
   function foo() {
    // var message = "hello foo";
    console.log(message); // hello window
   
    console.log(console); // console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
   
    console.log(alert); // alert() { [native code] }
   }
   
   foo();
   ```



# 包装类

- 原始类型，默认**并不能调用属性和方法**

- 但JavaScript为了**可以获取属性和调用方法**，**对其封装了对应的包装类型**

- 常见的包装类型有：**String、Number、Boolean、Symbol、BigInt类型**

- **包装类型的使用过程**

  - 当我们**调用一个原始类型的属性或者方法**时，会进行如下操作：

    - 根据**原始值**，**创建一个原始类型对应的包装类型对象**

    - **调用对应的属性或者方法，返回一个新的值**

    - **创建的包装类对象被销毁**

    - 通常JavaScript**引擎会进行很多的优化**，**它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用**
  - 注意事项：**null、undefined没有任何的方法，也没有对应的  “对象包装类**”

  ```js
  var name = "张 三";
  console.log(name.length); // 3
  console.log(name.split(" ")); // ['张', '三']
  console.log(name); // 张 三
  ```



## Number

- 方法
  - **toString(base)**，将数字转成字符串，并且按照base进制进行转化
    - base 的范围可以从 2 到 36，默认情况下是 10； 
    - 注意：**如果是直接对一个数字操作，需要使用..运算符**
    
  
  ```js
  var num = 100;
  console.log(num.toString(2)); // 1100100
  console.log(num.toString(8)); // 144
  console.log(num.toString(16)); // 64
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



## String

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
  
  - indexOf(value,fromIndex)，查找字符串位置
  - includes(value,position)，是否包含字符串
  

  ```js
  var message = "Hello World";
  console.log(message.indexOf("World")); // 6
  console.log(message.indexOf("hhhhh")); // -1
  
  console.log(message.includes("World")); // true
  console.log(message.includes("hhhhh")); // false
  ```
  
  - startsWith(value)，以什么开头
  - endsWith(value)，以什么结尾
  - replace(value/regexp,newValue)，替换字符串
  
  
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
  
  - slice(start, end)，从 start 到 end（不含 end）
  - substring(start, end)，从 start 到 end（不含 end） 
  - substr(start, length)，从 start 开始获取长为 length 的字符串
  
  
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
  - split(separator,limit)，字符串分割
  
  
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



# Math

- Math是一个**内置对象**（不是一个构造函数），它**拥有一些数学常数属性和数学函数方法**

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
  // a~b (5~50)
  // y = a (5)
  // x = b - a (50-5) = 45
  for (let i = 0; i < 100; i++) {
      var num = Math.floor(Math.random() * 45) + 5;
      console.log(num);
  }
  ```



# 数组

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

  - 传入了**一个数字**, 它默认会当成我们要创建一个**对应长度的数组**
  
  ```js
  var arr3 = new Array(5);
  console.log(arr3); // [empty × 5]
  ```

- 属性

  - length
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
  



# Date

- 日期的表示方式有两种：**RFC 2822 标准**  或者  **ISO 8601 标准**

  - 默认打印的时间格式是RFC 2822标准的

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

  - 也可以将其转化成ISO 8601标准的
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



## Date获取信息的方法

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



## Date获取Unix时间戳

- Unix时间戳：它是一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数
  - new Date().getTime()
  - new Date().valueOf()
  - +new Date()
  - Date.now()



## Date.parse

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




# this

1. 函数在调用时，JavaScript会**默认给this绑定一个值** 

2. this的**绑定和定义的位置（编写的位置）**没有关系

3. this的**绑定和调用方式以及调用的位置有关系** 

4. this是**在运行时被绑定**的



## 绑定规则

- 默认绑定

  - 独立的函数调用

  ```js
  // 1.普通的函数被独立的调用
  function foo() {
   console.log("foo:", this);
  }
  foo(); // window
  
  // 2.函数定义在对象中, 但是独立调用
  var obj = {
   name: "why",
   bar: function () {
     console.log("bar:", this);
   },
  };
  var baz = obj.bar;
  baz(); // window
  
  // 3.回调函数
  function test(fn) {
   fn(); // window
  }
  test(baz);
  ```

- 隐式绑定

  - 通过某个对象进行调用

  ```js
  function foo() {
   console.log(this)
  }
  
  var obj = {
   bar: foo
  }
  
  obj.bar() // {bar:foo()}
  ```

- 显式绑定(**call、apply、bind**)

  - 第一个参数：传入绑定的对象
  - 第二个参数：传入的参数
  - apply以数组的形式，call、bind以参数列表的形式

  ```js
  function foo(name, age, height) {
    console.log("foo函数被调用:", this);
    console.log("打印参数:", name, age, height);
    // foo函数被调用: String {'apply'}
    // 打印参数: 张三 18 1.88
  
    // foo函数被调用: String {'call'}
    // 打印参数: 李四 19 1.8
  }
  
  foo.apply("apply", ["张三", 18, 1.88]);
  foo.call("call", "李四", 19, 1.8);
  
  function bar(name, age, height, address) {
    console.log("foo:", this); // foo: {name: '李四'}
    console.log("参数:", name, age, height, address); // 参数: 张三 18 1.88 湖南
  }
  
  var obj = { name: "李四" };
  var baz = bar.bind(obj, "张三", 18, 1.88);
  baz("湖南");
  ```

- new绑定

  - 构造函数内部的this，会指向创建出来的新对象

  ```js
  function foo(name) {
    this.name = name;
    console.log(this); // foo {name: '张三'}  sfoo {name: '李四'}
  }
  new foo("张三");
  new foo("李四");
  ```



## **规则优先级**

- new  >  bind  >  call、apply  >  隐式绑定

- new 不可以和 call、apply 一起使用

- 如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则

  ```js
  var obj = {
   name: "obj",
   foo: function () {
     console.log(this);
   },
  };
  new obj.apply(); // obj.apply is not a constructor at
  new obj.call(); // obj.call is not a constructor at
  
  
  // new 优先级高于 bind
  function foo(name) {
   this.name = name;
   console.log(this); // {name: 'new'}
  }
  var bindFn = foo.bind("bind");
  new bindFn("new");
  
  
  // bind 优先级高于 call、apply
  function foo() {
    console.log(this);
  }
  var bindFn = foo.bind("bind");
  bindFn.apply("apply"); // String {'bind'}
  bindFn.call("call");// String {'bind'}
  
  
  function foo() {
   console.log(this);
  }
  // 显式绑定(call、apply)的优先级高于隐式绑定
  var obj = { foo: foo };
  obj.foo.apply("apply"); // String {'apply'}
  obj.foo.call("call"); // String {'call'}
  
  obj.foo.call(undefined); // window
  obj.foo.call(null); // window
  ```



# 箭头函数

- 箭头函数**不会绑定this、arguments**属性

- 箭头函数**不能作为构造函数来使用**（不能和new一起来使用，会抛出错误）

- 箭头函数中的 this，**从上层作用域中找到对应的this，如果没有找到在往上找，直到找到全局的this**

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
  // 在解析的时候,它不知道是解析成一个对象还是解析成函数的执行体
  // fun2 = nun => ({age:nun}) 加一个小括号时它会把它当成一个整体,它就知道这个东西是一个对象
  let fun2 = (nun) => ({ age: nun });
  console.log(fun2(30)); // {age: 30}
  ```

  - **箭头函数 this**

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

  - **箭头函数 arguments**
    - 箭头函数是不绑定arguments的，所以我们在**箭头函数中使用arguments会去上层作用域查找**

  ```js
  var bar = () => {
    console.log(arguments);
  };
  bar(); //  ReferenceError: arguments is not defined
  
  function fun() {
    var bar = () => {
       console.log(arguments); // 123
    };
    bar();
  }
  fun(123);
  ```

  


# 渲染页面的详细流程

- 解析HTML，生成DOM Tree

- 解析CSS，生成规则树

- 当有了DOM Tree和 CSSOM Tree后，就可以两个结合来生成**Render Tree**
  - **link元素不会阻塞DOM Tree的构建过程**，但是**会阻塞Render Tree的构建过程**
    - 这是因为Render Tree在构建时，需要对应的CSSOM Tree
  - **Render Tree和DOM Tree并不是一一对应的关系**，比如对于display为none的元素，压根不会出现在render tree中

- 布局
  - **渲染树会表示显示哪些节点以及其他样式**，但是**不表示每个节点的尺寸、位置**等信息
  - 布局是确定**渲染树中所有节点的宽度、高度和位置信息**

- 绘制
  - 在绘制阶段，浏览器将布局阶段计算的**每个frame转为屏幕上实际的像素点**
  - 包括**将元素的可见部分进行绘制**，比如**文本、颜色、边框、阴影、替换元素（比如img）**

- 显示

![](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=650)



# **回流和重绘**

- **回流一定会引起重绘**，所以回流是一件很消耗性能的事情
- 所以在开发中要尽量避免发生回流
  - 修改样式时**尽量一次性修改**
    - 比如通过cssText修改，比如通过添加class修改
  - 尽量**避免频繁的操作DOM**
    - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作
  - 尽量**避免通过getComputedStyle获取尺寸、位置**等信息
  - 对**某些元素使用position的absolute或者fixed**
    - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响



## 回流

- 理解回流reflow：（也可以称之为重排）

  - 第一次确定节点的大小和位置，称之为布局（layout）
  - 之后对节点的大小、位置修改重新计算称之为回流

- 什么情况下引起回流呢

  - 比如DOM结构发生改变（添加新的节点或者移除节点）
  - 比如改变了布局（修改了width、height、padding、font-size等值）
  - 比如窗口resize（修改了窗口的尺寸等）
  - 比如调用getComputedStyle方法获取尺寸、位置信息

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
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



## 重绘

- 理解重绘repaint

  - 第一次渲染内容称之为绘制（paint）

  - 之后重新渲染称之为重绘

- 什么情况下会引起重绘呢

  - 比如修改背景色、文字颜色、边框颜色、样式等

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
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




# script元素和页面解析的关系

- 我们现在已经知道了页面的渲染过程，但是JavaScript在哪里呢？

  - 事实上，浏览器在解析HTML的过程中，遇到了**script元素是不能继续构建DOM树的**

  - 它会**停止继续构建，首先下载JavaScript代码，并且执行JavaScript的脚本**

  - 只有**等到JavaScript脚本执行结束后，才会继续解析HTML，构建DOM树**

- 为什么要这样做呢？

  - 这是**因为JavaScript的作用之一就是操作DOM，并且可以修改DOM**

  - 如果我们**等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能**

  - 所以会在**遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树**

- 但是这个也往往会带来新的问题，特别是现代页面开发中：

  - 在目前的开发模式中（比如Vue、React），**脚本往往比HTML页面更“重”，处理时间需要更长**

  - 所以会**造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到**

- 为了解决这个问题，script元素给我们提供了两个属性（attribute）：**defer**和**async**



## defer属性

- defer 属性告诉浏览器**不要等待脚本下载**，并且**继续解析HTML，构建DOM Tree**

  - 脚本**会由浏览器来进行下载，但是不会阻塞DOM Tree**的构建过程
  - 如果脚本提前下载好了，它会**等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码**

- 另外多个带defer的脚本是可以保持正确的顺序执行的

- defer仅适用于外部脚本，对于script默认内容会被忽略

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!--
  	 test.js
  		console.log("test");
  		var message = "test message";
  		var boxEl = document.querySelector(".box");
  		console.log(boxEl);
  	-->
      <script src="./js/test.js" defer></script>
      <!--
  	 demo.js
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



## async属性

- async 特性与 defer 有些类似，它也能够让脚本不阻塞页面
- async是让一个脚本完全独立的
  - 浏览器**不会因 async 脚本而阻塞（与 defer 类似）**
  - **async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本**
  - **async不会能保证在DOMContentLoaded之前或者之后执行**
- defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的
- async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的



# V8引擎的执行原理

- 官方对V8引擎的定义
  - V8是用**C ++编写**的**Google开源高性能JavaScript和WebAssembly引擎**，它用于**Chrome和Node.js**等

- **V8可以独立运行，也可以嵌入到任何C ++应用程序中**



# V8引擎的架构

- **Parse**模块会将JavaScript代码转换成AST（抽象语法树），这是因为解释器并不直接认识JavaScript代码

  -  如果函数没有被调用，那么是不会被转换成AST的

- **Ignition**是一个解释器，会将AST转换成ByteCode（字节码）

  - 同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）
  - 如果函数只调用一次，Ignition会解释执行ByteCode

- **TurboFan**是一个编译器，可以将字节码编译为CPU可以直接执行的机器码

  - 如果一个函数被多次调用，那么就会被标记为**热点函数**，那么就会经过**TurboFan转换成优化的机器码**，**提高代码的执行性能**

  - 但是，**机器码实际上也会被还原为ByteCode**，这是因为如果后续执行函数的过程中，**类型发生了变化（比如sum函数原来执**

    **行的是number类型，后来执行变成了string类型）**，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码



# V8引擎的解析图（官方）

- **词法分析（英文lexical analysis）** 
  - 将字符序列转换成token序列的过程
  - token是**记号化**（tokenization）的缩写
  - **词法分析器**（lexical analyzer，简称lexer），也叫**扫描器**（scanner）
- **语法分析（英语：syntactic analysis，也叫 parsing）** 
  - **语法分析器也可以称之为parser**

![](https://v8.dev/_img/scanner/overview.svg)



# 初始化全局对象

- js引擎会在**执行代码之前**，会在**堆内存中创建一个全局对象**：Global Object（GO） 

  - 该对象 **所有的作用域（scope）**都可以访问

  - 里面会包含**Date、Array、String、Number、setTimeout、setInterval**等等

  - 其中还有一个**window属性**指向自己



# 执行上下文（ Execution Contexts ）

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**

- 那么现在它要执行谁呢？执行的是**全局的代码块**：

  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**
  - GEC会 **被放入到ECS中** 执行

- GEC被放入到ECS中里面包含两部分内容

  - 在代码执行前，在**语法分析**转成**抽象语法树**的过程中，会将**全局定义的变量、函数**等加入到**GlobalObject**中，但是并**不会**

    **赋值**

    - 这个过程也称之为**变量的作用域提升（hoisting）** 

  - 在代码执行中，对变量赋值，或者执行其他的函数



# 认识VO对象（Variable Object）

- **每一个执行上下文**会关联一个**VO（Variable Object，变量对象），变量和函数声**明会被添加到这个VO对象中
- 当全局代码被执行的时候，**VO就是GO对象**了



# 全局代码执行过程

[![XURWM4.png](https://s1.ax1x.com/2022/06/03/XUjh9g.png)]()

 

# 函数代码执行过程

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，

并且压入到**EC Stack**中

- **因为每个执行上下文都会关联一个VO**，那么函数执行上下文关联的VO是什么呢
  - 当进入一个函数执行上下文时，会创建一个**AO对象（Activation Object）**
  - 这个AO对象会**使用arguments作为初始化**，并且**初始值是传入的参数**
  - 这个**AO对象会作为执行上下文的VO来存放变量的初始化**

- 函数代码**执行前的过程**

[![XNTclV.png](https://s1.ax1x.com/2022/06/09/XywhI1.png)]()

- 函数代码**执行后的过程** 

[![XNTgyT.png](https://s1.ax1x.com/2022/06/09/XywIG6.png)]()



# 作用域和作用域链

- 当进入到一个执行上下文时，执行上下文也会关联一个作用域链（Scope Chain）
  - **作用域链是一个对象列表**，用于变量标识符的求值
  - 当进入一个执行上下文时，这个**作用域链被创建，并且根据代码类型，添加一系列的对象**
- 函数变量的查找过程 - 自己有

[![XUE9OO.png](https://s1.ax1x.com/2022/06/09/XyrdyT.png)]()

- 函数变量的查找过程 - 自己没有

[![XUEPmD.png](https://s1.ax1x.com/2022/06/09/XyrwOU.png)]()



# 认识内存管理

- 不管什么样的编程语言，在**代码的执行过程中都是需要给它分配内存**的，不同的是**某些编程语言**需要我们**自己手动的管理内存**，

**某些编程语言**会可以**自动帮助我们管理内存**

- 不管以什么样的方式来管理内存，**内存的管理都会有如下的生命周期**
  - 第一步：**分配申请你需要的内存**（申请）
  - 第二步：**使用分配的内存**（存放一些东西，比如对象等）
  - 第三步：**不需要使用时，对其进行释放**



# 栈内存和堆内存

- 我们首先记住一句话：**JS中所有的变量都是保存在栈内存中的**
  - **基本数据类型**的值是保存在**栈内存**中的，**值与值之间是独立存在，修改一个值不会影响其他的值**
  - **引用数据类型**的值是保存到**堆内存**中的，**每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而值保存了对象的内存地址** 如果两个值保存了同一个对象时，当修改对象的属性时，另一个也会受到影响



# JavaScript的垃圾回收

- 因为**内存的大小是有限**的，所以当**内存不再需要的时候**，我们需要**对其进行释放**，以便腾出**更多的内存空间**
- 现代的编程语言都是有自己的垃圾回收机制
  - 垃圾回收的英文是**Garbage Collection**，简称GC
  - 对于**那些不再使用的对象**，我们都称之为是**垃圾**，它需要被**回收**，以释放更多的内存空间



## 常见的GC算法 – 引用计数（Reference counting）

- 引用计数：

  - 当**一个对象有一个引用指向它**时，那么这个**对象的引用就+1** 

  - 当**一个对象的引用为0**时，这个对象就**可以被销毁掉**

- 这个算法有一个很大的弊端就是会产生循环引用

  ```js
  var obj1 = {}
  var obj2 = {}
  
  obj1.info = obj2
  obj2.info = obj1
  ```



## 常见的GC算法 – 标记清除（mark-Sweep）

- 标记清除：

  - 标记清除的核心思路是**可达性（Reachability）** 

  - 这个算法是设置一个**根对象（root object）**，**垃圾回收器**会定期**从这个根**开始，找所有从根开始**有引用到的对象**，对于哪些

    **没有引用到的对象，就认为是不可用的对象**

  - 这个算法可以很好的解决循环引用的问题

​	[![](https://s1.ax1x.com/2022/06/03/XaAv8I.png)]()



## 常见的GC算法 – 其他算法优化补充

- JS引擎比较广泛的采用的就是可达性中的标记清除算法，当然类似于V8引擎为了**进行更好的优化**，它在算法的实现细节上也会结合一些其他的算法

- 标记整理（Mark-Compact**）** 和**标记**－**清除**相似

  - 不同的是，回收期间同时会将保留的存储对象**搬运汇集到连续的内存空间**，从而**整合空闲空间**，**避免内存碎片化**

- 分代收集（Generational collection）—— 对象被分成两组：**新的**和**旧的**

  - 许多对象出现，完成它们的工作并很快死去，它们可以**很快被清理**
  - 那些长期存活的对象会变得**老旧**，而且**被检查的频次也会减少**

- 增量收集（Incremental collection）

  - 如果有许多对象，并且我们**试图一次遍历并标记整个对象集，则可能需要一些时间，并在执行过程中带来明显的延迟**

  - 所以引擎试图**将垃圾收集工作分成几部分来做**，然后**将这几部分会逐一进行处理**，**这样会有许多微小的延迟而不是一个大的**

    **延迟**

- 闲时收集（Idle-time collection） 

  - 垃圾收集器**只会在 CPU 空闲时尝试运行，以减少可能对代码执行**的影响



# 闭包

## 没有闭包的局限性

```js
var name = "shy";
var age = 18;
var intro = "天神下凡,一锤四";

function foo(name, age, intro) {
  var message = "Hello foo";
  console.log(message, name, age, intro); // Hello foo shy 18 天神下凡,一锤四
    
  function bar(message) {
     console.log(message); // Hello foo
  }
  bar(message);
    
}
foo(name, age, intro);
```

## JavaScript的闭包

```js
var name = "shy";
var age = 18;
var intro = "天神下凡,一锤四";

function foo() {
  var message = "Hello foo";
  console.log(message, name, age, intro); // Hello foo shy 18 天神下凡,一锤四
    
  function bar() {
     console.log(message); // Hello foo
  }
  bar();
    
}
foo();
```



## 闭包的定义

- 在计算机科学中对闭包的定义（维基百科）：
  - 闭包（英语：Closure），又称**词法闭包**（Lexical Closure）或**函数闭包**（function closures）
  - 是在支持 **头等函数** 的编程语言中，实现词法绑定的一种技术
  - 闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号查找表）
  - 闭包跟函数最大的区别在于，当捕捉闭包的时候，它的 **自由变量** 会在捕捉时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行
- 闭包的概念出现于60年代，最早实现闭包的程序是 **Scheme**，那么我们就可以理解为什么JavaScript中有闭包：
  - 因为JavaScript中有大量的设计是来源于Scheme的
- MDN对JavaScript闭包的解释

  - 一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来
- 理解和总结

  - 一个普通的函数function，如果**它可以访问外层作用域的自由变量**，那么这个**函数和周围环境**就是一个**闭包**
  - 从广义的角度来说：**JavaScript中的函数都是闭包**
  - 从狭义的角度来说：JavaScript中一个函数，**如果访问了外层作用域的变量，那么它是一个闭包**
  - 闭包由两部分组成：**函数**+可以访问的**自由变量**

- 闭包的访问过程 - 1

[![XaKHN8.png](https://s1.ax1x.com/2022/06/10/XyhXPU.png)]()

- 闭包的访问过程 - 2

[![XaMCNT.png](https://s1.ax1x.com/2022/06/10/XyhjGF.png)]()

- 闭包的访问过程 - 3

[![XaM9EV.png](https://s1.ax1x.com/2022/06/10/Xyhv24.png)]()



# 函数对象的属性

- **属性name：**一个函数的名词我们可以通过name来访问

  ```js
  function foo(){}
  var bar = function() {}
  console.log(foo.name) // foo
  console.log(bar.name) // bar
  ```

- **属性length：**属性length用于返回函数参数的个数

  - 注意：**rest参数和参数默认值**是不参与参数的个数的

  ```js
  function foo(a,b,c){}
  var bar = function(d,e = 10,...args) {}
  console.log(foo.length) // 3
  console.log(bar.length) // 1
  ```



# 认识arguments

- **arguments** 是一个 对应于 **传递给函数的参数** 的 **类数组(array-like)对象**

  ```js
  function foo(a,b,c) {
    console.log(arguments) // Arguments(3) [1, 2, 3]
  }
  foo(1,2,3)
  ```

- array-like意味着它不是一个数组类型，而是一个对象类型：

  - 但是它却拥有数组的一些特性，比如说length，比如可以通过index索引来访问
  - 但是它却没有数组的一些方法，比如filter、map等

  ```js
  function foo(a,b,c) {
    console.log(arguments.length) // 3
    console.log(arguments[0]) // 1
  }
  foo(1,2,3)
  ```



## arguments转Array

+ 遍历arguments，添加到一个新数组中

  ```js
  function foo(a,b,c) {
    var newArguments = []
    for (var arg of arguments) {
      newArguments.push(arg)
    }
    console.log(newArguments) // [4, 5, 6]
  }
  foo(4,5,6) 
  ```

- 调用数组slice函数并改变this指向

  ```js
  function foo(a,b,c) {
    var newArgs1 = [123,456,789].slice.apply(arguments)
    var newArgs2 = Array.prototype.slice.apply(arguments)
    console.log(newArgs1) // [11, 22, 33]
    console.log(newArgs2) // [11, 22, 33]	
  }
  foo(11,22,33) 
  ```

- ES6中的两个方法

  - Array.from
  - […arguments]

  ```js
  function foo(a,b,c) {
    var newArgs1 = Array.from(arguments)
    var newArgs2 = [...arguments]
    console.log(newArgs1) // [11, 22, 33]
    console.log(newArgs2) // [11, 22, 33]	
  }
  foo(11,22,33) 
  ```



# 函数的剩余（rest）参数

- ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中：

  - 如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组

  ```js
  function foo(a,...args) {
    console.log(a) // 1
    console.log(args) // [2,3]
  }
  foo(1,2,3)
  ```

- 那么剩余参数和arguments有什么区别呢

  - 剩余参数只包含那些**没有对应形参的实参**，而 **arguments 对象包含了传给函数的所有实参**

  - **arguments对象不是一个真正的数组**，而**rest参数是一个真正的数组**，可以进行数组的所有操作

  - arguments是**早期的ECMAScript**中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供并且希望以此

    来替代arguments的

- **剩余参数必须放到最后一个位置，否则会报错**



# JavaScript纯函数

- 什么是纯函数

  - **确定的输入，一定会产生确定的输出**

  - **函数在执行过程中，不能产生副作用**

- 副作用概念的理解

  - 表示在**执行一个函数**时，除了**返回函数值**之外，还对**调用函数产生了附加的影响**，比如**修改了全局变量**，**修改参数或者改变外部的存储**

  ```js
  // 不是一个纯函数
  var message = "Hello World";
  var obj = { message: "obj" };
  function printInfo(info) {
    console.log(info); // {message: 'obj'}
    info.message = "printInfo";
    message = "Hello printInfo";
  }
  
  printInfo(obj);
  console.log(obj); // {message: 'printInfo'}
  console.log(message); // Hello printInfo
  
  // 纯函数
  function add(num) {
    return num
  }
  add(5) // 10
  add(5) // 10
  
  // 纯函数
  var names = ["abc", "cba", "nba", "mba"];
  var newNames = names.slice(1, 3);
  console.log("names:", names); // names: ['abc', 'cba', 'nba', 'mba']
  console.log("newNames:", newNames); // newNames: ['cba', 'nba']
  ```



# 柯里化概念的理解

- 维基百科的解释

  - 在计算机科学中，**柯里化**（英语：Currying），又译为**卡瑞化**或**加里化**

  - 是把接收**多个参数的函数**，变成**接受一个单一参数**（最初函数的第一个参数）的函数，并且**返回接受余下的参数**，而且**返回**

    **结果的新函数**的技术

  - 柯里化声称  **“如果你固定某些参数，你将得到接受余下参数的一个函数”**

- 自己对柯里化的理解
  - 只**传递给函数一部分参数来调用它**，让**它返回一个函数去处理剩余的参数**
  - **这个过程就称之为柯里化**

- 柯里化是一种函数的转换，将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)

  - 柯里化不会调用函数。它只是对函数进行转换

  ```js
  function foo2(x) {
    return function (y) {
      return function (z) {
         console.log(x + y + z);
      };
    };
  }
  foo2(10)(20)(30); // 60
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

  

## 柯里化优势一   函数的职责单一

- 那么为什么需要有柯里化呢

  - 在函数式编程中，我们其实往往希望**一个函数处理的问题尽可能的单一**，而**不是将一大堆的处理过程交给一个函数来处理**
  - 那么**我们是否就可以将每次传入的参数在单一的函数中进行处理**，处理完后在**下一个函数中再使用处理后的结果**

  ```js
  function add(x){
    x = x + 2
    return function(y){
      y = y * 2
      return function(z){
        z = z / 2
        return x + y + z
      }
    }
  }
  add(10)(20)(10) // 57
  ```



## 柯里化优势二   函数的参数复用

- 另外一个使用柯里化的场景是可以帮助我们可以**复用参数逻辑**

  - makeAdder函数要求我们传入一个num（并且如果我们需要的话，可以在这里对num进行一些修改）
  - 在之后使用返回的函数时，我们不需要再继续传入num了

  ```js
  function makeAdder(num) {
    return function(count) {
      return num + count
    }
  }
  var adder5 = makeAdder(5)
  adder5(10) // 15
  
  var adder10 = makeAdder(10)
  adder10(10) // 20
  ```



# 组合函数概念的理解

- **组合（Compose）函数**是在JavaScript开发过程中一种对**函数的使用技巧、模式**

  - 比如我们现在需要对**某一个数据**进行**函数的调用**，执行**两个函数fn1和fn2**，这**两个函数是依次执行**的
  - 那么如果每次我们都需要**进行两个函数的调用，操作上就会显得重复**
  - 那么**是否可以将这两个函数组合起来，自动依次调用**呢
  - 这个过程就是**对函数的组合**，我们称之为 **组合函数（Compose Function）**

  ```js
  function double(num) {
    return num * 2
  }
  
  function pow(num) {
    return num + 2
  }
  
  console.log(pow(double(11))) // 24
  console.log(pow(double(22))) // 46
  
  
  function composeFn(num) {
    return pow(double(num))
  }
  
  console.log(composeFn(100)) // 202
  ```



# 认识严格模式

- JavaScript历史的局限性
  - 长久以来，**JavaScript 不断向前发展且并未带来任何兼容性问题**
  - 新的特性被加入，旧的功能也没有改变，这么做**有利于兼容旧代码**
  - 但缺点是 JavaScript 创造者的**任何错误或不完善的决定也将永远被保留在 JavaScript 语言**中
- 在ECMAScript5标准中，JavaScript提出了**严格模式的概念（Strict Mode）**
  - 严格模式很好理解，是一种**具有限制性的JavaScript模式**，从而使**代码隐式的脱离了 ”懒散（sloppy）模式“**
  - **支持严格模式的浏览器**在检测到代码中有严格模式时，会**以更加严格的方式对代码进行检测和执行**
- 严格模式对正常的JavaScript语义进行了一些限制
  - 严格模式通过 **抛出错误** 来消除一些原有的 **静默（silent）**错误
  - 严格模式让**JS引擎在执行代码时可以进行更多的优化**（不需要对一些特殊的语法进行处理）
  - 严格模式禁用了**在ECMAScript未来版本中可能会定义的一些语法**



## 开启严格模式

- 可以支持**在js文件**中开启严格模式

- 也支持对**某一个函数**开启严格模式

- 严格模式通过在文件或者函数开头使用 **"use strict"** 来开启

  ```js
  // 给整个script开启严格模式
  "use strict"
  
  // 给一个函数开启严格模式
  function foo() {
    "use strict"
  }
  foo()
  ```



## 严格模式限制

- 严格模式下的严格语法限制
  - JavaScript被设计为新手开发者更容易上手，所以有时候本来错误语法，被认为也是可以正常被解析的
  - 但是这种方式可能给带来留下来安全隐患
  - 在严格模式下，这种失误就会被当做错误，以便可以快速的发现和修正

1. 无法意外的创建全局变量

2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常

3. 严格模式下试图删除不可删除的属性

4. 严格模式不允许函数参数有相同的名称

5. 不允许0的八进制语法

6. 在严格模式下，不允许使用with

7. 在严格模式下，eval不再为上层引用变量

8. 严格模式下，this绑定不会默认转成对象

   ```js
   "use strict"
   // 1.不会意外创建全局变量
   function foo() {
     message = "Hello World"
   }
   foo()
   console.log(message)
   
   // 2.发现静默错误
   var obj = {
       name: "why"
   }
   Object.defineProperty(obj, "name", {
       writable: false,
       configurable: false
   })
   obj.name = "kobe"
   console.log(obj.name)
   
   delete obj.name
   console.log(obj)
   
   // 3.参数名称不能相同
   function foo(num, num) {}
   
   // 4.不能以0开头
   console.log(0123);
   
   // 5.eval函数不能为上层创建变量
   eval(`var message = "Hello World"`)
   console.log(message)
   
   // 6.严格模式下, this是不会转成对象类型的
   function foo() {
       console.log(this)
   }
   foo.apply("abc")
   foo.apply(123)
   foo.apply(undefined)
   foo.apply(null)
   
   // 独立函数执行默认模式下, 绑定window对象
   // 在严格模式下, 不绑定全局对象而是undefined
   foo()
   ```



# Object.defineProperty

- **Object.defineProperty()** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

- 可接收三个参数：

  - obj要定义属性的对象

  - prop要定义或修改的属性的名称或 Symbol 

  - descriptor要定义或修改的属性描述符

- 返回值：被传递给函数的对象



## 数据属性描述符

- 数据数据描述符有如下四个特性：

- configurable：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符

  - 当我们直接在一个对象上定义某个属性时，这个属性的 configurable 为 true
  - 当我们通过属性描述符定义一个属性时，这个属性的 configurable 默认为 false

  ```js
  // configurable: true
  var obj = { name: "hhhh", age: 18 };
  Object.defineProperty(obj, "name", {
    configurable: false, // 告诉js引擎, obj对象的 name 属性不可以被删除
  });
  	
  delete obj.name;
  console.log(obj); // {name: 'hhhh', age: 18}
  ```

- enumerable：表示属性是否可以通过 for in 或者 Object.keys() 返回该属性

  - 当我们直接在一个对象上定义某个属性时，这个属性的 enumerable 为 true
  - 当我们通过属性描述符定义一个属性时，这个属性的 enumerable 默认为 false

  ```js
  // configurable: true
  var obj = { name: "hhhh", age: 18 };
  Object.defineProperty(obj, "name", {
    enumerable: false, // 告诉js引擎, obj对象的 name 属性不可枚举(for in/Object.keys)
  })
  for (var key in obj) {
    console.log(key); // age
  }
  console.log(Object.keys(obj)) // age
  ```

- writable：表示是否可以修改属性的值

  - 当我们直接在一个对象上定义某个属性时，这个属性的 writable 为 true
  - 当我们通过属性描述符定义一个属性时，这个属性的 writable 默认为 false

  ```js
  // configurable: true
  var obj = { name: "hhhh", age: 18 };
  Object.defineProperty(obj, "name", {
    writable: false, // 告诉js引擎, obj对象的 name 属性不写入(只读属性 readonly)
  })
  obj.name = "aaaa"
  console.log(obj.name) // hhhh
  ```

- value：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改

  - 默认情况下这个值是 undefined

  ```js
  // configurable: true
  var obj = { name: "hhhh", age: 18 };
  Object.defineProperty(obj, "name", {
      value: "哈哈哈哈哈", // 告诉js引擎, 返回这个 value
  });
  console.log(obj.name); // "哈哈哈哈哈"
  ```



## 存取属性描述符

- 数据数据描述符有如下四个特性：

  - configurable：和**数据属性描述符**是一致的
  - enumerable：和**数据属性描述符**是一致的
  - get：**获取属性**时会执行的函数。默认为 undefined
  - set：**设置属性**时会执行的函数。默认为 undefined

  ```js
  var obj = { name: "哈哈哈哈" };
  var lastName = "";
  Object.defineProperty(obj, "name", {
    configurable: true,
    enumerable: false,
    set: function (value) {
      console.log("set方法被调用了", value); // 4次
      lastName = value;
    },
    get: function (value) {
      console.log("get方法被调用了"); // 1次
      return lastName;
    },
  });
  
  obj.name = "kobe";
  obj.name = "jame";
  obj.name = "curry";
  obj.name = "The Shy";
  
  console.log(obj.name); // The Shy
  ```




# 对象的原型

- JavaScript当中每个对象都有一个特殊的内置属性 [[prototype]]，这个特殊的对象可以指向另外一个对象

- 那么这个对象有什么用呢

  - 当我们通过引用对象的**属性key来获取一个value时**，它会触发 [[get]] 的操作
  - 这个操作会**首先检查该对象是否有对应的属性**，如果有的话就使用它
  - **如果对象中没有该属性，那么会访问对象 [[prototype]] 内置属性指向的对象上的属性**

- 获取的方式有两种

  - 通过对象的 `__proto__` 属性可以获取到（但是这个是**早期浏览器自己添加的，存在一定的兼容性问题**）
  - 通过 Object.getPrototypeOf 方法可以获取到

  ```js
  var obj = { name: "shy", age: 18 };
  
  // 获取对象的原型
  console.log(obj.name, obj.age);
  console.log(obj.__proto__);
  
  console.log(Object.getPrototypeOf(obj));
  console.log(obj.__proto__ === Object.getPrototypeOf(obj)); // true
  
  // 这个原型有什么用呢?
  // 当我们获取一个属性对应的值时
  //   它会优先在自己的对象中查找, 如果找到直接返回
  //   如果没有找到, 那么会在原型对象中查找
  
  obj.__proto__.message = "Hello World";
  console.log(obj.message);
  ```



# 函数的原型

- **所有的函数都有一个 prototype** 的属性（注意：不是 `__proto__`）

  ```js
  var obj = {};
  function foo() {}
  
  // 1.将函数看成是一个普通的对象时, 它是具备__proto__(隐式原型)
  // 作用: 查找key对应的value时, 会找到原型身上
  console.log(obj.__proto__);
  console.log(foo.__proto__);
  
  // 2.将函数看成是一个函数时, 它是具备 prototype (显式原型)
  // 作用: 用来构建对象时, 给对象设置隐式原型的
  console.log(foo.prototype);
  console.log(obj.prototype); // 对象是没有 prototype
  ```



## new 构造函数

- 在内存中创建一个新的对象(空对象)

- 这个**对象内部的 [[prototype]] 属性**会被**赋值为该构造函数的prototype属性**

  - `obj.__proto__ = function.prototype `

- 构造函数内部的this，会指向创建出来的新对象

- 执行函数的内部代码

- 如果构造函数返回的是基本数据类型，那么会返回创建出来的新对象

  ```js
  function Foo() {
    // 1.创建空的对象
    // 2.将Foo的prototype原型(显式原型)赋值给空的对象的__proto__(隐式原型)
  }
  console.log(Foo.prototype);
  
  var f1 = new Foo();
  var f2 = new Foo();
  var f3 = new Foo();
  
  console.log(f1.__proto__);
  console.log(f1.__proto__ === Foo.prototype); // true
  console.log(f2.__proto__ === f3.__proto__); // true
  ```



## constructor

- 原型对象上面是有一个属性的：constructor

  - 默认情况下原型上都会添加一个属性叫做 constructor，这个 constructor **指向当前的函数对象**

  ```js
  // 非常重要的属性: constructor, 指向Person函数对象
  function Person() {}
  
  // 1.对constructor在prototype上的验证
  var PersonPrototype = Person.prototype;
  console.log(PersonPrototype); // { constructor: Person() }
  console.log(PersonPrototype.constructor); // Person() {}
  console.log(PersonPrototype.constructor === Person); // true
  
  console.log(Person.name); // Person
  console.log(PersonPrototype.constructor.name); // Person
  
  // 2.实例对象p
  var p = new Person();
  console.log(p.__proto__.constructor); // Person() {}
  console.log(p.__proto__.constructor.name); // Person
  ```

- 创建对象过程内存

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log("running~");
  };
  
  var p1 = new Person("the", 18);
  var p2 = new Person("shy", 30);
  
  // 进行操作
  console.log(p1.name); // the
  console.log(p2.name); // shy
  
  p1.running(); // running
  p2.running(); // running
  
  // 新增属性
  Person.prototype.address = "湖南";
  p1.__proto__.info = "很美丽";
  console.log(p1.__proto__ === Person.prototype); // true
  console.log(p2.__proto__ === Person.prototype); // true
  
  p1.height = 1.88;
  p2.isAdmin = true;
  
  // 获取属性
  console.log(p1.address); // 湖南
  console.log(p2.isAdmin); // true
  console.log(p1.isAdmin); // undefined
  console.log(p2.info); // 很美丽
  
  // 修改address
  p1.address = "广州市";
  console.log(p2.address); // 湖南
  ```

  [![XdI7WR.png](https://s1.ax1x.com/2022/06/10/Xy5Oc4.png)]()



# 原型链

- 从一个对象上**获取属性时**，如果在**当前对象中没有获取到就会去它的原型上面获取**，**如果还没有找到就继续往上找**，找到最顶层原型里面也没有，则返回 null，**这种查找过程就叫做原型链**

[![XwCVxK.png](https://s1.ax1x.com/2022/06/05/XwCVxK.png)]()



# 继承

- 继承可以帮助我们**将重复的代码和逻辑抽取到父类中**，子类只需要直接继承过来使用即可
- 面向对象有三大特性：封装、继承、多态
  - 封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程
  - 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量
  - 多态：不同的对象在执行时表现出不同的形态

## 方式一

- 父类的原型直接赋值给子类的原型

  - 缺点: 父类和子类共享同一个原型对象, 修改了任意一个, 另外一个也被修改

  ```js
  // 定义Person构造函数(类)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log(this.name + " 在跑步");
  };
  Person.prototype.eating = function () {
    console.log(this.name + " 在吃饭");
  };
  
  // 定义学生类
  function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  // 继承
  Student.prototype = Person.prototype; 
  
  Student.prototype.studying = function () {
    console.log(this.name + " 在学习");
  };
  // 创建学生
  var stu1 = new Student("shy", 18, 100);
  stu1.running();
  stu1.studying();
  console.log(stu1);
  ```

- 内存图表现

  [![XwilgP.png](https://s1.ax1x.com/2022/06/05/XwilgP.png)]()



## 方式二：原型链继承

- 父类创建一个实例对象作为子类的原型对象

  - 缺点: **直接打印对象是看不到这个属性**的
  - 这个属性**会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题**
  - **不能给Person传递参数**（让每个stu有自己的属性），因为这个对象是一次性创建的（没办法定制化）

  ```js
  // 定义Person构造函数(类)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log(this.name + " 在跑步");
  };
  Person.prototype.eating = function () {
    console.log(this.name + " 在吃饭");
  };
  
  // 定义学生类
  function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  // 继承
  var p = new Person("哈哈哈", 18)
  Student.prototype = p
  
  Student.prototype.studying = function () {
    console.log(this.name + " 在学习");
  };
  // 创建学生
  var stu1 = new Student("shy", 18, 100);
  stu1.running();
  stu1.studying();
  console.log(stu1);
  ```

- 内存图表现

![](https://s1.ax1x.com/2022/06/05/XwN1FH.png)



## 方式三：组合借用继承

- 在子类构造函数的内部调用父类构造函数

  - 缺点: 无论在什么情况下，至少会被**调用两次父类构造函数**
  - **所有的子类实例事实上会拥有两份父类的属性**
    - 一份在当前的实例自己里面(也就是Student本身的)，另一份在子类对应的原型对象中(也就是p里面)

  ```js
  // 定义Person构造函数(类)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log(this.name + " 在跑步");
  };
  Person.prototype.eating = function () {
    console.log(this.name + " 在吃饭");
  };
  
  // 定义学生类
  function Student(name, age, score) {
    // 重点: 借用构造函数
    Person.call(this, name, age)
    this.score = score;
  }
  // 继承
  var p = new Person("哈哈哈", 18)
  Student.prototype = p
  
  Student.prototype.studying = function () {
    console.log(this.name + " 在学习");
  };
  // 创建学生
  var stu1 = new Student("shy", 18, 100);
  stu1.running();
  stu1.studying();
  console.log(stu1);
  ```



## 创建原型对象的方法

- 原型式继承函数，而且这种继承方法**不是通过构造函数来实现**的

  ```js
  /*
    满足什么条件:
      1.必须创建出来一个对象
      2.这个对象的隐式原型必须指向父类的显式原型
      3.将这个对象赋值给子类的显式原型
  */
  function createObject(o) {
    function F() {}
    F.prototype = o
    return new F()
  }
  
  // 将Son和Parent联系在一起
  // 寄生式继承函数
  // 寄生式继承的思路是 结合原型类继承和工厂模式 的一种方式
  function inherit(Son, Parent) {
    Son.prototype = createObject(Parent.prototype);
    Object.defineProperty(Son.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: Son,
    });
  }
  
  function Person(name, age) {}
  function Student(name, age, score) {}
  
  // 1.之前的做法: 但是不想要这种做法
  var p = new Person();
  Student.prototype = p;
  
  // 2.方案一:
  var obj = {};
  // obj.__proto__ = Person.prototype 存在浏览器兼容性问题
  // 设置obj隐式原型
  Object.setPrototypeOf(obj, Person.prototype);
  Student.prototype = obj;
  
  // 3.方案二:
  function F() {}
  F.prototype = Person.prototype;
  Student.prototype = new F();
  
  // 4.方案三:
  // 创建一个新对象并且设置隐式原型
  var obj1 = Object.create(Person.prototype);
  console.log(obj1.__proto__ === Person.prototype);
  Student.prototype = obj1;
  
  inherit(Student,Person)
  ```



## 方式四：寄生组合式继承

- 原型链/借用/原型式/寄生式函数

  ```js
  function createObject(o) {
    function F() {}
    F.prototype = o
    return new F()
  }
  // 寄生式函数
  function inherit(Son, Parent) {
    Son.prototype = createObject(Parent.prototype);
    Object.defineProperty(Son.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: Son,
    });
  }
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.running = function () {
    console.log(this.name + " 在跑步");
  };
  Person.prototype.eating = function () {
    console.log(this.name + " 在吃饭");
  };
  
  function Student(name, age, score) {
    Person.call(this, name, age)
    this.score = score;
  }
  
  inherit(Student,Person)
  
  Student.prototype.studying = function () {
    console.log(this.name + " 在学习");
  };
  
  var stu1 = new Student("shy", 18, 100);
  stu1.running();
  stu1.studying();
  console.log(stu1);
  ```


- 内存图表现 - 前

  ![](https://s1.ax1x.com/2022/06/06/X0G7He.png)

  

- 内存图表现 - 后

  ![](https://s1.ax1x.com/2022/06/07/XBLbWT.png)



# 对象的方法补充

- hasOwnProperty

  - 对象是否有某一个属于**自己的属性（不是在原型上的属性）**

- in/for in 操作符

  - 判断某个属性是否在某个**对象或者对象的原型上**

- instanceof

  - 用于检测**构造函数（Person、Student类）的pototype**，是否出现在**某个实例对象的原型链**上 

- isPrototypeOf

  - 用于检测**某个对象**，是否出现在**某个实例对象的原型链上**

  ```js
  function createObject(o) {
      function F() {}
      F.prototype = o;
      return new F();
  }
  var obj = { name: "obj" };
  
  var info = createObject(obj);
  info.address = "info-address";
  info.intro = "info-intro";
  
  console.log(info.name, info.address); // obj info-address
  console.log(info); // {address: 'info-address', intro: 'info-intro'}
  
  // 1.hasOwnProperty
  console.log(info.hasOwnProperty("name")); // false
  console.log(info.hasOwnProperty("address")); // true
  
  // 2.in操作符
  console.log("name" in info);
  console.log("address" in info);
  // 注意: for in遍历不仅仅是自己对象上的内容, 也包括原型对象上的内容
  for (var key in info) {
      console.log(key);
  }
  
  // 3.instanceof
  // instanceof用于判断对象和类(构造函数)之间的关系
  function Person() {}
  function Student() {}
  Student.prototype = Person.prototype;
  
  // stu实例对象
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



# 构造函数的类方法

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
  
  // 添加到 Person **原型上的方法称为实例方法**
  Person.prototype.running = function () {
      console.log(this.name + "running~");
  };
  Person.prototype.eating = function () {
      console.log("eating~");
  };
  
  // 添加到 Person **对象本身的方法称为类方法**
  var names = ["abc", "cba", "nba", "mba","hba"];
  Person.randomPerson = function () {
    var randomName = names[Math.floor(Math.random() * names.length)];
    return new Person(randomName, Math.floor(Math.random() * 100));
  };
  
  // 实例对象
  var p1 = new Person("shy", 18);
  p1.running();
  ```



# class

- 两种方式来声明类：**类声明**和**类表达式**

  ```js
  class Person {}
  
  var Student = class {}
  
  class Person {
    // 1.类中的构造函数
    // 当我们通过new关键字调用一个Person类时, 默认调用class中的constructor方法
    constructor(name, age) {
      this.name = name
      this.age = age
  }
  
    // 2.实例方法
    // 本质上是放在Person.prototype
    running() {
      console.log(this.name + " running~")
    }
    eating() {
      console.log(this.name + " eating~")
    }
  }
  
  // 创建实例对象
  var p1 = new Person("shy", 18)
  
  // 使用实例对象中属性和方法
  console.log(p1.name, p1.age); // shy 18
  p1.running(); // shy running~
  p1.eating(); // shy eating~
  
  console.log(Person.prototype === p1.__proto__); // true
  console.log(Person.running); // undefined
  console.log(Person.prototype.running); // running() {}
  ```



## class和function类的区别

- 它们常见的区别是：**class定义的类, 不能作为一个普通的函数进行调用**

  ```js
  // function定义类
  function Person1(name, age) {
    this.name = name
    this.age = age
  }
  
  Person1.prototype.running = function() {}
  Person1.prototype.eating = function() {}
  
  var p1 = new Person1("shy", 18)
  console.log(p1.__proto__ === Person1.prototype) // true
  console.log(Person1.prototype.constructor) // Person1(){}
  console.log(typeof Person1) // function
  
  // 不同点: 作为普通函数去调用
  Person1("abc", 100)
  
  // class定义类
  class Person2 {
    constructor(name, age) {
      this.name = name
      this.age = age
  }
    running() {}
    eating() {}
  }
  
  var p2 = new Person2("ning", 18)
  console.log(p2.__proto__ === Person2.prototype) // true
  console.log(Person2.prototype.constructor) // Person2(){}
  console.log(typeof Person2) // function
  
  // 不同点: class定义的类, 不能作为一个普通的函数进行调用
  Person2("cba", 90) // Class constructor Person2 cannot be invoked without 'new'
  ```



## 类的静态方法

- 静态方法通常用于定义**直接使用类来执行的方法**，不需要有类的实例，使用**static关键字**来定义

  ```js
  // function Person() {}
  // 实例方法
  // Person.prototype.running = function() {}
  // 类方法
  // Person.randomPerson = function() {}
  
  // var p1 = new Person()
  // p1.running()
  // Person.randomPerson()
  
  // class定义的类
  var names = ["abc", "cba", "nba", "mba"]
  class Person {
    constructor(name, age) {
    	this.name = name
   	this.age = age
  }
  
    // 实例方法
    running() {
  	console.log(this.name + " running~")
    }
  
    // 类方法(静态方法)
    static randomPerson() {
  	console.log(this); // Person
  	var randomName = names[Math.floor(Math.random() * names.length)]
  	return new this(randomName, Math.floor(Math.random() * 100))
    }
  }
  
  var p1 = new Person()
  p1.running(); // shy running~
  var randomPerson = Person.randomPerson()
  console.log(randomPerson); // Person {name: 'cba', age: 50}
  ```



## 类的继承 - extends

- 通过extends关键字来实现继承

  - 在子类的构造函数中**使用this或者返回默认对象**之前，**必须先通过super调用父类的构造函数**！

  ```js
  // 定义父类
  class Person {
    constructor(name, age) {
  	this.name = name;
  	this.age = age;
  }
    // 实例方法
    running() {
  	console.log("running~");
    }
    eating() {
  	console.log("eating~");
    }
    // 类方法(静态方法)
    static sleep() {
  	console.log("sleep~");
    }
  }
  
  class Student extends Person {
    constructor(name, age, sno, score) {
  	super(name, age);
  	this.sno = sno;
      this.score = score;
  }
    studying() {
     console.log("studying~");
    }
  }
  
  var stu1 = new Student("shy", 18, 1, 100);
  stu1.running(); // running~
  stu1.eating(); // eating~
  stu1.studying(); // studying~
  Student.sleep(); // sleep~
  ```



## super关键字

- class为我们的方法中还提供了super关键字：

  - 执行 super.xxx() 来调用一个父类方法
  - 执行 super() 来调用一个父类 constructor

- 在子类的构造函数中**使用this或者返回默认对象**之前，**必须先通过super调用父类的构造函数**！

- super的使用位置有三个：子类的构造函数、实例方法、静态方法

  ```js
  class Animal {
    running() {
  	console.log("running");
    }
    eating() {
  	console.log("eating");
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
  dog.eating();
  Dog.sleep();
  ```



## 类的混入mixin

- JavaScript的类只支持单继承：也就是只能有一个父类

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
  
  // class NewBird extends mixinRunner(mixinAnimal(Bird)) {}
  var NewBird = mixinRunner(mixinAnimal(Bird));
  var bird = new NewBird();
  bird.running();
  bird.flying();
  bird.eating();
  ```



# 解构Destructuring

- ES6中新增了一个从数组或对象中**方便获取数据的方法**，称之为解构Destructuring

  - 解构赋值 是**一种特殊的语法**，它可以将数组或对象 **拆包 至一系列变量中**

- 数组的解构

  ```js
  var names = ["abc", "cba", undefined, "nba", "mba"];
  
  // 1. 基本使用
  var [name1, name2, name3] = names;
  console.log(name1, name2, name3); // abc cba undefined
  
  // 2. 顺序问题: 严格的顺序
  var [name1, , name3] = names;
  console.log(name1, name3); // abc undefined
  
  // 3. 解构出数组
  var [name1, name2, ...newNames] = names;
  console.log(name1, name2, newNames); // abc cba [undefined, 'nba', 'mba']
  
  // 4. 解构的默认值
  var [name1, name2, name3 = "default"] = names;
  console.log(name1, name2, name3); // abc cba default
  ```

- 对象的解构

  ```js
  var obj = { name: "shy", age: 18, height: 1.88 };
  
  // 1. 基本使用
  var { name, age, height } = obj;
  console.log(name, age, height); // shy 18 1.88
  
  // 2. 顺序问题: 对象的解构是没有顺序, 根据key解构
  var { height, name, age } = obj;
  console.log(name, age, height); // shy 18 1.88
  
  // 3. 对变量进行重命名
  var { height: wHeight, name: wName, age: wAge } = obj;
  console.log(wName, wAge, wHeight); // shy 18 1.88
  
  // 4. 默认值
  var {
      height: wHeight,
      name: wName,
      age: wAge,
      address: wAddress = "韩国",
  } = obj;
  console.log(wName, wAge, wHeight, wAddress); // shy 18 1.88 韩国
  
  // 5. 对象的剩余内容
  var { name, age, ...newObj } = obj;
  console.log(name, age, newObj); // shy 18 {height: 1.88}
  ```



# 手写call、apply、bind

```js
function foo(a, b, c, d) {
  console.log(this); // {name: '转成对象类型', fn: ƒ}
  console.log(a, b, c, d);// 1 2 3 4
}
var thisArg = "";
thisArg = thisArg === null || thisArg === undefined ? window : { name: "转成对象类型" };
thisArg.fn = foo;
/*
thisArg.fn = function (a, b, c, d) {
  console.log(this); 
  console.log(a, b, c, d);
};
*/
thisArg.fn(1,2,3,4);
```

## call

```js
Function.prototype.myCall = function (thisArg, ...parameter) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg);
  thisArg.fn = this; // this ---> function foo(){}
  thisArg.fn(...parameter);
  delete thisArg.fn;
};

function foo(a, b, c, d) {
  console.log(this);
  console.log(a, b, c, d);
}

foo.call("8", 1, ["2"], { value: 3 }, true);
foo.call(8, 1, ["2"], { value: 3 }, true);
foo.call(true, 1, ["2"], { value: 3 }, true);
foo.call(null, 1, ["2"], { value: 3 }, true);
foo.call(undefined, 1, ["2"], { value: 3 }, true);
foo.call({}, 1, ["2"], { value: 3 }, true);
foo.call([], 1, ["2"], { value: 3 }, true);

console.log("------------------------------------------------------");

foo.myCall("8", 1, ["2"], { value: 3 }, true);
foo.myCall(8, 1, ["2"], { value: 3 }, true);
foo.myCall(true, 1, ["2"], { value: 3 }, true);
foo.myCall(null, 1, ["2"], { value: 3 }, true);
foo.myCall(undefined, 1, ["2"], { value: 3 }, true);
foo.myCall({}, 1, ["2"], { value: 3 }, true);
foo.myCall([], 1, ["2"], { value: 3 }, true);
```

## apply

```js
Function.prototype.myApply = function (thisArg, parameter) {
  if (typeof parameter === "string" || typeof parameter === "number" || typeof parameter === "boolean" ) {
	throw new Error("CreateListFromArrayLike called on non-object");
  }

  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg);
    
  thisArg.fn = this; // this ---> function foo(){}
  if (Array.isArray(parameter)) {
    thisArg.fn(...parameter);
  } else {
	thisArg.fn();
  }
  delete thisArg.fn;
};

function foo(a, b, c, d) {
  console.log(this);
  console.log(a, b, c, d);
}

// 正确情况
foo.apply("8", [1, ["2"], { value: 3 }, true]);
foo.apply(8, [1, ["2"], { value: 3 }, true]);
foo.apply(true, [1, ["2"], { value: 3 }, true]);
foo.apply(null, [1, ["2"], { value: 3 }, true]);
foo.apply(undefined, [1, ["2"], { value: 3 }, true]);
foo.apply({}, [1, ["2"], { value: 3 }, true]);
foo.apply([], [1, ["2"], { value: 3 }, true]);

// 针对特殊情况
foo.apply("'1'", "1"); // x
foo.apply("1", 1); // x
foo.apply("true", true); // x
foo.apply("undefined", undefined);  // undefined undefined undefined undefined
foo.apply("null", null); // undefined undefined undefined undefined
foo.apply("{}", {}); // undefined undefined undefined undefined
foo.apply("{name: '123', value: 123}", { name: "123", value: 123 }); // undefined undefined undefined undefined
foo.apply("[]", []); // undefined undefined undefined undefined

console.log("------------------------------------------------------");

// 正确情况
foo.myApply("8", [1, ["2"], { value: 3 }, true]);
foo.myApply(8, [1, ["2"], { value: 3 }, true]);
foo.myApply(true, [1, ["2"], { value: 3 }, true]);
foo.myApply(null, [1, ["2"], { value: 3 }, true]);
foo.myApply(undefined, [1, ["2"], { value: 3 }, true]);
foo.myApply({}, [1, ["2"], { value: 3 }, true]);
foo.myApply([], [1, ["2"], { value: 3 }, true]);

// 针对特殊情况
foo.myApply("'1'", "1"); // x
foo.myApply("1", 1); // x
foo.myApply("true", true); // x
foo.myApply("undefined", undefined);  // undefined undefined undefined undefined
foo.myApply("null", null); // undefined undefined undefined undefined
foo.myApply("{}", {}); // undefined undefined undefined undefined
foo.apply("{name: '123', value: 123}", { name: "123", value: 123 }); // undefined undefined undefined undefined
foo.myApply("[]", []); // undefined undefined undefined undefined
```

## bind

```js
Function.prototype.myBind = function (thisArg, ...parameter) {
  thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg);
  thisArg.fn = this; // this ---> function foo(){}
  return (...newParameter) => {
	thisArg.fn(...parameter, ...newParameter);
  };
};

function foo(a, b, c, d) {
  console.log(this);
  console.log(a, b, c, d);
}

var newFoo1 = foo.bind("8", 1, 2);
newFoo1(3, 4);
newFoo1(5, 6);
newFoo1();

console.log("--------------------------");

var newFoo2 = foo.myBind("8", 1, 2);
newFoo2(3, 4);
newFoo2(5, 6);
newFoo2();
```



# 新的ECMA代码执行描述

- ES5文档的术语

  - 执行上下文栈：Execution Context Stack，用于执行上下文的栈结构

  - 执行上下文：Execution Context，代码在执行之前会先创建对应的执行上下文
  - 全局对象：Global Object，全局执行上下文关联的VO对象

  - 变量对象：Variable Object，上下文关联的VO对象，用于记录函数和变量声明

  - 活跃对象：Activation Object，函数执行上下文关联的VO对象

  - 作用域链：scope chain，作用域链，用于关联指向上下文的变量查找
- 在新的ECMA代码执行描述中（ES5以及之上），对于代码的执行流程描述改成了另外的一些词汇：
  - 基本思路是相同的，只是**对于一些词汇的描述发生了改变**
  - **执行上下文栈和执行上下文**也是相同的
  - [官方文档](https://262.ecma-international.org/6.0/#sec-lexical-environments)



## 词法环境（Lexical Environments）

- 词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符

  - 一个词法环境是由**环境记录（Environment Record）**和一个**外部词法环境（outer Lexical Environment）**组成

  - 一个词法环境经常用于**关联一个函数声明、代码块语句、try-catch语句，当它们的代码被执行时，词法环境被创建出来**

  > A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment. Usually a Lexical Environment is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement and a new Lexical Environment is created each time such code is evaluated.
  >
  > 翻译：
  >
  > 词法环境是一种规范类型，用于根据 ECMAScript 代码的词法嵌套结构定义标识符与特定变量和函数的关联。一个词法环境由一个环境记录和一个对外部词法环境的可能为空的引用组成。通常，词法环境与 ECMAScript 代码的某些特定语法结构相关联，例如FunctionDeclaration、BlockStatement或 TryStatement 的Catch子句，并且每次评估此类代码时都会创建一个新的词法环境

- 也就是在ES5之后，执行一个代码，通常会关联对应的词法环境

  - 那么执行上下文会关联哪些词法环境呢
    - LexicalEnvironment：Identifies the Lexical Environment used to resolve identifier references made by code within this execution context（**标识用于解析此执行上下文中的代码所做的标识符引用的词法环境**）
    - VariableEnvironment：Identifies the Lexical Environment whose EnvironmentRecord holds bindings created by VariableStatements within this execution context（**标识其EnvironmentRecord保存由此执行上下文中的VariableStatements创建的绑定的词法环境**）



## LexicalEnvironment和VariableEnvironment

- LexicalEnvironment用于处理let、const声明的标识符：

  > let and const declarations define variables that are scoped to the running execution context’s LexicalEnvironment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializer is assigned the value of its Initializer’s AssignmentExpression when the LexicalBinding is evaluated, not when the variable is created. If a LexicalBinding in a let declaration does not have an Initializer the variable is assigned the value undefined when the LexicalBinding is evaluated
  >
  > 翻译：
  >
  > let和const声明定义了范围为 正在运行的执行上下文的LexicalEnvironment的变量。变量是在实例化包含它们的词法环境时创建的，但在评估变量的词法绑定之前不能以任何方式访问。由具有Initializer的LexicalBinding定义的变量在评估LexicalBinding时分配其Initializer的AssignmentExpression的值，而不是在创建变量时。如果声明中的LexicalBinding没有 let初始化器在评估LexicalBinding时 为变量分配值undefined

- VariableEnvironment用于处理var和function声明的标识符：

  > A var statement declares variables that are scoped to the running execution context’s VariableEnvironment. Var variables are created when their containing Lexical Environment is instantiated and are initialized to undefined when created. Within the scope of any VariableEnvironment a common BindingIdentifier may appear in more than one VariableDeclaration but those declarations collective define only one variable. A variable defined by a VariableDeclaration with an Initializer is assigned the value of its Initializer’s AssignmentExpression when the VariableDeclaration is executed, not when the variable is created
  >
  > 翻译：
  >
  > var语句声明了范围为运行执行上下文的VariableEnvironment的变量。var 变量在它们包含的词法环境被实例化时创建，并在创建时初始化为undefined。在任何VariableEnvironment的范围内，一个通用的BindingIdentifier可能出现在多个VariableDeclaration中，但这些声明集体只定义一个变量。 由具有Initializer的VariableDeclaration定义的变量被赋予其Initializer的值 执行VariableDeclaration时的AssignmentExpression，而不是创建变量时



## 环境记录（Environment Record）

- 在这个规范中有两种主要的环境记录值:声明式环境记录和对象环境记录

  - 声明式环境记录：
    - 声明性环境记录用于定义ECMAScript语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与ECMAScript语言值关联起来的Catch子句
  - 对象式环境记录：
    - 对象环境记录用于定义ECMAScript元素的效果，例如WithStatement，它将标识符绑定与某些对象的属性关联起来

  > There are two primary kinds of Environment Record values used in this specification: declarative Environment Records and object Environment Records. Declarative Environment Records are used to define the effect of ECMAScript language syntactic elements such as FunctionDeclarations, VariableDeclarations, and Catch clauses that directly associate identifier bindings with ECMAScript language values. Object Environment Records are used to define the effect of ECMAScript elements such as WithStatement that associate identifier bindings with the properties of some object. Global Environment Records and function Environment Records are specializations that are used for specifically for Script global declarations and for top-level declarations within functions
  >
  > 翻译：
  >
  > 本规范中使用了两种主要的环境记录值：声明性环境记录和对象环境记录。声明性环境记录用于定义 ECMAScript 语言句法元素的效果，例如FunctionDeclarations、VariableDeclarations和Catch子句，它们直接将标识符绑定与ECMAScript 语言值相关联。对象环境记录用于定义 ECMAScript 元素的效果，例如WithStatement将标识符绑定与某些对象的属性相关联。全球环境记录和函数环境记录是专门用于脚本全局声明和函数内的顶级声明的特化



## 新ECMA描述内存图

[![](https://s1.ax1x.com/2022/06/12/X2evB8.png)]()



# let/const基本使用

- let关键字：

  - 从直观的角度来说，**let和var是没有太大的区别**的，都是**用于声明一个变量**

- const关键字：

  - const关键字是**constant的单词的缩写，表示常量、衡量**的意思
  - 它表示**保存的数据一旦被赋值，就不能被修改**
  - 但是**如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象**的内容

- 注意：另外**let、const不允许重复声明变量**

  ```js
  // 1.let
  let message1 = "你好, 世界"
  message1 = "Hello, world"
  message1 = '你好呀'
  console.log(message1) // 你好呀
  
  // 2.const
  const message2 = "nihao, shijie"
  message2 = "nihao, why" // Assignment to constant variable (常量变量赋值)
  
  let message3 = "哈哈哈"
  let message3 = "呵呵呵" // Identifier 'message3' has already been declared (已声明标识符“message3”)
  
  // 赋值引用类型
  const info = { name: "the", age: 18 }
  // info = {}  // Assignment to constant variable (常量变量赋值)
  info.name = "the shy"
  console.log(info) // {name: 'the shy', age: 18}
  ```



# let/const作用域提升

- let、const和var的另一个重要区别是作用域提升

  - 我们知道**var声明的变量是会进行作用域提升**的
  - 但是如果我们使用let、const声明的变量，**在声明之前访问会报错**
  - 在**执行上下文的词法环境创建出来的时候**，**变量事实上已经被创建了**，只是**这个变量是不能被访问**的，直到**词法绑定被求值**

  ```js
  console.log(foo)// Cannot access 'foo' before initialization (初始化之前无法访问“foo”)
  let foo = "哈哈哈" 
  ```



# let/const的块级作用域

- 在ES6中新增了块级作用域，并且通过**let、const、function、class声明**的标识符是具备**块级作用域的**限制的

- 但是我们会发现**函数拥有块级作用域**，但是**外面依然是可以访问的**

  - 这是因为**引擎会对函数的声明进行特殊的处理**，允许像**var一样在外界直接访问**

  ```js
  // 1.在ES5以及之前, 只有全局和函数会形成自己的作用域
  function foo() {
    console.log("Hello World");
  }
  // 代码块
  {
    var message = "Hello World";
  }
  console.log(message); // Hello World
  
  // foo() // foo is not a function
  {
    let message = "哈哈哈哈";
    const info = "呵呵呵呵";
    class Person {}
    function foo() {
      console.log("foo function");
    }
  }
  
  // console.log(message); // message is not defined
  // console.log(age); // age is not defined
  // const p = new Person(); // Person is not defined
  foo(); // foo function
  /*
    因为在ES5之前,函数是没有块级作用域的,但在ES6之后function声明突然有块级作用域了
    但是在早期的代码中别人有可能有这种写法,如果浏览器不识别这种代码,很多这种代码就报错了
    {
      function foo() {}
    }
    foo()
  */
  ```



# 暂时性死区 (TDZ)

- 在let、const定义的标识符真正执行到声明的代码之前，是不能被访问的	

  - **从块作用域的顶部一直到变量声明完成之前**，这个变量处在**暂时性死区**（temporal dead zone）

  ```js
  console.log(foo)// Cannot access 'foo' before initialization (初始化之前无法访问“foo”)
  let foo = "哈哈哈" 
  ```

- **暂时性死区**和**定义的位置没有关系**，和**代码执行的顺序有关系**

  ```js
  function foo() {
    console.log(message)
  }
  
  let message = "Hello World"
  foo()
  console.log(message) // Hello World
  ```



# 模板字符串

- 使用 `` 符号来编写字符串，称之为**模板字符串**

- 在模板字符串中，**可以通过 ${expression} 来嵌入动态的内容**

  ```js
  const name = "shy"
  const age = 18
  // 1.ES6之前
  var info1 = "my name is" + name + ", age is " + age
  
  // 2.ES6之后
  let info2 = `my name is ${name}, age is ${age}`
  console.log(info2)
  ```

- **标签模板字符串**

  - 模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）
  - 使用标签模板字符串，并且在**调用函数**的时候**插入其他的变量时模板字符串会被拆分**
    - 第一个元素是**数组**，是**被模板字符串拆分的字符串组合**
    - **后面的元素是模板字符串里写入的变量值**

  ```js
  const name = "shy"
  const age = 18
  
  function foo(...args) {
    console.log(args)
  /*
    0: ['my name is ', ', age is ', ', height is ', '']
    1: "shy"
    2: 18
    3: 1.88
  */
  }
  
  foo`my name is ${name}, age is ${age}, height is ${1.88}`
  ```



# 函数的默认参数

- 在ES6中，允许给函数一个默认值

- 参数的默认值我们通常会将其放到最后（在很多语言中，如果不放到最后其实会报错的）

  - 但是JavaScript**允许不将其放到最后**，**但是意味着还是会按照顺序来匹配**

- **默认值会改变函数的length的个数**，默认值以及**后面的参数都不计算在length之内了**

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
  
    // ES6之后新增语法: ??
    // arg1 = arg1 ?? "我是默认值"
  
    // 3.简便的写法: 默认参数
    console.log(arg1);
  }
  foo("");
  foo(0);
  foo(false);
  foo();
  foo(undefined);
  foo(null);
  foo(666);
  
  function bar(arg1, arg2 = "why", arg3, arg4) {
    console.log(bar.length) // 1
  }
  bar(18, "abc", "cba", "nba")
  ```



# 展开语法

- 展开语法(Spread syntax)

  - 可以在**函数调用/数组构造**时，将数组表达式或者string在语法层面展开
  - 还可以在**构造字面量对象**时, 将对象表达式按key-value的方式展开

- 展开语法的场景

  - 在**函数调用**时使用
  - 在**数组构造**时使用
  - 在构建**对象字面量**时，也可以使用展开运算符，这个是在ES2018（ES9）中添加的新特性

- 注意：**展开运算符其实是一种浅拷贝**

  ```js
  const names = ["abc", "cba", "nba", "mba"];
  const str = "Hello";
  
  const newNames = [...names, "aaa", "bbb"]
  console.log(newNames) // ['abc', 'cba', 'nba', 'mba', 'aaa', 'bbb']
  
  function foo(name1, name2, ...args) {
    console.log(name1, name2, args);
  }
  
  foo(...names); // abc cba ['nba', 'mba']
  foo(...str); // H e ['l', 'l', 'o']
  
  const obj = {
    name: "shy",
    age: 18,
  };
  
  const info = {
    ...obj,
    height: 1.88,
    address: "韩国",
  };
  console.log(info); // {name: 'shy', age: 18, height: 1.88, address: '韩国'}
  ```



# 数值的表示

- 在ES6中规范了二进制和八进制的写法

- 在ES2021新增特性：数字过长时，可以使用_作为连接符

  ```js
  const num1 = 100
  // binary
  const num2 = 0b100
  // octonary
  const num3 = 0o100
  // hexadecimal
  const num4 = 0x100
  
  const money = 100_0000_0000_0000;
  ```



# Symbol的基本使用

- Symbol是ES6中新增的一个**基本数据类型，翻译为符号**
- 那么为什么需要Symbol呢
  - 在ES6之前，对象的属性名都是字符串形式，那么**很容易造成属性名的冲突**
  - 比如原来有一个对象，我们希望在其中**添加一个新的属性和值**，但是我们在不确定它原来内部有什么内容的情况下，**很容易造成冲突，从而覆盖掉它内部的某个属性**

- Symbol就是为了解决上面的问题，用来**生成一个独一无二的值**

  - Symbol值是通过**Symbol函数**来生成的，生成后可以**作为属性名**

  ```js
  const s1 = Symbol()
  const obj = {
    [s1]: "aaa" 
  }
  console.log(obj) // {Symbol(): 'aaa'}
  
  const s2 = Symbol()
  obj[s2] = "bbb"
  console.log(obj) // {Symbol(): 'aaa', Symbol(): 'bbb'}
  
  // 获取symbol对应的key
  console.log(Object.keys(obj)) // []
  console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(), Symbol()]
  
  // description
  // Symbol函数直接生成的值, 都是独一无二
  const s3 = Symbol("ccc")
  console.log(s3.description) // ccc
  const s4 = Symbol(s3.description)
  console.log(s3 === s4) // false
  
  // 如果相同的key, 通过Symbol.for可以生成相同的Symbol值
  const s5 = Symbol.for("ddd")
  const s6 = Symbol.for("ddd")
  console.log(s5 === s6) // true
  
  // 获取传入的key
  console.log(Symbol.keyFor(s5)) // ddd
  ```



# Set的基本使用

- 在ES6之前，我们**存储数据的结构**主要有两种：**数组、对象**
  - 在ES6中新增了另外两种数据结构：**Set、Map**，以及它们的另外形式**WeakSet、WeakMap**
- Set是一个新增的数据结构，可以用来保存数据，**类似于数组**，但是和数组的区别是**元素不能重复**

- Set常见的属性

  - size：返回Set中元素的个数

- Set常见的方法

  - add(value)：添加某个元素，返回Set对象本身
  - delete(value)：从set中删除和这个值相等的元素，返回boolean类型
  - has(value)：判断set中是否存在某个元素，返回boolean类型
  - clear()：清空set中所有的元素，没有返回值
  - forEach(callback, thisArg)：通过forEach遍历set

  ```js
  const set = new Set();
  const obj = { name: "obj" };
  const info = { name: "info" };
  
  set.add(10);
  set.add(20);
  set.add(30);
  set.add(30);
  set.add(obj);
  set.add(obj);
  set.add(info);
  console.log(set); // {10, 20, 30, {name: 'obj'}, {name: 'info'}}
  
  console.log(set.size); // 5
  
  set.delete(obj);
  console.log(set); // {10, 20, 30, {name: 'info'}}
  
  console.log(set.has(info)); // true
  
  set.clear();
  console.log(set); // {size: 0}
  
  set.forEach((item) => console.log(item));
  
  for (const item of set) {
    console.log(item);
  }
  ```



## WeakSet

- 和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构

- 那么和Set有什么区别呢

  - 区别一：WeakSet中**只能存放对象类型，不能存放基本数据类型**
  - 区别二：WeakSet**对元素的引用是弱引用**，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收

- WeakSet常见的方法

  - add(value)：添加某个元素，返回WeakSet对象本身
  - delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型
  - has(value)：判断WeakSet中是否存在某个元素，返回boolean类型

  ```js
  let obj1 = { name: "obj1" }
  let obj2 = { name: "obj2" }
  let obj3 = { name: "obj3" }
  
  const weakSet = new WeakSet()
  weakSet.add(obj1)
  weakSet.add(obj2)
  weakSet.add(obj3)
  // weakSet.add(123) // Invalid value used in weak set (弱集合中使用的值无效)
  console.log(weakSet);
  
  weakSet.delete(obj3)
  
  weakSet.has(obj3)
  ```



# Map的基本使用

- 另外一个新增的数据结构是Map，用于存储映射关系

- 在之前我们可以**使用对象来存储映射关系，他们有什么区别呢**

  - 事实上对象存储映射关系只能用**字符串（ES6新增了Symbol）作为属性名（key）**
  - 某些情况下我们可能希望通过**其他类型作为key**，**比如对象**，这个时候**会自动将对象转成字符串来作为key**
  - 那么我们就可以使用Map

  ```js
  const obj = {};
  const info = { name: "shy" };
  const s1 = Symbol();
  
  obj[info] = "info";
  obj[s1] = "s1";
  
  console.log(obj); // {[object Object]: 'info', Symbol(): 's1'}
  ```

- Map常见的属性

  - size：返回Map中元素的个数

- Map常见的方法

  - set(key, value)：在Map中添加key、value，并且返回整个Map对象
  - get(key)：根据key获取Map中的value
  - has(key)：判断是否包括某一个key，返回Boolean类型
  - delete(key)：根据key删除一个键值对，返回Boolean类型
  - clear()：清空所有的元素
  - forEach(callback, thisArg)：通过forEach遍历Map

  ```js
  const map = new Map();
  const info1 = { name: "info1" };
  const info2 = { name: "info2" };
  
  map.set(info1, "aaaa");
  map.set(info2, "bbbb");
  console.log(map); // {{name: 'info1'} => 'aaaa', {name: 'info2'} => 'bbbb'}
  
  console.log(map.size); // 2
  
  console.log(map.get(info1)); // aaaa
  
  map.delete(info1);
  console.log(map); // {{name: 'info2'} => 'bbbb'}
  
  console.log(map.has(info2)); // true
  
  map.clear();
  console.log(map); // {size: 0}
  
  map.forEach((item) => console.log(item));
  
  for (const item of map) {
    const [key, value] = item;
    console.log(key, value);
  }
  ```



## WeakMap

- 和Map类型的另外一个数据结构称之为WeakMap，也是以键值对的形式存在的

- 那么和Map有什么区别呢

  - 区别一：**WeakMap的key只能使用对象，不接受其他的类型作为key**
  - 区别二：WeakMap的**key对对象想的引用是弱引用**，如果没有其他引用引用这个对象，那么GC可以回收该对象

- WeakMap常见的方法

  - set(key, value)：在Map中添加key、value，并且返回整个Map对象
  - get(key)：根据key获取Map中的value
  - has(key)：判断是否包括某一个key，返回Boolean类型
  - delete(key)：根据key删除一个键值对，返回Boolean类型

  ```js
  let obj1 = { name: "obj1" };
  let obj2 = { name: "obj2" };
  let obj3 = { name: "obj3" };
  
  const weakMap = new WeakMap();
  weakMap.set(obj1, "aaa");
  weakMap.set(obj2, "bbb");
  weakMap.set(obj3, "ccc");
  // weakMap.set(123, "123"); // Invalid value used as weak map key (用作弱映射键的值无效)
  console.log(weakMap);
  
  weakMap.get(obj1);
  
  map.delete(obj1);
  
  map.has(obj1);
  ```



# ES7~ES13的新特性

## 字符串填充

- 某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 **padStart** 和 **padEnd** 方法，分别是**对字符串的首尾进行填充的**

  ```js
  // 1.应用场景一: 对时间进行格式化
  const minute = "8".padStart(2, "0");
  const second = "24".padStart(2, "0");
  console.log(`${minute}:${second}`) // 08:24
  
  // 2.应用场景二: 对一些敏感数据格式化
  let cardNumber = "132666200001018899";
  let sliceNumber = cardNumber.slice(-4);
  cardNumber = sliceNumber.padStart(cardNumber.length, "*");
  console.log(cardNumber); // **************8899
  ```



## flat flatMap

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
  const messages = [ ["二维数组"], [["三维数组"]] ];
  const finalMessages = messages.flatMap((item) => item);
  console.log(finalMessages); // ['二维数组', ['三维数组']]
  ```



## Object fromEntries

- ES10提供了 Object.formEntries 将 entries 转换成对象

  ```js
  const entries  = [['0',"1"], ['2',"3"]];
  const obj = Object.fromEntries(params);
  console.log(obj); // {0: '1', 2: '3'}
  
  const searchString = "?name=shy&age=18&height=1.78";
  const params = new URLSearchParams(searchString);
  console.log(params.get("name")); // shy
  console.log(params.get("age")); // 18
  console.log(params.get("height")); // 1.78
  
  const paramObj = Object.fromEntries(params);
  console.log(paramObj); // {name: 'shy', age: '18', height: '1.78'}
  ```



##  trimStart trimEnd

- 去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢

  - ES10中给我们提供了**trimStart**和**trimEnd**

  ```js
  const message = "   Hello World    ";
  console.log(message.trim()); // Hello World
  console.log(message.trimStart()); // Hello World
  console.log(message.trimEnd()); //   Hello World
  ```



## BigInt

- 大于**MAX_SAFE_INTEGER**的数值，表示的可能是不正确的

  ```js
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  const num1 = 9007199254740991 + 1;
  const num2 = 9007199254740991 + 2;
  console.log(num1, num2); // 9007199254740992 9007199254740992
  ```

- 那么ES11中，引入了新的数据类型BigInt，用于表示**大的整数**

  - BigInt的表示方法是在**数值的后面加上n**

  ```js
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  const num1 = 9007199254740992n;
  const num2 = 9007199254740993n;
  console.log(num1, num2); // 9007199254740992n 9007199254740993n
  ```



## 空值合并运算符

- ES11增加了空值合并操作符

  ```js
  let info = 0;
  info = info ?? "默认值";
  console.log(undefined ?? "默认值"); // 默认值
  console.log(null ?? "默认值"); // 默认值
  console.log(info); // 0
  ```



## 可选链

- **可选链**也是**ES11中新增一个特性**，主要作用是让我们的代码在**进行null和undefined判断时更加清晰**和简洁

  ```js
  let result1 = "";
  let result2 = "";
  const obj = {
    name: "my",
    friend: { name: "shy" },
  };
  // 之前的写法
  result1 = obj.friend && obj.friend.name;
  // 可选链写法
  result2 = obj?.friend?.name;
  console.log(result1, result2); // shy shy
  ```



# Proxy

## 监听对象的操作

- Object.defineProperty的缺点
  - 首先，Object.defineProperty设计的初衷，**不是为了去监听一个对象中所有的属性的**
  - 我们在定义某些属性的时候，**初衷其实是定义普通的属性**，但是后面我们强行将它变成了数据属性描述符
  - 其次，如果我们想监听更加丰富的操作，比如**新增属性、删除属性**，那么Object.defineProperty是无能为力的



## Proxy的基本使用

- 在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的

  - 如果我们希望**监听一个对象的相关操作**，那么我们可以**先创建一个代理对象（Proxy对象）**
  - 之后对**该对象的所有操作**，都通过**代理对象来完成**，代理对象**可以监听我们想要对原对象进行哪些操作**

  ```js
  const obj = { name: "shy" };
  const objProxy = new Proxy(obj, {
    set(target, key, newValue) {
  	console.log(`监听${key}的设置值: `, newValue);
  	target[key] = newValue;
    },
    get(target, key) {
  	console.log(`监听${key}的获取`);
  	return target[key];
    },
  });
  
  objProxy.name = "the shy";
  objProxy.age = "18";
  console.log(objProxy.age); // 18
  ```



## Proxy的set和get捕获器

- 如果我们想要侦听某些具体的操作，那么就可以在handler中添加对应的**捕捉器（Trap）**

- set函数有四个参数

  - target：目标对象（侦听的对象）
  - property：将被设置的属性key
  - value：新属性值
  - receiver：调用的代理对象

- get函数有三个参数

  - target：目标对象（侦听的对象）
  - property：被获取的属性key
  - receiver：调用的代理对象

  ```js
  const obj = { name: "shy", age: 18 };
  const objProxy = new Proxy(obj, {
    set(target, key, newValue) {
  	console.log(`监听${key}的设置值: `, newValue);
  	target[key] = newValue;
    },
  
    get(target, key) {
  	console.log(`监听${key}的获取`);
  	return target[key];
    },
  
    deleteProperty(target, key) {
  	console.log(`监听删除${key}属性`);
  	delete obj.name;
    },
  
    has(target, key) {
  	console.log(`监听in判断 ${key}属性`);
  	return key in target;
      },
  });
  
  delete objProxy.name;
  console.log("age" in objProxy); // true
  ```



## Proxy的所有捕获器

- 这里我只列常见的捕获器

  - set：属性设置操作的捕捉器
  - get：属性读取操作的捕捉器
  - deleteProperty：delete 操作符的捕捉器
  - has：in 操作符的捕捉器
  - apply：函数调用操作的捕捉器
  - construct：new 操作符的捕捉器

  ```js
  function foo(num1, num2) {}
  const fooProxy = new Proxy(foo, {
    apply(target, thisArg, otherArgs) {
  	console.log("执行了apply/call/bind操作");
  	target.apply(thisArg, otherArgs);
    },
    construct(target, otherArray) {
  	console.log("执行了new操作");
  	return new target(...otherArray);
    },
  });
  
  let newFoo = fooProxy.bind("bind", 1);
  fooProxy.apply("apply", [2]);
  fooProxy.call("call", 3);
  newFoo();
  new fooProxy("new", 4);
  ```



# Reflect

- Reflect也是ES6新增的一个API，它是**一个对象**，字面的意思是**反射**
- 那么这个Reflect有什么用呢
  - 它主要提供了很多操作**JavaScript对象的方法**，有点像**Object中操作对象的方法**
  - 比如Reflect.getPrototypeOf() 类似于 Object.getPrototypeOf() 
  - 等等....
- 如果我们有Object可以做这些操作，那么**为什么还需要有Reflect这样的新增对象**呢
  - 这是因为在早期的ECMA规范中没有考虑到这种**对 对象本身 的操作如何设计会更加规范**，所以**将这些API放到了Object上面**
  - 但是**Object作为一个构造函数**，这些操作实际上**放到它身上并不合适**
  - 另外还包含一些**类似于 in、delete操作符**，让JS看起来是会有一些奇怪的
  - 所以在ES6中**新增了Reflect**，让我们这些操作都集中到了Reflect对象上
  - 另外在使用Proxy时，可以**做到不操作原对象**



## Reflect的常见方法

- 这里我只列常见的方法
  - Reflect.has(target, propertyKey)：判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同
  - Reflect.get(target, propertyKey[, receiver])：获取对象身上某个属性的值
  - Reflect.set(target, propertyKey, value[, receiver])：设置属性值。返回一个Boolean，如果更新成功，则返回true
  - Reflect.deleteProperty(target, propertyKey)：作为函数的delete操作符，相当于执行 delete target[name]



## Receiver的作用

- 我们发现在使用getter、setter的时候有一个**receiver的参数**，它的作用是什么呢

  - 如果我们的源对象有**setter、getter的访问器属性**，那么可以**通过receiver来改变里面的this**

  ```js
  const obj = {
    _name: "shy",
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
    // target[key] = newValue
    // 1.好处一: 代理对象的目的: 不再直接操作原对象
    // 2.好处二: Reflect.set方法有返回Boolean值, 可以判断本次操作是否成功
    /*
  	 3.好处三:
  	   > receiver就是外层Proxy对象
         > Reflect.set/get最后一个参数, 可以决定对象访问器setter/getter的this指向
    */
    console.log("proxy中设置方法被调用");
    const isSuccess = Reflect.set(target, key, newValue, receiver);
    if (!isSuccess) {
  	throw new Error(`set ${key} failure`);
    }
  },
    get(target, key, receiver) {
  	console.log("proxy中获取方法被调用");
  	return Reflect.get(target, key, receiver);
    },
  });
  
  objProxy.name = "the shy";
  console.log(objProxy.name);
  ```



# 迭代器 (Iterator)

- 什么是迭代器

  -  在JavaScript中，**迭代器是一个具体的对象**，这个对象需要**符合迭代器协议**（iterator protocol）	
     - 迭代器协议定义了**产生一系列值（无论是有限还是无限个）的标准方式**
     - 在JavaScript中这个标准就是一个**特定的next方法**
  -  next方法有如下的要求
     - 一个**无参数**或者**一个参数的函数**，返回一个拥有以下两个属性的对象
       - done（boolean）
         - 如果迭代器**可以产生序列中的下一个值，则为 false**
         - 如果迭代器**已将序列迭代完毕，则为 true**。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值
       - value
         - 迭代器返回的具体值。done 为 true 时可省略

  ```js
  const names = ["abc", "cba", "nba"]
  // names 的迭代器
  let index = 0
  const namesIterator = {
    next: function() {
  	// done: Boolean
  	// value: 具体值/undefined
  	if (index < names.length) {
  		return { done: false, value: names[index++] }
  	} else {
  		return { done: true, value: undefined };
      }
    }
  }
  
  console.log(namesIterator.next()); // {done: false, value: 'abc'}
  console.log(namesIterator.next()); // {done: false, value: 'cba'}
  console.log(namesIterator.next()); // {done: false, value: 'nba'}
  console.log(namesIterator.next()); // {done: true, value: undefined}
  ```



## 可迭代对象

- 什么是可迭代对象

  - **它和迭代器是不同的概念**
  - 当一个对象**实现了iterable protocol协议(可迭代协议)**时，它就是**一个可迭代对象**
  - 这个对象的要求是**必须实现 @@iterator 方法**，在代码中我们**使用 Symbol.iterator 访问该属性**

- 转成这样的一个东西有什么好处呢

  - 当**一个对象变成一个可迭代对象**的时候，就可以**进行某些迭代操作**
  - 比如 **for...of 操作**时，其实就会调用它的 @@iterator 方法

  ```js
  /*
    将infos变成一个可迭代对象
    1.必须实现一个特定的函数: [Symbol.iterator]
    2.这个函数需要返回一个迭代器(这个迭代器用于迭代当前的对象)
  */
  const infos = {
    num: [10, 20, 30],
    [Symbol.iterator]: function () {
  	let index = 0;
  	const infosIterator = {
        next: () => {
          if (index < this.num.length) {
            return { done: false, value: this.num[index++] };
          } else {
            return { done: true };
          }
        },
  	};
      return infosIterator;
    },
  };
  
  // 可迭代对象必然具备下面的特点
  const iterator = infos[Symbol.iterator]();
  console.log(iterator.next()); // {done: false, value: 10}
  console.log(iterator.next()); // {done: false, value: 20}
  console.log(iterator.next()); // {done: false, value: 30}
  console.log(iterator.next()); // {done: true}
  
  // 可迭代对象可以进行for of操作
  for (const item of infos) {
    console.log(item); // 10 20 30
  }
  ```



## 原生迭代器对象

- 事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的

  - String、Array、Map、Set、arguments对象、NodeList集合

  ```js
  // String
  let string = "Hello world";
  for (const str of string) {
    console.log(str); // H e l l o   w o r l d
  }
  // Array
  const names = ["abc", "cba", "nba"]
  for (const name of names) {
    console.log(name); // abc cba nba
  }
  // Map
  const map = new Map();
  map.set("key", "字符串");
  map.set(123, "数值");
  map.set(true, "布尔");
  map.set({ name: "对象" }, "对象");
  for (const item of map) {
    console.log(item);  
    /*
  	['key', '字符串']
  	[123, '数值']
  	[true, '布尔']
  	[{name: '对象'}, '对象']
    */
  }
  // Set
  const set = new Set(["abc", "cba", "nba"])
  for (const item of set) {
    console.log(item) // abc cba nba
  }
  // arguments
  function foo() {
    for (const arg of arguments) {
  	console.log(arg); // 123 456 789
    }
  }
  foo(123, 456, 789);
  ```



## 可迭代对象的应用

- JavaScript中语法：**for ...of、展开语法（spread syntax）、yield* 、解构赋值（Destructuring assignment）**

- 创建一些对象时：**new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])**

- 一些方法的调用：**Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)**

  ```js
  // 1.用在特定的语法上
  const names = ["abc", "cba", "nba"]
  const info = {
    name: "shy",
    age: 18,
    height: 1.88,
    [Symbol.iterator]: function() {
  	const values = Object.values(this)
  	let index = 0
      	const iterator = {
          	next: function() {
                if (index < values.length) {
                  return { done: false, value: values[index++] }
                } else {
                  return { done: true }
                }
              }
          }
       return iterator
    }
  }
  
  function foo(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3) // shy 18 1.88
  }
  
  foo(...info)
  
  // 2.一些类的构造方法中, 也是传入的可迭代对象
  const set = new Set(["aaa", "bbb", "ccc"])
  console.log(set) // {'aa', 'bbb', 'ccc'}
  const set2 = new Set("abc")
  console.log(set2) // {'a', 'b', 'c'}
  const set3 = new Set(info)
  console.log(set3) // {'shy', 18, 1.88}
  
  
  // 3.一些常用的方法
  const p1 = Promise.resolve("aaaa")
  const p2 = Promise.resolve("aaaa")
  const p3 = Promise.resolve("aaaa")
  const pSet = new Set()
  pSet.add(p1)
  pSet.add(p2)
  pSet.add(p3)
  Promise.all(pSet).then(res => {
    console.log("res:", res) // ['aaaa', 'aaaa', 'aaaa']
  })
  
  function bar() {
    // console.log(arguments)
    // 将arguments转成Array类型
    const arr = Array.from(arguments)
    console.log(arr) // [111, 222, 333]
  }
  
  bar(111, 222, 333)
  ```



# 生成器 (Generator)

- 什么是生成器

  - 生成器是ES6中新增的一种**函数控制、使用**的方案，它可以让我们**更加灵活的控制函数什么时候继续执行、暂停执行**等	

- 生成器函数也是一个函数，但是和普通的函数有一些区别

  - 首先，**生成器函数需要在function的后面加一个符号 *** 
  - 其次，**生成器函数可以通过yield关键字来控制函数的执行流程**
  - 最后，**生成器函数的返回值是一个Generator（生成器）**
    - 生成器事实上是**一种特殊的迭代器**
    - MDN：Instead, they return a special type of iterator, called a **Generator**

  ```js
  /*
    生成器函数: 
  	1.function后面会跟上符号: *
  	2.代码的执行可以被yield控制
  	3.生成器函数默认在执行时, 返回一个生成器对象
  	  * 要想执行函数内部的代码, 需要调用生成器对象的next方法
        * 当遇到yield时, 就会中断执行
  */
  
  // 1.定义了一个生成器函数
  function* foo() {
    console.log("1");
    yield;
    console.log("2");
    yield;
    console.log("3");
  }
  
  // 2.调用生成器函数, 返回一个生成器对象
  const generator = foo();
  // 调用next方法
  generator.next();
  generator.next();
  generator.next();
  ```



## 生成器函数的返回值

- 通过yield来返回结果

  ```js
  function* foo() {
    console.log("执行内部代码:1");
    yield "返回值-1";
  
    console.log("执行内部代码:2");
    yield "返回值-2";
  
    console.log("执行内部代码:3");
    yield "返回值-3";
  
    return "函数返回值";
  }
  
  const generator = foo();
  console.log(generator.next()); // { done: false, value: "返回值-1" }
  console.log(generator.next()); // { done: false, value: "返回值-2" }
  console.log(generator.next()); // { done: false, value: "返回值-3" }
  console.log(generator.next()); // { done: true,  value: "函数返回值" }
  ```



## 生成器函数的参数

- 我们在**调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值**

- 注意：**也就是说我们是为本次的函数代码块执行提供了一个值**

  ```js
  function* foo(num1) {
    console.log("参数:", num1); // 参数: 1
  
    const num2 = yield;
    console.log("参数:", num2); // 参数: 2
  
    const num3 = yield;
    console.log("参数:", num3); // 参数: 3
  
    const num4 = yield;
    console.log("参数:", num4); // 参数: 4
  }
  
  const generator = foo(1);
  console.log(generator.next());  // { done: false, value: "undefined" }
  console.log(generator.next(2)); // { done: false, value: "undefined" }
  console.log(generator.next(3)); // { done: false, value: "undefined" }
  console.log(generator.next(4)); // { done: true,  value: "undefined" }
  ```



# 异步函数 async function

- async关键字用于声明一个异步函数

  - async是asynchronous单词的缩写，异步、非同步；

  - sync是synchronous单词的缩写，同步、同时



## 异步函数的执行流程

- 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行

- 异步函数有返回值时，和普通函数会有区别

  - 情况一：异步函数也可以有返回值，但是异步函数的返回值**相当于被包裹到Promise.resolve**中
  - 情况二：如果我们的异步函数的**返回值是Promise**，**那么会由返回的Promise来决定**
  - 情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，**那么会由对象的then方法来决定**

  ```js
  // 返回一个普通的值
  async function foo1() {
    // -> Promise.resolve(123)
    return 123;
  }
  foo1().then((res1) => {
    console.log("res1:", res1); // 123
  });
  // 返回一个Promise
  async function foo2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("aaa");
      }, 2000);
    });
  }
  foo2().then((res2) => {
    console.log("res2:", res2); // aaa
  });
  // 返回一个thenable对象
  async function foo3() {
    return {
      then: function (resolve, reject) {
        resolve("bbb"); 
      },
    };
  }
  foo3().then((res3) => {
    console.log("res3:", res3); // bbb
  });
  ```

- 如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会**作为Promise的reject来传递**

  ```js
  async function foo() {
    console.log("1"); // 1
    console.log("2"); // 2
  
    throw new Error(" async function error");
    console.log("3");
  
    return 123;
  }
  
  foo().then(res => {
    console.log("res:", res);
  }).catch(err => {
    console.log("捕获错误信息:", err); // async function error
    console.log("继续执行其他的逻辑代码"); // 继续执行其他的逻辑代码
  });
  ```




## await关键字

- **async函数另外一个特殊之处**就是可以在它内部**使用await关键字**，而**普通函数中是不可以**的

- await关键字有什么特点呢

  - 通常使用await是后面会**跟上一个表达式**，这个**表达式会返回一个Promise**
  - 那么await会**等到Promise的状态变成fulfilled状态**，之后**继续执行异步函数**

- 如果await后面是一个**普通的值**，那么会**直接返回这个值**

- 如果await后面是一个**thenable的对象**，那么会根据对象的**then方法调用来决定后续的值**

- 如果await后面的表达式，返回的Promise是**reject的状态**，那么会将这个**reject结果直接作为函数的Promise的reject值**

  ```js
  // 普通的值
  async function foo1() {
    const result = await 123;
    console.log(result); // 123
  }
  foo1();
  
  async function test() {
    return "test";
  }
  
  async function bar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("bar");
      }, 2000);
    });
  }
  
  async function demo() {
    return {
      then: function (resolve) {
        resolve("demo");
      },
    };
  }
  
  async function foo() {
    const res1 = await test();
    console.log("res1:", res1); // test
  
    const res2 = await bar();
    console.log("res2:", res2); // bar
  
    const res3 = await demo();
    console.log("res3:", res3); // demo
  }
  
  foo();
  
  // reject的状态
  function requestData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error message");
      }, 2000);
    });
  }
  
  async function getData() {
    const res1 = await requestData("the");
    console.log("res1:", res1);
  
    const res2 = await requestData(res1 + " shy");
    console.log("res2:", res2);
  }
  
  getData().catch((err) => {
    console.log("err:", err); // error message
  })
  ```



# 进程和线程

- 线程和进程是操作系统中的两个概念
  - **进程（process）**：计算机**已经运行的程序**，是**操作系统管理程序**的一种方式
  - **线程（thread）**：操作系统能够运行**运算调度的最小单位**，通常情况下**它被包含在进程**中
- 听起来很抽象，这里还是给出我的解释
  - **进程：**我们可以认为，启动**一个应用程序**，就会默认**启动一个进程**（也可能是多个进程）
  - **线程：**每**一个进程**中，都会启动**至少一个线程**用来执行程序中的代码，这个线程被称之为**主线程**



## 浏览器中的JavaScript线程

- JavaScript的代码执行是在一个单独的线程中执行的
  - 这就意味着JavaScript的代码，在**同一个时刻只能做一件事**
  - 如果**这件事是非常耗时**的，就意味着当前的线程就**会被阻塞**



## 宏任务和微任务

- **宏任务队列（macrotask queue）**：ajax、setTimeout、setInterval、DOM监听、UI Rendering等

- **微任务队列（microtask queue）**：Promise的then回调、 Mutation Observer API、queueMicrotask()等

- 队列的优先级

  - **main script中的代码优先执行**（同步代码）
  - **在执行任何一个宏任务之前（不是队列，是一个宏任务）**，都会**先查看微任务队列中是否有任务需要执行**
    - 也就是宏任务执行之前，**必须保证微任务队列是空的**
    - 如果不为空，那么就**优先执行微任务队列中的任务**

  ```js
  console.log("script start");
  
  setTimeout(() => {
    console.log("setTimeout0");
  }, 0);
  
  setTimeout(() => {
    console.log("setTimeout1");
  }, 0);
  
  console.log("1111111");
  new Promise((resolve, reject) => {
    console.log("2222222");
    console.log("-------1");
    console.log("-------2");
    resolve();
    console.log("-------3");
  }).then((res) => {
    console.log("then传入的回调: res", res);
  });
  
  console.log("3333333");
  
  console.log("script end");
  /* 
    script start
    1111111
    2222222
    -------1
    -------2
    -------3
    3333333
    script end
  
    then传入的回调: res undefined
  
    setTimeout0
    setTimeout1
  */
  ```







