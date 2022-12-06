// parameter: integer >= one
// Return an array
// fizzbuzz(1) => [1]
// fizzbuzz(3) => [1,2,'Fizz']
// fizzbuzz(5) => [1,2,'Fizz',4,'Buzz']
// fizzbuzz(15) => [
// 1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'
// ]

// MODULUS is boring!

function fizzbuzz(n) {
  let countThree = 0;
  let countFive = 0;
  let str = "";
  const retArr = [];

  for (let i = 1; i <= n; i++) {
    ++countThree;
    ++countFive;
    //start the conditionals
    if (countThree === 3) {
      // add Fizz
      str = `${str}Fizz`;
      countThree = 0;
    }
    if (countFive === 5) {
      // add Buzz
      str = `${str}Buzz`;
      countFive = 0;
    }
    // push to array
    if (countThree === 0 || countFive === 0) {
      retArr.push(str);
      str = "";
    } else {
      retArr.push(i);
    }
  } // end for

  // return array
  return retArr;
}

console.log(fizzbuzz(1));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
