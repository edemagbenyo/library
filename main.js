const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const formBook = document.querySelector("form");
const divBooks = document.querySelector(".books");
const formButton = document.querySelector("#button")

formButton.addEventListener("click", () => {
  formBook.style.display = "block"
})

formBook.style.display = "none"

formBook.addEventListener("submit", e => {
  console.log(e);
  e.preventDefault();
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;
  const read = inputRead.value;
  addBookToLibrary(title, author, pages, read);
});

let myLibrary = [
  { title: "Business laws", author: "Brian Tracy", pages: 900, read: false },
  {
    title: "Rich dad, poor dad",
    author: "Robert Kiyo.",
    pages: 239,
    read: true
  }
];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(...params) {
  // do stuff here
  const book = new Book(params[0], params[1], params[2], params[3]);

  myLibrary.push(book);
  const idBook = (myLibrary.length - 1);
  createBook(book, idBook);
}

const render = () => {
  myLibrary.forEach((book, bookId) => {
    createBook(book, bookId);
  });
};

function createBook(book, bookId) {
  const div = document.createElement("div");
  div.classList.add("card");

  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const spanPages = document.createElement("p");
  const spanRead = document.createElement("span");
  const deleteBook = document.createElement("button");
  deleteBook.classList.add('deletebutton');
  deleteBook.setAttribute("data-id", bookId);
 
  pTitle.append(book.title);
  pAuthor.append(book.author);
  spanPages.append(book.pages);
  deleteBook.innerHTML = "Delete"
  spanRead.append(book.read == "on" ? "read" : "not read");

  deleteBook.addEventListener("click", bookDelete);
  
  div.append(pTitle, pAuthor, spanPages, spanRead, deleteBook);
  divBooks.appendChild(div);
}

render();

const buttons = document.querySelectorAll(".deletebutton")
buttons.forEach(button => {
  button.addEventListener("click", bookDelete);
});

function bookDelete(event) {
  const bookId = event.target.dataset.id;
  myLibrary.splice(bookId,1);
  event.target.parentNode.remove();
}

