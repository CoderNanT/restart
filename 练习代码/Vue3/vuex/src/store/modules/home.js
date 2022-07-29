const count = {
  namespaced: true,
  state() {
    return {
      count: 99,
    };
  },
  mutations: {
    incrementCount(state, payload) {
      state.count++;
    },
  },
  getters: {
    doubleCount(state, getters, rootState) {
      // console.log(rootState);
      // Proxy {counter: 100, name: 'shy', age: 24, level: 100, home: {count: 100}}
      return state.count + rootState.counter;
    },
  },
  actions: {
    incrementCountAction(context, payload) {
      // console.log(context);
      /* 
        commit: ƒ boundCommit(type, payload, options)
        dispatch: ƒ boundDispatch(type, payload)
        getters: {}
        rootGetters: {}
        rootState: Proxy {counter: 100, name: 'shy', age: 24, level: 100, home: {count: 100}}
        state: Proxy {count: 100}
      */
      context.commit("incrementCount");
    },
    changeRootName(context, payload) {
      context.commit("changeName", payload, { root: true });
    },
  },
};

export default count;
