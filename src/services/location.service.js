import { atLog } from '@/utils/at-log';

export const getLocationService = async () => {
  try {
    return await new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          let location = {
            lng: res.longitude,
            lat: res.latitude,
            acr: res.accuracy
          };
          atLog.log('getLocation', location);
          resolve(location);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  } catch (e) {
    atLog.log('getLocation', e);
    return null;
  }
}