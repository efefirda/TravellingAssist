import moment from 'moment';

//example output : 10 June 2019
const viewStringDate = par => {
  return moment(par).format('DD MMM YYYY');
};

//example output : 10-01-2019
const viewDate = par => {
  return moment(par).format('YYYY-MM-DD');
};

//example output : 11
const viewDay = par => {
  return moment(par).format('DD');
};

//example output: Nov
const viewMonth = par => {
  return moment(par).format('MMM');
};

//example output: 10: 00 AM
const viewTime = par => {
  return moment(par).format('HH : mm');
};

//example output 2019-08-08
const convertToStringDate = date => {
  return date.slice(0, -9);
};

//example output 2019-08-08
const convertToStringDateUtc = date => {
  return date.slice(0, -15);
};

export {
  viewStringDate,
  viewDay,
  viewTime,
  convertToStringDate,
  convertToStringDateUtc,
  viewMonth,
  viewDate,
};
