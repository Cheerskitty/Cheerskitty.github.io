const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const edit1 = document.querySelector(".edit1");
const edit2 = document.querySelector(".edit2");
const h1 = document.querySelector("h1");
const aside = document.querySelector("aside");
const backdrop = document.querySelector(".back-drop");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const input = document.querySelector("input");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const form = document.querySelector("form");
const error = document.getElementById("error");
const startBtn = document.getElementById("startBtn");
const ul = document.querySelector("ul");
const footer = document.querySelector("footer");
const player = document.getElementById("player");
const section = document.querySelector("section");
const span = document.querySelector("span");
const endMsg = document.getElementById("msg");
const turn = document.getElementById("turn");
const goodGame = document.getElementById("goodGame");

edit1.addEventListener("click", openEdit);
edit2.addEventListener("click", openEdit);
cancel.addEventListener("click", closeBtn);
startBtn.addEventListener("click", start);
form.addEventListener("submit", savePlayer);
ul.addEventListener("click", selectSquare);

// for (const square of squares) {
//   square.addEventListener("click", selectSquare);
// }
