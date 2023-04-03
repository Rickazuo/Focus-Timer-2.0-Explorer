
export const seconds = document.querySelector("#seconds");
export const minutes = document.querySelector("#minutes");

export function plusSecond() {
  const currentSeconds = parseInt(seconds.textContent);
  let newSeconds = currentSeconds + 10;

  if (newSeconds >= 60) {
    const currentMinutes = parseInt(minutes.textContent);
    const newMinutes = currentMinutes + 1;
    minutes.textContent = newMinutes.toString().padStart(2, "0");

    newSeconds = 0;
  }
  seconds.textContent = newSeconds.toString().padStart(2, "0");
}

export function minusSecond() {
  const currentSeconds = parseInt(seconds.textContent);
  let currentMinutes = parseInt(minutes.textContent);

  if (currentSeconds === 0 && currentMinutes === 0) {
    return;
  }

  let newSeconds = currentSeconds - 10;
  seconds.textContent = newSeconds.toString().padStart(2, "0");

  if (newSeconds < 0) {
    newSeconds = 50;

    if (currentMinutes > 0) {
      currentMinutes--;
      minutes.textContent = currentMinutes.toString().padStart(2, "0");
    }
  }
  seconds.textContent = newSeconds.toString().padStart(2, "0");
}
