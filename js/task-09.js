function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

const btnClick = () => {
  colorEl.textContent = document.body.style.background = getRandomHexColor();
};

btnEl.addEventListener("click", btnClick);
