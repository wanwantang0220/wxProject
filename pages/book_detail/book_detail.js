// pages/book_detail/book_detail.js
import httpRequest from '../../data/httpRequest.js'
import httpUrl from '../../data/httpUrl.js'
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime.js';


Page({

  data: {
    id: '',
    resData: {},
    tagInfo: ''
  },

  onLoad: function(options) {
    this.setData({
      id: options.id
    })
    wx.showNavigationBarLoading();
    this.getDetail();
    wx.hideNavigationBarLoading();
  },

  onShow: function() {

  },


  getDetail: async function() {
    let params = {}
    let id = this.data.id

    let url = httpUrl.Book_Detail_Url + id
    await httpRequest.httpRequest(url, params, "").then((res) => {
      if (res != null) {
        this.handleInfo(res)


        console.log("res = " + JSON.stringify(res))
      }

    })
  },

  handleInfo: function(res) {
    let tags = res.tags
    let taginfo = ''
    if (tags.length > 0) {
      for (let i = 0; i < tags.length; i++) {
        if (i == (tags.length - 1)) {
          taginfo = taginfo + tags[i].title
        } else {
          taginfo = taginfo + tags[i].title + "/"
        }
      }
    }

    this.setData({
      resData: res,
      tagInfo: taginfo
    })
  }
})