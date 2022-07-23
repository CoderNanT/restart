# 不同浏览器的内核

- 常见的浏览器内核有：
  - Trident （ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
  - Gecko（ 壁虎） ：Mozilla Firefox；
  - Presto（急板乐曲）-> Blink （眨眼）：Opera
  - Webkit ：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
  - Webkit -> Blink ：Google Chrome
- 不同的浏览器内核有不同的解析、渲染规则，所以同一网页在不同内核的浏览器中的渲染效果也可能不同



# HTML

## 认识HTML

- **超文本标记语言**（英语：**H**yper**T**ext **M**arkup **L**anguage，简称：**HTML**）是一种用于创建网页的标准标记语言。 
  - HTML元素是构建网站的基石；

- **什么是标记语言（markup language ）？**

  - 由无数个标记（标签、tag)组成；
  - 是对某些内容进行特殊的标记，以供其他浏览器识别处理；
  - 比如使用h2标记的文本会被识别为“标题”进行加粗、文字放大显示；
  - 由标签和内容组成的称为元素（element）

- **什么是超文本（ HyperText ）呢？**

  - 表示不仅仅可以插入普通的文本（Text），还可以插入图片、音频、视频等内容；

  - 还可以表示超链接（HyperLink），从一个网页跳转到另一个网页；



## HTML文件的特点 – 扩展名

- HTML文件的拓展名是.htm\.html
  - 因历史遗留问题，Win95\Win98系统的文件拓展名不能超过3字符，所以使用.htm
  - 现在统一使用 .html



## 文档声明

HTML最上方的一段文本我们称之为 **文档类型声明**，用于声明**文档类型**

- !DOCTYPE html
  - HTML文档声明，告诉浏览器当前页面是**HTML5页面**；
  - 让浏览器用**HTML5的标准去解析识别**内容；
  - 必须**放在HTML文档的最前面，不能省略**，省略了会出现兼容性问题；



## 语义化

什么是语义化：让标签有自己的含义，在开发过程中，更容易去阅读代码，以及明白这些代码的意义
- 好处是：
  
  - 能够更好的展示内容结构 
  
  - 便于团队的维护与开发 
  
  - 有利于SEO，爬虫可以分析每个关键词的权重
  
  - 方便其他设备解析 (如屏幕阅读器)



## lang

- W3C标准建议为html元素增加一个**lang属性**，作用是
  - 帮助**语音合成工具**确定要使用的发音; 
  - 帮助**翻译工具**确定要使用的翻译规则
- **比如常用的规则：**
  - lang=“en” 表示这个HTML文档的语言是英文；
  - lang=“zh-CN” 表示这个HTML文档的语言是中文；



## charset="UTF-8"

- 可以用于设置网页的**字符编码**，让浏览器更精准地显示每一个文字，**不设置或者设置错误会导致乱码**；
- 一般都使用**UTF-8编码**，涵盖了世界上几乎所有的文字；



## alt属性

- 作用一：当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；
- 作用二：屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义；



## URL的格式

- 协议类型://服务器地址:端口号/[文件路径][文件名]?查询#片段ID



## URL和URI的区别

- URI = Uniform Resource Identifier 统一资源**标志符，**用于标识 **Web 技术使用的逻辑或物理资源**。
- URL = Uniform Resource Locator 统一资源**定位符，**俗称**网络地址**，相当于**网络中的门牌号**



## 什么是SEO

- 搜索引擎优化（英语：search engine optimization，缩写为SEO），一种利用搜索引擎的搜索规则来**提高目前网站在有关搜索引擎内的自然排名的方式**，他的实现原理分别为，页面抓取，分析入库，检索排序;




# CSS

## 认识CSS

- CSS表示层叠样式表（**C**ascading **S**tyle **S**heet，简称：CSS，又称为**串样式列表**、**级联样式表**、**串接样式表**、**阶层式样式表**）

  是为网页添加**样式的代码**。



## text-align

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>center</title>
  </head>
  <style>
    /*
      text-align: center 
      行内级: 行内非替换元素span/a 行内替换元素 img input 
      */
    .box {
      height: 200px;
      background-color: #f00;
      text-align: center;
      margin-bottom: 20px;
    }
    .content {
      width: 200px;
      height: 200px;
      background-color: #000;
      /* display: inline-block; */
    }
    span {
      font-size: 30px;
      color: white;
    }
    img {
      width: 500px;
      height: 200px;
    }
  </style>
  <body>
    <div class="box">
      <span>文本居中</span>
    </div>
    <div class="box">
      <img
        src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        alt="图片居中"
      />
    </div>
    <div class="box">
      <div class="content"></div>
    </div>
  </body>
</html>

```



## CSS选择器

- 选择器的种类繁多，大概可以这么归类
  - 通用选择器（universal selector） 
  - 元素选择器（type selectors） 
  - 类选择器（class selectors） 
  - id选择器（id selectors） 
  - 属性选择器（attribute selectors） 
  - 组合（combinators） 
  - 伪类（pseudo-classes） 
  - 伪元素（pseudo-elements）



### 通用选择器（universal selector）

- 所有的元素都会被选中

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      font-size: 30px;
      background-color: #f00;
    }
  </style>
</head>
<body>
  <div>我是div元素</div>
  <p>我是p元素</p>

  <div>
    <h2>我是h2元素</h2>
    <p>我也是p元素  <span>呵呵呵呵</span> </p>
  </div>
</body>
</html>
```



### 简单选择器

- 元素选择器（type selectors）, 使用元素的名称; 
- 类选择器（class selectors）, 使用 .类名 ;
-  id选择器（id selectors）, 使用 #id;

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div {
      color: red;
    }

    .box {
      color: blue;
    }

    #home {
      color: green;
    }
  </style>
</head>
<body>
  <div>我是div1</div>
  <div class="box">我是div2</div>
  <div id="home">我是div3</div>
</body>
</html>
```



### 属性选择器(attribute selectors)

- 拥有某一个属性 [attribute ] 
- 属性等于某个值 [attribute =value] 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    [title] {
      color: red;
    }
    [title=div] {
      background-color: blue;
    }
  </style>
</head>
<body>
  <div>我是div元素</div>
  <div title="div">我也是div元素</div>
  <p>我是p元素</p>
  <h2 title="h2">我是h2元素</h2>
</body>
</html>
```



### 后代选择器（descendant combinator）

-  所有的后代 (直接/间接的后代) 
  - 选择器之间以**空格**分割
-  直接子代选择器 (必须是直接子代) 
  - 选择器之间以 **>** 分割

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 后代选择器 */
    .home span {
      color: red;
      font-size: 30px;
    }

    /* .home的子代的span元素设置一个背景 */
    .home > span {
      background-color: green;
    }
  </style>
</head>
<body>
  <div class="home">
    <span>啦啦啦啦</span>  
    <div class="box">
      <p>我是p元素</p>
      <span class="home-item">呵呵呵呵</span>
    </div>

    <div class="content">
      <div class="desc">
        <p>
          <span class="home-item">哈哈哈哈</span>
        </p>
      </div>
    </div>
  </div>

  <!-- 不希望被选中 -->
  <span>嘻嘻嘻</span>
  <div>
    <span>嘿嘿嘿</span>
  </div>
</body>
</html>
```



### 兄弟选择器(sibling combinator)

- 相邻兄弟选择器
  - 使用符号 **+** 连接
- 普遍兄弟选择器
  - 使用符号 **~** 连接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box + .content {
      color: red;
    }

    .box ~ div {
      font-size: 30px;
    }
  </style>
</head>
<body>
  <div class="home">
    <div>叽叽叽叽</div>
    <div class="box">呵呵呵呵</div>
    <div class="content">哈哈哈哈</div>
    <div>嘻嘻嘻嘻</div>
    <div>嘿嘿嘿嘿</div>
    <p>我是p元素</p>
  </div>
</body>
</html>
```



### 选择器组 – 交集选择器

- 需要同时符合两个选择器条件(两个选择器紧密连接)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div.box {
      color: red;
      font-size: 30px;
    }
  </style>
</head>
<body>
  <div class="box">我是div元素</div>
  <p class="box">我是p元素</p>
</body>
</html>
```



### 选择器组 – 并集选择器

- 符合一个选择器条件即可(两个选择器以,号分割)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body, p, h1, h2 {
      color: red;
      font-size: 40px;
    }
  </style>
</head>
<body>
  <p>我是p元素</p>
  <h1>我是h1元素</h1>
  <h2>我是h2元素</h2>
</body>
</html>
```



### 认识伪类

- 什么是伪类呢? 
  -  Pseudo-classes: 翻译过来是伪类; 
  - 伪类是选择器的一种，它用于选择处于特定状态的元素; 
- 比如我们经常会实现的: 当手指放在一个元素上时, 显示另外一个颜色



#### 伪类(pseudo-classes)

常见的伪类有：

1. **动态伪类**（dynamic pseudo-classes）
   - :link、:visited、:hover、:active、:focus
2. **目标伪类**（target pseudo-classes）
   - :target
3. **语言伪类**（language pseudo-classes） 
   - :lang( )
4. **元素状态伪类**（UI element states pseudo-classes） 
   - :enabled、:disabled、:checked
5. **结构伪类**（structural pseudo-classes）
   - :nth-child( )、:nth-last-child( )、:nth-of-type( )、::nth-last-of-type( )
   - :first-child、:last-child、:first-of-type、:last-of-type
   - :root、:only-child、:only-of-type、:empty
6. **否定伪类**（negation pseudo-classes）
   - :not()



#### 伪元素

- 常用的伪元素有：
  - :before、**::before**
  - :after、**::after**
- 为了区分伪元素和伪类，建议伪元素使用2个冒号，比如::before
- **::before和::after**用来在一个元素的**内容之前或之后插入其他内容**（可以是文字、图片) 
  - 常通过 content 属性来为一个元素添加修饰性的内容



#### 结构伪类(nth-child)

```html
<!DOCTYPE html>
<html lang="cn">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ul li:nth-child(2n + 1) {
        color: red;
        font-size: 24px;
      }
      /* 1、3、5、7、9 */
      /* 
      规律
      0
        - 0 + 1 = 1
      1
      2
        - 2 + 1 = 3
      3
      4
        - 4 + 1 = 5
      5
      6
        - 6 + 1 = 7
      7
      8
        - 8 + 1 = 9  
      */
    </style>
  </head>
  <body>
    <ul>
      <li>列表元素1</li>
      <li>列表元素2</li>
      <li>列表元素3</li>
      <li>列表元素4</li>
      <li>列表元素5</li>
      <li>列表元素6</li>
      <li>列表元素7</li>
      <li>列表元素8</li>
      <li>列表元素9</li>
      <li>列表元素10</li>
    </ul>
  </body>
</html>
```



#### 结构伪类(nth-of-type)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 需求: 选择box中的div元素, 并且是第三个子元素 */
      .box1 > div:nth-child(3) {
        color: red;
      }

      /* 需求: 选择box中的第三个div元素(排除所有的干扰项) */
      /* 元素:nth-of-type, 只计算符合我元素类型的数量的元素 */
      .box2 > div:nth-of-type(3) {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div>我是列表1</div>
      <div>我是列表2</div>
      <div>我是列表3</div>
      <div>我是列表4</div>
      <div>我是列表5</div>
      <div>我是列表6</div>
      <div>我是列表7</div>
      <div>我是列表8</div>
      <div>我是列表9</div>
      <div>我是列表10</div>
    </div>

    <div class="box2">
      <div>我是列表1</div>
      <p>我是p元素</p>
      <span>我是span1</span>
      <span>我是span2</span>
      <span>我是span3</span>
      <span>我是span4</span>
      <div>我是列表2</div>
      <div>我是列表3</div>
      <div>我是列表4</div>
      <div>我是列表5</div>
      <div>我是列表6</div>
      <div>我是列表7</div>
      <div>我是列表8</div>
      <div>我是列表9</div>
      <div>我是列表10</div>
    </div>
  </body>
</html>
```



## CSS的属性继承

- **CSS的某些属性具有继承性(Inherited)**
  - 如果一个**属性具备继承性**, 那么**在该元素上设置后**, 它的**后代元素都可以继承这个属性**;
  - 如果**后代元素自己有设置该属性**, 那么**优先使用后代元素自己的属性**(不管继承过来的属性权重多高);

- **如何知道一个属性是否具有继承性呢?**
  - 常见的**font-size / font-family / font-weight / line-height / color / text-align**都具有继承性; 
  - **继承过来的是计算值, 而不是设置值**



## **CSS**属性的层叠

- CSS的翻译是层叠样式表, 什么是层叠呢?
  - 对于一个元素来说, **相同的一个属性**我们可以**通过不同的选择器给它进行多次设置**
  - 那么属性会**被一层层覆盖上去** 
  - 但是最终**只有一个会生效**

- 那么多个样式属性覆盖上去, 哪一个会生效呢
  - 判断一: **选择器的权重, 权重大的生效, 根据权重可以判断出优先级**;
  - 判断二: **先后顺序, 权重相同时, 后面设置的生效**; 



## CSS选择器的权重

-  !important：10000
- 内联样式：1000
- id选择器：100
- 类选择器、属性选择器、伪类：10
- 元素选择器、伪元素：1
- 通配符：0



## display

- block：让元素显示为块级元素

  - 独占父元素的一行
  - 可以随意设置宽高
  - 高度默认由内容决定
- inline：让元素显示为行内级元素
  - 跟其他行内级元素在同一行显示
  - 不可以随意设置宽高
  - 宽高由内容决定
- inline-block：让元素同时具备行内级、块级元素的特征

  - 跟其他行内级元素在同一行显示
  - 可以随意设置宽高
  - 默认宽高由内容决定
- none：隐藏元素




## overflow

overflow用于控制内容溢出时的行为
- visible：溢出的内容照样可见
- hidden：溢出的内容直接裁剪
- scroll：溢出的内容被裁剪，但可以通过滚动机制查看
  -  会一直显示滚动条区域，滚动条区域占用的空间属于width、height
- auto：自动根据内容是否溢出来决定是否提供滚动机制



## 元素隐藏方法

- **方法一: display设置为none**
  - 元素不显示出来, 并且也不占据位置, 不占据任何空间(和不存在一样)

- **方法二: visibility设置为hidden**
  - 设置为hidden, 虽然元素不可见, 但是会占据元素应该占据的空间
  - 默认为visible, 元素是可见的
- **方法三: rgba设置颜色, 将a的值设置为0**
  - rgba的a设置的是alpha值, 可以设置透明度, 不影响子元素
- **方法四: opacity设置透明度, 设置为0**
  - 设置整个元素的透明度, 会影响所有的子元素



## 文字溢出隐藏

```css
width: 200px;
overflow: hidden;  /* 超出的截取掉 */
text-overflow: ellipsis; /* 省略号  */
white-space: nowrap; /* 不换行 */

width: 500px;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;

/* 数字和字母超出换行 */
width: 300px; 
height: 300px; 
overflow: hidden
word-wrap:break-word;  
word-break:break-all;
```



## 盒子模型

- HTML中的每一个元素都**可以看做是一个盒子**，每个盒子由四个部分组成
  - **内容（content）** 元素的内容width/height
  - **内边距（padding）** 元素和内容之间的间距
  - **边框（border）** 元素自己的边框
  - **外边距（margin）** 元素和其他元素之间的间距



## 上下margin的传递

- margin-top传递
  - 如果**块级元素的顶部线和父元素的顶部线重叠**，那么**这个块级元素的margin-top值会传递给父元素**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 300px;
        height: 300px;
        background-color: #f00;
      }

      .container {
        width: 100px;
        height: 100px;
        background-color: #0f0;

        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="container"></div>
    </div>

    <div>哈哈哈哈哈啊</div>
  </body>
</html>
```



- margin-bottom传递
  - 如果**块级元素的底部线和父元素的底部线重写**，**并且父元素的高度是auto**，那么**这个块级元素的margin-bottom值会传递给父元素**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 300px;
        height: auto;
        background-color: #f00;
      }

      .container {
        width: 100px;
        height: 100px;
        background-color: #0f0;

        margin-bottom: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="container"></div>
    </div>
      
    <div>哈哈哈哈哈啊</div>
  </body>
</html>
```



## 上下margin的折叠

- 垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做collapse（折叠）
- 水平方向上的margin（margin-left、margin-right）永远不会collapse

- 折叠后最终值的计算规则
  - 两个值进行比较，**取较大的值**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box1 {
        height: 100px;
        background-color: #f00;

        margin-bottom: 30px;
      }

      .box2 {
        height: 100px;
        background-color: #0f0;

        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="box1"></div>
    <div class="box2"></div>
  </body>
</html>
```

## margin水平居中

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
    .parent {
      width: 1000px;
      height: 500px;
      background-color: #000;
    }
     /* 
      margin 设置左右两边为 auto 时有个公式: 
        父元素的宽度  = 子元素的宽度 + margin-left + margin-right 
        1000         = 200         + auto        + auto 
        1000         = 200         + 400         + 400 
     */
    .children {
      width: 200px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      background-color: pink;
    }
  </style>
  <body>
    <div class="parent">
      <div class="children"></div>
    </div>
  </body>
</html>
```



## 水平垂直居中
```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>水平垂直居中</title>
  </head>
  <style>
    /* 辅助线 */
    .parent::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      top: 50%;
      z-index: 1;
      background-color: #afbe68;
    }
    .parent::after {
      content: "";
      width: 1px;
      height: 100%;
      position: absolute;
      left: 50%;
      z-index: 1;
      background-color: #afbe68;
    }

    .parent {
      position: relative;
      height: 200px;
      background-color: #ec1f10;
    }

    /* 方式一 */
    .child {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
      background-color: #0096ff;
    }

    /* 方式二 */
    .child {
      width: 100px;
      height: 100px;
      position: absolute;
      top: calc(50% - 50px);
      left: calc(50% - 50px);
      background-color: #0096ff;
    }

    /* 方式三 上面两种方式必须知道子元素的宽高 */
    .child {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #0096ff;
      transform: translate(-50%, -50%);
    }

    /* 方式四 */
    .child {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background-color: #0096ff;
    }
  </style>
  <body>
    <div class="parent">
      <div class="child"></div>
    </div>
  </body>
</html>
```



## 行内非替换元素的注意事项

- **以下属性对行内级非替换元素不起作用**
  - width、height、margin-top、margin-bottom

- **以下属性对行内级非替换元素的效果比较特殊**
  - padding-top、padding-bottom、上下方向的border

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .content {
        background-color: #f00;
        color: white;

        /* 内容: width/height(压根不生效) */
        width: 300px;
        height: 300px;

        /* 内边距: padding */
        /* 特殊: 上下会被撑起来, 但是不占据空间 */
        padding: 50px;

        /* 边框: border */
        /* 特殊: 上下会被撑起来, 但是不占据空间 */
        /* border: 50px solid orange; */

        /* 外边距: margin */
        /* 特殊： 上下的margin是不生效的 */
        /* margin: 50px; */
      }
    </style>
  </head>
  <body>
    <span class="content"> 我是span内容, 哈哈哈 </span>
    aaaaaaa
    <div>bbbbbb</div>
  </body>
</html>
```



## box-sizing

box-sizing用来设置盒子模型中宽高的行为

-  **content-box** 
  - content-box 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且**边框**和**内边距**的宽度都会被增加到最后渲染出来的元素宽度中
  - 元素的实际占用宽度 = border + padding + 内容的宽度
  - 元素的实际占用高度 = border + padding + 内容的高度
- **border-box**
  - border-box 告诉浏览器：你想要设置的**边框**和**内边距**的值是**包含在width内的**。如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，**内容区的实际宽度是width减去(border + padding)的值**。
  - 元素的实际占用宽度 = 内容的宽度
  - 元素的实际占用高度 = 内容的高度

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box1 {
        box-sizing: content-box;

        width: 100px;
        height: 100px;
        background-color: #f00;

        padding: 30px;
        border: 10px solid orange;
      }

      .box2 {
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        background-color: #0f0;

        padding: 30px;
        border: 10px solid purple;
      }
    </style>
  </head>
  <body>
    <div class="box1"></div>
    <div class="box2"></div>
  </body>
</html>
```



## CSS元素定位

- 默认情况下，元素都是按照 **normal flow（标准流、常规流、正常流、文档流）**进行排布
  - 从左到右、从上到下按顺序摆放好
  - 默认情况下，**互相之间不存在层叠现象**



### relative

- 元素按照 **文档流** 布局
-  可以通过**left、right、top、bottom**进行定位
  - 定位参照对象是**元素自己原来的位置**



### absolute

- 元素脱离 **文档流 **

- 可以通过**left、right、top、bottom**进行定位
  - 定位参照对象是**最邻近的定位祖先元素**
  - 如果**找不到这样的祖先元素，参照对象是视口（文档的可视区域）**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        width: 800px;
        height: 800px;
        background-color: #f00;

        position: relative;
      }

      .box {
        width: 500px;
        height: 500px;
        background-color: #0f0;

        position: absolute;
        right: 0;
        bottom: 0;
      }

      strong {
        position: absolute;
        left: 0;
        bottom: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box">
        <span>我是span元素</span>
        <strong>我是strong元素</strong>
        <div>我是div元素</div>
      </div>
    </div>
  </body>
</html>
```



### fixed

- 元素脱离 **文档流 **
- 可以通过**left、right、top、bottom**进行定位
  - 定位参照对象是**视口（文档的可视区域）** 
- 当页面滚动时，固定不动



### 将position设置为absolute/fixed元素的特点

#### 1.可以随意设置宽高

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      span {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: #0f0;
      }
    </style>
  </head>
  <body>
    <span>我是span元素</span>
  </body>
</html>
```



#### 2. 宽高默认由内容决定

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        position: absolute;
        background-color: #0f0;
      }
    </style>
  </head>
  <body>
    <div class="box">我是box元素</div>
  </body>
</html>
```



#### 3.不再受文档流的约束

- 不再**严格按照从上到下、从左到右排布**
- 不再**严格区分块级(block)、行内级(inline)，行内块级(inline-block)的很多特性**都会消失

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box span {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 200px;
        height: 200px;
        background-color: #0f0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <span>我是span元素</span>
    </div>
  </body>
</html>

```



#### 4.不再给父元素汇报宽高数据

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        background-color: #f00;
      }

      .box span {
        /* 没加position: absolute时,父元素高度是由内容撑起的 */
        position: absolute;
        background-color: #0f0;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <span>我是span元素</span>
    </div>
  </body>
</html>
```



### z-index

- z-index属性用来设置定位元素的**层叠顺序**（仅对定位元素有效）
  - 取值可以是正整数、负整数、0 
- 比较原则
  - 如果是**兄弟关系**
    - z-index越大，层叠在越上面
    - z-index相等，写在后面的那个元素层叠在上面
  - 如果**不是兄弟关系**
    - 各自从元素自己以及祖先元素中，找出最邻近的2个定位元素进行比较
    - 而且这2个定位元素必须有设置z-index的具体数值

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
      margin: 0;
      padding: 0;
    }

    .children {
      width: 200px;
      height: 100px;
      background-color: pink;
      position: absolute;
      z-index: 1;
    }

    .box {
      width: 200px;
      height: 100px;
      background-color: blueviolet;
      position: absolute;
    }
  </style>
  <body>
    <div class="parent">
      <div class="children"></div>
    </div>
    <div class="box"></div>
  </body>
</html>
```



## 浮动

### 高度塌陷

- 由于浮动元素脱离了文档流，变成了脱标元素，所以**不再向父元素汇报高度**
  - 父元素**计算总高度**时，就**不会计算浮动元素的高度**，导致了**高度坍塌**的问题

- 清浮动的目的是
  - 让**父元素计算高度的时候**，把**浮动元素的高度计算进去**



### clear

- clear 属性可以指定一个元素**是否必须移动**(清除浮动后)**到在它之前的浮动元素**下面; 

- clear的常用取值
  - left：要求元素的顶部低于之前生成的所有左浮动元素的底部
  - right：要求元素的顶部低于之前生成的所有右浮动元素的底部
  - both：要求元素的顶部低于之前生成的所有浮动元素的底部

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .content {
        width: 1200px;
        margin: 0 auto;
        background: #f00;
      }

      .item {
        width: 290px;
        height: 180px;
        background-color: purple;
        margin-bottom: 10px;
        margin-right: 10px;

        float: left;
      }

      /* 其他的内容 */
      .other {
        height: 100px;
        background: #0f0;
      }

      /* 解决办法一 */
      .line {
        clear: both;
      }

      /* 最终的解决方案 */
      .clear_fix::after {
        content: "";
        clear: both;
        display: block;

        /* 浏览器兼容 */
        visibility: hidden;
        height: 0;
      }

      .clear_fix {
        /* IE6/7 */
        *zoom: 1;
      }
    </style>
  </head>
  <body>
    <!-- 因为所有的后代item元素都是浮动的, 脱离了文档流 -->
    <!-- 不会向父元素汇报高度, 那么content元素压根就没有高度 -->
    <div class="content">
      <div class="wrapper clear_fix">
        <div class="item left"></div>
        <div class="item left"></div>
        <div class="item right"></div>
        <div class="item right"></div>
        <div class="item right"></div>
        <div class="item right"></div>

        <!-- <div class="line"></div> -->
      </div>
    </div>

    <!-- 我认为content没有高度, 那么我就会直接在上面显示 -->
    <div class="other"></div>
  </body>
</html>
```



## vertical-align

- vertical-align会影响**行内块级元素** 在一个 **行盒**中垂直方向的位置



### line boxes(行盒)

- 一个div没有设置高度的时候，会不会有高度？
  - 没有内容，没有高度
  - 有内容，内容撑起来高度
- 但是内容撑起来高度的本质是什么呢？
  - 内容由行高（line-height），撑起来了div的高度

- 行高为什么可以撑起div的高度？
  - 这是因为**line boxes**的存在，并且line-boxes有一个特性，**包裹每行的(行内/行内块)元素**
  - 而其中的文字是有行高的，必须将整个行高包裹进去
- **line-boxes**一定会想办法包裹住当前行中**所有的内容**



### baseline

- 文本的baseline是字母x的下方
- Inline-block默认的baseline是margin-bottom的底部（没有，就是盒子的底部）
- Inline-block有文本时，baseline是最后一行文本的x的下方

[<img src="https://s1.ax1x.com/2022/05/06/Onrn6H.md.png"/>](https://imgtu.com/i/Onrn6H)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .box {
      background-color: orange;
    }

    .box img {
      width: 200px;
    }

    .box .small {
      display: inline-block;
      width: 100px;
      height: 200px;
      background-color: #f00;
    }
  </style>

  <body>
    <div class="box">
      我是普通文本,123456abcqgpyxxxdef
      <img
        src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        alt=""
      />
      <span class="small">123阿萨德浙西川藏线sdasdasdxc</span>
    </div>
  </body>
</html>
```



### vertical-align的其他值

- baseline(默认值)：基线对齐
- top：把行内级盒子的顶部跟line boxes顶部对齐
- middle：行内级盒子的中心点与父盒子基线加上x-高度一半的线对齐
- bottom：把行内级盒子的底部跟line box底部对齐



## FC

- FC的全称是Formatting Context(格式化上下文)，元素在标准流里面都是属于一个FC的

- 块级元素的布局属于Block Formatting Context（块级格式化上下文）
- 行内级元素的布局属于Inline Formatting Context（行内格式化上下文） 



### BFC

- MDN上有整理出在哪些具体的情况下会创建BFC： 
  - 根元素（html） 
  - 浮动元素（元素的 float 不是 none）
  - 绝对定位元素（元素的 position 为 absolute 或 fixed） 
  - 行内块元素（元素的 display 为 inline-block）
  - overflow 计算值(Computed)不为 visible 的块元素
  - 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
  - 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）

- BFC有什么作用呢
  - 在BFC中，盒子会在**垂直方向上一个挨着一个**的排布
  - **垂直方向的间距由margin属性**决定
  - 在同一个BFC中，**相邻的两个盒子之间的margin会折叠**
  - 在BFC中，每个元素的**左边缘是紧挨着包含块的左边缘**的；

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BFC-解决折叠</title>
    <style>
      .container {
        overflow: auto;
      }

      .box1 {
        width: 400px;
        height: 100px;
        background-color: orange;

        margin-bottom: 100px;
      }

      .box2 {
        height: 100px;
        background-color: purple;

        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box1"></div>
    <div class="box2"></div>

    <div class="container">
      <div class="box1"></div>
    </div>
    <div class="box2"></div>
  </body>
</html>
```



### 解决浮动高度塌陷

- BFC解决高度塌陷需要满足两个条件
  - 浮动元素的父元素触发BFC，形成独立的块级格式化上下文
  - 浮动元素的父元素的高度是auto的
- BFC的高度是auto的情况下，是如下方法计算高度的
  - 如果只有inline-level，是行高的顶部和底部的距离
  - 如果有block-level，是由最底层盒子的上边缘和下边缘之间的距离
  - 如果有绝对定位元素，将被忽略
  - **如果有浮动元素，那么会增加高度以包含这些浮动元素的下边缘**

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BFC-解决浮动高度塌陷</title>
    <style>
      .container {
        background-color: orange;
          
        overflow: auto;
      }

      .item {
        width: 600px;
        height: 200px;
    	float: left;
        border: 1px solid #000;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </body>
</html>
```



## 浏览器前缀

- 为什么需要浏览器前缀了
  - CSS属性刚开始**并没有成为标准**，浏览器为了**防止后续会修改名字给新的属性添加了浏览器前缀**； 



# Less

```less
// less中的变量
// @import "" 引入其他样式进来
@Vsariable: 200px; // 定义 200 数值
@color: pink; // 定义颜色
@class: box22; // 定义一个类名

div.box1 {
  width: @Vsariable;
  height: 100px;
  background-color: deepskyblue;

  div.box11 {
    width: 50px;
    height: 50px;
    background-color: deeppink;
    transition: all 0.3s;

    // & 表示外层父元素,也就是 div.box11
    &:hover {
      width: 100px;
      height: 100px;
    }
  }
}

div.box2 {
  width: 100px;
  height: 100px;
  background-color: @color;

  .@{class} {
    width: 50px;
    height: 50px;
    background-color: gold;
  }
}

.p1 {
  width: 240px;
  height: 240px;
  background-color: gold;
  border: red 2px solid;
  margin-top: 20px;
}

// .p2:extend(.p1) ---> .p1, .p2
.p2:extend(.p1) {
  background-color: rebeccapurple;
}

// 这个类专门给别人用,也不会被编写到 css 里
// 如果不加 () 会编写到 css 里
.content {
  width: 240 / 5px; // 可以进行加减乘除
  border: 10px solid rgb(255, 0, 128);
  margin-top: 20px;
}

.p3 {
  .content;
}

// 在混合函数中可以设置变量,也可以设置默认参数
.test(@width: 100px, @height: 100px, @bg-color: #bfc) {
  width: @width;
  height: @height;
  background-color: @bg-color;
}

.mixins {
  // 按顺序传递参数
  // .test(200px,200px,#bfc)
  // 指定参数
  .test(@bg-color:#000 , @height:500px , @width:500);
}
```

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>less</title>
    <style>
      div.box1 {
        width: 200px;
        height: 100px;
        background-color: deepskyblue;
      }
      div.box1 div.box11 {
        width: 50px;
        height: 50px;
        background-color: deeppink;
        transition: all 0.3s;
      }
      div.box1 div.box11:hover {
        width: 100px;
        height: 100px;
      }
      div.box2 {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
      div.box2 .box22 {
        width: 50px;
        height: 50px;
        background-color: gold;
      }
      .p1,
      .p2 {
        width: 240px;
        height: 240px;
        background-color: gold;
        border: red 2px solid;
        margin-top: 20px;
      }
      .p2 {
        background-color: rebeccapurple;
      }
      .content {
        width: 48px;
        border: 10px solid #ff0080;
        margin-top: 20px;
      }
      .p3 {
        width: 48px;
        border: 10px solid #ff0080;
        margin-top: 20px;
      }
      .mixins {
        width: 500;
        height: 500px;
        background-color: #000;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div class="box11"></div>
    </div>
    <div class="box2">
      <div class="box22"></div>
    </div>
    <div class="p1"></div>
    <div class="p2"></div>
    <div class="p3"></div>
  </body>
</html>
```
