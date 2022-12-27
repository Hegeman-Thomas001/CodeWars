function streetFighterSelection(fighters, position, moves) {
  const ftrsInnerLen = fighters[0].length;
  const arrRet = [];
  let [pO, pI] = [...position];

  for (let move of moves) {
    if (move === "up") {
      if (pO === 0) {
        arrRet.push(fighters[pO][pI]);
      } else {
        --pO;
        arrRet.push(fighters[pO][pI]);
      }
    } else if (move === "down") {
      if (pO === 1) {
        arrRet.push(fighters[pO][pI]);
      } else {
        ++pO;
        arrRet.push(fighters[pO][pI]);
      }
    } else if (move === "left") {
      if (pI === 0) {
        pI = ftrsInnerLen - 1;
        arrRet.push(fighters[pO][pI]);
      } else {
        --pI;
        arrRet.push(fighters[pO][pI]);
      }
    } else if (move === "right") {
      if (pI === ftrsInnerLen - 1) {
        pI = 0;
        arrRet.push(fighters[pO][pI]);
      } else {
        ++pI;
        arrRet.push(fighters[pO][pI]);
      }
    }
  }

  return arrRet;
}

console.log(
  streetFighterSelection(
    [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
    ],
    [0, 0],
    ["up", "left", "right", "left", "left"]
  )
);
console.log(
  streetFighterSelection(
    [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
    ],
    [0, 0],
    ["left", "left", "left", "left", "left", "left", "left", "left"]
  )
);
console.log(
  streetFighterSelection(
    [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
    ],
    [0, 0],
    ["up", "left", "down", "right", "up", "left", "down", "right"]
  )
);
