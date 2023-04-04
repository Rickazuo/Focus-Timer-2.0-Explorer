const changeTheme = document.querySelector(".button-theme");
const backgroundTheme = document.querySelector("#body");
const lightTheme = document.querySelector("#light-theme");
const darkTheme = document.querySelector("#dark-theme");
const controlButtonsStandardTheme = document.querySelectorAll(
  ".standard-control-button"
);
const controlButtonsChangeTheme = document.querySelectorAll(
  ".change-control-button"
);
const textChange = document.querySelectorAll("p, span");

let isDarkMode = false;

changeTheme.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    backgroundTheme.classList.add("change-color");
    lightTheme.style.display = "none";
    darkTheme.style.display = "initial";
    controlButtonsStandardTheme.forEach((show) => {
      show.style.display = "none";
    });
    controlButtonsChangeTheme.forEach((hide) => {
      hide.style.display = "initial";
    });
    textChange.forEach((text) => {
      text.classList.add("p-change-theme");
    });
  } else {
    setTimeout(() => {
      backgroundTheme.classList.remove("change-color");
    }, 100);
    lightTheme.style.display = "initial";
    darkTheme.style.display = "none";
    controlButtonsStandardTheme.forEach((show) => {
      show.style.display = "initial";
    });
    controlButtonsChangeTheme.forEach((hide) => {
      hide.style.display = "none";
    });
    textChange.forEach((text) => {
      text.classList.remove("p-change-theme");
    });
  }
});
