function bouncingBall(h, bounce, window) {
  // your code here
  let timesViewed = -1;

  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let height = h;
    timesViewed = 0;

    while (height > window) {
      ++timesViewed;
      height *= bounce;
      if (height > window) {
        ++timesViewed;
      }
    }
  }

  return timesViewed;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
