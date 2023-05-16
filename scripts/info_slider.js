var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  slides[currentSlide].style.transform = 'translateX(-100%)';
  setTimeout(function () {
    slides[currentSlide].style.transition = 'transform 1s';
    slides[currentSlide].style.transform = 'translateX(0)';
  }, 100);
}

function nextSlide() {
  slides[currentSlide].style.transition = 'transform 1s';
  slides[currentSlide].style.transform = 'translateX(100%)';
  setTimeout(function () {
    slides[currentSlide].style.transition = '';
    slides[currentSlide].style.transform = 'translateX(-100%)';
    setTimeout(showSlide, 6666, currentSlide + 1);
  }, 6666);
}

setInterval(nextSlide, 20000);

showSlide(currentSlide);
