[TOC]

# Composition API

## Options API的弊端

- 在Vue2中，我们**编写组件的方式是Options API**
  - Options API的一大特点就是在**对应的属性**中编写**对应的功能模块**
  - 比如**data定义数据**、**methods中定义方法**、**computed中定义计算属性**、**watch中监听属性改变**，也包括**生命周期钩子**
- 但是这种代码有一个很大的弊端
  - 当我们**实现某一个功能**时，这个功能**对应的代码逻辑**会被**拆分到各个属性**中
  - 当我们**组件变得更大、更复杂**时，**逻辑关注点的列表**就会增长，那么**同一个功能的逻辑就会被拆分的很分散**
  - 尤其对于那些一开始**没有编写这些组件的人**来说，这个组件的代码是**难以阅读和理解的**（阅读组件的其他人）



## 认识Composition API

- 那么既然知道Composition API想要帮助我们做什么事情，接下来看一下**到底是怎么做**呢
  - 为了开始使用Composition API，我们需要有一个可以实际使用它**（编写代码）的地方**
  - 在Vue组件中，这个位置就是 **setup 函数**
- setup其实就是组件的另外一个选项
  - 只不过这个选项强大到我们可以**用它来替代之前所编写的大部分其他选项**
  - 比如**methods、computed、watch、data、生命周期**等等



## setup函数的参数

- 我们先来研究一个setup函数的参数，它主要有**两个参数**
  - 第一个参数：**props**
  - 第二个参数：**context**
- props非常好理解，它其实就是**父组件传递过来的属性**会被**放到props对象**中，我们在**setup中如果需要使用**，那么就可以直接
  **通过props参数获取**
  - 对于**定义props的类型**，我们还是**和之前的规则是一样的，在props选项中定义**
  - 并且在**template中**依然是可以**正常去使用props中的属性**
  - 如果我们**在setup函数中想要使用props**，那么**不可以通过 this 去获取**
  - 因为props有直接**作为参数传递到setup函数**中，所以我们可以**直接通过参数**来使用即可
- 另外一个参数是context，我们也称之为是一个**SetupContext**，它里面**包含三个属性**
  - **attrs**：所有的非prop的attribute
  - **slots**：父组件传递过来的插槽（这个在以渲染函数返回时会有作用）
  - **emit**：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过 this.$emit发出事件）



## setup函数的返回值

- setup既然是一个函数，那么它也可以有**返回值**，**它的返回值用来做什么呢**

  - setup的返回值可以在**模板template中被使用**
  - 也就是说我们可以**通过setup的返回值来替代data选项**

- 甚至是我们可以**返回一个执行函数**来**代替在methods中定义的方法**

  ```vue
  <template>
    <div>当前计数: {{ count }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </template>
  
  <script>
  export default {
    setup() {
      let count = 1;
  
      const increment = () => {
        count++;
      };
  
      const decrement = () => {
        count--;
      };
  
      return { count, increment, decrement };
    },
  };
  </script>
  ```
  
- 但是，如果我们将 count 在 increment 或者 decrement 进行操作时，**是否可以实现界面的响应式呢**

  - 答案是**不可以**
  - 这是因为对于一个**定义的变量**来说，默认情况下，**Vue并不会跟踪它的变化，来引起界面的响应式操作**




## reactive

- 如果想为在setup中定义的数据提供响应式的特性，那么我们可以**使用reactive的函数**

  ```vue
  <template>
    <div>当前信息: {{ info }} - {{ address }}</div>
  </template>
  
  <script>
  import { reactive } from "vue";
  
  export default {
    setup() {
      // 定义复杂类型的数据
      const info = reactive({
        name: "the shy",
        age: "18",
      });
  
      const address = reactive("上海"); // value cannot be made reactive: 上海
  
      return { info, address };
    },
  };
  </script>
  ```

- 那么这是什么原因呢？为什么就可以变成响应式的呢
  - 这是因为当我们**使用reactive函数处理我们的数据之后**，数据**再次被使用**时就会**进行依赖收集**
  - 当**数据发生改变**时，所有**收集到的依赖**都是**进行对应的响应式操作**（比如更新界面）
  - 事实上，我们编写的**data选项**，也是在内部**交给了reactive函数**将其变成响应式对象的



## ref

- reactive API对**传入的类型是有限制的**，它要求我们必须传入的是**一个对象或者数组类型**
  - 如果我们传入一个**基本数据类型（String、Number、Boolean）会报一个警告**
- 这个时候Vue3给我们提供了**另外一个API：ref API**
  - ref 会返回一个**可变的响应式对象**，该对象作为一个 **响应式的引用** 维护着它**内部的值**，这就是**ref名称的来源**
  - 它内部的值是**在ref的 value 属性**中被维护的

- 这里有两个注意事项

  - 在**模板中引入ref的值**时，Vue会**自动帮助我们进行解包操作**，所以我们并**不需要在模板中通过 ref.value** 的方式来使用

  - 但是在 **setup 函数内部**，它依然是一个 **ref引用**， 所以对其进行操作时，我们依然需要**使用 ref.value的方式**

  ```vue
  <template>
    <div>当前计数: {{ count }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      let count = ref(1);
  
      const increment = () => {
        count.value++;
      };
  
      const decrement = () => {
        count.value--;
      };
  
      return { count, increment, decrement };
    },
  };
  </script>
  ```



## ref自动解包

- **模板中的解包是浅层的解包**

- 如果我们**将ref放到一个info对象**当中，那么**在模板中使用时，它会自动解包**

  ```vue
  <template>
    <div>
      <h2>message: {{ message }}</h2>
      <button @click="changeMessage">修改message</button>
      <hr />
  
      <h2>账号: {{ account.username }}</h2>
      <h2>密码: {{ account.password }}</h2>
      <button @click="changeAccount">修改账号</button>
      <hr />
  
      <!-- 默认情况下在template中使用ref时, vue会自动对其进行解包(取出其中value) -->
      <h2>当前计数 - ref: {{ counter }}</h2>
      <button @click="increment">+1</button>
      <button @click="counter++">+1</button>
      <hr />
  
      <!-- 使用的时候不需要写.value -->
      <h2>当前计数 - info: {{ info.counter }}</h2>
      <!-- 修改的时候需要写.value -->
      <button @click="info.counter.value++">+1</button>
    </div>
  </template>
  
  <script>
  import { reactive, ref } from "vue";
  
  export default {
    setup() {
      // 1.定义普通的数据: 可以正常的被使用
      // 缺点: 数据不是响应式的
      let message = "Hello world";
      function changeMessage() {
        message = "Hello Vue3";
        console.log(message);
      }
  
      // 2.定义响应式数据
      // 2.1.reactive函数: 定义复杂类型的数据
      const account = reactive({
        username: "the shy",
        password: "6666666",
      });
      function changeAccount() {
        account.username = "shy";
      }
  
      // 2.2.ref函数: 定义简单类型的数据(也可以定义复杂类型的数据)
      // counter定义响应式数据
      const counter = ref(0);
      function increment() {
        counter.value++;
      }
  
      // 3.ref是浅层解包
      const info = { counter };
  
      return {
        message,
        changeMessage,
        account,
        changeAccount,
        counter,
        increment,
        info,
      };
    },
  };
  </script>
  ```




## readonly

- 我们通过**reactive或者ref可以获取到一个响应式的对象**，但是某些情况下，我们**传入给其他地方（组件）**的这个响应式对象希望**在另外一个地方（组件）被使用**，但是**不能被修改**，这个时候**如何防止这种情况的出现**呢

  - Vue3为我们提供了**readonly的方法**
  - **readonly会返回原生对象的只读代理**（也就是它依然是一个Proxy，这是一个**proxy的set方法被劫持**，并且不能对其进行修改）

- 在开发中常见的readonly方法会传入三个类型的参数

  - 类型一：普通对象
  - 类型二：reactive返回的对象
  - 类型三：ref的对象

- 在readonly的使用过程中，有如下规则

  - readonly**返回的对象都是不允许修改**的
  - 但是经过readonly处理的**原来的对象**是允许被修改的
    - 比如 const info = readonly(object)，**info对象是不允许被修改**的
    - 当**object被修改**时，**readonly返回的info对象**也会被修改
    - 但是我们**不能去修改readonly返回的对象info**

- 其实本质上就**是readonly返回的对象的setter方法**被劫持了而已

  ```vue
  <template>
    <div>ref - {{ ref_count }}</div>
    <button @click="increment">+1</button>
  
    <hr />
  
    <div>readonly - {{ readonly_count }}</div>
    <button @click="readonly_increment">+1</button>
  </template>
  
  <script>
  import { ref, readonly, reactive } from "vue";
  
  export default {
  	setup() {
      let ref_count = ref(1);
      let reactive_count = reactive({ count: 1 });
      let object = { count: 1 };
  
      const increment = () => {
        ref_count.value++;
        reactive_count.count++;
        object.count++;
      };
  
      // let readonly_count = readonly(ref_count);
  
      // let readonly_count = readonly(reactive_count);
      // let readonly_count = readonly(object);
  
      let readonly_count = readonly(1);
  
      const readonly_increment = () => {
        // readonly_count.value++;
  
        // readonly_count.count++;
        
  			// 不会是响应式的数据
        readonly_count++;
        console.log(readonly_count);
      };
      return { ref_count, increment, readonly_count, readonly_increment };
    },
  };
  </script>
  ```



## reactive判断的API

- isProxy

  - 检查对象**是否是由 reactive 或 readonly 创建的 proxy**

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
  
    console.log(isProxy(value1_ref)); // false
    console.log(isProxy(value2_reactive)); // true
    console.log(isProxy(value3_readonly)); // true
  }
  ```

- isReactive

  - 检查对象**是否是由 reactive 创建的响应式代理**
  - 如果**该代理是 readonly 建的**，但**包裹了由 reactive 创建的另一个代理**，它也会返回 true

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
    let value4_readonly_wrap_reactive = readonly(value2_reactive);
  
    console.log(isReactive(value1_ref)); // false
    console.log(isReactive(value2_reactive)); // true
    console.log(isReactive(value3_readonly)); // false
    console.log(isReactive(value4_readonly_wrap_reactive)); // true
  },
  ```

- isReadonly

  - 检查对象**是否是由 readonly 创建的只读代理**

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
    let value4_readonly_wrap_reactive = readonly(value2_reactive);
  
    console.log(isReadonly(value1_ref)); // false
    console.log(isReadonly(value2_reactive)); // false
    console.log(isReadonly(value3_readonly)); // true
    console.log(isReadonly(value4_readonly_wrap_reactive)); // true
  },
  ```

- toRaw

  - 返回 **reactive 或 readonly 代理的原始对象**（不建议保留对原始对象的持久引用。请谨慎使用）

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
    let value4_readonly_wrap_reactive = readonly(value2_reactive);
  
    console.log(toRaw(value1_ref)); // RefImpl { ... }
    console.log(toRaw(value2_reactive)); // {count: 1}
    console.log(toRaw(value3_readonly)); // {count: 1}
    console.log(toRaw(value4_readonly_wrap_reactive)); // {count: 1}
  },
  ```

- shallowReactive

  - 创建一个响应式代理，它跟踪其自身 property 的响应性，但**不执行嵌套对象的深层响应式转换** (深层还是原生对象)
  - 自身属性发生修改时会更新页面，而嵌套的对象属性发生改变不会更新页面

  ```vue
  <template>
    <div>
      <div>{{ info }}</div>
      <button @click="changeSelfAttribute">修改 info 自身属性</button>
      <button @click="changeHobbyAttribute">修改 info hobby属性</button>
    </div>
  </template>
  
  <script>
  import { shallowReactive } from "vue";
  
  export default {
    setup() {
      const info = shallowReactive({ count: 1, hobby: { play: "玩LOL" } });
  
      const changeSelfAttribute = function () {
        console.log(info.count); // 1
        info.count = 100;
        console.log(info.count); // 100
      };
  
      const changeHobbyAttribute = function () {
        console.log(info.hobby.play); // 玩LOL
        info.hobby.play = "玩把快乐风男";
        console.log(info.hobby.play); // 玩把快乐风男
      };
      return { info, changeSelfAttribute, changeHobbyAttribute };
    },
  };
  </script>
  ```

- shallowReadonly

  - 创建一个 proxy，使其自身的 property 为只读，但**不执行嵌套对象的深度只读转换**（深层还是可读、可写的）
  - 自身属性和嵌套的对象属性都不会更新页面

  ```vue
  <template>
    <div>
      <div>{{ info }}</div>
      <button @click="changeSelfAttribute">修改 info 自身属性</button>
      <button @click="changeHobbyAttribute">修改 info hobby属性</button>
    </div>
  </template>
  
  <script>
  import { shallowReadonly } from "vue";
  
  export default {
    setup() {
      const info = shallowReadonly({ count: 1, hobby: { play: "玩LOL" } });
  
      const changeSelfAttribute = function () {
        console.log(info.count); // 1
        info.count = 100;
        // Set operation on key "count" failed: target is readonly. {count: 1, hobby: {…}}
        console.log(info.count); // 1
      };
  
      const changeHobbyAttribute = function () {
        console.log(info.hobby.play); // 玩LOL
        info.hobby.play = "玩把快乐风男";
        console.log(info.hobby.play); // 玩把快乐风男
      };
      return { info, changeSelfAttribute, changeHobbyAttribute };
    },
  };
  </script>
  ```



## toRefs

- 如果我们使用**ES6的解构语法**，对**reactive返回的对象进行解构获取值**，那么之后无论是**修改结构后的变量**，还是**修改reactive返回的state对象**，**数据都不再是响应式**的

- 那么有没有办法**让我们解构出来的属性是响应式**的呢

  - Vue为我们提供了一个**toRefs的函数**，可以将**reactive返回的对象中的属性都转成ref**
  - 那么我们再次进行结构出来的 **name 和 age 本身都是 ref 的**

- 这种做法相当于已经在**state.name和ref.value**之间建立了 **链接**，**任何一个修改都会引起另外一个变化**

  ```vue
  <template>
    <div>当前信息: {{ name }} - {{ age }}</div>
    <button @click="changeName">修改名称</button>
    <button @click="changeAge">修改年龄</button>
  </template>
  
  <script>
  import { reactive, toRefs } from "vue";
  
  export default {
    setup() {
      const state = reactive({ name: "the shy", age: 18 });
  
      let { name, age } = toRefs(state);
  
      const changeName = () => {
        name.value = "shy 哥";
      };
  
      const changeAge = () => {
        age.value++;
      };
  
      return { name, age, changeName, changeAge };
    },
  };
  </script>
  ```



## toRef

- 如果我们只希望转换一个**reactive对象中的属性为ref**, 那么可以**使用toRef的方法**

  ```vue
  <template>
    <div>当前年龄:{{ age }}</div>
    <button @click="changeAge">修改年龄</button>
  </template>
  
  <script>
  import { reactive, toRef } from "vue";
  
  export default {
    setup() {
      const state = reactive({ name: "the shy", age: 18 });
  
      let age = toRef(state, "age");
  
      const changeAge = () => {
        age.value++;
      };
  
      return { age, changeAge };
    },
  };
  </script>
  ```



## ref判断的API

- unref

  - 如果我们想要**获取一个 ref 引用中的 value**，那么也可以**通过 unref 方法**
    - **如果参数是一个 ref**，则**返回内部值**，**否则返回参数本身**
    - 这是 **val = isRef(val) ? val.value : val** 的语法糖函数

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1000);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
    let value4_readonly_wrap_reactive = readonly(value2_reactive);
  
    console.log(unref(value1_ref)); // 1000
    console.log(unref(value2_reactive)); // Proxy {count: 1}
    console.log(unref(value3_readonly)); // Proxy {count: 1}
    console.log(unref(value4_readonly_wrap_reactive)); // Proxy {count: 1}
  },
  ```

- isRef

  - 判断值是否是一个 ref 对象

  ```js
  setup() {
    let object = { count: 1 };
    let value1_ref = ref(1000);
    let value2_reactive = reactive(object);
    let value3_readonly = readonly(object);
    let value4_readonly_wrap_reactive = readonly(value2_reactive);
    let value5_readonly_wrap_ref = readonly(value1_ref);
  
    console.log(isRef(value1_ref)); // true
    console.log(isRef(value2_reactive)); // false
    console.log(isRef(value3_readonly)); // false
    console.log(isRef(value4_readonly_wrap_reactive)); // false
    console.log(isRef(value5_readonly_wrap_ref)); // true
  },
  ```

- shallowRef

  - 创建一个**浅层的 ref 对象**

- triggerRef

  - **手动触发和 shallowRef 相关联的副作用**

  ```vue
  <template>
    <div>当前年龄:{{ info }}</div>
    <button @click="changeInfo">修改info</button>
  </template>
  
  <script>
  import { shallowRef, triggerRef } from "vue";
  
  export default {
    setup() {
      let info = shallowRef({ count: 1 });
  
      const changeInfo = () => {
        info.value.count++;
        triggerRef(info);
      };
  
      return { info, changeInfo };
    },
  };
  </script>
  ```



## setup不可以使用this

- 因为没有绑定 this , 所以在 setup 中使用 this 就会有问题



## computed

- 在前面我们讲解过计算属性computed：当我们的某些属性是依赖其他状态时，我们可以使用计算属性来处理

  - 在前面的Options API中，我们是使用computed选项来完成的
  - 在Composition API中，我们可以在 setup 函数中使用 computed 方法来编写一个计算属性

- 如何使用computed呢

  - **方式一**：接收一个 **getter 函数**，并为 getter 函数返回的值，返回一个不变的 ref 对象
  - **方式二**：接收一个具有 **get 和 set 的对象**，返回一个可变的（可读写）ref 对象

  ```vue
  <template>
    <h1>{{ fullName }}</h1>
    <button @click="setFullname">设置fullname</button>
  </template>
  
  <script>
  import { reactive, computed } from "vue";
  
  export default {
    setup() {
      const names = reactive({ firstName: "the", lastName: "shy" });
      
      // get 写法
      // const fullName = computed(() => {
      //   return names.firstName + " " + names.lastName
      // })
  
      // 完整写法
      const fullName = computed({
        set(newValue) {
          const tempNames = newValue.split(" ");
          names.firstName = tempNames[0];
          names.lastName = tempNames[1];
        },
        get() {
          return names.firstName + " " + names.lastName;
        },
      });
  
      console.log(fullName); // ComputedRefImpl { ... }
  
      function setFullname() {
        fullName.value = "我的 shy";
      }
  
      return { names, fullName, setFullname };
    },
  };
  </script>
  ```



## setup中使用ref

- 在setup中如何使用ref获取元素或者组件

  - 其实非常简单，我们只需要定义一个ref对象，绑定到元素或者组件的ref属性上即可

  ```vue
  <!-- App.vue -->
  <template>
    <!-- 1.获取元素 -->
    <h1 ref="titleRef">我是标题</h1>
    <button ref="btnRef">按钮</button>
  
    <!-- 2.获取组件实例 -->
    <show-info ref="showInfoRef"></show-info>
  
    <button @click="getElements">获取元素</button>
  </template>
  
  <script>
  import { ref } from "vue";
  import showInfo from "./showInfo.vue";
  
  export default {
    components: { showInfo },
    setup() {
      const titleRef = ref();
      const btnRef = ref();
      const showInfoRef = ref();
  
      function getElements() {
        console.log(titleRef.value);
        console.log(btnRef.value);
        console.log(showInfoRef.value);
  
        showInfoRef.value.showInfoFoo();
      }
      return { titleRef, btnRef, showInfoRef, getElements };
    },
  };
  </script>
  
  <!-- showInfo.vue -->
  <template>
    <h2>showInfo</h2>
  </template>
  
  <script>
  export default {
    setup() {
      function showInfoFoo() {
        console.log("showInfo foo function");
      }
      return { showInfoFoo };
    },
  };
  </script>
  ```



## 生命周期钩子

- 我们前面说过 setup 可以用来替代 data 、 methods 、 computed 等等这些选项，也可以替代 **生命周期钩子**

- 那么setup中如何使用生命周期函数呢

  - 可以使用直接导入的 onX 函数注册生命周期钩子

- 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写

  ```
  beforeCreate  -> setup()
  created       -> setup()
  beforeMount   -> onBeforeMount
  mounted       -> onMounted
  beforeUpdate  -> onBeforeUpdate
  updated       -> onUpdated
  beforeDestroy -> onBeforeUnmount
  destroyed     -> onUnmounted
  activated     -> onActivated
  deactivated   -> onDeactivated
  errorCaptured -> onErrorCaptured
  ```



## 侦听数据的变化

- 在前面的Options API中，我们可以通过**watch选项**来侦听**data或者props**的数据变化，当数据变化时执行某一些操作
- 在Composition API中，我们可以使用**watchEffect和watch**来完成响应式数据的侦听
  - **watchEffect**：用于自动收集响应式数据的依赖
  - **watch**：需要手动指定侦听的数据源



### watch的使用

- watch的API完全等同于组件watch选项的Property

  - watch需要**侦听特定的数据源**，并且执行其回调函数
  - 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调

  ```vue
  <template>
    <h1>当前计数: {{ count }}</h1>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
  
    <hr />
  
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="name = 'the shy'">修改name</button>
    <button @click="age = 24">修改age</button>
  
    <hr />
  
    <h1>{{ info }}</h1>
    <button @click="info.friend.name = 'i coder'">修改info-friend</button>
  </template>
  
  <script>
  import { ref, reactive, watch } from "vue";
  
  export default {
    setup() {
      let count = ref(1);
      let name = ref("shy");
      let age = ref(18);
      let info = reactive({
        name: "lwh",
        friend: {
          name: "coder",
        },
      });
      // 监听单个属性变化
      watch(count, (newValue, oldValue) => {
        console.log(newValue, oldValue);
      });
      // 监听多个属性变化
      watch([name, age], (newValue, oldValue) => {
        // ['the shy', 18]  ['shy', 18]
        // ['the shy', 24]  ['the shy', 18]
        console.log(newValue, oldValue);
      });
      // 选项配置
      watch(
        info,
        (newValue, oldValue) => {
          console.log(newValue, oldValue);
        },
        { immediate: true, deep: true }
      );
  
      return { count, name, age, info };
    },
  };
  </script>
  ```



### watchEffect

- 当侦听到某些响应式数据变化时，我们希望执行某些操作，这个时候可以使用 **watchEffect**

  - 首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖
  - 其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行

- 如果在发生某些情况下，我们希望停止侦听，这个时候我们可以获取watchEffect的**返回值函数，调用该函数**即可

  ```vue
  <template>
    <h1>当前计数: {{ count }}</h1>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
  </template>
  
  <script>
  import { ref, watchEffect } from "vue";
  
  export default {
    setup() {
      let count = ref(1);
  
      let stopWatch = watchEffect(() => {
        console.log(count.value);
        if (count.value >= 6) {
          stopWatch();
        }
      });
  
      return { count };
    },
  };
  </script>
  ```



## script setup语法

- script setup 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖，当同时使用 SFC 与组合式 API 时则推荐该语法
  - 更少的样板内容，更简洁的代码
  - 能够使用纯 Typescript 声明 prop 和抛出事件
  - 更好的运行时性能
  - 更好的 IDE 类型推断性能

- 使用这个语法，需要将 setup attribute 添加到 script 代码块上

  ```vue
  <script setup></script>
  ```

- 里面的代码会被编译成组件 setup() 函数的内容

  - 这意味着与普通的 script 只在组件被首次引入的时候执行一次不同
  - script setup 中的代码会在每次组件实例被创建的时候执行



### 顶层的绑定会被暴露给模板

- 当使用 script setup 的时候，任何在 script setup 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用

- 响应式数据需要通过ref、reactive来创建

  ```vue
  <!--- App.vue --->
  <template>
    <h1>AppContent: {{ message }}</h1>
    <button @click="changeMessage">修改message</button>
    <show-info></show-info>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import showInfo from "./showInfo.vue";
  
  const message = ref("Hello World");
  
  function changeMessage() {
    message.value = "你好啊, 李银河!";
  }
  </script>
  
  <!--- showInfo.vue --->
  <template>
    <h1>showInfo</h1>
  </template>
  
  <script setup></script>
  ```



### defineProps 和 defineEmits

- 为了在声明 props 和 emits 选项时获得完整的类型推断支持，我们可以使用 defineProps 和 defineEmits API，它们将自动地在 script setup 中可用

  ```vue
  <!--- App.vue --->
  <template>
    <h1>AppContent: {{ message }}</h1>
    <button @click="changeMessage">修改message</button>
    <show-info name="shy" :age="18" @info-btn-click="infoBtnClick"> </show-info>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import showInfo from "./showInfo.vue";
  
  const message = ref("Hello World");
  
  function changeMessage() {
    message.value = "你好啊, 李银河!";
  }
  
  function infoBtnClick(payload) {
    console.log("监听到showInfo内部的点击:", payload);
  }
  </script>
  
  <!--- showInfo.vue --->
  <template>
    <h1>showInfo: {{ name }}-{{ age }}</h1>
    <button @click="showInfoBtnClick">showInfoButton</button>
  </template>
  
  <script setup>
  const props = defineProps({
    name: { type: String, default: "默认值" },
    age: { type: Number, default: 0 },
  });
  
  const emits = defineEmits(["infoBtnClick"]);
  function showInfoBtnClick() {
    emits("infoBtnClick", "showInfo内部发生了点击");
  }
  </script>
  ```



### defineExpose

- 使用 script setup 的组件是默认关闭的

  - 通过模板 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 script setup 中声明的绑定

- 通过 defineExpose 编译器宏来显式指定在 script setup 组件中要暴露出去的 property

  ```vue
  <!--- App.vue --->
  <template>
    <h1>AppContent: {{ message }}</h1>
    <button @click="changeMessage">修改message</button>
    <show-info
      name="shy"
      :age="18"
      ref="showInfoRef"
      @info-btn-click="infoBtnClick">
    </show-info>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import showInfo from "./showInfo.vue";
  
  const message = ref("Hello World");
  
  function changeMessage() {
    message.value = "你好啊, 李银河!";
  }
  
  function infoBtnClick(payload) {
    console.log("监听到showInfo内部的点击:", payload);
  }
  
  const showInfoRef = ref();
  onMounted(() => {
    showInfoRef.value.foo();
  });
  </script>
  
  <!--- showInfo.vue --->
  <template>
    <h1>showInfo: {{ name }}-{{ age }}</h1>
    <button @click="showInfoBtnClick">showInfoButton</button>
  </template>
  
  <script setup>
  const props = defineProps({
    name: { type: String, default: "默认值" },
    age: { type: Number, default: 0 },
  });
  
  const emits = defineEmits(["infoBtnClick"]);
  function showInfoBtnClick() {
    emits("infoBtnClick", "showInfo内部发生了点击");
  }
  
  function foo() {
    console.log("foo function");
  }
  defineExpose({ foo });
  </script>
  ```



# Router

## 认识前端路由

- 路由其实是网络工程中的一个术语
  - 在**架构一个网络**时，非常重要的两个设备就是**路由器和交换机**
  - 当然，目前在我们生活中**路由器**也是越来越被大家所熟知，因为我们生活中都会用到**路由器**
  - 事实上，**路由器**主要维护的是一个**映射表**
  - **映射表**会决定数据的流向
- 路由的概念在软件工程中出现，最早是在后端路由中实现的，原因是web的发展主要经历了这样一些阶段
  - 后端路由阶段
  - 前后端分离阶段
  - 单页面富应用（SPA）



## 后端路由阶段

- 早期的网站开发整个HTML页面是由**服务器来渲染**的
  - 服务器直接**生产渲染好对应的HTML页面**, 返回给客户端进行展示
- 但是, 一个网站, **这么多页面服务器如何处理呢**
  - 一个页面有**自己对应的网址**, 也就是**URL**
  - URL会发送到服务器, 服务器会通过**正则对该URL进行匹配**, 并且最后交给**一个Controller进行处理**
  - Controller进行各种处理, 最终生成**HTML或者数据**, 返回给前端
- 上面的这种操作, 就是**后端路由**
  - 当我们页面中需要**请求不同的路径内容**时, 交给服务器来进行处理, 服务器渲染好**整个页面**, 并且将**页面返回给客户端**
  - 这种情况下渲染好的页面, **不需要单独加载任何的js和css**, 可以直接**交给浏览器展示**, 这样也**有利于SEO的优化**
- 后端路由的缺点
  - 一种情况是**整个页面的模块由后端人员来编写和维护**的
  - 另一种情况是**前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码**
  - 而且通常情况下**HTML代码和数据以及对应的逻辑会混在一起**, 编写和维护都是非常糟糕的事情



## 前后端分离阶段

- 前端渲染的理解
  - 每次请求涉及到的静态资源都会从**静态资源服务器获取**，这些资源**包括HTML+CSS+JS**，然后**在前端对这些请求回来的资源进行渲染**
  - 需要注意的是，客户端的每一次请求，都会**从静态资源服务器请求文件**
  - 同时可以看到，和之前的后端路由不同，这时后端只是**负责提供API**了
- 前后端分离阶段
  - 随着Ajax的出现, 有了**前后端分离的开发模式**
  - 后端只提供API来返回数据，前端**通过Ajax获取数据**，并且可以**通过JavaScript将数据渲染到页面中**
  - 这样做最大的优点就是**前后端责任的清晰**，**后端专注于数据上**，**前端专注于交互和可视化上**
  - 并且当**移动端(iOS/Android)**出现后，后端不需要进行任何处理，依然使用之前的一套API即可
- 单页面富应用阶段
  - 其实SPA最主要的特点就是**在前后端分离的基础**上加了一层**前端路由**
  - 也就是前端来维护一套**路由规则**
- 前端路由的核心是什么呢？**改变URL**，但是**页面不进行整体的刷新**



## URL的hash

- 前端路由是如何做到URL和内容进行映射呢？监听URL的改变

- URL的hash

  - URL的hash也就是锚点(#), 本质上是改变window.location的href属性
  - 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新

  ```html
  <body>
    <a href="#/home">home</a>
    <a href="#/about">about</a>
    <div class="router-view"></div>
    <script>
      const routerViewEl = document.querySelector(".router-view");
  
      window.addEventListener("hashchange", () => {
        switch (location.hash) {
          case "#/home":
            routerViewEl.innerHTML = "home";
            break;
  
          case "#/about":
            routerViewEl.innerHTML = "about";
            break;
  
          default:
            routerViewEl.innerHTML = "default";
        }
      });
    </script>
  </body>
  ```

- hash的优势就是兼容性更好，在老版IE中都可以运行，但是缺陷是有一个#，显得不像一个真实的路径



## HTML5的History

- history接口是HTML5新增的, 它有六种模式改变URL而不刷新页面

  - **replaceState：**替换原来的路径
  - **pushState：**使用新的路径

  - **popState：**路径的回退
  - **go：**向前或向后改变路径
  - **forward：**向前改变路径
  - **back：**向后改变路径

  ```html
  <!--需要开启本地服务-->
  <body>
    <button class="home">home</button>
    <button class="about">about</button>
    <div class="router-view"></div>
  
    <script>
      const homeEl = document.querySelector(".home");
      const aboutEl = document.querySelector(".about");
      const routerViewEl = document.querySelector(".router-view");
  
      homeEl.onclick = function () {
        history.pushState({}, "", "/home");
        historyChange();
      };
  
      aboutEl.onclick = function () {
        history.pushState({}, "", "/about");
        historyChange();
      };
  
      // 监听浏览器前进后退
      window.addEventListener("popstate", historyChange);
  
      function historyChange() {
        console.log(location.pathname);
        switch (location.pathname) {
          case "/home":
            routerViewEl.innerHTML = "home";
            break;
  
          case "/about":
            routerViewEl.innerHTML = "about";
            break;
  
          default:
            routerViewEl.innerHTML = "default";
        }
      }
    </script>
  </body>
  ```



## 认识vue-router

- Vue Router 是 Vue.js 的官方路由
  - 它与 Vue.js 核心深度集成，让用 Vue.js 构建**单页应用（SPA）**变得非常容易
-  vue-router是基于路由和组件的
  - 路由用于设定**访问路径**, 将**路径和组件映射**起来
  - 在vue-router的单页面应用中, 页面的路径的改变就是组件的切换



## 路由的使用步骤

- 第一步：**创建路由需要映射的组件**

- 第二步：**通过createRouter创建路由对象**，并且**传入routes和history模式**

  - **配置路由映射**: 组件和路径映射关系的routes数组
  - 创建基于hash或者history的模式

  ```js
  import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
  } from "vue-router";
  
  import Home from '../views/home.vue'
  import About from '../views/about.vue'
  
  const router = createRouter({
    // 指定采用的模式: hash
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: [
      { path: "/home", component: Home },
      { path: "/about", component: About },
    ],
  });
  
  export default router;
  ```
  
- 第三步：使用app注册路由对象（use方法）

  ```js
  import { createApp } from "vue";
  import router from "./router";
  import App from "./App.vue";
  
  const app = createApp(App);
  
  app.use(router);
  app.mount("#app");
  ```

- 第四步：路由使用: 通过 router-link 和 router-view

  ```vue
  <template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
    </div>
  </template>
  
  <style>
    .nav a {
      margin-right: 10px;
    }
  </style>
  ```



## 路由的默认路径

- 我们这里还有一个不太好的实现

  - 默认情况下, 进入网站的首页, 我们希望 router-view 渲染首页的内容
  - 但是我们的实现中, **默认没有显示首页组件, 必须让用户点击才可以**

- 如何可以让路径**默认跳到到首页**, 并且 router-view 渲染首页组件呢

  ```js
  import Home from '../views/home.vue'
  import About from '../views/about.vue'
  
  const router = createRouter({
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: Home },
      { path: "/about", component: About },
    ],
  })
  ```

- 我们在routes中又配置了一个映射

  - path配置的是**根路径: /**
  - **redirect是重定向**, 也就是我们将根路径重定向到/home的路径下, 这样就可以得到我们想要的结果了



## router-link

-  router-link事实上有很多属性可以配置
  - to属性：是一个字符串，或者是一个对象
  - replace属性：设置 replace 属性的话，当点击时，会调用 router.replace()，而不是 router.push()
  - active-class属性：设置激活a元素后应用的class，默认是router-link-active
  - exact-active-class属性：链接精准激活时，应用于渲染的 <a> 的 class，默认是router-link-exact-active



## 路由懒加载

- 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载
  - 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效
  - 也可以提高首屏的渲染效率

- 其实这里还是我们前面讲到过的webpack的分包知识，而Vue Router默认就支持动态来导入组件

  - 这是因为component可以传入一个组件，也可以接收一个函数，该函数 需要放回一个Promise
  - 而import函数就是返回一个Promise

  ```js
  // 路由的懒加载
  // 对分包进行命名（chunk name）
  // const Home = () => import(/* webpackChunkName: 'home' */"../views/home.vue");
  const Home = () => import("../views/home.vue");
  const About = () => import("../views/about.vue");;
  
  const router = createRouter({
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: Home },
      { path: "/about", component: About },
    ],
  });
  ```



## 路由的其他属性

- name属性：路由记录独一无二的名称

- meta属性：自定义的数据

  ```js
  const router = createRouter({
    routes: [
      {
        path: "/about",
        name: "about",
        meta: { name: "shy", age: "24", game: "lol" },
        component: () => import("../views/home.vue"),
      },
    ],
  });
  ```



## 动态路由基本匹配

- 很多时候我们需要将给定匹配模式的路由映射到同一个组件

  - 例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但是用户的ID是不同的
  - 在Vue Router中，我们可以在路径中使用一个动态字段来实现，我们称之为 路径参数

  ```js
  const router = createRouter({
    routes: [
      { path: "/user/:userId", component: () => import("../views/user.vue") },
    ],
  });
  
  // <router-link to="/user/100">用户100</router-link>
  // <router-link to="/user/101">用户101</router-link>
  ```



## 获取动态路由的值

- 那么在 User 中如何获取到对应的值呢

  - 在 template 中，直接通过 $route.params 获取值
  - 在 setup 中，我们要使用 vue-router 库给我们提供的一个 hook useRoute
  - 该 hook 会返回一个 Route 对象，对象中保存着当前路由相关的值

  ```vue
  <template>
    <h1>User - {{ $route.params.userId }}</h1>
  </template>
  
  <script setup>
    import { useRoute } from "vue-router";
  
    const route = useRoute();
    console.log(route.params.userId);
  </script>
  ```



## NotFound

- 对于哪些没有匹配到的路由，我们通常会匹配到固定的某个页面

  - 比如NotFound的错误页面中，这个时候我们可编写一个动态路由用于匹配所有的页面
  
  ```js
  const router = createRouter({
    routes: [
      { path: "/:pathMatch(.*)", component: () => import("../views/notFound.vue") },
    ],
  });
  ```

- 我们可以通过 $route.params.pathMatch 获取到传入的参数

  ```vue
  <template>
  <h1>
    NotFound: 您当前的路径 <span>{{ $route.params.pathMatch }}</span> 不正确,请输入正确的路径!
    </h1>
  </template>
  
  <style>
    span {
      color: red;
    }
  </style>
  ```



## 匹配规则加*

- 这里还有另外一种写法

  - 注意：我在 /:pathMatch(.*) 后面又加了一个 *

  ```js
  const router = createRouter({
    routes: [
      { path: "/:pathMatch(.*)*", component: () => import("../views/notFound.vue") },
    ],
  });
  ```

- 它们的区别在于解析的时候，是否解析 /

  - NotFound: 您当前的路径 哈哈哈/呵呵呵/嘿嘿嘿 不正确, 请输入正确的路径!
  - NotFound: 您当前的路径 [ "哈哈哈", "呵呵呵", "嘿嘿嘿" ] 不正确, 请输入正确的路径!



## 路由的嵌套

- 什么是路由的嵌套呢

  - 目前我们匹配的Home、About、User等都属于第一层路由，我们在它们之间可以来回进行切换

- 但是呢，我们Home页面本身，也可能会在多个组件之间来回切换

  - 比如Home中包括Product、Message，它们可以在Home内部来回切换
  - 这个时候我们就需要使用嵌套路由，在Home中也**使用 router-view 来占位之后需要渲染的组件**

  ```js
  const router = createRouter({
    routes: [
      {
        path: "/home",
        component: () => import("../views/home.vue"),
        children: [
          { path: "/home", redirect: "/home/product" },
          { path: "product", component: import("../views/product.vue") },
          { path: "message", component: import("../views/message.vue") },
        ],
      },
    ],
  });
  ```

  ```vue
  <template>
  <h1>Home</h1>
  <div class="nav">
    <router-link to="/home/product">Product</router-link>
    <router-link to="/home/message">Message</router-link>
  </div>
  <button @click="ProductClick">Product</button>
  <button @click="MessageClick">Message</button>
  <router-view></router-view>
  </template>
  
  <script setup>
    import { useRouter } from "vue-router";
  
    const router = useRouter();
  
    function ProductClick() {
      router.push("/home/product");
    }
    function MessageClick() {
      router.push({ path: "/home/message", query: { name: "shy", age: 24 } });
    }
  </script>
  ```




## 动态添加路由

- 某些情况下我们可能需要动态的来添加路由

  - 比如根据用户不同的权限，注册不同的路由
  - 这个时候我们可以使用一个方法 addRoute

- 如果我们是为 route 添加一个 children 路由，那么可以传入对应的 name

  ```js
  // 动态管理路由
  let isAdmin = false;
  if (isAdmin) {
    // 动态添加一级路由
    router.addRoute({
      path: "/admin",
      component: () => import("../views/admin.vue"),
    });
  
    // 动态添加二级路由
    router.addRoute("home", {
      path: "vip",
      component: import("../views/vip.vue"),
    });
  }
  ```



## 动态管理路由的其他方法

- 删除路由有以下三种方式

  - 方式一：添加一个name相同的路由

  ```js
  router.addRoute({
    path: "/about",
    name: "about"
    component: () => import("../views/about.vue"),
  });
  
  router.addRoute({
    path: "/other",
    name: "about"
    component: () => import("../views/other.vue"),
  });
  ```

  - 方式二：通过removeRoute方法，传入路由的名称

  ```js
  router.addRoute({
    path: "/about",
    name: "about"
    component: () => import("../views/about.vue"),
  });
  
  router.removeRoute('about')
  ```

  - 方式三：通过addRoute方法的返回值回调

  ```js
  let removeRoute = router.addRoute({
    path: "/about",
    name: "about"
    component: () => import("../views/about.vue"),
  });
  
  removeRoute()
  ```

- 路由的其他方法补充

  - router.hasRoute()：检查路由是否存在
  - router.getRoutes()：获取一个包含所有路由记录的数组

  ```js
  console.log(router.hasRoute("home"));
  console.log(router.getRoutes());
  ```



## 路由导航守卫

- vue-router 提供的导航守卫主要用来通过**跳转或取消的方式守卫导航**
- 全局的前置守卫beforeEach是在导航触发时会被回调的
- 它有两个参数
  - **to：**即将进入的路由Route对象
  - **from：**即将离开的路由Route对象
-  它有返回值
  - **false：**取消当前导航
  - **不返回或者undefined：**不做任何处理
  - **返回一个路由地址：**
    - 可以是一个string类型的路径
    - 可以是一个对象，对象中包含path、query、params等信息

- 可选的第三个参数：next（不推荐使用）

  - 在Vue2中我们是通过next函数来决定如何进行跳转的
  - 但是在Vue3中我们是通过返回值来控制的，不再推荐使用next函数，这是因为开发中很容易调用多次next

  ```js
  router.beforeEach((to, from) => {
    // console.log("to", to);
    // console.log("from", from);
  
    if (to.path === "/vip" || to.path === "/home/vip") {
      const userName = localStorage.getItem("userName");
      if (!userName) {
        // return "/login"
        return {
          path: "/login",
        };
      }
    }
  });
  ```

  ```vue
  <template>
    <h1>请你登录账号</h1>
    <input type="text" v-model="userName" />
    <button @click="login">登录</button>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  let userName = ref("");
  let router = useRouter();
  
  function login() {
    localStorage.setItem("userName", userName.value);
    router.push("/vip");
  }
  </script>
  ```



## 其他导航守卫

- Vue还提供了很多的其他守卫函数，目的都是在某一个时刻给予我们回调，让我们可以更好的控制程序的流程或者功能
  - https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html
- 完整的导航解析流程
  1. 导航被触发。
  2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
  3. 调用全局的 `beforeEach` 守卫。
  4. 在重用的组件里调用 `beforeRouteUpdate` 守卫(2.2+)。
  5. 在路由配置里调用 `beforeEnter`。
  6. 解析异步路由组件。
  7. 在被激活的组件里调用 `beforeRouteEnter`。
  8. 调用全局的 `beforeResolve` 守卫(2.5+)。
  9. 导航被确认。
  10. 调用全局的 `afterEach` 钩子。
  11. 触发 DOM 更新。
  12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。



# Vuex

## 什么是状态管理

- 在开发中，我们会在应用程序中处理各种各样的数据，这些数据需要保存在我们应用程序中的某一个位置，对于这些数据的管理我们就称之为是 **状态管理**
- 在前面我们是如何管理自己的状态呢
  - 在Vue开发中，我们使用**组件化的开发方式**
  - 而在组件中我们**定义data或者在setup中返回使用的数据**，这些数据我们称之为**state**
  - 在**模板template**中我们可以使用这些数据，模板最终会被渲染成DOM，我们称之为**View**
  - 在模板中我们会产生一些**行为事件**，处理这些行为事件时，有可能会修改state，这些行为事件我们称之为**actions**



## Vuex的状态管理

- 管理不断变化的state本身是非常困难的
  - 状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View页面也有可能会引起状态的变化
  - 当应用程序复杂时，state在什么时候，因为什么原因而发生了变化，发生了怎么样的变化，会变得非常难以控制和追踪
- 因此，我们是否可以考虑将组件的内部状态抽离出来，以一个全局单例的方式来管理呢
  - 在这种模式下，我们的组件树构成了一个**巨大的 "试图View"**
  - 不管在树的哪个位置，**任何组件都能获取状态或者触发行为**
  - 通过定义和隔离状态管理中的各个概念，并通过**强制性的规则来维护视图和状态间的独立性**，我们的代码边会变得更加结构化和易于维护、跟踪
- 这就是Vuex背后的基本思想，它借鉴了Flux、Redux、Elm（纯函数语言，redux有借鉴它的思想）



## 单一状态树

- Vuex 使用单一状态树
  - 用**一个对象**就包含了**全部的应用层级的状态**
  - 采用的是**SSOT，Single Source of Truth**，也可以翻译成单一数据源
- 这也意味着，每个应用将仅仅包含一个 **store 实例**
- 单一状态树的优势
  - 如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难
  - 所以Vuex也使用了单一状态树来管理应用层级的全部状态
  - 单一状态树能够让我们**最直接的方式找到某个状态的片段**
  - 而且在之后的维护和调试过程中，也可以非常方便的管理和维护



## 创建store

- 每一个Vuex应用的核心就是store（仓库）

  - store本质上是一个容器，它包含着你的应用中大部分的状态（state）

- Vuex和单纯的全局对象有什么区别呢

  - 第一：Vuex的状态存储是响应式的
    - 当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会被更新
  - 第二：你不能直接改变store中的状态
    - 改变store中的状态的唯一途径就是**提交 (commit) mutation**
    - 这样使得我们可以方便的跟踪每一个状态的变化，从而让我们能够通过一些工具帮助我们更好的管理应用的状态

- 创建Store对象，在app中通过插件安装

  ```js
  // src/store/index.js
  import { createStore } from "vuex";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
        name: "shy",
        age: 24,
        level: 100,
      };
    },
  });
  
  export default store;
  
  
  // main.js
  import { createApp } from "vue";
  import App from "./App.vue";
  import store from "./store/index";
  
  const app = createApp(App);
  
  app.use(store).mount("#app");
  ```

  ```vue
  <template>
    <div class="app">
      <h1>App {{ $store.state.counter }}</h1>
    </div>
  </template>
  
  <script setup></script>
  ```



## store的基本使用

- 在模板中使用

- 在 options api 中使用

- 在 setup 中使用

  ```vue
  <template>
    <div class="home">
  		<h1>Home {{ $store.state.counter }}</h1>
      <h1>Vue2 当前计数: {{ counter }}</h1>
      <h1>Vue3 当前计数: {{ counter }}</h1>
    </div>
  </template>
  
  <!-- vue2 -->
  <script>
  export default {
    data() {
      return {
        counter: this.$store.state.counter,
      };
    },
  };
  </script>
  
  <!-- vue3 -->
  <script setup>
  import { useStore } from "vuex";
  
  const store = useStore();
  
  const counter = store.state.counter;
  </script>
  
  ```



## mapState映射

- 如果我们有很多个状态都需要获取的话，可以使用mapState的辅助函数

  - mapState的方式一：对象类型
  - mapState的方式一：数组类型
  - 也可以使用**展开运算符和原来有的computed混合在一起**

  ```vue
  <template>
  <div class="home">
    <!-- 1.在模板中直接使用多个状态 -->
    <h1>在模板中直接使用多个状态</h1>
    <h1>name: {{ $store.state.name }}</h1>
    <h1>level: {{ $store.state.level }}</h1>
  
    <hr />
  
    <!-- 2.计算属性(映射状态: 数组语法) -->
    <h1>计算属性(映射状态: 数组语法)</h1>
    <h1>name: {{ name }}</h1>
    <h1>level: {{ level }}</h1>
  
    <hr />
  
    <!-- 3.计算属性(映射状态: 对象语法) -->
    <h1>计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ renameName }}</h1>
    <h1>level: {{ renameLevel }}</h1>
  
    <hr />
  
    <!-- 4.setup计算属性(映射状态: 对象语法) -->
    <h1>setup计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ computedName }}</h1>
    <h1>level: {{ computedLevel }}</h1>
  
    <hr />
  
    <!-- 5.setup计算属性(映射状态: 对象语法) -->
    <h1>setup计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ toRefsName }}</h1>
    <h1>level: {{ toRefsLevel }}</h1>
    </div>
  </template>
  
  <script>
    import { mapState } from "vuex";
  
    export default {
      computed: {
        ...mapState(["name", "level"]),
        ...mapState({
          renameName: (state) => state.name,
          renameLevel: (state) => state.level,
        }),
      },
    };
  </script>
  
  <script setup>
    import { computed, toRefs } from "vue";
    import { mapState, useStore } from "vuex";
  
    const store = useStore();
    // 1.一步步完成
    const { name: mapName, level: mapLevel } = mapState(["name", "level"]);
    const computedName = computed(mapName.bind({ $store: store }));
    const computedLevel = computed(mapLevel.bind({ $store: store }));
  
    // 2.直接对store.state进行解构(推荐)
    const { name: toRefsName, level: toRefsLevel } = toRefs(store.state);
  </script>
  ```



## getters的基本使用

- 某些属性我们可能需要经过变化后来使用，这个时候可以使用getters

  ```js
  // src/store/index.js
  import { createStore } from "vuex";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
        name: "shy",
        age: 24,
        level: 100,
      };
    },
    getters: {
      // 1.基本使用
      doubleCounter(state) {
        return state.counter * 2;
      },
      // 2.在该getters属性中, 获取其他的getters
      message(state, getters) {
        return `name:${state.name} level:${state.level} counter:${getters.doubleCounter}`;
      },
      // 3.getters是可以返回一个函数的, 调用这个函数可以传入参数
      printLog() {
        return function (name, level) {
          return `name:${name} level:${level}`;
        };
      },
    },
  });
  
  export default store;
  ```

  ```vue
  <template>
    <div class="home">
      <h1>doubleCounter: {{ $store.getters.doubleCounter }}</h1>
      <h1>message: {{ $store.getters.message }}</h1>
  
      <h1>printLog: {{ $store.getters.printLog("ning", 100) }}</h1>
      <h1>printLog: {{ $store.getters.printLog("the shy", 100) }}</h1>
    </div>
  </template>
  
  <script setup></script>
  ```



## mapGetters映射

- 如果我们有很多个状态都需要获取的话，可以使用mapGetters的辅助函数

  - mapGetters的方式一：数组类型
  - mapGetters的方式二：对象类型
  
  - 也可以使用**展开运算符和原来有的computed混合在一起**
  
  ```vue
  <template>
    <div class="home">
      <h1>doubleCounter: {{ doubleCounter }}</h1>
      <h1>info: {{ info }}</h1>
      <h1>printLog: {{ printLog("the shy", 100) }}</h1>
  
      <hr />
  
      <h1>computedDoubleCounter: {{ computedDoubleCounter }}</h1>
      <h1>toRefsMessage: {{ toRefsMessage }}</h1>
      <h1>computedPrintLog: {{ computedPrintLog("the shy", 100) }}</h1>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    computed: {
      ...mapGetters(["doubleCounter"]),
      ...mapGetters(["printLog"]),
      ...mapGetters({
        info: "message",
      }),
    },
  };
  </script>
  
  <script setup>
  import { computed, toRefs } from "vue";
  import { mapGetters, useStore } from "vuex";
  
  const store = useStore();
  
  // 1.使用mapGetters
  const { doubleCounter: doubleCounterMap } = mapGetters(["doubleCounter"]);
  const computedDoubleCounter = computed(doubleCounterMap.bind({ $store: store }));
  
  // 2.直接解构, 并且包裹成ref
  const { message: toRefsMessage } = toRefs(store.getters);
  
  // 3.针对某一个getters属性使用computed
  const computedPrintLog = computed(() => store.getters.printLog);
  </script>
  ```



## mutation的基本使用

- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

  ```js
  import { createStore } from "vuex";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
        name: "shy",
        age: 24,
        level: 100,
      };
    },
    mutations: {
      changeName(state, payload) {
        state.name = payload;
      },
      incrementLevel(state) {
        state.level++;
      },
    },
  });
  
  export default store;
  ```

  ```vue
  <template>
    <div class="home">
      <button @click="changeName">修改name</button>
      <button @click="incrementLevel">递增level</button>
      <h1>Store Name: {{ $store.state.name }}</h1>
      <h1>Store Level: {{ $store.state.level }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      changeName() {
        this.$store.commit("changeName", "the shy");
      },
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  function incrementLevel() {
    store.commit("incrementLevel");
  }
  </script>
  ```




## mapMutations映射

- 我们也可以借助于辅助函数，帮助我们快速映射到对应的方法中

  ```vue
  <template>
    <div class="home">
      <button @click="changeName('the shy')">修改name</button>
      <button @click="increment">递增level</button>
      <button @click="incrementLevel">递增level</button>
      <h1>Store Name: {{ $store.state.name }}</h1>
      <h1>Store Level: {{ $store.state.level }}</h1>
    </div>
  </template>
  
  <script>
  import { mapMutations } from "vuex";
  export default {
    methods: {
      ...mapMutations(["changeName"]),
      ...mapMutations({
        increment: "incrementLevel",
      }),
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  const { incrementLevel: incrementLevelMap } = mapMutations(["incrementLevel"]);
  
  const incrementLevel = incrementLevelMap.bind({ $store: store });
  </script>
  ```



## mutation重要原则

- 一条重要的原则就是要记住 **mutation 必须是同步函数**
  - 这是**因为devtool工具会记录mutation的日记**
  - 每一条mutation被记录，**devtools都需要捕捉到前一状态和后一状态的快照**
  - 但是**在mutation中执行异步操作，就无法追踪到数据的变化**
- 所以Vuex的重要原则中要求 mutation必须是同步函数
  - 但是如果我们希望在Vuex中发送网络请求的话需要如何操作呢



## actions的基本使用

- action 类似于 mutation，不同在于

  - action提交的是mutation，而不是直接改变状态
  - action可以包含任意异步操作

- 这里有一个非常重要的参数context

  -  context是一个和store实例均有相同方法和属性的context对象
  - 所以我们可以从其中获取到commit方法来提交一个mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters

  ```js
  import { createStore } from "vuex";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
        name: "shy",
        age: 24,
        level: 100,
      };
    },
    mutations: {
      changeName(state, payload) {
        state.name = payload;
      },
    },
    actions: {
      changeNameAction(context, payload) {
        setTimeout(() => {
          context.commit("changeName", payload);
        }, 0);
      },
    },
  });
  
  export default store;
  ```

  ```vue
  <template>
    <div class="home">
      <button @click="nameBtnClick1">发起action修改name1</button>
      <button @click="nameBtnClick2">发起action修改name2</button>
      <h1>name: {{ $store.state.name }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      nameBtnClick1() {
        this.$store.dispatch("changeNameAction", "哈哈哈哈");
      },
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  function nameBtnClick2() {
    store.dispatch("changeNameAction", "呵呵呵呵");
  }
  </script>
  ```



## mapActions映射

- action也有对应的辅助函数

  - **对象类型**的写法
  - **数组类型**的写法

  ```vue
  <template>
    <div class="home">
      <button @click="nameBtnClick1('哈哈哈哈')">发起action修改name1</button>
      <button @click="nameBtnClick2('呵呵呵呵')">发起action修改name2</button>
      <h1>name: {{ $store.state.name }}</h1>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions({
        nameBtnClick1: "changeNameAction",
      }),
    },
  };
  </script>
  
  <script setup>
  import { useStore, mapActions } from "vuex";
  const store = useStore();
  
  const { changeNameAction: changeNameActionMap } = mapActions(["changeNameAction"]);
  
  const nameBtnClick2 = changeNameActionMap.bind({ $store: store });
  </script>
  ```



## actions的异步操作

- action 通常是异步的，那么如何知道 action 什么时候结束呢

  - 我们可以通过让 action 返回 Promise，在 Promise 的 then 中来处理完成后的操作

  ```js
  import { createStore } from "vuex";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
        name: "shy",
        age: 24,
        level: 100,
      };
    },
    mutations: {
      changeName(state, payload) {
        state.name = payload;
      },
    },
    actions: {
      changeNameAction(context, payload) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit("changeName", payload);
            resolve("异步操作完成");
          }, 0);
        });
      },
    },
  });
  
  export default store;
  ```

  ```vue
  <template>
    <div class="home">
      <button @click="nameBtnClick1">发起action修改name1</button>
      <button @click="nameBtnClick2">发起action修改name2</button>
      <h1>name: {{ $store.state.name }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      nameBtnClick1() {
        this.$store.dispatch("changeNameAction", "哈哈哈哈").then((res) => {
          console.log(res + "1");
        });
      },
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  function nameBtnClick2() {
    store.dispatch("changeNameAction", "呵呵呵呵").then((res) => {
      console.log(res + "2");
    });
  }
  </script>
  ```



## module的基本使用

- 什么是Module

  - 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，store 对象就有可能变得相当臃肿
  - 为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**
  - 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块

  ```js
  // src/store/index.js
  import { createStore } from "vuex";
  import home from "./modules/home";
  
  const store = createStore({
    state() {
      return {
        counter: 100,
      };
    },
    modules: { home },
  });
  
  export default store;
  
  // src/store/modules/home.js
  const count = {
    state() {
      return {
        count: 99,
      };
    },
    mutations: {
      incrementCount(state, payload) {
        state.count++;
      },
    },
    getters: {
      doubleCount(state, getters, rootState, rootGetters) {
        console.log(rootState);
        // Proxy {counter: 100, name: 'shy', age: 24, level: 100, home: {count: 100}}
        return state.count + rootState.counter;
      },
    },
    actions: {
      incrementCountAction(context, payload) {
        console.log(context);
        /* 
          commit: ƒ boundCommit(type, payload, options)
          dispatch: ƒ boundDispatch(type, payload)
          getters: {}
          rootGetters: {}
          rootState: Proxy {counter: 100, name: 'shy', age: 24, level: 100, home: {count: 100}}
          state: Proxy {count: 100}
        */
        context.commit("incrementCount");
      },
    },
  };
  
  export default count;
  ```
  
  ```vue
  <template>
    <div class="home">
      <!-- 1.使用 state 时, 是需要 state.moduleName.xxx -->
      <h1>{{ $store.state.home.count }}</h1>
      <!-- 2.使用 getters 时, 是直接 getters.xxx -->
      <h1>{{ $store.getters.doubleCount }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    created() {
      console.log(this.$store.state.home.count);
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  console.log(store.state.home.count);
  </script>
  ```



## module的命名空间

- 默认情况下，模块内部的 action 和 mutation 仍然是注册在**全局的命名空间**中的
  - 这样使得多个模块能够对同一个 action 或 mutation 作出响应
  - getter 同样也默认注册在全局命名空间
- 如果我们希望模块具有更高的封装度和复用性，可以添加 namespaced: true 的方式使其成为带命名空间的模块
  - 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  
  ```js
  const count = {
    namespaced: true,
    state() {
      return {
        count: 99,
      };
    },
    mutations: {
      incrementCount(state, payload) {
        state.count++;
      },
    },
    getters: {
      doubleCount(state, getters, rootState) {
        return state.count + rootState.counter;
      },
    },
    actions: {
      incrementCountAction(context, payload) {
        context.commit("incrementCount");
      },
      changeRootName(context, payload) {
        context.commit("changeName", payload, { root: true });
      },
    },
  };
  
  export default count;
  ```
  
  ```vue
  <template>
    <div class="home">
      <h1>{{ $store.state.name }}</h1>
      <h1>{{ $store.state.home.count }}</h1>
      <h1>{{ $store.getters["home/doubleCount"] }}</h1>
      <button @click="increment">count++</button>
      <button @click="changeRootName">changeRootName</button>
    </div>
  </template>
  
  <script>
  export default {
    created() {
      console.log(this.$store.state.home.count);
    },
  };
  </script>
  
  <script setup>
  import { useStore } from "vuex";
  const store = useStore();
  
  console.log(store.state.home.count);
  
  function increment() {
    store.dispatch("home/incrementCountAction");
  }
  function changeRootName() {
    store.dispatch("home/changeRootName", "the shy");
  }
  </script>
  ```



# Pinia

## 什么是Pinia呢

- Pinia（发音为/piːnjʌ/，如英语中的“peenya”）是最接近piña（西班牙语中的菠萝）的词
  -  Pinia开始于大概2019年，最初是作为一个实验**为Vue重新设计状态管理**，让它用起来像**组合式API（Composition API）**
  - 从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容Vue2、Vue3，也并不要求你使用Composition API
  - Pinia本质上依然是一个**状态管理的库**，用于**跨组件、页面进行状态共享**



## Pinia和Vuex的区别

- 那么我们不是已经有Vuex了吗？为什么还要用Pinia呢？
  - Pinia 最初是为了**探索 Vuex 的下一次迭代**会是什么样子，结合了 **Vuex 5 核心团队**讨论中的许多想法
  - 最终，团队意识到**Pinia已经实现了Vuex5中大部分内容**，所以最终**决定用Pinia来替代Vuex**
  - 与 Vuex 相比，Pinia 提供了一个**更简单的 API，具有更少的仪式**，提供了 **Composition-API 风格的 API**
  - 最重要的是，在**与 TypeScript 一起使用时具有可靠的类型推断支持**

- 和Vuex相比，Pinia有很多的优势
  - 比如 mutations 不再存在
    - 他们经常被认为是 **非常冗长**
    - 他们最初带来了 devtools 集成，但这不再是问题
  - 更友好的TypeScript支持，Vuex之前对TS的支持很不友好
  - 不再有 modules 的嵌套结构
    - 你可以灵活使用每一个store，它们是通过扁平化的方式来相互使用的
  - 也不再有命名空间的概念，不需要记住它们的复杂关系



## 认识Store

- 什么是Store
  - 一个 Store （如 Pinia）是一个**实体**，它会持有为绑定到你**组件树的状态和业务逻辑**，也就是保存了全局的状态
  - 它有点像始终存在，并且**每个人都可以读取和写入的组件**
  - 你可以在你的应用程序中**定义任意数量的 Store 来管理你的状态**

- Store有三个核心概念
  - **state、getters、actions**
  - 等同于组件的data、computed、methods
  -  一旦 store 被实例化，你就可以**直接在 store 上访问 state、getters 和 actions** 中定义的任何属性



## 定义一个Store

- 我们需要知道 Store 是**使用 defineStore()** 定义的

- 并且它需要一个**唯一名称**，作为第一个参数传递

- 这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools

- 返回的函数统一使用 useX 作为命名方案，这是约定的规范

  ```js
  // src/stores/index.js
  import { createPinia } from "pinia";
  
  const pinia = createPinia();
  export default pinia;
  
  
  // src/stores/home.js
  import { defineStore } from "pinia";
  
  const useHome = defineStore("home", {
    state: () => ({
      name: "shy",
      age: 18,
    }),
  });
  export default useHome;
  
  
  // src/main.js
  import { createApp } from "vue";
  import App from "./App.vue";
  import pinia from "./stores";
  
  createApp(App).use(pinia).mount("#app");
  ```

- Store 在它被使用之前是不会创建的，我们可以通过调用**use函数**来使用 Store

  ```vue
  <template>
    <div class="home">
      <h1>name: {{ homeStore.name }}</h1>
      <h1>age: {{ homeStore.age }}</h1>
    </div>
  </template>
  
  <script setup>
  import useHome from "@/stores/home";
  
  const homeStore = useHome();
  </script>
  ```

- 注意 Store 获取到后不能被解构，那么会失去响应式

  - 为了从 Store 中提取属性同时保持其响应式，您需要使用**storeToRefs()**

  ```vue
  <template>
    <div class="home">
      <h1>name: {{ name }}</h1>
      <h1>age: {{ age }}</h1>
      <button @click="incrementAge">incrementAge + 1</button>
    </div>
  </template>
  
  <script setup>
  import useHome from "@/stores/home";
  import { toRefs } from "vue";
  import { storeToRefs } from "pinia";
  
  let homeStore = useHome();
  // let { name, age } = homeStore;
  // let { name, age } = toRefs(homeStore);
  let { name, age } = storeToRefs(homeStore);
  
  function incrementAge() {
    homeStore.age++;
  }
  </script>
  ```



## 操作State

- 读取和写入 state

  - 默认情况下，您可以通过 store 实例访问状态来直接读取和写入状态

  ```js
  const homeStore = useHome();
  
  homeStore.name = 'the shy'
  homeStore.age++
  ```

- 重置 State

  - 可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值

  ```js
  const homeStore = useHome();
  
  homeStore.$reset();
  ```

- 改变 State

  - 除了直接用 store.age++ 修改 store，你还可以调用 $patch 方法
  - 它允许您使用部分 state 对象**同时应用多个更改**

  ```js
  const homeStore = useHome();
  
  homeStore.$patch({ name: "the shy", age: 24 });
  ```



## 认识和定义Getters

- Getters相当于Store的计算属性

  - 它们可以用 defineStore() 中的 **getters 属性**定义
  - getters中可以**定义接受一个state作为参数的函数**

  ```js
  import { defineStore } from "pinia";
  
  const useHome = defineStore("home", {
    state: () => ({
      name: "shy",
      age: 18,
      count: 10,
    }),
    getters: {
      doubleCount(state) {
        return state.count * 2;
      },
      doubleCountAddOne() {
        // this是 store 实例
        return this.doubleCount + 1;
      },
      printLog() {
        return function (name, age) {
          return `name:${name} age:${age}`;
        };
      },
    },
  });
  
  export default useHome;
  ```



## 访问Getters

- 访问当前store的Getters

  ```js
  import useHome from "@/stores/home";
  
  const homeStore = useHome();
  console.log(homeStore.doubleCount);
  console.log(homeStore.doubleCountAddOne);
  ```

- Getters中访问自己的其他Getters

  - 可以通过**this来访问到当前store实例的所有其他属性**

  ```js
  getters: {
    doubleCountAddOne() {
      return this.doubleCount + 1;
    },
  },
  ```

- 访问其他store的Getters

  ```js
  import useUser from './user'
  getters: {
    showMessage(state) {
      const userStore = useUser()
      return `name:${userStore.name}-count:${state.count}`
    },
  },
  ```



## 认识和定义Actions

- Actions 相当于组件中的 methods

  - 可以使用 defineStore() 中的 **actions 属性**定义，并且它们非常适合定义业务逻辑

- 和getters一样，在action中可以通过**this访问整个store实例**的所有操作

  ```js
  actions: {
    increment() {
      this.count++;
    },
    incrementNum(num) {
  		this.count += num;
    },
  }
  ```

  ```vue
  <template>
    <div class="home">
      <h2>count: {{ homeStore.count }}</h2>
      <button @click="changeState">修改state</button>
    </div>
  </template>
  
  <script setup>
  import useHome from "@/stores/home";
  
  const homeStore = useHome();
  
  function changeState() {
    // homeStore.increment()
    homeStore.incrementNum(10);
  }
  </script>
  ```



# 高级特性

## 认识自定义指令

- 在Vue的模板语法中我们学习过各种各样的指令：v-show、v-for、v-model等等，除了使用这些指令之外，**Vue也允许我们来自定义自己的指令**
  - 注意：在Vue中，**代码的复用和抽取主要还是通过组件**
  - 通常在某些情况下，你需要对**DOM元素进行底层操作**，这个时候就会用到**自定义指令**

- 自定义指令分为两种：

  - 自定义局部指令：组件中通过 **directives 选项**，只能在当前组件中使用
  - 自定义全局指令：app的 **directive 方法**，可以在任意组件中被使用

  ```vue
  <template>
    <div class="app">
      <h1 v-addContent1></h1>
      <h1 v-addContent2></h1>
      <h1 v-addContent3></h1>
    </div>
  </template>
  
  <script>
  export default {
    directives: {
      addContent1: {
        mounted(el) {
          el.textContent = "哈哈哈哈";
        },
      },
    },
  };
  </script>
  
  <script setup>
  // v后面一个字母需要大写 (vaddContent2) 会报错
  const vAddContent2 = {
    mounted(el) {
      el.textContent = "呵呵呵呵";
    },
  };
  </script>
  ```

  ```js
  import { createApp } from "vue";
  import App from "./01_自定义指令/App.vue";
  
  const app = createApp(App);
  
  app.directive("addContent3", {
    mounted(el) {
      el.textContent = "嘿嘿嘿嘿";
    },
  });
  app.mount("#app");
  ```



## 指令的生命周期

- 一个指令定义的对象，Vue提供了如下的几个钩子函数

  - created：在绑定元素的 attribute 或事件监听器被应用之前调用
  - beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用
  - mounted：在绑定元素的父组件被挂载后调用
  - beforeUpdate：在更新包含组件的 VNode 之前调用
  - updated：在包含组件的 VNode **及其子组件的 VNode** 更新后调用
  - beforeUnmount：在卸载绑定元素的父组件之前调用
  - unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次

  ```vue
  <template>
    <div class="app">
      <button @click="counter++">+1</button>
      <button @click="showTitle = false">hide</button>
      <h1 v-if="showTitle" class="title" v-count>当前计数: {{ counter }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const counter = ref(0);
  const showTitle = ref(true);
  
  const vCount = {
    created() {
      console.log("created");
    },
    beforeMount() {
      console.log("beforeMount");
    },
    mounted() {
      console.log("mounted");
    },
    beforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    beforeUnmount() {
      console.log("beforeUnmount");
    },
    unmounted() {
      console.log("unmounted");
    },
  };
  </script>
  ```



## 指令的参数和修饰符

- 如果我们指令需要**接受一些参数或者修饰符**应该如何操作呢

  - argument 是参数的名称
  - AAA.BBB 是修饰符的名称
  - message 是传入的具体的值

- 在我们的生命周期中，我们可以**通过 bindings 获取到对应的内容**

  ```vue
  <template>
    <div class="app">
      <button @click="counter++">+1</button>
  
      <!-- 1.参数-修饰符-值 -->
      <h1 v-replace:argument.AAA.BBB="message">哈哈哈哈</h1>
  
      <!-- 2.价格拼接单位符号 -->
      <h1 v-unit>{{ 1000 }}</h1>
      <h1 v-unit="'$'">{{ 2000 }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const counter = ref(0);
  
  const message = "你好啊, 李银河";
  
  const vReplace = {
    mounted(el, bindings) {
      console.log(bindings);
      el.textContent = bindings.value;
    },
  };
  
  const vUnit = {
    mounted(el, bindings) {
      const defaultText = el.textContent;
      let unit = bindings.value;
      if (!unit) {
        unit = "¥";
      }
      el.textContent = unit + defaultText;
    },
  };
  </script>
  ```



## 认识Teleport

- 在组件化开发中，我们**封装一个组件A**，在**另外一个组件B中使用**
  - 那么**组件A中template的元素**，会**被挂载到组件B中template**的某个位置
  - 最终我们的应用程序会形成**一颗DOM树结构**
- 但是某些情况下，我们希望**组件不是挂载在这个组件树上**的，可能是**移动到Vue app之外的其他位置**
  - 比如**移动到body元素**上，或者我们**有其他的div#app之外的元素**上
  - 这个时候我们就可以**通过teleport来完成**

- Teleport是什么呢

  - 它是一个**Vue提供的内置组件**，类似于react的Portals
  - teleport翻译过来是心灵传输、远距离运输的意思
    - 它有两个属性
      - to：指定将其中的内容移动到的目标元素，可以使用选择器
      - disabled：是否禁用 teleport 的功能

  ```vue
  <template>
    <div class="app">
  
      <div class="content">
        <teleport to="body">
          <h1>哈哈哈哈哈</h1>
        </teleport>
      </div>
  
      <div class="content">
        <teleport to="#abc">
          <h1>呵呵呵呵呵</h1>
        </teleport>
      </div>
      
    </div>
  </template>
  
  <!--index.html-->
  <body>
      <div id="app"></div>
      <div id="abc"></div>
  </body>
  ```



## 异步组件和Suspense

注意：**目前（2021-08-09）Suspense显示的是一个实验性的特性，API随时可能会修改**

- Suspense是一个内置的全局组件，该组件有两个插槽

  - default：如果 default 可以显示，那么显示 default 的内容
  - fallback：如果 default 无法显示，那么会显示 fallback 插槽的内容

  ```vue
  <template>
    <div class="app">
      <suspense>
        <template #default>
          <async-home />
        </template>
        <template #fallback>
          <h1>加载中</h1>
        </template>
      </suspense>
    </div>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from "vue";
  
  let AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"));
  </script>
  
  <!-- AsyncHome.vue -->
  <template>
    <div class="AsyncHome">
      <h2>AsyncHome</h2>
    </div>
  </template>
  ```



## 认识Vue插件

- 通常我们**向Vue全局添加一些功能**时，会采用**插件的模式，它有两种编写方式**
  - 对象类型：一个对象，但是必须包含一个 **install 的函数**，该**函数会在安装插件时**执行
  - 函数类型：一个function，这个函数会在**安装插件时自动执行**

- 插件可以**完成的功能没有限制**，比如下面的几种都是可以的

  - **添加全局方法或者 property**，通过把它们添加到 **config.globalProperties** 上实现
  - **添加全局资源：指令/过滤器/过渡**等
  - 通过**全局 mixin** 来添加**一些组件选项**
  - **一个库，提供自己的 API**，同时**提供上面提到的一个或多个功能**

  ```js
  export default function plugin(app) {
    // 方式一: 传入对象的情况
    app.use({
      install: function (app) {
        console.log("传入对象的install被执行:", app);
      },
    });
    // 方式二: 传入函数的情况
    app.use(function (app) {
      console.log("传入函数被执行:", app);
    });
  }
  
  // main.js
  import { createApp } from "vue";
  import App from "./02_内置组件补充/App.vue";
  import plugin from "./03_安装插件/plugin";
  
  const app = createApp(App);
  
  plugin(app);
  
  app.mount("#app");
  ```



## 认识h函数

- Vue推荐在绝大数情况下**使用模板**来创建你的HTML，然后一些特殊的场景，你真的需要**JavaScript的完全编程的能力**，这个时候你可以使用 **渲染函数** ，它**比模板更接近编译器**
- 前面我们讲解过**VNode和VDOM**的概念：
  - Vue在生成真实的DOM之前，会将**我们的节点转换成VNode**，而VNode组合在一起形成**一颗树结构**，就是**虚拟DOM（VDOM）**
  - 事实上，我们之前编写的 template 中的 HTML 最终也是**使用渲染函数**生成**对应的VNode**
  - 那么，如果你想充分的利用JavaScript的编程能力，我们可以自己来**编写 createVNode 函数**，生成**对应的VNode**

- 那么我们应该怎么来做呢？**使用 h()函数：**
  - **h() 函数**是一个用于**创建 vnode 的一个函数**
  - 其实更准确的命名是 **createVNode() 函数**，但是为了简便在Vue将之**简化为 h() 函数**



## h()函数 如何使用呢

- h()函数 如何使用呢？它接受三个参数
  - 参数一
    - {String | Object | Function} tag
    - 一个 HTML 标签名、一个组件、一个异步组件   或   一个函数式组件。必需的
  - 参数二
    - {Object} props
    - 与 attribute、prop 和事件相对应的对象。这会在模板中用到。可选的
  - 参数三
    - {String | Array | Object} children
    - 子 VNodes, 使用 h() 构建，或使用字符串获取 "文本 VNode" 或者，有插槽的对象。可选的

- 注意事项

  - 如果没有**props**，那么通常可以**将children作为第二个参数传入**
  - 如果会产生歧义，可以**将null作为第二个参数传入**，将**children作为第三个参数传入**

  ```vue
  <!-- vue2 -->
  <script>
    import { h } from "vue";
  
    export default {
      render() {
        return h("div", { className: "app" }, [
          h("h2", { className: "title" }, "我是标题"),
          h("p", { className: "content" }, "我是内容, 哈哈哈"),
        ]);
      },
    };
  </script>
  
  <!-- vue3 setup() -->
  <script>
    import { h, ref } from "vue";
    import Home from "./Home.vue";
  
    export default {
      setup() {
        const counter = ref(0);
  
        const increment = () => {
          counter.value++;
        };
        const decrement = () => {
          counter.value--;
        };
  
        return () =>
        h("div", { className: "app" }, [
          h("h2", null, `当前计数: ${counter.value}`),
          h("button", { onClick: increment }, "+1"),
          h("button", { onClick: decrement }, "-1"),
          h(Home),
        ]);
      },
    };
  </script>
  
  <!-- vue3 script setup -->
  <template>
  	<render />
  </template>
  <script setup>
    import { ref, h } from "vue";
    import Home from "./Home.vue";
  
    const counter = ref(0);
  
    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
  
    const render = () =>
    h("div", { className: "app" }, [
      h("h2", null, `当前计数: ${counter.value}`),
      h("button", { onClick: increment }, "+1"),
      h("button", { onClick: decrement }, "-1"),
      h(Home),
    ]);
  </script>
  ```



## jsx的babel配置

- 如果我们希望**在项目中使用jsx**，那么我们**需要添加对jsx的支持**

  - jsx我们通常会**通过Babel来进行转换**
  - 对于Vue来说，我们只需要在**Babel中配置对应的插件**即可

- Vue CLI

  - npm install @vue/babel-plugin-jsx -D

  ```js
  // .babelrc
  module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins:["@vue/babel-preset-jsx"]
  }
  ```

- Vite

  - npm install @vitejs/plugin-vue-jsx -D

  ```js
  // vite.config.js
  import jsx from "@vitejs/plugin-vue-jsx";
  export default defineConfig({
    plugins: [jsx()]
  });
  ```

  ```vue
  <!-- vue2 -->
  <script lang="jsx">
  export default {
    render() {
      return (
        <div class="app">
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </div>
      );
    },
  };
  </script>
  
  <!-- vue3 setup() -->
  <script lang="jsx">
    import { ref } from 'vue'
    import About from './About.vue'
  
    export default {
      setup() {
        const counter = ref(0)
  
        const increment = () => {
          counter.value++
        }
        const decrement = () => {
          counter.value--
        }
  
  
        return () => (
          <div class="app">
            <h2>当前计数: { counter.value }</h2>
            <button onClick={ increment }>+1</button>
            <button onClick={ decrement }>-1</button>
            <About/>
          </div>
        )
      }
    }
  </script>
  
  <!-- script setup -->
  <template>
    <jsx />
  </template>
  <script lang="jsx" setup>
  import { ref } from "vue";
  import About from "./About.vue";
  
  const counter = ref(0);
  
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };
  
  const jsx = () => (
    <div class="app">
      <h2>当前计数: {counter.value}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <About />
    </div>
  );
  </script>
  ```



## 认识动画

- 在开发中，我们想要给一个元素或者组件的**显示和消失添加某种过渡动画**，可以很好的**增加用户体验**
  - React框架本身并**没有提供任何动画相关的API**，所以在React中使用过渡动画我们需要使用一个**第三方库 react-transitiongroup**
  - Vue中为我们提供**一些内置组件和对应的API**来完成动画，利用它们我们可以**方便的实现过渡动画效果**



## Vue的transition动画

- Vue **提供了 transition 的封装组件**，在下列情形中，可以给任何元素和组件添加进入/离开过渡

  - 条件渲染 (使用 v-if) 条件展示 (使用 v-show)
  - 动态组件
  - 组件根节点

  ```vue
  <template>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">切换</button>
      </div>
  
      <transition name="shy">
        <h2 v-show="isShow">哈哈哈哈</h2>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isShow = ref(false);
  </script>
  
  <style scoped>
  h2 {
    display: inline-block;
  }
  
  .shy-enter-from,
  .shy-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  
  .shy-enter-to,
  .shy-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  
  .shy-enter-active,
  .shy-leave-active {
    transition: all 2s ease;
  }
  </style>
  ```



## transition组件的原理

- 我们会发现，Vue自动给h2元素添加了动画，这是什么原因呢
  - 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理
    - 自动检查**目标元素是否应用了CSS过渡或者动画**，如果有，那么**在恰当的时机添加/删除 CSS类名**
    - 如果 transition 组件提供了**JavaScript钩子函数**，这些钩子函数将在恰当的时机被调用
    - 如果**没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM插入、删除操作将会立即执行**
- 那么都会添加或者删除哪些class呢



## 过渡动画class

- 我们会发现上面提到了很多个class，事实上Vue就是帮助我们在这些class之间来回切换完成的动画
  - v-enter-from：定义进入过渡的开始状态
    - 在元素被插入之前生效，在元素被插入之后的下一帧移除
  - v-enter-active：定义进入过渡生效时的状态
    - 在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数
  - v-enter-to：定义进入过渡的结束状态
    - 在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除
  - v-leave-from：定义离开过渡的开始状态
    - 在离开过渡被触发时立刻生效，下一帧被移除
  - v-leave-active：定义离开过渡生效时的状态
    - 在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数
  - v-leave-to：离开过渡的结束状态
    - 在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被删除)，在过渡/动画完成之后移除



## class添加的时机和命名规则

![](https://cn.vuejs.org/assets/transition-classes.f0f7b3c9.png)

- class的name命名规则如下
  - 如果我们使用的是一个没有 name 的 transition，那么所有的 class 是以 v- 作为默认前缀
  - 如果我们添加了一个 name 属性，比如 transtion name="shy"，那么所有的class会以 shy- 开头



## 过渡css动画

- 前面我们是**通过transition来实现的动画效果**，另外我们也**可以通过animation来实现**

  ```vue
  <template>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">切换</button>
      </div>
  
      <transition name="shy">
        <h2 v-if="isShow">
          要是有些事我没说，地坛，你别以为是我忘了，我什么也没忘，但是有些事只适合收藏。不能说，也不能想，却又不能忘。它们不能变成语言，它们无法变成语言，一旦变成语言就不再是它们了。它们是一片朦胧的温馨与寂寥，是一片成熟的希望与绝望，它们的领地只有两处：心与坟墓。比如说邮票，有些是用于寄信的，有些仅仅是为了收藏。
        </h2>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isShow = ref(false);
  </script>
  
  <style scoped>
  h2 {
    display: inline-block;
  }
  
  .shy-enter-active {
    animation: animation 2s ease;
  }
  
  .shy-leave-active {
    animation: animation 2s ease reverse;
  }
  
  @keyframes animation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
  
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
  
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  ```



## 同时设置过渡和动画（一般不设置）

- Vue为了**知道过渡的完成**，内部是**在监听 transitionend 或 animationend**，到底使用哪一个取决于元素应用的CSS规则

  - 如果我们**只是使用了其中的一个**，那么**Vue能自动识别类型并设置监听**

- 但是如果我们同时使用了过渡和动画呢

  - 并且在这个情况下可能**某一个动画执行结束时**，**另外一个动画还没有结束**
  - 在这种情况下，我们可以**设置 type 属性为 animation 或者 transition** 来明确的告知Vue监听的类型

  ```vue
  <transition type="transition">
  	<h2 v-if="isShow">哈哈哈哈</h2>
  </transition>
  ```



## 显示的指定动画时间

- 我们也可以显示的来**指定过渡的时间**，通过 **duration 属性**

- duration可以设置两种类型的值

  - **number类型**：同时设置进入和离开的过渡时间
  - **object类型**：分别设置进入和离开的过渡时间

  ```vue
  <transition :duration="1000">
  	<h2 v-if="isShow">哈哈哈哈</h2>
  </transition>
  
  <transition :duration="{enter:800, leave:1000}">
  	<h2 v-if="isShow">哈哈哈哈</h2>
  </transition>
  ```



## 过渡的模式mode

- 我们来看当前的动画在两个元素之间切换的时候存在的问题

- 我们会发现 哈哈哈 和 呵呵呵是**同时存在**的

  - 这是因为默认情况下**进入和离开动画**是同时发生的
  - 如果确实我们希望达到这个的效果，那么是没有问题

- 但是如果我们**不希望同时执行进入和离开动画**，那么我们需要设置transition的**过渡模式**

  - in-out: 新元素先进行过渡，完成之后当前元素过渡离开
  - out-in: 当前元素先进行过渡，完成之后新元素过渡进入

  ```vue
  <template>
    <div class="app">
      <div>
        <button @click="isShow = !isShow">切换</button>
      </div>
  
      <transition name="shy" mode="out-in">
        <h2 v-if="isShow">哈哈哈</h2>
        <h2 v-else>呵呵呵</h2>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isShow = ref(true);
  </script>
  
  <style scoped>
  h2 {
    display: inline-block;
  }
  
  /* transition */
  .shy-enter-from,
  .shy-leave-to {
    opacity: 0;
  }
  
  .shy-enter-to,
  .shy-leave-from {
    opacity: 1;
  }
  
  .shy-enter-active {
    animation: shyAnim 2s ease;
    transition: opacity 2s ease;
  }
  
  .shy-leave-active {
    animation: shyAnim 2s ease reverse;
    transition: opacity 2s ease;
  }
  
  @keyframes shyAnim {
    0% {
      transform: scale(0);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  </style>
  ```



## appear初次渲染

- 默认情况下，**首次渲染的时候是没有动画的**，如果我们**希望给他添加上去动画，那么就可以增加另外一个属性appear**

  ```vue
  <transition appear>
  	<h2 v-if="isShow">哈哈哈哈</h2>
  </transition>
  ```



## 认识列表的过渡

- 目前为止，过渡动画我们只要是**针对单个元素或者组件**的

  - 要么是**单个节点**
  - 要么是**同一时间渲染多个节点中的一个**

- 那么如果希望渲染的是**一个列表**，并且**该列表中添加删除数据也希望有动画执行**呢

  - 这个时候我们要**使用 transition-group 组件**来完成

- 使用 transition-group 有如下的特点

  - 默认情况下，它**不会渲染一个元素的包裹器**，但是你可以**指定一个元素并以 tag attribute 进行渲染**
  - **过渡模式不可用**，因为我们不再相互切换特有的元素
  - 内部元素总是**需要提供唯一的 key attribute 值**
  - **CSS 过渡的类将会应用在内部的元素**中，而**不是这个组/容器本身**

  ```vue
  <template>
    <div class="app">
      <button @click="addNumber">添加数字</button>
      <button @click="removeNumber">删除数字</button>
      <button @click="shuffleNumber">打乱数字</button>
  
      <transition-group tag="div" name="shy">
        <template v-for="item in nums" :key="item">
          <span>{{ item }}</span>
        </template>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { shuffle } from "underscore";
  
  const nums = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  const addNumber = () => {
    nums.value.splice(randomIndex(), 0, nums.value.length);
  };
  
  const removeNumber = () => {
    nums.value.splice(randomIndex(), 1);
  };
  
  const shuffleNumber = () => {
    nums.value = shuffle(nums.value);
  };
  
  const randomIndex = () => {
    return Math.floor(Math.random() * nums.value.length);
  };
  </script>
  
  <style scoped>
  span {
    margin-right: 10px;
    display: inline-block;
  }
  
  .shy-enter-from,
  .shy-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  
  .shy-enter-to,
  .shy-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  
  .shy-enter-active,
  .shy-leave-active {
    transition: all 2s ease;
  }
  
  .shy-leave-active {
    position: absolute;
  }
  
  /* 针对其他移动的阶段需要的动画 */
  .shy-move {
    transition: all 2s ease;
  }
  </style>
  ```

- 在上面的案例中**虽然新增的或者删除的节点是有动画**的，但是**对于哪些其他需要移动的节点是没有动画**的

  - 我们可以通过使用一个**新增的 v-move 的class**来完成动画
  - 它会**在元素改变位置的过程**中应用
  - 像之前的名字一样，我们可以**通过name来自定义前缀**



