const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');
const formBook = document.querySelector('form');

formBook.addEventListener('submit',(e)=>{
  console.log(e);
  e.preventDefault();
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = inputRead.value;
  addBookToLibrary(title,author,pages,read);
});
let myLibrary = [];


function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(...params) {
  // do stuff here
  const book = new Book(params[0],params[1],params[2],params[3]);

  myLibrary.push(book);

  console.log(myLibrary);

}