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
