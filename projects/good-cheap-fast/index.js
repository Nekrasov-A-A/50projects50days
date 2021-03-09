const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((el) => {
  el.addEventListener("change", (ev) => {
    if (good.checked && cheap.checked && fast.checked) {
      if (good === ev.target) {
        fast.checked = false;
      }

      if (cheap === ev.target) {
        good.checked = false;
      }

      if (fast === ev.target) {
        cheap.checked = false;
      }
    }
  });
});
