const todo = document.getElementById("todo");
const box = document.getElementById("box");

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

  todoEl.querySelector("#edit").addEventListener("click", () => {
    todoEl.classList.remove("completed");
    todoEl.style.border = "2px solid transparent";
    valueText = textEl.innerText;
    textEl.innerHTML = `<textarea>${textEl.innerText}</textarea>`;
    const textAr = textEl.querySelector("textarea");
    textAr.focus();
    textAr.selectionStart = textAr.value.length;
    textAr.addEventListener("keypress", (ev) => {
      if (ev.key === "Enter" && ev.currentTarget.value === "") {
        ev.preventDefault();
        textAr.blur();
        todoEl.style.border = "2px solid transparent";
        todoEl.placeholder = "Enter todo";
      }
      if (ev.key === "Enter" && ev.currentTarget.value !== "") {
        ev.preventDefault();
        textAr.blur();
      }
    });
    textAr.addEventListener("input", (ev) => {
      if (ev.currentTarget.value.length === 0) {
        todoEl.style.border = "2px solid red";
        ev.currentTarget.placeholder = `Todo can't be empty`;
      } else {
        todoEl.style.border = "2px solid transparent";
        todoEl.placeholder = "Enter todo";
      }
    });
    textAr.addEventListener("blur", () => {
      if (textAr.value === "") {
        textEl.innerHTML = valueText;
        todoEl.style.border = "2px solid transparent";
        todoEl.placeholder = "Enter todo";
      } else {
        textEl.innerHTML = textAr.value;
        todoEl.style.border = "2px solid transparent";
        todoEl.placeholder = "Enter todo";
      }
    });
  });
  completeBtn.addEventListener("click", () => {
    todoEl.classList.toggle("completed");
    if (todoEl.classList.contains("completed")) {
      todoEl.style.border = "2px solid chartreuse";
    } else {
      todoEl.style.border = "2px solid transparent";
    }
  });

  box.appendChild(todoEl);
  deleteBtn.addEventListener("click", () => {
    todoEl.remove();
  });
};

todo.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter" && ev.currentTarget.value === "") {
    todo.style.border = "2px solid red";
    todo.placeholder = "Todo can't be empty";
    setTimeout(() => {
      todo.style.border = "2px solid transparent";
      todo.placeholder = "Enter todo";
    }, 1500);
  }
  if (ev.key === "Enter" && ev.currentTarget.value !== "") {
    createEl(ev.currentTarget.value);
    todo.value = "";
    todo.style.border = "2px solid chartreuse";
    todo.placeholder = "Todo added";
    setTimeout(() => {
      todo.style.border = "2px solid transparent";
      todo.placeholder = "Enter todo";
    }, 1500);
  }
});

todo.addEventListener("input", () => {
  todo.style.border = "2px solid transparent";
  todo.style.color = "black";
  todo.placeholder = "Enter todo";
});
