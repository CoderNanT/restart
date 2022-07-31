<template>
  <div class="home">
    <h1>doubleCount: {{ homeStore.doubleCount }}</h1>
    <h1>doubleCountAddOne: {{ homeStore.doubleCountAddOne }}</h1>
    <h1>printLog: {{ homeStore.printLog("shy", 666) }}</h1>
  </div>
</template>

<script setup>
import useHome from "@/stores/home";

const homeStore = useHome();
</script>
