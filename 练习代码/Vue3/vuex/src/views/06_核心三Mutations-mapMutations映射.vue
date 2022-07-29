<template>
  <div class="home">
    <button @click="changeName('the shy')">修改name</button>
    <button @click="increment">递增level</button>
    <button @click="incrementLevel">递增level</button>
    <h1>Store Name: {{ $store.state.name }}</h1>
    <h1>Store Level: {{ $store.state.level }}</h1>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeName"]),
    ...mapMutations({
      increment: "incrementLevel",
    }),
  },
};
</script>

<script setup>
import { useStore } from "vuex";
const store = useStore();

const { incrementLevel: incrementLevelMap } = mapMutations(["incrementLevel"]);

const incrementLevel = incrementLevelMap.bind({ $store: store });
</script>
