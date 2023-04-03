const buttons = document.querySelectorAll(".music-buttons button");
const musicFiles = {
  "wood-sound": "./assets/Floresta.wav",
  "rain-sound": "./assets/Chuva.wav",
  "town-sound": "./assets/Cafeteria.wav",
  "fire-sound": "./assets/Lareira.wav",
};

let selectedButton = null;
let audio = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedButton) {
      const defaultImage = selectedButton.querySelector("#default-button");
      const selectedImage = selectedButton.querySelector("#selected-button");
      defaultImage.style.display = "initial";
      selectedImage.style.display = "none";
      selectedButton.classList.remove("selected-music");
      if (audio) {
        audio.pause();
      }
    }

    const defaultImage = button.querySelector("#default-button");
    const selectedImage = button.querySelector("#selected-button");
    defaultImage.style.display = "none";
    selectedImage.style.display = "initial";
    button.classList.add("selected-music");
    selectedButton = button;

    const musicFile = musicFiles[button.classList[0]];
    audio = new Audio(musicFile);
    audio.play();
  });
});