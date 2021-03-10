const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => container.classList.toggle("big"));

const createBox = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      container.appendChild(box);
    }
  }
};
createBox();
