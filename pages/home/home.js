// pages/home/home.js
import httpRequest from '../../data/httpRequest.js'
import httpUrl from '../../data/httpUrl.js'
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime.js';
import commonData from '../../data/data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    bannerList: [],
    indicatorDots: true,
    indicatorDots: true,
    cateList: commonData.Cate_Data,
    mList: [],
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 200,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    currId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showNavigationBarLoading();
    this.getList();
    wx.hideNavigationBarLoading();

  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   *  跳转
   */
  bindViewTap: function(e) {
    const id = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },


  bindViewTapCate: function(e) {
    const index = e.currentTarget.dataset.postid.index;
    if (index == 0 || index == 1) {
      wx.navigateTo({
        url: '../movie/movie?index=' + index
      })
    } else {
      wx.navigateTo({
        url: '../movie_us/movie_us?index=' + index
      })
    }


  },



  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  getList: async function() {

    await httpUrl.getHoting({
      query: {}
    }).then((res) => {
      if (res != null && res.subjects != null && res.subjects.length > 0) {
        var banners = this.getBannerList(res.subjects, true)
        var mlist = this.getBannerList(res.subjects, false)

        this.setData({
          list: res.subjects,
          bannerList: banners,
          mList: mlist
        })
      }
    })




  },


  getBannerList: function(list, isBanner) {
    let items = [];
    if (list != null && list.length > 4 && isBanner) {
      for (let i = 0; i < 4; i++) {
        let casts = list[i].casts;
        let actors = ""
        for (let m = 0; m < casts.length; m++) {
          if (m == (casts.length - 1)) {
            actors = actors + casts[m].name
          } else {
            actors = actors + casts[m].name + " 、"
          }

        }
        list[i].actors = actors
        items.push(list[i])
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        items.push(list[i])
      }
    }

    return items;
  },


})