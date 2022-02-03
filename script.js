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

// Book.prototype.updateReadStatus = function() {
//     this.read = !this.read;
//     if (this.read == true) {
//         this.textContent = "Not Read";
//         this.style.backgroundColor = "#e04f63";
//         this.read == false;
//     } else {
//         this.textContent = "Read";
//         this.style.backgroundColor = "#63da63";
//         this.read == true;
//     }
// }

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);
}

function displayBooks() {
    container.textContent = "";
    // const books = querySelector(".bookCard");
    // books.forEach(book => container.removeChild(book));
    for (i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
        // i--;
    }
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p"); 
    const newPages = document.createElement("p"); 
    const readBtn = document.createElement("button"); 
    const deleteBtn = document.createElement("button");

    function toggleRead () {
        if (readBtn == true) {
            readBtn = false;
            readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "#e04f63"
        } else if (readBtn == false) {
            readBtn = true;
            readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "#63da63";
        };
    };
    
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

    bookCard.setAttribute("id", myLibrary.indexOf(book));
    bookCard.appendChild(newTitle);
    bookCard.appendChild(newAuthor);
    bookCard.appendChild(newPages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    container.appendChild(bookCard);
    
    readBtn.addEventListener("click", toggleRead);

    deleteBtn.addEventListener("click", () => {
        bookCard.style.display = "none";
        myLibrary.splice(myLibrary.indexOf(book), 1);
        // displayBooks();
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

