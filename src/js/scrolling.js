const slideWrapper = document.querySelector('.slide-wrapper');
const parallax = document.querySelector('.parallax');
const rate = 0.1; // lower number is slower speed


parallax.addEventListener('scroll', () => {
    if(slideWrapper) {
      slideWrapper.style.opacity = (100 - parallax.scrollTop * rate) + '%';
    }
 });
