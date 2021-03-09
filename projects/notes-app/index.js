const headerBtn = document.getElementById("header-btn");
const main = document.getElementById("main");

headerBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <header class='note__header'>
        <button class='note__btn' id='edit'>
            <i class="fas fa-edit"></i>
        </button>
        <button class='note__btn' id='deleteBtn'>
            <i class="fas fa-trash-alt"></i>
        </button>
    </header>
    <div class='content' id='content'></div>
    <textarea class='textar hidden' id='areaText'></textarea>
  `;
  const editBtn = note.querySelector("#edit");
  const deleteBtn = note.querySelector("#deleteBtn");
  const content = note.querySelector("#content");
  const areaText = note.querySelector("#areaText");

  deleteBtn.addEventListener("click", (event) => {
    note.remove();
  });

  editBtn.addEventListener("click", () => {
    content.classList.toggle("hidden");
    areaText.classList.toggle("hidden");
    areaText.focus();
  });

  areaText.addEventListener("input", (ev) => {
    content.innerText = ev.target.value;
  });

  main.appendChild(note);
});
