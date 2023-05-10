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
  45: 'Fog and depositing rime fog',
  51: 'Drizzle: Light intensity',
  53: 'Drizzle: Moderate intensity',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing drizzle: Light intensity',
  57: 'Freezing drizzle: Dense intensity',
  61: 'Rain: Slight intensity',
  63: 'Rain: Moderate intensity',
  65: 'Rain: Heavy intensity',
  66: 'Freezing rain: Light intensity',
  67: 'Freezing rain: Heavy intensity',
  71: 'Snowfall: Slight intensity',
  73: 'Snowfall: Moderate intensity',
  75: 'Snowfall: Heavy intensity',
  77: 'Snow grains',
  80: 'Rain showers: Slight intensity',
  81: 'Rain showers: Moderate intensity',
  82: 'Rain showers: Violent intensity',
  85: 'Snow showers: Slight intensity',
  86: 'Snow showers: Heavy intensity',
  95: 'Thunderstorm: Slight or moderate',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
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
    const precipitationViborg = data.daily.precipitation_sum[1] * 100;
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
