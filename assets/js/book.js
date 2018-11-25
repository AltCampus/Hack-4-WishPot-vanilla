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
  var bookItem = document.createElement("div");
  bookItem.classList.add("movie-item");
  bookItem.innerHTML = `<i class="fas fa-check-circle"></i></div>`;
  let addBookName = document.createElement('h5');
  addBookName.textContent = name;
  bookItem.appendChild(addBookName);
  var fabIcon = document.createElement("i");
  fabIcon.className = "fas fa-trash-alt";
  bookItem.appendChild(fabIcon);
  bookList.appendChild(bookItem);
}