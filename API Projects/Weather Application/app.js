//init storage
const storage = new Storage();
//Get Stored Location Data
const weatherLocation = storage.getLocationData();

//Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init ui Object
const ui = new UI();

//Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//Chnange Location Event
document.getElementById("w-change-button").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //Change Location
  weather.changeLocation(city, state);

  //Set location in local storage
  storage.setLocationData(city, state);

  //Get and display Weather
  getWeather();

  //   close modal

  $("#locModal").modal("hide");
});

// weather.changeLocation("Lahore", "Pakisatn");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
