const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');
const formBook = document.querySelector('form');
const divBooks = document.querySelector('.books');

formBook.addEventListener('submit',(e)=>{
  console.log(e);
  e.preventDefault();
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = inputRead.value;
  addBookToLibrary(title,author,pages,read);
});
let myLibrary = [
  {title:'Business laws', author:'Brian Tracy', pages:900, read:false},
  {title:'Rich dad, poor dad', author:'Robert Kiyo.', pages:239, read:true}
];


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
  createBook(book)

}

const render = ()=>{
  myLibrary.forEach(book=>{
    createBook(book)
    // console.log("each",book)
  }) 
}

function createBook(book){
  const div = document.createElement('div');
  div.classList.add('card')

  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const spanPages = document.createElement('span');
  const spanRead = document.createElement('span');

  pTitle.append(book.title)
  pAuthor.append(book.author)
  spanPages.append(book.pages)
  spanRead.append(book.read=='on'?"read":"not read")

  div.append(pTitle, pAuthor, spanPages,spanRead )
  divBooks.appendChild(div)
}

render()