var countDown = document.getElementById("timer");
var questionOptions = document.getElementById("heading-questions");
var startButton = document.getElementById("start-button");
var buttonOptions = document.getElementById("answer-buttons");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var highscoreInputName = document.getElementById("High-score");
var finalScoreEl = document.getElementById("Final-Score");

var welcomeContainer = document.querySelector(".Welcome-container");
var quizContainer = document.querySelector(".Quiz-Container");
var finalScore = document.querySelector(".Final-Score");
var quizQuestions = [
  {
    question: "The condition in an if/else statmennt is enclosed within ____.",
    choiceA: "Quotes",
    choiceB: "Curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    answer: "b",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choiceA: "Numbers and strings",
    choiceB: "Other arrays",
    choiceC: "booleans",
    ChoiceD: "all are true",
    answer: "d",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "console.log",
    choiceB: "for loops",
    choiceC: "Terminal/bash",
    choiceD: "JavaScripts",
    answer: "a",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "Strings",
    choiceB: "alerts",
    choiceC: "booleans",
    choiceD: "numbers",
    answer: "c",
  },
  {
    question:
      "String values must ben enclosed within ____ when being assigned to variables.",
    choiceA: "parentheses",
    choiceB: "quotes",
    choiceC: "curly brackets",
    choiceD: "commas",
    answer: "a",
  },
];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 75;
var timerInterval;

window.onload = function () {
  countDown.textContent = "Time:0";
  buttonA.style.display = "none";
  buttonB.style.display = "none";
  buttonC.style.display = "none";
  buttonD.style.display = "none";
};

startButton.addEventListener("click", function () {
  startQuiz();
});

function generateQuizQuestion() {
  welcomeContainer.style.display = "none";
  startButton.style.display = "none";
  buttonA.style.display = "block";
  buttonB.style.display = "block";
  buttonC.style.display = "block";
  buttonD.style.display = "block";
  var br = document.createElement("br");

  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionOptions.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonA.style.display = "block";
  buttonB.style.display = "block";
  buttonC.style.display = "block";
  buttonD.style.display = "block";
  buttonA.textContent = currentQuestion.choiceA;
  buttonB.textContent = currentQuestion.choiceB;
  buttonC.textContent = currentQuestion.choiceC;
  buttonD.textContent = currentQuestion.choiceD;
  buttonA.innerHTML = currentQuestion.choiceA;
  buttonB.innerHTML = currentQuestion.choiceB;
  buttonC.innerHTML = currentQuestion.choiceC;
  buttonD.innerHTML = currentQuestion.choiceD;
}

function startQuiz() {
  generateQuizQuestion();

  timerInterval = setInterval(function () {
    timeLeft--;
    countDown.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    } else if (timeLeft < 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].answer;

  if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
    score++;
    alert("That Is Correct!");
    currentQuestionIndex++;
    generateQuizQuestion();
  } else if (
    answer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    alert("That Is Incorrect.");
    timeLeft = -10;
    currentQuestionIndex++;
    generateQuizQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  buttonA.style.display = "none";
  buttonB.style.display = "none";
  buttonC.style.display = "none";
  buttonD.style.display = "none";
  clearInterval(countDown);
  highscoreInputName.value = "";
  finalScoreEl.innerHTML =
    "You got " + score + " out of " + quizQuestions.length + " correct!";
  finalScoreEl.style.textAlign = "center";
  finalScoreEl.style.fontSize = "25px";
  finalScoreEl.style.fontWeight = "bold";
}
