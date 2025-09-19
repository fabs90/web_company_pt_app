const videos = [
  {
    thumbnail: "https://img.youtube.com/vi/snJ2uw1MxIw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/snJ2uw1MxIw?autoplay=1",
    title: "Dokumentasi 1 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/K_lFY0Fwab8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/K_lFY0Fwab8?autoplay=1",
    title: "Dokumentasi 2 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/otjXc3t3XTg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/otjXc3t3XTg?autoplay=1",
    title: "Dokumentasi 3 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/hknSzWDM5yE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/hknSzWDM5yE?autoplay=1",
    title: "Dokumentasi 4 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/EnP9k_fmHiM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/EnP9k_fmHiM?autoplay=1",
    title: "Dokumentasi 5 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/iotI9MjrWSY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/iotI9MjrWSY?autoplay=1",
    title: "Dokumentasi 6 - PT Ambany Putra Perkasa",
  },
  {
    thumbnail: "https://img.youtube.com/vi/79g_MZ2hjiE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/79g_MZ2hjiE?autoplay=1",
    title: "Dokumentasi 7 - PT Ambany Putra Perkasa",
  },
];

// Mendapatkan elemen kontainer grid
const videoGridContainer = document.getElementById("video-grid-container");
const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
const videoPlayer = document.getElementById("videoPlayer");
const videoModalLabel = document.getElementById("videoModalLabel");

// Fungsi untuk membuat thumbnail video
function createVideoThumbnail(video) {
  const videoCard = document.createElement("div");
  videoCard.className = "video-thumbnail";
  videoCard.setAttribute("data-video-url", video.videoUrl);
  videoCard.setAttribute("data-video-title", video.title);
  videoCard.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}">
        <div class="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="video-info">${video.title}</div>
      `;
  return videoCard;
}

// Fungsi untuk merender galeri video
function renderVideoGallery() {
  videos.forEach((video) => {
    const thumbnail = createVideoThumbnail(video);
    thumbnail.addEventListener("click", () => {
      videoPlayer.src = video.videoUrl;
      videoModalLabel.textContent = video.title;
      videoModal.show();
    });
    videoGridContainer.appendChild(thumbnail);
  });
}

// Stop video saat modal ditutup
document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", () => {
    videoPlayer.src = "";
  });

// Panggil fungsi untuk merender galeri saat halaman dimuat
window.onload = () => {
  renderVideoGallery();
};
