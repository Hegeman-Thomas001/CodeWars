const numbers = [1, 2, 3, 4, 5];

Object.assign(Array.prototype, {
  square() {
    return this.map((el) => el * el);
  },
  cube() {
    return this.map((el) => el ** 3);
  },
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0);
  },
  average() {
    return this.reduce((acc, curr) => acc + curr, 0) / this.length;
  },
  even() {
    return this.filter((el) => !(el & 1));
  },
  odd() {
    return this.filter((el) => el & 1);
  },
});

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());
