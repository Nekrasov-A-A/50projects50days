const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let textIn = textEl.innerText;
let speed = speedEl.value;
let idx = 1;
console.log(speed);
const write = () => {
  textEl.innerText = textIn.slice(0, idx);
  idx++;
  if (idx > textIn.length) {
    idx = 1;
  }
  setTimeout(write, 300 / speed);
};

speedEl.addEventListener("input", (ev) => {
  speed = ev.target.value;
});
write();
