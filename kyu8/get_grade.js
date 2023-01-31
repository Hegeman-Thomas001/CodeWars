function getGrade(s1, s2, s3) {
  // Code here
  const gradeAverage = (s1 + s2 + s3) / 3;

  if (gradeAverage >= 90) {
    return "A";
  } else if (gradeAverage >= 80) {
    return "B";
  } else if (gradeAverage >= 70) {
    return "C";
  } else if (gradeAverage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
