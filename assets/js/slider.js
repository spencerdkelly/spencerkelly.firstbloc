window.addEventListener('DOMContentLoaded', () => {

// --------------------------------------------------
// Fullscreen Slider
// --------------------------------------------------

const slides = document.querySelectorAll('.slide');
const body = document.body;
var currentSlide = 0;

if (slides.length > 0) {
  
  const slideTotal = document.querySelectorAll('.slide-total')[0];
  const slideCurrent = document.querySelectorAll('.slide-current')[0];
  slideTotal.innerHTML= slides.length;

  function nextSlide() {
    const inactiveSlides = document.querySelectorAll('.inactive');
    

    for(let i = 0; i<inactiveSlides.length; i++) {
        inactiveSlides[i].classList.remove('animate','inactive');
    }

    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('inactive','animate');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active', 'animate');

    console.log(currentSlide)

    // Set color of overlay text
    if(currentSlide == 3 || currentSlide == 5 ||currentSlide == 6) {
      body.classList.add('light-header');
    } else {
      body.classList.remove('light-header');
    }

    slideCurrent.innerHTML = currentSlide + 1;

  }

  setInterval(nextSlide, 5000); // Auto-rotate slides every 5 seconds
}


window.addEventListener("focus", function(event) { 

    for(let i = 0; i<slides.length; i++) {
        inactiveSlides[i].classList.remove('animate','inactive');
    }

}, false);



// --------------------------------------------------
// Item Slider
// --------------------------------------------------
const slideItems = document.querySelectorAll('.slide-item');
if (slideItems.length > 0) {

  var itemSlider = document.getElementsByClassName('item-slider-mover')[0];

  itemSlider.addEventListener("transitionend", () => {
    itemSlider.classList.remove('animate');
    var firstItem = itemSlider.removeChild(itemSlider.firstElementChild);
    itemSlider.appendChild(firstItem);
  });

  function nextItem() {
    
    itemSlider.classList.add('animate');
  }

  setInterval(nextItem, 3000); // Auto-rotate items every 3 seconds
}

// --------------------------------------------------
// Item Slider (Small)
// --------------------------------------------------
const smallSlideItems = document.querySelectorAll('.slide-item.small');
if (smallSlideItems.length > 0) {

  var smallItemSlider = document.getElementsByClassName('small-item-slider-mover')[0];

  smallItemSlider.addEventListener("transitionend", () => {
    smallItemSlider.classList.remove('animate');
    var firstSmallItem = smallItemSlider.removeChild(smallItemSlider.firstElementChild);
    smallItemSlider.appendChild(firstSmallItem);
  });

  function nextSmallItem() {
    
    smallItemSlider.classList.add('animate');
  }

  setInterval(nextSmallItem, 0); // Auto-rotate items every 3 seconds
}



});