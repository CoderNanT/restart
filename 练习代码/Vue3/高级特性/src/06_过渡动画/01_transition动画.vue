<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <transition name="shy">
      <h2 v-show="isShow">哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(false);
</script>

<style scoped>
h2 {
  display: inline-block;
}

.shy-enter-from,
.shy-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.shy-enter-to,
.shy-leave-from {
  opacity: 1;
  transform: scale(1);
}

.shy-enter-active,
.shy-leave-active {
  transition: all 2s ease;
}
</style>
