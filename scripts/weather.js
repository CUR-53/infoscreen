// Viborg, Denmark - WeatherAPI
const weatherViborg =
  'https://api.open-meteo.com/v1/forecast?latitude=56.46&longitude=9.45&hourly=precipitation&daily=weathercode,precipitation_sum&current_weather=true&windspeed_unit=ms&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

// Aarhus, Denmark - WeatherAPI
const weatherAarhus =
  'https://api.open-meteo.com/v1/forecast?latitude=56.16&longitude=10.21&daily=precipitation_sum&current_weather=true&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

const weatherCodes = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  51: 'Light Drizzle',
  53: 'Moderate Drizzle',
  55: 'Dense Drizzle',
  56: 'Light Freezing drizzle',
  57: 'Dense Freezing drizzle',
  61: 'Slight Rain',
  63: 'Moderate Rain',
  65: 'Heavy Rain',
  66: 'Light Freezing rain',
  67: 'Heavy Freezing rain',
  71: 'Slight Snowfall',
  73: 'Moderate Snowfall',
  75: 'Heavy Snowfall',
  77: 'Snow grains',
  80: 'Slight Rain showers',
  81: 'Moderate Rain showers',
  82: 'Violent Rain showers',
  85: 'Slight Snow showers',
  86: 'Heavy Snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm & slight hail',
  99: 'Thunderstorm & heavy hail',
};

// Viborg, Denmark - Temperature
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const temperatureElement = document.querySelector('#temperature_viborg');
    temperatureElement.textContent = `${Math.floor(data.current_weather.temperature)}°`;
  });

// Viborg, Denmark - Rain chance
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const precipitationViborg = data.daily.precipitation_sum[0] * 100;
    const temperatureElement = document.querySelector('#rain_viborg');
    temperatureElement.textContent = `${precipitationViborg}%`;
  });

// Viborg, Denmark - Weather Code
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;
    console.log(weatherCodes[weatherCodeNr]);
    const weatherCodeText = document.querySelector('#weatherCode_viborg');
    weatherCodeText.textContent = `${weatherCodes[weatherCodeNr]}`;
  });

// Aarhus, Denmark - Temperature
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const temperatureElement = document.querySelector('#temperature_aarhus');
    temperatureElement.textContent = `${Math.floor(data.current_weather.temperature)}°`;
  });

// Aarhus, Denmark - Rain chance
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const precipitation = data.daily.precipitation_sum[1] * 100;
    const temperatureElement = document.querySelector('#rain_aarhus');
    temperatureElement.textContent = `${precipitation}%`;
  });

// Aarhus, Denmark - Weather Code
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const weatherCodeNr = data.current_weather.weathercode;
    console.log(weatherCodes[weatherCodeNr]);
    const weatherCodeText = document.querySelector('#weatherCode_aarhus');
    weatherCodeText.textContent = `${weatherCodes[weatherCodeNr]}`;
  });
