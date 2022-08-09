<template>
  <div class="app">
    <suspense>
      <template #default>
        <async-home />
      </template>
      <template #fallback>
        <h1>加载中</h1>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

let AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"));
</script>
