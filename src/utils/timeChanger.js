var moment = require("moment-timezone");

const numberMonth = (str) => {
  const obj = {
    Dec: "12",
    Nov: "11",
    Oct: "10",
    Sep: "09",
    Aug: "08",
    Jul: "07",
    Jun: "06",
    May: "05",
    Apr: "04",
    Mar: "03",
    Feb: "02",
    Jan: "01",
  };
  return obj[str];
};

function calculateUserTime(timeUTC) {
  const str = timeUTC.split(" ");
  let timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  let month = numberMonth(str[1]);
  let hour = str[3].split(":");
  let strNew = `${str[5]}-${month}-${str[2]} ${hour[0]}:${hour[1]}`;

  var b = moment.utc(strNew).tz(timeZoneString);
  let arrayFullDate = b.format().split("T");
  let arrayDate = arrayFullDate[0].split("-");
  let arrayHour = arrayFullDate[1].split(":");

  let myFormat = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]} ${arrayHour[0]}:${arrayHour[1]}`;
  return myFormat;
}

export default calculateUserTime