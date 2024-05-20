`usee strict`;

// Getting Acess to the DOM Elements

const gameResult = document.querySelector(`.game-rules`);
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
    console.log(`Match Tied!`);
  } else if ((user === `rock`, machine === `paper`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    console.log(`Computer Wins!`);
  } else if ((user === `rock`, machine === `scissor`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    console.log(`User Wins!`);
  }
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
  } else if ((user === `paper`, machine === `rock`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    console.log(`User Wins!`);
  } else if ((user === `paper`, machine === `scissor`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    console.log(`Computer Wins!`);
  }
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
    console.log(`Match Tied!`);
  } else if ((user === `scissor`, machine === `rock`)) {
    computerScore++;
    updateDOM(userScore, computerScore);
    console.log(`Computer Wins!`);
  } else if ((user === `scissor`, machine === `paper`)) {
    userScore++;
    updateDOM(userScore, computerScore);
    console.log(`User Wins!`);
  }
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
