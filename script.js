let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
  document.querySelector("input").value = "";
}

function todoComponent(todo, ctr) {
  const div = document.createElement("div");
  div.setAttribute("id", `div-${ctr}`);
  const p = document.createElement("p");
  p.setAttribute("id", `p-${ctr}`);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", `delete(${ctr})`);
  deleteBtn.innerHTML = "Delete";
  const updateBtn = document.createElement("button");
  updateBtn.setAttribute("onclick", `update(${ctr})`);
  updateBtn.innerHTML = "Update";

  p.innerHTML = todo.title;

  div.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(updateBtn);

  return div;
}

function render() {
  const todoDiv = document.querySelector("#todos");
  todoDiv.innerHTML = "";
  let ctr = 1;
  todos.forEach((element) => {
    const div = todoComponent(element, ctr);
    todoDiv.appendChild(div);
    ctr += 1;
  });
}
