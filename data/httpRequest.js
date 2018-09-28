import regeneratorRuntime from '../lib/regenerator-runtime/runtime.js';
import Base from './data.js'


var app = getApp()


const httpRequest = async(url, params = {}, path) => {
  // Object.assign(params, {
  //   token: wx.getStorageSync('token')
  // })
  // 所有的请求，header默认携带token
  let header = params.header || {
    'Content-Type': 'application/text',
    // 'token': params.token || ''
  }
  let data = params.query || {}
  let method = params.method || 'POST'
  // hideLoading可以控制是否显示加载状态
  if (!params.hideLoading) {
    wx.showLoading({
      title: '加载中...',
    })
  }





  let res = await new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success: (res) => {
        if (res && res.statusCode == 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        wx.hideLoading()
      }
    })
  })
  return res
}

module.exports = {
  httpRequest
}