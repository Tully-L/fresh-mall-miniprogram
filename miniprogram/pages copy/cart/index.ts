// cart/index.ts

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

Page({
  data: {
    cartList: [
      {
        id: 1,
        name: '新鲜番茄',
        price: 5.99,
        imageUrl: '../../assets/images/tomato.jpg',
        quantity: 1,
        selected: false
      },
      {
        id: 2,
        name: '黄瓜',
        price: 3.99,
        imageUrl: '../../assets/images/cucumber.jpg',
        quantity: 2,
        selected: false
      }
    ],
    totalPrice: 0,
    selectedAll: false,
    selectedCount: 0
  },

  onLoad() {
    this.calculateTotal();
  },

  onShow() {
    this.calculateTotal();
  },

  // 选择商品
  onSelectItem(e: any) {
    const { index } = e.currentTarget.dataset;
    const cartList = [...this.data.cartList];
    cartList[index].selected = !cartList[index].selected;
    
    const selectedAll = cartList.every(item => item.selected);
    
    this.setData({
      cartList,
      selectedAll
    });
    
    this.calculateTotal();
  },

  // 全选
  onSelectAll() {
    const selectedAll = !this.data.selectedAll;
    const cartList = this.data.cartList.map(item => ({
      ...item,
      selected: selectedAll
    }));
    
    this.setData({
      selectedAll,
      cartList
    });
    
    this.calculateTotal();
  },

  // 修改数量
  onChangeQuantity(e: any) {
    const { index, type } = e.currentTarget.dataset;
    const cartList = [...this.data.cartList];
    
    if (type === 'minus' && cartList[index].quantity > 1) {
      cartList[index].quantity -= 1;
    } else if (type === 'plus') {
      cartList[index].quantity += 1;
    }
    
    this.setData({ cartList });
    this.calculateTotal();
  },

  // 计算总价
  calculateTotal() {
    let totalPrice = 0;
    let selectedCount = 0;
    
    this.data.cartList.forEach(item => {
      if (item.selected) {
        totalPrice += item.price * item.quantity;
        selectedCount += item.quantity;
      }
    });
    
    this.setData({
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      selectedCount
    });
  },

  // 结算
  onCheckout() {
    if (this.data.totalPrice <= 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none'
      });
      return;
    }
    
    wx.showToast({
      title: '结算功能开发中',
      icon: 'none'
    });
  }
})