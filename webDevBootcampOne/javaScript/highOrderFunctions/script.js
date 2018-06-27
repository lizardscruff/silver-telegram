// Higher Order Functions

function sing() {
	console.log("twinkle twinkle...");
	console.log("how i wonder...");
}


// setInterval(someFunc, howOftenToRunInMilliseconds);
setInterval(sing, 1000);

// stops setInverval
// you have to put whatever number pops out after you run setInterval
clearInterval();


// here's an example using an anonymous function
setInterval(function(){
	console.log("I am an anonymous function!");
	console.log("THIS IS AWESOME!");
}, 2000);