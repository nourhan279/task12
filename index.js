let current = 0;
function showSlides(now) {
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.getElementsByClassName("dot");

  if (now >= slides.length) {
    current = 0;
  } else if (now < 0) {
    current = slides.length - 1;
  } else {
    current = now;
  }

  const offset = -current * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[current].className += " active";
}

function prev() {
  showSlides(current - 1);
}

function next() {
  showSlides(current + 1);
}

function currentSlide(index) {
  showSlides(index);
}
