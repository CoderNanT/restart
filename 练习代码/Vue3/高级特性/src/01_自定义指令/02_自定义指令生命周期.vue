<template>
  <div class="app">
    <button @click="counter++">+1</button>
    <button @click="showTitle = false">hide</button>
    <h1 v-if="showTitle" class="title" v-count>当前计数: {{ counter }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const showTitle = ref(true);

const vCount = {
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
