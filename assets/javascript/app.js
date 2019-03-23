
//reset function (start over) *not working*
//start function *not working*
//timer function *not working*
//questions don't need to randomize 
//functions will run when the page is loaded
$(document).ready(function () {

	$("#start").click(function () {
		//referencing our start function
		game.start();
	}) //end of start click function

	$("#submit").click(function () {
		game.done();
	}) //end of submit button function

	var quizItems = [{
		question: "How many questions are in this quiz?",
		answers: ["1 ", "12 ", "4 ", "7 "],
		correctAnswer: "4"
	}, {
		question: "Did you actually just count all the questions?",
		answers: ["yes ", "no ", "idk ", "maybe "],
		correctAnswer: "idk"
	}, {
		question: "How many cats does Trevor have?",
		answers: ["how would I know? ", "22 ", "4 ", "0 "],
		correctAnswer: "how would I know?"
	}, {
		question: "How much wood could a wood chuck, chuck if a wood chuck could chuck wood.",
		answers: ["22 lbs ", "2 lbs ", "8 lbs ", "enough to party "],
		correctAnswer: "enough to party"
	}]; //end of quizItems 

	//make a game object with functions nested inside

	var game = {
		correct: 0,
		incorrect: 0,
		unsanswered: 0,
		timeLeft: 20,

		//function to set the countdown interval
		tickTickBoom: function () {
			game.timeLeft--;
			//referencing the counter id we made in start function (setInterval)
			$("#counter").html(game.timeLeft);
			//when the timer runs out run game.done function
			if (game.timeLeft == 0) {
				game.done();
			}
		}, //end of tickTickBoom function

		//function that will start the game and add elements to the page with a timer counting down
		start: function () {
			timer = setInterval(game.tickTickBoom, 1000);
			//add timer to the page
			$("#timer-here").append($('<h2 id="result-time"> Time Reamining: <span id="counter"> 20 </span> Seconds</h2>'));
			//removing start button after it is pressed
			//this way there are no parameters needed for the interval function to work properly on press
			$("#start").remove();
			//loops through the obect and retrieves the questions and displays them on the page 1 after the other
			for (i = 0; i < quizItems.length; i++) {
				$("#sub-container").append("<h3 id='question-text'>" + quizItems[i].question + "<h3>");
				//used nested loop to create the answers after the questions
				//creating the radio input and putting the answers next to the them
				for (j = 0; j < quizItems[i].answers.length; j++) {
					$('#sub-container').append("<input type='radio' name='question-" + i + "' value= " + quizItems[i].answers[j] + "' >" + quizItems[i].answers[j]);
				}
			}
			//created submit button after the start button is clicked
			$("#submit").append('<button type="button" class="btn btn-success" id="submit-btn">Submit</button>');
		}, //end of start function

		//game done function..allows us to display results screen 
		done: function () {
			//stops timer
			clearInterval(timer);
			//remove the qestions & answersfrom the page
			$("#sub-container").remove();
			$("#submit").remove();
			//checking to see if the correct answer was selected

			//***********couldn't find a shorter way to do this********** *///
			$.each($('#input[name="question-1"]:checked' ), function() {
				if ($(this).val() == questions[0].correctAnswer) 
				{
					game.correct++;
				} else if ($(this).val() !== questions[0].correctAnswer) {
					game.incorrect++;
				} else {
					game.unsanswered++;
				} 
			});
			$.each($('#input[name="question-1"]:checked' ), function() {
				if ($(this).val() == questions[1].correctAnswer) 
				{
					game.correct++;
				} else if ($(this).val() !== questions[1].correctAnswer) {
					game.incorrect++;
				} else {
					game.unsanswered++;
				} 
			});
			$.each($('#input[name="question-1"]:checked' ), function() {
				if ($(this).val() == questions[2].correctAnswer) 
				{
					game.correct++;
				} else if ($(this).val() !== questions[2].correctAnswer) {
					game.incorrect++;
				} else {
					game.unsanswered++;
				} 
			});
			$.each($('#input[name="question-1"]:checked' ), function() {
				if ($(this).val() == questions[3].correctAnswer) 
				{
					game.correct++;
				} else if ($(this).val() !== questions[3].correctAnswer) {
					game.incorrect++;
				} else {
					game.unsanswered++;
				} 
			});
			//displaying text based on whether or not there was time left 
			if (game.timeLeft == 0) {
				$("#result-time").html("Ah Man! You ran out of time!")
			} else {
				$("#result-time").html("You finished with " + game.timeLeft + " seconds left!")
			}

			//need to compare inputs to the correct answer and generate a score 
			//correct
			//incorrect
			//unanswered
			game.results();
		}, //end of done function

		results: function () {
			$("#results-text").append("<h3 id=correct>You got: " + this.correct + " correct! :D</h3> <br>");
			$("#results-text").append("<h3 id=correct>You got: " + this.incorrect + " correct! :(</h3> <br>");
			$("#results-text").append("<h3 id=correct>Left Unanswered: " + this.unsanswered + " (O_O) </h3> <br>");

		} //end of results function

	} //end of game object

}); // end of ready function

