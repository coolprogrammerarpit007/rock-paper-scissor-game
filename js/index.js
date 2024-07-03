`use strict`;

// static variables

let userScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let isPlaying = true;
let winnerGamePlayer = ``;

// storing game buttons

const rockBtn = document.getElementById(`choice-1`);
const paperBtn = document.getElementById(`choice-2`);
const scissorBtn = document.getElementById(`choice-3`);

// getting the dom eements
const userChosen = document.getElementById(`userChosen`);
const computerChosen = document.getElementById(`computerChosen`);
const userScoreEl = document.getElementById(`userScore`);
const computerScoreEl = document.getElementById(`computerScore`);

const winner = document.querySelector(`.winner`);
const winnerPlayer = document.getElementById(`winner-player`);
const playAgainBtn = document.querySelector(`.again`);
const userPlayer = document.querySelector(`.user`);
const machinePlayer = document.querySelector(`.computer`);
const scoreWinner = document.getElementById(`score--winner`);
// choice objs
let choices = {
  rock: `✊`,
  paper: `✋`,
  scissor: `✌️`,
};
// console.log(choices);
// function to get random computer choice

const getComputerChoice = () => {
  const choices = [`rock`, `paper`, `scissor`];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// function to get the user choice

const userChoice = (choice) => {
  // console.log(choice);
  return choice;
};

// function to play a single round

const playRound = (humanChoice, computerChoice) => {
  // logic to win the round

  if (humanChoice === computerChoice) {
    scoreWinner.textContent = `Match Tied!`;
  } else if (humanChoice === `rock` && computerChoice === `scissor`) {
    scoreWinner.textContent = `User Won this Round!`;
    winnerGamePlayer = `User`;

    userScore++;
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    scoreWinner.textContent = `User Won this Round!`;
    winnerGamePlayer = `user`;

    userScore++;
  } else if (humanChoice === `scissor` && computerChoice === `paper`) {
    scoreWinner.textContent = `User Won this Round!`;
    winnerGamePlayer = `user`;

    userScore++;
  } else {
    scoreWinner.textContent = `Computer Won this Round!`;
    winnerGamePlayer = `computer`;

    computerScore++;
  }

  // calling function to update the dom
  updateDOM(userScore, computerScore, humanChoice, computerChoice);
};

// function to update the dom

const updateDOM = function (
  userScore,
  computerScore,
  humanChoice,
  computerChoice
) {
  // Updating the DOM
  // updating the choices
  userChosen.innerHTML = choices[humanChoice];
  computerChosen.innerHTML = choices[computerChoice];

  // updating the score
  userScoreEl.textContent = `User Score: ${userScore}`;
  computerScoreEl.textContent = `Computer Score: ${computerScore}`;
};

// Adding the event listener to all the buttons

// calling function playRound
rockBtn.addEventListener(`click`, (e) => {
  console.log(userScore, computerScore);
  if (userScore < 5 && computerScore < 5) {
    humanChoice = userChoice(`rock`);
    computerChoice = getComputerChoice();

    // calling function playRound
    playRound(humanChoice, computerChoice);
  } else {
    isPlaying = false;
    winner.classList.remove(`hidden`);
    userPlayer.classList.add(`hidden`);
    machinePlayer.classList.add(`hidden`);
    winnerPlayer.textContent = `${winnerGamePlayer} won the Game!`;
  }
});
paperBtn.addEventListener(`click`, (e) => {
  if (userScore < 5 && computerScore < 5) {
    humanChoice = userChoice(`paper`);
    computerChoice = getComputerChoice();

    // calling function playRound
    playRound(humanChoice, computerChoice);
  } else {
    isPlaying = false;
    winner.classList.remove(`hidden`);
    userPlayer.classList.add(`hidden`);
    machinePlayer.classList.add(`hidden`);
    winnerPlayer.textContent = `${winnerGamePlayer} won the Game!`;
  }
});
scissorBtn.addEventListener(`click`, (e) => {
  if (userScore < 5 && computerScore < 5) {
    humanChoice = userChoice(`scissor`);
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  } else {
    isPlaying = false;
    winner.classList.remove(`hidden`);
    userPlayer.classList.add(`hidden`);
    machinePlayer.classList.add(`hidden`);
    winnerPlayer.textContent = `${winnerGamePlayer} won the Game!`;
  }
});

// play again functuanility

const playAgain = function () {
  isPlaying = true;
  userScore = 0;
  computerScore = 0;
  scoreWinner.textContent = `First to score 5 points win the game`;
  winner.classList.add(`hidden`);
  userPlayer.classList.remove(`hidden`);
  machinePlayer.classList.remove(`hidden`);

  // Updating the DOM
  // updating the choices
  userChosen.innerHTML = `❓`;
  computerChosen.innerHTML = `❓`;

  // updating the score
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

playAgainBtn.addEventListener(`click`, playAgain);
