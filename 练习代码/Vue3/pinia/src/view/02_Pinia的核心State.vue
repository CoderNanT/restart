<template>
  <div class="home">
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
import useHome from "@/stores/home";
import { storeToRefs } from "pinia";

const homeStore = useHome();
const { name, age } = storeToRefs(homeStore);

function changeState() {
  // 1.一个个修改状态
  // homeStore.name = "the shy"
  // homeStore.age = 24

  // 2.一次性修改多个状态
  homeStore.$patch({ name: "the shy", age: 24 });
}

function resetState() {
  homeStore.$reset();
}
</script>
