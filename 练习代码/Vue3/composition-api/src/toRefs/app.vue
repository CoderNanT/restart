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
