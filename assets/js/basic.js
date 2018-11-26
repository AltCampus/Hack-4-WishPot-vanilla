// Initializing the checkbox to false at start

document.getElementById("toggle").checked = false;

 // movieBtn location

var movieBtn = document.getElementById("movie-add");

// Calling the add movie transition event listener

movieBtn.addEventListener('click',checkToggle)

// Add button transition function

function checkToggle(){
	if (document.getElementById("toggle").checked){

		// Uncheck the checkbox

		document.getElementById("toggle").checked = false;

		// Rotate back to 0deg

		movieBtn.style.transformOrigin = "55% 50% 0";
		movieBtn.style.transform = "rotate(0deg)";
		movieBtn.style.transitionProperty = "transform";
		movieBtn.style.transitionDuration = "1s";

		// Change the color back to dodgerblue

		document.querySelector(".add-btn i").style.color = "dodgerblue";

		// Hide the input field

		var movieName = document.getElementById("movie-name")

		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "0";


	} else {

		// check the checkbox

		document.getElementById("toggle").checked = true;

		// Rotate to 315 deg

		movieBtn.style.transformOrigin = "55% 50% 0";
		movieBtn.style.transform = "rotate(315deg)";
		movieBtn.style.transitionProperty = "transform";
		movieBtn.style.transitionDuration = "1s";

		// Change the color to tomato

		document.querySelector(".add-btn i").style.color = "red";

		// Unhide the form input

		var movieName = document.getElementById("movie-name")
		
		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "1";
	}


}