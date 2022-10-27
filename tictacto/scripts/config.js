const openEdit = (event) => {
  editedPlayer = +event.target.dataset.player;
  aside.style.display = "block";
  backdrop.style.display = "block";
};

const closeBtn = () => {
  aside.style.display = "none";
  backdrop.style.display = "none";
  error.style.color = "black";
  error.textContent = "";
  input.value = "";
};

const savePlayer = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("playerName").trim();
  if (!name) {
    error.style.color = "red";
    error.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayer = document.getElementById(`player${editedPlayer}ID`);
  updatedPlayer.children[1].textContent = name;

  players[editedPlayer - 1].name = name;

  closeBtn();
};
