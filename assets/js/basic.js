// Initializing the checkbox to false at start

document.getElementById("toggle-movie").checked = false;
document.getElementById("toggle-book").checked = false;

 // movieBtn location 

var movieBtn = document.getElementById("movie-add");
var bookBtn = document.getElementById("book-add");


// Calling the add movie transition event listener

movieBtn.addEventListener('click',checkToggle)
bookBtn.addEventListener('click',checkToggle)

// Add button transition function

function checkToggle(){

	// Checking if it is Movie or Book category

	var category = this.getAttribute("id").split("-")[0]; 



	if (document.getElementById(`toggle-${category}`).checked){

		// Uncheck the checkbox

		document.getElementById(`toggle-${category}`).checked = false;

		// Rotate back to 0deg

		document.getElementById(`${category}-add`).style.transformOrigin = "55% 50% 0";
		document.getElementById(`${category}-add`).style.transform = "rotate(0deg)";
		document.getElementById(`${category}-add`).style.transitionProperty = "transform";
		document.getElementById(`${category}-add`).style.transitionDuration = "1s";

		// Change the color back to dodgerblue

		document.querySelector(`#${category}-add i`).style.color = "dodgerblue";

		// Hide the input field

		var movieName = document.getElementById(`${category}-name`)

		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "0";


	} else {

		// check the checkbox

		document.getElementById(`toggle-${category}`).checked = true;

		// Rotate to 315 deg

		document.getElementById(`${category}-add`).style.transformOrigin = "55% 50% 0";
		document.getElementById(`${category}-add`).style.transform = "rotate(315deg)";
		document.getElementById(`${category}-add`).style.transitionProperty = "transform";
		document.getElementById(`${category}-add`).style.transitionDuration = "1s";

		// Change the color to tomato

		document.querySelector(`#${category}-add i`).style.color = "red";

		// Unhide the form input

		var movieName = document.getElementById(`${category}-name`)
		
		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "1";
	}


}