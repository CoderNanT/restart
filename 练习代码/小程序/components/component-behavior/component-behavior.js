// components/component-behavior/component-behavior.js
import { counterBehavior } from "../../behaviors/counter";

Component({
  behaviors: [counterBehavior],
  lifetimes: {
    created() {
      console.log("组件被创建created");
    },
    attached() {
      console.log("组件被添加到组件树中attached");
    },
    detached() {
      console.log("组件从组件树中被移除detached");
    },
  },
  pageLifetimes: {
    show() {
      console.log("page show");
    },
    hide() {
      console.log("page hide");
    },
  },
});
