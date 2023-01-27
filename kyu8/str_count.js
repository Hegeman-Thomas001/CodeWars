function strCount(str, letter) {
  //code here
  let count = 0;

  for (const chara of str) {
    if (chara === letter) {
      ++count;
    }
  }

  return count;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
