import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://jlapi3.imamachong.com';

//登录地址
const loginUrl = (params) => wxRequest(params, apiMall + '/activity/user/login');

//验证token地址
const authToken = (params) => wxRequest(params, apiMall + '/activity/user/check_token');

//提交formId
const postFormId = (params) => wxRequest(params, apiMall + '/activity/util/template_formid_do');

//首页活动列表
const activityList = (params) => wxRequest(params, apiMall + '/activity/theme/user_activity_list');
//首页广告链接
const ad = (params) => wxRequest(params, apiMall + '/activity/theme/get_ad');

module.exports = {
  loginUrl,
  authToken,
  postFormId,
  activityList,
  ad
}
