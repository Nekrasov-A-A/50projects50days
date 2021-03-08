const URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const box = document.getElementById("box");

const addRepoToCard = (repos) => {
  const reposEl = document.querySelector(".box__info");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

const getRepo = async (user) => {
  try {
    const { data } = await axios(URL + user + "/repos?sort=created");
    addRepoToCard(data);
  } catch (e) {
    const reposEl = document.querySelector(".box__info");
    const repoEl = document.createElement("div");
    repoEl.innerText = "Empty";
    reposEl.appendChild(repoEl);
  }
};

const createCard = ({
  avatar_url,
  name,
  bio,
  followers,
  following,
  public_repos,
}) => {
  box.innerHTML = "";
  const photo = document.createElement("div");
  photo.classList.add("box__photo");
  photo.innerHTML = `<img src='${avatar_url}'/>`;
  box.appendChild(photo);
  const info = document.createElement("div");
  info.classList.add("box__info");
  info.innerHTML = `
    <h3>${name}</h3>
    <h4>${bio}</h4>
    <p>${followers} <strong>Followers</strong> ${following} <strong>Following</strong> ${public_repos} <strong>Repos</strong></p>
  `;

  box.appendChild(info);
};

const getUser = async (user) => {
  try {
    const { data } = await axios(URL + user);
    createCard(data);
  } catch (e) {
    if (e.response.status === 404) {
      box.innerHTML = "User not found";
    }
  }
};

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let user = search.value;
  if (user) {
    box.style.display = "flex";
    getUser(user);
    getRepo(user);
  }
  search.value = "";
});
