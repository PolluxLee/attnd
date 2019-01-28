import { atLog } from '@/utils/at-log';
import { atStorage } from '@/utils/at-storage';

export const getUserInfoService = async () => {
  // 从缓存获取
  let userinfo = atStorage.get('userInfo');
  if (userinfo) {
    let result = {
      code: 2000,
      data: {
        payload: userinfo
      }
    };
    atLog.log('UserInfo-Get-Storage', result);
    return result;
  }

  // 从数据库获取
  try {
    let { result } = await wx.cloud.callFunction({
      name: 'getUserInfo'
    });
    atLog.log('UserInfo-Get', result);

    // 更新缓存
    if (result.code === 2000) {
      atStorage.set('userInfo', result.data.payload);
    }

    return result;
  } catch (e) {
    atLog.warn('UserInfo-Get', result);
    return { code: 5000 };
  }
};

export const updateUserInfoService = async ({ name, stuId }) => {
  if (!name) return { code: 4000 };

  try {
    let { result } = await wx.cloud.callFunction({
      name: 'updateUserInfo',
      data: {
        payload: { name, stuId }
      },
    });
    atLog.log('UserInfo-Set', result);

    // 更新缓存
    atStorage.set('userInfo', { name, stuId });

    return result; // { code: 2000 }
  } catch (e) {
    atLog.warn('UserInfo-Set', result);
    return { code: 5000, e };
  }
};

export const getEmailService = async () => {

};

export const updateEmailService = async () => {

};