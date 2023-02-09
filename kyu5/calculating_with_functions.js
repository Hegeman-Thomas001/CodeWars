function zero(cb) {
  const zero = 0;
  if (cb) {
    return cb(zero);
  }
  return zero;
}
function one(cb) {
  const one = 1;
  if (cb) {
    return cb(one);
  }
  return one;
}
function two(cb) {
  const two = 2;
  if (cb) {
    return cb(two);
  }
  return two;
}
function three(cb) {
  const three = 3;
  if (cb) {
    return cb(three);
  }
  return three;
}
function four(cb) {
  const four = 4;
  if (cb) {
    return cb(four);
  }
  return four;
}
function five(cb) {
  const five = 5;
  if (cb) {
    return cb(five);
  }
  return five;
}
function six(cb) {
  const six = 6;
  if (cb) {
    return cb(six);
  }
  return six;
}
function seven(cb) {
  const seven = 7;
  if (cb) {
    return cb(seven);
  }
  return seven;
}
function eight(cb) {
  const eight = 8;
  if (cb) {
    return cb(eight);
  }
  return eight;
}
function nine(cb) {
  const nine = 9;
  if (cb) {
    return cb(nine);
  }
  return nine;
}

function plus(val) {
  return (intVal) => intVal + val;
}
function minus(val) {
  return (intVal) => intVal - val;
}
function times(val) {
  return (intVal) => intVal * val;
}
function dividedBy(val) {
  return (intVal) => Math.floor(intVal / val);
}

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
