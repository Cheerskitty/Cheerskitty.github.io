const input = document.querySelector("input");
const btn = document.querySelector("button");
const num = document.getElementById("num");

const wordCount = () => {
  num.textContent = 40 - input.value.length;
  if (num.textContent > 10) {
    num.style.color = "black";
    input.style.backgroundColor = "white";
  } else {
    num.style.color = "red";
    input.style.backgroundColor = "rgb(231, 215, 243)";
  }
};

const reset = () => {
  input.value = "";
  num.textContent = 40;
  num.style.color = "black";
  input.style.backgroundColor = "white";
};

input.addEventListener("input", wordCount);
btn.addEventListener("click", reset);
