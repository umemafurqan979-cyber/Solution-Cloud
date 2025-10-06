document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.video-card');
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.querySelector('.modal-close');
  const muteBtn = document.getElementById('muteBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalVideo.src = card.dataset.src;
      modalVideo.play();
      modalTitle.innerText = card.dataset.title;
      modalDesc.innerText = card.dataset.desc;
      modalVideo.muted = true;
      muteBtn.innerText = "🔇";
      playPauseBtn.innerText = "⏸️";
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  muteBtn.addEventListener('click', () => {
    modalVideo.muted = !modalVideo.muted;
    muteBtn.innerText = modalVideo.muted ? "🔇" : "🔊";
  });

  playPauseBtn.addEventListener('click', () => {
    if(modalVideo.paused) {
      modalVideo.play();
      playPauseBtn.innerText = "⏸️";
    } else {
      modalVideo.pause();
      playPauseBtn.innerText = "▶️";
    }
  });
});
  document.querySelectorAll(".menu-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetMenu = document.getElementById(targetId);
      const isOpen = targetMenu.classList.contains("show");

      // Close all submenus
      document.querySelectorAll(".submenu").forEach(menu => menu.classList.remove("show"));
      document.querySelectorAll(".toggle-icon").forEach(icon => icon.textContent = "+");

      // Open selected submenu
      if (!isOpen && targetMenu) {
        targetMenu.classList.add("show");
        const icon = button.querySelector(".toggle-icon");
        if (icon) icon.textContent = "–";
      }
    });
  });

  // Back button
  document.querySelectorAll(".back-btn").forEach(back => {
    back.addEventListener("click", () => {
      back.closest(".submenu").classList.remove("show");
    });
  });

  

