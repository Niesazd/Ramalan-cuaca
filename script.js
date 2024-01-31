function mainDisplay(response) {
  let city = document.querySelector(".city-data");
  let country = document.querySelector(".country-data");
  let emoji = document.querySelector(".current-temperature-emoji");
  let currentTemp = document.querySelector(".current-temperature-data");
  let currentTempDesc = document.querySelector(
    ".current-temperature-description"
  );
  let humidity = document.querySelector(".humidity-data");
  let wind = document.querySelector(".wind-data");

  city.innerHTML = response.data.city;
  country.innerHTML = response.data.country.toUpperCase();
  currentTemp.innerHTML = Math.round(response.data.temperature.current) + "°C";
  currentTempDesc.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed} km/h`;
}

let city = "Shah-Alam";
let apiKey = "5fe7120d92tc7592472edba320co9e7b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(mainDisplay);

function cityTemperatureFunction(response) {
  let city = document.querySelector(".city-data");
  let country = document.querySelector(".country-data");
  let emoji = document.querySelector(".current-temperature-emoji");
  let currentTemp = document.querySelector(".current-temperature-data");
  let currentTempDesc = document.querySelector(
    ".current-temperature-description"
  );
  let humidity = document.querySelector(".humidity-data");
  let wind = document.querySelector(".wind-data");

  city.innerHTML = response.data.city;
  country.innerHTML = response.data.country.toUpperCase();
  currentTemp.innerHTML = Math.round(response.data.temperature.current) + "°C";
  currentTempDesc.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed} km/h`;
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

let searchCity = document.querySelector(".input-search");
console.log(searchCity);
searchCity.addEventListener("submit", searchCityFunction);
currentTimeFunction();
