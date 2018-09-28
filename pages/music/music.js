// pages/music/music.js
import Music_Data from '../../data/music_data.js'
Page({
  data: {
    musicList: Music_Data.Music_Data
  },
  onLoad: function(options) {



    const item = this.data.musicList[0];
    console.log(JSON.stringify(item))
  },
  onShow: function() {

  },

  bindViewTap:function(){
    // wx.navigateTo({
    //   url: '../web_view/web_view',
    // })
  }


})