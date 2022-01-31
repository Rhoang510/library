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
    this.read = read,
    this.info = function() {
        return [title, author, pages, read]
    }
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

function createBookCard() {
    const div = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const haveYouRead = document.createElement("button"); 
    const deleteBtn = document.createElement("button");
    
    div.classList.add("bookCard");
    haveYouRead.classList.add("readBtn");
    deleteBtn.classList.add("deleteBtn");
    
    newTitle.textContent = title.value;
    newAuthor.textContent = "By " + author.value;
    newPages.textContent = pages.value + " pages";
    deleteBtn.textContent = "Delete Book";

    if(read.checked === false) {
        haveYouRead.textContent = "Not Read";
        haveYouRead.style.backgroundColor = "#e04f63"
    } else if (read.checked === true) {
        haveYouRead.textContent = "Read";
        haveYouRead.style.backgroundColor = "#63da63";
    }

    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(haveYouRead);
    div.appendChild(deleteBtn);
    newBookContainer.appendChild(div);

    readBtn.addEventListener("click", () => {

    })
    deleteBtn.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
    });
}

function clearForm() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}

function openAddBookContainer() {
    newBook.style.display = "flex";
    // newBook.style.backdropFilter = "blur(5px)"
}

function removeAddBookContainer() {
    newBook.style.display = "none";
    // newBook.style.backdropFilter = "none"
}

addBtn.addEventListener("click", openAddBookContainer);
addBookBtn.addEventListener("click", () => {
    if (title.value === "" || author.value === "" || pages.value === "") {
        return; 
    } else {
    addBookToLibrary();
    createBookCard();
    clearForm();
    removeAddBookContainer();
    }
});

window.addEventListener("onclick", (e) => {
    if(e.target == newBook) {
        newBook.style.display = "none";
    }
});

