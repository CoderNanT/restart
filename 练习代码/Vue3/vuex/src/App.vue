<template>
  <div class="app">
    <h1>App {{ $store.state.counter }}</h1>
    <hr />
    <Home></Home>
  </div>
</template>

<script setup>
import Home from "./views/home.vue";
</script>
