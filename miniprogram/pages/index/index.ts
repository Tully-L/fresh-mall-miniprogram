// index.ts

// 定义数据接口
interface IPageData {
  banners: Array<{
    id: number;
    imageUrl: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    icon: string;
  }>;
  goodsList: Array<{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }>;
}

// 定义方法接口
interface IPageMethods {
  onSearchInput: (e: WechatMiniprogram.Input) => void;
}

Page<IPageData, IPageMethods>({
  data: {
    banners: [
      { id: 1, imageUrl: '../../assets/images/banner3.png' },
      { id: 2, imageUrl: '../../assets/images/banner2.png' }
    ],
    categories: [
      { id: 1, name: '蔬菜', icon: '../../assets/icons/vegetable.png' },
      { id: 2, name: '水果', icon: '../../assets/icons/fruit.png' },
      { id: 3, name: '肉类', icon: '../../assets/icons/meat.png' },
      { id: 4, name: '海鲜', icon: '../../assets/icons/seafood.png' }
    ],
    goodsList: [
      {
        id: 1,
        name: '新鲜番茄',
        price: 5.99,
        imageUrl: '../../assets/images/tomato.jpg'
      },
      {
        id: 2,
        name: '黄瓜',
        price: 3.99,
        imageUrl: '../../assets/images/cucumber.jpg'
      },
      {
        id: 3,
        name: '精品商品1',
        price: 15.99,
        imageUrl: '../../assets/goods/goods1.png'
      },
      {
        id: 4,
        name: '精品商品2',
        price: 25.99,
        imageUrl: '../../assets/goods/goods2.png'
      }
    ]
  },

  onLoad() {
    // 页面加载时的逻辑
  },

  onShow() {
    // 页面显示时的逻辑
  },

  onSearchInput(e: WechatMiniprogram.Input) {
    console.log(e.detail.value);
    // TODO: 实现搜索逻辑
  }
})