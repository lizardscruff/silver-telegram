// function declaration
function print(input) {
	console.log(input);
}

// function expression
var print = function(input) {
	console.log(input);
}

// this function checks if the number is even or not
var n = prompt("give me a number");

// function isEven(n) {
// 	if (n % 2 === 0) {
// 		return true;
// 	} 
// 	else {
// 		return false;
// 	}
// }

// this is the short version
function isEven(n){
	return n % 2 === 0;
}

if (isEven(n) === true) {
	alert("It's true!");
} else {
	alert("It's false");
}

// this function calculates the factorial
var y = Number(prompt("give me another number"));

function factorial(y) {
	var total = 0;
	if (y <= 1) {
		print(1);
		return 1;
	} 
	else {
		total += y;
		while (y > 1) {
			total *= (y - 1);
			y--;
		}
		print(total);
		return total;

	}
}

factorial(y);

//this is the short version
function factorial(num){
	//define a result variable
	var result = 1;
	calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	// return the result variable
}
// factorial(4)
// this one starts at 1 and gradually multiples the next number up in this order:
// 1 x 2 x 3 x 4
// this way eliminates the 0! = 1 problem without any special cases


// this function turns kebab-cased arguments into snake_case
var kebab = prompt("Give me a kebab-case string and I'll return it as snake_case");

function snaker(kebab) {
	// you have to use /string/g(stands for global) to make more than one 
	// instance of the string you want to replace to be replaced
	return kebab.replace(/-/g, "_");
}

alert(snaker(kebab));


