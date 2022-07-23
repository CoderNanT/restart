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
