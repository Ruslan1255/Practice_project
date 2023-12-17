"use strict";
const input = document.querySelector(".location");
const key = "e605573d496ff7a4a9f3c8c1a38a7f6b";

input.addEventListener("keypress", (e) => {
  if (e.keyCode == "13") {
    submit(input.value);
  }
});

function submit(value) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric&lang=az`
  )
    .then((res) => res.json())
    .then((data) => showData(data));
}

function showData(data) {
  let cityName = document.querySelector(".wheather_result_location");
  cityName.innerText = `${data.name} ${data.sys.country}`;

  let cityTemp = document.querySelector(".wheather_result_temprature");
  cityTemp.innerText = `${data.main.temp}°C`;

  let cityDesc = document.querySelector(".wheather_result_description");
  cityDesc.innerText = `${data.weather[0].description}`;
}
