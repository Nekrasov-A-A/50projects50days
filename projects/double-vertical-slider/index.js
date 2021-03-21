const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const rigthSlides = document.querySelectorAll(".rigth-item");
const leftSlides = document.querySelectorAll(".left-item");
let currentShift = 200;
let current = 0;

const slideSlides = () => {
  rigthSlides.forEach((el) => {
    el.style.transform = `translateY(-${current * 100}%)`;
  });
  leftSlides.forEach((elem) => {
    elem.style.transform = `translateY(-${currentShift}%)`;
  });
};

upBtn.addEventListener("click", () => {
  if (currentShift <= 0) currentShift = 300;
  currentShift -= 100;

  current++;
  if (current > rigthSlides.length - 1) current = 0;

  slideSlides();
});

downBtn.addEventListener("click", () => {
  currentShift += 100;
  if (currentShift > 200) currentShift = 0;

  current--;
  if (current < 0) current = 2;

  slideSlides();
});
