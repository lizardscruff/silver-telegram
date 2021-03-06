// Zack's Solution
var moviesObj = [
	movieName = {
		movName: '"Beethoven"',
		rating: "2 stars",
		hasWatched: true
	},
	movieName = {
		movName: '"Frozen"',
		rating: "4.5 stars",
		hasWatched: false
	},
	movieName = {
		movName: '"Cheesecake"',
		rating: ".25 stars",
		hasWatched: false
	},
	movieName = {
		movName: '"Blade Runner"',
		rating: "5 stars",
		hasWatched: true
	}
];

for (var i = 0; i < moviesObj.length; i++) {
	if (moviesObj[i].hasWatched === true) {
		console.log("You have watched " + moviesObj[i].movName + " - " + moviesObj[i].rating);
	} else {
		console.log ("You have not watched " + moviesObj[i].movName + " - " + moviesObj[i].rating);		
	}

}

// Colt's Solution
var movies = [
	{
		title: "In Bruges",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "Mad Max Fury Road",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Les Miserables",
		hasWatched: false,
		rating: 3.5
	},
];



movies.forEach(function(movie) {
	console.log(buildString(movie));
});

function buildString(movie){
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen "
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}
