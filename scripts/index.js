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
