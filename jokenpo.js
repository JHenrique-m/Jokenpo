const buttons = document.querySelectorAll(".optPlayer");
const player_point = document.querySelector(".player_point");
const computer_point = document.querySelector(".computerpoint");
const option_computer = document.querySelector(".optComputer");
const menssage_winner = document.querySelector(".winner");
const computerOpt = ["rock", "paper", "scissors"];

var scorePlayer = 0;
var scoreComputer = 0;
var winner = "";

buttons.forEach((buttons) => {
  buttons.addEventListener("click", Jokenpo);
});

function Jokenpo(e) {
  let playerChoice = e.target.id;
  let computerChoice = computerOpt[Math.floor((Math.random() * 10) % 3)];

  if (Comparasion(playerChoice, computerChoice) == "humano") {
    menssage_winner.innerHTML = "Humano";
    scorePlayer += 1;
  } else if (Comparasion(playerChoice, computerChoice) == "computador") {
    menssage_winner.innerHTML = "Computador";
    scoreComputer += 1;
  } else {
    menssage_winner.innerHTML = "Empate";
  }

  Show_ChoiceComputer(computerChoice);

  player_point.innerHTML = scorePlayer;
  computer_point.innerHTML = scoreComputer;

  checkWinnerRound();
}

function checkWinnerRound() {
  if (scorePlayer == 5) {
    menssage_winner.innerHTML = "Humano ganhou o round !";
    scorePlayer = 0;
    scoreComputer = 0;
    const time = setTimeout(() => {
      player_point.innerHTML = scorePlayer;
      computer_point.innerHTML = scoreComputer;
      menssage_winner.innerHTML = "";
    }, 2000);
  }
  if (scoreComputer == 5) {
    menssage_winner.innerHTML = "Computador ganhou o round !";
    scorePlayer = 0;
    scoreComputer = 0;
    const time = setTimeout(() => {
      player_point.innerHTML = scorePlayer;
      computer_point.innerHTML = scoreComputer;
      menssage_winner.innerHTML = "";
    }, 2000);
  }
}
function Comparasion(playerChoice, computerChoice) {
  // Empate
  if (computerChoice == playerChoice) {
    winner = "empate";

    // Possibilidades do humano ganhar
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    winner = "humano";
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    winner = "humano";
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    winner = "humano";
  }

  // Possibilidades do computador ganhar
  else if (computerChoice == "paper" && playerChoice == "rock") {
    winner = "computador";
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    winner = "computador";
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    winner = "computador";
  }

  return winner;
}

function Show_ChoiceComputer(computerChoice) {
  if (computerChoice == "rock") {
    option_computer.innerHTML = ' <img src="imgs/pedra.png"> ';
  } else if (computerChoice == "paper") {
    option_computer.innerHTML = ' <img src="imgs/papel.png"> ';
  } else {
    option_computer.innerHTML = ' <img src="imgs/tesoura.png"> ';
  }
}
