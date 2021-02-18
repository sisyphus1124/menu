App({
  //小程序初始化的时候，获取用户信息
  onLaunch() {
    wx.cloud.init({
      env:"test-cook"
    })
    //获取用户授权
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          //获取用户信息
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              //出来一个人接待
              if (this.getUserInfo) {
                this.getUserInfo(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})