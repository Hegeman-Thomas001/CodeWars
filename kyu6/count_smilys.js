//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validTopSet = new Set([":", ";"]);
  const validMidSet = new Set(["-", "~"]);
  const validBottomSet = new Set([")", "D"]);
  let countSmileys = 0;

  for (let smiley of arr) {
    const smileyLen = smiley.length;

    if (smileyLen === 2) {
      if (validTopSet.has(smiley[0]) && validBottomSet.has(smiley[1])) {
        ++countSmileys;
      }
    } else if (smileyLen === 3) {
      if (
        validTopSet.has(smiley[0]) &&
        validMidSet.has(smiley[1]) &&
        validBottomSet.has(smiley[2])
      ) {
        ++countSmileys;
      }
    }
  }

  return countSmileys;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
