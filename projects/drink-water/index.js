const cups = document.querySelectorAll(".cup");
const cupsContainer = document.querySelector(".cups");
const bigcup = document.getElementById("bigcup");
const goal = 2000;
const cup = 250;
const remained = document.getElementById("valueL");

const updateBigCup = () => {
  let count = document.querySelectorAll(".full").length;
  const divs = [...bigcup.children];
  divs[0].style.height = `${100 - ((count * cup) / goal) * 100}%`;
  divs[1].style.height = `${((count * cup) / goal) * 100}%`;
  divs[1].innerText = `${((count * cup) / goal) * 100}%`;
  divs[0].innerHTML = `${(goal - count * cup) / 1000}L<br />Remained`;
  if (divs[1].style.height === "0%") {
    divs[1].style.display = "none";
  } else {
    divs[1].style.display = "flex";
  }
  if (divs[0].style.height === "0%") {
    divs[0].style.display = "none";
  } else {
    divs[0].style.display = "flex";
  }
  // goal - count * cup; // innerText for .empty
  // ((count * cup) / goal) * 100; // height and innerText
};

const cupsObs = (idx) => {
  cups.forEach((el, index) => {
    if (idx === index && el.classList.contains("full")) {
      el.classList.remove("full");
    } else if (index <= idx) {
      el.classList.add("full");
    } else {
      el.classList.remove("full");
    }
  });
  updateBigCup();
};

cupsContainer.addEventListener("click", (event) => {
  if (event.currentTarget !== event.target) {
    cupsObs([...cups].indexOf(event.target));
  }
});
