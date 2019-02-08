const cloud = require('wx-server-sdk');
cloud.init();

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const signinCollection = db.collection('signin');

  const { passwd } = event.payload;
  const { openId } = event.userInfo;

  try {
    if (typeof passwd !== 'string' || !passwd) {
      return { code: 4000 };
    }
  
    // res = { data:[], errMsg }
    let { data } = await signinCollection.where({
      passwd: _.eq(passwd),
      openId: _.eq(openId)
    }).get();
  
    console.log(data);

    if (Array.isArray(data) && data.length > 0) {
      return {
        code: 2000,
        data: {
          payload: data[0]
        }
      };
    } else if (Array.isArray(data) && data.length === 0) {
      return { code: 3001 };
    } else {
      console.log('记录数据结构不正确');
      return { code: 5000 };
    }
  } catch (e) {
    console.log(e);
    return { code: 5000, msg: e };
  }
}