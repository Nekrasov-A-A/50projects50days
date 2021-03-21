const TextBox = document.getElementById("text-box");
const getJokeBtn = document.getElementById("get-joke");

const getJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  TextBox.innerHTML = data.joke;
};

getJokeBtn.addEventListener("click", getJoke);

getJoke();
