const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let count = 1;
const len = circles.length;

const action = () => {
  circles.forEach((el, idx) => {
    if (idx <= count - 1) el.classList.add("active");
    else {
      el.classList.remove("active");
    }
  });
  progress.style.width =
    ((document.querySelectorAll(".active").length - 1) / (len - 1)) * 100 + "%";
  if (count === 1) prev.disabled = true;
  else if (count === len) next.disabled = true;
  else {
    next.disabled = false;
    prev.disabled = false;
  }
};
next.addEventListener("click", () => {
  count++;
  if (count > len) count = len;
  action();
});

prev.addEventListener("click", () => {
  count--;
  if (count < 1) count = 1;
  action();
});
