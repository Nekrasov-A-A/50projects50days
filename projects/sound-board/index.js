const music = ["lakad", "nooo"];
const control = document.getElementById("control");

music.forEach((el) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = el;
  document.getElementById("control").appendChild(btn);
});
control.addEventListener("click", (event) => {
  music.forEach((el) => {
    const song = document.getElementById(el);
    song.pause();
    song.currentTime = 0;
  });
  if (event.target !== event.currentTarget) {
    document.getElementById(event.target.innerText).play();
  }
});
