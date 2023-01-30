function race(v1, v2, g) {
  // your code
  if (v1 >= v2) {
    return null;
  }

  const velocityDifference = v2 - v1;
  const epsilonValue = 0.01;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  let timeLeftOver = g / velocityDifference;
  let timeLeftOverCeil = Math.ceil(timeLeftOver);

  if (timeLeftOverCeil - timeLeftOver < epsilonValue) {
    timeLeftOver = timeLeftOverCeil;
    hours = timeLeftOver;
  } else {
    hours = Math.floor(timeLeftOver);

    timeLeftOver -= hours;
    console.log("timeLeftOver", timeLeftOver);

    timeLeftOver *= 60;
    console.log("timeLeftOver", timeLeftOver);

    timeLeftOverCeil = Math.ceil(timeLeftOver);

    if (timeLeftOverCeil - timeLeftOver < epsilonValue) {
      timeLeftOver = timeLeftOverCeil;
      minutes = timeLeftOver;
    } else {
      minutes = Math.floor(timeLeftOver);

      timeLeftOver -= minutes;
      console.log("timeLeftOver", timeLeftOver);

      timeLeftOver *= 60;
      console.log("timeLeftOver", timeLeftOver);

      seconds = Math.floor(timeLeftOver);
    }
  }

  return [hours, minutes, seconds];

  // OR
  // return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}

console.log(race(80, 91, 37));
console.log(race(720, 850, 70));
console.log(race(80, 100, 40));
