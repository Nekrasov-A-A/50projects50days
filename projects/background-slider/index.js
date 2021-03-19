const wrapperEl = document.getElementById("wrapper");
const slides = document.querySelectorAll(".slide");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

let currentPoint = 0;
const currentLength = slides.length;
let currentWidth = window.getComputedStyle(document.body).width;
let currentWidthNumber = +currentWidth.substring(0, currentWidth.length - 2);

const changeBackgroundImage = (idx) => {
  document.querySelector(".active").classList.remove("active");
  slides[idx].classList.add("active");
  let currentSlide = slides[idx];
  wrapperEl.style.backgroundImage = `url(${currentSlide.dataset.img})`;
  currentSlide.style.backgroundImage = `url(${currentSlide.dataset.img})`;
};
changeBackgroundImage(currentPoint);

if (currentWidthNumber > 700) {
  btnRight.addEventListener("click", () => {
    currentPoint++;
    if (currentPoint > currentLength - 1) currentPoint = 0;
    changeBackgroundImage(currentPoint);
  });
  btnLeft.addEventListener("click", () => {
    currentPoint--;
    if (currentPoint < 0) currentPoint = currentLength - 1;
    changeBackgroundImage(currentPoint);
  });
} else {
  const TouchBox = document.querySelector(".slide-container");
  const switchBackgroundImage = (difference) => {
    if (difference > 0) {
      currentPoint--;
      if (currentPoint < 0) currentPoint = currentLength - 1;
      changeBackgroundImage(currentPoint);
    } else {
      currentPoint++;
      if (currentPoint > currentLength - 1) currentPoint = 0;
      changeBackgroundImage(currentPoint);
    }
  };

  let leftOrRight;
  const SwitchWithTouch = (a) => {
    return (b) => {
      return a - b;
    };
  };
  TouchBox.addEventListener("touchstart", (event) => {
    leftOrRight = SwitchWithTouch(event.changedTouches[0].pageX);
  });
  TouchBox.addEventListener("touchend", (event) => {
    leftOrRight = leftOrRight(event.changedTouches[0].pageX);
    switchBackgroundImage(leftOrRight);
  });
}
