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
var questionNumberText = document.getElementById("questionNumberText");
var wrongAnswerNumberText = document.getElementById("wrongAnswerNumberText");
var pointsText = document.getElementById("points");
var gameOverText = document.getElementById("gameOver");
var finalPoints = document.getElementById("finalPoints");
var newQuestionButton = document.getElementById("newQuestion");
var correctChoice = 0;
var points = 0;
var questionNumber = 0;


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
    newQuestionButton.style.display = "none";
    answer1.style.border = "none";
    answer2.style.border = "none";
    answer3.style.border = "none";
    answer4.style.border = "none";
    answer1.style.backgroundColor = "darkgrey";
    answer2.style.backgroundColor = "darkgrey";
    answer3.style.backgroundColor = "darkgrey";
    answer4.style.backgroundColor = "darkgrey";
    var random1 = getRandomNumber(1, 100);
    var random2 = getRandomNumber(1, 100);
    var praxi = getRandomNumber(1, 4);
    var symbol = "";
    var correct = 0;
    correctChoice = getRandomNumber(1, 4);
    questionNumber++;
    questionNumberText.innerHTML = questionNumber;

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
    var choiceButton = null;
    if (choice == 1) {
        choiceButton = answer1;
    }

    if (choice == 2) {
        choiceButton = answer2;
    }

    if (choice == 3) {
        choiceButton = answer3;
    }

    if (choice == 4) {
        choiceButton = answer4;
    }
    choiceButton.style.border = "5px solid yellow";

    choiceButton.style.border = "5px solid yellow";
    setTimeout(function () {
        choiceButton.style.border = "none";
        setTimeout(function () {
            choiceButton.style.border = "5px solid yellow";
            setTimeout(function () {
                if (choice === correctChoice) {
                    points++;
                    pointsText.innerHTML = points;
                    choiceButton.style.backgroundColor = "green";
                    newQuestionButton.style.display = "block";
                } else {
                    choiceButton.style.backgroundColor = "red";
                    var wrongAnswers = questionNumber - points;
                    wrongAnswerNumberText.innerHTML = wrongAnswers;
                    if (wrongAnswers >= 3) {
                        gameOver();
                    } else {
                        newQuestionButton.style.display = "block";
                    }
                }
            }, 500);
        }, 500);
    }, 500);
}

function gameOver() {
    gameOverText.style.display = "block";
    gameContainer.style.display = "none";
    finalPoints.innerHTML = points;
    points = 0;
    questionNumber = 0;
}

function backToHome() {
    gameOverText.style.display = "none";
    gameContainer.style.display = "none";
    newGameButton.style.display = "block";
    optionsButton.style.display = "block";
    leaderboardButton.style.display = "block";
    title.style.display = "block";
}