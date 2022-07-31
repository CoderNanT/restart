import { defineStore } from "pinia";

const useHome = defineStore("home", {
  state: () => ({
    name: "shy",
    age: 18,
    count: 10,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    doubleCountAddOne() {
      // this是 store 实例
      return this.doubleCount + 1;
    },
    printLog() {
      return function (name, age) {
        return `name:${name} age:${age}`;
      };
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementNum(num) {
      this.count += num;
    },
  },
});

export default useHome;
