var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = 
  {
    name: "Mahendra",
    score: 2,
  }

// array of objects
var questions = [{
  question: "Where am I from? ",
  answer: "Noida"
}, {
  question: "My favourite Color? ",
  answer: "Purple"
},
{
  question: "Which Bike do I have? ",
  answer: "Avenger"
}];

var username = readlineSync.question("What's your name? ");

function welcome() {   
  console.log("Welcome "+ username + " to DO YOU KNOW Manjeet Quiz?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
        
  } else {
    console.log("wrong!");
       
  }
  
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congratulations! You SCORED: ", score);
  
  if (score>highScores.score){
    console.log(username,"Your Score is Greater than  ",highScores.name)
  }
    else if(score===highScores.score){
    console.log(username,"Your Score is Equal to ",highScores.name)
    }
  else{
    console.log(username,"Your Score is Less  Than ",highScores.name)
  }
}
  

welcome();
game();
showScores();
