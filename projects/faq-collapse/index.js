const icons = document.querySelectorAll(".fas");
icons.forEach((icon) =>
  icon.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-chevron-down")) {
      event.target.parentNode.classList.add("show");
    } else {
      event.target.parentNode.classList.remove("show");
    }
  })
);
