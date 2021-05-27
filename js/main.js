var title = document.getElementById("title");
var newGameButton = document.getElementById("newGameBtn");
var optionsButton = document.getElementById("optionsBtn");
var leaderboardButton = document.getElementById("leaderboardBtn");
var gameContainer = document.getElementById("game");
var usernameContainer = document.getElementById("username");
var questionBox = document.getElementById("questionBox");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var correctChoice = 0;
var points = 0;

function newGame() {
    var username = prompt("Please enter your username", "username");
    usernameContainer.innerHTML = username;
    newGameButton.style.display = "none";
    optionsButton.style.display = "none";
    leaderboardButton.style.display = "none";
    gameContainer.style.display = "block";
    title.style.display = "none";
    newQuestion();
}

function newQuestion() {
    var random1 = getRandomNumber(1, 100);
    var random2 = getRandomNumber(1, 100);
    var praxi = getRandomNumber(1, 4);
    var symbol = "";
    var correct = 0;
    correctChoice = getRandomNumber(1, 4);

    if (praxi == 1) {
        symbol = "+";
        correct = random1 + random2;
    }

    if (praxi == 2) {
        symbol = "-";
        correct = random1 - random2;
    }

    if (praxi == 3) {
        symbol = "x";
        correct = random1 * random2;
    }

    if (praxi == 4) {
        symbol = "/";
        correct = random1 / random2;
    }

    questionBox.innerHTML = random1 + " " + symbol + " " + random2;

    if (correctChoice == 1) {
        answer1.innerHTML = correct;
        answer2.innerHTML = getRandomNumber(1, 1000);
        answer3.innerHTML = correct - 1;
        answer4.innerHTML = correct - getRandomNumber(1, 10);
    }

    if (correctChoice == 2) {
        answer1.innerHTML = correct - 1;
        answer2.innerHTML = correct;
        answer3.innerHTML = getRandomNumber(1, 1000);
        answer4.innerHTML = correct - getRandomNumber(1, 10);
    }

    if (correctChoice == 3) {
        answer1.innerHTML = correct - 1;
        answer2.innerHTML = correct - getRandomNumber(1, 10);
        answer3.innerHTML = correct;
        answer4.innerHTML = getRandomNumber(1, 1000);
    }

    if (correctChoice == 4) {
        answer1.innerHTML = getRandomNumber(1, 1000);
        answer2.innerHTML = correct - getRandomNumber(1, 10);
        answer3.innerHTML = getRandomNumber(1, 1000);
        answer4.innerHTML = correct;
    }

}

function getRandomNumber(from, until) {
    return Math.floor(Math.random() * until) + from;
}

function answer(choice) {
    if (choice === correctChoice) {
        alert("Σωστή Απάντηση");
    } else {
        alert("Λάθος");
    }

    newQuestion();
}



