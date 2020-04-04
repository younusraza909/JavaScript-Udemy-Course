class Weather {
  constructor(city, state) {
    this.apiKey = "e9c8ea89d17c535e10f8109f0e69189e";
    this.city = city;
    this.state = state;
  }

  //Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //Change Weather location

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
