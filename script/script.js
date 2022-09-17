"use strict";

const boxes = document.querySelectorAll(".box");
const gameContainer = document.querySelector(".board");
const playerTurnEl = document.querySelector(".player-toggle");
const winnerEl = document.querySelector(".winner-win");
const tieEl = document.querySelector(".winner-draw");
const winner = document.querySelector(".winner-player");
const buttons = document.querySelector(".button");
const changePlayerBtn = document.querySelector(".button-change");
const restartEl = document.querySelector(".button-restart");
const replayEl = document.querySelector(".replay");
const nextEl = document.querySelector(".replay-next");
const previousEl = document.querySelector(".replay-previous");
const xscore = document.querySelector(".x-score");
const oscore = document.querySelector(".o-score");
const redoUndo = document.querySelector(".redo-undo");
const previous = document.querySelector(".replay-previous");
const next = document.querySelector(".replay-next");
const undo = document.querySelector(".undo-logo");
const redo = document.querySelector(".redo-logo");

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let gameOver = false;
let moves = 0;
let movesList = [];
let scoreOfX = 0;
let scoreOfO = 0;
let poppedmovesList = [];

function changePlayer() {
  if (playerTurnEl.textContent === "X") {
    playerTurnEl.textContent = "O";
  } else if (playerTurnEl.textContent === "O") {
    playerTurnEl.textContent = "X";
  }
}

changePlayerBtn.addEventListener("click", changePlayer);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    saveData(index);
    undo.style.opacity = "1";
    undo.style.pointerEvents = "auto";
    if (boxes.textContent !== "") {
      changePlayerBtn.style.opacity = "0";
      changePlayerBtn.style.pointerEvents = "none";
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
      xscore.textContent = `X - ${scoreOfX}`;
      oscore.textContent = `O - ${scoreOfO}`;
      checkWinner();
    }
  });
});

function saveData(index) {
  poppedmovesList = [];
  let col = index % 3;
  let row = (index - col) / 3;
  board[row][col] = playerTurnEl.textContent;
  movesList.push(JSON.parse(JSON.stringify(board)));
  moves++;
}

function noWinner() {
  tieEl.style.opacity = "1";
  tieEl.style.fontSize = "6rem";
  restartEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  return;
}

// function checkWinner() {
//   for (let i = 0; i < 3; i++) {
//     let row = board[i][0] + board[i][1] + board[i][2];
//     let col = board[0][i] + board[1][i] + board[2][i];
//     let diagonal1 = board[0][0] + board[1][1] + board[2][2];
//     let diagonal2 = board[0][2] + board[1][1] + board[2][0];
//     if (row === "XXX" || col === "XXX") {
//       declareWinner();
//       return;
//     } else if (diagonal1 === "XXX" || diagonal1 === "OOO") {
//       declareWinner();
//       return;
//     } else if (row === "OOO" || col === "OOO") {
//       declareWinner();
//       return;
//     } else if (diagonal2 === "XXX" || diagonal2 === "OOO") {
//       declareWinner();
//       return;
//     } else if (
//       board[0].indexOf("") === -1 &&
//       board[1].indexOf("") === -1 &&
//       board[2].indexOf("") === -1
//     ) {
//       noWinner();
//       return;
//     }
//   }
// }

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    let row = board[i][0] + board[i][1] + board[i][2];
    let col = board[0][i] + board[1][i] + board[2][i];
    let diagonal1 = board[0][0] + board[1][1] + board[2][2];
    let diagonal2 = board[0][2] + board[1][1] + board[2][0];

    if (row === "XXX" || row === "OOO" || col === "XXX" || col === "OOO") {
      declareWinner();
      return;
    } else if (
      diagonal1 === "XXX" ||
      diagonal1 === "OOO" ||
      diagonal2 === "XXX" ||
      diagonal2 === "OOO"
    ) {
      declareWinner();
      return;
    } else if (
      board[0].indexOf("") === -1 &&
      board[1].indexOf("") === -1 &&
      board[2].indexOf("") === -1
    ) {
      noWinner();
      return;
    }
  }
}

xscore.textContent = `X - ${scoreOfX}`;
oscore.textContent = `O - ${scoreOfO}`;

function declareWinner() {
  if (playerTurnEl.textContent === "X") {
    winner.textContent = "O";
  } else if (playerTurnEl.textContent === "O") {
    winner.textContent = "X";
  }
  winnerEl.style.fontSize = "6rem";
  winnerEl.style.opacity = "1";
  restartEl.style.opacity = "1";
  replayEl.style.opacity = "1";
  gameOver = true;
  if (gameOver) {
    if (winner.textContent === "X") {
      scoreOfX++;
    } else if (winner.textContent === "O") {
      scoreOfO++;
    }
    xscore.textContent = `X - ${scoreOfX}`;
    oscore.textContent = `O - ${scoreOfO}`;
  }
  boxes.forEach((box) => {
    box.style.pointerEvents = "none";
  });
  return;
}

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
  movesList = [];
  redoUndo.style.opacity = "1";
  gameContainer.style.pointerEvents = "auto";
  hideBanner();
  changePlayerBtn.style.opacity = "1";
  changePlayerBtn.style.pointerEvents = "auto";
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
  undo.style.opacity = "0";
};

restartEl.addEventListener("click", restart);

function movesToBoard() {
  if (movesList.length > 0) {
    // for (let i = 0; i < boxes.length - 1; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     boxes[i].textContent = movesList[moves - 1][j][j];
    //   }
    // }
    //
    // let j = 0;
    // for (let i = 0; i < boxes.length; i++) {
    //   if ((i + 1) % 3 === 0) j++;
    //   boxes[i].textContent = movesList[moves - 1][j][(i + 3) % 3];
    // }
    //
    // for (let i = 0; i < 9; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     for (let k = 0; k < 3; j++) {
    //       boxes[i].textContent = movesList[moves - 1][j][k];
    //     }
    //   }
    // }
    //
    // [boxes[0].textContent, boxes[0].textContent, boxes[2].textContent] =
    //   movesList[moves - 1][0][
    //     (boxes[3].textContent, boxes[4].textContent, boxes[5].textContent)
    //   ] =
    //   movesList[moves - 1][1][
    //     (boxes[6].textContent, boxes[7].textContent, boxes[8].textContent)
    //   ] =
    //     movesList[moves - 1][2];
    //
    // boxes.textContent = movesList[moves - 1];
    //
    // boxes.forEach((box) => {
    //   movesList[moves - 1].forEach((array) => {
    //     box.textContent = array.textContent;
    //   });
    // });
    //
    boxes[0].textContent = movesList[moves - 1][0][0];
    boxes[1].textContent = movesList[moves - 1][0][1];
    boxes[2].textContent = movesList[moves - 1][0][2];
    boxes[3].textContent = movesList[moves - 1][1][0];
    boxes[4].textContent = movesList[moves - 1][1][1];
    boxes[5].textContent = movesList[moves - 1][1][2];
    boxes[6].textContent = movesList[moves - 1][2][0];
    boxes[7].textContent = movesList[moves - 1][2][1];
    boxes[8].textContent = movesList[moves - 1][2][2];
  } else if (movesList.length <= 0) {
    boxes.forEach((box) => {
      box.textContent = "";
    });
  }
}

previous.addEventListener("click", () => {
  next.style.opacity = "1";
  moves--;
  if (moves === 1) {
    previous.style.opacity = "0";
    previous.style.pointerEvents = "none";
  }
  if (moves < movesList.length) {
    next.style.opacity = "1";
    next.style.pointerEvents = "auto";
  }
  redoUndo.style.opacity = "0";
  redoUndo.style.pointerEvents = "none";
  movesToBoard();
});

next.addEventListener("click", () => {
  moves++;
  if (moves === movesList.length) {
    next.style.opacity = "0";
    next.style.pointerEvents = "none";
  }
  if (moves > 1) {
    previous.style.opacity = "1";
    previous.style.pointerEvents = "auto";
  }
  movesToBoard();
});

function undoMove() {
  moves--;
  board = JSON.parse(JSON.stringify(movesList[moves - 1]));
  changePlayer();

  if (moves <= movesList.length) {
    redo.style.opacity = "1";
    redo.style.pointerEvents = "auto";
  }
  poppedmovesList.push(JSON.parse(JSON.stringify(movesList.pop())));
  hideBanner();
  movesToBoard();
  boxes.forEach((box) => {
    if (box.textContent === "") {
      box.style.pointerEvents = "auto";
    }
  });
  if (gameOver) {
    if (gameOver && winner.textContent === "X") {
      scoreOfX--;
    } else {
      scoreOfO--;
    }
    xscore.textContent = `X - ${scoreOfX}`;
    oscore.textContent = `O - ${scoreOfO}`;
  }
  gameOver = false;
}

undo.addEventListener("click", () => {
  if (movesList.length > 1) {
    undoMove();
  } else if (movesList.length === 1) {
    moves--;
    changePlayer();
    poppedmovesList.push(JSON.parse(JSON.stringify(movesList.pop())));
    movesToBoard();
    boxes.forEach((box) => {
      if (box.textContent === "") {
        box.style.pointerEvents = "auto";
      }
    });
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    undo.style.opacity = "0";
    undo.style.pointerEvents = "none";
  }
});

function checkBox() {
  boxes.forEach((box) => {
    if (box.textContent === "") {
      box.style.pointerEvents = "auto";
    } else {
      box.style.pointerEvents = "none";
    }
  });
}
checkBox();

function redoMove() {
  moves++;
  if (moves >= 1) {
    undo.style.opacity = "1";
    undo.style.pointerEvents = "auto";
  }
  changePlayer();
  movesList.push(JSON.parse(JSON.stringify(poppedmovesList.pop())));

  if (poppedmovesList.length === 0) {
    redo.style.opacity = "0";
    redo.style.pointerEvents = "none";
  }

  board = JSON.parse(JSON.stringify(movesList[moves - 1]));
  movesToBoard();
  checkWinner();
  boxes.forEach((box) => {
    if (box.textContent !== "") {
      box.style.pointerEvents = "none";
    }
  });
}
redo.addEventListener("click", redoMove);
