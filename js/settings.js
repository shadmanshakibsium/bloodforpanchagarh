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
  if (lang === "en" && path.startsWith("/en/") === false) {
    // ইংরেজি ভাষা হলেও /en না থাকলে /en যুক্ত করা যাবে, কিন্তু আপনি চান না? তাই এটা বাদ দিলাম।
    // যদি প্রয়োজন হয় uncomment করতে পারেন।
    // const newPath = "/en" + path;
    // window.location.href = newPath;
  }

  if (lang === "bn" && path.startsWith("/en/")) {
    // বাংলা ভাষায় /en থাকলে সরিয়ে দাও
    const newPath = path.replace("/en", "") || "/";
    window.location.href = newPath;
  }

  // 🔗 /en/blood/ এর ভেতর থেকে কোন লিঙ্কে ক্লিক করলে /blood/ এ নিয়ে যাবে
  if (path.startsWith("/en/blood/")) {
    const links = document.querySelectorAll("a[href^='/en/blood/']");

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const newHref = href.replace("/en", ""); // /en অংশ সরানো
        window.location.href = newHref;
      });
    });
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
  // ইংরেজি পেজে সরাসরি নিয়ে যাও (এখানে /en ছাড়া হলে ঠিক করবেন)
  const path = window.location.pathname;
  if (path.startsWith("/en/")) {
    // ইতিমধ্যে /en পাথ আছে
    window.location.reload();
  } else {
    window.location.href = "/en" + path;
  }
}

function switchToBangla() {
  localStorage.setItem("language", "bn");
  const path = window.location.pathname;
  if (path.startsWith("/en/")) {
    const newPath = path.replace("/en", "") || "/";
    window.location.href = newPath;
  } else {
    window.location.reload();
  }
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
    // ইংরেজি পাথ থেকে যাওয়ার সময় /en যোগ করা, তবে আপনি চাইলে এখানে `/en` না ও দিতে পারেন
    if (path === "/" || path === "/index.html") {
      window.location.href = "/en/index.html";
    } else {
      window.location.href = "/en" + path;
    }
  }
}
