<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <h1>Store Name: {{ $store.state.name }}</h1>
    <h1>Store Level: {{ $store.state.level }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    changeName() {
      this.$store.commit("changeName", "the shy");
    },
  },
};
</script>

<script setup>
import { useStore } from "vuex";
const store = useStore();

function incrementLevel() {
  store.commit("incrementLevel");
}
</script>
