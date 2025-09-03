function checkPassword() {
  const secret = "zazaeini"; // change to your secret password
  let entered = prompt("Enter the secret password 💖:");

  if (entered !== secret) {
    alert("Sorry, wrong password 😢");
    document.body.innerHTML = "<h2 style='color:white; text-align:center; margin-top:20%;'>Access Denied 🚫</h2>";
  }
}


// Messages for each picture
const messages = [
  "You are my brightest star 🌟",
  "Every smile of yours lights up my world ✨",
  "Forever and always, it’s you ❤️",
  "You make ordinary moments magical 💫",
  "My favorite place is by your side 💕",
  "You are the reason for my happiest days 🌹"
];

function showMessage(index) {
  const box = document.getElementById("msgBox");
  const msgText = document.getElementById("msgText");
  
  msgText.textContent = messages[index];
  box.classList.add("show");
}

function closeMessage() {
  document.getElementById("msgBox").classList.remove("show");
}



