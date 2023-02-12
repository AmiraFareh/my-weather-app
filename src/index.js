function search(event) {
    event.preventDefault();
    let input = document.querySelector("#inputCity");
    let city = input.value;
  
    let apiKey = "17ad6e67aa629189f73b053634668b20";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDisplay);
  }
  
  function showDisplay(response) {
    let city = response.data.name;
    let cityElement = document.querySelector(".current-city");
    let descriptionElement = document.querySelector(".description");
    let temperatureElement = document.querySelector(".temp");
    let humidityElement = document.querySelector(".humidity");
    cityElement.innerHTML = city;
    let currentTemperature = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = currentTemperature;
    let description = response.data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.slice(1);
    descriptionElement.innerHTML = description;
    let humidity = response.data.main.humidity;
    humidityElement.innerHTML = humidity;
  
    console.log(humidity);
    console.log(response);
  }
  
  function storePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let unit = "metric";
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showDisplay);
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(storePosition);
  }
  
  let locationButton = document.querySelector("#locationButton");
  locationButton.addEventListener("click", getLocation);
  
  let now = new Date();
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  let time = `${hour}:${minutes}`;
  
  let date = document.querySelector(".date-time");
  date.innerHTML = day + " " + time;
  
  let searchForm = document.querySelector(".form-inline");
  searchForm.addEventListener("submit", search);
  