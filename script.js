const topBar = document.querySelector(".top-bar");
document.addEventListener("DOMContentLoaded", () => {
  // ===== Language Switcher =====
  const languageSwitcher = document.getElementById("languageSwitcher");
  if (languageSwitcher) {
    languageSwitcher.addEventListener("change", () => {
      const lang = languageSwitcher.value;

      document.querySelectorAll("[data-en]").forEach((el) => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });

      document.body.dir = lang === "ar" ? "rtl" : "ltr";
    });
  }

  // ===== Visitors Counter =====
  let totalVisitors = 15451;
  let onlineNow = 23;

  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;

    let range = end - start;
    let current = start;
    let increment = range > 0 ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      obj.innerText = current.toLocaleString();
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
        obj.innerText = end.toLocaleString();
      }
    }, stepTime);
  }

  animateValue("totalVisitors", 0, totalVisitors, 2000);
  animateValue("onlineNow", 0, onlineNow, 2000);

  setInterval(() => {
    const obj = document.getElementById("onlineNow");
    if (!obj) return;

    let current = parseInt(obj.innerText.replace(/,/g, "")) || 0;
    let randomOnline = Math.floor(Math.random() * 50) + 1;
    animateValue("onlineNow", current, randomOnline, 1000);
  }, 3000);

  // ===== Header Scroll Effect =====
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ===== Mobile Menu =====
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    overlay.classList.add("show");
    topBar.classList.add("hide"); // ✅ YELLOW BAR HIDE
  });

  if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("show");
      overlay.classList.add("show");
      overlay.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        overlay.classList.remove("show");
        topBar.classList.remove("hide"); // ✅ YELLOW BAR SHOW BACK
      });
    });

    overlay.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      overlay.classList.remove("show");
    });
  }
});
