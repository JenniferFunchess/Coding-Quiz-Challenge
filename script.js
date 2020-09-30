var countDown = document.getElementById("timer");
var questionOptions = document.getElementById("heading-questions");
var startButton = document.getElementById("start-button");
var submitButton = document.getElementById("submit-button");
var buttonOptions = document.getElementById("answer-buttons");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var highscoreInputName = document.getElementById("High-score");
var finalScoreEl = document.getElementById("Final-Score");
var intialsForm = document.getElementById("Intials-form");

var welcomeContainer = document.querySelector(".Welcome-container");
var quizContainer = document.querySelector(".Quiz-Container");
var finalScore = document.querySelector(".Final-Score");
var quizQuestions = [
  {
    question: "The condition in an if/else statement is enclosed within ____.",
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
      "String values must be enclosed within ____ when being assigned to variables.",
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
  intialsForm.style.display = "none";
  submitButton.style.display = "none";
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

  if (currentQuestionIndex === finalQuestionIndex) {
    return quizOver();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionOptions.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonA.style.display = "block";
  buttonB.style.display = "block";
  buttonC.style.display = "block";
  buttonD.style.display = "block";
  buttonA.setAttribute("style", "margin:auto; width:50%; text-align:center;");
  buttonB.setAttribute("style", "margin:auto; width:50%; text-align:center;");
  buttonC.setAttribute("style", "margin:auto; width:50%; text-align:center;");
  buttonD.setAttribute("style", "margin:auto; width:50%; text-align:center;");
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
      quizOver();
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
    // timeLeft = timerInterval - 10;
    currentQuestionIndex++;
    generateQuizQuestion();
  } else {
    quizOver();
  }
}

function quizOver() {
  buttonA.style.display = "none";
  buttonB.style.display = "none";
  buttonC.style.display = "none";
  buttonD.style.display = "none";
  questionOptions.style.display = "none";
  clearInterval(timerInterval);
  var gradeQuiz = "";
  highscoreInputName.value = "";
  finalScoreEl.innerHTML =
    "You got " + score + " out of " + quizQuestions.length + " correct!";

  if (score === 1) {
    var gradeQuiz = document.createElement("h1");
    gradeQuiz.textContent = "You recieved a 20!";
    gradeQuiz.setAttribute(
      "style",
      "margin:auto; width:50%; text-align:center; fontSize:15px;"
    );
    document.body.append(gradeQuiz);
  }
  if (score === 2) {
    var gradeQuiz = document.createElement("h1");
    gradeQuiz.textContent = "You recieved a 40!";
    gradeQuiz.setAttribute(
      "style",
      "margin:auto; width:50%; text-align:center;fontSize:15px;"
    );
    document.body.append(gradeQuiz);
  }
  if (score === 3) {
    var gradeQuiz = document.createElement("h1");
    gradeQuiz.textContent = "You recieved a 60!";
    gradeQuiz.setAttribute(
      "style",
      "margin:auto; width:50%; text-align:center;fontSize:15px;"
    );
    document.body.append(gradeQuiz);
  }
  if (score === 4) {
    var gradeQuiz = document.createElement("h1");
    gradeQuiz.textContent = "You recieved a 80!";
    gradeQuiz.setAttribute(
      "style",
      "margin:auto; width:50%; text-align:center;fontSize:15px;"
    );
    document.body.append(gradeQuiz);
  }
  if (score === 5) {
    var gradeQuiz = document.createElement("h1");
    gradeQuiz.textContent = "You recieved a 100!";
    gradeQuiz.setAttribute(
      "style",
      "margin:auto; width:50%; text-align:center;fontSize:15px;"
    );
    document.body.append(gradeQuiz);
  }

  finalScoreEl.style.textAlign = "center";
  finalScoreEl.style.fontSize = "25px";
  finalScoreEl.style.fontWeight = "bold";

  intialsForm.style.display = "block";
  submitButton.setAttribute(
    "style",
    "margin:auto; width:50%; text-align:center;"
  );
  submitButton.style.display = "block";
}

function saveIntialsAndScore() {}
