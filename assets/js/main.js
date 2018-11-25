let movie1 = new Movie("The Dark Knight");
let book1 = new Book("Three mistakes of my life");
document.body.onload = function() {
  let addMovie = document.querySelector('#movie-add');
  let addBook = document.querySelector('#book-add');
  addMovie.addEventListener('click', movie1.render);
  addBook.addEventListener('click', book1.render);
}