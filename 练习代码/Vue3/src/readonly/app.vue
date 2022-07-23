<template>
  <div>ref - {{ ref_count }}</div>
  <button @click="increment">+1</button>

  <hr />

  <div>readonly - {{ readonly_count }}</div>
  <button @click="readonly_increment">+1</button>
</template>

<script>
import { ref, readonly, reactive } from "vue";

export default {
  setup() {
    let ref_count = ref(1);
    let reactive_count = reactive({ count: 1 });
    let object = { count: 1 };

    const increment = () => {
      ref_count.value++;
      reactive_count.count++;
      object.count++;
    };

    // let readonly_count = readonly(ref_count);

    // let readonly_count = readonly(reactive_count);
    // let readonly_count = readonly(object);

    let readonly_count = readonly(1);

    const readonly_increment = () => {
      // readonly_count.value++;

      // readonly_count.count++;

      readonly_count++;
      console.log(readonly_count);
    };
    return { ref_count, increment, readonly_count, readonly_increment };
  },
};
</script>
