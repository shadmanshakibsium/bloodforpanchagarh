// Detect relative root for proper redirection (useful in subfolders)
function getRootPath() {
  const path = window.location.pathname;
  if (path.includes("/en/")) return "/en/index.html";
  return "/index.html";
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
  // Apply Dark Mode if enabled
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // Optional redirect from wrong home
  const lang = localStorage.getItem("language");
  const path = window.location.pathname;

  // Auto language redirect (only for root pages)
  if (path === "/" || path === "/index.html" || path === "/en/index.html") {
    if (lang === "en" && !path.includes("/en/")) {
      window.location.href = "/en/index.html";
    }
    if (lang === "bn" && path.includes("/en/")) {
      window.location.href = "/index.html";
    }
  }
});

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const enabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

// Language switchers
function switchToEnglish() {
  localStorage.setItem("language", "en");
  window.location.href = "/en/index.html";
}

function switchToBangla() {
  localStorage.setItem("language", "bn");
  window.location.href = "/index.html";
}
