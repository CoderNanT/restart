<template>
  <h2>showInfo</h2>
</template>

<script>
export default {
  setup() {
    function showInfoFoo() {
      console.log("showInfo foo function");
    }

    return { showInfoFoo };
  },
};
</script>
