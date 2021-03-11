const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const wrap = document.querySelector(".wrapper");
openBtn.addEventListener("click", () => {
  wrap.classList.remove("hidden");
  wrap.classList.add("show");
  openBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  wrap.classList.remove("show");
  wrap.classList.add("hidden");

  openBtn.style.display = "block";
});
