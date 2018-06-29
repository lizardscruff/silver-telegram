var todos = ["buy new turtle"];
// this fixes the bug in chrome where 
// the html doesn't show until 
// alert/prompt/confirm finish
window.setTimeout(function() {
	//put all of your JS code from the lecture here
	var choice = prompt("What would you like to do?");

while(choice !== "quit") {
	//handle input
	if (choice === "list") {
		console.log(todos);
	} else if (choice === "new") {
		//ask for new todo
		var newToDo = prompt("What todo would you like to add?");
		//add new todo to array
		todos.push(newToDo);
	}

	//ask again for new input
	var choice = prompt("What would you like to do?");
}

console.log("Ok, you quit the app! See ya!");
}, 500);
