let todos = [];

//  Todo component
function todoComponent(todo, ctr) {
  //   Div Tag
  const div = document.createElement("div");
  div.setAttribute("id", `div-${ctr}`);
  div.setAttribute(
    "class",
    "bg-slate-400 p-4 m-2 rounded-lg shadow-xl items-center text-center"
  );

  //   P tag
  const p = document.createElement("p");
  p.setAttribute("id", `p-${ctr}`);
  let pClass = "text-xl";
  if (todo.completed) {
    pClass += " line-through";
  }
  p.setAttribute("class", pClass);

  //   Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", `deleteTodo(${ctr})`);
  deleteBtn.setAttribute(
    "class",
    "rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 m-2"
  );
  deleteBtn.innerHTML = "Delete";

  //   Update button
  const updateBtn = document.createElement("button");
  updateBtn.setAttribute("onclick", `updateTodo(${ctr})`);
  updateBtn.setAttribute(
    "class",
    "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 m-2"
  );
  updateBtn.innerHTML = "Update";

  //   Mark as Complete button
  const completeBtn = document.createElement("button");
  completeBtn.setAttribute("onclick", `completeTodo(${ctr})`);
  completeBtn.setAttribute(
    "class",
    "rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 m-2"
  );
  completeBtn.innerHTML = todo.completed ? "Unfinished" : "Finished";

  p.innerHTML = todo.title;

  div.appendChild(p);
  div.appendChild(deleteBtn);
  div.appendChild(updateBtn);
  div.appendChild(completeBtn);

  return div;
}

// Add todo to array
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
    completed: false,
  });
  render();
  document.querySelector("input").value = "";
}

//   Delete todo from array
function deleteTodo(id) {
  todos.splice(id, 1);
  render();
}

// Complete todo
function completeTodo(id) {
  todos[id].completed = !todos[id].completed;
  render();
}

// Update todo
function updateTodo(id) {
    
}

// Render the todos
function render() {
  const todoDiv = document.querySelector("#todos");
  todoDiv.innerHTML = "";
  let ctr = 0;
  todos.forEach((element) => {
    const div = todoComponent(element, ctr);
    todoDiv.appendChild(div);
    ctr += 1;
  });
}
