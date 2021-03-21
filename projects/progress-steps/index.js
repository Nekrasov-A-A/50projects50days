const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let count = 1;
const circlesLength = circles.length;

const makeStep = () => {
  circles.forEach((circle, idx) => {
    if (idx <= count - 1) circle.classList.add("active");
    else {
      circle.classList.remove("active");
    }
  });
  progress.style.width =
    ((document.querySelectorAll(".active").length - 1) / (circlesLength - 1)) *
      100 +
    "%";
  if (count === 1) prevBtn.disabled = true;
  else if (count === circlesLength) nextBtn.disabled = true;
  else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
};
nextBtn.addEventListener("click", () => {
  count++;
  if (count > circlesLength) count = circlesLength;
  makeStep();
});

prevBtn.addEventListener("click", () => {
  count--;
  if (count < 1) count = 1;
  makeStep();
});
