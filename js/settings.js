// ডার্ক মোড কনফিগারেশন - settings.js

window.addEventListener("DOMContentLoaded", () => {
  // 🔲 আগে সেট করা থাকলে ডার্ক মোড অ্যাপ্লাই করো
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// 🌙 ডার্ক মোড টগল ফাংশন
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const enabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}
