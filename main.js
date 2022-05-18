const libraryDiv = document.querySelector('.library');
const bookForm = document.querySelector('.addBookForm');
const addBookBtn = document.querySelector('#addBook');
const submitBtn = document.querySelector('#submitBtn');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookRead = document.querySelector('#bookRead');
let library = [];

addBookBtn.addEventListener('click', () => openForm());
submitBtn.addEventListener('click', () => addBookForm());

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBook(title, author, pages, read) {
  const newBook = new book(title, author, pages, read);
  library.push(newBook);
};

function displayBooks() {
  let num = 0;
  libraryDiv.replaceChildren();
  library.forEach(book => {
    num++
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <p class="title">Title</p>
      <h6>${book.title}</h6>
      <p class="author">Author</p>
      <h6>${book.author}</h6>
      <p class="pages">Pages</p>
      <h6>${book.pages}</h6>
      <p class="read">Read</p>
      <h6>${book.read}</h6>
      `;
    newDiv.setAttribute('id', `div${num}`)
    const oldDiv = document.querySelector(`#div${num - 1}`);
    libraryDiv.insertBefore(newDiv, oldDiv)
  })
};

function addBookForm() {
  if (bookTitle.value.length === 0 || bookAuthor.value.length === 0 || bookPages.value < 1) {
    return alert("Please fill in all the fields");
  }
  addBook(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
  bookForm.classList.add('hideForm');
  displayBooks();
};

function openForm() {
  bookForm.classList.remove('hideForm');
};

addBook('testing a longer title to see if the card still looks nice. this is a very long title', 'test', 'test', true);
addBook('test1', 'test1', 'test1', true);
addBook('test2', 'test2', 'test2', true);
addBook('test3', 'test3', 'test3', true);

bookForm.classList.add('hideForm');
displayBooks();