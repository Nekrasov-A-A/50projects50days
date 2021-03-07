const wrapper = document.getElementById("wrapper");
const btnright = document.getElementById("btnright");
const btnleft = document.getElementById("btnleft");
const slides = document.querySelectorAll(".slide");
let currentPoint = 0;
const currentLength = slides.length;

const changeBG = () => {
  document.querySelector(".active").classList.remove("active");
  slides[currentPoint].classList.add("active");
  let current = slides[currentPoint];
  wrapper.style.backgroundImage = `url(${current.dataset.img})`;
  current.style.backgroundImage = `url(${current.dataset.img})`;
};

btnright.addEventListener("click", () => {
  currentPoint++;
  if (currentPoint > currentLength - 1) currentPoint = 0;
  changeBG();
});
btnleft.addEventListener("click", () => {
  currentPoint--;
  if (currentPoint < 0) currentPoint = currentLength - 1;
  changeBG();
});
changeBG();
