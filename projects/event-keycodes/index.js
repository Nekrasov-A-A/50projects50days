const wrap = document.getElementById("wrap");

window.addEventListener("keydown", (event) => {
  wrap.innerHTML = `
    <div class='wrapper__el'> ${event.code}</div>
    <div class='wrapper__el'> ${event.key === " " ? "Space" : event.key}</div>
    <div class='wrapper__el'>  ${event.keyCode}</div>
    `;
});
