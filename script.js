const elements = document.querySelectorAll('[data-user]');
let Score = document.getElementById("Score_num");

let score = parseInt(localStorage.getItem('Score_num')) || 0;
 score.textContent = score;

let computerOptions = ["rock", "scissors", "paper"];
let computerSelection = computerOptions[Math.floor(Math.random() * 3)];

elements.forEach(element => {
    element.addEventListener('click', function() {
        let userSelection = this.getAttribute('data-user`');
        window.location.href = `./Result.html?userSelection=${userSelection}&computerSelection=${computerSelection}&score=${score}`;
    });
});