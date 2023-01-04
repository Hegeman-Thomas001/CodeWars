function bump(x) {
  const bumpsAllowed = 15;
  let bumpsCount = 0;

  for (let chara of x) {
    if (chara === "n") {
      ++bumpsCount;
    }
  }

  return bumpsCount > bumpsAllowed ? "Car Dead" : "Woohoo!";
}

console.log(bump("n"));
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
