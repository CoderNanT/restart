<template>
  <h1>
    欢迎你 <span>{{ userName }}</span> VIP
  </h1>
  <button @click="logout">退出登录</button>
</template>

<script setup>
import { ref } from "vue";

const userName = ref();

userName.value = localStorage.getItem("userName");

function logout() {
  localStorage.removeItem("userName");
}
</script>
