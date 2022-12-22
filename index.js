// array
let myLibrary = []; 

// dfk for what i needed it
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayLibrary();
}

//function to display librrary to cards
function displayLibrary() {
  const books = document.querySelector(".books");

  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
      removeDivs[i].remove();
  } 
 // loop over the array and diplay it in a card
  let index = 0;
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);


        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-Book-Button");
        removeBookButton.textContent = "Remove From Library";
        console.log("show me current array object inside foreach....", myLibrary);

        removeBookButton.dataset.linkedArray = index;
        console.log("show me dataset", removeBookButton.dataset.linkedArray);
        card.appendChild(removeBookButton);

        removeBookButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary () {
          let retriveBookToRemove = removeBookButton.dataset.linkedArray;
          console.log("attemp", parseInt(retriveBookToRemove));
          myLibrary.splice(parseInt(retriveBookToRemove), 1);
          card.remove();
          displayLibrary();
        }

        //create read status button and add class attribute for each array card 
        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("read-status-button");
        readStatusButton.textContent = "Toggle Read Status";

        //link the data attribute of the toggle read button to the array and card 
        readStatusButton.dataset.linkedArray = index;
        card.appendChild(readStatusButton);

        readStatusButton.addEventListener("click", toggleReadStatus);

        function toggleReadStatus() {
          let retriveBookToToggle = readStatusButton.dataset.linkedArray;
          Book.prototype = Object.create(Book.prototype);
          const toggleBook = new Book();  

          if(myLibrary[parseInt(retriveBookToToggle)].Read == "Yes") {
            toggleBook.Read = "No"
            myLibrary[parseInt(retriveBookToToggle)].Read = toggleBook.Read
          } else if (myLibrary[parseInt(retriveBookToToggle)].Read == "No") {
            toggleBook.Read = "Yes";
            myLibrary[parseInt(retriveBookToToggle)].Read = toggleBook.Read;
          }
          displayLibrary();
        }

      

    for(let key in myLibrarys) {
      console.log(`${key}: ${myLibrarys[key]}`);
      const para = document.createElement("p");
      para.textContent = (`${key}: ${myLibrarys[key]}`);
      card.appendChild(para);
      }


  index++;
  });
}

  displayLibrary();

  // Start Event listener/display form to add  new book to library 
  const addBookButton = document.querySelector(".add-book-btn")
  addBookButton.addEventListener("click", displayTheForm);

  function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
  }

  // Start Event listener/display input to array for new entry form    
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", intakeFromData); 

  // Transform from data to var for intake
  function intakeFromData() {
    let Title = document.getElementById("Title").value ;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

  // Break out if form is in incorrect format 
  if ((Title == "") || (Author == "") || (Pages == "") || (Read == "") ) {
    return;
  }

  //Call function to input the book data to array
  addBookToLibrary(Title, Author, Pages, Read);

  //Reset the form after succesfull submission
  document.getElementById("add-book").reset();
}

//Start event listener  for clear form button 
const clearButton = document.querySelector(".reset-btn");
clearButton.addEventListener("click", clearForm);

function clearForm() {
   document.getElementById("add-book").reset();
}





