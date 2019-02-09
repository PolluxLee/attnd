const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const attndCollection = db.collection('attnd');
  const signinCollection = db.collection('signin');

  const { openId } = event.userInfo;
  const { offset, offsetId, passwdSet } = event.payload;
  const pageSize = 10;

  console.log('payload', event.payload);

  if (!Number.isInteger(offset) || offset < 0) {
    return { code: 4000 };
  }

  try {
    // 根据 openId 获取参加过的考勤的口令数组
    // res = { data: [], errMsg }
    const res = await signinCollection.where({
      openId: _.eq(openId)
    }).field({
      passwd: true
    });
    let passwdSet = res.data || [];
    passwdSet = passwdSet.map(el => el.passwd);
    console.log(passwdSet);

    // 根据 passwdSet 获取自己参加过的考勤列表，即签到列表
    let query = attndCollection.where({
      passwd: _.in(passwdSet)
    });

    // offset 不为零时才需要用 _id 去计算偏移
    if (offsetId && offset !== 0) {
      query = attndCollection.where({
        passwd: _.in(passwdSet),
        _id: _.lte(offsetId)
      });
    }

    // res = { data: [], errMsg }
    let { data } = await query.field({
      attndName: true,
      authorName: true,
      passwd: true,
      status: true,
      time: true
    })
    .orderBy('time', 'desc')
    .orderBy('_id', 'desc')
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
          offsetId: offset === 0 && data[0] ? data[0]._id : null,
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