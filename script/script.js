"use strict";

const boxes = document.querySelectorAll(".box");
const gameContainer = document.querySelector(".board");
const playerTurnEl = document.querySelector(".player-toggle");
const winnerEl = document.querySelector(".winner-win");
const tieEl = document.querySelector(".winner-draw");
const winner = document.querySelector(".winner-player");
const buttons = document.querySelector(".button");
const changeEl = document.querySelector(".button-change");
const restartEl = document.querySelector(".button-restart");
const replayEl = document.querySelector(".replay");
const nextEl = document.querySelector(".replay-next");
const previousEl = document.querySelector(".replay-previous");

let currentPlayer = ["X", "O"];
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let moves = 0;
let history = [];

changeEl.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X") {
    playerTurnEl.textContent = "O";
  } else if (playerTurnEl.textContent === "O") {
    playerTurnEl.textContent = "X";
  }
  // box.style.cursor = "not-allowed";
});

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    saveData(index);
    if (boxes.textContent === "X" || "O") {
      changeEl.style.opacity = "0";
      changeEl.style.transform = "translateY(-20rem)";
      if (playerTurnEl.textContent === "X" && box.textContent === "") {
        box.textContent = "X";
        playerTurnEl.textContent = "O";
        box.style.pointerEvents = "none";
      } else {
        box.textContent = "O";
        playerTurnEl.textContent = "X";
        box.style.pointerEvents = "none";
      }

      chickenDinner();
    }
  });
});

const saveData = (index) => {
  // console.log(index);
  let col = index % 3;
  let row = (index - col) / 3;
  board[row][col] = playerTurnEl.textContent;
  history.push(JSON.parse(JSON.stringify(board)));
  moves++;
};

function noWinner() {
  tieEl.style.opacity = "1";
  tieEl.style.fontSize = "6rem";
  restartEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  console.log("It's a tie");
  return;
}

const chickenDinner = () => {
  for (let i = 0; i < 3; i++) {
    let row = board[i][0] + board[i][1] + board[i][2];
    let col = board[0][i] + board[1][i] + board[2][i];
    let diagonal1 = board[0][0] + board[1][1] + board[2][2];
    let diagonal2 = board[0][2] + board[1][1] + board[2][0];
    if (diagonal1 === "XXX" || diagonal2 === "XXX") {
      winnerWinner();
    } else if (diagonal1 === "OOO" || diagonal2 === "OOO") {
      winnerWinner();
    } else if (row === "XXX" || col === "XXX") {
      winnerWinner();
    } else if (row === "OOO" || col === "OOO") {
      winnerWinner();
    } else if (
      board[0].indexOf("") === -1 &&
      board[1].indexOf("") === -1 &&
      board[2].indexOf("") === -1
    ) {
      noWinner();
    }
  }
};

let gameOver = false;

const winnerWinner = () => {
  if (playerTurnEl.textContent === "X") {
    winner.textContent = currentPlayer[1];
  } else if (playerTurnEl.textContent === "O") {
    winner.textContent = currentPlayer[0];
  }
  winnerEl.style.fontSize = "6rem";
  winnerEl.style.opacity = "1";
  restartEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
  return;
};

const restart = () => {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  gameContainer.style.pointerEvents = "auto";
  tieEl.style.opacity = "0";
  tieEl.style.fontSize = "1px";
  restartEl.style.opacity = "0";
  replayEl.style.opacity = "0";
  winnerEl.style.fontSize = "1px";
  winnerEl.style.opacity = "0";
  changeEl.style.transform = "translateY(0rem)";
  changeEl.style.opacity = "1";
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
};

restartEl.addEventListener("click", restart);

const previous = document.querySelector(".replay-previous");
const next = document.querySelector("replay-next");

previous.addEventListener("click", () => {
  boxes.forEach((box, index) => {
    box.textContent = history[moves - 1][index][index];
    moves--;
  });
});

next.addEventListener("click", () => {
  boxes.forEach((box, index) => {
    box.textContent = history[moves - 1][index][index];
    moves++;
  });
});
