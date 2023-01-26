function removeDuplicateWords(s) {
  // your perfect code...
  const wordSet = new Set();

  return s
    .split(" ")
    .filter((el) => {
      if (wordSet.has(el)) {
        return false;
      } else {
        wordSet.add(el);
        return true;
      }
    })
    .join(" ");

  // return [...new Set(s.split(' '))].join(' ')
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
