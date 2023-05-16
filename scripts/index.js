// Viborg, Denmark - WeatherAPI
export const weatherViborg =
  'https://api.open-meteo.com/v1/forecast?latitude=56.45&longitude=9.40&hourly=precipitation_probability&daily=weathercode,rain_sum,precipitation_sum&current_weather=true&windspeed_unit=ms&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

// Aarhus, Denmark - WeatherAPI
export const weatherAarhus =
  'https://api.open-meteo.com/v1/forecast?latitude=56.16&longitude=10.21&hourly=precipitation_probability&daily=weathercode,rain_sum,precipitation_sum&current_weather=true&windspeed_unit=ms&past_days=1&forecast_days=1&timezone=Europe%2FBerlin';

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;

  let time = hh + ':' + mm;

  document.getElementById('clock').innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const d = new Date();
let timeOfDay = weekday[d.getDay()];
document.getElementById('day').innerHTML = timeOfDay;

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const m = new Date();
let timeOfMonth = month[d.getMonth()];
document.getElementById('month').innerHTML = timeOfMonth;

const date = new Date();
let dateOfMonth = d.getDate();
document.getElementById('date').innerHTML = dateOfMonth + '.';



