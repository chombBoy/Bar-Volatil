let slidePosition = 0;
const slides = document.getElementsByClassName('instagram_item');
const totalSlides = slides.length;

document.getElementById('instagram_button_next')
.addEventListener("click", function() {
  moveToNextSlide();
});

document.getElementById('instagram_button_prev')
.addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('instagram_item--visible');
    slide.classList.add('instagram_item--hidden');
  }
  slides[slidePosition].classList.add('instagram_item--visible');
}

function moveToNextSlide() {
  updateSlidePosition();

  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
}

function moveToPrevSlide() {
  updateSlidePosition();

  if (slidePosition == 0) {
    slidePosition = totalSlides -1;
   } else {
    slidePosition--;
   }
  }
