<template>
  <h1>Home</h1>
  <div class="nav">
    <router-link to="/home/product">Product</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-link to="/home/vip">Vip</router-link>
  </div>
  <button @click="ProductClick">Product</button>
  <button @click="MessageClick">Message</button>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function ProductClick() {
  router.push("/home/product");
}
function MessageClick() {
  router.push({ path: "/home/message", query: { name: "shy", age: 24 } });
}
</script>
