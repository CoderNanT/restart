// components/section-info/section-info.js
Component({
  properties: {
    title: {
      type: String,
      value: "默认标题",
    },
    content: {
      type: String,
      value: "默认内容",
    },
  },
  externalClasses: ["info"],
  data: {},
  methods: {
    onTitleTap() {
      console.log("title被点击了~");
      this.triggerEvent("titleclick", "哈哈哈哈");
    },
  },
});
