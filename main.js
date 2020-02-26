const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const formBook = document.querySelector('form');
const divBooks = document.querySelector('.books');
const formButton = document.querySelector('#button');

formButton.addEventListener('click', () => {
  formBook.style.display = 'block';
  formButton.style.display = 'none';
});

formBook.style.display = 'none';

//  Initial library
const myLibrary = [
  {
    title: 'Business laws', author: 'Brian Tracy', pages: 900, read: false,
  },
  {
    title: 'Rich dad, poor dad',
    author: 'Robert Kiyo.',
    pages: 239,
    read: false,
  },
];

function Book(title, author, pages, read = false) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function bookDelete(event) {
  const { id } = event.target.parentNode.dataset;
  myLibrary.splice(id, 1);
  event.target.parentNode.remove();
}

function createBook(book, bookId) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.classList.add('col-md-6');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  div.setAttribute('data-id', bookId);

  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const spanPages = document.createElement('p');
  const deleteBook = document.createElement('button');
  const checkboxStatus = document.createElement('input');

  const labelStatus = document.createElement('label');

  labelStatus.appendChild(document.createTextNode('Read Status'));

  //  Setting classes and data-attr
  deleteBook.classList.add('deletebutton');
  checkboxStatus.classList.add('readstatus');

  pTitle.append(book.title);
  pAuthor.append(book.author);
  spanPages.append(book.pages);
  deleteBook.innerHTML = 'Delete';

  checkboxStatus.type = 'checkbox';
  checkboxStatus.checked = book.read;

  deleteBook.addEventListener('click', bookDelete);

  cardBody.append(
    pTitle,
    pAuthor,
    spanPages,
    labelStatus,
    checkboxStatus,
    deleteBook,
  );
  div.append(cardBody);
  divBooks.appendChild(div);
}

function addBookToLibrary(...params) {
  // do stuff here
  const book = new Book(params[0], params[1], params[2]);

  myLibrary.push(book);
  const idBook = myLibrary.length - 1;
  createBook(book, idBook);
}

const render = () => {
  myLibrary.forEach((book, bookId) => {
    createBook(book, bookId);
  });
};

render();

function changeBookReadStatus(event) {
  const readStatus = event.target.checked;
  const { id } = event.target.parentNode.dataset;
  const book = myLibrary[id];
  book.read = readStatus;
}

formBook.addEventListener('submit', e => {
  e.preventDefault();
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  addBookToLibrary(title, author, pages);
  //  Reset text input

  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
});

const buttons = document.querySelectorAll('.deletebutton');
buttons.forEach(button => {
  button.addEventListener('click', bookDelete);
});

//  Get all checkboxes
const checkboxes = document.querySelectorAll('.readstatus');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', changeBookReadStatus);
});
