function howMuchILoveYou(nbPetals) {
  // your code
  if (nbPetals > 0) {
    const loveArr = [
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all",
    ];

    return loveArr[(nbPetals - 1) % loveArr.length];
  }

  return "Positive integer needed";
}

console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(23));
