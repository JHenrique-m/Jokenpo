const buttons = document.querySelectorAll(".optPlayer");


const scoreBoard = document.querySelector(".scoreboard");
const menssage = document.querySelector(".menssage");

const computerOpt = ["rock", "paper", "scissors"];

var scorePlayer = 0;
var scoreComputer = 0;

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = Jokenpo;
}

function Jokenpo(e) {
  let playerChoice = e.target.value;
  let computerChoice = computerOpt[Math.floor(Math.random() * 3)];

  indentChoice(computerChoice)
  Comparasion(playerChoice, computerChoice);
  Rounds();
  scoreBoard.textContent = `Player ${scorePlayer} | ${scoreComputer} Computer`;
}

function Comparasion(playerChoice, computerChoice) {
  if (computerChoice == playerChoice) {
    menssage.textContent = "Empate";
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    menssage.textContent = "Win";
    scorePlayer += 1;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    menssage.textContent = "Win";
    scorePlayer += 1;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    menssage.textContent = "Win";
    scorePlayer += 1;
  }
  // =================================
  else if (computerChoice == "paper" && playerChoice == "rock") {
    menssage.textContent = "Loste";
    scoreComputer += 1;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    menssage.textContent = "Loste";
    scoreComputer += 1;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    menssage.textContent = "Loste";
    scoreComputer += 1;
  }
}

function Rounds() {
  if (scorePlayer == 5) {
    menssage.textContent = "🥳 Winner , You won this round 🎉";
    scoreComputer = 0;
    scorePlayer = 0;
  } else if (scoreComputer == 5) {
    menssage.textContent = "☹️ Loser, Computer won this round 💻";
    scoreComputer = 0;
    scorePlayer = 0;
  }
}

function indentChoice(computerChoice){

  let computerRock = document.querySelector("#rock");
  let computerPaper = document.querySelector("#paper");
  let computerScissors = document.querySelector("#scissors");

  computerScissors.style.backgroundColor = "#2d334e"
  computerRock.style.backgroundColor = "#2d334e"
  computerPaper.style.backgroundColor = "#2d334e"

  if(computerChoice == "rock"){
    computerRock.style.backgroundColor = "#40486d"
  }
  else if(computerChoice == "paper"){
    computerPaper.style.backgroundColor = "#40486d"
  }
  else{
    computerScissors.style.backgroundColor = "#40486d"
  }

}