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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  }
}