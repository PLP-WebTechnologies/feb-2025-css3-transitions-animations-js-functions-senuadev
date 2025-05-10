const root = document.documentElement;
const colorInput = document.getElementById("colorInput");
const savedColor = localStorage.getItem("themeColor");

if (savedColor) {
  root.style.setProperty("--main-color", savedColor);
  colorInput.value = savedColor;
}

function saveTheme() {
  const selectedColor = colorInput.value;
  root.style.setProperty("--main-color", selectedColor);
  localStorage.setItem("themeColor", selectedColor);
}

function animateProjects() {
  document.getElementById("project1").classList.add("pulse");
  document.getElementById("project2").classList.add("pulse");

  setTimeout(() => {
    document.getElementById("project1").classList.remove("pulse");
    document.getElementById("project2").classList.remove("pulse");
  }, 1000);
}