// pages/book/book.js

import BookData from '../../data/book_data.js'

Page({

  data: {
    bookList: BookData.Book_Data
  },

  onLoad: function(options) {

  },

  onShow: function() {},

  bindViewTap:function(e){
    const id = e.currentTarget.dataset.postid
    wx.navigateTo({
      url: '../book_detail/book_detail?id='+id,
    })

  }
 
})