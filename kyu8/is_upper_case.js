String.prototype.isUpperCase = function () {
  // your code here
  console.log([...this]); // array of characters
  console.log(`${this}`); // primitive type string now
  console.log(this.toString(), typeof this.toString());

  // No auto boxing, unboxing like in Java between primitive and instance types
  console.log(this.valueOf().toLocaleUpperCase() === this.valueOf());

  return `${this}`.toUpperCase() === `${this}`;
};

console.log("C".isUpperCase());
console.log("CODE".isUpperCase());
console.log("CoDE".isUpperCase());
