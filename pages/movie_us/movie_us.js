// pages/movie/movie.js
import Cate_Data from '../../data/data.js'
import httpUrl from '../../data/httpUrl.js'
import regeneratorRuntime from '../../lib/regenerator-runtime/runtime.js';

Page({

  data: {
    title: '',
    mList: [],
    index: 0,
    rating: 0,
    content: ' 看过'

  },

  onLoad: function(options) {
    const title = Cate_Data.Cate_Data[options.index].title
    const index = Cate_Data.Cate_Data[options.index].index

    this.setData({
      title: title,
      index: index,
      rating: 0
    })


    wx.showNavigationBarLoading()
    this.getList()
    wx.hideNavigationBarLoading()

  },

  onShow: function() {

  },


  bindViewTap: function(e) {
    const id = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },


  getList: async function() {

    await httpUrl.getNorth({
      query: {}
    }).then((res) => {
      if (res != null && res.subjects != null && res.subjects.length > 0) {
        //TODO 
        const mlist = res.subjects
        this.handleList(mlist)
      }
    })

  },
  handleList: function(mlist) {

    for (let i = 0; i < mlist.length; i++) {
      let casts = mlist[i].subject.casts;
      let actors = ""

      for (let m = 0; m < casts.length; m++) {
        if (m == (casts.length - 1)) {
          actors = actors + casts[m].name
        } else {
          actors = actors + casts[m].name + " 、"
        }

      }
      mlist[i].subject.actors = actors

      let showrating = mlist[i].subject.rating.average / 2
      mlist[i].subject.rating.showrating = Math.round(showrating)

    }
    this.setData({
      mList: mlist,
    })

  }

})