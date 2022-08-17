// app.js
App({
  // 见名知意
  globalData: {
    token: "globalData - token",
  },
  onLaunch() {
    // 1.读取本地数据
    const token = wx.getStorageSync("token");
    this.globalData.token = token;

    // 2.登录逻辑
    wx.login({ success() {} });

    // 3.请求数据
    wx.request({ url: "url" });
  },
});
