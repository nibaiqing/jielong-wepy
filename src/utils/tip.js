/**
 * 提示与加载类工具
 */
export default class Tips {
  constructor() {
    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */
  static success(title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: "success",
        mask: true,
        duration: duration
      });
    }, 300);
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
  }

  /**
   * 弹出确认窗口
   */
  static confirm(text, title = "提示") {
    wx.showModal({
      title: title,
      content: text,
      showCancel: false,
      confirmColor: '#ff4545'
    });
  }

  static toast(title, onHide, icon = "success") {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
    }, 300);

    //隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 错误框
   */
  static error(title, onHide) {
    wx.showToast({
      title: title,
      image: '../images/error.png',
      mask: true,
      duration: 500
    });
    //隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 弹出加载提示
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }

  static share(title, url, imageUrl) {
    return {
      title: title,
      path: url,
      imageUrl: imageUrl,
      success: function (res) {
        Tips.toast("分享成功");
      }
    };
  }
}


/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
