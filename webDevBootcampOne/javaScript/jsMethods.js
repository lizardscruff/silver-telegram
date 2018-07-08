//JS Methods

var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x,y){
		return x + y;
	}
}

//To call this Method you would do this:
obj.add(10,5);
//Looks like and is the same as:
console.log();


//Example of how this would look:
var dogSpace = {};
dogSpace.speak = function() {
	return "WOOF!";
}

var catSpace = {};
catSpace.speak = function() {
	return "MEOW!";
}

dogSpace.speak();
catSpace.speak();

//Here's a more real world example of a Method call:
comment.delete();