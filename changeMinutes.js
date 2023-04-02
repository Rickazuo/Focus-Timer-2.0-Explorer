export const minutes = document.querySelector("#minutes");

export function plusMinutes() {
  const currentMinutes = parseInt(minutes.textContent);
  let newMinutes = currentMinutes + 5;
  minutes.textContent = newMinutes.toString().padStart(2, "0");
}

export function minusMinutes() {
  const currentMinutes = parseInt(minutes.textContent);
  let newMinutes = currentMinutes - 5;
  minutes.textContent = newMinutes.toString().padStart(2, "0");

  if (newMinutes < 0) {
    newMinutes = parseInt("00");
  }
  minutes.textContent = newMinutes.toString().padStart(2, "0");
}
