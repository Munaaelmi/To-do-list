const addTaskbtn = document.getElementById("addTaskbtn");
const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const checkbox = document.querySelector("checkbox");

addTaskbtn.addEventListener("click", function () {
  if (inputTask.value.length > 0) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("displayTogether");

    const newCheckbox = document.createElement("div");
    newCheckbox.classList.add("checkbox");

    const newTask = document.createElement("li");
    newTask.textContent = inputTask.value;

    newContainer.append(newCheckbox);
    newContainer.append(newTask);
    taskList.append(newContainer);

    clearTask();
  } else {
    alert("Add a task");
  }
});

function clearTask() {
  inputTask.value = "";
}
