const choices = document.getElementById("choices");
const storage = document.getElementById("storage");

const createSpan = (value) => {
  const text = value.split(",").filter((el) => el.trim() !== "");
  storage.innerHTML = "";
  text.forEach((el) => {
    const val = document.createElement("span");
    val.innerText = el;
    storage.appendChild(val);
  });
};

const chooseAtRandom = () => {
  const spans = document.querySelectorAll("span");
  return spans[Math.floor(Math.random() * spans.length)];
};
const toggleActive = (tag) => {
  tag.classList.toggle("active");
};
const randomPick = () => {
  const times = 30;
  const intervalId = setInterval(() => {
    let pick = chooseAtRandom();
    toggleActive(pick);
    setTimeout(() => {
      toggleActive(pick);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    toggleActive(chooseAtRandom());
  }, times * 100);
};

choices.addEventListener("keyup", (event) => {
  createSpan(event.target.value);
  if (event.key === "Enter") {
    event.target.value = "";
    randomPick();
  }
});
