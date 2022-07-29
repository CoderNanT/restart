<template>
  <div class="home">
    <button @click="nameBtnClick1('哈哈哈哈')">发起action修改name1</button>
    <button @click="nameBtnClick2('呵呵呵呵')">发起action修改name2</button>
    <h1>name: {{ $store.state.name }}</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      nameBtnClick1: "changeNameAction",
    }),
  },
};
</script>

<script setup>
import { useStore, mapActions } from "vuex";
const store = useStore();

const { changeNameAction: changeNameActionMap } = mapActions([
  "changeNameAction",
]);

const nameBtnClick2 = changeNameActionMap.bind({ $store: store });
</script>
