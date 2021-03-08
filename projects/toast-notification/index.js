const btn = document.getElementById("btn");
const box = document.getElementById("box");

const types = ["green", "red", "yellow"];
const message = ["Message One", "Message Two", "Message Three", "Message Four"];

btn.addEventListener("click", () => {
  const item = document.createElement("div");
  item.classList.add(types[Math.floor(Math.random() * (types.length - 1))]);
  item.innerText = message[Math.floor(Math.random() * (message.length - 1))];
  box.appendChild(item);
  setTimeout(() => {
    item.remove();
  }, 3000);
});
