import { createStore } from "vuex";
import home from "./modules/home";

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "shy",
      age: 24,
      level: 100,
    };
  },
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    // 2.在该getters属性中, 获取其他的getters
    message(state, getters) {
      return `name:${state.name} level:${state.level} counter:${getters.doubleCounter}`;
    },
    // 3.getters是可以返回一个函数的, 调用这个函数可以传入参数
    printLog() {
      return function (name, level) {
        return `name:${name} level:${level}`;
      };
    },
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload;
    },
    incrementLevel(state) {
      state.level++;
    },
  },
  actions: {
    changeNameAction(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("changeName", payload);
          resolve("异步操作完成");
        }, 0);
      });
    },
  },
  modules: {
    home,
  },
});

export default store;
