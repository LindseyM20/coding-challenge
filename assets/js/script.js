// Set the body to a variable
var body = document.body;

var startQuiz = document.getElementById("start");
var quizEl = document.createElement("div")
var timeEl = document.createElement("p");
// var mainEl = document.getElementById("main");
var secondsLeft = 100;
var score;

// Objects with Questions & Multiple Choice data
var questions = {
  q1: {
    Ask: "What does HTML stand for?",
    Correct: "HyperText Markup Language",
    Options: ["Hotdogs, Tacos, Mini-donuts, and Lemonade", "HyperText Markup Language", "How To Make Lefse", "Had Too Many Lattes!"]
  },
  q2: {
    Ask: "What is a function in JavaScript?",
    Correct: "All of the above",
    Options: ["An Object", "A block of code designed to perform a particular task", "Something that allows a section of code to be called many times without repetition", "All of the above"]
  },
  q3: {
    Ask: "Which of the following is NOT an operator?",
    Correct:"\\",
    Options: ["!==", "*", "\\", "-="]
  },
  q4:{
    Ask: "",
    Correct: "",
    Options: []
  },
  q5: {
    Ask: "",
    Correct: "",
    Options: []
  }
}



// Listen for "Start Quiz" button to be clicked
startQuiz.addEventListener("click", function(event) {
    event.preventDefault();
    startTime();
    beginQuestions();
  });


function startTime() {
  var timerInterval = setInterval(function() {
    
    body.appendChild(timeEl);
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
    console.log(secondsLeft);
  }, 1000);
 
}


function beginQuestions() {
  document.getElementById("intro").setAttribute("style", "display: none");

  for (var i = 0; i < questions.length; i++) {

  }
}



function gameOver() {
  timeEl.textContent = "Game Over";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

