const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    document.querySelector(".show").classList.remove("show");
    slides[idx].classList.add("show");
  });
});
