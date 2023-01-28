function setAlarm(employed, vacation) {
  return employed && !vacation;

  // if (employed && !vacation) {
  //   return true;
  // }

  // return false;
}

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
