const cloud = require('wx-server-sdk');
cloud.init();

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const userCollection = db.collection('user');
  const { name, stuId, email } = event.payload;
  const { openId } = event.userInfo;

  console.log('payload', event.payload);

  // 若 name 或 stuId 不合法或 openId 为空则返回
  if (typeof name !== 'string' || typeof stuId !== 'string' || !name || !openId) {
    return { code: 4000 };
  }

  try {
    // res = { data:[], errMsg }
    let { data } = await userCollection.where({
      openId: _.eq(openId)
    }).get();

    // 不存在该记录，插入之
    if (Array.isArray(data) && data.length === 0) {
      await userCollection.add({
        data: { openId, name, stuId, email }
      });
      return { code: 2000 };
    }

    // 存在该记录，更新之
    if (Array.isArray(data) && data.length > 0) {
      await userCollection.where({
        openId: _.eq(openId)
      }).update({
        data: { name, stuId, email }
      })
      return { code: 2000 };
    }
  } catch (e) {
    console.log(e);
    return { code: 5000, e };
  }
}