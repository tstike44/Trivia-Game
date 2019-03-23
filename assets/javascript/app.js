
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
		timeLeft: 20,

		//function to set the countdown interval
		tickTickBoom: function () {
			game.timeLeft--;
			if (game.done == 0) {
				console.log('no time left bud')
				game.done();
			}
		}, //end of tickTickBoom fucntion

	//function that will start the game and add elements to the page with a timer counting down
	start: function () {
			timer = setInterval(game.tickTickBoom, 1000)
			$("#start").remove();
			for (i = 0; i < quizItems.length; i++) {
				$("#sub-container").append("<h3 id='question-text'>" + quizItems[i].question + "<h3>");
				//putting the answers next to the radio input
				for (j = 0; j < quizItems[i].answers.length; j++) {
					$('#sub-container').append("<input type='radio' name='question-" + i + "' value= " + quizItems[i].answers[j] + "' >" + quizItems[i].answers[j]);
				}
			}
			$("#submit").append('<button type="button" class="btn btn-success" id="submit-btn">Submit</button>');
		} //end of start function
	} //end of game object




}); // end of ready function

