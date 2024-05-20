`usee strict`;

// Getting Acess to the DOM Elements

const gameResult = document.getElementById(`score--winner`);
const userChosenOption = document.getElementById(`userChosen`);
const userScoreDisplay = document.querySelector(`.user--Score`);
const computerChosenOption = document.getElementById(`computerChosen`);
const computerScoreDisplay = document.querySelector(`.computer--Score`);

const rockBtn = document.getElementById(`choice-1`);
const paperBtn = document.getElementById(`choice-2`);
const scissorBtn = document.getElementById(`choice-3`);

// state variables
let userScore = 0;
let computerScore = 0;
const gameArr = [`rock`, `paper`, `scissor`];
const gameObj = {
  0: `✊`,
  1: `✋`,
  2: `✌️`,
};

// *******************************
// *******************************

// function to update DOM

const updateDOM = function (score1, score2) {
  userScoreDisplay.textContent = score1;
  computerScoreDisplay.textContent = score2;
};

// function to update game choice

const updateChoice = function (num1, num2) {
  userChosenOption.textContent = gameObj[num1];
  computerChosenOption.textContent = gameObj[num2];
};

// function to randomally generate number
const randomGenerateNumber = function () {
  return Math.floor(Math.random() * gameArr.length);
};

// Event listener to the rock btn

const rockChoice = function (user, machine) {
  if (user === machine) {
    updateDOM(userScore, computerScore);
    gameResult.textContent = `Match Tied!`;
    console.log(`Match Tied!`);
  } else if ((user === `rock`, machine === `paper`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    gameResult.textContent = `Computer Wins!`;
    console.log(`Computer Wins!`);
  } else if ((user === `rock`, machine === `scissor`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    console.log(`User Wins!`);
    gameResult.textContent = `User Wins!`;
  }
  checkWinner();
};

rockBtn.addEventListener(`click`, function () {
  let randomNum = randomGenerateNumber();
  let userOpts = `rock`;
  let computerOpts = gameArr[randomNum];

  updateChoice(0, randomNum);
  rockChoice(userOpts, computerOpts);
});

// ************************************
// ************************************
// ************************************
// ************************************

const paperChoice = function (user, machine) {
  if (user === machine) {
    updateDOM(userScore, computerScore);
    console.log(`Match Tied!`);
    gameResult.textContent = `Match Tied!`;
  } else if ((user === `paper`, machine === `rock`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    gameResult.textContent = `User Wins!`;
    console.log(`User Wins!`);
  } else if ((user === `paper`, machine === `scissor`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    gameResult.textContent = `Computer Wins!`;
    console.log(`Computer Wins!`);
  }
  checkWinner();
};

// Adding event listener to the paper button
paperBtn.addEventListener(`click`, function () {
  let randomNum = randomGenerateNumber();
  let userOpts = `paper`;
  let computerOpts = gameArr[randomNum];
  updateChoice(1, randomNum);
  paperChoice(userOpts, computerOpts);
});

// Adding Event Listener to the scissor button

const scissorChoice = function (user, machine) {
  if (user === machine) {
    updateDOM(userScore, computerScore);
    gameResult.textContent = `Match Tied!`;
    console.log(`Match Tied!`);
  } else if ((user === `scissor`, machine === `rock`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    gameResult.textContent = `Computer Wins!`;
    console.log(`Computer Wins!`);
  } else if ((user === `scissor`, machine === `paper`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    gameResult.textContent = `User Wins!`;
    console.log(`User Wins!`);
  }
  checkWinner();
};

scissorBtn.addEventListener(`click`, function () {
  let randomNum = randomGenerateNumber();
  let userOpts = `scissor`;
  let computerOpts = gameArr[randomNum];
  updateChoice(2, randomNum);
  scissorChoice(userOpts, computerOpts);
});

// ***********************************
// ***********************************

// Check Winner Functuanility to the amazon cart

const updateDOMWinner = function () {
  document.querySelector(`.computer`).classList.add(`hidden`);
  document.querySelector(`.user`).classList.add(`hidden`);
  document.querySelector(`.winner`).classList.remove(`hidden`);
};

const checkWinner = function () {
  if (userScore === 5) {
    document.getElementById(`winner-player`).textContent = `User won the game`;
    console.log(`User won the game`);
    updateDOMWinner();
  } else if (computerScore === 5) {
    console.log(`computer won the game`);
    document.getElementById(
      `winner-player`
    ).textContent = `Computer won the game`;
    updateDOMWinner();
  }
};

// getting acess to the playAgain Button

const playAgainBtn = document.querySelector(`.again`);

// Adding event listener to playAgain button to make it to the default settings to the page.
playAgainBtn.addEventListener(`click`, function () {
  document.querySelector(`.computer`).classList.remove(`hidden`);
  document.querySelector(`.user`).classList.remove(`hidden`);
  document.querySelector(`.winner`).classList.add(`hidden`);
  userScore = 0;
  computerScore = 0;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
  userChosenOption.textContent = `❓`;
  computerChosenOption.textContent = `❓`;
  gameResult.textContent = `First to score 5 points win the game`;
});
