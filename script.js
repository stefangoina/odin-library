const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

// grabbing inputs from dialog
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let numberPages = document.getElementById("pages");
let isRead = document.getElementById("isread");
let submitBtn = document.getElementById("submit-book");

// storage and constructor

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// build book from html input
submitBtn.addEventListener("click", () => {
  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    numberPages.value,
    isRead.checked
  );

  library.push(newBook);
  dialog.reset();
  console.log(library);
});

function addToLibrary() {}
