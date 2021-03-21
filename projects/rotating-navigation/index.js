const navRotate = document.getElementById("nav-rotate");
const crossBtn = document.getElementById("cross");
const burgerBtn = document.getElementById("burger");
const content = document.getElementById("content");
const container = document.getElementById("container");
const nav = document.getElementById("nav");
burgerBtn.addEventListener("click", () => {
  navRotate.style.transform = "rotate(-90deg)";
  content.style.transform = "rotate(-20deg)";
  nav.style.transform = "translateX(0%)";
});

crossBtn.addEventListener("click", () => {
  navRotate.style.transform = "rotate(0deg)";
  content.style.transform = "rotate(0deg)";
  nav.style.transform = "translateX(-100%)";
});
