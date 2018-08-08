var order = ['red', 'yellow', 'blue', 'green', 'red'];
Component({
  data: {
    toView: 'red',
    scrollTop: 100,
    hotList: [
      {
        title: '坚果 R1',
        desc: '次世代旗舰手机',
        image:
          'https://resource.smartisan.com/resource/2077bb9819a652c36da473f379fe510b.png?x-oss-process=image/resize,w_252/format,webp',
        price: 3299
      },
      {
        title: '坚果 3',
        desc: '漂亮得不像实力派',
        image:
          'https://resource.smartisan.com/resource/13e91511f6ba3227ca5378fd2e93c54b.png?x-oss-process=image/resize,w_252/format,webp',
        price: 1299
      },
      {
        title: '坚果 Pro2 特别版',
        desc: '漂亮得像实力派',
        image:
          'https://resource.smartisan.com/resource/84366aa98fd0659d7809e1b9eed62cb4.png?x-oss-process=image/resize,w_252/format,webp',
        price: 1899
      },
      {
        title: '坚果 Pro2',
        desc: '漂亮得不像实力派',
        image:
          'https://resource.smartisan.com/resource/4eb9976b5c45263c33cf6d4e04291785.png?x-oss-process=image/resize,w_252/format,webp',
        price: 1999
      },
      {
        title: '畅呼吸智能空气净化器超级除甲醛版',
        desc: '强力除甲醛，就选畅呼吸',
        image:
          'https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_252/format,webp',
        price: 2299
      },
      {
        title: 'Smartisan T恤 经典款',
        desc: '100% 美国 SUPIMA 棉、舒适拉绒质地',
        image:
          'https://resource.smartisan.com/resource/61edf7de73ba6d41941f325fe09c8061.png?x-oss-process=image/resize,w_252/format,webp',
        price: 149
      }
    ]
  },
  upper: function(e) {
    console.log(e);
  },
  lower: function(e) {
    console.log(e);
  },
  scroll: function(e) {
    console.log(e);
  },
  navigateToUrl: function(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        });
        break;
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
  }
});
