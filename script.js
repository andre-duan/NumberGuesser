let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

let compareGuesses = (user, computer, target) => {
  const userG = Math.abs(user - target);
  const computerG = Math.abs(computer - target);
    return userG <= computerG;
};

let updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else {
    computerScore ++;
  }
};

let advanceRound = () => {
  currentRoundNumber += 1;
};
