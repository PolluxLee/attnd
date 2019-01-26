export const getListData = (type) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (type === 0) {
        resolve([
          {name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '0', date: '2018-09-10 21:30', author: '纸纸纸盆' },
        ]);
      } else {
        resolve([
          {name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          {name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          {name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
          { name: '1', date: '2018-09-10 21:30', author: '纸纸纸盆' },
        ]);
      }
    }, 500);
  });
};