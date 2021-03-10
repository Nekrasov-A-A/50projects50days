const wrap = document.getElementById("wrap");
const password = document.getElementById("password");
let blurStart = 10;

password.addEventListener("input", (event) => {
  if (event.target.value.length <= 10) {
    wrap.style.filter = `blur(${blurStart - event.target.value.length}px)`;
  }
});
