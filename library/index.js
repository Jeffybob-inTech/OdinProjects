const libraryTable = document.getElementById("libraryTable");
const bookInput = document.getElementById("bookInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput");
const submitBook = document.getElementById("submitBook");
const tableRow = document.querySelector("tr")

const myLibrary = [];

class Book{
  constructor(name,author,pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
  }
}
function checkingLibraryForDuplicates(){
  for(let i = 0; i < myLibrary.length; i++){
    for(let x = 0; x <myLibrary.length; x++){
      let numOfOccurances = 0;
      console.log(numOfOccurances)
      for(let n = 0; n <3; n++){ 
        console.log(myLibrary)
        if(x != i && Object.entries(myLibrary[i])[n][1] === Object.entries(myLibrary[x])[n][1]){
          console.log("x: " + x +" i: " + i + " myLibrary 1 = " + Object.entries(myLibrary[i])[n][1] +" myLibrary 2 =" + Object.entries(myLibrary[x])[n][1])
         numOfOccurances++;
        }
        if(numOfOccurances == 3){
          myLibrary.splice(x,1)
        }
        console.log(numOfOccurances)
      }
      
    }
  }
  console.log(myLibrary)
}
function DisplayBooks() {
  checkingLibraryForDuplicates()
  while(libraryTable.children.length > 0){
    libraryTable.children[0].remove()
  }
  console.log("Library length :" + libraryTable.children.length)
  for(let i = 0; i < myLibrary.length; i++){
    var newBookHolder = document.createElement("tr");
    var newBookName = document.createElement("th");
    var newBookAuthor = document.createElement("th");
    var newBookPages = document.createElement("th");
    newBookHolder.setAttribute("id",JSON.stringify("newBookHolder" + libraryTable.children.length))
    newBookName.textContent = "Title: " + myLibrary[i].name;
    newBookAuthor.textContent ="Author: " + myLibrary[i].author;
    newBookPages.textContent = "Pages: " + myLibrary[i].pages;
    libraryTable.appendChild(newBookHolder);
    newBookHolder.appendChild(newBookName);
    newBookHolder.appendChild(newBookAuthor);
    newBookHolder.appendChild(newBookPages);
    console.log("New library length :" + libraryTable.children.length)
  }
}
//try{
let numOfClicks = 0;
  libraryTable.addEventListener("click", function(event) {
    numOfClicks++;
  if(event.target.tagName.toLowerCase() === 'table'){
    for(let i = 0; i < myLibrary.length; i ++){
      if(Object.entries(myLibrary[i])[0][1] === event.target.children[0].innerHTML.substring(7) &&Object.entries(myLibrary[i])[1][1] === event.target.children[1].innerHTML.substring(8) &&(Object.entries(myLibrary[0])[2][1] === Number(event.target.children[2].innerHTML.substring(7)))){
        myLibrary.splice(i,1)
        console.log("made it here")
        
      }
    }
  }
  if(event.target.tagName.toLowerCase() === 'th'){
    for(let i = 0; i < myLibrary.length; i ++){
      console.log("Library length " + myLibrary.length)
      console.log("table length " + event.target.parentNode.children.length)
      console.log("run through: " + i)
      if(Object.entries(myLibrary[i])[0][1] === event.target.parentNode.children[0].innerHTML.substring(7)&&Object.entries(myLibrary[i])[1][1] === event.target.parentNode.children[1].innerHTML.substring(8)&&Object.entries(myLibrary[i])[2][1] === event.target.parentNode.children[2].innerHTML.substring(7)){
        myLibrary.splice(i,1)
        console.log("made it here")
        console.log(myLibrary.length)
      }
    }
    console.log("here")
  }
  //console.log(Object.entries(myLibrary[2])[0][1] === event.target.parentNode.children[0].innerHTML.substring(7));
  //console.log(Object.entries(myLibrary[2])[1][1] === event.target.parentNode.children[1].innerHTML.substring(8));
  //console.log(Object.entries(myLibrary[2])[2][1] === event.target.parentNode.children[2].innerHTML.substring(7));
  
  //console.log("checknig this " +( Object.entries(myLibrary[1])[0][1] === 'n'))
  //console.log("and this " + event.target.parentNode.children[0].innerHTML.substring(7))// &&Object.entries(myLibrary[1])[1][1] === event.target.parentNode.children[1].innerHTML.substring(8) &&(Object.entries(myLibrary[1])[2][1] === Number(event.target.parentNode.children[2].innerHTML.substring(7))))
  //console.log("clicked" + event.target.tagName.toLowerCase() + " " + event.target.parentNode.children[2].innerHTML.substring(7))
  //console.log((Object.entries(myLibrary[i])[0][1] === event.target.parentNode.children[0].innerHTML.substring(7)) &&(Object.entries(myLibrary[i])[1][1] === event.target.parentNode.children[1].innerHTML.substring(8)) &&(Object.entries(myLibrary[i])[2][1] === Number(event.target.parentNode.children[2].innerHTML.substring(7))))
  console.log("Num clicks: " + numOfClicks)
  DisplayBooks()
  //thisBook = document.getElementById(this.parentNode.getAttribute("id"))
  //thisBook.style.display = "none";
})
//}
//catch(error){}
//
function addBookToLibrary(name, author, pages) {
  const newBook = new Book;
  newBook.name = name;
  newBook.author = author;
  newBook.pages = pages;
  myLibrary.push(newBook);
  DisplayBooks();
}
submitBook.addEventListener("click", function(){
  !bookInput.checkValidity() ? alert ("Must have a title for the book"):
    !authorInput.checkValidity()? alert ("Must have a author for the book"):
      !pagesInput.checkValidity()? alert ("Must have a number of pages for the book"):
        addBookToLibrary(bookInput.value, authorInput.value, pagesInput.value);
})
//after submit, have the inputs be put into the values of the consturtors had to go to bes
//addBookToLibrary("first", "ahh", 2)
//addBookToLibrary("hi", "p",3)
//addBookToLibrary("second", "boo", 3)



