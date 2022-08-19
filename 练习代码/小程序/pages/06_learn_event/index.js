// pages/06_learn_event/index.js
Page({
  data: {},
  onOuterViewTap(event) {
    // 1.target触发事件的组件
    // 2.currentTarget处理事件的组件
    console.log("orange：target", event.target);
    console.log("orange：currentTarget", event.currentTarget);

    // 3.获取自定义属性: name
    const name = event.currentTarget.dataset.name;
    console.log(name);
  },
  onInnerViewTap(event) {
    console.log("red：target", event.target);
    console.log("red：currentTarget", event.currentTarget);
  },
  // 监听触摸事件
  onTouchTap(event) {
    console.log("tap:", event);
  },
  onLongPress(event) {
    console.log("long:", event);
  },
  onTouchEnd(event) {
    console.log("end:", event);
  },
  // 监听事件, 并且传递参数
  onArgumentsTap(event) {
    console.log("onArgumentsTap:", event);
    const { name, age, height } = event.currentTarget.dataset;
    console.log(name, age, height);
  },
  // 捕获和冒泡过程
  onView1CaptureTap() {
    console.log("onView1CaptureTap");
  },
  onView2CaptureTap() {
    console.log("onView2CaptureTap");
  },
  onView3CaptureTap() {
    console.log("onView3CaptureTap");
  },
  onView1Tap() {
    console.log("onView1Tap");
  },
  onView2Tap() {
    console.log("onView2Tap");
  },
  onView3Tap() {
    console.log("onView3Tap");
  },
  // mark的数据传递
  onMarkTap(event) {
    const data1 = event.target.dataset;
    console.log("target", data1);

    const data2 = event.mark;
    console.log("mark", data2);
  },
});
