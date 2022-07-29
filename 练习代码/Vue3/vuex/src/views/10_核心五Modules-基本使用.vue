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
