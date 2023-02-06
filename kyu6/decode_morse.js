const decodeMorse = (morseCode) => {
  // Your code here
  // You can use MORSE_CODE[morse]
  const arrMC = morseCode.split(" ");
  const arrToStr = [];

  for (const code of arrMC) {
    arrToStr.push(MORSE_CODE[code]);
  }

  let count = 0;

  return arrToStr
    .map((el) => {
      if (el === undefined && count === 0) {
        count = 1;
        return " ";
      } else if (el === undefined && count === 1) {
        count = 0;
        return "";
      }
      return el;
    })
    .join("")
    .trim();
};
