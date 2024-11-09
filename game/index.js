const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const botDisplay = document.getElementById("botDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("PlayerScoreDisplay");
const computerScoreDisplay = document.getElementById("ComputerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice){
    result = 'Draw';
  } 
  else {
    switch(playerChoice){
      case 'rock':
        result = (computerChoice === 'scissors') ? 'You win!' : 'You lose';
        break;
      case 'paper':
        result = (computerChoice === 'rock') ? 'You win!' : 'You lose';
        break;
      case 'scissors':
        result = (computerChoice === 'paper') ? 'You win!' : 'You lose';
        break;
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  botDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove('greenText', 'redText');

  switch(result){
    case 'You win!':
      resultDisplay.classList.add('greenText');
      playerScore++;
      PlayerScoreDisplay.textContent = playerScore;
      break;
    case 'You lose':
      resultDisplay.classList.add('redText');
      computerScore++;
      ComputerScoreDisplay.textContent = computerScore;
      break;
  }
}
