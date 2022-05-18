const libraryDiv = document.querySelector('.library');
let library = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  if (title.length === 0 || author.length === 0 || pages === 0) {
    return alert('Please fill in all the fields');
  }
  const newBook = new book(title, author, pages, read);
  library.push(newBook);
}

function displayBooks() {
  library.forEach(book => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <p>Title</p>
      <h6>${book.title}</h6>
      <p>Authorl</p>
      <h6>${book.author}</h6>
      <p>Pages</p>
      <h6>${book.pages}</h6>
      <p>Read</p>
      <h6>${book.read}</h6>
      `;
    libraryDiv.appendChild(newDiv);
  })
}

addBook('test', 'test', 'test', true);
addBook('test1', 'test1', 'test1', true);
addBook('test2', 'test2', 'test2', true);
addBook('test3', 'test3', 'test3', true);

displayBooks();