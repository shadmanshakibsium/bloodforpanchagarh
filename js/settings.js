// ডার্ক মোড ও ভাষা কনফিগারেশন - settings.js

// পেজ লোড হওয়ার সময়
window.addEventListener("DOMContentLoaded", () => {
  // ডার্ক মোড অ্যাপ্লাই করো, যদি আগে সেট করা থাকে
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // আগে সেট করা ভাষা নিয়ে ইউজারকে সঠিক হোমপেজে রিডাইরেক্ট করো (শুধুমাত্র রুট পেজের জন্য)
  const lang = localStorage.getItem("language");
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html" || path === "/en/index.html") {
    if (lang === "en" && !path.includes("/en/")) {
      window.location.href = "/en/index.html";
    }
    if (lang === "bn" && path.includes("/en/")) {
      window.location.href = "/index.html";
    }
  }
});

// ডার্ক মোড টগল ফাংশন
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const enabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

// শুধু হোম পেজে যাওয়ার জন্য ইংরেজি স্যুইচার (প্রয়োজন নাই, তবে রেখেছি)
function switchToEnglish() {
  localStorage.setItem("language", "en");
  window.location.href = "/en/index.html";
}

function switchToBangla() {
  localStorage.setItem("language", "bn");
  window.location.href = "/index.html";
}

// যেকোন পেজ থেকে বাংলা ↔ ইংরেজি পরিবর্তনের জন্য টগল ফাংশন
function toggleLanguage() {
  const path = window.location.pathname;

  if (path.startsWith("/en/")) {
    // ইংরেজি থেকে বাংলা
    const newPath = path.replace("/en", "") || "/";
    localStorage.setItem("language", "bn");
    window.location.href = newPath;
  } else {
    // বাংলা থেকে ইংরেজি
    localStorage.setItem("language", "en");
    if (path === "/" || path === "/index.html") {
      window.location.href = "/en/index.html";
    } else {
      window.location.href = "/en" + path;
    }
  }
}
