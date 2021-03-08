const canvasEl = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeScreen = document.getElementById("show-size");

let size = 10;
let isPressed = false;
let x, y;
let color = "black";
const canvas = canvasEl.getContext("2d");

const drawLine = (x, y, x2, y2) => {
  canvas.beginPath();
  canvas.moveTo(x, y);
  canvas.lineTo(x2, y2);
  canvas.strokeStyle = color;
  canvas.lineWidth = size * 2;
  canvas.stroke();
};

const drawCircle = (x, y) => {
  canvas.beginPath();
  canvas.arc(x, y, size, 0, Math.PI * 2);
  canvas.fillStyle = color;
  canvas.fill();
};

const updateSize = () => {
  sizeScreen.innerText = size;
};
canvasEl.addEventListener("mousedown", (ev) => {
  isPressed = true;
  x = ev.offsetX;
  y = ev.offsetY;
});

canvasEl.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvasEl.addEventListener("mousemove", (ev) => {
  if (isPressed) {
    let x2 = ev.offsetX;
    let y2 = ev.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    y = y2;
    x = x2;
  }
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSize();
});
increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSize();
});
colorEl.addEventListener("change", (ev) => (color = ev.target.value));
clearEl.addEventListener("click", () => {
  canvas.clearRect(0, 0, canvasEl.width, canvasEl.height);
});
