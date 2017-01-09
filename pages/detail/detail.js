//detail.js
//获取应用实例
var app = getApp();
Page({
  data: {
  },
//event
  address: function() {
  wx.navigateTo({
    url: '../address/address'
  })
 }
});
