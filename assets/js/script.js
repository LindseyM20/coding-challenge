var mainDiv = document.getElementById("stuffInside");
var startQuiz = document.getElementById("start");
var quizEl = document.createElement("div");
var timeEl = document.createElement("p");
var answerList = document.createElement("ul");
var saveScore = document.createElement("a");
var highScore = document.createElement("h4");
// var scoreDisplay = document.getElementById("score");

var secondsLeft = 100;
var questionIndex = 0
var score = 0;

// Array containing objects for Questions & Multiple Choice data
var questions = [
  {
    Ask: "What does HTML stand for?",
    Correct: "HyperText Markup Language",
    Options: ["Hotdogs, Tacos, Mini-donuts, and Lemonade", "HyperText Markup Language", "How To Make Lefse", "Had Too Many Lattes!"]
  },
  {
    Ask: "What is a function in JavaScript?",
    Correct: "All of the above",
    Options: ["An Object", "A block of code designed to perform a particular task", "Something that allows a section of code to be called many times without repetition", "All of the above"]
  },
  {
    Ask: "Which of the following is NOT an operator?",
    Correct: "\\",
    Options: ["!==", "*", "\\", "-="]
  },
  {
    Ask: "If the following was an array, which would be index 2?",
    Correct: "C",
    Options: ["A", "B", "C", "D"]
  },
  {
    Ask: "What is the first letter of the alphabet?",
    Correct: "A",
    Options: ["A", "B", "C", "D"]
  }
]

document.querySelector(".questions").appendChild(quizEl).setAttribute("id", "quizEl-div");
mainDiv.appendChild(answerList);

// Listen for "Start Quiz" button to be clicked
startQuiz.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello");
  timer();
  getQuestion();
});

// Timer
function timer() {
  document.getElementById("intro").setAttribute("style", "display: none");
  var timerInterval = setInterval(function () {

    mainDiv.appendChild(timeEl);
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft === 0 || questionIndex === questions.length) {
      clearInterval(timerInterval);
      gameOver();
    }
    console.log(secondsLeft);
  }, 1000);

};

// The questioning!!!
function getQuestion() {
  quizEl.textContent = "";
  answerList.textContent = "";
  var currentQuestion = questions[questionIndex];
  quizEl.textContent = currentQuestion.Ask;
  // scoreDisplay.textContent = score;


  for (var i = 0; i < currentQuestion.Options.length; i++) {
    var optionBtn = document.createElement("li");
    optionBtn.setAttribute("value", currentQuestion.Options[i]);
    optionBtn.textContent = currentQuestion.Options[i];
    optionBtn.onclick = checkAnswer;
    answerList.appendChild(optionBtn);
  }
}

function checkAnswer() {
  if(this.innerHTML == questions[questionIndex].Correct) {
    score++;
    console.log("Score is " + score);
    console.log("questionIndex is " + questionIndex);
    console.log("correct!");
    //inform user answer is correct
  }
  else {
    secondsLeft -= 10;
    console.log("questionIndex is " + questionIndex);
    console.log("incorrect!");
    //inform user answer is wrong
  }
  questionIndex ++;
  if(questionIndex === questions.length) {
      gameOver();
  }
  else {
      getQuestion()
  }
};


// Game Over/save score
function gameOver() {
  timeEl.setAttribute("style", "display: none");
  quizEl.textContent = "Game Over";
  answerList.setAttribute("style", "display: none");
  saveScore.setAttribute("href", "./saveScore.html");
  highScore.setAttribute("href", "./saveScore.html");
  mainDiv.appendChild(highScore);
  mainDiv.appendChild(saveScore);
  highScore.textContent = "Your score is " + score + "!"
  saveScore.textContent = "Save your score"
}
