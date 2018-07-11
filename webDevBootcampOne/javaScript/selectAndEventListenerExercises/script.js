
var button = document.querySelector('button');
var body = document.querySelector('body');
var isOrange = false;

button.addEventListener("click", itsAlive);

function itsAlive () {
	
	if (isOrange === false) {
		body.style.background = 'orange';
		isOrange = true;
	} else {
		body.style.background = 'white';
	}

}
