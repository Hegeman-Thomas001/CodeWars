const rps = (p1, p2) => {
  const winMap = new Map([
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ]);

  if (p1 === p2) {
    return "Draw!";
  }

  if (p2 === winMap.get(p1)) {
    return "Player 1 won!";
  }

  return "Player 2 won!";
};

console.log(rps("rock", "rock")); // `Draw!`
console.log(rps("scissors", "rock")); // `Player 2 won!`
console.log(rps("paper", "rock")); // `Player 1 won!`
