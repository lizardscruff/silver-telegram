// with a for loop
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// using forEach
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
	console.log(color);
});


// EXERCISE
// turn this forEach loop into a for loop:
var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(number) {
	if (number % 3 === 0) {
		console.log(number);
	}
});

// answer:
var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}