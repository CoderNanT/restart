<template>
  <div class="home">
    <h2>count: {{ homeStore.count }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import useHome from "@/stores/home";

const homeStore = useHome();

function changeState() {
  // homeStore.increment()
  homeStore.incrementNum(10);
}
</script>
