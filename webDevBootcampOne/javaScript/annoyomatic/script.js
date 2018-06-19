// VERSION 1 

// var yes, yeah;
// yes = "yes";
// yeah = "yeah";

// var answer;
// answer = prompt("Are we there yet?");

// while (answer !== yes && answer != yeah) {
// 	answer = prompt("Are we there yet?");
// }

// alert("yay! we made it!");

// VERSION 2

var yes, yeah;
yes = "yes";
yeah = "yeah";

var answer;
answer = prompt("Are we there yet?");

while (answer.indexOf(yes) === -1
	&& answer.indexOf(yeah) === -1) {
	answer = prompt("Are we there yet?");
}

alert("yay! we made it!");

 