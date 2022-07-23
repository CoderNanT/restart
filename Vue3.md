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





