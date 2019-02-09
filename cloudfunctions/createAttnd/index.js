const cloud = require('wx-server-sdk');
cloud.init();

// 生成考勤口令
const buildPasswd = () => {
  // 返回 [min, max] 范围的整数
  const getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  }

  // 取当前毫秒时间戳的后三位
  const getTimeIn62 = (timeInLong) => {
    let timeIn62 = '';
    while (timeInLong !== 0) {
      timeIn62 += digits[timeInLong % 62];
      timeInLong = Math.floor(timeInLong / 62);
    }
    return timeIn62.slice(0, 3); 
  }

  const digits = "0123456789abcdefghijk+mnopqrstuvwxyzABCDEFGH=JKLMNOPQRSTUVWXYZ";
  let passwd = '';

  passwd = digits[getRandomInt(0, 61)]
    + getTimeIn62(Date.now())
    + digits[getRandomInt(0, 61)] + digits[getRandomInt(0, 61)];

  return passwd;
}

// let reqData = {
//   location: { lng: 0, lat: 0 },
//   attndName: '计算机网络',
//   author: 'openid',
//   authorName: 'plx',
//   time: '2018-12-21 14:26',
//   passwd: 'E72efAp',
//   status: 0 // 0-->已结束，1-->进行中
// }

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const attndCollection = db.collection('attnd');
  const userCollection = db.collection('user');

  const { attndName, location, time } = event.payload;
  const { openId } = event.userInfo;

  console.log('payload', event.payload);

  if (typeof attndName !== 'string' 
    || !attndName 
    || typeof location !== 'object' 
    || typeof location.lng !== 'number' 
    || typeof location.lat !== 'number'
    || typeof time !== 'string'
    || !time) {
    return { code: 4000 };
  }

  try {
    // 获取发布者姓名
    // res = { data:[], errMsg }
    let { data } = await userCollection.where({
      openId: _.eq(openId)
    }).get();
    console.log(data);

    let authorName = '';
    if (Array.isArray(data) && data.length > 0) {
      authorName = data[0].name;
    } else if (Array.isArray(data) && data.length === 0) {
      return { code: 3001 };
    } else {
      console.log('记录数据结构不正确');
      return { code: 5000 };
    }

    // 设置发布者 author
    let author = openId;

    // 获取考勤口令
    let passwd = buildPasswd();

    // 设置考勤状态 0-->已结束，1-->进行中
    let status = 1;

    // 查询是否存在与此口令相同的考勤
    // res = { data:[], errMsg }
    while(true) {
      let { data } = await attndCollection.where({
        passwd: _.eq(passwd)
      }).get();
  
      // 不存在该记录，可插入
      if (Array.isArray(data) && data.length === 0) {
        break;
      }
      if (!Array.isArray(data)) {
        throw new Error('查询数据库错误');
      }
      passwd = buildPasswd();
    }

    // 新建考勤
    let reqData = { passwd, location, attndName, author, authorName, time, status };
    console.log(reqData);
    await attndCollection.add({
      data: reqData
    });
    return { code: 2000 };

  } catch (e) {
    console.log(e);
    return { code: 5000, e };
  }
}