// Select a random number from 25-100 src: http://www.learningjquery.com/2006/09/introducing-document-ready
// 	and https://www.codecademy.com/en/forum_questions/5198adbdbbeddf9726000700

$(document).ready(function() {
	var numb = Math.floor(Math.random()* 100 + 25);
	

// Displays random number 
 $("#ranNum").text(numb);





});