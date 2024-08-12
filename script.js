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
let bookCount = 0;
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = bookCount;
  bookCount++;
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
  displayBooks();
  console.log(library);

  //reset form and close it
  bookTitle.value = "";
  bookAuthor.value = "";
  numberPages.value = "";
  isRead.checked = false;
  dialog.close();
});

//displaying the books
function displayBooks() {
  let cardsContainer = document.querySelector(".cards");
  let addBookDiv = document.querySelector(".add");

  cardsContainer.innerHTML = "";
  if (addBookDiv) {
    cardsContainer.appendChild(addBookDiv);
  }
  library.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    card.appendChild(title);

    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    let read = document.createElement("p");
    read.textContent = `Read: ${book.read}`;
    card.appendChild(read);

    cardsContainer.appendChild(card);
  });
}
