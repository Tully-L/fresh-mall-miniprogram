Page({
  data: {
    categories: [
      {
        id: 1,
        name: '蔬菜',
        icon: '../../assets/icons/vegetable.png',
        image: '../../assets/images/tomato.jpg'
      },
      {
        id: 2,
        name: '水果',
        icon: '../../assets/icons/fruit.png',
        image: '../../assets/images/banner1.png'
      },
      {
        id: 3,
        name: '肉类',
        icon: '../../assets/icons/meat.png',
        image: '../../assets/images/banner2.png'
      },
      {
        id: 4,
        name: '海鲜',
        icon: '../../assets/icons/seafood.png',
        image: '../../assets/images/cucumber.jpg'
      }
    ],
    currentCategory: {},
    subCategories: []
  },

  onLoad() {
    // 设置默认选中的分类
    this.setData({
      currentCategory: this.data.categories[0]
    })
  }
})