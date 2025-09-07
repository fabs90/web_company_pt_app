AOS.init({
  once: true, // Mengaktifkan opsi 'once'
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 100;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
