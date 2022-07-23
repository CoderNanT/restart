<template>
  <h1>showInfo: {{ name }}-{{ age }}</h1>
  <button @click="showInfoBtnClick">showInfoButton</button>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "默认值" },
  age: { type: Number, default: 0 },
});

const emits = defineEmits(["infoBtnClick"]);
function showInfoBtnClick() {
  emits("infoBtnClick", "showInfo内部发生了点击");
}

function foo() {
  console.log("foo function");
}
defineExpose({ foo });
</script>
