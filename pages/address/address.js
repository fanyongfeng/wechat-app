//address.js
var app = getApp();
Page({
  data: {
    dates1: '2017-01-01',
    dates2: '2017-02-14',
    dates3: '2017-03-07',
    switchData: [
      {
        id: 1,
        isOn: false,
        class: 'pull-right'
      }, {
        id: 2,
        isOn: false,
        class: 'pull-right'
      }
    ],
    provinceList: [],
    cityList: [],
    receiveCustom: '',
    mobileNo: '',
    street: '',
    provinceIndex: 0,
    cityIndex: 0,
    areaIndex: 0
  },
  //获取全国城市列表
  onLoad: function () {
    this.getProvince();
  },
  //CheckBoxEvent
  checkboxChange: function (e) {
    console.log('收货方提供地址', e.detail.value);
    this.setData({addDisabled: true});
  },
  //DateEvent
  bindDateChange1: function (e) {
    this.setData({dates1: e.detail.value});
  },
  bindDateChange2: function (e) {
    this.setData({dates2: e.detail.value});
  },
  bindDateChange3: function (e) {
    this.setData({dates3: e.detail.value});
  },
  //SwitchEvent
  tapSwitch: function (event) {
    var index = event.currentTarget.id - 1;
    this.data.switchData[index].isOn = !this.data.switchData[index].isOn;
    this.setData({switchData: this.data.switchData});
  },
  //PayButtonEvent
  btnPay: function (e) {
    app.selectTime = {
      dates1: this.data.dates1,
      dates2: this.data.dates2,
      dates3: this.data.dates3
    };
    var data = this.data;
    app.receiveDetail = {
      address: data.provinceList[data.provinceIndex] + data.cityList[data.cityIndex].name + data.areaList[data.areaIndex],
      receiveCustom: data.receiveCustom,
      mobileNo: data.mobileNo,
      street: data.street
    };
    if (!app.receiveDetail.address || !app.receiveDetail.mobileNo || !app.receiveDetail.street) {
      wx.showModal({title: '错误提示', content: '请讲收获信息填写完整'});
    }
    // return false;
    wx.navigateTo({url: '../confirm/confirm'});
  },
  getProvince: function () {
    var self = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: '/api/configmng/geo',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        self.renderProvince(res && res.data);
      },
      fail: function (err) {
        console.log(err);
      },
      complete: wx.hideNavigationBarLoading
    });
  },
  bindProvinceChange: function (e) {
    this.setData({provinceIndex: e.detail.value});
    this.getCityList(this.data.provinceList[e.detail.value]);
  },
  renderProvince: function (res) {
    console.log(res);
    var provinceList = [];
    var data = res.data;
    if (data) {
      for (var index in data) {
        provinceList.push(data[index].name);
      }
      this.setData({provinceList: provinceList});
      this.getCityList(provinceList[0]);
    }
  },
  getCityList: function (provinceName) {
    var self = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: '/api/configmng/geo',
      method: 'GET',
      dataType: 'json',
      data: {
        para: JSON.stringify({provinceName: provinceName})
      },
      success: function (res) {
        self.renderCity(res && res.data);
      },
      fail: function (err) {
        console.log(err);
      },
      complete: wx.hideNavigationBarLoading
    });
  },
  renderCity: function (res) {
    console.log(res);
    var data = res.data;
    if (data) {
      this.setData({cityList: data});
      this.getAreaList(data[0].cityNo);
    }
  },
  bindCityChange: function (e) {
    this.setData({cityIndex: e.detail.value});
    this.getAreaList(this.data.cityList[e.detail.value].cityNo);
  },
  getAreaList: function (cityNo) {
    var self = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: '/api/configmng/geo',
      method: 'GET',
      dataType: 'json',
      data: {
        para: JSON.stringify({cityNo: cityNo})
      },
      success: function (res) {
        self.renderArea(res && res.data);
      },
      fail: function (err) {
        console.log(err);
      },
      complete: wx.hideNavigationBarLoading
    });
  },
  renderArea: function (res) {
    console.log(res);
    var areaList = [];
    var data = res.data;
    if (data) {
      for (var index in data) {
        areaList.push(data[index].name);
      }
      this.setData({areaList: areaList});
    }
  },
  bindAreaChange: function (e) {
    this.setData({areaIndex: e.detail.value});
  },
  receiveCustomChange: function (e) {
    this.setData({receiveCustom: e.detail.value});
  },
  mobileNoChange: function (e) {
    this.setData({mobileNo: e.detail.value});
  },
  streetChange: function (e) {
    this.setData({street: e.detail.value});
  }
});
