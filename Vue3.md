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



