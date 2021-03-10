const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

btns.forEach((el, idx) => {
  el.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    document.querySelector(".show").classList.remove("show");
    slides[idx].classList.add("show");
  });
});
