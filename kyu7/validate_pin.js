function validatePIN(pin) {
  //return true or false
  let isValidPIN = true;
  const pinLength = pin.length;
  console.log("0".charCodeAt(), "9".charCodeAt());

  if (pinLength === 4 || pinLength === 6) {
    for (const chara of pin) {
      const charaCode = chara.charCodeAt();
      if (charaCode < 48 || charaCode > 57) {
        isValidPIN = false;
        break;
      }
    }
  } else {
    isValidPIN = false;
  }

  return isValidPIN;
  // regex or regular expression way, BORING
  // return /^(\d{4}|\d{6})$/.test(pin);
  //
  // const pinLength = pin.length;

  // if (pinLength === 4 || pinLength === 6) {
  //   for (const chara of pin) {
  //     const charaCode = chara.charCodeAt();
  //     if (charaCode < 48 || charaCode > 57) {
  //       return false;
  //     }
  //   }
  //    return true;
  // }

  // return false;
}

console.log(validatePIN("1")); // false
console.log(validatePIN("1234")); // true
console.log(validatePIN("123456")); // true
console.log(validatePIN("-123")); // false
console.log(validatePIN("a123")); // false
console.log(validatePIN(".123")); // false
