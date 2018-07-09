//Manipulating Text and Content

// The HTML
// <p>
// This is an <strong>awesome</strong> paragraph
// </p>

//Select the <p> tag:
var tag = document.querySelector("p");


// innerHTML
tag.innerHTML
//"This is an <strong>awesome</strong> paragraph"


// textContent
//retrives text only and removes <strong>
tag.textContent 
//"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";


//real example with chaining:
document.querySelector("h1").textContent = "END OF THIS LESSON!";
