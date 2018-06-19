//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");

//check guess
// if (guess < secretNumber) {
// 	alert("Nope. You guessed too low.");
// } else if (guess > secretNumber) {
// 	alert("Nope. Too high this time!");
// } else {
// 	alert("Yes! You're right! The number was " + secretNumber + "!");
// }

//this is a built-in function to turn a string into a number
Number();

//Rusty had to use it because prompt returns a number and wanted to use ===
//I guess he has a safer to use solution:
//but it still runs even if you put like "a" in there.. hmm... strange.

if(Number(guess) === secretNumber){
	alert("YOU GOT IT RIGHT!!!");
}

else if(Number(guess) > secretNumber){
	alert("Too high. Guess again!");
}

else {
	alert("Too low. Guess again!");
}