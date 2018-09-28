// pages/bao_home/bao_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  colorTap: function() {
    wx.navigateTo({
      url: '../color/color',
    })
  },
  animalTap: function() {
    wx.navigateTo({
      url: '../animal/animal',
    })
  },

  fruitlTap: function() {
    wx.navigateTo({
      url: '../fruits/fruits',
      
    })
  },

  carTap: function() {
    wx.navigateTo({
      url: '../cars/cars',
    })
  }
})