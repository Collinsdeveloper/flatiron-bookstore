const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", image: "https://eloquentjavascript.net/img/cover.jpg" },
    { title: "You Don't Know JS", author: "Kyle Simpson", image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg" }
  ]
};

const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

const bookList = document.getElementById("book-list");

bookStore.books.forEach(function(book) {
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;
  bookImage.style.width = "150px";

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  bookList.appendChild(bookContainer);
});