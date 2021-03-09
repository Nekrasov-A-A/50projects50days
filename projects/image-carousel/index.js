const images = document.querySelectorAll("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let idx = 0;

const nextImg = () => {
  idx++;
  if (idx >= images.length) {
    idx = 0;
  }
  images.forEach((el) => (el.style.transform = `translateX(-${idx * 100}%)`));
};

let interval = setInterval(nextImg, 2000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(nextImg, 2000);
};

next.addEventListener("click", () => {
  nextImg();
  resetInterval();
});
prev.addEventListener("click", () => {
  idx--;
  if (idx < 0) {
    idx = 4;
  }
  images.forEach(
    (el) => (el.style.transform = `translateX(-${(idx + 1) * 100 - 100}%)`)
  );
  resetInterval();
});
