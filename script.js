const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector("#read");
const addBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");
const newBook = document.querySelector(".newBook");
const addBookBtn = document.querySelector(".addBookBtn");
const newBookContainer = document.querySelector(".newBookContainer")
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
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

function clear() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
}

function createBookCard() {
    const div = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const checkbox = document.createElement("input"); 
    const deleteBtn = document.createElement("button");

    div.classList.add("bookCard");
    checkbox.classList.add("readBtn");
    deleteBtn.classList.add("deleteBtn");

    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    newPages.textContent = pages.value + " pages";
    deleteBtn.textContent = "Delete Book";

    checkbox.type = "checkbox";
    checkbox.name = "read";
    checkbox.value = "read";

    // if(!read.checked == true) {
    //     newRead.textContent = "Read";
    //     newRead.style.backgroundColor.green;
    // } else if(!read.checked == false) {
    //     newRead.textContent = "Not Read";
    //     newRead.style.backgroundColor.red;
    // }

    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(checkbox);
    div.appendChild(deleteBtn);
    newBookContainer.appendChild(div);
}

myLibrary.forEach(item => {

})
addBookBtn.addEventListener("click", () => {
    if (title.value === "" || author.value === "" || pages.value === "") {
        return; 
    } else {
    addBookToLibrary();
    createBookCard();
    clear();
    }
});

