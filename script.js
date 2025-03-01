// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close nav when clicking outside
document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
}

function showPrevItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
}

document.querySelector('.carousel-next').addEventListener('click', showNextItem);
document.querySelector('.carousel-prev').addEventListener('click', showPrevItem);

// Auto-rotate carousel every 5 seconds
setInterval(showNextItem, 5000);