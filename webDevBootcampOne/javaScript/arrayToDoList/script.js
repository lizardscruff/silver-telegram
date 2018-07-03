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
		listTodos();
	} else if (choice === "new") {
		addTodo();
	} else if (choice === "delete" ) {
		deleteTodo();
	}
	//ask again for new input
	var choice = prompt("What would you like to do?");
}

console.log("Ok, you quit the app! See ya!");
}, 500);

function listTodos() {
	console.log("**********");
	//within the function the todo is the item in the array
	//index keeps the index number in it
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function addTodo() {
	//ask for new todo
	var newToDo = prompt("What todo would you like to add?");
	//add new todo to array
	todos.push(newToDo);
	console.log("Added Todo");
}

function deleteTodo() {
	//ask for index of todo to be deleted
	var index = prompt("Enter the index of the todo that you would like to delete.")
	//delete that todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");
}