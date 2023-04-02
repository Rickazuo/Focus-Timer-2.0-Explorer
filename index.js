import { minusSecond, plusSecond } from "./changeSeconds.js";
import { plusMinutes, minusMinutes } from "./changeMinutes.js";
import { toggleTimer, resetTimer } from "./playPauseStop.js";

const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");
const decreaseTime = document.querySelector("#playPause-button");
const stopButton = document.querySelector("#stop-button");
const checkbox = document.querySelector("#switch-time");
let stateCheckbox = true;

checkbox.addEventListener("change", function () {
  if (this.checked) {
    stateCheckbox = false;
  } else {
    stateCheckbox = true;
  }
});

plusButton.addEventListener("click", () => {
  if (stateCheckbox == false) {
    plusSecond();
  } else {
    plusMinutes();
  }
});

minusButton.addEventListener("click", () => {
  if (stateCheckbox == false) {
    minusSecond();
  } else {
    minusMinutes();
  }
});

decreaseTime.addEventListener("click", toggleTimer);
stopButton.addEventListener("click", resetTimer);
