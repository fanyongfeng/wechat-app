//address.js
var app = getApp();
Page({
    data:{
        dates1:'2017-01-01',
        dates2:'2017-02-14',
        dates3:'2017-03-07',
        addDisabled:false,
        greetingDisabled:true
    },
    //CheckBoxEvent
    checkboxChange:function(e){
        console.log('收货方提供地址',e.detail.value)
        this.setData({
            addDisabled:true
        })        
    },
    //DateEvent
    bindDateChange1: function(e) {
        this.setData({
            dates1: e.detail.value
        })
    },
    bindDateChange2: function(e) {
        this.setData({
            dates2: e.detail.value
        })
    },
    bindDateChange3: function(e) {
        this.setData({
            dates3: e.detail.value
        })
    },
    //SwitchEvent
    switch1Change: function (e){
        console.log('switch1 发生 change 事件，携带值为', e.detail.value)
        this.setData({
            greetingDisabled:false
        })
    },
    switch2Change: function (e){
        console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    },
    //PayButtonEvent
    btnPay:function(e){}
})