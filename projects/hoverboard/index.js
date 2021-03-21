const wrapper = document.getElementById("wrapper");
const CIRCLE_SIDE = 20;
const availableScreenWidth = window.screen.availWidth;
let maximumWidth = (availableScreenWidth / 100) * 40;
const TOTAL_AMOUNT = Math.floor(maximumWidth / CIRCLE_SIDE) * 20;

function createCicrles() {
  for (let i = 0; i < TOTAL_AMOUNT; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("mouseover", () => {
      setColorForCircle(circle);
    });
    circle.addEventListener("mouseout", () => {
      removeColorFromCircle(circle);
    });
    wrapper.appendChild(circle);
  }
}
createCicrles();

function setColorForCircle(circle) {
  let color = getColor();
  circle.style.backgroundColor = color;
  circle.style.boxShadow = `0 5px 6px ${color}`;
}
function removeColorFromCircle(circle) {
  circle.style.backgroundColor = "#fff";
  circle.style.boxShadow = `0 5px 6px rgba(0,0,0,.2)`;
}

function getColor() {
  const maxValue = 256;
  let result = `rgba(${getIntegerRandomNumber(
    maxValue
  )},${getIntegerRandomNumber(maxValue)},${getIntegerRandomNumber(
    maxValue
  )},${getRandomNumber(0.9)})`;
  return result;
}
function getIntegerRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
function getRandomNumber(max) {
  let num = Math.random() * max + 0.1;
  return num.toPrecision(1);
}
