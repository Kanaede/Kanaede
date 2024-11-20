let slideIndex = 1;
showSlides(slideIndex);

function slideMove(n) {
  showSlides(slideIndex += n);
}

function showSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slides-item');
  let dots = document.getElementsByClassName('slides-do');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace('slides-dot-active', '');
  }
  if (slides) {
    console.log('Slides loaded ' + slides.length)
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' slides-dot-active';
  } else {
    console.error('Value not found');
  }
}