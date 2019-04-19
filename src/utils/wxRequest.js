import wepy from 'wepy'
import tip from './tip'
import { USER_TOKEN } from './constant'
//当前线上版本号
const VERSION = 'v1.8.0';

const wxRequest = async(params = {}, url) => {
  tip.loading();
  let data = params.query || {};
  data._v = VERSION;
  if (wepy.getStorageSync(USER_TOKEN)) {
    data.token = wepy.getStorageSync(USER_TOKEN)
  }
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: params.header || { 'Content-Type': 'application/json' }
  });
  tip.loaded();
  return res;
}

module.exports = {
  wxRequest
}
