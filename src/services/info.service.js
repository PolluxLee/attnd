import { atLog } from '@/utils/at-log';
import { atStorage } from '@/utils/at-storage';

export const getUserInfoService = async () => {
  // 从缓存获取
  let userInfo = atStorage.get('userInfo');
  if (userInfo) {
    let result = {
      code: 2000,
      data: {
        payload: userInfo
      }
    };
    atLog.log('getUserInfo-getStorage', result);
    return result;
  }

  // 从数据库获取
  try {
    let { result } = await wx.cloud.callFunction({
      name: 'getUserInfo'
    });
    atLog.log('getUserInfo-get', result);

    if (result.code !== 2000 && result.code !== 3001) {
      throw result;
    }
    // 更新缓存
    let payload = result.data.payload;
    atStorage.set('userInfo', payload);
    atLog.log('getUserInfo-setStorage', payload);

    return result;
  } catch (e) {
    atLog.warn('getUserInfo-err', e);
    throw e;
  }
};

export const updateUserInfoService = async ({ name, stuId, email }) => {
  if (!name) return { code: 4000 };

  let payload = { name, stuId, email };

  try {
    let { result } = await wx.cloud.callFunction({
      name: 'updateUserInfo',
      data: { payload }
    });
    atLog.log('setUserInfo-set', result);

    if (result.code !== 2000) {
      throw result;
    }

    // 更新缓存
    atStorage.set('userInfo', payload);
    atLog.log('setUserInfo-setStorage', payload);
    return result;
  } catch (e) {
    atLog.warn('setUserInfo-err', e);
    throw e;
  }
};