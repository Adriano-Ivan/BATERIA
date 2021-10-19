const playSound = function (sound) {
  const audioElement = document.querySelector(`#s_${sound}`);
  const keyElement = document.querySelector(`div[data-key='${sound}']`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 380);
  }
};
const playComposition = function (songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem.toLowerCase()}`);
    }, wait);

    wait += 200;
  }
};
document.querySelector(".composer button").addEventListener("click", () => {
  const song = document.querySelector("#input").value;
  if (song !== "") {
    const songArray = song.split("");
    playComposition(songArray);
  }
});

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.body.addEventListener("click", (event) => {
  if (event.target.className === "key") {
    playSound(event.target.dataset.key);
  }
});
