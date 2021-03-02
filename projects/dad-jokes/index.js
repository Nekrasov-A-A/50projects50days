const innertxt = document.getElementById("innertxt");
const btn = document.getElementById("btn");

const getJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  innertxt.innerHTML = data.joke;
};

btn.addEventListener("click", getJoke);

getJoke();
