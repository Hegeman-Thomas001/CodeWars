function rgb(r, g, b) {
  // See waaay below for shorter version!
  const hexValMap = new Map([
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"],
  ]);
  const redStr = convert(dumbReqs(r));
  const greenStr = convert(dumbReqs(g));
  const blueStr = convert(dumbReqs(b));

  function dumbReqs(val) {
    let retVal = val;

    if (val < 0) {
      retVal = 0;
    } else if (val > 255) {
      retVal = 255;
    }

    return retVal;
  }

  function sixteensPlaceVal(val) {
    return Math.floor(val / 16);
  }

  function onesPlaceVal(rgbVal, val) {
    return rgbVal - val * 16;
  }

  function greaterThanNine(val) {
    return val > 9 ? hexValMap.get(val) : val;
  }

  function convert(val) {
    const val16 = sixteensPlaceVal(val);
    const val1 = onesPlaceVal(val, val16);

    return `${greaterThanNine(val16)}${greaterThanNine(val1)}`;
  }

  return `${redStr}${greenStr}${blueStr}`;
}

console.log(rgb(255, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(16, 121, 120));

// HAHAHAHA toString converts!
// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }
