function past(h, m, s) {
  //#Happy Coding! ^_^
  const milsecHour = 3_600_000;
  const milsecMinute = 60_000;
  const milsecSecond = 1_000;
  const totalMilSecs = h * milsecHour + m * milsecMinute + s * milsecSecond;

  return totalMilSecs;
}

console.log(past(0, 0, 1));
console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(11, 12, 13));
