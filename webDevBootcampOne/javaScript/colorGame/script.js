// JavaScript design patterns are important as you mature as a developer
// the most simple or common pattern is called the module design pattern
// what that means is that we can add a bunch of properties into objects

// An example would be to not have variables floating around everywhere 
// and have everything inside of an object
// We also would not have functions on their own in the window object like here
// rather, we add them to our own object

// example:
// --------------------------------------------------------------------------
// var game = {}

// game.init = function(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// 	//but we would do this for every single function and property variable
// }

// game.init();
// ---------------------------------------------------------------------------

var numSquares = 6;
var colors = [];
// var colors = generateRandomColors(numSquares);
var pickedColor;
// var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');

			//ternary version
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			//ternary version of this is above		
			// if (this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }

			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//no longer necessary
		// //add initial colors to squares
		// squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}
	

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelBlue";
}

// this was refactored

// var easyBtn = document.querySelector('#easyBtn');
// var hardBtn = document.querySelector('#hardBtn');

// easyBtn.addEventListener('click', function(){
// 	hardBtn.classList.remove('selected');
// 	easyBtn.classList.add('selected');
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = 'none';
// 		}
// 	}
// });

// hardBtn.addEventListener('click', function(){
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i]
// 		squares[i].style.display = 'block';
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();

	//refactored with reset function
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";

	// messageDisplay.textContent = "";
	// //change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelBlue";
});

//this is now done in the init function
// colorDisplay.textContent = pickedColor;

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor((Math.random() * colors.length));
		return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		//get random color and push into array
	}
	//return that array
	return arr;	
}

function randomColor(){
	//pick a 'red' from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a 'green' from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a 'blue' from 0-255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
