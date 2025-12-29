let isArabic = false;

function toggleLanguage() {
    const body = document.body;
    const html = document.getElementById("html");

    if (!isArabic) {
        body.classList.add("rtl");
        html.lang = "ar";

        document.getElementById("lang-text").innerText = "English";
        document.getElementById("logo-title").innerText = "مجموعة التقوى";
        document.getElementById("logo-sub").innerText = "خدمات PRO وحلول الأعمال";

        document.getElementById("nav-home").innerText = "الرئيسية";
        document.getElementById("nav-services").innerText = "الخدمات";
        document.getElementById("nav-about").innerText = "من نحن";
        document.getElementById("nav-contact").innerText = "اتصل بنا";
        document.getElementById("call-btn").innerText = "اتصل بنا";

        document.getElementById("badge-text").innerText = "موثوق في الإمارات";
        document.getElementById("hero-title").innerHTML =
            "شريكك الموثوق لـ <br><span>خدمات PRO في الإمارات</span>";

        document.getElementById("hero-desc").innerText =
            "حلول متكاملة للأعمال من التأسيس إلى التشغيل. نحن ندير جميع خدماتك الحكومية باحترافية وكفاءة.";

        document.getElementById("call-now").innerHTML =
            '<i class="fa-solid fa-phone"></i> اتصل الآن';

        document.getElementById("our-services").innerText = "خدماتنا";

        isArabic = true;
    } else {
        body.classList.remove("rtl");
        html.lang = "en";

        location.reload(); // back to English
    }
}
