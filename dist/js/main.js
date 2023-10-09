var encEmail = "c3BlbmNlckBmaXJzdGJsb2MuY29t";
const form = document.getElementById("contact");
if(form) {
	form.setAttribute("href", "mailto:".concat(atob(encEmail)));
}

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

    // Set color of overlay text
    if(currentSlide == 1 || currentSlide == 2) {
      body.classList.add('light-header');
    } else {
      body.classList.remove('light-header');
    }

    slideCurrent.innerHTML = currentSlide + 1;

  }

  setInterval(nextSlide, 5000); // Auto-rotate slides every 5 seconds
}



// --------------------------------------------------
// Full Slider
// --------------------------------------------------

// const slides = document.querySelectorAll('.slide');
// const body = document.body;
// let currentSlide = null;

// if (slides.length > 0) {

//   currentSlide = 0;
//   const slideTotal = document.querySelectorAll('.slide-total')[0];
//   const slideCurrent = document.querySelectorAll('.slide-current')[0];
//   slideTotal.innerHTML = slides.length;

//   //var slideWrap = document.getElementsByClassName('slide-wrapper-inner')[0];

//   // slideWrap.addEventListener("transitionend", () => {
//   //   slideWrap.classList.remove('animate');
//   //   var firstItem = slideWrap.removeChild(slideWrap.firstElementChild);
//   //   slideWrap.appendChild(firstItem);
//   // });

//   function nextSlide() {

//     // const inactiveSlides = document.querySelectorAll('.inactive');

//     // for(let i = 0; i<inactiveSlides.length; i++) {
//     //     inactiveSlides[i].classList.remove('animate','inactive');
//     // }

//     // slides[currentSlide].classList.remove('active');
//     // slides[currentSlide].classList.add('inactive','animate');

//     currentSlide = (currentSlide + 1);
//     if(currentSlide >= slides.length) {
//       currentSlide = 0;
//     }

//     //slides[currentSlide].classList.add('active', 'animate');

//     // Set color of overlay text
//     if(currentSlide == 1 || currentSlide == 2) {
//       body.classList.add('light-header');
//     } else {
//       body.classList.remove('light-header');
//     }

//     slideCurrent.innerHTML = currentSlide + 1;

    

//     //slideWrap.classList.add('animate');
//   }

//   setInterval(nextSlide, 3000); // Auto-rotate items every 3 seconds
// }



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
const slideWrapper = document.querySelector('.slide-wrapper');
const parallax = document.querySelector('.parallax');
const rate = 0.1; // lower number is slower speed


parallax.addEventListener('scroll', () => {
    if(slideWrapper) {
      slideWrapper.style.opacity = (100 - parallax.scrollTop * rate) + '%';
    }
 });
