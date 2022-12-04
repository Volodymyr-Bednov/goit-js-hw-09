const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let idTimer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBodyColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', () => {
  idTimer = setInterval(setBodyColor, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(idTimer);
  startBtn.disabled = false;
});
