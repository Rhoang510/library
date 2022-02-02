const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector("#read");
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");
const newBook = document.querySelector(".newBook");
const addBookBtn = document.querySelector(".addBookBtn");
const newBookContainer = document.querySelector(".newBookContainer");
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.updateReadStatus = function(e) {
    this.read = !this.read;
    if (this.read == true) {
        e.target.textContent = "Not Read";
        e.target.style.backgroundColor = "#e04f63";
    } else {
        e.target.textContent = "Read";
        e.target.style.backgroundColor = "#63da63";
    }
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
    createBookCard();
    // displayBooks();
}

function displayBooks() {
    const books = document.querySelectorAll(".bookCard");
        for (i = 0; i < myLibrary.length; i++) {
            createBookCard(myLibrary[i]);
    }
}
// displayBooks();

// function deleteBook(currentBook) {
//     myLibrary.splice(currentBook, 1);
// }

function createBookCard() {
    const bookCard = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const readBtn = document.createElement("button"); 
    const deleteBtn = document.createElement("button");
    
    bookCard.classList.add("bookCard");
    readBtn.classList.add("readBtn");
    deleteBtn.classList.add("deleteBtn");
    
    newTitle.textContent = title.value;
    newAuthor.textContent = "By " + author.value;
    newPages.textContent = pages.value + " pages";
    deleteBtn.textContent = "Remove";

    if(read.checked === false) {
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "#e04f63"
    } else if (read.checked === true) {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "#63da63";
    }

    // bookCard.setAttribute("data-number", )
    bookCard.appendChild(newTitle);
    bookCard.appendChild(newAuthor);
    bookCard.appendChild(newPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    container.appendChild(bookCard);
    
    readBtn.addEventListener("click", this.updateReadStatus)

    deleteBtn.addEventListener("click", () => {
        bookCard.style.display = "none";
        myLibrary.splice(myLibrary[i], 1)
    });
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}


addBtn.addEventListener("click", () => { newBook.style.display = "flex";});

addBookBtn.addEventListener("click", () => {
    if (title.value === "" || author.value === "" || pages.value === "") {
        return; 
    } else {
    newBook.style.display = "none";
    addBookToLibrary();
    clearForm();
    }
});

window.addEventListener("click", function(event) {
    if(event.target == newBook) {
        newBook.style.display = "none";
    } 
});

