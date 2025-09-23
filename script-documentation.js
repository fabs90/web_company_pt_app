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
  ],
  videoGridContainer = document.getElementById("video-grid-container"),
  videoModal = new bootstrap.Modal(document.getElementById("videoModal")),
  videoPlayer = document.getElementById("videoPlayer"),
  videoModalLabel = document.getElementById("videoModalLabel");
function createVideoThumbnail(t) {
  let e = document.createElement("div");
  return (
    (e.className = "video-thumbnail"),
    e.setAttribute("data-video-url", t.videoUrl),
    e.setAttribute("data-video-title", t.title),
    (e.innerHTML = `
        <img src="${t.thumbnail}" alt="${t.title}">
        <div class="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="video-info">${t.title}</div>
      `),
    e
  );
}
function renderVideoGallery() {
  videos.forEach((t) => {
    let e = createVideoThumbnail(t);
    e.addEventListener("click", () => {
      (videoPlayer.src = t.videoUrl),
        (videoModalLabel.textContent = t.title),
        videoModal.show();
    }),
      videoGridContainer.appendChild(e);
  });
}
document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", () => {
    videoPlayer.src = "";
  }),
  (window.onload = () => {
    renderVideoGallery();
  });
