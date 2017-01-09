//detail.js
//获取应用实例
var app = getApp();
Page({
  data: {
    goodInfo: {
      skuList: [{
        skuId: 115,
        selected: false,
      }]
    },
    skuList: [{
        skuId: 115,
        selected: false,
        name: '仅此一次',
        tip: ''
    }, {
        skuId: 116,
        selected: false,
        name: '三个月(249/月)',
        tip: ''
    }, {
        skuId: 117,
        selected: false,
        name: '六个月(239/月)',
        tip: ''
    }, {
        skuId: 118,
        selected: false,
        name: '一年(229/月)',
        tip: '最优惠！'
    }],
    showBuy: false
  },
  selectsku: function(e) {
    console.log(e);
    var skuId = e.target.dataset.skuid;
    var goodInfo = this.data.skuList;
    for (var item in goodInfo) {
      if (goodInfo[item].skuId === skuId) {
        goodInfo[item].selected = true;
      } else {
        goodInfo[item].selected = false;
      }
    }
    this.setData({
      skuList: goodInfo,
      showBuy: true
    });
  },
  buyNow: function(e) {

  }
});