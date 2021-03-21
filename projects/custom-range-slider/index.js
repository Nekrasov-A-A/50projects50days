const range = document.getElementById("range");
const label = document.querySelector("label");
const rangeWidth = getComputedStyle(range).width;
const labelWidth = getComputedStyle(label).getPropertyValue("width");
const rangeWidthToNumber = +rangeWidth.substring(0, rangeWidth.length - 2);
const labelWidthToNumber = +labelWidth.substring(0, labelWidth.length - 2);
const max = 100;
const min = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

range.addEventListener("input", (e) => {
  const value = +e.target.value;

  const left =
    value * (rangeWidthToNumber / max) -
    labelWidthToNumber / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
  label.innerHTML = value;
});
