class Book {
  constructor(title) {
    this.title = title;
  }
  addBook() {
    let addBookName = document.createElement('h4');
    addBookName.textContent = this.title;
  }
}