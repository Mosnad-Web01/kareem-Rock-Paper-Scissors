let userContainer = document.getElementById("usercontainer");
let computerContainer = document.getElementById("computercontainer");
let scoreResult = document.getElementById("Score_res");
let playAgain = document.getElementById("Play_again");
let whoIsTheWiner = document.getElementById("Who_Winer");


const urlParams = new URLSearchParams(window.location.search);
const userSelection = urlParams.get("userSelection");
const computerSelection = urlParams.get("computerSelection");
let score = parseInt(urlParams.get("score"));


let userImage = document.createElement("img");
userImage.setAttribute("src", `./images/icon-${userSelection}.svg`);
userContainer.appendChild(userImage);


let computerImage = document.createElement("img");
computerImage.setAttribute("src", `./images/icon-${computerSelection}.svg`);
computerContainer.appendChild(computerImage);


function applyBorderBasedOnSelection(container, selection) {
  if (selection === "paper") {
    container.classList.add("Options_paper");
  } else if (selection === "rock") {
    container.classList.add("Options_rock");
  } else if (selection === "scissors") {
    container.classList.add("Options_scissors");
  }
}


applyBorderBasedOnSelection(userContainer, userSelection);
applyBorderBasedOnSelection(computerContainer, computerSelection);


if (
  (userSelection === "rock" && computerSelection === "scissors") ||
  (userSelection === "scissors" && computerSelection === "paper") ||
  (userSelection === "paper" && computerSelection === "rock")
) {
  whoIsTheWiner.textContent = "YOU WIN";
  score += 1;
} else if (
  (computerSelection === "rock" && userSelection === "scissors") ||
  (computerSelection === "scissors" && userSelection === "paper") ||
  (computerSelection === "paper" && userSelection === "rock")
) {
  whoIsTheWiner.textContent = "YOU LOSE";
  score -= 1;
} else {
  whoIsTheWiner.textContent = "It's a Tie";
}


localStorage.setItem("score", score);
scoreResult.textContent = `${score}`;


playAgain.addEventListener("click", () => {
  window.location.href = `./index.html`;
});
