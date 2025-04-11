/* main.js */
// Dummy data loader for casinos
document.addEventListener("DOMContentLoaded", function() {
  fetch('public/data/casinos.json')
    .then(response => response.json())
    .then(data => {
      populateCasinoListings(data);
    })
    .catch(err => console.error("Error loading casino data:", err));
});

function populateCasinoListings(casinos) {
  const container = document.getElementById('casino-listings');
  container.innerHTML = '';
  casinos.forEach((casino, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card shadow-sm">
        <img src="${casino.logo}" class="card-img-top" alt="${casino.name} Logo">
        <div class="card-body">
          <h5 class="card-title">${casino.name}</h5>
          <p class="card-text">Rating: ${'★'.repeat(casino.rating)}${'☆'.repeat(5 - casino.rating)}</p>
          <span class="badge bg-success">PayID Supported</span>
          <p class="mt-2">Bonus: ${casino.bonus} <span id="timer-${index}"></span></p>
          <a href="${casino.referralUrl}" class="btn btn-primary" onclick="trackReferral('${casino.referralUrl}')">Play Now</a>
        </div>
      </div>
    `;
    container.appendChild(col);
    startCountdown(`timer-${index}`, casino.bonusExpiry);
  });
}

// Dummy countdown timer
function startCountdown(elementId, expiry) {
  const countdownElement = document.getElementById(elementId);
  const countDownDate = new Date(expiry).getTime();
  const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(timerInterval);
      countdownElement.innerHTML = "Expired";
      return;
    }
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
