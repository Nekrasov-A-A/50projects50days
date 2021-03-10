const box = document.getElementById("box");
const search = document.getElementById("search");
const users = [];

const fn = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  box.innerHTML = "";
  data.results.forEach((el) => {
    const user = document.createElement("li");
    users.push(user);
    user.innerHTML = `
    <div class='img-box'> 
        <img src='${el.picture.medium}'/>
    </div>
    <div class='info'>
        <h3>${el.name.first + " " + el.name.last}</h3>
        <p>${el.location.city + ", " + el.location.country}</p>
    </div>
    `;
    box.appendChild(user);
  });
};
fn();

const filter = (str) => {
  users.forEach((el) => {
    if (el.innerText.toLowerCase().includes(`${str.toLowerCase()}`)) {
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });
};

search.addEventListener("input", (ev) => {
  filter(ev.target.value);
});
