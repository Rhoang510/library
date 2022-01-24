let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let read = document.querySelector("#read");
const addBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");
const addBookBtn = document.querySelector(".addBookBtn")
let myLibrary = [];

// container.classList.toggle(".newBook");

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
    const newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);
}

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    
});