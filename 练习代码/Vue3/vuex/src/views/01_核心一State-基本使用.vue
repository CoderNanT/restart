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
