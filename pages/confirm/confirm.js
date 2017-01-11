//confirm.js
var app = getApp();
Page({
  data: {
    receive_name: '喵喵',
    address_detail: '北京市海淀区113号5单元121号',
    dates1: '2017-01-01',
    dates2: '2017-02-14',
    dates3: '2017-03-07',
  },
  onReady: function() {
    this.setData({
      dates1: app.selectTime.dates1,
      dates2: app.selectTime.dates2,
      dates3: app.selectTime.dates3,
    });
  },
  goback: function() {
    wx.navigateBack();
  }
});