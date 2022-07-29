<template>
  <div class="home">
    <h1>doubleCounter: {{ doubleCounter }}</h1>
    <h1>info: {{ info }}</h1>
    <h1>printLog: {{ printLog("the shy", 100) }}</h1>

    <hr />

    <h1>computedDoubleCounter: {{ computedDoubleCounter }}</h1>
    <h1>toRefsMessage: {{ toRefsMessage }}</h1>
    <h1>computedPrintLog: {{ computedPrintLog("the shy", 100) }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCounter"]),
    ...mapGetters(["printLog"]),
    ...mapGetters({
      info: "message",
    }),
  },
};
</script>

<script setup>
import { computed, toRefs } from "vue";
import { mapGetters, useStore } from "vuex";

const store = useStore();

// 1.使用mapGetters
const { doubleCounter: doubleCounterMap } = mapGetters(["doubleCounter"]);
const computedDoubleCounter = computed(doubleCounterMap.bind({ $store: store }));

// 2.直接解构, 并且包裹成ref
const { message: toRefsMessage } = toRefs(store.getters);

// 3.针对某一个getters属性使用computed
const computedPrintLog = computed(() => store.getters.printLog);
</script>
