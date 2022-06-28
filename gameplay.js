function computerPlay() {
  //randomly return rock paper scissors
  let computerPick = Math.floor(Math.random() * 3) + 1;
  if (computerPick === 1) {
    return "rock";
  } else if (computerPick === 2) {
    return "paper";
  } else return "scissors";
  console.log(computerPick);
}

const playerPrompt = prompt("Type rock, paper, or scissors");

function playerSelection() {
  if (playerPrompt != null) playerSelection = playerPrompt.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;
  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock");
    playerScore++;
    console.log(playerScore, computerScore);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
    console.log(playerScore, computerScore);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie! Go again");
    console.log(playerScore, computerScore);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats paper");
    playerScore++;
    console.log(playerScore, computerScore);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
    console.log(playerScore, computerScore);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Tie! Go again");
    console.log(playerScore, computerScore);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors");
    playerScore++;
    console.log(playerScore, computerScore);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
    console.log(playerScore, computerScore);
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie! Go again");
    console.log(playerScore, computerScore);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore > computerScore) {
    console.log("You are the winner!");
  } else if (playerScore === computerScore) {
    console.log("It's a tie!");
  } else console.log("Computer is the winner!");
}
