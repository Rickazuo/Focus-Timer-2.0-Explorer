import { minutes, seconds } from "./changeSeconds.js";

let timerInterval;
let audio;
const volumeSliders = document.querySelectorAll(".volume-slider");
const audioElement = new Audio("./assets/alarm.mp3");

volumeSliders.forEach((slider) => {
  slider.addEventListener("change", (event) => {
    const volume = event.target.value / 100;
    audioElement.volume = volume;
  });
});

export function toggleTimer() {
  if (
    parseInt(minutes.textContent) === 0 &&
    parseInt(seconds.textContent) === 0
  ) {
    return;
  }

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  } else {
    timerInterval = setInterval(decreaseTimer, 1000);
  }
}

export function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  minutes.textContent = parseInt("00").toString().padStart(2, "0");
  seconds.textContent = parseInt("00").toString().padStart(2, "0");
}

export function decreaseTimer() {
  let currentSeconds = parseInt(seconds.textContent);
  let currentMinutes = parseInt(minutes.textContent);

  if (currentMinutes === 0 && currentSeconds === 0) {
    audioElement.play();
    clearInterval(timerInterval);
    return;
  }

  if (currentSeconds === 0) {
    currentMinutes--;
    currentSeconds = 59;
  } else {
    currentSeconds--;
  }

  minutes.textContent = currentMinutes.toString().padStart(2, "0");
  seconds.textContent = currentSeconds.toString().padStart(2, "0");
}
