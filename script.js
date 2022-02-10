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

Book.prototype.toggleReadStatus = function(e) {
    if (this.read === true) {
        this.textContent = "Read";
        this.read = false;
    } else if(this.read === false) {
        this.textContent = "Not Read";
        this.read = true;
    }
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

function displayBooks() {
    container.textContent = "";
    for (i = 0; i < myLibrary.length; i++) {
        createBookCard();
    }
}

function createBookCard() {
    const bookCard = document.createElement("div");
    const buttons = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const readBtn = document.createElement("button"); 
    const deleteBtn = document.createElement("button");
    
    bookCard.classList.add("bookCard");
    buttons.classList.add("buttons");
    readBtn.classList.add("readBtn");
    deleteBtn.classList.add("deleteBtn");
    
    newTitle.textContent = myLibrary[i].title;
    newTitle.style.fontSize = "30px";
    newAuthor.textContent = "By " + myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages + " pages";
    deleteBtn.textContent = "Remove";
    
    if(myLibrary[i].read === true) {
        readBtn.textContent = "Read";
        readBtn.classList.add("btnRead");
    } else {
        readBtn.textContent = "Not Read";
        readBtn.classList.add("btnNotRead");
    }

    let readStatus = myLibrary[i].read;
    
    bookCard.setAttribute("id", i);
    readBtn.setAttribute("id", i);
    bookCard.appendChild(newTitle);
    bookCard.appendChild(newAuthor);
    bookCard.appendChild(newPages);
    bookCard.appendChild(buttons);
    buttons.appendChild(readBtn);
    buttons.appendChild(deleteBtn);
    container.appendChild(bookCard);
    
    readBtn.addEventListener("click", readStatus.toggleReadStatus);

    deleteBtn.addEventListener("click", () => {
        bookCard.style.display = "none";
        myLibrary.splice(`${bookCard.id}`, 1);
        displayBooks();
    });
}

function clearForm() {
    newBook.style.display = "none";
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
        addBookToLibrary();
        displayBooks();
        clearForm();
    }
});

window.addEventListener("click", function(e) {
    if(e.target == newBook) {
        newBook.style.display = "none";
    } 
});

