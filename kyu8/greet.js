function greet(name, owner) {
  // Add code here

  return name.toLowerCase() === owner.toLowerCase()
    ? "Hello boss"
    : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
