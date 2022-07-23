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
