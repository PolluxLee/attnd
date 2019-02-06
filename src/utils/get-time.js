import { atLog } from './at-log';

const formatNum = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
}

export const getTime = () => {
  let date = new Date();
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  let dateStr = [year, month, day].map(formatNum).join('-');
  let timeStr = [hour, min].map(formatNum).join(':');

  let time = `${dateStr} ${timeStr}`;
  atLog.log(`getTime`, time);
  return time;
}