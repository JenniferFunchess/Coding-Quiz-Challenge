var countDown = document.getElementById("timer");
var questionOptions = document.getElementById("heading-questions");
var startButton = document.getElementById("start-button");

var welcomeContainer = document.querySelector(".Welcome-container");
var quizContainer = document.querySelector(".Quiz-Container");
var finalScore = document.querySelector(".Final-Score");
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

function renderOptions() {
  startTimer();
  welcomeContainer.style.display = "none";
  startButton.style.display = "none";
  for (var i = 0; i < quizQuestions.length; i++) {
    var br = document.createElement("br");
    questionOptions.append(quizQuestions[i].question);
    questionOptions.append(br);

    for (var j = 0; j < 4; j++) {
      var button = document.createElement("button");
      var br = document.createElement("br");
      button.style.textAlign = "center";
      button.style.marginTop = "1%";
      button.style.marginBottom = "1%";
      button.setAttribute("class", "btn btn-info");
      button.setAttribute("type", "submit");
      button.setAttribute("dataValue", quizQuestions[i].answer);
      button.textContent = quizQuestions[i].choices[j];
      questionOptions.append(br);
      questionOptions.append(button);
      questionOptions.append(br);
      // button.onclick = checkAnswer;
      // startButton.hide button
    }
  }
}

function checkAnswer() {}

function startTimer() {
  countDown = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;
    if (timeLeft <= 0) {
      showScore();
    }
  }, 1000);
}

startButton.onclick = renderOptions;
