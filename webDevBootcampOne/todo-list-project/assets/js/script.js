// Why Use On()?

// In most cases, click() and on('click') will both get the job done.
// HOWEVER, there is one key difference:

// * click() only adds listeners for existing elements
// * on() will add listeners for all potential future elements

//the code below this was rewritten to use on()
//the second argument is 'li' so that it will always listen
//to the lis and any new lis added
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

// // check off specific todos by clicking
// $('li').click(function(){
// //fast way set a css class and toggle it
// 	$(this).toggleClass('completed');

//slow way of doing it
	// //if li is gray
	// if($(this).css('color') === 'rgb(128, 128, 128)'){
	// 	//turn it black
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// }
	// //else
	// else {
	// 	//turn it gray
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'line-through'
	// 	});
	// }
// });


//the code below this was rewritten with on()
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// //Click on X to delete Todo
// $('span').click(function(event){
// 	//easy way to remove a larger item with jQuery
// 	// $(this).parent().remove();
// 	//fancier way to remove with jQuery animation
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	//this is a jQuery method that will stop an event from bubbling up.
// 	event.stopPropagation();
// });

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clears out the text after you push enter(#13)
		$(this).val('');
		//create a new li and add to ul
		$('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + '</li>');
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


