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
