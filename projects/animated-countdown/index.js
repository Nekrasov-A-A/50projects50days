const btn = document.getElementById("btn");
const staticBoxEl = document.getElementById("static-box");
const animateBoxEl = document.getElementById("animate-box");
const wrapperAnimateBoxEl = document.getElementById("wrap-animate");
let count = 0;

const createNumber = () => {
  animateBoxEl.innerHTML = "";
  const numberEl = document.createElement("div");
  numberEl.classList.add("animate-box__item");
  numberEl.innerText = count;
  ++count;
  animateBoxEl.appendChild(numberEl);
};

const repeatAnimation = () => {
  createNumber();
  const interval = setInterval(() => {
    createNumber();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    count = 0;
    wrapperAnimateBoxEl.classList.toggle("hidden");
    staticBoxEl.classList.toggle("hidden");
  }, 4000);
};

btn.addEventListener("click", () => {
  repeatAnimation();
  staticBoxEl.classList.toggle("hidden");
  wrapperAnimateBoxEl.classList.toggle("hidden");
});

repeatAnimation();
