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

//Testimony script
currentTestimony = 0;
const reviews = document.getElementsByClassName('review');

// This swaps the text and the image on the review card
function nextReview() {
  for (let i = 0; i < reviews.length; i++) {
    if (i == currentTestimony) {
      reviews[i].setAttribute('style', 'display: block;');
      reviews[i].parentElement.setAttribute('style', `height: 52vh; background: linear-gradient(rgba(245, 245, 245, 0.6), rgba(245, 245, 245, 0.6)), url(${reviews[i].getAttribute('data-img')}); background-size: cover; background-position: center;`)
    } else {
      reviews[i].setAttribute('style', 'display: none');
    }
  }

  currentTestimony++;
  if (currentTestimony >= reviews.length) {
    currentTestimony = 0; // Loop back to the first review
  }
}

// Store the interval ID in a variable
let reviewInterval = setInterval(nextReview, 25000);

// Add click event listener because i can
document.querySelector('#reviews').addEventListener('click', () => {
    // Call nextReview immediately when clicked or dont
    nextReview();
    // Clear the existing interval so you have time to read
    clearInterval(reviewInterval);
    // Start a new interval because i can and i will
    reviewInterval = setInterval(nextReview, 25000);
});


// Kick off etc etc
nextReview()
