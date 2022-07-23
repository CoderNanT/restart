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
