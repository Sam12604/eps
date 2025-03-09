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

let currentTestimony = 0;
const reviews = document.querySelectorAll('.review');
const reviewSection = document.querySelector("#reviews");
let reviewInterval;
let userPaused = false; // Flag to track user interaction

// Function to preload an image
function preloadImage(url) {
    const img = new Image();
    img.src = url;
}

// Function to update the review display
function nextReview() {
    // Hide all reviews
    reviews.forEach(review => review.style.display = "none");

    // Show the current review
    reviews[currentTestimony].style.display = "block";

    // Update the background image dynamically
    const newImage = reviews[currentTestimony].getAttribute('data-img');
    reviewSection.style.background = `linear-gradient(rgba(245, 245, 245, 0.6), rgba(245, 245, 245, 0.6)), url(${newImage})`;
    reviewSection.style.backgroundSize = "cover";
    reviewSection.style.backgroundPosition = "center";

    // Preload the next image in advance
    const nextIndex = (currentTestimony + 1) % reviews.length;
    preloadImage(reviews[nextIndex].getAttribute('data-img'));

    // Move to the next review
    currentTestimony = nextIndex;
}

// Automatically change review every 25 seconds
function startAutoRotation() {
    reviewInterval = setInterval(nextReview, 25000);
}
startAutoRotation();

// Function to reset auto-rotation after user interaction
function resetAutoRotation() {
    clearInterval(reviewInterval);
    userPaused = true;
    setTimeout(() => {
        userPaused = false;
        startAutoRotation();
    }, 10000); // Resume after 10 seconds
}

// Make the entire review section clickable
reviewSection.addEventListener("click", () => {
    nextReview();
    resetAutoRotation();
});

// Preload the first next image
preloadImage(reviews[1].getAttribute('data-img'));

// Start by showing the first review
nextReview();
