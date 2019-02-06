import { atLog } from '@/utils/at-log';

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

export const getAttnds = () => {

}