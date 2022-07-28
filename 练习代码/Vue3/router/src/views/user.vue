<template>
  <h1>User - {{ $route.params.userId }}</h1>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.userId);
</script>
