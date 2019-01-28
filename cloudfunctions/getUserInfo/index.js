const cloud = require('wx-server-sdk');
cloud.init();

exports.main = async (event, context) => {
  const db = cloud.database();
  const _ = db.command;
  const dbName = 'user';

  const { openId } = event.userInfo;

  try {
    let userCollection = db.collection(dbName);
    
    // res = { data:[], errMsg }
    let { data } = await userCollection.where({
      openId: _.eq(openId)
    }).get();

    if (Array.isArray(data) && data.length > 0) {
      return {
        code: 2000,
        data: {
          payload: { name, stuId }
        }
      };
    } else if (Array.isArray(data) && data.length === 0) {
      return { code: 3001 };
    } else {
      return { code: 5000 };
    }
  } catch (e) {
    return { code: 5000 };
  }
}