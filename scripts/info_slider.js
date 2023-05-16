var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  slides[currentSlide].style.transform = 'translateX(-100%)';
  setTimeout(function () {
    slides[currentSlide].style.transition = 'transform 0.6s';
    slides[currentSlide].style.transform = 'translateX(0)';
  }, 100);
}

function nextSlide() {
  slides[currentSlide].style.transition = 'transform 0.6s';
  slides[currentSlide].style.transform = 'translateX(100%)';
  setTimeout(function () {
    slides[currentSlide].style.transition = '';
    slides[currentSlide].style.transform = 'translateX(-100%)';
    setTimeout(showSlide, 2333, currentSlide + 1);
  }, 500);
}

setInterval(nextSlide, 7000);

showSlide(currentSlide);
