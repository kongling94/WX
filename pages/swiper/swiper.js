//index.js
//获取应用实例
const app = getApp();

Component({
  data: {
    imgUrls: [
      'https://resource.smartisan.com/resource/cc6ca1c9d5e552dcc264d20371b35859.png',
      'https://resource.smartisan.com/resource/33963815c6f1c71bc1b6d8ae2ceac5a4.png',
      'https://resource.smartisan.com/resource/dfc7b7fc37141c9171390f81b23847c1.png',
      'https://resource.smartisan.com/resource/7fed99c67873c16572bd2e5d8ce5771c.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    indicatorActiveColor: '#fff'
    // previousMargin: '50rpx'
  }
});
