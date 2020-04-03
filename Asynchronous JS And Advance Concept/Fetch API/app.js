document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

//Get local text file data
function getText() {
  fetch("text.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

//Get local json data

function getJson() {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let outout = "";
      data.forEach(function(item) {
        outout += `<li>${item.title}</li>`;
      });
      document.getElementById("output").innerHTML = outout;
    })
    .catch(function(err) {
      console.log(err);
    });
}

//Get From external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(users) {
      let output = "";
      users.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
