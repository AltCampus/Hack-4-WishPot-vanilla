class Book {
  constructor(title) {
    this.title = title;
  }
  render() {
    let bookName = document.querySelector('#book-name');
    let bookForm = document.querySelector('.book-form');
    bookForm.style.display = 'block';
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
  let bookItem = document.createElement('div');
  bookItem.classList.add("book-item");
  bookItem.innerHTML = `
    <div>
      <i class="fas fa-check-circle"></i>
    </div>
  `;
  let addBookName = document.createElement('h5');
  addBookName.textContent = name;
  bookItem.appendChild(addBookName);
  let fabIcon = document.createElement('i');
  fabIcon.className = "fas fa-trash-alt";
  bookItem.appendChild(fabIcon);
  bookList.appendChild(bookItem);
  let deleteBox = document.querySelectorAll('.fa-trash-alt');
  deleteBox.forEach(v => {
    v.addEventListener('click', deleteBook);
  })
}
addBook();

function deleteBook(e) {
  var removeItem = e.target.parentElement;
  return e.target.parentElement.parentElement.removeChild(removeItem);
}



