function lastSurvivor(letters, coords) {
  let retStr = letters;
  let argStr = letters;

  for (const el of coords) {
    retStr = `${argStr.slice(0, el)}${argStr.slice(el + 1)}`;
    argStr = retStr;
    console.log(retStr, argStr);
  }

  return retStr;
}

console.log(lastSurvivor("zbk", [2, 1]));
console.log(lastSurvivor("c", []));
