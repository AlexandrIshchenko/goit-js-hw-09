// const startBtn = document.querySelector("[data-start]");
// const stopBtn = document.querySelector("[data-stop]");
// const body = document.querySelector("body");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// };

// startBtn.addEventListener("click", () => {
//     console.log("start");
// });

// setTimeout(() => {
    
// }, 1000);

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

const INTERVAL_DELAY = 1000;
let intervalId = null;
let btnIsActive = (startBtn.disabled = false);
let btnIsDisable = (stopBtn.disabled = true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function onStartClick() {
    if (btnIsActive) {
    return;
    };

    intervalId = setInterval(callBackSetInterval, INTERVAL_DELAY);
    btnIsActive = (startBtn.disabled = true);
    btnIsDisable = (stopBtn.disabled = false);
}

function onStopClick() {
    clearInterval(intervalId);
    btnIsActive = (startBtn.disabled = false);
    btnIsDisable = (stopBtn.disabled = true);
}

function callBackSetInterval() {
    return (body.style.backgroundColor = getRandomHexColor());
}