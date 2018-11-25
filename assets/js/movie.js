class Movie {
  constructor(title) {
    this.title = title;
    this.movieList = [];
  }

  render(e) {
    e.preventDefault();
    let movieName = document.querySelector('#movie-name');
    let movieForm = document.querySelector('.movie-form');
    movieName.style.display = 'block';
    movieForm.addEventListener("click", function(e){
      e.preventDefault();
      if (e.target.classList.contains('movie-submit')) {
        let movieVal = movieName.value;
        if (movieVal) {
          addMovie(movieVal);
        }
        movieName.value = "";
        console.log(movieVal);
      }
    });
    let movieSubmit = document.querySelector('.movie-submit');
  }

}
function addMovie(name) {
  let movieName = document.querySelector('.movie-list');
  var movieItem = document.createElement("div");
  movieItem.classList.add("movie-item");
  movieItem.innerHTML = `<i class="fas fa-check-circle"></i></div>`;
  let addMovieName = document.createElement('h5');
  addMovieName.textContent = name;
  movieItem.appendChild(addMovieName);
  var fabIcon = document.createElement("i");
  fabIcon.className = "fas fa-trash-alt";
  movieItem.appendChild(fabIcon);
  movieName.appendChild(movieItem);
  console.log(movieItem)
}