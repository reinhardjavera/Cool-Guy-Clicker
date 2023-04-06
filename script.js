let uang = 0;
let autoClicker = 0;
let multiplier = 1;
let multiplierCost = 50;
let boughtAutoClicker = false;


let upgrade1Bought = false;
let upgrade1Cost = 100000;
let upgrade1Bonus = 2500;

let upgrade2Bought = false;
let upgrade2Cost = 500000;
let upgrade2Bonus = 10000;

let upgradeBonusTotal = 0;

//Click button
document.getElementById("click-btn").addEventListener("click", function () {
  uang += multiplier + upgradeBonusTotal;
  updateClicks();
});

// Set up auto clicker interval
setInterval(function () {
  uang += autoClicker * (multiplier + upgradeBonusTotal);
  updateClicks();
}, 1000);

// Auto clicker button
document.getElementById("auto-clicker-btn").addEventListener("click", function () {
  if (uang >= 10000){
    if(!boughtAutoClicker){
      uang -= 10000;
      autoClicker++;
      boughtAutoClicker = true;
      updateClicks();
      updateAutoClicker();
    }else{
      alert("You can only buy the Auto Clicker once!");
    }
  } else {
    if(!boughtAutoClicker){
      alert("Insufficient money.");
    }else{
      alert("You can only buy the Auto Clicker once!");
    }
  }
}
);

//Multiplier button
document.getElementById("multiplier-btn").addEventListener("click", function () {
  if (uang >= multiplierCost) {
    uang -= multiplierCost;
    multiplier+= 9;
    multiplierCost += Math.round(multiplierCost * 0.5);
    updateClicks();
    updateMultiplier();
    updateMultiplierCost();
  }else{
    noMoney()
  }
});

//Upgrade 1
document.getElementById("upgrade1-btn").addEventListener("click", function(){
  if (uang >= upgrade1Cost){
    if (!upgrade1Bought){
      upgrade1Bought = true
      uang -= upgrade1Cost;
      upgradeBonusTotal += upgrade1Bonus;
      updateClicks();
      this.textContent = "Buy Artifact - Rp. 100000 (PURCHASED)"
    }else{
      alert("You already bought the artifact upgrade.");
    }
  }else{
    if (!upgrade1Bought){
      noMoney();
    }else{
      alert("You already bought the artifact upgrade.");
    }
  }
})


//Upgrade 2
document.getElementById("upgrade2-btn").addEventListener("click", function(){
  if (uang >= upgrade2Cost){
    if (!upgrade2Bought){
      upgrade2Bought = true
      uang -= upgrade2Cost;
      upgradeBonusTotal += upgrade2Bonus;
      updateClicks();
      this.textContent = "Hire an agent for investor - Rp. 500000 (PURCHASED)"
    }else{
      alert("You already bought the Agent upgrade.");
    }
  }else{
    if (!upgrade2Bought){
      noMoney();
    }else{
      alert("You already bought the Agent upgrade.");
    }
  }
})






function play() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0.1;
  audio.play();
}

function updateClicks() {
  document.getElementById("uang").textContent = uang;
}

function updateAutoClicker() {
  document.getElementById("auto-clicker-btn").textContent = "Purchased";
}

function updateMultiplier() {
  document.getElementById("multiplier").textContent = multiplier;
}

function updateMultiplierCost() {
  document.getElementById("multiplier-btn").textContent = "Buy NFT - Rp. " + multiplierCost;
}

function noMoney(){
  alert("Insufficient money.");
}