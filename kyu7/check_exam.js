function checkExam(array1, array2) {
  // good luck
  const arrLen = array1.length;
  let score = 0;

  for (let i = 0; i < arrLen; i++) {
    const answer = array1[i];
    const studentAns = array2[i];

    if (answer === studentAns) {
      score += 4;
    } else if ("" === studentAns) {
    } else {
      score -= 1;
    }
  }

  return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0
