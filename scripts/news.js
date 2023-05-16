const TEST_RSS_URL = `https://www.tv2nord.dk/rss`;
const list = document.querySelector('#news_list');

const app = {};

app.TV2NORDtmpl = (el, index) => `<div>
    <p>&nbsp;&nbsp&nbsp;&nbsp;<strong>|</strong>&nbsp;&nbsp;&nbsp;&nbsp;${el.querySelector('title').textContent}</p>
</div>`;

app.renderTV2NORD = (data) => {
  const items = data.querySelectorAll('item');
  items.forEach((el, index) => {
    list.innerHTML += app.TV2NORDtmpl(el, index);
  });
};

app.init = () => {
  fetch(TEST_RSS_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then((data) => app.renderTV2NORD(data));
};

app.init();
