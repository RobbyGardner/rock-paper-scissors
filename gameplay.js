//play full game (5 rounds)
//start with computer and player at 0 score
//play a round, which console.logs the result of 1 round and the resulting score
//play another round, resetting computer and player selections
//console.log new result and updated score
//repeat for 5 cycles
//console.log final score and result of game

function computerChoose() {
  //randomly return rock paper scissors
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerChoose() {
  let playerPrompt = prompt("Type rock, paper, or scissors");
  if (playerPrompt != null) {
    return playerPrompt.toLowerCase();
  }
}

function playRound() {
  let playerSelection = playerChoose();
  let computerSelection = computerChoose();

  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock");
    playerObj.score = playerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerObj.score = computerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie! Go again");
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats paper");
    playerObj.score = playerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors");
    computerObj.score = computerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Tie! Go again");
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors");
    playerObj.score = playerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats rock");
    computerObj.score = computerObj.score + 1;
    console.log(playerObj.score, computerObj.score);
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie! Go again");
    console.log(playerObj.score, computerObj.score);
  }
}

function playFullGame() {
  playerObj.score = 0;
  computerObj.score = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerObj.score > computerObj.score) {
    console.log("You are the winner!");
  } else if (playerObj.score < computerObj.score) {
    console.log("Computer is the winner!");
  } else console.log("It's a tie!");
}

const playerObj = {
  score: 0,
};

const computerObj = {
  score: 0,
};
