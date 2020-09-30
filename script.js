var countDown = document.getElementById("timer");
var questionOptions = document.getElementById("heading-questions");
var startButton = document.getElementById("start-button");
var buttonOptions = document.getElementById("answer-buttons");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

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

startButton.onclick = startQuiz;

function generateQuizQuestion() {
  welcomeContainer.style.display = "none";
  startButton.style.display = "none";

  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionOptions.innerHTML = "<p>" + currentQuestion.question + "</p>";
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
    }
  }, 1000);
}

function selectAnswer() {}

// function renderOptions() {
//   startTimer();
//   //   timeLeft = 75;
//   welcomeContainer.style.display = "none";
//   startButton.style.display = "none";
//   buttonOptions.style.display = "display";
//   questionIndex = 0;

//   for (var i = 0; i < quizQuestions.length; i++) {
//     var br = document.createElement("br");
//     questionOptions.textContent = quizQuestions[i].question;
//     quizQuestions.setAttribute("data-value", quizQuestions[i].question);
//     questionOptions.append(quizQuestions[i].question);
//     questionOptions.append(br);

//     for (var j = 0; j < quizQuestions[questionIndex].choices.length; j++) {
//       var choiceButtons = document.createElement("button");
//       choiceButtons.setAttribute("style", "text-align:center, margins: 20px");
//       choiceButtons.setAttribute(
//         "data-value",
//         quizQuestions[questionIndex].choices
//       );
//       choiceButtons.textContent = quizQuestions[i].choices;
//       questionOptions.append(choiceButtons);

//   var button = document.createElement("button");
//   var br = document.createElement("br");
//   button.style.textAlign = "center";
//   button.style.marginTop = "1%";
//   button.style.marginBottom = "1%";
//   button.setAttribute("class", "btn btn-info");
//   button.setAttribute("type", "submit");
//   button.setAttribute("dataValue", quizQuestions[i].choices);
//   button.textContent = quizQuestions[i].choices;
//   questionOptions.append(br);
//   questionOptions.append(button);
//   questionOptions.append(br);
// button.onclick = checkAnswer;
// startButton.hide button
//     }
//   }
// }
