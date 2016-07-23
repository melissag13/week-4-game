// Select a random number from 25-100 src: http://www.learningjquery.com/2006/09/introducing-document-ready
// 	and https://www.codecademy.com/en/forum_questions/5198adbdbbeddf9726000700

$(document).ready(function() {
	var numb = Math.floor(Math.random()* 100 + 25);
	

// Displays random number to guess
 $("#ranNum").html(numb);

// Random number for each crystal
// Keeping score & displaying it
var yourScore= 0;
var wins= 0;
var losses= 0;

var gem1= Math.floor(Math.random()* 15 + 1)
var gem2= Math.floor(Math.random()* 15 + 1)
var gem3= Math.floor(Math.random()* 15 + 1)
var gem4= Math.floor(Math.random()* 15 + 1)

$("#numWins").html(wins);
$("#numLoss").html(losses);

function reset(){
	numb= Math.floor(Math.random()* 100 + 25);
	$("#ranNum").html(numb)
	gem1= Math.floor(Math.random()* 15 + 1);
	gem2= Math.floor(Math.random()* 15 + 1);
	gem3= Math.floor(Math.random()* 15 + 1);
	gem4= Math.floor(Math.random()* 15 + 1);
	yourScore= 0;
	$("#score").html(yourScore);
}

// Adding to wins and losses
function won(){
	wins++;
	$("#numWins").html(wins);
	reset();
}

function lost(){
	losses++;
	$("#numLoss").html(losses);
	reset();
}

// Clicking on the crystals to get random values
$("#blue").on("click", function(){
	yourScore = yourScore + gem1;
	$("#score").html(yourScore);
	if (yourScore == numb){
		won();
	}
	else if (yourScore > numb){
		lost();
	}
});

$("#green").on("click", function(){
	yourScore = yourScore + gem2;
	$("#score").html(yourScore);
	if (yourScore == numb){
		won();
	}
	else if (yourScore > numb){
		lost();
	}
});

$("#multi").on("click", function(){
	yourScore = yourScore + gem3;
	$("#score").html(yourScore);
	if (yourScore == numb){
		won();
	}
	else if (yourScore > numb){
		lost();
	}
});

$("#red").on("click", function(){
	yourScore = yourScore + gem4;
	$("#score").html(yourScore);
	if (yourScore == numb){
		won();
	}
	else if (yourScore > numb){
		lost();
	}
});


});