// complete the function
function solution(string) {
  const addSpaceArray = [];

  for (let chara of string) {
    const charaCode = chara.charCodeAt();

    if (charaCode > 64 && charaCode < 91) {
      addSpaceArray.push(` ${chara}`);
    } else {
      addSpaceArray.push(chara);
    }
  }

  return addSpaceArray.join("");
}

console.log(solution(""));
console.log(solution("winner"));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
