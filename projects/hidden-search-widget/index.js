const search = document.getElementById("search");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  search.classList.toggle("close");
  search.focus();
});
