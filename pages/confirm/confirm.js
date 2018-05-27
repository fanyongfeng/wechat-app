//confirm.js
var app = getApp();
Page({
  data: {
    receive_name: '喵喵',
    address_detail: '北京市海淀区113号5单元121号',
    dates1: '2017-01-01',
    dates2: '2017-02-14',
    dates3: '2017-03-07'
  },
  onReady: function () {
    this.setData({
      dates1: app.selectTime.dates1,
      dates2: app.selectTime.dates2,
      dates3: app.selectTime.dates3,
      receive_name: app.receiveDetail.receiveCustom,
      address_detail: app.receiveDetail.address + app.receiveDetail.street
    });
    wx.request({
      url: '/api/shopping/buyer/doauth/',
      method: 'post',
      datatype: 'json',
      data: {
        para: {
          "redirect": "",
          "sellerId": "286",
          "channelId": "839"
        }
      },
      success: function (res) {
        debugger
      },
      fail: function (err) {
        console.log(err);
      }
    });
  },
  goback: function () {
    wx.navigateBack();
  },
  payByself: function () {
    var self = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: '/api/shopping/order/create',
      method: 'post',
      datatype: 'json',
      data: {
        para: {
          "order": [{
            "commSellerId": "228",
            "fareMoney": 1,
            "goods": [{
              "barCode": "",
              "buyVol": 1,
              "commSkuId": "sku98703",
              "commsellerId": "228",
              "fareMoney": 1,
              "goodsId": "gd28872",
              "goodsName": "房改房【江浙沪1山东2全国3新疆4】",
              "isFarefree": 0,
              "limitVol": 0,
              "moneyUnit": "CNY",
              "picUrl": "http://imgcache9.img.cn/FukkMqckYshguBj_mfjv8CV1D-7q",
              "retailPrice": 1,
              "skuContent": "测试:1",
              "skuId": "sku98703",
              "stocks": 20,
              "supplyPrice": 1,
              "supplySellerId": "228",
              "supplySkuId": "sku98703",
              "retailPriceTxt": "0.01"
            }],
            "goodsNum": 1,
            "groupName": "发货1",
            "remarkChecked": 0,
            "remarkContent": "选填，可填写您和卖家达成一致的要求",
            "supplySellerId": "228",
            "totalPrice": 2,
            "totalPriceTxt": "0.02"
          }],
          "marketing": [{
            "type": "loyaltyPoints",
            "value": 0
          }, {
            "type": "coupon",
            "value": 0
          }, {
            "type": "couponcode",
            "value": 0
          }],
          "payTypeList": [{
            "payType": 1,
            "paySubType": 2
          }],
          "receive": {
            "addrNo": 36759,
            "cityNo": 73,
            "receiver": "樊勇锋",
            "receiverAddr": "上海市_上海市_嘉定区_舍得放手",
            "receiverPhone": "18616386349"
          },
          "buyerComment": {
            "228_228": {
              "remarkComment": ""
            }
          },
          "info": {
            "entryId": ""
          },
          "returnUrl": ""
        }
      },
      success: function (res) {
        debugger
      },
      fail: function (err) {
        console.log(err);
      },
      complete: wx.hideNavigationBarLoading
    });
  }
});