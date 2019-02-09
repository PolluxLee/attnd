import { atLog } from '@/utils/at-log';

// 获取签到列表
export const getSigninsService = async () => {

}

// 获取签到人员列表
export const getSigninPeopleService = async ({ passwd, offset }) => {
  try {
    if (typeof passwd !== 'string' || !passwd || !Number.isInteger(offset) || offset < 0) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'getSigninPeople',
      data: {
        payload: { passwd, offset }
      }
    });
    if (result.code !== 2000) {
      throw result;
    }
    atLog.log('getSigninPeople', result);
    return result;
  } catch (e) {
    atLog.warn('getSigninPeople-err', e);
    throw e;
  }
}

// 获取个人签到信息
export const getSigninService = async ({ passwd }) => {
  try {
    if (typeof passwd !== 'string' || !passwd) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'getSignin',
      data: {
        payload: { passwd }
      }
    });
    if (result.code !== 2000 && result.code !== 3001) {
      throw result;
    }
    atLog.log('getSignin', result);
    return result;
  } catch (e) {
    atLog.warn('getSignin-err', e);
    throw e;
  }
}

// 签到
export const signinService = async ({ passwd, location }) => {
  try {
    if (typeof passwd !== 'string' || !passwd || !location) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'signin',
      data: {
        payload: { passwd, location }
      }
    });
    if (result.code !== 2000 && result.code !== 3002) {
      throw result;
    }
    atLog.log('signin', result);
    return result;
  } catch (e) {
    atLog.warn('signin-err', e);
    throw e;
  }
}