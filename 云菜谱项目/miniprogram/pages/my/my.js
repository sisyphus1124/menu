const app = getApp();
// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: false, //是否登录。 false 未登录  true，已经登录
    recipes: [{
        recipeName: "烤苏格兰蛋",
        src: "../../imgs/1.jpg"
      },
      {
        recipeName: "法国甜点",
        src: "../../imgs/2.jpg"
      },
      {
        recipeName: "法式蓝带芝心猪排",
        src: "../../imgs/3.jpg"
      },
      {
        recipeName: "菠萝煎牛肉扒",
        src: "../../imgs/4.jpg"
      },
      {
        recipeName: "快手营养三明治",
        src: "../../imgs/5.jpg"
      },
      {
        recipeName: "顶级菲力牛排",
        src: "../../imgs/6.jpg"
      }
    ],
    types: [{
        typename: "营养菜谱",
        'src': "../../static/type/type01.jpg"
      },
      {
        typename: "儿童菜谱",
        'src': "../../static/type/type02.jpg"
      },
      {
        typename: "家常菜谱",
        'src': "../../static/type/type03.jpg"
      },
      {
        typename: "主食菜谱",
        'src': "../../static/type/type04.jpg"
      },
      {
        typename: "西餐菜谱",
        'src': "../../static/type/type05.jpg"
      },
      {
        typename: "早餐菜谱",
        'src': "../../static/type/type06.jpg"
      },
    ],
    lists: [{
        src: "../../static/list/list01.jpg",
        name: "土豆小番茄披萨",
        userInfo: {
          nickName: "林总小图",
          pic: "../../static/list/users.png"
        },
        views: 999,
        follow: 100
      },
      {
        src: "../../static/list/list02.jpg",
        name: "草莓巧克力三明治",
        userInfo: {
          nickName: "林总小图",
          pic: "../../static/list/users.png"
        },
        views: 88,
        follow: 200
      },
      {
        src: "../../static/list/list03.jpg",
        name: "法师意大利面",
        userInfo: {
          nickName: "林总小图",
          pic: "../../static/list/users.png"
        },
        views: 999,
        follow: 100
      },
      {
        src: "../../static/list/list04.jpg",
        name: "自制拉花",
        userInfo: {
          nickName: "林总小图",
          pic: "../../static/list/users.png"
        },
        views: 999,
        follow: 100
      },
      {
        src: "../../static/list/list05.jpg",
        name: "营养早餐",
        userInfo: {
          nickName: "林总小图",
          pic: "../../static/list/users.png"
        },
        views: 999,
        follow: 100
      }
    ],
  },
  onLoad() {
    var userInfo = app.globalData.userInfo;
    this.setData({
      userInfo,
      isLogin: true
    })
  },
  getInfo(e) {
    console.log(e);
    if (e.detail.userInfo !== undefined) {
      this.setData({
        userInfo: e.detail.userInfo,
        isLogin: true
      })
    }
  },
  _delStyle() {
    wx.showModal({
      title: "删除提示",
      content: "确定要删除么？",

    })
  },
  nav() {
    wx.navigateTo({
      url: "../pbrecipe/pbrecipe",
    })
  }

})