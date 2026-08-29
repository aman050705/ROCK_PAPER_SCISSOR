const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("player").textContent = "You chose: " + playerChoice;
  document.getElementById("computer").textContent = "Computer chose: " + computerChoice;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "Computer Wins!";
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  document.getElementById("playerScore").textContent = "Your Score: " + playerScore;
  document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
}
