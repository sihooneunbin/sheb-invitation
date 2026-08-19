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
const copyAddress = document.getElementById("copyAddress");

if (copyAddress) {
  copyAddress.addEventListener("click", async () => {

    const address = "부산 해운대구 센텀중앙로 79";

    try {
      await navigator.clipboard.writeText(address);
      alert("주소가 복사되었습니다.");
    } catch (error) {
      alert("주소 복사에 실패했습니다.");
    }

  });
}
/* ========================================
   ACCOUNT ACCORDION
========================================= */

const accountTitles = document.querySelectorAll(".account-title");

accountTitles.forEach((title) => {

  title.addEventListener("click", () => {

    const group = title.closest(".account-group");

    group.classList.toggle("open");

  });

});
