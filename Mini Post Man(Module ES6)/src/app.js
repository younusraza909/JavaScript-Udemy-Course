import { http } from "./http";
import { ui } from "./ui";

//Get Post On Dom Load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

//Listen For delete
document.querySelector("#posts").addEventListener("click", deletePost);

//Listen For EditState
document.querySelector("#posts").addEventListener("click", enableEdit);

//liten for cancel
document.querySelector(".card-form").addEventListener("click", cancelEdit);

//get Post
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPost(data))
    .catch((err) => console.log(err));
}

// Add Post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  if (title === "" || body === "") {
    ui.showAlert("Please insert all field", "alert alert-danger");
  } else {
    //check for id
    const data = {
      title: title,
      body: body,
    };
    if (id === "") {
      //Create Post
      http
        .post("http://localhost:3000/posts", data)
        .then((data) => {
          ui.showAlert("Post Added", "alert alert-success");
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      //Update Post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert("Post Updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post removed", "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  e.preventDefault();
}

//Edit State Enable
function enableEdit(e) {
  e.preventDefault;

  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;

    const data = {
      id: id,
      title: title,
      body: body,
    };

    //Fill Form
    ui.fillForm(data);
  }
}

//Cancel edit State

function cancelEdit(e) {
  e.preventDefalut;
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }
}
