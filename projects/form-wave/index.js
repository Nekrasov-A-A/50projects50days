const labels = document.querySelectorAll(".form-wrapper label");

labels.forEach((el, idx) => {
  el.innerHTML = el.innerText
    .split("")
    .map(
      (el, idx) => `<span style="transition-delay:${idx * 50}ms">${el}</span>`
    )
    .join("");
});
