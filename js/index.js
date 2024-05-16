`use strict`;

// storing the choice buttons

const rockBtn = document.getElementById(`choice-1`);
const paperBtn = document.getElementById(`choice-2`);
const scissorBtn = document.getElementById(`choice-3`);
const userChosen = document.getElementById(`userChosen`);
const computerChosen = document.getElementById(`computerChosen`);

// state variables
let userScore = 0;
let computerScore = 0;
const arr = [`rock`, `paper`, `scissor`];
const gameChoices = {
  0: `✊`,
  1: `✋`,
  2: `✌️`,
};

// function to check who wins!

const checkWinner = function (userChosen, computerChosen) {};
rockBtn.addEventListener(`click`, function (e) {
  let randomChoice = Math.floor(Math.random() * 3);
  computerChosen.textContent = gameChoices[randomChoice];
  userChosen.textContent = gameChoices[0];
  let userChosenOption = `rock`;
  let computerChosenOption = arr[randomChoice];
  checkWinner(userChosenOption, computerChosenOption);
});
paperBtn.addEventListener(`click`, function (e) {});
scissorBtn.addEventListener(`click`, function (e) {});
