function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  section.style.display = "none";
  turn.style.display = "block";
  goodGame.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = ul.children[gameBoardIndex];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

const start = () => {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player name for both players");
    return;
  }

  resetGame();

  player.textContent = players[activePlayer].name;
  footer.style.display = "block";
};

const switchPlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  player.textContent = players[activePlayer].name;
};

const selectSquare = (event) => {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const currentSquare = event.target;

  const selectedCol = currentSquare.dataset.col - 1;
  const selectedRow = currentSquare.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Please select an empty field");
    return;
  }
  currentSquare.textContent = players[activePlayer].symbol;
  currentSquare.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winner = gameOver();
  console.log(winner);

  if (winner !== 0) {
    endGame(winner);
  }

  currentRound++;
  switchPlayer();
};

const gameOver = () => {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
};

const endGame = (winner) => {
  gameIsOver = true;
  section.style.display = "block";
  if (winner > 0) {
    span.textContent = players[winner - 1].name;
  } else if ((winner = -1)) {
    endMsg.textContent = `It's a draw!`;
  }
  turn.style.display = "none";
  goodGame.style.display = "block";
};
