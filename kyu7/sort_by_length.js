function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  const retArr = array.map((el) => el).sort((a, b) => a.length - b.length);

  return retArr;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
