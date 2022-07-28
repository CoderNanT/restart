<template>
  <h1>请你登录账号</h1>
  <input type="text" v-model="userName" />
  <button @click="login">登录</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let userName = ref("");
let router = useRouter();

function login() {
  localStorage.setItem("userName", userName.value);
  router.push("/vip");
}
</script>
