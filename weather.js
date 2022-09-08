var card = document.getElementById("card");
var first = document.getElementById("card-primary");
var second = document.getElementById("card-secondary");
var secondTable = document.getElementById("card-secondary-table");
var button = document.getElementById("submit");
var cityName = document.querySelector("#name");
var temperature = document.querySelector("#temp");
var desc = document.querySelector("#desc");
var date = document.querySelector("#date");
var maxTemperature = document.querySelector("#maxtemp");
var minTemperature = document.querySelector("#mintemp");
var pressure = document.querySelector("#pressure");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var visibility = document.querySelector("#visibility");
const apiKey = "6a450a8127936d3e5340f2f2747830b0";
button.addEventListener("click", function () {
  card.style.opacity = 0.6;
  let place = document.getElementById("city");
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    place.value +
    "+&appid=" +
    apiKey +
    "&units=metric";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      place.value = "";
      cityName.innerHTML = data.name;
      temperature.innerHTML = data.main["temp"] + "&#8451";
      desc.innerHTML = data.weather[0]["description"];
      let time = new Date(data.dt * 1000);
      date.innerHTML = time.toLocaleDateString();
      maxTemperature.innerHTML = data.main["temp_max"] + "&#8451";
      minTemperature.innerHTML = data.main["temp_min"] + "&#8451";
      pressure.innerHTML = data.main["pressure"] + " hPa";
      humidity.innerHTML = data.main["humidity"] + "%";
      visibility.innerHTML = data.visibility + " m";
      wind.innerHTML = data.wind["speed"] + " m/s";
      setTimeout(function () {
        card.style.opacity = 1;
      }, 500);
    })
    .catch((err) => {
      cityName.innerHTML = "City";
      temperature.innerHTML = "_&degC";
      desc.innerHTML = "status";
      let time = "Date";
      date.innerHTML = time;
      maxTemperature.innerHTML = "-";
      minTemperature.innerHTML = "-";
      pressure.innerHTML = "-";
      humidity.innerHTML = "-";
      visibility.innerHTML = "-";
      wind.innerHTML = "-";
      setTimeout(function () {
        card.style.opacity = 1;
      }, 100);

      alert("Error fetching the details\nPlease try again");
    });
});
