
function askQuestions() {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;
console.log(fullName);

var age = prompt('How old are you bruh?');
age = parseInt(age);

if (age >= 18) {

	console.log('User is old AF.');

} else if (age >= 13) {

	console.log('User is a teenager.');

} else {

	console.log('users a little kiddy');
}

if (firstName.toLowerCase() === 'General' && lastName.toLowerCase() != 'Assembly') {

	console.log('Greetings General! Lovely to meet you')

}

var faveColour = prompt('What is your favourite colour').toLowerCase();

if (faveColour == 'red' ||
	faveColour == 'blue'||
	faveColour == 'green' ||
	faveColour == 'yellow') {

	$('h1').css('color', faveColour);

}

}


/* When the page has loaded */
$(function() {

	// This is to make it so when you click on the image it asks the questions
	$('img').on('click', askQuestions);

	// Hide all the sections
	$('h3').next().hide();

	// when the user clicks an h3
	$('h3').on('click', function() {

			// Toggle the next element
			$(this).next().slideToggle(1000, 'swing');

	});


});