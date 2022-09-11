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
let movesArr = [];

function changePlayer() {
  if (playerTurnEl.textContent === "X") {
    playerTurnEl.textContent = "O";
  } else if (playerTurnEl.textContent === "O") {
    playerTurnEl.textContent = "X";
  }
}

changeEl.addEventListener("click", changePlayer);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // if (poppedMovesArr.length > 0) {
    //   poppedMovesArr.push(movesArr.pop());
    // }
    // if (moves !== movesArr.length - 1) {
    //   // while (movesArr.length - 1 !== moves) {
    //   //   movesArr =
    //   // }
    // }
    saveData(index);
    undo.style.opacity = "1";
    undo.style.pointerEvents = "auto";
    if (boxes.textContent === "X" || "O") {
      changeEl.style.opacity = "0";
      changeEl.style.pointerEvents = "none";
      if (playerTurnEl.textContent === "X" && box.textContent === "") {
        box.textContent = "X";
        playerTurnEl.textContent = "O";
        box.style.pointerEvents = "none";
      } else {
        box.textContent = "O";
        playerTurnEl.textContent = "X";
        box.style.pointerEvents = "none";
      }

      redo.style.opacity = "0";
      redo.style.pointerEvents = "none";
      gameOver = false;
      // xscore.textContent = `X - ${scoreOfX}`;
      // oscore.textContent = `O - ${scoreOfO}`;
      // board = movesArr[moves - 1];
      console.log(moves);
      console.log(`This is movesArr`);
      console.log(movesArr);
      console.log(`This is board`);
      console.log(board);
      console.log(`This is poppedArr`);
      console.log(poppedMovesArr);
      chickenDinner();
    }
  });
});

const saveData = (index) => {
  poppedMovesArr = [];
  let col = index % 3;
  let row = (index - col) / 3;
  board[row][col] = playerTurnEl.textContent;
  // if (poppedMovesArr.length > 0)
  movesArr.push(JSON.parse(JSON.stringify(board)));
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

const xscore = document.querySelector(".x-score");
const oscore = document.querySelector(".o-score");
let scoreOfX = 0;
let scoreOfO = 0;
// let scores = [0, 0];

xscore.textContent = `X - ${scoreOfX}`;
oscore.textContent = `O - ${scoreOfO}`;

let gameOver = false;

const winnerWinner = () => {
  movesToBoard();
  if (playerTurnEl.textContent === "X") {
    winner.textContent = currentPlayer[1];
  } else if (playerTurnEl.textContent === "O") {
    winner.textContent = currentPlayer[0];
  }

  winnerEl.style.fontSize = "6rem";
  winnerEl.style.opacity = "1";
  restartEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  // scores[0](JSON.parse(JSON.stringify(scoreOfX)));
  // scores[1](JSON.parse(JSON.stringify(scoreOfO)));
  gameOver = true;
  // if (gameOver && winner.textContent === "X") {
  //   scoreOfX++;
  // } else {
  //   scoreOfO++;
  // }
  xscore.textContent = `X - ${scoreOfX}`;
  oscore.textContent = `O - ${scoreOfO}`;
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
};

function hideBanner() {
  tieEl.style.opacity = "0";
  tieEl.style.fontSize = "1px";
  restartEl.style.opacity = "0";
  replayEl.style.opacity = "0";
  winnerEl.style.fontSize = "1px";
  winnerEl.style.opacity = "0";
}

const restart = () => {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  moves = 0;
  movesArr = [];
  redoUndo.style.opacity = "1";
  gameContainer.style.pointerEvents = "auto";
  hideBanner();
  changeEl.style.opacity = "1";
  changeEl.style.pointerEvents = "auto";
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
  undo.style.opacity = "0";
};

restartEl.addEventListener("click", restart);

function movesToBoard() {
  if (movesArr.length > 0) {
    boxes[0].textContent = movesArr[moves - 1][0][0];
    boxes[1].textContent = movesArr[moves - 1][0][1];
    boxes[2].textContent = movesArr[moves - 1][0][2];
    boxes[3].textContent = movesArr[moves - 1][1][0];
    boxes[4].textContent = movesArr[moves - 1][1][1];
    boxes[5].textContent = movesArr[moves - 1][1][2];
    boxes[6].textContent = movesArr[moves - 1][2][0];
    boxes[7].textContent = movesArr[moves - 1][2][1];
    boxes[8].textContent = movesArr[moves - 1][2][2];
  } else if (movesArr.length <= 1) {
    boxes[0].textContent = "";
    boxes[1].textContent = "";
    boxes[2].textContent = "";
    boxes[3].textContent = "";
    boxes[4].textContent = "";
    boxes[5].textContent = "";
    boxes[6].textContent = "";
    boxes[7].textContent = "";
    boxes[8].textContent = "";
  }
}
const redoUndo = document.querySelector(".redo-undo");
const previous = document.querySelector(".replay-previous");
const next = document.querySelector(".replay-next");

previous.addEventListener("click", () => {
  next.style.opacity = "1";
  moves--;
  if (moves === 1) {
    previous.style.opacity = "0";
    previous.style.pointerEvents = "none";
  }
  if (moves < movesArr.length) {
    next.style.opacity = "1";
    next.style.pointerEvents = "auto";
  }
  redoUndo.style.opacity = "0";
  redoUndo.style.pointerEvents = "none";
  movesToBoard();
});

next.addEventListener("click", () => {
  moves++;
  if (moves === movesArr.length) {
    next.style.opacity = "0";
    next.style.pointerEvents = "none";
  }
  if (moves > 1) {
    previous.style.opacity = "1";
    previous.style.pointerEvents = "auto";
  }
  movesToBoard();
});

const undo = document.querySelector(".undo-logo");
const redo = document.querySelector(".redo-logo");

let poppedMovesArr = [];

function undoMove() {
  moves--;
  changePlayer();
  boxes.forEach((box) => {
    box.style.pointerEvents = "auto";
  });
  gameOver = false;
  // if (moves === 1) {
  //   undo.style.opacity = "0";
  //   undo.style.pointerEvents = "none";
  // }
  if (moves < movesArr.length) {
    redo.style.opacity = "1";
    redo.style.pointerEvents = "auto";
  }
  if (movesArr.length > 0) {
    poppedMovesArr.push(movesArr.pop());
  }
  hideBanner();
  board = movesArr[moves - 1];
  movesToBoard();
  console.log(moves);
  console.log(`this is movesArr`);
  console.log(movesArr);
  console.log(`this is board`);
  console.log(board);
  console.log(`This is poppedArr`);
  console.log(poppedMovesArr);
}

undo.addEventListener("click", () => {
  if (movesArr.length > 1) {
    undoMove();
  } else if (movesArr.length === 1) {
    moves--;
    changePlayer();
    poppedMovesArr.push(movesArr.pop());
    movesToBoard();
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    undo.style.opacity = "0";
    undo.style.pointerEvents = "none";
    console.log(moves);
    console.log(`this is movesArr`);
    console.log(movesArr);
    console.log(`this is board`);
    console.log(board);
    console.log(`This is poppedArr`);
    console.log(poppedMovesArr);
  }
});

// undo.addEventListener("click", () => {
//   moves--;
//   changePlayer();
//   boxes.forEach((box) => {
//     box.style.pointerEvents = "auto";
//   });
//   // boxes.forEach((box) => {
//   //   box.style.pointerEvents = "auto";
//   //   if (box.textContent !== "") {
//   //     box.style.pointerEvents = "none";
//   //   }
//   // });
//   // if (gameOver) {
//   //   if (playerTurnEl === "X") {
//   //     scoreOfO--;
//   //   } else if (playerTurnEl === "O") {
//   //     scoreOfX--;
//   //   }
//   // }
//   // xscore.textContent = `X - ${scoreOfX}`;
//   // oscore.textContent = `O - ${scoreOfO}`;
//   gameOver = false;
//   if (moves === 1) {
//     undo.style.opacity = "0";
//     undo.style.pointerEvents = "none";
//   }
//   // if (moves === 1) {
//   // undo.style.opacity = "0";
//   // undo.style.pointerEvents = "none";
//   // }
//   if (moves < movesArr.length) {
//     redo.style.opacity = "1";
//     redo.style.pointerEvents = "auto";
//   }
//   if (movesArr.length > 0) {
//     poppedMovesArr.push(movesArr.pop());
//   }
//   hideBanner();
//   board = movesArr[moves - 1];
//   // if (movesArr > 0) {
//   // }
//   movesToBoard();
//   console.log(moves);
//   console.log(`this is movesArr`);
//   console.log(movesArr);
//   console.log(`this is board`);
//   console.log(board);
//   console.log(`This is poppedArr`);
//   console.log(poppedMovesArr);
// });

function redoMove() {
  moves++;
  // movesToBoard();
  changePlayer();
  boxes.forEach((box) => {
    box.style.pointerEvents = "auto";
  });
  // if (moves === movesArr.length) {
  //   redo.style.opacity = "0";
  //   redo.style.pointerEvents = "none";
  // }
  // if (moves > 1) {
  //   undo.style.opacity = "1";
  //   undo.style.pointerEvents = "auto";
  // }
  if (poppedMovesArr.length > 0) {
    movesArr.push(poppedMovesArr.pop());
  }

  if (poppedMovesArr.length === 0) {
    redo.style.opacity = "0";
    redo.style.pointerEvents = "none";
  }
  board = movesArr[moves - 1];
  movesToBoard();
  chickenDinner();
  console.log(moves);
  console.log(`this is movesArr`);
  console.log(movesArr);
  console.log(`this is board`);
  console.log(board);
  console.log(`This is poppedArr`);
  console.log(poppedMovesArr);
}

redo.addEventListener("click", () => {
  if (movesArr.length >= 1) {
    redoMove();
  } else if (movesArr.length === 0) {
    moves++;
    movesArr.push(poppedMovesArr.pop());
    movesToBoard();
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    undo.style.opacity = "0";
    undo.style.pointerEvents = "none";
    console.log(moves);
    console.log(`this is movesArr`);
    console.log(movesArr);
    console.log(`this is board`);
    console.log(board);
    console.log(`This is poppedArr`);
    console.log(poppedMovesArr);
  }
  if (moves > 0) {
    undo.style.opacity = "1";
    undo.style.pointerEvents = "auto";
  }
});

// redo.addEventListener("click", () => {
//   movesToBoard();
//   moves++;
//   changePlayer();
//   boxes.forEach((box) => {
//     box.style.pointerEvents = "auto";
//   });
//   if (moves === movesArr.length) {
//     redo.style.opacity = "0";
//     redo.style.pointerEvents = "none";
//   }
//   if (moves > 1) {
//     undo.style.opacity = "1";
//     undo.style.pointerEvents = "auto";
//   }
//   if (poppedMovesArr.length > 0) {
//     movesArr.push(poppedMovesArr.pop());
//   }

//   if (poppedMovesArr.length === 0) {
//     redo.style.opacity = "0";
//     redo.style.pointerEvents = "none";
//   }
//   // if(movesArr.length)
//   // for (let i = 0; i < board.length; i++) {
//     // }
//     board = movesArr[moves - 1];
//   chickenDinner();
//   console.log(moves);
//   console.log(`this is movesArr`);
//   console.log(movesArr);
//   console.log(`this is board`);
//   console.log(board);
//   console.log(`This is poppedArr`);
//   console.log(poppedMovesArr);
// });

// FIX THE BOARD!!!!!

// REDO BUTTON IF MOVESARR.LENGTH === 0  movesArr.push(poppedMovesArr.pop()) movesToBoard();
