let weapons_list = ["rock", "paper", "scissors"];
let playerSelection = "";
let player_score_value = 0;
let computer_score_value = 0;

let computerSelection = getComputerChoice();

//Linking to html elements
const weapons_container = document.querySelectorAll(".weapons");
const player_score = document.querySelector("#player_score");
const computer_score = document.querySelector("#computer_score");
const computer_weapon = document.querySelector("#computer_weapon");

weapons_container.forEach((element) => {
  element.addEventListener("click", () => {
    computer_weapon.src = `images/icon_${computerSelection}.png`;
    playRound(element.id, computerSelection);
  });
});

function getComputerChoice() {
  return weapons_list[Math.floor(Math.random() * weapons_list.length)];
}

function playRound(playerSelection, compSelect) {
  playerSelection = playerSelection.toLowerCase();
  if (compSelect === playerSelection) {
    tieMatch();
  } else {
    switch (compSelect) {
      case "rock":
        if (playerSelection === "scissors") computerWinRound();
        else if (playerSelection === "paper") playerWinRound();
        break;
      case "paper":
        if (playerSelection === "scissors") playerWinRound();
        else if (playerSelection === "rock") computerWinRound();
        break;
      case "scissors":
        if (playerSelection === "rock") playerWinRound();
        else if (playerSelection === "paper") computerWinRound();
        break;
    }
  }
  computerSelection = getComputerChoice();
  console.log(computerSelection);
}

function playerWinRound() {
  alert("You won the round.");
  player_score_value++;
  updateScore();
}

function computerWinRound() {
  alert("Computer won the round.");
  computer_score_value++;
  updateScore();
}

function tieMatch() {
  alert("draw");
}

function updateScore() {
  player_score.innerHTML = player_score_value;
  computer_score.innerHTML = computer_score_value;
}
