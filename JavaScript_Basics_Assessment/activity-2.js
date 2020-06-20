//Grab a user input using a prompt() and store it in a variable.
const userInput = prompt('Enter something');

//Add a conditional statement where if the variable's length is greater than 4, we alert the user that their name is greater than four characters.
if (userInput.length > 4) { 
	alert('Input greater than four characters');
}

//Otherwise, alert that their name is less than four characters.
else {
	alert('Input less than four characters');
}
