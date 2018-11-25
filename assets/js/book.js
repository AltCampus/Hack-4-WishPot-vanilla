class Book {
  constructor(title) {
    this.title = title;
  }
  render() {
    let bookName = document.querySelector('#book-name');
    bookName.style.display = 'block';
    let bookForm = document.querySelector('.book-form');
    bookForm.addEventListener("click", function(e) {
      e.preventDefault();
      if (e.target.classList.contains('book-submit')) {
        let bookVal = bookName.value;
        if (bookVal) {
          addBook(bookVal);
        }
        bookName.value = "";
      }
    })
  }
}

function addBook(name) {
  let bookList = document.querySelector('.book-list');
  let addBookName = document.createElement('h5');
  addBookName.textContent = name;
  bookList.appendChild(addBookName);
}