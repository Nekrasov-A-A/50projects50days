const btnPlay = document.getElementById("btn");
const fs = document.getElementById("fs");
const sc = document.getElementById("sc");
const tc = document.getElementById("tc");
const box = document.getElementById("box");
const scoreEl = document.getElementById("score");
const timeCount = document.getElementById("time");
const insects = document.querySelectorAll(".second-screen-btn");
let h = window.getComputedStyle(box).height;
let w = window.getComputedStyle(box).width;
let hNum = Math.floor(+h.substring(0, h.length - 2));
let wNum = Math.floor(+w.substring(0, w.length - 2));
let count = 0;
let score = 0;
let min = 0;
let sec = 0;
let pick;
const gameStart = () => {
  setInterval(() => {
    count++;
    if (count > 59) {
      count = 0;
      min++;
    }
    sec = count;
    timeCount.innerHTML = `${min <= 9 ? `0${min}` : `${min}`}:${
      sec <= 9 ? `0${sec}` : `${sec}`
    }`;
  }, 1000);
};
const insectAttack = () => {
  const wrap = document.createElement("div");
  wrap.classList.add("img-wrap");
  wrap.innerHTML = `<img src='${pick}' />`;
  wrap.style.left = `${Math.floor(Math.random() * (wNum - 80))}px`;
  wrap.style.top = `${Math.floor(Math.random() * (hNum - 80))}px`;
  wrap.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  box.appendChild(wrap);
};
btnPlay.addEventListener("click", () => {
  fs.style.transform = `translateY(-100%)`;
  sc.style.transform = `translateY(0%)`;
  tc.style.transform = `translateY(100%)`;
});

insects.forEach((el) =>
  el.addEventListener("click", (ev) => {
    fs.style.transform = `translateY(-200%)`;
    sc.style.transform = `translateY(-100%)`;
    tc.style.transform = `translateY(100%)`;

    gameStart();
    pick = ev.currentTarget.childNodes[1].getAttribute("src");
    insectAttack();
  })
);
box.addEventListener("click", (ev) => {
  if (ev.target !== ev.currentTarget) {
    ev.target.remove();
    score++;
    scoreEl.innerHTML = score;
    if (score >= 2) {
      insectAttack();
      insectAttack();
    } else {
      insectAttack();
    }
    if (score === 15) {
      const elem = document.createElement("div");
      elem.classList.add("spam");
      elem.innerHTML = "GGWP";
      box.appendChild(elem);
    }
  }
});
