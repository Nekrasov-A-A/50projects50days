const boxElements = document.querySelectorAll(".box");
console.log(boxElements);
const fn = () => {
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

window.addEventListener("scroll", fn);

fn();
