const cloud = require('wx-server-sdk');
cloud.init();

// 计算两个经纬度坐标之间的距离
const getDistance = (lng1, lat1, lng2, lat2) => {
  var radLat1 = lat1 * Math.PI / 180.0;
  var radLat2 = lat2 * Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137; // 🌍 地球半径
  s = Math.round(s * 10000) / 10000;
  return s;
};

// 签到
exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const signinCollection = db.collection('signin');
  const attndCollection = db.collection('attnd');
  const userCollection = db.collection('user');

  const { passwd, location } = event.payload;
  const { openId } = event.userInfo;
  const validDistance = 200;

  console.log('payload', event.payload);

  try {
    if (typeof passwd !== 'string' || !passwd
      || typeof location !== 'object'
      || typeof location.lng !== 'number'
      || typeof location.lat !== 'number') {
      return { code: 4000 };
    }

    // 获取考勤状态与发布者位置
    let attndStatus, attndLocation;

    // res = { data:[], errMsg }
    let res = await attndCollection.where({
      passwd: _.eq(passwd)
    }).field({
      status: true,
      location: true
    }).get();
    let attndData = res.data;
    if (Array.isArray(attndData) && attndData.length > 0) {
      attndStatus = attndData[0].status;
      attndLocation = attndData[0].location;
      console.log('attndStatus--->', attndStatus);
      console.log('attndLocation--->', attndLocation);
    } else {
      console.log('不存在考勤数据');
      return { code: 5000 };
    }

    // 计算距离
    let distance = getDistance(attndLocation.lng, attndLocation.lat, location.lng, location.lat) || Number.MAX_SAFE_INTEGER;
    console.log('distance--->', distance);

    // 计算状态
    // attndStatus: 0-->已结束，1-->进行中
    // signinStatus: 0-->超出距离，1-->已到，2-->迟到
    let status = 1;
    switch (attndStatus) {
      case 0: 
        status = 2;
        break;
      case 1: 
        if (distance > 0 && distance < validDistance) {
          status = 1;
          break;
        }
        status = 0;
      default:
        status = 2;
        break;
    }
    console.log('signinStatus--->', status);

    // 查询是否已签到
    // row = { data:[], errMsg }
    let row = await signinCollection.where({
      passwd: _.eq(passwd),
      openId: _.eq(openId)
    }).get();
    let signinData = row.data;

    // 不存在该记录，可签到
    if (Array.isArray(signinData) && signinData.length === 0) {
      // 获取个人信息（冗余数据）加入签到表
      // res = { data:[], errMsg }
      let name, stuId;
      let { data } = await userCollection.field({
        name: true,
        stuId: true
      }).where({
        openId: _.eq(openId)
      }).get();
      if (Array.isArray(data) && data.length > 0) {
        name = data[0].name;
        stuId = data[0].stuId;
        console.log('name--->', name);
        console.log('stuId--->', stuId);
      } else {
        console.log('获取个人信息失败');
        return { code: 5000 };
      }

      let reqData = { passwd, openId, location, distance, status, name, stuId };
      console.log(reqData);

      // 签到
      await signinCollection.add({
        data: reqData
      });
      return {
        code: 2000,
        payload: { name, stuId, status, distance }
      };
    } else if (Array.isArray(signinData) && signinData.length > 0) {
      return { code: 3002 }; // 存在该记录，即已签到
    } else {
      return { code: 5000 };
    }
  } catch (e) {
    console.log(e);
    return { code: 5000 };
  }
}