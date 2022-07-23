<template>
  <h1>{{ fullName }}</h1>
  <button @click="setFullname">设置fullname</button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const names = reactive({ firstName: "the", lastName: "shy" });

    // get 写法
    // const fullName = computed(() => {
    //   return names.firstName + " " + names.lastName
    // })

    // 完整写法
    const fullName = computed({
      set(newValue) {
        const tempNames = newValue.split(" ");
        names.firstName = tempNames[0];
        names.lastName = tempNames[1];
      },
      get() {
        return names.firstName + " " + names.lastName;
      },
    });

    console.log(fullName); // ComputedRefImpl { ... }

    function setFullname() {
      fullName.value = "我的 shy";
    }

    return { names, fullName, setFullname };
  },
};
</script>
