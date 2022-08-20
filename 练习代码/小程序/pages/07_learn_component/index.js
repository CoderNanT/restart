// pages/07_learn_component/index.js
Page({
  onSectionTitleClick(event) {
    console.log(event);
  },
  getTheInstance() {
    // 1.获取对应的组件实例对象
    const sectionInfo = this.selectComponent(".section-info");

    // 2.调用组件实例的方法
    sectionInfo.onTitleTap();
  },
});
