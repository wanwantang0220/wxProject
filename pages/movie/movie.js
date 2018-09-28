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
    content: ''

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
    const index = this.data.index
    let content = ''
    if (index == 0) {
      content = " 看过"
    } else if (index == 1) {
      content = " 想去看"
    }
    this.setData({
      content: content
    })
    if (index == 0) {
      await httpUrl.getUpComming({
        query: {}
      }).then((res) => {
        if (res != null && res.subjects != null && res.subjects.length > 0) {
          const mlist = res.subjects
          this.handleList(mlist)
        }
      })
    } else if (index == 1) {
      await httpUrl.getPraise({
        query: {}
      }).then((res) => {
        if (res != null && res.subjects != null && res.subjects.length > 0) {
          const mlist = res.subjects
          this.handleList(mlist)
        }
      })
    }

  },
  handleList: function(mlist) {

    for (let i = 0; i < mlist.length; i++) {
      let casts = mlist[i].casts;
      let actors = ""

      for (let m = 0; m < casts.length; m++) {
        if (m == (casts.length - 1)) {
          actors = actors + casts[m].name
        } else {
          actors = actors + casts[m].name + " 、"
        }

      }
      mlist[i].actors = actors

      let showrating = mlist[i].rating.average / 2
      mlist[i].rating.showrating = Math.round(showrating)

    }
    this.setData({
      mList: mlist,
    })

  }

})