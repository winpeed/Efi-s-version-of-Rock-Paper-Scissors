const nameForm = document.getElementById("name-form");
const inputName = document.getElementById("input-name");

const playerOneName = document.getElementById("playerone-name");
const playerTwoName = document.getElementById("playertwo-name");

let playeroneScore = document.getElementById("playerone-score");
let playertwoScore = document.getElementById("playertwo-score");

const playeroneElem = document.getElementById("playerone-elem");
let playertwoElem = document.getElementById("playertwo-elem");

let firstPlayerScore = 0;
let secondPlayerScore = 0;

let elemArray1 = ["✊", "🧻", "✂️"];
let elemArray2 = ["✊", "🧻", "✂️"];

let playeroneIcons = document.getElementById("playerone-icons");
let oneIcons = document.getElementsByClassName("one-icons");

let declareWinner = document.getElementById("declare-winner");

const rules = document.querySelector(".rules");
const players = document.querySelector(".players");
const registration = document.querySelector(".registration");
const mainContent = document.querySelector("main");

const welcomeAddress = document.getElementById("welcome-address");
const restartGame = document.getElementById("restart");
const resultContent = document.querySelector(".result-content");

const beginBtn = document.getElementById("begin");

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  playerOneName.textContent = inputName.value;
  playerTwoName.textContent = "Computer";
  playeroneScore.textContent = `${firstPlayerScore}`;
  playertwoScore.textContent = `${secondPlayerScore}`;
  welcomeAddress.textContent = `Welcome ${inputName.value}`;
  rules.style.display = "block";
  nameForm.style.display = "none";
  registration.style.display = "none";
});

beginBtn.addEventListener("click", function () {
  rules.style.display = "none";
  players.style.display = "flex";
  players.style.flexDirection = "column";
});

restartGame.addEventListener("click", function () {
  location.reload();
});

for (let i = 0; i < elemArray1.length; i++) {
  oneIcons[i].addEventListener("click", function () {
    let randomNumbertwo = Math.floor(Math.random() * 3);
    let elem = elemArray2[randomNumbertwo];

    playertwoElem.textContent = elem;

    if (oneIcons[i].textContent == "✊" && playertwoElem.textContent == "✂️") {
      firstPlayerScore += 1;
    } else if (
      playertwoElem.textContent == "✊" &&
      oneIcons[i].textContent == "✂️"
    ) {
      secondPlayerScore += 1;
    } else if (
      oneIcons[i].textContent == "🧻" &&
      playertwoElem.textContent == "✊"
    ) {
      firstPlayerScore += 1;
    } else if (
      playertwoElem.textContent == "🧻" &&
      oneIcons[i].textContent == "✊"
    ) {
      secondPlayerScore += 1;
    } else if (
      oneIcons[i].textContent == "✂️" &&
      playertwoElem.textContent == "🧻"
    ) {
      firstPlayerScore += 1;
    } else if (
      playertwoElem.textContent == "✂️" &&
      oneIcons[i].textContent == "🧻"
    ) {
      secondPlayerScore += 1;
    } else if (
      (playertwoElem.textContent == "✂️" && oneIcons[i].textContent == "✂️") ||
      (playertwoElem.textContent == "🧻" && oneIcons[i].textContent == "🧻") ||
      (playertwoElem.textContent == "✊" && oneIcons[i].textContent == "✊")
    ) {
      firstPlayerScore += 0;
      secondPlayerScore += 0;
    }

    playeroneScore.textContent = firstPlayerScore;
    playertwoScore.textContent = secondPlayerScore;

    if (firstPlayerScore == 10) {
      resultContent.style.display = "flex";
      declareWinner.textContent = `${playerOneName.textContent} wins!`;
      players.style.display = "none";
    } else if (secondPlayerScore == 10) {
      resultContent.style.display = "flex";
      declareWinner.textContent = `Computer wins!`;
      players.style.display = "none";
    }
  });
}
