

window.addEventListener("DOMContentLoaded", () => {

  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const enabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}
