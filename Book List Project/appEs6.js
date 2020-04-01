//Class Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//Class UI
class UI {
  addBookToList(book) {
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
  }

  deleteItem(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();

      const ui = new UI();
      // Show Success Alert
      ui.showAlert("Book Deleted", "success");
    }
  }

  showAlert(msg, cls) {
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
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Class For Local Storage Fuctionality
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI();

      ui.addBookToList(book);
    });
  }

  static addBooks(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBooks(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
      localStorage.setItem("books", JSON.stringify(books));
    });
  }
}

//Add Evnet Listner on refresshing page
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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

    //Add To LocalStorage
    Store.addBooks(book);

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

  //Remove Elemnent From LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
});
