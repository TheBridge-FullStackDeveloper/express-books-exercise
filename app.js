const express = require("express");
const app = express();
const port = 3000;
const books = require("./data/books.json");

app.get("/all", (req, res) => {
  res.send(books);
});

//Create a route /first to fetch the first book
app.get("/first", (req, res) => {
  res.send(books[0]);
});

//Create a route /last to fetch the last book
app.get("/last", (req, res) => {
  res.send(books[books.length - 1]);
});

//Crate a route /middle to fetch the book in the middle (number 50 in the array)
app.get("/middle", (req, res) => {
  let middleNumber = books.length / 2;
  res.send(books[middleNumber]);
});

//Create a route /author/dante-alighieri to fetch ONLY THE TITLE of Dante Alighieri's book
app.get("/author/dante-alighieri", (req, res) => {
  books.forEach((book) => {
    if (book["author"] === "Dante Alighieri") {
      res.send(book["title"]);
      return;
    }
  });
});

//Create a route /country/charles-dickens to fetch ONLY THE COUNTRY of Charles Dickens book
app.get("/country/charles-dickens", (req, res) => {
    books.forEach((book) => {
      if (book["author"] === "Charles Dickens") {
        res.send(book["country"]);
        return;
      }
    });
  });

//Create a route /year&pages/cervantes to fetch PAGES AND YEAR of Miguel de Cervantes book, Response example: { pages: ..., year: ... }

//Create a route /country/count/spain to fetch THE NUMBER OF BOOK from Spain

//Create a route /country/at-least/germany to fetch TRUE OR FALSE depending on if there is or not a book from Germany

//Create a route /pages/all-greater/200 to fetch TRUE OR FALSE depending on if every books contain more then 200 pages

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
