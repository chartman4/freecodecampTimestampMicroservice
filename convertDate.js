var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function convertDate(date) {
  var msec;
  console.log(date);
  if (Number.isInteger(Number(date))) {
    console.log("Is integer");
    msec = new Date(Number(date));
  } else {
    console.log("Is not integer");
    msec = new Date(Date.parse(date));
  }
  console.log(msec);

  if (isNaN(msec.getTime())) {
    return {
      unix: null,
      natural: null
    };
  } else {
    var dateString =
      month[msec.getMonth()] + " " + msec.getDate() + ", " + msec.getFullYear();
    return {
      unix: msec.getTime(),
      natural: dateString
    };
  }
}

module.exports = convertDate;
