<template>
  <div class="home">
    <!-- 1.在模板中直接使用多个状态 -->
    <h1>在模板中直接使用多个状态</h1>
    <h1>name: {{ $store.state.name }}</h1>
    <h1>level: {{ $store.state.level }}</h1>

    <hr />

    <!-- 2.计算属性(映射状态: 数组语法) -->
    <h1>计算属性(映射状态: 数组语法)</h1>
    <h1>name: {{ name }}</h1>
    <h1>level: {{ level }}</h1>

    <hr />

    <!-- 3.计算属性(映射状态: 对象语法) -->
    <h1>计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ renameName }}</h1>
    <h1>level: {{ renameLevel }}</h1>

    <hr />

    <!-- 4.setup计算属性(映射状态: 对象语法) -->
    <h1>setup计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ computedName }}</h1>
    <h1>level: {{ computedLevel }}</h1>

    <hr />

    <!-- 5.setup计算属性(映射状态: 对象语法) -->
    <h1>setup计算属性(映射状态: 对象语法)</h1>
    <h1>name: {{ toRefsName }}</h1>
    <h1>level: {{ toRefsLevel }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["name", "level"]),
    ...mapState({
      renameName: (state) => state.name,
      renameLevel: (state) => state.level,
    }),
  },
};
</script>

<script setup>
import { computed, toRefs } from "vue";
import { mapState, useStore } from "vuex";

const store = useStore();
// 1.一步步完成
const { name: mapName, level: mapLevel } = mapState(["name", "level"]);
const computedName = computed(mapName.bind({ $store: store }));
const computedLevel = computed(mapLevel.bind({ $store: store }));

// 2.直接对store.state进行解构(推荐)
const { name: toRefsName, level: toRefsLevel } = toRefs(store.state);
</script>
