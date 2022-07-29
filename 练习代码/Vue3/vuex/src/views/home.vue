<template>
  <div class="home">
    <h1>{{ $store.state.name }}</h1>
    <h1>{{ $store.state.home.count }}</h1>
    <h1>{{ $store.getters["home/doubleCount"] }}</h1>
    <button @click="increment">count++</button>
    <button @click="changeRootName">changeRootName</button>
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

function increment() {
  store.dispatch("home/incrementCountAction");
}
function changeRootName() {
  store.dispatch("home/changeRootName", "the shy");
}
</script>
