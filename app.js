const express = require("express");
const app = express();
const port = 3000;
const books = require("./data/books.json");

app.get("/all", (req, res) => {
  res.json(books);
});

app.get("/first", (req, res) => {
  const [firstBook] = books;

  res.json(firstBook);
});

app.get("/last", (req, res) => {
  const lastBook = books[books.length - 1];

  res.json(lastBook);
});

app.get("/middle", (req, res) => {
  const middleBook = books[parseFloat(books.length / 2)];

  res.json(middleBook);
});

app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find((book) => book.author === "Dante Alighieri");

  res.json(book.title);
});

app.get("/country/charles-dickens", (req, res) => {
  const book = books.find((book) => book.author === "Charles Dickens");

  res.json(book.country);
});

app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((book) => book.author === "Miguel de Cervantes");

  res.json({
    pages: book.pages,
    year: book.year,
  });
});

app.get("/country/count/spain", (req, res) => {
  const booksFromSpain = books.filter((book) => book.country === "Spain");

  res.json(booksFromSpain.length);
});

app.get("/country/at-least/germany", (req, res) => {
  const isBookFromGermanyExist = books.some((book) => book.country === "Germany");

  res.json(isBookFromGermanyExist);
});

app.get("/pages/all-greater/200", (req, res) => {
  const isPagesGreaterThen200 = books.every((book) => book.pages > 200);

  res.json(isPagesGreaterThen200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
