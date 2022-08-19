// pages/index/index.js
const app = getApp();
Page({
  data: {
    token: app.globalData.token,
    pages: [
      { name: "01_注册页面", path: "/pages/01_register_page/index" },
      { name: "02_内置组件", path: "/pages/02_common_component/index" },
      { name: "03_学习WXSS", path: "/pages/03_learn_wxss/index" },
      { name: "04_学习WXML", path: "/pages/04_learn_wxml/index" },
      { name: "05_学习WXS", path: "/pages/05_learn_wxs/index" },
      { name: "06_学习event", path: "/pages/06_learn_event/index" },
    ],
  },
  onBtnClick(event) {
    wx.navigateTo({
      url: event.target.dataset.item.path,
    });
  },
});
