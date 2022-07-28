<template>
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user/100">用户100</router-link>
      <router-link to="/user/101">用户101</router-link>
      <router-link to="/vip">VIP</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.nav a,
button,
input {
  margin-right: 10px;
}

span {
  color: red;
}
</style>
