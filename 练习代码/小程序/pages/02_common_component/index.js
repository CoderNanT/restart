// pages/02_common_component/index.js
Page({
  data: {
    message: "Hello World",
    viewColors: ["red", "blue", "green", "skyblue", "purple", "pink"],
  },
  getUserInfo(event) {
    // 调用API, 获取用户的信息
    // 1.早期小程序的API, 基本都是不支持Promise风格
    // 2.后期小程序的API, 基本都开始支持Promise风格
    wx.getUserProfile({
      desc: "desc",
      // success: (res) => {
      //   console.log(res);
      // }
    }).then((res) => {
      console.log(res);
    });
  },
  getPhoneNumber(event) {
    console.log(event);
  },
});
