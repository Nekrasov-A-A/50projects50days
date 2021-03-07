const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const movies = document.getElementById("movies");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovies = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data.results);
  showMovies(data);
};

const getClassByVote = (num) => {
  if (num >= 8) return "green";
  else if (num >= 5) return "gold";
  else return "red";
};

const showMovies = (data) => {
  movies.innerHTML = "";
  data.results.forEach((el) => {
    const movie = document.createElement("div");
    movie.classList.add("movie__wrapper");
    movie.innerHTML = `
      <div class='overview'><h3>Overview</h3>${el.overview}</div>
      <img src='${IMG_PATH + el.poster_path}'/>
      <div class='description'>
          <p>${el.title}</p>
          <div>
            <p class='${getClassByVote(el.vote_average)}'>${el.vote_average}</p>
          </div>  
      </div>
      `;
    movies.appendChild(movie);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

getMovies(API_URL);
