const images = document.querySelectorAll("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let idx = 0;

const getNextImg = () => {
  idx++;
  if (idx >= images.length) {
    idx = 0;
  }
  images.forEach(
    (image) => (image.style.transform = `translateX(-${idx * 100}%)`)
  );
};

let intervalId = setInterval(getNextImg, 2000);

const resetInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(getNextImg, 2000);
};

nextBtn.addEventListener("click", () => {
  getNextImg();
  resetInterval();
});
prevBtn.addEventListener("click", () => {
  idx--;
  if (idx < 0) {
    idx = 4;
  }
  images.forEach(
    (image) =>
      (image.style.transform = `translateX(-${(idx + 1) * 100 - 100}%)`)
  );
  resetInterval();
});
