class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  showPost(posts) {
    let ouput = "";
    posts.forEach((post) => {
      ouput += `
        <div class="card mb-3">
           <div class ="card-body">
             <h4 class="card-title">${post.title}</h4>
             <p class="card-text">${post.body}</p>
             <a href="#" class="edit card-link" data-id=${post.id}><i class="fa fa-pencil"></i></a>
             <a href="#" class="delete card-link" data-id=${post.id}><i class="fa fa-remove"></i></a>
           </div>
        </div>
        `;
    });

    this.post.innerHTML = ouput;
  }

  showAlert(msg, cls) {
    this.clearAlert();

    //creata a div
    const div = document.createElement("div");
    //Add Classes
    div.className = cls;
    //Add text
    div.appendChild(document.createTextNode(msg));
    //get parent
    const container = document.querySelector(".postContainer");
    //Get Posts
    const posts = document.querySelector("#posts");
    //Insert Alert
    container.insertBefore(div, posts);

    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  //Fill Form To Edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState("edit");
  }

  changeFormState(state) {
    if (state === "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = "btn btn-warning post-submit";

      //Create Cancel Button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));

      //parent
      const cardForm = document.querySelector(".card-form");
      //get element to insert before
      const formEnd = document.querySelector(".form-end");
      //appending
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = "Post It";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";
      //   Remove cancel btn
      if (document.querySelector(".post-cancel")) {
        document.querySelector(".post-cancel").remove();
      }

      //Clear Id from hidden field
      this.clearIdInput();
      //clear text
      this.clearFields();
    }
  }
  //CLear Id Input
  clearIdInput() {
    this.idInput.value = "";
  }
}

export const ui = new UI();
