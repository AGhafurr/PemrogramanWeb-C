const taskList = document.getElementById("task");
const newTaskInput = document.getElementById("addtask");

function addTask() {
  var taskText = document.getElementById("addtask").value;
  if (taskText.trim() === "") return;

  var listItem = document.createElement("li");
  listItem.innerHTML = `
    <input class="tasks" type="text" value="${taskText}" readonly>
    <button class="edit" onclick="editTask(this)">Edit</button>
    <button class="delete" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(listItem);
  newTaskInput.value = "";
}

function editTask(button) {
  const listItem = button.parentNode;
  const taskInput = listItem.querySelector("input");
  if (taskInput.readOnly) {
    taskInput.readOnly = false;
    button.textContent = "Simpan";
  } else {
    taskInput.readOnly = true;
    button.textContent = "Edit";
  }
}

function deleteTask(button) {
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}
