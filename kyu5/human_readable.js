function humanReadable(seconds) {
  // A hour is 3600 seconds, a min is 60 seconds
  const HOUR_SECONDS = 3600;
  const MINUTE_SECONDS = 60;
  const hours = Math.floor(seconds / HOUR_SECONDS);
  const secondsMinutes = seconds - hours * HOUR_SECONDS;
  const minutes = Math.floor(secondsMinutes / MINUTE_SECONDS);
  const secondsLeft = secondsMinutes - minutes * MINUTE_SECONDS;
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;

  return time;
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(90));
console.log(humanReadable(3599));
console.log(humanReadable(86400));
