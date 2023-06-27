const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  let result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

console.log(getDateAfterXDays(6));

module.exports = getDateAfterXDays;
