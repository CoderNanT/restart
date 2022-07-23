<template>
  <h1>AppContent: {{ message }}</h1>
  <button @click="changeMessage">修改message</button>
  <show-info
    name="shy"
    :age="18"
    ref="showInfoRef"
    @info-btn-click="infoBtnClick"
  >
  </show-info>
</template>

<script setup>
import { ref, onMounted } from "vue";
import showInfo from "./showInfo.vue";

const message = ref("Hello World");

function changeMessage() {
  message.value = "你好啊, 李银河!";
}

function infoBtnClick(payload) {
  console.log("监听到showInfo内部的点击:", payload);
}

const showInfoRef = ref();
onMounted(() => {
  showInfoRef.value.foo();
});
</script>
