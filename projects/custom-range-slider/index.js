const range = document.getElementById("range");
const label = document.querySelector("label");
const range_width = getComputedStyle(range).width;
const label_width = getComputedStyle(label).getPropertyValue("width");
const num_width = +range_width.substring(0, range_width.length - 2);
const num_label_width = +label_width.substring(0, label_width.length - 2);
const max = 100;
const min = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

range.addEventListener("input", (e) => {
  const value = +e.target.value;

  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
  label.innerHTML = value;
});
