let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");

const choices = ["rock", "paper", "scissors"];

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
    return;
  }

  const win =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  if (win) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
