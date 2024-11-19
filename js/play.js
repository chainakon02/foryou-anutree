const playPauseButton = document.querySelector('.play-pause');
const musicImage = document.querySelector('.music-image');
const audio = document.querySelector('.main-song');

let isPlaying = false; // สถานะเพลง

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    // หยุดเพลงและหยุดหมุน
    audio.pause();
    musicImage.classList.remove('spin');
    playPauseButton.innerHTML = '<span class="material-symbols-rounded">play_arrow</span>';
  } else {
    // เล่นเพลงและเริ่มหมุน
    audio.play();
    musicImage.classList.add('spin');
    playPauseButton.innerHTML = '<span class="material-symbols-rounded">pause</span>';
  }
  isPlaying = !isPlaying; // สลับสถานะ
});
