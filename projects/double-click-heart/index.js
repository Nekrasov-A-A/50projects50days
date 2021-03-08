const dclick = document.getElementById("dclick");
const wrap = document.getElementById("wrap");
const times = document.getElementById("times");
let count = 0;
let clickTime = 0;

const createHeart = (ev) => {
  const heartTic = document.createElement("div");
  heartTic.classList.add("heart");
  heartTic.innerHTML = `<i class="fas fa-heart"></i>`;
  heartTic.style.top = `${ev.clientY - ev.target.offsetTop}px`;
  heartTic.style.left = `${ev.clientX - ev.target.offsetLeft}px`;
  console.log(ev.clientY, ev.clientX);
  dclick.appendChild(heartTic);
  setTimeout(() => heartTic.remove(), 1000);
};

const createSideHeart = () => {
  const heartTic = document.createElement("div");
  heartTic.classList.add("heart");
  heartTic.innerHTML = `<i class="fas fa-heart"></i>`;
  wrap.appendChild(heartTic);
  setTimeout(() => heartTic.remove(), 1000);
};

dclick.addEventListener("click", (ev) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 700) {
      times.innerText = ++count;
      createHeart(ev);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
  if (count % 3 === 0) {
    createSideHeart();
  }
});
