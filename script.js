function mainDisplay(city) {
  let apiKey = "5fe7120d92tc7592472edba320co9e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(cityTemperatureFunction);
}

function cityTemperatureFunction(response) {
  let city = document.querySelector(".city-data");
  let country = document.querySelector(".country-data");
  let icon = document.querySelector(".temperature-icon");
  let currentTemp = document.querySelector(".current-temperature-data");
  let currentTempDesc = document.querySelector(
    ".current-temperature-description"
  );
  let humidity = document.querySelector(".humidity-data");
  let wind = document.querySelector(".wind-data");

  city.innerHTML = response.data.city;
  country.innerHTML = response.data.country.toUpperCase();
  icon.innerHTML = `<img
    src=${response.data.condition.icon_url}
    alt="current temperature emoji"
    class="current-temperature-emoji"
    />`;
  currentTemp.innerHTML = Math.round(response.data.temperature.current) + "°C";
  currentTempDesc.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed} km/h`;

  getForecast(response.data.city);
}

function searchCityFunction(response) {
  response.preventDefault();
  let searchInputElement = document.querySelector(".search-city");
  let city = searchInputElement.value;

  let apiKey = "5fe7120d92tc7592472edba320co9e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(cityTemperatureFunction);
}

function currentTimeFunction() {
  let timeNow = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[timeNow.getDay()];
  let hour = String(timeNow.getHours()).padStart(2, "0");
  let minute = String(timeNow.getMinutes()).padStart(2, "0");

  currentDayTime = document.querySelector(".local-time");
  currentDayTime.innerHTML = `${day}, ${hour}:${minute} `;

  // let currentTime = new Date();
  // let options = { timeStyle: "short", hour12: true };
  // let timeString = currentTime.toLocaleTimeString("en-US", options);
  // console.log(timeString); // 9:41 PM
}

function getForecast(city) {
  let apiKey = "5fe7120d92tc7592472edba320co9e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="row">
    <div class="col-2">
    <div class="weather-forecast-date">${day}</div>
    <div class="temperature-icon">
    <img
    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
    alt="temperature icon forecast"
    />
    </div>
    <div class="weather-forecast-temperature">
    <span class="max-temperature">12° </span>
    <span class="min-temperature"> 8°</span>
    </div>
    </div>
    </div>`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchCity = document.querySelector(".input-search");
searchCity.addEventListener("submit", searchCityFunction);
mainDisplay("Kuala-Lumpur");
currentTimeFunction();
displayForecast();
