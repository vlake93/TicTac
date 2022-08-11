"use strict";

const playerTurnEl = document.querySelector(".player-toggle");
const changeEl = document.querySelector(".change");
const winnerEl = document.querySelector(".winner-title");
let gameOver = false;

// FIND WAY TO REMOVE
const row1col1 = document.querySelector(".row-one-col-one");
const row1col2 = document.querySelector(".row-one-col-two");
const row1col3 = document.querySelector(".row-one-col-three");
const row2col1 = document.querySelector(".row-two-col-one");
const row2col2 = document.querySelector(".row-two-col-two");
const row2col3 = document.querySelector(".row-two-col-three");
const row3col1 = document.querySelector(".row-three-col-one");
const row3col2 = document.querySelector(".row-three-col-two");
const row3col3 = document.querySelector(".row-three-col-three");

const boxes = document.querySelectorAll(".box");

// USED TO CHECK IF BOXES/TILES HAVE VALUES AND DISABLE CHANGE PLAYER
// STUDY THIS
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (boxes.textContent === "X" || "O") {
      changeEl.style.opacity = "0";
      changeEl.style.transform = "translateY(-20rem)";
    }
  });
});

const winnerWinner = () => {
  winnerEl.style.fontSize = "6rem";
  winnerEl.style.opacity = "1";
  console.log(`Player X is the winner`);
  gameOver = false;
};

// CHANGE PLAYER TURN
changeEl.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X") {
    playerTurnEl.textContent = "O";
  } else {
    playerTurnEl.textContent = "X";
  }
});

// INCOMPLETE CHECK WINNERS
const checkWinner = () => {
  if (
    row1col1.textContent === "X" &&
    row1col2.textContent === "X" &&
    row1col3.textContent === "X"
  ) {
    winnerWinner();
  }
};

// Make a varaiable "gameOver" and set to false.
// if gameOver = true, show `${player} is the winner!`
// Show replay or restart

// MAKE CODE SHORTER
row1col1.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row1col1.textContent === "") {
    row1col1.textContent = "X";
    playerTurnEl.textContent = "O";
    row1col1.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row1col1.textContent === "") {
    row1col1.textContent = "O";
    playerTurnEl.textContent = "X";
    row1col1.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
  checkWinner();
});

row1col2.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row1col2.textContent === "") {
    row1col2.textContent = "X";
    playerTurnEl.textContent = "O";
    row1col2.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row1col2.textContent === "") {
    row1col2.textContent = "O";
    playerTurnEl.textContent = "X";
    row1col2.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
  checkWinner();
});

row1col3.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row1col3.textContent === "") {
    row1col3.textContent = "X";
    playerTurnEl.textContent = "O";
    row1col3.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row1col3.textContent === "") {
    row1col3.textContent = "O";
    playerTurnEl.textContent = "X";
    row1col3.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
  checkWinner();
});

row2col1.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row2col1.textContent === "") {
    row2col1.textContent = "X";
    playerTurnEl.textContent = "O";
    row2col1.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row2col1.textContent === "") {
    row2col1.textContent = "O";
    playerTurnEl.textContent = "X";
    row2col1.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});

row2col2.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row2col2.textContent === "") {
    row2col2.textContent = "X";
    playerTurnEl.textContent = "O";
    row2col2.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row2col2.textContent === "") {
    row2col2.textContent = "O";
    playerTurnEl.textContent = "X";
    row2col2.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});

row2col3.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row2col3.textContent === "") {
    row2col3.textContent = "X";
    playerTurnEl.textContent = "O";
    row2col3.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row2col3.textContent === "") {
    row2col3.textContent = "O";
    playerTurnEl.textContent = "X";
    row2col3.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});

row3col1.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row3col1.textContent === "") {
    row3col1.textContent = "X";
    playerTurnEl.textContent = "O";
    row3col1.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row3col1.textContent === "") {
    row3col1.textContent = "O";
    playerTurnEl.textContent = "X";
    row3col1.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});

row3col2.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row3col2.textContent === "") {
    row3col2.textContent = "X";
    playerTurnEl.textContent = "O";
    row3col2.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row3col2.textContent === "") {
    row3col2.textContent = "O";
    playerTurnEl.textContent = "X";
    row3col2.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});

row3col3.addEventListener("click", () => {
  if (playerTurnEl.textContent === "X" && row3col3.textContent === "") {
    row3col3.textContent = "X";
    playerTurnEl.textContent = "O";
    row3col3.style.cursor = "not-allowed";
  } else if (playerTurnEl.textContent === "O" && row3col3.textContent === "") {
    row3col3.textContent = "O";
    playerTurnEl.textContent = "X";
    row3col3.style.cursor = "not-allowed";
  } else {
    console.log("Tile already taken");
  }
});
