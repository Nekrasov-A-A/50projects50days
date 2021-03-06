const canvasEl = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeBox = document.getElementById("show-size");

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
  sizeBox.innerText = size;
};
if (
  /Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  canvasEl.setAttribute("width", "300");
  canvasEl.setAttribute("height", "300");
}
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  const addTouchOffsets = (event) => {
    var touch = event.touches[0] || event.changedTouches[0];
    var realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    event.offsetX = touch.clientX - realTarget.getBoundingClientRect().x;
    event.offsetY = touch.clientY - realTarget.getBoundingClientRect().y;
    return event;
  };

  canvasEl.addEventListener("touchstart", (ev) => {
    isPressed = true;
    let event = addTouchOffsets(ev);
    x = event.offsetX;
    y = event.offsetY;
  });

  canvasEl.addEventListener("touchend", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
  });

  canvasEl.addEventListener("touchmove", (ev) => {
    if (isPressed) {
      let event = addTouchOffsets(ev);
      let x2 = event.offsetX;
      let y2 = event.offsetY;
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      y = y2;
      x = x2;
    }
  });
} else {
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
}

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
