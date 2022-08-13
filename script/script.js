"use strict";

const boxes = document.querySelectorAll(".box");
const gameContainer = document.querySelector(".board");

// HEADERS
const playerTurnEl = document.querySelector(".player-toggle");
const winnerEl = document.querySelector(".winner-title");
const winner = document.querySelector(".winner-player");
const buttons = document.querySelector(".button");

// BUTTONS
const changeEl = document.querySelector(".button-change");
const restartEl = document.querySelector(".button-restart");
const replayEl = document.querySelector(".replay");
const nextEl = document.querySelector(".replay-next");
const previousEl = document.querySelector(".replay-previous");

let currentPlayer = ["X", "O"];

// FIND WAY TO REMOVE/SHORTEN
const row1col1 = document.querySelector(".row-one-col-one");
const row1col2 = document.querySelector(".row-one-col-two");
const row1col3 = document.querySelector(".row-one-col-three");
const row2col1 = document.querySelector(".row-two-col-one");
const row2col2 = document.querySelector(".row-two-col-two");
const row2col3 = document.querySelector(".row-two-col-three");
const row3col1 = document.querySelector(".row-three-col-one");
const row3col2 = document.querySelector(".row-three-col-two");
const row3col3 = document.querySelector(".row-three-col-three");

// USED TO CHECK IF BOXES/TILES HAVE VALUES AND DISABLE CHANGE PLAYER BUTTON THEN CHECKS FOR WINNER EACH MOVE
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (boxes.textContent === "X" || "O") {
      changeEl.style.opacity = "0";
      changeEl.style.transform = "translateY(-20rem)";
      if (playerTurnEl.textContent === "X" && box.textContent === "") {
        box.textContent = "X";
        playerTurnEl.textContent = "O";
        box.style.cursor = "not-allowed";
      } else if (playerTurnEl.textContent === "O" && box.textContent === "") {
        box.textContent = "O";
        playerTurnEl.textContent = "X";
        box.style.cursor = "not-allowed";
      } else {
        console.log("Tile already taken");
      }
      checkWinner();
    }
  });
});

// DECLARES WINNER AND DISABLES BOARD
const winnerWinner = () => {
  if (playerTurnEl.textContent === "X") {
    winner.textContent = currentPlayer[1];
  } else if (playerTurnEl.textContent === "O") {
    winner.textContent = currentPlayer[0];
  }
  restartEl.style.opacity = "1";
  winnerEl.style.fontSize = "6rem";
  winnerEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  gameContainer.style.pointerEvents = "none";
};

// CHANGE PLAYER TURN
changeEl.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X") {
    playerTurnEl.textContent = "O";
  } else {
    playerTurnEl.textContent = "X";
  }
});

// FIND WAY TO SHORTEN
const checkWinner = () => {
  if (
    (row1col1.textContent === "X" &&
      row1col2.textContent === "X" &&
      row1col3.textContent === "X") ||
    (row1col1.textContent === "O" &&
      row1col2.textContent === "O" &&
      row1col3.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row2col1.textContent === "X" &&
      row2col2.textContent === "X" &&
      row2col3.textContent === "X") ||
    (row2col1.textContent === "O" &&
      row2col2.textContent === "O" &&
      row2col3.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row3col1.textContent === "X" &&
      row3col2.textContent === "X" &&
      row3col3.textContent === "X") ||
    (row3col1.textContent === "O" &&
      row3col2.textContent === "O" &&
      row3col3.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row1col1.textContent === "X" &&
      row2col1.textContent === "X" &&
      row3col1.textContent === "X") ||
    (row1col1.textContent === "O" &&
      row2col1.textContent === "O" &&
      row3col1.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row1col2.textContent === "X" &&
      row2col2.textContent === "X" &&
      row3col2.textContent === "X") ||
    (row1col2.textContent === "O" &&
      row2col2.textContent === "O" &&
      row3col2.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row1col3.textContent === "X" &&
      row2col3.textContent === "X" &&
      row3col3.textContent === "X") ||
    (row1col3.textContent === "O" &&
      row2col3.textContent === "O" &&
      row3col3.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row1col1.textContent === "X" &&
      row2col2.textContent === "X" &&
      row3col3.textContent === "X") ||
    (row1col1.textContent === "O" &&
      row2col2.textContent === "O" &&
      row3col3.textContent === "O")
  ) {
    winnerWinner();
  } else if (
    (row1col3.textContent === "X" &&
      row2col2.textContent === "X" &&
      row3col1.textContent === "X") ||
    (row1col3.textContent === "O" &&
      row2col2.textContent === "O" &&
      row3col1.textContent === "O")
  ) {
    winnerWinner();
  }
};

// const checkWinner = () => {
//   if ((boxes[0] && boxes[1] && boxes[2] === "X") || "O") {
//     winnerWinner();
//   }
// };
//   ) {
//     winnerWinner();
//   }
// let arr = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ];

// if (boxes[0], boxes[1], boxes[2] === )
// FIND WAY TO SHORTEN
// row1col1.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row1col1.textContent === "") {
//     row1col1.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row1col1.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row1col1.textContent === "") {
//     row1col1.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row1col1.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row1col2.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row1col2.textContent === "") {
//     row1col2.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row1col2.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row1col2.textContent === "") {
//     row1col2.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row1col2.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row1col3.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row1col3.textContent === "") {
//     row1col3.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row1col3.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row1col3.textContent === "") {
//     row1col3.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row1col3.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row2col1.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row2col1.textContent === "") {
//     row2col1.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row2col1.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row2col1.textContent === "") {
//     row2col1.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row2col1.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row2col2.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row2col2.textContent === "") {
//     row2col2.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row2col2.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row2col2.textContent === "") {
//     row2col2.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row2col2.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row2col3.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row2col3.textContent === "") {
//     row2col3.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row2col3.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row2col3.textContent === "") {
//     row2col3.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row2col3.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row3col1.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row3col1.textContent === "") {
//     row3col1.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row3col1.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row3col1.textContent === "") {
//     row3col1.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row3col1.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row3col2.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row3col2.textContent === "") {
//     row3col2.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row3col2.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row3col2.textContent === "") {
//     row3col2.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row3col2.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });

// row3col3.addEventListener("click", () => {
//   if (playerTurnEl.textContent === "X" && row3col3.textContent === "") {
//     row3col3.textContent = "X";
//     playerTurnEl.textContent = "O";
//     row3col3.style.cursor = "not-allowed";
//   } else if (playerTurnEl.textContent === "O" && row3col3.textContent === "") {
//     row3col3.textContent = "O";
//     playerTurnEl.textContent = "X";
//     row3col3.style.cursor = "not-allowed";
//   } else {
//     console.log("Tile already taken");
//   }
//   checkWinner();
// });
