// 使用类型断言来确保 wx 的类型正确
const app = getApp<IAppOption>()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    orderCounts: {
      pendingPay: 0,
      pendingDelivery: 0,
      pendingReceive: 0,
      completed: 0
    }
  },

  onLoad() {
    if (typeof wx.getUserProfile === 'function') {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile() {
    // 使用类型断言
    (wx as WechatMiniprogram.Wx).getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  navigateToOrder(e: WechatMiniprogram.TouchEvent) {
    const { type } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/order/list/index?type=${type}`
    })
  }
})