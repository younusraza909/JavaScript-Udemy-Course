//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Adding prototype in UI Constructor
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //Create Elelment
  const row = document.createElement("tr");
  //Insert Cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  //Appending Child
  list.appendChild(row);
};

//Delete Book

UI.prototype.deleteItem = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();

    const ui = new UI();
    // Show Success Alert
    ui.showAlert("Book Deleted", "success");
  }
};

//Show Alerts

UI.prototype.showAlert = function(msg, cls) {
  //Create div
  const div = document.createElement("div");
  //Add Classes
  div.className = `alert ${cls}`;
  //Add text
  div.appendChild(document.createTextNode(msg));
  //Get Parrent
  const container = document.querySelector(".container");
  //Get Form
  const form = document.querySelector("#book-form");
  // Insert Form
  container.insertBefore(div, form);

  //TimeOut
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

//Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Event Listners
document.getElementById("book-form").addEventListener("submit", function(e) {
  //Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiate UI
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    //Error Alert
    ui.showAlert("Please Fill In All Fields", "error");
  } else {
    //Instantiate book
    const book = new Book(title, author, isbn);

    //Add Book To List
    ui.addBookToList(book);

    // Show Success Alert

    ui.showAlert("Book Added", "success");

    //Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", function(e) {
  //Instantiate UI
  const ui = new UI();

  //Calling UI Prototype
  ui.deleteItem(e.target);
});
