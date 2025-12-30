const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", () => {
  const lang = languageSwitcher.value; // 'en' or 'ar'

  // Change all elements with data-en and data-ar
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // Change the page direction for Arabic
  if (lang === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }
});
// Simulated dynamic numbers for demo
let totalVisitors = 15451; // Example total visitors
let onlineNow = 23; // Example online users

// Function to animate numbers counting up
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    current += increment;
    obj.innerText = current.toLocaleString();
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// When page loads, animate the counters
window.addEventListener("DOMContentLoaded", () => {
  // Animate total visitors
  animateValue("totalVisitors", 0, totalVisitors, 2000);

  // Animate initial onlineNow value
  animateValue("onlineNow", 0, onlineNow, 2000);

  // Update onlineNow randomly every 3 seconds
  setInterval(() => {
    let randomOnline = Math.floor(Math.random() * 50) + 1; // random online users
    document.getElementById("onlineNow").innerText =
      randomOnline.toLocaleString();
  }, 3000);
});
