const getUserChoice = (rock) => {
  userInput = userInput.toLowerCase();
  if(UserInput === 'rock' || userInput === 'paper' || ... ) {
  return userInput;
} else {
  console.log('Error!');
}
function getComputerChoice() {
  math.random(math.floor()* 3)
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  ...
  }
}
function determineWinner(userChoice,computerChoice) {
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
};
