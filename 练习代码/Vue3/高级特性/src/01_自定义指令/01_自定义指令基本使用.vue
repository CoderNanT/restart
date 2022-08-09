<template>
  <div class="app">
    <h1 v-addContent1></h1>
    <h1 v-addContent2></h1>
    <h1 v-addContent3></h1>
  </div>
</template>

<script>
export default {
  directives: {
    addContent1: {
      mounted(el) {
        el.textContent = "哈哈哈哈";
      },
    },
  },
};
</script>

<script setup>
// v后面一个字母需要大写 (vaddContent2) 会报错
const vAddContent2 = {
  mounted(el) {
    el.textContent = "呵呵呵呵";
  },
};
</script>
