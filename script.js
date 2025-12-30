document.addEventListener("DOMContentLoaded", () => {
  const topBar = document.querySelector(".top-bar");

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
  const totalVisitors = 15451; // FIXED
  const totalObj = document.getElementById("totalVisitors");
  if (totalObj) totalObj.innerText = totalVisitors.toLocaleString();

  const onlineObj = document.getElementById("onlineNow");
  const dot = document.querySelector(".online .dot");

  function animateValue(obj, start, end, duration) {
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

  // Animate initial online value
  animateValue(
    onlineObj,
    0,
    parseInt(onlineObj.innerText.replace(/,/g, "")) || 23,
    2000
  );

  // Update Online Now every 3 sec
  setInterval(() => {
    if (!onlineObj) return;
    let current = parseInt(onlineObj.innerText.replace(/,/g, "")) || 0;
    let randomOnline = Math.floor(Math.random() * 50) + 1;

    animateValue(onlineObj, current, randomOnline, 1000);

    // restart green dot animation
    if (dot) {
      dot.style.animation = "none";
      dot.offsetHeight; // trigger reflow
      dot.style.animation = "pulse 1.5s infinite";
    }
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

  if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("show");
      overlay.classList.add("show");
      topBar.classList.add("hide"); // hide yellow bar
    });

    overlay.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      overlay.classList.remove("show");
      topBar.classList.remove("hide"); // show yellow bar
    });
  }
});
