// Define UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event Listner

loadEventListners();

//Load all event Listner

function loadEventListners() {
  //Add task event
  form.addEventListener("submit", addTask);

  //Remove task event
  taskList.addEventListener("click", clearTask);

  //Clear all task
  clearBtn.addEventListener("click", clearTasks);

  //Filter All task
  filter.addEventListener("keyup", filterTask);
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

//Remove Task

function clearTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Remove All tasks

function clearTasks(e) {
  if (confirm("Are You Sure?")) {
    // taskList.innerHTML=''

    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}

//Filter All Task

function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
