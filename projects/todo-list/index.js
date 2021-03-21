const todo = document.getElementById("todo");
const todosBox = document.getElementById("box");

const createEl = (value) => {
  let valueText = "";
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo-wrapper");
  todoEl.innerHTML = `
    <div id='control-value' class='control-value'>
        ${value}
    </div>
    <div class='tools'>
        <button id='edit'><i class="fas fa-edit"></i></button>
        <button id='complete'><i class="fas fa-check"></i></button>
        <button id='delete-btn'><i class="fas fa-trash-alt"></i></button>
    </div>
    
  `;
  const textEl = todoEl.querySelector("#control-value");
  const completeBtn = todoEl.querySelector("#complete");
  const deleteBtn = todoEl.querySelector("#delete-btn");
  const editBtn = todoEl.querySelector("#edit");

  editBtn.addEventListener("click", () => {
    todoEl.classList.remove("completed");
    valueText = textEl.innerText;
    textEl.innerHTML = `<textarea>${textEl.innerText}</textarea>`;

    const textArea = textEl.querySelector("textarea");
    textArea.focus();
    textArea.selectionStart = textArea.value.length;

    textArea.addEventListener("keypress", (ev) => {
      if (ev.key === "Enter" && ev.currentTarget.value === "") {
        ev.preventDefault();
        textArea.blur();
      }
      if (ev.key === "Enter" && ev.currentTarget.value !== "") {
        ev.preventDefault();
        textArea.blur();
      }
    });

    textArea.addEventListener("input", (ev) => {
      if (ev.currentTarget.value.length === 0) {
        todoEl.classList.add("error");
        ev.currentTarget.placeholder = `Todo can't be empty`;
      } else {
        todoEl.classList.remove("error");
        todoEl.placeholder = "Enter todo";
      }
    });

    textArea.addEventListener("blur", () => {
      if (textArea.value === "") {
        textEl.innerHTML = valueText;
        todoEl.classList.remove("error");
        todoEl.placeholder = "Enter todo";
      } else {
        textEl.innerHTML = textArea.value;
        todoEl.classList.remove("error");
        todoEl.placeholder = "Enter todo";
      }
    });
  });

  completeBtn.addEventListener("click", () => {
    todoEl.classList.toggle("completed");
  });

  todosBox.appendChild(todoEl);

  deleteBtn.addEventListener("click", () => {
    todoEl.remove();
  });
};
const setDefaultForInput = () => {
  todo.classList.remove("error");
  todo.classList.remove("completed");
  todo.placeholder = "Enter todo";
};
todo.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter" && ev.currentTarget.value === "") {
    todo.classList.remove("completed");
    todo.classList.add("error");
    todo.placeholder = "Todo can't be empty";
  }
  if (ev.key === "Enter" && ev.currentTarget.value !== "") {
    createEl(ev.currentTarget.value);
    todo.value = "";
    todo.classList.remove("error");
    todo.classList.add("completed");
    todo.placeholder = "Todo added";
  }
});
todo.addEventListener("blur", setDefaultForInput);
todo.addEventListener("input", setDefaultForInput);
