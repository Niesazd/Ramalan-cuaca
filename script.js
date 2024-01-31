function searchCityFunction(response) {
  response.preventDefault();
  let searchInputElement = document.querySelector(".search-city");
  let city = searchInputElement.value;

  let h1 = document.querySelector(".city-data");
  h1.innerHTML = city;
}

let searchCity = document.querySelector(".input-search");
console.log(searchCity);
searchCity.addEventListener("submit", searchCityFunction);
