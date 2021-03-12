const unsplashURL = "https://source.unsplash.com/random/";
const box = document.getElementById("box");
const more = document.getElementById("more");
let amount = 15;

const getRndSize = () => {
  return (
    Math.floor(Math.random() * 10) +
    300 +
    "x" +
    (Math.floor(Math.random() * 10) + 300)
  );
};

const fn = () => {
  for (let i = 0; i < amount; i++) {
    const rndImg = document.createElement("img");
    rndImg.src = `${unsplashURL}${getRndSize()}`;
    box.appendChild(rndImg);
  }
};
fn();

more.addEventListener("click", () => fn());
