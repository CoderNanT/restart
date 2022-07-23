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
