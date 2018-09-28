// pages/detail/detail.js
import httpUrl from '../../data/httpUrl.js';
import httpRequest from '../../data/httpRequest.js';
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime.js';



Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    resData: {},
    rating:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 生命周期函数--监听页面加载
    this.setData({
      id: options.id
    })

    wx.showNavigationBarLoading();
    this.getPhotos()
    wx.hideNavigationBarLoading();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},


  getPhotos: async function() {
    let params = {
      id: this.data.id,
      count: "20"
    }

    let url = httpUrl.Movie_Detail_Url + this.data.id
    let url2 = httpUrl.Movie_Soon_Url;
    await httpRequest.httpRequest(url, params, "").then((res) => {
      if (res != null) {
        if (res.casts != null && res.casts.length > 0) {
          let average = res.rating.average / 2
          let rating = Math.round(average)
          this.setData({
            resData:res,
            rating: rating
          })

        }
        console.log(res)
        // this.setData({
        //   photos: res.photos
        // })

      }
    })


  }

})