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
var questions = [
    { q: "", a: "" },
    { q: ".", a: "" },
    { q: ".", a: "" },
    { q: ".", a: "" },
    { q: "", a: "" }
  ];

  var showGame = null;
  var rightAnswer;
//start game
function start() {
//click function
$('#start').click(function() {  
    if (!showGame) {
        showGame = setInterval(showGame, 1000)
        console.log('yeet')
      }
  })
  
}


//timer
function timer(){

}

//result screen
function result() {

}
//the time it takes the answer slide to move on
function slideInterval() {

}