function addTask() {
  var taskText = document.getElementById("new-task").value;
  if (taskText.trim() === "") return;

  var ul = document.getElementById("todo-list");
  var li = document.createElement("li");
  li.innerHTML =
    "<span>" +
    taskText +
    '</span> <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
  ul.appendChild(li);

  document.getElementById("new-task").value = "";
}

function editTask(button) {
  var li = button.parentElement;
  var taskElement = li.querySelector("taskElemet"); // Ganti ".task" dengan kelas yang sesuai pada elemen tugas Anda
  var newText = prompt("Edit tugas:", taskElement.innerText);

  if (newText !== null && newText.trim() !== "") {
    taskElement.innerText = newText;
  }
}

function deleteTask(button) {
  var li = button.parentElement;
  li.remove();
}
