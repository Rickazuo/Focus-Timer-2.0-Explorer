import { minusSecond, plusSecond } from "./changeSeconds.js";
import { plusMinutes, minusMinutes } from "./changeMinutes.js";

export const plusButton = document.querySelector("#plus-button");
export const minusButton = document.querySelector("#minus-button");
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


