import { atLog } from '@/utils/at-log';

// 创建考勤
export const createAttndService = async ({ attndName, location, time }) => {
  if (!attndName) return { code: 4000 };

  let payload = { attndName, location, time };

  try {
    let { result } = await wx.cloud.callFunction({
      name: 'createAttnd',
      data: { payload }
    });

    if (result.code !== 2000) {
      atLog.warn('createAttnd', result);
    } else {
      atLog.log('createAttnd', result);
    }

    return result;
  } catch (e) {
    atLog.warn('createAttnd', e);
    return { code: 5000 };
  }
}

// 根据 openId 获取考勤，即自己发布都考勤
export const getAttndsService = async ({ offset, offsetId }) => {
  if (!Number.isInteger(offset) || offset < 0) {
    return { code: 4000 };
  }

  try {
    let { result } = await wx.cloud.callFunction({
      name: 'getAttnds',
      data: {
        payload: { offset, offsetId }
      }
    });
  
    if (result.code !== 2000) {
      atLog.warn('getAttnds', result);
    } else {
      atLog.log('getAttnds', result);
    }
  
    return result;
  } catch (e) {
    atLog.warn('getAttnds', e);
    return { code: 5000 };
  }
}

// 根据 passwd 获取单个考勤
export const getAttndService = async ({ passwd }) => {
  if (!passwd) return { code: 4000 };

  try {
    let { result } = await wx.cloud.callFunction({
      name: 'getAttnd',
      data: {
        payload: { passwd }
      }
    });
  
    if (result.code !== 2000) {
      atLog.warn('getAttnd', result);
    } else {
      atLog.log('getAttnd', result);
    }
  
    return result;
  } catch (e) {
    atLog.warn('getAttnd', e);
    return { code: 5000 };
  }
}