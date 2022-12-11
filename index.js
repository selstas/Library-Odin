// array
let myLibrary = []; 

// dfk for what i needed it
function Book (title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  /*this.info = function() {
    return (title + " ," + author + " ," + pages + " ," + "Have read yet: " + isRead)
  } */
}

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  
}

//function to display librrary to cards
function displayLibrary() {
  const books = document.querySelector(".books");
  

 // loop over the array and diplay it in a card
  myLibrary.forEach(myLibrary => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
      for(let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${myLibrary[key]}`);
        card.appendChild(para);
      }
  })


}

  addBookToLibrary("Hobbit", "J.R.R. Tolkien", 200, true );
  addBookToLibrary("360 Firenheit", "Orwell", 200, true );
  addBookToLibrary("Lord of the RIngs", "J.R.R. Tolkien", 200, true );
  addBookToLibrary("Harry Potter", "Rowling", 200, true );
  addBookToLibrary("Evgeniy Onegin", "A.S. Pushkin", 200, true );
  addBookToLibrary("War and Peace", "L.N. Tolstoy", 200, true );
  displayLibrary();


  // Start Event listener/display form to add  new book to library 
  const addBookButton = document.querySelector(".add-book-button")
  addBookButton.addEventListener("click", displayTheForm);

  function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
  }

  // Start Event listener/display input to array for new entry form    
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", intakeFromData); 

  // Transform from data to var for intake
  function intakeFromData() {
    let Title = document.getElementById("Title").value; 
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

  // Break out if form is in incorrect format 
  if ((Title = "") || (Author = "") || (Pages = "") || (Read = "") ) {
    return;
  }

  //Call function to input the book data to array
  addBookToLibrary(Title, Author, Pages, Read);

  //Reset the form after succesfull submission
  document.getElementById("add-book").reset();
}

//Start event listener  for clear form button 
const clearButton = document.getElementById(".reset-btn");
clearButton.addEventListener("click", clearForm);

function clearForm() {
   document.getElementById("add-book").reset();
}





