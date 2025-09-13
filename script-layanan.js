document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-about");
  const scrollThreshold = 100;

  function checkScrollPosition() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  checkScrollPosition();

  window.addEventListener("scroll", checkScrollPosition);
});

AOS.init({
  once: true, // Mengaktifkan opsi 'once'
});

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol accordion di halaman
  const allButtons = document.querySelectorAll(".accordion-button");

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const isB3 = this.closest("#accordionExample");

      // Dapatkan ID dari accordion lain
      const otherAccordionId = isB3 ? "accordion-non-b3" : "accordionExample";
      const otherAccordion = document.getElementById(otherAccordionId);

      // Temukan semua item yang terbuka di accordion lain dan tutup mereka
      const openItems = otherAccordion.querySelectorAll(
        ".accordion-collapse.show"
      );
      openItems.forEach((item) => {
        const collapse = new bootstrap.Collapse(item, {
          toggle: false,
        });
        collapse.hide();
      });
    });
  });
});
