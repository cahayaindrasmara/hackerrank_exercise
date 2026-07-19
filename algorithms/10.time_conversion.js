function timeConversion(s) {
  let hour = Number(s.slice(0, 2));
  let minute = Number(s.slice(3, 5));
  let second = Number(s.slice(6, 8));
  let format = s.slice(-2);
  let time = "";

  console.log(
    `hour: ${hour}, minute: ${minute}, second: ${second}, format: ${format}`,
  );

  if (format === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour === 12) {
      hour = 12;
    } else {
      hour += 12;
    }
  }

  time = `${hour > 9 ? hour : "0" + hour}:${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }`;

  return time;
}

console.log(timeConversion("12:45:54PM"));
