let clicks = 0;
let autoClicker = 0;
let multiplier = 1;
let multiplierCost = 20;
let boughtAutoClicker = false;

//Click button
document.getElementById("click-btn").addEventListener("click", function () {
  clicks += multiplier;
  updateClicks();
});

// Auto clicker button
document.getElementById("auto-clicker-btn").addEventListener("click", function () {
if (!boughtAutoClicker && clicks >=500){
  clicks -=500;
  autoClicker++;
  boughtAutoClicker = true;
  updateClicks();
  updateAutoClicker();
} else {
  alert("You can only buy the Auto Clicker once!");
}
});

//Multiplier button
document.getElementById("multiplier-btn").addEventListener("click", function () {
  if (clicks >= multiplierCost) {
    clicks -= multiplierCost;
    multiplier++;
    multiplierCost *= 2;
    updateClicks();
    updateMultiplier();
    updateMultiplierCost();
  }
});

// Set up auto clicker interval
setInterval(function () {
  clicks += autoClicker * multiplier;
  updateClicks();
}, 1000);

function updateClicks() {
  document.getElementById("clicks").textContent = clicks;
}

function updateAutoClicker() {
  document.getElementById("auto-clicker").textContent = autoClicker;
}

function updateMultiplier() {
  document.getElementById("multiplier").textContent = multiplier;
}

function updateMultiplierCost() {
  document.getElementById("multiplier-btn").textContent = "Buy Multiplier - Cost: " + multiplierCost + " clicks";
}
