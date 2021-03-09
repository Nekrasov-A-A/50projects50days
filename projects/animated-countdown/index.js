const btn = document.getElementById("btn");
const repeat = document.getElementById("repeat");
const wrap = document.getElementById("wrap");
const animateBox = document.getElementById("animate-box");
const wrapAnimate = document.getElementById("wrap-animate");
let count = 0;

const fn = () => {
  const num = document.createElement("div");
  num.classList.add("animate-box__item");
  num.innerText = count;
  ++count;
  animateBox.appendChild(num);
  setTimeout(() => {
    num.remove();
  }, 1000);
};
const getStart = () => {
  fn();
  const interval = setInterval(() => {
    fn();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    count = 0;
    wrapAnimate.classList.toggle("hidden");
    repeat.classList.toggle("hidden");
  }, 4000);
};

btn.addEventListener("click", () => {
  getStart();
  repeat.classList.toggle("hidden");
  wrapAnimate.classList.toggle("hidden");
});
getStart();
