const loaderEl = document.getElementById("loader");
const bgImageEl = document.getElementById("bg-img");
let startValue = 0;

const setValue = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const changeBlur = () => {
  startValue++;
  if (startValue > 99) {
    clearInterval(intervalId);
  }
  loaderEl.innerHTML = `${startValue}%`;
  loaderEl.style.opacity = setValue(startValue, 0, 100, 1, 0);
  bgImageEl.style.filter = `blur(${setValue(startValue, 0, 100, 100, 0)}px)`;
};

const intervalId = setInterval(changeBlur, 30);
