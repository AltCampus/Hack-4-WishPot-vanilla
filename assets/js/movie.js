class Movie {
  constructor(title) {
    this.title = title;
  }
  addMovie() {
    let addMovieName = document.createElement('h4');
    addMovieName.textContent = this.title;
  }
}

var movie1 = new Movie('Dark Knight');
console.log(movie1);