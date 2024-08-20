let todos = [];

function addTodo() {
  const todoValue = document.querySelector("input").value;
  if (!todoValue) {
    alert("Cant add empty todo!");
    return;
  }
  if (todos.filter((task) => task.title.trim() === todoValue.trim()).length) {
    alert("Task already added!");
    document.querySelector("input").value = "";
    return;
  }
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
  document.querySelector("input").value = "";
}

function todoComponent(todo, ctr) {
  const div = document.createElement("div");
  div.setAttribute("id", `div-${ctr}`);
  div.setAttribute(
    "class",
    "bg-slate-400 p-4 m-2 rounded-lg shadow-xl items-center text-center"
  );
  const p = document.createElement("p");
  p.setAttribute("id", `p-${ctr}`);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", `deleteTodo(${ctr})`);
  deleteBtn.setAttribute(
    "class",
    "rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 m-2"
  );
  deleteBtn.innerHTML = "Delete";
  const updateBtn = document.createElement("button");
  updateBtn.setAttribute("onclick", `update(${ctr})`);
  updateBtn.setAttribute(
    "class",
    "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 m-2"
  );
  updateBtn.innerHTML = "Update";

  p.innerHTML = todo.title;

  div.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(updateBtn);

  return div;
}

function deleteTodo(id) {
  todos = todos.splice(id, 1);
  render();
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
