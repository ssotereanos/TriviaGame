$( document ).ready(function() {


$("#quiz").hide();


// This initializes the button that starts the game 
    $(".startGame").on("click", function (){
// when the start button clicked, the div with the questions that was hidden is shown
		$('#quiz').show();
		console.log('hello');

		$(this).hide();
	});

// the run function sets the spacing of the decrement function's time interval so that
	// it can be equal to a second per number decrement.
    function run(){
        counter = setInterval(decrement, 1000);
    }
// The stop function
    function stop(){
// Clears our "counter" interval. The interval name is passed to the clearInterval function.
     clearInterval(counter);
    }

    // Execute the run function.
    run();

var number = 30;
$('#timeleft').on('click',run);
//This function enables the number of seconds to decrease with time, and to display
	// the result of that decrease until time is up. 
    function decrement(){
        // Decrease number by one.
        number--;
        // Show the number in the #timeLeft div.
        $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
        // When the number is equal to zero, 
        if (number === 0){
        // run the stop function.
        stop();
        // Alert the user that time is up. Update the innerHTML of the message
       // div to say 'Game Over!'
        // alert('Time Up!')
        alert("times up! How did you do?");
        }

function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;


    if(question1 == "Cascading Style Sheets") {
    correct ++;
     }

    if(question2 == "Hypertext Markup Langage"){
      correct ++
      }   

     if(question3 == "Javascript Object Notation"){
      correct ++}

var pictures = ["assets/images/win.gif", "assets/images/meh.jpeg", "assets/images/lose.gif"];
var messages = ["Great job!", "That's just okay", "you really need to do better"];
var score;

  if (correct == 0) {
    score = 2;
  }

  if (correct > 0 && correct < 3) {
    score = 1;
  }

  if (correct == 3) {
    score = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
  }
  
}

});

  