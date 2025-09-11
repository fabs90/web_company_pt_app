const videos = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "assets/vid/IMG_2286.MOV",
    title: "Gudang Proyek 1",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "assets/vid/IMG_2293.MOV",
    title: "Gudang Proyek 2",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "assets/vid/IMG_5516.MOV",
    title: "Gudang Proyek 3",
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "assets/vid/IMG_5541.MOV",
    title: "Gudang Proyek 4",
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
      videoPlayer.play(); // Putar video secara otomatis
    });
    videoGridContainer.appendChild(thumbnail);
  });
}

// Menghentikan video saat modal ditutup
document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });

// Panggil fungsi untuk merender galeri saat halaman dimuat
window.onload = () => {
  renderVideoGallery();
};
