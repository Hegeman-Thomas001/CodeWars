function friend(friends) {
  //your code here
  const arrRet = friends.filter((el) => el.length === 4);

  return arrRet;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
