const wrapper = document.getElementById("wrapper");
const TOTAL_AMOUNT = 510;

function createEL() {
  for (let i = 0; i < TOTAL_AMOUNT; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      setColorForEl(square);
    });
    square.addEventListener("mouseout", () => {
      removeColorForEl(square);
    });
    wrapper.appendChild(square);
  }
}
createEL();

function setColorForEl(el) {
  let color = getColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 5px 6px ${color}`;
  console.log(el);
}
function removeColorForEl(el) {
  el.style.backgroundColor = "#fff";
  el.style.boxShadow = `0 5px 6px rgba(0,0,0,.2)`;
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
