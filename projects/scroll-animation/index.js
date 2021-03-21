const boxElements = document.querySelectorAll(".box");

const toggleShow = () => {
  const scrollTrigger = (window.innerHeight / 10) * 8;
  boxElements.forEach((el) => {
    let boxTop = el.getBoundingClientRect().top;
    if (boxTop < scrollTrigger) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", toggleShow);

toggleShow();
