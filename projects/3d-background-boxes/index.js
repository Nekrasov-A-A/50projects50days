const btn = document.getElementById("btn");
const containerEl = document.getElementById("container");
const containerSide = window.getComputedStyle(container).width;
const containerSideNumber = +containerSide.substring(
  0,
  containerSide.length - 2
);
const shiftBGPosition = containerSideNumber / 4;

btn.addEventListener("click", () => container.classList.toggle("big"));

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * shiftBGPosition}px ${
        -i * shiftBGPosition
      }px`;
      containerEl.appendChild(box);
    }
  }
};
createBoxes();
