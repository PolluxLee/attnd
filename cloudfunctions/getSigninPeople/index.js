const cloud = require('wx-server-sdk');
cloud.init();

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const signinCollection = db.collection('signin');

  const { passwd, offset } = event.payload;
  const pageSize = 10;
  const { openId } = event.userInfo;

  console.log('payload', event.payload);

  if (!Number.isInteger(offset) || offset < 0 || !passwd) {
    return { code: 4000 };
  }

  try {
    // res = { data: [], errMsg }
    let { data } = signinCollection.where({
      passwd: _.eq(passwd),
      openId: _.eq(openId)
    }).field({
      openId: true,
      name: true,
      stuId: true,
      distance: true
    })
    .skip(offset)
    .limit(pageSize)
    .get();

    console.log(data);

    let hasMore = true;

    if (Array.isArray(data)) {
      if (data.length < pageSize) {
        hasMore = false;
      }
      return {
        code: 2000,
        data: {
          hasMore,
          payload: data
        }
      };
    } else {
      console.log('记录数据结构不正确');
      return { code: 5000 };
    }

  } catch (e) {
    console.log(e);
    return { code: 5000, msg: e };
  }
}