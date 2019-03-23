//need questions
//need answers
//reset function (start over)
//start function
//timer function
//change screens interval function
//need a time element (maybe function)
//start screen with start button (click to start the game)
//next screen displays the time remaining, question, possible answers
//result screen shows the time that was remaining when the answer was clicked, whether or not they got the question right or not, the correct asnwer, and a gif
//questions don't need to randomize 

/*
var game = {
  quizItems: [{
      question: "Question 1?",
      options: ["1", "2", "3", "4"],
      answer: "1"
  }, {
      question: "Question 2?",
      options: ["1", "2", "3", "4"],
      answer: "2"
  }, {
      question: "Question 3?",
      options: ["1", "2", "3", "4"],
      answer: "3"
  }, {
      question: "Question 4?",
      options: ["1", "2", "3", "4"],
      answer: "4"
  }]
}
   might come back to this later       */
  var correct = true;
  var rightAnswer;
  var start = false;
//functions will run when the page is loaded
$(document).ready(function(){

//start game
$('#start').click(function(){
  start = true;
  timeLeft();
  console.log('yeehaw')
  
});
//compare the answers chosen to the correct answer
$('#group1').click(function(){
  var userGuess ;
  //what is the answer
  //if user guessed input 1 then it should be compared to answer
  if (userGuess === $('input'))
  {   //user click should be compared to the right answer
      
  }
  
  
});

//timer
function timeLeft(){

    if (start === true) {
      setTimeout = (function() {
        clockTicking()
      }, 60000); //end of timeout function
    }
console.log(setTimeout)
    
  }
  timeLeft();


function clockTicking() {
  $('#time-left').append("You have " + setTimeout + "seconds left");
  console.log('you have 60 seconds left');
}

//click function
$('#submit').click(function() {  
  
}) //end of click function



//when answer is clicked..cpu compares it to the right answer and adds to the result
function result() {
  $('input').click(function() {  
  
  })
}


//the time it takes the answer slide to move on
function slideInterval() {

}


}) // end of ready function

