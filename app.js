//Express Server
const express = require('express');
const app = express();
const port = 3000;

//Importing the books.json file
const books = require('./data/books.json');

//Create a /all route to get all the books
app.get('/all', (req, res) => {
    res.json(books);
});


// Route to get the first book
app.get('/first', (req, res) => {
    res.json(books[0]);
});

// Route to get the last book
app.get('/last', (req, res) => {
    res.json(books[books.length - 1]);
});

//// Route to get the book at position 50
app.get("/middle", (req, res) => {
    const middleBook = books[(books.length / 2) - 0];
    res.json(middleBook);
});

// Path to get only the title of Dante Alighieri's book
app.get("/author/dante-alighieri", (req, res) => {
    const book = books.find((book) => book.author === "Dante Alighieri");
    res.json(book.title);
  });

// Route to get only the country from the Charles Dickens book
app.get("/country/charles-dickens", (req, res) => {
  const book = books.find((book) => book.author === "Charles Dickens");
  res.json(book.country);
});


// Route to obtain the pages and year of the book by Miguel de Cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((book) => book.author === "Miguel de Cervantes");
  res.json({
    pages: book.pages,
    year: book.year,
  });
});

// Route to obtain the number of books from Spain
app.get("/country/count/spain", (req, res) => {
    const booksFromSpain = books.filter((book) => book.country === "Spain");
    res.json(booksFromSpain.length);
});

// Route to check if there is at least one book from Germany
app.get("/country/at-least/germany", (req, res) => {
    const isBookFromGermanyExist = books.some((book) => book.country === "Germany");
    res.json(isBookFromGermanyExist);
});


// Path to check if all books are more than 200 pages
app.get("/pages/all-greater/200", (req, res) => {
    const isPagesGreaterThen200 = books.every((book) => book.pages > 200);
    res.json(isPagesGreaterThen200);
});

//Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})


