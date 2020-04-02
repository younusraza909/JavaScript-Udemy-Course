document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("input[type=number]").value;

  //Initiatting xhr
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  //Onload
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something Went Wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  //send
  xhr.send();
  e.preventDefault();
}
