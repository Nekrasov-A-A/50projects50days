const loader = document.getElementById("loader");
const bgImg = document.getElementById("bg-img");
let startValue = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const fn = () => {
  startValue++;
  if (startValue > 99) {
    clearInterval(interval);
  }
  loader.innerHTML = `${startValue}%`;
  loader.style.opacity = scale(startValue, 0, 100, 1, 0);
  bgImg.style.filter = `blur(${scale(startValue, 0, 100, 100, 0)}px)`;
};

const interval = setInterval(fn, 30);
