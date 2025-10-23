const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
let isLight = false;
function ToggleMode() {
  isLight = !isLight;
  document.body.classList.toggle("light-mode", isLight);
  document.documentElement.classList.toggle("light-mode", isLight);
  themeIcon.src = isLight ? "icons/moon.svg" : "icons/sun.svg";
}
themeToggle.addEventListener("click", ToggleMode);
