const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let textIn = textEl.innerText;
let speed = speedEl.value;
let idx = 1;

const writeText = () => {
  textEl.innerText = textIn.slice(0, idx);
  idx++;
  if (idx > textIn.length) {
    idx = 1;
  }
  setTimeout(writeText, 300 / speed);
};

speedEl.addEventListener("input", (ev) => {
  speed = ev.target.value;
  if (speed > 10) {
    speed = 10;
  }
  if (speed < 1) {
    speed = 1;
  }
});

writeText();
