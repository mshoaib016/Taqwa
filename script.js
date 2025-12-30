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
