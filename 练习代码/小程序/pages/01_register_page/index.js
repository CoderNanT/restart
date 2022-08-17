// pages/01_register_page/index.js
Page({
  data: {
    counter: 100,
    info: {},
  },
  onLoad() {
    setTimeout(() => {
      this.setData({ info: { name: "shy", age: 18 } });
    }, 500);
  },
  increment() {
    this.setData({
      counter: this.data.counter + 1,
    });
  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1,
    });
  },
  onPullDownRefresh() {
    console.log("下拉刷新");
  },
  onReachBottom(){
    console.log("上拉加载更多");
  },
  onPageScroll() {
    console.log("页面滚动");
  },
});
