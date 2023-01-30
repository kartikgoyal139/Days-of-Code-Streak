const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame));

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'Draw';
  if (playerChoice === 'rock' && computerChoice === 'scissors') return 'You Win';
  if (playerChoice === 'paper' && computerChoice === 'rock') return 'You Win';
  if (playerChoice === 'scissors' && computerChoice === 'paper') return 'You Win';
  return 'You Lose';
}

function displayResult(playerChoice, computerChoice, result) {
  const resultElement = document.querySelector('#result');
  resultElement.innerHTML = `Your choice: ${playerChoice}<br>
                              Computer choice: ${computerChoice}<br>
                              Result: ${result}`;
}
