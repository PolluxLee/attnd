import { atLog } from '@/utils/at-log';

// 获取签到列表
export const getSigninsService = async () => {

}

// 获取个人签到信息
export const getSigninService = async ({ passwd }) => {
  try {
    if (!passwd) return { code: 4000 };

    let { result } = await wx.cloud.callFunction({
      name: 'getSignin',
      data: {
        payload: { passwd }
      }
    });

    atLog.log('getSignin', result);
    return result;
  } catch (e) {
    atLog.warn('getSignin-err', e);
    return { code: 5000, msg: e };
  }
}

// 签到
export const signinService = async () => {

}