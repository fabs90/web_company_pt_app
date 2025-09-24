document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".navbar-about");
  function t() {
    window.scrollY > 100
      ? e.classList.add("scrolled")
      : e.classList.remove("scrolled");
  }
  t(), window.addEventListener("scroll", t);
}),
  AOS.init({ once: !0 });

// Script untuk trigger modal loading
const downloadLink = document.getElementById("download-link");
const loadingModal = new bootstrap.Modal(
  document.getElementById("loadingModal")
);

downloadLink.addEventListener("click", function () {
  // Tampilkan loading saat link diklik
  loadingModal.show();

  // Tutup modal otomatis setelah beberapa detik
  // (karena browser langsung handle download, kita tidak tahu kapan selesai)
  setTimeout(() => {
    loadingModal.hide();
  }, 3000); // misal 3 detik cukup buat simulasi
});
