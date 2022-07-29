<template>
  <div class="home">
    <button @click="nameBtnClick1">发起action修改name1</button>
    <button @click="nameBtnClick2">发起action修改name2</button>
    <h1>name: {{ $store.state.name }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    nameBtnClick1() {
      this.$store.dispatch("changeNameAction", "哈哈哈哈").then((res) => {
        console.log(res + "1");
      });
    },
  },
};
</script>

<script setup>
import { useStore } from "vuex";
const store = useStore();

function nameBtnClick2() {
  store.dispatch("changeNameAction", "呵呵呵呵").then((res) => {
    console.log(res + "2");
  });
}
</script>
