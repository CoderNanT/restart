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
