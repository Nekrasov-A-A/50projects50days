const clickControl = document.getElementById("click-control");

clickControl.addEventListener("click", (event) => {
  if (
    event.target !== event.currentTarget &&
    !event.target.classList.contains("open") &&
    event.target.classList.contains("container__img")
  ) {
    document.querySelector(".open").classList.remove("open");
    event.target.classList.add("open");
  }
});
