<template>
  <div class="home">
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
    <button @click="incrementAge">incrementAge + 1</button>
  </div>
</template>

<script setup>
import useHome from "@/stores/home";
import { toRefs } from "vue";
import { storeToRefs } from "pinia";

let homeStore = useHome();
// let { name, age } = homeStore;
// let { name, age } = toRefs(homeStore);
let { name, age } = storeToRefs(homeStore);

function incrementAge() {
  homeStore.age++;
}
</script>
