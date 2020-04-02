document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //Initiate a XHR Object
  const xhr = new XMLHttpRequest();
  console.log("ReadyState", xhr.readyState);

  //OPEN
  xhr.open("GET", "data.txt", true);
  console.log("ReadyState", xhr.readyState);

  //Optional - Used For spinner and loader
  xhr.onprogress = function() {
    console.log("ReadyState", xhr.readyState);
  };

  xhr.onload = function() {
    //ReadyState Value=4
    console.log("ReadyState", xhr.readyState);
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${xhr.responseText}</h1>`;
    }
  };

  xhr.onerror = function() {
    console.log("Errrroooorrrr In request");
  };

  xhr.send();

  //ReadyState Values
  // 0:request not initialize
  // 1:server connection estalished
  // 2:request received
  // 3:processing request
  // 4:request finished and response is ready

  //HTTP Statuses
  //200 "OK"
  //403 "Forbidden"
  //404 "Not Found"
}
