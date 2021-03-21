const ImageBox = document.getElementById("image-box");
const wrapper = document.getElementById("wrap");
const times = document.getElementById("times");
let count = 0;
let clickTime = 0;

const createHeart = (ev, isSide) => {
  const heartTic = document.createElement("div");
  heartTic.classList.add("heart");
  heartTic.innerHTML = `<i class="fas fa-heart"></i>`;
  if (isSide) {
    wrapper.appendChild(heartTic);
    setTimeout(() => heartTic.remove(), 1000);
  } else {
    heartTic.style.top = `${ev.clientY - ev.target.offsetTop}px`;
    heartTic.style.left = `${ev.clientX - ev.target.offsetLeft}px`;
    ImageBox.appendChild(heartTic);
    setTimeout(() => heartTic.remove(), 1000);
  }
};

ImageBox.addEventListener("click", (ev) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 700) {
      times.innerText = ++count;
      createHeart(ev, false);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
    if (count !== 0 && count % 3 === 0) {
      createHeart(ev, true);
    }
  }
});
