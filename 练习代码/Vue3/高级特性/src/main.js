import { createApp } from "vue";
// import App from "./01_自定义指令/App.vue";
// import App from "./02_内置组件补充/App.vue";
// import plugin from "./03_安装插件/plugin";
// import App from "./04_Render函数/App.vue";
// import App from "./05_JSX的语法/App.vue";
import App from "./06_过渡动画/App.vue";

const app = createApp(App);

app.directive("addContent3", {
  mounted(el) {
    el.textContent = "嘿嘿嘿嘿";
  },
});

// plugin(app);

app.mount("#app");
