<template>
  <div class="home">
    <h1>doubleCounter: {{ $store.getters.doubleCounter }}</h1>
    <h1>message: {{ $store.getters.message }}</h1>

    <h1>printLog: {{ $store.getters.printLog("ning", 100) }}</h1>
    <h1>printLog: {{ $store.getters.printLog("the shy", 100) }}</h1>
  </div>
</template>

<script setup></script>
