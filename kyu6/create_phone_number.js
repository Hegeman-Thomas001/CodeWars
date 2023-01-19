function createPhoneNumber(numbers) {
  if (numbers.length === 10) {
    const [one, two, three, four, five, six, seven, eight, nine, ten] = numbers;

    return `(${one}${two}${three}) ${four}${five}${six}-${seven}${eight}${nine}${ten}`;
  }

  return "not a valid phone number";
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
