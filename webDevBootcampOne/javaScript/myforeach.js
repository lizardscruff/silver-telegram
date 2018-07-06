//building your own forEach loop

var nums = [45, 65, 32];

myForEach(nums, function(num) {
	console.log(num);
});

var colors = ["red", "orange", "yellow"];

function myForEach(arr, func) {
	//loop through array
	for (var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}

myForEach(colors, alert);

Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

var friends = ["charlie", "dave", "maddy", "caitlin"];

friends.myForEach(alert);
friends.myForEach(function(name) {
	console.log("I love " + name);
});