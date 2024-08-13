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

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
      library.splice(book.index, 1); // we delete the element (book) at its index
      displayBooks(); // we update the display of the books so now the deleted book isn't shown
      library = library.filter((book, index) => {
        // we update the indexes of the remaining books, because we had a problem where we deleted a book then created another one and it wouldn't delete
        book.index = index;
        return true;
      });
    });
  });
}
