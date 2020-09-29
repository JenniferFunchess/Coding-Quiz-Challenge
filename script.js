var countDown = document.getElementbyId("timer");

var quizQuestions = [
  {
    question: "The condition in an if/else statmennt is enclosed within ____.",
    choices: ["Quotes", "Curly brackets", "parentheses", "square brackets"],
    answer: "Curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choices: [
      "Numbers and strings",
      "Other arrays",
      "booleans",
      "all are true",
    ],
    answer: "all of true",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScripts", "Terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "booleans", "alerts", "numbers"],
    answer: "booleans",
  },
  {
    question:
      "String values must ben enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "parenthesis",
  },
];

var timeLeft = 75;
var interval;
var questionsIndex = 0;

window.onload = function () {
  countDown.textContent = "Time:0";
};

function renderOptions(quizQuestions) {
  for (var i = 0; i < quizQuestions.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-info");
    button.textContent = quizQuestions[i];
    button.setAttribute("data-value", quizQuestions[i]);
    options.append(button);
  }
}

function startTimer() {
  countDown = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;
    if (timeLeft <= 0) {
      showScore();
    }
  }, 1000);
}

function startQuiz() {
  mainPage.style.display = "none";
  renderQuestions(questionIndex);
}
