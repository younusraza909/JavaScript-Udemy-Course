class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.city = document.getElementById("w-city");
    this.city_id = document.getElementById("w-city_id");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.humadity = document.getElementById("w-humadity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.windSpeed = document.getElementById("w-windspeed");
    this.pressure = document.getElementById("w-pressure");
  }

  paint(weather) {
    this.location.textContent = weather.sys.country;
    this.city.textContent = weather.name;
    this.city_id.textContent = `City Id: ${weather.id}`;
    this.string.textContent = weather.main.temp;
    this.humadity.textContent = `Relative Humadity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed}`;
    this.pressure.textContent = `Atmospheric Pressure: ${weather.main.pressure}`;
  }
}
