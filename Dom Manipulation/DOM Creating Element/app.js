//Making li Elelment

const li = document.createElement("li");

//Adding Class
li.className = "collection-item";

//Creating Text Node

li.appendChild(document.createTextNode("Hello World"));

//Creating Link Element

const link = document.createElement("a");
//Adding Class
link.className = "delete-item secondary-content";

link.innerHTML = "<i class='fa fa-remove'></i>";

///Adding it into li element

li.appendChild(link);

//Adding It In table As Child

document.querySelector("ul.collection").appendChild(li);

console.log(li);
