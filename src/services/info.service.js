import { atLog } from '@/utils/atLog';

export const getUserInfoService = async () => {
  try {
    let { result } = await wx.cloud.callFunction({
      name: 'getUserInfo'
    });
    atLog.log('UserInfo-Get', result);
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