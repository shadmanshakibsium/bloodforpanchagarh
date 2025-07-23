// ডার্ক মোড ও ভাষা কনফিগারেশন - settings.js

window.addEventListener("DOMContentLoaded", () => {
  // 🔲 আগে সেট করা থাকলে ডার্ক মোড অ্যাপ্লাই করো
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // 🌐 আগে সেট করা ভাষা অনুযায়ী ইউজারকে সঠিক ভার্সনে রাখো
  const lang = localStorage.getItem("language");
  const path = window.location.pathname;

  // ✅ রিডাইরেক্ট যদি ভাষা এবং পাথ মিসম্যাচ করে
  if (lang === "en" && !path.startsWith("/en/")) {
    // যদি পাথ /en দিয়ে শুরু না করে, ইংরেজি ফোল্ডারে পাঠাও
    const newPath = "/en" + path;
    if (!window.location.pathname.startsWith("/en/")) {
      window.location.href = newPath;
    }
  }

  if (lang === "bn" && path.startsWith("/en/")) {
    // যদি পাথ ভুল করে /en থাকে অথচ ভাষা বাংলা, তাহলে সেট সরাও
    const newPath = path.replace("/en", "") || "/";
    window.location.href = newPath;
  }
});

// 🌙 ডার্ক মোড টগল ফাংশন
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const enabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

// 🌐 নির্দিষ্টভাবে ইংরেজি বা বাংলা স্যুইচ
function switchToEnglish() {
  localStorage.setItem("language", "en");
  window.location.href = "/en/index.html";
}

function switchToBangla() {
  localStorage.setItem("language", "bn");
  window.location.href = "/index.html";
}

// 🔁 যেকোন পেজ থেকে ভাষা টগল ফাংশন
function toggleLanguage() {
  const path = window.location.pathname;

  if (path.startsWith("/en/")) {
    // ইংরেজি → বাংলা
    const newPath = path.replace("/en", "") || "/";
    localStorage.setItem("language", "bn");
    window.location.href = newPath;
  } else {
    // বাংলা → ইংরেজি
    localStorage.setItem("language", "en");
    if (path === "/" || path === "/index.html") {
      window.location.href = "/en/index.html";
    } else {
      window.location.href = "/en" + path;
    }
  }
}
