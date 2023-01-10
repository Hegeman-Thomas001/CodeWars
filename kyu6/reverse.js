function reverse(str) {
  //WRITE SOME MAGIC
  const wordArr = str.split(" ");
  const arrToStr = [];
  let count = -1;

  for (let word of wordArr) {
    ++count;
    if (count) {
      const charaArr = [];
      for (let i = word.length - 1; i >= 0; i--) {
        charaArr.push(word[i]);
      }
      count = -1;
      arrToStr.push(charaArr.join(""));
    } else {
      arrToStr.push(word);
    }
  }

  return arrToStr.join(" ").trim();
}

console.log(reverse(""));
console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));
