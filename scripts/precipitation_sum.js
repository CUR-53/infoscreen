// Viborg, Denmark - WeatherAPI
import { weatherViborg } from './index.js';

// Aarhus, Denmark - WeatherAPI
import { weatherAarhus } from './index.js';

// Get the current time
const currentTime = new Date().toISOString().slice(0, 13);

// Viborg, Denmark - Rain chance
fetch(weatherViborg)
  .then((response) => response.json())
  .then((data) => {
    const hourlyData = data.hourly;
    let currentPrecipitationProbability = null;

    for (let i = 0; i < hourlyData.time.length; i++) {
      if (hourlyData.time[i].startsWith(currentTime)) {
        currentPrecipitationProbability = hourlyData.precipitation_probability[i];
        break;
      }
    }

    if (currentPrecipitationProbability !== null) {
      const precipitationElement = document.querySelector('#rain_viborg');
      precipitationElement.textContent = `${currentPrecipitationProbability}%`;
    }
  });

// Aarhus, Denmark - Rain chance
fetch(weatherAarhus)
  .then((response) => response.json())
  .then((data) => {
    const hourlyData = data.hourly;
    let currentPrecipitationProbability = null;

    for (let i = 0; i < hourlyData.time.length; i++) {
      if (hourlyData.time[i].startsWith(currentTime)) {
        currentPrecipitationProbability = hourlyData.precipitation_probability[i];
        break;
      }
    }

    if (currentPrecipitationProbability !== null) {
      const precipitationElement = document.querySelector('#rain_aarhus');
      precipitationElement.textContent = `${currentPrecipitationProbability}%`;
    }
  });
