class Movie {
  constructor(title) {
    this.title = title;
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
  let addMovieName = document.createElement('h5');
  addMovieName.textContent = name;
  movieName.appendChild(addMovieName);
}