const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector("#read");
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const newBook = document.querySelector(".newBook");
const addBookBtn = document.querySelector(".addBookBtn");
const newBookContainer = document.querySelector(".newBookContainer");
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleReadStatus = function(e) {
    this.read = !this.read;
    // if(this.read === false) {
    //     e.target.parentNode.textContent = "Not Read";
    // } else {
    //     e.target.parentNode.textContent = "Read";
    // }
}

let samples = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pages: "520",
        read: false 
    },
    {
        title: "Game of Thrones",
        author: "George R.R. Martin",
        pages: "694",
        read: true 
    },
    {
        title: "Goosebumps",
        author: "R.L. Stine",
        pages: "256",
        read: false 
    }
];

function addSamples() {
    samples.forEach((book) => {
        const newBook = new Book(
            book.title,
            book.author,
            book.pages,
            book.read
        );
        myLibrary.push(newBook);
    });
    displayBooks();    
}
addSamples();

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
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const readBtn = document.createElement("button"); 
    const deleteBtn = document.createElement("button");
    
    bookCard.classList.add("bookCard");
    newTitle.classList.add("newTitle");
    buttons.classList.add("buttons");
    readBtn.classList.add("readBtn");
    deleteBtn.classList.add("deleteBtn");
    
    newTitle.textContent = myLibrary[i].title;
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

    const readStatus = myLibrary[i];
    
    bookCard.setAttribute("id", i);
    bookCard.append(newTitle, newAuthor, newPages, buttons);
    buttons.append(readBtn, deleteBtn);
    container.appendChild(bookCard);
    
    // readBtn.addEventListener("click", readStatus.toggleReadStatus);
    readBtn.addEventListener("click", () => {
        readStatus.toggleReadStatus();
    })

    deleteBtn.addEventListener("click", () => {
        myLibrary.splice(`${bookCard.id}`, 1);
        displayBooks();
    });
}

function clearForm() {
    modal.style.display = "none";
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}


addBtn.addEventListener("click", () => { modal.style.display = "flex";});

addBookBtn.addEventListener("click", (e) => {
    if (title.value === "" || author.value === "" || pages.value === "") {
        return; 
    } else {
        e.preventDefault();
        addBookToLibrary();
        displayBooks();
        clearForm();
    }
});

window.addEventListener("click", function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    } 
});

