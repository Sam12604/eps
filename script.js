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

(function () {
    const raw = localStorage.getItem("notification");
    if (!raw) return;

    localStorage.removeItem("notification");

    let notification;
    try {
        notification = JSON.parse(raw);
    } catch {
        return;
    }

    NotificationBanner.addOrUpdate(Date.now(), notification.message, notification.type)
})();