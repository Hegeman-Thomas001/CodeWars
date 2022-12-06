function flyBy(lamps, drone) {
  if (lamps.length < drone.length) {
    return lamps
      .split("")
      .map(() => "o")
      .join("");
  }

  const sentinel = drone.length - 1;
  const retArrAsStr = [];

  for (let i = 0; i <= sentinel; i++) {
    retArrAsStr.push("o");
  }

  return `${retArrAsStr.join("")}${lamps.slice(sentinel + 1)}`;
}

console.log(flyBy("xxxxxx", "====T"));
