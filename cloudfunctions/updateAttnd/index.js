const cloud = require('wx-server-sdk')
cloud.init()

// 更新考勤信息，目前只支持更新考勤状态
exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const attndCollection = db.collection('attnd');

  const { passwd, status } = event.payload;
  const { openId } = event.userInfo;

  const statusSet = new Set([0, 1]);

  if (typeof passwd !== 'string' || !string
    || typeof status !== 'number' || !statusSet.has(status)) {
    return { code: 4000 };
  }

  // res = { data:[], errMsg }
  let { data } = await attndCollection.where({
    passwd: _.eq(passwd),
    author: _.eq(openId)
  }).get();

  // 存在该记录，更新之
  if (Array.isArray(data) && data.length > 0) {
    await attndCollection.where({
      passwd: _.eq(passwd),
      author: _.eq(openId)
    }).update({
      data: { status }
    })
    return { code: 2000 };
  } else {
    return { code: 5000 };
  }
}