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

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

function displayBooks() {

}

// function findBook(title) {
//     if(myLibrary.length === 0)
// }

function deleteBook(currentBook) {
    myLibrary.splice(currentBook, 1);
}

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
        haveYouRead.textContent = "Read";
        haveYouRead.style.backgroundColor = "#63da63";
    }

    bookCard.appendChild(newTitle);
    bookCard.appendChild(newAuthor);
    bookCard.appendChild(newPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    container.appendChild(bookCard);

    deleteBtn.addEventListener("click", () => {
        bookCard.style.display = "none";
        deleteBook();
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
    createBookCard();
    clearForm();
    }
});

window.addEventListener("onclick", (e) => {
    if(e.target == newBook) {
        newBook.style.display = "none"
    } 
});

