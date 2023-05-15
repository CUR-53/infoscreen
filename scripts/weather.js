// Viborg, Denmark - WeatherAPI
const weatherViborg =
  'https://api.open-meteo.com/v1/forecast?latitude=56.46&longitude=9.45&hourly=precipitation,rain&daily=weathercode,rain_sum,precipitation_sum&current_weather=true&windspeed_unit=ms&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

// Aarhus, Denmark - WeatherAPI
const weatherAarhus =
  'https://api.open-meteo.com/v1/forecast?latitude=56.16&longitude=10.21&daily=precipitation_sum,rain_sum&current_weather=true&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

const weatherCodes = {
  0: ['Clear sky', 'assets/svg/sun.svg'],
  1: ['Mainly clear', 'assets/svg/mainly_clear.svg'],
  2: ['Partly cloudy', 'assets/svg/partly_cloudy.svg'],
  3: ['Overcast', 'assets/svg/overcast.svg'],
  45: ['Foggy', 'assets/svg/fog.svg'],
  51: ['Light Drizzle', 'assets/svg/rain.svg'],
  53: ['Moderate Drizzle', 'assets/svg/rain.svg'],
  55: ['Dense Drizzle', 'assets/svg/rain.svg'],
  56: ['Light Freezing drizzle', 'assets/svg/rain.svg'],
  57: ['Dense Freezing drizzle', 'assets/svg/rain.svg'],
  61: ['Slight Rain', 'assets/svg/rain.svg'],
  63: ['Moderate Rain', 'assets/svg/rain.svg'],
  65: ['Heavy Rain', 'assets/svg/rain.svg'],
  66: ['Light Freezing rain', 'assets/svg/rain.svg'],
  67: ['Heavy Freezing rain', 'assets/svg/rain.svg'],
  71: ['Slight Snowfall', 'assets/svg/snow.svg'],
  73: ['Moderate Snowfall', 'assets/svg/snow.svg'],
  75: ['Heavy Snowfall', 'assets/svg/snow.svg'],
  77: ['Snow grains', 'assets/svg/snow.svg'],
  80: ['Slight Rain showers', 'assets/svg/rain.svg'],
  81: ['Moderate Rain showers', 'assets/svg/rain.svg'],
  82: ['Violent Rain showers', 'assets/svg/rain.svg'],
  85: ['Slight Snow showers', 'assets/svg/snow.svg'],
  86: ['Heavy Snow showers', 'assets/svg/snow.svg'],
  95: ['Thunderstorm', 'assets/svg/thunderstorm.svg'],
  96: ['Thunderstorm & slight hail', 'assets/svg/thunderstorm.svg'],
  99: ['Thunderstorm & heavy hail', 'assets/svg/thunderstorm.svg'],
};

console.log(weatherCodes[0]);

// Viborg, Denmark - Temperature
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const temperatureElement = document.querySelector('#temperature_viborg');
    temperatureElement.textContent = `${Math.round(data.current_weather.temperature)}°`;
  });

// Viborg, Denmark - Rain chance
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const precipitationViborg = data.daily.rain_sum[0] * 100;
    const temperatureElement = document.querySelector('#rain_viborg');
    temperatureElement.textContent = `${precipitationViborg}%`;
  });

// Viborg, Denmark - Weather Code
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;

    const weatherCodeText = document.querySelector('#weatherCode_viborg');
    weatherCodeText.textContent = `${weatherCodes[weatherCodeNr][0]}`;
  });

// Viborg, Denmark - Weather Code Icon
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;

    const weatherCodeIcon = document.querySelector('#weather_icon_viborg');
    weatherCodeIcon.innerHTML = `<img src="${weatherCodes[weatherCodeNr][1]}" alt="cloudy" />`;
  });

// Aarhus, Denmark - Temperature
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const temperatureElement = document.querySelector('#temperature_aarhus');
    temperatureElement.textContent = `${Math.round(data.current_weather.temperature)}°`;
  });

// Aarhus, Denmark - Rain chance
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const precipitation = data.daily.rain_sum[0] * 100;
    const temperatureElement = document.querySelector('#rain_aarhus');
    temperatureElement.textContent = `${precipitation}%`;
  });

// Aarhus, Denmark - Weather Code
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;

    const weatherCodeText = document.querySelector('#weatherCode_aarhus');
    weatherCodeText.textContent = `${weatherCodes[weatherCodeNr][0]}`;
  });

// Aarhus, Denmark - Weather Code Icon
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;

    const weatherCodeIcon = document.querySelector('#weather_icon_aarhus');
    weatherCodeIcon.innerHTML = `<img src="${weatherCodes[weatherCodeNr][1]}" alt="cloudy" />`;
  });
