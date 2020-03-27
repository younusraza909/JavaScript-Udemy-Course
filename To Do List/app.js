// Define UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clear = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event Listner

loadEventListners();

//Load all event Listner

function loadEventListners() {
  //Add task event

  form.addEventListener("submit", addTask);
}

//Add task function

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  //Create List item
  const li = document.createElement("li");
  //Add Class
  li.className = "collection-item";
  //Add text Node
  li.appendChild(document.createTextNode(taskInput.value));
  //Adding New link
  const link = document.createElement("a");
  //Add class
  link.className = "delete-item secondary-content";
  //Adding icon
  link.innerHTML = "<i class='fa fa-remove'></i>";
  //Appending it into li
  li.appendChild(link);

  //adding it into ul
  taskList.appendChild(li);

  //clearing taskinput field after adding
  taskInput.value = "";

  e.preventDefault();
}
