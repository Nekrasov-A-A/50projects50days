const pokeContainer = document.getElementById("pokeContainer");
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const getPokemon = async (i) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  const res = await result.json();
  console.log(res);
  createPokeCard(res);
};

const createPokeCard = (pokemon) => {
  const pokeCardContainer = document.createElement("div");
  pokeCardContainer.classList.add("poke-card-container");
  const pokeInner = `
		<div class='card-container'> 
			<div class='card-img'> 
				<img src='https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'/>
			 </div>
			 <div class='number'> ${pokemon.id.toString().padStart(3, "0")}</div>
			 <div class='card-name'> ${
         pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
       } </div>
			 <div class='card-type'> ${pokemon.types[0].type.name} </div>
		</div>
	`;
  pokeCardContainer.innerHTML = pokeInner;
  pokeCardContainer.style.background = colors[`${pokemon.types[0].type.name}`];
  pokeContainer.appendChild(pokeCardContainer);
};
const initPoke = async () => {
  for (let i = 1; i < 151; i++) {
    await getPokemon(i);
  }
};
initPoke();
