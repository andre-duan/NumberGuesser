let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
let generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//step4
let compareGuesses = (user, computer, target) => {
  const userG = Math.abs(user - target);
  const computerG = Math.abs(computer - target);
    return userG <= computerG;
};

//step 5
let updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else {
    computerScore ++;
  }
};

//step 6
let advanceRound = () => {
  currentRoundNumber += 1;
};