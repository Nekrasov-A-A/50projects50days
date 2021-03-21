const unsplashURL = "https://source.unsplash.com/random/";
const box = document.getElementById("box");
const moreBtn = document.getElementById("more");
let amount = 15;

const getRndSize = () => {
  return (
    Math.floor(Math.random() * 10) +
    300 +
    "x" +
    (Math.floor(Math.random() * 10) + 300)
  );
};

const getMore = () => {
  for (let i = 0; i < amount; i++) {
    const rndImg = document.createElement("img");
    rndImg.src = `${unsplashURL}${getRndSize()}`;
    box.appendChild(rndImg);
  }
};
getMore();

moreBtn.addEventListener("click", () => getMore());
