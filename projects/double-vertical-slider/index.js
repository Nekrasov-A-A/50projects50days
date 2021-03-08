const up = document.getElementById("up");
const down = document.getElementById("down");
const rslides = document.querySelectorAll(".ritem");
const lslides = document.querySelectorAll(".litem");
let lcurrent = 200;
let current = 0;

up.addEventListener("click", () => {
  if (lcurrent <= 0) lcurrent = 300;
  lcurrent -= 100;

  current++;
  if (current > rslides.length - 1) current = 0;
  rslides.forEach((el) => {
    el.style.transform = `translateY(-${current * 100}%)`;
  });
  lslides.forEach((elem) => {
    elem.style.transform = `translateY(-${lcurrent}%)`;
  });
});
down.addEventListener("click", () => {
  lcurrent += 100;
  if (lcurrent > 200) lcurrent = 0;
  current--;
  if (current < 0) current = 2;
  rslides.forEach((el) => {
    el.style.transform = `translateY(-${current * 100}%)`;
  });
  lslides.forEach((elem) => {
    elem.style.transform = `translateY(-${lcurrent}%)`;
  });
});
