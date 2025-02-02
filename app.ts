<<<<<<< HEAD
/// <reference path="./typings/index.d.ts" />

App<IAppOption>({
    globalData: {},
    onLaunch() {
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
      // 登录
      wx.login({
        success: res => {
          console.log(res.code)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        },
      })
    },
=======
/// <reference path="./typings/index.d.ts" />

App<IAppOption>({
    globalData: {},
    onLaunch() {
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
      // 登录
      wx.login({
        success: res => {
          console.log(res.code)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        },
      })
    },
>>>>>>> 30252565cb8ed3b276ff006e4bc3e9781cd83b84
  })