function stockList(listOfArt, listOfCat) {
  // ...
  let sum = 0;
  const arrToStr = [];
  const catMap = new Map();

  for (const cat of listOfCat) {
    catMap.set(cat, 0);
  }

  for (const art of listOfArt) {
    const artCat = art[0];
    const val = catMap.get(artCat);

    if (val >= 0) {
      const [, count] = art.split(" ");

      catMap.set(artCat, val + +count);
    }
  }

  for (const [key, value] of catMap) {
    arrToStr.push(`(${key} : ${value})`);
    sum += value;
  }

  return sum ? arrToStr.join(" - ") : "";
}

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
);
console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  )
);
