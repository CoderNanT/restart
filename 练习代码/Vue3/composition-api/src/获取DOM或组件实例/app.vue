<template>
  <!-- 1.获取元素 -->
  <h1 ref="titleRef">我是标题</h1>
  <button ref="btnRef">按钮</button>

  <!-- 2.获取组件实例 -->
  <show-info ref="showInfoRef"></show-info>

  <button @click="getElements">获取元素</button>
</template>

<script>
import { ref } from "vue";
import showInfo from "./showInfo.vue";

export default {
  components: { showInfo },
  setup() {
    const titleRef = ref();
    const btnRef = ref();
    const showInfoRef = ref();

    function getElements() {
      console.log(titleRef.value);
      console.log(btnRef.value);
      console.log(showInfoRef.value);

      showInfoRef.value.showInfoFoo();
    }

    return { titleRef, btnRef, showInfoRef, getElements };
  },
};
</script>
