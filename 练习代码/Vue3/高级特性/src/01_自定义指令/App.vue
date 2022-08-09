<template>
  <div class="app">
    <button @click="counter++">+1</button>

    <!-- 1.参数-修饰符-值 -->
    <h1 v-replace:argument.AAA.BBB="message">哈哈哈哈</h1>

    <!-- 2.价格拼接单位符号 -->
    <h1 v-unit>{{ 1000 }}</h1>
    <h1 v-unit="'$'">{{ 2000 }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const message = "你好啊, 李银河";

const vReplace = {
  mounted(el, bindings) {
    console.log(bindings);
    el.textContent = bindings.value;
  },
};

const vUnit = {
  mounted(el, bindings) {
    const defaultText = el.textContent;
    let unit = bindings.value;
    if (!unit) {
      unit = "¥";
    }
    el.textContent = unit + defaultText;
  },
};
</script>
