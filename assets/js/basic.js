document.getElementById("toggle").checked = false;

var movieBtn = document.getElementById("movie-add");

movieBtn.addEventListener('click',checkToggle)

function checkToggle(){
	if (document.getElementById("toggle").checked){
		document.getElementById("toggle").checked = false;

		movieBtn.style.transform = "rotate(0deg)";
		movieBtn.style.transitionProperty = "transform";
		movieBtn.style.transitionDuration = "1s";

		document.querySelector(".add-btn i").style.color = "dodgerblue";

		var movieName = document.getElementById("movie-name")

		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "0";


	} else {
		document.getElementById("toggle").checked = true;

		movieBtn.style.transform = "rotate(315deg)";
		movieBtn.style.transitionProperty = "transform";
		movieBtn.style.transitionDuration = "1s";
		document.querySelector(".add-btn i").style.color = "red";

		var movieName = document.getElementById("movie-name")
		
		// movieName.style.transform = "rotate(315deg)";
		movieName.style.transitionProperty = "opacity";
		movieName.style.transitionDuration = "1s";
		movieName.style.opacity = "1";
	}


}