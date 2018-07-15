//count how many events there are on:
//https://developer.mozilla.org/en-US/docs/Web/Events

//Zack's Solution
var events = document.querySelectorAll('code a');

for (var i = 0; i < events.length; i++) {
	console.log(events[i]);
	console.log(i);
}

//Colt's Solution
//(when the page used to be all events in tables only)
document.querySelectorAll('tr').length - document.querySelectorAll('table').length