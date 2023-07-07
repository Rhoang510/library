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

// class Book {
//     constructor(title, author, pages, read) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//     }
//     toggleReadStatus(e) {
//         this.read = !this.read;
//     }
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
    toggleReadStatus(e) {
        this.read = !this.read;
    }
}


let samples = [
    {
        title: "Harry Potter and the Sorceror's Stone",
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
    
    if(myLibrary[i].title.length >= 25) {
        newTitle.style.fontSize = "20px";
    } if(myLibrary[i].title.length >= 35) {
        newTitle.style.fontSize = "16px";
    }
    
    if(myLibrary[i].read === true) {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "rgb(29, 226, 29)";
    } else {
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "rgb(228, 30, 30)";
    }

    const readStatus = myLibrary[i];
    
    bookCard.setAttribute("id", i);
    bookCard.append(newTitle, newAuthor, newPages, buttons);
    buttons.append(readBtn, deleteBtn);
    container.appendChild(bookCard);
    
    readBtn.addEventListener("click", () => {
        readStatus.toggleReadStatus();
        displayBooks();
    });

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