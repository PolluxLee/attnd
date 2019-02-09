import { atLog } from '@/utils/at-log';

// 创建考勤
export const createAttndService = async ({ attndName, location, time }) => {
  try {
    if (!attndName || !location || !time) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'createAttnd',
      data: {
        payload: {
          attndName, location, time
        }
      }
    });
    if (result.code !== 2000) throw result;
    atLog.log('createAttnd', result);
    return result;
  } catch (e) {
    atLog.warn('createAttnd', e);
    throw e;
  }
}

// 根据 openId 获取考勤，即自己发布的考勤
export const getAttndsService = async ({ offset, offsetId }) => {
  try {
    if (!Number.isInteger(offset) || offset < 0) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'getAttnds',
      data: {
        payload: { offset, offsetId }
      }
    });
    if (result.code !== 2000) throw result;
    atLog.log('getAttnds', result);
    return result;
  } catch (e) {
    atLog.warn('getAttnds', e);
    throw e;
  }
}

// 根据 passwd 获取单个考勤
export const getAttndService = async ({ passwd }) => {
  try {
    if (typeof passwd !== 'string' || !passwd) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'getAttnd',
      data: {
        payload: { passwd }
      }
    });
    if (result.code !== 2000) throw result;
    atLog.log('getAttnd', result);
    return result;
  } catch (e) {
    atLog.warn('getAttnd', e);
    throw e;
  }
}

// 改变考勤状态
export const updateAttndService = async ({ passwd, status }) => {
  try {
    if (typeof passwd !== 'string' || !passwd || !Number.isInteger(status)) {
      throw { code: 4000 };
    }
    let { result } = await wx.cloud.callFunction({
      name: 'updateAttnd',
      data: {
        payload: { passwd, status }
      }
    });
    if (result.code !== 2000) throw result;
    atLog.log('updateAttnd', result);
    return result;
  } catch (e) {
    atLog.warn('updateAttnd', e);
    throw e;
  }
}