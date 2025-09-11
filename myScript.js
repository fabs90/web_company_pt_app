AOS.init({
  once: true, // Mengaktifkan opsi 'once'
});

new Splide(".splide", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  interval: 3000,
  gap: "1rem",
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
}).mount();

new Splide(".splide-warehouse", {
  type: "loop",
  perPage: 3,
  autoplay: true,
  interval: 3000,
  gap: "1rem",
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
}).mount();

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
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
