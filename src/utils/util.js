/***
 * 日期格式化
 */
let formatTime = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

let formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 函数节流
 */
let throttle = (fn, gapTime) => {
  if (!gapTime) {
    gapTime = 1500;
  }
  let lastTime = null;
  return function () {
    let nowTime = +new Date();
    if (nowTime - lastTime > gapTime || !lastTime) {
      fn.apply(this, arguments);
      lastTime = nowTime;
    }
  }
}


module.exports = {
  formatTime,
  throttle
}
