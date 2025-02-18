const choiceBtns = document.querySelectorAll(".choice-btn");

let playerResultValue = "";
let cpuResultValue = "";

// Track scores
let won = 0;
let draw = 0;
let lost = 0;

// DOM elements
const playerChoiceText = document.querySelector(".player-choice-text");
const cpuChoiceText = document.querySelector(".cpu-choice-text");
const scoreWonText = document.querySelector(".score-won-text");
const scoreDrawText = document.querySelector(".score-draw-text");
const scoreLostText = document.querySelector(".score-lost-text");

choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    playerResultValue = choiceBtn.value;
    cpuResultValue = getCpuResultValue();
    updateChoices(playerResultValue, cpuResultValue);
    determineWinner(playerResultValue, cpuResultValue);
  });
});

function getCpuResultValue() {
  const cpuOptionChoices = ["rock", "paper", "scissors"];
  return cpuOptionChoices[Math.floor(Math.random() * cpuOptionChoices.length)];
}

function updateChoices(playerChoice, cpuChoice) {
  const choiceEmoji = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  playerChoiceText.textContent = choiceEmoji[playerChoice];
  cpuChoiceText.textContent = choiceEmoji[cpuChoice];
}

function determineWinner(player, cpu) {
  if (player === cpu) {
    draw++;
    scoreDrawText.textContent = draw;
  } else if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    won++;
    scoreWonText.textContent = won;
  } else {
    lost++;
    scoreLostText.textContent = lost;
  }
}
