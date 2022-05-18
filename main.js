const libraryDiv = document.querySelector('.library');
const bookForm = document.querySelector('.addBookForm');
const form = document.querySelector('.bookForm');
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
  num = 0;
  libraryDiv.replaceChildren();
  library.forEach(book => {
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
    libraryDiv.appendChild(newDiv)
    book.bookNum = num;
    newDiv.setAttribute('id', num)
    num++
  })
  let allDivs = libraryDiv.querySelectorAll('div');
  addClickListener(allDivs);
};

function addBookForm() {
  if (bookTitle.value.length === 0 || bookAuthor.value.length === 0 || bookPages.value < 1) {
    return alert("Please fill in all the fields");
  }
  if (bookPages.value > 9999) {
    return alert("That's too many pages!");
  }
  addBook(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked, library.length);
  bookForm.classList.add('hideForm');
  displayBooks();
};

function openForm() {
  bookForm.classList.remove('hideForm');
};

function addClickListener(listDivs) {
  listDivs.forEach(bookDiv => {
    bookDiv.addEventListener('click', () => removeBook(event));
  })
}

function removeBook(e) {
  const confirm = window.confirm("Are you sure you want to delete this book?");
  if (confirm === false) return;
  if (e.target.id === '') {
    library.splice(e.target.parentElement.id, 1);
  } else {
    library.splice(e.target.id, 1);
  }
  displayBooks();
};

addBook('testing a longer title to see if the card still looks nice. this is a very long title', 'test', 'test', true, 'div1');
addBook('test1', 'test1', 'test1', true, 'div2');
addBook('test2', 'test2', 'test2', true, 'div3');
addBook('test3', 'test3', 'test3', true, 'div4');

bookForm.classList.add('hideForm');
displayBooks();