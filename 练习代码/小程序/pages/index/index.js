// pages/index/index.js
const app = getApp();
Page({
  data: {
    token: app.globalData.token,
    pages: [
      { name: "01_注册页面", path: "/pages/01_register_page/index" },
      { name: "02_内置组件", path: "/pages/02_common_component/index" },
    ],
  },
  onBtnClick(event) {
    wx.navigateTo({
      url: event.target.dataset.item.path,
    });
  },
});
