const libraryTable = document.getElementById("libraryTable");
const myLibrary = [];

function Book(name,author,pages){
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function DisplayBooks() {
  for(let i = 0; i< libraryTable.children.length; i++){
    libraryTable.children[0].remove()
  }
  for(let i = 0; i < myLibrary.length; i++){
    var newBookHolder = document.createElement("tr");
    var newBookName = document.createElement("th");
    var newBookAuthor = document.createElement("th");
    var newBookPages = document.createElement("th");
    newBookName.textContent = myLibrary[i].name;
    newBookAuthor.textContent = myLibrary[i].author;
    newBookPages.textContent = myLibrary[i].pages;
    libraryTable.appendChild(newBookHolder);
    newBookHolder.appendChild(newBookName);
    newBookHolder.appendChild(newBookAuthor);
    newBookHolder.appendChild(newBookPages);
  }
}

function addBookToLibrary(name, author, pages) {
  const newBook = new Book;
  newBook.name = name;
  newBook.author = author;
  newBook.pages = pages;
  myLibrary.push(newBook);
  DisplayBooks();
}
//after submit, have the inputs be put into the values of the consturtors had to go to bes
addBookToLibrary("JK", "Rowling", 111);

addBookToLibrary("Hi", "Text", 1);



