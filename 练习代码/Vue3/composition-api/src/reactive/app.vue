<template>
  <div>当前信息: {{ info }} - {{ address }}</div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    // 定义复杂类型的数据
    const info = reactive({
      name: "the shy",
      age: "18",
    });

    const address = reactive("上海"); // value cannot be made reactive: 上海

    return { info, address };
  },
};
</script>
