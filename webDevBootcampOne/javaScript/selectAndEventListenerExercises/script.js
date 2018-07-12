// Zack's Solution
var button = document.querySelector('button');
// var body = document.querySelector('body');
// var isOrange = false;

// button.addEventListener("click", itsAlive);

// function itsAlive () {
	
// 	if (isOrange === false) {
// 		body.style.background = 'orange';
// 		isOrange = true;
// 	} else {
// 		body.style.background = 'white';
// 		isOrange = false;
// 	}
// }



//Colt's Solution repurposed
// var isPurple = false;

// button.addEventListener('click', function() {
// 	if (isPurple) {
// 		document.body.style.background = 'white';
// 	} else {
// 		document.body.style.background = 'purple';
// 	}
// 	isPurple = !isPurple;
// });



// look at the html
button.addEventListener('click', function() {
	document.body.classList.toggle("purple");
});
