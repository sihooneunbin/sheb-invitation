const musicButton = document.getElementById("musicButton");
const bgMusic = document.getElementById("bgMusic");

if (musicButton && bgMusic) {
  musicButton.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicButton.classList.add("playing");
    } else {
      bgMusic.pause();
      musicButton.classList.remove("playing");
    }
  });
}
